#!/usr/bin/env node
/**
 * Publish Q2 2026 pharma insight blog posts to Sanity (30 articles).
 * Run: node scripts/publish-q2-2026-pharma-batch.mjs --all
 *      node scripts/publish-q2-2026-pharma-batch.mjs --slug foundayo-orforglipron-fda-approval-2026
 *      node scripts/publish-q2-2026-pharma-batch.mjs --dry-run --all
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';
import { Q2_2026_TOPICS } from './data/q2-2026-pharma-insights-topics.mjs';
import {
  buildQ2ArticleHtml,
  buildArticleMeta,
  buildToc,
  buildFaq,
  inferCategory,
  countWords,
  countInternalLinks,
} from './lib/q2-2026-article-html.mjs';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';
import { inferArticleSection } from './lib/q2-schema-mentions.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

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
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    from: args.includes('--from') ? Number(args[args.indexOf('--from') + 1]) : null,
    to: args.includes('--to') ? Number(args[args.indexOf('--to') + 1]) : null,
  };
}

async function uploadImage(client, filePath, filename, alt) {
  let buf = fs.readFileSync(filePath);
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
  });
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  };
}

function buildDoc(topic, bodyHtml, meta, mainImage, ogImage, authorId, categoryRef) {
  const publishedAt = new Date(topic.actionDate).toISOString();
  const category = inferArticleSection(topic) || inferCategory(topic.therapeuticArea);
  const readingTime = Math.max(12, Math.min(22, Math.round(bodyHtml.length / 900)));

  return {
    _type: 'blogPost',
    seo: {
      metaTitle: meta.metaTitle,
      metaDescription: meta.metaDescription,
      focusKeyword: `${topic.brand} ${topic.actionType} 2026`.toLowerCase(),
      keywords: [
        topic.brand,
        topic.generic,
        topic.sponsor,
        topic.therapeuticArea.split('/')[0].trim(),
        'GCC market access',
        'SFDA registration',
        'NUPCO tender',
        'pharmaceutical commercial strategy',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${topic.slug}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: meta.ogTitle,
      ogDescription: meta.ogDescription,
      ogImage,
    },
    title: meta.h1.slice(0, 200),
    slug: { _type: 'slug', current: topic.slug },
    excerpt: topic.headline.slice(0, 200),
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef
      ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${topic.id}` }]
      : [],
    category,
    country: 'Global / GCC',
    language: 'en',
    readingTime,
    tags: [
      topic.brand,
      topic.sponsor,
      'Q2 2026',
      'FDA EMA',
      'Market Access',
      'GCC',
      ...topic.therapeuticArea.split('/').map((s) => s.trim()).filter(Boolean),
    ].slice(0, 12),
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: `${topic.sponsor} — ${topic.actionType} (${topic.actionDate}): ${topic.headline} BioNixus summarizes clinical, regulatory, and GCC tender implications for commercial leaders.`,
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys(buildToc()),
    bodyHtml,
    body: [],
    faq: withKeys(buildFaq(topic)),
    ctaSection: {
      title: `Plan your ${topic.brand} GCC launch briefing`,
      description:
        'BioNixus supports SFDA/MOHAP registration, NUPCO tender intelligence, physician panels, and competitive simulations for pharmaceutical and biotech teams.',
      buttonText: 'Request a commercial briefing',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  };
}

async function main() {
  const { all, dryRun, sync, slug, from, to } = parseArgs();

  if (!all && !slug) {
    console.error('Usage: --all | --slug <slug> [--dry-run] [--sync-existing] [--from N] [--to N]');
    process.exit(1);
  }

  let topics = Q2_2026_TOPICS;
  if (slug) topics = topics.filter((t) => t.slug === slug);
  if (from != null) topics = topics.filter((t) => t.id >= from);
  if (to != null) topics = topics.filter((t) => t.id <= to);

  if (!topics.length) {
    console.error('No topics matched filters.');
    process.exit(1);
  }

  if (!dryRun && (!projectId || !token)) {
    console.error('Missing SANITY credentials in .env');
    process.exit(1);
  }

  const client = dryRun
    ? null
    : createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const authorId = dryRun
    ? 'dry-run'
    : await client.fetch(`*[_type == "author" && defined(name)][0]._id`);
  if (!dryRun && !authorId) {
    console.error('No author in Sanity. Create an author first.');
    process.exit(1);
  }

  const coverDir = path.join(root, 'public/images/blog/q2-2026-pharma');
  fs.mkdirSync(coverDir, { recursive: true });

  let created = 0;
  let updated = 0;
  let skipped = 0;
  const auditRows = [];

  for (const topic of topics) {
    const bodyHtml = buildQ2ArticleHtml(topic);
    const meta = buildArticleMeta(topic);
    const coverPath = path.join(coverDir, `${topic.slug}-cover.jpg`);

    await generateBlogCover({
      title: topic.brand,
      subtitle: `${topic.generic} · ${topic.actionType}`,
      sponsor: topic.sponsor,
      therapeuticArea: topic.therapeuticArea,
      actionType: topic.actionType,
      layoutIndex: topic.id,
      slug: topic.slug,
      outPath: coverPath,
    });

    const wordEstimate = countWords(bodyHtml);
    const linkCount = countInternalLinks(bodyHtml);
    const auditOk = wordEstimate >= 1500 && linkCount >= 5;
    auditRows.push({ slug: topic.slug, words: wordEstimate, links: linkCount, ok: auditOk });
    console.log(
      `\n[${topic.id}] ${topic.slug} (~${wordEstimate} words, ${linkCount} internal links${auditOk ? '' : ' ⚠ AUDIT FAIL'})`,
    );
    if (!auditOk) {
      console.warn(`  ⚠ Expected ≥1500 words and ≥5 links; got ${wordEstimate} words, ${linkCount} links`);
    }

    if (dryRun) {
      const outHtml = path.join(root, 'scripts/data/q2-2026-articles', `${topic.slug}.html`);
      fs.mkdirSync(path.dirname(outHtml), { recursive: true });
      fs.writeFileSync(outHtml, bodyHtml, 'utf8');
      console.log(`  dry-run → ${outHtml}`);
      continue;
    }

    const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
      slug: topic.slug,
    });

    if (existingId && !sync) {
      console.log(`  skip (exists): ${existingId}`);
      skipped += 1;
      continue;
    }

    const categoryName = inferCategory(topic.therapeuticArea);
    const categoryRef =
      (await client.fetch(
        `*[_type == "category" && (title == $t || slug.current == $s)][0]._id`,
        { t: categoryName, s: categoryName.toLowerCase().replace(/\s+/g, '-') },
      )) || (await client.fetch(`*[_type == "category"][0]._id`));

    const alt = `${topic.brand} ${topic.actionType} pharmaceutical market access editorial cover image for BioNixus Q2 2026 insights`;
    const mainImage = await uploadImage(client, coverPath, `${topic.slug}-cover.jpg`, alt);
    const ogImage = await uploadImage(client, coverPath, `${topic.slug}-og.jpg`, `Open graph: ${alt}`);

    const doc = buildDoc(topic, bodyHtml, meta, mainImage, ogImage, authorId, categoryRef);

    if (existingId && sync) {
      const { _type, ...patch } = doc;
      await client.patch(existingId).set(patch).commit();
      console.log(`  updated: https://www.bionixus.com/blog/${topic.slug}`);
      updated += 1;
    } else {
      const res = await client.create(doc);
      console.log(`  created: https://www.bionixus.com/blog/${topic.slug} (${res._id})`);
      created += 1;
    }
  }

  const failed = auditRows.filter((r) => !r.ok);
  const wordMin = Math.min(...auditRows.map((r) => r.words));
  const wordMax = Math.max(...auditRows.map((r) => r.words));
  console.log(`\nAudit: ${auditRows.length} articles, words ${wordMin}–${wordMax}, links min ${Math.min(...auditRows.map((r) => r.links))}`);
  if (failed.length) {
    console.warn(`⚠ ${failed.length} article(s) failed audit: ${failed.map((r) => r.slug).join(', ')}`);
    if (dryRun) process.exitCode = 1;
  }
  console.log(`Done. created=${created} updated=${updated} skipped=${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
