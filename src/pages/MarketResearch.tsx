import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema, buildFAQSchema, buildProfessionalServiceSchema } from '@/lib/seo/schemas';
import { INDUSTRY_SEGMENT, SEGMENT_ORDER, SEGMENTS, type SegmentSlug } from '@/data/bionixusIndustrySegments';
import {
  MATRIX_COUNTRIES,
  MATRIX_COUNTRY_SLUGS_ORDERED,
  MATRIX_INDUSTRIES,
  MATRIX_INDUSTRY_SLUGS_ORDERED,
} from '@/data/industryMarketResearchMatrix';
import {
  MARKET_RESEARCH_BY_INDUSTRY_COUNTRIES,
  MARKET_RESEARCH_BY_INDUSTRY_GROUPS,
  getHealthcareHubPathForIndexCountry,
  getMidFunnelPathForIndexCountry,
  getPharmaBofuPathForIndexCountry,
  type MarketResearchIndexCountry,
} from '@/data/industryHubCountries';
import { MARKET_RESEARCH_HUB_SECTIONS } from '@/data/marketResearchCountryContent';
import { PREMIUM_INDUSTRIES_CSS } from '@/pages/industries/premiumIndustriesCss';

const HUB_PATH = '/market-research';
const COUNTRY_COUNT = MARKET_RESEARCH_BY_INDUSTRY_COUNTRIES.length;

const publishedIndustries = MATRIX_INDUSTRY_SLUGS_ORDERED.filter(
  (slug) => MATRIX_INDUSTRIES[slug].published,
);

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

const PRIORITY_RIBBON = [
  'United States',
  'Canada',
  'Europe & UK',
  'Brazil',
  'MENA & GCC',
  '38 countries · 16 industries',
];

const HUB_FAQ = [
  {
    question: 'Which market research service should we start with?',
    answer:
      'Start from the decision, not the method. If you need to size an opportunity or validate a forecast, lead with quantitative research. If you need to understand why a prescriber hesitates or a committee stalls, lead with qualitative. If the work runs inside a regulated care environment with payer and procurement gates, use a healthcare-specific program. Most launch and access projects end up blending the first two.',
  },
  {
    question: 'Which countries does BioNixus cover from this hub?',
    answer: `BioNixus publishes market research entry points across ${COUNTRY_COUNT} countries — prioritising the United States, Canada, Europe, Brazil, and MENA, with further coverage across Africa and Asia-Pacific. Seven GCC markets include the full sixteen-industry matrix with company-intent pages and 2026 listicles; global markets link to healthcare hubs, pharmaceutical BOFU pages, and country–industry URLs.`,
  },
  {
    question: 'Which industries have dedicated pages?',
    answer:
      'Sixteen industry verticals: MedTech, healthcare providers, biotech, consumer health, FMCG, retail, financial services, telecom, technology, energy, real estate, automotive, hospitality, public sector, education, and media. Each has a global industry hub at /market-research/{industry} plus country-specific entry points worldwide.',
  },
  {
    question: 'Can BioNixus combine US, European, and MENA evidence in one program?',
    answer:
      'Yes — and it is one of the most common briefs we run. A single program office coordinates fieldwork across markets so leadership gets numbers that compare like-for-like, while local modules preserve FDA, HTA, SFDA, and payer nuance that a regional average would flatten.',
  },
  {
    question: 'How fast can a market research program start?',
    answer:
      'After a short objective workshop and a feasibility check, focused modules can move to field within one to two weeks. Multi-country programs take longer — ethics approvals and hospital access add real calendar time — and where a specialist sample is genuinely scarce, we tell you up front rather than after the contract is signed.',
  },
] as const;

function countryAnchorId(slug: string): string {
  return `country-${slug}`;
}

function regionAnchorId(region: string): string {
  return `region-${region.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-+$/, '')}`;
}

