import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { GatedAssetForm } from '@/components/conversion/GatedAssetForm';
import { EmailCaptureForm } from '@/components/conversion/EmailCaptureForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { CaseStudyContactGate } from '@/components/CaseStudyContactGate';
import WhatsAppProposalWidget from '@/components/WhatsAppProposalWidget';
import ClinicalDiagnosticsProposalRequest from '@/pages/ClinicalDiagnosticsProposalRequest';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT } from '@/lib/submitLeadDual';
import { trackMeetingBooked } from '@/lib/analytics';

vi.mock('@/lib/analytics', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/analytics')>()),
  trackMeetingBooked: vi.fn(),
}));

const EMAIL_CHECK = 'Please check your email address and try again.';
const SAVE_ERROR = 'Could not save your request. Please try again.';

type ChannelMode = 'ok' | 'fail' | 'offline' | 'email400';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function mockChannels(options: { formspree: ChannelMode; highLevel: ChannelMode; subscribe?: 'ok' | 'fail' }) {
  const fetchMock = vi.fn((input: RequestInfo) => {
    const url = String(input);
    if (url === FORMSPREE_ENDPOINT) {
      if (options.formspree === 'ok') return Promise.resolve(json({ ok: true }));
      if (options.formspree === 'offline') return Promise.reject(new Error('offline'));
      return Promise.resolve(json({ error: 'Form quota exceeded' }, 422));
    }
    if (url === HIGHLEVEL_LEAD_ENDPOINT) {
      if (options.highLevel === 'ok') return Promise.resolve(json({ success: true, contactId: 'c1' }));
      if (options.highLevel === 'offline') return Promise.reject(new Error('offline'));
      if (options.highLevel === 'email400') return Promise.resolve(json({ error: EMAIL_CHECK }, 400));
      return Promise.resolve(json({ error: SAVE_ERROR }, 502));
    }
    if (url === '/api/subscribe') {
      return Promise.resolve(
        options.subscribe === 'fail' ? json({ error: 'Internal server error' }, 500) : json({ success: true }),
      );
    }
    throw new Error(url);
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function calledUrls() {
  return (fetch as ReturnType<typeof vi.fn>).mock.calls.map((call) => String(call[0]));
}

function bodyFor(url: string) {
  const call = (fetch as ReturnType<typeof vi.fn>).mock.calls.find((c) => String(c[0]) === url);
  return JSON.parse(String(call?.[1]?.body));
}

const hrefWrites: string[] = [];

function stubLocation(pathname = '/page') {
  const href = `http://localhost${pathname}`;
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { href, pathname, search: '' },
  });
  Object.defineProperty(window.location, 'href', {
    configurable: true,
    get: () => href,
    set: (value: string) => {
      hrefWrites.push(value);
    },
  });
}

class Observer {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  hrefWrites.length = 0;
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.stubGlobal('IntersectionObserver', Observer);
  vi.stubGlobal('ResizeObserver', Observer);
  stubLocation();
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  vi.mocked(trackMeetingBooked).mockClear();
});

function withProviders(node: React.ReactNode) {
  return (
    <HelmetProvider>
      <MemoryRouter>
        <LanguageProvider>
          <TooltipProvider>{node}</TooltipProvider>
        </LanguageProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
}

function fillQualification(email = 'buyer@pfizer.com', budget?: string) {
  render(
    <MemoryRouter>
      <QualificationForm formId="contact-hero-scoping-call" sourceContext="Contact page" />
    </MemoryRouter>,
  );
  fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: email } });
  fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
  fireEvent.change(screen.getByLabelText(/^role/i), { target: { value: 'Access lead' } });
  fireEvent.change(screen.getByLabelText(/what do you need/i), { target: { value: 'Primary market research' } });
  if (budget) fireEvent.change(screen.getByLabelText(/budget range/i), { target: { value: budget } });
}

function submitQualification() {
  fireEvent.click(screen.getByRole('button', { name: /book a 30-minute scoping call/i }));
}

