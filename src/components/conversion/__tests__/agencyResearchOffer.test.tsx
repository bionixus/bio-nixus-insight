import { fireEvent, render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AgencyResearchOffer } from '@/components/conversion/AgencyResearchOffer';
import {
  AGENCY_OFFER_BULLETS,
  AGENCY_QUOTE_INTRO,
  AGENCY_QUOTE_SUCCESS,
  PHYSICIAN_NETWORK_STATEMENT,
} from '@/data/agencyResearchOffer';
import { FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT } from '@/lib/submitLeadDual';

const ROOT = resolve(__dirname, '../../../..');

const PAGES: { file: string; lead: string; slug: string }[] = [
  {
    file: 'src/pages/SpecialistPhysicianPanelUae.tsx',
    slug: 'specialist-physician-panel-uae',
    lead: 'When a client brief needs a verified UAE specialist physician panel, BioNixus can deliver under your brand.',
  },
  {
    file: 'src/pages/HealthcareFieldworkGcc.tsx',
    slug: 'healthcare-fieldwork-gcc',
    lead: 'When a client brief needs verified healthcare fieldwork across one or more GCC markets, BioNixus can deliver under your brand.',
  },
  {
    file: 'src/pages/GccHcpRecruitmentMarketResearch.tsx',
    slug: 'gcc-hcp-recruitment-market-research',
    lead: 'When a client brief needs verified physician or HCP recruitment in Saudi Arabia and the wider GCC, BioNixus can deliver under your brand.',
  },
];

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('agency research offer', () => {
  it('posts the agency brief through HighLevel and Formspree with the agency tags and ref', async () => {
    const fetchMock = vi.fn((input: RequestInfo, init?: RequestInit) => {
      const url = String(input);
      if (url === HIGHLEVEL_LEAD_ENDPOINT) return Promise.resolve(jsonResponse({ success: true, contactId: 'c1' }));
      if (url === FORMSPREE_ENDPOINT) return Promise.resolve(jsonResponse({ ok: true }));
      throw new Error(`unexpected ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    render(
      <MemoryRouter>
        <AgencyResearchOffer
          pageSlug="specialist-physician-panel-uae"
          lead="When a client brief needs a verified UAE specialist physician panel, BioNixus can deliver under your brand."
        />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'Mary Ann Smith' } });
    fireEvent.change(screen.getByLabelText(/Agency/), { target: { value: 'Northwind Research' } });
    fireEvent.change(screen.getByLabelText(/Work email/), { target: { value: 'mary@northwind.com' } });
    fireEvent.change(screen.getByLabelText(/Country/), { target: { value: 'United Kingdom' } });
    fireEvent.change(screen.getByLabelText(/Project brief/), { target: { value: 'UAE oncology IDIs, n=40' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send agency brief' }));

    expect(await screen.findByRole('status')).toHaveTextContent(AGENCY_QUOTE_SUCCESS);
    const highLevel = fetchMock.mock.calls.find((call) => String(call[0]) === HIGHLEVEL_LEAD_ENDPOINT);
    if (!highLevel) throw new Error('missing highlevel call');
    const body = JSON.parse(String(highLevel[1]?.body));
    expect(body).toMatchObject({
      name: 'Mary Ann Smith',
      agency: 'Northwind Research',
      email: 'mary@northwind.com',
      country: 'United Kingdom',
      projectBrief: 'UAE oncology IDIs, n=40',
      tags: 'source-ai-search,agency-quote',
      ref: 'agency-specialist-physician-panel-uae',
      formVariant: 'agency-quote',
    });
    expect(fetchMock.mock.calls.some((call) => String(call[0]) === FORMSPREE_ENDPOINT)).toBe(true);
    expect(JSON.stringify(highLevel[1]?.headers || {})).not.toMatch(/Bearer|HIGHLEVEL_API_KEY|pit-/);
  });

  it('warns once on a free-mail address and does not send until the next press', () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    render(
      <MemoryRouter>
        <AgencyResearchOffer pageSlug="healthcare-fieldwork-gcc" lead="When a client brief needs verified healthcare fieldwork across one or more GCC markets, BioNixus can deliver under your brand." />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'Sam Lee' } });
    fireEvent.change(screen.getByLabelText(/Agency/), { target: { value: 'Northwind Research' } });
    fireEvent.change(screen.getByLabelText(/Work email/), { target: { value: 'sam@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Country/), { target: { value: 'UAE' } });
    fireEvent.change(screen.getByLabelText(/Project brief/), { target: { value: 'GCC CATI, n=30' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send agency brief' }));
    expect(screen.getByRole('alert')).toHaveTextContent('personal email address');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('uses the approved wording on each page and links the partner programme to /contact', () => {
    const offer = readFileSync(resolve(ROOT, 'src/components/conversion/AgencyResearchOffer.tsx'), 'utf8');
    expect(offer).toContain('to="/contact"');
    expect(offer).toContain('BioNixus partner programme');
    expect(offer).not.toContain('partner-programme-TODO');
    expect(offer).not.toContain('Field Partner Program');
    expect(offer).not.toContain('Submissions are tagged source-ai-search');
    expect(offer).not.toContain('127 studies');
    expect(offer).toContain('AGENCY_QUOTE_INTRO');
    expect(offer).toContain('AGENCY_QUOTE_SUCCESS');
    expect(offer).toContain('PHYSICIAN_NETWORK_STATEMENT');
    const copy = readFileSync(resolve(ROOT, 'src/data/agencyResearchOffer.ts'), 'utf8');
    expect(copy).toContain(PHYSICIAN_NETWORK_STATEMENT);
    expect(copy).toContain(AGENCY_QUOTE_INTRO);
    expect(copy).toContain(AGENCY_QUOTE_SUCCESS);
    expect(copy).not.toContain('Submissions are tagged source-ai-search');
    for (const bullet of AGENCY_OFFER_BULLETS) expect(copy).toContain(bullet);

    for (const page of PAGES) {
      const src = readFileSync(resolve(ROOT, page.file), 'utf8');
      expect(src, page.file).toContain(page.lead);
      expect(src, page.file).toContain(`pageSlug="${page.slug}"`);
      expect(src, page.file).toContain('PHYSICIAN_NETWORK_STATEMENT');
      expect(src, page.file).not.toContain('127 studies');
      expect(src, page.file).not.toContain('Field Partner Program');
    }

    const html = readFileSync(resolve(ROOT, 'public/conf/physician-survey-saudi-arabia.html'), 'utf8');
    expect(html).toContain('When a client brief needs Saudi physician surveys with verified recruitment, BioNixus can deliver under your brand.');
    expect(html).toContain(PHYSICIAN_NETWORK_STATEMENT);
    expect(html).toContain('href="/contact"');
    expect(html).toContain('ref" value="agency-physician-survey-saudi-arabia"');
    expect(html).toContain('source-ai-search,agency-quote');
    expect(html).toContain("fetch('/api/highlevel-lead'");
    expect(html).toContain('https://formspree.io/f/xgozewew');
    expect(html).toContain(AGENCY_QUOTE_INTRO);
    expect(html).toContain(AGENCY_QUOTE_SUCCESS);
    for (const bullet of AGENCY_OFFER_BULLETS) expect(html).toContain(bullet);
    expect(html).not.toContain('Submissions are tagged source-ai-search');
    expect(html).not.toContain('partner-programme-TODO');
    expect(html).not.toContain('Field Partner Program');
    expect(html).not.toContain('SCHS');
    expect(html).not.toContain('127 studies');
    expect(html).toContain('Americas office and global HQ in Sheridan, Wyoming');
    expect(html).toContain('Europe office in London');
    expect(html).toContain('AMEA (APAC, Middle East, Africa) office in Cairo (Sheikh Zayed)');
    expect(html).toContain('partner office for KSA in Al Khobar');
    expect(html).toContain('field office for UAE in Dubai (Thuraya Tower 1, 5th Floor, Al Sufouh 2)');
    expect(html).toContain('GDPR (for data processed through our Europe office in London)');
    expect(html).toContain('Saudi Commission for Health Specialties (SCFHS)');
    expect(html).toContain('82,000+ physicians globally and about 3,200 in the Middle East');
    expect(html).toContain('"dateModified":"2026-10-29"');
  });
});
