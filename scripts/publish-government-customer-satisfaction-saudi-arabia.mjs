/**
 * Creates or syncs Sanity blogPost
 * "Government Customer Satisfaction Research in Saudi Arabia: Vision 2030 Service Quality"
 * on /bionixus-industries/insights/government-customer-satisfaction-research-saudi-arabia
 *
 * Author is always Laura McConaughey (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-government-customer-satisfaction-saudi-arabia.mjs
 *   node scripts/publish-government-customer-satisfaction-saudi-arabia.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'government-customer-satisfaction-research-saudi-arabia';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Laura McConaughey';
const AUTHOR_ID = '5373a02d-e67d-4415-9739-33ee8f4da7e2';
const ARTICLE_H1 =
  'Government Customer Satisfaction Research in Saudi Arabia: Vision 2030 Service Quality';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to government customer satisfaction survey work in Saudi Arabia: what Vision 2030 and the DGA already measure, how Absher and Tawakkalna sit in a brief, which Arabic fieldwork rules apply, and how to choose a firm for citizen satisfaction research KSA.';
const SEO_META_TITLE = 'Government Customer Satisfaction Survey Saudi Arabia';
const SEO_META_DESCRIPTION =
  'Government customer satisfaction survey Saudi Arabia: Vision 2030, DGA CSAT, Absher/Tawakkalna, Arabic fieldwork and citizen satisfaction research KSA.';
const COVER_ALT =
  'BioNixus navy and gold cover: government customer satisfaction survey Saudi Arabia — Vision 2030, DGA CSAT, Absher and Tawakkalna';
const HERO_ALT =
  'Navy and gold BioNixus artwork for government customer satisfaction research in Saudi Arabia: Vision 2030 service quality and bilingual fieldwork';
const PUBLISHED_AT = '2026-10-15T16:00:00.000Z';
const TAGS = [
  'Government Customer Satisfaction',
  'Citizen Satisfaction',
  'Saudi Arabia',
  'Vision 2030',
  'Digital Government Authority',
  'Absher',
  'Tawakkalna',
  'CSAT',
  'Public Sector',
  'Primary Research',
  'Arabic Fieldwork',
];
const KEYWORDS = [
  'government customer satisfaction survey Saudi Arabia',
  'citizen satisfaction research KSA',
  'DGA Digital Experience Maturity Index',
  'Absher CSAT',
  'Tawakkalna',
  'Vision 2030 service quality',
  'Arabic government survey',
];
const SOURCES = [
  'Digital Government Authority. Digital Experience Maturity Index for Government Services (2025), V1.0. Overall 86.71% Advanced across 50 platforms; CSAT beneficiary survey; top-ten platform scores.',
  'Digital Government Authority. Introductory Guideline of Digital Experience Maturity Index for Government Services 2026, V5.0. Four perspectives, 20 themes, 61 target platforms; beneficiary satisfaction uses CSAT.',
  'Digital Government Authority. Digital Experience programme: DXMI launched 2022 under Article 4 of the DGA statute to measure platform maturity and beneficiary satisfaction.',
  'Saudi Vision 2030. Annual Report 2025 (English PDF). UN E-Government Development Index rose 25 places between 2022 and 2024; 87% public trust in government performance.',
  'Saudi Vision 2030. 2025 Annual Report page. More than 1,300 services available through Tawakkalna; paperless government service delivery.',
  'Saudi Vision 2030 / National Transformation Program. Annual Report 2025. Digital Experience Maturity Index series 77.26% (2022), 80.68% (2023), 85.04% (2024), 86.71% (2025) against a 90% target.',
  'United Nations E-Government Knowledgebase. Saudi Arabia EGDI 2024: rank 6 of 193, score 0.9602 (very high); 2022 rank 31.',
  'Digital Government Authority. Saudi Arabia 4th globally in digital services 2024: EGDI sixth overall; Online Service Index fourth; e-participation seventh; Riyadh third among 193 cities.',
  'Saudi Data and AI Authority. Tawakkalna e-service statistics: 33 million users, 1,000+ services, 77 countries, 7 languages; first among 39 platforms in the 2024 DXMI.',
  'Saudi Press Agency. Ministry of Interior: digital identities issued via Absher surpass 28 million; access to 500+ entities via Nafath. 25 December 2024.',
  'Saudi Press Agency. Absher executed 448,243,708 electronic transactions in 2025 (417,370,816 Individuals; 30,872,892 Business); unified digital identities exceeded 32 million; 1,140+ entities via Nafath. 14 May 2026.',
  'National Center for Performance Measurement (Adaa). Beneficiary Experience mandate: measure the quality of government services and beneficiary satisfaction at journey and entity levels.',
  'National Center for Performance Measurement (Adaa). FAQs: Adaa measures beneficiary satisfaction with public services at journey level and entity level; organisationally linked to the Prime Minister.',
  'Saudi Press Agency. Adaa measures beneficiary satisfaction with 81 Hajj 1445 services across 18 government agencies. 12 June 2024.',
  'Ministry of Hajj and Umrah. Expands beneficiary satisfaction measurement for Hajj 1447 AH: more than 3 million pilgrims and Umrah performers from 177 nationalities in 2025, versus 50 nationalities in 2022; five collection methods.',
  'GASTAT. ICT Access and Usage by Households and Individuals 2025. 99.0% of individuals aged 15–74 used the internet; 98.4% mobile access.',
  'GASTAT. Population Estimates Publication 2024. Mid-2024 population of 35.3 million; Saudis 55.6%, non-Saudis 44.4%.',
  'SDAIA. Personal Data Protection Law (English).',
  'SDAIA. PDPL guide: in force 14 September 2023; grace period to 14 September 2024.',
  'Bureau of Experts. Basic Law of Governance (1992). Article 1: Arabic is the language of the Kingdom; Riyadh is the capital.',
  'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (2025). Participation is voluntary; consent must be freely given, specific and informed.',
  'ISO. ISO 20252:2026, Market, opinion and social research, including insights and data analytics — Vocabulary and service requirements.',
  'ZATCA. VAT Implementing Regulation amendments, 19 November 2024. Standard rate 15%.',
];

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

function loadHardcodedArticle() {
  const articleModule = path.join(root, 'src/data/blog-government-customer-satisfaction-saudi-arabia.ts');
  const dumpPath = path.join(os.tmpdir(), `ksa-gov-csat-payload-${process.pid}.mjs`);
  const dump = `
    import {
      KSA_GOV_CSAT_BODY_HTML,
      KSA_GOV_CSAT_EXECUTIVE_SUMMARY_HTML,
      KSA_GOV_CSAT_FAQ,
      KSA_GOV_CSAT_READING_TIME,
      KSA_GOV_CSAT_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: KSA_GOV_CSAT_BODY_HTML,
      executiveSummaryHtml: KSA_GOV_CSAT_EXECUTIVE_SUMMARY_HTML,
      faq: KSA_GOV_CSAT_FAQ,
      tableOfContents: KSA_GOV_CSAT_TABLE_OF_CONTENTS,
      readingTime: KSA_GOV_CSAT_READING_TIME,
    }));
  `;
  fs.writeFileSync(dumpPath, dump);
  try {
    const result = spawnSync('npx', ['vite-node', dumpPath], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 8 * 1024 * 1024,
    });
    if (result.status !== 0) {
      throw new Error(`vite-node failed to load the hardcoded article:\n${result.stderr || result.stdout}`);
    }
    const line = result.stdout.trim().split('\n').at(-1);
    return JSON.parse(line);
  } finally {
    fs.rmSync(dumpPath, { force: true });
  }
}

function htmlToPlain(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildSharedContent(article) {
  return {
    title: ARTICLE_H1.slice(0, 200),
    bodyHtml: article.bodyHtml,
    excerpt: ARTICLE_EXCERPT,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: htmlToPlain(article.executiveSummaryHtml),
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys(article.tableOfContents),
    faq: withKeys(article.faq),
    sources: SOURCES,
    factCheckedAt: PUBLISHED_AT,
    readingTime: article.readingTime,
    tags: TAGS,
    ctaSection: {
      title: 'Planning a government CSAT in Saudi Arabia?',
      description:
        'BioNixus scopes bilingual primary government customer satisfaction surveys for Vision 2030, DGA-adjacent and Adaa-adjacent briefs in KSA. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
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

async function resolveLauraId(client) {
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: AUTHOR_NAME });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: AUTHOR_ID });
  if (byId) return byId;
  throw new Error(`Author "${AUTHOR_NAME}" not found in Sanity. Do not fall back to the first author.`);
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env');
    console.error('Hardcoded SSR page is live without Sanity. Re-run this script when credentials are available.');
    process.exit(2);
  }

  const syncExisting = process.argv.includes('--sync-existing');
  const article = loadHardcodedArticle();
  const shared = buildSharedContent(article);
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const authorId = await resolveLauraId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'customer-satisfaction-surveys-uae-csat-nps-ces',
      'consumer-survey-company-saudi-arabia',
      'market-entry-research-saudi-arabia',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2b',
    category: 'B2B Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-gov-csat' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'government customer satisfaction survey Saudi Arabia',
    'seo.keywords': KEYWORDS,
    'seo.canonicalUrl': ARTICLE_URL,
    'seo.noIndex': false,
    'openGraph.ogTitle': SEO_META_TITLE,
    'openGraph.ogDescription': SEO_META_DESCRIPTION,
    updatedAt: PUBLISHED_AT,
  };

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    const patch = client.patch(existingId).set(patchFields);
    if (hasCover) {
      const mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
      const ogImage = await uploadImage(client, coverPath, COVER_ALT, `og-${COVER_FILENAME}`);
      patch.set({ mainImage, 'openGraph.ogImage': ogImage });
    } else {
      console.log('Cover JPEGs missing — left mainImage / openGraph.ogImage unchanged.');
    }
    await patch.commit();
    console.log('Synced blogPost:', existingId);
    console.log('Author:', AUTHOR_NAME, authorId);
    console.log('Article URL:', ARTICLE_URL);
    return;
  }

  if (existingId) {
    console.error(
      `A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Use --sync-existing to update.`,
    );
    process.exit(1);
  }

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'government customer satisfaction survey Saudi Arabia',
      keywords: KEYWORDS,
      canonicalUrl: ARTICLE_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_META_TITLE,
      ogDescription: SEO_META_DESCRIPTION,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt: PUBLISHED_AT,
    updatedAt: PUBLISHED_AT,
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-gov-csat' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2b',
    body: [],
  };

  if (hasCover) {
    doc.mainImage = await uploadImage(client, heroPath, HERO_ALT, HERO_FILENAME);
    doc.openGraph.ogImage = await uploadImage(client, coverPath, COVER_ALT, `og-${COVER_FILENAME}`);
  } else {
    console.log('Cover JPEGs missing — creating the document without mainImage / openGraph.ogImage.');
  }

  const created = await client.create(doc);
  console.log('Created blogPost:', created._id);
  console.log('Author:', AUTHOR_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
