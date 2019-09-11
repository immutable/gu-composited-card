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

const boldOutlinedText = css`
  ${headingText}
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: ${white};
`;

export const getStyles = () => css`
  :host {
    display: block;
    position: relative;
    width: 100%;
  }

  h1 {
    ${boldOutlinedText}
    color: ${black};
  }
`;
