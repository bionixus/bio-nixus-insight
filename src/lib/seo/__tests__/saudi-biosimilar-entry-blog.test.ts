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
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import {
  SAUDI_BIOSIMILAR_ENTRY_BODY_HTML,
  SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE,
  SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE_ALT,
  SAUDI_BIOSIMILAR_ENTRY_DISPLAY_SUBTITLE,
  SAUDI_BIOSIMILAR_ENTRY_DISPLAY_TITLE,
  SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML,
  SAUDI_BIOSIMILAR_ENTRY_FAQ,
  SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST,
  SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE,
  SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE_ALT,
  SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION,
  SAUDI_BIOSIMILAR_ENTRY_META_TITLE,
  SAUDI_BIOSIMILAR_ENTRY_PATH,
  SAUDI_BIOSIMILAR_ENTRY_READING_TIME,
  SAUDI_BIOSIMILAR_ENTRY_REFERENCES,
  SAUDI_BIOSIMILAR_ENTRY_SLUG,
  SAUDI_BIOSIMILAR_ENTRY_TABLE_OF_CONTENTS,
  SAUDI_BIOSIMILAR_ENTRY_TAGS,
  SAUDI_BIOSIMILAR_ENTRY_URL,
  SAUDI_BIOSIMILAR_ENTRY_WORD_COUNT,
  countWords,
} from '@/data/blog-saudi-biosimilar-market-entry-research';

const PHRASE = 'biosimilar market entry research saudi arabia';
const SAO_PAULO_PHRASE = 'in the process of opening a São Paulo office by the end of 2026';
const PUBLISHED = '2026-10-11T12:00:00.000Z';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');

// Parsed JSON-LD is untyped JSON read by property path in the assertions below.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonLdNode = Record<string, any>;

