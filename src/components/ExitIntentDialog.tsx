/**
 * ExitIntentDialog — premium lead-capture popup shown when a visitor is about
 * to leave. Collects First name, Work email, and Company and submits to the
 * existing /api/subscribe endpoint (→ Sanity subscriber + Resend welcome
 * email), mirroring NewsletterSignup. Coordinated with the cookie/locale
 * prompts via useExitIntent so it never stacks on another dialog.
 */
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import AudienceMosaic from '@/components/visuals/AudienceMosaic';
import { useLanguage } from '@/contexts/LanguageContext';
import { hasAnalyticsConsent } from '@/lib/consent';
import { useExitIntent } from '@/hooks/useExitIntent';

function trackEvent(event: string) {
  if (typeof window === 'undefined') return;
  if (!hasAnalyticsConsent()) return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (gtag) gtag('event', event, { event_category: 'engagement', page_path: window.location.pathname });
}

const COPY = {
  en: {
    eyebrow: 'Before you go',
    title: 'Stay close to the market',
    body: 'Join pharma and consumer leaders who receive BioNixus market intelligence, launch insights, and country briefings — straight from our research team.',
    first: 'First name',
    email: 'Work email',
    company: 'Company',
    consent: 'I agree to receive occasional market-research updates from BioNixus. Unsubscribe anytime.',
    submit: 'Keep me informed',
    submitting: 'Submitting…',
    successTitle: "You're on the list",
    successBody: 'Check your inbox to confirm your email — your first BioNixus briefing is on its way.',
    error: 'Something went wrong. Please try again.',
    dismiss: 'No thanks',
  },
  ar: {
    eyebrow: 'قبل أن تغادر',
    title: 'ابقَ قريبًا من السوق',
    body: 'انضم إلى قادة الأدوية والمستهلكين الذين يتلقون تحليلات سوق BioNixus ورؤى الإطلاق والملخصات القُطرية — مباشرة من فريق أبحاثنا.',
    first: 'الاسم الأول',
    email: 'البريد الإلكتروني للعمل',
    company: 'الشركة',
    consent: 'أوافق على تلقي تحديثات أبحاث السوق من BioNixus. يمكنك إلغاء الاشتراك في أي وقت.',
    submit: 'أبقِني على اطلاع',
    submitting: 'جارٍ الإرسال…',
    successTitle: 'تمت إضافتك إلى القائمة',
    successBody: 'تحقق من بريدك لتأكيد اشتراكك — أول ملخص من BioNixus في طريقه إليك.',
    error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    dismiss: 'لا، شكرًا',
  },
} as const;

export default function ExitIntentDialog() {
  const { language, isRTL } = useLanguage();
  const c = COPY[language === 'ar' ? 'ar' : 'en'];
  const { triggered, dismiss, markSubscribed } = useExitIntent();

  const [form, setForm] = useState({ firstName: '', email: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (triggered) trackEvent('exit_intent_popup_shown');
  }, [triggered]);

  const onOpenChange = (open: boolean) => {
    if (!open) dismiss(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const url = typeof window !== 'undefined' ? window.location.href : '';
      const params = url ? new URL(url).searchParams : new URLSearchParams();
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.email,
          company: form.company,
          language,
          source: 'exit_intent_popup',
          formVariant: 'exit_intent_dialog',
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : undefined,
          sourceUrl: url || undefined,
          utmSource: params.get('utm_source') || undefined,
          utmMedium: params.get('utm_medium') || undefined,
          utmCampaign: params.get('utm_campaign') || undefined,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        markSubscribed();
        trackEvent('exit_intent_popup_submit');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Dialog open={triggered} onOpenChange={onOpenChange}>
      <DialogContent
        dir={isRTL ? 'rtl' : undefined}
        className="overflow-hidden border-white/10 bg-navy-deep p-0 text-white sm:max-w-md"
      >
        {/* Gold accent header band */}
        <div className="relative bg-gradient-to-br from-navy-medium to-navy-deep px-6 pt-7">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold-warm/15 blur-3xl" />
          <p className="relative mb-3 text-xs font-semibold uppercase tracking-widest text-gold-warm">
            {c.eyebrow}
          </p>
          {status === 'success' ? (
            <DialogTitle className="relative font-display text-2xl font-semibold text-white">
              {c.successTitle}
            </DialogTitle>
          ) : (
            <DialogTitle className="relative font-display text-2xl font-semibold text-white">
              {c.title}
            </DialogTitle>
          )}
          <div className="relative mt-4 flex justify-center">
            <AudienceMosaic variant="compact" avatarSize={56} />
          </div>
        </div>

        <div className="px-6 pb-6 pt-5">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="mb-3 h-12 w-12 text-gold-warm" />
              <DialogDescription className="text-sm text-white/80">{c.successBody}</DialogDescription>
            </div>
          ) : (
            <>
              <DialogDescription className="mb-5 text-sm text-white/75">{c.body}</DialogDescription>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder={c.first}
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-gold-warm focus:outline-none focus:ring-1 focus:ring-gold-warm"
                />
                <input
                  type="email"
                  required
                  placeholder={c.email}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-gold-warm focus:outline-none focus:ring-1 focus:ring-gold-warm"
                />
                <input
                  type="text"
                  placeholder={c.company}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-gold-warm focus:outline-none focus:ring-1 focus:ring-gold-warm"
                />
                <p className="text-[11px] leading-relaxed text-white/50">{c.consent}</p>
                {status === 'error' ? (
                  <p className="text-sm text-red-300">{c.error}</p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="shimmer group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-warm px-6 py-3 font-semibold text-navy-deep transition-colors hover:bg-gold-light disabled:opacity-70"
                >
                  {status === 'loading' ? c.submitting : c.submit}
                  {status !== 'loading' ? (
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${isRTL ? 'rtl:scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    />
                  ) : null}
                </button>
                <button
                  type="button"
                  onClick={() => dismiss(true)}
                  className="w-full text-center text-xs text-white/50 transition-colors hover:text-white/80"
                >
                  {c.dismiss}
                </button>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
