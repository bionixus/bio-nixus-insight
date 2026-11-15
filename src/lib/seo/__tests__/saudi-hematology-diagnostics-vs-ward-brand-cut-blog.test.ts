import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { missingArticleRedirect } from '@/lib/missing-article-redirect';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import {
  countWords,
  SAUDI_HEMATOLOGY_WARD_BODY_HTML,
  SAUDI_HEMATOLOGY_WARD_COVER_IMAGE,
  SAUDI_HEMATOLOGY_WARD_COVER_IMAGE_ALT,
  SAUDI_HEMATOLOGY_WARD_DISPLAY_SUBTITLE,
  SAUDI_HEMATOLOGY_WARD_DISPLAY_TITLE,
  SAUDI_HEMATOLOGY_WARD_FAQ,
  SAUDI_HEMATOLOGY_WARD_HARDCODED_POST,
  SAUDI_HEMATOLOGY_WARD_HERO_IMAGE,
  SAUDI_HEMATOLOGY_WARD_HERO_IMAGE_ALT,
  SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
  SAUDI_HEMATOLOGY_WARD_META_TITLE,
  SAUDI_HEMATOLOGY_WARD_PATH,
  SAUDI_HEMATOLOGY_WARD_SLUG,
  SAUDI_HEMATOLOGY_WARD_TABLE_OF_CONTENTS,
  SAUDI_HEMATOLOGY_WARD_URL,
} from '@/data/blog-saudi-hematology-diagnostics-vs-ward-brand-cut';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');

type JsonLdNode = Record<string, unknown>;

let html = '';
let head = '';
let jsonLd: JsonLdNode[] = [];

