import { readFileSync } from 'node:fs';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { fitBrandedSeoTitle } from '@/lib/seo-meta';

const PAGE = '/insights/top-healthcare-market-research-companies-italy-2026';
const TITLE = 'Healthcare Market Research Companies Italy 2026 | BioNixus';
const DESCRIPTION =
  'Italy healthcare market research companies 2026: AIFA-aligned HCP surveys in Italian, CTS/CPR payer research, IRCCS KOL mapping. Compare BioNixus & peers.';
const H1 = 'Top Healthcare Market Research Company in Italy: 2026 Guide';
const SOURCE_TITLE = 'Top Healthcare Market Research Companies in Italy 2026 | BioNixus';

/** Mirrors api/indexnow-key.ts normalizeDescriptionLength (production SSR, max 155). */
function productionDescriptionClamp(description: string, max = 155): string {
  const clean = String(description || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 90 ? cut.slice(0, lastSpace) : cut).trim().replace(/[|,;:\-–—\s]+$/, '')}.`;
}

describe('Italy body fixes on the frozen MR list and the service page', () => {
  it('removes the best/independent claims and the invented Italy HQ on the MR list', async () => {
    HelmetProvider.canUseDOM = false;
    const page = await render('/insights/top-market-research-companies-italy-2026');
    const html = page.html.replace(/<!-- -->/g, '');
    const head = [page.helmetData?.title, page.helmetData?.script]
      .map((part) => (part ? part.toString() : ''))
      .join('\n');
    expect(head).toContain('Top Market Research Companies in Italy 2026 | BioNixus');
    expect(html).toContain('This guide covers market research companies operating in Italy for 2026.');
    expect(html).not.toContain('An independent guide');
    expect(html).toContain('What are the top market research companies in Italy?');
    expect(html).toContain(
      'BioNixus is a market research company that runs custom primary research in Italy from its Europe office in London.',
    );
    expect(html).not.toContain('BioNixus is the best market research company in Italy');
    expect(html).toContain('Europe office: London (UK) · Americas office and global HQ: Sheridan, Wyoming (USA)');
    expect(html).not.toContain('HQ: Italy');
    expect(head).toContain('"dateModified":"2026-11-16"');
    expect(head).toContain('"datePublished":"2026-06-25"');
  });

  it('drops best and leading on the Italy healthcare service page and links the list', async () => {
    HelmetProvider.canUseDOM = false;
    const page = await render('/healthcare-market-research-italy');
    const html = page.html;
    expect(html).toContain('Healthcare market research company in Italy');
    expect(html).not.toContain('Best healthcare market research company in Italy');
    expect(html).toContain('Who is the top healthcare market research company in Italy?');
    expect(html).not.toContain('Who is the best healthcare market research company in Italy?');
    expect(html).toContain('BioNixus is a healthcare market research company in Italy, delivering');
    expect(html).not.toContain('BioNixus is a leading healthcare market research company in Italy');
    expect(html).toContain('href="/insights/top-healthcare-market-research-companies-italy-2026"');
  });
});

describe('Italy healthcare market research companies 2026', () => {
  let html = '';
  let head = '';

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const page = await render(PAGE);
    html = page.html;
    head = [page.helmetData?.title, page.helmetData?.meta, page.helmetData?.script]
      .map((part) => (part ? part.toString() : ''))
      .join('\n');
  });

  it('keeps the 58-character title and warns when the old title is cut onto "in"', () => {
    expect(TITLE.length).toBe(58);
    expect(fitBrandedSeoTitle(TITLE)).toBe(TITLE);

    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(fitBrandedSeoTitle(SOURCE_TITLE)).toBe(
      'Top Healthcare Market Research Companies in | BioNixus',
    );
    expect(warn).toHaveBeenCalled();
    expect(String(warn.mock.calls[0]?.[0])).toContain('dangling word');
    warn.mockRestore();
  });

  it('ships the new title, description, H1, opener, facts, office and six-question FAQ', () => {
    expect(DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(productionDescriptionClamp(DESCRIPTION)).toBe(DESCRIPTION);
    expect(head).toContain(TITLE);
    expect(head).toContain(DESCRIPTION);
    expect(html).toContain(H1);
    expect(html).toContain('id="answer-opener"');
    expect(html).toContain('BioNixus at a glance');
    expect(html).toContain('Founded in 2012.');
    expect(html).toContain('118 clients in 48 countries.');
    expect(html).toContain('127 studies in 2026 year-to-date; 120 in 2025.');
    expect(html).toContain('82,000+ physicians globally and about 3,200 in the Middle East.');
    expect(html).toContain('$10,000–$60,000');
    expect(html).not.toContain('proposal within 48 hours');
    expect(html).toContain('UK: Europe office (128 City Road, London)');
    expect(html).toContain('USA: Americas office and global HQ (Sheridan, Wyoming)');
    expect(html).toContain('Cairo: AMEA (APAC, Middle East, Africa) office');
    expect(html).toContain('São Paulo: field office for LATAM');
    expect(html).toContain('Al Khobar: partner office for KSA');
    expect(html).toContain('Europe office: London (UK) · Americas office and global HQ: Sheridan, Wyoming (USA)');
    expect(html).not.toContain('HQ: Italy');
    expect(html.replace(/<!-- -->/g, '')).toContain('Last reviewed 16 Nov 2026');
    expect(html.replace(/<!-- -->/g, '')).toContain('Published 25 June 2026');
    expect(head).toContain('"datePublished":"2026-06-25"');
    expect(head).toContain('"dateModified":"2026-11-16"');

    const questions = [
      'Who is the top healthcare market research company in Italy?',
      'Does BioNixus have an office in Italy?',
      'What healthcare research does BioNixus run in Italy?',
      'Can BioNixus survey HCPs in Italian across all 20 regions?',
      'What makes Italian healthcare market research different from other EU5 markets?',
      'How much does custom healthcare market research in Italy cost?',
    ];
    for (const question of questions) {
      expect(html).toContain(question);
      expect(head).toContain(question);
    }
    const faqHtml = html.slice(html.indexOf('id="faq"'), html.indexOf('Related Resources'));
    const faqSchema = head.slice(head.indexOf('"@type":"FAQPage"'));
    for (const name of ['IQVIA', 'Ipsos', 'Kantar', 'GfK', 'RTI', 'Doxa']) {
      expect(faqHtml).not.toContain(name);
      expect(faqSchema).not.toContain(name);
    }
    expect(head).not.toContain('Other firms include');
  });

  it('links the Italy service page and the other Europe lists', () => {
    for (const href of [
      '/healthcare-market-research-italy',
      '/pharmaceutical-market-research-italy',
      '/insights/top-market-research-companies-italy-2026',
      '/insights/top-healthcare-market-research-companies-uk-2026',
      '/insights/top-healthcare-market-research-companies-germany-2026',
      '/insights/top-healthcare-market-research-companies-france-2026',
      '/insights/top-healthcare-market-research-companies-spain-2026',
      '/insights/top-global-healthcare-market-research-companies-2026',
      '/healthcare-market-research',
      '/contact',
    ]) {
      expect(html).toContain(`href="${href}"`);
    }
  });

  it('keeps the six competitor names and does not put banned claims in the new opener', () => {
    for (const name of ['IQVIA Italy', 'Ipsos Healthcare Italy', 'Kantar Health Italy', 'GfK Italy (NielsenIQ)', 'RTI Health Solutions (Italian presence)', 'Doxa Pharma']) {
      expect(html).toContain(name);
    }
    const opener = html
      .slice(html.indexOf('id="answer-opener"'), html.indexOf('BioNixus at a glance'))
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ');
    expect(opener).not.toMatch(/—|#1|\bindependent\b|\bleading\b|\btop-ranked\b|\bbest\b/i);
    const source = readFileSync('src/pages/TopHealthcareMarketResearchCompaniesItaly2026.tsx', 'utf8');
    const added = source.slice(source.indexOf('const faqItems'), source.indexOf('const comparisonCriteria'));
    expect(added).not.toMatch(/—|#1|\bindependent\b|\bleading\b|\btop-ranked\b|\bbest\b/i);
  });
});
