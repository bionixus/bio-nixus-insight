#!/usr/bin/env node
/**
 * Remove duplicate blogPost documents in Sanity (same slug.current).
 * Keeps the copy with the longest bodyHtml; ties go to earliest _createdAt.
 *
 * Run: node scripts/remove-duplicate-blog-posts.mjs --dry-run
 *      node scripts/remove-duplicate-blog-posts.mjs --apply
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

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
  process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

const apply = process.argv.includes('--apply');

function pickKeeper(docs) {
  const published = docs.filter((d) => !d._id.startsWith('drafts.'));
  const pool = published.length ? published : docs;
  return [...pool].sort((a, b) => {
    if (b.bodyLen !== a.bodyLen) return b.bodyLen - a.bodyLen;
    return a._createdAt.localeCompare(b._createdAt);
  })[0];
}

async function main() {
  if (!projectId || !token) {
    console.error('Missing SANITY credentials in .env');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const posts = await client.fetch(`*[_type == "blogPost"] {
    _id,
    title,
    "slug": slug.current,
    _createdAt,
    _updatedAt,
    "bodyLen": length(string::split(coalesce(bodyHtml, ""), ""))
  }`);

  const bySlug = new Map();
  for (const post of posts) {
    const slug = post.slug || '(no-slug)';
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push(post);
  }

  const toDelete = [];
  for (const [slug, docs] of bySlug.entries()) {
    if (docs.length <= 1) continue;
    const keeper = pickKeeper(docs);
    for (const doc of docs) {
      if (doc._id !== keeper._id) toDelete.push({ slug, ...doc, keeperId: keeper._id });
    }
  }

  if (!toDelete.length) {
    console.log('No duplicate blogPost slugs found.');
    return;
  }

  console.log(`${toDelete.length} duplicate document(s) to remove:\n`);
  for (const row of toDelete) {
    console.log(`  DELETE ${row._id}`);
    console.log(`    slug: ${row.slug}`);
    console.log(`    keep: ${row.keeperId} (bodyLen ${bySlug.get(row.slug).find((d) => d._id === row.keeperId)?.bodyLen})`);
    console.log(`    drop bodyLen: ${row.bodyLen}\n`);
  }

  if (!apply) {
    console.log('Dry run only. Re-run with --apply to delete.');
    return;
  }

  for (const row of toDelete) {
    await client.delete(row._id);
    console.log(`Deleted ${row._id} (${row.slug})`);
  }

  const remaining = await client.fetch(`count(*[_type == "blogPost"])`);
  console.log(`\nDone. ${toDelete.length} removed. ${remaining} blogPost documents remain.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
