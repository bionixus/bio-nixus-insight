import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { SPECIALTY_MARKET_DEMAND_BY_SLUG } from '@/data/specialtyMarketDemandContent';

const PATH = '/singapore-ivd-market-access';
const TITLE = 'Singapore IVD Market Access: HSA, Labs & Hospitals';
const DESCRIPTION =
  'Singapore IVD market access: HSA pathways, SingHealth/NUHS/NHG lab algorithms, and assays that stay registered but unused. Primary research. 48h proposal.';

const root = join(process.cwd());
const content = SPECIALTY_MARKET_DEMAND_BY_SLUG['singapore-ivd-market-access'];
const template = readFileSync(join(root, 'src/pages/templates/SpecialtyMarketDemandPage.tsx'), 'utf8');
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const listicle = readFileSync(join(root, 'src/pages/TopMarketResearchCompaniesSingapore2026.tsx'), 'utf8');
const healthcareReport = readFileSync(join(root, 'src/pages/SingaporeHealthcareMarketReport.tsx'), 'utf8');
const devicesReport = readFileSync(join(root, 'src/pages/SingaporeMedicalDevicesMarketReport.tsx'), 'utf8');
const pharmaCompanies = readFileSync(join(root, 'src/pages/SingaporePharmaCompanies.tsx'), 'utf8');

describe('/singapore-ivd-market-access', () => {
  it('ships exact-query title, meta, H1, and CTR override in the 50–60 / 150–160 band', () => {
    expect(content).toBeDefined();
    expect(content.title).toBe(TITLE);
    expect(content.description).toBe(DESCRIPTION);
    expect(content.h1).toBe('Singapore IVD market access');
    expect(content.dateModified).toBe('2026-10-20');
    expect(content.title.length).toBeGreaterThanOrEqual(50);
    expect(content.title.length).toBeLessThanOrEqual(60);
    expect(content.description.length).toBeGreaterThanOrEqual(150);
    expect(content.description.length).toBeLessThanOrEqual(160);
    expect(getCtrSeo(PATH)).toEqual({ title: TITLE, description: DESCRIPTION });
    expect(content.faqs[0]?.question).toBe('What is Singapore IVD market access?');
  });

  it('links the hub, Singapore listicle, and pharma-companies directory in the first screen', () => {
    expect(content.hubLink?.to).toBe('/healthcare-market-research');
    expect(content.earlyLinks?.map((link) => link.to)).toEqual([
      '/insights/top-market-research-companies-singapore-2026',
      '/pharmaceutical-companies-singapore',
    ]);
    expect(template).toContain('content.earlyLinks');
    expect(template).toContain('content.dateModified');
  });

  it('receives first-screen inlinks from the Singapore listicle and both reports', () => {
    expect(listicle).toContain(`to="${PATH}"`);
    expect(listicle).toContain("dateModified: '2026-10-20'");
    expect(healthcareReport).toContain(`to="${PATH}"`);
    expect(healthcareReport).toContain("dateModified: '2026-10-20'");
    expect(devicesReport).toContain(`to="${PATH}"`);
    expect(devicesReport).toContain("dateModified: '2026-10-20'");
    expect(pharmaCompanies).toContain(`to: '${PATH}'`);
    expect(pharmaCompanies).toContain("modifiedDate: '2026-10-20'");
    expect(sitemap).toMatch(new RegExp(`${PATH}</loc>\\s*<lastmod>2026-10-20</lastmod>`));
  });
});

describe('/singapore-ivd-market-access SSR', () => {
  let html = '';
  let head = '';

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const page = await render(PATH, {});
    html = page.html;
    head = [page.helmetData.title, page.helmetData.meta, page.helmetData.script].map((part) => part.toString()).join('\n');
  });

  it('SSRs the exact-query title, H1, hub/listicle/directory links, and details FAQ', () => {
    expect(head.replace(/&amp;/g, '&')).toContain(TITLE);
    expect(head).toContain(DESCRIPTION);
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(html).toContain('>Singapore IVD market access<');
    expect(html).toContain('href="/healthcare-market-research"');
    expect(html).toContain('href="/insights/top-market-research-companies-singapore-2026"');
    expect(html).toContain('href="/pharmaceutical-companies-singapore"');
    expect(html).toContain('<details');
    expect(html).toContain('What is Singapore IVD market access?');
    expect(head).toContain('"dateModified":"2026-10-20"');
  });
});

