import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  SEGMENTS,
  SEGMENT_ORDER,
  getSegmentMatrixIndustries,
  type SegmentSlug,
} from '@/data/bionixusIndustrySegments';
import {
  MATRIX_COUNTRIES,
  MATRIX_COUNTRY_SLUGS_ORDERED,
  MATRIX_INDUSTRIES,
  getIndustryBofuPath,
} from '@/data/industryMarketResearchMatrix';
import { HEALTHCARE_HUB_COUNTRY_SLUGS } from '@/data/healthcareHubCountries';
import {
  B2B_AREA_SERVED,
  B2B_COUNTRY_GROUPS,
  B2C_AREA_SERVED,
  B2C_COUNTRY_GROUPS,
  getIndustriesHubCountryPath,
  getIndustrySegmentCountryPath,
} from '@/data/industryHubCountries';
import { sortBySegmentCountryPriority } from '@/data/segmentCountryOrder';
import { resolveCountryConfig } from '@/lib/constants/countries';
import { PREMIUM_INDUSTRIES_CSS } from './premiumIndustriesCss';

const HUB_PATH = '/bionixus-industries';

const MATRIX_COUNTRY_SET = new Set<string>(MATRIX_COUNTRY_SLUGS_ORDERED);

const ALL_SEGMENT_COUNTRY_GROUPS = B2B_COUNTRY_GROUPS;

function getSegmentCountries(slug: SegmentSlug) {
  if (slug === 'pharma-healthcare') {
    return sortBySegmentCountryPriority(
      HEALTHCARE_HUB_COUNTRY_SLUGS.map((countrySlug) => {
        const config = resolveCountryConfig(countrySlug);
        return { slug: countrySlug, label: config.name };
      }),
    );
  }
  return sortBySegmentCountryPriority(ALL_SEGMENT_COUNTRY_GROUPS.flatMap((group) => group.countries));
}

function getSegmentIndustryCountryPath(
  slug: SegmentSlug,
  countrySlug: string,
  industrySlug: Parameters<typeof getIndustryBofuPath>[1],
) {
  if (slug === 'pharma-healthcare') {
    if (MATRIX_COUNTRY_SET.has(countrySlug)) {
      return getIndustryBofuPath(countrySlug as Parameters<typeof getIndustryBofuPath>[0], industrySlug);
    }
    return `/healthcare-market-research/${countrySlug}`;
  }
  return getIndustrySegmentCountryPath(countrySlug, industrySlug);
}

const SEGMENT_COUNTRY_LEAD: Record<SegmentSlug, string> = {
  'pharma-healthcare':
    'Each industry links to country pages across the Americas, Europe, MENA & GCC, and Asia-Pacific — GCC matrix markets use dedicated industry BOFU pages; all other hubs link to our healthcare country programmes.',
  b2b: 'Each industry has dedicated country pages across the United States, United Kingdom, Germany, Brazil, UAE, Saudi Arabia, and the wider MENA, African, and European markets.',
  b2c: 'Each industry has dedicated country pages across the United States, United Kingdom, Germany, Brazil, UAE, Saudi Arabia, and the wider MENA, African, and European markets.',
};

/** Accent colour per segment (teal / gold / coral) used for the eyebrow chrome. */
const SEGMENT_ACCENT: Record<SegmentSlug, 'teal' | 'gold' | 'coral'> = {
  'pharma-healthcare': 'teal',
  b2b: 'gold',
  b2c: 'coral',
};

type IndustrySegmentPageProps = {
  slug: SegmentSlug;
};

