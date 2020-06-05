import { LitElement, html, customElement, property } from 'lit-element';

import { qualities, ICardProtoData } from '../src/composited-card';
import { getStyles } from './styles';

function cloneShadow(shadow) {
  const frag = document.createDocumentFragment();
  var nodes = [...shadow.childNodes];
  nodes.forEach((node) => {
    node.remove();
    frag.appendChild(node.cloneNode(true));
    shadow.appendChild(node);
  });
  return frag;
}

@customElement('demo-app')
export class InteractiveDemo extends LitElement {
  @property() currentProtoId = Math.floor(Math.random() * 99 + 1);
  @property() currentQuality = Math.floor(Math.random() * 4 + 1);
  @property() currentQualityInWords: string =
    qualities[this.currentQuality - 1];
  @property() currentProtoData: ICardProtoData;
  @property() protosCollection: {};

  static get styles() {
    return getStyles();
  }

  constructor() {
    super();
    const params = this.getUrlParams();
    const protoId = params.get('protoid');
    const quality = params.get('quality');
    if (protoId !== null) {
      this.currentProtoId = parseInt(protoId, 10);
    }
    if (quality !== null) {
      this.currentQuality = parseInt(quality, 10);
      this.currentQualityInWords = qualities[this.currentQuality - 1];
    }
    if (protoId !== null && quality !== null) {
      this.updatePageImageMetadata();
    }
    fetch('https://dev.godsunchained.com/proto?format=flat')
      .then((resp) => resp.json())
      .then((protos) => {
        this.protosCollection = protos;
        this.currentProtoData = {
          ...protos[this.currentProtoId],
          id: this.currentProtoId,
        };
        this.updatePageMetadata();
      })
      .catch((e) => console.error(e));
  }

  updated(changes) {
    if (
      changes.get('currentProtoId') !== undefined ||
      changes.get('currentQuality') !== undefined
    ) {
      this.updateUrlParams();
      this.updatePageMetadata();
    }
  }

  private updatePageMetadata() {
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', this.currentProtoData.name);
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute('content', this.currentProtoData.effect);
    document
      .querySelector('meta[property="og:url"]')
      .setAttribute('content', location.href);
    this.updatePageImageMetadata();
  }

  private get currentImageUrl() {
    return `https://card.godsunchained.com?id=${this.currentProtoId}&q=${this.currentQuality}&w=`;
  }

  private updatePageImageMetadata() {
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute('content', `${this.currentImageUrl}256`);
  }

  private getUrlParams() {
    return new URLSearchParams(window.location.search);
  }

  private updateUrlParams() {
    const params = this.getUrlParams();
    params.set('protoid', `${this.currentProtoId}`);
    params.set('quality', `${this.currentQuality}`);
    window.history.pushState(
      {},
      '',
      decodeURIComponent(`${location.pathname}?${params}`),
    );
  }

  private getScreenShot($ev) {
    $ev.preventDefault();
    window.open();
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
          >
            BETA
          </sup>
        </h3>
      </header>

      <main class="appContainer">
        <div class="appContainer__intro">
          A simple, framework agnostic
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
            target="_blank"
          >
            web component
          </a>
          to facilitate the display of
          <a href="https://godsunchained.com" target="_blank">Gods Unchained</a>
          card&nbsp;element(s).
        </div>

        <footer class="appContainer__controls">
          <h3 class="appContainer__controls__title">
            Display Controls
          </h3>
          <div class="appContainer__controls__panel">
            <label for="#protoId" class="appContainer__controls__panel__label">
              Card ID
            </label>

            <input
              id="#protoId"
              type="number"
              class="appContainer__controls__panel__input"
              value=${this.currentProtoId}
              @keyup=${(e) => {
                this.currentProtoId = e.target.value;
                this.currentProtoData = {
                  ...this.protosCollection[this.currentProtoId],
                  id: this.currentProtoId,
                };
              }}
            />
          </div>

          <div
            class="appContainer__controls__panel appContainer__controls__panel--quality"
          >
            <label for="#protoId" class="appContainer__controls__panel__label">
              Quality
              <span
                class="appContainer__controls__panel__label__quality quality--${this
                  .currentQualityInWords}"
              >
                (${this.currentQualityInWords})
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="5"
              class="appContainer__controls__panel__rangeSlider quality--${this
                .currentQualityInWords}"
              value=${this.currentQuality}
              @change=${(e) => {
                this.currentQuality = e.target.value;
                this.currentQualityInWords = qualities[this.currentQuality - 1];
              }}
            />
          </div>
        </footer>

        <a
          class="appContainer__fab"
          href=${`${this.currentImageUrl}1024`}
          target="_blank"
        >
          <img
            class="appContainer__fab__img"
            src="${require('./assets/img/icon--download.svg')}"
          />
        </a>

        <div class="appContainer__cardVisualisation">
          <div class="appContainer__cardVisualisation__inner">
            <i class="appContainer__cardVisualisation__shadow"></i>
            ${this.currentProtoData
              ? html`
                  <composited-card
                    inputProtoData=${JSON.stringify(this.currentProtoData)}
                    quality=${this.currentQuality}
                    responsiveSrcsetSizes="90vw"
                    class="appContainer__cardVisualisation__card"
                  ></composited-card>
                `
              : null}
          </div>
        </div>
      </main>
    `;
  }
}