function text(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
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
  const result = await render(SAUDI_BIOSIMILAR_ENTRY_PATH, {
    pageType: 'blog-post',
    blogSlug: SAUDI_BIOSIMILAR_ENTRY_SLUG,
    blogPost: SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/biosimilar-market-entry-research-saudi-arabia: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(SAUDI_BIOSIMILAR_ENTRY_DISPLAY_TITLE);
    expect(h1s[0]).toContain(SAUDI_BIOSIMILAR_ENTRY_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE);
    const visible = text(html);
    expect(visible).toContain('Biosimilar market entry research Saudi Arabia: what should a study answer?');
    expect(visible).toContain('What did the SFDA’s 2026 biosimilar guideline change?');
    expect(visible).toContain('References');
    for (const item of SAUDI_BIOSIMILAR_ENTRY_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(html.match(/<table>/g)?.length).toBeGreaterThanOrEqual(3);
    expect(countWords(visible)).toBeGreaterThan(3000);
  });

  it('links to the hub page within the first 200 words of the article', () => {
    const body = SAUDI_BIOSIMILAR_ENTRY_BODY_HTML;
    const hubAt = body.indexOf('href="/healthcare-market-research"');
    expect(hubAt).toBeGreaterThan(0);
    expect(countWords(body.slice(0, hubAt))).toBeLessThan(200);
    for (const path of [
      '/biosimilar-market-entry-saudi-arabia',
      '/market-reports/saudi-arabia-biosimilars-market-report',
      '/saudi-payer-market-access-research',
      '/blog/nupco-saudi-arabia-tendering-guide',
      '/blog/who-does-obesity-market-research-saudi-arabia',
      '/contact',
    ]) {
      expect(html).toContain(`href="${path}"`);
    }
    expect(html).toContain('href="mailto:admin@bionixus.com"');
  });

  it('puts the text-free artwork behind the h1 and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE}" alt="${SAUDI_BIOSIMILAR_ENTRY_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE}"`);
    expect(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST.ogImage).toBe(SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE);
  });

  it('renders a visible breadcrumb trail that matches the BreadcrumbList', () => {
    const navs = [...html.matchAll(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/g)].map((m) => m[0]);
    const classOf = (nav: string) => /^<nav[^>]*class="([^"]*)"/.exec(nav)?.[1].split(/\s+/) ?? [];
    // Phones get a light trail below the fixed-height hero; wider screens get the on-dark trail inside it.
    expect(navs).toHaveLength(2);
    const wide = navs.find((nav) => classOf(nav).includes('md:block'));
    const phone = navs.find((nav) => classOf(nav).includes('md:hidden'));
    expect(classOf(wide ?? '')).toEqual(expect.arrayContaining(['hidden', 'bg-transparent']));
    expect(phone).toBeDefined();
    for (const nav of navs) expect(text(nav)).toBe('Home / Blog / Saudi biosimilar entry research');
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Blog',
      'Saudi biosimilar entry research',
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${SAUDI_BIOSIMILAR_ENTRY_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${SAUDI_BIOSIMILAR_ENTRY_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([SAUDI_BIOSIMILAR_ENTRY_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([SAUDI_BIOSIMILAR_ENTRY_URL]);
    expect(metaContent(head, 'property', 'og:site_name')).toEqual(['BioNixus']);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual([PUBLISHED]);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual([PUBLISHED]);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Martha DeVito']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Market Access']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(SAUDI_BIOSIMILAR_ENTRY_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:site')).toEqual(['@BioNixus']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([SAUDI_BIOSIMILAR_ENTRY_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE_ALT]);
  });
});

describe('/blog/biosimilar-market-entry-research-saudi-arabia: JSON-LD', () => {
  const byType = (type: string) => jsonLd.filter((node) => node['@type'] === type);

  it('emits only valid, parseable nodes of every required type', () => {
    const types = jsonLd.map((node) => node['@type']);
    for (const type of ['BlogPosting', 'BreadcrumbList', 'WebPage', 'Organization', 'FAQPage']) {
      expect(types).toContain(type);
    }
    for (const node of jsonLd) {
      expect(node['@context']).toBe('https://schema.org');
      expect(isValidSchemaNode(node)).toBe(true);
    }
  });

  it('fills every BlogPosting property, with an ImageObject cover linked to the WebPage', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(SAUDI_BIOSIMILAR_ENTRY_DISPLAY_TITLE);
    expect(article.alternativeHeadline).toBe(SAUDI_BIOSIMILAR_ENTRY_DISPLAY_SUBTITLE);
    expect(article.description).toBe(SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION);
    expect(article.url).toBe(SAUDI_BIOSIMILAR_ENTRY_URL);
    expect(article.datePublished).toBe(PUBLISHED);
    expect(article.dateModified).toBe(PUBLISHED);
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Market Access');
    expect(article.keywords).toBe(SAUDI_BIOSIMILAR_ENTRY_TAGS.join(', '));
    expect(article.wordCount).toBe(SAUDI_BIOSIMILAR_ENTRY_WORD_COUNT);
    expect(article.timeRequired).toBe(`PT${SAUDI_BIOSIMILAR_ENTRY_READING_TIME}M`);
    expect(article.isAccessibleForFree).toBe(true);
    expect(article.copyrightYear).toBe(2026);
    expect(article.copyrightHolder).toEqual({ '@id': 'https://www.bionixus.com/#organization' });
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${SAUDI_BIOSIMILAR_ENTRY_URL}#webpage`,
      url: SAUDI_BIOSIMILAR_ENTRY_URL,
    });
    expect(article.image).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${SAUDI_BIOSIMILAR_ENTRY_URL}#primaryimage`,
      url: `https://www.bionixus.com${SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE}`,
      contentUrl: `https://www.bionixus.com${SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: SAUDI_BIOSIMILAR_ENTRY_COVER_IMAGE_ALT,
    });
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${SAUDI_BIOSIMILAR_ENTRY_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${SAUDI_BIOSIMILAR_ENTRY_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${SAUDI_BIOSIMILAR_ENTRY_URL}#breadcrumb` });
  });

  it('describes what the article is about and the organisations it names', () => {
    const [article] = byType('BlogPosting');
    expect(article.about.map((entity: JsonLdNode) => entity['@type'])).toEqual(['DrugClass', 'Country', 'CreativeWork']);
    const guideline = article.about.find((entity: JsonLdNode) => entity['@type'] === 'CreativeWork');
    expect(guideline).toMatchObject({ version: '1.0', datePublished: '2026-06-10', identifier: 'DS-G-138-V01/260510' });
    expect(article.mentions.map((entity: JsonLdNode) => entity.alternateName)).toEqual(
      expect.arrayContaining(['SFDA', 'NUPCO', 'CHI', 'LCGPA']),
    );
  });

  it('lists every reference as a citation', () => {
    const [article] = byType('BlogPosting');
    expect(article.citation).toHaveLength(SAUDI_BIOSIMILAR_ENTRY_REFERENCES.length);
    expect(article.citation.map((work: JsonLdNode) => work.url)).toEqual(
      SAUDI_BIOSIMILAR_ENTRY_REFERENCES.map((ref) => ref.url),
    );
    const scholarly = article.citation.filter((work: JsonLdNode) => work['@type'] === 'ScholarlyArticle');
    expect(scholarly.length).toBeGreaterThanOrEqual(8);
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
  });

  it('mentions São Paulo only as an office being opened, never as an address or Place', () => {
    const countMentions = (value: string) => value.split('São Paulo').length - 1;
    const countPhrase = (value: string) => value.split(SAO_PAULO_PHRASE).length - 1;
    const visible = text(html);
    expect(countPhrase(visible)).toBe(1);
    expect(countMentions(visible)).toBe(countPhrase(visible));
    const graph = JSON.stringify(jsonLd);
    expect(countMentions(graph)).toBe(countPhrase(graph));
    const places = jsonLd.flatMap((node) => [...JSON.stringify(node).matchAll(/"addressLocality":"([^"]+)"/g)]);
    expect(places.map((match) => match[1])).not.toContain('São Paulo');
  });

  it('mirrors the visible FAQ exactly in FAQPage', () => {
    const [faq] = byType('FAQPage');
    expect(
      faq.mainEntity.map((question: JsonLdNode) => ({
        question: question.name,
        answer: question.acceptedAnswer.text,
      })),
    ).toEqual(SAUDI_BIOSIMILAR_ENTRY_FAQ);
    expect(SAUDI_BIOSIMILAR_ENTRY_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(SAUDI_BIOSIMILAR_ENTRY_FAQ.length).toBeLessThanOrEqual(8);
  });
});

