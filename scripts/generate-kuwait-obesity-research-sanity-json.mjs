/**
 * Writes scripts/data/obesity-market-research-kuwait.json with every Sanity
 * blogPost field filled from the hardcoded SSR module.
 *
 * Cover / hero JPEGs are Gemini-pending and are recorded as paths only.
 *
 *   node scripts/generate-kuwait-obesity-research-sanity-json.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'scripts/data/obesity-market-research-kuwait.json');

export const ANNA_CUBAN_SANITY_ID = '7acabff7-aae6-4d8a-a667-91e21a235bcb';

/** Every blogPost field that applies to a healthcare-silo article. */
export const KUWAIT_OBESITY_SANITY_FIELDS = [
  'seo',
  'openGraph',
  'title',
  'slug',
  'excerpt',
  'publishedAt',
  'updatedAt',
  'author',
  'mainImage',
  'categories',
  'category',
  'contentSilo',
  'tags',
  'country',
  'language',
  'readingTime',
  'executiveSummary',
  'tableOfContents',
  'bodyHtml',
  'body',
  'faq',
  'relatedPostSlugs',
  'ctaSection',
  'sources',
  'factCheckedAt',
];

function stripHtml(html) {
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function portableText(text) {
  return {
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', marks: [], text }],
    markDefs: [],
  };
}

function extractSources(bodyHtml) {
  return [...bodyHtml.matchAll(/<li id="ref-[^"]+">([\s\S]*?)<\/li>/g)].map((match) =>
    stripHtml(match[1]),
  );
}

async function loadArticle() {
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  try {
    return await vite.ssrLoadModule('/src/data/blog-kuwait-obesity-research-glp1-payers.ts');
  } finally {
    await vite.close();
  }
}

export function buildSanityPayload(mod) {
  const shortAnswer = stripHtml(mod.KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML).replace(
    /^Short answer:\s*/i,
    '',
  );
  const firstParagraph = stripHtml(mod.KUWAIT_OBESITY_RESEARCH_BODY_HTML.split('<h2')[0])
    .replace(/^Obesity market research Kuwait[\s\S]*?This briefing uses only published sources\./, '')
    .trim();

  return {
    seo: {
      metaTitle: mod.KUWAIT_OBESITY_RESEARCH_META_TITLE,
      metaDescription: mod.KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
      focusKeyword: 'obesity market research Kuwait',
      keywords: [
        'obesity market research Kuwait',
        'GLP-1 Kuwait',
        'Kuwait obesity payers',
        'Wegovy Kuwait',
        'Mounjaro Kuwait',
        'Ministry of Health Kuwait tenders',
        'DHAMAN',
        'Kuwait market access',
      ],
      canonicalUrl: mod.KUWAIT_OBESITY_RESEARCH_URL,
      noIndex: false,
    },
    openGraph: {
      ogTitle: mod.KUWAIT_OBESITY_RESEARCH_META_TITLE,
      ogDescription: mod.KUWAIT_OBESITY_RESEARCH_META_DESCRIPTION,
      ogImage: {
        path: `public${mod.KUWAIT_OBESITY_RESEARCH_COVER_IMAGE}`,
        alt: mod.KUWAIT_OBESITY_RESEARCH_COVER_IMAGE_ALT,
        geminiPending: true,
      },
    },
    title: mod.KUWAIT_OBESITY_RESEARCH_DISPLAY_TITLE,
    slug: { _type: 'slug', current: mod.KUWAIT_OBESITY_RESEARCH_SLUG },
    excerpt: mod.KUWAIT_OBESITY_RESEARCH_EXCERPT,
    publishedAt: mod.KUWAIT_OBESITY_RESEARCH_PUBLISHED_ISO,
    updatedAt: mod.KUWAIT_OBESITY_RESEARCH_UPDATED_ISO,
    author: {
      _type: 'reference',
      _ref: ANNA_CUBAN_SANITY_ID,
      name: 'Anna Cuban',
      jobTitle: 'Global Research Manager',
    },
    mainImage: {
      path: `public${mod.KUWAIT_OBESITY_RESEARCH_HERO_IMAGE}`,
      alt: mod.KUWAIT_OBESITY_RESEARCH_HERO_IMAGE_ALT,
      caption: 'BioNixus-branded hero for obesity market research Kuwait (Gemini cover pending)',
      geminiPending: true,
    },
    categories: [{ title: 'Healthcare Market Research' }],
    category: 'Healthcare Market Research',
    contentSilo: 'healthcare',
    tags: [...mod.KUWAIT_OBESITY_RESEARCH_TAGS],
    country: 'Kuwait',
    language: 'en',
    readingTime: mod.KUWAIT_OBESITY_RESEARCH_READING_TIME,
    executiveSummary: [portableText(shortAnswer)],
    tableOfContents: mod.KUWAIT_OBESITY_RESEARCH_TABLE_OF_CONTENTS.map((item) => ({
      heading: item.heading,
      anchor: item.anchor,
    })),
    bodyHtml: `${mod.KUWAIT_OBESITY_RESEARCH_EXECUTIVE_SUMMARY_HTML}\n\n${mod.KUWAIT_OBESITY_RESEARCH_BODY_HTML}`,
    body: [
      {
        _type: 'callout',
        type: 'insight',
        title: 'Short answer',
        content: shortAnswer,
      },
      {
        _type: 'dataVisualization',
        title: 'Who funds GLP-1s in Kuwait',
        type: 'table',
        data: JSON.stringify(
          mod.KUWAIT_OBESITY_FUNDING_ROUTES.map((route) => ({
            name: route.name,
            whoPays: route.whoPays,
            whatItMeans: route.whatItMeans,
          })),
        ),
        source: 'Alali et al., 2025; Awad et al., 2022; DHAMAN; Kuwait Times / KUNA August 2025',
      },
      portableText(
        firstParagraph ||
          'Obesity market research Kuwait is a funding and access problem before it is a sizing problem.',
      ),
    ],
    faq: mod.KUWAIT_OBESITY_RESEARCH_FAQ.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    relatedPostSlugs: ['who-does-obesity-market-research-saudi-arabia', 'gcc-pharmacoeconomics'],
    ctaSection: { ...mod.KUWAIT_OBESITY_RESEARCH_HARDCODED_POST.ctaSection },
    sources: extractSources(mod.KUWAIT_OBESITY_RESEARCH_BODY_HTML),
    factCheckedAt: mod.KUWAIT_OBESITY_RESEARCH_UPDATED_ISO,
    geminiCoverPending: true,
    coverNote:
      'mainImage and openGraph.ogImage require a NEW BioNixus-branded 1200×630 JPEG from a Google Gemini image model. Do not substitute another generator.',
  };
}

async function main() {
  const mod = await loadArticle();
  const payload = buildSanityPayload(mod);
  for (const field of KUWAIT_OBESITY_SANITY_FIELDS) {
    if (payload[field] == null) {
      throw new Error(`Sanity payload missing field: ${field}`);
    }
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote ${path.relative(root, outPath)} (${payload.sources.length} sources, bodyHtml ${payload.bodyHtml.length} chars)`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
