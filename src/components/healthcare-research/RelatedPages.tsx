import { Link } from 'react-router-dom';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';

interface RelatedPagesProps {
  currentSlug: string;
  relatedCountries: string[];
  relatedTherapies: string[];
}

export function RelatedPages({ currentSlug, relatedCountries, relatedTherapies }: RelatedPagesProps) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container-wide max-w-6xl mx-auto">
        <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Explore Related Markets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
          {relatedCountries
            .filter((slug) => slug !== currentSlug)
            .map((slug) => {
              const config = COUNTRY_CONFIGS[slug];
              if (!config) return null;

              return (
                <Link
                  key={slug}
                  to={`/healthcare-market-research/${slug}`}
                  className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Market Research in {config.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{config.metaSuffix}</p>
                  <span className="text-primary text-sm font-medium">
                    View pharmaceutical market research in {config.name}
                  </span>
                </Link>
              );
            })}
        </div>

        {relatedTherapies.length > 0 ? (
          <>
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Related Therapy Areas</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {relatedTherapies.map((therapy) => (
                <Link
                  key={therapy}
                  to={`/healthcare-market-research/therapy/${therapy}`}
                  className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground hover:border-primary/40 transition-colors capitalize"
                >
                  {therapy} market research
                </Link>
              ))}
            </div>
          </>
        ) : null}

        <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
          Back to all EMEA healthcare market research pages
        </Link>
      </div>
    </section>
  );
}

