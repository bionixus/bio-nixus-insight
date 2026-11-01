import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { SPECIALTY_MARKET_DEMAND_BY_SLUG } from '@/data/specialtyMarketDemandContent';

const root = process.cwd();
const read = (rel: string) => readFileSync(join(root, rel), 'utf8');
const freeze = JSON.parse(read('data/seo/title-freeze.json')) as {
  entries: Record<string, { override: { title: string; description: string } | null }>;
};
const sitemap = read('public/sitemap.xml');

/** Frozen URLs: the live title stays byte-identical; only the clipped "..." description is replaced. */
const FROZEN_DESCRIPTION_ONLY: Record<string, string> = {
  '/healthcare-market-research/united-states': 'Healthcare Market Research in United States | BioNixus',
  '/usa-healthcare-market-report': 'USA Healthcare Market Research Report 2026 | BioNixus',
  '/usa-medical-devices-market-report': 'USA Medical Devices Market Report 2026 | BioNixus Research',
  '/healthcare-market-research-singapore': 'Healthcare Market Research Company in Singapore | BioNixus',
  '/singapore-healthcare-market-report': 'Singapore Healthcare Market Report 2026 | BioNixus',
  '/singapore-medical-devices-market-report': 'Singapore Medical Devices Market Report 2026 | BioNixus',
  '/singapore-medtech-manufacturing-market': 'Singapore MedTech Manufacturing Market Research | BioNixus',
  '/singapore-pharmaceutical-market': 'Singapore Pharmaceutical Market Intelligence 2026 | BioNixus',
};

const UNFROZEN = [
  '/healthcare-market-research-usa',
  '/pharmaceutical-market-research-usa',
  '/pharmaceutical-companies-usa',
  '/pharmaceutical-market-research-singapore',
  '/singapore-medtech-market-research',
];

