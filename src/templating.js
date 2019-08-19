import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { black } from './styles';

const artQualities = {
  normal: 250,
  high: 375,
  best: 500,
};

const layerQualities = {
  normal: 256,
  high: 512,
  best: 1024,
};

export const loadingTemplate = () => html`
  loading ...
`;

export const baseArtworkLayersTemplate = ({
  protoId,
  responsiveImageSizes = `${artQualities.normal}px`,
}) => {
  return html`
    <picture class="card__artwork">
      <source
        srcset="
          https://images.godsunchained.com/art/${artQualities.normal}/${protoId}.webp 250w,
          https://images.godsunchained.com/art/${artQualities.high}/${protoId}.webp 375w,
          https://images.godsunchained.com/art/${artQualities.best}/${protoId}.webp 500w
        "
        sizes="${responsiveImageSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/art/${artQualities.normal}/${protoId}.jpg   250w,
          https://images.godsunchained.com/art/${artQualities.high}/${protoId}.jpg  375w,
          https://images.godsunchained.com/art/${artQualities.best}/${protoId}.jpg 500w
        "
        sizes="${responsiveImageSizes}"
        type="image/jpg"
      />
      <img
        src="https://images.godsunchained.com/art/${artQualities.normal}/${protoId}.jpg"
        class="card__artwork__img"
      />
    </picture>
  `;
};

export const mythicImageLayersTemplate = ({
  type,
  resolutionSettings,
  qualityName,
  responsiveImageSizes = `${layerQualities.normal}px`,
}) => {
  return html`
    <picture class="card__baseLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/creature_hyperion.webp  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/creature_hyperion.webp  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/creature_hyperion.webp 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/creature_hyperion.png  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/creature_hyperion.png  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/creature_hyperion.png 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/png"
      />

      <img
        src="https://images.godsunchained.com/card-layers/${layerQualities.normal}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/mythic_hyperion.webp  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/mythic_hyperion.webp  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/mythic_hyperion.webp 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/mythic_hyperion.png  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/mythic_hyperion.png  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/mythic_hyperion.png 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/png"
      />

      <img
        src="https://images.godsunchained.com/card-layers/${layerQualities.normal}/mythic_hyperion.png"
        class="card__manaLayer__img"
      />
    </picture>
  `;
};

