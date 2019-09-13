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

export const getStyles = () => css`
  @keyframes floatCard {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(2.5%);
    }
    100% {
      transform: translateY(0%);
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
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    ${baseText}
  }

  .appHeader {
    position: absolute;
    top: 0; left: 0;
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

  .appHeader__logo {
    width: 180px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .appHeader__title {
    ${baseText}
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    flex: 1;
  }

  .appHeader__title__sup {
    font-size: 11px;
  }

  .appContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: ${headerHeight};
  }

  .appContainer::before {
    content: "";
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 50vh;
    background: ${offBlackLight};
  }

  .appContainer__intro {
    position: absolute;
    width: 50%;
    top: calc(${headerHeight} + 30px);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #b8b8b8;
  }

  .appContainer__intro a {
    color: ${black};
    text-decoration: none;
  }

  .appContainer__intro a:hover {
    text-decoration: underline;
  }

  .appContainer__controls {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${footerHeight};
    z-index: 1;
    background: ${offBlackDark};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
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
  }

  .appContainer__controls__panel {
    display: flex;
    flex-direction: column;
    color: rgba(255,255,255,0.5);
  }

  .appContainer__controls__panel--quality {
    margin-left: 20px;
  }

  .appContainer__controls__panel__label { 
    font-size: 14px;
  }

  .appContainer__controls__panel__input { 
    background: transparent;
    border: 2px solid rgba(255,255,255,0.15);
    padding: 10px;
    font-size: 12px;
    font-weight: 700;
    color: white;
  }

  .appContainer__fab {
    position: absolute;
    bottom: ${footerHeight};
    right: 25px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #9f78dd;
    box-shadow: none;
    border: none;
    transform: translate(0, 50%);
    z-index: 1;
  }

  .appContainer__cardVisualisation {
    width: 50vw;
    margin: auto;
    position: relative;
  }

  .appContainer__cardVisualisation__shadow {
    width: 120%;
    height: 40px;
    left: -5%;
    bottom: 0;
    position: absolute;
    display: flex;
    animation: 3s floatCard infinite ease-in-out;
  }

  .appContainer__cardVisualisation__shadow::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${black};
    border-radius: 50%;
    filter: blur(30px);
  }

  .appContainer__cardVisualisation__shadow::after {
    content: "";
    width: 80%;
    height: 30px;
    margin: auto;
    background: ${black};
    border-radius: 50%;
    filter: blur(7px);
  }

  .appContainer__cardVisualisation__card {
    animation: 3s floatCard infinite ease-in-out;
    position: relative;
    z-index: 1;
  }

  .appContainer__dummyCardContainer {
    position: absolute;
    top: 0; left: 0;
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
`;
