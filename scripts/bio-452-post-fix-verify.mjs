#!/usr/bin/env node
/**
 * BIO-452: Post-fix crawl verification for BIO-447 epic.
 * Checks: HTTP 200 on audit URLs, word counts >= threshold, sitemap hygiene.
 *
 * Run baseline (pre-fix):  node scripts/bio-452-post-fix-verify.mjs --phase baseline
 * Run post-fix gate:       node scripts/bio-452-post-fix-verify.mjs --phase post-fix
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const baseUrl = process.env.SITE_AUDIT_BASE_URL || 'https://www.bionixus.com';
const sitemapPath = path.join(root, 'public/sitemap.xml');
const outJson = path.join(root, 'docs/seo/bio-452-verify-report.json');
const outCsv = path.join(root, 'docs/seo/bio-452-verify-report.csv');
const threshold = Number(process.env.THIN_PAGE_WORD_THRESHOLD || 2000);
const timeoutMs = 20000;
const concurrency = 8;

const phase = process.argv.includes('--phase')
  ? process.argv[process.argv.indexOf('--phase') + 1]
  : 'post-fix';

const INCLUDE_ALWAYS = [
  '/specialist-physician-panel-uae',
  '/msl-insight-research-middle-east',
  '/brand-tracking-pharma-gcc',
  '/commercial-effectiveness-pharma-middle-east',
  '/healthcare-fieldwork-gcc',
  '/patient-journey-research-gcc',
  '/patient-adherence-research-middle-east',
  '/respiratory-market-access-gcc',
  '/uae-pricing-reimbursement-strategy',
  '/insights/top-healthcare-market-research-companies-abu-dhabi-2026',
  '/insights/top-healthcare-market-research-companies-dubai-2026',
  '/insights/top-healthcare-market-research-companies-kuwait-2026',
];

const EXCLUDE_PREFIXES = [
  '/blog/',
  '/news/',
  '/conf/',
  '/privacy',
  '/terms',
  '/sitemap',
];

function getUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

function isServiceLanding(pathname) {
  if (INCLUDE_ALWAYS.includes(pathname)) return true;
  if (EXCLUDE_PREFIXES.some((p) => pathname.startsWith(p) || pathname === p)) return false;
  if (pathname.startsWith('/blog')) return false;
  if (pathname.startsWith('/market-reports')) return false;
  if (pathname.startsWith('/case-studies')) return true;
  if (pathname.startsWith('/healthcare-market-research')) return true;
  if (pathname.startsWith('/services')) return true;
  if (pathname.startsWith('/global-websites')) return true;
  if (pathname.startsWith('/insights')) return true;
  if (/^\/(ar|de|es|fr|zh|pt|ru)(\/|$)/.test(pathname)) return true;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length <= 2) return true;
  return false;
}

function extractMainWordCount(html) {
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let content = mainMatch ? mainMatch[1] : html;
  content = content.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  content = content.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  content = content.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  content = content.replace(/<[^>]+>/g, ' ');
  content = content.replace(/&nbsp;|&amp;|&lt;|&gt;|&#\d+;/g, ' ');
  return content.trim().split(/\s+/).filter(Boolean).length;
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
        'user-agent': 'BioNixus-BIO452-Verify/1.0',
        accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
    });
    const html = await res.text();
    return { status: res.status, html };
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

function csvEscape(v) {
  const s = String(v ?? '');
  return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s.replace(/"/g, '""')}"` : s;
}

async function main() {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = getUrlsFromSitemap(xml);
  const sitemapPathnames = new Set(sitemapUrls.map((u) => new URL(u).pathname));

  const targetMap = new Map();
  for (const u of sitemapUrls) {
    const pathname = new URL(u).pathname;
    if (isServiceLanding(pathname)) {
      targetMap.set(pathname, new URL(pathname, baseUrl).toString());
    }
  }
  for (const p of INCLUDE_ALWAYS) {
    targetMap.set(p, new URL(p, baseUrl).toString());
  }

  const targets = [...targetMap.entries()].map(([pathname, auditUrl]) => ({ pathname, auditUrl }));

  console.log(`[BIO-452] Phase: ${phase} | Auditing ${targets.length} URLs (threshold ${threshold} words)...`);

  const rows = await runPool(
    targets,
    async ({ pathname, auditUrl }) => {
      try {
        const { status, html } = await fetchPage(auditUrl);
        const wordCount = status === 200 ? extractMainWordCount(html) : 0;
        const inSitemap = sitemapPathnames.has(pathname);
        const pass =
          status === 200 &&
          wordCount >= threshold &&
          !(status === 404 && inSitemap);
        return {
          pathname,
          url: auditUrl,
          status,
          wordCount,
          inSitemap,
          thin: status === 200 && wordCount < threshold,
          notFound: status === 404,
          serverError: status >= 500,
          pass,
          title: status === 200 ? textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i) : '',
          h1: status === 200 ? textMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) : '',
        };
      } catch (error) {
        return {
          pathname,
          url: auditUrl,
          status: 0,
          wordCount: 0,
          inSitemap: sitemapPathnames.has(pathname),
          thin: false,
          notFound: false,
          serverError: false,
          pass: false,
          title: '',
          h1: '',
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
    concurrency,
  );

  rows.sort((a, b) => a.wordCount - b.wordCount || a.pathname.localeCompare(b.pathname));

  const notFound = rows.filter((r) => r.notFound);
  const thin = rows.filter((r) => r.thin);
  const serverErrors = rows.filter((r) => r.serverError || r.status === 0);
  const sitemap404 = notFound.filter((r) => r.inSitemap);
  const failed = rows.filter((r) => !r.pass);
  const passed = rows.filter((r) => r.pass);

  const report = {
    phase,
    generatedAt: new Date().toISOString(),
    baseUrl,
    threshold,
    sitemapUrlCount: sitemapUrls.length,
    totals: {
      audited: rows.length,
      passed: passed.length,
      failed: failed.length,
      notFound: notFound.length,
      thin: thin.length,
      serverErrors: serverErrors.length,
      sitemap404: sitemap404.length,
    },
    gate: {
      ready: failed.length === 0,
      failures: {
        notFound: notFound.map((r) => r.pathname),
        thin: thin.map((r) => ({ pathname: r.pathname, wordCount: r.wordCount })),
        serverErrors: serverErrors.map((r) => ({ pathname: r.pathname, status: r.status, error: r.error })),
        sitemap404: sitemap404.map((r) => r.pathname),
      },
    },
    rows,
  };

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));

  const header = ['pathname', 'url', 'status', 'word_count', 'in_sitemap', 'pass', 'thin', 'not_found', 'title', 'h1'];
  fs.writeFileSync(
    outCsv,
    [
      header.join(','),
      ...rows.map((r) =>
        [r.pathname, r.url, r.status, r.wordCount, r.inSitemap, r.pass, r.thin, r.notFound, r.title, r.h1]
          .map(csvEscape)
          .join(','),
      ),
    ].join('\n'),
  );

  console.log(JSON.stringify(report.totals, null, 2));
  console.log(`Gate ready: ${report.gate.ready}`);
  console.log(`Wrote ${outJson}`);
  console.log(`Wrote ${outCsv}`);

  if (phase === 'post-fix' && !report.gate.ready) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
