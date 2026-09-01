import { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, X } from 'lucide-react';
import { BIONIXUS_PHONE_UK } from '@/components/report-conversion/constants';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackLeadSubmitted } from '@/lib/analytics';
import { languages } from '@/lib/i18n';
import { getLocalizedPathForLanguage, localizedContactPath } from '@/lib/seo';
import { getWhatsAppWidgetStrings } from '@/lib/whatsappWidgetStrings';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';
const COOKIE_CONSENT_KEY = 'bionixus-cookie-consent';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-().]{8,}$/;
const WHATSAPP_NUMBER = BIONIXUS_PHONE_UK.replace(/\D/g, '');
const CONTACT_PATHS = new Set(languages.map((lang) => localizedContactPath(lang.code)));

const FIELD_BASE =
  'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors';

type ContactValidation = {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  company?: string;
  phone?: string;
  message?: string;
  emailFormat?: string;
  phoneFormat?: string;
  error?: string;
};

function fieldClass(hasError: boolean) {
  return `${FIELD_BASE} ${hasError ? 'border-destructive' : 'border-input'}`;
}

function buildWhatsAppUrl(params: {
  greeting: string;
  firstName: string;
  lastName: string;
  company: string;
  workEmail: string;
  phone: string;
  message: string;
  pageUrl: string;
}) {
  const text = [
    params.greeting,
    '',
    `Name: ${params.firstName} ${params.lastName}`,
    `Company: ${params.company}`,
    `Email: ${params.workEmail}`,
    `Phone: ${params.phone}`,
    `Page: ${params.pageUrl}`,
    '',
    'Message:',
    params.message,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function openWhatsApp(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function WhatsAppProposalWidget() {
  const { pathname } = useLocation();
  const { t, language, isRTL } = useLanguage();
  const copy = getWhatsAppWidgetStrings(language);
  const formId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  const validation = (t.contact as { validation?: ContactValidation }).validation;
  const v = (key: keyof ContactValidation) => validation?.[key] ?? '';
  const contactCopy = t.contact as unknown as Record<string, string | undefined>;
  const place = (key: string, fallback: string) => contactCopy[key] ?? fallback;

  useEffect(() => {
    const syncCookie = () => {
      try {
        setCookieVisible(localStorage.getItem(COOKIE_CONSENT_KEY) === null);
      } catch {
        setCookieVisible(false);
      }
    };
    syncCookie();
    window.addEventListener('bionixus-consent-changed', syncCookie);
    return () => window.removeEventListener('bionixus-consent-changed', syncCookie);
  }, []);

  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setSubmitted(false);
    setErrors({});
    setSubmitError(null);
    setWhatsAppUrl(null);
  }, [pathname]);

  if (CONTACT_PATHS.has(pathname)) return null;

  const offsetClass = cookieVisible
    ? 'bottom-44 md:bottom-28'
    : 'bottom-24 md:bottom-6';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const firstName = (data.get('firstName') as string)?.trim() || '';
    const lastName = (data.get('lastName') as string)?.trim() || '';
    const workEmail = (data.get('workEmail') as string)?.trim() || '';
    const company = (data.get('company') as string)?.trim() || '';
    const phone = (data.get('phone') as string)?.trim() || '';
    const message = (data.get('message') as string)?.trim() || '';

    if (!firstName) next.firstName = v('firstName') || 'First name is required';
    if (!lastName) next.lastName = v('lastName') || 'Last name is required';
    if (!workEmail) next.workEmail = v('workEmail') || 'Work email is required';
    else if (!EMAIL_REGEX.test(workEmail)) next.workEmail = v('emailFormat') || 'Please enter a valid email address';
    if (!company) next.company = v('company') || 'Company is required';
    if (!phone) next.phone = copy.phoneRequired;
    else if (!PHONE_REGEX.test(phone)) next.phone = v('phoneFormat') || 'Please enter a valid phone number';
    if (!message) next.message = v('message') || 'Message is required';

    setErrors(next);
    setSubmitError(null);
    if (Object.keys(next).length > 0) return;

    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const params = new URL(currentUrl).searchParams;

    const waUrl = buildWhatsAppUrl({
      greeting: copy.greeting,
      firstName,
      lastName,
      company,
      workEmail,
      phone,
      message,
      pageUrl: currentUrl,
    });

    data.set('_subject', `WhatsApp Proposal Request - ${firstName} ${lastName}`);
    data.set('requestType', 'WhatsApp Proposal Request');
    data.set('formVariant', 'whatsapp_proposal_widget');
    data.set('sourcePage', currentPath);
    data.set('sourceUrl', currentUrl);
    data.set('reportName', '');
    data.set('utmSource', params.get('utm_source') || '');
    data.set('utmMedium', params.get('utm_medium') || '');
    data.set('utmCampaign', params.get('utm_campaign') || '');
    data.set('utmContent', params.get('utm_content') || '');
    data.set('utmTerm', params.get('utm_term') || '');

    setWhatsAppUrl(waUrl);
    setSubmitted(true);
    openWhatsApp(waUrl);

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        trackLeadSubmitted({ formId: 'whatsapp_proposal_widget' });
      } else {
        const json = await res.json().catch(() => ({}));
        setSubmitError((json as { error?: string }).error || v('error'));
      }
    } catch {
      setSubmitError(v('error'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`fixed z-50 ${offsetClass} end-4 md:end-6`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {open ? (
        <div
          className="mb-3 w-[min(22.5rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-background shadow-elegant"
          role="dialog"
          aria-modal="false"
          aria-labelledby={`${formId}-title`}
        >
          <div className="flex items-start justify-between gap-3 bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <h2 id={`${formId}-title`} className="font-display text-lg font-semibold leading-snug">
                {copy.panelTitle}
              </h2>
              <p className="mt-1 text-sm text-primary-foreground/70 leading-relaxed">
                {copy.panelSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-md p-1 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={copy.closeLabel}
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="max-h-[min(70vh,560px)] overflow-y-auto p-5">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  ✓
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {copy.successTitle}
                </h3>
                <p className="mb-5 text-sm text-muted-foreground leading-relaxed">{copy.successBody}</p>
                {whatsAppUrl ? (
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground transition hover:brightness-105"
                  >
                    {copy.openWhatsAppAgain}
                  </a>
                ) : null}
                {submitError ? <p className="mt-3 text-sm text-destructive">{submitError}</p> : null}
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor={`${formId}-firstName`} className="mb-2 block text-sm font-medium text-foreground">
                      {t.contact.firstName} <span className="text-destructive">*</span>
                    </label>
                    <input
                      ref={firstFieldRef}
                      id={`${formId}-firstName`}
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      aria-invalid={Boolean(errors.firstName)}
                      className={fieldClass(Boolean(errors.firstName))}
                      placeholder={place('firstNamePlaceholder', 'John')}
                    />
                    {errors.firstName ? <p className="mt-1 text-sm text-destructive">{errors.firstName}</p> : null}
                  </div>
                  <div>
                    <label htmlFor={`${formId}-lastName`} className="mb-2 block text-sm font-medium text-foreground">
                      {t.contact.lastName} <span className="text-destructive">*</span>
                    </label>
                    <input
                      id={`${formId}-lastName`}
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      aria-invalid={Boolean(errors.lastName)}
                      className={fieldClass(Boolean(errors.lastName))}
                      placeholder={place('lastNamePlaceholder', 'Smith')}
                    />
                    {errors.lastName ? <p className="mt-1 text-sm text-destructive">{errors.lastName}</p> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor={`${formId}-workEmail`} className="mb-2 block text-sm font-medium text-foreground">
                    {t.contact.workEmail} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id={`${formId}-workEmail`}
                    name="workEmail"
                    type="email"
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errors.workEmail)}
                    className={fieldClass(Boolean(errors.workEmail))}
                    placeholder={place('workEmailPlaceholder', 'john@company.com')}
                  />
                  {errors.workEmail ? <p className="mt-1 text-sm text-destructive">{errors.workEmail}</p> : null}
                </div>

                <div>
                  <label htmlFor={`${formId}-company`} className="mb-2 block text-sm font-medium text-foreground">
                    {t.contact.company} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id={`${formId}-company`}
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    aria-invalid={Boolean(errors.company)}
                    className={fieldClass(Boolean(errors.company))}
                    placeholder={place('companyPlaceholder', 'Your Company')}
                  />
                  {errors.company ? <p className="mt-1 text-sm text-destructive">{errors.company}</p> : null}
                </div>

                <div>
                  <label htmlFor={`${formId}-phone`} className="mb-2 block text-sm font-medium text-foreground">
                    {t.contact.phoneLabel} <span className="text-destructive">*</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    className={fieldClass(Boolean(errors.phone))}
                    placeholder="+44 20 7123 4567"
                  />
                  {errors.phone ? <p className="mt-1 text-sm text-destructive">{errors.phone}</p> : null}
                </div>

                <div>
                  <label htmlFor={`${formId}-message`} className="mb-2 block text-sm font-medium text-foreground">
                    {t.contact.message} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={3}
                    required
                    aria-invalid={Boolean(errors.message)}
                    className={`${fieldClass(Boolean(errors.message))} resize-none`}
                    placeholder={place('messagePlaceholder', 'Tell us about your research needs...')}
                  />
                  {errors.message ? <p className="mt-1 text-sm text-destructive">{errors.message}</p> : null}
                </div>

                <p className="text-xs text-muted-foreground leading-snug">
                  {copy.privacyBefore}
                  <Link
                    to={getLocalizedPathForLanguage('/privacy', language)}
                    className="font-medium text-primary hover:underline"
                  >
                    {copy.privacyLink}
                  </Link>
                  {copy.privacyAfter}
                </p>

                {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-accent py-3 font-semibold text-accent-foreground transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? copy.submitting : copy.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}

      <div className="flex justify-end">
        {open ? (
          <button
            type="button"
            className="whatsapp-fab is-open relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant ring-2 ring-accent transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:h-16 md:w-16"
            aria-label={copy.closeLabel}
            aria-expanded
            aria-haspopup="dialog"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        ) : (
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="whatsapp-fab relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant ring-2 ring-accent transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:h-16 md:w-16"
                aria-label={copy.fabAriaLabel}
                aria-expanded={false}
                aria-haspopup="dialog"
                onClick={() => setOpen(true)}
              >
                <span className="whatsapp-fab-pulse" aria-hidden />
                <Phone className="whatsapp-fab-icon h-6 w-6" aria-hidden />
              </button>
            </TooltipTrigger>
            <TooltipContent side={isRTL ? 'right' : 'left'} sideOffset={12} className="max-w-[14rem] font-medium">
              {copy.tooltip}
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
