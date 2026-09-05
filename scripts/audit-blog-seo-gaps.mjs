#!/usr/bin/env node
/**
 * Audit Sanity blogPost docs for missing SEO / OG / social / cover fields.
 * Read-only. Usage: node scripts/audit-blog-seo-gaps.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

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
  "hasAuthor": defined(author._ref),
  "seoTitle": seo.metaTitle,
  "seoDesc": seo.metaDescription,
  "seoKw": seo.focusKeyword,
  "ogTitle": openGraph.ogTitle,
  "ogDescription": openGraph.ogDescription,
  "hasMain": defined(mainImage.asset),
  "mainAlt": mainImage.alt,
  "mainExt": mainImage.asset->extension,
  "mainW": mainImage.asset->metadata.dimensions.width,
  "mainH": mainImage.asset->metadata.dimensions.height,
  "hasOg": defined(openGraph.ogImage.asset),
  "ogExt": openGraph.ogImage.asset->extension,
  "ogAlt": openGraph.ogImage.alt,
  "ogW": openGraph.ogImage.asset->metadata.dimensions.width,
  "ogH": openGraph.ogImage.asset->metadata.dimensions.height,
  "hasBody": defined(body)
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

function issuesFor(p) {
  const issues = [];
  const titleLen = (p.seoTitle || '').trim().length;
  if (!p.seoTitle) issues.push('missing-seoTitle');
  else if (titleLen > 60) issues.push(`seoTitle-long:${titleLen}`);
  else if (titleLen < 20) issues.push(`seoTitle-short:${titleLen}`);

  const descLen = (p.seoDesc || '').trim().length;
  if (!p.seoDesc) issues.push('missing-seoDesc');
  else if (descLen > 155) issues.push(`seoDesc-long:${descLen}`);
  else if (descLen < 70) issues.push(`seoDesc-short:${descLen}`);

  if (!p.ogTitle) issues.push('missing-ogTitle');
  if (!p.ogDescription) issues.push('missing-ogDesc');

  if (!p.hasMain) issues.push('missing-mainImage');
  else {
    if (String(p.mainExt || '').toLowerCase() === 'svg') issues.push('mainImage-svg');
    if ((p.mainW || 0) < 600 || (p.mainH || 0) < 315) issues.push(`mainImage-small:${p.mainW}x${p.mainH}`);
    if (!p.mainAlt) issues.push('missing-mainAlt');
  }

  if (!p.hasOg) issues.push('missing-ogImage');
  else {
    if (String(p.ogExt || '').toLowerCase() === 'svg') issues.push('ogImage-svg');
    if ((p.ogW || 0) < 600 || (p.ogH || 0) < 315) issues.push(`ogImage-small:${p.ogW}x${p.ogH}`);
    if (!p.ogAlt) issues.push('missing-ogAlt');
  }

  if (!p.title) issues.push('missing-title');
  if (!p.excerpt) issues.push('missing-excerpt');
  if (!p.hasAuthor) issues.push('missing-author');
  if (!p.publishedAt) issues.push('missing-publishedAt');
  if (!p.category) issues.push('missing-category');
  if (!p.contentSilo) issues.push('missing-contentSilo');
  if (!p.hasBody) issues.push('missing-body');
  return issues;
}

const rows = unique
  .map((p) => ({
    slug: p.slug,
    id: p._id,
    title: p.title,
    issues: issuesFor(p),
    seoTitle: p.seoTitle,
    seoDesc: p.seoDesc,
    publishedAt: p.publishedAt,
  }))
  .filter((r) => r.issues.length);

const counts = {};
for (const r of rows) {
  for (const i of r.issues) {
    const key = i.split(':')[0];
    counts[key] = (counts[key] || 0) + 1;
  }
}

console.log(JSON.stringify({
  totalPosts: unique.length,
  postsWithGaps: rows.length,
  issueCounts: counts,
  slugs: rows.map((r) => ({
    slug: r.slug,
    issues: r.issues,
    seoTitle: r.seoTitle || null,
    seoDesc: r.seoDesc || null,
  })),
}, null, 2));