describe('/blog/biosimilar-market-entry-research-saudi-arabia: copy rules', () => {
  const allCopy = [
    SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML,
    SAUDI_BIOSIMILAR_ENTRY_BODY_HTML,
    JSON.stringify(SAUDI_BIOSIMILAR_ENTRY_FAQ),
    JSON.stringify(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST.ctaSection),
    JSON.stringify(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(SAUDI_BIOSIMILAR_ENTRY_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(SAUDI_BIOSIMILAR_ENTRY_META_TITLE.length).toBeLessThanOrEqual(60);
    // AGENTS.md asks for 150–160 characters; the Sanity blogPost schema caps descriptions at 155.
    expect(SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(getCtrSeo(SAUDI_BIOSIMILAR_ENTRY_PATH)).toEqual({
      title: SAUDI_BIOSIMILAR_ENTRY_META_TITLE,
      description: SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(SAUDI_BIOSIMILAR_ENTRY_SLUG)).toEqual({
      title: SAUDI_BIOSIMILAR_ENTRY_META_TITLE,
      description: SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION,
    });
  });

  it('places the exact target phrase in the title, meta, answer-first summary and an H2', () => {
    const summary = text(SAUDI_BIOSIMILAR_ENTRY_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    const h2s = [...SAUDI_BIOSIMILAR_ENTRY_BODY_HTML.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
      text(m[1]).toLowerCase(),
    );
    for (const field of [SAUDI_BIOSIMILAR_ENTRY_META_TITLE, SAUDI_BIOSIMILAR_ENTRY_META_DESCRIPTION, summary]) {
      expect(field.toLowerCase()).toContain(PHRASE);
    }
    expect(h2s.some((h2) => h2.includes(PHRASE))).toBe(true);
    const questionH2s = h2s.filter((h2) => h2 !== 'references');
    expect(questionH2s.every((h2) => h2.endsWith('?'))).toBe(true);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...SAUDI_BIOSIMILAR_ENTRY_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(SAUDI_BIOSIMILAR_ENTRY_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('states no BioNixus prices and no Al Khobar or Kuwait office', () => {
    expect(allCopy).not.toMatch(/Khobar/i);
    expect(allCopy).not.toMatch(/Kuwait office|Salmiya/i);
    expect(allCopy).not.toMatch(/\$\s?\d[\d,]*(?:k|,000)/i);
  });

  it('cites every reference inline before the reference list', () => {
    const [narrative, referenceList] = SAUDI_BIOSIMILAR_ENTRY_BODY_HTML.split('<h2 id="references">');
    const referenceUrls = [...referenceList.matchAll(/<li id="ref-[^"]+">[\s\S]*?<a href="([^"]+)"/g)].map((m) => m[1]);
    expect(referenceUrls).toHaveLength(SAUDI_BIOSIMILAR_ENTRY_REFERENCES.length);
    for (const url of referenceUrls) expect(narrative).toContain(`href="${url}"`);
  });

  it('opens every external citation in a new tab', () => {
    const external = [...SAUDI_BIOSIMILAR_ENTRY_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(60);
    for (const [, , attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
    }
  });
});

describe('/blog/biosimilar-market-entry-research-saudi-arabia: registration', () => {
  it('is a hardcoded, force-indexed post', () => {
    expect(hardcodedSeoPosts).toContain(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(SAUDI_BIOSIMILAR_ENTRY_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(SAUDI_BIOSIMILAR_ENTRY_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(SAUDI_BIOSIMILAR_ENTRY_SLUG)).toBe(true);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(SAUDI_BIOSIMILAR_ENTRY_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) => rewrite.source === '/blog/:slug' && rewrite.destination === '/api/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${SAUDI_BIOSIMILAR_ENTRY_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt', () => {
    expect(sitemapScript).toContain(`path: '${SAUDI_BIOSIMILAR_ENTRY_PATH}'`);
    expect(sitemapXml).toContain(`<loc>${SAUDI_BIOSIMILAR_ENTRY_URL}</loc>`);
    expect(llms).toContain(SAUDI_BIOSIMILAR_ENTRY_URL);
  });
});