const PRIORITY_MARKETS = [
  {
    slug: 'usa',
    regionLabel: 'North America',
    title: 'United States',
    description:
      'US-headquartered programmes with FDA-aware pharma, medtech, and cross-industry fieldwork.',
    primaryHref: '/pharmaceutical-market-research-usa',
    primaryLabel: 'Pharmaceutical market research →',
    extraLinks: [
      { to: '/healthcare-market-research/united-states', label: 'Healthcare hub' },
      { to: '/healthcare-market-research-usa', label: 'Market research overview' },
    ],
  },
  {
    slug: 'canada',
    regionLabel: 'North America',
    title: 'Canada',
    description:
      'Health Canada–aware pharmaceutical and healthcare research with harmonised North American readouts.',
    primaryHref: '/pharmaceutical-market-research-canada',
    primaryLabel: 'Pharmaceutical market research →',
    extraLinks: [{ to: '/healthcare-market-research/canada', label: 'Healthcare hub' }],
  },
  {
    slug: 'europe',
    regionLabel: 'Europe & UK',
    title: 'Europe',
    description:
      'London regional office and EU5+ fieldwork for HTA-aware pharmaceutical and industry programmes.',
    primaryHref: '/healthcare-market-research/europe',
    primaryLabel: 'Europe healthcare hub →',
    extraLinks: [
      { to: '/healthcare-market-research/uk', label: 'United Kingdom' },
      { to: '/pharmaceutical-market-research-germany', label: 'Germany pharma' },
      { to: '/pharmaceutical-market-research-france', label: 'France pharma' },
    ],
  },
  {
    slug: 'brazil',
    regionLabel: 'Latin America',
    title: 'Brazil',
    description:
      'Portuguese field teams and ANVISA-aware pharmaceutical research across hospital and payer networks.',
    primaryHref: '/brazil-pharmaceutical-market-research',
    primaryLabel: 'Pharmaceutical market research →',
    extraLinks: [{ to: '/healthcare-market-research/brazil', label: 'Healthcare hub' }],
  },
  {
    slug: 'mena',
    regionLabel: 'MENA & GCC',
    title: 'MENA & GCC',
    description:
      'Deep GCC heritage — SFDA, MOHAP, and EDA-aware research with the fullest sixteen-industry matrix.',
    primaryHref: '/bionixus-market-research-middle-east',
    primaryLabel: 'Middle East pillar →',
    extraLinks: [
      { to: '/healthcare-market-research/saudi-arabia', label: 'Saudi Arabia' },
      { to: '/healthcare-market-research/uae', label: 'UAE' },
      { to: '/market-research-by-industry', label: 'Full industry index' },
    ],
  },
] as const;

function PriorityMarketCard({
  market,
}: {
  market: (typeof PRIORITY_MARKETS)[number];
}) {
  const anchorSlug =
    market.slug === 'mena'
      ? 'saudi-arabia'
      : market.slug === 'europe'
        ? 'uk'
        : market.slug;

  return (
    <article className="bx-priority-card">
      <span className="bx-priority-region">{market.regionLabel}</span>
      <h3>{market.title}</h3>
      <p>{market.description}</p>
      <div className="bx-priority-links">
        <Link to={market.primaryHref}>{market.primaryLabel}</Link>
        {market.extraLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label} →
          </Link>
        ))}
        <a href={`#${countryAnchorId(anchorSlug)}`} className="bx-priority-go">
          All {market.title} markets ↓
        </a>
      </div>
    </article>
  );
}

function CountryQuickLinks({ country }: { country: MarketResearchIndexCountry }) {
  const healthcare = getHealthcareHubPathForIndexCountry(country);
  const pharma = getPharmaBofuPathForIndexCountry(country);
  const midFunnel = getMidFunnelPathForIndexCountry(country);

  return (
    <article id={countryAnchorId(country.slug)} className="bx-index-card">
      <h5>{country.label}</h5>
      {midFunnel ? (
        <Link to={midFunnel}>Market research overview →</Link>
      ) : null}
      {pharma ? <Link to={pharma}>Pharmaceutical research →</Link> : null}
      <Link to={healthcare}>Healthcare hub →</Link>
      <Link to="/market-research-by-industry">Industry index →</Link>
    </article>
  );
}

