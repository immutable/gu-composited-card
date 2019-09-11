import { LitElement, html, customElement, property } from 'lit-element';
import html2canvas from 'html2canvas';

import { getStyles } from './styles';

function cloneShadow(shadow) {
  const frag = document.createDocumentFragment();

  var nodes = [...shadow.childNodes];
  nodes.forEach(node => {
    node.remove();
    frag.appendChild(node.cloneNode(true));
    shadow.appendChild(node);
  });

  return frag;
}

@customElement('demo-app')
export class InteractiveDemo extends LitElement {
  @property() currentProtoId = 101;
  @property() currentQuality = 0;

  static get styles() {
    return getStyles();
  }

  screenshot($ev) {
    $ev.preventDefault();

    // @NOTE: Html2canvas doesnt currently support shadow-dom capturing.
    // Thus, we have to temporarily re-render the web component into the dom,
    // so that it can be screen-captured
    const renderContainer = document.querySelector(
      '.compositedCardDomRender',
    ) as HTMLElement;
    const compositedCard = this.shadowRoot.querySelector('composited-card');
    renderContainer.appendChild(cloneShadow(compositedCard.shadowRoot));
    html2canvas(renderContainer, {
      backgroundColor: null,
      useCORS: true,
      allowTaint: true,
    }).then(canvas => {
      document.body.append(canvas);
      // const a = document.createElement('a');
      // a.href = canvas.toDataURL('image/png');
      // a.download = `${this.currentProtoId}-q${this.currentQuality}.png`;
      // a.click();
    });
  }

  render() {
    return html`
      <h1>app !!!</h1>

      <input
        type="text"
        value=${this.currentProtoId}
        @keyup=${e => (this.currentProtoId = e.target.value)}
      />

      <input
        type="range"
        min="0"
        max="8"
        value=${this.currentQuality}
        @change=${e => (this.currentQuality = e.target.value)}
      />

      <button @click="${this.screenshot}">screenshot</button>

      <composited-card
        protoId=${this.currentProtoId}
        quality=${this.currentQuality}
        responsiveSrcsetSizes="90vw"
      ></composited-card>
    `;
  }
}
