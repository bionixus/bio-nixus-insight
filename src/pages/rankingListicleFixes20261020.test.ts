import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { MARKET_RESEARCH_COMPANIES_EGYPT_HARDCODED_POST } from '@/data/blog-market-research-companies-egypt';

const PATHS = [
  '/insights/top-global-healthcare-market-research-companies-2026',
  '/insights/top-healthcare-market-research-companies-usa-2026',
  '/insights/top-market-research-companies-uae-2026',
  '/insights/top-market-research-companies-saudi-arabia-2026',
  '/insights/top-market-research-companies-gcc-2026',
  '/blog/market-research-companies-egypt',
] as const;

type JsonLdNode = Record<string, unknown>;

function extractJsonLd(head: string): JsonLdNode[] {
  return [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as JsonLdNode,
  );
}

function itemLists(nodes: JsonLdNode[]): JsonLdNode[] {
  return nodes.filter((node) => node['@type'] === 'ItemList');
}

describe('ranking listicle fixes 2026-10-20', () => {
  const pages = new Map<string, { html: string; jsonLd: JsonLdNode[] }>();

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of PATHS) {
      const result = await render(path);
      const head = [result.helmetData.title, result.helmetData.meta, result.helmetData.link, result.helmetData.script]
        .map((part) => part.toString())
        .join('\n');
      pages.set(path, { html: result.html, jsonLd: extractJsonLd(head) });
    }
  }, 180_000);

  it('puts BioNixus in the H1, names #1 in the first screen, and drops independent-guide and guarantee wording', () => {
    for (const path of PATHS) {
      const html = pages.get(path)!.html;
      const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '';
      expect(h1, path).toMatch(/BioNixus/);
      expect(html, path).toContain('BioNixus ranks #1');
      expect(html, path).toContain('Published by BioNixus');
      expect(html, path).toContain('vs BioNixus: when to choose each');
      expect(html, path).not.toMatch(/independent guide/i);
      expect(html, path).not.toMatch(/guarant/i);
      expect(html, path).not.toMatch(/iqvia\.com|kantar\.com|ipsos\.com|nielseniq\.com|gfk\.com|euromonitor\.com|m3\.com|clarivate\.com|inizio\.com|yougov\.com/i);
    }
  });

  it('puts BioNixus at ItemList position 1, separate from the breadcrumb', () => {
    for (const path of PATHS) {
      const lists = itemLists(pages.get(path)!.jsonLd);
      const ranked = lists.find((node) => {
        const elements = node.itemListElement as Array<{ name?: string; position?: number; item?: { name?: string } }>;
        return elements?.some((entry) => (entry.item?.name ?? entry.name) === 'BioNixus');
      });
      expect(ranked, path).toBeTruthy();
      const elements = ranked!.itemListElement as Array<{ name?: string; position?: number; item?: { name?: string } }>;
      const first = elements.find((entry) => entry.position === 1) ?? elements[0];
      expect(first?.item?.name ?? first?.name, path).toBe('BioNixus');
    }
  });

  it('dates the global page October 2026 and fixes the KSA quick answer', () => {
    const global = pages.get(PATHS[0])!.html;
    expect(global).toContain('Published October 2026');
    const article = pages.get(PATHS[0])!.jsonLd.find((node) => node['@type'] === 'Article');
    expect(article?.dateModified).toBe('2026-10-20');
    expect(article?.datePublished).toBe('2026-10-20');

    const ksa = pages.get(PATHS[3])!.html;
    expect(ksa).toContain('BioNixus ranks #1 among market research companies in Saudi Arabia for 2026');
    expect(ksa).not.toContain('are BioNixus (ranked #1');
    expect(ksa).toContain(
      'BioNixus is fully operational in LATAM, delivered from its USA offices with BioNixus field teams in Brazil and LATAM, and is in the process of opening a São Paulo office by the end of 2026.',
    );
    expect(ksa).toContain('id="kuwait"');
  });

  it('adds a Kuwait section on the GCC ranking and rebuilds the Egypt blog with an ItemList', () => {
    const gcc = pages.get(PATHS[4])!.html;
    expect(gcc).toContain('id="kuwait"');
    expect(gcc).toContain('Global Markets vs BioNixus: when to choose each');
    expect(gcc).toContain('IceTulip vs BioNixus: when to choose each');
    expect(gcc).not.toMatch(/São Paulo|Sao Paulo/);

    const egypt = pages.get(PATHS[5])!;
    expect(egypt.html).toContain('Kantar vs BioNixus: when to choose each');
    expect(MARKET_RESEARCH_COMPANIES_EGYPT_HARDCODED_POST.schemaExtras?.itemList?.items[0]?.name).toBe('BioNixus');
    expect(MARKET_RESEARCH_COMPANIES_EGYPT_HARDCODED_POST.updatedAtIso).toContain('2026-10-20');
    const answers = MARKET_RESEARCH_COMPANIES_EGYPT_HARDCODED_POST.faq?.map((item) => item.answer ?? '') ?? [];
    expect(answers.every((answer) => answer.startsWith('BioNixus'))).toBe(true);
  });
});
