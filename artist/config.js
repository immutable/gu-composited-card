import qualityData from './data/quality.json';

// Basic qualities render via compositionVersion=1 (unchanged, no comp-*
// fields exist for these). Variant/image qualities render via
// compositionVersion=2, resolved through composition-resolver.js.
// "-animated" qualities (31-34) need real video assets we don't handle, and
// "mythic" (15) needs a real pre-existing card's art_id to resolve its
// frame/rosette/wreath — neither works generically for a prototype card, so
// both are excluded here.
const QUALITY_FAMILY = {
  1: 'Basic',
  2: 'Basic',
  3: 'Basic',
  4: 'Basic',
  5: 'Basic',
  11: 'Variant',
  12: 'Variant',
  13: 'Variant',
  14: 'Variant',
  16: 'Variant',
  17: 'Variant',
  18: 'Variant',
  19: 'Variant',
  21: 'Image',
  22: 'Image',
  23: 'Image',
  24: 'Image',
};

export const qualityOptions = qualityData
  .filter((entry) => QUALITY_FAMILY[entry.class_value] !== undefined)
  .map((entry) => {
    const family = QUALITY_FAMILY[entry.class_value];
    return {
      value: entry.class_value,
      label: entry.class_properties.name,
      group: family,
      compositionVersion: family === 'Basic' ? 1 : 2,
      classProperties: family === 'Basic' ? null : entry.class_properties,
    };
  })
  .sort((a, b) => Number(a.value) - Number(b.value));

export const typeOptions = [
  { value: 'creature', label: 'Creature' },
  { value: 'spell', label: 'Spell' },
];

export const rarityOptions = [
  { value: 'common', label: 'Common' },
  { value: 'rare', label: 'Rare' },
  { value: 'epic', label: 'Epic' },
  { value: 'legendary', label: 'Legendary' },
  { value: 'mythic', label: 'Mythic' },
];

export const godOptions = [
  { value: 'war', label: 'War' },
  { value: 'magic', label: 'Magic' },
  { value: 'death', label: 'Death' },
  { value: 'deception', label: 'Deception' },
  { value: 'nature', label: 'Nature' },
  { value: 'light', label: 'Light' },
];

// mirrors CardSet.cs's NamesMap — already-lowercase values. "etherbots"
// (plural) is used rather than the enum Map's "etherbot" backward-compat
// quirk, since that's the spelling composited-card's own README documents.
export const setOptions = [
  { value: 'genesis', label: 'Genesis' },
  { value: 'core', label: 'Core' },
  { value: 'etherbots', label: 'Etherbots' },
  { value: 'promo', label: 'Promotion' },
  { value: 'mythic', label: 'Mythic' },
  { value: 'trial', label: 'Trial of the Gods' },
  { value: 'welcome', label: 'Welcome set' },
  { value: 'order', label: 'Divine Order' },
  { value: 'mortal', label: 'Mortal Judgement' },
  { value: 'verdict', label: "Light's Verdict" },
  { value: 'wander', label: 'Winter Wanderlands' },
  { value: 'wolf', label: 'Band of the Wolf' },
  { value: 'atlantis', label: 'Atlantis' },
  { value: 'tides', label: 'Tides' },
  { value: 'dread', label: 'Dread Awakening' },
  { value: 'tower', label: 'Tower of Dread' },
  { value: 'fallen', label: 'Fallen Age' },
  { value: 'guardians', label: 'Guardians' },
  { value: 'revival', label: 'Revival' },
  { value: 'ascent', label: 'Age of Ascent' },
  { value: 'roots', label: 'Roots of Ruin' },
  { value: 'spoils', label: 'Spoils' },
  { value: 'plague', label: 'The Waking Plague' },
];

// mirrors TribeType.cs's NamesMap. "none" is handled specially in
// artist.js's submit handler — it's omitted from the card data entirely
// (not passed as the literal string "none"), matching the tribe-bar
// Valid/String gating fixed in composited-card.component.ts.
export const tribeOptions = [
  { value: 'none', label: 'None' },
  { value: 'aether', label: 'Aether' },
  { value: 'amazon', label: 'Amazon' },
  { value: 'anubian', label: 'Anubian' },
  { value: 'atlantean', label: 'Atlantean' },
  { value: 'dragon', label: 'Dragon' },
  { value: 'nether', label: 'Nether' },
  { value: 'olympian', label: 'Olympian' },
  { value: 'viking', label: 'Viking' },
  { value: 'guild', label: 'Guild' },
  { value: 'mystic', label: 'Mystic' },
  { value: 'structure', label: 'Structure' },
  { value: 'wild', label: 'Wild' },
  { value: 'pet', label: 'Pet' },
  { value: 'guardian', label: 'Guardian' },
  { value: 'everborn', label: 'Everborn' },
];

// Fixed illustration id/base path — the uploaded art always overwrites the
// same file, so there's no need for a real per-card id here.
export const CUSTOM_ART_ID = 'custom-art';
export const CUSTOM_ART_BASE_PATH = '/custom-art';
