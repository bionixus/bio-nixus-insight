import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const root = process.cwd();
const read = (rel: string) => readFileSync(join(root, rel), 'utf8');
const freeze = JSON.parse(read('data/seo/title-freeze.json')) as {
  entries: Record<string, { override: { title: string; description: string } | null }>;
};
const sitemap = read('public/sitemap.xml');

const IQVIA_TITLE = 'IQVIA Alternative Middle East: Primary Research 2026 | BioNixus';
const IQVIA_DESCRIPTION =
  'IQVIA alternative for Middle East primary research: keep syndicated audits for sizing; brief BioNixus for HCP, payer and patient fieldwork. 127 studies in 2026. Proposal in 48 hours.';

describe('Japan, IQVIA alternatives, and China device inlinks (Nov 2026)', () => {
  it('ships the Middle East IQVIA title and keeps 127 studies in 2026', () => {
    const ctr = getCtrSeo('/iqvia-alternative');
    expect(ctr?.title).toBe(IQVIA_TITLE);
    expect(ctr?.description).toBe(IQVIA_DESCRIPTION);
    expect(ctr!.description).toMatch(/^IQVIA alternative for Middle East/);
    expect(freeze.entries['/iqvia-alternative']?.override).toEqual(ctr);
    const html = read('public/conf/iqvia-alternative.html');
    expect(html).toContain(`<title>${IQVIA_TITLE}</title>`);
    expect(html).toContain(IQVIA_DESCRIPTION);
    expect(html).toContain('"dateModified":"2026-11-03"');
    expect(html).toContain('127 studies in 2026');
    expect(html).toContain('Scale (2026):</strong> 127 studies');
    expect(html).not.toContain('127 projects in 2025');
  });

  it('ships full Japan listicle, directory, and PMR descriptions', () => {
    for (const path of [
      '/insights/top-market-research-companies-japan-2026',
      '/pharmaceutical-companies-japan',
      '/pharmaceutical-market-research-japan',
    ]) {
      const ctr = getCtrSeo(path);
      expect(ctr, path).toBeDefined();
      expect(ctr!.title.length, path).toBeGreaterThanOrEqual(50);
      expect(ctr!.title.length, path).toBeLessThanOrEqual(60);
      expect(ctr!.description.length, path).toBeGreaterThanOrEqual(150);
      expect(ctr!.description.length, path).toBeLessThanOrEqual(160);
      expect(ctr!.description, path).not.toMatch(/(\.\.\.|…|, and\.|By\.)$/);
    }
    expect(getCtrSeo('/pharmaceutical-companies-japan')?.title).toBe(
      'Top 20 Pharmaceutical Companies in Japan (2026 Ranked List)',
    );
  });

  it('links the Japan listicle and directory from both Japan reports', () => {
    const devices = read('src/pages/JapanMedicalDevicesMarketReport.tsx');
    const healthcare = read('src/pages/JapanHealthcareMarketReport.tsx');
    const directory = read('src/pages/JapanPharmaCompanies.tsx');
    for (const source of [devices, healthcare]) {
      expect(source).toContain('to="/insights/top-market-research-companies-japan-2026"');
      expect(source).toContain('to="/pharmaceutical-companies-japan"');
    }
    expect(directory).toContain("to: '/insights/top-market-research-companies-japan-2026'");
    expect(devices).toContain("const PAGE_MODIFIED = '2026-11-01'");
    expect(healthcare).toContain("dateModified: '2026-11-01'");
  });

  it('links the China device report from the China listicle without changing the frozen title', () => {
    const china = read('src/pages/TopMarketResearchCompaniesChina2026.tsx');
    expect(china).toContain("to: '/china-medical-devices-market-report'");
    expect(china).toContain("dateModified: '2026-11-01'");
    expect(getCtrSeo('/china-medical-devices-market-report')?.title).toBe(
      'China Medical Devices Market 2026 | NMPA, VBP & Size',
    );
    expect(freeze.entries['/china-medical-devices-market-report']?.override?.title).toBe(
      'China Medical Devices Market 2026 | NMPA, VBP & Size',
    );
  });

  it('bumps sitemap lastmod for the changed pages', () => {
    expect(sitemap).toMatch(/\/iqvia-alternative<\/loc>\s*<lastmod>2026-11-03<\/lastmod>/);
    for (const path of [
      '/insights/top-market-research-companies-japan-2026',
      '/pharmaceutical-companies-japan',
      '/pharmaceutical-market-research-japan',
      '/japan-healthcare-market-report',
      '/japan-medical-devices-market-report',
      '/insights/top-market-research-companies-china-2026',
    ]) {
      expect(sitemap, path).toMatch(new RegExp(`${path}</loc>\\s*<lastmod>2026-11-01</lastmod>`));
    }
  });
});

describe('Japan snippets SSR', () => {
  const pages: Record<string, { html: string; head: string }> = {};

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of [
      '/insights/top-market-research-companies-japan-2026',
      '/pharmaceutical-market-research-japan',
    ]) {
      const page = await render(path, {});
      pages[path] = {
        html: page.html,
        head: [page.helmetData.title, page.helmetData.meta].map((part) => part.toString()).join('\n'),
      };
    }
  });

  it('SSRs the full Japan listicle description and one H1', () => {
    const { html, head } = pages['/insights/top-market-research-companies-japan-2026'];
    expect(head).toContain(getCtrSeo('/insights/top-market-research-companies-japan-2026')!.description);
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
  });

  it('SSRs the full Japan pharmaceutical market research description', () => {
    expect(pages['/pharmaceutical-market-research-japan'].head).toContain(
      getCtrSeo('/pharmaceutical-market-research-japan')!.description,
    );
  });
});