describe('QualificationForm ("Book a call")', () => {
  it('posts to HighLevel and Formspree and shows a focused confirmation', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    fillQualification();
    submitQualification();
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();

    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent(/your scoping call request is in/i);
    expect(status).toHaveFocus();
    expect(screen.getByRole('link', { name: /pick a time for your call/i })).toHaveAttribute(
      'href',
      'https://research.bionixus.co.uk/widget/bookings/bionixus',
    );
    expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({
      form: 'contact-hero-scoping-call',
      requestType: 'Scoping Call Request',
      email: 'buyer@pfizer.com',
      company: 'Pfizer',
      role: 'Access lead',
      need: 'Primary market research',
      pageUrl: 'http://localhost/page',
    });
    expect(trackMeetingBooked).toHaveBeenCalledWith(
      expect.objectContaining({ formId: 'contact-hero-scoping-call', need: 'Primary market research' }),
    );
  });

  it('confirms when only HighLevel saves the lead', async () => {
    mockChannels({ formspree: 'fail', highLevel: 'ok' });
    fillQualification();
    submitQualification();
    expect(await screen.findByRole('status')).toHaveTextContent(/your scoping call request is in/i);
  });

  it('confirms when only Formspree saves the lead', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'fail' });
    fillQualification();
    submitQualification();
    expect(await screen.findByRole('status')).toHaveTextContent(/your scoping call request is in/i);
  });

  it('sends under-$20K budgets to both destinations and answers by email', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    fillQualification('buyer@pfizer.com', 'Under $20K');
    submitQualification();
    expect(await screen.findByRole('status')).toHaveTextContent(/we'll reply by email/i);
    expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
    expect(bodyFor(HIGHLEVEL_LEAD_ENDPOINT)).toMatchObject({
      requestType: 'Research Enquiry (below minimum)',
      qualified: 'no',
    });
    expect(trackMeetingBooked).not.toHaveBeenCalled();
  });

  it('shows the personal-email warning next to the button, then sends on the second press', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    fillQualification('mohammad.test@gmail.com');
    submitQualification();
    expect(await screen.findByRole('alert')).toHaveTextContent(/personal email address/i);
    expect(fetch).not.toHaveBeenCalled();

    submitQualification();
    expect(await screen.findByRole('status')).toHaveTextContent(/your scoping call request is in/i);
    expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
  });

  it('focuses the first invalid field when required answers are missing', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    render(
      <MemoryRouter>
        <QualificationForm formId="f" />
      </MemoryRouter>,
    );
    submitQualification();
    expect(await screen.findByText('Work email is required')).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toHaveFocus();
    expect(screen.getByLabelText(/work email/i)).toHaveAttribute('aria-invalid', 'true');
    expect(fetch).not.toHaveBeenCalled();
  });

  it('shows the HighLevel 400 email message', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'email400' });
    fillQualification();
    submitQualification();
    expect(await screen.findByRole('alert')).toHaveTextContent(EMAIL_CHECK);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('shows an inline error with a prefilled email link instead of navigating to mailto:', async () => {
    mockChannels({ formspree: 'offline', highLevel: 'fail' });
    fillQualification();
    submitQualification();
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(SAVE_ERROR);
    const link = screen.getByRole('link', { name: /email your request to admin@bionixus\.com/i });
    expect(link.getAttribute('href')).toMatch(/^mailto:admin@bionixus\.com\?subject=/);
    expect(decodeURIComponent(link.getAttribute('href') || '')).toContain('Company: Pfizer');
    expect(hrefWrites).toEqual([]);
    expect(screen.getByRole('button', { name: /book a 30-minute scoping call/i })).not.toBeDisabled();
  });
});

