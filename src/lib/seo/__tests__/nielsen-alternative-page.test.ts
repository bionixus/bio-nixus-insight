import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const root = join(process.cwd());
const html = readFileSync(join(root, 'public/conf/nielsen-alternative.html'), 'utf8');
const iqviaHtml = readFileSync(join(root, 'public/conf/iqvia-alternative.html'), 'utf8');
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  redirects?: Array<{ source: string; destination: string; statusCode?: number }>;
  rewrites?: Array<{ source: string; destination: string }>;
};
const legacyRedirects = JSON.parse(readFileSync(join(root, 'config/legacy-redirects.json'), 'utf8')) as Record<
  string,
  string
>;

function extractJsonLd(document: string): Array<Record<string, unknown>> {
  const blocks = [...document.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  return blocks.map((match) => JSON.parse(match[1]) as Record<string, unknown>);
}

describe('/nielsen-alternative static page (IQVIA conf pattern)', () => {
  it('ships unique title, meta, one H1, canonical, and OG/Twitter tags', () => {
    expect(html).toContain('<title>Nielsen Alternatives &amp; Competitors: Ranked (2026)</title>');
    expect(html).toMatch(
      /<meta name="description" content="NielsenIQ alternatives for named accounts, traditional trade, and SKU-level cuts\. Keep NielsenIQ for national retail\. Brief BioNixus for the feed gap\.">/,
    );
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '';
    const description =
      html.match(/<meta name="description" content="([^"]+)">/)?.[1] ?? '';
    expect(title.replace(/&amp;/g, '&').length).toBeGreaterThanOrEqual(49);
    expect(title.replace(/&amp;/g, '&').length).toBeLessThanOrEqual(70);
    expect(description.length).toBeGreaterThanOrEqual(150);
    expect(description.length).toBeLessThanOrEqual(160);
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(html).toContain('Nielsen Alternatives &amp; Competitors Built for How Brands Really Sell');
    expect(html).toContain('<link rel="canonical" href="https://www.bionixus.com/nielsen-alternative">');
    expect(html).toContain('<meta property="og:url" content="https://www.bionixus.com/nielsen-alternative">');
    expect(html).toContain('<meta name="twitter:card" content="summary_large_image">');
  });

  it('opens with complement framing and keeps NielsenIQ for national retail', () => {
    expect(html).toContain('Keep NielsenIQ for national retail / FMCG measurement');
    expect(html).toContain('Brief us for the cut the feed misses');
    expect(html).toContain('primary-research complement, not a cheaper clone of NielsenIQ RMS');
    expect(html).not.toMatch(/BioNixus ranked #1/i);
    expect(html).not.toMatch(/we replace Nielsen/i);
    expect(html).not.toMatch(/staffed Riyadh/i);
    expect(html).toContain('Sheridan, Wyoming');
    expect(html).toContain('London');
    expect(html).toContain('Cairo');
    expect(html).toContain('Al Khobar');
  });

  it('includes draft FAQ answers as details/summary and FAQPage schema', () => {
    const schemas = extractJsonLd(html);
    const faq = schemas.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(faq).toBeTruthy();
    expect(faq.mainEntity).toHaveLength(8);
    expect(faq.mainEntity.map((item) => item.name)).toEqual([
      'What is a Nielsen alternative for market research?',
      'Is BioNixus a replacement for NielsenIQ?',
      'Does NielsenIQ cover pharmaceutical research in the UAE and KSA?',
      'Why do Nielsen and IQVIA miss account-level cuts?',
      'Can we keep Nielsen and still buy account-level research?',
      'How much does BioNixus cost compared to NielsenIQ?',
      'Who are NielsenIQ’s main competitors?',
      'How does BioNixus compare to NielsenIQ on data quality?',
    ]);
    const replacement = faq.mainEntity.find((item) => item.name.includes('replacement'));
    expect(replacement?.acceptedAnswer.text).toMatch(/^No\. Complementary\./);
    expect(html).toContain('<details open>');
    expect(html.match(/<details/g)?.length).toBe(8);
    expect(html).toContain('<summary>Is BioNixus a replacement for NielsenIQ?</summary>');
  });

  it('emits comparison schema plus Organization and dateModified', () => {
    const schemas = extractJsonLd(html);
    expect(schemas.some((node) => node['@type'] === 'Organization')).toBe(true);
    expect(schemas.some((node) => node['@type'] === 'Service')).toBe(true);
    expect(schemas.some((node) => node['@type'] === 'ItemList')).toBe(true);
    expect(schemas.some((node) => node['@type'] === 'BreadcrumbList')).toBe(true);
    const page = schemas.find((node) => node['@type'] === 'WebPage');
    expect(page?.dateModified).toBe('2026-09-13');
    expect(page?.url).toBe('https://www.bionixus.com/nielsen-alternative');
  });

  it('cross-links IQVIA, account-level, pricing, and client reviews', () => {
    expect(html).toContain('href="/iqvia-alternative"');
    expect(html).toContain('href="/account-level-market-research"');
    expect(html).toContain('href="/pricing"');
    expect(html).toContain('href="/client-reviews"');
    expect(html).toContain('data-cta-id="nielsen_alternative_footer"');
    expect(html).toContain('tel:+18884655557');
    expect(html).toContain('tel:+447727666682');
    expect(html).toContain('tel:+201206882323');
    expect(html).toContain('mailto:admin@bionixus.com');
  });

  it('is wired like IQVIA: vercel rewrite, alias 301s, CTR override', () => {
    expect(vercel.rewrites?.some((row) => row.source === '/nielsen-alternative' && row.destination === '/conf/nielsen-alternative.html')).toBe(
      true,
    );
    const aliasSources = [
      '/bionixus-vs-nielsen',
      '/bionixus-vs-nielseniq',
      '/nielseniq-alternative',
      '/nielsen-iq-alternative',
    ];
    for (const source of aliasSources) {
      expect(vercel.redirects?.some((row) => row.source === source && row.destination === '/nielsen-alternative' && row.statusCode === 301)).toBe(
        true,
      );
      expect(legacyRedirects[source]).toBe('/nielsen-alternative');
    }
    const ctr = getCtrSeo('/nielsen-alternative');
    expect(ctr?.title).toBe('Nielsen Alternatives & Competitors: Ranked (2026)');
    expect(ctr?.description).toContain('Keep NielsenIQ for national retail');
  });

  it('adds a small reciprocal Nielsen link on the IQVIA alternative page', () => {
    expect(iqviaHtml).toContain('href="/nielsen-alternative"');
    expect(iqviaHtml).toContain('Nielsen alternative');
  });
});

describe('Nielsen alternative internal link graph', () => {
  const hub = readFileSync(join(root, 'src/pages/healthcare-research/HubPage.tsx'), 'utf8');
  const pharmaHub = readFileSync(join(root, 'src/pages/PharmaceuticalMarketResearchProvider.tsx'), 'utf8');
  const studyTypes = readFileSync(join(root, 'src/data/pharmaStudyTypePages.ts'), 'utf8');
  const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
  const llmsFull = readFileSync(join(root, 'public/llms-full.txt'), 'utf8');

  it('healthcare hub links /nielsen-alternative next to IQVIA alternative', () => {
    expect(hub).toContain('to="/iqvia-alternative"');
    expect(hub).toContain('to="/nielsen-alternative"');
    expect(hub).toContain('NielsenIQ alternative for primary research');
    expect(hub.indexOf('to="/nielsen-alternative"')).toBeGreaterThan(hub.indexOf('to="/iqvia-alternative"'));
  });

  it('pharma hub links Nielsen as a retail / FMCG / OTC complement', () => {
    expect(pharmaHub).toContain('to="/iqvia-alternative"');
    expect(pharmaHub).toContain('to="/nielsen-alternative"');
    expect(pharmaHub).toContain('NielsenIQ alternative for primary research');
    expect(pharmaHub).toContain('Keep NielsenIQ for national retail / OTC shelf');
  });

  it('pharmacy mystery shopper (not HCP ATU) cross-links Nielsen for syndicated retail', () => {
    const pharmacyBlock = studyTypes.slice(
      studyTypes.indexOf('export const PHARMACY_MYSTERY_SHOPPER'),
      studyTypes.indexOf('export const PHARMA_COMPETITOR_INTEL'),
    );
    const atuBlock = studyTypes.slice(
      studyTypes.indexOf('export const HCP_ATU_STUDY'),
      studyTypes.indexOf('export const PHARMACY_MYSTERY_SHOPPER'),
    );
    expect(pharmacyBlock).toContain("to: '/nielsen-alternative'");
    expect(atuBlock).not.toContain("to: '/nielsen-alternative'");
  });

  it('llms.txt and llms-full.txt list Nielsen alternative with the 2026-09-18 GEO stamp', () => {
    expect(llms).toContain('# Last GEO refresh: 2026-Q3 (2026-09-18)');
    expect(llmsFull).toContain('# Last GEO refresh: 2026-Q3 (2026-09-18)');
    expect(llms).toContain('https://www.bionixus.com/nielsen-alternative');
    expect(llms).toContain('https://www.bionixus.com/iqvia-alternative');
    expect(llmsFull).toContain('https://www.bionixus.com/nielsen-alternative');
    expect(llmsFull).toContain('https://www.bionixus.com/iqvia-alternative');
  });
});
