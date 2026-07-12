#!/usr/bin/env node
/**
 * SEO Regression Suite — crawls every sitemap URL against a locally-running
 * production build (or a deployed preview URL) and checks it against rules
 * R01-R16 (per-URL) and S01-S06 (site-wide). See scripts/README.md.
 *
 * Usage:
 *   node scripts/seo-regression.mjs --base http://localhost:4173
 *   node scripts/seo-regression.mjs --base <preview-url> --only "/blog"
 *   node scripts/seo-regression.mjs --base <url> --update-baseline
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pLimit from 'p-limit';

import { loadSitemapUrls } from './lib/seo-regression/sitemap.mjs';
import { fetchPage } from './lib/seo-regression/fetch-page.mjs';
import { loadHtml, extractVisibleText, extractMainText } from './lib/seo-regression/html-helpers.mjs';
import { runPerUrlRules } from './lib/seo-regression/rules-per-url.mjs';
import { checkCrossUrlDuplicates, checkHreflangReciprocity } from './lib/seo-regression/cross-url.mjs';
import { runPinnedChecks } from './lib/seo-regression/pinned-checks.mjs';
import {
  checkOrphanPages,
  checkSitemapHygiene,
  checkRedirectMap,
  checkRouteVsSitemapDrift,
  checkBaselineDrift,
  checkContentSimilarity,
} from './lib/seo-regression/site-wide.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function parseArgs(argv) {
  const args = { concurrency: 12, failOn: 'error' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--base') args.base = argv[++i];
    else if (a === '--sitemap') args.sitemap = argv[++i];
    else if (a === '--concurrency') args.concurrency = Number(argv[++i]);
    else if (a === '--report') args.report = argv[++i];
    else if (a === '--fail-on') args.failOn = argv[++i];
    else if (a === '--only') args.only = argv[++i];
    else if (a === '--baseline') args.baseline = argv[++i];
    else if (a === '--update-baseline') args.updateBaseline = true;
    else if (a === '--skip-og-images') args.skipOgImages = true;
    else if (a === '--skip-redirect-map') args.skipRedirectMap = true;
  }
  if (!args.base) {
    console.error('Error: --base <url> is required (e.g. http://localhost:4173)');
    process.exit(2);
  }
  args.base = args.base.replace(/\/$/, '');
  args.report = args.report || path.join(root, 'seo-report.json');
  return args;
}

function loadConfig() {
  const configPath = path.join(root, 'config', 'seo-regression.config.json');
  return JSON.parse(readFileSync(configPath, 'utf-8'));
}

function loadRedirectMap() {
  const p = path.join(root, 'config', 'legacy-redirects.json');
  if (!existsSync(p)) return {};
  return JSON.parse(readFileSync(p, 'utf-8'));
}

function loadPinnedChecks() {
  const p = path.join(root, 'config', 'pinned-checks.json');
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, 'utf-8'));
}

function loadBaseline(baselinePath) {
  if (!baselinePath || !existsSync(baselinePath)) return null;
  return JSON.parse(readFileSync(baselinePath, 'utf-8'));
}

async function crawlOne(url, limit) {
  return limit(async () => {
    const fetchResult = await fetchPage(url);
    const $ = fetchResult.html ? loadHtml(fetchResult.html) : null;
    const ok = $ && fetchResult.status === 200;
    // Computed once per page here (rather than separately inside R07 and S06)
    // since each extraction clones the whole parsed tree — doing it twice per
    // page across 800+ pages was a measurable chunk of a full run.
    const visibleText = ok ? extractVisibleText($) : '';
    const mainText = ok ? extractMainText($) : '';
    return { url, fetchResult, $, visibleText, mainText };
  });
}

async function checkOgImages(crawlResults, skip) {
  const findings = new Map();
  if (skip) return findings;
  const imageUrls = new Map(); // imageUrl -> [pageUrl,...]
  for (const r of crawlResults) {
    if (!r.$) continue;
    const img = r.$('head meta[property="og:image" i]').attr('content');
    if (!img) continue;
    if (!imageUrls.has(img)) imageUrls.set(img, []);
    imageUrls.get(img).push(r.url);
  }
  const limit = pLimit(8);
  const checks = await Promise.all(
    [...imageUrls.entries()].map(([imgUrl, pages]) =>
      limit(async () => {
        const res = await fetchPage(imgUrl);
        const ok = res.status === 200 && /^image\//i.test(res.contentType);
        return { imgUrl, pages, ok, status: res.status, contentType: res.contentType };
      }),
    ),
  );
  for (const check of checks) {
    for (const pageUrl of check.pages) {
      if (!findings.has(pageUrl)) {
        findings.set(
          pageUrl,
          check.ok
            ? { rule: 'R12-image', status: 'pass', message: `og:image reachable (${check.status}, ${check.contentType})` }
            : {
                rule: 'R12-image',
                status: 'error',
                message: `og:image "${check.imgUrl}" returned ${check.status} / content-type "${check.contentType}"`,
              },
        );
      }
    }
  }
  return findings;
}

function printSummary(allFindings) {
  const counts = { pass: 0, warn: 0, error: 0 };
  for (const f of allFindings) counts[f.status] = (counts[f.status] || 0) + 1;
  console.log('\n=== SEO Regression Suite Summary ===');
  console.log(`Total findings: ${allFindings.length}  |  pass: ${counts.pass}  warn: ${counts.warn}  error: ${counts.error}\n`);

  const errors = allFindings.filter((f) => f.status === 'error');
  const warns = allFindings.filter((f) => f.status === 'warn');

  function printGroup(label, items) {
    if (items.length === 0) return;
    console.log(`--- ${label} (${items.length}) ---`);
    const byRule = new Map();
    for (const f of items) {
      if (!byRule.has(f.rule)) byRule.set(f.rule, []);
      byRule.get(f.rule).push(f);
    }
    for (const [rule, group] of byRule) {
      console.log(`  ${rule}: ${group.length} finding(s)`);
      for (const f of group.slice(0, 10)) {
        console.log(`    [${f.url || 'site-wide'}] ${f.message}`);
      }
      if (group.length > 10) console.log(`    ... and ${group.length - 10} more`);
    }
    console.log();
  }

  printGroup('ERRORS', errors);
  printGroup('WARNINGS', warns);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const config = loadConfig();
  const redirectMap = loadRedirectMap();
  const baseline = loadBaseline(args.baseline);

  console.log(`Loading sitemap from ${args.sitemap || `${args.base}/sitemap.xml`}...`);
  let urls = await loadSitemapUrls({
    file: args.sitemap,
    base: args.sitemap ? undefined : args.base,
    fetchImpl: fetch,
  });

  // Rewrite sitemap host to --base host so we can test a local build or preview deploy
  // against production URLs recorded in sitemap.xml.
  const baseUrlObj = new URL(args.base);
  urls = urls.map((u) => {
    try {
      const parsed = new URL(u);
      parsed.protocol = baseUrlObj.protocol;
      parsed.host = baseUrlObj.host;
      return parsed.toString();
    } catch {
      return u;
    }
  });

  if (args.only) {
    const re = new RegExp(args.only);
    urls = urls.filter((u) => re.test(u));
  }

  console.log(`Crawling ${urls.length} URL(s) at concurrency ${args.concurrency}...`);
  const limit = pLimit(args.concurrency);
  const startedAt = Date.now();
  const crawlResults = await Promise.all(urls.map((u) => crawlOne(u, limit)));
  const crawlSeconds = (Date.now() - startedAt) / 1000;
  console.log(`Crawl finished in ${crawlSeconds.toFixed(1)}s`);

  const allFindings = [];
  const perUrlFindingsByUrl = new Map();

  // Per-URL rules
  for (const r of crawlResults) {
    const findings = runPerUrlRules({ pageUrl: r.url, fetchResult: r.fetchResult, $: r.$, visibleText: r.visibleText, config });
    perUrlFindingsByUrl.set(r.url, findings);
    for (const f of findings) allFindings.push({ ...f, url: r.url });
  }

  // Cross-URL: R04, R05, R10
  const r04 = checkCrossUrlDuplicates(crawlResults, 'R04', ($) => $('head title').first().text().trim(), config);
  const r05 = checkCrossUrlDuplicates(
    crawlResults,
    'R05',
    ($) => ($('head meta[name="description" i]').first().attr('content') || '').trim(),
    config,
  );
  for (const [url, f] of r04) allFindings.push({ ...f, url });
  for (const [url, f] of r05) allFindings.push({ ...f, url });
  // R10 needs every alternate present in the crawl set to judge reciprocity —
  // meaningless (and noisy) against a --only subset.
  if (!args.only) {
    const r10 = checkHreflangReciprocity(crawlResults);
    for (const [url, f] of r10) allFindings.push({ ...f, url });
  }

  // R12 image reachability (deduplicated)
  const r12images = await checkOgImages(crawlResults, args.skipOgImages);
  for (const [url, f] of r12images) allFindings.push({ ...f, url });

  // S01 needs the full site's inbound-link graph — every page in a --only
  // subset looks orphaned otherwise.
  if (!args.only) {
    const s01 = checkOrphanPages(crawlResults, config);
    for (const [url, f] of s01) allFindings.push({ ...f, url });
  }

  // S02
  let sitemapXmlForHygiene = null;
  if (args.sitemap) {
    sitemapXmlForHygiene = readFileSync(args.sitemap, 'utf-8');
  } else {
    const res = await fetchPage(`${args.base}/sitemap.xml`);
    sitemapXmlForHygiene = res.html;
  }
  if (sitemapXmlForHygiene) {
    for (const f of checkSitemapHygiene(sitemapXmlForHygiene, crawlResults)) allFindings.push(f);
  }

  // S03
  if (!args.skipRedirectMap && !args.only) {
    const s03 = await checkRedirectMap(redirectMap, { ...config, host: args.base });
    for (const f of s03) allFindings.push(f);
  }

  // S04 (skipped on --only runs — comparing the full route table against a filtered
  // URL subset produces noise; the CI/full run always exercises this)
  const routesFilePath = path.join(root, 'src', 'routes.tsx');
  if (existsSync(routesFilePath) && !args.only) {
    for (const f of checkRouteVsSitemapDrift(routesFilePath, urls, config)) allFindings.push(f);
  }

  // S05
  if (baseline) {
    for (const f of checkBaselineDrift(crawlResults, perUrlFindingsByUrl, baseline)) allFindings.push(f);
  }

  // S06 + R16
  const { findings: s06Findings, clusterReport, r16 } = checkContentSimilarity(crawlResults, config);
  for (const f of s06Findings) allFindings.push(f);
  for (const [url, f] of r16) allFindings.push({ ...f, url });

  // Pinned checks — explicit named regressions for bugs found this session (skipped on --only runs)
  if (!args.only) {
    const pinnedConfig = loadPinnedChecks();
    const pinnedFindings = await runPinnedChecks(pinnedConfig, args.base);
    for (const f of pinnedFindings) allFindings.push(f);
  }

  printSummary(allFindings);

  const report = {
    generatedAt: new Date().toISOString(),
    base: args.base,
    urlCount: urls.length,
    crawlSeconds,
    findings: allFindings,
    clusterReport,
    counts: allFindings.reduce(
      (acc, f) => ((acc[f.status] = (acc[f.status] || 0) + 1), acc),
      { pass: 0, warn: 0, error: 0 },
    ),
  };
  writeFileSync(args.report, JSON.stringify(report, null, 2));
  console.log(`Report written to ${args.report}`);

  if (args.updateBaseline) {
    const baselineOut = {};
    for (const r of crawlResults) {
      const findings = perUrlFindingsByUrl.get(r.url) || [];
      const title = findings.find((f) => f.rule === 'R03')?.details?.title;
      const words = findings.find((f) => f.rule === 'R07')?.details?.words;
      const canonical = findings.find((f) => f.rule === 'R08')?.details?.canonical;
      baselineOut[r.url] = { title, words, canonical };
    }
    const baselineOutPath = path.join(root, 'seo-baseline.json');
    writeFileSync(baselineOutPath, JSON.stringify(baselineOut, null, 2));
    console.log(`Baseline written to ${baselineOutPath}`);
  }

  const hasError = allFindings.some((f) => f.status === 'error');
  const hasWarn = allFindings.some((f) => f.status === 'warn');
  const shouldFail = hasError || (args.failOn === 'warn' && hasWarn);
  process.exit(shouldFail ? 1 : 0);
}

main().catch((err) => {
  console.error('Fatal error running seo-regression suite:', err);
  process.exit(2);
});
