#!/usr/bin/env node
/**
 * BIO-449: Crawl production sitemap URLs and count visible body words.
 * Focus: service/landing pages (excludes blog posts and market-reports detail pages).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const baseUrl = process.env.SITE_AUDIT_BASE_URL || 'https://www.bionixus.com';
const sitemapPath = path.join(root, 'public/sitemap.xml');
const outJson = path.join(root, 'scripts/data/bio-449-thin-page-audit.json');
const outCsv = path.join(root, 'docs/seo/bio-449-thin-page-inventory.csv');
const threshold = 2000;
const concurrency = 8;
const timeoutMs = 20000;

const EXTRA_URLS = [
  '/specialist-physician-panel-uae',
  '/msl-insight-research-middle-east',
];

function getUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

function isServiceLandingPathname(pathname) {
  if (pathname.startsWith('/blog')) return false;
  if (pathname.startsWith('/market-reports/')) return false;
  if (pathname.startsWith('/case-studies/')) return false;
  if (pathname.startsWith('/insights/')) return false;
  if (pathname === '/conf') return false;
  if (pathname === '/contact') return false;
  if (pathname === '/faq') return false;
  if (pathname === '/methodology') return false;
  if (pathname === '/about') return false;
  if (pathname === '/') return false;
  return true;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMainText(html) {
  const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
  const articleMatch = html.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/i);
  const block = mainMatch?.[1] || articleMatch?.[1] || html;
  return stripHtml(block);
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
        'user-agent': 'BioNixus-Thin-Page-Audit/1.0',
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

async function main() {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = getUrlsFromSitemap(xml);
  const pathSet = new Set(sitemapUrls.map((u) => new URL(u).pathname));
  for (const p of EXTRA_URLS) pathSet.add(p);

  const targets = [...pathSet]
    .filter(isServiceLandingPathname)
    .map((p) => new URL(p, baseUrl).toString());

  const rows = await runPool(
    targets,
    async (url) => {
      const pathname = new URL(url).pathname;
      try {
        const { status, html } = await fetchPage(url);
        const title = textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
        const h1 = textMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
        const mainText = status === 200 ? extractMainText(html) : '';
        const words = wordCount(mainText);
        const cluster =
          pathname.startsWith('/healthcare-market-research')
            ? 'healthcare-market-research'
            : pathname.startsWith('/services')
              ? 'services'
              : pathname.startsWith('/ar/')
                ? 'ar-localized'
                : pathname.startsWith('/global-websites')
                  ? 'global-websites'
                  : 'standalone-landing';

        return {
          url,
          pathname,
          status,
          cluster,
          title,
          h1,
          wordCount: words,
          thin: status === 200 && words < threshold,
          notFound: status === 404,
        };
      } catch (error) {
        return {
          url,
          pathname,
          status: 0,
          cluster: 'error',
          title: '',
          h1: '',
          wordCount: 0,
          thin: false,
          notFound: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    },
    concurrency,
  );

  rows.sort((a, b) => a.wordCount - b.wordCount);

  const thin = rows.filter((r) => r.thin);
  const notFound = rows.filter((r) => r.notFound);
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    threshold,
    totalAudited: rows.length,
    thinCount: thin.length,
    notFoundCount: notFound.length,
    thinByCluster: Object.fromEntries(
      [...thin.reduce((m, r) => m.set(r.cluster, (m.get(r.cluster) || 0) + 1), new Map())],
    ),
  };

  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify({ summary, rows, thin, notFound }, null, 2));

  const csvHeader = 'pathname,url,status,cluster,word_count,title,h1,thin,not_found\n';
  const csvBody = rows
    .map((r) =>
      [
        r.pathname,
        r.url,
        r.status,
        r.cluster,
        r.wordCount,
        `"${(r.title || '').replace(/"/g, '""')}"`,
        `"${(r.h1 || '').replace(/"/g, '""')}"`,
        r.thin ? 'yes' : 'no',
        r.notFound ? 'yes' : 'no',
      ].join(','),
    )
    .join('\n');
  fs.mkdirSync(path.dirname(outCsv), { recursive: true });
  fs.writeFileSync(outCsv, csvHeader + csvBody);

  console.log(JSON.stringify(summary, null, 2));
  console.log(`Thin pages (<${threshold}): ${thin.length}`);
  console.log(`404 pages: ${notFound.length}`);
  console.log(`Wrote ${outCsv}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
