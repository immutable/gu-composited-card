import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

const artQualities = {
  normal: 250,
  high: 375,
  best: 500,
};

const layerQualities = {
  normal: 256,
  high: 512,
  xHigh: 720,
  best: 1024,
};

const lockQualities = {
  normal: 256,
  high: 512,
};

export const loadingTemplate = () => html`
  loading ...
`;

export const baseArtworkLayersTemplate = ({
  id,
  responsiveSrcsetSizes = `${artQualities.normal}px`,
}) => {
  return html`
    <picture class="card__artwork">
      <source
        srcset="
          https://images.godsunchained.com/art/${artQualities.normal}/${id}.webp 250w,
          https://images.godsunchained.com/art/${artQualities.high}/${id}.webp 375w,
          https://images.godsunchained.com/art/${artQualities.best}/${id}.webp 500w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/art/${artQualities.normal}/${id}.jpg   250w,
          https://images.godsunchained.com/art/${artQualities.high}/${id}.jpg  375w,
          https://images.godsunchained.com/art/${artQualities.best}/${id}.jpg 500w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/jpg"
      />
      <img
        src="https://images.godsunchained.com/art/${artQualities.normal}/${id}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `;
};

export const mythicImageLayersTemplate = ({
  type,
  resolutionSettings,
  qualityName,
  responsiveSrcsetSizes = `${layerQualities.normal}px`,
}) => {
  return html`
    <picture class="card__baseLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/creature_C408.webp ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/creature_C408.webp ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/creature_C408.webp ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/creature_C408.webp ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/creature_C408.png ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/creature_C408.png ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/creature_C408.png ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/creature_C408.png ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/png"
      />

      <img
        src="https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/mythic_C408.webp ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/mythic_C408.webp ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/mythic_C408.webp ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/mythic_C408.webp ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/mythic_C408.png ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/mythic_C408.png ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/mythic_C408.png ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/mythic_C408.png ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/png"
      />

      <img
        src="https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/mythic_C408.png"
        class="card__manaLayer__img"
      />
    </picture>
  `;
};

export const nonMythicImageLayersTemplate = ({
  responsiveSrcsetSizes = `${layerQualities.normal}px`,
  type,
  qualityName,
  rarity,
  god,
  set,
}) =>
  html`
    <picture class="card__baseLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${type}_${qualityName}.webp ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/${type}_${qualityName}.webp ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/${type}_${qualityName}.webp ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/${type}_${qualityName}.webp ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/webp"
      />

      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${type}_${qualityName}.png ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/${type}_${qualityName}.png ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/${type}_${qualityName}.png ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/${type}_${qualityName}.png ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${god}_${qualityName}.webp ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/${god}_${qualityName}.webp ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/${god}_${qualityName}.webp ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/${god}_${qualityName}.webp ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${god}_${qualityName}.png ${layerQualities.normal}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/${god}_${qualityName}.png ${layerQualities.high}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/${god}_${qualityName}.png ${layerQualities.xHigh}w,
          https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/${god}_${qualityName}.png ${layerQualities.best}w
        "
        sizes="${responsiveSrcsetSizes}"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/${god}_${qualityName}.png"
        class="card__manaLayer__img"
      />
    </picture>

    ${rarity !== 'common'
      ? html`
        <picture class="card__rarityLayer">
          <source
            srcset="
              https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/rarity_${rarity}.webp ${layerQualities.normal}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/rarity_${rarity}.webp ${layerQualities.high}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/rarity_${rarity}.webp ${layerQualities.xHigh}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/rarity_${rarity}.webp ${layerQualities.best}w
            "
            sizes="${responsiveSrcsetSizes}"
            type="image/webp"
          />
          <source
            srcset="
              https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/rarity_${rarity}.png ${layerQualities.normal}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/rarity_${rarity}.png ${layerQualities.high}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/rarity_${rarity}.png ${layerQualities.xHigh}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/rarity_${rarity}.png ${layerQualities.best}w
            "
            sizes="${responsiveSrcsetSizes}"
            type="image/png"
          />
          <img
            src="https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/rarity_${rarity}.png"
            class="card__rarityLayer__img"
          />
        </picture>
      `
      : null}
    ${rarity === 'legendary'
      ? html`
        <picture class="card__wreathLayer">
          <source
            srcset="
              https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/wreath_${qualityName}.webp ${layerQualities.normal}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/wreath_${qualityName}.webp ${layerQualities.high}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/wreath_${qualityName}.webp ${layerQualities.xHigh}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/wreath_${qualityName}.webp ${layerQualities.best}w
            "
            sizes="${responsiveSrcsetSizes}"
            type="image/webp"
          />

          <source
            srcset="
              https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/wreath_${qualityName}.png ${layerQualities.normal}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.high}/wreath_${qualityName}.png ${layerQualities.high}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.xHigh}/wreath_${qualityName}.png ${layerQualities.xHigh}w,
              https://images.godsunchained.com/card-layers/layers/${layerQualities.best}/wreath_${qualityName}.png ${layerQualities.best}w
            "
            sizes="${responsiveSrcsetSizes}"
            type="image/png"
          />
          <img
            src="https://images.godsunchained.com/card-layers/layers/${layerQualities.normal}/wreath_${qualityName}.png"
            class="card__wreathLayer__img"
          />
        </picture>
        `
      : null}
    ${set === 'core'
      ? html`
        <picture class="card__lockIconLayer">
          <source
            srcset="
              https://images.godsunchained.com/card-layers/locks/${lockQualities.normal}/lock_${qualityName}.webp ${lockQualities.normal}w,
              https://images.godsunchained.com/card-layers/locks/${lockQualities.high}/lock_${qualityName}.webp ${lockQualities.high}w,
            "
            type="image/webp"
          />

          <source
            srcset="
              https://images.godsunchained.com/card-layers/locks/${lockQualities.normal}/lock_${qualityName}.png ${lockQualities.normal}w,
              https://images.godsunchained.com/card-layers/locks/${lockQualities.high}/lock_${qualityName}.png ${lockQualities.high}w,
            "
            type="image/png"
          />
          
          <img
            src="https://images.godsunchained.com/card-layers/locks/lock_${qualityName}.png"
            class="card__lockIconLayer__img"
          />
        </picture>
      `
      : null}
  `;

