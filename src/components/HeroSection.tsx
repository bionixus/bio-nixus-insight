import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${language === 'ar' ? 'hero-arabic' : ''}`}
      dir={isRTL ? 'rtl' : undefined}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-medium to-primary" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide section-padding pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-gold-warm animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {t.hero.tagline}
            </span>
          </div>

          {/* Main Title (H1) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-white leading-tight mb-4 animate-fade-up animation-delay-200 text-balance">
            {t.hero.title}
          </h1>

          {/* Subtitle (H2) */}
          <h2 className="text-xl md:text-2xl font-display font-medium text-white/90 max-w-3xl leading-tight mb-6 animate-fade-up animation-delay-300">
            {t.hero.subtitle}
          </h2>

          {/* Value Proposition */}
          <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed mb-8 animate-fade-up animation-delay-400">
            {t.hero.valueProposition}
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up animation-delay-500">
            {t.hero.serviceHighlights.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-warm text-navy-deep rounded-lg font-semibold hover:bg-gold-light transition-colors group"
            >
              {t.hero.cta}
              <ArrowRight className={`w-5 h-5 transition-transform ${isRTL ? 'rtl:scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
            <a
              href="#insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors group"
            >
              <Play className="w-5 h-5" />
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Trust Bar */}
          <div className="mt-16 pt-10 border-t border-white/20 animate-fade-up animation-delay-700">
            <p className="text-white/70 text-sm mb-4">
              {t.hero.trustBar} <strong className="text-white/90">{t.hero.trustCountries}</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              {t.hero.complianceBadges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-white/10 text-white/90 text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block">
          <div className="absolute top-0 right-20 w-72 h-72 rounded-full bg-gold-warm/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
