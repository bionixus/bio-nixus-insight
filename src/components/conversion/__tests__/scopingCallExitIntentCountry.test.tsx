import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import GA4EventTracker from '@/components/GA4EventTracker';
import { ScopingCallExitIntent } from '@/components/conversion/ScopingCallExitIntent';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { CONTACT_FORM_COUNTRIES } from '@/data/contactFormCountries';
import { SCOPING_CALL_COUNTRY_COUNT } from '@/data/scopingCallCountryOptions';
import { FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT } from '@/lib/submitLeadDual';

vi.mock('@/hooks/useExitIntent', () => ({
  useExitIntent: () => ({ triggered: true, dismiss: vi.fn() }),
}));

const KEY_MARKETS = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Switzerland',
  'Netherlands',
  'Belgium',
  'Sweden',
  'Ireland',
  'Poland',
  'Türkiye',
  'Saudi Arabia',
  'United Arab Emirates',
  'Egypt',
  'Kuwait',
  'Qatar',
  'Oman',
  'Bahrain',
  'Jordan',
  'Morocco',
  'Japan',
  'China',
  'India',
  'South Korea',
  'Singapore',
  'Australia',
  'New Zealand',
  'Brazil',
  'Mexico',
  'Argentina',
  'Colombia',
  'South Africa',
  'Nigeria',
  'Kenya',
  'Multi-country / Global',
  'Other',
] as const;

function renderExitIntent() {
  return render(
    <MemoryRouter initialEntries={['/healthcare-market-research']}>
      <LanguageProvider>
        <GA4EventTracker />
        <ScopingCallExitIntent />
      </LanguageProvider>
    </MemoryRouter>,
  );
}

function optionValues(select: HTMLElement): string[] {
  return Array.from(select.querySelectorAll('option')).map((option) => option.value);
}

beforeEach(() => {
  window.dataLayer = [];
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: {
      href: 'http://localhost/healthcare-market-research',
      pathname: '/healthcare-market-research',
      search: '',
    },
  });
});

describe('exit-intent scoping call country dropdown', () => {
  it('lists United States and Canada first, then the contact-form country list', () => {
    renderExitIntent();

    expect(screen.getByRole('heading', { name: /before you go: book a 30-minute scoping call/i })).toBeInTheDocument();
    const select = screen.getByLabelText(/^country$/i);
    expect(select.tagName).toBe('SELECT');
    expect(select).toHaveAttribute('name', 'markets');

    const values = optionValues(select);
    expect(values.slice(0, 5)).toEqual([
      '',
      'United States',
      'Canada',
      'Multi-country / Global',
      'Other',
    ]);
    expect(select.querySelector('option[value="United States"]')).toHaveTextContent('United States (USA)');
    expect(select.querySelector('option[value="Canada"]')).toHaveTextContent('Canada');
    expect(values.filter((value) => value === 'United States')).toHaveLength(1);
    expect(values.filter((value) => value === 'Canada')).toHaveLength(1);

    for (const market of KEY_MARKETS) {
      expect(values, market).toContain(market);
    }

    const selectable = values.filter(Boolean);
    expect(selectable).toHaveLength(SCOPING_CALL_COUNTRY_COUNT);
    expect(selectable).toHaveLength(CONTACT_FORM_COUNTRIES.length + 2);
    expect(new Set(selectable).size).toBe(selectable.length);
    expect(screen.queryByRole('button', { name: /show all/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('checkbox', { name: 'Saudi Arabia' })).not.toBeInTheDocument();
  });

  it('submits the selected country on the existing markets field and keeps lead events', async () => {
    const fetchMock = vi.fn((input: RequestInfo, _init?: RequestInit) => {
      const url = String(input);
      if (url === HIGHLEVEL_LEAD_ENDPOINT) {
        return Promise.resolve(new Response(JSON.stringify({ success: true, contactId: 'c1' }), { status: 200 }));
      }
      if (url === FORMSPREE_ENDPOINT) {
        return Promise.resolve(new Response(JSON.stringify({ ok: true }), { status: 200 }));
      }
      throw new Error(url);
    });
    vi.stubGlobal('fetch', fetchMock);

    renderExitIntent();
    fireEvent.focus(screen.getByLabelText(/work email/i));
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/^role/i), { target: { value: 'Access lead' } });
    fireEvent.change(screen.getByLabelText(/what do you need/i), { target: { value: 'Primary market research' } });
    fireEvent.change(screen.getByLabelText(/^country$/i), { target: { value: 'United States' } });
    fireEvent.click(screen.getByRole('button', { name: /book a 30-minute scoping call/i }));

    expect(await screen.findByRole('status')).toHaveTextContent(/your scoping call request is in/i);

    const bodies = fetchMock.mock.calls.map(([input, init]) => ({
      url: String(input),
      body: JSON.parse(String(init?.body)) as Record<string, unknown>,
    }));
    const highLevel = bodies.find((call) => call.url === HIGHLEVEL_LEAD_ENDPOINT);
    const formspree = bodies.find((call) => call.url === FORMSPREE_ENDPOINT);
    expect(highLevel?.body).toMatchObject({
      markets: 'United States',
      formVariant: 'exit-intent-scoping-call',
      workEmail: 'buyer@pfizer.com',
      company: 'Pfizer',
      role: 'Access lead',
      need: 'Primary market research',
      requestType: 'Scoping Call Request',
    });
    expect(formspree?.body).toMatchObject({
      markets: 'United States',
      form: 'exit-intent-scoping-call',
      email: 'buyer@pfizer.com',
    });
    expect(highLevel?.body.country).toBeUndefined();

    const events = (window.dataLayer ?? []).map((entry) => entry.event);
    expect(events).toEqual(
      expect.arrayContaining(['exit_intent_shown', 'form_start', 'form_submit_attempt', 'lead_submitted']),
    );
    expect(window.dataLayer).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ event: 'exit_intent_shown', form_id: 'exit-intent-scoping-call' }),
        expect.objectContaining({ event: 'form_start', form_id: 'exit-intent-scoping-call' }),
        expect.objectContaining({ event: 'form_submit_attempt' }),
        expect.objectContaining({ event: 'lead_submitted', form_id: 'exit-intent-scoping-call' }),
        expect.objectContaining({ event: 'meeting_booked', markets: 'United States' }),
      ]),
    );

    vi.unstubAllGlobals();
  });

  it('leaves the shared qualification form on market checkboxes', () => {
    render(
      <MemoryRouter>
        <QualificationForm formId="contact-hero-scoping-call" />
      </MemoryRouter>,
    );
    expect(screen.getByText('Markets of interest')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Saudi Arabia' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /show all \d+ markets/i })).toBeInTheDocument();
    expect(screen.queryByLabelText(/^country$/i)).not.toBeInTheDocument();
  });
});
