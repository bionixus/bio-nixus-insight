import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { GatedAssetForm } from '@/components/conversion/GatedAssetForm';
import { EmailCaptureForm } from '@/components/conversion/EmailCaptureForm';
import ContactSection from '@/components/ContactSection';
import { CaseStudyContactGate } from '@/components/CaseStudyContactGate';
import WhatsAppProposalWidget from '@/components/WhatsAppProposalWidget';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FORMSPREE_ENDPOINT } from '@/lib/submitLeadDual';
import { trackMeetingBooked } from '@/lib/analytics';

vi.mock('@/lib/analytics', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/analytics')>()),
  trackMeetingBooked: vi.fn(),
}));

function mockChannels(options: { formspreeOk: boolean; highLevelOk: boolean }) {
  vi.stubGlobal(
    'fetch',
    vi.fn((input: RequestInfo) => {
      const url = String(input);
      if (url === FORMSPREE_ENDPOINT) {
        return options.formspreeOk
          ? json({ ok: true })
          : json({ error: 'Form quota exceeded' }, 422);
      }
      if (url === '/api/highlevel-lead') {
        return options.highLevelOk
          ? json({ success: true, contactId: 'c1' })
          : json({ error: 'Could not save your request. Please try again.' }, 502);
      }
      throw new Error(url);
    }),
  );
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function submitQualification(options: { budget?: string } = {}) {
  render(
    <MemoryRouter>
      <QualificationForm formId="pharma_companies_uae_cta" />
    </MemoryRouter>,
  );
  fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
  fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
  fireEvent.change(screen.getByLabelText(/^role/i), { target: { value: 'Access lead' } });
  fireEvent.change(screen.getByLabelText(/what do you need/i), {
    target: { value: 'Primary market research' },
  });
  if (options.budget) {
    fireEvent.change(screen.getByLabelText(/budget range/i), { target: { value: options.budget } });
  }
  fireEvent.click(screen.getByRole('button', { name: /book a 30-minute scoping call/i }));
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.mocked(trackMeetingBooked).mockClear();
});

describe('QualificationForm dual submit', () => {
  it('shows the scheduling link when HighLevel succeeds and Formspree is over quota', async () => {
    mockChannels({ formspreeOk: false, highLevelOk: true });
    const hrefs: string[] = [];
    const original = window.location;
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...original,
        href: 'http://localhost/page',
        assign: (value: string) => {
          hrefs.push(value);
        },
      },
    });
    Object.defineProperty(window.location, 'href', {
      configurable: true,
      get: () => 'http://localhost/page',
      set: (value: string) => {
        hrefs.push(value);
      },
    });

    await submitQualification();
    expect(await screen.findByRole('link', { name: /pick a time for your call/i })).toHaveAttribute(
      'href',
      'https://schedule.bionixus.com/meeting-with-bionixus',
    );
    expect(hrefs.join(' ')).not.toContain('mailto:');
    const urls = (fetch as ReturnType<typeof vi.fn>).mock.calls.map((call) => String(call[0]));
    expect(urls).toContain(FORMSPREE_ENDPOINT);
    expect(urls).toContain('/api/highlevel-lead');
    const formspreeCall = (fetch as ReturnType<typeof vi.fn>).mock.calls.find((call) => String(call[0]) === FORMSPREE_ENDPOINT);
    const body = formspreeCall?.[1]?.body as FormData;
    expect(body.get('requestType')).toBe('Scoping Call Request');
    expect(trackMeetingBooked).toHaveBeenCalledWith(
      expect.objectContaining({ formId: 'pharma_companies_uae_cta', need: 'Primary market research' }),
    );
  });

  it('routes an under-$20K budget to HighLevel only and answers by email instead of a call', async () => {
    mockChannels({ formspreeOk: true, highLevelOk: true });
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { href: 'http://localhost/page', pathname: '/page', search: '' },
    });

    await submitQualification({ budget: 'Under $20K' });
    expect(await screen.findByText(/we'll reply by email/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /pick a time for your call/i })).not.toBeInTheDocument();
    const urls = (fetch as ReturnType<typeof vi.fn>).mock.calls.map((call) => String(call[0]));
    expect(urls).toEqual(['/api/highlevel-lead']);
    const hlCall = (fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    const payload = JSON.parse(String(hlCall?.[1]?.body));
    expect(payload.requestType).toBe('Research Enquiry (below minimum)');
    expect(payload.qualified).toBe('no');
    expect(trackMeetingBooked).not.toHaveBeenCalled();
  });

  it('keeps the mailto fallback when both channels fail', async () => {
    mockChannels({ formspreeOk: false, highLevelOk: false });
    const hrefs: string[] = [];
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        href: 'http://localhost/page',
      },
    });
    Object.defineProperty(window.location, 'href', {
      configurable: true,
      get: () => 'http://localhost/page',
      set: (value: string) => {
        hrefs.push(value);
      },
    });

    await submitQualification();
    expect(await screen.findByText(/form quota exceeded/i)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /pick a time for your call/i })).not.toBeInTheDocument();
    expect(hrefs.some((href) => href.startsWith('mailto:admin@bionixus.com'))).toBe(true);
  });
});

