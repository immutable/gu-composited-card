import { LitElement, html, customElement, property } from 'lit-element';
import html2canvas from 'html2canvas';
import * as saveAs from 'file-saver';

import { qualities } from '../src/composited-card';

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
    const shadowDomCard = this.shadowRoot.querySelector(
      'composited-card',
    ) as HTMLElement;
    const tempRenderHolder = document.querySelector('.tempRenderHolder');
    const currentWidth = shadowDomCard.offsetWidth;
    const currentHeight = shadowDomCard.offsetHeight;

    // @NOTE: Html2canvas doesnt currently support piercing the shadowdom.
    // Thus, we have to temporarily re-render the web component into the dom,
    // so that it can be screen-captured
    const cardRenderContainer = document.querySelector(
      '.compositedCardDomRender',
    ) as HTMLElement;
    cardRenderContainer.appendChild(cloneShadow(shadowDomCard.shadowRoot));
    cardRenderContainer.style.width = `${currentWidth}px`;
    cardRenderContainer.style.height = `${currentHeight}px`;
    html2canvas(cardRenderContainer, {
      backgroundColor: 'transparent',
      useCORS: true,
      onclone: dom => {
        const cardRender = dom.querySelector('.compositedCardDomRender');
        cardRender.style.opacity = 1;
      },
    }).then(canvas => {
      tempRenderHolder.appendChild(canvas);
      canvas.toBlob(blob => {
        saveAs(
          blob,
          `${this.currentProtoId}-${qualities[this.currentQuality]}.png`,
        );
      }, 'image/png');

      // @TODO: cleanup elements:
    });
  }

  render() {
    return html`
      <header class="appHeader">moo cow</header>

      <main class="appContainer">
        <div class="appContainer__controls">
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
        </div>
        <div class="appContainer__cardVisualisation">
          <composited-card
            protoId=${this.currentProtoId}
            quality=${this.currentQuality}
            responsiveSrcsetSizes="90vw"
          ></composited-card>
        </div>
      </main>
    `;
  }
}
