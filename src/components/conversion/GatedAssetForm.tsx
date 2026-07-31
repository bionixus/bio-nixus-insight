import { useState } from 'react';
import { isFreeMailDomain } from '@/lib/freeMailDomains';
import { trackLeadSubmitted, trackFormStart } from '@/lib/analytics';
import { QUALIFICATION_FORM_MARKETS } from '@/data/qualificationFormOptions';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type GatedAssetFormProps = {
  formId: string;
  reportName: string;
  pdfPath: string;
};

export function GatedAssetForm({ formId, reportName, pdfPath }: GatedAssetFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [freeMailWarning, setFreeMailWarning] = useState<string | null>(null);
  const [freeMailAcknowledged, setFreeMailAcknowledged] = useState(false);
  const [started, setStarted] = useState(false);

  const handleFirstInteraction = () => {
    if (started) return;
    setStarted(true);
    trackFormStart({ formId });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const rawEmail = (data.get('workEmail') as string)?.trim() || '';
    if (!rawEmail) {
      next.workEmail = 'Work email is required';
    } else if (!EMAIL_RE.test(rawEmail)) {
      next.workEmail = 'Please enter a valid email address';
    }
    if (!(data.get('company') as string)?.trim()) next.company = 'Company is required';
    if (!(data.get('country') as string)?.trim()) next.country = 'Please select a country';

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (rawEmail && isFreeMailDomain(rawEmail) && !freeMailAcknowledged) {
      setFreeMailWarning('Please use your company email — our buyers have work email.');
      setFreeMailAcknowledged(true);
      return;
    }
    setFreeMailWarning(null);

    const company = (data.get('company') as string)?.trim() || '';
    const country = (data.get('country') as string)?.trim() || '';
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const params = new URL(currentUrl).searchParams;

    data.set('_subject', `PDF sample request — ${reportName} (${company})`);
    data.set('requestType', 'Gated Asset Download');
    data.set('formVariant', formId);
    data.set('reportName', reportName);
    data.set('sourcePage', currentPath);
    data.set('sourceUrl', currentUrl);
    data.set('utmSource', params.get('utm_source') || '');
    data.set('utmMedium', params.get('utm_medium') || '');
    data.set('utmCampaign', params.get('utm_campaign') || '');
    data.set('utmContent', params.get('utm_content') || '');
    data.set('utmTerm', params.get('utm_term') || '');

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        trackLeadSubmitted({ formId });
        // Trigger the PDF download client-side once the lead is captured.
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdfPath.split('/').pop() || 'sample.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        const json = await res.json().catch(() => ({}));
        setSubmitError(json.error || 'Something went wrong — please try again.');
      }
    } catch {
      setSubmitError('Something went wrong — please try again.');
    } finally {
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
        {freeMailWarning && <p className="text-xs text-amber-600 mt-1">{freeMailWarning}</p>}
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

      {submitError && <p className="text-sm text-destructive">{submitError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Get the sample PDF'}
      </button>
    </form>
  );
}
