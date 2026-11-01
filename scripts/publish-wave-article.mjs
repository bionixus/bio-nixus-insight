/**
 * Creates or syncs the Sanity blogPost for one article-waves post from
 * scripts/data/<slug>.json (written by scripts/generate-wave-article-sanity-json.mjs).
 * The author is the WESTERN_AUTHORS reference stored in the JSON.
 *
 * Cover requirement: the Playwright-rendered BioNixus JPEGs at
 * public/images/blog/<slug>-{cover,hero}.jpg (scripts/generate-wave-article-covers.mjs).
 *
 *   node scripts/publish-wave-article.mjs <slug> --dry-run
 *   node scripts/publish-wave-article.mjs <slug>
 *   node scripts/publish-wave-article.mjs <slug> --sync-existing
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';
import { WAVE_ARTICLE_SANITY_FIELDS, waveArticleJsonPath } from './generate-wave-article-sanity-json.mjs';
import { WAVE_ARTICLE_SLUGS } from './lib/wave-article-slugs.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

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
  const slug = args.find((arg) => !arg.startsWith('--'));
  if (!slug || !WAVE_ARTICLE_SLUGS.includes(slug)) {
    console.error(`Usage: node scripts/publish-wave-article.mjs <slug> [--dry-run] [--sync-existing]
Known slugs:\n  ${WAVE_ARTICLE_SLUGS.join('\n  ')}`);
    process.exit(1);
  }
  return {
    slug,
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

function imagePaths(slug) {
  return {
    cover: path.join(root, `public/images/blog/${slug}-cover.jpg`),
    hero: path.join(root, `public/images/blog/${slug}-hero.jpg`),
  };
}

async function uploadImage(client, filePath, alt, filename, caption) {
  const buf = await sharp(fs.readFileSync(filePath))
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, { contentType: 'image/jpeg', filename });
  return {
    _type: 'image',
    alt,
    ...(caption ? { caption } : {}),
    asset: { _type: 'reference', _ref: asset._id },
  };
}

function loadPayload(slug) {
  const dataPath = waveArticleJsonPath(slug);
  if (!fs.existsSync(dataPath)) {
    throw new Error(`Sanity JSON missing: ${dataPath}. Run node scripts/generate-wave-article-sanity-json.mjs ${slug}`);
  }
  const payload = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  for (const field of WAVE_ARTICLE_SANITY_FIELDS) {
    if (payload[field] == null) throw new Error(`Sanity payload missing field: ${field}`);
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

async function resolveAuthor(client, author) {
  const id = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: author._ref });
  if (!id) throw new Error(`Author ${author.name} (${author._ref}) not found in Sanity`);
  return id;
}

async function buildDoc(client, payload, mainImage, ogImage, authorId) {
  const categoryRef =
    (await client.fetch(`*[_type == "category" && title == $title][0]._id`, {
      title: payload.category,
    })) ||
    (await client.fetch(
      `*[_type == "category" && (slug.current == "healthcare-market-research" || title == "Healthcare Market Research")][0]._id`,
    ));

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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: `cat-${payload.slug.current}` }] : [],
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
    relatedPosts: await resolveRelatedPosts(client, payload.relatedPostSlugs),
    ctaSection: payload.ctaSection,
    sources: payload.sources,
    factCheckedAt: payload.factCheckedAt,
  };
}

async function main() {
  const { slug, syncExisting, dryRun } = parseArgs();
  const payload = loadPayload(slug);
  const images = imagePaths(slug);
  const coverMissing = !fs.existsSync(images.cover) || !fs.existsSync(images.hero);

  if (dryRun) {
    console.log(
      JSON.stringify(
        {
          slug,
          dryRun: true,
          author: payload.author,
          coverMissing,
          sourceCount: payload.sources.length,
          faqCount: payload.faq.length,
        },
        null,
        2,
      ),
    );
    if (coverMissing) console.error(`Cover JPEGs missing. Run node scripts/generate-wave-article-covers.mjs ${slug}`);
    return;
  }

  if (coverMissing) {
    console.error(`Cover JPEGs missing. Run node scripts/generate-wave-article-covers.mjs ${slug}
Expected:
  ${path.relative(root, images.cover)}
  ${path.relative(root, images.hero)}`);
    process.exit(2);
  }

  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug });
  if (existingId && !syncExisting) {
    console.error(`blogPost slug "${slug}" already exists (_id=${existingId}). Use --sync-existing to update.`);
    process.exit(1);
  }

  const authorId = await resolveAuthor(client, payload.author);
  const mainImage = await uploadImage(client, images.hero, payload.mainImage.alt, `${slug}-hero.jpg`, payload.mainImage.caption);
  const ogImage = await uploadImage(client, images.cover, payload.openGraph.ogImage.alt, `${slug}-cover.jpg`);
  const doc = await buildDoc(client, payload, mainImage, ogImage, authorId);

  if (existingId) {
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
