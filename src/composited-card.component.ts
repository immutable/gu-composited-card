import { LitElement, html, customElement, property } from 'lit-element';
import { ResizeObserver } from '@juggle/resize-observer';

import {
  loadingTemplate,
  mythicImageLayersTemplate,
  nonMythicImageLayersTemplate,
  baseArtworkLayersTemplate,
  textLayersTemplate,

  baseArtworkLayersCompositionTemplate,
  imageLayersCompositionTemplate,
  textLayersCompositionTemplate
} from './templating';

import './assets/fonts.css';
import { getStyles } from './styles';
import { type } from 'os';

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
  mana: string;
  id: string;
  attack: number;
  health: number;
  art_id: string;
}

export interface ICompositionData {
  illustration?: string[];
  frame?: string[];
  rosette?: string[];
  gems?: string[];
  wreath?: string[];
  lock?: string[];
  tribe_bar?: string[];
  set?: string[];
}

export interface ICardCompsitionData extends ICardProtoData {
  composition: ICompositionData;
}

// @TODO: these should really come from an endpoint call,
// so that we can easily update them in the future...
export const legacyQualities = [
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
];

export const qualities = ['diamond', 'gold', 'shadow', 'meteorite', 'plain'];

// Deploy a native ResizeOberver for this component instance:
const ro = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
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
 * @input useLegacyQualityMapping
 * @input compositionVersion
 *
 * @author Tim Paul <tim.paul@immutable.com> <@glomotion>
 *
 */
@customElement('composited-card')
export class CompositedCard extends LitElement {
  @property({ type: Number }) protoId: number;
  @property({ type: Number }) quality: number = 5;
  @property({ type: Object }) inputProtoData: ICardProtoData;
  @property({ type: Object }) inputCompositionData: ICardCompsitionData;
  @property({ type: String }) responsiveSrcsetSizes: string;
  @property({ type: Boolean }) useLegacyQualityMapping = false;
  @property({ type: Number }) compositionVersion: number = 1;

  public compositionCardData: ICardCompsitionData = {
    type: '',
    effect: '',
    name: '',
    rarity: '',
    god: '',
    set: '',
    mana: '',
    id: '',
    attack: null,
    health: null,
    tribe: '',
    art_id: '',
    composition: {
      illustration: [],
      frame: [],
      rosette: [],
      gems: [],
      wreath: [],
      lock: [],
      tribe_bar: [],
    }
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
      } else if (propName === 'inputProtoData' || propName === 'inputCompositionData') {
        this.getProtoDataFromInput(propName);
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
    return fetch(
      `https://api.godsunchained.com/v0/composition?pairs=${this.protoId}@${this.quality}`,
    ).then((resp) => resp.json());
  }

  /**
   * A method to handle the fetching, and then processing
   * of proto card data
   */
  private async getProtoDataFromApi() {
    return this.fetchProtoData().then((data) => {
      if(data.error) return null
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
        art_id,
        composition,
      } = data[0];
      this.compositionCardData = {
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
        art_id,
        composition,
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
  private getProtoDataFromInput(dataType : string) {
    if(dataType == 'inputProtoData') {
      this.compositionCardData = { ...(this.inputProtoData as ICardCompsitionData) };
    } else {
      this.compositionCardData = { ...this.inputCompositionData };
    }

    if(!this.compositionCardData.composition && this.compositionVersion != 1) {
      this.compositionVersion = 1
    }
    
    this.loading = false;
    this.requestUpdate();
  }

  /**
   * A `render` method to define the DOM structure of the component
   */
  render() {
    if (this.compositionVersion == 2) {
      return html`
        <div class="card__innerRatioConstrainer">
          ${this.loading
            ? loadingTemplate()
            : html`
              ${baseArtworkLayersCompositionTemplate({
                illustration: this.compositionCardData.composition.illustration,
                responsiveSrcsetSizes: this.responsiveSrcsetSizes,
              })}
              ${imageLayersCompositionTemplate({
                frame: this.compositionCardData.composition.frame,
                rosette: this.compositionCardData.composition.rosette,
                gems: this.compositionCardData.composition.gems,
                wreath: this.compositionCardData.composition.wreath,
                lock: this.compositionCardData.composition.lock,
                tribe: this.compositionCardData.composition.tribe_bar,
                responsiveSrcsetSizes: this.responsiveSrcsetSizes,
              })}
              ${textLayersCompositionTemplate({
                ch: this.ch,
                cw: this.cw,
                ...this.compositionCardData,
                cardSet: this.compositionCardData.composition.set,
              })}
            `}
        </div>
      `;
    } else {
      const qualityName = this.useLegacyQualityMapping ? legacyQualities[this.quality] : qualities[this.quality - 1];
      const isMythicCard = this.compositionCardData.rarity === 'mythic';
      return html`
        <div class="card__innerRatioConstrainer">
          ${this.loading
            ? loadingTemplate()
            : html`
                ${baseArtworkLayersTemplate({
                  id: this.compositionCardData.id,
                  responsiveSrcsetSizes: this.responsiveSrcsetSizes,
                })}
                ${isMythicCard
                  ? mythicImageLayersTemplate({
                      responsiveSrcsetSizes: this.responsiveSrcsetSizes,
                      ...this.compositionCardData,
                    })
                  : nonMythicImageLayersTemplate({
                      qualityName: qualityName,
                      responsiveSrcsetSizes: this.responsiveSrcsetSizes,
                      ...this.compositionCardData,
                    })}
                ${textLayersTemplate({
                  ch: this.ch,
                  cw: this.cw,
                  ...this.compositionCardData,
                  cardSet: this.compositionCardData.set,
                })}
              `}
        </div>
      `;
    }

    
  }
}
