#!/usr/bin/env node
/**
 * Seeded-fault tests for the SEO regression suite itself: constructs a
 * synthetic fixture representing each bug class the suite is meant to catch,
 * runs the real rule function against it, and asserts the expected rule
 * fires with 'error' status. This exercises the rule-detection logic
 * directly (fast, deterministic, no build/server round-trip) rather than
 * mutating a real page and rebuilding — the fixtures below are the "seeded
 * bug", and reverting is implicit since nothing on disk is touched.
 *
 * Usage: node scripts/test-seo-regression-rules.mjs
 */
import assert from 'node:assert/strict';

import { loadHtml, extractVisibleText, extractMainText } from './lib/seo-regression/html-helpers.mjs';
import { runPerUrlRules } from './lib/seo-regression/rules-per-url.mjs';
import { checkOrphanPages, checkRedirectMap, checkContentSimilarity } from './lib/seo-regression/site-wide.mjs';
import { checkHreflangReciprocity } from './lib/seo-regression/cross-url.mjs';

const CONFIG = {
  host: 'www.bionixus.com',
  trailingSlashPolicy: 'no-trailing-slash',
  locales: ['en', 'de', 'fr', 'es', 'ar', 'zh', 'pt', 'ru'],
  minWordCountDefault: 150,
};

function page({ url, html, status = 200 }) {
  const $ = loadHtml(html);
  return { url, fetchResult: { status, html, contentType: 'text/html; charset=utf-8' }, $, visibleText: extractVisibleText($), mainText: extractMainText($) };
}

function fullPageHtml({ title, canonical, hreflang = '', body }) {
  return `<html lang="en"><head><title>${title}</title>
    <meta name="description" content="A perfectly reasonable 50 to 160 character meta description for this page, written to satisfy R05." />
    <link rel="canonical" href="${canonical}" />
    ${hreflang}
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="OG description" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="https://www.bionixus.com/og.jpg" />
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"BioNixus"}</script>
  </head><body><h1>Heading</h1>${body}</body></html>`;
}

const tests = [];
function test(name, fn) {
  tests.push({ name, fn });
}

// --- 1. R07 / R07b: thin / skeleton page (the React.lazy-without-preload / Suspense bug class) ---
test('R07b fires on a skeleton page (<30 words)', () => {
  const html = fullPageHtml({
    title: 'A Perfectly Fine Title Length Here',
    canonical: 'https://www.bionixus.com/thin-page',
    body: '<p>Loading…</p>',
  });
  const findings = runPerUrlRules({
    pageUrl: 'https://www.bionixus.com/thin-page',
    fetchResult: { status: 200, contentType: 'text/html; charset=utf-8' },
    $: loadHtml(html),
    visibleText: extractVisibleText(loadHtml(html)),
    config: CONFIG,
  });
  const r07b = findings.find((f) => f.rule === 'R07b');
  assert.equal(r07b?.status, 'error', 'expected R07b error on a <30-word page');
  const r07 = findings.find((f) => f.rule === 'R07');
  assert.equal(r07?.status, 'error', 'expected R07 error too (below the 150-word default threshold)');
});

// --- 2. R08: wrong / mismatched canonical ---
test('R08 fires when canonical points at a different URL', () => {
  const url = 'https://www.bionixus.com/real-page';
  const html = fullPageHtml({
    title: 'A Perfectly Fine Title Length Here',
    canonical: 'https://www.bionixus.com/some-other-page', // wrong on purpose
    body: '<p>' + 'word '.repeat(200) + '</p>',
  });
  const findings = runPerUrlRules({
    pageUrl: url,
    fetchResult: { status: 200, contentType: 'text/html; charset=utf-8' },
    $: loadHtml(html),
    visibleText: extractVisibleText(loadHtml(html)),
    config: CONFIG,
  });
  const r08 = findings.find((f) => f.rule === 'R08');
  assert.equal(r08?.status, 'error', 'expected R08 error when canonical path does not match the requested URL');
});

// --- 3. S01: orphan page (zero inbound internal links) ---
test('S01 fires on a page with zero inbound internal links', () => {
  const hubHtml = `<html><body><a href="https://www.bionixus.com/page-a">A</a></body></html>`;
  const linkedHtml = `<html><body><p>Linked-to page, no outbound links of its own.</p></body></html>`;
  const orphanHtml = `<html><body><p>No links point here.</p></body></html>`;
  const crawlResults = [
    page({ url: 'https://www.bionixus.com/hub', html: hubHtml }),
    page({ url: 'https://www.bionixus.com/page-a', html: linkedHtml }),
    page({ url: 'https://www.bionixus.com/orphan-page', html: orphanHtml }),
  ];
  const findings = checkOrphanPages(crawlResults, CONFIG);
  const orphanFinding = findings.get('https://www.bionixus.com/orphan-page');
  assert.equal(orphanFinding?.status, 'error', 'expected S01 error for the page nothing links to');
  const linkedFinding = findings.get('https://www.bionixus.com/page-a');
  assert.equal(linkedFinding?.status, 'pass', 'the page /hub links to should not be flagged');
});