function fillContact() {
  fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'BioNixus TEST' } });
  fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'delete' } });
  fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
  fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
  fireEvent.change(screen.getByLabelText(/country \/ region/i), { target: { value: 'United States' } });
  fireEvent.change(screen.getByLabelText(/^phone/i), { target: { value: '+1 202 555 0143' } });
  fireEvent.change(screen.getByLabelText(/how did you hear/i), { target: { value: 'Google Search' } });
  fireEvent.change(screen.getByLabelText(/^message/i), { target: { value: 'Need a KSA ATU study' } });
  fireEvent.click(screen.getByRole('checkbox', { name: /privacy policy/i }));
}

describe('ContactSection ("Request a proposal")', () => {
  it('posts to HighLevel and Formspree, subscribes, and focuses the confirmation', async () => {
    stubLocation('/contact');
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    const scroll = vi.fn();
    HTMLElement.prototype.scrollIntoView = scroll;
    render(withProviders(<ContactSection premium />));
    fillContact();
    fireEvent.click(screen.getByRole('button', { name: /send proposal request/i }));
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();

    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent(/thank you/i);
    expect(status).toHaveFocus();
    expect(scroll).toHaveBeenCalledWith({ block: 'center' });
    expect(screen.queryByRole('button', { name: /send proposal request/i })).not.toBeInTheDocument();
    await waitFor(() => expect(calledUrls()).toContain('/api/subscribe'));
    expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({
      form: 'contact_section',
      requestType: 'Contact Request',
      pageUrl: 'http://localhost/contact',
      firstName: 'BioNixus TEST',
      lastName: 'delete',
      email: 'buyer@pfizer.com',
      phone: '+1 202 555 0143',
      country: 'United States',
      referralSource: 'Google Search',
      message: 'Need a KSA ATU study',
    });
    expect(hrefWrites).toEqual([]);
  });

  it('lists the current regional offices without Al Khobar', () => {
    render(withProviders(<ContactSection premium />));
    const block = screen.getByText('Regional representation').parentElement as HTMLElement;
    expect(block).toHaveTextContent('Cairo, Egypt');
    expect(block).toHaveTextContent('Dubai, UAE');
    expect(block).toHaveTextContent('São Paulo, Brazil');
    expect(block).not.toHaveTextContent(/al khobar|kuwait/i);
  });

  it('focuses the first missing field instead of failing silently', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    render(withProviders(<ContactSection premium />));
    fireEvent.click(screen.getByRole('button', { name: /send proposal request/i }));
    expect(await screen.findByText(/please enter your first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toHaveFocus();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('shows the HighLevel 400 email message', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'email400' });
    render(withProviders(<ContactSection premium />));
    fillContact();
    fireEvent.click(screen.getByRole('button', { name: /send proposal request/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(EMAIL_CHECK);
    expect(screen.getByLabelText(/work email/i)).toHaveFocus();
  });

  it('shows an inline error and email link when both destinations fail', async () => {
    mockChannels({ formspree: 'fail', highLevel: 'fail' });
    render(withProviders(<ContactSection premium />));
    fillContact();
    fireEvent.click(screen.getByRole('button', { name: /send proposal request/i }));
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(SAVE_ERROR);
    const fallback = alert.querySelector('a');
    expect(fallback).toHaveTextContent('admin@bionixus.com');
    expect(fallback?.getAttribute('href')).toMatch(/^mailto:admin@bionixus\.com\?subject=/);
    expect(hrefWrites).toEqual([]);
    expect(calledUrls()).not.toContain('/api/subscribe');
  });
});

describe('GatedAssetForm (sample downloads)', () => {
  function fillGated() {
    render(<GatedAssetForm formId="sample_pdf" reportName="GCC Devices" pdfPath="/samples/gcc-devices.pdf" />);
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/country of interest/i), { target: { value: 'Saudi Arabia' } });
    fireEvent.click(screen.getByRole('button', { name: /get the sample pdf/i }));
  }

  it('posts to both destinations, starts the download, and confirms', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    const clicks: string[] = [];
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
      clicks.push(this.getAttribute('href') || '');
    });
    fillGated();
    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent(/your download has started/i);
    expect(screen.getByRole('link', { name: /download the gcc devices directly/i })).toBeInTheDocument();
    expect(clicks).toContain('/samples/gcc-devices.pdf');
    expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({ form: 'sample_pdf', reportName: 'GCC Devices' });
  });

  it('shows the error and does not download when both destinations fail', async () => {
    mockChannels({ formspree: 'fail', highLevel: 'fail' });
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    fillGated();
    expect(await screen.findByRole('alert')).toHaveTextContent(SAVE_ERROR);
    expect(click).not.toHaveBeenCalled();
  });
});

