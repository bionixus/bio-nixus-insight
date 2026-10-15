/**
 * Creates or syncs Sanity blogPost
 * "B2B Market Research in the UAE: Reaching Hard-to-Reach Decision-Makers"
 * on /bionixus-industries/insights/b2b-market-research-uae
 *
 * Author is always Sarah Chen (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-b2b-market-research-uae.mjs
 *   node scripts/publish-b2b-market-research-uae.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'b2b-market-research-uae';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Sarah Chen';
const AUTHOR_ID = '498ba300-bfab-4a76-b256-b2139d4d66fe';
const ARTICLE_H1 = 'B2B Market Research in the UAE: Reaching Hard-to-Reach Decision-Makers';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to B2B market research UAE: how to reach hard-to-reach decision-makers, which methods and recruitment work, what custom work costs, and how to choose a B2B market research company Dubai.';
const SEO_META_TITLE = 'B2B Market Research UAE: Recruiting Decision-Makers';
const SEO_META_DESCRIPTION =
  'B2B market research UAE for hard-to-reach buyers: methods, recruitment, costs, and how to choose a B2B market research company Dubai. Named-sample 2026.';
const COVER_ALT =
  'BioNixus navy and gold cover: B2B market research UAE — recruiting hard-to-reach decision-makers, 2026';
const HERO_ALT =
  'Navy and gold BioNixus artwork for B2B market research in the UAE: named buyers, emirates, methods and cost';
const PUBLISHED_AT = '2026-10-15T12:00:00.000Z';
const TAGS = [
  'B2B Market Research',
  'UAE',
  'Dubai',
  'Primary Research',
  'Decision-Makers',
  'Recruitment',
  'B2B',
  'Abu Dhabi',
  'Market Research Company',
];
const KEYWORDS = [
  'B2B market research UAE',
  'B2B market research company Dubai',
  'UAE B2B research',
  'Dubai market research',
  'hard-to-reach decision-makers',
  'named sample B2B',
  'primary market research UAE',
];
const SOURCES = [
  'Federal Competitiveness and Statistics Centre (FCSC). Unified UAE Numbers, December 2025. 2024 population, GDP, licences, banks and labour-market series.',
  'Emirates News Agency (WAM). UAE’s GDP reached AED 1,776 billion in 2024 with 4% growth, citing FCSC. 15 June 2025.',
  'Central Bank of the UAE. Annual Report 2024. Real GDP estimated 3.9% in 2024; forecasts 4.7% in 2025 and 5.7% in 2026.',
  'Dubai Department of Economy and Tourism (DET). Dubai FDI Annual Results & Rankings — 2024 Highlights Report.',
  'Dubai Media Office. Dubai ranked world’s top destination for attracting Greenfield FDI for a fourth year. 9 March 2025.',
  'Digital Dubai. Dubai’s population tops 4.580 million by the end of 2025.',
  'UAE Ministry of Finance. Value Added Tax: introduced 1 January 2018 at a standard rate of 5%.',
  'Federal Tax Authority. Federal Decree-Law No. 8 of 2017 on Value Added Tax and amendments. Article 3: standard rate of 5%.',
  'Federal Tax Authority. Get to know your Tax Obligations. Mandatory VAT registration above AED 375,000.',
  'Cabinet Decision No. 116 of 2022. Taxable income exceeding AED 375,000 is subject to corporate tax at 9%.',
  'UAE Government portal (u.ae). Data protection laws: Federal Decree-Law No. 45 of 2021.',
  'UAE Legislation. Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data. Articles 4, 6 and 17.',
  'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (2025).',
  'ISO. ISO 20252:2026, Market, opinion and social research, including insights and data analytics.',
  'Market Research Society. Quality standards: ISO 20252:2026 replaces ISO 20252:2019.',
  'UAE Government portal (u.ae). Private-sector working hours: 8 hours a day or 48 hours a week.',
  'Ministry of Human Resources and Emiratisation (MOHRE). Dear Worker – Know Your Rights.',
  'UAE Government portal (u.ae). National Economic Register.',
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
  const articleModule = path.join(root, 'src/data/blog-b2b-market-research-uae.ts');
  const dumpPath = path.join(os.tmpdir(), `uae-b2b-mr-payload-${process.pid}.mjs`);
  const dump = `
    import {
      UAE_B2B_MR_BODY_HTML,
      UAE_B2B_MR_EXECUTIVE_SUMMARY_HTML,
      UAE_B2B_MR_FAQ,
      UAE_B2B_MR_READING_TIME,
      UAE_B2B_MR_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: UAE_B2B_MR_BODY_HTML,
      executiveSummaryHtml: UAE_B2B_MR_EXECUTIVE_SUMMARY_HTML,
      faq: UAE_B2B_MR_FAQ,
      tableOfContents: UAE_B2B_MR_TABLE_OF_CONTENTS,
      readingTime: UAE_B2B_MR_READING_TIME,
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
      title: 'Planning B2B market research in the UAE?',
      description:
        'BioNixus scopes named-sample B2B research for hard-to-reach decision-makers in Dubai and across the UAE. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveSarahId(client) {
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
  const authorId = await resolveSarahId(client);

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
      'brand-tracking-research-agency-dubai',
      'customer-satisfaction-surveys-uae-csat-nps-ces',
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
    country: 'UAE',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-uae-b2b' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'B2B market research UAE',
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
      focusKeyword: 'B2B market research UAE',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-uae-b2b' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'UAE',
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
