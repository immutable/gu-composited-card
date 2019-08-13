import { LitElement, html, css } from 'lit-element';

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

    return html`
      <picture class="card__artwork">
        <source
          srcset="https://images.godsunchained.com/art/${this.useHiResAssets
            ? '500'
            : '375'}/${this.protoId}.webp"
          media="(-webkit-min-device-pixel-ratio: 2)"
          type="image/webp"
        />
        <source
          srcset="https://images.godsunchained.com/art/${this.useHiResAssets
            ? '500'
            : '375'}/${this.protoId}.jpg"
          media="(-webkit-min-device-pixel-ratio: 2)"
          type="image/jpg"
        />
        <source
          srcset="https://images.godsunchained.com/art/${this.useHiResAssets
            ? '375'
            : '250'}/${this.protoId}.webp"
          type="image/webp"
        />
        <source
          srcset="https://images.godsunchained.com/art/${this.useHiResAssets
            ? '375'
            : '250'}/${this.protoId}.jpg"
          type="image/jpg"
        />
        <img
          src="https://images.godsunchained.com/art/${this.useHiResAssets
            ? '375'
            : '250'}/${this.protoId}.jpg"
          class="card__artwork__img"
        />
      </picture>

      ${this.loading
        ? html`
            loading ...
          `
        : html`
            ${isMythicCard
              ? html`
                  <picture class="card__baseLayer">
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/creature_hyperion.webp"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/creature_hyperion.png"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/png"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/creature_hyperion.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/creature_hyperion.png"
                      type="image/png"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/creature_hyperion.png"
                      class="card__baseLayer__img"
                    />
                  </picture>

                  <picture class="card__manaLayer">
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/mythic_hyperion.webp"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/mythic_hyperion.png"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/png"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/mythic_hyperion.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/mythic_hyperion.png"
                      type="image/png"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/creature_hyperion.png"
                      class="card__manaLayer__img"
                    />
                  </picture>
                `
              : html`
                  <picture class="card__baseLayer">
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/${this.protoCardData
                        .type}_${this.qualityName}.webp"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/${this.protoCardData
                        .type}_${this.qualityName}.png"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/png"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/${this.protoCardData
                        .type}_${this.qualityName}.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/${this.protoCardData
                        .type}_${this.qualityName}.png"
                      type="image/png"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/${this.protoCardData
                        .type}_${this.qualityName}.png"
                      class="card__baseLayer__img"
                    />
                  </picture>

                  <picture class="card__manaLayer">
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/${this.protoCardData
                        .god}_${this.qualityName}.webp"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/${this.protoCardData
                        .god}_${this.qualityName}.png"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/png"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/${this.protoCardData
                        .god}_${this.qualityName}.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/${this.protoCardData
                        .god}_${this.qualityName}.png"
                      type="image/png"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/{{
                      resolutionSettings.lowDpi
                    }}/${this.protoCardData.god}_${this.qualityName}.png"
                      class="card__manaLayer__img"
                    />
                  </picture>

                  <picture class="card__rarityLayer">
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/rarity_${this.protoCardData
                        .rarity}.webp"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/rarity_${this.protoCardData
                        .rarity}.png"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/png"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/rarity_${this.protoCardData
                        .rarity}.webp"
                      type="image/webp"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/rarity_${this.protoCardData
                        .rarity}.png"
                      class="card__rarityLayer__img"
                    />
                  </picture>

                  <picture
                    class="card__wreathLayer"
                    *ngIf="cardProtoData.rarity === 'legendary'"
                  >
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/wreath_${this
                        .qualityName}.webp"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/webp"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.highDpi}/wreath_${this
                        .qualityName}.png"
                      media="(-webkit-min-device-pixel-ratio: 2)"
                      type="image/png"
                    />
                    <source
                      srcset="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/wreath_${this
                        .qualityName}.webp"
                      type="image/webp"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/${this
                        .resolutionSettings.lowDpi}/rarity_wreath_${this
                        .qualityName}.png"
                      class="card__wreathLayer__img"
                    />
                  </picture>

                  <picture
                    class="card__lockIconLayer"
                    *ngIf="cardProtoData.set === 'core'"
                  >
                    <source
                      srcset="https://images.godsunchained.com/card-layers/lock_${this
                        .qualityName}.webp"
                      type="image/webp"
                    />
                    <img
                      src="https://images.godsunchained.com/card-layers/lock_${this
                        .qualityName}.png"
                      class="card__lockIconLayer__img"
                    />
                  </picture>
                `}

            <div class="card__manaText">
              ${this.protoCardData.mana}
            </div>

            <div class="card__nameText">
              ${this.protoCardData.name}
            </div>
          `}
    `;
  }
}

// Register the new element with the browser.
customElements.define('composited-card', CompositedCard);
