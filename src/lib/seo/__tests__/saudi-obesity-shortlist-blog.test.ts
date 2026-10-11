import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import {
  SAUDI_OBESITY_SHORTLIST,
  SAUDI_OBESITY_SHORTLIST_BODY_HTML,
  SAUDI_OBESITY_SHORTLIST_COVER_IMAGE,
  SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT,
  SAUDI_OBESITY_SHORTLIST_DISPLAY_SUBTITLE,
  SAUDI_OBESITY_SHORTLIST_DISPLAY_TITLE,
  SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML,
  SAUDI_OBESITY_SHORTLIST_FAQ,
  SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
  SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION,
  SAUDI_OBESITY_SHORTLIST_META_TITLE,
  SAUDI_OBESITY_SHORTLIST_PATH,
  SAUDI_OBESITY_SHORTLIST_SLUG,
  SAUDI_OBESITY_SHORTLIST_TABLE_OF_CONTENTS,
  SAUDI_OBESITY_SHORTLIST_TAGS,
  SAUDI_OBESITY_SHORTLIST_URL,
  SAUDI_OBESITY_SHORTLIST_WORD_COUNT,
  countWords,
} from '@/data/blog-saudi-obesity-market-research-shortlist';

const PHRASE_WHO = 'who does obesity market research in saudi arabia';
const PHRASE_GLP1 = 'obesity glp-1 market research saudi arabia';
const SAO_PAULO_PHRASE = 'in the process of opening a São Paulo office by the end of 2026';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');

// Parsed JSON-LD is untyped JSON read by property path in the assertions below.
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

let html = '';
let head = '';
let jsonLd: JsonLdNode[] = [];

