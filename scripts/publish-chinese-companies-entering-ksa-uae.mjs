/**
 * Creates or syncs Sanity blogPost
 * "Chinese companies entering Saudi Arabia and the UAE: market research playbook"
 * on /bionixus-industries/insights/chinese-companies-entering-saudi-arabia-and-the-uae
 *
 * Author is always Anna Cuban (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-chinese-companies-entering-ksa-uae.mjs
 *   node scripts/publish-chinese-companies-entering-ksa-uae.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'chinese-companies-entering-saudi-arabia-and-the-uae';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const ANNA_NAME = 'Anna Cuban';
const ANNA_AUTHOR_ID = '7acabff7-aae6-4d8a-a667-91e21a235bcb';
const ARTICLE_H1 = 'Chinese companies entering Saudi Arabia and the UAE: market research playbook';
const ARTICLE_EXCERPT =
  'A sourced 2026 market research playbook for Chinese companies entering Saudi Arabia and the UAE: what a mainland HQ must prove on demand, licence, cities, channels, RMB settlement and outbound-investment paperwork before it remits capital.';
const SEO_META_TITLE = 'Chinese Companies Entering Saudi Arabia and the UAE';
const SEO_META_DESCRIPTION =
  'Chinese companies entering Saudi Arabia and the UAE need demand, licence, city and channel proof before a mainland HQ remits capital. A 2026 playbook.';
const COVER_ALT =
  'BioNixus navy and gold cover: Chinese companies entering Saudi Arabia and the UAE — 2026 market research playbook';
const HERO_ALT =
  'Navy and gold BioNixus artwork for Chinese companies entering Saudi Arabia and the UAE: two markets, demand, licence and channel';
const PUBLISHED_AT = '2026-10-16T12:00:00.000Z';
const TAGS = [
  'Chinese companies',
  'Saudi Arabia',
  'UAE',
  'Market Entry',
  'Market Research',
  'Primary Research',
  'B2B',
  'Belt and Road',
  'Vision 2030',
  'Outbound Investment',
  'RMB',
  'China',
];
const KEYWORDS = [
  'Chinese companies entering Saudi Arabia and the UAE',
  'Chinese companies Saudi Arabia',
  'Chinese companies UAE',
  'China market entry GCC',
  'outbound investment Saudi Arabia',
  'RMB settlement UAE',
  'primary market research Gulf',
];
const SOURCES = [
  'Ministry of Foreign Affairs of the People’s Republic of China. Saudi Arabia country page (English). 2024 China–Saudi goods trade USD 107.53 billion; 78.639 million tons of Saudi crude imported. Comprehensive strategic partnership, January 2016.',
  '中华人民共和国外交部. 中国同沙特阿拉伯的关系（2026年7月更新）. 2025年中沙贸易额1081.6亿美元；自沙特进口原油8075.9万吨。2022年11月沙特成为中国公民组团出境游目的地。',
  'Ministry of Foreign Affairs of the People’s Republic of China. UAE country page (English). 2024 China–UAE goods trade USD 101.838 billion; 35.5353 million tons of UAE crude imported. Comprehensive strategic partnership, July 2018. Mutual visa exemption in force 16 January 2018.',
  '中华人民共和国外交部. 中国同阿联酋的关系（2026年7月更新）. 2025年中阿贸易额1080亿美元；自阿联酋进口原油3751.3万吨。“百校教中文”已覆盖181所阿联酋公立学校。',
  'Saudi Press Agency. 42 Investment Agreements Signed at Saudi-Chinese Business Forum, 25 September 2025. Minister Alkhorayef: 2024 trade about SAR 403 billion; Chinese investment exceeded SAR 31 billion; more than 750 Chinese companies in the Kingdom.',
  'GASTAT. International Trade in Goods 2025 (English). China: 14.6% of Saudi merchandise exports and 27.5% of merchandise imports in 2025.',
  'GASTAT. Population Estimates Statistics 2024. Mid-2024 estimate 35.3 million: about 55.6% Saudi and 44.4% non-Saudi.',
  'GASTAT. Foreign Direct Investment 2024. Inflows SAR 119 billion; stock SAR 977 billion. Published top net inflows: United States, UAE, France, Netherlands. China is not in that top four.',
  'WAM. First meeting of the UAE-China Investment Cooperation Committee, 21 April 2025. Bilateral trade US$102 billion in 2024, up 7%; aim of US$200 billion by 2030.',
  'WAM. UAE-China Business Promotion Conference, 13 April 2026. Non-oil trade US$111.5 billion in 2025, up 24.5%. China about 11% of UAE non-oil trade.',
  'WAM. Abu Dhabi Chamber delegation to Shanghai, 11 June 2026. More than 400,000 Chinese residents and over 17,000 Chinese companies in the UAE. New Chinese Chamber memberships rose 85% in 2025.',
  'UAE Government portal (u.ae). Full foreign ownership of commercial companies. Federal Decree-Law No. 26 of 2020 and No. 32 of 2021. Strategic-impact activities remain restricted. Updated 6 April 2026.',
  'UAE Ministry of Finance. Value Added Tax introduced 1 January 2018 at 5%. Mandatory registration above AED 375,000.',
  'Cabinet Decision No. 116 of 2022. Corporate tax of 9% on taxable income exceeding AED 375,000.',
  'UAE Government portal (u.ae). Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law), in force 2 January 2022.',
  'Central Bank of the UAE. Press release, 19 July 2018. CBUAE and PBOC agreed a bilateral swap and an RMB Clearing Centre in the UAE in December 2015.',
  'Agricultural Bank of China, Dubai Branch. PBOC designated the branch as the UAE RMB clearing bank on 9 December 2016; opened 10 May 2017.',
  'NDRC. Measures for the Administration of Outbound Investment by Enterprises (Order No. 11, 2017), effective 1 March 2018.',
  'Ministry of Commerce. Measures for the Administration of Outbound Investment (Order No. 3, 2014), effective 6 October 2014.',
  'State Council. Provisions on Outbound Investment (Decree No. 837), effective 1 July 2026. Articles 11–12: encouraged, restricted and prohibited categories; approval/filing and funds registration remain required.',
  'FCSC. Unified UAE Numbers, December 2025. 2024 population about 11.29 million, up 5.7% from 10.68 million.',
  'WAM. UAE GDP reached AED 1,776 billion in 2024 with 4% growth, citing FCSC. 15 June 2025.',
  'Dubai DET. Dubai FDI Annual Results & Rankings 2024. Top five source countries by estimated FDI capital: India, United States, France, United Kingdom, Switzerland. China is not in that top five.',
  'ZATCA. Amendments to the Implementing Regulation of VAT, Board Resolution No. (01-06-24), 19 November 2024. Standard VAT rate 15%.',
  'MISA. Investor Guide (English), 13th edition, June 2026. Investment registration and ISIC4 activity categories. Licence detail is in the Saudi market-entry playbook.',
  'SDAIA. Guide to the Saudi Personal Data Protection Law: in force 14 September 2023; grace period to 14 September 2024.',
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
  const articleModule = path.join(root, 'src/data/blog-chinese-companies-entering-ksa-uae.ts');
  const dumpPath = path.join(os.tmpdir(), `chinese-ksa-uae-payload-${process.pid}.mjs`);
  const dump = `
    import {
      CHINESE_KSA_UAE_BODY_HTML,
      CHINESE_KSA_UAE_EXECUTIVE_SUMMARY_HTML,
      CHINESE_KSA_UAE_FAQ,
      CHINESE_KSA_UAE_READING_TIME,
      CHINESE_KSA_UAE_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: CHINESE_KSA_UAE_BODY_HTML,
      executiveSummaryHtml: CHINESE_KSA_UAE_EXECUTIVE_SUMMARY_HTML,
      faq: CHINESE_KSA_UAE_FAQ,
      tableOfContents: CHINESE_KSA_UAE_TABLE_OF_CONTENTS,
      readingTime: CHINESE_KSA_UAE_READING_TIME,
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
      title: 'Planning research for a China-to-Gulf market entry?',
      description:
        'BioNixus scopes primary demand research for Chinese companies entering Saudi Arabia and the UAE. Custom work is $10,000–$60,000. The scope is guaranteed in writing.',
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

async function resolveAnnaId(client) {
  const byName = await client.fetch(`*[_type == "author" && name == $name][0]._id`, { name: ANNA_NAME });
  if (byName) return byName;
  const byId = await client.fetch(`*[_type == "author" && _id == $id][0]._id`, { id: ANNA_AUTHOR_ID });
  if (byId) return byId;
  throw new Error(`Author "${ANNA_NAME}" not found in Sanity. Do not fall back to the first author.`);
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
  const authorId = await resolveAnnaId(client);

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
      'b2b-market-research-uae',
      'consumer-survey-company-saudi-arabia',
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
    country: 'GCC',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-cn-ksa-uae' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Chinese companies entering Saudi Arabia and the UAE',
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
    console.log('Author:', ANNA_NAME, authorId);
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
      focusKeyword: 'Chinese companies entering Saudi Arabia and the UAE',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-cn-ksa-uae' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
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
  console.log('Author:', ANNA_NAME, authorId);
  console.log('Article URL:', ARTICLE_URL);
  console.log('Insights hub:', 'https://www.bionixus.com/bionixus-industries/insights');
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
