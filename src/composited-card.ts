import { LitElement, html, customElement, property } from 'lit-element';
import ResizeObserver from '@juggle/resize-observer';

import {
  loadingTemplate,
  mythicImageLayersTemplate,
  nonMythicImageLayersTemplate,
  baseArtworkLayersTemplate,
  textLayersTemplate,
} from './templating';

import './assets/fonts.css';
import { getStyles } from './styles';

export interface IResolutionSettings {
  lowDpi: number;
  highDpi: number;
}

export interface ICardProtoData {
  type: string;
  effect: string;
  name: string;
  rarity: string;
  god: string;
  mana: number;
  id: number;
  attack: number;
  health: number;
}

// @TODO: these should really come from an endpoint call,
// so that we can easily update them in the future...
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

const ro = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const el = entry.target as CompositedCard;
    el.handleResize(entry);
  });
});

/**
 * @TODO: document this web-component...
 *
 * @customElement
 * @demo https://github.com/glomotion/composited-card-web-component
 *
 */
@customElement('composited-card')
export class CompositedCard extends LitElement {
  @property({ type: Number }) protoId: number;
  @property({ type: Number }) quality: number;
  @property({ type: Object }) inputProtoData: ICardProtoData;
  @property({ type: String }) responsiveSrcsetSizes: string;

  protoCardData: ICardProtoData = {
    type: '',
    effect: '',
    name: '',
    rarity: '',
    god: '',
    mana: 0,
    id: 0,
    attack: 0,
    health: 0,
  };
  ch: number;
  cw: number;
  loading: boolean;

  static get styles() {
    return getStyles();
  }

  constructor() {
    super();
    this.quality = 0;
    this.ch = this.offsetHeight * 0.01;
    this.cw = this.offsetWidth * 0.01;
  }

  connectedCallback() {
    super.connectedCallback();
    ro.observe(this);
    this.getViewProtoData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    ro.unobserve(this);
  }

  async fetchProtoData() {
    this.loading = true;
    return fetch(`//api.godsunchained.com/v0/proto/${this.protoId}`).then(
      resp => resp.json(),
    );
  }

  handleResize(event) {
    this.ch = event.borderBoxSize.blockSize * 0.01;
    this.cw = event.borderBoxSize.inlineSize * 0.01;
    this.requestUpdate();
  }

  getViewProtoData() {
    if (typeof this.protoId !== 'undefined') {
      this.getProtoDataFromApi();
    } else if (this.inputProtoData) {
      this.getProtoDataFromInput();
    }
  }

  async getProtoDataFromApi() {
    return this.fetchProtoData().then(data => {
      const {
        id,
        type,
        attack,
        health,
        effect,
        name,
        rarity,
        god,
        mana,
      } = data;
      this.protoCardData = {
        id,
        type,
        attack: attack.Int64,
        health: health.Int64,
        effect,
        name,
        rarity,
        god,
        mana,
      };
      this.loading = false;
      this.requestUpdate();
      return data;
    });
  }

  getProtoDataFromInput() {
    this.protoCardData = { ...this.inputProtoData };
    this.protoId = this.inputProtoData.id;
    this.loading = false;
  }

  render() {
    const qualityName = qualities[this.quality];
    const isMythicCard = qualityName === 'mythic';
    return html`
      ${this.loading
        ? loadingTemplate()
        : html`
            ${baseArtworkLayersTemplate({
              protoId: this.protoId,
              responsiveSrcsetSizes: this.responsiveSrcsetSizes,
            })}
            ${isMythicCard
              ? mythicImageLayersTemplate({
                  type: this.protoCardData.type,
                  qualityName: qualityName,
                  responsiveSrcsetSizes: this.responsiveSrcsetSizes,
                })
              : nonMythicImageLayersTemplate({
                  qualityName: qualityName,
                  responsiveSrcsetSizes: this.responsiveSrcsetSizes,
                  ...this.protoCardData,
                })}
            ${textLayersTemplate({
              ch: this.ch,
              cw: this.cw,
              ...this.protoCardData,
            })}
          `}
    `;
  }
}
