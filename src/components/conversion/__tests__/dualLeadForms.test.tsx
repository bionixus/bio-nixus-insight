import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { GatedAssetForm } from '@/components/conversion/GatedAssetForm';
import ContactSection from '@/components/ContactSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FORMSPREE_ENDPOINT } from '@/lib/submitLeadDual';

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

async function submitQualification() {
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
  fireEvent.click(screen.getByRole('button', { name: /request a proposal/i }));
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
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
    expect(await screen.findByRole('link', { name: /book a call now/i })).toHaveAttribute(
      'href',
      'https://schedule.bionixus.com/meeting-with-bionixus',
    );
    expect(hrefs.join(' ')).not.toContain('mailto:');
    const urls = (fetch as ReturnType<typeof vi.fn>).mock.calls.map((call) => String(call[0]));
    expect(urls).toContain(FORMSPREE_ENDPOINT);
    expect(urls).toContain('/api/highlevel-lead');
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
    expect(screen.queryByRole('link', { name: /book a call now/i })).not.toBeInTheDocument();
    expect(hrefs.some((href) => href.startsWith('mailto:admin@bionixus.com'))).toBe(true);
  });
});

describe('ContactSection dual submit', () => {
  it('subscribes after HighLevel succeeds even when Formspree is over quota', async () => {
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
    expect(urls).toContain(FORMSPREE_ENDPOINT);
    expect(urls).toContain('/api/highlevel-lead');
    expect(urls).toContain('/api/subscribe');
  });
});

describe('GatedAssetForm dual submit', () => {
  it('starts the download when HighLevel succeeds and Formspree fails', async () => {
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
  });

  it('does not download when both channels fail', async () => {
    mockChannels({ formspreeOk: false, highLevelOk: false });
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    render(
      <GatedAssetForm formId="sample_pdf" reportName="GCC Devices" pdfPath="/samples/gcc-devices.pdf" />,
    );
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/country of interest/i), { target: { value: 'Saudi Arabia' } });
    fireEvent.click(screen.getByRole('button', { name: /get the sample pdf/i }));

    expect(await screen.findByText(/form quota exceeded/i)).toBeInTheDocument();
    expect(click).not.toHaveBeenCalled();
  });
});
