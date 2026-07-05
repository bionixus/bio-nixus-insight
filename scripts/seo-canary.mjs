#!/usr/bin/env node
/**
 * Production canary — a fast (~5-page) tripwire meant to run every 30
 * minutes between full scripts/seo-regression.mjs runs. It is deliberately
 * narrow: title, meta description, skeleton-page detection, and
 * undefined/null leakage — the exact failure signature of the 2026-07-05 P0
 * incident (api/indexnow-key.ts shipping a literal "undefined" body + a
 * truncated generic title on every URL, as HTTP 200). A full regression run
 * takes minutes and checks ~850 URLs in depth; this checks 6 URLs in ~10
 * seconds so an incident like that one is caught within one cycle instead
 * of whenever someone next runs the full suite by hand.
 *
 * Usage:
 *   node scripts/seo-canary.mjs --base https://www.bionixus.com
 *
 * On any failure, POSTs a JSON payload to $ALERT_WEBHOOK (if set) with the
 * URL, rule, and a snippet of the offending content. Also compares each
 * URL's title against a stored last-known-good hash (.seo-canary-state.json)
 * so a sudden, unexplained title change is flagged even if it still
 * technically passes the basic shape checks.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

import { loadSitemapUrls } from './lib/seo-regression/sitemap.mjs';
import { fetchPage } from './lib/seo-regression/fetch-page.mjs';
import { loadHtml } from './lib/seo-regression/html-helpers.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const STATE_PATH = path.join(root, '.seo-canary-state.json');

function parseArgs(argv) {
  const args = { rotatingCount: 5 };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--base') args.base = argv[++i];
    if (argv[i] === '--rotating-count') args.rotatingCount = Number(argv[++i]);
  }
  if (!args.base) {
    console.error('Error: --base <url> is required');
    process.exit(2);
  }
  args.base = args.base.replace(/\/$/, '');
  return args;
}

function loadState() {
  if (!existsSync(STATE_PATH)) return {};
  try {
    return JSON.parse(readFileSync(STATE_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

function saveState(state) {
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

function hashTitle(title) {
  return crypto.createHash('sha256').update(title).digest('hex').slice(0, 16);
}

/**
 * Pick 5 URLs deterministically rotating by the current hour, so every URL
 * in the sitemap gets covered over time without needing to check all of
 * them every cycle. Deterministic on (urls, hour) rather than random, so
 * re-runs within the same hour (e.g. a retry) check the same set.
 */
function pickRotatingUrls(urls, count, hourBucket) {
  if (urls.length <= count) return urls;
  const start = (hourBucket * count) % urls.length;
  const picked = [];
  for (let i = 0; i < count; i++) {
    picked.push(urls[(start + i) % urls.length]);
  }
  return picked;
}

async function postAlert(webhookUrl, payload) {
  if (!webhookUrl) return;
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Failed to POST alert to ALERT_WEBHOOK:', err.message || err);
  }
}

function checkPage(url, fetchResult) {
  const problems = [];
  if (fetchResult.status !== 200) {
    return [{ rule: 'CANARY-status', message: `Expected 200, got ${fetchResult.status}` }];
  }

  const $ = loadHtml(fetchResult.html);

  // R03-lite: title present, sane length
  const title = $('head title').first().text().trim();
  if (!title) {
    problems.push({ rule: 'CANARY-R03', message: 'No <title> found' });
  } else if (title.length < 10 || title.length > 65) {
    problems.push({ rule: 'CANARY-R03', message: `Title length ${title.length} outside 10-65 range: "${title}"` });
  }

  // R05-lite: meta description present, sane length
  const desc = ($('head meta[name="description" i]').first().attr('content') || '').trim();
  if (!desc) {
    problems.push({ rule: 'CANARY-R05', message: 'No meta description found' });
  } else if (desc.length < 50 || desc.length > 160) {
    problems.push({ rule: 'CANARY-R05', message: `Meta description length ${desc.length} outside 50-160 range` });
  }

  // R07b-lite: skeleton page
  const $clone = loadHtml(fetchResult.html);
  $clone('script, style, noscript, nav, footer').remove();
  const bodyText = ($clone('body').text() || '').replace(/\s+/g, ' ').trim();
  const words = bodyText ? bodyText.split(' ').length : 0;
  if (words < 30) {
    problems.push({ rule: 'CANARY-R07b', message: `Skeleton page: only ${words} words`, snippet: bodyText.slice(0, 200) });
  }

  // R15-lite: undefined/null leakage
  const canonical = $('head link[rel="canonical" i]').attr('href') || '';
  for (const [label, value] of [['title', title], ['description', desc], ['canonical', canonical]]) {
    if (/\bundefined\b/i.test(value) || /\bnull\b/i.test(value)) {
      problems.push({ rule: 'CANARY-R15', message: `"undefined"/"null" leaked into ${label}: "${value}"` });
    }
  }
  if (/\bundefined\b/.test(bodyText.slice(0, 500))) {
    problems.push({ rule: 'CANARY-R15', message: 'Literal "undefined" found near top of body', snippet: bodyText.slice(0, 200) });
  }

  return { problems, title };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const webhookUrl = process.env.ALERT_WEBHOOK;
  const state = loadState();

  const allUrls = await loadSitemapUrls({ base: args.base, fetchImpl: fetch });
  const hourBucket = Math.floor(Date.now() / (1000 * 60 * 30)); // new bucket every 30 min, matching the cron cadence
  const homepage = `${args.base}/`;
  const rotating = pickRotatingUrls(
    allUrls.filter((u) => u !== homepage),
    args.rotatingCount,
    hourBucket,
  );
  const targets = [homepage, ...rotating];

  console.log(`Canary checking ${targets.length} URL(s) against ${args.base}...`);

  let anyFailure = false;
  const results = [];

  for (const url of targets) {
    const fetchResult = await fetchPage(url);
    const { problems, title } = checkPage(url, fetchResult) || { problems: [{ rule: 'CANARY-fetch', message: 'fetch failed' }] };

    if (title) {
      const newHash = hashTitle(title);
      const prevHash = state[url]?.titleHash;
      if (prevHash && prevHash !== newHash) {
        problems.push({
          rule: 'CANARY-title-drift',
          message: `Title changed since last known-good check: "${state[url].title}" -> "${title}"`,
        });
      }
      state[url] = { titleHash: newHash, title, lastCheckedAt: new Date().toISOString() };
    }

    if (problems.length > 0) {
      anyFailure = true;
      console.error(`FAIL ${url}`);
      for (const p of problems) {
        console.error(`  [${p.rule}] ${p.message}`);
      }
      await postAlert(webhookUrl, {
        url,
        problems,
        checkedAt: new Date().toISOString(),
      });
    } else {
      console.log(`OK   ${url}`);
    }
    results.push({ url, problems });
  }

  saveState(state);

  if (anyFailure) {
    console.error('\nCanary detected one or more failures.');
    process.exit(1);
  }
  console.log('\nCanary OK.');
}

main().catch(async (err) => {
  console.error('Fatal error running canary:', err);
  await postAlert(process.env.ALERT_WEBHOOK, {
    url: '(canary itself)',
    problems: [{ rule: 'CANARY-fatal', message: String(err?.message || err) }],
    checkedAt: new Date().toISOString(),
  });
  process.exit(2);
});
