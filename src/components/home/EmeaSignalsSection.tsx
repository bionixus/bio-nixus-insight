import { Globe2, Stethoscope, Building2, ShieldCheck, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SIGNALS_EN: { icon: LucideIcon; text: string }[] = [
  { icon: Globe2, text: 'Europe and Middle East coverage' },
  { icon: Stethoscope, text: 'Healthcare market research for pharmaceutical decisions' },
  { icon: Building2, text: 'Physician, payer, and hospital intelligence' },
  { icon: ShieldCheck, text: 'GDPR / EMA / MOH / SFDA aligned' },
];

const EmeaSignalsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });

  return (
    <section
      className="section-padding py-8 bg-cream-dark border-b border-border"
      aria-labelledby="home-emea-signals-heading"
      ref={sectionRef}
    >
      <div className="container-wide max-w-6xl mx-auto">
        <h2
          id="home-emea-signals-heading"
          className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-6 sr sr-up"
        >
          {t.indexLanding.emeaSignalsH2}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SIGNALS_EN.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-card p-5 sr sr-scale-up sr-spring hover-lift cursor-default"
            >
              <div
                className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center"
                aria-hidden
              >
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground font-medium leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmeaSignalsSection;
