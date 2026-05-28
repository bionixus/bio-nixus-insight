#!/usr/bin/env node
/**
 * Regenerate premium Q2 covers and patch Sanity for complete schema-related fields.
 * Run: node scripts/refresh-q2-blog-covers-and-schema.mjs --all
 *      node scripts/refresh-q2-blog-covers-and-schema.mjs --slug foundayo-orforglipron-fda-approval-2026
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';
import { Q2_2026_TOPICS } from './data/q2-2026-pharma-insights-topics.mjs';
import { buildArticleMeta, buildFaq, buildToc, inferCategory } from './lib/q2-2026-article-html.mjs';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';
import { buildSchemaMentionsForTopic, inferArticleSection } from './lib/q2-schema-mentions.mjs';

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
  process.env.SANITY_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    all: args.includes('--all'),
    slug: args.includes('--slug') ? args[args.indexOf('--slug') + 1] : null,
    skipUpload: args.includes('--covers-only-local'),
  };
}

async function uploadImage(client, filePath, filename, alt) {
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
  const { all, slug, skipUpload } = parseArgs();
  if (!all && !slug) {
    console.error('Usage: --all | --slug <slug>');
    process.exit(1);
  }
  if (!projectId || !token) {
    console.error('Missing SANITY credentials');
    process.exit(1);
  }

  let topics = Q2_2026_TOPICS;
  if (slug) topics = topics.filter((t) => t.slug === slug);

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const coverDir = path.join(root, 'public/images/blog/q2-2026-pharma');
  fs.mkdirSync(coverDir, { recursive: true });

  const schemaOut = {};
  for (const topic of topics) {
    schemaOut[topic.slug] = {
      articleSection: inferArticleSection(topic),
      mentions: buildSchemaMentionsForTopic(topic),
    };
  }
  fs.writeFileSync(
    path.join(root, 'src/data/q2-pharma-blog-schema.json'),
    JSON.stringify(schemaOut, null, 2),
    'utf8',
  );

  let updated = 0;
  for (const topic of topics) {
    const coverPath = path.join(coverDir, `${topic.slug}-cover.jpg`);
    if (!fs.existsSync(coverPath) || process.argv.includes('--regenerate-svg-fallback')) {
      await generateBlogCover({
        title: topic.brand,
        subtitle: `${topic.generic} · ${topic.actionType}`,
        sponsor: topic.sponsor,
        therapeuticArea: topic.therapeuticArea,
        actionType: topic.actionType,
        layoutIndex: topic.id,
        slug: topic.slug,
        outPath: coverPath,
      });
      console.log(`Cover (SVG fallback): ${coverPath}`);
    } else {
      console.log(`Cover (existing photoreal): ${coverPath}`);
    }

    if (skipUpload) continue;

    const postId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
      slug: topic.slug,
    });
    if (!postId) {
      console.warn(`  skip (not in Sanity): ${topic.slug}`);
      continue;
    }

    const meta = buildArticleMeta(topic);
    const articleSection = inferArticleSection(topic);
    const alt = `${topic.brand} (${topic.generic}) ${topic.actionType} — BioNixus pharmaceutical market access cover image for GCC and MENA commercial leaders`;
    const mainImage = await uploadImage(client, coverPath, `${topic.slug}-cover-v2.jpg`, alt);
    const ogImage = await uploadImage(client, coverPath, `${topic.slug}-og-v2.jpg`, `Open graph: ${alt}`);

    const faq = withKeys(buildFaq(topic));
    const publishedAt = new Date(topic.actionDate).toISOString();

    await client
      .patch(postId)
      .set({
        mainImage,
        openGraph: {
          ogTitle: meta.ogTitle || meta.h1,
          ogDescription: meta.ogDescription || meta.metaDescription,
          ogImage,
        },
        seo: {
          metaTitle: meta.metaTitle,
          metaDescription: meta.metaDescription,
          focusKeyword: `${topic.brand} ${topic.actionType} 2026`.toLowerCase(),
          keywords: [
            topic.brand,
            topic.generic,
            topic.sponsor,
            articleSection,
            'GCC market access',
            'SFDA',
            'NUPCO',
          ],
          canonicalUrl: `https://www.bionixus.com/blog/${topic.slug}`,
          noIndex: false,
        },
        title: meta.h1.slice(0, 200),
        excerpt: topic.headline.slice(0, 200),
        category: articleSection,
        country: 'Global / GCC',
        publishedAt,
        updatedAt: new Date().toISOString(),
        tableOfContents: withKeys(buildToc()),
        faq,
        executiveSummary: withKeys([
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                marks: [],
                text: `${topic.sponsor} — ${topic.actionType} (${topic.actionDate}): ${topic.headline} BioNixus summarizes clinical, regulatory, and GCC market access implications for pharmaceutical commercial leaders.`,
              },
            ],
            markDefs: [],
          },
        ]),
      })
      .commit();

    console.log(`  patched: https://www.bionixus.com/blog/${topic.slug}`);
    updated += 1;
  }

  console.log(`\nDone. ${updated} posts updated in Sanity. Schema JSON regenerated.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
