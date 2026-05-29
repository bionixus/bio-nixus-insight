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
  return withEllipsis(title || fallback, TITLE_MAX);
}

export function dedupePipeBioNixusTail(title) {
  let t = String(title || '').replace(/\s+/g, ' ').trim();
  while (/\|\s*BioNixus\s*\|\s*BioNixus/i.test(t)) {
    t = t.replace(/\s*\|\s*BioNixus\s*\|\s*BioNixus/gi, ' | BioNixus').trim();
  }
  return t;
}

/** One trailing brand token; truncates primary + " | {brand}" to TITLE_MAX characters. */
export function seoTitleWithBrandOnce(primary, brand = 'BioNixus') {
  let core = dedupePipeBioNixusTail(String(primary || '').trim());
  core = core.replace(/(\s*\|\s*BioNixus(?:\s+Case\s+Studies)?\s*)+$/i, '').trim();
  const brandEsc = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const exactBrand = new RegExp(`\\s*\\|\\s*${brandEsc}\\s*$`, 'i');
  while (exactBrand.test(core)) {
    core = core.replace(exactBrand, '').trim();
  }
  if (!core) return normalizeSeoTitle(brand, brand);
  return normalizeSeoTitle(`${core} | ${brand}`, brand);
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

