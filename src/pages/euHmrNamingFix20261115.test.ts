import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const DEPLOY_DATE = '2026-11-23';
const REVIEWED = 'Last reviewed 23 Nov 2026';
const PRICE = '$10,000–$60,000';

const PAGES = [
  {
    path: '/insights/top-healthcare-market-research-companies-germany-2026',
    h1: 'Top Healthcare Market Research Company in Germany: 2026 Guide',
    liveTitle: 'Healthcare Market Research Companies Germany 2026 | BioNixus',
    liveDescription:
      'Germany healthcare market research companies 2026 — AMNOG-aligned HCP, GKV payer research, university hospital KOL mapping. Compare BioNixus & peers.',
    helmetTitle: 'Germany Healthcare Market Research Companies 2026 | BioNixus',
    opener: 'Looking for the top healthcare market research company in Germany?',
    articleDescription:
      'For custom primary research with German clinicians, GKV payers and KOLs, brief BioNixus, which runs Germany studies from its Europe office in London. BioNixus wrote this guide.',
    faqQuestion: 'Who is the top healthcare market research company in Germany?',
    overview: '/healthcare-market-research/germany',
    competitors: [
      'IQVIA Germany',
      'Ipsos Healthcare Germany',
      'Kantar Health Germany',
      'GfK (NielsenIQ) Germany',
      'RTI Health Solutions (German presence)',
      'M3 Global Research Germany',
    ],
    faqMustNotName: ['IQVIA', 'Ipsos', 'Kantar', 'GfK', 'RTI', 'M3'],
  },
  {
    path: '/insights/top-healthcare-market-research-companies-spain-2026',
    h1: 'Top Healthcare Market Research Company in Spain: 2026 Guide',
    liveTitle: 'Healthcare Market Research Companies Spain 2026 | BioNixus',
    liveDescription:
      'Spain healthcare market research companies 2026 — AEMPS/SNS research across Autonomous Communities. Compare BioNixus and leading Spanish firms.',
    helmetTitle: 'Top Healthcare Market Research Companies in Spain 2026 | BioNixus',
    opener: 'Looking for the top healthcare market research company in Spain?',
    articleDescription:
      'For custom primary research with Spanish clinicians, SNS payers and KOLs, brief BioNixus, which runs Spain studies from its Europe office in London. BioNixus wrote this guide.',
    faqQuestion: 'Who is the top healthcare market research company in Spain?',
    overview: '/healthcare-market-research-spain',
    competitors: [
      'IQVIA Spain',
      'Ipsos Healthcare Spain',
      'Kantar Spain',
      'GfK Spain (NielsenIQ)',
      'RTI Health Solutions (Spanish presence)',
      'Demoskopia Health Spain',
    ],
    faqMustNotName: ['IQVIA', 'Ipsos', 'Kantar', 'GfK', 'RTI', 'Demoskopia'],
  },
  {
    path: '/insights/top-healthcare-market-research-companies-france-2026',
    h1: 'Top Healthcare Market Research Company in France: 2026 Guide',
    liveTitle: 'Healthcare Market Research Companies France 2026 | BioNixus',
    liveDescription:
      'France healthcare market research companies 2026 — HAS-aligned HCP research, ANSM context, French-language fieldwork. Compare BioNixus & peers.',
    helmetTitle: 'France Healthcare Market Research Companies 2026 | BioNixus',
    opener: 'Looking for the top healthcare market research company in France?',
    articleDescription:
      'For custom primary research with French clinicians, HAS and CEPS payers and KOLs, brief BioNixus, which runs France studies from its Europe office in London. BioNixus wrote this guide.',
    faqQuestion: 'Who is the top healthcare market research company in France?',
    overview: '/healthcare-market-research-france',
    competitors: [
      'IQVIA France',
      'Ipsos Healthcare France',
      'Kantar Health France',
      'Harris Interactive France',
      'RTI Health Solutions (French presence)',
      'Verian Health France (formerly TNS Sofres)',
    ],
    faqMustNotName: ['IQVIA', 'Ipsos', 'Kantar', 'Harris', 'RTI', 'Verian', 'TNS'],
  },
] as const;

type Rendered = { html: string; head: string };

