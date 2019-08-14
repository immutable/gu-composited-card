import { css } from 'lit-element';

const headingText = css`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`;

const bodyText = css`
  font-family: 'Open Sans', sans-serif;
`;

const white = css`white`;
const black = css`black`;

const boldOutlinedText = css`
  ${headingText}
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: ${white};
  text-shadow: -1px -1px 1px ${black}, 1px -1px 1px ${black},
    -1px 1px 1px ${black}, 1px 1px 1px ${black};
`;

export const getStyles = () => css`
  :host {
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
    left: 53%;
    top: 0%;
    width: 22%;
    transform: translate(-50%, 15%);
  }

  .card__manaText {
    ${boldOutlinedText}
    position: absolute;
  }

  .card__nameText {
    position: absolute;
    white-space: nowrap;
    ${boldOutlinedText}
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
`;
