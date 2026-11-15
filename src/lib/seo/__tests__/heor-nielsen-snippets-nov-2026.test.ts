import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

const root = process.cwd();
const read = (rel: string) => readFileSync(join(root, rel), 'utf8');
const freeze = JSON.parse(read('data/seo/title-freeze.json')) as {
  entries: Record<string, { override: { title: string; description: string } | null }>;
};

const HEOR_TITLE = 'HEOR Consulting Services: Health Economics & Outcomes Research';
const HEOR_DESCRIPTION =
  'HEOR consulting for pharma and medtech: cost-effectiveness models, budget impact, RWE and payer value dossiers. BioNixus HEOR services. 48-hour proposal.';
const NIELSEN_TITLE = 'NielsenIQ vs Competitors: Audit or Fieldwork (2026)';
const NIELSEN_DESCRIPTION =
  'Nielsen alternatives compared for 2026: keep NielsenIQ for national retail audits, and brief BioNixus for named accounts, traditional trade and SKU-level cuts.';

describe('HEOR and Nielsen snippets (Nov 2026)', () => {
  it('keeps both frozen titles and leads the descriptions with the zero-click queries', () => {
    const heor = getCtrSeo('/heor-consulting');
    const nielsen = getCtrSeo('/nielsen-alternative');
    expect(heor).toEqual({ title: HEOR_TITLE, description: HEOR_DESCRIPTION });
    expect(nielsen).toEqual({ title: NIELSEN_TITLE, description: NIELSEN_DESCRIPTION });
    expect(heor!.description).toMatch(/^HEOR consulting/);
    expect(nielsen!.description).toMatch(/^Nielsen alternatives/);
    expect(heor!.description.length).toBeGreaterThanOrEqual(150);
    expect(heor!.description.length).toBeLessThanOrEqual(160);
    expect(nielsen!.description.length).toBeGreaterThanOrEqual(150);
    expect(nielsen!.description.length).toBeLessThanOrEqual(160);
    expect(freeze.entries['/heor-consulting']?.override).toEqual(heor);
    expect(freeze.entries['/nielsen-alternative']?.override).toEqual(nielsen);
  });

  it('links HEOR from the IQVIA alternative page and the market access hub', () => {
    expect(read('public/conf/iqvia-alternative.html')).toContain('href="/heor-consulting"');
    expect(read('src/pages/MarketAccess.tsx')).toContain('to="/heor-consulting"');
    expect(read('src/pages/HeorConsulting.tsx')).toContain('modifiedAt="2026-11-01"');
    const sitemap = read('public/sitemap.xml');
    expect(sitemap).toMatch(/\/heor-consulting<\/loc>\s*<lastmod>2026-11-01<\/lastmod>/);
    expect(sitemap).toMatch(/\/nielsen-alternative<\/loc>\s*<lastmod>2026-11-01<\/lastmod>/);
  });

  it('SSRs the HEOR description', async () => {
    HelmetProvider.canUseDOM = false;
    const page = await render('/heor-consulting', {});
    const head = [page.helmetData.title, page.helmetData.meta]
      .map((part) => part.toString())
      .join('\n')
      .replace(/&amp;/g, '&');
    expect(head).toContain(HEOR_TITLE);
    expect(head).toContain(HEOR_DESCRIPTION);
    expect(page.html.match(/<h1[\s>]/g)?.length).toBe(1);
  });
});
