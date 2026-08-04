/**
 * Fails the build if a real route would be 301-redirected away, or if any redirect loops.
 *
 * Guards two regressions found in the Aug 2026 crawl:
 *   - /quantitative-healthcare-market-research matched the legacy
 *     `{country}-{industry}-market-research` pattern, so it redirected to
 *     /healthcare-market-research/quantitative, which vercel.json redirected
 *     straight back — an infinite loop on a live page.
 *   - /brazil-healthcare-market-research was redirected to a thin fallback page.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { resolveLegacyCountryIndustryMarketResearchRedirect } from '../../lib/country-industry-redirects.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const routePaths = [
  ...new Set(
    [...readFileSync(join(root, 'src/routes.tsx'), 'utf8').matchAll(/path:\s*'([^']+)'/g)]
      .map((m) => m[1])
      .filter((p) => p.startsWith('/') && !p.includes(':') && !p.includes('*')),
  ),
];

const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const staticRedirects = new Map(
  (vercel.redirects || [])
    .filter((r) => typeof r.source === 'string' && !/[:*(]/.test(r.source))
    .map((r) => [r.source, r.destination]),
);

/** Follows both redirect layers from a path, returning the chain. */
function followRedirects(startPath, maxHops = 10) {
  const chain = [startPath];
  let current = startPath;
  for (let hop = 0; hop < maxHops; hop += 1) {
    const next =
      staticRedirects.get(current) ?? resolveLegacyCountryIndustryMarketResearchRedirect(current);
    if (!next || next === current) return { chain, looped: false };
    if (chain.includes(next)) return { chain: [...chain, next], looped: true };
    chain.push(next);
    current = next;
  }
  return { chain, looped: true };
}

const errors = [];

for (const path of routePaths) {
  const target = resolveLegacyCountryIndustryMarketResearchRedirect(path);
  if (target) {
    errors.push(
      `Live route ${path} is redirected to ${target}. Add it to DEDICATED_PAGE_PATHS in lib/country-industry-redirects.mjs.`,
    );
  }
}

for (const path of [...routePaths, ...staticRedirects.keys()]) {
  const { chain, looped } = followRedirects(path);
  if (looped) errors.push(`Redirect loop: ${chain.join(' -> ')}`);
}

if (errors.length > 0) {
  console.error(`Redirect safety check failed (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`Redirect safety OK: ${routePaths.length} routes, ${staticRedirects.size} static redirects, no loops.`);
