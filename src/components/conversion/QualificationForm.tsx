import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isFreeMailDomain } from '@/lib/freeMailDomains';
import { trackLeadSubmitted, trackFormStart, trackMeetingBooked, trackMeetingLinkClicked } from '@/lib/analytics';
import { submitLeadDual } from '@/lib/submitLeadDual';
import { focusFirstInvalidField, leadFallbackMailto, revealStatus } from '@/lib/formFeedback';
import {
  QUALIFICATION_FORM_MARKETS,
  QUALIFICATION_FORM_NEEDS,
  QUALIFICATION_FORM_TIMELINES,
  QUALIFICATION_FORM_BUDGETS,
  QUALIFICATION_FORM_BELOW_MINIMUM_BUDGET,
} from '@/data/qualificationFormOptions';

const ERROR_EMAIL = 'admin@bionixus.com';
const GENERIC_ERROR = 'Something went wrong — please try again or email us directly.';
const FREE_MAIL_WARNING =
  'That looks like a personal email address. A company email helps us respond faster — press the button again to send it anyway.';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Scheduling link shown on the thank-you state. */
export const QUALIFICATION_FORM_SCHEDULING_URL: string | null = 'https://schedule.bionixus.com/meeting-with-bionixus';

export type QualificationFormProps = {
  /** Unique id for analytics and the `formVariant` sent to HighLevel and Formspree, e.g. 'pharma_companies_uae_cta' */
  formId: string;
  /** Optional context label shown in the form and sent with the submission, e.g. a report/page name. */
  sourceContext?: string;
  /** Prefills Markets of interest checkboxes (must match QUALIFICATION_FORM_MARKETS). */
  defaultMarkets?: string[];
  /** Prefills the need select (must match QUALIFICATION_FORM_NEEDS). */
  defaultNeed?: (typeof QUALIFICATION_FORM_NEEDS)[number];
  onSuccess?: () => void;
};

