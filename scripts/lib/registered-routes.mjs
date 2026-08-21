/**
 * Shared route-set collector: the complete set of paths the SPA can actually
 * serve. Merges
 *   1. literal `path: '...'` entries in src/routes.tsx (static + dynamic),
 *   2. generated route paths from the data registries that routes.tsx spreads
 *      in (country keyword, specialty demand, industry matrix, developed-market
 *      medtech, segment markets, top-companies listicles), bundled via esbuild,
 *   3. legacy redirect sources from config/legacy-redirects.json (they resolve
 *      via server 301 + client <Navigate> mirror).
 *
 * Consumers: scripts/generate-internal-link-targets.mjs, scripts/audit-internal-links.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', '..');

const GENERATED_PATHS_ENTRY = `
import { COUNTRY_KEYWORD_PAGES } from '@/data/countryKeywordPages';
import { SPECIALTY_MARKET_DEMAND_CONTENT } from '@/data/specialtyMarketDemandContent';
import {
  getAllPublishedMatrixPairs,
  getIndustryBofuPath,
  getIndustryListiclePath,
} from '@/data/industryMarketResearchMatrix';
import { DEDICATED_INDUSTRY_LISTICLE_PATHS } from '@/data/industry-listicle-clusters';
import {
  DEVELOPED_MARKET_MEDTECH_SLUGS,
  getDevelopedMarketMedtechListiclePath,
  getDevelopedMarketMedtechPath,
} from '@/data/developedMarketMedtechPages';
import { SEGMENT_MARKET_SLUGS } from '@/data/segmentMarketIndex';
import { allListicleConfigs } from '@/data/topCompanies';

export const generatedPaths: string[] = [
  ...COUNTRY_KEYWORD_PAGES.map((c) => '/' + c.slug),
  ...SPECIALTY_MARKET_DEMAND_CONTENT.map((c) => '/' + c.slug),
  ...getAllPublishedMatrixPairs().flatMap(({ countrySlug, industrySlug }) => {
    const paths = [getIndustryBofuPath(countrySlug, industrySlug)];
    const listicle = getIndustryListiclePath(countrySlug, industrySlug);
    if (!DEDICATED_INDUSTRY_LISTICLE_PATHS.has(listicle)) paths.push(listicle);
    return paths;
  }),
  ...DEVELOPED_MARKET_MEDTECH_SLUGS.flatMap((slug) => [
    getDevelopedMarketMedtechPath(slug),
    getDevelopedMarketMedtechListiclePath(slug),
  ]),
  ...SEGMENT_MARKET_SLUGS.map((slug) => '/' + slug),
  ...allListicleConfigs.map((c) => c.slug),
];
`;

/** Bundle the data registries and evaluate all generated route paths. */
async function collectGeneratedPaths() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bionixus-routes-'));
  const entryFile = path.join(tmpDir, 'generated-paths-entry.ts');
  const outFile = path.join(tmpDir, 'generated-paths.mjs');
  fs.writeFileSync(entryFile, GENERATED_PATHS_ENTRY, 'utf8');
  try {
    await build({
      entryPoints: [entryFile],
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile: outFile,
      alias: { '@': path.join(root, 'src') },
      logLevel: 'silent',
    });
    const { generatedPaths } = await import(pathToFileURL(outFile).href);
    return generatedPaths;
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

export function loadLegacyRedirects() {
  const file = path.join(root, 'config', 'legacy-redirects.json');
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * @returns {Promise<{staticPaths: Set<string>, dynamicPatterns: string[], legacyRedirects: Record<string,string>}>}
 */
export async function collectRegisteredRoutes() {
  const routesSource = fs.readFileSync(path.join(root, 'src', 'routes.tsx'), 'utf8');
  const staticPaths = new Set();
  const dynamicPatterns = [];
  for (const m of routesSource.matchAll(/\{\s*path:\s*'([^']+)'/g)) {
    const p = m[1];
    if (p === '*') continue;
    if (p.includes(':') || p.includes('*')) dynamicPatterns.push(p);
    else staticPaths.add(p);
  }

  for (const p of await collectGeneratedPaths()) {
    staticPaths.add(p.startsWith('/') ? p : `/${p}`);
  }

  const legacyRedirects = loadLegacyRedirects();
  return { staticPaths, dynamicPatterns, legacyRedirects };
}

/** True when pathname matches a react-router dynamic pattern like /blog/:slug. */
export function matchesDynamicPattern(pathname, dynamicPatterns) {
  const segments = pathname.split('/').filter(Boolean);
  return dynamicPatterns.some((pattern) => {
    const patternSegments = pattern.split('/').filter(Boolean);
    if (patternSegments[patternSegments.length - 1] === '*') {
      return (
        segments.length >= patternSegments.length - 1 &&
        patternSegments
          .slice(0, -1)
          .every((seg, i) => seg.startsWith(':') || seg === segments[i])
      );
    }
    const optionalCount = patternSegments.filter((seg) => seg.endsWith('?')).length;
    if (
      segments.length > patternSegments.length ||
      segments.length < patternSegments.length - optionalCount
    ) {
      return false;
    }
    return segments.every((seg, i) => {
      const p = patternSegments[i];
      if (!p) return false;
      return p.startsWith(':') || p.replace(/\?$/, '') === seg;
    });
  });
}

/** True when the SPA can serve this path (real route, dynamic route, or redirect source). */
export function isRoutablePath(pathname, { staticPaths, dynamicPatterns, legacyRedirects }) {
  if (staticPaths.has(pathname)) return true;
  if (legacyRedirects[pathname]) return true;
  return matchesDynamicPattern(pathname, dynamicPatterns);
}
