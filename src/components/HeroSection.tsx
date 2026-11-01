import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { PremiumHeroDashboard } from '@/components/home/PremiumHeroDashboard';
import { PremiumHeroOrbitals } from '@/components/home/PremiumHeroOrbitals';
import { HeroParticles } from '@/components/home/HeroParticles';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t, language, isRTL } = useLanguage();
  const hero = t.hero as typeof t.hero & {
    titleLead?: string;
    titleEmphasis?: string;
    ctaPremium?: string;
  };
  const basePath = languagePaths[language] || '/';
  const contactPath =
    language === 'fr' ? '/fr/contact' : language === 'ar' ? '/ar/contact' : `${basePath === '/' ? '' : basePath}/contact`;

  return (
    <section
      data-hero-lcp
      className={`relative flex min-h-screen items-center overflow-hidden bg-background ${language === 'ar' ? 'hero-arabic' : ''} ${language === 'de' ? 'hero-german' : ''} ${language === 'fr' ? 'hero-french' : ''} ${language === 'es' ? 'hero-spanish' : ''} ${language === 'zh' ? 'hero-chinese' : ''}`}
      dir={isRTL ? 'rtl' : undefined}
      lang={language}
    >
      <div className="premium-hero-lcp-wash absolute inset-0" aria-hidden="true" />

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

      <HeroParticles />

      <PremiumHeroOrbitals />

      <div className="relative z-10 container-wide mx-auto w-full max-w-[1320px] pb-20 pt-32 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div className="max-w-[640px] premium-fade-up">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-teal-glow/70 to-primary" aria-hidden="true" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-ink-2">
                {hero.tagline}
              </span>
            </div>

            <h1 className="sr-lcp mb-8 font-display text-[clamp(2.6rem,5.4vw,5.1rem)] font-bold leading-[0.98] tracking-[-0.03em] text-foreground text-balance">
              {hero.titleLead && hero.titleEmphasis ? (
                <>
                  {hero.titleLead}{' '}
                  <em>
                    {hero.titleEmphasis}
                  </em>
                </>
              ) : (
                hero.title
              )}
            </h1>

            <p className="mb-11 max-w-[560px] text-[1.08rem] leading-[1.75] text-muted-foreground md:text-[1.15rem]">
              {hero.subtitle}
            </p>

            <PremiumHeroDashboard className="premium-scale-in mb-10 lg:hidden" />

            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to={contactPath}
                className="premium-gold-btn group px-8 py-[1.05rem] text-[0.95rem]"
              >
                {hero.ctaPremium ?? hero.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100" aria-hidden="true" />
              </Link>
              <Link
                to="#methodology"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-2 px-7 py-[1.05rem] text-[0.95rem] font-semibold text-foreground transition-colors hover:border-ink-3 hover:bg-white/[0.04]"
              >
                <span aria-hidden="true">◈</span>
                {hero.ctaSecondary}
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {t.ui.brands.initials.map((initials, i) => (
                  <span
                    key={initials}
                    className={`flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-background text-[11px] font-semibold text-white ${
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
              <p className="text-[13px] leading-snug text-ink-3">
                {t.homePage.heroTrust.primary}{' '}
                <strong className="font-medium text-ink-2">{t.homePage.heroTrust.stats}</strong>
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
