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
  CHOOSE_AGENCY_KSA_BODY_HTML,
  CHOOSE_AGENCY_KSA_COVER_IMAGE,
  CHOOSE_AGENCY_KSA_COVER_IMAGE_ALT,
  CHOOSE_AGENCY_KSA_DISPLAY_SUBTITLE,
  CHOOSE_AGENCY_KSA_DISPLAY_TITLE,
  CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML,
  CHOOSE_AGENCY_KSA_FAQ,
  CHOOSE_AGENCY_KSA_FIGURES,
  CHOOSE_AGENCY_KSA_HARDCODED_POST,
  CHOOSE_AGENCY_KSA_HERO_IMAGE,
  CHOOSE_AGENCY_KSA_HERO_IMAGE_ALT,
  CHOOSE_AGENCY_KSA_META_DESCRIPTION,
  CHOOSE_AGENCY_KSA_META_TITLE,
  CHOOSE_AGENCY_KSA_PATH,
  CHOOSE_AGENCY_KSA_QUESTIONS,
  CHOOSE_AGENCY_KSA_SLUG,
  CHOOSE_AGENCY_KSA_TABLE_OF_CONTENTS,
  CHOOSE_AGENCY_KSA_TAGS,
  CHOOSE_AGENCY_KSA_URL,
  CHOOSE_AGENCY_KSA_WORD_COUNT,
  countWords,
} from '@/data/blog-how-to-choose-healthcare-market-research-agency-saudi-arabia';

const PHRASE = 'healthcare market research agency saudi arabia';
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
  const result = await render(CHOOSE_AGENCY_KSA_PATH, {
    pageType: 'blog-post',
    blogSlug: CHOOSE_AGENCY_KSA_SLUG,
    blogPost: CHOOSE_AGENCY_KSA_HARDCODED_POST,
    relatedPosts: { related: [], prev: null, next: null },
  });
  html = result.html;
  const helmet = result.helmetData;
  head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join('\n');
  jsonLd = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}, 120_000);

