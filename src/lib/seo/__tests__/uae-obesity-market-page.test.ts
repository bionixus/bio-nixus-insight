import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { COUNTRY_FLAGSHIP_SEGMENT_PAGES } from '@/data/segmentMarkets/countryAndFlagship';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { CTR_SEO_BY_PATH as MIRROR_CTR } from '@/server/ctr-seo-overrides.js';
import { CTR_SEO_BY_PATH as LIB_CTR } from '../../../../lib/ctr-seo-overrides.mjs';
import { buildFAQSchema } from '@/lib/seo/schemas';
import { render } from '@/entry-server';

const TITLE = 'GLP-1 Market Research UAE: Obesity & Access | BioNixus';
const META =
  'BioNixus runs GLP-1 market research in the UAE: prescriber surveys, Thiqa and Daman payer interviews and oral GLP-1 uptake studies. Custom research $10k–$60k.';
const PHYSICIANS = '82,000+ physicians globally and about 3,200 physicians in the Middle East';
const OFFICES = [
  'Americas office and global HQ',
  'Europe office',
  'AMEA (APAC, Middle East, Africa) office',
  'field office for LATAM',
  'partner office for KSA',
  'field office for Kuwait',
  'field office for UAE',
];

const page = COUNTRY_FLAGSHIP_SEGMENT_PAGES.find((item) => item.slug === 'uae-obesity-market');

function visibleText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function h1Text(html: string): string {
  const match = html.match(/<h1[\s\S]*?<\/h1>/i);
  return match ? visibleText(match[0]) : '';
}

