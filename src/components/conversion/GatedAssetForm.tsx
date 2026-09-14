import { useState } from 'react';
import { getWorkEmailValidationError } from '@/lib/freeMailDomains';
import { notifyDownloadLead } from '@/lib/notifyDownloadLead';
import { trackLeadSubmitted, trackFormStart } from '@/lib/analytics';
import { QUALIFICATION_FORM_MARKETS } from '@/data/qualificationFormOptions';

type GatedAssetFormProps = {
  formId: string;
  reportName: string;
  pdfPath: string;
  submitLabel?: string;
};

export function GatedAssetForm({ formId, reportName, pdfPath, submitLabel }: GatedAssetFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [started, setStarted] = useState(false);

  const handleFirstInteraction = () => {
    if (started) return;
    setStarted(true);
    trackFormStart({ formId });
  };

  const startDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop() || 'sample.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const rawEmail = (data.get('workEmail') as string)?.trim() || '';
    const emailError = getWorkEmailValidationError(rawEmail);
    if (emailError) next.workEmail = emailError;
    if (!(data.get('company') as string)?.trim()) next.company = 'Company is required';
    if (!(data.get('country') as string)?.trim()) next.country = 'Please select a country';

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const company = (data.get('company') as string)?.trim() || '';
    const country = (data.get('country') as string)?.trim() || '';
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const params = new URL(currentUrl).searchParams;
    const isHtmlAsset = pdfPath.toLowerCase().endsWith('.html');

    setSubmitting(true);
    try {
      // Notify admin via Resend. Do not block the download if the email fails —
      // the visitor already passed the business-email gate.
      await notifyDownloadLead({
        workEmail: rawEmail,
        company,
        country,
        reportName,
        formVariant: formId,
        requestType: isHtmlAsset ? 'Report download request' : 'PDF sample request',
        sourcePage: currentPath,
        sourceUrl: currentUrl,
        utmSource: params.get('utm_source') || '',
        utmMedium: params.get('utm_medium') || '',
        utmCampaign: params.get('utm_campaign') || '',
        utmContent: params.get('utm_content') || '',
        utmTerm: params.get('utm_term') || '',
      });
    } catch {
      // Swallow — download still proceeds.
    } finally {
      setSubmitted(true);
      trackLeadSubmitted({ formId });
      startDownload();
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
          ✓
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">Your download has started.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          If it didn't open automatically,{' '}
          <a href={pdfPath} download className="text-primary font-medium hover:underline">
            click here to download it directly
          </a>
          . Our team may follow up to see if a full engagement makes sense.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className="space-y-4" noValidate>
      <div>
        <label htmlFor={`${formId}-ga-workEmail`} className="block text-sm font-medium text-foreground mb-1.5">
          Work email <span className="text-destructive">*</span>
        </label>
        <input
          id={`${formId}-ga-workEmail`}
          name="workEmail"
          type="email"
          required
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.workEmail ? 'border-destructive' : 'border-input'}`}
          placeholder="you@company.com"
        />
        {errors.workEmail && <p className="text-xs text-destructive mt-1">{errors.workEmail}</p>}
      </div>
      <div>
        <label htmlFor={`${formId}-ga-company`} className="block text-sm font-medium text-foreground mb-1.5">
          Company <span className="text-destructive">*</span>
        </label>
        <input
          id={`${formId}-ga-company`}
          name="company"
          type="text"
          required
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.company ? 'border-destructive' : 'border-input'}`}
        />
        {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
      </div>
      <div>
        <label htmlFor={`${formId}-ga-country`} className="block text-sm font-medium text-foreground mb-1.5">
          Country of interest <span className="text-destructive">*</span>
        </label>
        <select
          id={`${formId}-ga-country`}
          name="country"
          required
          defaultValue=""
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.country ? 'border-destructive' : 'border-input'}`}
        >
          <option value="" disabled>Select…</option>
          {QUALIFICATION_FORM_MARKETS.map((market) => (
            <option key={market} value={market}>{market}</option>
          ))}
        </select>
        {errors.country && <p className="text-xs text-destructive mt-1">{errors.country}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : submitLabel || 'Get the sample PDF'}
      </button>
    </form>
  );
}
