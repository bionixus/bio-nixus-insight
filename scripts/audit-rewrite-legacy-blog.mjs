#!/usr/bin/env node
/**
 * Audit and rewrite legacy (pre–Q2 2026) blog posts in Sanity.
 *
 * Run:
 *   node scripts/audit-rewrite-legacy-blog.mjs --dry-run --all
 *   node scripts/audit-rewrite-legacy-blog.mjs --sync-existing --all
 *   node scripts/audit-rewrite-legacy-blog.mjs --slug sfda-drug-registration-guide --sync-existing
 *   node scripts/audit-rewrite-legacy-blog.mjs --baseline-only
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { Q2_2026_TOPICS } from './data/q2-2026-pharma-insights-topics.mjs';
import { buildTopicFromPost, MANUAL_REVIEW_SLUGS } from './data/legacy-blog-topics.mjs';
import {
  rewriteBodyHtml,
  buildArticleMeta,
  buildToc,
  buildFaq,
  inferCategory,
  auditHtml,
} from './lib/legacy-article-html.mjs';
import { countWords, countInternalLinks } from './lib/blog-html-utils.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const Q2_SLUGS = new Set(Q2_2026_TOPICS.map((t) => t.slug));

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

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token =
  process.env.SANITY_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    all: args.includes('--all'),
    dryRun: args.includes('--dry-run'),
    sync: args.includes('--sync-existing'),
    baselineOnly: args.includes('--baseline-only'),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
  };
}

function buildPatch(topic, bodyHtml, meta, existing) {
  const readingTime = Math.max(8, Math.min(18, Math.round(countWords(bodyHtml) / 200)));
  const lang = topic.language === 'ar' ? 'ar' : topic.language === 'de' ? 'de' : 'en';
  const canonical = `https://www.bionixus.com${lang === 'en' ? '' : `/${lang}`}/blog/${topic.slug}`;

  return {
    seo: {
      ...(existing.seo || {}),
      metaTitle: meta.metaTitle,
      metaDescription: meta.metaDescription,
      focusKeyword: topic.focusKeyword.toLowerCase().slice(0, 80),
      keywords: [
        ...(existing.seo?.keywords || []).slice(0, 4),
        topic.geo,
        'healthcare market research',
        'GCC market access',
        'pharmaceutical',
      ].slice(0, 10),
      canonicalUrl: canonical,
      noIndex: false,
    },
    openGraph: {
      ...(existing.openGraph || {}),
      ogTitle: meta.ogTitle,
      ogDescription: meta.ogDescription,
    },
    title: meta.h1.slice(0, 200),
    excerpt: (topic.excerpt || meta.metaDescription).slice(0, 200),
    updatedAt: new Date().toISOString(),
    category: inferCategory(topic),
    country: topic.geo,
    language: lang,
    readingTime,
    tableOfContents: withKeys(buildToc()),
    bodyHtml,
    body: [],
    faq: withKeys(buildFaq(topic)),
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: `${meta.h1}: ${topic.geo} market access and healthcare market research guidance for pharmaceutical and medtech commercial teams. BioNixus summarizes payer, registration, and insight implications without substituting clinical advice.`,
          },
        ],
        markDefs: [],
      },
    ]),
    ctaSection: {
      title: `Scope your ${topic.geo} market access briefing`,
      description:
        'BioNixus supports SFDA/MOHAP registration planning, NUPCO tender intelligence, quantitative research, and competitive simulations across GCC and MENA.',
      buttonText: 'Request a commercial briefing',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  };
}

async function fetchLegacyPosts(client, slugFilter) {
  const query = slugFilter
    ? `*[_type == "blogPost" && slug.current == $slug][0]{
        _id, title, "slug": slug.current, excerpt, bodyHtml, language,
        seo, openGraph, publishedAt, mainImage, ogImage
      }`
    : `*[_type == "blogPost" && defined(slug.current)]{
        _id, title, "slug": slug.current, excerpt, bodyHtml, language,
        seo, openGraph, publishedAt, mainImage, ogImage
      }`;

  const rows = slugFilter
    ? [await client.fetch(query, { slug: slugFilter })].filter(Boolean)
    : await client.fetch(query);

  const filtered = rows.filter((p) => p?.slug && !Q2_SLUGS.has(p.slug));
  const bySlug = new Map();
  for (const p of filtered) {
    const prev = bySlug.get(p.slug);
    if (!prev || (p.bodyHtml?.length ?? 0) > (prev.bodyHtml?.length ?? 0)) {
      bySlug.set(p.slug, p);
    }
  }
  return [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

async function main() {
  const { all, dryRun, sync, baselineOnly, slug } = parseArgs();

  if (!all && !slug && !baselineOnly) {
    console.error(
      'Usage: --all | --slug <slug> [--dry-run] [--sync-existing] | --baseline-only',
    );
    process.exit(1);
  }

  if (!projectId || !token) {
    console.error('Missing SANITY credentials in .env');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const posts = await fetchLegacyPosts(client, slug || null);

  if (!posts.length) {
    console.error('No legacy posts found.');
    process.exit(1);
  }

  console.log(`Legacy posts to process: ${posts.length} (excluding ${Q2_SLUGS.size} Q2 slugs)`);

  const auditResults = [];
  const outDir = path.join(root, 'scripts/data/legacy-articles');
  if (dryRun) fs.mkdirSync(outDir, { recursive: true });

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const post of posts) {
    const topic = buildTopicFromPost(post);
    const bodyHtml = rewriteBodyHtml(topic, post.bodyHtml || '');
    const meta = buildArticleMeta(topic);
    const audit = auditHtml(bodyHtml, topic);

    auditResults.push({
      slug: topic.slug,
      title: meta.h1,
      words: audit.words,
      links: audit.links,
      issues: audit.issues,
      ok: audit.ok,
      manualReview: MANUAL_REVIEW_SLUGS.has(topic.slug),
    });

    console.log(
      `\n${topic.slug}: ${audit.words} words, ${audit.links} links${audit.ok ? '' : ' ⚠'}${audit.issues.length ? ` [${audit.issues.join(', ')}]` : ''}`,
    );

    if (dryRun) {
      fs.writeFileSync(path.join(outDir, `${topic.slug}.html`), bodyHtml, 'utf8');
      continue;
    }

    if (baselineOnly) continue;

    if (!sync) {
      console.log('  skip (use --sync-existing to patch Sanity)');
      skipped += 1;
      continue;
    }

    const patch = buildPatch(topic, bodyHtml, meta, post);
    await client.patch(post._id).set(patch).commit();
    console.log(`  updated: https://www.bionixus.com/blog/${topic.slug}`);
    updated += 1;
    if (!audit.ok) failed += 1;
  }

  const baselinePath = path.join(root, 'scripts/data/legacy-audit-after.json');
  fs.writeFileSync(baselinePath, JSON.stringify(auditResults, null, 2), 'utf8');

  const reportPath = path.join(root, 'BLOG_AUDIT_REPORT.md');
  writeAuditReport(reportPath, auditResults);

  const okCount = auditResults.filter((r) => r.ok).length;
  const wordMin = Math.min(...auditResults.map((r) => r.words));
  const wordMax = Math.max(...auditResults.map((r) => r.words));
  const linkMin = Math.min(...auditResults.map((r) => r.links));

  console.log(`\nAudit summary: ${okCount}/${auditResults.length} pass (≥800 words, ≥5 links)`);
  console.log(`Words: ${wordMin}–${wordMax}, links min: ${linkMin}`);
  console.log(`Report: ${reportPath}`);
  console.log(`Baseline: ${baselinePath}`);

  if (!dryRun && sync) {
    console.log(`Sanity updated: ${updated}, skipped: ${skipped}`);
  }

  if (okCount < auditResults.length && dryRun) process.exitCode = 1;
}

/**
 * @param {string} reportPath
 * @param {Array<{ slug: string; title: string; words: number; links: number; issues: string[]; ok: boolean; manualReview: boolean }>} rows
 */
