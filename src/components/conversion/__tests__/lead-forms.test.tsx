import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BUSINESS_EMAIL_REQUIRED_MESSAGE } from '@/lib/freeMailDomains';
import { GatedAssetForm } from '@/components/conversion/GatedAssetForm';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { WorkEmailRequestForm } from '@/components/conversion/WorkEmailRequestForm';
import WhatsAppProposalWidget from '@/components/WhatsAppProposalWidget';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TooltipProvider } from '@/components/ui/tooltip';

const fetchMock = vi.fn();
const originalAnchorClick = HTMLAnchorElement.prototype.click;

function fillByLabel(label: RegExp | string, value: string) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
}

describe('lead forms', () => {
  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('open', vi.fn());
  });

  afterEach(() => {
    HTMLAnchorElement.prototype.click = originalAnchorClick;
    vi.unstubAllGlobals();
  });

  it('hard-blocks free mail on the qualification form and never posts to Formspree', () => {
    render(<QualificationForm formId="qual_test" />);
    fillByLabel(/work email/i, 'name@gmail.com');
    fillByLabel(/company/i, 'Acme');
    fillByLabel(/role/i, 'Director');
    fireEvent.change(screen.getByLabelText(/what do you need/i), {
      target: { value: 'Primary market research' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /request a proposal/i }).closest('form')!);
    expect(screen.getByText(BUSINESS_EMAIL_REQUIRED_MESSAGE)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();

    fillByLabel(/work email/i, 'name@yahoo.co.uk');
    fireEvent.submit(screen.getByRole('button', { name: /request a proposal/i }).closest('form')!);
    expect(screen.getByText(BUSINESS_EMAIL_REQUIRED_MESSAGE)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('hard-blocks free mail on gated downloads and does not call Formspree', () => {
    render(
      <GatedAssetForm
        formId="gate_test"
        reportName="GCC sample"
        pdfPath="/downloads/sample.pdf"
      />,
    );
    fillByLabel(/work email/i, 'name@proton.me');
    fillByLabel(/company/i, 'Acme');
    fireEvent.change(screen.getByLabelText(/country of interest/i), {
      target: { value: 'United Arab Emirates' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /get the sample pdf/i }).closest('form')!);
    expect(screen.getByText(BUSINESS_EMAIL_REQUIRED_MESSAGE)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('notifies /api/subscribe for a business-email gated download, not Formspree', async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    HTMLAnchorElement.prototype.click = vi.fn();
    render(
      <GatedAssetForm
        formId="gate_test"
        reportName="GCC sample"
        pdfPath="/downloads/sample.pdf"
      />,
    );
    fillByLabel(/work email/i, 'lead@acme-pharma.com');
    fillByLabel(/company/i, 'Acme');
    fireEvent.change(screen.getByLabelText(/country of interest/i), {
      target: { value: 'United Arab Emirates' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /get the sample pdf/i }).closest('form')!);
    await screen.findByText(/your download has started/i);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url] = fetchMock.mock.calls[0];
    expect(url).toBe('/api/subscribe');
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).intent).toBe('gated-download-notify');
    expect(String(url)).not.toMatch(/formspree/i);
  });

  it('hard-blocks free mail on the WhatsApp widget and never fetches Formspree', () => {
    render(
      <MemoryRouter initialEntries={['/pharmaceutical-companies-uae']}>
        <LanguageProvider>
          <TooltipProvider>
            <WhatsAppProposalWidget />
          </TooltipProvider>
        </LanguageProvider>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole('button', { name: /need a research proposal/i }));
    fillByLabel(/first name/i, 'Test');
    fillByLabel(/last name/i, 'Lead');
    fillByLabel(/work email/i, 'name@gmail.com');
    fillByLabel(/company/i, 'Acme');
    fillByLabel(/phone/i, '+44 20 7123 4567');
    fillByLabel(/message/i, 'Need a proposal');
    fireEvent.submit(screen.getByRole('button', { name: /continue on whatsapp/i }).closest('form')!);
    expect(screen.getByText(BUSINESS_EMAIL_REQUIRED_MESSAGE)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(window.open).not.toHaveBeenCalled();
  });

  it('opens WhatsApp for a business email without posting to Formspree', () => {
    render(
      <MemoryRouter initialEntries={['/pharmaceutical-companies-uae']}>
        <LanguageProvider>
          <TooltipProvider>
            <WhatsAppProposalWidget />
          </TooltipProvider>
        </LanguageProvider>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole('button', { name: /need a research proposal/i }));
    fillByLabel(/first name/i, 'Test');
    fillByLabel(/last name/i, 'Lead');
    fillByLabel(/work email/i, 'lead@acme-pharma.com');
    fillByLabel(/company/i, 'Acme');
    fillByLabel(/phone/i, '+44 20 7123 4567');
    fillByLabel(/message/i, 'Need a proposal');
    fireEvent.submit(screen.getByRole('button', { name: /continue on whatsapp/i }).closest('form')!);
    expect(fetchMock).not.toHaveBeenCalled();
    expect(window.open).toHaveBeenCalled();
    const opened = String((window.open as ReturnType<typeof vi.fn>).mock.calls[0][0]);
    expect(opened).toMatch(/wa\.me/);
    expect(opened).toContain('lead%40acme-pharma.com');
    expect(screen.getByText(/opening whatsapp/i)).toBeInTheDocument();
  });

  it('keeps exec-summary requests on Formspree only after a business email', async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) });
    render(
      <WorkEmailRequestForm
        destination="formspree"
        formId="exec_summary_test"
        requestType="Executive Summary Request"
        subject="Exec summary"
        sourcePage="/quantitative-healthcare-market-research"
        sourceUrl="https://www.bionixus.com/quantitative-healthcare-market-research"
        submitLabel="Request Summary"
        successTitle="Request received"
        successBody="Sent"
      />,
    );
    fillByLabel(/work email/i, 'name@gmail.com');
    fireEvent.submit(screen.getByRole('button', { name: /request summary/i }).closest('form')!);
    expect(fetchMock).not.toHaveBeenCalled();

    fillByLabel(/work email/i, 'lead@acme-pharma.com');
    fireEvent.submit(screen.getByRole('button', { name: /request summary/i }).closest('form')!);
    await screen.findByText(/request received/i);
    expect(String(fetchMock.mock.calls[0][0])).toMatch(/formspree\.io/);
  });
});