describe('EmailCaptureForm (report briefs)', () => {
  function renderCapture(label = 'Send the brief') {
    render(
      <EmailCaptureForm
        formVariant="brief"
        requestType="Brief"
        subject="Brief"
        sourcePage="/reports"
        sourceUrl="https://www.bionixus.com/reports"
        submitLabel={label}
      />,
    );
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.click(screen.getByRole('button', { name: new RegExp(label, 'i') }));
  }

  it('posts to both destinations and confirms', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    renderCapture();
    expect(await screen.findByRole('status')).toHaveTextContent(/we will send this to your work email/i);
    expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]));
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({
      form: 'brief',
      email: 'buyer@pfizer.com',
      pageUrl: 'https://www.bionixus.com/reports',
    });
  });

  it('shows the HighLevel 400 email message', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'email400' });
    renderCapture();
    expect(await screen.findByRole('alert')).toHaveTextContent(EMAIL_CHECK);
  });

  it('shows the fallback message when both destinations fail', async () => {
    mockChannels({ formspree: 'fail', highLevel: 'fail' });
    renderCapture();
    expect(await screen.findByRole('alert')).toHaveTextContent(/email admin@bionixus\.com and we will send it/i);
  });
});

describe('CaseStudyContactGate (case-study and white-paper gates)', () => {
  function renderGate(onSuccess = vi.fn(), onOpenChange = vi.fn()) {
    render(
      withProviders(
        <CaseStudyContactGate
          open
          onOpenChange={onOpenChange}
          caseStudyTitle="GCC Devices"
          onSuccess={onSuccess}
          dialogTitle="Enter your details to browse and download the full report"
          requestType="Market Report White Paper Access"
          formVariant="whitepaper_gate_gcc-devices"
        />,
      ),
    );
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.click(screen.getByRole('button', { name: /request access/i }));
    return { onSuccess, onOpenChange };
  }

  it('posts to both destinations, confirms, and unlocks on Continue', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    const { onSuccess, onOpenChange } = renderGate();
    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent(/your details are saved/i);
    expect(screen.getByText(/thank you — access unlocked/i)).toBeInTheDocument();
    expect(onSuccess).not.toHaveBeenCalled();
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({
      form: 'whitepaper_gate_gcc-devices',
      caseStudyTitle: 'GCC Devices',
      requestType: 'Market Report White Paper Access',
    });

    fireEvent.click(screen.getByRole('button', { name: /^continue$/i }));
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('shows the HighLevel 400 email message', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'email400' });
    const { onSuccess } = renderGate();
    expect(await screen.findByRole('alert')).toHaveTextContent(EMAIL_CHECK);
    expect(onSuccess).not.toHaveBeenCalled();
  });
});