describe('ContactSection (HighLevel only)', () => {
  it('saves to HighLevel, never posts to Formspree, and still subscribes', async () => {
    class Observer {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', Observer);
    vi.stubGlobal('ResizeObserver', Observer);
    mockChannels({ formspreeOk: false, highLevelOk: true });
    const hrefs: string[] = [];
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { href: 'http://localhost/contact', pathname: '/contact', search: '' },
    });
    Object.defineProperty(window.location, 'href', {
      configurable: true,
      get: () => 'http://localhost/contact',
      set: (value: string) => {
        hrefs.push(value);
      },
    });

    render(
      <MemoryRouter>
        <LanguageProvider>
          <ContactSection />
        </LanguageProvider>
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/country \/ region/i), { target: { value: 'United States' } });
    fireEvent.change(screen.getByLabelText(/^phone/i), { target: { value: '+1 202 555 0143' } });
    fireEvent.change(screen.getByLabelText(/how did you hear/i), { target: { value: 'Google Search' } });
    fireEvent.change(screen.getByLabelText(/^message/i), { target: { value: 'Need a KSA ATU study' } });
    fireEvent.click(screen.getByRole('checkbox', { name: /privacy policy/i }));
    fireEvent.click(screen.getByRole('button', { name: /^submit$/i }));

    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
    expect(hrefs.join(' ')).not.toContain('mailto:');
    const urls = (fetch as ReturnType<typeof vi.fn>).mock.calls.map((call) => String(call[0]));
    expect(urls).not.toContain(FORMSPREE_ENDPOINT);
    expect(urls).toContain('/api/highlevel-lead');
    expect(urls).toContain('/api/subscribe');
  });
});

describe('GatedAssetForm (HighLevel only)', () => {
  it('starts the download when HighLevel succeeds without touching Formspree', async () => {
    mockChannels({ formspreeOk: false, highLevelOk: true });
    const clicks: string[] = [];
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
      clicks.push(this.getAttribute('href') || '');
    });

    render(
      <GatedAssetForm formId="sample_pdf" reportName="GCC Devices" pdfPath="/samples/gcc-devices.pdf" />,
    );
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/country of interest/i), { target: { value: 'Saudi Arabia' } });
    fireEvent.click(screen.getByRole('button', { name: /get the sample pdf/i }));

    expect(await screen.findByText(/your download has started/i)).toBeInTheDocument();
    expect(clicks).toContain('/samples/gcc-devices.pdf');
    const urls = (fetch as ReturnType<typeof vi.fn>).mock.calls.map((call) => String(call[0]));
    expect(urls).not.toContain(FORMSPREE_ENDPOINT);
  });

  it('does not download when HighLevel fails', async () => {
    mockChannels({ formspreeOk: false, highLevelOk: false });
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    render(
      <GatedAssetForm formId="sample_pdf" reportName="GCC Devices" pdfPath="/samples/gcc-devices.pdf" />,
    );
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/country of interest/i), { target: { value: 'Saudi Arabia' } });
    fireEvent.click(screen.getByRole('button', { name: /get the sample pdf/i }));

    expect(await screen.findByText(/could not save your request/i)).toBeInTheDocument();
    expect(click).not.toHaveBeenCalled();
  });
});

const EMAIL_CHECK = 'Please check your email address and try again.';

function mockHighLevelStatus(status: number, error: string) {
  vi.stubGlobal(
    'fetch',
    vi.fn((input: RequestInfo) => {
      const url = String(input);
      if (url === FORMSPREE_ENDPOINT) return Promise.reject(new Error('offline'));
      if (url === '/api/highlevel-lead') return json({ error }, status);
      if (url === '/api/subscribe') return json({ success: true });
      throw new Error(url);
    }),
  );
}

