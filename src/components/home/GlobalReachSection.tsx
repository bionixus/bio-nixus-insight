import { Globe2, Stethoscope, Building2, ShieldCheck, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
const SIGNAL_ICONS: LucideIcon[] = [Globe2, Stethoscope, Building2, ShieldCheck];

const ICON_WELLS = [
  'bg-[#EBF4FF] text-[#2563EB]',
  'bg-[#E6FAF8] text-[#0EA5A0]',
  'bg-[#FFF0ED] text-[#E06852]',
  'bg-[#FDF6E3] text-[#C9A84C]',
] as const;

const GlobalReachSection = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const signals = t.homePage.globalReach.signals;

  return (
    <section
      className="premium-home-cream section-padding py-16 md:py-20 border-b border-[#EDE9E3]"
      aria-labelledby="home-global-reach-heading"
      ref={sectionRef}
    >
      <div className="container-wide max-w-6xl mx-auto">
        <div className="mb-12 text-center sr sr-up">
          <span className="mx-auto mb-5 block h-px w-10 bg-[#C9A84C]/40" aria-hidden="true" />
          <h2
            id="home-global-reach-heading"
            className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#0C1B33]"
          >
            {t.indexLanding.emeaSignalsH2}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {signals.map((text, index) => {
            const Icon = SIGNAL_ICONS[index];
            const well = ICON_WELLS[index] ?? ICON_WELLS[0];
            return (
              <div
                key={text}
                className="premium-card flex flex-col items-center text-center gap-4 sr sr-scale-up sr-spring"
              >
                <span className="font-display text-sm font-medium tracking-[0.18em] text-[#C9A84C]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${well}`}
                  aria-hidden
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium leading-snug text-[#3D3830]">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
