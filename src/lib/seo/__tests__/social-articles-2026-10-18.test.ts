import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { ALSAADANY_AUTHOR } from '@/data/editorialAuthors';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { SOCIAL_ARTICLES_2026_10_18 } from '@/data/social-articles-2026-10-18';
import { SOCIAL_AUTHOR_NAME, SOCIAL_AUTHOR_TITLE } from '@/data/social-article-author';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { canonicalRedirectTarget } from '../../../../seo-noise-query.mjs';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string }[];
};
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const packageJson = readFileSync(join(root, 'package.json'), 'utf8');
const libCtr = readFileSync(join(root, 'lib/ctr-seo-overrides.mjs'), 'utf8');
const serverCtr = readFileSync(join(root, 'src/server/ctr-seo-overrides.js'), 'utf8');

type JsonLdNode = Record<string, unknown>;

function decodeEntities(value: string): string {
  return value
    .replace(/&#x27;|&#39;/gi, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function text(html: string): string {
  return decodeEntities(
    html
      .replace(/<\/?(?:a|strong|em)\b[^>]*>/gi, '')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function metaContent(head: string, attr: 'property' | 'name', key: string): string[] {
  const re = new RegExp(`<meta[^>]*${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g');
  return [...head.matchAll(re)].map((match) => decodeEntities(/content="([^"]*)"/.exec(match[0])?.[1] ?? ''));
}

describe('18 October 2026 social articles', () => {
  it('uses Mohammad Alsaadany without a Dr. prefix and leaves the roster title unchanged', () => {
    expect(SOCIAL_AUTHOR_NAME).toBe('Mohammad Alsaadany');
    expect(SOCIAL_AUTHOR_TITLE).toBe('Marketing and Digital Transformation Director at BioNixus Group');
    expect(SOCIAL_AUTHOR_TITLE).not.toMatch(/Dr\.?/);
    expect(ALSAADANY_AUTHOR.name).toBe('Mohammad Alsaadany');
    expect(ALSAADANY_AUTHOR.jobTitle).toBe('AMEA Director (APAC, Middle East and Africa)');
    expect(SOCIAL_ARTICLES_2026_10_18).toHaveLength(5);
    expect(packageJson).toContain(
      '"sanity:blog:social-2026-10-18": "node scripts/publish-social-articles-2026-10-18.mjs"',
    );
  });

  it('registers Express SSR rewrites ahead of /blog/:slug and keeps both CTR files in sync', () => {
    const slugRule = vercel.rewrites.findIndex((rewrite) => rewrite.source === '/blog/:slug');
    expect(slugRule).toBeGreaterThan(0);
    expect(JSON.stringify(vercel.rewrites)).not.toContain('/api/blog/:slug?industriesInsight=1');
    for (const article of SOCIAL_ARTICLES_2026_10_18) {
      const index = vercel.rewrites.findIndex((rewrite) => rewrite.source === `/blog/${article.slug}`);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(slugRule);
      expect(vercel.rewrites[index]?.destination).toBe(
        `/api/indexnow-key?__ssr=1&url=/blog/${article.slug}`,
      );
      expect(libCtr).toContain(article.seoMetaTitle);
      expect(serverCtr).toContain(article.seoMetaTitle);
      expect(libCtr).toContain(article.seoMetaDescription);
      expect(serverCtr).toContain(article.seoMetaDescription);
      expect(sitemapXml).toContain(`<loc>https://www.bionixus.com/blog/${article.slug}</loc>`);
      expect(sitemapScript).toContain(`lastmod: '${article.publishedAtIso?.slice(0, 10)}'`);
      expect(llms).toContain(`https://www.bionixus.com/blog/${article.slug}`);
      expect(BLOG_FORCE_INDEX_SLUGS.has(article.slug)).toBe(true);
      expect(BLOG_HARDCODED_SEO_SLUGS.has(article.slug)).toBe(true);
      expect(hardcodedSeoPosts.some((post) => post.slug === article.slug)).toBe(true);
      expect(readFileSync(join(root, 'public/home-staging.html'), 'utf8')).not.toContain(article.slug);
    }
  });
});

describe.each(SOCIAL_ARTICLES_2026_10_18.map((article) => [article.slug, article] as const))(
  '/blog/%s',
  (slug, article) => {
    let html = '';
    let head = '';
    let jsonLd: JsonLdNode[] = [];

    beforeAll(async () => {
      HelmetProvider.canUseDOM = false;
      const result = await render(`/blog/${slug}`, {
        pageType: 'blog-post',
        blogSlug: slug,
        blogPost: article,
        relatedPosts: { related: [], prev: null, next: null },
      });
      html = result.html;
      const helmet = result.helmetData;
      head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
      jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
        (match) => JSON.parse(match[1]) as JsonLdNode,
      );
    }, 120_000);

    it('serves one h1, the canonical URL, the byline and the cited sources', () => {
      const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((match) => text(match[0]));
      expect(h1s).toHaveLength(1);
      expect(h1s[0]).toContain(article.title);
      expect(decodeEntities(head)).toContain(`<title data-rh="true">${article.seoMetaTitle}</title>`);
      expect(metaContent(head, 'name', 'description')).toEqual([article.seoMetaDescription]);
      expect(head).toContain(`rel="canonical" href="https://www.bionixus.com/blog/${slug}"`);
      expect(head).not.toContain('?ref=');
      expect(text(html)).toContain(SOCIAL_AUTHOR_NAME);
      expect(text(html)).toContain(SOCIAL_AUTHOR_TITLE);
      expect(html).not.toMatch(/Dr\.?\s*Mohammad/i);
      expect(html).not.toMatch(/status:\s*DRAFT/i);
      expect(html).not.toContain('seo_title');
      expect(text(`${article.title} ${html}`)).toContain(article.title);
      const body = String(article.body);
      const sourceUrls = article.sources.flatMap((line) =>
        [...line.matchAll(/https?:\/\/[^\s)]+/g)].map((match) => match[0].replace(/[.,]+$/, '')),
      );
      expect(sourceUrls.length).toBeGreaterThan(0);
      for (const url of sourceUrls) {
        const encoded = url.replace(/&/g, '&amp;');
        expect(body.includes(url) || body.includes(encoded)).toBe(true);
      }
      const ref = canonicalRedirectTarget(`/blog/${slug}?ref=linkedin`);
      expect(ref.changed).toBe(false);
      expect(ref.full).toBe(`/blog/${slug}?ref=linkedin`);
    });

    it('emits FAQPage JSON-LD from the article FAQ without a second FAQ block', () => {
      const faq = jsonLd.find((node) => node['@type'] === 'FAQPage');
      const mainEntity = faq?.mainEntity as { name?: string; acceptedAnswer?: { text?: string } }[];
      expect(mainEntity?.map((item) => item.name)).toEqual(article.faq?.map((item) => item.question));
      expect(mainEntity?.map((item) => item.acceptedAnswer?.text)).toEqual(article.faq?.map((item) => item.answer));
      expect(html.match(/<h2 id="frequently-asked-questions">/g)).toHaveLength(1);
      expect(html).not.toContain('aria-label="Frequently asked questions"');
      for (const item of article.faq ?? []) {
        expect(text(html)).toContain(item.question);
        expect(text(html)).toContain(item.answer);
      }
    });
  },
);
