import { LitElement, html, customElement, property } from 'lit-element';

@customElement('demo-app')
export class InteractiveDemo extends LitElement {
  @property() currentProtoId = 1;
  @property() currentQuality = 0;

  render() {
    return html`
      <h1>app !!!</h1>

      <input
        type="text"
        value=${this.currentProtoId}
        @keyup=${e => (this.currentProtoId = e.target.value)}
      />

      <input
        type="range"
        min="0"
        max="8"
        value=${this.currentQuality}
        @change=${e => (this.currentQuality = e.target.value)}
      />

      <composited-card
        protoId=${this.currentProtoId}
        quality=${this.currentQuality}
        responsiveSrcsetSizes="90vw"
      ></composited-card>
    `;
  }
}
