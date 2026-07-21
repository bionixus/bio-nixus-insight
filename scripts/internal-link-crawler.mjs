#!/usr/bin/env node
/**
 * Crawls the built site (via the SSR render() function against dist/server/server-entry.js)
 * and produces an internal-link report: orphan pages (0 inbound), low-link pages (<3 inbound),
 * and possibly-broken internal links (targets that don't match any known route or sitemap URL).
 *
 * Requires: npm run build:server (or `npx vite build --ssr src/server-entry.ts --outDir dist/server`)
 * to have produced dist/server/server-entry.js first.
 *
 * Scope note: pages under /blog/, /ar/blog/, /de/blog/, /fr/blog/, /es/blog/, /pt/blog/,
 * /ru/blog/, /zh/blog/, /case-studies/, and /news/ are Sanity-CMS-driven. render() never
 * fetches over the network itself (data fetching happens in server.js's fetchRouteData()
 * before render() is called; this script calls render() with no initialData), so crawling
 * these routes is always network-safe here — but WITHOUT initialData, a genuinely
 * Sanity-only post/case-study renders its generic not-found/fallback state rather than its
 * real per-item body, so any per-post body links (Portable Text links, per-post CTAs) are
 * undercounted for non-hardcoded content. The universal "Related research links" block
 * (src/data/localizedBlogGeneric.ts) and any hardcoded/static post content still render and
 * ARE captured. For full per-post accuracy, run this script against a build with real
 * initialData wiring (or in an environment with live Sanity access) — see server.js's
 * fetchRouteData() for the production data-loading path this script does not replicate.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SERVER_ENTRY = path.join(root, 'dist', 'server', 'server-entry.js');
const SITEMAP_PATH = path.join(root, 'public', 'sitemap.xml');
const ROUTES_PATH = path.join(root, 'src', 'routes.tsx');
const OUT_JSON = path.join(root, 'scripts', 'data', 'internal-link-crawl-report.json');
const OUT_MD = path.join(root, 'scripts', 'data', 'internal-link-crawl-report.md');

const BASE_HOSTS = new Set(['www.bionixus.com', 'bionixus.com']);
const MIN_INBOUND = 3;

/** Paths added to routes/sitemap in this session that a stale on-disk sitemap.xml may not have yet. */
const EXTRA_KNOWN_PATHS = [
  '/heor-consulting',
  '/pharma-healthcare-industries',
  '/b2b-industries',
  '/b2c-industries',
];

/** Sanity-CMS-driven silos — tracked as targets, not independently SSR-crawled (see header note). */
const SANITY_SILO_PREFIXES = ['/blog/', '/case-studies/', '/press/'];
const LOCALE_BLOG_PREFIXES = ['/ar/blog/', '/de/blog/', '/fr/blog/', '/es/blog/', '/pt/blog/', '/ru/blog/', '/zh/blog/'];

/** Non-indexable / functional routes to exclude from the "must have inbound links" surface. */
const EXCLUDE_FROM_ORPHAN_CHECK_PREFIXES = [
  '/admin',
  '/api/',
  '/verify-email',
  '/login',
];

function isSanitySilo(pathname) {
  return SANITY_SILO_PREFIXES.some((p) => pathname.startsWith(p)) ||
    LOCALE_BLOG_PREFIXES.some((p) => pathname.startsWith(p));
}

function normalizePath(input) {
  if (!input) return null;
  let p = input.trim();
  // Strip protocol+host if absolute
  const hostMatch = p.match(/^https?:\/\/([^/]+)(\/.*)?$/i);
  if (hostMatch) {
    const host = hostMatch[1].toLowerCase();
    if (!BASE_HOSTS.has(host)) return null; // external link
    p = hostMatch[2] || '/';
  }
  if (!p.startsWith('/')) return null; // mailto:, tel:, javascript:, #anchor-only, relative asset paths
  // Strip query + hash
  p = p.split('#')[0].split('?')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  try {
    // Normalize percent-encoding case (matches sitemap generator convention)
    p = p
      .split('/')
      .map((seg) => {
        if (!seg) return '';
        try {
          return encodeURIComponent(decodeURIComponent(seg)).replace(/%[0-9A-F]{2}/g, (h) => h.toLowerCase());
        } catch {
          return seg;
        }
      })
      .join('/');
  } catch {
    /* keep as-is */
  }
  return p || '/';
}

