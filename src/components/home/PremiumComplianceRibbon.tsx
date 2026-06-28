import { useLanguage } from '@/contexts/LanguageContext';

export function PremiumComplianceRibbon() {
  const { t } = useLanguage();
  const badges = t.homePage.compliance.badges;

  return (
    <div className="relative z-10 border-y border-white/5 bg-[#0C1B33] py-5">
      <div className="container-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4">
        {badges.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 text-xs tracking-wide text-white/35"
          >
            <span className="text-[#C9A84C]/70" aria-hidden="true">
              ◆
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
