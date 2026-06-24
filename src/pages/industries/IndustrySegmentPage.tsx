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
  MATRIX_INDUSTRIES,
  getIndustryBofuPath,
  type MatrixCountrySlug,
} from '@/data/industryMarketResearchMatrix';
import { PREMIUM_INDUSTRIES_CSS } from './premiumIndustriesCss';

const HUB_PATH = '/bionixus-industries';

/** Country cells available for every published matrix industry. */
const MATRIX_COUNTRY_ORDER: MatrixCountrySlug[] = [
  'saudi-arabia', 'uae', 'egypt',
  'kuwait', 'qatar', 'oman',
  'uk', 'usa', 'brazil', 'germany',
];

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
      areaServed: ['United States', 'United Kingdom', 'Saudi Arabia', 'United Arab Emirates', 'Egypt'],
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
                  Each industry has dedicated country pages across the GCC, Europe, and the Americas — Saudi Arabia,
                  UAE, Egypt, Kuwait, Qatar, Oman, UK, USA, Brazil, and Germany. Follow a link to the market you are
                  planning for, or start from the{' '}
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
                        {MATRIX_COUNTRY_ORDER.map((countrySlug) => (
                          <Link key={countrySlug} to={getIndustryBofuPath(countrySlug, industrySlug)} className="bx-chip">
                            {industry.displayNameShort} in {MATRIX_COUNTRIES[countrySlug].label}
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
