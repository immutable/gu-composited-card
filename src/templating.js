import { html } from 'lit-element';

export const loadingTemplate = () => html`
  loading ...
`;

export const baseArtworkLayersTemplate = ({ useHiResAssets, protoId }) => {
  return html`
    <picture class="card__artwork">
      <source
        srcset="https://images.godsunchained.com/art/${useHiResAssets
          ? '500'
          : '375'}/${protoId}.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/art/${useHiResAssets
          ? '500'
          : '375'}/${protoId}.jpg"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/jpg"
      />
      <source
        srcset="https://images.godsunchained.com/art/${useHiResAssets
          ? '375'
          : '250'}/${protoId}.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/art/${useHiResAssets
          ? '375'
          : '250'}/${protoId}.jpg"
        type="image/jpg"
      />
      <img
        src="https://images.godsunchained.com/art/${useHiResAssets
          ? '375'
          : '250'}/${protoId}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `;
};

export const mythicLayersTemplate = ({
  type,
  resultionSettings,
  qualityName,
}) => {
  return html`
    <picture class="card__baseLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.highDpi}/creature_hyperion.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.highDpi}/creature_hyperion.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.lowDpi}/creature_hyperion.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.lowDpi}/creature_hyperion.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${resultionSettings.lowDpi}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.highDpi}/mythic_hyperion.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.highDpi}/mythic_hyperion.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.lowDpi}/mythic_hyperion.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resultionSettings.lowDpi}/mythic_hyperion.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${resultionSettings.lowDpi}/mythic_hyperion.png"
        class="card__manaLayer__img"
      />
    </picture>
  `;
};

export const nonMythicLayersTemplate = () =>
  html`
    non mythic layers!!!
  `;
