// Builds the ICompositionData shape (frame/rosette/gems/wreath/lock/
// tribe_bar/set) that compositionVersion=2 rendering expects, from a
// quality.json class_properties entry plus the card's own type/god/id/set/
// rarity. Only needed for qualities that have comp-* fields at all — the 5
// basic qualities don't, and keep rendering via compositionVersion=1
// unchanged (see artist.js).
//
// Each comp-* field is either:
//  - already a fully-resolved array (eg. a variant quality's
//    "comp-rosette": ["variants", "variant_tides_1"]) -> used as-is
//  - a template string (eg. "comp-rosette": "{god}_diamond") -> substitute
//    placeholders, then pair with the relevant folder value (type/god)
//  - absent -> falls back to the normal (non-quality-specific) convention,
//    or an empty array where there's no sensible fallback (eg. tribe_bar)

function substitute(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] || '');
}

// For fields whose rendered URL is `.../<folder>/<size>/<filename>` (frame
// uses type as the folder, rosette uses god).
function resolveFolderField(rawValue, folderValue, vars) {
  if (Array.isArray(rawValue)) return rawValue;
  if (typeof rawValue !== 'string') return [];
  return [folderValue, substitute(rawValue, vars)];
}

// For fields whose rendered URL is `.../<size>/<filename>` (no folder
// segment derived from the card itself).
function resolveFlatField(rawValue, vars) {
  if (Array.isArray(rawValue)) return rawValue;
  if (typeof rawValue !== 'string') return [];
  return [substitute(rawValue, vars)];
}

export function resolveComposition(classProperties, card) {
  const vars = { type: card.type, god: card.god, id: card.id };
  const props = classProperties;

  return {
    illustration: [card.id],
    frame: resolveFolderField(props['comp-frame'], card.type, vars),
    rosette: resolveFolderField(props['comp-rosette'], card.god, vars),
    gems: resolveFlatField(props['comp-gems'] !== undefined ? props['comp-gems'] : `rarity_${card.rarity}`, vars),
    wreath: resolveFlatField(props['comp-wreath'], vars),
    lock: [],
    tribe_bar: resolveFlatField(props['comp-tribe'], vars),
    set: props['comp-set'] !== undefined ? props['comp-set'] : [card.set],
  };
}
