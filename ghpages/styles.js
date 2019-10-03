import { css } from 'lit-element';

const headingText = css`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`;

const baseText = css`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
`;

const black = css`black`;
const white = css`white`;
const offWhiteLight = css`#f9f9f9`;
const offWhiteDark = css`#f1f1f1`;
const headerHeight = css`65px`;
const footerHeight = css`100px`;
const offBlackDark = css`#282828`;
const offBlackLight = css`#333`;
const offWhiteTransparent = css`rgba(255,255,255,0.15)`;
const qualityColors = [
  css`#8295A2`,
  css`#8295A2`,
  css`#6A8B35`,
  css`#3D91B9`,
  css`#84343E`,
  css`#B461C5`,
  css`#E5D93C`,
  css`#94E6FB`,
  css`white`,
];
const themePurple = css`#9f78dd`;

const sliderTrack = (quality = 0) => css`
  width: 100%;
  cursor: pointer;
  background: ${offBlackDark};
  border: 2px solid ${offWhiteTransparent};
  padding: 6px;
`;

const sliderThumb = (quality = 0) => css`
  height: 20px;
  width: 38px;
  border-radius: 28px;
  background: ${qualityColors[quality]};
  cursor: pointer;
  -webkit-appearance: none;
`;

export const getStyles = () => css`
  @keyframes floatCard {
    from {
      transform: translateY(2%);
    }
    to {
      transform: translateY(-2%);
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :host {
    display: block;
    position: relative;
    width: 100%;
    min-width: 640px;
    height: 100%;
    min-height: 760px;
    ${baseText}
  }

  .appHeader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: ${headerHeight};
    background: white;
    border-bottom: 2px solid ${offWhiteLight};
    text-align: center;
    line-height: calc(${headerHeight} - 3);
    display: flex;
    padding: 0 15px 0 5px;
  }

  .appHeader__link {
    width: 180px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .appHeader__link__img {
    display: block;
    width: 100%;
  }

  .appHeader__title {
    ${baseText}
    font-weight: 300;
    font-size: 22px;
    letter-spacing: -0.8px;
    line-height: 0.8;
    text-align: center;
    flex: 1;
  }

  .appHeader__title__sup {
    font-size: 9px;
    letter-spacing: 0;
    padding: 2px 3px;
    border-radius: 4px;
    border: 1px solid ${themePurple};
    color: ${themePurple};
    font-weight: 400;
    display: inline-block;
    vertical-align: top;
    margin-top: -5px;
    cursor: defualt;
  }

  .appHeader__title__sup:hover {
    background-color: ${themePurple};
    color: ${white};
  }

  .appContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${headerHeight};
  }

  .appContainer::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    background: ${offBlackLight};
  }

  .appContainer__intro {
    width: 50%;
    text-align: center;
    color: #b8b8b8;
    flex-grow: 0;
    margin: 20px 15px 0;
  }

  .appContainer__intro a {
    color: ${black};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls__title {
    ${headingText}
    font-size: 18px;
    text-transform: uppercase;
    color: ${white};
    position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(-150%);
    margin: 0;
    text-shadow: 0 1px 0 ${offBlackLight}, 1px 0 0 ${offBlackLight},
      1px 1px 0 ${offBlackLight}, -1px 0 0 ${offBlackLight},
      -1px -1px 0 ${offBlackLight}, 0 -1px 0 ${offBlackLight};
  }

  .appContainer__fab {
    position: fixed;
    bottom: ${footerHeight};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${themePurple};
    box-shadow: none;
    border: none;
    transform: translate(0, 50%);
    z-index: 2;
    display: flex;
  }

  .appContainer__fab:hover {
    background: #6ce4ff;
  }

  .appContainer__fab:active {
    background: ${white};
  }

  .appContainer__fab:active .appContainer__fab__img {
    filter: brightness(0);
  }

  .appContainer__fab__img {
    display: block;
    width: 60%;
    margin: auto;
  }

  .appContainer__cardVisualisation {
    width: 54vmin;
    min-width: 360px;
    display: flex;
    flex: 1;
    position: relative;
    margin-bottom: calc(${footerHeight} + 30px);
  }

  .appContainer__cardVisualisation__inner {
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-aspect-ratio: 1/1) {
    .appContainer__cardVisualisation {
      width: 50vmin;
    }
  }

  .appContainer__cardVisualisation__shadow {
    width: 120%;
    height: 40px;
    left: -5%;
    bottom: 0;
    position: absolute;
    display: flex;
  }

  .appContainer__cardVisualisation__shadow::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    filter: blur(30px);
  }

  .appContainer__cardVisualisation__shadow::after {
    content: '';
    width: 80%;
    height: 30px;
    margin: auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    filter: blur(7px);
  }

  .appContainer__cardVisualisation__card {
    animation: 3s floatCard infinite alternate ease-in-out;
    position: relative;
    z-index: 1;
  }

  .appContainer__dummyCardContainer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  .appContainer__dummyCardContainer__dummyCard {
    width: 1000px;
    height: 1400px;
    padding: 0;
  }

  .appContainer__controls {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${footerHeight};
    z-index: 2;
    background: ${offBlackDark};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
  }

  .appContainer__controls__panel {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.5);
  }

  .appContainer__controls__panel__input {
    background: transparent;
    border: 2px solid ${offWhiteTransparent};
    padding: 8px 10px;
    font-size: 12px;
    font-weight: 700;
    color: white;
    width: 15vw;
  }

  .appContainer__controls__panel--quality {
    margin-left: 20px;
    width: 30vw;
  }

  .appContainer__controls__panel__label {
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 8px;
  }

  .appContainer__controls__panel__label__quality {
    font-weight: 700;
  }

  .quality--plain {
    color: ${qualityColors[1]};
  }

  .quality--bronze {
    color: ${qualityColors[2]};
  }

  .quality--iron {
    color: ${qualityColors[3]};
  }

  .quality--meteorite {
    color: ${qualityColors[4]};
  }

  .quality--shadow {
    color: ${qualityColors[5]};
  }

  .quality--gold {
    color: ${qualityColors[6]};
  }

  .quality--diamond {
    color: ${qualityColors[7]};
  }

  .quality--mythic {
    color: ${qualityColors[8]};
  }

  .appContainer__controls__panel__rangeSlider {
    -webkit-appearance: none;
    width: 100%;
  }

  .appContainer__controls__panel__rangeSlider:focus {
    outline: none;
  }

  /* WEBKIT: */
  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-runnable-track {
    ${sliderTrack(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-runnable-track {
    ${sliderTrack(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-runnable-track {
    ${sliderTrack(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-runnable-track {
    ${sliderTrack(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-runnable-track {
    ${sliderTrack(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-runnable-track {
    ${sliderTrack(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-runnable-track {
    ${sliderTrack(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-runnable-track {
    ${sliderTrack(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-webkit-slider-thumb {
    ${sliderThumb(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-webkit-slider-thumb {
    ${sliderThumb(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-webkit-slider-thumb {
    ${sliderThumb(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-webkit-slider-thumb {
    ${sliderThumb(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-webkit-slider-thumb {
    ${sliderThumb(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-webkit-slider-thumb {
    ${sliderThumb(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-webkit-slider-thumb {
    ${sliderThumb(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-webkit-slider-thumb {
    ${sliderThumb(8)}
  }

  /* FIREFOX: */

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-track {
    ${sliderTrack(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-track {
    ${sliderTrack(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-track {
    ${sliderTrack(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-track {
    ${sliderTrack(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-track {
    ${sliderTrack(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-track {
    ${sliderTrack(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-track {
    ${sliderTrack(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-track {
    ${sliderTrack(8)}
  }

  .appContainer__controls__panel__rangeSlider.quality--plain::-moz-range-thumb {
    ${sliderThumb(0)}
  }
  .appContainer__controls__panel__rangeSlider.quality--bronze::-moz-range-thumb {
    ${sliderThumb(2)}
  }
  .appContainer__controls__panel__rangeSlider.quality--iron::-moz-range-thumb {
    ${sliderThumb(3)}
  }
  .appContainer__controls__panel__rangeSlider.quality--meteorite::-moz-range-thumb {
    ${sliderThumb(4)}
  }
  .appContainer__controls__panel__rangeSlider.quality--shadow::-moz-range-thumb {
    ${sliderThumb(5)}
  }
  .appContainer__controls__panel__rangeSlider.quality--gold::-moz-range-thumb {
    ${sliderThumb(6)}
  }
  .appContainer__controls__panel__rangeSlider.quality--diamond::-moz-range-thumb {
    ${sliderThumb(7)}
  }
  .appContainer__controls__panel__rangeSlider.quality--mythic::-moz-range-thumb {
    ${sliderThumb(8)}
  }
`;
