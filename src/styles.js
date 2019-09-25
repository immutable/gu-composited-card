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
const offWhiteLight = css`#f9f9f9`;
const offWhiteDark = css`#f1f1f1`;

const boldOutlinedText = css`
  ${headingText}
  font-weight: 700;
  line-height: 1;
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
    right: 15%;
    top: 12%;
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

  .card__lockIconLayer {
    position: absolute;
    left: 54%;
    top: 2%;
    width: 18%;
    transform: translate(-50%, 15%);
  }

  .card__manaText {
    ${boldOutlinedText}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    display: flex;
    ${boldOutlinedText}
    line-height: 0.8;
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
    ${boldOutlinedText}
    display: flex;
  }

  .card__tribeText__inner {
    margin: auto;
  }
`;
