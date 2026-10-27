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
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import { getCrawlerStubForSlug, shouldCrawlerIndexBlogSlug } from '../../../../blog-crawler-stubs.mjs';
import { stripDefaultOrganizationJsonLd } from '../../../../lib/strip-industries-insights-org.mjs';
import {
  GLP1_PHYSICIAN_SURVEY_BODY_HTML,
  GLP1_PHYSICIAN_SURVEY_COVER_IMAGE,
  GLP1_PHYSICIAN_SURVEY_COVER_IMAGE_ALT,
  GLP1_PHYSICIAN_SURVEY_DISPLAY_SUBTITLE,
  GLP1_PHYSICIAN_SURVEY_DISPLAY_TITLE,
  GLP1_PHYSICIAN_SURVEY_EXECUTIVE_SUMMARY_HTML,
  GLP1_PHYSICIAN_SURVEY_FAQ,
  GLP1_PHYSICIAN_SURVEY_FIGURES,
  GLP1_PHYSICIAN_SURVEY_HARDCODED_POST,
  GLP1_PHYSICIAN_SURVEY_HERO_IMAGE,
  GLP1_PHYSICIAN_SURVEY_HERO_IMAGE_ALT,
  GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION,
  GLP1_PHYSICIAN_SURVEY_META_TITLE,
  GLP1_PHYSICIAN_SURVEY_PATH,
  GLP1_PHYSICIAN_SURVEY_SLUG,
  GLP1_PHYSICIAN_SURVEY_STUDIES,
  GLP1_PHYSICIAN_SURVEY_TABLE_OF_CONTENTS,
  GLP1_PHYSICIAN_SURVEY_TAGS,
  GLP1_PHYSICIAN_SURVEY_URL,
  GLP1_PHYSICIAN_SURVEY_WORD_COUNT,
  countWords,
} from '@/data/blog-glp1-physician-survey-saudi-arabia';

