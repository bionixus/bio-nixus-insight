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
import { INDUSTRIES_INSIGHTS_ORG_DESCRIPTION } from '@/data/nonPharmaInsightsCatalog';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import { stripDefaultOrganizationJsonLd } from '../../../../lib/strip-industries-insights-org.mjs';
import {
  UAE_CSAT_BODY_HTML,
  UAE_CSAT_COVER_IMAGE,
  UAE_CSAT_COVER_IMAGE_ALT,
  UAE_CSAT_DISPLAY_SUBTITLE,
  UAE_CSAT_DISPLAY_TITLE,
  UAE_CSAT_EXECUTIVE_SUMMARY_HTML,
  UAE_CSAT_FAQ,
  UAE_CSAT_HARDCODED_POST,
  UAE_CSAT_HERO_IMAGE,
  UAE_CSAT_HERO_IMAGE_ALT,
  UAE_CSAT_META_DESCRIPTION,
  UAE_CSAT_META_TITLE,
  UAE_CSAT_PATH,
  UAE_CSAT_SLUG,
  UAE_CSAT_TABLE_OF_CONTENTS,
  UAE_CSAT_TAGS,
  UAE_CSAT_URL,
  UAE_CSAT_WORD_COUNT,
  countWords,
} from '@/data/blog-uae-csat-nps-ces-surveys';

