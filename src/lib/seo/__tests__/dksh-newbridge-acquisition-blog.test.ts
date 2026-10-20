import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { missingArticleRedirect } from '@/lib/missing-article-redirect';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import {
  DKSH_NEWBRIDGE_DATE,
  DKSH_NEWBRIDGE_FAQ,
  DKSH_NEWBRIDGE_FOCUS_KEYWORD,
  DKSH_NEWBRIDGE_HARDCODED_POST,
  DKSH_NEWBRIDGE_KEYWORDS,
  DKSH_NEWBRIDGE_META_DESCRIPTION,
  DKSH_NEWBRIDGE_META_TITLE,
  DKSH_NEWBRIDGE_OFFICIAL_SOURCE,
  DKSH_NEWBRIDGE_PATH,
  DKSH_NEWBRIDGE_SLUG,
  DKSH_NEWBRIDGE_URL,
} from '@/data/blog-dksh-newbridge-acquisition-mena-launch-market-access';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  redirects?: Array<{ source: string; destination: string; statusCode?: number }>;
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');

type JsonLdNode = Record<string, unknown>;

function text(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
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
  const result = await render(DKSH_NEWBRIDGE_PATH, {
    pageType: 'blog-post',
    blogSlug: DKSH_NEWBRIDGE_SLUG,
    blogPost: DKSH_NEWBRIDGE_HARDCODED_POST,
    blogPostLookup: 'found',
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  head = [
    result.helmetData?.title?.toString() ?? '',
    result.helmetData?.meta?.toString() ?? '',
    result.helmetData?.link?.toString() ?? '',
    result.helmetData?.script?.toString() ?? '',
  ].join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')) as JsonLdNode,
  );
});

describe('/blog/dksh-newbridge-acquisition-mena-launch-market-access', () => {
  it('does not 301 this slug to the desmoid article', () => {
    expect(
      vercel.redirects?.some(
        (row) =>
          row.source.includes(DKSH_NEWBRIDGE_SLUG) ||
          row.destination === '/blog/desmoid-tumors-nirogacestat-pharma-market-access',
      ),
    ).toBe(false);
    expect(
      missingArticleRedirect({
        pathname: DKSH_NEWBRIDGE_PATH,
        slug: DKSH_NEWBRIDGE_SLUG,
        lookup: 'found',
        post: DKSH_NEWBRIDGE_HARDCODED_POST,
      }),
    ).toBeNull();
  });

  it('is a hardcoded, force-indexed, server-rendered post dated 2026-10-20', () => {
    expect(hardcodedSeoPosts).toContain(DKSH_NEWBRIDGE_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(DKSH_NEWBRIDGE_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(DKSH_NEWBRIDGE_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(DKSH_NEWBRIDGE_SLUG)).toBe(true);
    expect(getCrawlerStubForSlug(DKSH_NEWBRIDGE_SLUG)?.title).toBe(DKSH_NEWBRIDGE_META_TITLE);
    expect(DKSH_NEWBRIDGE_HARDCODED_POST.publishedAtIso?.startsWith(DKSH_NEWBRIDGE_DATE)).toBe(true);
    expect(DKSH_NEWBRIDGE_HARDCODED_POST.updatedAtIso?.startsWith(DKSH_NEWBRIDGE_DATE)).toBe(true);
    expect(DKSH_NEWBRIDGE_DATE < '2026-10-21').toBe(true);
  });

  it('uses the front-matter title, description, slug and keywords', () => {
    expect(getCtrSeo(DKSH_NEWBRIDGE_PATH)).toEqual({
      title: DKSH_NEWBRIDGE_META_TITLE,
      description: DKSH_NEWBRIDGE_META_DESCRIPTION,
    });
    expect(head).toContain(`<title data-rh="true">${DKSH_NEWBRIDGE_META_TITLE}</title>`);
    expect(head).toContain(`content="${DKSH_NEWBRIDGE_META_DESCRIPTION}"`);
    expect(head).toContain(`rel="canonical" href="${DKSH_NEWBRIDGE_URL}"`);
    for (const keyword of DKSH_NEWBRIDGE_KEYWORDS) {
      expect(DKSH_NEWBRIDGE_HARDCODED_POST.tags).toContain(keyword);
    }
    expect(DKSH_NEWBRIDGE_KEYWORDS[0]).toBe(DKSH_NEWBRIDGE_FOCUS_KEYWORD);
    expect(html).toContain('href="/healthcare-market-research"');
    expect(html).toContain(DKSH_NEWBRIDGE_HARDCODED_POST.title);
    expect((html.match(/<h1\b/g) ?? []).length).toBe(1);
  });

  it('renders the FAQ with details/summary and FAQPage schema, plus the fact-check table', () => {
    expect(html).toContain('Fact-check table');
    expect(html).toContain('USD 390 million');
    expect(html).toContain(DKSH_NEWBRIDGE_OFFICIAL_SOURCE);
    expect(html).toContain('<table');
    const details = html.match(/<details[\s>]/g) ?? [];
    expect(details.length).toBeGreaterThanOrEqual(DKSH_NEWBRIDGE_FAQ.length);
    for (const item of DKSH_NEWBRIDGE_FAQ) {
      expect(text(html)).toContain(item.question);
      expect(text(html)).toContain(item.answer.slice(0, 80));
    }
    const faq = jsonLd.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity?: Array<{ name?: string; acceptedAnswer?: { text?: string } }>;
    };
    expect(faq?.mainEntity?.map((entry) => entry.name)).toEqual(
      DKSH_NEWBRIDGE_FAQ.map((item) => item.question),
    );
    expect(head).toContain('"dateModified":"2026-10-20');
  });

  it('keeps competitor links, client names, guarantees, Dr. and São Paulo out of the article', () => {
    const body = DKSH_NEWBRIDGE_HARDCODED_POST.body as string;
    expect(body).not.toMatch(/iqvia\.com|kantar\.com|nielsen\.com|ipsos\.com/i);
    expect(body).not.toMatch(/\bDr\.?\s/);
    expect(body).not.toMatch(/São Paulo|Sao Paulo/i);
    expect(body).not.toMatch(/guarantee/i);
    expect(html).not.toMatch(/São Paulo|Sao Paulo/i);
    expect(DKSH_NEWBRIDGE_HARDCODED_POST.authorName).toBe('Ivona Gunjova');
    expect(DKSH_NEWBRIDGE_HARDCODED_POST.authorTitle).toBe('Global Research Manager');
    expect(head).not.toMatch(/Dr\.?\s+Ivona|Dr\.?\s+Mohammad/i);
  });

  it('is in the sitemap generator, the committed sitemap, and the SSR rewrite', () => {
    expect(sitemapScript).toContain(DKSH_NEWBRIDGE_PATH);
    expect(sitemapScript).toContain("lastmod: '2026-10-20'");
    expect(sitemapXml).toContain(`<loc>${DKSH_NEWBRIDGE_URL}</loc>`);
    expect(sitemapXml).toContain('<lastmod>2026-10-20</lastmod>');
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(DKSH_NEWBRIDGE_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });
});
