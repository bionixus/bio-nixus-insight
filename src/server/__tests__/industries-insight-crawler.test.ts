import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ARTICLE,
  ARTICLE_URL,
  AUTHOR_JOB_TITLE,
  AUTHOR_SLUG,
  BODY_HTML_FILE,
  SLUG,
} from '../../../scripts/data/mystery-shopping-companies-saudi-arabia-2026.mjs';
import { getIndustriesInsightHowTo } from '../../../lib/industries-insight-jsonld.mjs';
import { checkNode, walk } from '../../../scripts/seo/verify-schema-properties.mjs';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';

const fetchMock = vi.hoisted(() => vi.fn());

vi.mock('@sanity/client', () => ({
  createClient: () => ({ fetch: fetchMock }),
}));

import handler from '../../../api/blog/[slug].js';

const root = join(__dirname, '..', '..', '..');
const bodyHtml = readFileSync(join(root, BODY_HTML_FILE), 'utf8');
const COVER = 'https://cdn.sanity.io/images/h2whvvpo/production/0000000000000000000000000000000000000000-1200x630.jpg';
const AUTHOR_NAME = WESTERN_AUTHORS.find((author) => author.slug === AUTHOR_SLUG)?.name;

function crawlerDoc(overrides: Record<string, unknown> = {}) {
  return {
    title: ARTICLE.title,
    language: 'en',
    excerpt: ARTICLE.excerpt,
    contentSilo: 'industries',
    seoMetaDescription: ARTICLE.seo.metaDescription,
    seoMetaTitle: ARTICLE.seo.metaTitle,
    ogTitle: ARTICLE.seo.metaTitle,
    ogDescription: ARTICLE.seo.metaDescription,
    body: [],
    bodyHtml,
    htmlContent: null,
    coverImage: COVER,
    coverImageAlt: ARTICLE.cover.alt,
    coverImageCaption: ARTICLE.cover.caption,
    ogImage: COVER,
    ogImageAlt: ARTICLE.cover.alt,
    publishedAt: '2026-10-11T12:00:00.000Z',
    updatedAt: '2026-10-12T09:30:00.000Z',
    _updatedAt: '2026-10-12T09:30:05Z',
    author: AUTHOR_NAME,
    authorSlug: AUTHOR_SLUG,
    authorTitle: AUTHOR_JOB_TITLE,
    authorLinkedIn: null,
    seoKeywords: ARTICLE.seo.keywords,
    category: ARTICLE.category,
    categoryTitle: null,
    categories: ['Industries', 'Methodology'],
    tags: ARTICLE.tags,
    executiveSummary: [{ _type: 'block', children: [{ _type: 'span', text: ARTICLE.executiveSummary }] }],
    faq: ARTICLE.faq,
    ...overrides,
  };
}

function mockRes() {
  const headers = new Map<string, string>();
  return {
    statusCode: 200,
    body: '',
    headers,
    setHeader(name: string, value: string) {
      headers.set(name.toLowerCase(), value);
      return this;
    },
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    send(payload: unknown) {
      this.body = Buffer.isBuffer(payload) ? payload.toString('utf8') : String(payload);
      return this;
    },
    redirect(code: number, url: string) {
      this.statusCode = code;
      this.body = url;
      return this;
    },
  };
}

async function render(query: Record<string, string>) {
  const res = mockRes();
  await handler({ query, headers: { 'accept-encoding': '' } }, res);
  return res;
}

function unescape(text: string): string {
  return text.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function meta(html: string, attr: 'property' | 'name', key: string): string[] {
  const re = new RegExp(`<meta ${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}" content="([^"]*)">`, 'g');
  return [...html.matchAll(re)].map(([, content]) => unescape(content));
}

type JsonLdNode = { '@type': string; [key: string]: unknown };

function jsonLd(html: string): JsonLdNode[] {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, raw]) =>
    JSON.parse(raw),
  );
}

