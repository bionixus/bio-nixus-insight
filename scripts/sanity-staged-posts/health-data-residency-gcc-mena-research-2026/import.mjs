#!/usr/bin/env node
/**
 * Staged import for /blog/health-data-residency-gcc-mena-research-2026.
 *
 * Default is a dry run. Nothing is uploaded and nothing is written to Sanity.
 * The document id in post.json is a draft id, so importing that file alone
 * does not publish the post.
 *
 * Create the unpublished draft (uploads the two JPEGs, sets no publish date):
 *   node scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026/import.mjs --create-draft
 *
 * Publish later. publishedAt and updatedAt are set to the clock time of this
 * command. They are never taken from the staged file, and an existing
 * publishedAt is kept so a re-run cannot backdate the post:
 *   node scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026/import.mjs --publish
 *
 * If the published document already exists:
 *   node scripts/sanity-staged-posts/health-data-residency-gcc-mena-research-2026/import.mjs --publish --sync-existing
 *
 * Requires SANITY_TOKEN (or SANITY_API_TOKEN / VITE_SANITY_API_TOKEN) with
 * Editor access on project h2whvvpo, dataset production. The script refuses any
 * other project or dataset. It does not create or edit the author document,
 * and it does not deploy Sanity Studio.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  AUTHOR_BYLINE,
  AUTHOR_ID,
  AUTHOR_NAME,
  CATEGORY,
  DRAFT_ID,
  PUBLISHED_ID,
  RELATED_SLUG,
  SLUG,
  buildDocument,
  documentForFile,
  validateStagedDocument,
} from './build-document.mjs';

const pkgDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(pkgDir, '../../..');
const EXPECTED_PROJECT = 'h2whvvpo';
const EXPECTED_DATASET = 'production';

function parseArgs(argv) {
  const unknown = argv.filter((arg) => !['--create-draft', '--publish', '--sync-existing', '--help'].includes(arg));
  if (unknown.length) {
    throw new Error(`Unknown argument: ${unknown.join(' ')}`);
  }
  return {
    help: argv.includes('--help'),
    createDraft: argv.includes('--create-draft'),
    publish: argv.includes('--publish'),
    syncExisting: argv.includes('--sync-existing'),
  };
}

function loadDotEnv() {
  const envPath = path.join(repoRoot, '.env');
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

function readCommittedPayload(payload) {
  const jsonPath = path.join(pkgDir, 'post.json');
  const ndjsonPath = path.join(pkgDir, 'post.ndjson');
  const committed = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const ndjson = JSON.parse(fs.readFileSync(ndjsonPath, 'utf8').trim());
  if (JSON.stringify(committed) !== JSON.stringify(payload)) {
    throw new Error('post.json does not match article.md. Re-run build-document.mjs and commit both files.');
  }
  if (JSON.stringify(ndjson) !== JSON.stringify(payload)) {
    throw new Error('post.ndjson does not match post.json. Re-run build-document.mjs.');
  }
  return payload;
}

function loadPayload() {
  const built = validateStagedDocument(buildDocument());
  return readCommittedPayload(documentForFile(built));
}

function assetFile(image) {
  const spec = image?._sanityAsset || '';
  const prefix = 'image@file://./';
  if (!spec.startsWith(prefix)) throw new Error(`Image is missing a package-local _sanityAsset: ${spec}`);
  const filename = spec.slice(prefix.length);
  if (!filename || filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    throw new Error(`Refusing asset path outside this package: ${filename}`);
  }
  const full = path.join(pkgDir, filename);
  if (!fs.existsSync(full)) throw new Error(`Image file missing: ${full}`);
  return { filename, full };
}

function summary(payload) {
  const command = `node scripts/sanity-staged-posts/${SLUG}/import.mjs`;
  return {
    dryRun: true,
    wroteToSanity: false,
    projectId: EXPECTED_PROJECT,
    dataset: EXPECTED_DATASET,
    id: payload._id,
    type: payload._type,
    slug: payload.slug.current,
    seoTitle: payload.seo.metaTitle,
    seoTitleLength: payload.seo.metaTitle.length,
    metaDescriptionLength: payload.seo.metaDescription.length,
    publishedAt: payload.publishedAt,
    updatedAt: payload.updatedAt,
    factCheckedAt: payload.factCheckedAt,
    authorRef: payload.author._ref,
    authorBylineExpected: AUTHOR_BYLINE,
    bodyBlocks: payload.body.length,
    bodyHtml: payload.bodyHtml === '' ? 'empty (Portable Text is the rendered body)' : 'unexpected',
    sources: payload.sources.length,
    commands: {
      createDraft: `${command} --create-draft`,
      publish: `${command} --publish`,
    },
  };
}

async function makeClient() {
  loadDotEnv();
  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || EXPECTED_PROJECT;
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || EXPECTED_DATASET;
  const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
  if (projectId !== EXPECTED_PROJECT || dataset !== EXPECTED_DATASET) {
    throw new Error(`Refusing to write to ${projectId}/${dataset}. This package only targets ${EXPECTED_PROJECT}/${EXPECTED_DATASET}.`);
  }
  if (!token) throw new Error('Missing SANITY_TOKEN (or SANITY_API_TOKEN / VITE_SANITY_API_TOKEN).');
  const { createClient } = await import('@sanity/client');
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  });
}

async function assertAuthor(client) {
  const author = await client.fetch('*[_id == $id && _type == "author"][0]{name, title}', { id: AUTHOR_ID });
  if (!author) {
    throw new Error(`Author ${AUTHOR_ID} was not found. This script will not create an author.`);
  }
  if (author.name !== AUTHOR_NAME) {
    throw new Error(`Author name is "${author.name}", expected "${AUTHOR_NAME}". This script will not edit the author.`);
  }
  if (author.title !== AUTHOR_BYLINE) {
    throw new Error(
      `Author title is ${JSON.stringify(author.title)}. The byline must stay "${AUTHOR_BYLINE}". This script will not edit the author document.`,
    );
  }
}

async function uploadImages(client, payload) {
  const main = assetFile(payload.mainImage);
  const og = assetFile(payload.openGraph.ogImage);
  const mainAsset = await client.assets.upload('image', fs.readFileSync(main.full), {
    filename: main.filename,
    contentType: 'image/jpeg',
  });
  const ogAsset = await client.assets.upload('image', fs.readFileSync(og.full), {
    filename: og.filename,
    contentType: 'image/jpeg',
  });
  return { mainAssetId: mainAsset._id, ogAssetId: ogAsset._id };
}

function withoutDates(doc) {
  const next = { ...doc };
  delete next.publishedAt;
  delete next.updatedAt;
  delete next.factCheckedAt;
  return next;
}

function withUploadedImages(payload, assets, { id, publishedAt, updatedAt, categoryId, relatedIds }) {
  const next = withoutDates(payload);
  next._id = id;
  next.mainImage = {
    _type: 'image',
    alt: payload.mainImage.alt,
    caption: payload.mainImage.caption,
    asset: { _type: 'reference', _ref: assets.mainAssetId },
  };
  next.openGraph = {
    ...payload.openGraph,
    ogImage: {
      _type: 'image',
      alt: payload.openGraph.ogImage.alt,
      asset: { _type: 'reference', _ref: assets.ogAssetId },
    },
  };
  next.categories = categoryId
    ? [{ _key: 'cat01', _type: 'reference', _ref: categoryId }]
    : [];
  next.relatedPosts = relatedIds.map((ref, index) => ({
    _key: `rel${String(index + 1).padStart(2, '0')}`,
    _type: 'reference',
    _ref: ref,
  }));
  if (publishedAt) next.publishedAt = publishedAt;
  if (updatedAt) next.updatedAt = updatedAt;
  return next;
}

async function resolveCategory(client) {
  const categoryId = await client.fetch('*[_type == "category" && title == $title][0]._id', { title: CATEGORY });
  if (!categoryId) {
    console.warn(`No Sanity category titled "${CATEGORY}". The string category field will still be set. No category document will be created.`);
  }
  return categoryId || null;
}

async function resolveRelated(client) {
  const relatedId = await client.fetch(
    '*[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0]._id',
    { slug: RELATED_SLUG },
  );
  if (!relatedId) {
    console.warn(`Related post ${RELATED_SLUG} was not found. The in-body link is still in the document. No related post will be created.`);
    return [];
  }
  return [relatedId];
}

async function publishedDoc(client) {
  return client.fetch(
    '*[_type == "blogPost" && slug.current == $slug && !(_id in path("drafts.**"))][0]{_id, publishedAt}',
    { slug: SLUG },
  );
}

async function createDraft(client, payload) {
  const existing = await publishedDoc(client);
  if (existing) {
    throw new Error(
      `A published blogPost already exists (_id=${existing._id}). Refusing to create a draft over it. Use --publish --sync-existing to update the live document.`,
    );
  }
  await assertAuthor(client);
  const assets = await uploadImages(client, payload);
  const categoryId = await resolveCategory(client);
  const relatedIds = await resolveRelated(client);
  const draft = withUploadedImages(payload, assets, {
    id: DRAFT_ID,
    categoryId,
    relatedIds,
  });
  if (draft.publishedAt || draft.updatedAt || draft.factCheckedAt) {
    throw new Error('Draft payload still carries a publish date.');
  }
  await client.createOrReplace(draft);
  await client.patch(DRAFT_ID).unset(['publishedAt', 'updatedAt', 'factCheckedAt']).commit();
  return {
    wroteToSanity: true,
    action: 'create-draft',
    id: DRAFT_ID,
    published: false,
    publishedAt: null,
    updatedAt: null,
  };
}

async function publish(client, payload, { syncExisting }) {
  const existing = await publishedDoc(client);
  if (existing && existing._id !== PUBLISHED_ID) {
    throw new Error(`Slug ${SLUG} is already used by ${existing._id}. Refusing to publish over a different document.`);
  }
  if (existing && !syncExisting) {
    throw new Error(`blogPost ${PUBLISHED_ID} already exists. Re-run with --publish --sync-existing. The existing publishedAt will be kept.`);
  }
  await assertAuthor(client);
  const assets = await uploadImages(client, payload);
  const categoryId = await resolveCategory(client);
  const relatedIds = await resolveRelated(client);
  const now = new Date().toISOString();
  let publishedAt = now;
  if (existing?.publishedAt) {
    const existingTime = Date.parse(existing.publishedAt);
    if (Number.isNaN(existingTime)) throw new Error('Existing publishedAt is not a valid datetime.');
    publishedAt = existing.publishedAt;
  }
  const doc = withUploadedImages(payload, assets, {
    id: PUBLISHED_ID,
    publishedAt,
    updatedAt: now,
    categoryId,
    relatedIds,
  });
  const tx = client.transaction().createOrReplace(doc);
  const draft = await client.getDocument(DRAFT_ID);
  if (draft) tx.delete(DRAFT_ID);
  await tx.commit();
  return {
    wroteToSanity: true,
    action: 'publish',
    id: PUBLISHED_ID,
    published: true,
    publishedAt,
    updatedAt: now,
    keptExistingPublishedAt: Boolean(existing?.publishedAt),
    url: `https://www.bionixus.com/blog/${SLUG}`,
  };
}

async function main() {
  const flags = parseArgs(process.argv.slice(2));
  if (flags.help) {
    console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('*/')[0]);
    return;
  }
  if (flags.syncExisting && !flags.publish) {
    throw new Error('--sync-existing is only valid together with --publish.');
  }
  if (flags.createDraft && flags.publish) {
    throw new Error('Choose one of --create-draft or --publish.');
  }
  const payload = loadPayload();
  if (!flags.createDraft && !flags.publish) {
    console.log(JSON.stringify(summary(payload), null, 2));
    return;
  }
  const client = await makeClient();
  const result = flags.publish
    ? await publish(client, payload, { syncExisting: flags.syncExisting })
    : await createDraft(client, payload);
  console.log(JSON.stringify(result, null, 2));
}

function isDirectRun() {
  return process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
}

if (isDirectRun()) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
