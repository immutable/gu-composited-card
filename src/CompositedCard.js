import { LitElement, html, css } from 'lit-element';

import {
  loadingTemplate,
  mythicLayersTemplate,
  nonMythicLayersTemplate,
  baseArtworkLayersTemplate,
} from './templating';

const qualities = [
  'plain',
  // @NOTE: there may be "0" quality items in future, for now, these items
  // can use the plain layer imagery assets
  'plain',
  'bronze',
  'iron',
  'meteorite',
  'shadow',
  'gold',
  'diamond',
  'mythic',
];

class CompositedCard extends LitElement {
  static get properties() {
    return {
      protoId: { type: Number },
      useHiResAssets: { type: Boolean },
      resolutionSettings: {
        lowDpi: Number,
        highDpi: Number,
      },
      quality: Number,
      qualityName: String,
      protoCardData: {
        id: Number,
        mana: Number,
        rarity: String,
        type: String,
        health: {
          Int64: Number,
          valid: Boolean,
        },
        attack: {
          Int64: Number,
          valid: Boolean,
        },
        effect: String,
        name: String,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        position: relative;
        padding-bottom: 140%;
        /* @NOTE: 140% === 717 / 512 = 1.400 * 100
        the aspect of these cards is locked to 1:1.40 */
        width: 100%;
        background: gold;
      }

      img {
        display: block;
        width: 100%;
      }

      .card__artwork {
        position: absolute;
        width: 64%;
        right: 15%;
        top: 12%;
        transform: translateZ(0);
      }

      .card__baseLayer,
      .card__manaLayer,
      .card__rarityLayer,
      .card__wreathLayer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateZ(0);
      }
    `;
  }

  constructor() {
    super();
    this.useHiResAssets = false;
    this.resolutionSettings = {
      lowDpi: '256',
      highDpi: '512',
    };
  }

  fetchProtoData() {
    this.loading = true;
    return fetch(`//api.godsunchained.com/v0/proto/${this.protoId}`).then(
      resp => resp.json(),
    );
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.useHiResAssets) {
      this.resolutionSettings = {
        lowDpi: '512',
        highDpi: '1024',
      };
    }

    this.fetchProtoData().then(data => {
      this.protoCardData = { ...data };
      this.qualityName = qualities[this.quality];
      this.crammedTextMode = data.effect.split(' ').length >= 14;
      this.isACreatureOrWeapon = RegExp(/creature|weapon/).test(data.type);
      this.loading = false;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    const isMythicCard = this.qualityName === 'mythic';
    // const isMythicCard = true;

    return html`
      ${this.loading
        ? loadingTemplate()
        : html`
            ${baseArtworkLayersTemplate({
              useHiResAssets: this.useHiResAssets,
              protoId: this.protoId,
            })}
            ${isMythicCard
              ? mythicLayersTemplate({
                  type: this.protoCardData.type,
                  resultionSettings: this.resolutionSettings,
                  qualityName: this.qualityName,
                })
              : nonMythicLayersTemplate({})}
          `}
    `;
  }
}

// Register the new element with the browser.
customElements.define('composited-card', CompositedCard);
