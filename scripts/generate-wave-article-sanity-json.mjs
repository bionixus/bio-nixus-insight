/**
 * Writes scripts/data/<slug>.json for every article-waves post, with every
 * Sanity blogPost field filled from the hardcoded SSR module
 * (src/data/articleWaves).
 *
 * Covers / heroes: scripts/generate-wave-article-covers.mjs.
 *
 *   node scripts/generate-wave-article-sanity-json.mjs              # every wave slug
 *   node scripts/generate-wave-article-sanity-json.mjs <slug> ...   # selected slugs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Every blogPost field that applies to a healthcare-silo article. */
export const WAVE_ARTICLE_SANITY_FIELDS = [
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

export function waveArticleJsonPath(slug) {
  return path.join(root, 'scripts/data', `${slug}.json`);
}

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

export async function loadWaveArticles() {
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
    optimizeDeps: { noDiscovery: true, entries: [] },
  });
  try {
    const mod = await vite.ssrLoadModule('/src/data/articleWaves/index.ts');
    return mod.WAVE_ARTICLES;
  } finally {
    await vite.close();
  }
}

export function buildSanityPayload(article) {
  const summary = stripHtml(article.summaryHtml);
  return {
    seo: {
      metaTitle: article.metaTitle,
      metaDescription: article.metaDescription,
      focusKeyword: article.focusKeyword,
      keywords: [...article.keywords],
      canonicalUrl: article.url,
      noIndex: false,
    },
    openGraph: {
      ogTitle: article.metaTitle,
      ogDescription: article.metaDescription,
      ogImage: {
        path: `public${article.coverImage}`,
        alt: article.coverImageAlt,
        geminiPending: false,
      },
    },
    title: article.displayTitle,
    slug: { _type: 'slug', current: article.slug },
    excerpt: article.excerpt,
    publishedAt: article.publishedIso,
    updatedAt: article.updatedIso,
    author: {
      _type: 'reference',
      _ref: article.author.id,
      name: article.author.name,
      jobTitle: article.author.jobTitle,
    },
    mainImage: {
      path: `public${article.heroImage}`,
      alt: article.heroImageAlt,
      caption: `BioNixus-branded hero for ${article.breadcrumbLabel}`,
      geminiPending: false,
    },
    categories: [{ title: article.sanityCategory }],
    category: article.sanityCategory,
    contentSilo: article.contentSilo,
    tags: [...article.tags],
    country: article.country,
    language: 'en',
    readingTime: article.readingTime,
    executiveSummary: [portableText(summary)],
    tableOfContents: article.tableOfContents.map((item) => ({ heading: item.heading, anchor: item.anchor })),
    bodyHtml: `${article.summaryHtml}\n\n${article.bodyHtml}`,
    body: [
      { _type: 'callout', type: 'insight', title: 'Short answer', content: summary },
      {
        _type: 'dataVisualization',
        title: article.steps.title,
        type: 'table',
        data: JSON.stringify(article.steps.items.map(({ name, description }) => ({ name, description }))),
        source: article.references.map((ref) => ref.label).join('; '),
      },
    ],
    faq: article.faq.map((item) => ({ question: item.question, answer: item.answer })),
    relatedPostSlugs: [...article.relatedPostSlugs],
    ctaSection: { ...article.ctaSection },
    sources: article.references.map((ref) => `${ref.label} ${ref.url}`),
    factCheckedAt: article.updatedIso,
    geminiCoverPending: false,
    coverNote: `mainImage and openGraph.ogImage are the Playwright-rendered BioNixus JPEGs at public/images/blog/${article.slug}-{hero,cover}.jpg.`,
  };
}

async function main() {
  const wanted = process.argv.slice(2);
  const articles = (await loadWaveArticles()).filter((a) => !wanted.length || wanted.includes(a.slug));
  if (wanted.length && articles.length !== wanted.length) throw new Error('Unknown slug in arguments');
  for (const article of articles) {
    const payload = buildSanityPayload(article);
    for (const field of WAVE_ARTICLE_SANITY_FIELDS) {
      if (payload[field] == null) throw new Error(`${article.slug}: Sanity payload missing field ${field}`);
    }
    const outPath = waveArticleJsonPath(article.slug);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
    console.log(`Wrote ${path.relative(root, outPath)} (${payload.sources.length} sources, author ${payload.author.name})`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