export default function IndustrySegmentPage({ slug }: IndustrySegmentPageProps) {
  const segment = SEGMENTS[slug];
  if (!segment) {
    return null;
  }

  const accent = SEGMENT_ACCENT[slug];
  const coveredIndustries = getSegmentMatrixIndustries(slug);
  const segmentCountries = getSegmentCountries(slug);
  const otherSegments = SEGMENT_ORDER.filter((s) => s !== slug).map((s) => SEGMENTS[s]);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: segment.h1,
      serviceType: segment.label,
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      areaServed: slug === 'pharma-healthcare'
        ? [
            'United States',
            'Canada',
            'Brazil',
            'United Kingdom',
            'Germany',
            'France',
            'Italy',
            'Spain',
            'Saudi Arabia',
            'United Arab Emirates',
            'Egypt',
            'Kuwait',
            'Qatar',
            'Oman',
            'Bahrain',
            'Turkey',
            'Japan',
            'China',
            'India',
            'Singapore',
            'Australia',
          ]
        : slug === 'b2b'
          ? B2B_AREA_SERVED
          : slug === 'b2c'
            ? B2C_AREA_SERVED
            : MATRIX_COUNTRY_SLUGS_ORDERED.map((countrySlug) => MATRIX_COUNTRIES[countrySlug].label),
      url: `https://www.bionixus.com${segment.path}`,
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Industries', href: HUB_PATH },
      { name: segment.label, href: segment.path },
    ]),
    buildFAQSchema(segment.faqItems, { pageUrl: `https://www.bionixus.com${segment.path}` }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={segment.seoTitle}
        description={segment.seoDescription}
        canonical={segment.path}
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
                <pattern id="bxHexGridSeg" width="60" height="52" patternUnits="userSpaceOnUse">
                  <path d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bxHexGridSeg)" />
            </svg>
          </div>
          <div className="bx-orbital" aria-hidden="true">
            <div className="bx-ring"><div className="bx-node" /></div>
            <div className="bx-ring"><div className="bx-node" /></div>
            <div className="bx-ring"><div className="bx-node" /></div>
          </div>

          <div className="bx-inner bx-hero-inner bx-solo">
            <div className="bx-hero-copy">
              <nav className="bx-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to={HUB_PATH}>Industries</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{segment.label}</span>
              </nav>
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> {segment.label}
              </div>
              <h1>{segment.h1}</h1>
              <p className="bx-hero-tagline">{segment.tagline}</p>
              <p className="bx-hero-sub">{segment.intro}</p>
              <div className="bx-hero-actions">
                <Link to="/market-research-by-industry" className="bx-btn-gold">
                  Browse the industries index →
                </Link>
                <Link to={HUB_PATH} className="bx-btn-ghost">
                  <span aria-hidden="true">◈</span> Across-industries hub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REGION RIBBON ===== */}
        <div className="bx-ribbon">
          <div className="bx-ribbon-inner">
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Americas</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Europe &amp; UK</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> GCC &amp; MENA</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> Bilingual Arabic–English fieldwork</div>
            <div className="bx-ribbon-item"><span className="bx-ic" aria-hidden="true">◆</span> One evidence framework</div>
          </div>
        </div>

        {/* ===== HOW WE APPROACH ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> How we work
              </div>
              <h2 className="bx-h2">
                How we approach <em>{segment.label.toLowerCase()} research</em>
              </h2>
            </div>
            <div className="bx-prose">
              {segment.bodyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p>
                This section sits inside the{' '}
                <Link to={HUB_PATH}>BioNixus across-industries hub</Link>, which links our pharmaceutical and
                healthcare work to the broader B2B and B2C research we run for the same clients.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHO BRIEFS US (dark) ===== */}
        <section className="bx-section dark">
          <div className="bx-dark-bg" aria-hidden="true" />
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> Who briefs us
              </div>
              <h2 className="bx-h2 light">
                The teams that <em>commission this work</em>
              </h2>
            </div>
            <div className="bx-narrative">
              <p>{segment.buyerContext}</p>
              <p>
                Working across more than one segment? Move between{' '}
                {otherSegments.map((other, i) => (
                  <span key={other.slug}>
                    <Link to={other.path}>{other.label.toLowerCase()}</Link>
                    {i === 0 ? ' and ' : ''}
                  </span>
                ))}{' '}
                — all governed by the same sampling discipline and senior-led analysis.
              </p>
            </div>
          </div>
        </section>

        {/* ===== INDUSTRIES WE COVER ===== */}
        {coveredIndustries.length > 0 ? (
          <section className="bx-section cream">
            <div className="bx-inner">
              <div className="bx-section-head">
                <div className={`bx-eyebrow ${accent}`}>
                  <span className="bx-line" /> Coverage
                </div>
                <h2 className="bx-h2">
                  Industries we cover in this <em>segment</em>
                </h2>
                <p className="bx-lead">
                  {SEGMENT_COUNTRY_LEAD[slug]} Follow a link to the market you are planning for, or start from the{' '}
                  <Link to="/market-research-by-industry">full industries index</Link>.
                </p>
              </div>
              <div className="bx-cover-grid">
                {coveredIndustries.map((industrySlug) => {
                  const industry = MATRIX_INDUSTRIES[industrySlug];
                  return (
                    <article key={industrySlug} className="bx-cover-card">
                      <h3>{industry.displayName}</h3>
                      <p className="bx-cover-knows">{industry.knowsAbout.slice(0, 3).join(' · ')}</p>
                      <div className="bx-chips">
                        {segmentCountries.map((country) => (
                          <Link
                            key={country.slug}
                            to={getSegmentIndustryCountryPath(slug, country.slug, industrySlug)}
                            className="bx-chip"
                          >
                            {industry.displayNameShort} in {country.label}
                          </Link>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        {slug === 'pharma-healthcare' ? (
          <section className="bx-section dark">
            <div className="bx-dark-bg" aria-hidden="true" />
            <div className="bx-inner">
              <div className="bx-section-head">
                <div className="bx-eyebrow teal">
                  <span className="bx-line" /> Global coverage
                </div>
                <h2 className="bx-h2 light">
                  Countries we <em>serve</em>
                </h2>
                <p className="bx-lead light">
                  Pharmaceutical and healthcare research across the Americas, Europe, MENA &amp; GCC, and Asia-Pacific.
                  Select a country hub for local fieldwork context, or browse the{' '}
                  <Link to="/healthcare-market-research">healthcare market research hub</Link>.
                </p>
              </div>
              <div className="bx-country-grid bx-country-grid--flat">
                <article className="bx-country-region bx-country-region--full">
                  <div className="bx-chips">
                    {segmentCountries.map((country) => (
                      <Link
                        key={country.slug}
                        to={`/healthcare-market-research/${country.slug}`}
                        className="bx-chip"
                      >
                        {country.label}
                      </Link>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </section>
        ) : null}

        {slug === 'b2b' ? (
          <section className="bx-section dark">
            <div className="bx-dark-bg" aria-hidden="true" />
            <div className="bx-inner">
              <div className="bx-section-head">
                <div className="bx-eyebrow gold">
                  <span className="bx-line" /> Global coverage
                </div>
                <h2 className="bx-h2 light">
                  Countries we <em>serve</em>
                </h2>
                <p className="bx-lead light">
                  B2B market research across MENA &amp; GCC, Africa, Europe, and the Americas — technology, energy,
                  real estate, public sector, and education. Select a country for local fieldwork, or browse{' '}
                  <Link to="/market-research/technology">technology market research</Link>.
                </p>
              </div>
              <div className="bx-country-grid bx-country-grid--flat">
                <article className="bx-country-region bx-country-region--full">
                  <div className="bx-chips">
                    {sortBySegmentCountryPriority(B2B_COUNTRY_GROUPS.flatMap((group) => group.countries)).map(
                      (country) => (
                        <Link
                          key={country.slug}
                          to={getIndustriesHubCountryPath(country, 'b2b')}
                          className="bx-chip"
                        >
                          {country.label}
                        </Link>
                      ),
                    )}
                  </div>
                </article>
              </div>
            </div>
          </section>
        ) : null}

        {slug === 'b2c' ? (
          <section className="bx-section dark">
            <div className="bx-dark-bg" aria-hidden="true" />
            <div className="bx-inner">
              <div className="bx-section-head">
                <div className="bx-eyebrow coral">
                  <span className="bx-line" /> Global coverage
                </div>
                <h2 className="bx-h2 light">
                  Countries we <em>serve</em>
                </h2>
                <p className="bx-lead light">
                  B2C market research across MENA &amp; GCC, Africa, Europe, and the Americas — FMCG, retail,
                  financial services, telecom, automotive, hospitality, and media. Select a country for local fieldwork,
                  or browse <Link to="/market-research/fmcg">FMCG market research</Link>.
                </p>
              </div>
              <div className="bx-country-grid bx-country-grid--flat">
                <article className="bx-country-region bx-country-region--full">
                  <div className="bx-chips">
                    {sortBySegmentCountryPriority(B2C_COUNTRY_GROUPS.flatMap((group) => group.countries)).map(
                      (country) => (
                        <Link
                          key={country.slug}
                          to={getIndustriesHubCountryPath(country, 'b2c')}
                          className="bx-chip"
                        >
                          {country.label}
                        </Link>
                      ),
                    )}
                  </div>
                </article>
              </div>
            </div>
          </section>
        ) : null}

        {/* ===== EXPLORE IN THIS SECTION ===== */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Explore
              </div>
              <h2 className="bx-h2">
                Explore in this <em>section</em>
              </h2>
            </div>
            <div className="bx-next-grid">
              {segment.featuredLinks.map((link) => (
                <Link key={`${link.to}-${link.label}`} to={link.to} className="bx-next-card">
                  <span className="bx-next-label">
                    {link.label} <span className="bx-next-arrow" aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Questions <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                Frequently asked <em>questions</em>
              </h2>
            </div>
            <div className="bx-faq-wrap">
              {segment.faqItems.map((item) => (
                <details className="bx-faq" key={item.question}>
                  <summary>
                    {item.question}
                    <span className="bx-faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="bx-faq-a">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bx-cta-section">
          <div className="bx-cta-card">
            <h2>Plan your {segment.label.toLowerCase()} research</h2>
            <p>Tell us the decision in front of you. We will scope the evidence to match it.</p>
            <div className="bx-cta-actions">
              <Link to="/contact" className="bx-btn-gold">Book a discovery call →</Link>
              <Link to={HUB_PATH} className="bx-btn-ghost">Back to the industries hub</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
