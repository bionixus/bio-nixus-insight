import { Link } from 'react-router-dom';
import {
  getIndustriesHubCountryPath,
  isMatrixCountrySlug,
  type MarketResearchIndexCountry,
} from '@/data/industryHubCountries';

export type CountryCoverageGroup = {
  region: string;
  description?: string;
  countries: MarketResearchIndexCountry[];
};

type CountryCoverageGridProps = {
  groups: CountryCoverageGroup[];
  segment: 'b2b' | 'b2c';
  /**
   * 'grouped' renders one bordered article per region with a heading and
   * description (used on the industries hub, after the narrative copy).
   * 'flat' renders a single ungrouped chip list (used on the b2b/b2c
   * segment pages), ignoring `region`/`description` on each group.
   */
  layout?: 'grouped' | 'flat';
  /** Show the legend explaining the Report-badge vs coverage-index distinction. Default true. */
  showLegend?: boolean;
};

/**
 * Shared "countries we serve" chip grid for the non-healthcare industries
 * silo (`/bionixus-industries`, `/b2b-industries`, `/b2c-industries`).
 * Centralizing this in one place means a link-resolution fix (see
 * getIndustriesHubCountryPath) only has to happen once instead of being
 * copy-pasted — and stays in sync — across all three pages.
 *
 * Only the 7 GCC/MENA matrix countries have a dedicated country x industry
 * landing page; every other country links to its coverage-index anchor on
 * /market-research-by-industry. The "Report" badge marks the former so the
 * chip's promise matches its destination.
 */
export function CountryCoverageGrid({
  groups,
  segment,
  layout = 'grouped',
  showLegend = true,
}: CountryCoverageGridProps) {
  const legend = showLegend ? (
    <p className="bx-chip-legend">
      <span className="bx-chip-tag">Report</span> = dedicated country page. Other countries link to our full
      coverage index.
    </p>
  ) : null;

  if (layout === 'flat') {
    const countries = groups.flatMap((group) => group.countries);
    return (
      <div className="bx-country-grid bx-country-grid--flat">
        <article className="bx-country-region bx-country-region--full">
          {legend}
          <div className="bx-chips">
            {countries.map((country) => (
              <CountryChip key={country.slug} country={country} segment={segment} />
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="bx-country-grid bx-country-grid--after-narrative">
      {groups.map((group, index) => (
        <article key={group.region} className="bx-country-region">
          <h3>{group.region}</h3>
          {group.description ? <p className="bx-region-desc">{group.description}</p> : null}
          {index === 0 ? legend : null}
          <div className="bx-chips">
            {group.countries.map((country) => (
              <CountryChip key={country.slug} country={country} segment={segment} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function CountryChip({
  country,
  segment,
}: {
  country: MarketResearchIndexCountry;
  segment: 'b2b' | 'b2c';
}) {
  const hasDedicatedReport = isMatrixCountrySlug(country.slug);
  return (
    <Link
      to={getIndustriesHubCountryPath(country, segment)}
      className={hasDedicatedReport ? 'bx-chip bx-chip--report' : 'bx-chip'}
    >
      {country.label}
      {hasDedicatedReport ? <span className="bx-chip-tag">Report</span> : null}
    </Link>
  );
}
