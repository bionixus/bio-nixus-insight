const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 130;

const DEFAULT_DESC_PAD =
  ' BioNixus healthcare market research for pharmaceutical, medtech, and payer teams in GCC, MENA, and Europe.';

function stripTags(input) {
  return String(input || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function withEllipsis(text, max) {
  const trimmed = String(text || '').trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, Math.max(0, max - 3)).trim()}...`;
}

export function normalizeSeoTitle(title, fallback = 'BioNixus') {
  const raw = String(title || fallback).replace(/\s+/g, ' ').trim();
  if (titleHasBrandSuffix(raw)) return fitBrandedSeoTitle(raw, TITLE_MAX);
  return withEllipsis(raw || fallback, TITLE_MAX);
}

export function dedupePipeBioNixusTail(title) {
  let t = String(title || '').replace(/\s+/g, ' ').trim();
  while (/\|\s*BioNixus\s*\|\s*BioNixus/i.test(t)) {
    t = t.replace(/\s*\|\s*BioNixus\s*\|\s*BioNixus/gi, ' | BioNixus').trim();
  }
  return t;
}

const PLAIN_BRAND_RE = /(?:\s*\|\s*BioNixus\s*)+$/i;
const EXTENDED_BRAND_RE = /\|\s*BioNixus\s+(?:Case\s+Studies|Case\s+Study|Blog|Consultancy)\s*$/i;

/** True when a title already carries "| BioNixus" or was cut down to a dangling pipe. */
export function titleHasBrandSuffix(title) {
  const clean = String(title || '').replace(/\s+/g, ' ').trim();
  if (EXTENDED_BRAND_RE.test(clean)) return false;
  return PLAIN_BRAND_RE.test(clean) || /\|\s*\.?\s*$/.test(clean);
}

function trimBaseAtWordBoundary(text, max) {
  let core = String(text || '').replace(/\s+/g, ' ').trim();
  core = core.replace(/(?:\s*\|\s*\.?)+$/g, '').replace(/[|.,;:\-–—\s]+$/g, '').trim();
  if (core.length <= max) return core;
  const slice = core.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > Math.floor(max * 0.45) ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/(?:\s*\|\s*\.?)+$/g, '').replace(/(?:\s+&\s*|\s+and)$/i, '').replace(/[|.,;:\-–—&\s]+$/g, '').trim();
}

/**
 * Trim the base title at a word boundary, then append " | {brand}".
 * Never drops the brand and never leaves a dangling "|.".
 */
export function fitBrandedSeoTitle(title, max = TITLE_MAX, brand = 'BioNixus') {
  const brandSuffix = ` | ${brand}`;
  let core = dedupePipeBioNixusTail(String(title || '').replace(/\s+/g, ' ').trim());
  core = core.replace(/(?:\s*\|\s*BioNixus)+\s*(?:\|\s*\.?)?\s*$/i, '').trim();
  const brandEsc = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const exactBrand = new RegExp(`\\s*\\|\\s*${brandEsc}\\s*$`, 'i');
  while (exactBrand.test(core)) core = core.replace(exactBrand, '').trim();
  core = trimBaseAtWordBoundary(core, Math.max(12, max - brandSuffix.length));
  if (!core) return brand;
  return `${core}${brandSuffix}`;
}

/** One trailing brand token; trims the base at a word boundary before appending the brand. */
export function seoTitleWithBrandOnce(primary, brand = 'BioNixus') {
  return fitBrandedSeoTitle(primary, TITLE_MAX, brand);
}

export function formatMetaDescriptionInRange(seed, pad = DEFAULT_DESC_PAD) {
  let out = stripTags(seed).replace(/\s+/g, ' ').trim();
  if (!out) {
    out = 'BioNixus healthcare market research insights and services.';
  }

  const suffix = stripTags(pad);
  if (out.length < DESC_MIN && suffix) {
    out = stripTags(`${out}${suffix}`);
  }
  if (out.length < DESC_MIN) {
    out = stripTags(
      `${out} Trusted pharmaceutical and healthcare market research across GCC, MENA, and Europe.`,
    );
  }
  if (out.length > DESC_MAX) {
    out = withEllipsis(out, DESC_MAX);
  }
  return out;
}

export function buildSeoDescription({ preferred, bodySource, fallback }) {
  const preferredClean = stripTags(preferred || '');
  const body = stripTags(bodySource || '');
  const baseFallback = stripTags(
    fallback || 'BioNixus healthcare market research insights and services.',
  );

  const seed = preferredClean || body || baseFallback;
  return formatMetaDescriptionInRange(
    seed,
    body && body !== seed ? ` ${body}` : DEFAULT_DESC_PAD,
  );
}

