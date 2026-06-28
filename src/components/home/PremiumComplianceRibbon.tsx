import { useLanguage } from '@/contexts/LanguageContext';

export function PremiumComplianceRibbon() {
  const { t } = useLanguage();
  const badges = t.homePage.compliance.badges;

  return (
    <div className="relative z-10 border-y border-white/5 bg-[#0C1B33] py-5">
      <div className="container-wide grid grid-cols-1 gap-x-8 gap-y-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((item) => (
          <span
            key={item}
            className="inline-flex items-start gap-2 text-[11px] leading-snug tracking-wide text-white/40 md:text-xs"
          >
            <span className="mt-0.5 shrink-0 text-[#C9A84C]/70" aria-hidden="true">
              ◆
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
