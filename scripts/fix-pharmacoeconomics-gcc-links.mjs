#!/usr/bin/env node
/**
 * Replace broken /pharmacoeconomics-gcc hrefs in Sanity blog bodies.
 *
 *   node scripts/fix-pharmacoeconomics-gcc-links.mjs           # dry-run
 *   node scripts/fix-pharmacoeconomics-gcc-links.mjs --execute
 */
import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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
const projectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

const FROM = 'href="/pharmacoeconomics-gcc"';
const TO = 'href="/blog/pharmacoeconomics-gcc-practical-guide"';
const FROM_ABS = 'href="https://www.bionixus.com/pharmacoeconomics-gcc"';
const TO_ABS = 'href="https://www.bionixus.com/blog/pharmacoeconomics-gcc-practical-guide"';

if (!token) {
  console.error('Missing SANITY_API_TOKEN / SANITY_TOKEN');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

const posts = await client.fetch(
  `*[_type == "blogPost" && (bodyHtml match "*pharmacoeconomics-gcc*" || pt::text(body) match "*pharmacoeconomics-gcc*")]{
    _id, title, "slug": slug.current, bodyHtml
  }`,
);

console.log(`Found ${posts.length} candidate post(s)`);

for (const post of posts) {
  const html = typeof post.bodyHtml === 'string' ? post.bodyHtml : '';
  if (!html.includes('/pharmacoeconomics-gcc')) {
    console.log(`- skip ${post.slug} (no bodyHtml match; may be block body only)`);
    continue;
  }
  // Avoid rewriting the correct practical-guide URL
  const next = html
    .replaceAll(FROM_ABS, TO_ABS)
    .replaceAll(FROM, TO)
    .replaceAll('href="/pharmacoeconomics-gcc"', TO); // safety
  // Don't break the correct path if replace was too greedy — reinstate practical guide
  const fixed = next.replaceAll(
    'href="/blog/blog/pharmacoeconomics-gcc-practical-guide"',
    TO,
  );
  if (fixed === html) {
    console.log(`- unchanged ${post.slug}`);
    continue;
  }
  console.log(`${execute ? 'PATCH' : 'DRY'} ${post.slug} (${post._id})`);
  if (execute) {
    await client.patch(post._id).set({ bodyHtml: fixed }).commit();
  }
}

console.log(execute ? 'Done.' : 'Dry-run only. Re-run with --execute to apply.');
