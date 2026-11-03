import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';

const root = process.cwd();

describe('R1 R2 R3 recovery SSR', () => {
  const pages: Record<string, { html: string; head: string }> = {};

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of [
      '/uae-pharmaceutical-market-research',
      '/healthcare-market-research/uae',
      '/insights/top-market-research-companies-saudi-arabia-2026',
    ]) {
      const page = await render(path);
      pages[path] = {
        html: page.html,
        head: [page.helmetData.title, page.helmetData.meta, page.helmetData.script]
          .map((part) => part.toString())
          .join('\n'),
      };
    }
  }, 120_000);

  it('ships the UAE company page answer, FAQ, and 3 November review', () => {
    const { html, head } = pages['/uae-pharmaceutical-market-research'];
    expect(head).toContain('Healthcare Market Research Company in UAE | BioNixus');
    expect(head).toContain(
      'Healthcare market research company in UAE: BioNixus runs DHA-, DOH- and MOHAP-aligned HCP, KOL, payer and patient studies from its Dubai field office. Proposal in 48 hours.',
    );
    expect(html).toContain('Healthcare Market Research Company in the UAE for Pharma and MedTech');
    expect(html).toContain('Last reviewed 3 November 2026 · Dubai · Abu Dhabi · Northern Emirates');
    expect(html).toContain('What is a healthcare market research company in the UAE?');
    expect(head).toContain('What is a healthcare market research company in the UAE?');
    expect(head).toContain('"dateModified":"2026-11-03"');
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(html).toContain('href="/healthcare-market-research"');
  });

  it('points the UAE hub at the company page and bumps the review date', () => {
    const { html, head } = pages['/healthcare-market-research/uae'];
    expect(html).toContain('Last reviewed 3 November 2026');
    expect(html).toContain('Looking for a healthcare market research company in the UAE?');
    expect(html).toContain('href="/uae-pharmaceutical-market-research"');
    expect(html).not.toContain('This is BioNixus&#x27;s UAE healthcare market research hub');
    expect(head).toContain('"dateModified":"2026-11-03"');
  });

  it('ships the Saudi Arabia shortlist title, opener, and FAQ without a ranked claim', () => {
    const { html, head } = pages['/insights/top-market-research-companies-saudi-arabia-2026'];
    expect(head).toContain('Top Market Research Companies in Saudi Arabia 2026 | BioNixus');
    expect(html).toContain('Top Market Research Companies in Saudi Arabia 2026: Shortlist by Research Need');
    expect(html).toContain('Last reviewed 3 November 2026 · Saudi Arabia · Riyadh · Jeddah · Eastern Province');
    expect(html).toContain('Top market research companies in Saudi Arabia split by job');
    expect(html).toContain('There is no single best firm for every brief.');
    expect(head).toContain('"datePublished":"2026-06-07"');
    expect(head).toContain('"dateModified":"2026-11-03"');
    expect((html.match(/BioNixus wrote this list/g) || []).length).toBe(3);
    expect(html).not.toMatch(/Ranked #1|ranks #1/);
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '';
    expect(h1).not.toContain('vs IQVIA');
    const iqvia = readFileSync(join(root, 'public/conf/iqvia-alternative.html'), 'utf8');
    expect(iqvia).toContain('127 studies in 2026');
    expect(iqvia).not.toContain('127 projects in 2025');
  });
});