export const textLayersTemplate = ({
  type = '',
  name = '⃠',
  effect = '⃠',
  mana = '⃠',
  attack = '⃠',
  health = '⃠',
  ch = 0,
  cw = 0,
}) => {
  const isACreatureOrWeapon = RegExp(/creature|weapon/).test(type);
  const nameCrammedTextMode = name.split('').length >= 20;
  const effectCrammedTextMode = effect.split('').length >= 95;
  const shadowSize = Math.floor(ch * 0.2);
  const onePx = `${shadowSize === 0 ? 1 : shadowSize}px`;
  const fadedBlack = 'rgba(0,0,0,0.35)';
  const textShadow = `-${onePx} -${onePx} ${onePx} ${fadedBlack}, ${onePx} -${onePx} ${onePx} ${fadedBlack}, -${onePx} ${onePx} ${onePx} ${fadedBlack}, ${onePx} ${onePx} ${onePx} ${fadedBlack}`;
  const widowProofEffect = effect.replace(/ ([^ ]*)$/, '&nbsp;$1');
  const manaTextStyles = styleMap({
    fontSize: `${ch * 10.5}px`,
    top: `${ch * 5.5}px`,
    left: `${cw * 9.5}px`,
    width: `${cw * 19}px`,
    textShadow,
  });
  const nameTextStyles = styleMap({
    fontSize: `${nameCrammedTextMode ? ch * 3.9 : ch * 4.93}px`,
    bottom: `${ch * 35.4}px`,
    left: `${cw * 12}px`,
    right: `${cw * 5}px`,
    textShadow,
  });
  const descriptionTextStyles = styleMap({
    fontSize: `${effectCrammedTextMode ? ch * 3.4 : ch * 3.8}px`,
    lineHeight: effectCrammedTextMode ? 1.05 : 1.3,
    bottom: `${ch * 7.8}px`,
    height: `${ch * 22}px`,
    left: `${cw * 21}px`,
    right: `${cw * 13}px`,
  });
  const attackTextStyles = styleMap({
    fontSize: `${ch * 9.5}px`,
    bottom: `${ch * 3.5}px`,
    width: `${cw * 15}px`,
    left: `${cw * 10.5}px`,
    textShadow,
  });
  const healthTextStyles = styleMap({
    fontSize: `${ch * 9.5}px`,
    width: `${cw * 16}px`,
    bottom: `${ch * 3.7}px`,
    right: `${cw * 2.5}px`,
    textShadow,
  });

  return html`
    <div class="card__manaText" style=${manaTextStyles}>
      ${mana}
    </div>

    <div
      class="card__nameText ${nameCrammedTextMode
      ? 'card__nameText--crammed'
      : null}"
      style=${nameTextStyles}
    >${name}</div>

    <div
      class="card__descriptionText ${effectCrammedTextMode
      ? 'card__effectText--crammed'
      : null}"
      style=${descriptionTextStyles}
    >
      <div class="card__descriptionText__inner">
        ${unsafeHTML(widowProofEffect)}
      </div>
    </div>

    ${isACreatureOrWeapon
      ? html`
        <div class="card__attackText" style=${attackTextStyles}>
          ${attack}
        </div>

        <div class="card__healthText" style=${healthTextStyles}>
          ${health}
        </div>
      `
      : null}
  `;
};
