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

function populateSelects() {
  Object.entries(selectFieldOptions).forEach(([fieldName, options]) => {
    form.elements[fieldName].innerHTML = options
      .map((opt) => `<option value="${opt.value}">${opt.label}</option>`)
      .join('');
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

function buildInputProtoData(data) {
  const protoData = {
    id: CUSTOM_ART_ID,
    type: data.type,
    name: data.name,
    rarity: data.rarity,
    god: data.god,
    set: data.set,
    mana: Number(data.mana),
    effect: data.effect,
  };
  if (data.tribe && data.tribe !== 'none') protoData.tribe = data.tribe;
  if (data.type === 'creature') {
    protoData.attack = Number(data.attack);
    protoData.health = Number(data.health);
  }
  return protoData;
}

function renderCard(data, hasArt) {
  cardMount.innerHTML = '';
  if (!data || !hasArt) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  const card = document.createElement('composited-card');
  card.style.width = '100%';
  card.quality = Number(data.quality);
  card.responsiveSrcsetSizes = '320px';
  card.illustrationSource = `${window.location.origin}${CUSTOM_ART_BASE_PATH}`;
  card.inputProtoData = buildInputProtoData(data);
  cardMount.appendChild(card);
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

  const hasArt = await checkArtExists();
  renderArtPreview(hasArt);
  renderCard(stored, hasArt);
}

init();
