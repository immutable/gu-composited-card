# \<composited-card\>

A simple, framework agnostic [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to facilitate the display of [Gods Unchained](https://godsunchained.com/) card element(s).

## Component inputs

### @property({ type: Number }) protoId

A card's id/proto number. Either a protoId or inputProtoData must be provided for a card to render.

### @property({ type: Object }) inputProtoData

All the information needed to render a card. When this complete input is provided, the composited-card component will skip the card-data endpoint call.
This input should contain the following fields:

```javascript
type: string; // "creature" | "weapon" | "spell" | "god-power";
effect: string;
name: string;
rarity: string; // "common" | "rare" | "epic" | "legendary" | "mythic";
god: string; // "war" | "magic" | "death" | "deception" | "nature" | "light";
set: string; // "genesis" | "core" | "etherbots"
tribe: string; // "amazon" | "aether" | "nether" | "atlantean" | "anubian" | "mystic" | "viking" | "dragon" | "guild" | "olympian" | "structure" | "wild"
mana: number;
id: number;
attack: number;
health: number;
```

### @property({ type: Boolean }) useLegacyQualityMapping

OPTIONAL: A new kind of quality system has been developed in order to better support the on-chaining process for cards. This new system has a reduced number of qualities, in reversed order. We will be eventually deprecating the old quality system, but for now you can choose to use the old quality numbering system.


### @property({ type: Number }) quality (5 - 1) | (0 - 7 for legacy)

OPTIONAL: a card's quality setting. When this input is missing, the a default quality setting of 5 will be used for all artwork/layers. 5 = 'plain', ... 1 = 'diamond'. 

*NOTE: if you choose to use the legacy quality mappings, then 0 & 1 = 'plain' ... 8 = 'diamond'.


### @property({ type: String }) responsiveSrcsetSizes

OPTIONAL: a sizes string to indicate to the browser, roughly how big images will be once they are rendered into the layout. If this input is missing, the cards will automatically use the lowest resolution assets available. To read more about this syntax and how it's used, go [here](https://css-tricks.com/sometimes-sizes-is-quite-important/). \*NOTE: this needs to be an absolute measurement to work. For relative measurements, use calc() with vh/vw.

## To use in any web project

```bash
$ yarn add composited-card
```
then import it in your app's entry point eg:
```javascript
import 'composited-card';
```
or you can also simply embed the bundled web component script in any HTML page eg:
```html
<script src="https://unpkg.com/composited-card@latest/dist/composited-card.packed.js"></script>
```
and then use it inside any markup file by inserting the following web-component tag:

```html
<composited-card
  protoId="584"
  quality="4"
  responsiveSrcsetSizes="(min-width: 600px) 160px, 320px"
></composited-card>
```
*Note: just about all modern javascript frameworks can support and work with WebComponents, however some will need varying amounts of configuration to do so. To read more about implementing a web component into a specific framerwork, go [here](https://custom-elements-everywhere.com).

## View a demo page

load up a test page, with many different card types and sizes

```bash
$ yarn dev:demo
```

## For component contributers

### Install dependencies

```bash
$ yarn install
```

### Viewing/developing docs

```bash
$ yarn dev:docs
```

### Building for prod

```bash
$ yarn build
```
