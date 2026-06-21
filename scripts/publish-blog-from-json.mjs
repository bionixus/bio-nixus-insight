#!/usr/bin/env node
/**
 * Publish a blog post from scripts/data/{slug}.json
 * Usage: node scripts/publish-blog-from-json.mjs --slug <slug> [--sync-existing]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';

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
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    syncExisting: args.includes('--sync-existing'),
    dryRun: args.includes('--dry-run'),
  };
}

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildBodyHtml(title, raw) {
  const hasH1 = /<h1\b/i.test(raw);
  const html = !hasH1 ? `<h1>${escapeHtml(title)}</h1>\n${raw}` : raw;
  return html.replace(/<details>([\s\S]*?)<\/details>/g, (match) => {
    const summaryMatch = match.match(/<summary>([\s\S]*?)<\/summary>/i);
    const summary = summaryMatch ? summaryMatch[1] : 'Details';
    return `<details>\n<summary>${summary}</summary>\n${match
      .replace(/<summary>[\s\S]*?<\/summary>/i, '')
      .replace(/<\/?details>/gi, '')
      .trim()}\n</details>`;
  });
}

function coverPaths(slug) {
  const candidates = [
    path.join(root, 'public/images/blog/q2-2026-pharma', `${slug}-cover.jpg`),
    path.join(root, 'public/images/blog', `${slug}-cover.jpg`),
  ];
  return candidates.find((p) => fs.existsSync(p)) || candidates[0];
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

function buildDoc(articleData, slug, mainImage, authorId, categoryRef) {
  const TITLE = articleData.title || articleData.seo.metaTitle;
  const { tableOfContents = [], faq = [] } = articleData;

  return {
    _type: 'blogPost',
    seo: articleData.seo,
    openGraph: {
      ogTitle: articleData.seo.metaTitle,
      ogDescription: articleData.seo.metaDescription,
      ogImage: mainImage,
    },
    title: TITLE.slice(0, 200),
    slug: { _type: 'slug', current: slug },
    excerpt: articleData.excerpt?.slice?.(0, 200) || TITLE.slice(0, 200),
    publishedAt: articleData.publishedAt || new Date().toISOString(),
    updatedAt: articleData.updatedAt || articleData.publishedAt || new Date().toISOString(),
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${slug}` }] : [],
    category: articleData.category || 'Market Access',
    country: articleData.country || 'Global',
    language: articleData.language || 'en',
    readingTime: articleData.readingTime || 18,
    tags: articleData.tags || [],
    executiveSummary: articleData.executiveSummary || [],
    tableOfContents: withKeys(tableOfContents.map((item) => ({ heading: item.heading, anchor: item.anchor }))),
    bodyHtml: buildBodyHtml(TITLE, articleData.bodyHtml || ''),
    body: [],
    faq: withKeys(faq.map((item) => ({ question: item.question, answer: item.answer }))),
    ctaSection: articleData.ctaSection || {
      title: 'Request a commercial briefing',
      description: 'BioNixus supports healthcare market research, HEOR, and market access programs globally.',
      buttonText: 'Contact BioNixus',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  };
}

export async function publishBlogFromJson(slug, { syncExisting = false, dryRun = false } = {}) {
  const bodyPath = path.join(__dirname, 'data', `${slug}.json`);
  if (!fs.existsSync(bodyPath)) {
    throw new Error(`Article data file missing: ${bodyPath}`);
  }

  const articleData = JSON.parse(fs.readFileSync(bodyPath, 'utf8'));
  const coverPath = coverPaths(slug);

  if (dryRun) {
    const words = (articleData.bodyHtml || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    return { slug, dryRun: true, words, coverPath, exists: fs.existsSync(coverPath) };
  }

  if (!projectId || !dataset || !token) {
    throw new Error('Missing SANITY credentials in .env');
  }

  if (!fs.existsSync(coverPath)) {
    throw new Error(`Cover image missing: ${coverPath}`);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug });

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`);
  if (!authorId) throw new Error('No author document found in Sanity.');

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "market-access" || title == "Market Access")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const alt =
    articleData.coverAlt ||
    `${articleData.title || slug} — BioNixus healthcare market research insights 2026`;
  const mainImage = await uploadImage(client, coverPath, `${slug}-cover.jpg`, alt);
  const doc = buildDoc(articleData, slug, mainImage, authorId, categoryRef);

  if (existingId) {
    if (!syncExisting) {
      throw new Error(`blogPost slug "${slug}" already exists (_id=${existingId}). Use --sync-existing to update.`);
    }
    const { _type, ...patch } = doc;
    await client.patch(existingId).set(patch).commit();
    return { slug, action: 'updated', id: existingId, url: `https://www.bionixus.com/blog/${slug}` };
  }

  const created = await client.create(doc);
  return { slug, action: 'created', id: created._id, url: `https://www.bionixus.com/blog/${slug}` };
}

async function main() {
  const { slug, syncExisting, dryRun } = parseArgs();
  if (!slug) {
    console.error('Usage: node scripts/publish-blog-from-json.mjs --slug <slug> [--sync-existing] [--dry-run]');
    process.exit(1);
  }

  try {
    const result = await publishBlogFromJson(slug, { syncExisting, dryRun });
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e.message || e);
    process.exit(1);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main();
}
