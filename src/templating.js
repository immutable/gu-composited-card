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
  resolutionSettings,
  useHiResAssets,
  protoId,
}) => {
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

export const mythicImageLayersTemplate = ({
  type,
  resolutionSettings,
  qualityName,
}) => {
  return html`
    <picture class="card__baseLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/creature_hyperion.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/creature_hyperion.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/creature_hyperion.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/creature_hyperion.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/mythic_hyperion.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/mythic_hyperion.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/mythic_hyperion.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/mythic_hyperion.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/mythic_hyperion.png"
        class="card__manaLayer__img"
      />
    </picture>
  `;
};

export const nonMythicImageLayersTemplate = ({
  type,
  resolutionSettings,
  qualityName,
  rarity,
  god,
  set,
}) =>
  html`
    <picture class="card__baseLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/${type}_${qualityName}.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/${type}_${qualityName}.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${type}_${qualityName}.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${type}_${qualityName}.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${type}_${qualityName}.png"
        class="card__baseLayer__img"
      />
    </picture>

    <picture class="card__manaLayer">
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/${god}_${qualityName}.webp"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/${god}_${qualityName}.png"
        media="(-webkit-min-device-pixel-ratio: 2)"
        type="image/png"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${god}_${qualityName}.webp"
        type="image/webp"
      />
      <source
        srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${god}_${qualityName}.png"
        type="image/png"
      />
      <img
        src="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/${god}_${qualityName}.png"
        class="card__manaLayer__img"
      />
    </picture>

    ${rarity !== 'common'
      ? html`
          <picture class="card__rarityLayer">
            <source
              srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/rarity_${rarity}.webp"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/webp"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/rarity_${rarity}.png"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/png"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/rarity_${rarity}.webp"
              type="image/webp"
            />
            <img
              src="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/rarity_${rarity}.png"
              class="card__rarityLayer__img"
            />
          </picture>
        `
      : null}
    ${rarity === 'legendary'
      ? html`
          <picture class="card__wreathLayer">
            <source
              srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/wreath_${qualityName}.webp"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/webp"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.highDpi}/wreath_${qualityName}.png"
              media="(-webkit-min-device-pixel-ratio: 2)"
              type="image/png"
            />
            <source
              srcset="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/wreath_${qualityName}.webp"
              type="image/webp"
            />
            <img
              src="https://images.godsunchained.com/card-layers/${resolutionSettings.lowDpi}/rarity_wreath_${qualityName}.png"
              class="card__wreathLayer__img"
            />
          </picture>
        `
      : null}
    ${set === 'core'
      ? html`
          <picture class="card__lockIconLayer" *ngIf="cardProtoData.">
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
  console.log(name, effect.split('').length, name.split('').length);
  const nameCrammedTextMode = name.split('').length >= 20;
  const effectCrammedTextMode = effect.split('').length >= 125;
  const onePx = `${ch * 0.15}px`;
  const textShadow = `
    -${onePx} -${onePx} ${onePx} ${black}, 
    ${onePx} -${onePx} ${onePx} ${black}, 
    -${onePx} ${onePx} ${onePx} ${black}, 
    ${onePx} ${onePx} ${onePx} ${black}`;

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
      class="card__nameText"
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
      class="card__descriptionText"
      style=${styleMap({
        fontSize: `${effectCrammedTextMode ? ch * 3.4 : ch * 3.8}px`,
        lineHeight: effectCrammedTextMode ? 1 : 1.3,
        bottom: `${ch * 7.75}px`,
        height: `${ch * 22.5}px`,
        left: `${cw * 21}px`,
        right: `${cw * 13}px`,
      })}
    >
      <div class="card__descriptionText__inner">
        ${unsafeHTML(effect)}
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
