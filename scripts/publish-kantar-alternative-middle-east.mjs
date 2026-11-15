/**
 * Creates or syncs Sanity blogPost
 * "Kantar Alternative Middle East: What Buyers Should Compare, and When a Specialist Fits Better"
 * on /bionixus-industries/insights/kantar-alternative-middle-east
 *
 * Author is always Ivona Gunjova (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-kantar-alternative-middle-east.mjs
 *   node scripts/publish-kantar-alternative-middle-east.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'kantar-alternative-middle-east';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Ivona Gunjova';
const AUTHOR_ID = '5e67519a-1cdc-4b57-a881-29391db4accd';
const ARTICLE_H1 =
  'Kantar Alternative Middle East: What Buyers Should Compare, and When a Specialist Fits Better';
const ARTICLE_EXCERPT =
  'A sourced 2026 guide to a Kantar alternative Middle East for custom research: what GCC buyers should compare, when a large global agency still fits, and when a specialist market research agency alternative GCC is the better brief.';
const SEO_META_TITLE = 'Kantar Alternative Middle East: When Specialists Fit';
const SEO_META_DESCRIPTION =
  'Kantar alternative Middle East for custom research: what GCC buyers should compare, when a specialist market research agency alternative GCC fits better.';
const COVER_ALT =
  'BioNixus navy and gold cover: Kantar alternative Middle East — custom research vs global agencies in the GCC, 2026';
const HERO_ALT =
  'Navy and gold BioNixus artwork for a GCC custom-research buyer guide: six Gulf states, sample, language and written scope';
const PUBLISHED_AT = '2026-10-15T12:00:00.000Z';
const TAGS = [
  'Kantar Alternative',
  'Middle East',
  'GCC',
  'Custom Research',
  'Primary Research',
  'Market Research Agency',
  'Saudi Arabia',
  'UAE',
  'B2B',
  'B2C',
];
const KEYWORDS = [
  'Kantar alternative Middle East',
  'market research agency alternative GCC',
  'Kantar alternative',
  'GCC market research',
  'custom market research Middle East',
  'primary research GCC',
];
const SOURCES = [
  'GCC Secretariat. Member States: United Arab Emirates, Kingdom of Bahrain, Kingdom of Saudi Arabia, Oman, Qatar and Kuwait.',
  'Cooperation Council for the Arab States of the Gulf. Charter. Signed in Abu Dhabi, 25 May 1981. Preamble names the six member states.',
  'World Bank. Population, total (SP.POP.TOTL), 2024: Saudi Arabia 35,300,280; United Arab Emirates 10,986,400; Oman 5,281,538; Kuwait 4,897,263; Qatar 2,857,822; Bahrain 1,588,670.',
  'World Bank. GDP (current US$) (NY.GDP.MKTP.CD), 2024, billion: Saudi Arabia 1,239.8; United Arab Emirates 552.3; Qatar 219.2; Kuwait 160.2; Oman 107.1; Bahrain 47.1.',
  'GASTAT. Population Estimates Publication 2024. Mid-2024 population of 35.3 million.',
  'National Platform (my.gov.sa). Population in 2024: 35,300,280.',
  'Federal Competitiveness and Statistics Centre (FCSC). Unified UAE Numbers, December 2025. 2024 population, GDP, licences, banks and labour-market series.',
  'Emirates News Agency (WAM). UAE’s GDP reached AED 1,776 billion in 2024 with 4% growth, citing FCSC. 15 June 2025.',
  'WPP. Proposed sale of 60% of Kantar. 12 July 2019. Describes Kantar as a global data, research, consulting and analytics business offering insights in over 100 countries; WPP launched Kantar in 1992.',
  'WPP. Completion of Kantar transaction. 5 December 2019. Sale of 60% of Kantar to Bain Capital Private Equity completed for approximately 90% of the business.',
  'Companies House. THE KANTAR GROUP LIMITED (02887671). Active private limited company, incorporated 14 January 1994. SIC 70100 Activities of head offices. Registered office: South Bank Central, 30 Stamford Street, London, England, SE1 9LQ.',
  'ISO. ISO 20252:2026, Market, opinion and social research, including insights and data analytics — Vocabulary and service requirements. Edition 4, published September 2026.',
  'Market Research Society. Quality standards: ISO 20252:2026 replaces ISO 20252:2019; certification to the 2026 standard mandatory from September 2029. Statement of Applicability required.',
  'ICC / ESOMAR. International Code on Market, Opinion and Social Research and Data Analytics (2025). Article 4: identify promptly; participation voluntary; re-contact agreement.',
  'UAE Government portal (u.ae). Data protection laws: Federal Decree-Law No. 45 of 2021, in force 2 January 2022.',
  'UAE Legislation. Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data. Articles 4, 6 and 17.',
  'SDAIA. Personal Data Protection Law (English).',
  'SDAIA. PDPL guide: in force 14 September 2023; grace period to 14 September 2024.',
  'UAE Ministry of Finance. Value Added Tax: introduced 1 January 2018 at a standard rate of 5%.',
  'Federal Tax Authority. Federal Decree-Law No. 8 of 2017 on Value Added Tax and amendments. Article 3: standard rate of 5%.',
  'ZATCA. VAT Implementing Regulation amendments, 19 November 2024. Standard rate 15%.',
  'Bureau of Experts. Value Added Tax Law, Article 2: 15% standard rate.',
  'Bureau of Experts. Basic Law of Governance (1992). Article 1: Arabic is the language; Riyadh is the capital.',
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
  const articleModule = path.join(root, 'src/data/blog-kantar-alternative-middle-east.ts');
  const dumpPath = path.join(os.tmpdir(), `kantar-alt-me-payload-${process.pid}.mjs`);
  const dump = `
    import {
      KANTAR_ALT_ME_BODY_HTML,
      KANTAR_ALT_ME_EXECUTIVE_SUMMARY_HTML,
      KANTAR_ALT_ME_FAQ,
      KANTAR_ALT_ME_READING_TIME,
      KANTAR_ALT_ME_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: KANTAR_ALT_ME_BODY_HTML,
      executiveSummaryHtml: KANTAR_ALT_ME_EXECUTIVE_SUMMARY_HTML,
      faq: KANTAR_ALT_ME_FAQ,
      tableOfContents: KANTAR_ALT_ME_TABLE_OF_CONTENTS,
      readingTime: KANTAR_ALT_ME_READING_TIME,
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
      title: 'Planning custom research in the GCC?',
      description:
        'BioNixus scopes named-sample custom research across Saudi Arabia, the UAE and the wider GCC. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveIvonaId(client) {
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
  const authorId = await resolveIvonaId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'b2b-market-research-uae',
      'consumer-survey-company-saudi-arabia',
      'market-entry-research-saudi-arabia',
      'brand-tracking-research-agency-dubai',
    ],
  });

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME);
  const heroPath = path.join(root, 'public/images/blog', HERO_FILENAME);
  const hasCover = fs.existsSync(coverPath) && fs.existsSync(heroPath);

  const patchFields = {
    ...shared,
    contentSilo: 'industries',
    industrySegment: 'b2b',
    category: 'Market Research',
    country: 'GCC',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-kantar-alt-me' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Kantar alternative Middle East',
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
      focusKeyword: 'Kantar alternative Middle East',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-kantar-alt-me' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'Market Research',
    country: 'GCC',
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