export const nonMythicImageLayersTemplate = ({
  responsiveImageSizes = `${layerQualities.normal}px`,
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
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/${type}_${qualityName}.webp  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/${type}_${qualityName}.webp  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/${type}_${qualityName}.webp 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/webp"
      />

      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/${type}_${qualityName}.png  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/${type}_${qualityName}.png  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/${type}_${qualityName}.png 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${layerQualities.normal}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/${god}_${qualityName}.webp  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/${god}_${qualityName}.webp  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/${god}_${qualityName}.webp 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/webp"
      />
      <source
        srcset="
          https://images.godsunchained.com/card-layers/${layerQualities.normal}/${god}_${qualityName}.png  256w,
          https://images.godsunchained.com/card-layers/${layerQualities.high}/${god}_${qualityName}.png  512w,
          https://images.godsunchained.com/card-layers/${layerQualities.best}/${god}_${qualityName}.png 1024w
        "
        sizes="${responsiveImageSizes}"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${layerQualities.normal}/${god}_${qualityName}.png"
        class="card__manaLayer__img"
      />
    </picture>

    ${rarity !== 'common'
      ? html`
          <picture class="card__rarityLayer">
            <source
              srcset="
                https://images.godsunchained.com/card-layers/${layerQualities.normal}/rarity_${rarity}.webp  256w,
                https://images.godsunchained.com/card-layers/${layerQualities.high}/rarity_${rarity}.webp  512w,
                https://images.godsunchained.com/card-layers/${layerQualities.best}/rarity_${rarity}.webp 1024w
              "
              sizes="${responsiveImageSizes}"
              type="image/webp"
            />
            <source
              srcset="
                https://images.godsunchained.com/card-layers/${layerQualities.normal}/rarity_${rarity}.png    256w,
                https://images.godsunchained.com/card-layers/${layerQualities.high}/rarity_${rarity}.png   512w,
                https://images.godsunchained.com/card-layers/${layerQualities.best}/rarity_${rarity}.png 1024w
              "
              sizes="${responsiveImageSizes}"
              type="image/png"
            />
            <img
              src="https://images.godsunchained.com/card-layers/${layerQualities.normal}/rarity_${rarity}.png"
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
                https://images.godsunchained.com/card-layers/${layerQualities.normal}/wreath_${qualityName}.webp  256w,
                https://images.godsunchained.com/card-layers/${layerQualities.high}/wreath_${qualityName}.webp  512w,
                https://images.godsunchained.com/card-layers/${layerQualities.best}/wreath_${qualityName}.webp 1024w
              "
              sizes="${responsiveImageSizes}"
              type="image/webp"
            />

            <source
              srcset="
                https://images.godsunchained.com/card-layers/${layerQualities.normal}/wreath_${qualityName}.png    256w,
                https://images.godsunchained.com/card-layers/${layerQualities.high}/wreath_${qualityName}.png   512w,
                https://images.godsunchained.com/card-layers/${layerQualities.best}/wreath_${qualityName}.png 1024w
              "
              sizes="${responsiveImageSizes}"
              type="image/png"
            />
            <img
              src="https://images.godsunchained.com/card-layers/${layerQualities.normal}/wreath_${qualityName}.png"
              class="card__wreathLayer__img"
            />
          </picture>
        `
      : null}
    ${set === 'core'
      ? html`
          <picture class="card__lockIconLayer">
            <source
              srcset="https://images.godsunchained.com/card-layers/lock_${qualityName}.webp"
              type="image/webp"
            />
            <img
              src="https://images.godsunchained.com/card-layers/lock_${qualityName}.png"
              class="card__lockIconLayer__img"
            />
          </picture>
        `
      : null}
  `;

export const textLayersTemplate = ({
  mana,
  name,
  effect,
  attack,
  health,
  type,
  ch,
  cw,
}) => {
  const isACreatureOrWeapon = RegExp(/creature|weapon/).test(type);
  const nameCrammedTextMode = name.split('').length >= 20;
  const effectCrammedTextMode = effect.split('').length >= 95;
  const shadowSize = Math.floor(ch * 0.2);
  const onePx = `${shadowSize === 0 ? 1 : shadowSize}px`;
  const textShadow = `
    -${onePx} -${onePx} ${onePx} ${black}, 
    ${onePx} -${onePx} ${onePx} ${black}, 
    -${onePx} ${onePx} ${onePx} ${black}, 
    ${onePx} ${onePx} ${onePx} ${black}`;
  const widowProofEffect = effect.replace(/ ([^ ]*)$/, '&nbsp;$1');

  return html`
    <div
      class="card__manaText"
      style=${styleMap({
        fontSize: `${ch * 10.5}px`,
        top: `${ch * 5.5}px`,
        left: `${cw * 9.5}px`,
        width: `${cw * 19}px`,
        textShadow: textShadow,
      })}
    >
      ${mana}
    </div>

    <div
      class="card__nameText ${nameCrammedTextMode
        ? 'card__nameText--crammed'
        : null}"
      style=${styleMap({
        fontSize: `${nameCrammedTextMode ? ch * 3.9 : ch * 4.93}px`,
        bottom: `${ch * 35}px`,
        left: `${cw * 12}px`,
        right: `${cw * 5}px`,
        textShadow: textShadow,
      })}
    >
      ${name}
    </div>

    <div
      class="card__descriptionText ${effectCrammedTextMode
        ? 'card__effectText--crammed'
        : null}"
      style=${styleMap({
        fontSize: `${effectCrammedTextMode ? ch * 3.4 : ch * 3.8}px`,
        lineHeight: effectCrammedTextMode ? 1.05 : 1.3,
        bottom: `${ch * 7.75}px`,
        height: `${ch * 22.5}px`,
        left: `${cw * 21}px`,
        right: `${cw * 13}px`,
      })}
    >
      <div class="card__descriptionText__inner">
        ${unsafeHTML(widowProofEffect)}
      </div>
    </div>

    ${isACreatureOrWeapon
      ? html`
          <div
            class="card__attackText"
            style=${styleMap({
              fontSize: `${ch * 9.5}px`,
              bottom: `${ch * 3.5}px`,
              width: `${cw * 15}px`,
              left: `${cw * 10.5}px`,
              textShadow: textShadow,
            })}
          >
            ${attack}
          </div>

          <div
            class="card__healthText"
            style=${styleMap({
              fontSize: `${ch * 9.5}px`,
              bottom: `${ch * 3}px`,
              width: `${cw * 15}px`,
              right: `${type === 'weapon' ? cw * 0.8 : cw * 4.5}px`,
              textShadow: textShadow,
            })}
          >
            ${health}
          </div>
        `
      : null}
  `;
};
