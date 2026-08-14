import { Link } from 'react-router-dom';
import type { PharmaCompaniesCountrySlug } from '@/components/seo/PharmaCompaniesGccHubLinks';
import { COUNTRY_LABELS } from '@/components/seo/pharmaCompaniesCountryLabels';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

export type PharmaCompaniesGlobalSlug = Extract<
  PharmaCompaniesCountrySlug,
  'usa' | 'uk' | 'germany' | 'brazil' | 'canada'
>;

const GLOBAL_PEER_SLUGS: PharmaCompaniesGlobalSlug[] = ['usa', 'uk', 'germany', 'brazil', 'canada'];

export const HC_LISTICLE_BY_COUNTRY: Record<PharmaCompaniesGlobalSlug, string> = {
  usa: '/insights/top-healthcare-market-research-companies-usa-2026',
  uk: '/insights/top-healthcare-market-research-companies-uk-2026',
  germany: '/insights/top-healthcare-market-research-companies-germany-2026',
  brazil: '/insights/top-healthcare-market-research-companies-brazil-2026',
  canada: '/insights/top-healthcare-market-research-companies-canada-2026',
};

type Props = {
  country: PharmaCompaniesGlobalSlug;
};

/**
 * Related-resources grid for non-GCC pharmaceutical company BOFU pages
 * (USA, UK, Germany, Brazil, Canada).
 */
export function PharmaCompaniesGlobalHubLinks({ country }: Props) {
  const countryName = COUNTRY_LABELS[country];
  const peers = GLOBAL_PEER_SLUGS.filter((slug) => slug !== country);
  const listicle = HC_LISTICLE_BY_COUNTRY[country];

  return (
    <section
      className={`${PHARMA_GUIDE_SECTION_X} py-12 bg-muted/30`}
      id="global-pharma-resources"
      aria-labelledby="global-pharma-resources-heading"
    >
      <div className={PHARMA_GUIDE_INNER}>
        <h2
          id="global-pharma-resources-heading"
          className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3"
        >
          Related pharmaceutical &amp; healthcare research resources
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Pharmaceutical companies in {countryName} sit inside a wider global opportunity. Start from the{' '}
          <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
            healthcare market research hub
          </Link>
          , compare peer company directories, or review ranked healthcare research firms.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          <Link
            to="/healthcare-market-research"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            Healthcare market research hub
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          <Link
            to="/healthcare-market-research-companies"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            Healthcare market research companies
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          <Link
            to={listicle}
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            Top healthcare market research companies in {countryName} (2026)
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-3">
          Pharmaceutical companies in other major markets
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {peers.map((slug) => (
            <Link
              key={slug}
              to={`/pharmaceutical-companies-${slug}`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
            >
              Pharmaceutical companies in {COUNTRY_LABELS[slug]}
              <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