describe('api/blog crawler HTML — industries insight article', () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  it('serves the exact CTR title and description with a complete article head', async () => {
    fetchMock.mockResolvedValue(crawlerDoc());
    const res = await render({ slug: SLUG, industriesInsight: '1' });
    expect(res.statusCode).toBe(200);
    const html = res.body;

    expect(html).toContain(`<title>${ARTICLE.seo.metaTitle}</title>`);
    expect(meta(html, 'name', 'description')).toEqual([ARTICLE.seo.metaDescription]);
    expect(html).toContain(`<link rel="canonical" href="${ARTICLE_URL}">`);
    expect(html).toContain(`<h1>${ARTICLE.title}</h1>`);

    expect(meta(html, 'property', 'og:type')).toEqual(['article']);
    expect(meta(html, 'property', 'og:title')).toEqual([ARTICLE.seo.metaTitle]);
    expect(meta(html, 'property', 'og:description')).toEqual([ARTICLE.seo.metaDescription]);
    expect(meta(html, 'property', 'og:url')).toEqual([ARTICLE_URL]);
    expect(meta(html, 'property', 'og:image')).toEqual([COVER]);
    expect(meta(html, 'property', 'og:image:alt')).toEqual([ARTICLE.cover.alt]);
    expect(meta(html, 'property', 'article:published_time')).toEqual(['2026-10-11T12:00:00.000Z']);
    expect(meta(html, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(meta(html, 'name', 'twitter:title')).toEqual([ARTICLE.seo.metaTitle]);
    expect(meta(html, 'name', 'twitter:description')).toEqual([ARTICLE.seo.metaDescription]);
    expect(meta(html, 'name', 'twitter:image')).toEqual([COVER]);
    expect(meta(html, 'name', 'twitter:image:alt')).toEqual([ARTICLE.cover.alt]);
  });

  it('emits the current article graph and keeps the programme copy in the HTML', async () => {
    fetchMock.mockResolvedValue(crawlerDoc());
    const html = (await render({ slug: SLUG, industriesInsight: '1' })).body;
    const nodes = jsonLd(html);
    expect(nodes.map((n) => n['@type'])).toEqual(['Article', 'BreadcrumbList', 'FAQPage']);
    const issues: string[] = [];
    for (const node of nodes) for (const [entry, path] of walk(node)) checkNode(entry, path, issues);
    expect(issues).toEqual([]);
    expect(nodes[0]).toMatchObject({
      headline: ARTICLE.title,
      description: ARTICLE.excerpt,
    });
    expect(html).toContain('What does a mystery shopping programme in Saudi Arabia deliver?');
    expect(html).toContain('Al Khobar is the KSA partner office');
    expect(html).toContain('/saudi-arabia-retail-market-research');
    expect(html).toContain('/templates/mystery-shop-retail-brief');
    expect((nodes.find((n) => n['@type'] === 'FAQPage')?.mainEntity as unknown[])?.length).toBe(ARTICLE.faq.length);
    expect(getIndustriesInsightHowTo(SLUG).steps).toHaveLength(8);
  });

  it('matches the FAQPage to the FAQ crawlers can read on the page', async () => {
    fetchMock.mockResolvedValue(crawlerDoc());
    const html = (await render({ slug: SLUG, industriesInsight: '1' })).body;
    const visible = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)].map(
      ([, question, answer]) => ({ question: unescape(question), answer: unescape(answer) }),
    );
    const faqPage = jsonLd(html).find((n) => n['@type'] === 'FAQPage')!;
    const schema = (faqPage.mainEntity as { name: string; acceptedAnswer: { text: string } }[]).map((q) => ({
      question: q.name,
      answer: q.acceptedAnswer.text,
    }));
    expect(visible).toEqual(ARTICLE.faq);
    expect(schema).toEqual(visible);
  });

  it('names Sarah Chen in the crawler byline', async () => {
    fetchMock.mockResolvedValue(crawlerDoc());
    const html = (await render({ slug: SLUG, industriesInsight: '1' })).body;
    expect(html).toContain('Sarah Chen');
    expect(AUTHOR_JOB_TITLE).toBe('Global Research Manager');
  });

  it('leaves healthcare posts on their existing crawler output', async () => {
    fetchMock.mockResolvedValue(crawlerDoc({ contentSilo: 'healthcare', title: 'Healthcare fixture' }));
    const html = (await render({ slug: 'healthcare-fixture-post' })).body;
    const types = jsonLd(html).map((n) => n['@type']);
    expect(types).toEqual(['Article', 'BreadcrumbList', 'FAQPage']);
    expect(meta(html, 'property', 'article:modified_time')).toEqual([]);
    expect(meta(html, 'property', 'article:author')).toEqual([]);
    expect(html).toContain('<p>By Sarah Chen</p>');
    expect(html).toContain('https://www.bionixus.com/healthcare-market-research');
  });
});
