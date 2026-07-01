import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import {
  BIONIXUS_PHONE_EG,
  BIONIXUS_PHONE_EG_DISPLAY,
  BIONIXUS_PHONE_UK,
  BIONIXUS_PHONE_UK_DISPLAY,
  BIONIXUS_PHONE_US,
  BIONIXUS_PHONE_US_DISPLAY,
} from '@/components/report-conversion/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths, localizedContactPath } from '@/lib/seo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GlobalCoverage38Map } from '@/components/media/GlobalCoverage38Map';
import { CONTACT_FORM_COUNTRIES } from '@/data/contactFormCountries';

type ContactValidation = {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  company?: string;
  phone?: string;
  referralSource?: string;
  message?: string;
  privacy?: string;
  emailFormat?: string;
  country?: string;
  consent?: string;
  success?: string;
  error?: string;
};

const RESEARCH_INTERESTS = [
  'Quantitative',
  'Qualitative',
  'Market Access',
  'KOL Mapping',
  'Competitive Intelligence',
  'Clinical Trial Support',
] as const;

const TIMELINE_OPTIONS = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
] as const;

const BUDGET_OPTIONS = [
  'Under £25k',
  '£25k-75k',
  '£75k-150k',
  '£150k+',
  'Not sure yet',
] as const;

const REFERRAL_OPTIONS = [
  'Google Search',
  'LinkedIn',
  'Referral',
  'Conference/Event',
  'Industry Publication',
  'Other',
] as const;

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';
const ERROR_EMAIL = 'digital@bionixus.uk';

type ErrorEmailFields = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  phone: string;
  country: string;
  researchInterest: string;
  timeline: string;
  budget: string;
  referralSource: string;
  message: string;
};

function sendErrorEmail(fields: ErrorEmailFields, errorDetails: string) {
  const subject = encodeURIComponent('Meeting With BioNixus Team');
  const body = encodeURIComponent(
    `I'd like to schedule a meeting with BioNixus team to discuss more about BioNixus Market Research Services.\n\n` +
    `--- FORM DATA ---\n` +
    `First Name: ${fields.firstName}\n` +
    `Last Name: ${fields.lastName}\n` +
    `Email: ${fields.workEmail}\n` +
    `Company: ${fields.company}\n` +
    (fields.phone ? `Phone: ${fields.phone}\n` : '') +
    (fields.country ? `Country: ${fields.country}\n` : '') +
    (fields.researchInterest ? `Research Interest: ${fields.researchInterest}\n` : '') +
    (fields.timeline ? `Timeline: ${fields.timeline}\n` : '') +
    (fields.budget ? `Budget: ${fields.budget}\n` : '') +
    (fields.referralSource ? `Referral Source: ${fields.referralSource}\n` : '') +
    `\nMessage:\n${fields.message}\n\n` +
    `--- NOTE ---\nThe online form encountered an error (${errorDetails}). Please process this inquiry manually.`
  );
  window.location.href = `mailto:${ERROR_EMAIL}?subject=${subject}&body=${body}`;
}

type ContactSectionProps = {
  /** When true (homepage only), show a short CTA instead of the full proposal form to avoid near-duplicate HTML vs `/contact`. */
  embedOnHomePage?: boolean;
  /** Premium editorial layout for `/contact` — skips duplicate hero copy, uses elevated cards. */
  premiumLayout?: boolean;
};

const OFFICE_LOCATIONS = [
  { city: 'Sheridan, WY', role: 'Global HQ' },
  { city: 'London, UK', role: 'Europe' },
  { city: 'Dubai, UAE', role: 'GCC hub' },
  { city: 'Riyadh & Jeddah', role: 'Saudi Arabia' },
  { city: 'Kuwait City', role: 'Kuwait' },
  { city: 'Cairo, Egypt', role: 'MENA' },
] as const;

