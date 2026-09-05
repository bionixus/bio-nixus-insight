#!/usr/bin/env node
/**
 * Retarget Sanity blogPost authors to the geographic roster.
 * Skips URLs with GSC clicks > 0 or position ≤ 20.
 * Never assigns Mohammad Alsaadany on comparison/ranking posts.
 *
 * Run: node scripts/patch-blog-editorial-authors.mjs
 * Dry run: DRY_RUN=1 node scripts/patch-blog-editorial-authors.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const DRY_RUN = process.env.DRY_RUN === '1';

function loadDotEnv() {
  for (const rel of ['.env', 'sanity-content-uploader/.env']) {
    const envPath = path.join(root, rel);
    if (!fs.existsSync(envPath)) continue;
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
}

loadDotEnv();

const WESTERN = [
  { id: '5373a02d-e67d-4415-9739-33ee8f4da7e2', name: 'Laura McConaughey' },
  { id: '498ba300-bfab-4a76-b256-b2139d4d66fe', name: 'Sarah Chen' },
  { id: '6263dcc8-994f-4cd1-9228-7e92332659d3', name: 'Martha DeVito' },
  { id: '7acabff7-aae6-4d8a-a667-91e21a235bcb', name: 'Anna Cuban' },
  { id: '4e924019-dd92-48cf-899b-3bd63c266dd3', name: 'Armela Belba' },
  { id: '5e67519a-1cdc-4b57-a881-29391db4accd', name: 'Ivona Gunjova' },
];

const MENA = [
  { id: 'SIsz67NbFQI3M2UuZVXjTU', name: 'Mohammad Ashour' },
  { id: 'c6ebc107-eb06-42a6-86b9-de8497424677', name: 'Dina Ibrahim' },
];

const ALSAADANY_ID = '11ed7ad8-6b57-4358-ac18-a9f32105dab6';
const WESTERN_IDS = new Set(WESTERN.map((a) => a.id));
const MENA_IDS = new Set(MENA.map((a) => a.id));

function hashSeed(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickStable(items, seed) {
  return items[hashSeed(seed) % items.length];
}

function isComparison(slug) {
  const p = slug.toLowerCase();
  return (
    /top[-/].*market-research-companies/.test(p) ||
    /best[-/].*market-research/.test(p) ||
    /market-research-firms/.test(p) ||
    /iqvia-alternative/.test(p) ||
    /nielsen-alternative/.test(p) ||
    /kantar-health-alternative/.test(p) ||
    /gfk-alternative/.test(p)
  );
}

function regionFromSlug(slug) {
  const p = slug.toLowerCase();
  if (
    /usa|united-states|canada|germany|france|italy|spain|espana|deutschland|italia|francia|europa|netherlands|sweden|ireland|poland|belgium|switzerland|denmark|united-kingdom|(^|-)uk(-|$)|europe|turkey|fda|ema|cms|pbm|amnog|cadth|nice-hta|has-france/.test(
      p,
    )
  ) {
    return 'west';
  }
  if (
    /saudi|ksa|uae|emirates|egypt|kuwait|qatar|bahrain|oman|jordan|lebanon|iraq|morocco|algeria|tunisia|iran|dubai|abu-dhabi|riyadh|gcc|mena|middle-east/.test(
      p,
    )
  ) {
    return 'mena';
  }
  return 'neutral';
}

function targetAuthor(slug) {
  const region = regionFromSlug(slug);
  const comparison = isComparison(slug);
  const seed = `/blog/${slug}`;
  if (region === 'west') return pickStable(WESTERN, seed);
  if (region === 'mena') return pickStable(MENA, seed);
  if (comparison) return pickStable(WESTERN, seed);
  return pickStable(WESTERN, seed);
}

function needsRetarget({ slug, authorId, authorName }) {
  const region = regionFromSlug(slug);
  const comparison = isComparison(slug);
  const name = (authorName || '').toLowerCase();
  const isAlsaadany = authorId === ALSAADANY_ID || name.includes('alsaadany');
  const isHaidy = name.includes('haidy');
  const isLauraWilliams = name.includes('laura williams');
  const isWestern = WESTERN_IDS.has(authorId);
  const isMena = MENA_IDS.has(authorId);

  if (comparison && isAlsaadany) return true;
  if (region === 'west' && (isAlsaadany || isMena || isHaidy || isLauraWilliams || !isWestern)) return true;
  if (region === 'mena' && comparison && (isAlsaadany || isWestern || isHaidy || isLauraWilliams || !isMena)) {
    return true;
  }
  if (region === 'mena' && !comparison && (isWestern || isHaidy || isLauraWilliams)) return true;
  if (region === 'neutral' && comparison && (isAlsaadany || isHaidy || isLauraWilliams)) return true;
  return false;
}

function parseGsc() {
  const csvPath = path.join(root, 'data/gsc/current-week/Pages.csv');
  const bySlug = new Map();
  if (!fs.existsSync(csvPath)) return bySlug;
  const lines = fs.readFileSync(csvPath, 'utf8').split('\n').slice(1);
  for (const line of lines) {
    if (!line.trim()) continue;
    const [url, clicks, , , position] = line.split(',');
    if (!url) continue;
    let pathname = '';
    try {
      pathname = new URL(url).pathname.replace(/\/$/, '');
    } catch {
      continue;
    }
    const m = pathname.match(/\/(?:ar\/|zh\/)?blog\/([^/]+)$/);
    if (!m) continue;
    const slug = m[1];
    const prev = bySlug.get(slug) || { clicks: 0, position: 999 };
    const c = Number(clicks) || 0;
    const p = Number(position) || 999;
    bySlug.set(slug, {
      clicks: prev.clicks + c,
      position: Math.min(prev.position, p),
    });
  }
  return bySlug;
}

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token =
  process.env.SANITY_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  process.env.VITE_SANITY_API_TOKEN ||
  process.env.SANITY_WRITE_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

if (!token) {
  console.error('Missing Sanity write token (SANITY_TOKEN / SANITY_API_TOKEN).');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });
const gsc = parseGsc();

const posts = await client.fetch(
  `*[_type == "blogPost" && defined(slug.current)]{
    _id,
    title,
    "slug": slug.current,
    "authorId": author._ref,
    "authorName": author->name
  }`,
);

const skipped = [];
const patched = [];
const unchanged = [];
const now = new Date().toISOString();

for (const post of posts) {
  const g = gsc.get(post.slug);
  if (g && (g.clicks > 0 || g.position <= 20)) {
    skipped.push({
      slug: post.slug,
      reason: g.clicks > 0 ? `clicks ${g.clicks}` : `pos ${g.position}`,
      author: post.authorName,
    });
    continue;
  }
  if (!needsRetarget(post)) {
    unchanged.push(post.slug);
    continue;
  }
  const next = targetAuthor(post.slug);
  if (next.id === post.authorId) {
    unchanged.push(post.slug);
    continue;
  }
  if (!DRY_RUN) {
    await client
      .patch(post._id)
      .set({
        author: { _type: 'reference', _ref: next.id },
        updatedAt: now,
      })
      .commit();
  }
  patched.push({
    slug: post.slug,
    from: post.authorName || post.authorId,
    to: next.name,
    id: post._id,
  });
}

console.log(DRY_RUN ? 'DRY RUN' : 'APPLIED');
console.log(`patched: ${patched.length}`);
for (const row of patched) {
  console.log(`  ${row.slug}: ${row.from} → ${row.to}`);
}
console.log(`skipped (GSC): ${skipped.length}`);
for (const row of skipped.slice(0, 40)) {
  console.log(`  ${row.slug}: keep ${row.author} (${row.reason})`);
}
if (skipped.length > 40) console.log(`  … +${skipped.length - 40} more`);
console.log(`unchanged: ${unchanged.length}`);