describe('USA and Singapore snippets (Nov 2026)', () => {
  it('ships full 150–160 char descriptions with no clipped ellipsis', () => {
    for (const path of [...Object.keys(FROZEN_DESCRIPTION_ONLY), ...UNFROZEN]) {
      const ctr = getCtrSeo(path);
      expect(ctr, path).toBeDefined();
      expect(ctr!.title.length, path).toBeGreaterThanOrEqual(50);
      expect(ctr!.title.length, path).toBeLessThanOrEqual(60);
      expect(ctr!.description.length, path).toBeGreaterThanOrEqual(150);
      expect(ctr!.description.length, path).toBeLessThanOrEqual(160);
      expect(ctr!.description, path).not.toMatch(/(\.\.\.|…|, and\.)$/);
    }
  });

  it('keeps frozen titles unchanged and records the description change in the freeze file', () => {
    for (const [path, title] of Object.entries(FROZEN_DESCRIPTION_ONLY)) {
      expect(getCtrSeo(path)?.title, path).toBe(title);
      expect(freeze.entries[path]?.override, path).toEqual(getCtrSeo(path));
    }
  });

  it('repairs the truncated Singapore pharmaceutical market research title', () => {
    expect(getCtrSeo('/pharmaceutical-market-research-singapore')?.title).toBe(
      'Pharmaceutical Market Research Singapore | BioNixus',
    );
    const page = read('src/pages/SingaporePharmaceuticalMarketResearch.tsx');
    expect(page).toContain('title="Pharmaceutical Market Research Singapore | BioNixus"');
    expect(page).not.toContain('subsidy studies, and."');
  });

  it('uses the counted Egypt-style title on both directories', () => {
    const usa = read('src/pages/UsaPharmaCompanies.tsx');
    const usaCount = usa.split('const pharmaCompanies')[1].split('];')[0].match(/^ {2}\{ name: '/gm)?.length;
    expect(usaCount).toBe(28);
    expect(getCtrSeo('/pharmaceutical-companies-usa')?.title).toBe('Top 28 Pharmaceutical Companies in USA (2026 List)');
    expect(usa).toContain('<title>Top 28 Pharmaceutical Companies in USA (2026 List)</title>');
    expect(usa).toContain("dateModified: '2026-11-01'");

    const sg = read('src/pages/SingaporePharmaCompanies.tsx');
    const sgCount = sg.split('companies: [')[1].split('],')[0].match(/\{ name: '/g)?.length;
    expect(sgCount).toBe(17);
    expect(sg).toContain("title: 'Top 17 Pharmaceutical Companies in Singapore (2026 List)'");
    expect(sg).toContain("to: '/singapore-medtech-manufacturing-market'");
    expect(sg).toContain('Which biotech and medtech companies operate in Singapore?');
  });

  it('links the USA listicle and directories from the USA device and healthcare reports', () => {
    const devices = read('src/pages/UsaMedicalDevicesMarketReport.tsx');
    expect(devices).toContain('to="/insights/top-healthcare-market-research-companies-usa-2026"');
    expect(devices).toContain('to="/pharmaceutical-companies-usa"');
    expect(devices).toContain('to="/medical-device-companies-usa"');
    const healthcare = read('src/pages/UsaHealthcareMarketReport.tsx');
    expect(healthcare).toContain('to="/pharmaceutical-companies-usa"');
  });

  it('names Singapore medtech manufacturers on the manufacturing page', () => {
    const content = SPECIALTY_MARKET_DEMAND_BY_SLUG['singapore-medtech-manufacturing-market'];
    expect(content.dateModified).toBe('2026-11-01');
    expect(content.earlyLinks?.map((l) => l.to)).toEqual([
      '/blog/medtech-singapore-2026-market-hsa-registration',
      '/pharmaceutical-companies-singapore',
    ]);
    expect(content.marketStructure.paragraphs[0]).toContain('Medtronic');
    expect(content.faqs.some((f) => f.question === 'Which MedTech companies manufacture in Singapore?')).toBe(true);
  });

  it('bumps sitemap lastmod for the changed pages', () => {
    for (const path of [
      '/pharmaceutical-companies-usa',
      '/pharmaceutical-companies-singapore',
      '/usa-healthcare-market-report',
      '/usa-medical-devices-market-report',
      '/singapore-medtech-manufacturing-market',
    ]) {
      expect(sitemap, path).toMatch(new RegExp(`${path}</loc>\\s*<lastmod>2026-11-01</lastmod>`));
    }
  });
});

describe('USA and Singapore snippets SSR', () => {
  const pages: Record<string, { html: string; head: string }> = {};

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of [
      '/pharmaceutical-companies-singapore',
      '/singapore-medtech-manufacturing-market',
      '/pharmaceutical-market-research-singapore',
      '/usa-medical-devices-market-report',
    ]) {
      const page = await render(path, {});
      pages[path] = {
        html: page.html,
        head: [page.helmetData.title, page.helmetData.meta]
          .map((part) => part.toString())
          .join('\n')
          .replace(/&amp;/g, '&'),
      };
    }
  });

  it('SSRs the new directory title, biotech FAQ, and one H1', () => {
    const { html, head } = pages['/pharmaceutical-companies-singapore'];
    expect(head).toContain('Top 17 Pharmaceutical Companies in Singapore (2026 List)');
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(html).toContain('WuXi Biologics');
    expect(html).toContain('href="/singapore-medtech-manufacturing-market"');
  });

  it('SSRs the medtech manufacturer list and early links', () => {
    const { html, head } = pages['/singapore-medtech-manufacturing-market'];
    expect(head).toContain(getCtrSeo('/singapore-medtech-manufacturing-market')!.description);
    expect(html).toContain('Boston Scientific');
    expect(html).toContain('href="/blog/medtech-singapore-2026-market-hsa-registration"');
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
  });

  it('SSRs the repaired Singapore PMR title', () => {
    expect(pages['/pharmaceutical-market-research-singapore'].head).toContain(
      'Pharmaceutical Market Research Singapore | BioNixus',
    );
  });

  it('SSRs the USA device report inlinks with a full description', () => {
    const { html, head } = pages['/usa-medical-devices-market-report'];
    expect(head).toContain(getCtrSeo('/usa-medical-devices-market-report')!.description);
    expect(html).toContain('href="/insights/top-healthcare-market-research-companies-usa-2026"');
  });
});
