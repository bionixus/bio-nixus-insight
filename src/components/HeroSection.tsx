import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { PremiumHeroDashboard } from '@/components/home/PremiumHeroDashboard';
import { PremiumHeroOrbitals } from '@/components/home/PremiumHeroOrbitals';

const HeroSection = () => {
  const { t, language, isRTL } = useLanguage();
  const hero = t.hero as typeof t.hero & {
    titleLead?: string;
    titleEmphasis?: string;
    ctaPremium?: string;
  };
  const basePath = languagePaths[language] || '/';
  const contactPath =
    language === 'fr' ? '/fr/contacts' : language === 'ar' ? '/ar/contacts' : `${basePath === '/' ? '' : basePath}/contact`;

  return (
    <section
      data-hero-lcp
      className={`relative flex min-h-screen items-center overflow-hidden bg-[#06101F] ${language === 'ar' ? 'hero-arabic' : ''} ${language === 'de' ? 'hero-german' : ''} ${language === 'fr' ? 'hero-french' : ''} ${language === 'es' ? 'hero-spanish' : ''} ${language === 'zh' ? 'hero-chinese' : ''}`}
      dir={isRTL ? 'rtl' : undefined}
      lang={language}
    >
      {/* Premium background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 65% 45%, rgba(12,27,51,1) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 20% 80%, rgba(14,165,160,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 35% 30% at 85% 15%, rgba(201,168,76,0.06) 0%, transparent 40%),
            linear-gradient(180deg, #06101F 0%, #081628 100%)
          `,
        }}
      />

      {/* Hex molecule grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]" aria-hidden="true">
        <svg viewBox="0 0 1440 900" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="heroHexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
              <path
                d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroHexGrid)" />
        </svg>
      </div>

      <PremiumHeroOrbitals />

      <div className="relative z-10 container-wide mx-auto w-full max-w-[1260px] px-6 pb-20 pt-32 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-[500px] premium-fade-up">
            <div className="mb-8 inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#C9A84C]/40" aria-hidden="true" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                {hero.tagline}
              </span>
            </div>

            <h1 className="sr-lcp mb-7 font-display text-[clamp(2.8rem,4.5vw,4.2rem)] font-light leading-[1.12] tracking-tight text-[#FFFEFB] text-balance">
              {hero.titleLead && hero.titleEmphasis ? (
                <>
                  {hero.titleLead}{' '}
                  <em className="font-medium not-italic text-transparent bg-clip-text bg-gradient-to-br from-[#C9A84C] to-[#E4CC7A]">
                    {hero.titleEmphasis}
                  </em>
                </>
              ) : (
                hero.title
              )}
            </h1>

            <p className="mb-11 max-w-[500px] text-[17px] font-light leading-[1.8] text-white/45">
              {hero.subtitle}
            </p>

            <PremiumHeroDashboard className="premium-scale-in mb-10 lg:hidden" />

            <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                to={contactPath}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#B8933E] px-9 py-[17px] text-sm font-semibold tracking-wide text-[#06101F] shadow-[0_4px_20px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)]"
              >
                {hero.ctaPremium ?? hero.cta}
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-[17px] text-sm font-normal tracking-wide text-white/55 transition-colors hover:border-white/25 hover:text-white"
              >
                <span aria-hidden="true">◈</span>
                {hero.ctaSecondary}
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {['PF', 'RO', 'NV', 'AZ'].map((initials, i) => (
                  <span
                    key={initials}
                    className={`flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-[#06101F] text-[11px] font-semibold text-white ${
                      i === 0
                        ? 'bg-gradient-to-br from-blue-600 to-blue-800'
                        : i === 1
                          ? 'bg-gradient-to-br from-[#0EA5A0] to-[#0B8A86]'
                          : i === 2
                            ? 'bg-gradient-to-br from-[#E06852] to-[#C85640]'
                            : 'bg-gradient-to-br from-[#C9A84C] to-[#A8872E]'
                    }`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-[13px] font-light leading-snug text-white/35">
                {t.homePage.heroTrust.primary}{' '}
                <strong className="font-medium text-white/70">{t.homePage.heroTrust.stats}</strong>
              </p>
            </div>
          </div>

          <div className="premium-scale-in hidden min-w-0 lg:block">
            <PremiumHeroDashboard />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
