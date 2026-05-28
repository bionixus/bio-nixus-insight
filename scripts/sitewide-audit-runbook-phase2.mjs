#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const baseUrl = process.env.SITE_AUDIT_BASE_URL || 'https://www.bionixus.com';
const sitemapPath = path.join(root, 'public/sitemap.xml');
const outJsonPath = path.join(root, 'scripts/data/sitewide-audit-phase2.json');
const outMdPath = path.join(root, 'docs/seo/sitewide-audit-phase2.md');
const timeoutMs = 20000;
const concurrency = 10;

function getUrlsFromSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

function textMatch(html, regex) {
  const m = html.match(regex);
  return m?.[1]?.trim() || '';
}

function countMatches(html, regex) {
  return [...html.matchAll(regex)].length;
}

function getSchemaTypes(html) {
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const types = [];
  for (const s of scripts) {
    try {
      const raw = s[1].trim();
      if (!raw) continue;
      const json = JSON.parse(raw);
      const items = Array.isArray(json) ? json : [json];
      for (const item of items) {
        const t = item?.['@type'];
        if (Array.isArray(t)) types.push(...t);
        else if (typeof t === 'string') types.push(t);
      }
    } catch {
      // ignore malformed schema
    }
  }
  return [...new Set(types)];
}

function isInternalHref(href) {
  return href.startsWith('/') || href.startsWith(baseUrl);
}

function classify(pathname, data) {
  const issues = [];
  if (!data.title) issues.push('Missing <title>');
  if (!data.metaDescription) issues.push('Missing meta description');
  if (!data.canonical) issues.push('Missing canonical');
  if (data.h1Count === 0) issues.push('Missing H1');
  if (data.h1Count > 1) issues.push(`Multiple H1 (${data.h1Count})`);
  if (data.internalLinks < 5) issues.push(`Low internal links (${data.internalLinks})`);
  if (data.title && data.title.length < 30) issues.push('Short title');
  if (data.title && data.title.length > 65) issues.push('Long title');
  if (data.metaDescription && data.metaDescription.length < 90) issues.push('Short meta description');
  if (data.metaDescription && data.metaDescription.length > 170) issues.push('Long meta description');

  if (
    (pathname === '/market-reports' ||
      pathname.startsWith('/market-reports/therapy/') ||
      pathname.startsWith('/market-reports/country/')) &&
    data.schemaTypes.includes('Article')
  ) {
    issues.push('Collection page uses Article schema');
  }

  const severity =
    issues.length === 0
      ? 'PASS'
      : issues.some((i) => i.startsWith('Missing') || i.includes('Multiple H1') || i.includes('Article schema'))
        ? 'MAJOR'
        : 'MINOR';

  return { severity, issues };
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'user-agent': 'BioNixus-Sitewide-Audit/1.0',
        accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
    });
    const html = await res.text();
    return { status: res.status, html };
  } finally {
    clearTimeout(timer);
  }
}

function summarizeByPrefix(rows) {
  const groups = new Map();
  for (const row of rows) {
    const p = row.pathname;
    const key = p.startsWith('/market-reports')
      ? '/market-reports'
      : p.startsWith('/blog/')
        ? '/blog/:slug'
        : p.startsWith('/blog')
          ? '/blog'
          : p.split('/').slice(0, 2).join('/') || '/';
    const g = groups.get(key) || { total: 0, pass: 0, minor: 0, major: 0 };
    g.total += 1;
    if (row.severity === 'PASS') g.pass += 1;
    if (row.severity === 'MINOR') g.minor += 1;
    if (row.severity === 'MAJOR') g.major += 1;
    groups.set(key, g);
  }
  return [...groups.entries()].sort((a, b) => b[1].total - a[1].total);
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
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Sitemap not found: ${sitemapPath}`);
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = getUrlsFromSitemap(xml);

  const rows = await runPool(
    urls,
    async (sourceUrl) => {
      const pathname = new URL(sourceUrl).pathname;
      const auditUrl = new URL(pathname, baseUrl).toString();
      try {
        const { status, html } = await fetchPage(auditUrl);
        const title = textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
        const metaDescription = textMatch(html, /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
        const canonical = textMatch(html, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
        const h1Count = countMatches(html, /<h1\b/gi);
        const internalLinks = [...html.matchAll(/<a[^>]*href=["']([^"']+)["']/gi)]
          .map((m) => m[1])
          .filter((href) => isInternalHref(href)).length;
        const schemaTypes = getSchemaTypes(html);
        const { severity, issues } = classify(pathname, {
          title,
          metaDescription,
          canonical,
          h1Count,
          internalLinks,
          schemaTypes,
        });

        return {
          url: auditUrl,
          sourceUrl,
          pathname,
          status,
          severity,
          issues,
          titleLength: title.length,
          descriptionLength: metaDescription.length,
          h1Count,
          internalLinks,
          schemaTypes,
        };
      } catch (error) {
        return {
          url: auditUrl,
          sourceUrl,
          pathname,
          status: 0,
          severity: 'MAJOR',
          issues: [`Fetch error: ${error instanceof Error ? error.message : String(error)}`],
          titleLength: 0,
          descriptionLength: 0,
          h1Count: 0,
          internalLinks: 0,
          schemaTypes: [],
        };
      }
    },
    concurrency,
  );

  const counts = rows.reduce(
    (acc, row) => {
      acc.total += 1;
      if (row.severity === 'PASS') acc.pass += 1;
      if (row.severity === 'MINOR') acc.minor += 1;
      if (row.severity === 'MAJOR') acc.major += 1;
      return acc;
    },
    { total: 0, pass: 0, minor: 0, major: 0 },
  );

  const groups = summarizeByPrefix(rows);
  const topIssues = new Map();
  for (const row of rows) {
    for (const issue of row.issues) {
      topIssues.set(issue, (topIssues.get(issue) || 0) + 1);
    }
  }
  const topIssueList = [...topIssues.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);

  fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
  fs.writeFileSync(
    outJsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        baseUrl,
        counts,
        groups: Object.fromEntries(groups),
        rows,
      },
      null,
      2,
    ),
  );

  const majorRows = rows.filter((r) => r.severity === 'MAJOR');
  const md = [
    '# Sitewide Audit Phase 2',
    '',
    `Generated: ${new Date().toISOString()}`,
    `Base URL: ${baseUrl}`,
    '',
    '## Summary',
    '',
    `- Total URLs: ${counts.total}`,
    `- PASS: ${counts.pass}`,
    `- MINOR: ${counts.minor}`,
    `- MAJOR: ${counts.major}`,
    '',
    '## Top Issue Patterns',
    '',
    ...topIssueList.map(([issue, count]) => `- ${issue}: ${count}`),
    '',
    '## Prefix Breakdown',
    '',
    '| Prefix | Total | PASS | MINOR | MAJOR |',
    '|---|---:|---:|---:|---:|',
    ...groups.map(([prefix, g]) => `| \`${prefix}\` | ${g.total} | ${g.pass} | ${g.minor} | ${g.major} |`),
    '',
    '## MAJOR URLs (First 120)',
    '',
    ...majorRows.slice(0, 120).map((r) => `- ${r.url} — ${r.issues.join('; ')}`),
    '',
  ].join('\n');

  fs.mkdirSync(path.dirname(outMdPath), { recursive: true });
  fs.writeFileSync(outMdPath, md);

  console.log(`Audit complete: ${counts.total} URLs`);
  console.log(`PASS ${counts.pass} | MINOR ${counts.minor} | MAJOR ${counts.major}`);
  console.log(`Wrote ${outMdPath}`);
  console.log(`Wrote ${outJsonPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