export default function MarketResearch() {
  const [activeService, setActiveService] = useState<'quantitative' | 'qualitative'>('quantitative');

  const jsonLd = [
    buildProfessionalServiceSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: HUB_PATH },
    ]),
    buildFAQSchema([...HUB_FAQ], { pageUrl: `https://www.bionixus.com${HUB_PATH}` }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Market Research Services Hub | Global Coverage | Healthcare & Pharma | BioNixus"
        description={`BioNixus market research across ${COUNTRY_COUNT} countries and ${publishedIndustries.length} industries — US, Canada, Europe, Brazil, and MENA priority markets. Quantitative, qualitative, and healthcare-specific programmes for launch, access, and pricing decisions.`}
        canonical={HUB_PATH}
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
                <pattern id="bxHexGridMrHub" width="60" height="52" patternUnits="userSpaceOnUse">
                  <path
                    d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bxHexGridMrHub)" />
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
                <span aria-current="page">Market Research</span>
              </nav>
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Global services hub
              </div>
              <h1>
                Market research for <em>healthcare, pharma &amp; industry</em>
              </h1>
              <p className="bx-hero-tagline">Every country · every vertical · one evidence framework</p>
              <p className="bx-hero-sub">
                BioNixus is US-headquartered with regional offices in London and Cairo and field programmes
                prioritising the <strong>United States, Canada, Europe, Brazil, and MENA</strong> — plus{' '}
                <strong>{COUNTRY_COUNT} countries</strong> and <strong>{publishedIndustries.length} industries</strong>{' '}
                worldwide. Choose your market, your vertical, or your research method below.
              </p>
              <div className="bx-hero-actions">
                <a href="#priority-markets" className="bx-btn-gold">
                  Priority markets →
                </a>
                <Link to="/market-research-by-industry" className="bx-btn-ghost">
                  <span aria-hidden="true">◈</span> Full country × industry index
                </Link>
              </div>
            </div>

            <div className="bx-hero-visual">
              <div className="bx-card">
                <div className="bx-card-head">
                  <h2>Hub at a glance</h2>
                  <div className="bx-live">
                    <span className="bx-pulse" /> Live
                  </div>
                </div>
                <div className="bx-seg-rows">
                  <div className="bx-seg-row">
                    <span className="bx-seg-dot gold" aria-hidden="true" />
                    <div>
                      <div className="bx-seg-row-name">{COUNTRY_COUNT} countries</div>
                      <div className="bx-seg-row-tag">US · Canada · Europe · Brazil · MENA first</div>
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
                      <div className="bx-seg-row-name">Quant + qual + healthcare</div>
                      <div className="bx-seg-row-tag">One decision framework</div>
                    </div>
                  </div>
                </div>
                <div className="bx-card-foot">
                  <strong>38 countries</strong> fielded · 127+ projects delivered
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRIORITY RIBBON ===== */}
        <div className="bx-ribbon">
          <div className="bx-ribbon-inner">
            {PRIORITY_RIBBON.map((item) => (
              <div key={item} className="bx-ribbon-item">
                <span className="bx-ic" aria-hidden="true">
                  ◆
                </span>{' '}
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="bx-stats">
          <div className="bx-stats-inner">
            <div className="bx-stat">
              <div className="bx-stat-num">{COUNTRY_COUNT}</div>
              <div className="bx-stat-label">Countries indexed</div>
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
              <div className="bx-stat-num">10–14d</div>
              <div className="bx-stat-label">Typical scope turnaround</div>
              <div className="bx-stat-sub">Objective to proposal</div>
            </div>
          </div>
        </div>

        {/* ===== PRIORITY MARKETS ===== */}
        <section id="priority-markets" className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Priority coverage
              </div>
              <h2 className="bx-h2">
                United States, Canada, Europe, Brazil &amp; <em>MENA</em>
              </h2>
              <p className="bx-lead">
                {MARKET_RESEARCH_HUB_SECTIONS.introExtra}{' '}
                <Link to="/healthcare-market-research">Healthcare market research hub</Link>
                {' · '}
                <Link to="/bionixus-industries">Industries overview</Link>
              </p>
            </div>
            <div className="bx-priority-grid">
              {PRIORITY_MARKETS.map((market) => (
                <PriorityMarketCard key={market.slug} market={market} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== ALL COUNTRIES ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> Global reach
              </div>
              <h2 className="bx-h2">
                All <em>{COUNTRY_COUNT} countries</em>
              </h2>
              <p className="bx-lead">
                Jump to a region, then open healthcare hubs, pharmaceutical pages, or the full{' '}
                <Link to="/market-research-by-industry">country × industry index</Link>.
              </p>
            </div>
            <nav aria-label="Jump to region" className="bx-index-jump-grid">
              {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
                <article key={group.region} className="bx-index-jump-region">
                  <h3>
                    <a href={`#${regionAnchorId(group.region)}`}>{group.region}</a>
                  </h3>
                  <div className="bx-chips">
                    {group.countries.map((country) => (
                      <a key={country.slug} href={`#${countryAnchorId(country.slug)}`} className="bx-chip">
                        {country.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </nav>
          </div>
        </section>

        {MARKET_RESEARCH_BY_INDUSTRY_GROUPS.map((group) => (
          <div key={group.region}>
            <div id={regionAnchorId(group.region)} className="bx-region-band">
              <div className="bx-inner">
                <div className="bx-eyebrow gold">
                  <span className="bx-line" /> {group.region}
                </div>
                <h2 className="bx-h2">{group.region}</h2>
                <p className="bx-lead">{group.description}</p>
                <p className="bx-region-meta">
                  {group.countries.length} {group.countries.length === 1 ? 'market' : 'markets'}
                </p>
              </div>
            </div>
            <section className="bx-section cream">
              <div className="bx-inner">
                <div className="bx-index-card-grid">
                  {group.countries.map((country) => (
                    <CountryQuickLinks key={country.slug} country={country} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        ))}

        {/* ===== ALL INDUSTRIES ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Verticals
              </div>
              <h2 className="bx-h2">
                All <em>{publishedIndustries.length} industries</em>
              </h2>
              <p className="bx-lead center">
                Three segments — pharma &amp; healthcare, B2B, and B2C — each with global hub pages and
                country-specific entry points.
              </p>
            </div>
            <div className="bx-seg-grid">
              {SEGMENT_ORDER.map((segmentSlug) => {
                const segment = SEGMENTS[segmentSlug];
                const accent = SEGMENT_ACCENT[segmentSlug];
                return (
                  <Link key={segmentSlug} to={segment.path} className={`bx-seg-card ${accent}`}>
                    <div className={`bx-seg-icon ${accent}`} aria-hidden="true">
                      ◈
                    </div>
                    <h3>{segment.label}</h3>
                    <p className="bx-seg-tag">{segment.tagline}</p>
                    <p>{segment.intro.slice(0, 160)}…</p>
                    <span className="bx-seg-go">Explore segment →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {SEGMENT_ORDER.map((segmentSlug) => {
          const slugs = publishedIndustries.filter((s) => INDUSTRY_SEGMENT[s] === segmentSlug);
          if (slugs.length === 0) return null;
          const accent = SEGMENT_ACCENT[segmentSlug];
          return (
            <section key={segmentSlug} className="bx-section cream">
              <div className="bx-inner">
                <div className={`bx-eyebrow ${accent}`}>
                  <span className="bx-line" /> {SEGMENT_LABEL[segmentSlug]}
                </div>
                <h2 className="bx-h2">{SEGMENTS[segmentSlug].label}</h2>
                <div className="bx-cover-grid">
                  {slugs.map((industrySlug) => {
                    const industry = MATRIX_INDUSTRIES[industrySlug];
                    return (
                      <article key={industrySlug} className="bx-cover-card">
                        <h3>
                          <Link to={`/market-research/${industrySlug}`}>{industry.displayName}</Link>
                        </h3>
                        <p className="bx-cover-knows">{industry.knowsAbout.slice(0, 3).join(' · ')}</p>
                        <div className="bx-chips">
                          <Link to={`/market-research/${industrySlug}`} className="bx-chip">
                            Global hub
                          </Link>
                          <Link to="/market-research-by-industry" className="bx-chip">
                            By country
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* ===== RESEARCH METHODS ===== */}
        <section className="bx-section dark">
          <div className="bx-dark-bg" aria-hidden="true" />
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Methods
              </div>
              <h2 className="bx-h2 light">
                Choose your <em>research approach</em>
              </h2>
              <p className="bx-lead light">
                Quantitative when the question is how big; qualitative when the question is why; healthcare-specific
                when regulators and payers gate the decision.
              </p>
            </div>

            <div className="bx-service-tabs" role="tablist" aria-label="Research method">
              <button
                type="button"
                role="tab"
                aria-selected={activeService === 'quantitative'}
                className={`bx-service-tab${activeService === 'quantitative' ? ' active' : ''}`}
                onClick={() => setActiveService('quantitative')}
              >
                Quantitative
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeService === 'qualitative'}
                className={`bx-service-tab${activeService === 'qualitative' ? ' active' : ''}`}
                onClick={() => setActiveService('qualitative')}
              >
                Qualitative
              </button>
            </div>

            <div className="bx-service-panel" role="tabpanel">
              {activeService === 'quantitative' ? (
                <>
                  <p>
                    Reach for quantitative when the question is how big, how fast, or how many. Market sizing,
                    segmentation, physician surveys, pricing research, and statistical modeling — sized so the answer
                    holds up when finance and leadership press on it. Review the{' '}
                    <Link to="/quantitative-healthcare-market-research">
                      quantitative healthcare market research guide
                    </Link>
                    .
                  </p>
                  <Link to="/services/quantitative-research" className="bx-btn-gold">
                    Open quantitative research →
                  </Link>
                </>
              ) : (
                <>
                  <p>
                    Reach for qualitative when the question is why. In-depth interviews, advisory boards,
                    patient-pathway mapping, and synthesis that surfaces the decision drivers and adoption barriers a
                    survey can measure but never explain.
                  </p>
                  <Link to="/services/qualitative-research" className="bx-btn-gold">
                    Open qualitative research →
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ===== METHOD TABLE ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> Compare
              </div>
              <h2 className="bx-h2">{MARKET_RESEARCH_HUB_SECTIONS.methodHeading}</h2>
            </div>
            <div className="bx-method-table-wrap">
              <table className="bx-method-table">
                <thead>
                  <tr>
                    <th scope="col">Method</th>
                    <th scope="col">Best when</th>
                    <th scope="col">Primary output</th>
                    <th scope="col">Deep dive</th>
                  </tr>
                </thead>
                <tbody>
                  {MARKET_RESEARCH_HUB_SECTIONS.methodRows.map((row) => (
                    <tr key={row.method}>
                      <td>{row.method}</td>
                      <td>{row.when}</td>
                      <td>{row.output}</td>
                      <td>
                        <Link to={row.link}>Open guide →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== WHY + PROOF ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> Why BioNixus
              </div>
              <h2 className="bx-h2">{MARKET_RESEARCH_HUB_SECTIONS.whyHeading}</h2>
            </div>
            <div className="bx-prose">
              {MARKET_RESEARCH_HUB_SECTIONS.whyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <div className="bx-proof-grid">
              <article className="bx-proof-card">
                <h3>Faster launch prioritization</h3>
                <p>
                  Sequencing accounts by evidence rather than instinct — putting early effort where conversion was
                  most likely.
                </p>
              </article>
              <article className="bx-proof-card">
                <h3>Sharper physician engagement</h3>
                <p>
                  Knowing what physicians actually weigh lets teams lead with the message that mattered, cutting
                  friction out of scientific exchange.
                </p>
              </article>
              <article className="bx-proof-card">
                <h3>Stronger market access planning</h3>
                <p>
                  Mapping the evidence payers ask for against real implementation constraints keeps access narratives
                  defensible at committee.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ===== GCC QUICK LINKS ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> GCC matrix
              </div>
              <h2 className="bx-h2">
                MENA markets with <em>full industry matrix</em>
              </h2>
            </div>
            <div className="bx-index-card-grid">
              {MATRIX_COUNTRY_SLUGS_ORDERED.map((slug) => {
                const country = MATRIX_COUNTRIES[slug];
                return (
                  <article key={slug} className="bx-index-card">
                    <h5>
                      {country.label} · {country.regulatorShort}
                    </h5>
                    <Link to={country.midFunnelPath}>Market research overview →</Link>
                    <Link to={country.pharmaBofuPath}>Pharmaceutical research →</Link>
                    <Link to={country.healthcareHubPath}>Healthcare hub →</Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== NEXT STEPS ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> Explore further
              </div>
              <h2 className="bx-h2">Related hubs &amp; services</h2>
            </div>
            <div className="bx-next-grid">
              <Link to="/market-research-by-industry" className="bx-next-card">
                <span className="bx-next-label">
                  Country × industry index <span className="bx-next-arrow">→</span>
                </span>
                <span className="bx-next-desc">
                  Full cross-index of every country and industry with BOFU and listicle links.
                </span>
              </Link>
              <Link to="/market-research-healthcare" className="bx-next-card">
                <span className="bx-next-label">
                  Healthcare market research <span className="bx-next-arrow">→</span>
                </span>
                <span className="bx-next-desc">
                  Physician, payer, and patient evidence for commercial, medical, and access teams.
                </span>
              </Link>
              <Link to="/bionixus-market-research-middle-east" className="bx-next-card">
                <span className="bx-next-label">
                  Middle East pillar <span className="bx-next-arrow">→</span>
                </span>
                <span className="bx-next-desc">GCC evidence playbook — launch readiness and access strategy.</span>
              </Link>
              <Link to="/qualitative-market-research" className="bx-next-card">
                <span className="bx-next-label">
                  Qualitative research guide <span className="bx-next-arrow">→</span>
                </span>
                <span className="bx-next-desc">
                  In-depth interviews, focus groups, and stakeholder conversations.
                </span>
              </Link>
            </div>
          </div>
        </section>

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
              <Link to="/market-research-by-industry" className="bx-btn-ghost">
                Browse country × industry index
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
