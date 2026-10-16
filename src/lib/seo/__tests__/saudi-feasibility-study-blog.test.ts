import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { hardcodedSeoPosts } from '@/data/blog-posts-index';
import { BLOG_FORCE_INDEX_SLUGS, BLOG_HARDCODED_SEO_SLUGS } from '@/lib/blog-robots';
import { INDUSTRIES_INSIGHT_EDITORIAL_LINKS } from '@/lib/blog-content-silo';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import { stripDefaultOrganizationJsonLd } from '../../../../lib/strip-industries-insights-org.mjs';
import {
  SAUDI_FEASIBILITY_BODY_HTML,
  SAUDI_FEASIBILITY_COVER_IMAGE,
  SAUDI_FEASIBILITY_COVER_IMAGE_ALT,
  SAUDI_FEASIBILITY_DISPLAY_SUBTITLE,
  SAUDI_FEASIBILITY_DISPLAY_TITLE,
  SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML,
  SAUDI_FEASIBILITY_FAQ,
  SAUDI_FEASIBILITY_GEMINI_COVER_PENDING,
  SAUDI_FEASIBILITY_HARDCODED_POST,
  SAUDI_FEASIBILITY_HERO_IMAGE,
  SAUDI_FEASIBILITY_HERO_IMAGE_ALT,
  SAUDI_FEASIBILITY_META_DESCRIPTION,
  SAUDI_FEASIBILITY_META_TITLE,
  SAUDI_FEASIBILITY_PATH,
  SAUDI_FEASIBILITY_REFERENCES,
  SAUDI_FEASIBILITY_SLUG,
  SAUDI_FEASIBILITY_TABLE_OF_CONTENTS,
  SAUDI_FEASIBILITY_TAGS,
  SAUDI_FEASIBILITY_URL,
  SAUDI_FEASIBILITY_WORD_COUNT,
  countWords,
} from '@/data/blog-feasibility-study-saudi-arabia';

