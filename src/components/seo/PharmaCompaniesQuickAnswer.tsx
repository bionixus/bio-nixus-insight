import { Link } from 'react-router-dom';
import type { PharmaCompaniesCountrySlug } from '@/components/seo/PharmaCompaniesGccHubLinks';
import { COUNTRY_LABELS } from '@/components/seo/pharmaCompaniesCountryLabels';

type Props = {
  country: PharmaCompaniesCountrySlug;
  marketSize: string;
  growthRate?: string;
  regulatorLabel: string;
  topCompanyNames: string[];
  extraSentence?: string;
};

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
  const countryName = country === 'uae' ? 'the UAE' : COUNTRY_LABELS[country];
  const list = topCompanyNames.filter(Boolean).slice(0, 7);

  return (
    <section
      className="section-padding py-10 bg-muted/25 border-y border-border/60"
      id="pharma-companies-quick-answer"
      aria-labelledby="pharma-quick-answer-heading"
    >
      <div className="container-wide max-w-5xl mx-auto">
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
          insurance, and retail pharmacy access. For Gulf-wide context, start at the{' '}
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
      </div>
    </section>
  );
}