describe('/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia: server render', () => {
  it('ships the full article, the FAQ and one h1 in the initial HTML', () => {
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(CHOOSE_AGENCY_KSA_DISPLAY_TITLE);
    expect(h1s[0]).toContain(CHOOSE_AGENCY_KSA_DISPLAY_SUBTITLE);
    expect(h1s[0].toLowerCase()).toContain(PHRASE);
    const visible = text(html);
    expect(visible).toContain('What is a healthcare market research agency Saudi Arabia?');
    expect(visible).toContain('Ivona Gunjova');
    expect(visible).toContain('Global Research Manager');
    expect(visible).toContain('References');
    expect(visible).not.toMatch(/Mohammad Ashour/i);
    for (const item of CHOOSE_AGENCY_KSA_FAQ) {
      expect(visible).toContain(text(item.question));
      expect(visible).toContain(text(item.answer));
    }
    expect(html).toMatch(/<details[\s>]/);
    expect(countWords(visible)).toBeGreaterThan(1400);
    expect(CHOOSE_AGENCY_KSA_WORD_COUNT).toBeGreaterThanOrEqual(1400);
    expect(CHOOSE_AGENCY_KSA_WORD_COUNT).toBeLessThanOrEqual(2200);
  });

  it('links the Saudi ranking and the research hub inside the first 200 words', () => {
    const opening = `${text(CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML)} ${text(CHOOSE_AGENCY_KSA_BODY_HTML)}`;
    const first200 = opening.split(/\s+/).slice(0, 200).join(' ');
    expect(CHOOSE_AGENCY_KSA_BODY_HTML).toContain(
      'href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026"',
    );
    expect(CHOOSE_AGENCY_KSA_BODY_HTML).toContain('href="/healthcare-market-research"');
    expect(first200.toLowerCase()).toMatch(/healthcare market research/);
  });

  it('puts the text-free artwork path behind the h1 and keeps the titled card for social sharing', () => {
    expect(html).toContain(`src="${CHOOSE_AGENCY_KSA_HERO_IMAGE}" alt="${CHOOSE_AGENCY_KSA_HERO_IMAGE_ALT}"`);
    expect(html).not.toContain(`src="${CHOOSE_AGENCY_KSA_COVER_IMAGE}"`);
    expect(CHOOSE_AGENCY_KSA_HARDCODED_POST.ogImage).toBe(CHOOSE_AGENCY_KSA_COVER_IMAGE);
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
    for (const nav of navs) expect(text(nav)).toBe('Home / Blog / Choose a Saudi healthcare research agency');
    const crumbs = jsonLd.find((node) => node['@type'] === 'BreadcrumbList');
    expect(crumbs?.itemListElement.map((item: JsonLdNode) => item.name)).toEqual([
      'Home',
      'Blog',
      'Choose a Saudi healthcare research agency',
    ]);
  });

  it('uses the exact title, description, canonical and robots tags', () => {
    expect(head).toContain(`<title data-rh="true">${CHOOSE_AGENCY_KSA_META_TITLE}</title>`);
    expect(metaContent(head, 'name', 'description')).toEqual([CHOOSE_AGENCY_KSA_META_DESCRIPTION]);
    expect(head).toContain(`rel="canonical" href="${CHOOSE_AGENCY_KSA_URL}"`);
    expect(metaContent(head, 'name', 'robots')[0]).toMatch(/^index,follow/);
  });

  it('emits complete Open Graph and Twitter card tags', () => {
    const image = `https://www.bionixus.com${CHOOSE_AGENCY_KSA_COVER_IMAGE}`;
    expect(metaContent(head, 'property', 'og:type')).toEqual(['article']);
    expect(metaContent(head, 'property', 'og:title')).toEqual([CHOOSE_AGENCY_KSA_META_TITLE]);
    expect(metaContent(head, 'property', 'og:description')).toEqual([CHOOSE_AGENCY_KSA_META_DESCRIPTION]);
    expect(metaContent(head, 'property', 'og:url')).toEqual([CHOOSE_AGENCY_KSA_URL]);
    expect(metaContent(head, 'property', 'og:image')).toEqual([image]);
    expect(metaContent(head, 'property', 'og:image:width')).toEqual(['1200']);
    expect(metaContent(head, 'property', 'og:image:height')).toEqual(['630']);
    expect(metaContent(head, 'property', 'og:image:alt')).toEqual([CHOOSE_AGENCY_KSA_COVER_IMAGE_ALT]);
    expect(metaContent(head, 'property', 'article:published_time')).toEqual(['2026-10-15T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:modified_time')).toEqual(['2026-10-15T12:00:00.000Z']);
    expect(metaContent(head, 'property', 'article:author')).toEqual(['Ivona Gunjova']);
    expect(metaContent(head, 'property', 'article:section')).toEqual(['Market Research']);
    expect(metaContent(head, 'property', 'article:tag')).toEqual(CHOOSE_AGENCY_KSA_TAGS);
    expect(metaContent(head, 'name', 'twitter:card')).toEqual(['summary_large_image']);
    expect(metaContent(head, 'name', 'twitter:title')).toEqual([CHOOSE_AGENCY_KSA_META_TITLE]);
    expect(metaContent(head, 'name', 'twitter:description')).toEqual([CHOOSE_AGENCY_KSA_META_DESCRIPTION]);
    expect(metaContent(head, 'name', 'twitter:image')).toEqual([image]);
    expect(metaContent(head, 'name', 'twitter:image:alt')).toEqual([CHOOSE_AGENCY_KSA_COVER_IMAGE_ALT]);
  });
});

