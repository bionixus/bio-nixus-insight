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
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!process.env[k]) process.env[k] = v;
  }
}
loadDotEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';
const postId = 'gM8kwwPNgT6y8COBsUt6u6';
const coverPath = path.join(root, 'public/images/blog/q2-2026-pharma', 'sfda-economic-evaluation-budget-impact-guide-2026-cover.jpg');
const alt = 'SFDA budget impact model planning for Saudi pharmaceutical market access 2026';

if (!projectId || !dataset || !token) {
  console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_API_TOKEN/.env.');
  process.exit(2);
}
if (!fs.existsSync(coverPath)) {
  console.error('Cover image missing:', coverPath);
  process.exit(2);
}

const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

async function main() {
  const before = await client.fetch('*[_id == $id][0]{_id,slug,mainImage}', { id: postId });
  if (!before) {
    console.error('Post not found:', postId);
    process.exit(2);
  }
  console.log('Existing doc:', JSON.stringify(before, null, 2));

  let buf = fs.readFileSync(coverPath);
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename: 'sfda-economic-evaluation-budget-impact-guide-2026-cover.jpg',
  });
  console.log('Uploaded asset:', asset._id);

  const updated = await client
    .patch(postId)
    .set({
      mainImage: {
        _type: 'image',
        alt,
        asset: { _type: 'reference', _ref: asset._id },
      },
    })
    .commit();
  console.log('Updated post:', updated._id);
  console.log('Sanity ref:', asset._id);
  console.log('Asset/:', asset.url || `https://cdn.sanity.io/images/${projectId}/${dataset}/${asset._id.replace('image-', '')}.jpg`);
}

main().catch((e) => { console.error(e); process.exit(1); });
