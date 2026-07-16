import '../src/composited-card.component';
import {
  qualityOptions,
  typeOptions,
  rarityOptions,
  godOptions,
  setOptions,
  tribeOptions,
  CUSTOM_ART_ID,
  CUSTOM_ART_BASE_PATH,
} from './config';
import { resolveComposition } from './composition-resolver';
import { exportCardAsSvg } from './export-card';

const STORAGE_KEY = 'gu-artist-tool-form';
const TEXT_FIELDS = ['quality', 'type', 'name', 'rarity', 'god', 'set', 'tribe', 'mana', 'attack', 'health', 'effect'];

// View settings (background color, preview size) are kept separate from the
// card-data form above — they're viewer preferences, not card data, so they
// apply live and survive a "Clear" (which only resets card data + art).
const VIEW_STORAGE_KEY = 'gu-artist-tool-view';
const DEFAULT_VIEW_SETTINGS = { bgColor: '#202020', size: 400 };
const HEX_COLOR_RE = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

const form = document.getElementById('artist-form');
const cardWrapper = document.getElementById('card-wrapper');
const cardMount = document.getElementById('card-mount');
const emptyState = document.getElementById('empty-state');
const artPreview = document.getElementById('current-art-preview');
const clearBtn = document.getElementById('clear-btn');
const exportBtn = document.getElementById('export-btn');
const exportStatus = document.getElementById('export-status');
const bgColorText = document.getElementById('bg-color-text');
const bgColorPicker = document.getElementById('bg-color-picker');
const sizeSlider = document.getElementById('size-slider');
const sizeValueLabel = document.getElementById('size-value');

const selectFieldOptions = {
  quality: qualityOptions,
  type: typeOptions,
  rarity: rarityOptions,
  god: godOptions,
  set: setOptions,
  tribe: tribeOptions,
};

function renderGroupedOptions(options) {
  const groups = new Map();
  options.forEach((opt) => {
    if (!groups.has(opt.group)) groups.set(opt.group, []);
    groups.get(opt.group).push(opt);
  });
  return Array.from(groups.entries())
    .map(
      ([group, opts]) => `
        <optgroup label="${group}">
          ${opts.map((opt) => `<option value="${opt.value}">${opt.label}</option>`).join('')}
        </optgroup>
      `,
    )
    .join('');
}

function populateSelects() {
  Object.entries(selectFieldOptions).forEach(([fieldName, options]) => {
    form.elements[fieldName].innerHTML = options.length && options[0].group
      ? renderGroupedOptions(options)
      : options.map((opt) => `<option value="${opt.value}">${opt.label}</option>`).join('');
  });
}

function toggleCreatureFields() {
  const isCreature = form.elements.type.value === 'creature';
  form.elements.attack.disabled = !isCreature;
  form.elements.health.disabled = !isCreature;
}

function loadStoredData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function applyDataToForm(data) {
  TEXT_FIELDS.forEach((key) => {
    if (data[key] !== undefined) form.elements[key].value = data[key];
  });
  toggleCreatureFields();
}

function getQualityOption(value) {
  return qualityOptions.find((opt) => opt.value === value);
}

// Basic qualities render via compositionVersion=1 (inputProtoData + quality
// number), unchanged. Variant/image qualities render via
// compositionVersion=2 — the composition object is resolved from
// quality.json's class_properties (see composition-resolver.js).
function buildCardProps(data) {
  const qualityOption = getQualityOption(data.quality);
  const cardData = {
    id: CUSTOM_ART_ID,
    type: data.type,
    name: data.name,
    rarity: data.rarity,
    god: data.god,
    set: data.set,
    mana: Number(data.mana),
    effect: data.effect,
  };
  if (data.tribe && data.tribe !== 'none') cardData.tribe = data.tribe;
  if (data.type === 'creature') {
    cardData.attack = Number(data.attack);
    cardData.health = Number(data.health);
  }

  if (!qualityOption || qualityOption.compositionVersion === 1) {
    return { compositionVersion: 1, cardData };
  }

  return {
    compositionVersion: 2,
    cardData: { ...cardData, composition: resolveComposition(qualityOption.classProperties, cardData) },
  };
}

// Kept so the size slider can update the already-mounted card's
// responsiveSrcsetSizes live, instead of only applying on next Generate.
let currentCard = null;

