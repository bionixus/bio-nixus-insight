import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  ARTICLE,
  ARTICLE_PATH,
  AUTHOR_JOB_TITLE,
  AUTHOR_SLUG,
  BODY_HTML_FILE,
  SLUG,
  TARGET_KEYWORD,
} from '../../../../scripts/data/mystery-shopping-companies-saudi-arabia-2026.mjs';
import { CTR_SEO_BY_PATH as LIB_CTR_SEO } from '../../../../lib/ctr-seo-overrides.mjs';
import {
  ALSAADANY_PROFILE_URL,
  ALSAADANY_SAME_AS_URL,
  buildPersonNode,
  countWords,
  getIndustriesInsightHowTo,
  htmlToPlainText,
} from '../../../../lib/industries-insight-jsonld.mjs';
import { CTR_SEO_BY_PATH as SERVER_CTR_SEO } from '@/server/ctr-seo-overrides.js';
import {
  ALSAADANY_PROFILE_URL as ROSTER_ALSAADANY_PROFILE_URL,
  ALSAADANY_SAME_AS_URL as ROSTER_ALSAADANY_SAME_AS_URL,
  WESTERN_AUTHORS,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { sanitizeBodyHtml } from '@/lib/sanitize-body-html';

const root = join(__dirname, '..', '..', '..', '..');
const bodyHtml = readFileSync(join(root, BODY_HTML_FILE), 'utf8');
const sitemapXml = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const keyword = TARGET_KEYWORD.toLowerCase();
const rosterAuthor = WESTERN_AUTHORS.find((author) => author.slug === AUTHOR_SLUG);

const h2s = [...bodyHtml.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map(([, id, text]) => ({ id, text }));
const hrefs = [...bodyHtml.matchAll(/href="([^"]+)"/g)].map(([, href]) => href);
const referencesHtml = bodyHtml.split('<h2 id="references">')[1] ?? '';

function sectionHtml(id: string): string {
  const start = bodyHtml.indexOf(`<h2 id="${id}">`);
  const next = bodyHtml.indexOf('<h2 ', start + 1);
  return bodyHtml.slice(start, next === -1 ? undefined : next);
}

function decode(text: string): string {
  return htmlToPlainText(text);
}

describe('Mystery shopping in Saudi Arabia: content and SEO', () => {
  it('names mystery shopping in Saudi Arabia in the title, description and summary', () => {
    for (const field of [ARTICLE.title, ARTICLE.seo.metaTitle, ARTICLE.seo.metaDescription, ARTICLE.executiveSummary]) {
      expect(field.toLowerCase()).toContain('mystery shopping');
      expect(field.toLowerCase()).toContain('saudi arabia');
    }
    expect(ARTICLE_PATH).toBe('/bionixus-industries/insights/mystery-shopping-companies-saudi-arabia-2026');
    expect(keyword).toBe('mystery shopping companies saudi arabia');
  });

  it('keeps the SEO title at 50 characters or fewer and the description at 130 or fewer', () => {
    expect(ARTICLE.seo.metaTitle.length).toBeLessThanOrEqual(50);
    expect(ARTICLE.seo.metaDescription.length).toBeLessThanOrEqual(130);
    expect(ARTICLE.excerpt.length).toBeLessThanOrEqual(200);
    expect(ARTICLE.cover.alt.length).toBeLessThanOrEqual(125);
  });

  it('opens with an answer-first summary of 40 to 60 words', () => {
    const words = countWords(ARTICLE.executiveSummary);
    expect(words).toBeGreaterThanOrEqual(40);
    expect(words).toBeLessThanOrEqual(60);
  });

  it('leaves the H1 to the template, asks questions in its H2s and mirrors them in the TOC', () => {
    expect(bodyHtml).not.toMatch(/<h1\b/i);
    expect(h2s.map((h) => h.id)).toEqual(ARTICLE.tableOfContents.map((item) => item.anchor));
    const questionH2s = h2s.filter((h) => h.id !== 'references');
    expect(questionH2s.every((h) => h.text.trim().endsWith('?'))).toBe(true);
    expect([...bodyHtml.matchAll(/<h2\b/g)].length).toBe(h2s.length);
  });

  it('has a key-takeaways block, comparison tables and an ordered step list', () => {
    expect(bodyHtml).toContain('<div class="value-box">');
    expect(bodyHtml).toContain('<strong>Key takeaways</strong>');
    expect([...bodyHtml.matchAll(/<table>/g)].length).toBeGreaterThanOrEqual(3);
    expect(sectionHtml('how-to-run')).toContain('<ol>');
  });

  it('ships 5 to 8 complete FAQ items and keeps them out of the body', () => {
    expect(ARTICLE.faq.length).toBeGreaterThanOrEqual(5);
    expect(ARTICLE.faq.length).toBeLessThanOrEqual(8);
    for (const item of ARTICLE.faq) {
      expect(item.question.trim().endsWith('?')).toBe(true);
      expect(countWords(item.answer)).toBeGreaterThan(30);
    }
    expect(bodyHtml).not.toMatch(/<details|<summary/i);
  });

  it('survives the site body sanitizer with every heading, table, list and link intact', () => {
    const sanitized = sanitizeBodyHtml(bodyHtml);
    const count = (html: string, pattern: RegExp) => [...html.matchAll(pattern)].length;
    expect(count(sanitized, /<h2 /g)).toBe(count(bodyHtml, /<h2 /g));
    expect(count(sanitized, /<table>/g)).toBe(count(bodyHtml, /<table>/g));
    expect(count(sanitized, /<li>/g)).toBe(count(bodyHtml, /<li>/g));
    expect(count(sanitized, /<a /g)).toBe(count(bodyHtml, /<a /g));
    expect(sanitized).toContain('class="value-box"');
  });

  it('links internally only to indexable industries-silo pages, starting within the first 200 words', () => {
    const internal = [...new Set(hrefs.filter((href) => href.startsWith('/')))];
    expect(internal).toEqual(
      expect.arrayContaining([
        '/bionixus-industries/insights',
        '/saudi-arabia-retail-market-research',
        '/templates/mystery-shop-retail-brief',
        '/contact',
      ]),
    );
    for (const href of internal) {
      expect(sitemapXml, href).toContain(`<loc>https://www.bionixus.com${href}</loc>`);
      expect(href).not.toMatch(/^\/(blog|healthcare-market-research)(\/|$)|pharma/);
    }
    const firstHubLink = bodyHtml.indexOf('href="/bionixus-industries/insights"');
    expect(firstHubLink).toBeGreaterThan(0);
    expect(countWords(decode(bodyHtml.slice(0, firstHubLink)))).toBeLessThan(200);
  });

  it('cites every external source over https and lists each one under References', () => {
    const external = [...new Set(hrefs.filter((href) => /^https?:/.test(href)))];
    expect(external.length).toBeGreaterThanOrEqual(20);
    for (const href of external) {
      expect(href.startsWith('https://')).toBe(true);
      expect(referencesHtml, href).toContain(`href="${href}"`);
    }
    expect(bodyHtml).toContain('href="mailto:admin@bionixus.com"');
  });

  it('uses only the BioNixus facts the owner approved', () => {
    const copy = [
      decode(bodyHtml),
      ARTICLE.title,
      ARTICLE.excerpt,
      ARTICLE.executiveSummary,
      ARTICLE.ctaSection.title,
      ARTICLE.ctaSection.description,
      ...ARTICLE.faq.flatMap((item) => [item.question, item.answer]),
    ].join(' ');
    for (const fact of [
      'founded in 2012',
      '118 clients',
      '48 countries',
      '127 studies in 2026',
      '82,000+ physicians globally',
      'about 3,200 physicians in the Middle East',
      'Americas office and global HQ',
      'Europe office',
      'AMEA office',
      'São Paulo is a field office for LATAM.',
      'Al Khobar is the KSA partner office',
      'Kuwait and Dubai are field offices',
    ]) {
      expect(copy).toContain(fact);
    }
    for (const banned of [/\$\s?\d/, /\bUSD\b/, /price range/i, /\bclients? include/i, /—/, /\b(best|leading|top)\b/i, /iqvia|dawaa/i]) {
      expect(copy).not.toMatch(banned);
    }
    for (const competitor of [/Ipsos/i, /Kantar/i, /Nielsen/i, /\bSGS\b/, /\bSMRC\b/, /Madarij/i, /\bMSKSA\b/]) {
      expect(copy).not.toMatch(competitor);
    }
  });

  it('serves the same exact title and description from both CTR override copies', () => {
    for (const map of [LIB_CTR_SEO, SERVER_CTR_SEO]) {
      expect(map[ARTICLE_PATH]).toEqual({
        title: ARTICLE.seo.metaTitle,
        description: ARTICLE.seo.metaDescription,
      });
    }
  });

  it('keeps the HowTo steps identical to the ordered list in the body', () => {
    const howTo = getIndustriesInsightHowTo(SLUG);
    const items = [...sectionHtml('how-to-run').matchAll(/<li><strong>([\s\S]*?)\.<\/strong>\s*([\s\S]*?)<\/li>/g)].map(
      ([, name, text]) => ({ name: decode(name), text: decode(text) }),
    );
    expect(items).toEqual(howTo.steps);
  });

  it('credits Sarah Chen, Global Research Manager, an existing Sanity author', () => {
    expect(AUTHOR_SLUG).toBe('sarah-chen');
    expect(rosterAuthor?.name).toBe('Sarah Chen');
    expect(AUTHOR_JOB_TITLE).toBe('Global Research Manager');
  });
});

describe('Mystery shopping article — shared JSON-LD helpers', () => {
  it('mirrors the Alsaadany profile rules from the editorial roster', () => {
    expect(ALSAADANY_PROFILE_URL).toBe(ROSTER_ALSAADANY_PROFILE_URL);
    expect(ALSAADANY_SAME_AS_URL).toBe(ROSTER_ALSAADANY_SAME_AS_URL);
    const person = buildPersonNode({ name: 'Mohammad Alsaadany', slug: 'mohammad-alsaadany', jobTitle: 'MEA Director' });
    const roster = withAlsaadanyPersonJsonLd<{ '@type': string; name: string; jobTitle?: string; url?: string; sameAs?: string[] }>({
      '@type': 'Person',
      name: 'Mohammad Alsaadany',
      jobTitle: 'MEA Director',
    });
    expect(person?.url).toBe(roster.url);
    expect(person?.sameAs).toEqual(roster.sameAs);
  });

  it('never gives another author Alsaadany’s LinkedIn profile', () => {
    const person = buildPersonNode({
      name: 'Dina Ibrahim',
      slug: 'dina-ibrahim',
      linkedIn: 'https://www.linkedin.com/in/mohammad-alsaadany/',
    });
    expect(person?.url).toBeUndefined();
    expect(person?.sameAs).toBeUndefined();
  });
});

describe('Mystery shopping article server render', () => {
  it('returns the article at its canonical path with one h1 and the updated date', async () => {
    const { HelmetProvider } = await import('react-helmet-async');
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { MYSTERY_SHOPPING_KSA_HARDCODED_POST, MYSTERY_SHOPPING_KSA_PATH, MYSTERY_SHOPPING_KSA_SLUG, MYSTERY_SHOPPING_KSA_META_TITLE, MYSTERY_SHOPPING_KSA_META_DESCRIPTION, MYSTERY_SHOPPING_KSA_UPDATED_ISO } = await import('@/data/blog-mystery-shopping-saudi-arabia');
    const { html, helmetData } = await render(MYSTERY_SHOPPING_KSA_PATH, {
      pageType: 'blog-post',
      blogSlug: MYSTERY_SHOPPING_KSA_SLUG,
      blogPost: MYSTERY_SHOPPING_KSA_HARDCODED_POST,
      blogPostLookup: 'found',
      relatedPosts: { related: [], prev: null, next: null },
    });
    const h1s = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/g) ?? [];
    expect(h1s).toHaveLength(1);
    expect(html).toContain('What does a mystery shopping programme in Saudi Arabia deliver?');
    expect(html).toContain('Al Khobar is the KSA partner office');
    const head = [helmetData.title, helmetData.meta, helmetData.script].map((part) => part.toString()).join('\n');
    expect(head).toContain(`<title data-rh="true">${MYSTERY_SHOPPING_KSA_META_TITLE}</title>`);
    expect(head).toContain(MYSTERY_SHOPPING_KSA_META_DESCRIPTION);
    expect(head).toContain(MYSTERY_SHOPPING_KSA_UPDATED_ISO);
    expect(head).toContain('Sarah Chen');
  }, 120_000);

  it('does not redirect the live article to the industries hub or another post', async () => {
    const { closestKnownPostPath, missingArticleRedirect } = await import('@/lib/missing-article-redirect');
    const { MYSTERY_SHOPPING_KSA_HARDCODED_POST, MYSTERY_SHOPPING_KSA_PATH, MYSTERY_SHOPPING_KSA_SLUG } = await import('@/data/blog-mystery-shopping-saudi-arabia');
    const { hardcodedSeoPosts } = await import('@/data/blog-posts-index');
    expect(hardcodedSeoPosts).toContain(MYSTERY_SHOPPING_KSA_HARDCODED_POST);
    expect(closestKnownPostPath(MYSTERY_SHOPPING_KSA_SLUG, MYSTERY_SHOPPING_KSA_PATH)).toBeNull();
    expect(missingArticleRedirect({
      pathname: MYSTERY_SHOPPING_KSA_PATH,
      slug: MYSTERY_SHOPPING_KSA_SLUG,
      lookup: 'found',
      post: MYSTERY_SHOPPING_KSA_HARDCODED_POST,
    })).toBeNull();
  });
});
