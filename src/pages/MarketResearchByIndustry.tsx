import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
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
import { PREMIUM_INDUSTRIES_CSS } from '@/pages/industries/premiumIndustriesCss';

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

const SEGMENT_ACCENT: Record<SegmentSlug, 'teal' | 'gold' | 'coral'> = {
  'pharma-healthcare': 'teal',
  b2b: 'gold',
  b2c: 'coral',
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
    <section id={`country-${countrySlug}`} className="bx-country-block bx-country-block--matrix">
      <div className="bx-inner">
        <div className="bx-country-block-head">
          <div>
            <div className="bx-eyebrow gold">
              <span className="bx-line" /> {country.regulatorShort} · Full industry matrix
            </div>
            <h3 className="bx-h2">{country.label}</h3>
          </div>
          <div className="bx-link-row">
            <Link to={country.midFunnelPath} className="bx-text-link gold">
              Market research overview →
            </Link>
            <Link to={country.healthcareHubPath} className="bx-text-link">
              Healthcare hub →
            </Link>
          </div>
        </div>

        <div className="bx-pharma-band">
          <h4>Pharmaceutical &amp; drug launch</h4>
          <div className="bx-link-row">
            <Link to={country.pharmaBofuPath} className="bx-text-link">
              Pharmaceutical market research company →
            </Link>
            <Link to={country.healthcareReportPath} className="bx-text-link">
              Healthcare market report →
            </Link>
            {country.medDevicesReportPath ? (
              <Link to={country.medDevicesReportPath} className="bx-text-link">
                Medical devices market report →
              </Link>
            ) : null}
          </div>
        </div>

        {SEGMENT_ORDER.map((segmentSlug) => {
          const segmentIndustries = industriesForSegment(segmentSlug, publishedIndustries);
          if (segmentIndustries.length === 0) return null;
          return (
            <div key={segmentSlug} className="bx-segment-block">
              <h4 className="bx-segment-label">{SEGMENT_LABEL[segmentSlug]}</h4>
              <div className="bx-index-card-grid">
                {segmentIndustries.map((industrySlug) => {
                  const industry = MATRIX_INDUSTRIES[industrySlug];
                  return (
                    <article key={industrySlug} className="bx-index-card">
                      <h5>{industry.displayName}</h5>
                      <Link to={getIndustryBofuPath(countrySlug, industrySlug)}>
                        Company-intent page →
                      </Link>
                      <Link to={getIndustryListiclePath(countrySlug, industrySlug)}>
                        Top firms (2026) →
                      </Link>
                    </article>
                  );
                })}
              </div>
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
    <section id={`country-${country.slug}`} className="bx-country-block">
      <div className="bx-inner">
        <div className="bx-country-block-head">
          <div>
            <div className="bx-eyebrow teal">
              <span className="bx-line" /> Global market
            </div>
            <h3 className="bx-h2">{country.label}</h3>
          </div>
          <div className="bx-link-row">
            <Link to={healthcarePath} className="bx-text-link">
              Healthcare hub →
            </Link>
            {midFunnelPath ? (
              <Link to={midFunnelPath} className="bx-text-link gold">
                Market research overview →
              </Link>
            ) : null}
          </div>
        </div>

        {(pharmaPath || healthcarePath) && (
          <div className="bx-pharma-band">
            <h4>Pharmaceutical &amp; healthcare</h4>
            <div className="bx-link-row">
              {pharmaPath ? (
                <Link to={pharmaPath} className="bx-text-link">
                  Pharmaceutical market research →
                </Link>
              ) : null}
              <Link to={healthcarePath} className="bx-text-link">
                Healthcare market research hub →
              </Link>
            </div>
          </div>
        )}

        {SEGMENT_ORDER.map((segmentSlug) => {
          const segmentIndustries = industriesForSegment(segmentSlug, publishedIndustries);
          if (segmentIndustries.length === 0) return null;
          return (
            <div key={segmentSlug} className="bx-segment-block">
              <h4 className="bx-segment-label">{SEGMENT_LABEL[segmentSlug]}</h4>
              <div className="bx-index-card-grid">
                {segmentIndustries.map((industrySlug) => {
                  const industry = MATRIX_INDUSTRIES[industrySlug];
                  return (
                    <article key={industrySlug} className="bx-index-card">
                      <h5>{industry.displayName}</h5>
                      <Link to={getIndustrySegmentCountryPath(country.slug, industrySlug)}>
                        {industry.displayNameShort} market research →
                      </Link>
                    </article>
                  );
                })}
              </div>
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
        title="Market Research by Industry | BioNixus"
        description={`Browse BioNixus market research by industry across ${COUNTRY_COUNT} global markets — Americas, Europe, MENA, Africa, and Asia-Pacific. MedTech, healthcare, FMCG, financial services, telecom, pharma, and more.`}
        canonical="/market-research-by-industry"
        jsonLd={jsonLd}
      />
      <style dangerouslySetInnerHTML={{ __html: PREMIUM_INDUSTRIES_CSS }} />
      <Navbar />
      <main className="bx-ind">
        {/* ===== HERO ===== */}
        <section className="bx-hero">
          <div className="bx-hero-bg" aria-hidden="true" />
          <div className="bx-hero-grid" aria-hidden="true">
            <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
              <defs>
                <pattern id="bxHexGridIndex" width="60" height="52" patternUnits="userSpaceOnUse">
                  <path
                    d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bxHexGridIndex)" />
            </svg>
          </div>
          <div className="bx-orbital" aria-hidden="true">
            <div className="bx-ring">
              <div className="bx-node" />
            </div>
            <div className="bx-ring">
              <div className="bx-node" />
            </div>
            <div className="bx-ring">
              <div className="bx-node" />
            </div>
          </div>

          <div className="bx-inner bx-hero-inner">
            <div className="bx-hero-copy">
              <nav className="bx-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to="/market-research">Market Research</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">By Industry</span>
              </nav>
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Global index
              </div>
              <h1>
                Market research by industry — <em>global coverage</em>
              </h1>
              <p className="bx-hero-tagline">Every country, every vertical, one evidence framework</p>
              <p className="bx-hero-sub">
                BioNixus is a global market research firm with U.S. headquarters, regional offices in London and
                Cairo, and field programmes across the Americas, Europe, MENA, Africa, and Asia-Pacific. This index
                maps <strong>{publishedIndustries.length} industries</strong> to{' '}
                <strong>{COUNTRY_COUNT} countries</strong> — from full GCC company-intent matrices to healthcare hubs
                and country–industry entry points worldwide.
              </p>
              <div className="bx-hero-actions">
                <a href="#region-americas" className="bx-btn-gold">
                  Jump to a region →
                </a>
                <Link to="/bionixus-industries" className="bx-btn-ghost">
                  <span aria-hidden="true">◈</span> Industries overview
                </Link>
              </div>
            </div>

            <div className="bx-hero-visual">
              <div className="bx-card">
                <div className="bx-card-head">
                  <h2>Index at a glance</h2>
                  <div className="bx-live">
                    <span className="bx-pulse" /> Live
                  </div>
                </div>
                <div className="bx-seg-rows">
                  <div className="bx-seg-row">
                    <span className="bx-seg-dot gold" aria-hidden="true" />
                    <div>
                      <div className="bx-seg-row-name">{COUNTRY_COUNT} countries</div>
                      <div className="bx-seg-row-tag">Americas · Europe · MENA · Africa · APAC</div>
                    </div>
                  </div>
                  <div className="bx-seg-row">
                    <span className="bx-seg-dot teal" aria-hidden="true" />
                    <div>
                      <div className="bx-seg-row-name">{publishedIndustries.length} industries</div>
                      <div className="bx-seg-row-tag">Pharma · B2B · B2C verticals</div>
                    </div>
                  </div>
                  <div className="bx-seg-row">
                    <span className="bx-seg-dot coral" aria-hidden="true" />
                    <div>
                      <div className="bx-seg-row-name">7 GCC matrix markets</div>
                      <div className="bx-seg-row-tag">Full BOFU + 2026 listicles</div>
                    </div>
                  </div>
                </div>
                <div className="bx-card-foot">
                  <strong>6 regions</strong> · GCC full matrix + global hubs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REGION RIBBON ===== */}
        <div className="bx-ribbon">
          <div className="bx-ribbon-inner">
            <div className="bx-ribbon-item">
              <span className="bx-ic" aria-hidden="true">◆</span> Americas
            </div>
            <div className="bx-ribbon-item">
              <span className="bx-ic" aria-hidden="true">◆</span> Europe &amp; UK
            </div>
            <div className="bx-ribbon-item">
              <span className="bx-ic" aria-hidden="true">◆</span> MENA &amp; GCC
            </div>
            <div className="bx-ribbon-item">
              <span className="bx-ic" aria-hidden="true">◆</span> Africa
            </div>
            <div className="bx-ribbon-item">
              <span className="bx-ic" aria-hidden="true">◆</span> Asia-Pacific
            </div>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="bx-stats">
          <div className="bx-stats-inner">
            <div className="bx-stat">
              <div className="bx-stat-num">{COUNTRY_COUNT}</div>
              <div className="bx-stat-label">Countries</div>
              <div className="bx-stat-sub">6 regional groups</div>
            </div>
            <div className="bx-stat">
              <div className="bx-stat-num">{publishedIndustries.length}</div>
              <div className="bx-stat-label">Industries</div>
              <div className="bx-stat-sub">Pharma · B2B · B2C</div>
            </div>
            <div className="bx-stat">
              <div className="bx-stat-num">7</div>
              <div className="bx-stat-label">GCC matrix markets</div>
              <div className="bx-stat-sub">Full BOFU coverage</div>
            </div>
            <div className="bx-stat">
              <div className="bx-stat-num">2026</div>
              <div className="bx-stat-label">Listicle guides</div>
              <div className="bx-stat-sub">Top firms by industry</div>
            </div>
          </div>
        </div>

        {/* ===== JUMP TO REGION ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Navigate
              </div>
              <h2 className="bx-h2">
                Jump to a <em>country</em>
              </h2>
              <p className="bx-lead">
                <Link to="/market-research">Market research hub</Link>
                {' · '}
                <Link to="/bionixus-industries">Industries overview</Link>
                {' · '}
                <Link to="/healthcare-market-research">Healthcare market research</Link>
                {' · '}
                <Link to="/global-websites">Global websites directory</Link>
              </p>
            </div>
            <nav aria-label="Jump to region" className="bx-index-jump-grid">
              {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
                <article key={group.region} className="bx-index-jump-region">
                  <h3>{group.region}</h3>
                  <div className="bx-chips">
                    {group.countries.map((country) => (
                      <a key={country.slug} href={`#country-${country.slug}`} className="bx-chip">
                        {country.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </nav>
          </div>
        </section>

        {/* ===== JUMP TO INDUSTRY ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> Verticals
              </div>
              <h2 className="bx-h2">
                Jump to an <em>industry</em>
              </h2>
            </div>
            {SEGMENT_ORDER.map((segmentSlug) => {
              const slugs = industriesForSegment(segmentSlug, publishedIndustries);
              if (slugs.length === 0) return null;
              const accent = SEGMENT_ACCENT[segmentSlug];
              return (
                <div key={segmentSlug} className="bx-segment-block">
                  <h3 className={`bx-eyebrow ${accent}`}>
                    <span className="bx-line" /> {SEGMENTS[segmentSlug].label}
                  </h3>
                  <div className="bx-chips">
                    {slugs.map((industrySlug) => (
                      <a key={industrySlug} href={`#industry-${industrySlug}`} className="bx-chip">
                        {MATRIX_INDUSTRIES[industrySlug].displayName}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== BY REGION / COUNTRY ===== */}
        {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
          <div key={group.region}>
            <div
              id={`region-${group.region.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-+$/, '')}`}
              className="bx-region-band"
            >
              <div className="bx-inner">
                <div className="bx-eyebrow gold">
                  <span className="bx-line" /> {group.region}
                </div>
                <h2 className="bx-h2">{group.region}</h2>
                <p className="bx-lead">{group.description}</p>
                <p className="bx-region-meta">
                  {group.countries.length} {group.countries.length === 1 ? 'market' : 'markets'} in this region
                </p>
              </div>
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
          </div>
        ))}

        {/* ===== BY INDUSTRY ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Cross-index
              </div>
              <h2 className="bx-h2">
                Browse by <em>industry</em>
              </h2>
              <p className="bx-lead center">
                GCC markets include listicle guides; all countries link to company-intent or industry entry pages.
              </p>
            </div>
          </div>
        </section>

        {publishedIndustries.map((industrySlug) => {
          const industry = MATRIX_INDUSTRIES[industrySlug];
          const segmentSlug = INDUSTRY_SEGMENT[industrySlug];
          const accent = SEGMENT_ACCENT[segmentSlug];
          return (
            <section
              key={industrySlug}
              id={`industry-${industrySlug}`}
              className="bx-section bx-industry-section"
            >
              <div className="bx-inner">
                <div className={`bx-eyebrow ${accent}`}>
                  <span className="bx-line" /> {SEGMENT_LABEL[segmentSlug]}
                </div>
                <h2 className="bx-h2">{industry.displayName}</h2>
                <p className="bx-lead">{industry.knowsAbout.slice(0, 3).join(' · ')}</p>

                {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
                  <div key={group.region} className="bx-industry-region-block">
                    <p className="bx-industry-region-label">{group.region}</p>
                    <div className="bx-index-card-grid">
                      {group.countries.map((country) => (
                        <article key={country.slug} className="bx-index-card">
                          <h5>{country.label}</h5>
                          <Link
                            to={
                              isMatrixCountrySlug(country.slug)
                                ? getIndustryBofuPath(country.slug, industrySlug)
                                : getIndustrySegmentCountryPath(country.slug, industrySlug)
                            }
                          >
                            {industry.displayNameShort} market research company →
                          </Link>
                          {isMatrixCountrySlug(country.slug) ? (
                            <Link to={getIndustryListiclePath(country.slug, industrySlug)}>
                              Top firms guide (2026) →
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

        {/* ===== FAQ ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Questions <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                Frequently asked <em>questions</em>
              </h2>
            </div>
            <div className="bx-faq-wrap">
              {HUB_FAQ.map((item) => (
                <details className="bx-faq" key={item.question}>
                  <summary>
                    {item.question}
                    <span className="bx-faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="bx-faq-a">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bx-cta-section">
          <div className="bx-cta-card">
            <h2>Plan your market research programme</h2>
            <p>
              Tell us the country, industry, and decision in front of you. We will scope the evidence to match it.
            </p>
            <div className="bx-cta-actions">
              <Link to="/contact" className="bx-btn-gold">
                Book a discovery call →
              </Link>
              <Link to="/market-research" className="bx-btn-ghost">
                Explore our services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
