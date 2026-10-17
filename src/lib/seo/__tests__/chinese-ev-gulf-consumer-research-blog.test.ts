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
  CHINESE_EV_GULF_BODY_HTML,
  CHINESE_EV_GULF_COVER_IMAGE,
  CHINESE_EV_GULF_COVER_IMAGE_ALT,
  CHINESE_EV_GULF_COVER_PENDING,
  CHINESE_EV_GULF_DISPLAY_SUBTITLE,
  CHINESE_EV_GULF_DISPLAY_TITLE,
  CHINESE_EV_GULF_EXECUTIVE_SUMMARY_HTML,
  CHINESE_EV_GULF_FAQ,
  CHINESE_EV_GULF_HARDCODED_POST,
  CHINESE_EV_GULF_HERO_IMAGE,
  CHINESE_EV_GULF_HERO_IMAGE_ALT,
  CHINESE_EV_GULF_META_DESCRIPTION,
  CHINESE_EV_GULF_META_TITLE,
  CHINESE_EV_GULF_PATH,
  CHINESE_EV_GULF_REFERENCES,
  CHINESE_EV_GULF_SLUG,
  CHINESE_EV_GULF_TABLE_OF_CONTENTS,
  CHINESE_EV_GULF_TAGS,
  CHINESE_EV_GULF_URL,
  CHINESE_EV_GULF_WORD_COUNT,
  countWords,
} from '@/data/blog-chinese-ev-brands-saudi-uae-consumer-research';

