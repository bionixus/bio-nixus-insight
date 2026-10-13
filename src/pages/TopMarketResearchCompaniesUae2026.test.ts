import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import {
  CANONICAL,
  PAGE_H1,
  PAGE_LAST_MODIFIED,
  PAGE_TITLE,
  UAE_MR_QUOTABLE_LEAD,
  faqItems,
} from '@/pages/TopMarketResearchCompaniesUae2026';

const PATH = '/insights/top-market-research-companies-uae-2026';
const OLD_QUOTE =
  'For large-scale brand tracking and advertising effectiveness, choose Kantar; for retail and FMCG measurement, NielsenIQ; and for broad consumer, media, and public-affairs research, Ipsos.';

type JsonLdNode = Record<string, unknown>;

function extractJsonLd(head: string): JsonLdNode[] {
  return [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}

describe('/insights/top-market-research-companies-uae-2026 AEO lead', () => {
  let html = '';
  let head = '';
  let jsonLd: JsonLdNode[] = [];

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const result = await render(PATH);
    html = result.html;
    head = [result.helmetData.title, result.helmetData.meta, result.helmetData.link, result.helmetData.script]
      .map((part) => part.toString())
      .join('\n');
    jsonLd = extractJsonLd(head);
  }, 120_000);

  it('keeps title, URL, canonical, and one H1', () => {
    expect(head).toContain(`<title data-rh="true">${PAGE_TITLE}</title>`);
    expect(head).toContain(`href="${CANONICAL}"`);
    expect(html).toContain(PAGE_H1);
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(getCtrSeo(PATH)?.title).toBe(PAGE_TITLE);
  });

  it('puts the BioNixus answer-first sentence in SSR HTML and drops the competitor-first quote', () => {
    expect(html).toContain(UAE_MR_QUOTABLE_LEAD);
    expect(html).not.toContain(OLD_QUOTE);
    expect(html).not.toMatch(/choose Kantar/i);
    expect(html).toContain('not a claim of guaranteed accuracy or findings');
    expect(html).not.toMatch(/\b(?:we|BioNixus)\s+guarantee(?:s)?\s+accuracy\b/i);
    expect(html.indexOf(UAE_MR_QUOTABLE_LEAD)).toBeLessThan(html.indexOf('Kantar is a fair secondary mention'));
  });

  it('updates Article dateModified and mirrors FAQ in FAQPage JSON-LD', () => {
    const article = jsonLd.find((node) => node['@type'] === 'Article');
    expect(article?.dateModified).toBe(PAGE_LAST_MODIFIED);
    expect(article?.url).toBe(CANONICAL);
    expect(article?.headline).toBe(PAGE_H1);

    const types = jsonLd.map((node) => node['@type']);
    expect(types).toEqual(expect.arrayContaining(['Article', 'FAQPage', 'BreadcrumbList', 'ItemList', 'WebPage', 'HowTo']));

    const faq = jsonLd.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(faq.mainEntity.map((item) => item.name)).toEqual(faqItems.map((item) => item.q));
    expect(faq.mainEntity[0]?.acceptedAnswer.text).toContain(UAE_MR_QUOTABLE_LEAD);
    expect(faq.mainEntity.map((item) => item.acceptedAnswer.text)).toEqual(
      faqItems.map((item) =>
        item.q.startsWith('Who is the top healthcare')
          ? `${item.a} See https://www.bionixus.com/uae-pharmaceutical-market-research.`
          : item.a,
      ),
    );
  });

  it('states approved office facts, quota guarantee, and proof numbers', () => {
    expect(html).toContain('Sheikh Zayed');
    expect(html).toContain('Dubai field office');
    expect(html).toContain('127 studies year-to-date in 2026');
    expect(html).toContain('about 3,200');
    expect(html).toContain('re-field at our cost');
    expect(html).toContain('$10,000');
    expect(html).toContain('$60,000');
    expect(html).toMatch(/<details[\s>]/);
    expect(html).toContain(faqItems[0].q);
  });
});
