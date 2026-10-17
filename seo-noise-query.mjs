/**
 * Query handling for Express SSR, Vercel middleware, and the indexnow SSR handler.
 *
 * Campaign parameters (utm_*, gclid, fbclid, Mailchimp mc_*) stay on the URL so
 * analytics can read them. Only internal flags and the leaked rewrite capture
 * (`path` / `splat`) are removed, and only those trigger a 301.
 */

/** Internal flags and the named-capture leak. Never campaign attribution. */
const STRIP_KEYS = new Set([
  '__ssr',
  'trk',
  'path',
  'splat',
]);

/** Keys the catch-all rewrite adds. They are not part of the browser URL. */
const REWRITE_CAPTURE_KEYS = new Set(['url', '__ssr', 'path', 'splat']);

/**
 * @param {string} key
 */
export function isAttributionQueryKey(key) {
  const lower = String(key || '').toLowerCase();
  return (
    lower.startsWith('utm_') ||
    lower === 'gclid' ||
    lower === 'fbclid' ||
    lower === 'mc_cid' ||
    lower === 'mc_eid'
  );
}

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
    if (STRIP_KEYS.has(key.toLowerCase())) {
      params.delete(key);
      changed = true;
    }
  }
  const search = params.toString();
  const full = search ? `${pathname}?${search}` : pathname;
  return { pathname, search: search ? `?${search}` : '', full, changed };
}

/**
 * Browser path for a rewritten SSR request. Drops rewrite-capture keys (`path`,
 * `splat`, `url`, `__ssr`) so they are never copied onto a 301 Location.
 * Attribution query params are kept.
 *
 * @param {string} rewrittenPath pathname, optionally with its own query
 * @param {Record<string, string | string[] | undefined>} [extraQuery]
 */
export function publicPathFromRewrite(rewrittenPath, extraQuery) {
  const raw = typeof rewrittenPath === 'string' ? rewrittenPath.split('#')[0] : '/';
  const pathOnly = (raw.split('?')[0] || '/').startsWith('/')
    ? raw.split('?')[0] || '/'
    : `/${raw.split('?')[0] || ''}`;
  const params = new URLSearchParams(raw.includes('?') ? raw.slice(raw.indexOf('?') + 1) : '');
  const extra = extraQuery && typeof extraQuery === 'object' ? extraQuery : {};
  for (const [key, rawValue] of Object.entries(extra)) {
    if (REWRITE_CAPTURE_KEYS.has(key.toLowerCase())) continue;
    const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
    if (typeof value === 'string') params.set(key, value);
  }
  const search = params.toString();
  return search ? `${pathOnly}?${search}` : pathOnly;
}

/**
 * Single 301 target: strip internal query flags and the ?path= leak, and trim a
 * trailing slash (except /). utm_*, gclid, and fbclid are preserved.
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

/**
 * True when SSR output is the app NotFound route (must return HTTP 404, not 200).
 * Helmet attribute order varies; avoid brittle substring checks to prevent soft-404 in GSC.
 * @param {string} headTags
 * @param {string} appHtml
 */
export function isSsrNotFoundPage(headTags, appHtml) {
  if (typeof appHtml === 'string' && appHtml.includes('data-route-status="404"')) return true;
  const h = typeof headTags === 'string' ? headTags : '';
  if (/name=["']prerender-status["'][^>]*\bcontent=["']404["']/i.test(h)) return true;
  if (/\bcontent=["']404["'][^>]*name=["']prerender-status["']/i.test(h)) return true;
  return false;
}
