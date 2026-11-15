/**
 * Creates or syncs Sanity blogPost
 * "Chinese EV Brands in the Gulf: Consumer Research Before Launch"
 * on /bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research
 *
 * Author is always Sarah Chen (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-chinese-ev-gulf-consumer-research.mjs
 *   node scripts/publish-chinese-ev-gulf-consumer-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'chinese-ev-brands-saudi-uae-consumer-research';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Sarah Chen';
const AUTHOR_ID = '498ba300-bfab-4a76-b256-b2139d4d66fe';
const ARTICLE_H1 = 'Chinese EV Brands in the Gulf: Consumer Research Before Launch';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to Chinese EV consumer research in Saudi Arabia and the UAE: what to prove on consideration, charging, total cost of ownership and aftersales before a Gulf launch budget is committed.';
const SEO_META_TITLE = 'Chinese EV Consumer Research Saudi UAE (2026 Guide)';
const SEO_META_DESCRIPTION =
  'Chinese EV consumer research for Chinese EV brands in the Gulf: what Saudi and UAE teams must test on charging, TCO and aftersales before a 2026 launch.';
const COVER_ALT =
  'BioNixus navy and gold cover: Chinese EV consumer research in Saudi Arabia and the UAE — 2026 launch guide';
const HERO_ALT =
  'Navy and gold BioNixus artwork for Chinese EV consumer research in Saudi Arabia and the UAE: consideration, charging, TCO and aftersales';
const PUBLISHED_AT = '2026-10-16T12:00:00.000Z';
const TAGS = [
  'Chinese EV',
  'Consumer Research',
  'Saudi Arabia',
  'United Arab Emirates',
  'Electric Vehicles',
  'Automotive',
  'BYD',
  'Geely',
  'Chery',
  'Primary Research',
  'Gulf',
];
const KEYWORDS = [
  'Chinese EV consumer research',
  'Chinese EV brands in the Gulf',
  'Saudi Arabia EV research',
  'UAE EV consumer research',
  'BYD Geely Chery Gulf',
  'electric vehicle market research',
];
const SOURCES = [
  'IEA. Global EV Outlook 2026, “Trends in electric cars”.',
  'IEA. Global EV Outlook 2026, “Manufacturing and trade”.',
  'IEA. Global EV Outlook 2026 (PDF).',
  'UAE Ministry of Energy and Infrastructure. Green-mobility statement with Emirates Transport. 18 July 2024.',
  'WAM. UAE to install 500 EV charging stations by end of 2025. 10 February 2025.',
  'DEWA. Green Charger Initiative decade update. 17 June 2025.',
  'Abu Dhabi Mobility. Electric vehicle infrastructure page.',
  'SASO. Technical regulations list, including electric and autonomous vehicles.',
  'SASO. Technical Regulation for Electric Vehicles — Version 3 (PDF).',
  'MOMAH. Technical Requirements for Electric Vehicle Charging (English landing page).',
  'MOMAH. Technical Requirements for Electric Vehicles Charging (PDF).',
  'PIF. Launch of the Electric Vehicle Infrastructure Company with Saudi Electricity Company. 8 October 2023.',
  'PIF. Electric Vehicle Infrastructure Company (EVIQ) portfolio page.',
  'Saudi Vision 2030. Ceer project page.',
  'Saudi Vision 2030. Story of Transformation 2024 (PDF).',
  'SPA. NAVA–CEER EV manufacturing technology diploma. 30 November 2025.',
  'BYD KSA / Al-Futtaim. Dammam showroom. 25 February 2025.',
  'BYD KSA / Al-Futtaim. Jazan showroom opening.',
  'BYD KSA / Al-Futtaim. New showrooms in Riyadh and Al-Qassim. 25 August 2026.',
  'Geely Auto. Largest overseas showroom in the Middle East. Dubai, 20 June 2025.',
  'Chery UAE / AW Rostamani. Dubai Sheikh Zayed Road showroom. 15 August 2024.',
  'Chery Saudi Arabia. About page, naming Sanabel Modern Motors.',
  'GASTAT. Population Estimates Statistics 2024.',
  'ZATCA. Amendments to the VAT Implementing Regulation. 19 November 2024.',
  'UAE Government portal. Data protection laws, Federal Decree-Law No. 45 of 2021.',
  'SDAIA. Guide to the Saudi Personal Data Protection Law.',
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
  const articleModule = path.join(root, 'src/data/blog-chinese-ev-brands-saudi-uae-consumer-research.ts');
  const dumpPath = path.join(os.tmpdir(), `chinese-ev-gulf-payload-${process.pid}.mjs`);
  const dump = `
    import {
      CHINESE_EV_GULF_BODY_HTML,
      CHINESE_EV_GULF_EXECUTIVE_SUMMARY_HTML,
      CHINESE_EV_GULF_FAQ,
      CHINESE_EV_GULF_READING_TIME,
      CHINESE_EV_GULF_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: CHINESE_EV_GULF_BODY_HTML,
      executiveSummaryHtml: CHINESE_EV_GULF_EXECUTIVE_SUMMARY_HTML,
      faq: CHINESE_EV_GULF_FAQ,
      tableOfContents: CHINESE_EV_GULF_TABLE_OF_CONTENTS,
      readingTime: CHINESE_EV_GULF_READING_TIME,
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
      title: 'Planning Chinese EV consumer research in Saudi Arabia or the UAE?',
      description:
        'BioNixus scopes bilingual launch studies for Chinese EV brands entering KSA and the UAE. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveSarahChenId(client) {
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
  const authorId = await resolveSarahChenId(client);

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
      'consumer-survey-company-saudi-arabia',
      'brand-tracking-research-agency-dubai',
      'kantar-alternative-middle-east',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'automotive',
    category: 'Automotive Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-chinese-ev-gulf' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Chinese EV consumer research',
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
      focusKeyword: 'Chinese EV consumer research',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-chinese-ev-gulf' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'Automotive Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    contentSilo: 'industries',
    industrySegment: 'b2c',
    industrySlug: 'automotive',
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