beforeAll(async () => {
  HelmetProvider.canUseDOM = false;
  const result = await render(SAUDI_HEMATOLOGY_WARD_PATH, {
    pageType: 'blog-post',
    blogSlug: SAUDI_HEMATOLOGY_WARD_SLUG,
    blogPost: SAUDI_HEMATOLOGY_WARD_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/saudi-hematology-diagnostics-vs-ward-brand-cut', () => {
  it('server-renders one h1, the hub link, related hematology pages, and FAQ details', () => {
    const h1s = html.match(/<h1\b/g) ?? [];
    expect(h1s).toHaveLength(1);
    expect(html).toContain(SAUDI_HEMATOLOGY_WARD_DISPLAY_TITLE);
    expect(html).toContain(SAUDI_HEMATOLOGY_WARD_DISPLAY_SUBTITLE);
    expect(html).toContain('href="/healthcare-market-research"');
    expect(html).toContain('href="/account-level-market-research"');
    expect(html).toContain('href="/blog/hematology-market-research-saudi-arabia"');
    expect(html).toContain('href="/blog/car-t-saudi-arabia-market-research"');
    expect(html).toContain('href="/insights/top-hematology-market-research-companies-2026"');
    expect(html).toContain('mailto:admin@bionixus.com');
    for (const item of SAUDI_HEMATOLOGY_WARD_FAQ) {
      expect(html).toContain(item.question);
    }
  });

  it('puts the text-free hero on the page and the 1200x630 card on Open Graph and Twitter', () => {
    expect(html).toContain(SAUDI_HEMATOLOGY_WARD_HERO_IMAGE);
    expect(html).toContain(SAUDI_HEMATOLOGY_WARD_HERO_IMAGE_ALT);
    expect(head).toContain('property="og:title"');
    expect(head).toContain(SAUDI_HEMATOLOGY_WARD_META_TITLE);
    expect(head).toContain('property="og:description"');
    expect(head).toContain('property="og:image"');
    expect(head).toContain(SAUDI_HEMATOLOGY_WARD_COVER_IMAGE);
    expect(head).toContain(SAUDI_HEMATOLOGY_WARD_COVER_IMAGE_ALT);
    expect(head).toContain('name="twitter:card"');
    expect(head).toContain('summary_large_image');
    expect(head).toContain('name="twitter:title"');
    expect(head).toContain('name="twitter:description"');
    expect(head).toContain('name="twitter:image"');
  });

  it('keeps the title and description inside the SEO bounds and emits FAQPage plus BlogPosting', () => {
    expect(SAUDI_HEMATOLOGY_WARD_META_TITLE.length).toBeLessThanOrEqual(50);
    expect(SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION.length).toBeLessThanOrEqual(130);
    expect(SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION.length).toBeGreaterThanOrEqual(120);
    expect(getCtrSeo(SAUDI_HEMATOLOGY_WARD_PATH)).toEqual({
      title: SAUDI_HEMATOLOGY_WARD_META_TITLE,
      description: SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
    });
    expect(head).toContain(`rel="canonical" href="${SAUDI_HEMATOLOGY_WARD_URL}"`);
    expect(getCrawlerStubForSlug(SAUDI_HEMATOLOGY_WARD_SLUG)).toEqual({
      title: SAUDI_HEMATOLOGY_WARD_META_TITLE,
      description: SAUDI_HEMATOLOGY_WARD_META_DESCRIPTION,
    });

    const faq = jsonLd.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
    };
    const article = jsonLd.find((node) => node['@type'] === 'BlogPosting') as {
      headline: string;
      author: { name: string; jobTitle: string };
      dateModified: string;
    };
    expect(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text }))).toEqual(
      SAUDI_HEMATOLOGY_WARD_FAQ,
    );
    expect(article.headline).toBe(SAUDI_HEMATOLOGY_WARD_DISPLAY_TITLE);
    expect(article.author.name).toBe('Sarah Chen');
    expect(article.author.jobTitle).toBe('Global Research Manager');
    expect(article.dateModified.startsWith('2026-11-15')).toBe(true);
    for (const node of jsonLd) {
      expect(isValidSchemaNode(node)).toBe(true);
    }
    expect(countWords(SAUDI_HEMATOLOGY_WARD_BODY_HTML)).toBeGreaterThan(1200);
    const ids = [...SAUDI_HEMATOLOGY_WARD_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((match) => match[1]);
    expect(ids.slice(0, SAUDI_HEMATOLOGY_WARD_TABLE_OF_CONTENTS.length)).toEqual(
      SAUDI_HEMATOLOGY_WARD_TABLE_OF_CONTENTS.map((item) => item.anchor),
    );
  });

  it('does not name extra competitor firms, link to publishers, or make guarantee or ranking claims', () => {
    const blob = [
      SAUDI_HEMATOLOGY_WARD_BODY_HTML,
      JSON.stringify(SAUDI_HEMATOLOGY_WARD_FAQ),
      JSON.stringify(SAUDI_HEMATOLOGY_WARD_HARDCODED_POST.ctaSection),
    ].join('\n');
    expect(blob).not.toMatch(/grandviewresearch\.com|kenresearch\.com|mordorintelligence\.com|iqvia\.com|kantar\.com/i);
    expect(blob).not.toMatch(/\bMordor\b|Dawaa|TenderGulf|guaranteed|we guarantee|#1|\bbest\b|number one/i);
    expect(blob).not.toMatch(/\u2014/);
    expect(blob).toContain('118 clients');
    expect(blob).toContain('48 countries');
    expect(blob).toContain('2012');
    expect(blob).toContain('82,000+');
    expect(blob).toContain('3,200');
    expect(blob).toContain('127 studies in 2026');
    expect(blob).toContain('Grand View Research');
    expect(blob).toContain('Ken Research');
  });

  it('is registered for index, sitemap, llms.txt and the Sanity draft payload', async () => {
    expect(
      missingArticleRedirect({
        pathname: SAUDI_HEMATOLOGY_WARD_PATH,
        slug: SAUDI_HEMATOLOGY_WARD_SLUG,
        lookup: 'found',
        post: SAUDI_HEMATOLOGY_WARD_HARDCODED_POST,
      }),
    ).toBeNull();
    expect(hardcodedSeoPosts).toContain(SAUDI_HEMATOLOGY_WARD_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(SAUDI_HEMATOLOGY_WARD_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(SAUDI_HEMATOLOGY_WARD_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(SAUDI_HEMATOLOGY_WARD_SLUG)).toBe(true);
    expect(sitemapScript).toContain(
      `path: '${SAUDI_HEMATOLOGY_WARD_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-11-15'`,
    );
    expect(sitemapXml).toMatch(
      new RegExp(`<loc>${SAUDI_HEMATOLOGY_WARD_URL}</loc>\\s*<lastmod>2026-11-15</lastmod>`),
    );
    expect(llms).toContain(SAUDI_HEMATOLOGY_WARD_URL);
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(SAUDI_HEMATOLOGY_WARD_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);

    const payload = JSON.parse(
      readFileSync(join(root, 'scripts/data/saudi-hematology-diagnostics-vs-ward-brand-cut.json'), 'utf8'),
    ) as Record<string, unknown>;
    expect(payload.author).toMatchObject({
      _type: 'reference',
      _ref: '498ba300-bfab-4a76-b256-b2139d4d66fe',
      name: 'Sarah Chen',
      jobTitle: 'Global Research Manager',
    });
    expect(payload.faq).toHaveLength(7);
    expect(payload.sanityProjectId).toBe('h2whvvpo');
    expect(String(payload.bodyHtml)).toContain('USD 52.6 million');
    const publishScript = readFileSync(join(root, 'scripts/publish-saudi-hematology-ward.mjs'), 'utf8');
    expect(publishScript).toContain('498ba300-bfab-4a76-b256-b2139d4d66fe');
    expect(publishScript).toContain('process.exit(2)');

    for (const file of [SAUDI_HEMATOLOGY_WARD_HERO_IMAGE, SAUDI_HEMATOLOGY_WARD_COVER_IMAGE]) {
      const abs = join(root, 'public', file);
      expect(existsSync(abs)).toBe(true);
      expect(statSync(abs).size).toBeGreaterThan(5_000);
    }
    const hero = await sharp(join(root, 'public', SAUDI_HEMATOLOGY_WARD_HERO_IMAGE)).metadata();
    const cover = await sharp(join(root, 'public', SAUDI_HEMATOLOGY_WARD_COVER_IMAGE)).metadata();
    expect(hero.width).toBe(1920);
    expect(hero.height).toBe(1080);
    expect(cover.width).toBe(1200);
    expect(cover.height).toBe(630);
  });
});
