/**
 * Creates or syncs Sanity blogPost "Online Market Research and Social Listening for Brand Growth (2026)"
 * — industries-silo article for /bionixus-industries/insights
 *
 * Run:
 *   node scripts/generate-online-market-research-social-listening-cover.mjs
 *   node scripts/publish-online-market-research-social-listening-brand-growth-2026.mjs
 * Sync: node scripts/publish-online-market-research-social-listening-brand-growth-2026.mjs --sync-existing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'online-market-research-social-listening-brand-growth-2026';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const ARTICLE_H1 = 'Online Market Research and Social Listening for Brand Growth (2026 Guide)';
const ARTICLE_EXCERPT =
  'How online market research and social listening work together to protect brand reputation and accelerate growth — methodology, MENA considerations, integration points, and partner selection for 2026 brand teams.';
const SEO_META_TITLE = 'Online Market Research & Social Listening 2026 | BioNixus';
const SEO_META_DESCRIPTION =
  'Guide to online market research and social listening for brand growth and reputation in 2026 — MENA methodology, integration, and decision-ready insights from BioNixus.';
const OG_DESCRIPTION =
  'Why brand teams combine online market research and social listening for growth and reputation — and how to run a credible programme in MENA.';
const COVER_ALT =
  'Abstract digital network visualization representing online market research and social listening for brand growth — editorial cover 2026';

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
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }));
}

function buildSharedContent(bodyHtml) {
  return {
    title: ARTICLE_H1.slice(0, 200),
    bodyHtml,
    excerpt: ARTICLE_EXCERPT,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Brand growth in 2026 depends on combining structured online market research with always-on social listening. This guide explains how the two methods differ, how to integrate them for reputation protection and growth decisions, and what credible programmes look like in MENA and GCC markets.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Why it matters for brand growth', anchor: 'why-it-matters' },
      { heading: 'Online market research in 2026', anchor: 'online-research' },
      { heading: 'Social listening at scale', anchor: 'social-listening' },
      { heading: 'Combining both for growth', anchor: 'combined' },
      { heading: 'Brand reputation management', anchor: 'reputation' },
      { heading: 'Methodology checklist', anchor: 'methodology' },
      { heading: 'Choosing a partner', anchor: 'partner' },
      { heading: 'Conclusion', anchor: 'conclusion' },
      { heading: 'FAQ', anchor: 'faq' },
    ]),
    faq: withKeys([
      {
        question: 'What is the difference between online market research and social listening?',
        answer:
          'Online market research uses structured surveys and digital qual to answer specific brand and CX questions with representative samples. Social listening analyses public social and web conversations continuously to detect themes, sentiment, competitors, and emerging issues. Strong programmes use both.',
      },
      {
        question: 'How does social listening support brand reputation?',
        answer:
          'It flags negative narratives early, tracks share of voice and sentiment, maps influencers, and triggers deeper research when conversation velocity crosses thresholds — so teams respond with evidence rather than anecdotes.',
      },
      {
        question: 'Is social listening enough for brand strategy on its own?',
        answer:
          'Usually not. Listening discovers and monitors narratives but rarely sizes segments or tests concepts reliably without structured online research. Use listening for hypotheses and tracking; use surveys to validate and quantify.',
      },
      {
        question: 'What should MENA brands consider for Arabic social listening?',
        answer:
          'Dialect handling, local platform mix, bot filtering, human theme validation, and clear documentation of coverage limits for closed messaging environments.',
      },
      {
        question: 'Where are BioNixus industry insights published?',
        answer:
          'B2B and B2C industry articles appear on /bionixus-industries#insights. Healthcare and pharmaceutical content remains on /blog.',
      },
      {
        question: 'Which BioNixus pages relate to media and consumer brand research?',
        answer:
          'See /market-research/media for media industry research, /b2c-industries for consumer categories, and /market-research-by-industry for country × industry entry points across GCC and MENA.',
      },
    ]),
  };
}

async function uploadImage(client, filePath, alt, filename) {
  const buf = fs.readFileSync(filePath);
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
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    process.exit(1);
  }

  const syncExisting = process.argv.includes('--sync-existing');
  const bodyHtmlPath = path.join(root, 'scripts/data/online-market-research-social-listening-brand-growth-2026-body.html');
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8');
  const shared = buildSharedContent(bodyHtml);

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    await client
      .patch(existingId)
      .set({
        ...shared,
        contentSilo: 'industries',
        industrySegment: 'b2c',
        industrySlug: 'media',
        category: 'B2C Market Research',
        country: 'MENA',
        'seo.metaTitle': SEO_META_TITLE,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'seo.canonicalUrl': ARTICLE_URL,
        'openGraph.ogDescription': OG_DESCRIPTION,
        updatedAt: new Date().toISOString(),
      })
      .commit();
    console.log('Synced blogPost:', existingId);
    console.log('Article URL:', ARTICLE_URL);
    console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries#insights');
    return;
  }

  if (existingId) {
    console.error(
      `A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Use --sync-existing to update.`,
    );
    process.exit(1);
  }

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath);
    console.log('Run: node scripts/generate-online-market-research-social-listening-cover.mjs');
    process.exit(1);
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`);
  if (!authorId) {
    console.error('No author document found in Sanity Studio.');
    process.exit(1);
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const mainImage = await uploadImage(client, coverPath, COVER_ALT, COVER_FILENAME);
  const ogImage = await uploadImage(client, coverPath, `Open graph: ${COVER_ALT}`, `og-${COVER_FILENAME}`);

  const publishedAt = new Date().toISOString();

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'online market research social listening',
      keywords: [
        'online market research',
        'social listening',
        'brand growth',
        'brand reputation',
        'social media monitoring',
        'MENA market research',
        'GCC brand tracking',
        'consumer insights',
        'BioNixus',
      ],
      canonicalUrl: ARTICLE_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: `${ARTICLE_H1} | BioNixus`,
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-social-listening' }] : [],
    category: 'B2C Market Research',
    country: 'MENA',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'media',
    readingTime: 14,
    tags: [
      'Social Listening',
      'Online Market Research',
      'Brand Growth',
      'Brand Reputation',
      'B2C Market Research',
      'Media',
      'MENA',
      'GCC',
      'BioNixus',
    ],
    ctaSection: {
      title: 'Scope a brand and social listening programme',
      description:
        'BioNixus combines online market research and social analytics with bilingual MENA fieldwork — built for brand, CX, and comms decisions.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
    body: [],
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries#insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
