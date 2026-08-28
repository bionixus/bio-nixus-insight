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
 * @param {string} pathname
 * @param {string} [decodedPathname]
 * @returns {string | null}
 */
export function resolveLegacyRedirect(pathname, decodedPathname = pathname) {
  return LEGACY_REDIRECTS[pathname] ?? LEGACY_REDIRECTS[decodedPathname] ?? null;
}