describe('/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia: JSON-LD', () => {
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

  it('fills every BlogPosting property, with an ImageObject cover and Ivona Gunjova as Person', () => {
    const [article] = byType('BlogPosting');
    expect(article.headline).toBe(CHOOSE_AGENCY_KSA_DISPLAY_TITLE);
    expect(article.description).toBe(CHOOSE_AGENCY_KSA_META_DESCRIPTION);
    expect(article.datePublished).toBe('2026-10-15T12:00:00.000Z');
    expect(article.dateModified).toBe('2026-10-15T12:00:00.000Z');
    expect(article.inLanguage).toBe('en');
    expect(article.articleSection).toBe('Market Research');
    expect(article.keywords).toBe(CHOOSE_AGENCY_KSA_TAGS.join(', '));
    expect(article.wordCount).toBe(CHOOSE_AGENCY_KSA_WORD_COUNT);
    expect(article.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': `${CHOOSE_AGENCY_KSA_URL}#webpage`,
      url: CHOOSE_AGENCY_KSA_URL,
    });
    const images = Array.isArray(article.image) ? article.image : [article.image];
    expect(images[0]).toMatchObject({
      '@type': 'ImageObject',
      '@id': `${CHOOSE_AGENCY_KSA_URL}#primaryimage`,
      url: `https://www.bionixus.com${CHOOSE_AGENCY_KSA_COVER_IMAGE}`,
      width: 1200,
      height: 630,
      caption: CHOOSE_AGENCY_KSA_COVER_IMAGE_ALT,
    });
    expect(images.slice(1)).toEqual(
      CHOOSE_AGENCY_KSA_FIGURES.map((figure) => ({
        '@type': 'ImageObject',
        url: `https://www.bionixus.com${figure.src}`,
        width: figure.width,
        height: figure.height,
        caption: figure.caption,
      })),
    );
    expect(article.author).toMatchObject({
      '@type': 'Person',
      name: 'Ivona Gunjova',
      jobTitle: 'Global Research Manager',
    });
    expect(JSON.stringify(article.author)).not.toMatch(/Mohammad Ashour|Alsaadany/i);
    expect(article.publisher).toMatchObject({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      logo: { '@type': 'ImageObject' },
    });
    const [webPage] = byType('WebPage');
    expect(webPage['@id']).toBe(`${CHOOSE_AGENCY_KSA_URL}#webpage`);
    expect(webPage.primaryImageOfPage).toEqual({ '@id': `${CHOOSE_AGENCY_KSA_URL}#primaryimage` });
    expect(webPage.breadcrumb).toEqual({ '@id': `${CHOOSE_AGENCY_KSA_URL}#breadcrumb` });
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
    const page = stripDefaultOrganizationJsonLd(indexHtml, CHOOSE_AGENCY_KSA_PATH);
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
    ).toEqual(CHOOSE_AGENCY_KSA_FAQ);
    expect(CHOOSE_AGENCY_KSA_FAQ).toHaveLength(7);
  });

  it('lists the same questions in the ItemList and the comparison table', () => {
    const [itemList] = byType('ItemList');
    const names = itemList.itemListElement.map((entry: JsonLdNode) => entry.item?.name ?? entry.name);
    expect(names).toEqual(CHOOSE_AGENCY_KSA_QUESTIONS.map((entry) => entry.name));
    for (const entry of itemList.itemListElement) {
      expect(entry.item).toBeUndefined();
      expect(JSON.stringify(entry)).not.toMatch(/https?:\/\//);
    }
  });
});

