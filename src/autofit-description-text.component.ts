import { LitElement, html, customElement, property, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { bodyText } from './styles';

/**
 *
 * GU Composited Card Web Component
 * -----------------------------------------------------------------
 *
 * A simple, framework agnostic web component to facilitate the
 * display of Gods Unchained card element(s).
 *
 * @customElement
 *
 * @input text
 * @input ch
 * @input cw
 *
 * @author Tim Paul <tim.paul@immutable.com> <@glomotion>
 *
 */

@customElement('autofit-description-text')
export class CompositedCard extends LitElement {
  @property({ type: String }) text: string;
  @property({ type: String }) tribe: string;
  @property({ type: String }) type: string;
  @property({ type: Number }) ch: number;
  @property({ type: Number }) cw: number;

  static get styles() {
    return css`
      :host {
        position: absolute;
        text-align: center;
        color: black;
        display: flex;
      }

      .centered {
        margin: auto;
        ${bodyText}
      }
    `;
  }
  /**
   * Generic LitElement component life-cycle events
   */
  updated(changedProps) {}

  /**
   * A `render` method to define the DOM structure of the component
   */
  render() {
    const { text, ch, cw, tribe, type } = this;
    const widowProofEffect = text.replace(/ ([^ ]*)$/, '&nbsp;$1');
    const textLength = text.split('').length;
    let textSize = ch * 3.8;
    let lineHeight = 1.25;
    let textMode = 'normal';

    if (textLength >= 150) {
      textSize = ch * 3.1;
      lineHeight = 1.05;
      textMode = 'extraSquishy';
    } else if (textLength >= 90) {
      textSize = ch * 3.4;
      lineHeight = 1.1;
      textMode = 'squishy';
    }

    const hostStyles = !!tribe
      ? `
          height: ${ch * 22.2}px;
          bottom: ${ch * 8.6}px;
        `
      : `
          height: ${ch * 23.4}px;
          bottom: ${ch * 7.3}px;
        `;

    return html`
      <style>
        :host {
          font-size: ${textSize}px;
          line-height: ${lineHeight};
          left: ${cw * 21}px;
          right: ${cw * 13}px;
          ${hostStyles}
        }
      </style>
      <div class="centered" data-text-mode=${textMode}>
        ${unsafeHTML(widowProofEffect)}
      </div>
    `;
  }
}