describe('WhatsAppProposalWidget', () => {
  function fillWidget() {
    render(withProviders(<WhatsAppProposalWidget />));
    fireEvent.click(screen.getByRole('button', { name: /whatsapp proposal form/i }));
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(screen.getByLabelText(/^company/i), { target: { value: 'Pfizer' } });
    fireEvent.change(screen.getByLabelText(/^phone/i), { target: { value: '+1 202 555 0143' } });
    fireEvent.change(screen.getByLabelText(/^message/i), { target: { value: 'Need a proposal' } });
    fireEvent.click(screen.getByRole('button', { name: /continue on whatsapp/i }));
  }

  it('posts to both destinations and confirms', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    vi.spyOn(window, 'open').mockImplementation(() => null);
    fillWidget();
    expect(await screen.findByRole('status')).toBeInTheDocument();
    await waitFor(() =>
      expect(calledUrls()).toEqual(expect.arrayContaining([FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT])),
    );
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({ form: 'whatsapp_proposal_widget', phone: '+1 202 555 0143' });
  });

  it('shows the HighLevel 400 email message', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'email400' });
    vi.spyOn(window, 'open').mockImplementation(() => null);
    fillWidget();
    expect(await screen.findByRole('alert')).toHaveTextContent(EMAIL_CHECK);
  });
});

describe('ClinicalDiagnosticsProposalRequest', () => {
  function fillClinical() {
    render(withProviders(<ClinicalDiagnosticsProposalRequest />));
    const form = screen.getByRole('button', { name: /register & receive the full proposal/i }).closest('form') as HTMLFormElement;
    const field = (name: string) => form.querySelector(`[name="${name}"]`) as HTMLInputElement;
    fireEvent.change(field('firstName'), { target: { value: 'Jane' } });
    fireEvent.change(field('lastName'), { target: { value: 'Doe' } });
    fireEvent.change(field('workEmail'), { target: { value: 'buyer@pfizer.com' } });
    fireEvent.change(field('company'), { target: { value: 'Pfizer' } });
    fireEvent.change(field('country'), { target: { value: 'Saudi Arabia' } });
    fireEvent.click(screen.getByRole('checkbox', { name: /processing my details/i }));
    fireEvent.click(screen.getByRole('button', { name: /register & receive the full proposal/i }));
  }

  it('posts to both destinations and confirms', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    fillClinical();
    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent(/your request is registered/i);
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({
      form: 'clinical_diagnostics_proposal_request',
      country: 'Saudi Arabia',
    });
  });

  it('shows the HighLevel 400 email message', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'email400' });
    fillClinical();
    const alerts = await screen.findAllByRole('alert');
    expect(alerts.some((node) => node.textContent?.includes(EMAIL_CHECK))).toBe(true);
  });

  it('names the missing field instead of relying on browser tooltips', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    render(withProviders(<ClinicalDiagnosticsProposalRequest />));
    fireEvent.click(screen.getByRole('button', { name: /register & receive the full proposal/i }));
    const alerts = await screen.findAllByRole('alert');
    expect(alerts.some((node) => node.textContent?.includes('Please enter your first name.'))).toBe(true);
    expect(fetch).not.toHaveBeenCalled();
  });
});

describe('Footer newsletter', () => {
  function fillNewsletter() {
    render(withProviders(<Footer />));
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByLabelText('Work email'), { target: { value: 'reader@novartis.com' } });
    fireEvent.click(screen.getByRole('checkbox', { name: /receive monthly/i }));
    fireEvent.click(screen.getByRole('button', { name: /^subscribe$/i }));
  }

  it('subscribes and saves the lead to HighLevel and Formspree', async () => {
    mockChannels({ formspree: 'ok', highLevel: 'ok' });
    fillNewsletter();
    expect(await screen.findByRole('status')).toHaveTextContent(/check your email to verify/i);
    expect(calledUrls()).toEqual(
      expect.arrayContaining(['/api/subscribe', FORMSPREE_ENDPOINT, HIGHLEVEL_LEAD_ENDPOINT]),
    );
    expect(bodyFor(FORMSPREE_ENDPOINT)).toMatchObject({
      form: 'footer_newsletter',
      email: 'reader@novartis.com',
      firstName: 'Ana',
      requestType: 'Newsletter Signup',
    });
  });

  it('shows an error when every destination fails', async () => {
    mockChannels({ formspree: 'fail', highLevel: 'fail', subscribe: 'fail' });
    fillNewsletter();
    expect(await screen.findByRole('alert')).toHaveTextContent(/internal server error|something went wrong/i);
  });
});
