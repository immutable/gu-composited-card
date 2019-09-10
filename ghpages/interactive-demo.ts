import { LitElement, html, customElement, property } from 'lit-element';

@customElement('demo-app')
export class InteractiveDemo extends LitElement {
  /**
   * Create an observed property. Triggers update on change.
   */
  @property() currentProtoId = 1;

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <h1>app !!!</h1>

      <input
        type="text"
        value=${this.currentProtoId}
        @keyup=${e => (this.currentProtoId = e.target.value)}
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
        quality="8"
        responsiveSrcsetSizes="90vw"
      ></composited-card>
    `;
  }
}
