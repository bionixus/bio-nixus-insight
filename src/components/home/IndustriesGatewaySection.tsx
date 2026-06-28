import { Link } from 'react-router-dom';
import { ArrowRight, Building2, HeartPulse, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEGMENTS } from '@/data/bionixusIndustrySegments';
import { INDUSTRIES_INSIGHTS_SECTION_PATH } from '@/lib/blog-content-silo';
import { getLocalizedPathForLanguage } from '@/lib/seo';

const SEGMENT_ICONS = {
  'pharma-healthcare': HeartPulse,
  b2b: Building2,
  b2c: ShoppingBag,
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
      className="section-padding py-14 bg-background border-t border-border"
      aria-labelledby="industries-gateway-heading"
      ref={sectionRef}
    >
      <div className="container-wide max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10 sr sr-up">
          <h2
            id="industries-gateway-heading"
            className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
          >
            {copy.h2}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{copy.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {(['pharma-healthcare', 'b2b', 'b2c'] as const).map((slug) => {
            const segment = SEGMENTS[slug];
            const localized = segmentCopy[slug];
            const Icon = SEGMENT_ICONS[slug];
            const exploreLabel = copy.exploreSegment.replace('{segment}', localized.navLabel);
            return (
              <Link
                key={slug}
                to={segment.path}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md sr sr-scale-up sr-spring hover-lift cursor-pointer"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {localized.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{localized.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {exploreLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {copy.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-muted/30 px-5 py-4 text-center sr sr-up"
            >
              <p className="font-display text-2xl font-semibold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center sr sr-up">
          <Link
            to={hubPath}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer"
          >
            {copy.exploreAll}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            <Link to={INDUSTRIES_INSIGHTS_SECTION_PATH} className="text-primary font-medium hover:underline">
              {copy.insightsLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGatewaySection;
