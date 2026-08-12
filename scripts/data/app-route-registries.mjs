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

const [reportData, reportContent, industryHubs, medtechPages] = await Promise.all([
  loadModule('src/data/healthcareReportData.ts'),
  loadModule('src/data/healthcareReportContent.ts'),
  loadModule('src/data/industryHubPages.ts'),
  loadModule('src/data/developedMarketMedtechPages.ts'),
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
