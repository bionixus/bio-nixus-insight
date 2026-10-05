/**
 * Verifies the geography x segment market pages.
 *
 * Every relatedLink on those pages must resolve to a real route. A broken internal
 * link on a cluster this size leaks crawl budget and drops users on a soft 404, and
 * the links are hand-authored, so they need a machine check.
 *
 * Also asserts no page links to itself and that the routed slug index matches the
 * content registry (the same invariant app-route-registries.mjs enforces at build).
 *
 * Usage: node scripts/seo/verify-segment-market-links.mjs
 */

import { existsSync, readFileSync } from 'fs';
import { build } from 'esbuild';
import { tmpdir } from 'os';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

async function loadModule(relativeEntry) {
  const outfile = join(tmpdir(), `segment-link-check-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`);
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

const [pages, index, reportData, reportContent] = await Promise.all([
  loadModule('src/data/segmentMarketPages.ts'),
  loadModule('src/data/segmentMarketIndex.ts'),
  loadModule('src/data/healthcareReportData.ts'),
  loadModule('src/data/healthcareReportContent.ts'),
]);

const routesSource = readFileSync(join(root, 'src/routes.tsx'), 'utf8');
const literalRoutes = new Set([...routesSource.matchAll(/path:\s*'([^']+)'/g)].map((match) => match[1]));
const seoPagesSource = readFileSync(join(root, 'src/routes/lazySeoPages.ts'), 'utf8');

/** Export name → `@/pages/...` module, and pathname → export name, from the SEO page maps. */
const componentModules = new Map(
  [...seoPagesSource.matchAll(/"([A-Za-z0-9]+)": \(\) => import\('(@\/[^']+)'\)/g)].map((match) => [
    match[1],
    match[2],
  ]),
);
const pathToExport = new Map(
  [...seoPagesSource.matchAll(/"(\/[^"]+)": "([A-Za-z0-9]+)"/g)].map((match) => [match[1], match[2]]),
);

const reportSlugs = new Set(reportData.REPORT_ENTRIES.map((entry) => entry.slug));
const therapySlugs = new Set(Object.keys(reportContent.THERAPY_AREA_CONTENT));
const countryHubSlugs = new Set(Object.keys(reportContent.MARKET_CONTENT));
const segmentSlugs = new Set(pages.SEGMENT_MARKET_PAGES.map((page) => page.slug));

/**
 * Related links may deep-link with a hash (`/patient-journey-research-gcc#obesity`).
 * The route check uses the pathname; the fragment is checked separately against the page source.
 */
function splitTarget(path) {
  const hashAt = path.indexOf('#');
  const queryAt = path.indexOf('?');
  let end = path.length;
  if (hashAt !== -1) end = Math.min(end, hashAt);
  if (queryAt !== -1 && queryAt < end) end = queryAt;
  const pathname = path.slice(0, end);
  const hash = hashAt === -1 ? '' : path.slice(hashAt + 1).split('?')[0];
  return { pathname, hash };
}

function pageSourceHasAnchor(pathname, hash) {
  if (!/^[A-Za-z][\w:-]*$/.test(hash)) return false;
  const exportName = pathToExport.get(pathname);
  const spec = exportName ? componentModules.get(exportName) : undefined;
  if (!spec?.startsWith('@/')) return false;
  const base = join(root, 'src', spec.slice(2));
  const file = [base, `${base}.tsx`, `${base}.ts`, `${base}.jsx`, `${base}.js`].find((candidate) =>
    existsSync(candidate),
  );
  if (!file) return false;
  const source = readFileSync(file, 'utf8');
  return (
    source.includes(`id="${hash}"`) ||
    source.includes(`id='${hash}'`) ||
    source.includes(`id={"${hash}"}`) ||
    source.includes(`id={'${hash}'}`)
  );
}

function resolves(path) {
  if (literalRoutes.has(path)) return true;
  if (segmentSlugs.has(path.replace(/^\//, ''))) return true;

  const report = path.match(/^\/market-reports\/(.+)$/);
  if (report) {
    if (report[1].startsWith('therapy/')) return therapySlugs.has(report[1].slice('therapy/'.length));
    if (report[1].startsWith('country/')) return countryHubSlugs.has(report[1].slice('country/'.length));
    return reportSlugs.has(report[1]);
  }

  /** Dynamic healthcare hub routes: /healthcare-market-research/:country|therapy/:area|services/:service. */
  if (/^\/healthcare-market-research\/[a-z-]+(\/[a-z-]+)?$/.test(path)) return true;
  if (/^\/pharma-insights-[a-z-]+$/.test(path)) return true;
  if (/^\/real-world-evidence-[a-z-]+$/.test(path)) return true;
  /** Sanity blog posts render through the /blog/:slug route in routes.tsx. */
  if (/^\/blog\/[a-z0-9-]+$/.test(path)) return true;

  return false;
}

const errors = [];
const brokenLinks = new Map();
let linkCount = 0;

const contentSlugs = pages.SEGMENT_MARKET_PAGES.map((page) => page.slug);
const routedSlugs = index.SEGMENT_MARKET_SLUGS;
for (const slug of contentSlugs) {
  if (!routedSlugs.includes(slug)) errors.push(`content page has no route: /${slug}`);
}
for (const slug of routedSlugs) {
  if (!contentSlugs.includes(slug)) errors.push(`routed slug has no content: /${slug}`);
}

/**
 * server.js clamps any <title> over 60 chars and chops mid-word ("...Market Researc"),
 * so an over-length title ships broken copy to the SERP rather than being rejected.
 */
const TITLE_MAX = 60;
const DESC_MIN = 150;
const DESC_MAX = 160;

const seenTitles = new Map();
for (const page of pages.SEGMENT_MARKET_PAGES) {
  if (page.title.length > TITLE_MAX) {
    errors.push(`${page.slug}: title is ${page.title.length} chars, server truncates over ${TITLE_MAX}`);
  }
  if (page.description.length < DESC_MIN || page.description.length > DESC_MAX) {
    errors.push(
      `${page.slug}: description is ${page.description.length} chars, expected ${DESC_MIN}-${DESC_MAX}`,
    );
  }
  if (seenTitles.has(page.title)) {
    errors.push(`${page.slug}: duplicate title shared with ${seenTitles.get(page.title)}`);
  }
  seenTitles.set(page.title, page.slug);
}

for (const page of pages.SEGMENT_MARKET_PAGES) {
  const links = [...page.relatedLinks];
  for (const topic of page.researchTopics ?? []) {
    if (topic.link) links.push(topic.link);
  }
  for (const link of links) {
    linkCount += 1;
    const { pathname, hash } = splitTarget(link.to);
    if (pathname === `/${page.slug}`) errors.push(`${page.slug} links to itself`);
    const routeOk = resolves(pathname);
    const anchorOk = !hash || pageSourceHasAnchor(pathname, hash);
    if (!routeOk || !anchorOk) {
      const label = !routeOk ? link.to : `${link.to} (missing id="${hash}")`;
      if (!brokenLinks.has(label)) brokenLinks.set(label, []);
      brokenLinks.get(label).push(page.slug);
    }
  }
}

console.log(`Segment market pages: ${pages.SEGMENT_MARKET_PAGES.length}`);
console.log(`Internal links checked: ${linkCount}`);

if (brokenLinks.size > 0) {
  console.error(`\nUnresolved internal links (${brokenLinks.size}):`);
  for (const [link, sources] of brokenLinks) {
    console.error(`  ${link}  <- ${sources.length} page(s): ${sources.join(', ')}`);
  }
}
for (const error of errors) console.error(`  ${error}`);

if (brokenLinks.size > 0 || errors.length > 0) {
  process.exit(1);
}

console.log('All internal links resolve; route index matches content registry.');
process.exit(0);