beforeAll(async () => {
  // jsdom exposes `document`, which switches Helmet to client mode and leaves the SSR context empty.
  HelmetProvider.canUseDOM = false;
  const result = await render(SAUDI_OBESITY_SHORTLIST_PATH, {
    pageType: 'blog-post',
    blogSlug: SAUDI_OBESITY_SHORTLIST_SLUG,
    blogPost: SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/who-does-obesity-market-research-saudi-arabia: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(SAUDI_OBESITY_SHORTLIST_DISPLAY_TITLE);
    expect(h1s[0]).toContain(SAUDI_OBESITY_SHORTLIST_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE_WHO);
    expect(h1s[0].toLowerCase()).toContain(PHRASE_GLP1);
    const visible = text(html);
    expect(visible).toContain('Obesity GLP-1 market research Saudi Arabia: which firms are on the 2026 shortlist?');
    expect(visible).toContain('Euromonitor International');
    expect(visible).toContain('References');
    for (const item of SAUDI_OBESITY_SHORTLIST_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(2500);
  });

  it('renders a visible breadcrumb trail that matches the BreadcrumbList', () => {
    const nav = /<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/.exec(html)?.[0] ?? '';
    expect(text(nav)).toBe('Home / Blog / Saudi obesity research shortlist');
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Blog',
      'Saudi obesity research shortlist',
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${SAUDI_OBESITY_SHORTLIST_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${SAUDI_OBESITY_SHORTLIST_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${SAUDI_OBESITY_SHORTLIST_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([SAUDI_OBESITY_SHORTLIST_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([SAUDI_OBESITY_SHORTLIST_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-11T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-11T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toHaveLength(1);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(SAUDI_OBESITY_SHORTLIST_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([SAUDI_OBESITY_SHORTLIST_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT]);
  });
});

describe('/blog/who-does-obesity-market-research-saudi-arabia: JSON-LD', () => {
  const byType = (type: string) => jsonLd.filter((node) => node['@type'] === type);

  it('emits only valid, parseable nodes of every required type', () => {
    const types = jsonLd.map((node) => node['@type']);
    for (const type of ['BlogPosting', 'BreadcrumbList', 'WebPage', 'Organization', 'FAQPage', 'ItemList']) {
      expect(types).toContain(type);
    }
    for (const node of jsonLd) {
      expect(node['@context']).toBe('https://schema.org');
      expect(isValidSchemaNode(node)).toBe(true);
    }
  });

  it('fills every BlogPosting property, with an ImageObject cover linked to the WebPage', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(SAUDI_OBESITY_SHORTLIST_DISPLAY_TITLE);
    expect(article.description).toBe(SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-11T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-11T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Market Research');
    expect(article.keywords).toBe(SAUDI_OBESITY_SHORTLIST_TAGS.join(', '));
    expect(article.wordCount).toBe(SAUDI_OBESITY_SHORTLIST_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${SAUDI_OBESITY_SHORTLIST_URL}#webpage`,
      url: SAUDI_OBESITY_SHORTLIST_URL,
    });
    expect(article.image).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${SAUDI_OBESITY_SHORTLIST_URL}#primaryimage`,
      url: `https://www.bionixus.com${SAUDI_OBESITY_SHORTLIST_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: SAUDI_OBESITY_SHORTLIST_COVER_IMAGE_ALT,
    });
    expect(article.author['@type']).toBe('Person');
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${SAUDI_OBESITY_SHORTLIST_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${SAUDI_OBESITY_SHORTLIST_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${SAUDI_OBESITY_SHORTLIST_URL}#breadcrumb` });
  });

  it('keeps the Organization node to the verified fact set', () => {
    const orgs = byType('Organization');
    const pageOrg = orgs.find((node) => typeof node.description === 'string' && node.description.includes('127 studies'));
    expect(pageOrg).toBeDefined();
    expect(pageOrg!['@id']).toBe('https://www.bionixus.com/#organization');
    expect(pageOrg!.foundingDate).toBe('2012');
    for (const fact of ['118 clients', '48 countries', '127 studies', '3,200 physicians']) {
      expect(pageOrg!.description).toContain(fact);
    }
    const localities = pageOrg!.address.map((address: JsonLdNode) => address.addressLocality);
    expect(localities).toEqual(['Sheridan', 'London', 'Sheikh Zayed', 'Dubai']);
    expect(pageOrg!.description).toContain(SAO_PAULO_PHRASE);
    const excludedMaps = GOOGLE_OFFICES.filter((office) => office.id === 'sa' || office.id === 'kw').map(
      (office) => office.mapsUrl,
    );
    for (const url of excludedMaps) expect(pageOrg!.sameAs).not.toContain(url);
    expect(pageOrg!.sameAs).toContain('https://www.linkedin.com/company/bionixus/');
  });

  it('mentions São Paulo only as an office being opened, never as an address or Place', () => {
    const countMentions = (value: string) => value.split('São Paulo').length - 1;
    const countPhrase = (value: string) => value.split(SAO_PAULO_PHRASE).length - 1;
    const visible = text(html);
    expect(countPhrase(visible)).toBe(1);
    expect(countMentions(visible)).toBe(countPhrase(visible));
    const graph = JSON.stringify(jsonLd);
    expect(countPhrase(graph)).toBeGreaterThanOrEqual(1);
    expect(countMentions(graph)).toBe(countPhrase(graph));
    const places = jsonLd.flatMap((node) => [...JSON.stringify(node).matchAll(/"addressLocality":"([^"]+)"/g)]);
    expect(places.map((match) => match[1])).not.toContain('São Paulo');
  });

  it('keeps São Paulo out of the sitewide Organization block this page also ships', () => {
    expect(JSON.stringify(buildCanonicalOrganization())).not.toContain('São Paulo');
    expect(indexHtml).not.toContain('São Paulo');
  });

  it('mirrors the visible FAQ exactly in FAQPage', () => {
    const [faq] = byType('FAQPage');
    expect(
      faq.mainEntity.map((question: JsonLdNode) => ({
        question: question.name,
        answer: question.acceptedAnswer.text,
      })),
    ).toEqual(SAUDI_OBESITY_SHORTLIST_FAQ);
    expect(SAUDI_OBESITY_SHORTLIST_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(SAUDI_OBESITY_SHORTLIST_FAQ.length).toBeLessThanOrEqual(8);
  });

  it('lists the same providers in the ItemList and the comparison table', () => {
    const [itemList] = byType('ItemList');
    const names = itemList.itemListElement.map((entry: JsonLdNode) => entry.item.name);
    expect(names).toEqual(SAUDI_OBESITY_SHORTLIST.map((entry) => entry.name));
    expect(itemList.itemListElement[0].item['@id']).toBe('https://www.bionixus.com/#organization');
    const table = /<table>[\s\S]*?<\/table>/.exec(SAUDI_OBESITY_SHORTLIST_BODY_HTML)?.[0] ?? '';
    const firstCells = [...table.matchAll(/<tr><td>([^<]+)<\/td>/g)].map((m) => m[1]);
    expect(firstCells).toEqual(names);
  });
});

describe('/blog/who-does-obesity-market-research-saudi-arabia: copy rules', () => {
  const allCopy = [
    SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML,
    SAUDI_OBESITY_SHORTLIST_BODY_HTML,
    JSON.stringify(SAUDI_OBESITY_SHORTLIST_FAQ),
    JSON.stringify(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.ctaSection),
    JSON.stringify(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(SAUDI_OBESITY_SHORTLIST_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(SAUDI_OBESITY_SHORTLIST_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(getCtrSeo(SAUDI_OBESITY_SHORTLIST_PATH)).toEqual({
      title: SAUDI_OBESITY_SHORTLIST_META_TITLE,
      description: SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(SAUDI_OBESITY_SHORTLIST_SLUG)).toEqual({
      title: SAUDI_OBESITY_SHORTLIST_META_TITLE,
      description: SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION,
    });
  });

  it('places the exact target phrases in the title, meta, answer-first summary and H2s', () => {
    const summary = text(SAUDI_OBESITY_SHORTLIST_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    const h2s = [...SAUDI_OBESITY_SHORTLIST_BODY_HTML.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
      text(m[1]).toLowerCase(),
    );
    expect(SAUDI_OBESITY_SHORTLIST_META_TITLE.toLowerCase()).toContain(PHRASE_WHO);
    for (const field of [SAUDI_OBESITY_SHORTLIST_META_DESCRIPTION, summary]) {
      expect(field.toLowerCase()).toContain(PHRASE_WHO);
      expect(field.toLowerCase()).toContain(PHRASE_GLP1);
    }
    expect(h2s.some((h2) => h2.includes(PHRASE_WHO))).toBe(true);
    expect(h2s.some((h2) => h2.includes(PHRASE_GLP1))).toBe(true);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...SAUDI_OBESITY_SHORTLIST_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(SAUDI_OBESITY_SHORTLIST_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('states no prices, no Al Khobar or Kuwait office, no client names and never credits Alsaadany', () => {
    expect(allCopy).not.toMatch(/Khobar/i);
    expect(allCopy).not.toMatch(/Kuwait office|Salmiya/i);
    expect(allCopy).not.toMatch(/\$\s?\d[\d,]*(?:k|,000)/i);
    expect(allCopy).not.toMatch(/Alsaadany|السعداني/i);
    expect(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.authorName ?? '').not.toMatch(/Alsaadany/i);
  });

  it('opens external citations in a new tab and nofollows vendor pages', () => {
    const external = [...SAUDI_OBESITY_SHORTLIST_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(30);
    for (const [, href, attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
      if (/euromonitor|grandviewresearch|imarcgroup|kenresearch|6wresearch|iqvia|ipsos/.test(href)) {
        expect(attrs).toContain('nofollow');
      }
    }
  });
});

describe('/blog/who-does-obesity-market-research-saudi-arabia: registration', () => {
  it('is a hardcoded, force-indexed post', () => {
    expect(hardcodedSeoPosts).toContain(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(SAUDI_OBESITY_SHORTLIST_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(SAUDI_OBESITY_SHORTLIST_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(SAUDI_OBESITY_SHORTLIST_SLUG)).toBe(true);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(SAUDI_OBESITY_SHORTLIST_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) => rewrite.source === '/blog/:slug' && rewrite.destination === '/api/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${SAUDI_OBESITY_SHORTLIST_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt', () => {
    expect(sitemapScript).toContain(`path: '${SAUDI_OBESITY_SHORTLIST_PATH}'`);
    expect(sitemapXml).toContain(`<loc>${SAUDI_OBESITY_SHORTLIST_URL}</loc>`);
    expect(llms).toContain(SAUDI_OBESITY_SHORTLIST_URL);
  });
});
