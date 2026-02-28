import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type ContactValidation = {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  company?: string;
  message?: string;
  privacy?: string;
  emailFormat?: string;
  success?: string;
  error?: string;
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';
const ERROR_EMAIL = 'digital@bionixus.uk';

function sendErrorEmail(
  firstName: string,
  lastName: string,
  workEmail: string,
  company: string,
  phone: string,
  message: string,
  errorDetails: string
) {
  const subject = encodeURIComponent('Meeting With BioNixus Team');
  const body = encodeURIComponent(
    `I'd like to schedule a meeting with BioNixus team to discuss more about BioNixus Market Research Services.\n\n` +
    `--- FORM DATA ---\n` +
    `First Name: ${firstName}\n` +
    `Last Name: ${lastName}\n` +
    `Email: ${workEmail}\n` +
    `Company: ${company}\n` +
    (phone ? `Phone: ${phone}\n` : '') +
    `\nMessage:\n${message}\n\n` +
    `--- NOTE ---\nThe online form encountered an error (${errorDetails}). Please process this inquiry manually.`
  );
  window.location.href = `mailto:${ERROR_EMAIL}?subject=${subject}&body=${body}`;
}

const ContactSection = () => {
  const { t, language } = useLanguage();
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
  const hasPhoneField = Boolean(c.phoneFieldLabel);
  const hasPrivacyNote = Boolean(c.privacyNote);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!(data.get('firstName') as string)?.trim()) next.firstName = v('firstName');
    if (!(data.get('lastName') as string)?.trim()) next.lastName = v('lastName');
    if (!(data.get('workEmail') as string)?.trim()) next.workEmail = v('workEmail');
    if (!(data.get('company') as string)?.trim()) next.company = v('company');
    if (!(data.get('message') as string)?.trim()) next.message = v('message');
    setErrors(next);
    setSubmitError(null);
    if (Object.keys(next).length > 0) return;

    const firstName = (data.get('firstName') as string)?.trim() || '';
    const lastName = (data.get('lastName') as string)?.trim() || '';
    const workEmail = (data.get('workEmail') as string)?.trim() || '';
    const company = (data.get('company') as string)?.trim() || '';
    const phone = (data.get('phone') as string)?.trim() || '';
    const message = (data.get('message') as string)?.trim() || '';
    data.set('_subject', `New Form Submission - ${firstName} ${lastName}`);

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        // Also save to Sanity as a subscriber (fire-and-forget, don't block success)
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
              language,
              source: 'contact_form',
            }),
          });
        } catch {
          // Silently ignore - Formspree submission is the primary action
        }
      } else {
        const json = await res.json().catch(() => ({}));
        const errorMsg = json.error || v('error');
        setSubmitError(errorMsg);
        sendErrorEmail(firstName, lastName, workEmail, company, phone, message, errorMsg);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : v('error');
      setSubmitError(v('error'));
      sendErrorEmail(firstName, lastName, workEmail, company, phone, message, `Network/client error: ${errorMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={sectionRef}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="sr sr-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t.contact.subtitle}
            </p>

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
                  <div className="text-sm text-muted-foreground">Regional Representation</div>
                  <div className="text-foreground font-medium mt-1">
                    Dubai, UAE<br />
                    Jeddah, Saudi Arabia<br />
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
                    <a href="tel:+18884655557" className="text-foreground font-medium hover:text-primary transition-colors">
                      +1 888 465 5557 <span className="text-muted-foreground text-sm font-normal">(US)</span>
                    </a>
                    <a href="tel:+447727666682" className="text-foreground font-medium hover:text-primary transition-colors">
                      +44 7727 666682 <span className="text-muted-foreground text-sm font-normal">(UK)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
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
          </div>

          {/* Right - Contact Form Card or Success Message */}
          <div id="request-proposal" className="bg-card p-8 lg:p-10 rounded-2xl shadow-elegant border border-border sr sr-right scroll-mt-24">
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
                <h3 className="text-xl font-semibold text-foreground mb-6">{t.contact.formTitle}</h3>
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.firstName}
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.firstName)}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.firstName ? 'border-destructive' : 'border-input'}`}
                        placeholder={place('firstNamePlaceholder', 'John')}
                      />
                      {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.lastName}
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.lastName)}
                        className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.lastName ? 'border-destructive' : 'border-input'}`}
                        placeholder={place('lastNamePlaceholder', 'Smith')}
                      />
                      {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.workEmail}
                    </label>
                    <input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      required
                      aria-invalid={Boolean(errors.workEmail)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.workEmail ? 'border-destructive' : 'border-input'}`}
                      placeholder={place('workEmailPlaceholder', 'john@company.com')}
                    />
                    {errors.workEmail && <p className="text-sm text-destructive mt-1">{errors.workEmail}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.company}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      aria-invalid={Boolean(errors.company)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${errors.company ? 'border-destructive' : 'border-input'}`}
                      placeholder={place('companyPlaceholder', 'Your Company')}
                    />
                    {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
                  </div>

                  {hasPhoneField && (
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {c.phoneFieldLabel}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder={place('phonePlaceholder', '')}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-input'}`}
                      placeholder={place('messagePlaceholder', 'Tell us about your research needs...')}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  {hasPrivacyNote && (
                    <p className="text-sm text-muted-foreground">
                      {c.privacyNote}
                    </p>
                  )}

                  {submitError && (
                    <p className="text-sm text-destructive">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
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
