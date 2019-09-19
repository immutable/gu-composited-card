# \<composited-card\>

A simple, framework agnostic [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to facilitate the display of [Gods Unchained](https://godsunchained.com/) card element(s).

## Component inputs

### @property({ type: Number }) protoId

A card's id/proto number. Either a protoId or inputProtoData must be provided for a card to render.

### @property({ type: Object }) inputProtoData

All the information needed to render a card. When this complete input is provided, the composited-card component will skip the card-data endpoint call.
This input should contain the following fields:

```
type: string;
effect: string;
name: string;
rarity: string;
god: string;
set: string;
tribe: string;
mana: number;
id: number;
attack: number;
health: number;
```

### @property({ type: Number }) quality (0 - 8)

OPTIONAL: a card's quality setting. When this input is missing, the a default quality setting of 0 will be used for all artwork/layers. 0 = bottom quality, 1 = plain quality, ... 8 = mythic/best quality

### @property({ type: String }) responsiveSrcsetSizes

OPTIONAL: a sizes string to indicate to the browser, roughly how big images will be once they are rendered into the layout. If this input is missing, the cards will automatically use the lowest resolution assets available. To read more about this syntax and how it's used, [go here](https://css-tricks.com/sometimes-sizes-is-quite-important/). \*NOTE: this needs to be an absolute measurement to work. For relative measurements, use calc() with vw.

## To use in any web project

```
$ yarn add composited-card
```

and then embed it inside any markup by using the following tag:

```
<composited-card
  protoId="584"
  quality="7"
  responsiveSrcsetSizes="(min-width: 600px) 160px, 320px"
></composited-card>
```

## View a demo page

load up a test page, with many different card types and sizes

```
$ yarn dev:demo
```

## For component contributers

### Install dependencies (for component development)

```
$ yarn install
```

### Viewing/developing docs

```
$ yarn dev:docs
```

### Building for prod

```
$ yarn build
```
