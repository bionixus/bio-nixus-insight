#!/usr/bin/env node
/**
 * Post-build guard: import the SSR bundle and render critical routes.
 * Catches undefined symbols at module init and broken render paths before deploy.
 * Uses empty initialData (no Sanity/network) so CI stays fast and offline-safe.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const entryPath = path.join(root, '..', 'dist', 'server', 'server-entry.js');

const CRITICAL_PATHS = [
  '/',
  '/healthcare-market-research',
  '/fr/healthcare-market-research',
  '/fr/healthcare-market-research/france',
  '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
  '/market-research-uae',
  '/ar/market-research-uae',
  '/real-world-evidence-gcc',
];

let serverEntry;
try {
  serverEntry = await import(entryPath);
} catch (error) {
  console.error('verify-ssr-bundle: failed to import server-entry.js');
  console.error(error);
  process.exit(1);
}

const { render } = serverEntry;
if (typeof render !== 'function') {
  console.error('verify-ssr-bundle: server-entry.js missing render export');
  process.exit(1);
}

for (const pathname of CRITICAL_PATHS) {
  try {
    const { html } = render(pathname, {});
    if (!html || html.length < 500) {
      throw new Error(`render returned empty or tiny HTML (${html?.length ?? 0} bytes)`);
    }
    console.log(`verify-ssr-bundle: OK ${pathname} (${html.length} bytes)`);
  } catch (error) {
    console.error(`verify-ssr-bundle: FAILED ${pathname}`);
    console.error(error);
    process.exit(1);
  }
}

console.log('verify-ssr-bundle: all critical routes passed');
