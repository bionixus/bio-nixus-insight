#!/usr/bin/env node
/**
 * BIO-444: Apply LLM/GEO optimization to BIO-435 Day 2 blog batch.
 *
 * Usage:
 *   node scripts/geo/apply-bio435-day2-geo-pass.mjs --dry-run
 *   node scripts/geo/apply-bio435-day2-geo-pass.mjs --apply
 *   node scripts/geo/apply-bio435-day2-geo-pass.mjs --apply --sync-sanity
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { GEO_PASS_DAY2_BY_SLUG, buildGeoAnswerHtml } from '../lib/bio435-day2-geo-pass-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '../..');
const dataDir = path.join(root, 'scripts/data');
const reportPath = path.join(root, 'docs/geo/bio-444-day2-geo-pass-2026-06-19.md');

const DAY2_SLUGS = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'bio435-day2-manifest.json'), 'utf8'),
).articles.map((a) => a.slug);

function loadDotEnv() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (!process.env[k]) process.env[k] = v;
  }
}

loadDotEnv();

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    apply: args.includes('--apply'),
    syncSanity: args.includes('--sync-sanity'),
    dryRun: args.includes('--dry-run') || (!args.includes('--apply') && !args.includes('--sync-sanity')),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
  };
}

function hasGeoBlock(html) {
  return /data-geo-answer="true"|class="geo-llm-answer"/i.test(html);
}

function insertGeoBlock(bodyHtml, geoHtml) {
  if (hasGeoBlock(bodyHtml)) return bodyHtml;
  const firstH2 = bodyHtml.search(/<h2\b/i);
  if (firstH2 === -1) return `${bodyHtml}\n\n${geoHtml}`;
  return `${bodyHtml.slice(0, firstH2)}\n\n${geoHtml}\n\n${bodyHtml.slice(firstH2)}`;
}

function ensureTocEntry(toc, config) {
  const heading =
    config.lang === 'en'
      ? 'Quick answer for AI search'
      : config.lang === 'ar'
        ? 'إجابة سريعة لمحركات AI'
        : 'Quick answer (GEO)';
  const exists = toc.some((t) => t.anchor === config.anchor);
  if (exists) return toc;
  const faqIdx = toc.findIndex((t) => t.anchor === 'faq');
  const entry = { heading, anchor: config.anchor };
  if (faqIdx === -1) return [...toc, entry];
  const next = [...toc];
  next.splice(faqIdx, 0, entry);
  return next;
}

function auditArticle(slug, data) {
  const html = data.bodyHtml || '';
  return {
    slug,
    url: `https://www.bionixus.com/blog/${slug}`,
    entitySentence: /BioNixus \(bionixus\.com\)/i.test(html),
    geoBlock: hasGeoBlock(html),
    faqDetails: /<details/i.test(html),
    faqCount: (data.faq || []).length,
    hubLink: /healthcare-market-research/.test(html.slice(0, 1200)),
    geoPass: data._geoPass?.version || null,
  };
}

function buildReport(results, liveChecks) {
  const applied = results.filter((r) => r.after.geoBlock).length;
  const lines = [
    '# BIO-444 Day 2 GEO Pass — 2026-06-19',
    '',
    '**Issue:** [BIO-444](/BIO/issues/BIO-444) · **Parent:** [BIO-435](/BIO/issues/BIO-435) · **Publish:** [BIO-443](/BIO/issues/BIO-443)',
    '',
    '## Summary',
    '',
    `Applied LLM/GEO optimization to **${applied}/${results.length}** Day-2 blog URLs per [geo-entity-playbook.md](../geo-entity-playbook.md).`,
    '',
    '### Lenses applied',
    '',
    '- **Entity salience** — `BioNixus (bionixus.com)` entity sentence in GEO answer blocks',
    '- **Answer-engine fit** — question-first H2 + quotable paragraph + structured `<ul>` proof points',
    '- **Structured data density** — existing FAQ `<details>/<summary>` retained; GEO block uses semantic `<section>`',
    '- **Source triangulation** — EDE, SFDA EES, CEESP, CONITEC, NMPA/NRDL, EAEU regulator names preserved',
    '- **Freshness signal** — `updatedAt` bumped on Sanity sync',
    '',
    '## Per-article audit (after pass)',
    '',
    '| Slug | Entity | GEO block | FAQ | Hub link | Sanity sync | Live curl |',
    '|------|--------|-----------|-----|----------|-------------|-----------|',
  ];

  for (const r of results) {
    const live = liveChecks?.[r.slug];
    lines.push(
      `| \`${r.slug}\` | ${r.after.entitySentence ? '✅' : '❌'} | ${r.after.geoBlock ? '✅' : '❌'} | ${r.after.faqCount} | ${r.after.hubLink ? '✅' : '⚠️'} | ${r.sanitySync || '—'} | ${live === true ? '✅' : live === false ? '❌' : '—'} |`,
    );
  }

  if (liveChecks) {
    const liveOk = Object.values(liveChecks).filter(Boolean).length;
    lines.push(
      '',
      `### Live HTML verification`,
      '',
      `${liveOk}/${results.length} URLs return \`geo-llm-answer\` in SSR HTML on www.bionixus.com.`,
      '',
    );
  }

  lines.push(
    '## Priority follow-ups',
    '',
    '| Priority | Action | Owner |',
    '|----------|--------|-------|',
    '| Medium | Re-run AI citation spot-check for UAE/HEOR EU/oncology US/KSA prompts in 2–4 weeks | GEOSpecialist |',
    '| Medium | SEOSpecialist verify Article schema + sitemap includes Day-2 URLs | SEOSpecialist |',
    '| Medium | Fix blog `inLanguage` / html lang from Sanity `post.language` (carried from Day-1) | CTO via CMO |',
    '| Low | CMO voice spot-check AR/PT/ZH/RU native phrasing | CMO |',
    '',
    '## Implementation',
    '',
    '- Script: `scripts/geo/apply-bio435-day2-geo-pass.mjs`',
    '- Config: `scripts/lib/bio435-day2-geo-pass-config.mjs`',
    '- llms.txt updated with Day-2 flagship blog links',
    '',
  );

  return `${lines.join('\n')}\n`;
}

async function syncToSanity(slug, data) {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
  const token =
    process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
  const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

  if (!projectId || !dataset || !token) {
    throw new Error('Missing Sanity credentials');
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug,
  });
  if (!existingId) {
    return 'missing in Sanity';
  }

  const withKeys = (items) =>
    items.map((item, i) => ({
      ...item,
      _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
    }));

  await client
    .patch(existingId)
    .set({
      bodyHtml: data.bodyHtml,
      updatedAt: data.updatedAt,
      tableOfContents: withKeys(
        (data.tableOfContents || []).map((item) => ({
          heading: item.heading,
          anchor: item.anchor,
        })),
      ),
    })
    .commit();

  return 'synced';
}

async function verifyLive(slugs) {
  const checks = {};
  for (const slug of slugs) {
    try {
      const res = await fetch(`https://www.bionixus.com/blog/${slug}`, {
        headers: { 'User-Agent': 'BioNixus-GEO-Verify/1.0' },
      });
      const html = await res.text();
      checks[slug] = res.ok && /geo-llm-answer|data-geo-answer="true"/i.test(html);
    } catch {
      checks[slug] = false;
    }
  }
  return checks;
}

async function main() {
  const { apply, syncSanity, dryRun, slug: onlySlug } = parseArgs();
  let slugs = DAY2_SLUGS;
  if (onlySlug) slugs = slugs.filter((s) => s === onlySlug);

  const results = [];
  const now = new Date().toISOString();

  for (const slug of slugs) {
    const config = GEO_PASS_DAY2_BY_SLUG[slug];
    if (!config) {
      console.warn(`No GEO config for ${slug}, skipping`);
      continue;
    }

    const jsonPath = path.join(dataDir, `${slug}.json`);
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const before = auditArticle(slug, data);

    const geoHtml = buildGeoAnswerHtml(config);
    const nextHtml = insertGeoBlock(data.bodyHtml || '', geoHtml);
    const nextToc = ensureTocEntry(data.tableOfContents || [], config);

    const nextData = {
      ...data,
      bodyHtml: nextHtml,
      tableOfContents: nextToc,
      updatedAt: now,
      _geoPass: {
        issue: 'BIO-444',
        version: '2026-06-19-v1',
        appliedAt: now,
        anchor: config.anchor,
      },
    };

    const after = auditArticle(slug, nextData);
    let sanitySync = null;

    if (apply && !dryRun) {
      fs.writeFileSync(jsonPath, `${JSON.stringify(nextData, null, 2)}\n`);
      console.log(`✓ JSON updated: ${slug}`);
      if (syncSanity) {
        try {
          sanitySync = await syncToSanity(slug, nextData);
          console.log(`  Sanity: ${sanitySync}`);
        } catch (e) {
          sanitySync = `error: ${e.message}`;
          console.error(`  Sanity error: ${e.message}`);
        }
      }
    } else {
      console.log(`[dry-run] ${slug}: geoBlock ${before.geoBlock ? 'exists' : 'would add'}`);
    }

    results.push({ slug, before, after, applied: apply && !dryRun, sanitySync });
  }

  let liveChecks = null;
  if (apply && !dryRun && syncSanity) {
    console.log('\nVerifying live HTML...');
    liveChecks = await verifyLive(results.map((r) => r.slug));
    for (const [slug, ok] of Object.entries(liveChecks)) {
      console.log(`  ${ok ? '✓' : '✗'} live: ${slug}`);
    }
  }

  if (apply && !dryRun) {
    fs.writeFileSync(reportPath, buildReport(results, liveChecks));
    console.log(`\nReport: ${reportPath}`);
  }

  const failed = results.filter((r) => r.sanitySync?.startsWith('error'));
  if (failed.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
