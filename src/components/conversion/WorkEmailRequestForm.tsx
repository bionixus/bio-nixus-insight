import { useState } from 'react';
import { getWorkEmailValidationError } from '@/lib/freeMailDomains';
import { notifyDownloadLead } from '@/lib/notifyDownloadLead';
import { trackFormStart, trackLeadSubmitted } from '@/lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';

type WorkEmailRequestFormProps = {
  /** Formspree for brief/summary lead requests; notify (Resend) for download traffic. */
  destination: 'formspree' | 'notify';
  formId: string;
  requestType: string;
  subject: string;
  sourcePage: string;
  sourceUrl: string;
  reportName?: string;
  submitLabel: string;
  placeholder?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  successTitle: string;
  successBody: string;
  onSubmitClick?: () => void;
};

export function WorkEmailRequestForm({
  destination,
  formId,
  requestType,
  subject,
  sourcePage,
  sourceUrl,
  reportName,
  submitLabel,
  placeholder = 'Work email',
  formClassName,
  inputClassName,
  buttonClassName,
  successTitle,
  successBody,
  onSubmitClick,
}: WorkEmailRequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const handleFirstInteraction = () => {
    if (started) return;
    setStarted(true);
    trackFormStart({ formId });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitClick?.();
    const form = e.currentTarget;
    const data = new FormData(form);
    const workEmail = (data.get('email') as string)?.trim() || '';
    const nextError = getWorkEmailValidationError(workEmail) ?? null;
    setEmailError(nextError);
    setSubmitError(null);
    if (nextError) return;

    const params = typeof window !== 'undefined' ? new URL(window.location.href).searchParams : null;

    setSubmitting(true);
    try {
      if (destination === 'notify') {
        const { notified } = await notifyDownloadLead({
          workEmail,
          reportName: reportName || subject,
          formVariant: formId,
          requestType,
          sourcePage,
          sourceUrl,
          utmSource: params?.get('utm_source') || '',
          utmMedium: params?.get('utm_medium') || '',
          utmCampaign: params?.get('utm_campaign') || '',
          utmContent: params?.get('utm_content') || '',
          utmTerm: params?.get('utm_term') || '',
        });
        if (!notified) {
          setSubmitError('Something went wrong — please try again or email admin@bionixus.com.');
          return;
        }
      } else {
        data.set('_subject', subject);
        data.set('requestType', requestType);
        data.set('formVariant', formId);
        data.set('sourcePage', sourcePage);
        data.set('sourceUrl', sourceUrl);
        if (reportName) data.set('reportName', reportName);
        data.set('workEmail', workEmail);
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) {
          setSubmitError('Something went wrong — please try again or email admin@bionixus.com.');
          return;
        }
      }
      setSubmitted(true);
      trackLeadSubmitted({ formId });
    } catch {
      setSubmitError('Something went wrong — please try again or email admin@bionixus.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">{successTitle}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className={formClassName} noValidate>
      <div>
        <label htmlFor={`${formId}-email`} className="sr-only">
          Work email
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          name="email"
          required
          placeholder={placeholder}
          aria-invalid={Boolean(emailError)}
          className={inputClassName}
        />
        {emailError ? <p className="text-xs text-destructive mt-1">{emailError}</p> : null}
        {submitError ? <p className="text-sm text-destructive mt-2">{submitError}</p> : null}
      </div>
      <button type="submit" disabled={submitting} className={buttonClassName}>
        {submitting ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