function stubLocation() {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { href: 'http://localhost/page', pathname: '/page', search: '' },
  });
  Object.defineProperty(window.location, 'href', {
    configurable: true,
    get: () => 'http://localhost/page',
    set: () => {},
  });
}

describe('lead forms show a HighLevel 400 email message', () => {
  it('shows the server message on the email capture form and keeps the generic message for 502', async () => {
    mockHighLevelStatus(400, EMAIL_CHECK);
    render(
      <EmailCaptureForm
        formVariant="brief"
        requestType="Brief"
        subject="Brief"
        sourcePage="/reports"
        sourceUrl="https://www.bionixus.com/reports"
        submitLabel="Send the brief"
      />,
    );
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send the brief/i }));
    expect(await screen.findByText(EMAIL_CHECK)).toBeInTheDocument();

    mockHighLevelStatus(502, 'Could not save your request. Please try again.');
    render(
      <EmailCaptureForm
        formVariant="brief-2"
        requestType="Brief"
        subject="Brief"
        sourcePage="/reports"
        sourceUrl="https://www.bionixus.com/reports"
        submitLabel="Send another brief"
      />,
    );
    fireEvent.change(screen.getAllByLabelText(/work email/i)[1], { target: { value: 'buyer@pfizer.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send another brief/i }));
    expect(await screen.findByText(/email digital@bionixus\.uk and we will send it/i)).toBeInTheDocument();
    expect(screen.queryByText(/could not save your request/i)).not.toBeInTheDocument();
  });

  it('shows the server message on the contact form', async () => {
    class Observer {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', Observer);
    vi.stubGlobal('ResizeObserver', Observer);
    mockHighLevelStatus(400, EMAIL_CHECK);
    stubLocation();
    render(
      <MemoryRouter>
        <LanguageProvider>
          <ContactSection />
        </LanguageProvider>
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/country \/ region/i), { target: { value: 'United States' } });
    fireEvent.change(screen.getByLabelText(/^phone/i), { target: { value: '+1 202 555 0143' } });
    fireEvent.change(screen.getByLabelText(/how did you hear/i), { target: { value: 'Google Search' } });
    fireEvent.change(screen.getByLabelText(/^message/i), { target: { value: 'Need a KSA ATU study' } });
    fireEvent.click(screen.getByRole('checkbox', { name: /privacy policy/i }));
    fireEvent.click(screen.getByRole('button', { name: /^submit$/i }));
    expect(await screen.findByText(EMAIL_CHECK)).toBeInTheDocument();
  });

  it('shows the server message on the scoping-call form when HighLevel rejects the email', async () => {
    mockHighLevelStatus(400, EMAIL_CHECK);
    stubLocation();
    await submitQualification();
    expect(await screen.findByText(EMAIL_CHECK)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /pick a time for your call/i })).not.toBeInTheDocument();
  });

  it('shows the server message on the market-report contact gate', async () => {
    mockHighLevelStatus(400, EMAIL_CHECK);
    stubLocation();
    render(
      <MemoryRouter>
        <LanguageProvider>
          <CaseStudyContactGate
            open
            onOpenChange={() => {}}
            caseStudyTitle="GCC Devices"
            onSuccess={() => {}}
            dialogTitle="Enter your details to browse and download the full report"
            requestType="Market Report White Paper Access"
            formVariant="whitepaper_gate_gcc-devices"
          />
        </LanguageProvider>
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.click(screen.getByRole('button', { name: /request access/i }));
    expect(await screen.findByText(EMAIL_CHECK)).toBeInTheDocument();
  });

  it('shows the server message on the WhatsApp proposal widget', async () => {
    mockHighLevelStatus(400, EMAIL_CHECK);
    stubLocation();
    vi.spyOn(window, 'open').mockImplementation(() => null);
    render(
      <MemoryRouter>
        <LanguageProvider>
          <TooltipProvider>
            <WhatsAppProposalWidget />
          </TooltipProvider>
        </LanguageProvider>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole('button', { name: /whatsapp proposal form/i }));
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/^phone/i), { target: { value: '+1 202 555 0143' } });
    fireEvent.change(screen.getByLabelText(/^message/i), { target: { value: 'Need a proposal' } });
    fireEvent.click(screen.getByRole('button', { name: /continue on whatsapp/i }));
    expect(await screen.findByText(EMAIL_CHECK)).toBeInTheDocument();
  });
});
