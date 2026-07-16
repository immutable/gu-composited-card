import qualityData from './data/quality.json';

// Only the 5 basic qualities are wired up for now — the rest of
// data/quality.json (variants, mythic, animated, 11-34) needs a composition
// (v2) resolver that substitutes {type}/{god}/{id} into class_properties,
// which doesn't exist yet. Kept the full source file copied in so that
// resolver can be built later without re-sourcing the data.
const BASIC_QUALITY_VALUES = ['1', '2', '3', '4', '5'];

export const qualityOptions = qualityData
  .filter((entry) => BASIC_QUALITY_VALUES.includes(entry.class_value))
  .map((entry) => ({ value: entry.class_value, label: entry.class_properties.name }))
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
