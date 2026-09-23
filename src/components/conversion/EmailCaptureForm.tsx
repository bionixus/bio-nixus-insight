import { useState } from 'react';
import { FORMSPREE_ENDPOINT, submitLeadDual } from '@/lib/submitLeadDual';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type EmailCaptureFormProps = {
  formVariant: string;
  requestType: string;
  subject: string;
  sourcePage: string;
  sourceUrl: string;
  reportName?: string;
  submitLabel: string;
  placeholder?: string;
  onSubmitClick?: () => void;
};

/**
 * Work-email capture that used to full-page POST to Formspree.
 * JS submits Formspree and HighLevel together and stays on the page.
 * Without JS the form still posts to Formspree.
 */
export function EmailCaptureForm({
  formVariant,
  requestType,
  subject,
  sourcePage,
  sourceUrl,
  reportName,
  submitLabel,
  placeholder = 'Work email',
  onSubmitClick,
}: EmailCaptureFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get('email') as string)?.trim() || '';
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid work email.');
      return;
    }
    onSubmitClick?.();
    setError(null);
    setSubmitting(true);
    try {
      const result = await submitLeadDual(data);
      if (result.ok) setSubmitted(true);
      else setError('Something went wrong. Email digital@bionixus.uk and we will send it.');
    } catch {
      setError('Something went wrong. Email digital@bionixus.uk and we will send it.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-sm text-foreground" role="status">
        Thanks — we will send this to your work email within one business day.
      </p>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-[1fr_auto] gap-3"
      noValidate
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="requestType" value={requestType} />
      <input type="hidden" name="formVariant" value={formVariant} />
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="sourceUrl" value={sourceUrl} />
      {reportName ? <input type="hidden" name="reportName" value={reportName} /> : null}
      <input
        type="text"
        name="hp_company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        defaultValue=""
        className="hidden"
      />
      <div>
        <label htmlFor={`${formVariant}-email`} className="sr-only">
          Work email
        </label>
        <input
          id={`${formVariant}-email`}
          type="email"
          name="email"
          required
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-lg bg-primary px-5 h-11 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
