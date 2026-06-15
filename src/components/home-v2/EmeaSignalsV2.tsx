/**
 * EmeaSignalsV2 — depth-redesigned trust-signals strip for the staging home.
 *
 * Same content/i18n heading as the live EmeaSignalsSection, restyled with the
 * premium depth language: gradient icon tiles, layered shadows, glassmorphic
 * cards, gold accent, and scroll-reveal. Reference implementation of the depth
 * treatment applied to a real section.
 */
import { Globe2, Stethoscope, Building2, ShieldCheck, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SIGNALS: { icon: LucideIcon; text: string }[] = [
  { icon: Globe2, text: 'Europe and Middle East coverage' },
  { icon: Stethoscope, text: 'Healthcare market research for pharmaceutical decisions' },
  { icon: Building2, text: 'Physician, payer, and hospital intelligence' },
  { icon: ShieldCheck, text: 'GDPR / EMA / MOH / SFDA aligned' },
];

const EmeaSignalsV2 = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 90 });

  return (
    <section
      className="section-padding relative -mt-px overflow-hidden border-b border-border bg-gradient-to-b from-cream-dark to-background py-12"
      aria-labelledby="home-emea-signals-heading-v2"
      ref={sectionRef}
    >
      <div className="container-wide mx-auto max-w-6xl">
        <h2
          id="home-emea-signals-heading-v2"
          className="sr sr-up mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm"
        >
          {t.indexLanding.emeaSignalsH2}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNALS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="sr sr-scale-up sr-spring group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card/80 p-6 text-center shadow-[0_18px_44px_-28px_rgba(15,25,45,0.5)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* gold accent glow on hover */}
              <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gold-warm/0 blur-2xl transition-colors duration-300 group-hover:bg-gold-warm/20" />
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-navy-medium shadow-md"
                aria-hidden
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <p className="relative text-sm font-medium leading-snug text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmeaSignalsV2;