function renderCard(data, hasArt) {
  cardMount.innerHTML = '';
  currentCard = null;
  if (!data || !hasArt) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  const { compositionVersion, cardData } = buildCardProps(data);

  const card = document.createElement('composited-card');
  card.style.width = '100%';
  card.responsiveSrcsetSizes = `${loadViewSettings().size}px`;
  card.illustrationSource = `${window.location.origin}${CUSTOM_ART_BASE_PATH}`;
  card.compositionVersion = compositionVersion;

  if (compositionVersion === 1) {
    card.quality = Number(data.quality);
    card.inputProtoData = cardData;
  } else {
    card.inputCompositionData = cardData;
  }

  cardMount.appendChild(card);
  currentCard = card;
}

function renderArtPreview(hasArt) {
  artPreview.innerHTML = hasArt
    ? `Current art:<img src="${CUSTOM_ART_BASE_PATH}/art2/256/${CUSTOM_ART_ID}.jpg?t=${Date.now()}" alt="current art" />`
    : 'No artwork uploaded yet.';
}

async function checkArtExists() {
  const res = await fetch('/api/upload-art/status');
  const { exists } = await res.json();
  return exists;
}

function collectFormData() {
  const data = {};
  TEXT_FIELDS.forEach((key) => {
    data[key] = form.elements[key].value;
  });
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const data = collectFormData();
  const file = form.elements.art.files[0];

  if (file) {
    await fetch('/api/upload-art', {
      method: 'POST',
      headers: { 'Content-Type': file.type || 'image/jpeg' },
      body: file,
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.location.reload();
}

async function handleClear(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  await fetch('/api/upload-art', { method: 'DELETE' });
  window.location.reload();
}

async function handleExport() {
  if (!currentCard) {
    exportStatus.textContent = 'Generate a card first.';
    return;
  }

  exportBtn.disabled = true;
  exportBtn.textContent = 'Exporting…';
  exportStatus.textContent = '';

  try {
    const blob = await exportCardAsSvg(currentCard);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(form.elements.name.value || 'card').trim().replace(/\s+/g, '-')}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    exportStatus.textContent = `Export failed: ${err.message}`;
  } finally {
    exportBtn.disabled = false;
    exportBtn.textContent = 'Export SVG';
  }
}

function loadViewSettings() {
  const raw = localStorage.getItem(VIEW_STORAGE_KEY);
  return raw ? { ...DEFAULT_VIEW_SETTINGS, ...JSON.parse(raw) } : { ...DEFAULT_VIEW_SETTINGS };
}

function saveViewSettings(settings) {
  localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(settings));
}

function applyBackgroundColor(color) {
  cardWrapper.style.background = color;
}

function applySize(size) {
  cardMount.style.width = `${size}px`;
  sizeValueLabel.textContent = `${size}px`;
}

function initViewSettings() {
  const settings = loadViewSettings();

  bgColorText.value = settings.bgColor;
  bgColorPicker.value = HEX_COLOR_RE.test(settings.bgColor) && settings.bgColor.length === 7
    ? settings.bgColor
    : DEFAULT_VIEW_SETTINGS.bgColor;
  sizeSlider.value = settings.size;
  applyBackgroundColor(settings.bgColor);
  applySize(settings.size);

  bgColorText.addEventListener('input', () => {
    const value = bgColorText.value.trim();
    if (!HEX_COLOR_RE.test(value)) return;
    applyBackgroundColor(value);
    if (value.length === 7) bgColorPicker.value = value;
    saveViewSettings({ ...loadViewSettings(), bgColor: value });
  });

  bgColorPicker.addEventListener('input', () => {
    const value = bgColorPicker.value;
    bgColorText.value = value;
    applyBackgroundColor(value);
    saveViewSettings({ ...loadViewSettings(), bgColor: value });
  });

  sizeSlider.addEventListener('input', () => {
    const value = Number(sizeSlider.value);
    applySize(value);
    saveViewSettings({ ...loadViewSettings(), size: value });
    if (currentCard) currentCard.responsiveSrcsetSizes = `${value}px`;
  });
}

async function init() {
  populateSelects();
  initViewSettings();

  const stored = loadStoredData();
  if (stored) applyDataToForm(stored);
  else toggleCreatureFields();

  form.elements.type.addEventListener('change', toggleCreatureFields);
  form.addEventListener('submit', handleSubmit);
  clearBtn.addEventListener('click', handleClear);
  exportBtn.addEventListener('click', handleExport);

  const hasArt = await checkArtExists();
  renderArtPreview(hasArt);
  renderCard(stored, hasArt);
}

init();
