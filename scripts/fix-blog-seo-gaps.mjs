#!/usr/bin/env node
/**
 * Patch Sanity blogPost docs that are missing required SEO / social / schema fields.
 * Usage: node scripts/fix-blog-seo-gaps.mjs [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');

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
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!process.env[k]) process.env[k] = v;
  }
}

loadDotEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';
if (!projectId || !token) throw new Error('Missing SANITY_PROJECT_ID or SANITY_TOKEN');

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

const TITLE_PATCHES = {
  'sfda-drug-registration-guide': 'SFDA Drug Registration 2026: Process, Timeline, Fees',
  'pharmaceutical-market-research-china-2026': '2026年医药市场研究指南：全球药企亚太证据策略 | BioNixus',
};

const DESC_PATCHES = {
  'top-healthcare-market-research-companies-kuwait':
    'Kuwait healthcare market research buyers guide: MOPH and CMS context, pharma fieldwork, payer insight, and how to compare specialist versus global firms.',
};

const CATEGORY_PATCHES = {
  'hta-dossier-saudi-arabia-market-access': 'Market Access',
  'mdf-wood-manufacturing-market-research-trackers-mea': 'B2B Market Research',
};

async function patchIds(id, set) {
  const ids = new Set([id]);
  if (id.startsWith('drafts.')) ids.add(id.slice('drafts.'.length));
  else ids.add(`drafts.${id}`);
  for (const target of ids) {
    const exists = await client.fetch('*[_id == $id][0]._id', { id: target });
    if (!exists) continue;
    if (dryRun) {
      console.log('dry-run patch', target, JSON.stringify(set));
      continue;
    }
    await client.patch(target).set(set).commit();
    console.log('patched', target, Object.keys(set).join(','));
  }
}

const posts = await client.fetch(`*[_type == "blogPost" && defined(slug.current)]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  language,
  category,
  country,
  contentSilo,
  publishedAt,
  _createdAt,
  "hasAuthor": defined(author._ref),
  "seoTitle": seo.metaTitle,
  "seoDesc": seo.metaDescription,
  "ogTitle": openGraph.ogTitle,
  "ogDescription": openGraph.ogDescription
}`);

const seen = new Set();
const unique = [];
for (const post of posts) {
  const isDraft = String(post._id).startsWith('drafts.');
  if (seen.has(post.slug) && isDraft) continue;
  if (seen.has(post.slug) && !isDraft) {
    const idx = unique.findIndex((p) => p.slug === post.slug);
    unique[idx] = post;
    continue;
  }
  seen.add(post.slug);
  unique.push(post);
}

const defaultAuthor = await client.fetch(`*[_type == "author" && name in $names][0]._id`, {
  names: ['Mohammad Alsaadany', 'Laura McConaughey', 'BioNixus Market Research', 'Mohammad Ashour'],
});
if (!defaultAuthor) console.warn('No author document found — cannot backfill author');

let patched = 0;
for (const post of unique) {
  const set = {};

  if (TITLE_PATCHES[post.slug]) {
    const next = TITLE_PATCHES[post.slug];
    if ((post.seoTitle || '') !== next) {
      set['seo.metaTitle'] = next;
      set['openGraph.ogTitle'] = next;
    }
  }

  if (DESC_PATCHES[post.slug]) {
    const next = DESC_PATCHES[post.slug];
    if ((post.seoDesc || '') !== next) {
      set['seo.metaDescription'] = next;
      if (!post.ogDescription || post.ogDescription === post.seoDesc || (post.ogDescription || '').length > 155) {
        set['openGraph.ogDescription'] = next;
      }
    }
  }

  if (!post.category && CATEGORY_PATCHES[post.slug]) set.category = CATEGORY_PATCHES[post.slug];
  if (!post.publishedAt && post._createdAt) set.publishedAt = post._createdAt;
  if (!post.hasAuthor && defaultAuthor) {
    set.author = { _type: 'reference', _ref: defaultAuthor };
  }

  if (Object.keys(set).length === 0) continue;
  await patchIds(post._id, set);
  patched += 1;
}

console.log(JSON.stringify({ dryRun, patched, total: unique.length }, null, 2));
