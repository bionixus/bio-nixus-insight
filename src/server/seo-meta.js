const TITLE_MAX = 60;

/** Code points, not UTF-16 units, so Arabic titles match the 60-character budget. */
export function seoTitleCodePoints(value) {
  return Array.from(String(value || '')).length;
}

export class SeoTitleOverflowError extends Error {
  constructor(title, max) {
    const length = seoTitleCodePoints(title);
    super(
      `[seo-title] Branded title is ${length} characters (max ${max}). Shorten the source so it already fits. Title: "${title}"`,
    );
    this.name = 'SeoTitleOverflowError';
    this.title = title;
    this.length = length;
    this.max = max;
  }
}
const DESC_MIN = 120;
const DESC_MAX = 130;

const DEFAULT_DESC_PAD =
  ' BioNixus healthcare market research for pharmaceutical, medtech, and payer teams in GCC, MENA, and Europe.';

function decodeHtmlEntities(input) {
  let out = String(input || '');
  for (let pass = 0; pass < 4; pass += 1) {
    const next = out.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body) => {
      if (body[0] === '#') {
        const hex = body[1] === 'x' || body[1] === 'X';
        const code = hex ? Number.parseInt(body.slice(2), 16) : Number.parseInt(body.slice(1), 10);
        if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return entity;
        return String.fromCodePoint(code);
      }
      const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' };
      return named[body.toLowerCase()] ?? entity;
    });
    if (next === out) break;
    out = next;
  }
  return out;
}

