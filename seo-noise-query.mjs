/**
 * Strip query params that should not define a canonical URL (internal SSR flags,
 * tracking, ads). Used by Express SSR and Vercel api/indexnow-key SSR handler.
 */

const NOISE_KEYS = new Set([
  '__ssr',
  'trk',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'mc_cid',
  'mc_eid',
]);

/**
 * @param {string} input pathname with optional ?query (e.g. /es?__ssr=1)
 * @returns {{ pathname: string, search: string, full: string, changed: boolean }}
 */
export function normalizePathnameAndQuery(input) {
  const raw = typeof input === 'string' ? input.trim() : '';
  const withoutHash = raw.split('#')[0] ?? '';
  const qIndex = withoutHash.indexOf('?');
  const pathname = (qIndex >= 0 ? withoutHash.slice(0, qIndex) : withoutHash) || '/';
  const queryString = qIndex >= 0 ? withoutHash.slice(qIndex + 1) : '';
  const params = new URLSearchParams(queryString);
  let changed = false;
  for (const key of [...params.keys()]) {
    const lower = key.toLowerCase();
    if (NOISE_KEYS.has(lower) || lower.startsWith('utm_')) {
      params.delete(key);
      changed = true;
    }
  }
  const search = params.toString();
  const full = search ? `${pathname}?${search}` : pathname;
  return { pathname, search: search ? `?${search}` : '', full, changed };
}

/**
 * Single 301 target: strip noise query params + trim trailing slash (except /).
 * @param {string} input
 * @returns {{ full: string, changed: boolean, original: string }}
 */
export function canonicalRedirectTarget(input) {
  const original = (typeof input === 'string' ? input : '').split('#')[0] || '/';
  const n = normalizePathnameAndQuery(original);
  let full = n.full;
  const pathOnly = full.split('?')[0] || '/';
  let changed = n.changed;
  if (pathOnly !== '/' && pathOnly.endsWith('/')) {
    const qs = full.includes('?') ? full.slice(full.indexOf('?')) : '';
    const trimmed = pathOnly.replace(/\/+$/, '') || '/';
    full = trimmed + qs;
    changed = true;
  }
  return { full, changed, original };
}
