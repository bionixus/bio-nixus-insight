/**
 * HeroV2 — redesigned hero for the staging home page.
 *
 * Same copy and CTAs as the live HeroSection (driven by t.hero.*), but with a
 * live WebGL "analytics constellation" behind the content (SSR-safe via
 * ClientOnly3D) and a layered, glassmorphic treatment for added depth.
 */
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import ClientOnly3D from '@/components/three/ClientOnly3D';

const HeroV2 = () => {
  const { t, language, isRTL } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const contactPath =
    language === 'fr'
      ? '/fr/contacts'
      : language === 'ar'
        ? '/ar/contacts'
        : `${basePath === '/' ? '' : basePath}/contact`;

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep"
      dir={isRTL ? 'rtl' : undefined}
      lang={language}
    >
      {/* Live 3D background (falls back to a static poster on SSR / low-power) */}
      <ClientOnly3D />

      {/* Readability scrim over the canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy-deep/70 to-navy-medium/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pb-20 pt-32">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold-warm" />
            <span className="text-sm font-medium tracking-wide text-white/90">{t.hero.tagline}</span>
          </div>

          <h1 className="animation-delay-200 mb-4 animate-fade-up text-balance font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}
          </h1>

          <p className="animation-delay-300 mb-6 max-w-3xl animate-fade-up font-display text-xl font-medium leading-tight text-white/90 md:text-2xl">
            {t.hero.subtitle}
          </p>

          <p className="animation-delay-400 mb-8 max-w-3xl animate-fade-up text-base leading-relaxed text-white/70 md:text-lg">
            {t.hero.valueProposition}
          </p>

          <div className="animation-delay-500 mb-10 flex flex-wrap gap-3 animate-fade-up">
            {t.hero.serviceHighlights.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>

          <ul
            className="animation-delay-600 mb-10 grid grid-cols-1 gap-4 animate-fade-up sm:grid-cols-3"
            aria-label="Company credentials"
          >
            {[
              { value: '127+', label: 'Projects delivered' },
              { value: '48', label: 'Global clients' },
              { value: '17+', label: 'Countries covered' },
            ].map((metric) => (
              <li
                key={metric.label}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-center shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform hover:-translate-y-1"
              >
                <p className="font-display text-2xl font-semibold text-white md:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm text-white/75">{metric.label}</p>
              </li>
            ))}
          </ul>

          <div className="animation-delay-600 flex flex-col gap-4 animate-fade-up sm:flex-row">
            <Link
              to={contactPath}
              className="shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-gold-warm px-8 py-4 font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              {t.hero.cta}
              <ArrowRight
                className={`h-5 w-5 transition-transform ${isRTL ? 'rtl:scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
              />
            </Link>
            <Link
              to="/case-studies"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Play className="h-5 w-5" />
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className="animation-delay-700 mt-16 animate-fade-up border-t border-white/20 pt-10">
            <p className="mb-4 text-sm text-white/70">
              {t.hero.trustBar} <strong className="text-white/90">{t.hero.trustCountries}</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              {t.hero.complianceBadges.map((badge, i) => (
                <span key={i} className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroV2;