const PHRASE = 'chinese ev consumer research';
const PHRASE_GULF = 'chinese ev brands in the gulf';
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
  const result = await render(CHINESE_EV_GULF_PATH, {
    pageType: 'blog-post',
    blogSlug: CHINESE_EV_GULF_SLUG,
    blogPost: CHINESE_EV_GULF_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(CHINESE_EV_GULF_DISPLAY_TITLE);
    expect(h1s[0]).toContain(CHINESE_EV_GULF_DISPLAY_SUBTITLE);
    const visible = text(html);
    expect(visible.toLowerCase()).toContain(PHRASE);
    expect(visible.toLowerCase()).toContain(PHRASE_GULF);
    expect(visible).toContain('industry insights hub');
    expect(visible).toContain('References');
    for (const item of CHINESE_EV_GULF_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1800);
  });

  it('uses the hero path in the page and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${CHINESE_EV_GULF_HERO_IMAGE}"`);
    expect(html).toContain(`alt="${CHINESE_EV_GULF_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${CHINESE_EV_GULF_COVER_IMAGE}"`);
    expect(CHINESE_EV_GULF_HARDCODED_POST.ogImage).toBe(CHINESE_EV_GULF_COVER_IMAGE);
    expect(CHINESE_EV_GULF_HARDCODED_POST.ogImageAlt).toBe(CHINESE_EV_GULF_COVER_IMAGE_ALT);
  });

  it('emits the industries BreadcrumbList even without a visible breadcrumbLabel trail', () => {
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Industries',
      'Industry Insights',
      CHINESE_EV_GULF_DISPLAY_TITLE,
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${CHINESE_EV_GULF_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([CHINESE_EV_GULF_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${CHINESE_EV_GULF_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${CHINESE_EV_GULF_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([CHINESE_EV_GULF_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([CHINESE_EV_GULF_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([CHINESE_EV_GULF_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([CHINESE_EV_GULF_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-16T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-16T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Sarah Chen']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Automotive Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(CHINESE_EV_GULF_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([CHINESE_EV_GULF_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([CHINESE_EV_GULF_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([CHINESE_EV_GULF_COVER_IMAGE_ALT]);
  });
});

describe('/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research: JSON-LD', () => {
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
    expect(article.headline).toBe(CHINESE_EV_GULF_DISPLAY_TITLE);
    expect(article.description).toBe(CHINESE_EV_GULF_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-16T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-16T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Automotive Market Research');
    expect(article.keywords).toBe(CHINESE_EV_GULF_TAGS.join(', '));
    expect(article.wordCount).toBe(CHINESE_EV_GULF_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${CHINESE_EV_GULF_URL}#webpage`,
      url: CHINESE_EV_GULF_URL,
    });
    expect(article.about).toEqual(
      expect.arrayContaining([
        { '@type': 'Thing', name: 'Chinese EV consumer research' },
        { '@type': 'Thing', name: 'Electric vehicle market research' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ]),
    );
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${CHINESE_EV_GULF_URL}#primaryimage`,
      url: `https://www.bionixus.com${CHINESE_EV_GULF_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: CHINESE_EV_GULF_COVER_IMAGE_ALT,
    });
    expect(article.author).toEqual({
      '@type': 'Person',
      name: 'Sarah Chen',
      jobTitle: 'Global Research Manager',
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    });
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${CHINESE_EV_GULF_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${CHINESE_EV_GULF_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${CHINESE_EV_GULF_URL}#breadcrumb` });
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
    const page = stripDefaultOrganizationJsonLd(indexHtml, CHINESE_EV_GULF_PATH);
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
    ).toEqual(CHINESE_EV_GULF_FAQ);
    expect(CHINESE_EV_GULF_FAQ).toHaveLength(7);
  });
});

describe('/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research: copy rules', () => {
  const allCopy = [
    CHINESE_EV_GULF_EXECUTIVE_SUMMARY_HTML,
    CHINESE_EV_GULF_BODY_HTML,
    JSON.stringify(CHINESE_EV_GULF_FAQ),
    JSON.stringify(CHINESE_EV_GULF_HARDCODED_POST.ctaSection),
    JSON.stringify(CHINESE_EV_GULF_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(CHINESE_EV_GULF_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(CHINESE_EV_GULF_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(CHINESE_EV_GULF_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(CHINESE_EV_GULF_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(CHINESE_EV_GULF_WORD_COUNT).toBeGreaterThanOrEqual(3800);
    expect(CHINESE_EV_GULF_WORD_COUNT).toBeLessThanOrEqual(5000);
    expect(getCtrSeo(CHINESE_EV_GULF_PATH)).toEqual({
      title: CHINESE_EV_GULF_META_TITLE,
      description: CHINESE_EV_GULF_META_DESCRIPTION,
    });
    expect(getCtrSeo(`/blog/${CHINESE_EV_GULF_SLUG}`)).toEqual({
      title: CHINESE_EV_GULF_META_TITLE,
      description: CHINESE_EV_GULF_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(CHINESE_EV_GULF_SLUG)).toEqual({
      title: CHINESE_EV_GULF_META_TITLE,
      description: CHINESE_EV_GULF_META_DESCRIPTION,
    });
  });

  it('places both target phrases in the title or meta, the answer-first summary and an H2', () => {
    const summary = text(CHINESE_EV_GULF_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    const h2s = [...CHINESE_EV_GULF_BODY_HTML.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) =>
      text(m[1]).toLowerCase(),
    );
    expect(CHINESE_EV_GULF_META_TITLE.toLowerCase()).toContain(PHRASE);
    expect(CHINESE_EV_GULF_META_DESCRIPTION.toLowerCase()).toContain(PHRASE);
    expect(CHINESE_EV_GULF_META_DESCRIPTION.toLowerCase()).toContain(PHRASE_GULF);
    expect(summary.toLowerCase()).toContain(PHRASE);
    expect(summary.toLowerCase()).toContain(PHRASE_GULF);
    expect(h2s.some((h2) => h2.includes(PHRASE))).toBe(true);
    expect(h2s.some((h2) => h2.includes(PHRASE_GULF))).toBe(true);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...CHINESE_EV_GULF_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(CHINESE_EV_GULF_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('states the approved commercial facts and labels field offices', () => {
    expect(allCopy).toMatch(/\$10,000 to \$60,000/);
    expect(allCopy).toMatch(/field offices/i);
    expect(allCopy).toMatch(/Al Khobar/);
    expect(allCopy).toMatch(/Guaranteed in writing/);
    expect(allCopy).toMatch(/Forty client reviews|40 client reviews/i);
    expect(allCopy).not.toMatch(/guaranteed accuracy|guaranteed findings/i);
    expect(allCopy).not.toMatch(/Mohammad Ashour/);
    expect(allCopy).not.toMatch(/3,200 physicians/);
    expect(allCopy).not.toContain('/healthcare-market-research');
  });

  it('cites every linked reference inline', () => {
    const [narrative, referenceList] = CHINESE_EV_GULF_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    expect(items.map(([, id]) => id)).toEqual(CHINESE_EV_GULF_REFERENCES.map((ref) => ref.id));
    expect(items.length).toBe(CHINESE_EV_GULF_REFERENCES.length);
    for (const [, , itemHtml] of items) {
      expect(itemHtml).toContain('<a ');
      const url = /href="([^"]+)"/.exec(itemHtml)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and keeps tel/mailto links', () => {
    const external = [...CHINESE_EV_GULF_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(15);
    for (const [, href, attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
      expect(href).not.toMatch(/iqvia\.com|ipsos\.com|kantar\.com|nielsen\.com|forrester\.com/i);
    }
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="mailto:admin@bionixus.com"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="tel:+18884655557"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="tel:+447727666682"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="tel:+966501825336"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="/bionixus-industries/insights"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="/saudi-arabia-automotive-market-research"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="/uae-automotive-market-research"');
    expect(CHINESE_EV_GULF_BODY_HTML).toContain('href="/bionixus-industries/insights/consumer-survey-company-saudi-arabia"');
  });

  it('links the industries hub within the first 200 visible words', () => {
    const firstPara = text(/<p>([\s\S]*?)<\/p>/.exec(CHINESE_EV_GULF_BODY_HTML)?.[1] ?? '');
    expect(countWords(firstPara)).toBeLessThan(200);
    expect(CHINESE_EV_GULF_BODY_HTML.split('</p>')[0]).toContain('href="/bionixus-industries/insights"');
  });
});

describe('/bionixus-industries/insights/chinese-ev-brands-saudi-uae-consumer-research: registration', () => {
  it('is a hardcoded, force-indexed industries post linked from the hub', () => {
    expect(hardcodedSeoPosts).toContain(CHINESE_EV_GULF_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(CHINESE_EV_GULF_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(CHINESE_EV_GULF_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(CHINESE_EV_GULF_SLUG)).toBe(true);
    expect(CHINESE_EV_GULF_HARDCODED_POST.contentSilo).toBe('industries');
    expect(INDUSTRIES_INSIGHT_EDITORIAL_LINKS.map((item) => item.to)).toContain(CHINESE_EV_GULF_PATH);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(CHINESE_EV_GULF_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/bionixus-industries/insights/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/bionixus-industries/insights/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${CHINESE_EV_GULF_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
    expect(JSON.stringify(vercel.rewrites)).not.toContain('/api/blog/:slug?industriesInsight=1');
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 16 October 2026', () => {
    expect(CHINESE_EV_GULF_HARDCODED_POST.date).toBe('16 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${CHINESE_EV_GULF_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-16'`,
    );
    expect(sitemapXml).toMatch(new RegExp(`<loc>${CHINESE_EV_GULF_URL}</loc>\\s*<lastmod>2026-10-16</lastmod>`));
    expect(llms).toContain(CHINESE_EV_GULF_URL);
  });

  it('keeps the hero and OG card at 1200 by 630 once the cover is no longer pending', async () => {
    expect(CHINESE_EV_GULF_COVER_PENDING).toBe(false);
    const cover = join(root, 'public', CHINESE_EV_GULF_COVER_IMAGE);
    const hero = join(root, 'public', CHINESE_EV_GULF_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
  });
});
