import { useLanguage } from '@/contexts/LanguageContext';

export function PremiumComplianceRibbon() {
  const { t } = useLanguage();
  const badges = t.homePage.compliance.badges;

  return (
    <div className="relative z-10 border-y border-line bg-night-2/80 py-5 backdrop-blur">
      <div className="container-wide grid grid-cols-1 gap-x-8 gap-y-3 px-4 sm:grid-cols-2 xl:flex xl:items-start xl:justify-between">
        {badges.map((item) => (
          <span
            key={item}
            className="inline-flex items-start gap-2 text-[11px] leading-snug tracking-wide text-ink-2 md:text-xs"
          >
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
              ◆
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
