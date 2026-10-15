/**
 * Creates or syncs Sanity blogPost
 * "Consumer Survey Research in Saudi Arabia: Sampling, Language and Mode"
 * on /bionixus-industries/insights/consumer-survey-company-saudi-arabia
 *
 * Author is always Martha DeVito (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-consumer-survey-company-saudi-arabia.mjs
 *   node scripts/publish-consumer-survey-company-saudi-arabia.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'consumer-survey-company-saudi-arabia';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Martha DeVito';
const AUTHOR_ID = '6263dcc8-994f-4cd1-9228-7e92332659d3';
const ARTICLE_H1 = 'Consumer Survey Research in Saudi Arabia: Sampling, Language and Mode';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to consumer survey research in Saudi Arabia: how to sample a 35.3 million population, when Arabic and English both belong on the instrument, when online is enough, how to reach women, which cities to quota, and what custom work costs.';
const SEO_META_TITLE = 'Consumer Survey Company Saudi Arabia: 2026 Methods';
const SEO_META_DESCRIPTION =
  'Consumer survey company Saudi Arabia guide to sampling, Arabic/English, online vs CATI/F2F, women respondents, regions, costs and how to choose a firm.';
const COVER_ALT =
  'BioNixus navy and gold cover: consumer survey company Saudi Arabia — 2026 sampling, language and mode guide';
const HERO_ALT =
  'Navy and gold BioNixus artwork for a Saudi Arabia consumer survey guide: sampling, bilingual instruments and fieldwork modes';
const PUBLISHED_AT = '2026-10-15T12:00:00.000Z';
const TAGS = [
  'Consumer Surveys',
  'Saudi Arabia',
  'Consumer Research',
  'Sampling',
  'CATI',
  'Online Research',
  'Arabic',
  'Primary Research',
  'B2C',
  'FMCG',
  'Retail',
];
const KEYWORDS = [
  'consumer survey company Saudi Arabia',
  'consumer research Saudi Arabia',
  'Saudi Arabia consumer survey',
  'CATI CAPI Saudi Arabia',
  'Arabic English survey Saudi Arabia',
  'primary consumer research Saudi Arabia',
];
const SOURCES = [
  'GASTAT. Population Estimates Publication 2024. Mid-2024 population of 35.3 million.',
  'National Platform (my.gov.sa). Population in 2024: 35,300,280.',
  'Saudi Press Agency. Census 2022: 32,175,224 people; 18.8 million Saudis (58.4%); median age 29.',
  'GASTAT. ICT Access and Usage by Households and Individuals 2025.',
  'GASTAT. ICT Access and Use methodology. Last-three-months reference period.',
  'CST. Saudi Internet Report 2024: 99% penetration; 48 GB mobile data a month.',
  'GASTAT. Household Income and Consumption Expenditure Survey 2023. 122,325 households.',
  'GASTAT. Labor Market Statistics Q3 2025. Saudi female participation 33.7%; CAPI and CATI.',
  'Saudi Vision 2030 overview. Women’s participation target 22% to 30%; more than half of Saudis below 25.',
  'Saudi Vision 2030. Annual Report 2025 (English PDF).',
  'Saudi Vision 2030. 2025 Annual Report page. Tourists, spending and licensed facilities.',
  'Saudi Vision 2030. Housing Program page.',
  'Bureau of Experts. Basic Law of Governance (1992). Article 1: Arabic is the language; Riyadh is the capital.',
  'Embassy of Saudi Arabia, Washington. 26 September 2017 decree: women licensed to drive from June 2018.',
  'Saudi Press Agency. Traffic Law: driving licences for males and females alike.',
  'SDAIA. Personal Data Protection Law (English).',
  'SDAIA. PDPL guide: in force 14 September 2023; grace period to 14 September 2024.',
  'ZATCA. VAT Implementing Regulation amendments, 19 November 2024. Standard rate 15%.',
  'Bureau of Experts. Value Added Tax Law, Article 2: 15% standard rate.',
  'Ministry of Finance. Pre-Budget Statement, Fiscal Year 2026.',
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
  const articleModule = path.join(root, 'src/data/blog-consumer-survey-company-saudi-arabia.ts');
  const dumpPath = path.join(os.tmpdir(), `saudi-consumer-survey-payload-${process.pid}.mjs`);
  const dump = `
    import {
      SAUDI_CONSUMER_SURVEY_BODY_HTML,
      SAUDI_CONSUMER_SURVEY_EXECUTIVE_SUMMARY_HTML,
      SAUDI_CONSUMER_SURVEY_FAQ,
      SAUDI_CONSUMER_SURVEY_READING_TIME,
      SAUDI_CONSUMER_SURVEY_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: SAUDI_CONSUMER_SURVEY_BODY_HTML,
      executiveSummaryHtml: SAUDI_CONSUMER_SURVEY_EXECUTIVE_SUMMARY_HTML,
      faq: SAUDI_CONSUMER_SURVEY_FAQ,
      tableOfContents: SAUDI_CONSUMER_SURVEY_TABLE_OF_CONTENTS,
      readingTime: SAUDI_CONSUMER_SURVEY_READING_TIME,
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
      title: 'Planning a consumer survey in Saudi Arabia?',
      description:
        'BioNixus scopes bilingual primary consumer surveys for FMCG, retail and services briefs in KSA. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveMarthaId(client) {
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
  const authorId = await resolveMarthaId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'market-entry-research-saudi-arabia',
      'customer-satisfaction-surveys-uae-csat-nps-ces',
      'brand-tracking-research-agency-dubai',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2c',
    category: 'B2C Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'consumer survey company Saudi Arabia',
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
      focusKeyword: 'consumer survey company Saudi Arabia',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-ksa-entry' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2C Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
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
