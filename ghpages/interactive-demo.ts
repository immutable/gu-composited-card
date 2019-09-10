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
        inputProtoData='{ 
          "effect": "<strong>Roar:</strong> Obliterate a card in your hand. <strong>Afterlife:</strong> Draw a card.",
          "god": "death",
          "id": ${this.currentProtoId},
          "name": "Aaaaaaa aaaaaaaaa aaaaaaa",
          "rarity": "rare",
          "type": "weapon",
          "set": "core",
          "attack": 2,
          "tribe": "Amazon"
        }'
        quality=${this.currentQuality}
        responsiveSrcsetSizes="90vw"
      ></composited-card>
    `;
  }
}
