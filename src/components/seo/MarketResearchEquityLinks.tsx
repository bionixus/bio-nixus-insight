import { Link } from 'react-router-dom';

/**
 * MarketResearchEquityLinks
 *
 * Country-aware internal-linking block placed on the page-one pharmaceutical
 * directory pages (e.g. /pharmaceutical-companies-uae, ranked pos 6–9 with 2,400–
 * 5,800 impressions/quarter). It passes link equity from those strong organic
 * assets to the pages that need to climb:
 *   - the new healthcare market-research pages targeting the "...in Dubai/UAE/Saudi"
 *     commercial cluster (currently pos 16–24, 0 clicks),
 *   - the all-industry market-research pages,
 *   - and the GCC market-segment topic cluster.
 *
 * Link sets are curated per country so the block is contextually relevant rather
 * than an identical footprint repeated across pages.
 */

type EquityLink = { to: string; label: string };

const HUB: EquityLink = { to: '/healthcare-market-research', label: 'Healthcare market research services' };

const COUNTRY_LINKS: Record<string, { heading: string; links: EquityLink[] }> = {
  uae: {
    heading: 'Market research partners for the UAE',
    links: [
      { to: '/healthcare-market-research-in-uae', label: 'Healthcare market research in Dubai & the UAE' },
      { to: '/market-research-in-uae', label: 'All-industry market research in the UAE' },
      { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
      { to: '/gcc-generic-injectables-market', label: 'GCC generic injectables market' },
      { to: '/pharmaceutical-market-research-dubai', label: 'Pharmaceutical market research in Dubai' },
      HUB,
    ],
  },
  'saudi-arabia': {
    heading: 'Market research partners for Saudi Arabia',
    links: [
      { to: '/healthcare-market-research-in-saudi-arabia', label: 'Healthcare market research in Saudi Arabia' },
      { to: '/market-research-in-saudi-arabia', label: 'All-industry market research in Saudi Arabia' },
      { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
      { to: '/gcc-personalized-medicine-market', label: 'GCC personalized medicine market' },
      { to: '/gcc-clinical-trials-market', label: 'GCC clinical trials market' },
      HUB,
    ],
  },
  egypt: {
    heading: 'Market research partners for Egypt',
    links: [
      { to: '/market-research-in-egypt', label: 'All-industry market research in Egypt' },
      { to: '/gcc-pharmacy-market', label: 'GCC pharmacy market' },
      { to: '/gcc-generic-injectables-market', label: 'GCC generic injectables market' },
      HUB,
    ],
  },
  kuwait: {
    heading: 'Healthcare & pharma market research across the GCC',
    links: [
      { to: '/gcc-generic-injectables-market', label: 'GCC generic injectables market' },
      { to: '/gcc-pharmacy-market', label: 'GCC pharmacy market' },
      { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
      { to: '/healthcare-market-research-in-uae', label: 'Healthcare market research in the UAE' },
      HUB,
    ],
  },
  oman: {
    heading: 'Healthcare & pharma market research across the GCC',
    links: [
      { to: '/gcc-generic-injectables-market', label: 'GCC generic injectables market' },
      { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
      { to: '/gcc-clinical-trials-market', label: 'GCC clinical trials market' },
      { to: '/healthcare-market-research-in-saudi-arabia', label: 'Healthcare market research in Saudi Arabia' },
      HUB,
    ],
  },
  qatar: {
    heading: 'Healthcare & pharma market research across the GCC',
    links: [
      { to: '/gcc-clinical-trials-market', label: 'GCC clinical trials market' },
      { to: '/gcc-personalized-medicine-market', label: 'GCC personalized medicine market' },
      { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
      { to: '/healthcare-market-research-in-uae', label: 'Healthcare market research in the UAE' },
      HUB,
    ],
  },
  bahrain: {
    heading: 'Healthcare & pharma market research across the GCC',
    links: [
      { to: '/gcc-pharmacy-market', label: 'GCC pharmacy market' },
      { to: '/gcc-generic-injectables-market', label: 'GCC generic injectables market' },
      { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
      { to: '/healthcare-market-research-in-saudi-arabia', label: 'Healthcare market research in Saudi Arabia' },
      HUB,
    ],
  },
};

const DEFAULT_LINKS: { heading: string; links: EquityLink[] } = {
  heading: 'Healthcare & pharma market research across the region',
  links: [
    { to: '/gcc-biopharmaceuticals-market', label: 'GCC biopharmaceuticals market' },
    { to: '/gcc-generic-injectables-market', label: 'GCC generic injectables market' },
    { to: '/gcc-pharmacy-market', label: 'GCC pharmacy market' },
    { to: '/healthcare-market-research-in-uae', label: 'Healthcare market research in the UAE' },
    HUB,
  ],
};

export function MarketResearchEquityLinks({ country }: { country: string }) {
  const config = COUNTRY_LINKS[country] ?? DEFAULT_LINKS;
  return (
    <section className="section-padding py-12" aria-labelledby="mr-equity-heading">
      <div className="container-wide max-w-5xl mx-auto">
        <h2 id="mr-equity-heading" className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
          {config.heading}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Planning a study rather than a supplier search? Explore BioNixus market research for this market and
          the wider GCC.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {config.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
            >
              {link.label}
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