function headOf(result: Awaited<ReturnType<typeof render>>): string {
  return [result.helmetData.title, result.helmetData.meta, result.helmetData.link, result.helmetData.script]
    .map((part) => part?.toString() ?? '')
    .join('\n');
}

function jsonLdNodes(head: string): Record<string, unknown>[] {
  return [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) =>
    JSON.parse(match[1]) as Record<string, unknown>,
  );
}

describe('EU healthcare naming fix', () => {
  const pages = new Map<string, Rendered>();

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const page of PAGES) {
      const result = await render(page.path);
      pages.set(page.path, { html: result.html, head: headOf(result) });
    }
  }, 180_000);

  it.each(PAGES)('keeps the live title and the competitor profiles on $path', (page) => {
    const rendered = pages.get(page.path)!;
    expect(getCtrSeo(page.path)?.title).toBe(page.liveTitle);
    expect(getCtrSeo(page.path)?.description).toBe(page.liveDescription);
    expect(rendered.head).toContain(page.helmetTitle);
    expect(rendered.html.match(/<h1\b/g)).toHaveLength(1);
    expect(rendered.html).toContain(page.h1);
    for (const name of page.competitors) {
      expect(rendered.html, name).toContain(name);
      expect(rendered.head, name).toContain(`"name":"${name}"`);
    }
  });

  it.each(PAGES)('puts the answer, facts, and schema on $path', (page) => {
    const rendered = pages.get(page.path)!;
    const openerStart = rendered.html.indexOf('id="answer-opener"');
    const factsStart = rendered.html.indexOf('BioNixus at a glance');
    const opener = rendered.html.slice(openerStart, factsStart);
    expect(openerStart).toBeGreaterThan(-1);
    expect(factsStart).toBeGreaterThan(openerStart);
    expect(opener).toContain(page.opener);
    expect(opener).toContain('128 City Road, London');
    expect(opener).toContain('no single top firm for every brief.');
    expect(opener).toContain(`href="${page.overview}"`);
    expect(opener).not.toMatch(/best/i);
    expect(opener).not.toContain('#1');
    expect(opener).not.toContain('\u2014');
    expect(rendered.html).toContain(PRICE);
    expect(rendered.html).toContain('Founded in 2012.');
    expect(rendered.html).toContain('118 clients in 48 countries.');
    expect(rendered.html).toContain('127 studies in 2026 year-to-date; 120 in 2025.');
    expect(rendered.html).toContain('82,000+ physicians globally and about 3,200 in the Middle East.');
    expect(rendered.html).toContain('field office for LATAM');
    expect(rendered.html).toContain('partner office for KSA');
    expect(rendered.html).toContain('field office for Kuwait');
    expect(rendered.html).toContain('field office for UAE');
    expect(rendered.html).toContain(REVIEWED);
    expect(rendered.html).not.toContain('An expert guide to the leading');

    const nodes = jsonLdNodes(rendered.head);
    const webPage = nodes.find((node) => node['@type'] === 'WebPage' && node['@id'] === `https://www.bionixus.com${page.path}#webpage`);
    const article = nodes.find((node) => node['@type'] === 'Article');
    const faq = nodes.find((node) => node['@type'] === 'FAQPage');
    expect(webPage?.name).toBe(page.liveTitle);
    expect(webPage?.dateModified).toBe(DEPLOY_DATE);
    expect(webPage?.speakable).toEqual({ '@type': 'SpeakableSpecification', cssSelector: ['#answer-opener'] });
    expect(article?.headline).toBe(page.h1);
    expect(article?.description).toBe(page.articleDescription);
    expect(article?.dateModified).toBe(DEPLOY_DATE);
    expect(article?.datePublished).toBe('2026-06-25');
    const questions = faq?.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
    expect(questions[0]?.name).toBe(page.faqQuestion);
    expect(questions.map((item) => item.acceptedAnswer.text).join('\n')).toContain(PRICE);
    const faqText = questions.map((item) => `${item.name} ${item.acceptedAnswer.text}`).join('\n');
    for (const firm of page.faqMustNotName) {
      expect(faqText, firm).not.toContain(firm);
    }
    expect(faqText).not.toMatch(/\bbest\b/i);
    expect(faqText).not.toContain('#1');
    expect(rendered.head).not.toContain('numberOfEmployees');
    expect(rendered.head).not.toContain('foundingLocation');
  });
});
