import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { WAVE_ARTICLES } from '@/data/articleWaves';
import { countWords, type WaveArticle } from '@/data/articleWaves/buildWaveArticle';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import { WAVE_ARTICLE_SLUGS } from '../../../../scripts/lib/wave-article-slugs.mjs';
import { REDIRECT_HREF_REWRITES } from '../../../../blog-legacy-redirects.mjs';
import { INDUSTRIES_INSIGHT_EDITORIAL_LINKS } from '@/lib/blog-content-silo';

const root = process.cwd();
const read = (file: string) => readFileSync(join(root, file), 'utf8');
const vercel = JSON.parse(read('vercel.json')) as { rewrites: { source: string; destination: string }[] };
const sitemapScript = read('scripts/generate-sitemap.mjs');
const sitemapXml = read('public/sitemap.xml');
const llms = read('public/llms.txt');
const llm = read('public/llm.txt');
const ssrBundleCheck = read('scripts/verify-ssr-bundle.mjs');

/** Claims BioNixus must never make (see the article-waves writer brief). */
const BANNED_CLAIMS: RegExp[] = [
  /guarantee/i,
  /\b127\b/,
  /\$\s?10k|\$10,000/i,
  /\$\s?60k|\$60,000/i,
  /40 client reviews/i,
  /s[ãa]o paulo/i,
  /(?:our|bionixus)\s+(?:\w+\s+)?offices?\s+in\s+(?:the\s+)?(?:uae|dubai|abu dhabi|saudi|riyadh|japan|tokyo|china|shanghai|singapore)/i,
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonLdNode = Record<string, any>;

function text(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function metaContent(head: string, attr: 'property' | 'name', key: string): string[] {
  const re = new RegExp(`<meta[^>]*${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g');
  return [...head.matchAll(re)].map((m) => /content="([^"]*)"/.exec(m[0])?.[1] ?? '');
}

function flatten(nodes: JsonLdNode[]): JsonLdNode[] {
  return nodes.flatMap((node) => (Array.isArray(node['@graph']) ? node['@graph'] : [node]));
}

const decode = (value: string) => value.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');

it('keeps the script slug list in step with the registry', () => {
  expect(WAVE_ARTICLE_SLUGS).toEqual(WAVE_ARTICLES.map((a) => a.slug));
});

describe.each(WAVE_ARTICLES.map((article) => [article.path, article] as [string, WaveArticle]))(
  '%s',
  (_path, article) => {
    let html = '';
    let head = '';
    let graph: JsonLdNode[] = [];

    beforeAll(async () => {
      HelmetProvider.canUseDOM = false;
      const result = await render(article.path, {
        pageType: 'blog-post',
        blogSlug: article.slug,
        blogPost: article.post,
        relatedPosts: { related: [], prev: null, next: null },
      });
      html = result.html;
      const helmet = result.helmetData;
      head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
      graph = flatten(
        [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
          (match) => JSON.parse(match[1]) as JsonLdNode,
        ),
      );
    }, 120_000);

    it('server-renders one sentence-style h1, the byline, the FAQ and references', () => {
      const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
      expect(h1s).toHaveLength(1);
      expect(h1s[0]).toContain(article.displayTitle);
      expect(article.displayTitle).not.toContain(':');
      const headlineWords = article.displayTitle.split(/\s+/).length;
      expect(headlineWords).toBeGreaterThanOrEqual(8);
      expect(headlineWords).toBeLessThanOrEqual(16);

      const visible = text(html);
      expect(visible).toContain(article.author.name);
      expect(visible).toContain('Global Research Manager');
      expect(visible).toContain('References');
      for (const item of article.faq) expect(visible).toContain(text(item.question));
      expect(html).toMatch(/<details[\s>]/);
      if (article.contentSilo !== 'industries') expect(html).toContain('<nav aria-label="Breadcrumb"');
    });

    it('stays inside the 1,200–2,000 word band', () => {
      expect(article.wordCount).toBeGreaterThanOrEqual(1200);
      expect(article.wordCount).toBeLessThanOrEqual(2000);
    });

    it('ships unique, in-band title, description, canonical and social tags', () => {
      expect(article.metaTitle.length).toBeGreaterThanOrEqual(50);
      expect(article.metaTitle.length).toBeLessThanOrEqual(60);
      expect(article.metaDescription.length).toBeGreaterThanOrEqual(150);
      expect(article.metaDescription.length).toBeLessThanOrEqual(160);
      expect(article.metaTitle.toLowerCase()).toContain(article.focusKeyword.toLowerCase());

      expect(decode(/<title[^>]*>([^<]*)<\/title>/.exec(head)?.[1] ?? '')).toContain(article.metaTitle);
      expect(metaContent(head, 'name', 'description').map(decode)).toContain(article.metaDescription);
      expect(head).toContain(`rel="canonical" href="${article.url}"`);
      expect(metaContent(head, 'property', 'og:image').some((v) => v.endsWith(article.coverImage))).toBe(true);
      expect(metaContent(head, 'name', 'twitter:card').length).toBeGreaterThan(0);

      const others = WAVE_ARTICLES.filter((a) => a.slug !== article.slug);
      expect(others.map((a) => a.metaTitle)).not.toContain(article.metaTitle);
      expect(others.map((a) => a.metaDescription)).not.toContain(article.metaDescription);
    });

    it('emits BlogPosting with the rotating author, plus FAQ and breadcrumb schema', () => {
      const posting = graph.find((node) => node['@type'] === 'BlogPosting' || node['@type'] === 'Article');
      expect(posting).toBeDefined();
      const author = Array.isArray(posting?.author) ? posting?.author[0] : posting?.author;
      expect(author?.name).toBe(article.author.name);
      expect(author?.jobTitle).toBe('Global Research Manager');
      expect(WESTERN_AUTHORS.map((a) => a.name)).toContain(article.author.name);
      expect(graph.some((node) => node['@type'] === 'FAQPage')).toBe(true);
      expect(graph.some((node) => node['@type'] === 'BreadcrumbList')).toBe(true);
      expect(metaContent(head, 'property', 'article:author').map(decode)).toContain(article.author.name);
    });

    it('links the research hub within the first 200 words and the CTA to a service page', () => {
      const source = `${article.summaryHtml}\n${article.bodyHtml}`;
      const hub = article.contentSilo === 'industries' ? '/bionixus-industries' : '/healthcare-market-research';
      const hubAt = source.indexOf(`href="${hub}"`);
      expect(hubAt).toBeGreaterThan(-1);
      expect(countWords(source.slice(0, hubAt))).toBeLessThan(200);
      expect(article.ctaSection.buttonUrl).toMatch(/^https:\/\/www\.bionixus\.com\/[a-z0-9/-]+$/);
      expect(html).toContain(article.ctaSection.buttonUrl.replace('https://www.bionixus.com', ''));
    });

    it('cites every reference and keeps a table of contents for each h2', () => {
      for (const ref of article.references) expect(article.narrativeHtml).toContain(ref.url);
      expect(article.tableOfContents.length).toBeGreaterThanOrEqual(5);
      for (const item of article.tableOfContents) expect(html).toContain(`id="${item.anchor}"`);
    });

    it('never makes a banned claim', () => {
      const all = [
        article.metaTitle,
        article.metaDescription,
        article.excerpt,
        article.summaryHtml,
        article.bodyHtml,
        ...article.faq.flatMap((item) => [item.question, item.answer]),
        article.ctaSection.title,
        article.ctaSection.description,
      ].join('\n');
      for (const claim of BANNED_CLAIMS) expect(all).not.toMatch(claim);
    });

    it('has figures under 120 KB and 1200×630 cover and hero JPEGs', async () => {
      for (const figure of article.figures) {
        const file = join(root, 'public', figure.src);
        expect(existsSync(file)).toBe(true);
        expect(statSync(file).size).toBeLessThan(120 * 1024);
        const meta = await sharp(file).metadata();
        expect([meta.width, meta.height]).toEqual([figure.width, figure.height]);
        expect(html).toContain(figure.src);
      }
      for (const image of [article.coverImage, article.heroImage]) {
        const meta = await sharp(join(root, 'public', image)).metadata();
        expect([meta.width, meta.height]).toEqual([1200, 630]);
      }
    });

    it('has a complete Sanity JSON with the same author', () => {
      const payload = JSON.parse(read(`scripts/data/${article.slug}.json`));
      expect(payload.slug.current).toBe(article.slug);
      expect(payload.author._ref).toBe(article.author.id);
      expect(payload.seo.metaTitle).toBe(article.metaTitle);
      expect(payload.seo.metaDescription).toBe(article.metaDescription);
      expect(payload.geminiCoverPending).toBe(false);
      expect(payload.faq).toHaveLength(article.faq.length);
    });

    it('is registered for indexing, crawlers, sitemaps and llms files', () => {
      expect(hardcodedSeoPosts.some((post) => post.slug === article.slug)).toBe(true);
      expect(BLOG_FORCE_INDEX_SLUGS.has(article.slug)).toBe(true);
      expect(BLOG_HARDCODED_SEO_SLUGS.has(article.slug)).toBe(true);
      expect(shouldCrawlerIndexBlogSlug(article.slug)).toBe(true);
      expect(getCrawlerStubForSlug(article.slug)).toMatchObject({
        title: article.metaTitle,
        description: article.metaDescription,
      });
      expect(getCtrSeo(article.path)).toMatchObject({
        title: article.metaTitle,
        description: article.metaDescription,
      });

      const rewriteIndex = vercel.rewrites.findIndex((r) => r.source === article.path);
      expect(vercel.rewrites[rewriteIndex]?.destination).toBe(`/api/indexnow-key?__ssr=1&url=${article.path}`);
      const genericIndex = vercel.rewrites.findIndex((r) => r.source === '/blog/:slug');
      if (genericIndex > -1) expect(rewriteIndex).toBeLessThan(genericIndex);

      expect(sitemapScript).toContain(`path: '${article.path}'`);
      expect(sitemapScript).toContain(`'src/data/blog-${article.slug}.ts'`);
      expect(sitemapXml).toContain(`<loc>${article.url}</loc>`);
      expect(llms).toContain(`(${article.url})`);
      expect(ssrBundleCheck).toContain(`'${article.path}'`);
      if (article.contentSilo === 'industries') {
        expect(article.path).toBe(`/bionixus-industries/insights/${article.slug}`);
        expect((REDIRECT_HREF_REWRITES as Record<string, string>)[`/blog/${article.slug}`]).toBe(article.path);
        expect(getCtrSeo(`/blog/${article.slug}`)).toMatchObject({ title: article.metaTitle });
        expect(INDUSTRIES_INSIGHT_EDITORIAL_LINKS.some((link) => link.to === article.path)).toBe(true);
        expect(html).toContain('href="/bionixus-industries/insights"');
      } else {
        expect(llm).toContain(article.url);
      }
    });
  },
);
