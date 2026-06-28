/**
 * Creates or syncs Sanity blogPost "Financial Services Market Research in Egypt (2026 Guide)"
 * — first industries-silo article for /bionixus-industries/insights
 *
 * Run:
 *   node scripts/generate-financial-services-egypt-cover.mjs
 *   node scripts/publish-financial-services-market-research-egypt-2026.mjs
 * Sync: node scripts/publish-financial-services-market-research-egypt-2026.mjs --sync-existing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'financial-services-market-research-egypt-2026';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const ARTICLE_H1 = 'Financial Services Market Research in Egypt (2026 Guide)';
const ARTICLE_EXCERPT =
  'A structured 2026 guide to financial services market research in Egypt — CBE inclusion context, methodology, how to choose a partner, and detailed profiles of BioNixus, Ipsos, Kantar, NielsenIQ, Euromonitor, and Market Vision with official website links.';
const SEO_META_TITLE = 'Financial Services Market Research Egypt 2026 | BioNixus';
const SEO_META_DESCRIPTION =
  '2026 guide to financial services market research in Egypt: CBE inclusion data, research methods, and profiles of Ipsos, Kantar, NielsenIQ, Euromonitor, Market Vision, and BioNixus.';
const OG_DESCRIPTION =
  'How to run credible financial services market research in Egypt — market context, methodologies, and leading research firms with website links.';
const COVER_ALT =
  'Cairo financial district skyline at golden hour — editorial cover for financial services market research in Egypt 2026 guide';

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
            text: 'Egypt reached a 77.6% financial inclusion rate and 54.7 million active accounts by December 2025 (CBE). This guide covers research methodologies, regulator context, partner selection criteria, and detailed profiles of six leading firms serving financial services clients — with links to each website.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Why Egypt matters in 2026', anchor: 'why-egypt' },
      { heading: 'What teams research', anchor: 'research-needs' },
      { heading: 'Methodology checklist', anchor: 'methodology' },
      { heading: 'How to evaluate a partner', anchor: 'evaluate-partner' },
      { heading: 'Top firms — profiles & websites', anchor: 'top-firms' },
      { heading: 'Syndicated vs custom research', anchor: 'syndicated-vs-custom' },
      { heading: 'Conclusion', anchor: 'conclusion' },
      { heading: 'FAQ', anchor: 'faq' },
    ]),
    faq: withKeys([
      {
        question: 'What is financial services market research in Egypt?',
        answer:
          'It is the systematic study of banking, insurance, payments, and fintech customers, channels, and competitors in Egypt using surveys, interviews, and market data — designed for product, marketing, and strategy decisions under CBE and FRA oversight.',
      },
      {
        question: 'Which firms lead financial services research in Egypt?',
        answer:
          'Leading options include BioNixus, Ipsos Egypt (BankScape), Kantar, NielsenIQ, Euromonitor International, and Market Vision Egypt — each with different strengths in custom fieldwork, syndicated tracking, or category reports.',
      },
      {
        question: 'What did the Central Bank of Egypt report for financial inclusion in 2025?',
        answer:
          'The CBE reported a 77.6% financial inclusion rate among citizens aged 15+ by December 2025, with 54.7 million active transactional accounts — up from 27.4% inclusion in 2016.',
      },
      {
        question: 'What is BankScape Egypt?',
        answer:
          'BankScape Egypt is Ipsos’s syndicated study on Egypt’s financial services industry, covering consumer trends, brand perceptions, and channel behaviour. See ipsos.com/en-eg/bankscape-egypt.',
      },
      {
        question: 'Where are BioNixus industry insights published?',
        answer:
          'B2B and B2C industry articles appear on /bionixus-industries/insights. Healthcare and pharmaceutical content remains on /blog.',
      },
      {
        question: 'How much does custom financial services research cost in Egypt?',
        answer:
          'Custom programmes typically range from roughly USD 20,000 to 80,000+ depending on sample size, geography, methodology, and reporting depth; multi-country MENA scopes cost more.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/financial-services-market-research-egypt-2026-body.html');
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
        industrySlug: 'financial-services',
        category: 'B2C Market Research',
        country: 'Egypt',
        'seo.metaTitle': SEO_META_TITLE,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'seo.canonicalUrl': ARTICLE_URL,
        'openGraph.ogDescription': OG_DESCRIPTION,
        updatedAt: new Date().toISOString(),
      })
      .commit();
    console.log('Synced blogPost:', existingId);
    console.log('Article URL:', ARTICLE_URL);
    console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
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
    console.log('Run: node scripts/generate-financial-services-egypt-cover.mjs');
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
      focusKeyword: 'financial services market research Egypt',
      keywords: [
        'financial services market research Egypt',
        'banking market research Egypt',
        'Egypt fintech research',
        'BankScape Egypt',
        'CBE financial inclusion',
        'BioNixus',
        'Ipsos Egypt',
        'Kantar Egypt',
        'market research companies Egypt',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-fs-eg' }] : [],
    category: 'B2C Market Research',
    country: 'Egypt',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'financial-services',
    readingTime: 16,
    tags: [
      'Egypt',
      'Financial Services',
      'Banking',
      'Fintech',
      'B2C Market Research',
      'Market Research',
      'CBE',
      'BioNixus',
      'Ipsos',
      'Kantar',
    ],
    ctaSection: {
      title: 'Scope financial services research for Egypt',
      description:
        'BioNixus delivers custom B2B and B2C market research across Egypt and MENA — bilingual fieldwork, mixed methods, and outputs built for product and strategy decisions.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
    body: [],
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
