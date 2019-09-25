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
  tribe: string;
  mana: number;
  id: number;
  attack: number;
  health: number;
}

// @TODO: these should really come from an endpoint call,
// so that we can easily update them in the future...
export const qualities = [
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

// Deploy a native ResizeOberver for this component instance:
const ro = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const el = entry.target as CompositedCard;
    el.handleResize(entry);
  });
});

/**
 *
 * GU Composited Card Web Component
 * -----------------------------------------------------------------
 *
 * A simple, framework agnostic web component to facilitate the
 * display of Gods Unchained card element(s).
 *
 * @customElement
 * @demo https://immutable.github.io/gu-composited-card/
 *
 * @input protoId
 * @input quality
 * @input inputProtoData
 * @input responsiveSrcsetSizes
 *
 * @author Tim Paul <tim.paul@immutable.com> <@glomotion>
 *
 */
@customElement('composited-card')
export class CompositedCard extends LitElement {
  @property({ type: Number }) protoId: number;
  @property({ type: Number }) quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  @property({ type: Object }) inputProtoData: ICardProtoData;
  @property({ type: String }) responsiveSrcsetSizes: string;

  public protoCardData: ICardProtoData = {
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
    tribe: '',
  };
  public ch: number;
  public cw: number;
  public loading: boolean;

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

  /**
   * Generic LitElement component life-cycle events
   */
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

  /**
   * Generic resize handling
   */
  public handleResize(event) {
    const container = event.target.shadowRoot.children[0];
    this.ch = container.offsetHeight * 0.01;
    this.cw = container.offsetWidth * 0.01;
    this.requestUpdate();
  }

  /**
   * A method to fetch a protoId's card info data
   */
  private async fetchProtoData() {
    this.loading = true;
    return fetch(`//api.godsunchained.com/v0/proto/${this.protoId}`).then(
      resp => resp.json(),
    );
  }

  /**
   * A method to handle the fetching, and then processing
   * of proto card data
   */
  private async getProtoDataFromApi() {
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
        tribe,
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
        tribe: tribe.String,
      };
      this.loading = false;
      this.requestUpdate();
      return data;
    });
  }

  /**
   * A method for Injesting of proto card data that is manually
   * input into the component
   */
  private getProtoDataFromInput() {
    this.protoCardData = { ...this.inputProtoData };
    this.loading = false;
    this.requestUpdate();
  }

  /**
   * A `render` method to define the DOM structure of the component
   */
  render() {
    const qualityName = qualities[this.quality];
    const isMythicCard = qualityName === 'mythic';
    return html`
      <div class="card__innerRatioConstrainer">
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
      </div>
    `;
  }
}