export function QualificationForm({
  formId,
  sourceContext,
  defaultMarkets,
  defaultNeed,
  onSuccess,
}: QualificationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  /** True when the submitted budget was below the minimum engagement — answered by email, not a call. */
  const [belowMinimum, setBelowMinimum] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);
  const [freeMailWarning, setFreeMailWarning] = useState<string | null>(null);
  const [freeMailAcknowledged, setFreeMailAcknowledged] = useState(false);
  const [started, setStarted] = useState(false);
  const [showAllMarkets, setShowAllMarkets] = useState(() =>
    Boolean(defaultMarkets?.some((m) => !QUALIFICATION_FORM_MARKETS.slice(0, 7).includes(m as (typeof QUALIFICATION_FORM_MARKETS)[number]))),
  );
  const priorityMarkets = QUALIFICATION_FORM_MARKETS.slice(0, 7);
  const visibleMarkets = showAllMarkets ? QUALIFICATION_FORM_MARKETS : priorityMarkets;

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
    setSubmitError(null);
    setFallbackMailto(null);
    if (Object.keys(next).length > 0) {
      focusFirstInvalidField(form, next);
      return;
    }

    // Soft-block: a free-mail domain gets one warning next to the button, then the next press sends.
    if (rawEmail && isFreeMailDomain(rawEmail) && !freeMailAcknowledged) {
      setFreeMailWarning(FREE_MAIL_WARNING);
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

    const isBelowMinimum = budget === QUALIFICATION_FORM_BELOW_MINIMUM_BUDGET;
    data.set(
      '_subject',
      isBelowMinimum ? `Research enquiry (under $20K) — ${company || rawEmail}` : `Scoping call request — ${company || rawEmail}`,
    );
    data.set('requestType', isBelowMinimum ? 'Research Enquiry (below minimum)' : 'Scoping Call Request');
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
    data.set('qualified', isBelowMinimum ? 'no' : budget ? 'yes' : 'unspecified-budget');

    const mailtoFor = (errorDetails?: string) =>
      leadFallbackMailto(
        ERROR_EMAIL,
        `Scoping call request — ${company || rawEmail}`,
        {
          Email: rawEmail,
          Company: company,
          Role: role,
          Need: need,
          Markets: markets,
          Timeline: timeline,
          Budget: budget,
          Source: sourceContext || '',
          Page: currentUrl,
        },
        errorDetails,
      );

    setSubmitting(true);
    try {
      const result = await submitLeadDual(data);
      if (result.skipped) {
        setSubmitted(true);
        return;
      }
      if (result.ok) {
        setBelowMinimum(isBelowMinimum);
        setSubmitted(true);
        trackLeadSubmitted({ formId });
        if (!isBelowMinimum) {
          trackMeetingBooked({ formId, sourceContext, need, budget, timeline, markets });
        }
        onSuccess?.();
      } else if (result.highLevelStatus === 400 && result.error) {
        setSubmitError(result.error);
        focusFirstInvalidField(form, { workEmail: result.error });
      } else {
        setSubmitError(result.networkError ? GENERIC_ERROR : result.error || GENERIC_ERROR);
        setFallbackMailto(mailtoFor(result.networkError || result.error));
      }
    } catch (err) {
      setSubmitError(GENERIC_ERROR);
      setFallbackMailto(mailtoFor(err instanceof Error ? err.message : 'network error'));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted && belowMinimum) {
    return (
      <div className="text-center py-4 focus:outline-none" role="status" aria-live="polite" tabIndex={-1} ref={revealStatus}>
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
          ✓
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">Thank you — we'll reply by email.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Projects under $20K are scoped by email rather than a call. A research lead will send options within one
          business day. You can also write to{' '}
          <a href={`mailto:${ERROR_EMAIL}`} className="text-primary font-medium hover:underline">
            {ERROR_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="text-center py-4 focus:outline-none" role="status" aria-live="polite" tabIndex={-1} ref={revealStatus}>
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
          ✓
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">Thank you — your scoping call request is in.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          A research lead will confirm a 30-minute slot within one business day, or pick a time now. In the meantime,
          browse our <Link to="/case-studies" className="text-primary font-medium hover:underline">case studies</Link>.
        </p>
        {QUALIFICATION_FORM_SCHEDULING_URL ? (
          <a
            href={QUALIFICATION_FORM_SCHEDULING_URL}
            onClick={() =>
              trackMeetingLinkClicked({ formId, sourceContext, targetUrl: QUALIFICATION_FORM_SCHEDULING_URL ?? '' })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Pick a time for your call
          </a>
        ) : (
          <p className="text-xs text-muted-foreground">Prefer to talk sooner? Call the numbers in our footer.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className="space-y-5" noValidate>
      <input
        type="text"
        name="hp_company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        defaultValue=""
        className="hidden"
      />
      {sourceContext ? <input type="hidden" name="reportName" value={sourceContext} /> : null}
      <div>
        <label htmlFor={`${formId}-workEmail`} className="block text-sm font-medium text-foreground mb-1.5">
          Work email <span className="text-destructive">*</span>
        </label>
        <input
          id={`${formId}-workEmail`}
          name="workEmail"
          aria-invalid={Boolean(errors.workEmail)}
          type="email"
          required
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.workEmail ? 'border-destructive' : 'border-input'}`}
          placeholder="you@company.com"
        />
        {errors.workEmail && <p className="text-xs text-destructive mt-1">{errors.workEmail}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-company`} className="block text-sm font-medium text-foreground mb-1.5">
            Company <span className="text-destructive">*</span>
          </label>
          <input
            id={`${formId}-company`}
            name="company"
          aria-invalid={Boolean(errors.company)}
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
          aria-invalid={Boolean(errors.role)}
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
          aria-invalid={Boolean(errors.need)}
          required
          defaultValue={defaultNeed ?? ''}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5 pr-1">
          {visibleMarkets.map((market) => (
            <label key={market} className="flex items-center gap-1.5 text-xs text-foreground cursor-pointer">
              <input
                type="checkbox"
                name="markets"
                value={market}
                defaultChecked={defaultMarkets?.includes(market)}
                className="h-3.5 w-3.5 rounded border-input text-primary focus:ring-primary/20"
              />
              {market}
            </label>
          ))}
        </div>
        {!showAllMarkets ? (
          <button
            type="button"
            className="mt-2 text-xs font-medium text-primary hover:underline"
            onClick={() => setShowAllMarkets(true)}
          >
            Show all {QUALIFICATION_FORM_MARKETS.length} markets
          </button>
        ) : null}
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

      <div aria-live="polite">
        {freeMailWarning && !submitError ? (
          <p className="text-sm text-amber-700" role="alert">
            {freeMailWarning}
          </p>
        ) : null}
        {submitError ? (
          <p className="text-sm text-destructive" role="alert">
            {submitError}
            {fallbackMailto ? (
              <>
                {' '}
                <a href={fallbackMailto} className="font-medium underline">
                  Email your request to {ERROR_EMAIL}
                </a>
              </>
            ) : null}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Book a 30-minute scoping call'}
      </button>
    </form>
  );
}