// --- 4. S03: broken legacy redirect (wrong target / target not 200) ---
test('S03 fires when a redirect source does not reach its expected target', async () => {
  // checkRedirectMap uses the real fetchPage() internally against a live
  // server; stub global fetch to simulate the exact failure mode of the real
  // drifted-redirect-map bug (PR #46: a source path present in one copy of
  // the map but not honored, so it returns 200 instead of redirecting).
  const globalFetch = global.fetch;
  global.fetch = async () => ({
    status: 200,
    headers: { get: () => null },
    text: async () => '<html></html>',
  });
  try {
    const findings = await checkRedirectMap({ '/old-path': '/new-path' }, { ...CONFIG, host: 'https://example-fixture.invalid' });
    assert.equal(findings[0]?.status, 'error', 'expected S03 error when the source path returns 200 instead of redirecting');
  } finally {
    global.fetch = globalFetch;
  }
});

// --- 5. S06: near-duplicate content ---
test('S06 fires on two pages with near-identical body text', () => {
  // Sentence-punctuated, so the boilerplate detector's sentence-block split
  // has something finer than "the whole page" to work with, and enough
  // distinct filler pages that the shared text stays under the detector's
  // 30%-of-corpus "this is just common chrome" threshold — with too few
  // pages, two wholesale-identical pages ARE >30% of the corpus and the
  // shared text gets stripped as assumed boilerplate before comparison,
  // hiding the very duplication this test means to catch.
  const sentence = (seed) =>
    Array.from({ length: 20 }, (_, i) => `Sharedword${seed}${i} builds decision ready market research evidence.`).join(' ');
  const sharedBody = `<p>${sentence('x')}</p>`;
  const crawlResults = [
    page({ url: 'https://www.bionixus.com/dup-a', html: `<html><body>${sharedBody}</body></html>` }),
    page({ url: 'https://www.bionixus.com/dup-b', html: `<html><body>${sharedBody}</body></html>` }),
    ...Array.from({ length: 8 }, (_, i) =>
      page({
        url: `https://www.bionixus.com/filler-${i}`,
        html: `<html><body><p>${sentence(`filler${i}`)}</p></body></html>`,
      }),
    ),
  ];
  const { findings } = checkContentSimilarity(crawlResults, CONFIG);
  const s06 = findings.find((f) => f.rule === 'S06' && f.status === 'error');
  assert.ok(s06, 'expected an S06 error for two pages with identical body text');
});

// --- 6. R10: hreflang reciprocity (the exact bug class fixed in PR #43) ---
test('R10 fires when an hreflang alternate does not list the page back', () => {
  const enHtml = fullPageHtml({
    title: 'English Page Title Here Ok',
    canonical: 'https://www.bionixus.com/page',
    hreflang: `<link rel="alternate" hreflang="en" href="https://www.bionixus.com/page" />
               <link rel="alternate" hreflang="de" href="https://www.bionixus.com/de/page" />`,
    body: '<p>' + 'word '.repeat(200) + '</p>',
  });
  // The DE page does NOT list the EN page back — the reciprocity bug.
  const deHtml = fullPageHtml({
    title: 'Deutsche Seite Titel Hier Ok',
    canonical: 'https://www.bionixus.com/de/page',
    hreflang: `<link rel="alternate" hreflang="de" href="https://www.bionixus.com/de/page" />`,
    body: '<p>' + 'wort '.repeat(200) + '</p>',
  });
  const crawlResults = [
    page({ url: 'https://www.bionixus.com/page', html: enHtml }),
    page({ url: 'https://www.bionixus.com/de/page', html: deHtml }),
  ];
  const findings = checkHreflangReciprocity(crawlResults);
  const r10 = findings.get('https://www.bionixus.com/page');
  assert.equal(r10?.status, 'error', 'expected R10 error: DE alternate does not reciprocate the EN link');
});

async function main() {
  let failed = 0;
  for (const { name, fn } of tests) {
    try {
      await fn();
      console.log(`PASS  ${name}`);
    } catch (err) {
      failed++;
      console.error(`FAIL  ${name}`);
      console.error(`      ${err.message}`);
    }
  }
  console.log(`\n${tests.length - failed}/${tests.length} seeded-fault tests passed.`);
  process.exit(failed > 0 ? 1 : 0);
}

main();
