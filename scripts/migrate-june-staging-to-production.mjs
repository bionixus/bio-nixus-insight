/**
 * Migrate June 2026 posts from staging Sanity (mlqhgwfk) → production (h2whvvpo).
 * NOTE: mlqhgwfk is deprecated; delete via https://www.sanity.io/manage/project/mlqhgwfk/settings
 *
 *   node scripts/migrate-june-staging-to-production.mjs           # dry-run
 *   node scripts/migrate-june-staging-to-production.mjs --execute # write + publish
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

function loadEnv() {
  const envPath = join(dirname(fileURLToPath(import.meta.url)), '../.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!m || process.env[m[1]]) continue;
    process.env[m[1]] = m[2].replace(/^"|"$/g, '');
  }
}

loadEnv();

const execute = process.argv.includes('--execute');
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN;
const projectId = process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.VITE_SANITY_DATASET || 'production';

if (!token && execute) {
  console.error('Missing SANITY_API_TOKEN in .env');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const STAGING_PROJECT = 'mlqhgwfk';
const AUTHOR_REF = '11ed7ad8-6b57-4358-ac18-a9f32105dab6';
const PAYLOAD_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '../../01_BioNixus/BioNixus New Documents/blog-june-migration-payload.json'
);

const PROD_EQUIV = {
  'real-world-evidence-fda-guide-pharmaceutical-2026': 'fda-real-world-evidence-market-access-usa-2026',
  'european-hta-regulation-2026-pharmaceutical-market-access-guide': 'ema-hta-evidence-requirements-europe-2026',
  'uae-pharmaceutical-market-gcc-entry-guide-2026': 'market-access-research-uae-2026',
  'saudi-arabia-gcc-pharmaceutical-market-guide-2026': 'pharmaceutical-market-entry-saudi-arabia-2026-guide',
  'pesquisa-mercado-farmaceutico-brasil-2026': 'pesquisa-mercado-farmaceutico-brasil-anvisa-2026',
  'saudi-arabia-pharmaceutical-market-research-2026-ar': 'saudi-healthcare-market-research-guide-ar-2026',
};

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed ${res.status}: ${url}`);
  return res.json();
}

async function stagingImageUrl(ref) {
  if (!ref?.startsWith('image-')) return null;
  const path = ref.replace(/^image-/, '').replace(/-(jpg|jpeg|png|webp)$/i, '.$1');
  return `https://cdn.sanity.io/images/${STAGING_PROJECT}/production/${path}`;
}

async function uploadImageFromStaging(ref, alt) {
  const url = await stagingImageUrl(ref);
  if (!url) return null;
  const res = await fetch(url);
  if (!res.ok) return null;
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buffer, {
    filename: `${ref.slice(6, 40)}.jpg`,
    contentType: 'image/jpeg',
  });
  return {
    _type: 'image',
    alt: alt || '',
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function getProdMainImage(slug) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0].mainImage`,
    { slug }
  );
}

async function main() {
  const stagingPosts = (
    await fetchJson(
      `https://${STAGING_PROJECT}.api.sanity.io/v2021-06-07/data/query/production?query=${encodeURIComponent(
        '*[_type == "post" && publishedAt >= "2026-06-01"]'
      )}`
    )
  ).result;

  const payloadDocs = JSON.parse(readFileSync(PAYLOAD_PATH, 'utf8'));
  const payloadBySlug = new Map(
    payloadDocs.map((d) => [d.content.slug.current, d.content])
  );

  console.log(`June staging posts: ${stagingPosts.length}`);
  console.log(`Target: ${projectId}/${dataset}`);
  console.log(execute ? 'MODE: execute' : 'MODE: dry-run\n');

  const results = { created: [], skipped: [], failed: [] };

  for (const post of stagingPosts) {
    const slug = post.slug?.current;
    if (!slug) continue;

    const exists = await client.fetch(
      `count(*[_type == "blogPost" && slug.current == $slug])`,
      { slug }
    );
    if (exists) {
      results.skipped.push(slug);
      console.log(`SKIP (exists): ${slug}`);
      continue;
    }

    const content = payloadBySlug.get(slug);
    if (!content) {
      results.failed.push({ slug, reason: 'missing payload' });
      console.log(`FAIL (no payload): ${slug}`);
      continue;
    }

    let mainImage = content.mainImage || null;
    if (!mainImage && PROD_EQUIV[slug]) {
      mainImage = await getProdMainImage(PROD_EQUIV[slug]);
    }
    if (!mainImage && post.mainImage?.asset?._ref && execute) {
      mainImage = await uploadImageFromStaging(
        post.mainImage.asset._ref,
        content.title?.slice(0, 120) || slug
      );
    }

    const docId = `june26-${slug.slice(0, 48)}`;
    const doc = {
      _id: docId,
      _type: 'blogPost',
      ...content,
      ...(mainImage ? { mainImage } : {}),
      author: { _type: 'reference', _ref: AUTHOR_REF },
      updatedAt: new Date().toISOString(),
    };

    if (!execute) {
      console.log(`DRY-RUN create: ${slug} → ${docId}`);
      results.created.push(slug);
      continue;
    }

    try {
      await client.createOrReplace(doc);
      console.log(`CREATED: ${slug}`);
      results.created.push(slug);
    } catch (err) {
      results.failed.push({ slug, reason: String(err.message || err) });
      console.log(`FAIL: ${slug} — ${err.message || err}`);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Created: ${results.created.length}`);
  console.log(`Skipped: ${results.skipped.length}`);
  console.log(`Failed:  ${results.failed.length}`);
  if (results.created.length) {
    console.log('\nVerify:');
    for (const slug of results.created) {
      console.log(`  https://www.bionixus.com/blog/${slug}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
