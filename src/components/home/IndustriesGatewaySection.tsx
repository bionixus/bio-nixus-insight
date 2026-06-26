import { Link } from 'react-router-dom';
import { ArrowRight, Building2, HeartPulse, ShoppingBag } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SEGMENTS } from '@/data/bionixusIndustrySegments';

const HUB_PATH = '/bionixus-industries';

const SEGMENT_ICONS = {
  'pharma-healthcare': HeartPulse,
  b2b: Building2,
  b2c: ShoppingBag,
} as const;

const PROOF_STATS = [
  { value: '127+', label: 'Projects across industries' },
  { value: '16', label: 'Industry verticals' },
  { value: '7', label: 'GCC/MENA markets with industry pages' },
];

const IndustriesGatewaySection = () => {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 90 });

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
            Beyond healthcare — research across industries
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The same sampling discipline and senior-led analysis we built for pharma now extends to B2B and B2C
            markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {(['pharma-healthcare', 'b2b', 'b2c'] as const).map((slug) => {
            const segment = SEGMENTS[slug];
            const Icon = SEGMENT_ICONS[slug];
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
                  {segment.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{segment.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Explore {segment.navLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {PROOF_STATS.map((stat) => (
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
            to={HUB_PATH}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer"
          >
            Explore all industries
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGatewaySection;
