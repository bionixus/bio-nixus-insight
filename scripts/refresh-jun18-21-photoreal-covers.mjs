#!/usr/bin/env node
/**
 * Upload Jun 18–21 photoreal covers to Sanity (mainImage + ogImage).
 *
 * Run: node scripts/refresh-jun18-21-photoreal-covers.mjs --all
 *      node scripts/refresh-jun18-21-photoreal-covers.mjs --slug ema-hta-evidence-requirements-europe-2026
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';
import { getCoverSpecs } from './data/jun18-21-photoreal-cover-prompts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const COVER_DIR = path.join(root, 'public/images/blog/jun18-21-market-access');

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

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    all: args.includes('--all'),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    skip: new Set(
      (args.includes('--skip')
        ? args[args.indexOf('--skip') + 1]?.split(',').map((s) => s.trim()).filter(Boolean)
        : []) ?? [],
    ),
  };
}

async function uploadImage(client, filePath, alt, filename) {
  let buf = fs.readFileSync(filePath);
  buf = await sharp(buf)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 92, progressive: true, mozjpeg: true })
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

async function main() {
  const { all, slug, skip } = parseArgs();
  if (!all && !slug) {
    console.error('Usage: --all | --slug <slug> [--skip slug1,slug2]');
    process.exit(1);
  }
  if (!projectId || !token) {
    console.error('Missing SANITY credentials in .env');
    process.exit(1);
  }

  let specs = getCoverSpecs(slug);
  if (skip.size) specs = specs.filter((s) => !skip.has(s.slug));

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  let updated = 0;
  let missing = 0;
  let notFound = 0;

  for (const spec of specs) {
    const coverPath = path.join(COVER_DIR, `${spec.slug}-cover.jpg`);
    if (!fs.existsSync(coverPath)) {
      console.warn(`  missing cover: ${spec.slug} — run generate script first`);
      missing += 1;
      continue;
    }

    const rows = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug]{ _id }`,
      { slug: spec.slug },
    );
    if (!rows.length) {
      console.warn(`  no Sanity post: ${spec.slug}`);
      notFound += 1;
      continue;
    }

    const mainImage = await uploadImage(
      client,
      coverPath,
      spec.alt,
      `${spec.slug}-photoreal-cover.jpg`,
    );
    const ogImage = await uploadImage(
      client,
      coverPath,
      `Open graph: ${spec.alt}`,
      `og-${spec.slug}-photoreal.jpg`,
    );

    for (const row of rows) {
      await client
        .patch(row._id)
        .set({
          mainImage,
          'openGraph.ogImage': ogImage,
          updatedAt: new Date().toISOString(),
        })
        .commit();
    }

    console.log(`  ✓ ${spec.slug} (${rows.length} doc${rows.length > 1 ? 's' : ''})`);
    updated += 1;
  }

  console.log(`\nDone: ${updated} slugs updated, ${missing} missing files, ${notFound} not in Sanity`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
