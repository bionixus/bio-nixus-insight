/**
 * Bridges the app's TypeScript route registries into the sitemap generator.
 *
 * generate-sitemap.mjs previously hand-duplicated these lists and every copy had
 * drifted, so ~100 live, indexable pages never reached the sitemap:
 *   - /market-reports/{slug}          regex only matched `row(...)`, missing all 30 pharma insight reports
 *   - /market-reports/country/{slug}  9 of 20 hubs listed
 *   - /market-reports/therapy/{slug}  11 of 12 hubs listed
 *   - /market-research/{industry}     no emitter at all
 *
 * Bundling the real modules keeps the sitemap in sync by construction.
 */
import { build } from 'esbuild';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', '..');

async function loadModule(relativeEntry) {
  const outfile = join(tmpdir(), `route-registry-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`);
  await build({
    entryPoints: [join(root, relativeEntry)],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile,
    alias: { '@': join(root, 'src') },
    logLevel: 'silent',
  });
  return import(pathToFileURL(outfile).href);
}

const [reportData, reportContent, industryHubs, medtechPages, segmentMarkets, segmentMarketIndex] =
  await Promise.all([
    loadModule('src/data/healthcareReportData.ts'),
    loadModule('src/data/healthcareReportContent.ts'),
    loadModule('src/data/industryHubPages.ts'),
    loadModule('src/data/developedMarketMedtechPages.ts'),
    loadModule('src/data/segmentMarketPages.ts'),
    loadModule('src/data/segmentMarketIndex.ts'),
  ]);

/** Every `/market-reports/{slug}` page: country x therapy rows plus pharma insight reports. */
export const marketReportSlugs = reportData.REPORT_ENTRIES.map((entry) => entry.slug);

/** Every `/market-reports/therapy/{slug}` hub. */
export const marketReportTherapyHubSlugs = Object.keys(reportContent.THERAPY_AREA_CONTENT);

/** Every `/market-reports/country/{slug}` hub. */
export const marketReportCountryHubSlugs = Object.keys(reportContent.MARKET_CONTENT);

/**
 * Every `/market-research/{industry}` global hub.
 *
 * Only these slugs resolve. Unknown slugs render an inline "Page not found" at
 * HTTP 200 (a soft 404), so they must never be emitted into the sitemap.
 */
export const industryGlobalHubSlugs = industryHubs.INDUSTRY_HUB_PAGES.map((page) => page.slug);

/**
 * Developed-market MedTech pages: a BOFU page plus a listicle per country.
 *
 * These 18 countries are disjoint from the GCC/Egypt industry matrix, and no part
 * of the sitemap emitted them, so all 36 pages were missing.
 */
export const developedMarketMedtechPaths = medtechPages.DEVELOPED_MARKET_MEDTECH_SLUGS.flatMap((slug) => [
  { path: medtechPages.getDevelopedMarketMedtechPath(slug), priority: '0.85', changefreq: 'monthly' },
  { path: medtechPages.getDevelopedMarketMedtechListiclePath(slug), priority: '0.8', changefreq: 'monthly' },
]);

/**
 * Geography x segment market landing pages (e.g. /saudi-arabia-molecular-diagnostics-market).
 *
 * Routing uses the lightweight segmentMarketIndex so the ~800KB content registry stays
 * behind the lazy chunk. That means two lists exist, so fail the build the moment they
 * diverge — a slug present in only one of them is either a 404 or an orphaned page.
 */
const contentSlugs = segmentMarkets.SEGMENT_MARKET_PAGES.map((page) => page.slug);
const routedSlugs = segmentMarketIndex.SEGMENT_MARKET_SLUGS;
const missingFromIndex = contentSlugs.filter((slug) => !routedSlugs.includes(slug));
const missingFromContent = routedSlugs.filter((slug) => !contentSlugs.includes(slug));

if (missingFromIndex.length > 0 || missingFromContent.length > 0) {
  throw new Error(
    'segmentMarketIndex.ts is out of sync with segmentMarketPages.ts.\n'
      + `  Content pages with no route: ${missingFromIndex.join(', ') || 'none'}\n`
      + `  Routed slugs with no content: ${missingFromContent.join(', ') || 'none'}`,
  );
}

export const segmentMarketPaths = contentSlugs.map((slug) => ({
  path: `/${slug}`,
  priority: '0.88',
  changefreq: 'monthly',
}));
