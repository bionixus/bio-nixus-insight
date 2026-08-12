import { Link } from 'react-router-dom';
import { PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

export type PharmaCompaniesCountrySlug =
  | 'kuwait'
  | 'oman'
  | 'qatar'
  | 'bahrain'
  | 'uae'
  | 'saudi-arabia'
  | 'egypt'
  | 'iran';

import { COUNTRY_LABELS } from '@/components/seo/pharmaCompaniesCountryLabels';

const PEER_SLUGS: PharmaCompaniesCountrySlug[] = [
  'kuwait',
  'oman',
  'qatar',
  'bahrain',
  'uae',
  'saudi-arabia',
  'egypt',
  'iran',
];

const HAS_COUNTRY_MR_HUB: Partial<Record<PharmaCompaniesCountrySlug, string>> = {
  kuwait: 'kuwait',
  oman: 'oman',
  qatar: 'qatar',
  bahrain: 'bahrain',
  uae: 'uae',
  'saudi-arabia': 'saudi-arabia',
  egypt: 'egypt',
};

/** Country-level report slugs — completes the hub/pharma-companies/report triad. */
const HAS_COUNTRY_REPORTS: Partial<Record<PharmaCompaniesCountrySlug, string>> = {
  kuwait: 'kuwait',
  oman: 'oman',
  qatar: 'qatar',
  bahrain: 'bahrain',
  uae: 'uae',
  'saudi-arabia': 'saudi-arabia',
  egypt: 'egypt',
};

type Props = {
  country: PharmaCompaniesCountrySlug;
};

/**
 * Shared internal-link cluster for GCC pharmaceutical company BOFU pages.
 * Reinforces cross-country equity and routes authority to flagship report URLs.
 */
export function PharmaCompaniesGccHubLinks({ country }: Props) {
  const countryName = COUNTRY_LABELS[country];
  const mrSlug = HAS_COUNTRY_MR_HUB[country];
  const reportSlug = HAS_COUNTRY_REPORTS[country];
  const peers = PEER_SLUGS.filter((slug) => slug !== country);

  return (
    <section className={`${PHARMA_GUIDE_SECTION_X} py-12 bg-muted/30`} id="gcc-pharma-resources" aria-labelledby="gcc-pharma-resources-heading">
      <div className={PHARMA_GUIDE_INNER}>
        <h2 id="gcc-pharma-resources-heading" className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
          GCC pharmaceutical market research &amp; peer country directories
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Pharmaceutical companies in {countryName} sit inside the wider Gulf opportunity. Use the{' '}
          <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
            healthcare market research hub
          </Link>{' '}
          for programme scoping, then drill into GCC consumption data and neighbouring company directories below.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          <Link
            to="/gcc-pharma-market-report-2026"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            GCC pharma market report 2026
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          <Link
            to="/gcc-pharmaceutical-market-research"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            GCC biologics, generic injectables &amp; precision medicine research
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          <Link
            to="/gcc-medical-devices-market-report"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            GCC medical devices market report 2026
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          <Link
            to="/market-reports/gcc-biosimilars-market-report"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            GCC biosimilars &amp; generic injectables market report
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          <Link
            to="/market-reports/gcc-immunology-biologics-market-report"
            className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
          >
            GCC immunology &amp; biologics market report
            <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
              &rarr;
            </span>
          </Link>
          {mrSlug ? (
            <Link
              to={`/healthcare-market-research/${mrSlug}`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
            >
              Healthcare market research in {countryName}
              <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </Link>
          ) : null}
          {reportSlug ? (
            <Link
              to={`/${reportSlug}-healthcare-market-report`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
            >
              {countryName} Healthcare Market Report
              <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </Link>
          ) : null}
          {reportSlug ? (
            <Link
              to={`/${reportSlug}-medical-devices-market-report`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
            >
              {countryName} Medical Devices Market Report
              <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </Link>
          ) : null}
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground mb-3">Pharmaceutical companies in other GCC &amp; MENA markets</h3>
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
