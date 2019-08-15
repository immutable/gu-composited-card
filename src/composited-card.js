import { LitElement, html } from 'lit-element';
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
  entries.forEach(entry => entry.target.handleResize(entry));
});

// const loadFonts = () => {
//   var css = fs.readFileSync('./assets/fonts.css');
//   var style = document.createElement('style');
//   style.type = 'text/css';
//   style.appendChild(document.createTextNode(css));
//   document.head.appendChild(style);
// };

/**
 * @TODO: document this web-component...
 *
 * `<awesome-sauce>` injects a healthy dose of awesome into your page.
 * ## This is an h2 heading
 * In typical use, just slap some `<awesome-sauce>` at the top of your body:
 * <body>
 *   <awesome-sauce></awesome-sauce>
 * Wham! It's all awesome now!
 * @customElement
 * @polymer
 * @demo https://path/to/awesomeness/demo/
 *
 */
class CompositedCard extends LitElement {
  static get properties() {
    return {
      protoId: { type: Number },
      inputProtoData: { type: Object },
      /*
      @TODO: instead make this setting 3 options:
      assetsQuality: "normal" | "high" | "best"
      "normal" === same as now (default)
      "high" === same as useHiResAssets = true
      "best" === only use max-res assets
      */
      useHiResAssets: { type: Boolean },
      resolutionSettings: {
        lowDpi: Number,
        highDpi: Number,
      },
      quality: Number,
    };
  }

  static get styles() {
    return getStyles();
  }

  constructor() {
    super();
    /*
      @TODO: make these options based on the same assets qualities above:
      "normal" | "high" | "best"
    */
    this.resolutionSettings = {
      lowDpi: '256',
      highDpi: '512',
    };
    this.ch = this.offsetHeight * 0.01;
    this.cw = this.offsetWidth * 0.01;
    // loadFonts();
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

  fetchProtoData() {
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
    if (this.useHiResAssets) {
      this.resolutionSettings = {
        lowDpi: '512',
        highDpi: '1024',
      };
    }
    this.qualityName = qualities[this.quality];
    if (this.protoId) {
      this.getProtoDataFromApi();
    } else if (this.inputProtoData) {
      this.getProtoDataFromInput();
    }
  }

  getProtoDataFromApi() {
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
    const isMythicCard = this.qualityName === 'mythic';
    return html`
      ${this.loading
        ? loadingTemplate()
        : html`
            ${baseArtworkLayersTemplate({
              useHiResAssets: this.useHiResAssets,
              resolutionSettings: this.resolutionSettings,
              protoId: this.protoId,
            })}
            ${isMythicCard
              ? mythicImageLayersTemplate({
                  type: this.protoCardData.type,
                  resolutionSettings: this.resolutionSettings,
                  qualityName: this.qualityName,
                })
              : nonMythicImageLayersTemplate({
                  resolutionSettings: this.resolutionSettings,
                  qualityName: this.qualityName,
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

// Register the new element with the browser.
customElements.define('composited-card', CompositedCard);
