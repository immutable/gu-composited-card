// Exports a rendered <composited-card> element to native SVG (and PNG).
//
// Earlier versions used <foreignObject> to embed real HTML/CSS, reusing the
// browser's own layout for free. That hit two hard walls:
//  1. Any SVG containing foreignObject is treated as tainting a <canvas> on
//     export, unconditionally — even with zero remaining external
//     references, fully self-contained (confirmed empirically) — so PNG
//     export via canvas.toBlob() was blocked outright.
//  2. foreignObject's HTML content is only rendered by real browser
//     engines. Figma, Inkscape, rsvg-convert etc. implement the *native*
//     SVG paint model (rect/image/text/path) and either skip foreignObject
//     entirely or render it blank — so the file was only ever viewable in
//     a browser tab.
//
// This version avoids foreignObject entirely: every image layer becomes a
// native SVG <image>, every piece of text becomes a native SVG <text>,
// positioned and styled by reading the already-rendered live DOM directly
// (getBoundingClientRect + getComputedStyle) rather than re-implementing
// CSS layout by hand. That's portable to any SVG-compliant tool, and since
// the taint rule is specifically about foreignObject's presence rather than
// content, it also unblocks real canvas-based PNG export again.
//
// Font fidelity: "Unchained" (name/mana/attack/health/tribe text) and
// "cardi-cons" (the set-icon ligature) are embedded via a plain SVG
// @font-face (not inside foreignObject, so it's part of the actual SVG
// spec). "Open Sans" (effect text) is not — it's dynamically subsetted
// per-browser by Google Fonts, impractical to replicate byte-for-byte, so
// effect text uses the CSS's own generic sans-serif fallback instead.

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

