#!/usr/bin/env node
/**
 * Clears seo.noIndex on blog posts that must stay indexable (GSC noindex report fix).
 * Run: node scripts/fix-blog-noindex-sanity.mjs
 * Loads repo-root .env (SANITY_TOKEN / SANITY_API_TOKEN + project id).
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

const SLUGS = [
  'healthcare-overview-china-market-2026',
  'pharmacoeconomics-gcc-practical-guide',
  'gcc-pharmacoeconomics',
  'uae-healthcare-market-trends-2025',
  'desmoid-tumors-nirogacestat-pharma-market-access',
  'nf1-koselugo-selumetinib-pharma-market-research',
];

const projectId =
  process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token =
  process.env.SANITY_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  process.env.VITE_SANITY_API_TOKEN ||
  process.env.SANITY_WRITE_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

if (!projectId || !token) {
  console.error(
    'Missing SANITY project id or write token. Set SANITY_TOKEN or SANITY_API_TOKEN in .env',
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

for (const slug of SLUGS) {
  const docs = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug]{ _id, title, "noIndex": seo.noIndex }`,
    { slug },
  );
  if (!docs.length) {
    console.warn(`No document for slug: ${slug}`);
    continue;
  }
  for (const doc of docs) {
    await client.patch(doc._id).set({ 'seo.noIndex': false }).commit();
    console.log(`Patched ${slug} (${doc._id}) noIndex: ${doc.noIndex} → false`);
  }
}

console.log('Done.');