function stripTags(input) {
  return decodeHtmlEntities(input)
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
  if (titleHasBrandSuffix(raw)) return fitBrandedSeoTitle(raw, TITLE_MAX, 'BioNixus', 'fallback');
  if (seoTitleCodePoints(raw) <= TITLE_MAX) return raw || fallback;
  const phrase = cleanPhraseToBudget(raw, TITLE_MAX);
  const result = phrase || fallback;
  if (result !== raw) recordSeoTitleFallback(raw, result);
  return result;
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

const DANGLING_TAIL =
  /^(?:a|an|and|at|by|for|from|in|of|on|or|the|to|with|no|de|da|do|del|di|du|em|für|fur|pour|vs|versus|abu|saudi|new|south|united|middle|côte|cote|&)$/i;

/** Titles shortened at runtime because they came from CMS copy or a slug. */
export const seoTitleFallbackLog = [];

function tailToken(word) {
  return String(word || '').replace(/[|.,;:'’"“”\-–—&]+$/g, '');
}

function tailIsDangling(words) {
  if (!words.length) return false;
  return DANGLING_TAIL.test(tailToken(words[words.length - 1]));
}

/**
 * Drop an unmatched "(" and everything after it.
 * Word-budget cuts otherwise leave `(2026` when the closing token was the next word.
 */
export function stripUnclosedParenthetical(text) {
  const stack = [];
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '(') stack.push(i);
    else if (ch === ')' && stack.length > 0) stack.pop();
  }
  if (stack.length === 0) return text;
  return text
    .slice(0, stack[0])
    .replace(/[\s|.,;:\-–—&]+$/g, '')
    .trim();
}

function phraseWithinBudget(words, budget) {
  const next = [...words];
  while (next.length > 1 && (seoTitleCodePoints(next.join(' ')) > budget || tailIsDangling(next))) {
    next.pop();
  }
  while (next.length > 0 && tailIsDangling(next)) next.pop();
  const phrase = next.join(' ').trim();
  if (next.length > 0 && seoTitleCodePoints(phrase) <= budget) return phrase;
  return '';
}

/** Drop words from the end until the phrase fits and does not end on a dangling token. No ellipsis. */
export function cleanPhraseToBudget(text, budget) {
  const words = String(text || '')
    .replace(/[.…]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
  while (words.length > 1 && (seoTitleCodePoints(words.join(' ')) > budget || tailIsDangling(words))) {
    words.pop();
  }
  while (words.length > 0 && tailIsDangling(words)) words.pop();
  if (words.length > 0) {
    words[words.length - 1] = words[words.length - 1].replace(/[|.,;:\-–—&\s]+$/g, '');
  }
  while (words.length > 0 && tailIsDangling(words)) words.pop();
  const joined = words.join(' ').trim();
  const closed = stripUnclosedParenthetical(joined);
  const phrase = closed === joined ? joined : phraseWithinBudget(closed.split(' ').filter(Boolean), budget);
  if (seoTitleCodePoints(phrase) <= budget) return phrase;
  return '';
}

/**
 * Word-boundary truncation used by the SSR shell for unbranded titles over 60.
 * An unmatched "(" is removed before the ellipsis so the year group is not left open.
 */
export function truncateSeoTitleAtWordBoundary(text, max) {
  const slice = text.slice(0, Math.max(0, max - 1));
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > Math.floor(max * 0.45) ? slice.slice(0, lastSpace) : slice;
  const trimmed = cut.trim().replace(/(?:\s*\|\s*\.?)+$/g, '').replace(/[|.,;:\-–—\s]+$/g, '');
  const closed = stripUnclosedParenthetical(trimmed);
  const base = closed || trimmed.replace(/[()]/g, '').trim();
  return `${base}…`;
}

function recordSeoTitleFallback(source, result) {
  seoTitleFallbackLog.push({ source, result });
  console.warn(`[seo-title] fallback "${source}" -> "${result}"`);
}

function stripBrand(title, brand) {
  let core = dedupePipeBioNixusTail(String(title || '').replace(/\s+/g, ' ').trim());
  core = core.replace(/(?:\s*\|\s*BioNixus)+\s*(?:\|\s*\.?)?\s*$/i, '').trim();
  const brandEsc = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const exactBrand = new RegExp(`\\s*\\|\\s*${brandEsc}\\s*$`, 'i');
  while (exactBrand.test(core)) core = core.replace(exactBrand, '').trim();
  return core.replace(/[.…]+$/g, '').trim();
}

/**
 * Append " | {brand}" when the branded title already fits.
 * `strict` throws above `max`. `fallback` never throws and never ships a cut token.
 */
export function fitBrandedSeoTitle(title, max = TITLE_MAX, brand = 'BioNixus', fit = 'fallback') {
  const brandSuffix = ` | ${brand}`;
  const core = stripBrand(String(title || ''), brand);
  if (!core) return brand;
  const fitted = `${core}${brandSuffix}`;
  const fits = seoTitleCodePoints(fitted) <= max && !tailIsDangling(core.split(' '));
  if (fits) return fitted;
  if (fit === 'strict') throw new SeoTitleOverflowError(fitted, max);
  const phrase = cleanPhraseToBudget(core, Math.max(12, max - brandSuffix.length));
  let result = phrase ? `${phrase}${brandSuffix}` : '';
  if (!result || seoTitleCodePoints(result) > max || tailIsDangling(phrase.split(' '))) {
    const bare = cleanPhraseToBudget(core, max);
    result = bare || brand;
  }
  if (result !== fitted) recordSeoTitleFallback(fitted, result);
  return result;
}

/**
 * Use a CMS seoTitle unchanged when it already fits.
 * Add the brand only when that still fits. Otherwise fall back to a clean phrase.
 */
export function seoTitleWithBrandOnce(primary, brand = 'BioNixus') {
  const clean = String(primary || '').replace(/\s+/g, ' ').trim();
  if (!clean) return brand;
  const alreadyFits = seoTitleCodePoints(clean) <= 60 && !tailIsDangling(clean.split(' ')) && !/[.…]$/.test(clean);
  if (alreadyFits && !titleHasBrandSuffix(clean) && seoTitleCodePoints(`${clean} | ${brand}`) > 60) {
    return clean;
  }
  return fitBrandedSeoTitle(clean, TITLE_MAX, brand, 'fallback');
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

