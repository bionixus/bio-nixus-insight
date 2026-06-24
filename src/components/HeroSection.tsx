import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { getPageMedia } from '@/data/mediaAssets';
import { YouTubeEmbed } from '@/components/media/YouTubeEmbed';

function HeroVideoPanel({
  heroVideo,
  className = '',
}: {
  heroVideo: NonNullable<ReturnType<typeof getPageMedia>>['heroVideo'];
  className?: string;
}) {
  if (!heroVideo?.youtubeId) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7 backdrop-blur-md shadow-[0_40px_80px_rgba(0,0,0,0.35)] ${className}`.trim()}
    >
      <div
        className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="font-display text-lg font-normal tracking-wide text-white/80">
          BioNixus market research overview
        </h2>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#14CFC8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#14CFC8] shadow-[0_0_8px_#14CFC8] animate-pulse" />
          Video
        </span>
      </div>
      <YouTubeEmbed videoId={heroVideo.youtubeId} title={heroVideo.alt} className="rounded-xl overflow-hidden" />
    </div>
  );
}

const HeroSection = () => {
  const { t, language, isRTL } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const contactPath =
    language === 'fr' ? '/fr/contacts' : language === 'ar' ? '/ar/contacts' : `${basePath === '/' ? '' : basePath}/contact`;
  const heroVideo = getPageMedia('home')?.heroVideo;

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden bg-[#06101F] ${language === 'ar' ? 'hero-arabic' : ''} ${language === 'de' ? 'hero-german' : ''} ${language === 'fr' ? 'hero-french' : ''} ${language === 'es' ? 'hero-spanish' : ''} ${language === 'zh' ? 'hero-chinese' : ''}`}
      dir={isRTL ? 'rtl' : undefined}
      lang={language}
    >
      {/* Premium midnight gradient */}
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

      {/* Orbital accent rings */}
      <div className="pointer-events-none absolute left-[60%] top-1/2 hidden h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 xl:block" aria-hidden>
        <div className="absolute inset-0 rounded-full border border-[#C9A84C]/[0.06]" />
        <div className="absolute inset-[60px] rounded-full border border-[#0EA5A0]/[0.05]" />
        <div className="absolute inset-[140px] rounded-full border border-[#C9A84C]/[0.04]" />
      </div>

      <div className="relative z-10 container-wide section-padding pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2.5 animate-fade-up">
              <span className="h-px w-8 bg-[#C9A84C]/40" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                {t.hero.tagline}
              </span>
            </div>

            <h1 className="mb-7 font-display text-4xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl lg:text-[3.25rem] animate-fade-up animation-delay-200 text-balance">
              {t.hero.title}
            </h1>

            <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-white/45 md:text-[17px] animate-fade-up animation-delay-300">
              {t.hero.subtitle}
            </p>

            {heroVideo ? (
              <HeroVideoPanel heroVideo={heroVideo} className="mb-10 lg:hidden animate-fade-up animation-delay-400" />
            ) : null}

            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up animation-delay-500">
              <Link
                to={contactPath}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#B8933E] px-9 py-4 text-sm font-semibold tracking-wide text-[#06101F] shadow-[0_4px_20px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)]"
              >
                {t.hero.cta}
                <ArrowRight className={`h-4 w-4 ${isRTL ? 'rtl:scale-x-[-1]' : ''}`} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-sm font-normal tracking-wide text-white/55 transition-colors hover:border-white/25 hover:text-white"
              >
                <Play className="h-4 w-4" />
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="flex items-center gap-5 animate-fade-up animation-delay-600">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {['PF', 'RO', 'NV', 'AZ'].map((initials, i) => (
                  <span
                    key={initials}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#06101F] text-[11px] font-semibold text-white ${
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
              <p className="text-sm font-light leading-snug text-white/35">
                Trusted by <strong className="font-medium text-white/70">48 global clients</strong>
                <br />
                across 17+ countries
              </p>
            </div>
          </div>

          {heroVideo ? (
            <div className="hidden min-w-0 lg:block animate-fade-up animation-delay-400">
              <HeroVideoPanel heroVideo={heroVideo} />
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