function escapeXmlText(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeXmlAttr(str) {
  return escapeXmlText(str).replace(/"/g, '&quot;');
}

function applyTextTransform(text, transform) {
  if (transform === 'capitalize') return text.replace(/\b\w/g, (c) => c.toUpperCase());
  if (transform === 'uppercase') return text.toUpperCase();
  if (transform === 'lowercase') return text.toLowerCase();
  return text;
}

// SVG <text> doesn't auto-wrap, so multi-line text (the effect/description
// text) needs its actual browser-computed visual lines extracted, rather
// than reimplementing word-wrap by hand. Splits into words (keeping a
// widow-prevention &nbsp; glued to its neighbor, since it's not a regular
// space), measures each word's rect via Range, then groups words sharing a
// "top" into lines.
function extractWrappedLines(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let n;
  while ((n = walker.nextNode())) textNodes.push(n);
  if (!textNodes.length) return [];

  const words = [];
  textNodes.forEach((textNode) => {
    const content = textNode.textContent;
    let start = 0;
    for (let i = 0; i <= content.length; i++) {
      const atBoundary = i === content.length || content[i] === ' ';
      if (atBoundary) {
        if (i > start) words.push({ node: textNode, start, end: i, text: content.slice(start, i) });
        start = i + 1;
      }
    }
  });
  if (!words.length) return [];

  const range = document.createRange();
  const wordRects = words.map((w) => {
    range.setStart(w.node, w.start);
    range.setEnd(w.node, w.end);
    return { text: w.text, rect: range.getBoundingClientRect() };
  });

  const lines = [];
  wordRects.forEach((w) => {
    const line = lines.find((l) => Math.abs(l.top - w.rect.top) < 2);
    if (line) {
      line.words.push(w.text);
      line.left = Math.min(line.left, w.rect.left);
      line.right = Math.max(line.right, w.rect.right);
      line.bottom = Math.max(line.bottom, w.rect.bottom);
    } else {
      lines.push({ top: w.rect.top, bottom: w.rect.bottom, left: w.rect.left, right: w.rect.right, words: [w.text] });
    }
  });

  return lines
    .sort((a, b) => a.top - b.top)
    .map((l) => ({ top: l.top, bottom: l.bottom, left: l.left, right: l.right, text: l.words.join(' ') }));
}

// SVG's dominant-baseline="hanging" (used to align by the top of the line
// rather than doing baseline math by hand) isn't reliably implemented —
// it rendered noticeably higher than the glyphs' actual top edge. Instead,
// measure the real font ascent via Canvas's TextMetrics (which reflects
// the exact font/size actually used) and position by the standard
// alphabetic baseline, which every SVG renderer supports correctly.
//
// Built from the individual longhand properties rather than the
// getComputedStyle(...).font shorthand — that shorthand can silently
// compute to an empty string for some elements (eg. card-icon's ligature
// span) if not every sub-property cleanly round-trips, and ctx.font
// silently no-ops on an empty string, leaving canvas at its 10px sans-serif
// default and producing a wildly wrong ascent.
let measureCanvasCtx = null;
function getFontAscent(cs, fontSize) {
  if (!measureCanvasCtx) measureCanvasCtx = document.createElement('canvas').getContext('2d');
  const weight = cs.fontWeight && cs.fontWeight !== 'normal' ? `${cs.fontWeight} ` : '';
  measureCanvasCtx.font = `${weight}${cs.fontSize} ${cs.fontFamily}`;
  const metrics = measureCanvasCtx.measureText('Hg');
  return metrics.fontBoundingBoxAscent || metrics.actualBoundingBoxAscent || fontSize * 0.8;
}

function emitTextElements(el, cardRect) {
  const cs = getComputedStyle(el);
  const fontSize = parseFloat(cs.fontSize);
  if (!fontSize) return '';
  const lines = extractWrappedLines(el);
  if (!lines.length) return '';

  const hasShadow = cs.textShadow && cs.textShadow !== 'none';
  const strokeAttrs = hasShadow
    ? ` stroke="black" stroke-width="${(fontSize * 0.09).toFixed(2)}" paint-order="stroke fill"`
    : '';
  const ascent = getFontAscent(cs, fontSize);

  return lines
    .map((line) => {
      const text = applyTextTransform(line.text, cs.textTransform);
      const x = (line.left + line.right) / 2 - cardRect.left;
      const y = line.top - cardRect.top + ascent;
      return `<text x="${x.toFixed(2)}" y="${y.toFixed(2)}" text-anchor="middle" font-family="${escapeXmlAttr(cs.fontFamily)}" font-size="${fontSize.toFixed(2)}" font-weight="${cs.fontWeight}" fill="${cs.color}"${strokeAttrs}>${escapeXmlText(text)}</text>`;
    })
    .join('\n');
}

async function emitImageElement(img, cardRect) {
  const rect = img.getBoundingClientRect();
  if (!rect.width || !rect.height) return '';
  const src = img.currentSrc || img.src;
  if (!src) return '';

  let href;
  try {
    href = await urlToDataUri(src);
  } catch (err) {
    return '';
  }

  const cs = getComputedStyle(img);
  // object-fit:cover crops-to-fill, matched by SVG's "slice"; the default
  // (no object-fit, ie. CSS "fill") stretches, matched by "none".
  const preserveAspectRatio = cs.objectFit === 'cover' ? 'xMidYMid slice' : 'none';
  // NOTE: deliberately not copying cs.transform here — getBoundingClientRect()
  // already reflects any CSS transform (eg. the frame layers' small
  // translate(4.3%, 0.2%) crop nudge) in the rect below, so re-applying it
  // via an SVG transform attribute would double the shift.

  const x = rect.left - cardRect.left;
  const y = rect.top - cardRect.top;
  return `<image x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${rect.width.toFixed(2)}" height="${rect.height.toFixed(2)}" href="${href}" preserveAspectRatio="${preserveAspectRatio}"/>`;
}

// Walks the card's shadow tree (and nested shadow roots, eg.
// autofit-description-text/card-icon) to collect paint-ordered SVG parts.
// Generic by structure rather than hardcoded class names, since
// compositionVersion 1 vs 2 produce different DOM shapes but the same
// class names/leaf-text pattern either way.
async function collectSvgParts(el, cardRect, parts) {
  if (el.shadowRoot) {
    for (const child of Array.from(el.shadowRoot.children)) {
      // eslint-disable-next-line no-await-in-loop
      await collectSvgParts(child, cardRect, parts);
    }
    return;
  }

  if (el.tagName === 'STYLE' || el.tagName === 'SCRIPT') return;

  if (el.tagName === 'PICTURE') {
    const img = el.querySelector('img');
    if (img) parts.push(await emitImageElement(img, cardRect));
    return;
  }
  if (el.tagName === 'IMG') {
    parts.push(await emitImageElement(el, cardRect));
    return;
  }

  const hasDirectText = Array.from(el.childNodes).some(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0,
  );
  const hasElementChildren = el.children.length > 0;

  // A leaf with its own direct text (not just wrapping further elements) —
  // eg. .card__manaText, .card__nameText__inner, the cardi-cons <i>, or
  // autofit-description-text's .centered.
  if (hasDirectText && !hasElementChildren) {
    parts.push(emitTextElements(el, cardRect));
    return;
  }

  for (const child of Array.from(el.children)) {
    // eslint-disable-next-line no-await-in-loop
    await collectSvgParts(child, cardRect, parts);
  }
}

async function buildSvgMarkup(cardElement) {
  const cardRect = cardElement.getBoundingClientRect();
  const width = Math.round(cardRect.width);
  const height = Math.round(cardRect.height);
  if (!width || !height) throw new Error('card has no rendered size to export');

  const parts = [];
  await collectSvgParts(cardElement, cardRect, parts);
  const fontCss = await buildFontFaceCss();

  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <style>${fontCss}</style>
  ${parts.filter(Boolean).join('\n  ')}
</svg>`;

  const parserErrorEl = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml').querySelector('parsererror');
  if (parserErrorEl) {
    throw new Error(`generated SVG is not valid XML: ${parserErrorEl.textContent.slice(0, 300)}`);
  }

  return { svgMarkup, width, height };
}

export async function exportCardAsSvg(cardElement) {
  const { svgMarkup } = await buildSvgMarkup(cardElement);
  return new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
}

export async function exportCardAsPng(cardElement) {
  const { svgMarkup, width, height } = await buildSvgMarkup(cardElement);
  const svgUrl = URL.createObjectURL(new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' }));

  try {
    const img = new Image();
    img.width = width;
    img.height = height;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject(new Error('failed to rasterize the exported svg'));
      img.src = svgUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(img, 0, 0, width, height);

    return await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('canvas export failed (possibly a tainted canvas)'));
      }, 'image/png');
    });
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}
