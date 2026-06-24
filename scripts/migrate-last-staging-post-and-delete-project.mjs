#!/usr/bin/env node
/**
 * 1) Migrate last staging-only post → production (h2whvvpo)
 * 2) DELETE Sanity staging project mlqhgwfk
 *
 *   node scripts/migrate-last-staging-post-and-delete-project.mjs           # dry-run
 *   node scripts/migrate-last-staging-post-and-delete-project.mjs --execute
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

function loadEnv() {
  const envPath = join(dirname(fileURLToPath(import.meta.url)), '../.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
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

loadEnv();

const execute = process.argv.includes('--execute');
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN;
const STAGING_PROJECT = 'mlqhgwfk';
const PROD_PROJECT = 'h2whvvpo';
const DATASET = 'production';
const SLUG = 'quantitative-market-research-and-market-access-impact';
const AUTHOR_REF = '11ed7ad8-6b57-4358-ac18-a9f32105dab6';
const BACKUP_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../01_BioNixus/BioNixus New Documents/blog-staging-final-backup-2026-06-22.json',
);

function wordCount(html) {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

function extractBodyHtml(raw) {
  if (!raw?.trim()) return '';
  const s = raw.trim();
  if (s.startsWith('<!DOCTYPE') || s.startsWith('<html')) {
    const bodyMatch = s.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) return bodyMatch[1].trim();
  }
  return s;
}

async function fetchStagingPost() {
  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == $slug][0]`,
  );
  const url = `https://${STAGING_PROJECT}.api.sanity.io/v2024-01-01/data/query/${DATASET}?query=${query}&$slug="${SLUG}"`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Staging fetch failed: ${res.status}`);
  const { result } = await res.json();
  return result;
}

async function fetchAllStagingPosts() {
  const query = encodeURIComponent('*[_type == "post"]');
  const url = `https://${STAGING_PROJECT}.api.sanity.io/v2024-01-01/data/query/${DATASET}?query=${query}`;
  const res = await fetch(url);
  const { result } = await res.json();
  return result || [];
}

async function stagingImageToProd(client, ref, alt) {
  if (!ref?.startsWith('image-')) return null;
  const path = ref.replace(/^image-/, '').replace(/-(jpg|jpeg|png|webp)$/i, '.$1');
  const url = `https://cdn.sanity.io/images/${STAGING_PROJECT}/${DATASET}/${path}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buffer, {
    filename: `${SLUG}-cover.jpg`,
    contentType: 'image/jpeg',
  });
  return {
    _type: 'image',
    alt: alt || 'Quantitative market research and market access impact',
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function migrateLastPost(client) {
  const exists = await client.fetch(
    `count(*[_type == "blogPost" && slug.current == $slug])`,
    { slug: SLUG },
  );
  if (exists) {
    console.log(`SKIP migrate: ${SLUG} already in production`);
    return { skipped: true };
  }

  const post = await fetchStagingPost();
  if (!post) {
    console.log(`SKIP migrate: ${SLUG} not found in staging`);
    return { skipped: true, reason: 'not found' };
  }

  const bodySource =
    (typeof post.bodyHtml === 'string' && post.bodyHtml.trim()) ||
    (typeof post.excerpt === 'string' && post.excerpt.trim()) ||
    '';
  const bodyHtml = extractBodyHtml(bodySource);
  const words = wordCount(bodyHtml);
  const readingTime = Math.max(8, Math.round(words / 220));

  let mainImage = null;
  const ref = post.mainImage?.asset?._ref;
  if (ref && execute) {
    mainImage = await stagingImageToProd(client, ref, post.mainImage?.alt);
  } else if (post.mainImage) {
    mainImage = { note: 'would upload from staging', ref };
  }

  const doc = {
    _id: `migrated-${SLUG.slice(0, 40)}`,
    _type: 'blogPost',
    title: post.title || 'Quantitative Market Research and Market Access Impact',
    slug: { _type: 'slug', current: SLUG },
    excerpt:
      'How quantitative market research shapes pharmaceutical market access outcomes — physician surveys, payer evidence, and launch tracking for GCC and global teams.',
    bodyHtml,
    body: [],
    category: post.category || 'Market Access',
    country: post.country || 'Global',
    language: post.language || 'en',
    publishedAt: post.publishedAt || '2026-02-03T00:30:00Z',
    updatedAt: new Date().toISOString(),
    readingTime,
    author: { _type: 'reference', _ref: AUTHOR_REF },
    tags: ['quantitative research', 'market access', 'physician survey', 'pharmaceutical'],
    seo: {
      metaTitle: 'Quantitative Market Research and Market Access Impact | BioNixus',
      metaDescription:
        'How quantitative market research supports pharmaceutical market access — payer evidence, physician surveys, and launch readiness across GCC and global markets.',
      focusKeyword: 'quantitative market research market access',
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    ...(mainImage && !mainImage.note ? { mainImage } : {}),
  };

  console.log(`Migrate ${SLUG}: ${bodyHtml.length} chars, ~${words} words`);
  if (!execute) return { dryRun: true, docId: doc._id };

  await client.createOrReplace(doc);
  console.log(`CREATED production doc: ${doc._id}`);
  return { created: doc._id };
}

async function deleteStagingProject() {
  const res = await fetch(`https://api.sanity.io/v2021-06-07/projects/${STAGING_PROJECT}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  return { status: res.status, ok: res.ok, body };
}

async function main() {
  if (!token) {
    console.error('Missing SANITY_API_TOKEN in .env');
    process.exit(1);
  }

  const prod = createClient({
    projectId: PROD_PROJECT,
    dataset: DATASET,
    token,
    apiVersion: '2024-01-01',
    useCdn: false,
  });

  console.log(execute ? 'MODE: execute' : 'MODE: dry-run\n');

  const allStaging = await fetchAllStagingPosts();
  writeFileSync(
    BACKUP_PATH,
    JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        sourceProject: STAGING_PROJECT,
        postCount: allStaging.length,
        posts: allStaging,
      },
      null,
      2,
    ),
  );
  console.log(`Backup written: ${BACKUP_PATH} (${allStaging.length} posts)`);

  const migrateResult = await migrateLastPost(prod);

  if (!execute) {
    console.log('\nDry-run complete. Pass --execute to migrate + delete mlqhgwfk.');
    console.log('Delete target:', STAGING_PROJECT);
    return;
  }

  const deleteResult = await deleteStagingProject();
  console.log('\nDelete project response:', deleteResult.status, deleteResult.body);

  if (!deleteResult.ok) {
    console.error('\nAPI delete failed. Delete manually:');
    console.error(`  https://www.sanity.io/manage/project/${STAGING_PROJECT}/settings`);
    process.exit(1);
  }

  // Verify project gone
  const verify = await fetch(
    `https://${STAGING_PROJECT}.api.sanity.io/v2024-01-01/data/query/${DATASET}?query=` +
      encodeURIComponent('count(*[_type == "post"])'),
  );
  console.log('Staging API after delete:', verify.status, verify.status === 404 ? 'GONE' : 'STILL UP');
  console.log('\nDone. mlqhgwfk deleted. Live site uses h2whvvpo only.');
  console.log('Migrate result:', migrateResult);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