function extractLinks(html) {
  const hrefs = new Set();
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const norm = normalizePath(m[1]);
    if (norm) hrefs.add(norm);
  }
  return hrefs;
}

function parseSitemapPaths() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`sitemap.xml not found at ${SITEMAP_PATH} — run npm run generate-sitemap first.`);
  }
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = new Set();
  for (const loc of locs) {
    const p = normalizePath(loc.replace(/&amp;/g, '&'));
    if (p) paths.add(p);
  }
  for (const extra of EXTRA_KNOWN_PATHS) paths.add(extra);
  return paths;
}

function parseRoutePatterns() {
  const source = fs.readFileSync(ROUTES_PATH, 'utf8');
  const patterns = [];
  const regex = /path:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  while ((match = regex.exec(source))) patterns.push(match[1]);
  return [...new Set(patterns)];
}

function routePatternToRegex(pattern) {
  if (pattern === '*') return /^.*$/;
  const escaped = pattern
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\\:([A-Za-z0-9_]+)/g, '[^/]+');
  return new RegExp(`^${escaped}$`);
}

function matchesAnyRoute(pathname, regexes) {
  return regexes.some((re) => re.test(pathname));
}

async function main() {
  if (!fs.existsSync(SERVER_ENTRY)) {
    throw new Error(
      `${SERVER_ENTRY} not found. Build the SSR bundle first: npx vite build --ssr src/server-entry.ts --outDir dist/server`,
    );
  }

  console.log('Loading SSR bundle...');
  const mod = await import(pathToFileURL(SERVER_ENTRY).href);
  const render = mod.render || mod.default;
  if (typeof render !== 'function') {
    throw new Error('Could not find a render() export on the SSR bundle.');
  }

  const sitemapPaths = parseSitemapPaths();
  const routePatterns = parseRoutePatterns();
  const routeRegexes = routePatterns.map(routePatternToRegex);

  const crawlTargets = [...sitemapPaths].sort();
  const sanitySiloCount = crawlTargets.filter((p) => isSanitySilo(p)).length;

  console.log(
    `Crawling ${crawlTargets.length} pages via SSR (${sanitySiloCount} are Sanity-driven — see script header for per-post accuracy caveat)...`,
  );

  /** @type {Map<string, Set<string>>} target path -> set of source pages linking to it */
  const inbound = new Map();
  /** @type {Map<string, {ok: boolean, error?: string, outboundCount: number}>} */
  const crawlResults = new Map();
  const allDiscoveredTargets = new Set();

  let done = 0;
  const startedAt = Date.now();
  for (const sourcePath of crawlTargets) {
    done += 1;
    if (done % 50 === 0) {
      console.log(`  ${done}/${crawlTargets.length} (${Math.round((Date.now() - startedAt) / 1000)}s elapsed)`);
    }
    try {
      const result = await render(sourcePath);
      const html = result?.html || '';
      const links = extractLinks(html);
      links.delete(sourcePath); // self-links don't rescue a page from orphan status
      for (const target of links) {
        allDiscoveredTargets.add(target);
        if (!inbound.has(target)) inbound.set(target, new Set());
        inbound.get(target).add(sourcePath);
      }
      crawlResults.set(sourcePath, { ok: true, outboundCount: links.size });
    } catch (err) {
      crawlResults.set(sourcePath, { ok: false, error: String(err?.message || err), outboundCount: 0 });
    }
  }

  console.log(`Crawl complete in ${Math.round((Date.now() - startedAt) / 1000)}s. Building report...`);

  const failedCrawls = [...crawlResults.entries()].filter(([, r]) => !r.ok);

  // Indexable surface = sitemap pages, minus functional/non-indexable prefixes.
  const indexablePages = [...sitemapPaths].filter(
    (p) => !EXCLUDE_FROM_ORPHAN_CHECK_PREFIXES.some((prefix) => p.startsWith(prefix)),
  );

  const orphans = [];
  const lowLink = [];
  for (const p of indexablePages) {
    const count = inbound.get(p)?.size || 0;
    if (count === 0) orphans.push({ path: p, inbound: 0 });
    else if (count < MIN_INBOUND) lowLink.push({ path: p, inbound: count, from: [...inbound.get(p)] });
  }
  orphans.sort((a, b) => a.path.localeCompare(b.path));
  lowLink.sort((a, b) => a.inbound - b.inbound || a.path.localeCompare(b.path));

  // Broken-link candidates: discovered targets that don't match sitemap, a route pattern, or an
  // extra-known path. Skip Sanity silos (can't verify slug existence without a live fetch) and
  // asset-looking paths (images/pdfs/etc.) which aren't page routes.
  const ASSET_EXT_RE = /\.(png|jpe?g|webp|svg|pdf|ico|xml|txt|json|css|js|woff2?|gif|mp4)$/i;
  const brokenCandidates = [...allDiscoveredTargets]
    .filter((t) => !ASSET_EXT_RE.test(t))
    .filter((t) => !isSanitySilo(t))
    .filter((t) => !sitemapPaths.has(t))
    .filter((t) => !matchesAnyRoute(t, routeRegexes))
    .sort();

  const brokenWithSources = brokenCandidates.map((target) => ({
    path: target,
    linkedFrom: [...(inbound.get(target) || [])].slice(0, 10),
  }));

  const payload = {
    scannedAt: new Date().toISOString(),
    counts: {
      sitemapPages: sitemapPaths.size,
      crawled: crawlTargets.length,
      sanityDrivenPages: sanitySiloCount,
      failedCrawls: failedCrawls.length,
      indexablePages: indexablePages.length,
      orphans: orphans.length,
      lowLink: lowLink.length,
      possiblyBroken: brokenWithSources.length,
    },
    orphans,
    lowLink,
    possiblyBrokenLinks: brokenWithSources,
    failedCrawls: failedCrawls.map(([p, r]) => ({ path: p, error: r.error })),
    sanityDrivenPages: crawlTargets.filter((p) => isSanitySilo(p)),
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

  const md = [
    '# Internal Link Crawl Report',
    '',
    `Generated: ${payload.scannedAt}`,
    '',
    `- Sitemap pages: ${payload.counts.sitemapPages}`,
    `- Crawled via SSR: ${payload.counts.crawled}`,
    `- Sanity-driven pages crawled (per-post accuracy caveat applies): ${payload.counts.sanityDrivenPages}`,
    `- Failed crawls (errored during render): ${payload.counts.failedCrawls}`,
    `- Indexable pages checked for inbound links: ${payload.counts.indexablePages}`,
    `- **Orphan pages (0 inbound internal links): ${payload.counts.orphans}**`,
    `- **Pages with <${MIN_INBOUND} inbound internal links: ${payload.counts.lowLink}**`,
    `- Possibly-broken internal link targets: ${payload.counts.possiblyBroken}`,
    '',
    '## Orphan pages',
    orphans.length ? '' : '_None — 0 orphans found among crawled indexable pages._',
    ...orphans.map((o) => `- ${o.path}`),
    '',
    '## Low inbound-link pages (<3)',
    ...lowLink.slice(0, 200).map((o) => `- ${o.path} — ${o.inbound} inbound (from: ${o.from.slice(0, 3).join(', ')}${o.from.length > 3 ? ', …' : ''})`),
    lowLink.length > 200 ? `\n_...and ${lowLink.length - 200} more (see JSON report)._` : '',
    '',
    '## Possibly-broken internal links',
    brokenWithSources.length ? '' : '_None found among crawled, non-Sanity targets._',
    ...brokenWithSources.slice(0, 200).map((b) => `- ${b.path} — linked from: ${b.linkedFrom.slice(0, 3).join(', ')}${b.linkedFrom.length > 3 ? ', …' : ''}`),
    '',
    failedCrawls.length ? '## Pages that failed to render during crawl' : '',
    ...failedCrawls.map(([p, r]) => `- ${p} — ${r.error}`),
    '',
  ]
    .filter((l) => l !== '')
    .join('\n');
  fs.writeFileSync(OUT_MD, `${md}\n`, 'utf8');

  console.log(`\nReport written to:\n  ${OUT_JSON}\n  ${OUT_MD}`);
  console.log(
    `\nSummary: orphans=${payload.counts.orphans} lowLink(<${MIN_INBOUND})=${payload.counts.lowLink} possiblyBroken=${payload.counts.possiblyBroken} failedCrawls=${payload.counts.failedCrawls}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
