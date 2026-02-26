const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 155;

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

export function buildSeoDescription({ preferred, bodySource, fallback }) {
  const first = stripTags(preferred || '');
  const body = stripTags(bodySource || '');
  const baseFallback = stripTags(
    fallback || 'BioNixus healthcare market research insights and services.'
  );

  let out = first || body || baseFallback;
  if (!out) out = baseFallback;
  out = withEllipsis(out, DESC_MAX);

  if (out.length < DESC_MIN) {
    out = withEllipsis(stripTags(`${out} ${body} ${baseFallback}`), DESC_MAX);
  }
  if (out.length < DESC_MIN) {
    out = withEllipsis(`${out} Trusted insights across GCC, MENA, and Europe.`, DESC_MAX);
  }
  return out;
}