const PHRASE = 'glp-1 physician survey saudi arabia';
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
  const result = await render(GLP1_PHYSICIAN_SURVEY_PATH, {
    pageType: 'blog-post',
    blogSlug: GLP1_PHYSICIAN_SURVEY_SLUG,
    blogPost: GLP1_PHYSICIAN_SURVEY_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/glp-1-physician-survey-saudi-arabia: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(GLP1_PHYSICIAN_SURVEY_DISPLAY_TITLE);
    expect(h1s[0]).toContain(GLP1_PHYSICIAN_SURVEY_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE);
    const visible = text(html);
    expect(visible).toContain('References');
    expect(visible).toContain('Guaranteed in writing');
    for (const item of GLP1_PHYSICIAN_SURVEY_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1400);
    expect(GLP1_PHYSICIAN_SURVEY_WORD_COUNT).toBe(4055);
  });

  it('puts the text-free artwork behind the h1 and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${GLP1_PHYSICIAN_SURVEY_HERO_IMAGE}" alt="${GLP1_PHYSICIAN_SURVEY_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${GLP1_PHYSICIAN_SURVEY_COVER_IMAGE}"`);
    expect(GLP1_PHYSICIAN_SURVEY_HARDCODED_POST.ogImage).toBe(GLP1_PHYSICIAN_SURVEY_COVER_IMAGE);
  });

  it('renders a visible breadcrumb trail that matches the BreadcrumbList', () => {
    const navs = [...html.matchAll(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/g)].map((m) => m[0]);
    const classOf = (nav: string) => /^<nav[^>]*class="([^"]*)"/.exec(nav)?.[1].split(/\s+/) ?? [];
    expect(navs).toHaveLength(2);
    const wide = navs.find((nav) => classOf(nav).includes('md:block'));
    const phone = navs.find((nav) => classOf(nav).includes('md:hidden'));
    expect(classOf(wide ?? '')).toEqual(expect.arrayContaining(['hidden', 'bg-transparent']));
    expect(phone).toBeDefined();
    expect(html.indexOf(wide ?? '')).toBeLessThan(html.indexOf('<article'));
    expect(html.indexOf(phone ?? '')).toBeLessThan(html.indexOf('<article'));
    for (const nav of navs) expect(text(nav)).toBe('Home / Blog / GLP-1 physician survey Saudi Arabia');
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Blog',
      'GLP-1 physician survey Saudi Arabia',
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${GLP1_PHYSICIAN_SURVEY_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${GLP1_PHYSICIAN_SURVEY_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${GLP1_PHYSICIAN_SURVEY_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([GLP1_PHYSICIAN_SURVEY_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([GLP1_PHYSICIAN_SURVEY_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([GLP1_PHYSICIAN_SURVEY_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-12T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-12T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toHaveLength(1);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(GLP1_PHYSICIAN_SURVEY_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([GLP1_PHYSICIAN_SURVEY_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([GLP1_PHYSICIAN_SURVEY_COVER_IMAGE_ALT]);
  });
});

describe('/blog/glp-1-physician-survey-saudi-arabia: JSON-LD', () => {
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
    expect(article.headline).toBe(GLP1_PHYSICIAN_SURVEY_DISPLAY_TITLE);
    expect(article.description).toBe(GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-12T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-12T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Market Research');
    expect(article.keywords).toBe(GLP1_PHYSICIAN_SURVEY_TAGS.join(', '));
    expect(article.wordCount).toBe(GLP1_PHYSICIAN_SURVEY_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${GLP1_PHYSICIAN_SURVEY_URL}#webpage`,
      url: GLP1_PHYSICIAN_SURVEY_URL,
    });
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${GLP1_PHYSICIAN_SURVEY_URL}#primaryimage`,
      url: `https://www.bionixus.com${GLP1_PHYSICIAN_SURVEY_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: GLP1_PHYSICIAN_SURVEY_COVER_IMAGE_ALT,
    });
    expect(images.slice(1)).toEqual(
      GLP1_PHYSICIAN_SURVEY_FIGURES.map((figure) => ({
        '@type': 'ImageObject',
        url: `https://www.bionixus.com${figure.src}`,
        width: figure.width,
        height: figure.height,
        caption: figure.caption,
      })),
    );
    expect(article.author['@type']).toBe('Person');
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${GLP1_PHYSICIAN_SURVEY_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${GLP1_PHYSICIAN_SURVEY_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${GLP1_PHYSICIAN_SURVEY_URL}#breadcrumb` });
  });

  it('keeps the Organization node to the verified facts and all six labelled offices', () => {
    const orgs = byType('Organization');
    expect(orgs).toHaveLength(1);
    const pageOrg = orgs.find((node) => typeof node.description === 'string' && node.description.includes('127 studies'));
    expect(pageOrg).toBeDefined();
    expect(pageOrg!['@id']).toBe('https://www.bionixus.com/#organization');
    expect(pageOrg!.foundingDate).toBe('2012');
    for (const fact of ['118 clients', '48 countries', '127 studies', '3,200 physicians', 'Field offices']) {
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

  it('drops the template Organization, which lists every Google listing, from this page only', () => {
    const page = stripDefaultOrganizationJsonLd(indexHtml, GLP1_PHYSICIAN_SURVEY_PATH);
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
    ).toEqual(GLP1_PHYSICIAN_SURVEY_FAQ);
    expect(GLP1_PHYSICIAN_SURVEY_FAQ.length).toBeGreaterThanOrEqual(5);
    expect(GLP1_PHYSICIAN_SURVEY_FAQ.length).toBeLessThanOrEqual(8);
  });

  it('lists the same published surveys in the ItemList and the comparison table', () => {
    const [itemList] = byType('ItemList');
    const names = itemList.itemListElement.map((entry: JsonLdNode) => entry.item?.name ?? entry.name);
    expect(names).toEqual(GLP1_PHYSICIAN_SURVEY_STUDIES.map((entry) => entry.name));
    for (const entry of itemList.itemListElement) {
      expect(entry.item).toBeUndefined();
    }
    const table = /<table>[\s\S]*?<\/table>/.exec(GLP1_PHYSICIAN_SURVEY_BODY_HTML)?.[0] ?? '';
    const firstCells = [...table.matchAll(/<tr><td>([^<]+)<\/td>/g)].map((m) => m[1]);
    expect(firstCells).toEqual(names);
  });
});

describe('/blog/glp-1-physician-survey-saudi-arabia: copy rules', () => {
  const allCopy = [
    GLP1_PHYSICIAN_SURVEY_EXECUTIVE_SUMMARY_HTML,
    GLP1_PHYSICIAN_SURVEY_BODY_HTML,
    JSON.stringify(GLP1_PHYSICIAN_SURVEY_FAQ),
    JSON.stringify(GLP1_PHYSICIAN_SURVEY_HARDCODED_POST.ctaSection),
    JSON.stringify(GLP1_PHYSICIAN_SURVEY_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(GLP1_PHYSICIAN_SURVEY_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(GLP1_PHYSICIAN_SURVEY_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(getCtrSeo(GLP1_PHYSICIAN_SURVEY_PATH)).toEqual({
      title: GLP1_PHYSICIAN_SURVEY_META_TITLE,
      description: GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(GLP1_PHYSICIAN_SURVEY_SLUG)).toEqual({
      title: GLP1_PHYSICIAN_SURVEY_META_TITLE,
      description: GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION,
    });
  });

  it('places the exact target phrase in the title, meta, answer-first summary and an H2', () => {
    const summary = text(GLP1_PHYSICIAN_SURVEY_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    expect(GLP1_PHYSICIAN_SURVEY_META_TITLE.toLowerCase()).toContain(PHRASE);
    for (const field of [GLP1_PHYSICIAN_SURVEY_META_DESCRIPTION, summary]) {
      expect(field.toLowerCase()).toContain(PHRASE);
    }
    expect(GLP1_PHYSICIAN_SURVEY_BODY_HTML.toLowerCase()).toContain(PHRASE);
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...GLP1_PHYSICIAN_SURVEY_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(GLP1_PHYSICIAN_SURVEY_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('labels Al Khobar and Kuwait as field offices and keeps the written guarantee', () => {
    expect(allCopy).toMatch(/field offices in Dubai, Al Khobar and Salmiya, Kuwait/i);
    expect(allCopy).toMatch(/Guaranteed in writing/);
    expect(allCopy).toMatch(/\$10k–\$60k/);
  });

  it('cites every linked reference inline', () => {
    const [narrative, referenceList] = GLP1_PHYSICIAN_SURVEY_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    expect(items.length).toBe(10);
    const linked = items.filter(([, , html]) => html.includes('<a '));
    expect(linked.length).toBe(10);
    for (const [, , html] of linked) {
      const url = /href="([^"]+)"/.exec(html)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab', () => {
    const external = [...GLP1_PHYSICIAN_SURVEY_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(10);
    for (const [, , attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
    }
  });

  it('links the required hub, obesity market and buyer-shortlist pages in the opening', () => {
    const firstWords = text(GLP1_PHYSICIAN_SURVEY_BODY_HTML).split(/\s+/).slice(0, 200).join(' ');
    expect(GLP1_PHYSICIAN_SURVEY_BODY_HTML).toContain('href="/healthcare-market-research"');
    expect(GLP1_PHYSICIAN_SURVEY_BODY_HTML).toContain('href="/healthcare-market-research/saudi-arabia"');
    expect(GLP1_PHYSICIAN_SURVEY_BODY_HTML).toContain('href="/saudi-arabia-obesity-market"');
    expect(GLP1_PHYSICIAN_SURVEY_BODY_HTML).toContain('href="/blog/who-does-obesity-market-research-saudi-arabia"');
    expect(firstWords.toLowerCase()).toMatch(/healthcare market research/);
    expect(firstWords.toLowerCase()).toMatch(/obesity/);
  });

  it('credits no MENA byline names', () => {
    const visible = text(html);
    expect(visible).not.toContain('Mohammad Ashour');
    expect(visible).not.toContain('Dina Ibrahim');
  });

  it('places lazy-loaded in-content figures with alt text, captions and files under 120 KB', () => {
    for (const figure of GLP1_PHYSICIAN_SURVEY_FIGURES) {
      expect(figure.src.endsWith('.webp')).toBe(true);
      const file = statSync(join(root, 'public', figure.src));
      expect(file.size).toBeGreaterThan(5 * 1024);
      expect(file.size).toBeLessThanOrEqual(120 * 1024);
      expect(html).toContain(
        `src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy"`,
      );
      expect(html).toContain(`<figcaption>${figure.caption}</figcaption>`);
    }
    expect(html).toContain(`src="${GLP1_PHYSICIAN_SURVEY_HERO_IMAGE}"`);
    expect(GLP1_PHYSICIAN_SURVEY_HARDCODED_POST.ogImage).toBe(GLP1_PHYSICIAN_SURVEY_COVER_IMAGE);
  });

  it('keeps the hero and OG card at 1200 by 630 and ships a Playwright cover generator', async () => {
    const cover = join(root, 'public', GLP1_PHYSICIAN_SURVEY_COVER_IMAGE);
    const hero = join(root, 'public', GLP1_PHYSICIAN_SURVEY_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
    const script = readFileSync(join(root, 'scripts/generate-glp1-physician-survey-cover.mjs'), 'utf8');
    expect(script).toMatch(/playwright/);
    expect(script).toMatch(/from 'sharp'/);
    expect(script).not.toMatch(/gemini-2\.5-flash-image|Gemini cover is pending|GoogleGenAI/);
    expect(script).not.toMatch(/from ['"]@pollinations|openai\.images|dall-e|generate-photoreal-blog-cover/);
  });
});

describe('/blog/glp-1-physician-survey-saudi-arabia: registration', () => {
  it('is a hardcoded, force-indexed post', () => {
    expect(hardcodedSeoPosts).toContain(GLP1_PHYSICIAN_SURVEY_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(GLP1_PHYSICIAN_SURVEY_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(GLP1_PHYSICIAN_SURVEY_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(GLP1_PHYSICIAN_SURVEY_SLUG)).toBe(true);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(GLP1_PHYSICIAN_SURVEY_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${GLP1_PHYSICIAN_SURVEY_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 12 October 2026', () => {
    expect(GLP1_PHYSICIAN_SURVEY_HARDCODED_POST.date).toBe('12 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${GLP1_PHYSICIAN_SURVEY_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-12'`,
    );
    expect(sitemapXml).toMatch(new RegExp(`<loc>${GLP1_PHYSICIAN_SURVEY_URL}</loc>\\s*<lastmod>2026-10-12</lastmod>`));
    expect(llms).toContain(GLP1_PHYSICIAN_SURVEY_URL);
  });
});
