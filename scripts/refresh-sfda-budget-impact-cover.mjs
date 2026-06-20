#!/usr/bin/env node
/**
 * Upload SFDA budget impact guide cover to Sanity (mainImage + ogImage).
 * Run: node scripts/generate-sfda-budget-impact-cover.mjs
 *      node scripts/refresh-sfda-budget-impact-cover.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'sfda-economic-evaluation-budget-impact-guide-2026';
const COVER_FILENAME = 'sfda-economic-evaluation-budget-impact-guide-2026-cover.jpg';
const ALT =
  'Riyadh skyline at golden hour with holographic budget impact charts and pharmacoeconomic data overlays for SFDA economic evaluation guide';

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
  if (!projectId || !token) {
    console.error('Missing SANITY credentials in .env');
    process.exit(1);
  }

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  if (!fs.existsSync(coverPath)) {
    console.error('Cover missing. Run: node scripts/generate-sfda-budget-impact-cover.mjs');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const postId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });
  if (!postId) {
    console.error(`No blogPost found for slug: ${SLUG}`);
    process.exit(1);
  }

  const mainImage = await uploadImage(client, coverPath, ALT, COVER_FILENAME);
  const ogImage = await uploadImage(
    client,
    coverPath,
    `Open graph: ${ALT}`,
    `og-${COVER_FILENAME}`,
  );

  await client
    .patch(postId)
    .set({
      mainImage,
      'openGraph.ogImage': ogImage,
      updatedAt: new Date().toISOString(),
    })
    .commit();

  console.log('Updated cover for:', `https://www.bionixus.com/blog/${SLUG}`);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${postId}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
