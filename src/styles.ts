import { css } from 'lit-element';

const headingText = css`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`;

const bodyText = css`
  font-family: 'Open Sans', sans-serif;
`;

export const white = css`white`;
export const black = css`black`;
export const offBlack = css`rgb(51, 51, 51)`;
const offWhiteLight = css`#f9f9f9`;
const offWhiteDark = css`#f1f1f1`;

// @NOTE: This is pulled from the GU Design System, would be nice to find a 
// good way for this repo to inherit from gu-cerberus
export const dark = {
  100: '#7F7F7F',
  300: '#646464',
  500: '#464646',
  700: '#272727',
  900: '#0A0A0A',
};

const boldOutlinedText = css`
  ${headingText}
  font-weight: 700;
  line-height: 0.8;
  text-align: center;
  color: ${white};
`;

export const getStyles = () => css`
  :host {
    display: flex;
  }

  .card__innerRatioConstrainer {
    margin: auto;
    display: flex;
    position: relative;
    padding-bottom: 140%;
    /* @NOTE: 140% === 717 / 512 = 1.400 * 100
        the aspect of these cards is locked to 1:1.40 */
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
  }

  .card__loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .card__loading::before {
    content: '';
    background: ${offWhiteLight};
    width: 60%;
    padding-bottom: 60%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card__loading__img {
    margin: auto;
    width: 55%;
    max-width: 120px;
    min-width: 50px;
    position: relative;
  }

  .card__artwork {
    position: absolute;
    width: 64%;
    padding-bottom: 64%;
    right: 15%;
    top: 12%;
    background: ${offBlack};
  }

  .card__artwork__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
  }

  .card__baseLayer__img,
  .card__manaLayer__img,
  .card__wreathLayer__img,
  .card__rarityLayer__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(4.3%, 0.2%);
  }

  .card__lockIconLayer {
    position: absolute;
    left: 54%;
    top: 2%;
    width: 18%;
    transform: translate(-50%, 15%);
  }

  .card__tribeBarLayer {
    position: absolute;
    bottom: 1%;
    left: 29.5%;
    width: 48.5%;
  }

  /* Text layers */

  .card__manaText {
    ${boldOutlinedText}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${boldOutlinedText}
  }

  .card__nameText__inner {
    margin: auto;
  }

  .card__descriptionText {
    ${headingText}
    position: absolute;
    text-align: center;
    color: black;
    display: flex;
  }

  .card__descriptionText__inner {
    ${bodyText}
    margin: auto;
  }

  .card__attackText {
    position: absolute;
    ${boldOutlinedText}
  }

  .card__healthText {
    position: absolute;
    ${boldOutlinedText}
  }

  .card__tribeText {
    position: absolute;
    text-transform: capitalize;
    display: flex;
    ${boldOutlinedText}
  }

  .card__tribeText__inner {
    margin: auto;
  }

  .card__setIcon {
    position: absolute;
    color: white;
  }
`;
