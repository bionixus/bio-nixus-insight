import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AGENCY_OFFER_BULLETS,
  AGENCY_QUOTE_FORM_VARIANT,
  AGENCY_QUOTE_INTRO,
  AGENCY_QUOTE_SUCCESS,
  AGENCY_QUOTE_TAGS,
  PHYSICIAN_NETWORK_STATEMENT,
  agencyQuoteRef,
} from '@/data/agencyResearchOffer';
import { isFreeMailDomain } from '@/lib/freeMailDomains';
import { focusFirstInvalidField, leadFallbackMailto, revealStatus } from '@/lib/formFeedback';
import { isValidLeadEmail } from '@/lib/leadEmailValidation';
import { submitLeadDual } from '@/lib/submitLeadDual';

const ERROR_EMAIL = 'admin@bionixus.com';
const GENERIC_ERROR = 'Something went wrong — please try again or email us directly.';
const FREE_MAIL_WARNING =
  'That looks like a personal email address. A company email helps us respond faster — press the button again to send it anyway.';

const inputClass = (invalid: boolean) =>
  `w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
    invalid ? 'border-destructive' : 'border-input'
  }`;

type AgencyResearchOfferProps = {
  /** Route slug without a leading slash. Sent as ref=agency-<page-slug>. */
  pageSlug: string;
  /** Page-specific first sentence. The rest of the block is shared. */
  lead: string;
};

export function AgencyResearchOffer({ pageSlug, lead }: AgencyResearchOfferProps) {
  const formId = `agency-quote-${pageSlug}`;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fallbackMailto, setFallbackMailto] = useState<string | null>(null);
  const [freeMailWarning, setFreeMailWarning] = useState<string | null>(null);
  const [freeMailAcknowledged, setFreeMailAcknowledged] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = (data.get('name') as string)?.trim() || '';
    const agency = (data.get('agency') as string)?.trim() || '';
    const email = (data.get('email') as string)?.trim() || '';
    const country = (data.get('country') as string)?.trim() || '';
    const projectBrief = (data.get('projectBrief') as string)?.trim() || '';

    if (!name) next.name = 'Name is required';
    if (!agency) next.agency = 'Agency is required';
    if (!email) next.email = 'Work email is required';
    else if (!isValidLeadEmail(email)) next.email = 'Please enter a valid email address';
    if (!country) next.country = 'Country is required';
    if (!projectBrief) next.projectBrief = 'Project brief is required';

    setErrors(next);
    setSubmitError(null);
    setFallbackMailto(null);
    if (Object.keys(next).length > 0) {
      focusFirstInvalidField(form, next);
      return;
    }

    if (isFreeMailDomain(email) && !freeMailAcknowledged) {
      setFreeMailWarning(FREE_MAIL_WARNING);
      setFreeMailAcknowledged(true);
      return;
    }
    setFreeMailWarning(null);

    data.set('formVariant', AGENCY_QUOTE_FORM_VARIANT);
    data.set('requestType', 'Agency quote');
    data.set('tags', AGENCY_QUOTE_TAGS);
    data.set('ref', agencyQuoteRef(pageSlug));
    data.set('sourcePage', `/${pageSlug}`);
    data.set('_subject', `Agency quote - ${agency || email}`);

    const mailtoFor = (errorDetails?: string) =>
      leadFallbackMailto(
        ERROR_EMAIL,
        `Agency quote - ${agency || email}`,
        {
          Name: name,
          Agency: agency,
          Email: email,
          Country: country,
          'Project brief': projectBrief,
          Page: `/${pageSlug}`,
        },
        errorDetails,
      );

    setSubmitting(true);
    try {
      const result = await submitLeadDual(data);
      if (result.skipped || result.ok) {
        setSubmitted(true);
        return;
      }
      if (result.invalidEmail && result.error) {
        setSubmitError(result.error);
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

  return (
    <section className="section-padding" id="for-research-agencies" aria-labelledby={`${formId}-heading`}>
      <div className="container-wide max-w-4xl mx-auto">
        <h2 id={`${formId}-heading`} className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
          For research agencies
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{lead}</p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          {AGENCY_OFFER_BULLETS.map((bullet) => (
            <li key={bullet.slice(0, 24)} className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          Agency partners can also review the{' '}
          <Link to="/contact" className="text-primary font-medium underline">
            BioNixus partner programme
          </Link>
          .
        </p>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">{PHYSICIAN_NETWORK_STATEMENT}</p>

        <h3 className="text-xl font-display font-semibold text-foreground mb-3">Request an agency quote</h3>
        {submitted ? (
          <p className="text-sm text-foreground focus:outline-none" role="status" aria-live="polite" tabIndex={-1} ref={revealStatus}>
            {AGENCY_QUOTE_SUCCESS}
          </p>
        ) : (
          <>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">{AGENCY_QUOTE_INTRO}</p>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-foreground mb-1.5">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name ? <p className="text-xs text-destructive mt-1">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor={`${formId}-agency`} className="block text-sm font-medium text-foreground mb-1.5">
                  Agency <span className="text-destructive">*</span>
                </label>
                <input
                  id={`${formId}-agency`}
                  name="agency"
                  type="text"
                  required
                  autoComplete="organization"
                  aria-invalid={Boolean(errors.agency)}
                  className={inputClass(Boolean(errors.agency))}
                />
                {errors.agency ? <p className="text-xs text-destructive mt-1">{errors.agency}</p> : null}
              </div>
              <div>
                <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-foreground mb-1.5">
                  Work email <span className="text-destructive">*</span>
                </label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  className={inputClass(Boolean(errors.email))}
                />
                {errors.email ? <p className="text-xs text-destructive mt-1">{errors.email}</p> : null}
              </div>
              <div>
                <label htmlFor={`${formId}-country`} className="block text-sm font-medium text-foreground mb-1.5">
                  Country <span className="text-destructive">*</span>
                </label>
                <input
                  id={`${formId}-country`}
                  name="country"
                  type="text"
                  required
                  autoComplete="country-name"
                  aria-invalid={Boolean(errors.country)}
                  className={inputClass(Boolean(errors.country))}
                />
                {errors.country ? <p className="text-xs text-destructive mt-1">{errors.country}</p> : null}
              </div>
              <div>
                <label htmlFor={`${formId}-brief`} className="block text-sm font-medium text-foreground mb-1.5">
                  Project brief <span className="text-destructive">*</span>
                </label>
                <textarea
                  id={`${formId}-brief`}
                  name="projectBrief"
                  required
                  rows={5}
                  aria-invalid={Boolean(errors.projectBrief)}
                  placeholder="Markets, specialty, method, n, timeline, white-label yes/no"
                  className={inputClass(Boolean(errors.projectBrief))}
                />
                {errors.projectBrief ? <p className="text-xs text-destructive mt-1">{errors.projectBrief}</p> : null}
              </div>
              <div aria-live="polite">
                {freeMailWarning && !submitError ? (
                  <p className="text-sm text-amber-700 focus:outline-none" role="alert" tabIndex={-1} ref={revealStatus}>
                    {freeMailWarning}
                  </p>
                ) : null}
                {submitError ? (
                  <p className="text-sm text-destructive focus:outline-none" role="alert" tabIndex={-1} ref={revealStatus}>
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
                className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Send agency brief
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
