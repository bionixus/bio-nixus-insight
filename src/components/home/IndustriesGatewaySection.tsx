import { Link } from 'react-router-dom';
import { ArrowRight, Building2, HeartPulse, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEGMENTS } from '@/data/bionixusIndustrySegments';
import { INDUSTRIES_INSIGHTS_SECTION_PATH } from '@/lib/blog-content-silo';
import { getLocalizedPathForLanguage } from '@/lib/seo';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';

const SEGMENT_ICONS = {
  'pharma-healthcare': HeartPulse,
  b2b: Building2,
  b2c: ShoppingBag,
} as const;

const SEGMENT_WELLS = {
  'pharma-healthcare': 'bg-[#FFF0ED] text-[#E06852]',
  b2b: 'bg-[#EBF4FF] text-[#2563EB]',
  b2c: 'bg-[#E6FAF8] text-[#0EA5A0]',
} as const;

const IndustriesGatewaySection = () => {
  const { language, t } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const copy = t.homePage.industriesGateway;
  const segments = t.homePage.industrySegments;
  const hubPath = getLocalizedPathForLanguage('/bionixus-industries', language);

  const segmentCopy = {
    'pharma-healthcare': segments.pharma,
    b2b: segments.b2b,
    b2c: segments.b2c,
  } as const;

  return (
    <section
      className="premium-home-cream section-padding py-16 md:py-20"
      aria-labelledby="industries-gateway-heading"
      ref={sectionRef}
    >
      <div className="container-wide max-w-6xl mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center sr sr-up">
          <PremiumEyebrow>{t.nav.industries}</PremiumEyebrow>
          <h2
            id="industries-gateway-heading"
            className="mb-4 font-display text-3xl md:text-4xl font-light tracking-tight text-[#0C1B33]"
          >
            {copy.h2}
          </h2>
          <p className="font-light leading-relaxed text-[#7A7267]">{copy.intro}</p>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {(['pharma-healthcare', 'b2b', 'b2c'] as const).map((slug) => {
            const segment = SEGMENTS[slug];
            const localized = segmentCopy[slug];
            const Icon = SEGMENT_ICONS[slug];
            const exploreLabel = copy.exploreSegment.replace('{segment}', localized.navLabel);
            return (
              <Link
                key={slug}
                to={segment.path}
                className="premium-card group flex flex-col cursor-pointer sr sr-scale-up sr-spring"
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${SEGMENT_WELLS[slug]}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mb-2 font-display text-xl font-medium text-[#0C1B33] transition-colors group-hover:text-[#C9A84C]">
                  {localized.label}
                </h3>
                <p className="flex-1 text-sm font-light leading-relaxed text-[#7A7267]">{localized.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C9A84C] transition-all group-hover:gap-3">
                  {exploreLabel}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] px-5 py-6 text-center sr sr-up">
              <p className="font-display text-3xl font-light text-[#0C1B33]">{stat.value}</p>
              <p className="mt-1 text-sm font-light text-[#7A7267]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center sr sr-up">
          <Link
            to={hubPath}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C9A84C] transition-all hover:gap-3 cursor-pointer"
          >
            {copy.exploreAll}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
          </Link>
          <p className="mt-3 text-sm font-light text-[#7A7267]">
            <Link to={INDUSTRIES_INSIGHTS_SECTION_PATH} className="font-medium text-[#0C1B33] underline-offset-4 hover:underline">
              {copy.insightsLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGatewaySection;
