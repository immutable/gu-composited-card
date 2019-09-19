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
  @property() currentProtoId = 103;
  @property() currentQuality = 0;
  @property() currentQualityInWords: string = qualities[0];

  static get styles() {
    return getStyles();
  }

  screenshot($ev) {
    $ev.preventDefault();
    const shadowDomCard = this.shadowRoot.querySelector(
      '.appContainer__dummyCardContainer__dummyCard',
    ) as HTMLElement;
    const tempRenderHolder = document.querySelector('.tempRenderHolder');

    // @NOTE: Html2canvas doesnt currently support piercing the shadowdom.
    // Thus, we have to temporarily re-render the web component into the dom,
    // so that it can be screen-captured
    const cardRenderContainer = document.querySelector(
      '.compositedCardDomRender',
    ) as HTMLElement;
    cardRenderContainer.appendChild(cloneShadow(shadowDomCard.shadowRoot));
    html2canvas(cardRenderContainer, {
      backgroundColor: 'transparent',
      useCORS: true,
      onclone: dom => {
        const cardRender = dom.querySelector('.compositedCardDomRender');
        cardRender.style.opacity = 1;
      },
    }).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(
          blob,
          `${this.currentProtoId}-${qualities[this.currentQuality]}.png`,
        );
      }, 'image/png');
      cardRenderContainer.innerHTML = null;
    });
  }

  render() {
    return html`
      <header class="appHeader">
        <a href="https://immutable.com" class="appHeader__link" target="_blank">
          <img
            class="appHeader__link__img"
            src="${require('./assets/img/logo--imco.svg')}"
            alt="imco logo"
          />
        </a>
        <h3 class="appHeader__title">
          Composited Card Demo
          <sup
            class="appHeader__title__sup"
            title="*UX and functionality in Safari/Edge might have some slight speed-bumps"
            >BETA</sup
          >
        </h3>
      </header>

      <main class="appContainer">
        <div class="appContainer__dummyCardContainer">
          <composited-card
            protoId=${this.currentProtoId}
            quality=${this.currentQuality}
            responsiveSrcsetSizes="90vw"
            class="appContainer__dummyCardContainer__dummyCard"
          ></composited-card>
        </div>

        <div class="appContainer__intro">
          A simple, framework agnostic web component to facilitate the display
          of
          <a href="https://godsunchained.com" target="_blank">Gods Unchained</a>
          card element(s).
        </div>

        <footer class="appContainer__controls">
          <h3 class="appContainer__controls__title">Display Controls</h3>
          <div class="appContainer__controls__panel">
            <label for="#protoId" class="appContainer__controls__panel__label">
              Card ID
            </label>
            <input
              id="#protoId"
              type="number"
              class="appContainer__controls__panel__input"
              value=${this.currentProtoId}
              @keyup=${e => (this.currentProtoId = e.target.value)}
            />
          </div>

          <div
            class="appContainer__controls__panel appContainer__controls__panel--quality"
          >
            <label for="#protoId" class="appContainer__controls__panel__label">
              Quality (${this.currentQualityInWords})
            </label>
            <input
              type="range"
              min="0"
              max="8"
              class="appContainer__controls__panel__rangeSlider"
              value=${this.currentQuality}
              @change=${e => {
                this.currentQuality = e.target.value;
                this.currentQualityInWords = qualities[this.currentQuality];
              }}
            />
          </div>
        </footer>

        <button class="appContainer__fab" @click="${this.screenshot}">
          <img
            class="appContainer__fab__img"
            src="${require('./assets/img/icon--download.svg')}"
          />
        </button>
        <div class="appContainer__cardVisualisation">
          <i class="appContainer__cardVisualisation__shadow"></i>
          <composited-card
            protoId=${this.currentProtoId}
            quality=${this.currentQuality}
            responsiveSrcsetSizes="90vw"
            class="appContainer__cardVisualisation__card"
          ></composited-card>
        </div>
      </main>
    `;
  }
}
