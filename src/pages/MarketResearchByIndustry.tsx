import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { INDUSTRY_SEGMENT, SEGMENT_ORDER, SEGMENTS, type SegmentSlug } from '@/data/bionixusIndustrySegments';
import {
  MATRIX_COUNTRIES,
  MATRIX_INDUSTRY_SLUGS_ORDERED,
  MATRIX_INDUSTRIES,
  getIndustryBofuPath,
  getIndustryListiclePath,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';
import {
  MARKET_RESEARCH_BY_INDUSTRY_COUNTRIES,
  MARKET_RESEARCH_BY_INDUSTRY_GROUPS,
  getHealthcareHubPathForIndexCountry,
  getIndustrySegmentCountryPath,
  getMidFunnelPathForIndexCountry,
  getPharmaBofuPathForIndexCountry,
  isMatrixCountrySlug,
  type MarketResearchIndexCountry,
} from '@/data/industryHubCountries';

const COUNTRY_COUNT = MARKET_RESEARCH_BY_INDUSTRY_COUNTRIES.length;

const HUB_FAQ = [
  {
    question: 'Which countries are covered on this index?',
    answer: `BioNixus publishes industry and pharmaceutical market research entry points across ${COUNTRY_COUNT} markets grouped by region — Americas, Europe, MENA & GCC, Africa, Asia-Pacific, and city hubs. Seven GCC markets include the full sixteen-industry matrix with company-intent BOFU pages and 2026 listicles; other countries link to healthcare hubs, pharmaceutical BOFU pages, and country–industry URLs.`,
  },
  {
    question: 'Which industries have dedicated pages?',
    answer:
      'Sixteen industry verticals each have company-intent BOFU pages and 2026 top-firms listicles in GCC matrix markets: MedTech, healthcare providers, biotech, consumer health, FMCG, retail, financial services, telecom, technology, energy, real estate, automotive, hospitality, public sector, education, and media. Other countries use country–industry URLs and healthcare or pharmaceutical hubs.',
  },
  {
    question: 'How does BioNixus global coverage differ from GCC-only pages?',
    answer:
      'BioNixus is headquartered in the United States with regional offices in London and Cairo and country presence across the Americas, Europe, MENA, Africa, and Asia-Pacific. GCC matrix pages include the deepest regulator-aware pharmaceutical links (SFDA, MOHAP, EDA, and GCC authorities). Global markets link to localized healthcare hubs and pharmaceutical BOFU URLs so buyers can reach the right entry point without keyword overlap.',
  },
] as const;

const SEGMENT_LABEL: Record<SegmentSlug, string> = {
  'pharma-healthcare': 'Pharma & Healthcare',
  b2b: 'B2B',
  b2c: 'B2C',
};

function industriesForSegment(segment: SegmentSlug, published: MatrixIndustrySlug[]): MatrixIndustrySlug[] {
  return published.filter((slug) => INDUSTRY_SEGMENT[slug] === segment);
}

function MatrixCountrySection({
  countrySlug,
  publishedIndustries,
}: {
  countrySlug: MatrixCountrySlug;
  publishedIndustries: MatrixIndustrySlug[];
}) {
  const country = MATRIX_COUNTRIES[countrySlug];
  return (
    <section
      id={`country-${countrySlug}`}
      className="section-padding py-12 border-t border-border scroll-mt-28"
    >
      <div className="container-wide max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              {country.regulatorShort} · Full industry matrix
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">{country.label}</h3>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to={country.midFunnelPath} className="text-primary hover:underline">
              Market research overview
            </Link>
            <Link to={country.healthcareHubPath} className="text-primary hover:underline">
              Healthcare hub
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-8">
          <h4 className="font-semibold text-foreground mb-2">Pharmaceutical &amp; drug launch</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to={country.pharmaBofuPath} className="text-primary hover:underline">
              Pharmaceutical market research company
            </Link>
            <Link to={country.healthcareReportPath} className="text-primary hover:underline">
              Healthcare market report
            </Link>
            {country.medDevicesReportPath ? (
              <Link to={country.medDevicesReportPath} className="text-primary hover:underline">
                Medical devices market report
              </Link>
            ) : null}
          </div>
        </div>

        {SEGMENT_ORDER.map((segmentSlug) => {
          const segmentIndustries = industriesForSegment(segmentSlug, publishedIndustries);
          if (segmentIndustries.length === 0) return null;
          return (
            <div key={segmentSlug} className="mb-10 last:mb-0">
              <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                {SEGMENT_LABEL[segmentSlug]}
              </h4>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {segmentIndustries.map((industrySlug) => {
                  const industry = MATRIX_INDUSTRIES[industrySlug];
                  return (
                    <li key={industrySlug} className="rounded-xl border border-border bg-card p-4 space-y-1.5">
                      <p className="font-medium text-foreground text-sm">{industry.displayName}</p>
                      <Link
                        to={getIndustryBofuPath(countrySlug, industrySlug)}
                        className="block text-sm text-primary hover:underline"
                      >
                        Company-intent page
                      </Link>
                      <Link
                        to={getIndustryListiclePath(countrySlug, industrySlug)}
                        className="block text-sm text-primary hover:underline"
                      >
                        Top firms (2026)
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ExtendedCountrySection({
  country,
  publishedIndustries,
}: {
  country: MarketResearchIndexCountry;
  publishedIndustries: MatrixIndustrySlug[];
}) {
  const healthcarePath = getHealthcareHubPathForIndexCountry(country);
  const pharmaPath = getPharmaBofuPathForIndexCountry(country);
  const midFunnelPath = getMidFunnelPathForIndexCountry(country);

  return (
    <section
      id={`country-${country.slug}`}
      className="section-padding py-10 border-t border-border scroll-mt-28"
    >
      <div className="container-wide max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Global market
            </p>
            <h3 className="text-2xl font-display font-semibold text-foreground">{country.label}</h3>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to={healthcarePath} className="text-primary hover:underline">
              Healthcare hub
            </Link>
            {midFunnelPath ? (
              <Link to={midFunnelPath} className="text-primary hover:underline">
                Market research overview
              </Link>
            ) : null}
          </div>
        </div>

        {(pharmaPath || healthcarePath) && (
          <div className="rounded-xl border border-border bg-muted/30 p-5 mb-8">
            <h4 className="font-semibold text-foreground mb-2">Pharmaceutical &amp; healthcare</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {pharmaPath ? (
                <Link to={pharmaPath} className="text-primary hover:underline">
                  Pharmaceutical market research
                </Link>
              ) : null}
              <Link to={healthcarePath} className="text-primary hover:underline">
                Healthcare market research hub
              </Link>
            </div>
          </div>
        )}

        {SEGMENT_ORDER.map((segmentSlug) => {
          const segmentIndustries = industriesForSegment(segmentSlug, publishedIndustries);
          if (segmentIndustries.length === 0) return null;
          return (
            <div key={segmentSlug} className="mb-8 last:mb-0">
              <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                {SEGMENT_LABEL[segmentSlug]}
              </h4>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {segmentIndustries.map((industrySlug) => {
                  const industry = MATRIX_INDUSTRIES[industrySlug];
                  return (
                    <li key={industrySlug} className="rounded-xl border border-border bg-card p-4">
                      <p className="font-medium text-foreground text-sm mb-1.5">{industry.displayName}</p>
                      <Link
                        to={getIndustrySegmentCountryPath(country.slug, industrySlug)}
                        className="block text-sm text-primary hover:underline"
                      >
                        {industry.displayNameShort} market research
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function MarketResearchByIndustry() {
  const publishedIndustries = MATRIX_INDUSTRY_SLUGS_ORDERED.filter(
    (slug) => MATRIX_INDUSTRIES[slug].published,
  );
  const jsonLd = [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: 'Market Research by Industry', href: '/market-research-by-industry' },
    ]),
    buildFAQSchema([...HUB_FAQ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Market Research by Industry | Global Coverage | 16 Industries | BioNixus"
        description={`Browse BioNixus market research by industry across ${COUNTRY_COUNT} global markets — Americas, Europe, MENA, Africa, and Asia-Pacific. MedTech, healthcare, FMCG, financial services, telecom, pharma, and more.`}
        canonical="/market-research-by-industry"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: 'Market Research by Industry', href: '/market-research-by-industry' },
          ]}
        />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-3">
              Global index
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Market Research by Industry — Global Coverage
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              BioNixus is a global market research firm with U.S. headquarters, regional offices in London and
              Cairo, and field programmes across the Americas, Europe, MENA, Africa, and Asia-Pacific. This index
              maps {publishedIndustries.length} industries to {COUNTRY_COUNT} countries — from full GCC
              company-intent matrices to healthcare hubs and country–industry entry points worldwide.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="rounded-full bg-primary/10 text-primary text-sm font-medium px-4 py-1.5">
                {COUNTRY_COUNT} countries
              </span>
              <span className="rounded-full bg-primary/10 text-primary text-sm font-medium px-4 py-1.5">
                {publishedIndustries.length} industries
              </span>
              <span className="rounded-full bg-primary/10 text-primary text-sm font-medium px-4 py-1.5">
                6 regions
              </span>
              <span className="rounded-full bg-muted text-muted-foreground text-sm font-medium px-4 py-1.5">
                GCC full matrix + global hubs
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <Link to="/market-research" className="text-primary underline">
                Market research hub
              </Link>
              {' · '}
              <Link to="/bionixus-industries" className="text-primary underline">
                Industries overview
              </Link>
              {' · '}
              <Link to="/healthcare-market-research" className="text-primary underline">
                Healthcare market research
              </Link>
              {' · '}
              <Link to="/global-websites" className="text-primary underline">
                Global websites directory
              </Link>
            </p>
            <nav aria-label="Jump to region" className="space-y-4">
              {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
                <div key={group.region}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    {group.region}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.countries.map((country) => (
                      <a
                        key={country.slug}
                        href={`#country-${country.slug}`}
                        className="text-sm rounded-lg border border-border px-3 py-1.5 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {country.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </section>

        <section className="section-padding py-4 border-t border-border bg-muted/10">
          <div className="container-wide max-w-6xl mx-auto space-y-6">
            <h2 className="text-xl font-display font-semibold text-foreground">Jump to industry</h2>
            {SEGMENT_ORDER.map((segmentSlug) => {
              const slugs = industriesForSegment(segmentSlug, publishedIndustries);
              if (slugs.length === 0) return null;
              return (
                <div key={segmentSlug}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    {SEGMENTS[segmentSlug].label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {slugs.map((industrySlug) => (
                      <li key={industrySlug}>
                        <a
                          href={`#industry-${industrySlug}`}
                          className="text-sm rounded-lg border border-border bg-card px-3 py-1.5 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {MATRIX_INDUSTRIES[industrySlug].displayName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
          <section key={group.region} className="border-t border-border bg-muted/5">
            <div className="container-wide max-w-6xl mx-auto section-padding py-10">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                {group.region}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-2">{group.description}</p>
              <p className="text-sm text-muted-foreground">
                {group.countries.length} {group.countries.length === 1 ? 'market' : 'markets'} in this region
              </p>
            </div>
            {group.countries.map((country) =>
              isMatrixCountrySlug(country.slug) ? (
                <MatrixCountrySection
                  key={country.slug}
                  countrySlug={country.slug}
                  publishedIndustries={publishedIndustries}
                />
              ) : (
                <ExtendedCountrySection
                  key={country.slug}
                  country={country}
                  publishedIndustries={publishedIndustries}
                />
              ),
            )}
          </section>
        ))}

        {publishedIndustries.map((industrySlug) => {
          const industry = MATRIX_INDUSTRIES[industrySlug];
          return (
            <section
              key={industrySlug}
              id={`industry-${industrySlug}`}
              className="section-padding py-10 border-t border-border bg-muted/20 scroll-mt-28"
            >
              <div className="container-wide max-w-6xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                  {SEGMENT_LABEL[INDUSTRY_SEGMENT[industrySlug]]}
                </p>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-2">{industry.displayName}</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  GCC markets include listicle guides; all countries link to company-intent or industry entry pages.
                </p>
                {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
                  <div key={group.region} className="mb-8 last:mb-0">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      {group.region}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {group.countries.map((country) => (
                        <article key={country.slug} className="rounded-xl border border-border bg-card p-5 space-y-2">
                          <h4 className="font-semibold text-foreground">{country.label}</h4>
                          <Link
                            to={
                              isMatrixCountrySlug(country.slug)
                                ? getIndustryBofuPath(country.slug, industrySlug)
                                : getIndustrySegmentCountryPath(country.slug, industrySlug)
                            }
                            className="block text-sm text-primary hover:underline"
                          >
                            {industry.displayNameShort} market research company
                          </Link>
                          {isMatrixCountrySlug(country.slug) ? (
                            <Link
                              to={getIndustryListiclePath(country.slug, industrySlug)}
                              className="block text-sm text-primary hover:underline"
                            >
                              Top firms guide (2026)
                            </Link>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <section className="section-padding py-12 border-t border-border">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {HUB_FAQ.map((item) => (
                <details key={item.question} className="group border border-border rounded-xl bg-card">
                  <summary className="cursor-pointer list-none px-6 py-4 font-display font-semibold text-foreground flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
