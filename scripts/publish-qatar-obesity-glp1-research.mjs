/**
 * Creates or syncs the Sanity blogPost for /blog/qatar-obesity-glp1-market-research.
 * Fills every healthcare-silo blogPost field. Author is Sarah Chen
 * (Sanity id 498ba300-bfab-4a76-b256-b2139d4d66fe), Global Research Manager.
 *
 * Cover requirement: the Playwright-rendered BioNixus JPEGs at
 * public/images/blog/qatar-obesity-glp1-market-research-{cover,hero}.jpg.
 *
 *   node scripts/publish-qatar-obesity-glp1-research.mjs --dry-run
 *   node scripts/publish-qatar-obesity-glp1-research.mjs
 *   node scripts/publish-qatar-obesity-glp1-research.mjs --sync-existing
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * and the cover JPEGs at:
 *   public/images/blog/qatar-obesity-glp1-market-research-cover.jpg
 *   public/images/blog/qatar-obesity-glp1-market-research-hero.jpg
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';
import {
  SARAH_CHEN_SANITY_ID,
  QATAR_OBESITY_SANITY_FIELDS,
} from './generate-qatar-obesity-glp1-sanity-json.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const DATA_PATH = path.join(root, 'scripts/data/qatar-obesity-glp1-market-research.json');
const COVER_PATH = path.join(root, 'public/images/blog/qatar-obesity-glp1-market-research-cover.jpg');
const HERO_PATH = path.join(root, 'public/images/blog/qatar-obesity-glp1-market-research-hero.jpg');

function loadDotEnv() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadDotEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    syncExisting: args.includes('--sync-existing'),
    dryRun: args.includes('--dry-run'),
  };
}

function withKeys(items) {
  return items.map((item, index) => ({
    ...item,
    _key: item._key || `k-${index}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function coverMissing() {
  return !fs.existsSync(COVER_PATH) || !fs.existsSync(HERO_PATH);
}

async function uploadImage(client, filePath, alt, filename, caption) {
  let buf = fs.readFileSync(filePath);
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
  });
  return {
    _type: 'image',
    alt,
    ...(caption ? { caption } : {}),
    asset: { _type: 'reference', _ref: asset._id },
  };
}

function loadPayload() {
  if (!fs.existsSync(DATA_PATH)) {
    throw new Error(
      `Sanity JSON missing: ${DATA_PATH}. Run node scripts/generate-qatar-obesity-glp1-sanity-json.mjs`,
    );
  }
  const payload = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  for (const field of QATAR_OBESITY_SANITY_FIELDS) {
    if (payload[field] == null) {
      throw new Error(`Sanity payload missing field: ${field}`);
    }
  }
  return payload;
}

async function resolveRelatedPosts(client, slugs) {
  const refs = [];
  for (const slug of slugs) {
    const id = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug });
    if (id) refs.push({ _type: 'reference', _ref: id });
  }
  return withKeys(refs);
}

async function resolveSarahChen(client) {
  const fetched = await client.fetch(
    `*[_type == "author" && (name == "Sarah Chen" || _id == $id)][0]._id`,
    { id: SARAH_CHEN_SANITY_ID },
  );
  return fetched || SARAH_CHEN_SANITY_ID;
}

async function buildDoc(client, payload, mainImage, ogImage, authorId) {
  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "healthcare-market-research" || title == "Healthcare Market Research" || title == "Market Access")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedPosts = await resolveRelatedPosts(client, payload.relatedPostSlugs);

  return {
    _type: 'blogPost',
    seo: payload.seo,
    openGraph: {
      ogTitle: payload.openGraph.ogTitle,
      ogDescription: payload.openGraph.ogDescription,
      ogImage,
    },
    title: payload.title.slice(0, 200),
    slug: payload.slug,
    excerpt: payload.excerpt,
    publishedAt: payload.publishedAt,
    updatedAt: payload.updatedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-qatar-obesity-glp1' }] : [],
    category: payload.category,
    contentSilo: payload.contentSilo,
    tags: payload.tags,
    country: payload.country,
    language: payload.language,
    readingTime: payload.readingTime,
    executiveSummary: withKeys(payload.executiveSummary),
    tableOfContents: withKeys(payload.tableOfContents),
    bodyHtml: payload.bodyHtml,
    body: withKeys(payload.body),
    faq: withKeys(payload.faq),
    relatedPosts,
    ctaSection: payload.ctaSection,
    sources: payload.sources,
    factCheckedAt: payload.factCheckedAt,
  };
}

async function main() {
  const { syncExisting, dryRun } = parseArgs();
  const payload = loadPayload();

  if (dryRun) {
    const pending = coverMissing();
    console.log(
      JSON.stringify(
        {
          slug: payload.slug.current,
          dryRun: true,
          author: payload.author,
          fields: QATAR_OBESITY_SANITY_FIELDS,
          coverMissing: pending,
          coverPath: COVER_PATH,
          heroPath: HERO_PATH,
          sourceCount: payload.sources.length,
          faqCount: payload.faq.length,
        },
        null,
        2,
      ),
    );
    if (pending) {
      console.error('Cover JPEGs missing. Run node scripts/generate-qatar-obesity-glp1-cover.mjs');
    }
    return;
  }

  if (coverMissing()) {
    console.error(`Cover JPEGs missing.
Run: node scripts/generate-qatar-obesity-glp1-cover.mjs
Expected:
  ${path.relative(root, COVER_PATH)}
  ${path.relative(root, HERO_PATH)}`);
    process.exit(2);
  }

  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const slug = payload.slug.current;
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug });
  const authorId = await resolveSarahChen(client);
  const mainImage = await uploadImage(
    client,
    HERO_PATH,
    payload.mainImage.alt,
    'qatar-obesity-glp1-market-research-hero.jpg',
    payload.mainImage.caption,
  );
  const ogImage = await uploadImage(
    client,
    COVER_PATH,
    payload.openGraph.ogImage.alt,
    'qatar-obesity-glp1-market-research-cover.jpg',
  );
  const doc = await buildDoc(client, payload, mainImage, ogImage, authorId);

  if (existingId) {
    if (!syncExisting) {
      console.error(`blogPost slug "${slug}" already exists (_id=${existingId}). Use --sync-existing to update.`);
      process.exit(1);
    }
    const { _type, ...patch } = doc;
    await client.patch(existingId).set(patch).commit();
    console.log(JSON.stringify({ slug, action: 'updated', id: existingId, authorId }, null, 2));
    return;
  }

  const created = await client.create(doc);
  console.log(JSON.stringify({ slug, action: 'created', id: created._id, authorId }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
