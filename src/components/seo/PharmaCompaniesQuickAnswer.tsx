import { Link } from 'react-router-dom';
import type { PharmaCompaniesCountrySlug } from '@/components/seo/PharmaCompaniesGccHubLinks';
import { PHARMA_COMPANIES_GCC_SLUGS } from '@/components/seo/PharmaCompaniesGccHubLinks';
import { COUNTRY_LABELS } from '@/components/seo/pharmaCompaniesCountryLabels';
import {
  HC_LISTICLE_BY_COUNTRY,
  type PharmaCompaniesGlobalSlug,
} from '@/components/seo/PharmaCompaniesGlobalHubLinks';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

type Props = {
  country: PharmaCompaniesCountrySlug;
  marketSize: string;
  growthRate?: string;
  regulatorLabel: string;
  topCompanyNames: string[];
  extraSentence?: string;
};

const GCC_SLUG_SET = new Set<string>(PHARMA_COMPANIES_GCC_SLUGS);

function countryDisplayName(country: PharmaCompaniesCountrySlug): string {
  if (country === 'uae') return 'the UAE';
  if (country === 'usa') return 'the USA';
  if (country === 'uk') return 'the UK';
  return COUNTRY_LABELS[country];
}

/**
 * Snippet-oriented block: exact-match H2 + short list for GSC queries at pos 6–9.
 */
export function PharmaCompaniesQuickAnswer({
  country,
  marketSize,
  growthRate,
  regulatorLabel,
  topCompanyNames,
  extraSentence,
}: Props) {
  const countryName = countryDisplayName(country);
  const list = topCompanyNames.filter(Boolean).slice(0, 7);
  const isGcc = GCC_SLUG_SET.has(country);
  const listicle =
    !isGcc && country in HC_LISTICLE_BY_COUNTRY
      ? HC_LISTICLE_BY_COUNTRY[country as PharmaCompaniesGlobalSlug]
      : null;

  return (
    <section
      className={`${PHARMA_GUIDE_SECTION_X} py-10 bg-muted/25 border-y border-border/60`}
      id="pharma-companies-quick-answer"
      aria-labelledby="pharma-quick-answer-heading"
    >
      <div className={PHARMA_GUIDE_INNER}>
        <h2
          id="pharma-quick-answer-heading"
          className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
        >
          Pharmaceutical companies in {countryName}: quick answer (2026)
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
          Pharmaceutical companies in {countryName} span local manufacturers, multinational offices, and
          hospital-focused distributors overseen by {regulatorLabel}. BioNixus sizes the market at {marketSize}
          {growthRate ? ` (${growthRate} growth)` : ''} and maps the accounts that shape tenders, private
          insurance, and retail pharmacy access. For broader context, start at the{' '}
          <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
            healthcare market research hub
          </Link>
          .
          {extraSentence ? ` ${extraSentence}` : ''}
        </p>
        <p className="text-sm font-semibold text-foreground mb-2">Companies and channels teams ask about first</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-4 max-w-3xl">
          {list.map((name) => (
            <li key={name} className="pl-1">
              {name}
            </li>
          ))}
        </ol>
        {isGcc ? (
          <p className="text-sm text-muted-foreground">
            Need segment sizing? See the{' '}
            <Link to="/gcc-pharma-market-report-2026" className="text-primary font-medium hover:underline">
              GCC pharma market report 2026
            </Link>{' '}
            and the{' '}
            <Link to="/gcc-pharmaceutical-market-research" className="text-primary font-medium hover:underline">
              GCC pharmaceutical market research
            </Link>{' '}
            overview.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Need programme scoping? Start at the{' '}
            <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
              healthcare market research hub
            </Link>
            {listicle ? (
              <>
                {' '}
                or compare firms on our{' '}
                <Link to={listicle} className="text-primary font-medium hover:underline">
                  {COUNTRY_LABELS[country]} healthcare market research companies listicle
                </Link>
              </>
            ) : null}
            .
          </p>
        )}
      </div>
    </section>
  );
}
