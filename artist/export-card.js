// Exports a rendered <composited-card> element to a self-contained,
// transparent SVG file.
//
// The card is a Shadow DOM tree of several stacked <picture>/<img> layers
// plus two nested custom elements (<autofit-description-text>,
// <card-icon>), each with their own shadow root. None of that is visible to
// a plain DOM serializer, so this recursively "flattens" every shadow root
// into plain markup, inlines each element's own CSS (extracted from
// adoptedStyleSheets, since that's how lit-element 2.x attaches styles in
// browsers that support Constructable StyleSheets), and bakes every image
// into a data: URI. The border-layer images and card fonts are hosted on
// images.godsunchained.com with no CORS headers, so they're routed through
// the /proxy endpoint (see webpack.artist.config.js) first.
//
// This originally tried to rasterize the result to a PNG via
// <canvas>.toBlob(), but browsers unconditionally treat any SVG containing
// <foreignObject> as tainting the canvas on export, regardless of whether
// its content is actually fully self-contained (verified empirically —
// zero remaining external references, still tainted). That's a browser
// security policy, not something fixable by inlining harder, so this
// exports the SVG directly instead — same real transparency, no canvas
// step, no tainting possible. Any browser can open it directly, and it can
// be converted to PNG with a free tool (eg. Inkscape) if needed.
//
// Font fidelity: "Unchained" (name/mana/attack/health/tribe text) and
// "cardi-cons" (the set-icon ligature) are embedded. "Open Sans" (effect
// text) is not — it's dynamically subsetted per-browser by Google Fonts,
// which isn't practical to replicate byte-for-byte here, so effect text
// falls back to the CSS's own generic sans-serif fallback instead.

const FONT_URLS = {
  unchained: 'https://images.godsunchained.com/fonts/unchained/unchained.woff2',
  cardiCons: 'https://images.godsunchained.com/fonts/cardi-cons/cardi-cons.woff',
};

function isSameOrigin(url) {
  try {
    return new URL(url, window.location.href).origin === window.location.origin;
  } catch (err) {
    return true;
  }
}

function proxiedUrl(url) {
  return isSameOrigin(url) ? url : `/proxy?url=${encodeURIComponent(url)}`;
}

function urlToDataUri(url) {
  return fetch(proxiedUrl(url))
    .then((res) => res.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        }),
    );
}

async function buildFontFaceCss() {
  const [unchained, cardiCons] = await Promise.all([
    urlToDataUri(FONT_URLS.unchained),
    urlToDataUri(FONT_URLS.cardiCons),
  ]);
  return `
    @font-face {
      font-family: "Unchained";
      src: url("${unchained}") format("woff2");
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "cardi-cons";
      src: url("${cardiCons}") format("woff");
      font-weight: normal;
      font-style: normal;
    }
  `;
}

// lit-element 2.x uses Constructable StyleSheets (shadowRoot.adoptedStyleSheets)
// in browsers that support it, rather than a literal <style> child node —
// so a plain childNodes walk won't find the CSS at all.
function extractAdoptedCss(shadowRoot) {
  const sheets = shadowRoot.adoptedStyleSheets || [];
  if (sheets.length) {
    return sheets
      .map((sheet) => Array.from(sheet.cssRules).map((rule) => rule.cssText).join('\n'))
      .join('\n');
  }
  return Array.from(shadowRoot.querySelectorAll('style'))
    .map((style) => style.textContent)
    .join('\n');
}

async function flattenElement(el, cssChunks) {
  const clone = document.createElement(el.tagName.toLowerCase());
  Array.from(el.attributes || []).forEach((attr) => {
    if (attr.name === 'srcset' || attr.name === 'sizes') return;
    clone.setAttribute(attr.name, attr.value);
  });

  const childSource = el.shadowRoot ? el.shadowRoot.childNodes : el.childNodes;
  // Once flattened there's no shadow boundary left for :host to mean
  // anything — rewrite it to target this element by its own tag name.
  // Applies both to adoptedStyleSheets CSS and to per-instance <style>
  // tags rendered directly in a component's template (eg.
  // autofit-description-text embeds its own :host {...} block that way,
  // not via adoptedStyleSheets, for its dynamic per-render positioning).
  const hostTagName = el.shadowRoot ? el.tagName.toLowerCase() : null;
  if (el.shadowRoot) {
    const css = extractAdoptedCss(el.shadowRoot);
    if (css) cssChunks.push(css.replace(/:host/g, hostTagName));
  }
  for (const child of Array.from(childSource)) {
    // eslint-disable-next-line no-await-in-loop
    await appendFlattened(clone, child, cssChunks, hostTagName);
  }

  if (el.tagName === 'IMG') {
    const src = el.currentSrc || el.src;
    if (src) {
      try {
        clone.setAttribute('src', await urlToDataUri(src));
      } catch (err) {
        // leave this one image broken rather than fail the whole export
      }
    }
  }

  return clone;
}

async function appendFlattened(parent, node, cssChunks, hostTagName) {
  if (node.nodeType === Node.TEXT_NODE) {
    parent.appendChild(document.createTextNode(node.textContent));
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;

  if (node.tagName === 'STYLE') {
    const styleClone = document.createElement('style');
    styleClone.textContent = hostTagName ? node.textContent.replace(/:host/g, hostTagName) : node.textContent;
    parent.appendChild(styleClone);
    return;
  }

  if (node.tagName === 'PICTURE') {
    // Drop the <source> candidates — the exact resource is already baked
    // in via currentSrc, no need to re-negotiate format/size for the
    // export — but keep the <picture> element itself: its positioning CSS
    // class (eg. "card__artwork") lives on the <picture>, not the <img>.
    const img = node.querySelector('img');
    const pictureClone = document.createElement('picture');
    Array.from(node.attributes || []).forEach((attr) => pictureClone.setAttribute(attr.name, attr.value));
    if (img) pictureClone.appendChild(await flattenElement(img, cssChunks));
    parent.appendChild(pictureClone);
    return;
  }

  parent.appendChild(await flattenElement(node, cssChunks));
}

export async function exportCardAsSvg(cardElement) {
  const rect = cardElement.getBoundingClientRect();
  const width = Math.round(rect.width);
  const height = Math.round(rect.height);
  if (!width || !height) throw new Error('card has no rendered size to export');

  const cssChunks = [];
  const [flattenedCard, fontCss] = await Promise.all([
    flattenElement(cardElement, cssChunks),
    buildFontFaceCss(),
  ]);
  flattenedCard.setAttribute('style', `width:${width}px;height:${height}px;display:flex;`);

  // outerHTML follows HTML serialization rules (void elements like <img>
  // never self-close), which is invalid inside an XML/SVG document.
  // XMLSerializer follows XML rules instead — self-closes empty elements,
  // which foreignObject content requires.
  const flattenedMarkup = new XMLSerializer().serializeToString(flattenedCard);
  const styleEl = document.createElement('style');
  styleEl.textContent = `${fontCss}\n${cssChunks.join('\n')}`;
  const styleMarkup = new XMLSerializer().serializeToString(styleEl);

  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;">
          ${styleMarkup}
          ${flattenedMarkup}
        </div>
      </foreignObject>
    </svg>
  `;

  const parserErrorEl = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml').querySelector('parsererror');
  if (parserErrorEl) {
    throw new Error(`generated SVG is not valid XML: ${parserErrorEl.textContent.slice(0, 300)}`);
  }

  return new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
}
