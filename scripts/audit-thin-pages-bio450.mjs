#!/usr/bin/env node
/**
 * BIO-450: Crawl production sitemap URLs; count SSR-visible words on service/landing pages.
 * Output: scripts/data/bio-450-thin-page-audit.json + docs/seo/bio-450-thin-page-inventory.csv
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const baseUrl = process.env.SITE_AUDIT_BASE_URL || 'https://www.bionixus.com';
const sitemapPath = path.join(root, 'public/sitemap.xml');
const outJson = path.join(root, 'scripts/data/bio-450-thin-page-audit.json');
const outCsv = path.join(root, 'docs/seo/bio-450-thin-page-inventory.csv');
const WORD_THRESHOLD = 2000;
const timeoutMs = 25000;
const concurrency = 8;

const EXTRA_PATHS = [
  '/specialist-physician-panel-uae',
  '/msl-insight-research-middle-east',
];

const EXCLUDE_PREFIXES = [
  '/blog',
  '/ar/blog',
  '/de/blog',
  '/fr/blog',
  '/es/blog',
  '/pt/blog',
  '/ru/blog',
  '/zh/blog',
  '/case-studies/',
  '/insights/',
  '/news/',
  '/conf/',
];

const EXCLUDE_EXACT = new Set([
  '/',
  '/about',
  '/contact',
  '/contacts',
  '/faq',
  '/privacy',
  '/terms',
  '/sitemap',
  '/blog',
  '/case-studies',
  '/market-reports',
  '/resources',
  '/methodology',
  '/strategic-portfolio',
  '/market-research-home',
]);

function getUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

function decodePathname(url) {
  try {
    return decodeURIComponent(new URL(url).pathname);
  } catch {
    return new URL(url).pathname;
  }
}

function isServiceLandingPath(pathname) {
  if (EXCLUDE_EXACT.has(pathname)) return false;
  if (EXCLUDE_PREFIXES.some((p) => pathname.startsWith(p))) return false;
  if (pathname.startsWith('/market-reports/')) return false;
  if (pathname.match(/^\/(de|fr|es|pt|ru|zh)(\/|$)/) && !pathname.startsWith('/ar/')) {
    // Locale home/contact only — skip non-AR locale marketing duplicates for this audit
    if (pathname === '/de' || pathname === '/fr' || pathname === '/es' || pathname === '/pt' || pathname === '/ru' || pathname === '/zh') return false;
    if (pathname.endsWith('/contact') || pathname.endsWith('/contacts')) return false;
    if (pathname.endsWith('/blog')) return false;
  }
  return true;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#\d+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMainText(html) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const articleMatch = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i);
  const chunk = mainMatch?.[1] || articleMatch?.[1] || html;
  return stripTags(chunk);
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function textMatch(html, regex) {
  const m = html.match(regex);
  return m?.[1]?.trim().replace(/\s+/g, ' ') || '';
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'BioNixus-ThinPageAudit/1.0 (BIO-450)',
        accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
      redirect: 'follow',
    });
    const html = await res.text();
    return { status: res.status, html, finalUrl: res.url };
  } finally {
    clearTimeout(timer);
  }
}

async function runPool(items, worker, limit) {
  const results = new Array(items.length);
  let idx = 0;
  async function next() {
    while (idx < items.length) {
      const current = idx++;
      results[current] = await worker(items[current], current);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => next()));
  return results;
}

async function main() {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = getUrlsFromSitemap(xml);
  const pathSet = new Set(sitemapUrls.map((u) => decodePathname(u)));

  const auditPaths = [
    ...sitemapUrls
      .map((u) => decodePathname(u))
      .filter((p) => isServiceLandingPath(p)),
    ...EXTRA_PATHS.filter((p) => !pathSet.has(p)),
  ];

  const uniquePaths = [...new Set(auditPaths)];

  const rows = await runPool(
    uniquePaths,
    async (pathname) => {
      const url = new URL(pathname, baseUrl).toString();
      try {
        const { status, html, finalUrl } = await fetchPage(url);
        const title = textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
        const h1 = textMatch(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
        const mainText = status === 200 ? extractMainText(html) : '';
        const words = wordCount(mainText);
        const inSitemap = pathSet.has(pathname);
        return {
          pathname,
          url,
          finalUrl,
          status,
          inSitemap,
          title,
          h1: stripTags(h1),
          wordCount: words,
          thin: status === 200 && words < WORD_THRESHOLD,
          gap: status === 200 ? WORD_THRESHOLD - words : null,
          error: null,
        };
      } catch (error) {
        return {
          pathname,
          url,
          finalUrl: url,
          status: 0,
          inSitemap: pathSet.has(pathname),
          title: '',
          h1: '',
          wordCount: 0,
          thin: false,
          gap: null,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
    concurrency,
  );

  rows.sort((a, b) => {
    if (a.status !== b.status) return a.status - b.status;
    if (a.thin !== b.thin) return a.thin ? -1 : 1;
    return (a.gap ?? 0) - (b.gap ?? 0);
  });

  const live = rows.filter((r) => r.status === 200);
  const thin = live.filter((r) => r.thin);
  const notFound = rows.filter((r) => r.status === 404);
  const errors = rows.filter((r) => r.status === 0 || (r.status >= 500));

  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    wordThreshold: WORD_THRESHOLD,
    totalAudited: rows.length,
    livePages: live.length,
    thinPages: thin.length,
    notFound: notFound.length,
    errors: errors.length,
    healthcareMarketResearchThin: thin.filter((r) =>
      r.pathname.startsWith('/healthcare-market-research'),
    ).length,
  };

  const payload = { summary, rows, thin, notFound, errors };
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(payload, null, 2));

  const csvHeader =
    'pathname,url,status,in_sitemap,word_count,thin,gap_words,title,h1,final_url';
  const csvLines = rows.map((r) =>
    [
      r.pathname,
      r.url,
      r.status,
      r.inSitemap,
      r.wordCount,
      r.thin,
      r.gap ?? '',
      `"${(r.title || '').replace(/"/g, '""')}"`,
      `"${(r.h1 || '').replace(/"/g, '""')}"`,
      r.finalUrl,
    ].join(','),
  );
  fs.mkdirSync(path.dirname(outCsv), { recursive: true });
  fs.writeFileSync(outCsv, [csvHeader, ...csvLines].join('\n'));

  console.log(JSON.stringify(summary, null, 2));
  console.log(`\nThin pages (${thin.length}):`);
  for (const r of thin.slice(0, 40)) {
    console.log(`  ${r.pathname}: ${r.wordCount} words (gap ${r.gap})`);
  }
  if (thin.length > 40) console.log(`  ... and ${thin.length - 40} more`);
  if (notFound.length) {
    console.log(`\n404 pages (${notFound.length}):`);
    for (const r of notFound) console.log(`  ${r.pathname}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
