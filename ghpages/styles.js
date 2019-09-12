import { css } from 'lit-element';

const headingText = css`
  font-family: 'Unchained', serif;
  line-height: 1.1;
`;

const black = css`black`;

export const getStyles = () => css`
  :host {
    display: block;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  h1 {
    ${headingText}
    color: ${black};
    margin: 0;
    padding: 20px 0;
  }

  .appHeader {
    position: absolute;
    top: 0; left: 0;
    z-index: 1;
    width: 100%;
    height: 65px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);

    text-align: center;
    line-height: 62px;
  }

  .appContainer {
    padding-top: 65px;
    min-height: 100vh;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
  }

  .cardVisualisation {
    width: 90vw;
    margin: 0 auto;
  }
`;