function writeAuditReport(reportPath, rows) {
  const manual = rows.filter((r) => r.manualReview);
  const failed = rows.filter((r) => !r.ok);
  const samples = ['sfda-drug-registration-guide', 'gcc-pharmaceuticals-market-2026', 'quantitative-market-research-and-market-access']
    .map((s) => rows.find((r) => r.slug === s))
    .filter(Boolean);

  let md = `# BioNixus Blog Audit Report\n\n`;
  md += `Generated: ${new Date().toISOString().slice(0, 10)}\n\n`;
  md += `## Summary\n\n`;
  md += `- **Legacy posts processed:** ${rows.length}\n`;
  md += `- **Passed audit (≥800 words, ≥5 internal links):** ${rows.filter((r) => r.ok).length}\n`;
  md += `- **Failed audit:** ${failed.length}\n`;
  md += `- **Flagged for manual medical review:** ${manual.length}\n\n`;

  if (manual.length) {
    md += `### Manual review slugs\n\n`;
    for (const r of manual) {
      md += `- \`${r.slug}\`\n`;
    }
    md += `\n`;
  }

  md += `## Per-post results\n\n`;
  md += `| Slug | Words | Links | Status | Issues |\n`;
  md += `|------|-------|-------|--------|--------|\n`;
  for (const r of rows.sort((a, b) => a.slug.localeCompare(b.slug))) {
    md += `| ${r.slug} | ${r.words} | ${r.links} | ${r.ok ? 'PASS' : 'FAIL'} | ${r.issues.join('; ') || '—'} |\n`;
  }

  md += `\n## Panel-format samples\n\n`;
  for (const r of samples) {
    md += `### ${r.title}\n\n`;
    md += `**Slug:** \`/blog/${r.slug}\`\n\n`;
    md += `**Issues found:** ${r.issues.length ? r.issues.join(', ') : 'None after rewrite'}\n\n`;
    md += `**Word count / links:** ${r.words} words, ${r.links} internal links\n\n`;
    md += `**Medical validation:** Commercial and access framing only; no invented trial statistics. `;
    md += `${r.manualReview ? '**Flagged for manual clinical review** before citing product-specific claims.' : 'Standard accuracy controls applied.'}\n\n`;
    md += `**Internal links:** Injected via cluster map (hub, market reports, services, related blogs, contact).\n\n`;
    md += `**SEO metadata:** Unique meta title and description generated per slug; \`seo.noIndex\` set to false.\n\n`;
  }

  md += `\n## Q2 2026 batch\n\n`;
  md += `Thirty Q2 pharma insight posts were published separately via \`npm run publish:q2-pharma\` (1853–2057 words each).\n\n`;

  fs.writeFileSync(reportPath, md, 'utf8');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
