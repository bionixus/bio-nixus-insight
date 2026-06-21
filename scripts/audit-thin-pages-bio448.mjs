#!/usr/bin/env node
/**
 * BIO-448: Crawl sitemap URLs and flag service/landing pages under 2,000 visible words.
 * Run: node scripts/audit-thin-pages-bio448.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const baseUrl = process.env.SITE_AUDIT_BASE_URL || 'https://www.bionixus.com';
const sitemapPath = path.join(root, 'public/sitemap.xml');
const outJson = path.join(root, 'docs/seo/bio-448-thin-page-inventory.json');
const outCsv = path.join(root, 'docs/seo/bio-448-thin-page-inventory.csv');
const threshold = Number(process.env.THIN_PAGE_WORD_THRESHOLD || 2000);
const timeoutMs = 20000;
const concurrency = 8;

const EXCLUDE_PREFIXES = [
  '/blog/',
  '/news/',
  '/conf/',
  '/privacy',
  '/terms',
  '/sitemap',
  '/contact',
];

const INCLUDE_ALWAYS = [
  '/specialist-physician-panel-uae',
  '/msl-insight-research-middle-east',
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
  if (/^\/(ar|de|es|fr|zh)(\/|$)/.test(pathname)) return true;
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
  const words = content.trim().split(/\s+/).filter(Boolean);
  return words.length;
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
        'user-agent': 'BioNixus-ThinPageAudit/1.0 (BIO-448)',
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
  const allUrls = getUrlsFromSitemap(xml);
  const targets = allUrls
    .map((u) => new URL(u))
    .filter((u) => isServiceLanding(u.pathname))
    .map((u) => ({ pathname: u.pathname, sourceUrl: u.toString(), auditUrl: new URL(u.pathname, baseUrl).toString() }));

  for (const p of INCLUDE_ALWAYS) {
    if (!targets.some((t) => t.pathname === p)) {
      targets.push({
        pathname: p,
        sourceUrl: new URL(p, baseUrl).toString(),
        auditUrl: new URL(p, baseUrl).toString(),
      });
    }
  }

  console.log(`Auditing ${targets.length} service/landing URLs (threshold ${threshold} words)...`);

  const rows = await runPool(
    targets,
    async ({ pathname, sourceUrl, auditUrl }) => {
      try {
        const { status, html } = await fetchPage(auditUrl);
        const wordCount = status === 200 ? extractMainWordCount(html) : 0;
        const title = status === 200 ? textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i) : '';
        const h1 = status === 200 ? textMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) : '';
        return {
          pathname,
          url: auditUrl,
          sourceUrl,
          status,
          wordCount,
          thin: status === 200 && wordCount < threshold,
          notFound: status === 404,
          title,
          h1,
        };
      } catch (error) {
        return {
          pathname,
          url: auditUrl,
          sourceUrl,
          status: 0,
          wordCount: 0,
          thin: false,
          notFound: false,
          title: '',
          h1: '',
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
    concurrency,
  );

  rows.sort((a, b) => a.wordCount - b.wordCount || a.pathname.localeCompare(b.pathname));

  const thin = rows.filter((r) => r.thin);
  const notFound = rows.filter((r) => r.notFound || r.status === 404);
  const errors = rows.filter((r) => r.error);

  const payload = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    threshold,
    totals: {
      audited: rows.length,
      thin: thin.length,
      notFound: notFound.length,
      errors: errors.length,
      pass: rows.filter((r) => r.status === 200 && !r.thin).length,
    },
    thinPages: thin,
    notFoundPages: notFound,
    rows,
  };

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(payload, null, 2));

  const header = ['pathname', 'url', 'status', 'word_count', 'thin', 'title', 'h1'];
  const csvLines = [
    header.join(','),
    ...rows.map((r) =>
      [r.pathname, r.url, r.status, r.wordCount, r.thin, r.title, r.h1].map(csvEscape).join(','),
    ),
  ];
  fs.writeFileSync(outCsv, csvLines.join('\n'));

  console.log(`Thin (<${threshold}): ${thin.length} | 404: ${notFound.length} | Pass: ${payload.totals.pass}`);
  console.log(`Wrote ${outCsv}`);
  console.log(`Wrote ${outJson}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
