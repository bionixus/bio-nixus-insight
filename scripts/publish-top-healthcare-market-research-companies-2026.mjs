/**
 * Creates or syncs the Sanity blogPost "Top Healthcare Market Research Companies (2026)"
 * from scripts/data/top-healthcare-market-research-companies-2026-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-top-healthcare-market-research-companies-2026.mjs
 * Sync existing: node scripts/publish-top-healthcare-market-research-companies-2026.mjs --sync-existing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'top-healthcare-market-research-companies-2026';
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const ARTICLE_H1 =
  'Top Healthcare Market Research Companies (2026): Global Pharma & MedTech Partners Compared';
const ARTICLE_EXCERPT =
  'Compare top healthcare market research companies for pharmaceutical and medtech teams in 2026: services, evaluation scorecards, global vs specialist trade-offs, BioNixus GCC/Europe depth, and how to choose the right market research company.';
const SEO_META_TITLE = 'Healthcare Market Research Company Guide 2026 | BioNixus';
const SEO_META_DESCRIPTION =
  'Compare top healthcare market research companies for pharma and medtech: services, GCC/Europe fieldwork, payer intelligence, and how to choose a specialist partner.';
const OG_DESCRIPTION =
  'Global guide to healthcare market research companies in 2026: how to evaluate partners, specialist vs panel vendors, and BioNixus physician, payer, and hospital intelligence.';

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
            text: 'Pharmaceutical and medtech teams need a market research company that connects physician, payer, and hospital evidence to launch and access decisions. Use this 2026 guide to compare BioNixus with global networks and panel vendors on a common scorecard — then scope regional depth where GCC and European execution matter.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'What is a healthcare market research company?', anchor: 'geo-answer-mr-company' },
      { heading: 'Healthcare market research companies: comparison', anchor: 'comparison-table' },
      { heading: 'What a healthcare market research company does', anchor: 'what-mr-company-does' },
      { heading: 'How to choose a market research company', anchor: 'how-to-choose' },
      { heading: 'BioNixus specialist profile', anchor: 'bionixus' },
      { heading: 'Global networks vs regional specialists', anchor: 'global-vs-specialist' },
      { heading: 'Services healthcare MR companies provide', anchor: 'services-overview' },
      { heading: 'Trends in healthcare MR (2026)', anchor: 'trends-2026' },
      { heading: 'Specialist vs panel vendor', anchor: 'specialist-vs-panel' },
      { heading: 'Project timelines', anchor: 'project-timelines' },
      { heading: 'Conclusion', anchor: 'conclusion' },
      { heading: 'FAQ', anchor: 'faq' },
    ]),
    faq: withKeys([
      {
        question: 'What does a healthcare market research company do?',
        answer:
          'A healthcare market research company designs and executes primary research — surveys, interviews, payer studies, hospital audits, and competitive intelligence — to inform pharmaceutical and medtech decisions on launch, pricing, market access, and portfolio strategy.',
      },
      {
        question: 'How do I choose the right market research company for pharma?',
        answer:
          'Evaluate therapeutic experience, regional fieldwork depth, compliance governance, deliverable quality, and whether you need syndicated scale or specialist access to payers and hospitals. Many teams use global networks for tracking and a healthcare specialist for GCC, EU, and complex access work.',
      },
      {
        question: 'What is the difference between a market research company and an HCP panel vendor?',
        answer:
          'Panel vendors provide rapid physician survey access. A full healthcare market research company adds study design, payer and hospital recruitment, qualitative depth, access-focused synthesis, and compliance oversight — especially for launch, HTA, and GCC programmes.',
      },
      {
        question: 'Which healthcare market research companies serve GCC and Europe?',
        answer:
          'Global networks such as IQVIA, Ipsos, and Kantar operate across regions. Specialists such as BioNixus focus on healthcare primary research with dedicated GCC, MENA, UK, and European fieldwork.',
      },
      {
        question: 'How much does healthcare market research cost?',
        answer:
          'Costs depend on sample size, countries, methodology, and stakeholder difficulty. Single-country physician surveys may start in the mid five figures USD; multi-country payer programmes with hospital modules run higher.',
      },
      {
        question: 'Why is BioNixus among top healthcare market research companies?',
        answer:
          'BioNixus combines global reach with healthcare-only focus: physician, payer, and hospital intelligence across 20+ countries, bilingual GCC execution, GDPR-aligned European fieldwork, and deliverables tied to launch and access decisions.',
      },
    ]),
  };
}

async function uploadImage(client, filePath, alt, filename) {
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
    asset: { _type: 'reference', _ref: asset._id },
  };
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).');
    process.exit(1);
  }

  const syncExisting = process.argv.includes('--sync-existing');
  const bodyHtmlPath = path.join(root, 'scripts/data/top-healthcare-market-research-companies-2026-body.html');
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8');
  const shared = buildSharedContent(bodyHtml);

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug: SLUG });

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    await client
      .patch(existingId)
      .set({
        ...shared,
        'seo.metaTitle': SEO_META_TITLE,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'seo.focusKeyword': 'market research company',
        'openGraph.ogTitle': SEO_META_TITLE,
        'openGraph.ogDescription': OG_DESCRIPTION,
        contentSilo: 'healthcare',
        updatedAt: new Date().toISOString(),
      })
      .commit();
    console.log('Synced blogPost:', existingId);
    console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`);
    console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${existingId}`);
    return;
  }

  if (existingId) {
    console.error(
      `A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Delete or change slug first, or run with --sync-existing.`,
    );
    process.exit(1);
  }

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath);
    console.error('Run: node scripts/generate-top-healthcare-mr-companies-2026-cover.mjs');
    process.exit(1);
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`);
  if (!authorId) {
    console.error('No author document found. Create an author in Sanity Studio first.');
    process.exit(1);
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "healthcare-market-research" || title == "Healthcare Market Research" || title == "Industry Insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const coverAlt =
    'Global healthcare market research companies comparison guide for pharmaceutical and medtech teams in 2026';
  const mainImage = await uploadImage(client, coverPath, coverAlt, COVER_FILENAME);
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph: top healthcare market research companies global guide 2026',
    `og-${COVER_FILENAME}`,
  );

  const publishedAt = new Date().toISOString();

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'market research company',
      keywords: [
        'market research company',
        'healthcare market research companies',
        'pharma market research company',
        'medtech market research firm',
        'global market research company healthcare',
        'physician intelligence',
        'payer research',
        'market access research',
        'BioNixus',
        'GCC healthcare research',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_META_TITLE,
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-global-mr-2026' }] : [],
    category: 'Healthcare Market Research',
    contentSilo: 'healthcare',
    country: 'Global',
    language: 'en',
    readingTime: 14,
    tags: [
      'Healthcare Market Research',
      'Market Research Company',
      'Pharmaceutical Research',
      'MedTech',
      'Market Access',
      'Physician Intelligence',
      'Payer Research',
      'BioNixus',
      'Global',
    ],
    ctaSection: {
      title: 'Scope a healthcare market research programme',
      description:
        'BioNixus is a global market research company for pharmaceutical and medtech teams — physician, payer, and hospital intelligence across GCC, MENA, UK, Europe, and wider markets.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
    body: [],
  };

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