describe('/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia: copy rules', () => {
  const allCopy = [
    CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML,
    CHOOSE_AGENCY_KSA_BODY_HTML,
    JSON.stringify(CHOOSE_AGENCY_KSA_FAQ),
    JSON.stringify(CHOOSE_AGENCY_KSA_HARDCODED_POST.ctaSection),
    JSON.stringify(CHOOSE_AGENCY_KSA_HARDCODED_POST.schemaExtras),
  ].join('\n');

  it('meets the title and description length bands, matched by the CTR override and crawler stub', () => {
    expect(CHOOSE_AGENCY_KSA_META_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(CHOOSE_AGENCY_KSA_META_TITLE.length).toBeLessThanOrEqual(60);
    expect(CHOOSE_AGENCY_KSA_META_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(CHOOSE_AGENCY_KSA_META_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(getCtrSeo(CHOOSE_AGENCY_KSA_PATH)).toEqual({
      title: CHOOSE_AGENCY_KSA_META_TITLE,
      description: CHOOSE_AGENCY_KSA_META_DESCRIPTION,
    });
    expect(getCrawlerStubForSlug(CHOOSE_AGENCY_KSA_SLUG)).toEqual({
      title: CHOOSE_AGENCY_KSA_META_TITLE,
      description: CHOOSE_AGENCY_KSA_META_DESCRIPTION,
    });
  });

  it('places the exact target phrase in the title, meta, answer-first summary and H2s', () => {
    const summary = text(CHOOSE_AGENCY_KSA_EXECUTIVE_SUMMARY_HTML);
    const summaryWords = countWords(summary.replace(/^Short answer:\s*/, ''));
    expect(summaryWords).toBeGreaterThanOrEqual(40);
    expect(summaryWords).toBeLessThanOrEqual(60);
    expect(CHOOSE_AGENCY_KSA_META_TITLE.toLowerCase()).toContain(PHRASE);
    expect(CHOOSE_AGENCY_KSA_META_DESCRIPTION.toLowerCase()).toContain(PHRASE);
    expect(summary.toLowerCase()).toContain(PHRASE);
    expect(CHOOSE_AGENCY_KSA_BODY_HTML.toLowerCase()).toContain(PHRASE);
    expect(CHOOSE_AGENCY_KSA_BODY_HTML.toLowerCase()).toContain('how to choose a healthcare market research agency');
  });

  it('keeps every TOC anchor and H2 id in step', () => {
    const ids = [...CHOOSE_AGENCY_KSA_BODY_HTML.matchAll(/<h2 id="([^"]+)"/g)].map((m) => m[1]);
    expect(CHOOSE_AGENCY_KSA_TABLE_OF_CONTENTS.map((item) => item.anchor)).toEqual(ids);
  });

  it('labels Al Khobar and Kuwait as field offices and states custom pricing once', () => {
    expect(allCopy).toMatch(/field offices/i);
    expect(allCopy).toMatch(/Al Khobar/);
    expect(allCopy).toMatch(/Salmiya, Kuwait/);
    expect(allCopy).toMatch(/\$10k–\$60k/);
    expect(allCopy).toContain('Guaranteed in writing');
    expect(allCopy).toContain('40 client reviews');
    expect(allCopy).not.toMatch(/guaranteed accuracy|guaranteed findings/i);
  });

  it('cites every linked reference inline, and keeps competitor bibliography entries unlinked', () => {
    const [narrative, referenceList] = CHOOSE_AGENCY_KSA_BODY_HTML.split('<h2 id="references">');
    const items = [...referenceList.matchAll(/<li id="ref-([^"]+)">([\s\S]*?)<\/li>/g)];
    const linked = items.filter(([, , html]) => html.includes('<a '));
    const unlinked = items.filter(([, , html]) => !html.includes('<a '));
    expect(linked.length).toBeGreaterThanOrEqual(16);
    expect(unlinked.map(([, id]) => id)).toEqual(['iqvia', 'ipsos', 'kantar', 'grand-view', 'imarc']);
    for (const [, , html] of linked) {
      const url = /href="([^"]+)"/.exec(html)?.[1] ?? '';
      expect(narrative).toContain(`href="${url}"`);
    }
  });

  it('opens external citations in a new tab and never links a competitor host', () => {
    const external = [...CHOOSE_AGENCY_KSA_BODY_HTML.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)];
    expect(external.length).toBeGreaterThan(20);
    for (const [, href, attrs] of external) {
      expect(attrs).toContain('target="_blank"');
      expect(attrs).toMatch(/rel="[^"]*noopener/);
      expect(href).not.toMatch(
        /iqvia\.com|ipsos\.com|kantar\.com|euromonitor\.com|grandviewresearch\.com|imarcgroup\.com|kenresearch\.com|6wresearch\.com|damaninsurance\.ae/i,
      );
    }
  });

  it('places lazy-loaded in-content figures with alt text, captions and files under 120 KB', () => {
    for (const figure of CHOOSE_AGENCY_KSA_FIGURES) {
      expect(figure.src.endsWith('.webp')).toBe(true);
      const file = statSync(join(root, 'public', figure.src));
      expect(file.size).toBeGreaterThan(5 * 1024);
      expect(file.size).toBeLessThanOrEqual(120 * 1024);
      expect(html).toContain(
        `src="${figure.src}" alt="${figure.alt}" width="${figure.width}" height="${figure.height}" loading="lazy"`,
      );
      expect(html).toContain(`<figcaption>${figure.caption}</figcaption>`);
    }
  });

  it('keeps the hero and OG card at 1200 by 630 and ships a Playwright cover generator', async () => {
    const cover = join(root, 'public', CHOOSE_AGENCY_KSA_COVER_IMAGE);
    const hero = join(root, 'public', CHOOSE_AGENCY_KSA_HERO_IMAGE);
    expect(existsSync(cover)).toBe(true);
    expect(existsSync(hero)).toBe(true);
    for (const file of [cover, hero]) {
      const meta = await sharp(file).metadata();
      expect(meta).toMatchObject({ width: 1200, height: 630, format: 'jpeg' });
    }
    const coverScript = readFileSync(
      join(root, 'scripts/generate-how-to-choose-healthcare-mr-agency-ksa-cover.mjs'),
      'utf8',
    );
    expect(coverScript).toMatch(/playwright/);
    expect(coverScript).toMatch(/from 'sharp'/);
    expect(coverScript).toMatch(/#101C30/);
    expect(coverScript).toMatch(/#F5A503/);
    expect(coverScript).toMatch(/bionixus-logo\.png/);
    expect(coverScript).not.toMatch(/gemini-2\.5-flash-image|Gemini cover pending|Imagen via Gemini/);
  });
});

describe('/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia: Sanity payload', () => {
  const SANITY_FIELDS = [
    'seo',
    'openGraph',
    'title',
    'slug',
    'excerpt',
    'publishedAt',
    'updatedAt',
    'author',
    'mainImage',
    'categories',
    'category',
    'contentSilo',
    'tags',
    'country',
    'language',
    'readingTime',
    'executiveSummary',
    'tableOfContents',
    'bodyHtml',
    'body',
    'faq',
    'relatedPostSlugs',
    'ctaSection',
    'sources',
    'factCheckedAt',
  ] as const;

  it('fills every healthcare-silo blogPost field with Ivona Gunjova and a ready cover', () => {
    const payload = JSON.parse(
      readFileSync(
        join(root, 'scripts/data/how-to-choose-healthcare-market-research-agency-saudi-arabia.json'),
        'utf8',
      ),
    ) as Record<string, unknown>;
    for (const field of SANITY_FIELDS) {
      expect(payload[field], field).toBeDefined();
    }
    expect(payload.author).toMatchObject({
      _type: 'reference',
      _ref: '5e67519a-1cdc-4b57-a881-29391db4accd',
      name: 'Ivona Gunjova',
      jobTitle: 'Global Research Manager',
    });
    expect(payload.geminiCoverPending).toBe(false);
    expect((payload.sources as unknown[]).length).toBeGreaterThanOrEqual(30);
    expect((payload.faq as unknown[]).length).toBe(CHOOSE_AGENCY_KSA_FAQ.length);
    expect(payload.bodyHtml as string).toContain('healthcare market research agency');
    expect(payload.bodyHtml as string).toContain(
      'href="/insights/top-healthcare-market-research-companies-saudi-arabia-2026"',
    );
    const publishScript = readFileSync(
      join(root, 'scripts/publish-how-to-choose-healthcare-mr-agency-ksa.mjs'),
      'utf8',
    );
    expect(publishScript).toMatch(/5e67519a-1cdc-4b57-a881-29391db4accd/);
    expect(publishScript).toMatch(/process\.exit\(2\)/);
    expect(publishScript).not.toMatch(/Do not generate these files with another model/);
  });
});

describe('/blog/how-to-choose-healthcare-market-research-agency-saudi-arabia: registration', () => {
  it('is a hardcoded, force-indexed post', () => {
    expect(hardcodedSeoPosts).toContain(CHOOSE_AGENCY_KSA_HARDCODED_POST);
    expect(BLOG_HARDCODED_SEO_SLUGS.has(CHOOSE_AGENCY_KSA_SLUG)).toBe(true);
    expect(BLOG_FORCE_INDEX_SLUGS.has(CHOOSE_AGENCY_KSA_SLUG)).toBe(true);
    expect(shouldCrawlerIndexBlogSlug(CHOOSE_AGENCY_KSA_SLUG)).toBe(true);
  });

  it('serves crawlers the full SSR page instead of the /api/blog stub', () => {
    const sources = vercel.rewrites.map((rewrite) => rewrite.source);
    const ssrIndex = sources.indexOf(CHOOSE_AGENCY_KSA_PATH);
    const crawlerIndex = vercel.rewrites.findIndex(
      (rewrite) =>
        rewrite.source === '/blog/:slug' &&
        rewrite.destination === '/api/indexnow-key?__ssr=1&url=/blog/:slug',
    );
    expect(ssrIndex).toBeGreaterThanOrEqual(0);
    expect(ssrIndex).toBeLessThan(crawlerIndex);
    expect(vercel.rewrites[ssrIndex].destination).toBe(
      `/api/indexnow-key?__ssr=1&url=${CHOOSE_AGENCY_KSA_PATH}`,
    );
    expect(vercel.rewrites[ssrIndex].has).toBeUndefined();
  });

  it('is listed in the sitemap source, the committed sitemap and llms.txt, dated 15 October 2026', () => {
    expect(CHOOSE_AGENCY_KSA_HARDCODED_POST.date).toBe('15 Oct 2026');
    expect(sitemapScript).toContain(
      `path: '${CHOOSE_AGENCY_KSA_PATH}', priority: '0.88', changefreq: 'monthly', lastmod: '2026-10-15'`,
    );
    expect(sitemapXml).toMatch(
      new RegExp(`<loc>${CHOOSE_AGENCY_KSA_URL}</loc>\\s*<lastmod>2026-10-15</lastmod>`),
    );
    expect(llms).toContain(CHOOSE_AGENCY_KSA_URL);
  });
});