describe('/uae-obesity-market GLP-1 refresh', () => {
  it('keeps the URL and ships the query title, meta and review date', () => {
    expect(page).toBeDefined();
    expect(page?.slug).toBe('uae-obesity-market');
    expect(page?.canonical).toBe('https://www.bionixus.com/uae-obesity-market');
    expect(page?.title).toBe(TITLE);
    expect(page?.title.length).toBeGreaterThanOrEqual(50);
    expect(page?.title.length).toBeLessThanOrEqual(60);
    expect(page?.description).toBe(META);
    expect(page?.description.length).toBeGreaterThanOrEqual(150);
    expect(page?.description.length).toBeLessThanOrEqual(160);
    expect(page?.description.endsWith('.')).toBe(true);
    expect(page?.exactMeta).toBe(true);
    expect(page?.h1).toBe('GLP-1 Market Research in the UAE: Obesity Prescribing, Access and Uptake');
    expect(page?.badge).toBe('UAE Obesity Market Intelligence');
    expect(page?.lastUpdated).toBe('2026-10-29');
    expect(page?.dateLabel).toBe('Last reviewed');
    expect(JSON.stringify(page)).not.toMatch(/datePublished/);
    const ctr = getCtrSeo('/uae-obesity-market');
    expect(ctr).toEqual({ title: TITLE, description: META });
    expect(MIRROR_CTR['/uae-obesity-market']).toEqual(ctr);
    expect(LIB_CTR['/uae-obesity-market']).toEqual(ctr);
  });

  it('uses the confirmed physician phrase and office list, and drops pack claims that lost', () => {
    const blob = JSON.stringify(page);
    expect(blob).toContain(PHYSICIANS);
    for (const office of OFFICES) expect(blob).toContain(office);
    expect(blob).not.toMatch(/26\.8/);
    expect(blob).not.toMatch(/Ozempic/i);
    expect(blob).not.toMatch(/127 studies/);
    expect(blob).not.toMatch(/guarantee/i);
    expect(blob).not.toMatch(/grandviewresearch\.com|iqvia\.com|kantar\.com|euromonitor\.com|nielsen\.com|nielseniq\.com/i);
    expect(blob).not.toMatch(/Dubai office|local UAE field teams|MEA regional office|biggest office/i);
    expect(blob).toContain('US$257.2 million');
    expect(blob).toContain('US$875.9 million');
    expect(blob).toContain('15.3%');
    expect(blob).toContain('73.68%');
    expect(blob).toContain('22.4%');
    expect(blob).toContain('$10,000 to $60,000');
    expect(blob).toContain('118 clients');
    expect(blob).toContain('48 countries');
    expect(blob).toContain('founded in 2012');
  });

  it('mirrors the FAQ in FAQPage JSON-LD and keeps a page-scoped service id', () => {
    const questions = page?.faqs.map((item) => item.question) ?? [];
    expect(questions[0]).toBe('GLP-1 market research UAE: what should a 2026 study cover?');
    expect(questions[1]).toBe('Which agency can run a GLP-1 prescriber survey in the UAE?');
    expect(questions[2]).toBe('Are GLP-1 medicines for weight management reimbursed in the UAE?');
    const schema = buildFAQSchema(page?.faqs ?? [], { pageUrl: page?.canonical }) as {
      '@id': string;
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(schema['@id']).toBe('https://www.bionixus.com/uae-obesity-market#faq');
    expect(schema.mainEntity.map((item) => item.name)).toEqual(questions);
    const faqBlob = JSON.stringify(schema);
    expect(faqBlob).toContain(PHYSICIANS);
    expect(faqBlob).toContain('field office for UAE');
    expect(faqBlob).toContain('São Paulo is a field office for LATAM');
    expect(faqBlob).not.toMatch(/datePublished|26\.8|127 studies/);
    expect(page?.serviceName).toBe('GLP-1 Market Research UAE');
    expect(`${page?.canonical}#service`).toBe('https://www.bionixus.com/uae-obesity-market#service');
    expect(page?.articleCitations).not.toEqual(
      expect.arrayContaining([expect.stringMatching(/grandviewresearch\.com/i)]),
    );
    const hrefs = page?.relatedLinks.map((link) => link.to) ?? [];
    for (const href of [
      '/healthcare-market-research',
      '/blog/oral-glp-1-uae-market-research',
      '/blog/thiqa-obesity-reimbursement-abu-dhabi',
      '/saudi-arabia-obesity-market',
      '/kuwait-obesity-market',
      '/egypt-obesity-market',
      '/contact',
    ]) {
      expect(hrefs).toContain(href);
    }
  });
});

describe('/uae-obesity-market SSR', () => {
  let html = '';
  let head = '';

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const rendered = await render('/uae-obesity-market');
    html = rendered.html;
    head = [rendered.helmetData.title, rendered.helmetData.meta, rendered.helmetData.link, rendered.helmetData.script]
      .map((part) => part.toString())
      .join('\n');
  });

  it('ships one H1, the query, the hub link, and dateModified without datePublished', () => {
    expect(h1Text(html)).toBe('GLP-1 Market Research in the UAE: Obesity Prescribing, Access and Uptake');
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(head.replace(/&amp;/g, '&')).toContain(TITLE);
    expect(head).toContain(META);
    expect(head).toContain('rel="canonical" href="https://www.bionixus.com/uae-obesity-market"');
    expect(visibleText(html)).toContain('GLP-1 market research in the UAE');
    expect(visibleText(html)).toContain('Last reviewed: 29 October 2026');
    expect(visibleText(html)).toContain(PHYSICIANS);
    expect(html).toContain('href="/healthcare-market-research"');
    const words = visibleText(html).split(' ');
    const hubAt = words.findIndex((word, index) => words.slice(index, index + 3).join(' ').includes('healthcare market research'));
    expect(hubAt).toBeGreaterThanOrEqual(0);
    expect(hubAt).toBeLessThan(200);
    const nodes = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
      (match) => JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')) as Record<string, unknown>,
    );
    const article = nodes.find((node) => node['@type'] === 'Article');
    const webpage = nodes.find((node) => node['@type'] === 'WebPage');
    const service = nodes.find((node) => node['@type'] === 'Service');
    const faq = nodes.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ acceptedAnswer: { text: string } }>;
    };
    expect(article?.dateModified).toBe('2026-10-29');
    expect(article).not.toHaveProperty('datePublished');
    expect(webpage?.dateModified).toBe('2026-10-29');
    expect(webpage).not.toHaveProperty('datePublished');
    expect(service?.['@id']).toBe('https://www.bionixus.com/uae-obesity-market#service');
    expect(JSON.stringify(service)).not.toContain('#professionalService');
    expect(JSON.stringify(faq)).toContain(PHYSICIANS);
    expect(html).toContain('<details');
    expect(visibleText(html)).not.toMatch(/26\.8|Ozempic|127 studies|guarantee/i);
    expect(html).not.toMatch(/grandviewresearch\.com|iqvia\.com/i);
  });
});
