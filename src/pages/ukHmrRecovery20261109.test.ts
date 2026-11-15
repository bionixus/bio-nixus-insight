import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { stripNotFoundDiscoveryTags } from '../../seo-noise-query.mjs';

const UK_HMR = '/insights/top-healthcare-market-research-companies-uk-2026';
const SHARED = [
  '/insights/top-healthcare-market-research-companies-germany-2026',
  '/insights/top-healthcare-market-research-companies-spain-2026',
  '/insights/top-market-research-companies-germany-2026',
  '/insights/top-market-research-companies-france-2026',
  '/insights/top-market-research-companies-uk-2026',
  '/insights/top-healthcare-market-research-companies-france-2026',
  '/insights/top-market-research-companies-spain-2026',
] as const;

const COMPETITORS = [
  'IQVIA UK',
  'Research Partnership',
  'Adelphi Research',
  'Ipsos UK',
  'Lumanity',
  'Mtech Access',
];

const OFFICE_LINE = 'Europe office: London (UK) · Americas office and global HQ: Sheridan, Wyoming (USA)';

type Rendered = { html: string; head: string };

function headOf(result: Awaited<ReturnType<typeof render>>): string {
  return [result.helmetData.title, result.helmetData.meta, result.helmetData.link, result.helmetData.script]
    .map((part) => part?.toString() ?? '')
    .join('\n');
}

describe('UK healthcare MR recovery pack', () => {
  const pages = new Map<string, Rendered>();

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of [UK_HMR, ...SHARED, '/market-research-uk']) {
      const result = await render(path);
      pages.set(path, { html: result.html, head: headOf(result) });
    }
  }, 180_000);

  it('keeps the frozen title and the six competitor profiles', () => {
    const page = pages.get(UK_HMR)!;
    expect(getCtrSeo(UK_HMR)?.title).toBe('Healthcare Market Research Companies UK 2026 | BioNixus');
    expect(page.head).toContain('Healthcare Market Research Companies UK 2026 | BioNixus');
    expect(page.html).toContain('Top Healthcare Market Research Company in the UK: 2026 Guide');
    expect(page.html.match(/<h1\b/g)).toHaveLength(1);
    for (const name of COMPETITORS) {
      expect(page.html, name).toContain(name);
    }
    expect(page.head).toContain('"name":"IQVIA UK"');
    expect(page.head).toContain('"name":"Mtech Access"');
  });

  it('uses the custom USD range, the approved office line, and the deploy-date placeholder', () => {
    const page = pages.get(UK_HMR)!;
    const faqSchema = page.head.slice(page.head.indexOf('FAQPage'));
    expect(page.html).toContain('$10,000–$60,000');
    expect(page.html).not.toMatch(/GBP|£\s*\d/);
    expect(faqSchema).toContain('$10,000–$60,000');
    expect(faqSchema).not.toMatch(/GBP/);
    expect(page.html).toContain(OFFICE_LINE);
    expect(page.html).not.toContain('Canada (Sheridan, WY)');
    expect(page.html).toContain('field office for Kuwait');
    expect(page.html).toContain('field office for UAE');
    expect(page.html).toContain('partner office for KSA');
    expect(page.html).toContain('field office for LATAM');
    expect(page.html).not.toMatch(/UK proof point|MRS \/ BHBIA|EphMRA membership/);
    expect(page.html).toContain('Last reviewed 9 Nov 2026');
    expect(page.head).toContain('"dateModified":"2026-11-09"');
    expect(page.html).not.toContain('BioNixus wrote this list');
  });

  it('repairs the shared lists without touching market-size figures', () => {
    const germanyHealthcare = pages.get(SHARED[0])!.html;
    const spainHealthcare = pages.get(SHARED[1])!.html;
    const germanyMr = pages.get(SHARED[2])!.html;
    const franceMr = pages.get(SHARED[3])!.html;
    const ukMr = pages.get(SHARED[4])!;

    for (const html of [germanyHealthcare, spainHealthcare, germanyMr, franceMr, ukMr.html]) {
      expect(html).toContain(OFFICE_LINE);
      expect(html).not.toMatch(/Canada \(Sheridan, WY\)|Germany · UK \(London\)|Spain · UK \(London\)|France · UK \(London\)/);
      expect(html).not.toMatch(/wrote this list of/);
      expect(html.match(/BioNixus wrote this guide and is included in it\./g)).toHaveLength(1);
    }

    expect(germanyHealthcare).toContain('~€440B+');
    expect(spainHealthcare).toContain('~€120B+');
    expect(germanyMr).toContain('~€55B+');
    expect(franceMr).toContain('~€60B+');
    expect(ukMr.html).toContain('$10,000–$60,000');
    expect(ukMr.html).toContain('~£30B+');
    expect(ukMr.html).not.toMatch(/GBP|£30,000|£110,000/);
    expect(ukMr.head).not.toMatch(/GBP|£30,000/);
    expect(ukMr.html).not.toMatch(/independent guide/i);
    expect(ukMr.html).toContain('What are the top market research companies in the United Kingdom?');
    expect(ukMr.html).toContain('BioNixus is a market research company that runs custom primary research in the United Kingdom');
    expect(germanyMr).toContain('What are the top market research companies in Germany?');
    expect(germanyMr).toContain('BioNixus is a market research company that runs custom primary research in Germany');
    expect(franceMr).toContain('What are the top market research companies in France?');
    expect(franceMr).toContain('BioNixus is a market research company that runs custom primary research in France');
    for (const html of [germanyMr, franceMr, ukMr.html]) {
      expect(html).not.toMatch(/best market research company/i);
    }

    const franceHealthcare = pages.get(SHARED[5])!.html;
    const spainMr = pages.get(SHARED[6])!.html;
    for (const html of [franceHealthcare, spainMr]) {
      expect(html).toContain(OFFICE_LINE);
      expect(html).not.toMatch(/France · UK \(London\)|Spain · UK \(London\)/);
      expect(html).not.toMatch(/wrote this list of/);
      expect(html.match(/BioNixus wrote this guide and is included in it\./g)).toHaveLength(1);
    }
    expect(spainMr).toContain('What are the top market research companies in Spain?');
    expect(spainMr).toContain('BioNixus is a market research company that runs custom primary research in Spain');
    expect(spainMr).not.toMatch(/best market research company/i);

    const headings = [
      [SHARED[2], 'What are the top market research companies in Germany?'],
      [SHARED[3], 'What are the top market research companies in France?'],
      [SHARED[4], 'What are the top market research companies in the United Kingdom?'],
      [SHARED[6], 'What are the top market research companies in Spain?'],
    ] as const;
    for (const [path, heading] of headings) {
      const head = pages.get(path)!.head;
      expect(head, path).toContain(heading);
      expect(`${pages.get(path)!.html}\n${head}`, path).not.toMatch(/best market research company/i);
    }
  });

  it('does not emit a canonical or meta description for the market-research-uk 404', () => {
    const page = pages.get('/market-research-uk')!;
    expect(page.head).not.toMatch(/rel="canonical"/);
    expect(page.head).not.toMatch(/name="description"/);
    const withInjectedTags = `${page.head}<link rel="canonical" href="https://www.bionixus.com/market-research-uk" /><meta name="description" content="Market Research Uk: pharmaceutical and healthcare market research insights from BioNixus." />`;
    const stripped = stripNotFoundDiscoveryTags(withInjectedTags);
    expect(stripped).not.toMatch(/rel="canonical"/);
    expect(stripped).not.toMatch(/name="description"/);
  });
});
