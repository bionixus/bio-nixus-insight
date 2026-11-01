/**
 * Shared builder for the October 2026 article-waves series
 * (bionixus-article-waves-writer-brief-2026-10-24).
 *
 * Each wave article is a hardcoded SSR post: its module writes the copy and
 * references, and this builder turns it into the BlogPost the blog route
 * renders, plus the Sanity seed fields read by scripts/publish-wave-article.mjs.
 *
 * Series rules the builder enforces: one roster author titled Global Research
 * Manager, inline citations that resolve to the reference list, a TOC that
 * matches the H2 ids, and the sitewide Organization node (no page override).
 */
import type { BlogPost, BlogPostCtaSection, BlogPostItemListEntry, ContentSilo } from '@/types/blog';
import { WESTERN_AUTHORS, personAuthorJsonLd, type EditorialAuthor } from '@/data/editorialAuthors';

export const SITE_ORIGIN = 'https://www.bionixus.com';

export type WaveReference = { id: string; label: string; url: string };

export type WaveFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type WaveFaqItem = { question: string; answer: string };

export type WaveArticleInput = {
  /** Article number in the writer's brief (1-72). */
  briefNumber: number;
  wave: number;
  slug: string;
  authorName: string;
  metaTitle: string;
  metaDescription: string;
  /** Herper headline: a full sentence, 8-16 words, no colon. */
  displayTitle: string;
  displaySubtitle: string;
  breadcrumbLabel: string;
  excerpt: string;
  /** Exact phrase that must appear in the title, meta, opening and two H2s. */
  focusKeyword: string;
  keywords: string[];
  publishedIso: string;
  updatedIso: string;
  /** e.g. '1 Nov 2026' */
  dateLabel: string;
  category: string;
  sanityCategory: string;
  contentSilo: ContentSilo;
  country: string;
  tags: string[];
  coverImageAlt: string;
  heroImageAlt: string;
  figures: WaveFigure[];
  references: WaveReference[];
  summaryHtml: string;
  narrativeHtml: string;
  faq: WaveFaqItem[];
  steps: { title: string; description: string; items: BlogPostItemListEntry[] };
  about: string[];
  ctaSection: Required<BlogPostCtaSection>;
  relatedPostSlugs: string[];
};

export type WaveArticle = WaveArticleInput & {
  path: string;
  url: string;
  coverImage: string;
  heroImage: string;
  author: EditorialAuthor;
  bodyHtml: string;
  tableOfContents: { heading: string; anchor: string }[];
  wordCount: number;
  readingTime: number;
  post: BlogPost;
};

export function citeFrom(references: WaveReference[]) {
  const byId = new Map(references.map((ref) => [ref.id, ref]));
  return function cite(id: string, text: string): string {
    const ref = byId.get(id);
    if (!ref) throw new Error(`Unknown reference: ${id}`);
    return `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  };
}

export function figureHtml(figure: WaveFigure): string {
  return `<figure class="article-figure"><img src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"><figcaption>${figure.caption}</figcaption></figure>`;
}

function visibleText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function countWords(htmlOrText: string): number {
  return visibleText(htmlOrText)
    .split(' ')
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

function referencesHtml(references: WaveReference[]): string {
  return `<h2 id="references">References</h2>

<ol>
${references
  .map(
    (ref) =>
      `<li id="ref-${ref.id}">${ref.label} <a href="${ref.url}" target="_blank" rel="noopener noreferrer">Source</a>.</li>`,
  )
  .join('\n')}
</ol>`;
}

function tableOfContentsFrom(html: string): { heading: string; anchor: string }[] {
  return [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map((match) => ({
    heading: visibleText(match[2]),
    anchor: match[1],
  }));
}

const READING_WORDS_PER_MINUTE = 225;

export function buildWaveArticle(input: WaveArticleInput): WaveArticle {
  const author = WESTERN_AUTHORS.find((candidate) => candidate.name === input.authorName);
  if (!author) throw new Error(`${input.slug}: author ${input.authorName} is not in WESTERN_AUTHORS`);

  const path = `/blog/${input.slug}`;
  const url = `${SITE_ORIGIN}${path}`;
  const coverImage = `/images/blog/${input.slug}-cover.jpg`;
  const heroImage = `/images/blog/${input.slug}-hero.jpg`;
  const bodyHtml = `${input.narrativeHtml}

${referencesHtml(input.references)}`;
  const tableOfContents = tableOfContentsFrom(bodyHtml);

  const faqWords = input.faq.reduce((sum, item) => sum + countWords(item.question) + countWords(item.answer), 0);
  const wordCount = countWords(input.summaryHtml) + countWords(bodyHtml) + faqWords;
  const readingTime = Math.ceil(
    (countWords(input.summaryHtml) + countWords(input.narrativeHtml) + faqWords) / READING_WORDS_PER_MINUTE,
  );

  const authorSchema = personAuthorJsonLd(author);

  const post: BlogPost = {
    id: `hardcoded-${input.slug}`,
    slug: input.slug,
    title: input.displayTitle,
    excerpt: input.excerpt,
    date: input.dateLabel,
    category: input.category,
    country: input.country,
    language: 'en',
    contentSilo: input.contentSilo,
    readingTime,
    wordCount,
    breadcrumbLabel: input.breadcrumbLabel,
    displaySubtitle: input.displaySubtitle,
    tags: [...input.tags],
    coverImage: heroImage,
    coverImageAlt: input.heroImageAlt,
    ogImage: coverImage,
    ogImageAlt: input.coverImageAlt,
    ogTitle: input.metaTitle,
    ogDescription: input.metaDescription,
    seoMetaTitle: input.metaTitle,
    seoMetaDescription: input.metaDescription,
    seoCanonicalUrl: url,
    seoNoIndex: false,
    authorName: author.name,
    authorTitle: author.jobTitle,
    publishedAtIso: input.publishedIso,
    updatedAtIso: input.updatedIso,
    tableOfContents,
    executiveSummary: input.summaryHtml,
    faq: input.faq.map((item) => ({ ...item })),
    ctaSection: { ...input.ctaSection },
    schemaExtras: {
      emitWebPage: true,
      author: authorSchema,
      about: input.about.map((name) => ({ '@type': 'Thing', name })),
      itemList: {
        name: input.steps.title,
        description: input.steps.description,
        items: input.steps.items.map(({ name, description }) => ({ name, description })),
      },
      contentImages: input.figures.map((figure) => ({
        url: `${SITE_ORIGIN}${figure.src}`,
        width: figure.width,
        height: figure.height,
        caption: figure.caption,
      })),
    },
    body: bodyHtml,
  };

  return {
    ...input,
    path,
    url,
    coverImage,
    heroImage,
    author,
    bodyHtml,
    tableOfContents,
    wordCount,
    readingTime,
    post,
  };
}
