/**
 * Creates or syncs Sanity blogPost
 * "Chinese Companies in Egypt: What to Research First"
 * on /bionixus-industries/insights/chinese-companies-egypt-market-research
 *
 * Author is always Armela Belba (WESTERN_AUTHORS id).
 * Cover/OG images upload from the Playwright-rendered JPEGs.
 *
 *   node scripts/publish-chinese-companies-egypt-market-research.mjs
 *   node scripts/publish-chinese-companies-egypt-market-research.mjs --sync-existing
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const SLUG = 'chinese-companies-egypt-market-research';
const ARTICLE_PATH = `/bionixus-industries/insights/${SLUG}`;
const ARTICLE_URL = `https://www.bionixus.com${ARTICLE_PATH}`;
const COVER_FILENAME = `${SLUG}-cover.jpg`;
const HERO_FILENAME = `${SLUG}-hero.jpg`;
const AUTHOR_NAME = 'Armela Belba';
const AUTHOR_ID = '4e924019-dd92-48cf-899b-3bd63c266dd3';
const ARTICLE_H1 = 'Chinese Companies in Egypt: What to Research First';
const ARTICLE_EXCERPT =
  'A plain guide for Chinese companies entering Egypt: who will buy, in which city, at what price after tax, and which licence to use before sending money from China.';
const SEO_META_TITLE = 'Chinese Companies Egypt Market Research: Plain Guide';
const SEO_META_DESCRIPTION =
  'Chinese companies Egypt market research in plain steps: who will buy, which city, the price after 14% VAT, and which licence to use before you send money.';
const COVER_ALT =
  'BioNixus navy and gold cover: Chinese companies Egypt market research — 2026 guide to brands in Egypt and North Africa';
const HERO_ALT =
  'Navy and gold BioNixus artwork for Chinese companies Egypt market research: Egypt demand, licence, cities and channel';
const PUBLISHED_AT = '2026-10-17T12:00:00.000Z';
const UPDATED_AT = '2026-10-18T13:30:00.000Z';
const TAGS = [
  'Chinese companies',
  'Egypt',
  'North Africa',
  'Market Entry',
  'Market Research',
  'Primary Research',
  'B2B',
  'Belt and Road',
  'GAFI',
  'SCZone',
  'China',
];
const KEYWORDS = [
  'Chinese companies Egypt market research',
  'Chinese brands Egypt',
  'Chinese companies North Africa',
  'GAFI Egypt',
  'SCZone Chinese investment',
  'Egypt market entry research',
  'primary market research Egypt',
];
const SOURCES = [
  'Ministry of Foreign Affairs of the People’s Republic of China. Egypt country page (English). Diplomatic relations 30 May 1956; comprehensive strategic partnership, December 2014; joint statement deepening the partnership, May 2024. 2024 China–Egypt goods trade USD 17.378 billion (exports USD 16.8 billion; imports USD 578 million).',
  '中华人民共和国外交部. 中国同埃及的关系（2026年7月更新）. 2025年双边贸易额207.9亿美元；2013年首次突破百亿美元（102.13亿美元）。2025年中国公民访埃约36万人次。埃及现有3所孔子学院和4个孔子课堂；10所大学开设中文专业。2002年签署中国公民组团赴埃旅游实施方案。',
  'CCTV, citing the Ministry of Commerce briefing of 2 September 2026. China has been Egypt’s largest trading partner for 14 consecutive years. 2025 bilateral trade USD 20.79 billion (record). January–July 2026 trade USD 13.75 billion, up 23.2%. 2025 China new direct investment in Egypt USD 284 million, more than doubled. TEDA Suez zone: more than 200 resident firms and more than 10,000 direct jobs.',
  'United Nations Statistics Division. Demographic Yearbook 2024, Table 5. Egypt mid-year population (national estimate, CAPMAS): 106,556 thousand in 2024 (asterisked as a latest national figure).',
  'GAFI. Deputy CEO Eman Mansour at CIFIT, Xiamen, 16 September 2026. Chinese companies operating in Egypt increased to 3,366, spanning textiles and garments, solar panels, chemicals, automotive manufacturing and logistics.',
  'Invest in Egypt / GAFI. CEO Hossam Heiba at the Egypt–China Investment Forum, 10 November 2025. More than 2,000 Chinese companies in Egypt; total investments exceeding USD 8 billion. Tax-deduction reimbursement of up to 50% of investment cost over seven years. Four new free zones (10th of Ramadan, New October, New Borg El-Arab, New Alamein) to start operating by the end of 2026. Haier Egypt obtained a Golden License.',
  'GAFI. Investment Indicators. Net FDI USD 12.2 billion in FY 2024/25, compared with USD 11.1 billion in FY 2023/24 after excluding the Ras El-Hekma deal of USD 35 billion, and USD 10 billion in FY 2022/23. FY 2024/25 sector shares: finance 16.7%, industry 16.2%, real estate 15.4%.',
  'GAFI. Investment Law No. 72 of 2017 (English). Applies to domestic and foreign investment of any volume. Vehicles: Internal Investment, Investment Zones, Technological Zones or Free Zones. Article 11 bis cash incentive of 35% to 55% of income tax paid on industrial activity, paid by the Ministry of Finance.',
  'GAFI. Golden License Guidebook (English), September 2025 update. Article 20 of Law 72/2017, as amended by Law 160 of 2023: a comprehensive approval on set-up, operation, management, building licences and land allocation, granted by Council of Ministers decree and valid on its own.',
  'Egyptian Tax Authority. Value Added Tax Law No. 67 of 2016 (English). Standard VAT rate 13% in FY 2016/2017 and 14% from the beginning of FY 2017/2018, with 1% of the tax allocated to social-justice programmes. Machines and equipment used in manufacturing a commodity or providing a service: 5%, except buses and passenger cars.',
  'SCZONE. Groundbreaking of Sunrev Solar’s integrated solar-components complex in Ain Sokhna (TEDA–Egypt), 19 June 2025. USD 200 million on 200,000 square metres; phase one USD 90 million (2 GW cells and 2 GW modules); phase two USD 110 million (ingots and wafers). More than 1,800 direct jobs across both phases. Operations expected in the first half of 2026.',
  'SCZONE. Groundbreaking of two Chinese textile projects in Sokhna (TEDA–Egypt). Bridge Textile: more than USD 25 million, about 500 direct jobs. F-TEX: about USD 30 million, about 400 direct jobs, full operation by end-2027. Chairman Waleid Gamal El-Dien: USD 8.6 billion across 297 projects in the last three years, including USD 4.4 billion across 121 projects in the most recent fiscal year.',
  'China-Africa TEDA Investment Co., reprinting Xinhua (English), 27 January 2026. By end-2025 the Suez cooperation zone hosted nearly 200 companies, with over USD 3.8 billion invested and around 10,000 jobs. SCZONE chairman: over the past three and a half years SCZONE attracted USD 11.6 billion, with Chinese investors about 50%. July 2025 expansion: TEDA to invest USD 100 million in infrastructure on an additional 2.86 square kilometres.',
  'Central Bank of Egypt. Second Financial Inclusion Strategy (2026–2030) announcement, 17 February 2026. Financial inclusion 77.6% by end-2025: 54.7 million citizens with active transactional accounts out of 70.5 million citizens aged 15 and above; growth of 219% between 2016 and 2025.',
  'Law No. 151 of 2020 promulgating the Personal Data Protection Law. Issued 13 July 2020; published in the Official Gazette; in force three months after the day following publication. Addressees have one year from issuance of the Executive Regulations to reconcile their positions. English text hosted by ILO NATLEX.',
  'Ministry of Foreign Affairs of the People’s Republic of China. Algeria country page (English). Comprehensive strategic partnership, February 2014. 2024 China–Algeria trade USD 12.48 billion (exports USD 11.68 billion; imports USD 800 million). China has long been Algeria’s largest trading partner.',
  'Ministry of Foreign Affairs of the People’s Republic of China. Morocco country page (English). Strategic partnership, May 2016. 2024 China–Morocco trade USD 9.04 billion (exports USD 7.74 billion; imports USD 1.3 billion). Visa-free entry for Chinese citizens since June 2016.',
  'Ministry of Foreign Affairs of the People’s Republic of China. Tunisia country page (English). Strategic partnership, May 2024. 2024 China–Tunisia trade USD 2.88 billion (exports USD 2.38 billion; imports USD 500 million).',
  '中华人民共和国外交部. 中国同突尼斯的关系. 2025年中突贸易总额28.3亿美元，其中中方出口25.7亿美元、进口2.6亿美元。',
  'NDRC. Measures for the Administration of Outbound Investment by Enterprises (Order No. 11, 2017), effective 1 March 2018.',
  'Ministry of Commerce. Measures for the Administration of Outbound Investment (Order No. 3, 2014), effective 6 October 2014.',
  'State Council. Provisions on Outbound Investment (Decree No. 837), effective 1 July 2026. Articles 11–12: encouraged, restricted and prohibited categories; inventory, approval/filing and funds registration remain required. Article 5: investors make their own decisions and bear their own risks.',
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
  const articleModule = path.join(root, 'src/data/blog-chinese-companies-egypt-market-research.ts');
  const dumpPath = path.join(os.tmpdir(), `chinese-egypt-payload-${process.pid}.mjs`);
  const dump = `
    import {
      CN_EGYPT_BODY_HTML,
      CN_EGYPT_EXECUTIVE_SUMMARY_HTML,
      CN_EGYPT_FAQ,
      CN_EGYPT_READING_TIME,
      CN_EGYPT_TABLE_OF_CONTENTS,
    } from ${JSON.stringify(articleModule)};
    process.stdout.write(JSON.stringify({
      bodyHtml: CN_EGYPT_BODY_HTML,
      executiveSummaryHtml: CN_EGYPT_EXECUTIVE_SUMMARY_HTML,
      faq: CN_EGYPT_FAQ,
      tableOfContents: CN_EGYPT_TABLE_OF_CONTENTS,
      readingTime: CN_EGYPT_READING_TIME,
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
      title: 'Planning research for a China-to-Egypt market entry?',
      description:
        'BioNixus scopes buyer interviews for Chinese companies entering Egypt. Custom work is $10,000 to $60,000. The scope is guaranteed in writing.',
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

async function resolveArmelaId(client) {
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
  const authorId = await resolveArmelaId(client);

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  });

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (title == "Industry Insights" || slug.current == "industry-insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`));

  const relatedIds = await client.fetch(`*[_type == "blogPost" && slug.current in $slugs]._id`, {
    slugs: [
      'chinese-companies-entering-saudi-arabia-and-the-uae',
      'financial-services-market-research-egypt-2026',
      'market-research-companies-egypt',
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
    country: 'Egypt',
    language: 'en',
    author: { _type: 'reference', _ref: authorId },
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-cn-egypt' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    'seo.metaTitle': SEO_META_TITLE,
    'seo.metaDescription': SEO_META_DESCRIPTION,
    'seo.focusKeyword': 'Chinese companies Egypt market research',
    'seo.keywords': KEYWORDS,
    'seo.canonicalUrl': ARTICLE_URL,
    'seo.noIndex': false,
    'openGraph.ogTitle': SEO_META_TITLE,
    'openGraph.ogDescription': SEO_META_DESCRIPTION,
    updatedAt: UPDATED_AT,
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
      focusKeyword: 'Chinese companies Egypt market research',
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
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-cn-egypt' }] : [],
    relatedPosts: (relatedIds || []).map((id, i) => ({
      _type: 'reference',
      _ref: id,
      _key: `rel-${i}`,
    })),
    category: 'B2B Market Research',
    country: 'Egypt',
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