const ContactSection = ({ embedOnHomePage = false, premiumLayout = false }: ContactSectionProps) => {
  const { t, language, isRTL } = useLanguage();
  const phoneRegionLabels = t.homePage.cta.phoneRegionLabels;
  const phoneLines = [
    { tel: BIONIXUS_PHONE_US, label: `${phoneRegionLabels[0]} ${BIONIXUS_PHONE_US_DISPLAY}` },
    { tel: BIONIXUS_PHONE_UK, label: `${phoneRegionLabels[1]} ${BIONIXUS_PHONE_UK_DISPLAY}` },
    { tel: BIONIXUS_PHONE_EG, label: `${phoneRegionLabels[2]} ${BIONIXUS_PHONE_EG_DISPLAY}` },
  ];
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const basePath = languagePaths[language] || '/';
  const c = t.contact as Record<string, string | undefined>;
  const validation = (t.contact as { validation?: ContactValidation }).validation;
  const v = (key: keyof ContactValidation) => validation?.[key] ?? '';
  const place = (key: string, fallback: string) => c[key] ?? fallback;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    if (!(data.get('firstName') as string)?.trim()) next.firstName = v('firstName') || 'First name is required';
    if (!(data.get('lastName') as string)?.trim()) next.lastName = v('lastName') || 'Last name is required';

    const rawEmail = (data.get('workEmail') as string)?.trim() || '';
    if (!rawEmail) {
      next.workEmail = v('workEmail') || 'Work email is required';
    } else if (!EMAIL_RE.test(rawEmail)) {
      next.workEmail = v('emailFormat') || 'Please enter a valid email address';
    }

    if (!(data.get('company') as string)?.trim()) next.company = v('company') || 'Company is required';
    if (!(data.get('country') as string)?.trim()) next.country = v('country') || 'Please select a country';
    if (!(data.get('phone') as string)?.trim()) next.phone = v('phone') || 'Phone number is required';
    if (!(data.get('referralSource') as string)?.trim()) {
      next.referralSource = v('referralSource') || 'Please tell us how you heard about us';
    }
    if (!(data.get('message') as string)?.trim()) next.message = v('message') || 'Message is required';
    if (!data.get('consent')) next.consent = v('consent') || 'You must agree to the privacy policy';

    setErrors(next);
    setSubmitError(null);
    if (Object.keys(next).length > 0) return;

    const firstName = (data.get('firstName') as string)?.trim() || '';
    const lastName = (data.get('lastName') as string)?.trim() || '';
    const workEmail = rawEmail;
    const company = (data.get('company') as string)?.trim() || '';
    const phone = (data.get('phone') as string)?.trim() || '';
    const country = (data.get('country') as string)?.trim() || '';
    const researchInterest = data.getAll('researchInterest').join(', ');
    const timeline = (data.get('timeline') as string)?.trim() || '';
    const budget = (data.get('budget') as string)?.trim() || '';
    const referralSource = (data.get('referralSource') as string)?.trim() || '';
    const message = (data.get('message') as string)?.trim() || '';
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const params = new URL(currentUrl).searchParams;
    const utmSource = params.get('utm_source') || '';
    const utmMedium = params.get('utm_medium') || '';
    const utmCampaign = params.get('utm_campaign') || '';
    const utmContent = params.get('utm_content') || '';
    const utmTerm = params.get('utm_term') || '';

    data.set('_subject', `New Form Submission - ${firstName} ${lastName}`);
    data.set('requestType', 'Contact Request');
    data.set('formVariant', 'contact_section');
    data.set('sourcePage', currentPath);
    data.set('sourceUrl', currentUrl);
    data.set('reportName', '');
    data.set('researchInterest', researchInterest);
    data.set('utmSource', utmSource);
    data.set('utmMedium', utmMedium);
    data.set('utmCampaign', utmCampaign);
    data.set('utmContent', utmContent);
    data.set('utmTerm', utmTerm);

    const errorFields: ErrorEmailFields = {
      firstName, lastName, workEmail, company, phone, country,
      researchInterest, timeline, budget, referralSource, message,
    };

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        try {
          await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName,
              lastName: lastName || undefined,
              email: workEmail,
              mobile: phone || undefined,
              company: company || undefined,
              country: country || undefined,
              researchInterest: researchInterest || undefined,
              timeline: timeline || undefined,
              budget: budget || undefined,
              referralSource: referralSource || undefined,
              language,
              source: 'contact_form',
              sourcePage: currentPath,
              sourceUrl: currentUrl,
              utmSource: utmSource || undefined,
              utmMedium: utmMedium || undefined,
              utmCampaign: utmCampaign || undefined,
              utmContent: utmContent || undefined,
              utmTerm: utmTerm || undefined,
            }),
          });
        } catch {
          // Silently ignore - Formspree submission is the primary action
        }
      } else {
        const json = await res.json().catch(() => ({}));
        const errorMsg = json.error || v('error');
        setSubmitError(errorMsg);
        sendErrorEmail(errorFields, errorMsg);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : v('error');
      setSubmitError(v('error'));
      sendErrorEmail(errorFields, `Network/client error: ${errorMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (embedOnHomePage) {
    const ch = t.contactHomeEmbed;
    const contactPageHref = localizedContactPath(language);
    return (
      <section id="contact" className="section-padding bg-background border-t border-border" ref={sectionRef}>
        <div className={`container-wide max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">{ch.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{ch.body}</p>
          <p className="text-sm text-muted-foreground mb-8">
            <a href="mailto:admin@bionixus.com" className="text-primary font-medium hover:underline">
              {ch.emailLine}
            </a>
          </p>
          <Link
            to={contactPageHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity group"
          >
            {ch.cta}
            <ArrowRight
              className={`w-5 h-5 transition-transform ${isRTL ? 'rtl:scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
            />
          </Link>
        </div>
      </section>
    );
  }

  const sectionBg = premiumLayout ? 'bg-[#FAFAF8]' : 'bg-background';
  const formCardClass = premiumLayout
    ? 'relative bg-white p-8 lg:p-10 rounded-2xl shadow-[0_24px_64px_-20px_rgba(16,28,48,0.14)] border border-border/60 scroll-mt-28 overflow-hidden'
    : 'bg-card p-8 lg:p-10 rounded-2xl shadow-elegant border border-border scroll-mt-24';
  const inputClass = premiumLayout
    ? 'w-full px-4 py-3 rounded-lg border bg-[#FAFAF8] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/25 focus:border-[#C9A84C]/50 transition-colors'
    : 'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors';
  const submitBtnClass = premiumLayout
    ? 'w-full py-4 rounded-lg font-semibold text-[#06101F] bg-gradient-to-r from-[#C9A84C] to-[#B8862D] shadow-[0_8px_28px_-8px_rgba(201,168,76,0.4)] hover:brightness-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed'
    : 'w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed';

  return (
    <section id="contact" className={`section-padding ${sectionBg}`} ref={sectionRef}>
      <div className="container-wide max-w-6xl mx-auto">
        {premiumLayout ? (
          <div className={`mb-10 max-w-2xl ${isRTL ? 'mr-auto text-right' : ''}`}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70 mb-3">Get in touch</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{t.contact.formTitle}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t.contact.subtitle}</p>
          </div>
        ) : null}

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${premiumLayout ? 'items-start' : 'items-center'}`}>
          {/* Left Content */}
          <div className={`sr sr-left ${premiumLayout ? 'space-y-6' : ''}`}>
            {!premiumLayout ? (
              <>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
                  {t.contact.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {t.contact.subtitle}
                </p>
              </>
            ) : null}

            {premiumLayout ? (
              <div className="grid sm:grid-cols-2 gap-4">
                <article className="rounded-xl border border-border/70 bg-white p-5 shadow-[0_12px_40px_-16px_rgba(16,28,48,0.1)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#06101F]/5">
                    <Mail className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t.contact.emailLabel}</div>
                  <a href="mailto:admin@bionixus.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {t.contact.email}
                  </a>
                </article>
                <article className="rounded-xl border border-border/70 bg-white p-5 shadow-[0_12px_40px_-16px_rgba(16,28,48,0.1)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#06101F]/5">
                    <Phone className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{t.contact.phoneLabel}</div>
                  <div className="flex flex-col gap-1">
                    {phoneLines.map((line) => (
                      <a key={line.tel} href={`tel:${line.tel}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {line.label}
                      </a>
                    ))}
                  </div>
                </article>
                <article className="sm:col-span-2 rounded-xl border border-border/70 bg-white p-5 shadow-[0_12px_40px_-16px_rgba(16,28,48,0.1)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#06101F]/5">
                    <MapPin className="h-4 w-4 text-[#C9A84C]" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Regional offices · 38-country coverage
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {OFFICE_LOCATIONS.map((office) => (
                      <div key={office.city} className="flex items-baseline justify-between gap-2 text-sm">
                        <span className="font-medium text-foreground">{office.city}</span>
                        <span className="text-xs text-muted-foreground shrink-0">{office.role}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            ) : (
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.contact.emailLabel}</div>
                    <a href="mailto:admin@bionixus.com" className="text-foreground font-medium hover:text-primary transition-colors">
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.contact.headquartersLabel}</div>
                    <div className="text-foreground font-medium">{t.contact.headquarters}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Regional offices · 38-country coverage</div>
                    <div className="text-foreground font-medium mt-1">
                      Sheridan, WY (global HQ)<br />
                      London, UK<br />
                      Dubai, UAE<br />
                      Riyadh &amp; Jeddah, Saudi Arabia<br />
                      Kuwait City, Kuwait<br />
                      Cairo, Egypt
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.contact.phoneLabel}</div>
                    <div className="flex flex-col gap-1">
                      {phoneLines.map((line) => (
                        <a
                          key={line.tel}
                          href={`tel:${line.tel}`}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {line.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <GlobalCoverage38Map variant="sidebar" premium={premiumLayout} className={premiumLayout ? 'mt-2' : ''} />

            {!premiumLayout ? (
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity group"
                >
                  {t.contact.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                {(t.contact as { ctaSecondary?: string }).ctaSecondary && (
                  <Link
                    to={basePath === '/' ? '/#services' : `${basePath}#services`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold border border-border hover:bg-secondary/80 transition-colors group"
                  >
                    {(t.contact as { ctaSecondary: string }).ctaSecondary}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            ) : null}
          </div>

          {/* Right - Contact Form Card or Success Message */}
          <div id="request-proposal" className={`${formCardClass} sr sr-right`}>
            {premiumLayout ? (
              <div className="pointer-events-none absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" aria-hidden />
            ) : null}
            {submitted ? (
              <div className="success-message text-center" lang={language}>
                <div className="success-icon w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">
                  ✓
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {t.contact.successTitle}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t.contact.successBody}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.successFollowUpIntro}
                  <Link to="/case-studies" className="text-primary font-medium hover:underline">
                    {t.contact.successCaseStudiesText}
                  </Link>
                  {c.successFollowUpBetween}
                  <Link to={`${basePath === '/' ? '' : basePath}/methodology`} className="text-primary font-medium hover:underline">
                    {t.contact.successMethodologyText}
                  </Link>
                  {c.successFollowUpEnd}
                </p>
              </div>
            ) : (
              <>
                {!premiumLayout ? (
                  <h3 className="text-xl font-semibold text-foreground mb-6">{t.contact.formTitle}</h3>
                ) : null}
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Name */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.firstName} <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.firstName)}
                        className={`${inputClass} ${errors.firstName ? 'border-destructive' : 'border-input'}`}
                        placeholder={place('firstNamePlaceholder', 'John')}
                      />
                      {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.lastName} <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.lastName)}
                        className={`${inputClass} ${errors.lastName ? 'border-destructive' : 'border-input'}`}
                        placeholder={place('lastNamePlaceholder', 'Smith')}
                      />
                      {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.workEmail} <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      aria-invalid={Boolean(errors.workEmail)}
                      className={`${inputClass} ${errors.workEmail ? 'border-destructive' : 'border-input'}`}
                      placeholder={place('workEmailPlaceholder', 'john@company.com')}
                    />
                    {errors.workEmail && <p className="text-sm text-destructive mt-1">{errors.workEmail}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.company} <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      aria-invalid={Boolean(errors.company)}
                      className={`${inputClass} ${errors.company ? 'border-destructive' : 'border-input'}`}
                      placeholder={place('companyPlaceholder', 'Your Company')}
                    />
                    {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
                  </div>

                  {/* Country & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                        {place('countryLabel', 'Country / Region')} <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        aria-invalid={Boolean(errors.country)}
                        className={`${inputClass} ${errors.country ? 'border-destructive' : 'border-input'}`}
                        defaultValue=""
                      >
                        <option value="" disabled>{place('selectCountry', 'Select country…')}</option>
                        {CONTACT_FORM_COUNTRIES.map((countryName) => (
                          <option key={countryName} value={countryName}>{countryName}</option>
                        ))}
                      </select>
                      {errors.country && <p className="text-sm text-destructive mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        aria-invalid={Boolean(errors.phone)}
                        className={`${inputClass} ${errors.phone ? 'border-destructive' : 'border-input'}`}
                        placeholder="+44 7700 900000"
                      />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Research Interest — multi-select checkboxes */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-foreground mb-3">
                      Research Interest
                    </legend>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {RESEARCH_INTERESTS.map((interest) => (
                        <label key={interest} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            name="researchInterest"
                            value={interest}
                            className="h-4 w-4 rounded border-input text-primary focus:ring-primary/20"
                          />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Timeline & Budget */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className={`${inputClass} border-input`}
                        defaultValue=""
                      >
                        <option value="">Select timeline…</option>
                        {TIMELINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Indicative Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className={`${inputClass} border-input`}
                        defaultValue=""
                      >
                        <option value="">Select budget…</option>
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-foreground mb-2">
                      How did you hear about us? <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      required
                      aria-invalid={Boolean(errors.referralSource)}
                      className={`${inputClass} ${errors.referralSource ? 'border-destructive' : 'border-input'}`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select…</option>
                      {REFERRAL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.referralSource && (
                      <p className="text-sm text-destructive mt-1">{errors.referralSource}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.message} <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-invalid={Boolean(errors.message)}
                      className={`${inputClass} resize-none ${errors.message ? 'border-destructive' : 'border-input'}`}
                      placeholder={place('messagePlaceholder', 'Tell us about your research needs...')}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        value="yes"
                        aria-invalid={Boolean(errors.consent)}
                        className="h-4 w-4 mt-0.5 rounded border-input text-primary focus:ring-primary/20 shrink-0"
                      />
                      <span className="text-sm text-muted-foreground leading-snug">
                        I agree to BioNixus processing my information per the{' '}
                        <Link to="/privacy" className="text-primary font-medium hover:underline">
                          Privacy Policy
                        </Link>
                        . <span className="text-destructive">*</span>
                      </span>
                    </label>
                    {errors.consent && <p className="text-sm text-destructive mt-1">{errors.consent}</p>}
                  </div>

                  {submitError && (
                    <p className="text-sm text-destructive">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className={submitBtnClass}
                  >
                    {submitting ? '...' : t.contact.submitButton}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
