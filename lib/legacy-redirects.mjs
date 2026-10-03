/**
 * Single loader for config/legacy-redirects.json.
 * Used by server.js, api/indexnow-key.ts, and api/blog/[slug].js so crawler
 * and human 301s stay on the same map.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

/** @type {Record<string, string>} */
export const LEGACY_REDIRECTS = JSON.parse(
  fs.readFileSync(path.join(root, 'config', 'legacy-redirects.json'), 'utf-8'),
);

/**
 * @param {...string} paths
 * @returns {string[]}
 */
function redirectLookupCandidates(...paths) {
  const seen = new Set();
  const out = [];
  const queue = paths.filter((p) => typeof p === 'string' && p.length > 0);
  for (const raw of queue) {
    const variants = [raw];
    if (raw.length > 1 && raw.endsWith('/')) variants.push(raw.replace(/\/+$/, '') || '/');
    if (raw.endsWith('/index.html')) variants.push(raw.replace(/\/index\.html$/, '') || '/');
    for (const p of variants) {
      if (seen.has(p)) continue;
      seen.add(p);
      out.push(p);
    }
  }
  return out;
}

/**
 * @param {Record<string, string>} map
 * @param {...string} paths
 * @returns {string | null}
 */
export function lookupRedirect(map, ...paths) {
  for (const p of redirectLookupCandidates(...paths)) {
    const hit = map[p];
    if (hit) return hit;
  }
  return null;
}

/**
 * @param {string} pathname
 * @param {string} [decodedPathname]
 * @returns {string | null}
 */
export function resolveLegacyRedirect(pathname, decodedPathname = pathname) {
  return lookupRedirect(LEGACY_REDIRECTS, pathname, decodedPathname);
}
