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
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import {
  SAUDI_DIABETES_SWITCHING_BODY_HTML,
  SAUDI_DIABETES_SWITCHING_COVER_IMAGE,
  SAUDI_DIABETES_SWITCHING_COVER_IMAGE_ALT,
  SAUDI_DIABETES_SWITCHING_DISPLAY_SUBTITLE,
  SAUDI_DIABETES_SWITCHING_DISPLAY_TITLE,
  SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML,
  SAUDI_DIABETES_SWITCHING_FAQ,
  SAUDI_DIABETES_SWITCHING_HARDCODED_POST,
  SAUDI_DIABETES_SWITCHING_HERO_IMAGE,
  SAUDI_DIABETES_SWITCHING_HERO_IMAGE_ALT,
  SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
  SAUDI_DIABETES_SWITCHING_META_TITLE,
  SAUDI_DIABETES_SWITCHING_PATH,
  SAUDI_DIABETES_SWITCHING_SLUG,
  SAUDI_DIABETES_SWITCHING_TABLE_OF_CONTENTS,
  SAUDI_DIABETES_SWITCHING_URL,
  countWords,
} from '@/data/blog-saudi-diabetes-syndicated-vs-hospital-switching';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');

type JsonLdNode = Record<string, unknown>;

function text(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

let html = '';
let head = '';
let jsonLd: JsonLdNode[] = [];

beforeAll(async () => {
  HelmetProvider.canUseDOM = false;
  const result = await render(SAUDI_DIABETES_SWITCHING_PATH, {
    pageType: 'blog-post',
    blogSlug: SAUDI_DIABETES_SWITCHING_SLUG,
    blogPost: SAUDI_DIABETES_SWITCHING_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/saudi-diabetes-syndicated-vs-hospital-switching', () => {
  it('server-renders one h1, the hub link, the diabetes report, and FAQ details', () => {
    const h1s = html.match(/<h1\b/g) ?? [];
    expect(h1s).toHaveLength(1);
    expect(html).toContain(SAUDI_DIABETES_SWITCHING_DISPLAY_TITLE);
    expect(html).toContain(SAUDI_DIABETES_SWITCHING_DISPLAY_SUBTITLE);
    expect(html).toContain('href="/healthcare-market-research"');
    expect(html).toContain('href="/market-reports/saudi-arabia-diabetes-market-report"');
    expect(html).toContain('href="/account-level-market-research"');
    expect(html).toContain('mailto:admin@bionixus.com');
    expect(html).toContain('23.1%');
    expect(html).toContain('5,344.6 thousand');
    expect(html).toContain('24,983.1 thousand');
    expect(html).toContain('Laura McConaughey');
    expect(html).toContain('Global Research Manager');
    for (const item of SAUDI_DIABETES_SWITCHING_FAQ) {
      expect(html).toContain(`<summary`);
      expect(html).toContain(item.question);
      expect(html).toContain(item.answer);
    }
    const opening = text(
      `${SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML} ${SAUDI_DIABETES_SWITCHING_BODY_HTML}`,
    )
      .split(/\s+/)
      .slice(0, 200)
      .join(' ');
    expect(opening).toContain('healthcare market research');
    expect(SAUDI_DIABETES_SWITCHING_BODY_HTML.indexOf('href="/healthcare-market-research"')).toBeLessThan(800);
  });

  it('uses the navy-gold cover on social tags and the text-free hero on the page', () => {
    expect(html).toContain(`src="${SAUDI_DIABETES_SWITCHING_COVER_IMAGE}"`);
    expect(html).toContain(SAUDI_DIABETES_SWITCHING_COVER_IMAGE_ALT);
    expect(SAUDI_DIABETES_SWITCHING_HARDCODED_POST.ogImage).toBe(SAUDI_DIABETES_SWITCHING_COVER_IMAGE);
    expect(head).toContain(SAUDI_DIABETES_SWITCHING_COVER_IMAGE);
    expect(head).toContain(SAUDI_DIABETES_SWITCHING_COVER_IMAGE_ALT);
    for (const file of [SAUDI_DIABETES_SWITCHING_HERO_IMAGE, SAUDI_DIABETES_SWITCHING_COVER_IMAGE]) {
      const abs = join(root, 'public', file);
      expect(existsSync(abs)).toBe(true);
      expect(statSync(abs).size).toBeGreaterThan(5_000);
    }
  });

  it('keeps the title and description inside the SEO bounds and emits FAQPage plus BlogPosting', async () => {
    expect(SAUDI_DIABETES_SWITCHING_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(SAUDI_DIABETES_SWITCHING_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(SAUDI_DIABETES_SWITCHING_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(SAUDI_DIABETES_SWITCHING_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(getCtrSeo(SAUDI_DIABETES_SWITCHING_PATH)).toEqual({
      title: SAUDI_DIABETES_SWITCHING_META_TITLE,
      description: SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
    });
    expect(head).toContain(`rel="canonical" href="${SAUDI_DIABETES_SWITCHING_URL}"`);
    expect(getCrawlerStubForSlug(SAUDI_DIABETES_SWITCHING_SLUG)).toEqual({
      title: SAUDI_DIABETES_SWITCHING_META_TITLE,
      description: SAUDI_DIABETES_SWITCHING_META_DESCRIPTION,
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
      SAUDI_DIABETES_SWITCHING_FAQ,
    );
    expect(article.headline).toBe(SAUDI_DIABETES_SWITCHING_DISPLAY_TITLE);
    expect(article.author.name).toBe('Laura McConaughey');
    expect(article.author.jobTitle).toBe('Global Research Manager');
    expect(article.dateModified.startsWith('2026-11-02')).toBe(true);
    for (const node of jsonLd) {
      expect(isValidSchemaNode(node)).toBe(true);
    }
    expect(countWords(SAUDI_DIABETES_SWITCHING_BODY_HTML)).toBeGreaterThan(1200);
    const ids = [...SAUDI_DIABETES_SWITCHING_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(ids.slice(0, SAUDI_DIABETES_SWITCHING_TABLE_OF_CONTENTS.length)).toEqual(
      SAUDI_DIABETES_SWITCHING_TABLE_OF_CONTENTS.map((item) => item.anchor),
    );
  });

  it('does not add competitor backlinks, client names, guarantee claims, or number-one claims', () => {
    const blob = [
      SAUDI_DIABETES_SWITCHING_BODY_HTML,
      SAUDI_DIABETES_SWITCHING_EXECUTIVE_SUMMARY_HTML,
      JSON.stringify(SAUDI_DIABETES_SWITCHING_FAQ),
      JSON.stringify(SAUDI_DIABETES_SWITCHING_HARDCODED_POST.ctaSection),
    ].join('\n');
    expect(blob).not.toMatch(/imarcgroup\.com|researchandmarkets\.com|iqvia\.com|kantar\.com/i);
    expect(blob).not.toMatch(/guaranteed|we guarantee|#1|number one|market leader/i);
    expect(blob).toContain('118 clients');
    expect(blob).toContain('48 countries');
    expect(blob).toContain('2012');
    expect(blob).toContain('82,000+');
    expect(blob).toContain('3,200');
  });

  it('is registered for index, sitemap, llms.txt and the Sanity draft payload', async () => {
    expect(hardcodedSeoPosts).toContain(SAUDI_DIABETES_SWITCHING_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(SAUDI_DIABETES_SWITCHING_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(SAUDI_DIABETES_SWITCHING_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(SAUDI_DIABETES_SWITCHING_SLUG)).toBe(true);
    expect(sitemapScript).toContain(
      `path: '${SAUDI_DIABETES_SWITCHING_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-11-02'`,
    );
    expect(sitemapXml).toMatch(
      new RegExp(`<loc>${SAUDI_DIABETES_SWITCHING_URL}</loc>\\s*<lastmod>2026-11-02</lastmod>`),
    );
    expect(llms).toContain(SAUDI_DIABETES_SWITCHING_URL);
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(SAUDI_DIABETES_SWITCHING_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);

    const payload = JSON.parse(
      readFileSync(join(root, 'scripts/data/saudi-diabetes-syndicated-vs-hospital-switching.json'), 'utf8'),
    ) as Record<string, unknown>;
    expect(payload.author).toMatchObject({
      _type: 'reference',
      _ref: '5373a02d-e67d-4415-9739-33ee8f4da7e2',
      name: 'Laura McConaughey',
      jobTitle: 'Global Research Manager',
    });
    expect(payload.faq).toHaveLength(7);
    expect(payload.sanityProjectId).toBe('h2whvvpo');
    expect(String(payload.bodyHtml)).toContain('5,344.6 thousand');
    const publishScript = readFileSync(join(root, 'scripts/publish-saudi-diabetes-switching.mjs'), 'utf8');
    expect(publishScript).toContain('5373a02d-e67d-4415-9739-33ee8f4da7e2');
    expect(publishScript).toContain('process.exit(2)');

    const cover = await sharp(join(root, 'public', SAUDI_DIABETES_SWITCHING_COVER_IMAGE)).metadata();
    expect(cover.width).toBe(1200);
    expect(cover.height).toBe(630);
  });
});
