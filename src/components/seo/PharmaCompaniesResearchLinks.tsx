import { Link } from 'react-router-dom';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

type CountryResearchTargets = {
  label: string;
  pharmaResearch?: string;
  healthcareResearch?: string;
};

/** Every path here must be a live route, not a redirect source (checked by verify:links). */
const COUNTRY_RESEARCH_TARGETS: Record<string, CountryResearchTargets> = {
  kuwait: { label: 'Kuwait', pharmaResearch: '/pharmaceutical-market-research-kuwait', healthcareResearch: '/healthcare-market-research-kuwait' },
  'saudi-arabia': { label: 'Saudi Arabia', pharmaResearch: '/market-research-saudi-arabia-pharmaceutical', healthcareResearch: '/healthcare-market-research/saudi-arabia' },
  uae: { label: 'the UAE', pharmaResearch: '/uae-pharmaceutical-market-research', healthcareResearch: '/healthcare-market-research/uae' },
  dubai: { label: 'Dubai', pharmaResearch: '/pharmaceutical-market-research-dubai', healthcareResearch: '/healthcare-market-research/uae' },
  egypt: { label: 'Egypt', pharmaResearch: '/egypt-pharmaceutical-market-research', healthcareResearch: '/egypt-healthcare-market-research' },
  qatar: { label: 'Qatar', pharmaResearch: '/pharmaceutical-market-research-qatar', healthcareResearch: '/healthcare-market-research-qatar' },
  oman: { label: 'Oman', pharmaResearch: '/pharmaceutical-market-research-oman', healthcareResearch: '/healthcare-market-research-oman' },
  bahrain: { label: 'Bahrain', pharmaResearch: '/pharmaceutical-market-research-bahrain', healthcareResearch: '/healthcare-market-research-bahrain' },
  iraq: { label: 'Iraq' },
  iran: { label: 'Iran' },
  usa: { label: 'the USA', pharmaResearch: '/pharmaceutical-market-research-usa', healthcareResearch: '/healthcare-market-research-usa' },
  uk: { label: 'the UK', pharmaResearch: '/pharmaceutical-market-research-uk', healthcareResearch: '/healthcare-market-research-uk' },
  germany: { label: 'Germany', pharmaResearch: '/pharmaceutical-market-research-germany', healthcareResearch: '/healthcare-market-research/germany' },
  brazil: { label: 'Brazil', pharmaResearch: '/brazil-pharmaceutical-market-research', healthcareResearch: '/brazil-healthcare-market-research' },
  canada: { label: 'Canada', pharmaResearch: '/pharmaceutical-market-research-canada', healthcareResearch: '/healthcare-market-research-canada' },
  turkey: { label: 'Turkey', pharmaResearch: '/pharmaceutical-market-research-turkey', healthcareResearch: '/healthcare-market-research-turkey' },
  jordan: { label: 'Jordan', pharmaResearch: '/pharmaceutical-market-research-jordan', healthcareResearch: '/healthcare-market-research-jordan' },
  morocco: { label: 'Morocco' },
  india: { label: 'India', pharmaResearch: '/pharmaceutical-market-research-india', healthcareResearch: '/healthcare-market-research-india' },
  china: { label: 'China', pharmaResearch: '/pharmaceutical-market-research-china', healthcareResearch: '/healthcare-market-research-china' },
  japan: { label: 'Japan', pharmaResearch: '/pharmaceutical-market-research-japan', healthcareResearch: '/healthcare-market-research-japan' },
  'south-korea': { label: 'South Korea', pharmaResearch: '/pharmaceutical-market-research-south-korea', healthcareResearch: '/healthcare-market-research-south-korea' },
  singapore: { label: 'Singapore', pharmaResearch: '/pharmaceutical-market-research-singapore', healthcareResearch: '/healthcare-market-research-singapore' },
  malaysia: { label: 'Malaysia', pharmaResearch: '/pharmaceutical-market-research-malaysia', healthcareResearch: '/healthcare-market-research-malaysia' },
  switzerland: { label: 'Switzerland', pharmaResearch: '/pharmaceutical-market-research-switzerland', healthcareResearch: '/healthcare-market-research-switzerland' },
};

const linkClass =
  'group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary';

type Props = {
  /** Slug after `/pharmaceutical-companies-`, e.g. `saudi-arabia`. */
  country: string;
};

/**
 * Routes the authority of the pharmaceutical-companies directory cluster to the
 * commissioning pages: country research, the pharma research pillar, IQVIA alternative and services.
 */
export function PharmaCompaniesResearchLinks({ country }: Props) {
  const target = COUNTRY_RESEARCH_TARGETS[country];
  if (!target) return null;

  const links: Array<{ to: string; label: string }> = [
    ...(target.pharmaResearch
      ? [{ to: target.pharmaResearch, label: `Pharmaceutical market research in ${target.label}` }]
      : []),
    ...(target.healthcareResearch
      ? [{ to: target.healthcareResearch, label: `Healthcare market research in ${target.label}` }]
      : []),
    { to: '/pharmaceutical-market-research', label: 'Pharmaceutical market research company in 48 countries' },
    { to: '/iqvia-alternative', label: 'Custom research alongside IQVIA data' },
    { to: '/services/market-access', label: 'Market access & payer research' },
    { to: '/services/kol-stakeholder-mapping', label: 'KOL & stakeholder mapping' },
    { to: '/services/quantitative-research', label: 'HCP surveys & quantitative research' },
  ];

  return (
    <section
      className={`${PHARMA_GUIDE_SECTION_X} py-12`}
      id="research-in-country"
      aria-labelledby="research-in-country-heading"
    >
      <div className={PHARMA_GUIDE_INNER}>
        <h2 id="research-in-country-heading" className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
          Commissioning research in {target.label}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          This directory shows who competes in {target.label}. To learn what physicians, payers and pharmacists there
          will do next, BioNixus runs custom primary research with a{' '}
          <Link to="/contact" className="text-primary font-medium hover:underline">
            proposal within 48 hours of a brief
          </Link>
          .
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass}>
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
