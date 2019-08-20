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
  set: string;
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
    set: '',
    mana: null,
    id: null,
    attack: null,
    health: null,
  };
  ch: number;
  cw: number;
  loading: boolean;

  static get styles() {
    return getStyles();
  }

  constructor() {
    super();
    this.loading = true;
    this.quality = 0;
    this.ch = this.offsetHeight * 0.01;
    this.cw = this.offsetWidth * 0.01;
  }

  connectedCallback() {
    super.connectedCallback();
    ro.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    ro.unobserve(this);
  }

  updated(changedProps) {
    changedProps.forEach((oldValue, propName) => {
      if (propName === 'protoId') {
        this.getProtoDataFromApi();
      } else if (propName === 'inputProtoData') {
        this.getProtoDataFromInput();
      }
    });
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

  async getProtoDataFromApi() {
    console.log(
      '############## loading proto from api ##############',
      this.protoId,
    );
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
        set,
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
        set,
      };
      this.loading = false;
      this.requestUpdate();
      return data;
    });
  }

  getProtoDataFromInput() {
    console.log(
      '@@@@@@@@@@@@@@@ loading proto from input @@@@@@@@@@@@@@',
      this.inputProtoData,
    );
    this.protoCardData = { ...this.inputProtoData };
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
              id: this.protoCardData.id,
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