const PHRASE = 'feasibility study company saudi arabia';
const SAO_PAULO_PHRASE = 'in the process of opening a São Paulo office by the end of 2026';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
const ssrFunctionSource = readFileSync(join(root, 'api/indexnow-key.ts'), 'utf8');
const serverSource = readFileSync(join(root, 'server.js'), 'utf8');

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
  HelmetProvider.canUseDOM = false;
  const result = await render(SAUDI_FEASIBILITY_PATH, {
    pageType: 'blog-post',
    blogSlug: SAUDI_FEASIBILITY_SLUG,
    blogPost: SAUDI_FEASIBILITY_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/bionixus-industries/insights/feasibility-study-company-saudi-arabia: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(SAUDI_FEASIBILITY_DISPLAY_TITLE);
    expect(h1s[0]).toContain(SAUDI_FEASIBILITY_DISPLAY_SUBTITLE);
    const visible = text(html);
    expect(visible.toLowerCase()).toContain('feasibility study company in saudi arabia');
    expect(visible).toContain('industry insights hub');
    expect(visible).toContain('References');
    for (const item of SAUDI_FEASIBILITY_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1800);
  });

  it('uses the hero path in the page and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${SAUDI_FEASIBILITY_HERO_IMAGE}"`);
    expect(html).toContain(`alt="${SAUDI_FEASIBILITY_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${SAUDI_FEASIBILITY_COVER_IMAGE}"`);
    expect(SAUDI_FEASIBILITY_HARDCODED_POST.ogImage).toBe(SAUDI_FEASIBILITY_COVER_IMAGE);
    expect(SAUDI_FEASIBILITY_HARDCODED_POST.ogImageAlt).toBe(SAUDI_FEASIBILITY_COVER_IMAGE_ALT);
  });

  it('emits the industries BreadcrumbList even without a visible breadcrumbLabel trail', () => {
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Industries',
      'Industry Insights',
      SAUDI_FEASIBILITY_DISPLAY_TITLE,
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${SAUDI_FEASIBILITY_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([SAUDI_FEASIBILITY_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${SAUDI_FEASIBILITY_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${SAUDI_FEASIBILITY_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([SAUDI_FEASIBILITY_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([SAUDI_FEASIBILITY_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([SAUDI_FEASIBILITY_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([SAUDI_FEASIBILITY_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-12T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-12T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Laura McConaughey']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['B2B Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(SAUDI_FEASIBILITY_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([SAUDI_FEASIBILITY_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([SAUDI_FEASIBILITY_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([SAUDI_FEASIBILITY_COVER_IMAGE_ALT]);
  });
});

describe('/bionixus-industries/insights/feasibility-study-company-saudi-arabia: JSON-LD', () => {
  const byType = (type: string) => jsonLd.filter((node) => node['@type'] === type);

  it('emits only valid, parseable nodes of every required type', () => {
    const types = jsonLd.map((node) => node['@type']);
    for (const type of ['BlogPosting', 'BreadcrumbList', 'WebPage', 'Organization', 'FAQPage']) {
      expect(types).toContain(type);
    }
    expect(types).not.toContain('ItemList');
    for (const node of jsonLd) {
      expect(node['@context']).toBe('https://schema.org');
      expect(isValidSchemaNode(node)).toBe(true);
    }
  });

  it('fills BlogPosting as the Article node, with an ImageObject cover linked to the WebPage', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(SAUDI_FEASIBILITY_DISPLAY_TITLE);
    expect(article.description).toBe(SAUDI_FEASIBILITY_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-12T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-12T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('B2B Market Research');
    expect(article.keywords).toBe(SAUDI_FEASIBILITY_TAGS.join(', '));
    expect(article.wordCount).toBe(SAUDI_FEASIBILITY_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${SAUDI_FEASIBILITY_URL}#webpage`,
      url: SAUDI_FEASIBILITY_URL,
    });
    expect(article.about).toEqual(
      expect.arrayContaining([
        { '@type': 'Thing', name: 'Feasibility study' },
        { '@type': 'Thing', name: 'Market research' },
        { '@type': 'Country', name: 'Saudi Arabia' },
      ]),
    );
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${SAUDI_FEASIBILITY_URL}#primaryimage`,
      url: `https://www.bionixus.com${SAUDI_FEASIBILITY_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: SAUDI_FEASIBILITY_COVER_IMAGE_ALT,
    });
    expect(article.author).toEqual({
      '@type': 'Person',
      name: 'Laura McConaughey',
      jobTitle: 'Global Research Manager',
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    });
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${SAUDI_FEASIBILITY_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${SAUDI_FEASIBILITY_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${SAUDI_FEASIBILITY_URL}#breadcrumb` });
  });

  it('keeps the Organization node to the verified facts and all six labelled offices', () => {
    const orgs = byType('Organization');
    expect(orgs).toHaveLength(1);
    const pageOrg = orgs.find((node) => typeof node.description === 'string' && node.description.includes('127 studies'));
    expect(pageOrg).toBeDefined();
    expect(pageOrg!['@id']).toBe('https://www.bionixus.com/#organization');
    expect(pageOrg!.foundingDate).toBe('2012');
    expect(pageOrg!.slogan).toBe('Guaranteed in writing.');
    for (const fact of ['118 clients', '48 countries', '127 studies', '$10,000 to $60,000', 'Field offices']) {
      expect(pageOrg!.description).toContain(fact);
    }
    expect(pageOrg!.description).not.toMatch(/3,200 physicians|guaranteed accuracy/i);
    const localities = pageOrg!.address.map((address: JsonLdNode) => address.addressLocality);
    expect(localities).toEqual(['Sheridan', 'London', 'Sheikh Zayed', 'Dubai', 'Al Khobar', 'Salmiya']);
    const labels = pageOrg!.location.map((place: JsonLdNode) => place.description);
    expect(labels).toEqual([
      'Regional leadership office (US headquarters)',
      'Regional leadership office',
      'Regional leadership office',
      'Field office',
      'Field office',
      'Field office',
    ]);
    for (const listed of GOOGLE_OFFICES) expect(pageOrg!.sameAs).toContain(listed.mapsUrl);
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

  it('keeps São Paulo out of the sitewide Organization block', () => {
    expect(JSON.stringify(buildCanonicalOrganization())).not.toContain('São Paulo');
    expect(indexHtml).not.toContain('São Paulo');
  });

  it('drops the template Organization from this page only', () => {
    const page = stripDefaultOrganizationJsonLd(indexHtml, SAUDI_FEASIBILITY_PATH);
    expect(page).toContain('<!-- org-schema:start --><!-- org-schema:end -->');
    expect(page).not.toMatch(/"Organization"|Al Khobar|Salmiya/);
    expect(stripDefaultOrganizationJsonLd(indexHtml, '/blog/turkey-pharmaceutical-market-2026-titck-top-companies')).toBe(
      indexHtml,
    );
    for (const source of [ssrFunctionSource, serverSource]) {
      expect(source).toMatch(/stripDefaultOrganizationJsonLd\(/);
    }
  });

  it('mirrors the visible FAQ exactly in FAQPage', () => {
    const [faq] = byType('FAQPage');
    expect(
      faq.mainEntity.map((question: JsonLdNode) => ({
        question: question.name,
        answer: question.acceptedAnswer.text,
      })),
    ).toEqual(SAUDI_FEASIBILITY_FAQ);
    expect(SAUDI_FEASIBILITY_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(SAUDI_FEASIBILITY_FAQ.length).toBeLessThanOrEqual(8);
  });
});

describe('/bionixus-industries/insights/feasibility-study-company-saudi-arabia: copy rules', () => {
  const allCopy = [
    SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML,
    SAUDI_FEASIBILITY_BODY_HTML,
    JSON.stringify(SAUDI_FEASIBILITY_FAQ),
    JSON.stringify(SAUDI_FEASIBILITY_HARDCODED_POST.ctaSection),
    JSON.stringify(SAUDI_FEASIBILITY_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(SAUDI_FEASIBILITY_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(SAUDI_FEASIBILITY_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(SAUDI_FEASIBILITY_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(SAUDI_FEASIBILITY_META_DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(getCtrSeo(SAUDI_FEASIBILITY_PATH)).toEqual({
      title: SAUDI_FEASIBILITY_META_TITLE,
      description: SAUDI_FEASIBILITY_META_DESCRIPTION,
    });
    expect(getCtrSeo(`/blog/${SAUDI_FEASIBILITY_SLUG}`)).toEqual({
      title: SAUDI_FEASIBILITY_META_TITLE,
      description: SAUDI_FEASIBILITY_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(SAUDI_FEASIBILITY_SLUG)).toEqual({
      title: SAUDI_FEASIBILITY_META_TITLE,
      description: SAUDI_FEASIBILITY_META_DESCRIPTION,
    });
  });

  it('places the target phrase in the title, meta, answer-first summary and an H2', () => {
    const summary = text(SAUDI_FEASIBILITY_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    const h2s = [...SAUDI_FEASIBILITY_BODY_HTML.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
      text(m[1]).toLowerCase(),
    );
    expect(SAUDI_FEASIBILITY_META_TITLE.toLowerCase()).toContain(PHRASE);
    expect(SAUDI_FEASIBILITY_META_DESCRIPTION.toLowerCase()).toContain(PHRASE);
    expect(summary.toLowerCase()).toContain('feasibility study company in saudi arabia');
    expect(h2s.some((h2) => h2.includes('feasibility study company in saudi arabia'))).toBe(true);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...SAUDI_FEASIBILITY_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(SAUDI_FEASIBILITY_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('states the approved commercial facts and labels field offices', () => {
    expect(allCopy).toMatch(/\$10,000 to \$60,000/);
    expect(allCopy).toMatch(/field offices/i);
    expect(allCopy).toMatch(/Al Khobar/);
    expect(allCopy).toMatch(/Guaranteed in writing/);
    expect(allCopy).toMatch(/Forty client reviews|40 client reviews/i);
    expect(allCopy).not.toMatch(/guaranteed accuracy|guaranteed findings/i);
    expect(allCopy).not.toMatch(/Mohammad Ashour/);
  });

  it('cites every linked reference inline', () => {
    const [narrative, referenceList] = SAUDI_FEASIBILITY_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    expect(items.map(([, id]) => id)).toEqual(SAUDI_FEASIBILITY_REFERENCES.map((ref) => ref.id));
    expect(items.length).toBe(18);
    for (const [, , itemHtml] of items) {
      expect(itemHtml).toContain('<a ');
      const url = /href="([^"]+)"/.exec(itemHtml)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and keeps tel/mailto links', () => {
    const external = [...SAUDI_FEASIBILITY_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(15);
    for (const [, , attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
    }
    expect(SAUDI_FEASIBILITY_BODY_HTML).toContain('href="mailto:admin@bionixus.com"');
    expect(SAUDI_FEASIBILITY_BODY_HTML).toContain('href="tel:+966501825336"');
    expect(SAUDI_FEASIBILITY_BODY_HTML).toContain('href="/bionixus-industries/insights"');
    expect(SAUDI_FEASIBILITY_BODY_HTML).toContain('href="/saudi-arabia-real-estate-market-research"');
    expect(SAUDI_FEASIBILITY_BODY_HTML).toContain('href="/uae-real-estate-market-research"');
    expect(SAUDI_FEASIBILITY_BODY_HTML).toContain('href="/egypt-real-estate-market-research"');
  });

  it('links the industries hub within the first 200 visible words', () => {
    const firstPara = text(/<p>([\s\S]*?)<\/p>/.exec(SAUDI_FEASIBILITY_BODY_HTML)?.[1] ?? '');
    expect(countWords(firstPara)).toBeLessThan(200);
    expect(SAUDI_FEASIBILITY_BODY_HTML.split('</p>')[0]).toContain('href="/bionixus-industries/insights"');
  });
});

describe('/bionixus-industries/insights/feasibility-study-company-saudi-arabia: registration', () => {
  it('is a hardcoded, force-indexed industries post linked from the hub', () => {
    expect(hardcodedSeoPosts).toContain(SAUDI_FEASIBILITY_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(SAUDI_FEASIBILITY_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(SAUDI_FEASIBILITY_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(SAUDI_FEASIBILITY_SLUG)).toBe(true);
    expect(SAUDI_FEASIBILITY_HARDCODED_POST.contentSilo).toBe('industries');
    expect(INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => item.to)).toContain(SAUDI_FEASIBILITY_PATH);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(SAUDI_FEASIBILITY_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/bionixus-industries/insights/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/bionixus-industries/insights/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${SAUDI_FEASIBILITY_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 12 October 2026', () => {
    expect(SAUDI_FEASIBILITY_HARDCODED_POST.date).toBe('12 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${SAUDI_FEASIBILITY_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-12'`,
    );
    expect(sitemapXml).toMatch(new RegExp(`<loc>${SAUDI_FEASIBILITY_URL}</loc>\\s*<lastmod>2026-10-12</lastmod>`));
    expect(llms).toContain(SAUDI_FEASIBILITY_URL);
  });

  it('keeps the hero and OG card at 1200 by 630 once the cover is no longer pending', async () => {
    expect(SAUDI_FEASIBILITY_GEMINI_COVER_PENDING).toBe(false);
    const cover = join(root, 'public', SAUDI_FEASIBILITY_COVER_IMAGE);
    const hero = join(root, 'public', SAUDI_FEASIBILITY_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
  });
});
