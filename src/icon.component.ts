import { LitElement, html, css } from 'lit-element';

// @customElement('gu-icon')
export class GuIcon extends LitElement {

  // @NOTE: super interesting find:
  // either angular or the web component API doesn't like
  // the property "ligature". When using that, the property
  // never makes it through to the component.
  // ... hence: 'iconLigature". go figure! :P
  // @property({ type : String }) iconLigature = '';
  static get properties() {
    return {
      iconLigature: { type: String },
      fillColor: { type: String },
      fillGradient: { type: String },
      fillGradientTarget: { type: String },
    };
  }

  iconLigature = '';
  fillColor: string;
  fillGradient: string;
  fillGradientTarget = 'top';

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      .icon {
        margin: auto;
        font-family: 'cardi-cons';
        font-feature-settings: 'liga' 1;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        vertical-align: middle;
        letter-spacing: 0;
        line-height: 1;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([fillGradient]) {
        display: inline;
        line-height: 0;
      }
    `;
  }

  render() {
    return html`
      <i class="icon">${this.iconLigature}</i>
    `;
  }
}

customElements.define('card-icon', GuIcon);
