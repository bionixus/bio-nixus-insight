import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isFreeMailDomain } from '@/lib/freeMailDomains';
import { trackLeadSubmitted, trackFormStart } from '@/lib/analytics';
import {
  QUALIFICATION_FORM_MARKETS,
  QUALIFICATION_FORM_NEEDS,
  QUALIFICATION_FORM_TIMELINES,
  QUALIFICATION_FORM_BUDGETS,
} from '@/data/qualificationFormOptions';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';
const ERROR_EMAIL = 'admin@bionixus.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Scheduling link shown on the thank-you state. */
export const QUALIFICATION_FORM_SCHEDULING_URL: string | null = 'https://schedule.bionixus.com/meeting-with-bionixus';

export type QualificationFormProps = {
  /** Unique id for analytics + Formspree formVariant tagging, e.g. 'pharma_companies_uae_cta' */
  formId: string;
  /** Optional context label shown in the form and sent with the submission, e.g. a report/page name. */
  sourceContext?: string;
  onSuccess?: () => void;
};

export function QualificationForm({ formId, sourceContext, onSuccess }: QualificationFormProps) {
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
    if (!(data.get('role') as string)?.trim()) next.role = 'Role is required';
    if (!(data.get('need') as string)?.trim()) next.need = 'Please select what you need';

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Soft-block: free-mail domain gets one warning, then submission proceeds on the next attempt.
    if (rawEmail && isFreeMailDomain(rawEmail) && !freeMailAcknowledged) {
      setFreeMailWarning('Please use your company email — our buyers have work email.');
      setFreeMailAcknowledged(true);
      return;
    }
    setFreeMailWarning(null);

    const company = (data.get('company') as string)?.trim() || '';
    const role = (data.get('role') as string)?.trim() || '';
    const need = (data.get('need') as string)?.trim() || '';
    const markets = data.getAll('markets').join(', ');
    const timeline = (data.get('timeline') as string)?.trim() || '';
    const budget = (data.get('budget') as string)?.trim() || '';
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const params = new URL(currentUrl).searchParams;
    const utmSource = params.get('utm_source') || '';
    const utmMedium = params.get('utm_medium') || '';
    const utmCampaign = params.get('utm_campaign') || '';
    const utmContent = params.get('utm_content') || '';
    const utmTerm = params.get('utm_term') || '';

    data.set('_subject', `New Research Enquiry — ${company || rawEmail}`);
    data.set('requestType', 'Qualification Form');
    data.set('formVariant', formId);
    data.set('sourceContext', sourceContext || '');
    data.set('sourcePage', currentPath);
    data.set('sourceUrl', currentUrl);
    data.set('utmSource', utmSource);
    data.set('utmMedium', utmMedium);
    data.set('utmCampaign', utmCampaign);
    data.set('utmContent', utmContent);
    data.set('utmTerm', utmTerm);
    data.set('markets', markets);
    data.set('qualified', budget ? 'yes' : 'unspecified-budget');

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
        onSuccess?.();
      } else {
        const json = await res.json().catch(() => ({}));
        setSubmitError(json.error || 'Something went wrong — please try again or email us directly.');
        redirectToErrorEmail({ rawEmail, company, role, need, markets, timeline, budget, sourceContext });
      }
    } catch (err) {
      setSubmitError('Something went wrong — please try again or email us directly.');
      redirectToErrorEmail({
        rawEmail,
        company,
        role,
        need,
        markets,
        timeline,
        budget,
        sourceContext,
        errorDetails: err instanceof Error ? err.message : 'network error',
      });
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
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">Thank you — we've got it.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A member of our research team will follow up within one business day. In the meantime, feel free to browse
          our <Link to="/case-studies" className="text-primary font-medium hover:underline">case studies</Link>.
        </p>
        {QUALIFICATION_FORM_SCHEDULING_URL ? (
          <a
            href={QUALIFICATION_FORM_SCHEDULING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Book a call now
          </a>
        ) : (
          <p className="text-xs text-muted-foreground">Prefer to talk sooner? Call the numbers in our footer.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className="space-y-5" noValidate>
      {sourceContext ? <input type="hidden" name="reportName" value={sourceContext} /> : null}
      <div>
        <label htmlFor={`${formId}-workEmail`} className="block text-sm font-medium text-foreground mb-1.5">
          Work email <span className="text-destructive">*</span>
        </label>
        <input
          id={`${formId}-workEmail`}
          name="workEmail"
          type="email"
          required
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.workEmail ? 'border-destructive' : 'border-input'}`}
          placeholder="you@company.com"
        />
        {errors.workEmail && <p className="text-xs text-destructive mt-1">{errors.workEmail}</p>}
        {freeMailWarning && <p className="text-xs text-amber-600 mt-1">{freeMailWarning}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-company`} className="block text-sm font-medium text-foreground mb-1.5">
            Company <span className="text-destructive">*</span>
          </label>
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            required
            className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.company ? 'border-destructive' : 'border-input'}`}
          />
          {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor={`${formId}-role`} className="block text-sm font-medium text-foreground mb-1.5">
            Role <span className="text-destructive">*</span>
          </label>
          <input
            id={`${formId}-role`}
            name="role"
            type="text"
            required
            className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.role ? 'border-destructive' : 'border-input'}`}
          />
          {errors.role && <p className="text-xs text-destructive mt-1">{errors.role}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-need`} className="block text-sm font-medium text-foreground mb-1.5">
          What do you need? <span className="text-destructive">*</span>
        </label>
        <select
          id={`${formId}-need`}
          name="need"
          required
          defaultValue=""
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.need ? 'border-destructive' : 'border-input'}`}
        >
          <option value="" disabled>Select…</option>
          {QUALIFICATION_FORM_NEEDS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.need && <p className="text-xs text-destructive mt-1">{errors.need}</p>}
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-foreground mb-2">Markets of interest</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5 max-h-36 overflow-y-auto pr-1">
          {QUALIFICATION_FORM_MARKETS.map((market) => (
            <label key={market} className="flex items-center gap-1.5 text-xs text-foreground cursor-pointer">
              <input type="checkbox" name="markets" value={market} className="h-3.5 w-3.5 rounded border-input text-primary focus:ring-primary/20" />
              {market}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-timeline`} className="block text-sm font-medium text-foreground mb-1.5">
            Timeline
          </label>
          <select
            id={`${formId}-timeline`}
            name="timeline"
            defaultValue=""
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          >
            <option value="">Select…</option>
            {QUALIFICATION_FORM_TIMELINES.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${formId}-budget`} className="block text-sm font-medium text-foreground mb-1.5">
            Budget range <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <select
            id={`${formId}-budget`}
            name="budget"
            defaultValue=""
            className="w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          >
            <option value="">Prefer not to say</option>
            {QUALIFICATION_FORM_BUDGETS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {submitError && <p className="text-sm text-destructive">{submitError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Request a Proposal'}
      </button>
    </form>
  );
}

function redirectToErrorEmail(fields: {
  rawEmail: string;
  company: string;
  role: string;
  need: string;
  markets: string;
  timeline: string;
  budget: string;
  sourceContext?: string;
  errorDetails?: string;
}) {
  const subject = encodeURIComponent(`Research Enquiry — ${fields.company || fields.rawEmail}`);
  const body = encodeURIComponent(
    `--- FORM DATA ---\n` +
      `Email: ${fields.rawEmail}\n` +
      `Company: ${fields.company}\n` +
      `Role: ${fields.role}\n` +
      `Need: ${fields.need}\n` +
      `Markets: ${fields.markets}\n` +
      `Timeline: ${fields.timeline}\n` +
      `Budget: ${fields.budget}\n` +
      (fields.sourceContext ? `Source: ${fields.sourceContext}\n` : '') +
      `\n--- NOTE ---\nThe online form encountered an error${fields.errorDetails ? ` (${fields.errorDetails})` : ''}. Please process this inquiry manually.`,
  );
  window.location.href = `mailto:${ERROR_EMAIL}?subject=${subject}&body=${body}`;
}
