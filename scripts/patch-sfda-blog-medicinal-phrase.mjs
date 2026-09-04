#!/usr/bin/env node
/**
 * One-shot: insert "medicinal product registration in Saudi Arabia" into the
 * SFDA drug registration guide body (Sanity blogPost).
 *
 * Usage: node scripts/patch-sfda-blog-medicinal-phrase.mjs
 * Requires SANITY_API_TOKEN + VITE_SANITY_PROJECT_ID (+ optional VITE_SANITY_DATASET).
 */
import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
for (const f of ['.env.vercel', '.env.local', '.env']) {
  const p = join(root, f);
  if (!existsSync(p)) continue;
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!m || process.env[m[1]]) continue;
    process.env[m[1]] = m[2].replace(/^"|"$/g, '').replace(/^'|'$/g, '');
  }
}

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN || process.env.SANITY_WRITE_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';
const SLUG = 'sfda-drug-registration-guide';
const PHRASE = 'medicinal product registration in Saudi Arabia';

if (!projectId || !token) {
  console.error('Missing SANITY projectId or token');
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

const post = await client.fetch(
  `*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, excerpt, seoMetaDescription, body, executiveSummary
  }`,
  { slug: SLUG },
);

if (!post?._id) {
  console.error(`No Sanity blogPost for slug ${SLUG}`);
  process.exit(1);
}

const blob = JSON.stringify(post);
if (blob.toLowerCase().includes(PHRASE.toLowerCase())) {
  console.log(`Already contains phrase — nothing to patch (${post._id})`);
  process.exit(0);
}

const paragraph = {
  _type: 'block',
  _key: `medicinal-${Date.now().toString(36)}`,
  style: 'normal',
  markDefs: [],
  children: [
    {
      _type: 'span',
      _key: `s-${Date.now().toString(36)}`,
      text: 'Pharmaceutical and medicinal product registration in Saudi Arabia is administered exclusively by the Saudi Food & Drug Authority (SFDA). This guide covers the SFDA drug registration pathway — eCTD dossier, GMP inspection, fees, and 2026 timelines — for both innovative and generic medicinal products.',
      marks: [],
    },
  ],
};

const body = Array.isArray(post.body) ? [...post.body] : [];
// Insert after the first block when present so the phrase appears high in the article.
const insertAt = body.length > 0 ? 1 : 0;
body.splice(insertAt, 0, paragraph);

const patch = client.patch(post._id).set({ body });

// Also strengthen SEO fields when they lack the phrase.
const excerpt = typeof post.excerpt === 'string' ? post.excerpt : '';
const seo = typeof post.seoMetaDescription === 'string' ? post.seoMetaDescription : '';
if (excerpt && !excerpt.toLowerCase().includes('medicinal')) {
  patch.set({
    excerpt:
      'Pharmaceutical and medicinal product registration in Saudi Arabia — SFDA drug registration steps, eCTD dossier, fees and 2026 timelines.',
  });
}
if (seo && !seo.toLowerCase().includes('medicinal')) {
  patch.set({
    seoMetaDescription:
      'Pharmaceutical and medicinal product registration in Saudi Arabia: SFDA drug registration steps, eCTD dossier, fees, timelines.',
  });
}

await patch.commit();
console.log(`Patched ${post._id} — inserted medicinal product registration paragraph at body[${insertAt}]`);