const PHRASE_UAE = 'customer satisfaction survey company uae';
const PHRASE_SAUDI = 'nps survey company saudi arabia';
const SAO_PAULO_PHRASE = 'in the process of opening a São Paulo office by the end of 2026';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string; has?: unknown[] }[];
};
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
const ssrFunctionSource = readFileSync(join(root, 'api/indexnow-key.ts'), 'utf8');
const serverSource = readFileSync(join(root, 'server.js'), 'utf8');

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
  const result = await render(UAE_CSAT_PATH, {
    pageType: 'blog-post',
    blogSlug: UAE_CSAT_SLUG,
    blogPost: UAE_CSAT_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(UAE_CSAT_DISPLAY_TITLE);
    expect(h1s[0]).toContain(UAE_CSAT_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE_SAUDI);
    const visible = text(html);
    expect(visible).toContain('Which question are you asking?');
    expect(visible).toContain('References');
    for (const item of UAE_CSAT_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(html).toMatch(/<summary[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1800);
  });

  it('puts the text-free artwork behind the h1 and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${UAE_CSAT_HERO_IMAGE}" alt="${UAE_CSAT_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${UAE_CSAT_COVER_IMAGE}"`);
    expect(UAE_CSAT_HARDCODED_POST.ogImage).toBe(UAE_CSAT_COVER_IMAGE);
    expect(UAE_CSAT_HARDCODED_POST.ogImageAlt).toBe(UAE_CSAT_COVER_IMAGE_ALT);
  });

  it('keeps the hero and OG card at 1200 by 630', async () => {
    for (const file of [UAE_CSAT_HERO_IMAGE, UAE_CSAT_COVER_IMAGE]) {
      const dest = join(root, 'public', file);
      expect(existsSync(dest)).toBe(true);
      const meta = await sharp(dest).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${UAE_CSAT_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([UAE_CSAT_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${UAE_CSAT_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${UAE_CSAT_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([UAE_CSAT_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([UAE_CSAT_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([UAE_CSAT_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([UAE_CSAT_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-12T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-12T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Ivona Gunjova']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['B2C Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(UAE_CSAT_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([UAE_CSAT_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([UAE_CSAT_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([UAE_CSAT_COVER_IMAGE_ALT]);
  });
});

describe('/bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces: JSON-LD', () => {
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

  it('fills every BlogPosting property, with an ImageObject cover linked to the WebPage', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(UAE_CSAT_DISPLAY_TITLE);
    expect(article.description).toBe(UAE_CSAT_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-12T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-12T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('B2C Market Research');
    expect(article.keywords).toBe(UAE_CSAT_TAGS.join(', '));
    expect(article.wordCount).toBe(UAE_CSAT_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${UAE_CSAT_URL}#webpage`,
      url: UAE_CSAT_URL,
    });
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${UAE_CSAT_URL}#primaryimage`,
      url: `https://www.bionixus.com${UAE_CSAT_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: UAE_CSAT_COVER_IMAGE_ALT,
    });
    expect(article.author['@type']).toBe('Person');
    expect(article.author.name).toBe('Ivona Gunjova');
    expect(article.author.jobTitle).toBe('Global Research Manager');
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${UAE_CSAT_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${UAE_CSAT_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${UAE_CSAT_URL}#breadcrumb` });
  });

  it('keeps the Organization node to the verified industries facts and all six labelled offices', () => {
    const orgs = byType('Organization');
    expect(orgs).toHaveLength(1);
    const pageOrg = orgs.find((node) => typeof node.description === 'string' && node.description.includes('127 studies'));
    expect(pageOrg).toBeDefined();
    expect(pageOrg!['@id']).toBe('https://www.bionixus.com/#organization');
    expect(pageOrg!.foundingDate).toBe('2012');
    expect(pageOrg!.description).toBe(INDUSTRIES_INSIGHTS_ORG_DESCRIPTION);
    expect(pageOrg!.slogan).toBe('Guaranteed in writing.');
    for (const fact of ['118 clients', '48 countries', '127 studies', 'Field offices']) {
      expect(pageOrg!.description).toContain(fact);
    }
    const localities = pageOrg!.address.map((address: JsonLdNode) => address.addressLocality);
    expect(localities).toEqual(['Sheridan', 'London', 'Sheikh Zayed', 'Dubai', 'Al Khobar', 'Salmiya']);
    const office = Object.fromEntries(
      pageOrg!.address.map((address: JsonLdNode) => [address.addressLocality, address]),
    ) as Record<string, JsonLdNode>;
    expect(office.Sheridan).toMatchObject({ addressRegion: 'WY', addressCountry: 'US' });
    expect(office.London).toMatchObject({ postalCode: 'EC1V 2NX', addressCountry: 'GB' });
    expect(office['Sheikh Zayed']).toMatchObject({ addressRegion: 'Giza', addressCountry: 'EG' });
    expect(office.Dubai.streetAddress).toContain('Thuraya Tower 1');
    expect(office['Al Khobar'].streetAddress).toContain('Al Khobar Al Shamalia');
    expect(office.Salmiya.streetAddress).toContain('Olympia Mall');
    expect(pageOrg!.description).toContain(SAO_PAULO_PHRASE);
    const labels = pageOrg!.location.map((place: JsonLdNode) => place.description);
    expect(labels).toEqual([
      'Americas office and global HQ',
      'Europe office',
      'AMEA (APAC, Middle East, Africa) office',
      'field office for UAE',
      'partner office for KSA',
      'field office for Kuwait',
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
    const page = stripDefaultOrganizationJsonLd(indexHtml, UAE_CSAT_PATH);
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
    ).toEqual(UAE_CSAT_FAQ);
    expect(UAE_CSAT_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(UAE_CSAT_FAQ.length).toBeLessThanOrEqual(8);
  });

  it('emits Home / Industries / Industry Insights / title in BreadcrumbList', () => {
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Industries',
      'Industry Insights',
      UAE_CSAT_DISPLAY_TITLE,
    ]);
  });
});

describe('/bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces: copy rules', () => {
  const allCopy = [
    UAE_CSAT_EXECUTIVE_SUMMARY_HTML,
    UAE_CSAT_BODY_HTML,
    JSON.stringify(UAE_CSAT_FAQ),
    JSON.stringify(UAE_CSAT_HARDCODED_POST.ctaSection),
    JSON.stringify(UAE_CSAT_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by both CTR paths and the crawler stub', () => {
    expect(UAE_CSAT_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(UAE_CSAT_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(UAE_CSAT_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(UAE_CSAT_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    const expected = { title: UAE_CSAT_META_TITLE, description: UAE_CSAT_META_DESCRIPTION };
    expect(getCtrSeo(UAE_CSAT_PATH)).toEqual(expected);
    expect(getCtrSeo(`/blog/${UAE_CSAT_SLUG}`)).toEqual(expected);
    expect(getCrawlerStubForSlug(UAE_CSAT_SLUG)).toEqual(expected);
  });

  it('places the exact target phrases in the title, meta, answer-first summary and H2s', () => {
    const summary = text(UAE_CSAT_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    expect(UAE_CSAT_META_TITLE.toLowerCase()).toContain(PHRASE_UAE);
    for (const field of [UAE_CSAT_META_DESCRIPTION, summary]) {
      expect(field.toLowerCase()).toContain(PHRASE_UAE);
      expect(field.toLowerCase()).toContain(PHRASE_SAUDI);
    }
    expect(UAE_CSAT_BODY_HTML.toLowerCase()).toContain(PHRASE_UAE);
    expect(UAE_CSAT_BODY_HTML.toLowerCase()).toContain(PHRASE_SAUDI);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...UAE_CSAT_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(UAE_CSAT_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('links the industries hub inside the first 200 words and cross-links two country pages', () => {
    const lead = text(UAE_CSAT_BODY_HTML.split('<h2 ')[0] ?? '');
    expect(countWords(lead)).toBeGreaterThan(40);
    expect(UAE_CSAT_BODY_HTML.split('<h2 ')[0]).toContain('href="/bionixus-industries/insights"');
    expect(UAE_CSAT_BODY_HTML).toContain('href="/uae-retail-market-research"');
    expect(UAE_CSAT_BODY_HTML).toContain('href="/saudi-arabia-retail-market-research"');
    expect(UAE_CSAT_BODY_HTML).toContain('href="/contact"');
    expect(UAE_CSAT_BODY_HTML).toContain('href="mailto:admin@bionixus.com"');
    expect(UAE_CSAT_BODY_HTML).toContain('href="tel:+18884655557"');
  });

  it('labels Al Khobar and Kuwait as field offices and does not invent healthcare claims', () => {
    expect(allCopy).toMatch(/field offices? (are )?in Dubai, Al Khobar and Salmiya, Kuwait/i);
    expect(allCopy).not.toMatch(/guaranteed accuracy/i);
    expect(allCopy).not.toMatch(/Mohammad Ashour/);
    expect(allCopy).not.toMatch(/3,200 physicians/);
    expect(allCopy).not.toContain('/healthcare-market-research');
  });

  it('cites every linked reference inline', () => {
    const [narrative, referenceList] = UAE_CSAT_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    expect(items.length).toBeGreaterThanOrEqual(10);
    for (const [, , itemHtml] of items) {
      expect(itemHtml).toContain('<a ');
      const url = /href="([^"]+)"/.exec(itemHtml)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and does not link competitor domains', () => {
    const external = [...UAE_CSAT_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThanOrEqual(12);
    for (const [, href, attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
      expect(href).not.toMatch(/iqvia\.com|ipsos\.com|kantar\.com|nielsen\.com|forrester\.com/i);
    }
  });
});

describe('/bionixus-industries/insights/customer-satisfaction-surveys-uae-csat-nps-ces: registration', () => {
  it('is a hardcoded, force-indexed industries post linked from the hub', () => {
    expect(hardcodedSeoPosts).toContain(UAE_CSAT_HARDCODED_POST);
    expect(UAE_CSAT_HARDCODED_POST.contentSilo).toBe('industries');
    expect(BLOG_HARDCODED_SEO_SLUGS.has(UAE_CSAT_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(UAE_CSAT_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(UAE_CSAT_SLUG)).toBe(true);
    expect(INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => item.to)).toContain(UAE_CSAT_PATH);
  });

  it('serves crawlers the full SSR page instead of the /api/blog industries stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(UAE_CSAT_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/bionixus-industries/insights/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/bionixus-industries/insights/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(`/api/indexnow-key?__ssr=1&url=${UAE_CSAT_PATH}`);
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source and the committed sitemap, dated 12 October 2026', () => {
    expect(UAE_CSAT_HARDCODED_POST.date).toBe('12 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${UAE_CSAT_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-12'`,
    );
    expect(sitemapXml).toMatch(new RegExp(`<loc>${UAE_CSAT_URL}</loc>\\s*<lastmod>2026-10-12</lastmod>`));
  });
});
