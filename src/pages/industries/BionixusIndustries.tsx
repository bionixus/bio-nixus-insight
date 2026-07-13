import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedPathForLanguage, localizedContactPath } from '@/lib/seo';
import { SEGMENTS, SEGMENT_ORDER, type SegmentSlug } from '@/data/bionixusIndustrySegments';
import { BIONIXUS_INDUSTRIES_REGION_GROUPS } from '@/data/industryHubCountries';
import IndustriesInsightsSection from '@/pages/industries/IndustriesInsightsSection';
import { CountryCoverageGrid } from './CountryCoverageGrid';
import { PREMIUM_INDUSTRIES_CSS } from './premiumIndustriesCss';
import {
  BIONIXUS_INDUSTRIES_LANGUAGE_MIRROR,
  getBionixusIndustriesPageCopy,
} from './bionixusIndustriesCopy';

const HUB_CANONICAL = '/bionixus-industries';

/** Per-segment accent used to colour the cards and markers. */
const SEGMENT_ACCENT: Record<SegmentSlug, string> = {
  'pharma-healthcare': 'teal',
  b2b: 'gold',
  b2c: 'coral',
};

export default function BionixusIndustries() {
  const { language, isRTL } = useLanguage();
  const copy = getBionixusIndustriesPageCopy(language);
  const hubPath = getLocalizedPathForLanguage(HUB_CANONICAL, language);
  const homePath = getLocalizedPathForLanguage('/', language);
  const contactPath = localizedContactPath(language);
  const marketResearchPath = getLocalizedPathForLanguage('/market-research', language);

  const regionGroups = useMemo(
    () =>
      copy.regionGroups.map((groupCopy, index) => ({
        region: groupCopy.region,
        description: groupCopy.description,
        countries: BIONIXUS_INDUSTRIES_REGION_GROUPS[index]?.countries ?? [],
      })),
    [copy.regionGroups],
  );

  const jsonLd = useMemo(
    () => [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: copy.schemaCollectionName,
        url: `https://www.bionixus.com${hubPath}`,
        description: copy.seoDescription,
        about: SEGMENT_ORDER.map((slug) => copy.segments[slug].label),
        isPartOf: {
          '@type': 'WebSite',
          name: 'BioNixus',
          url: 'https://www.bionixus.com',
        },
        hasPart: SEGMENT_ORDER.map((slug) => ({
          '@type': 'WebPage',
          name: copy.segments[slug].label,
          url: `https://www.bionixus.com${SEGMENTS[slug].path}`,
        })),
      },
      buildBreadcrumbSchema([
        { name: copy.breadcrumbHome, href: homePath },
        { name: copy.breadcrumbIndustries, href: hubPath },
      ]),
      buildFAQSchema(copy.faqItems, { pageUrl: `https://www.bionixus.com${hubPath}` }),
    ],
    [copy, hubPath, homePath],
  );

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title={copy.seoTitle}
        description={copy.seoDescription}
        canonical={hubPath}
        jsonLd={jsonLd}
      />
      <style dangerouslySetInnerHTML={{ __html: PREMIUM_INDUSTRIES_CSS }} />
      <Navbar />
      <main className="bx-ind">
        <section className="bx-hero">
          <div className="bx-hero-bg" aria-hidden="true" />
          <div className="bx-hero-grid" aria-hidden="true">
            <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
              <defs>
                <pattern id="bxHexGrid" width="60" height="52" patternUnits="userSpaceOnUse">
                  <path
                    d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bxHexGrid)" />
            </svg>
          </div>
          <div className="bx-orbital" aria-hidden="true">
            <div className="bx-ring"><div className="bx-node" /></div>
            <div className="bx-ring"><div className="bx-node" /></div>
            <div className="bx-ring"><div className="bx-node" /></div>
          </div>

          <div className="bx-inner bx-hero-inner">
            <div className="bx-hero-copy">
              <nav className="bx-breadcrumb" aria-label="Breadcrumb">
                <Link to={homePath}>{copy.breadcrumbHome}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{copy.breadcrumbIndustries}</span>
              </nav>
              <div className="bx-eyebrow">
                <span className="bx-line" /> {copy.heroEyebrow}
              </div>
              <h1>
                {copy.h1BeforeEm}<em>{copy.h1Em}</em>
              </h1>
              <p className="bx-hero-sub">
                {copy.heroSub1BeforeStrong}
                <strong>{copy.heroSub1Strong}</strong>
                {copy.heroSub1AfterStrong}
              </p>
              <p className="bx-hero-sub">{copy.heroSub2}</p>
              <p className="bx-hero-sub text-sm mb-4">
                {copy.langMirrorLead}{' '}
                {BIONIXUS_INDUSTRIES_LANGUAGE_MIRROR.map(({ href, label }, i) => (
                  <span key={href}>
                    {i > 0 ? ' · ' : null}
                    <Link to={href} className="text-primary font-medium hover:underline">
                      {label}
                    </Link>
                  </span>
                ))}
              </p>
              <div className="bx-hero-actions">
                <Link to="/bionixus-industries/insights" className="bx-btn-gold">
                  {copy.ctaInsights}
                </Link>
                <Link
                  to={getLocalizedPathForLanguage('/market-research-by-industry', language)}
                  className="bx-btn-ghost"
                >
                  {copy.ctaIndustriesIndex}
                </Link>
              </div>
            </div>

            <div className="bx-hero-visual">
              <div className="bx-card">
                <div className="bx-card-head">
                  <h2>{copy.cardHead}</h2>
                  <div className="bx-live"><span className="bx-pulse" /> {copy.cardLive}</div>
                </div>

                <div className="bx-chart" aria-hidden="true">
                  <svg viewBox="0 0 500 132" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="bxGoldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(201,168,76,0.22)" />
                        <stop offset="100%" stopColor="rgba(201,168,76,0)" />
                      </linearGradient>
                      <linearGradient id="bxTealGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(14,165,160,0.14)" />
                        <stop offset="100%" stopColor="rgba(14,165,160,0)" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="33" x2="500" y2="33" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="0" y1="66" x2="500" y2="66" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <line x1="0" y1="99" x2="500" y2="99" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                    <path
                      d="M20,96 C60,92 100,86 140,80 C180,74 220,70 260,62 C300,54 340,48 380,42 C420,36 460,30 490,26 L490,124 L20,124 Z"
                      fill="url(#bxTealGrad)"
                    />
                    <path
                      d="M20,96 C60,92 100,86 140,80 C180,74 220,70 260,62 C300,54 340,48 380,42 C420,36 460,30 490,26"
                      fill="none"
                      stroke="var(--bx-teal)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.65"
                    />
                    <path
                      d="M20,110 C60,105 100,98 140,90 C180,80 220,70 260,60 C300,48 340,38 380,30 C420,22 460,16 490,12 L490,124 L20,124 Z"
                      fill="url(#bxGoldGrad)"
                      style={{ opacity: 0, animation: 'bxindFadeIn 1s ease-out 1.4s forwards' }}
                    />
                    <path
                      d="M20,110 C60,105 100,98 140,90 C180,80 220,70 260,60 C300,48 340,38 380,30 C420,22 460,16 490,12"
                      fill="none"
                      stroke="var(--bx-gold)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="900"
                      strokeDashoffset="900"
                      style={{ animation: 'bxindDrawLine 2.4s ease-out 0.4s forwards' }}
                    />
                    <circle
                      cx="490"
                      cy="12"
                      r="4"
                      fill="var(--bx-gold)"
                      style={{ opacity: 0, animation: 'bxindFadeIn 0.5s ease-out 2.4s forwards' }}
                    />
                    <circle
                      cx="490"
                      cy="26"
                      r="3.4"
                      fill="var(--bx-teal)"
                      style={{ opacity: 0, animation: 'bxindFadeIn 0.5s ease-out 2.4s forwards' }}
                    />
                    <line x1="20" y1="8" x2="36" y2="8" stroke="rgba(201,168,76,0.8)" strokeWidth="2" />
                    <text x="40" y="12" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="Outfit, sans-serif">
                      {copy.chartNonHealthcare}
                    </text>
                    <line x1="170" y1="8" x2="186" y2="8" stroke="rgba(14,165,160,0.6)" strokeWidth="2" />
                    <text x="190" y="12" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="Outfit, sans-serif">
                      {copy.chartHealthcare}
                    </text>
                  </svg>
                </div>

                <div className="bx-seg-rows">
                  {SEGMENT_ORDER.map((slug) => {
                    const segmentCopy = copy.segments[slug];
                    return (
                      <div className="bx-seg-row" key={slug}>
                        <span className={`bx-seg-dot ${SEGMENT_ACCENT[slug]}`} aria-hidden="true" />
                        <span>
                          <span className="bx-seg-row-name">{segmentCopy.label}</span>
                          <span className="bx-seg-row-tag" style={{ display: 'block' }}>
                            {segmentCopy.tagline}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bx-card-foot">{copy.cardFoot}</div>
              </div>
            </div>
          </div>
        </section>

        <div className="bx-ribbon">
          <div className="bx-ribbon-inner">
            {copy.regionRibbon.map((region) => (
              <div className="bx-ribbon-item" key={region}>
                <span className="bx-ic" aria-hidden="true">◆</span> {region}
              </div>
            ))}
          </div>
        </div>

        <section className="bx-stats" aria-label={copy.statsAriaLabel}>
          <div className="bx-stats-inner">
            {copy.trustStats.map((stat) => (
              <div className="bx-stat" key={stat.label}>
                <div className="bx-stat-num bx-display">{stat.value}</div>
                <div className="bx-stat-label">{stat.label}</div>
                <div className="bx-stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> {copy.segmentsEyebrow} <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                {copy.segmentsH2Before}<em>{copy.segmentsH2Em}</em>
              </h2>
              <p className="bx-lead center">{copy.segmentsLead}</p>
            </div>
            <div className="bx-seg-grid">
              {SEGMENT_ORDER.map((slug) => {
                const segmentCopy = copy.segments[slug];
                const accent = SEGMENT_ACCENT[slug];
                return (
                  <Link key={slug} to={SEGMENTS[slug].path} className={`bx-seg-card ${accent}`}>
                    <span className={`bx-seg-icon ${accent}`} aria-hidden="true">
                      {accent === 'teal' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.35-9.5-8.5C1 9.5 3 6 6.5 6 9 6 11 8 12 9.5 13 8 15 6 17.5 6 21 6 23 9.5 21.5 12.5 19 16.65 12 21 12 21Z" /></svg>
                      ) : accent === 'gold' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="7" height="11" rx="1" /><rect x="14" y="4" width="7" height="16" rx="1" /></svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.2 12.4a1 1 0 0 0 1 0.8h8.6a1 1 0 0 0 1-0.8L21 7H6" /></svg>
                      )}
                    </span>
                    <h3>{segmentCopy.label}</h3>
                    <span className="bx-seg-tag">{segmentCopy.tagline}</span>
                    <p>{segmentCopy.intro}</p>
                    <span className="bx-seg-go">{segmentCopy.enterCta}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <IndustriesInsightsSection />

        <section className="bx-section dark">
          <div className="bx-dark-bg" aria-hidden="true" />
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow teal">
                <span className="bx-line" /> {copy.narrativeEyebrow}
              </div>
              <h2 className="bx-h2 light">
                {copy.narrativeH2Before}<em>{copy.narrativeH2Em}</em>
              </h2>
            </div>
            <div className="bx-narrative">
              <p>{copy.narrativeP1}</p>
              <p>
                {copy.narrativeP2Part1}
                <strong>{copy.narrativeLatamLabel}</strong>
                {copy.narrativeP2Part2}
                <strong>{copy.narrativeApacLabel}</strong>
                {copy.narrativeP2Part3}
                <Link to="/b2b-industries">{copy.narrativeB2bLink}</Link>
                {copy.narrativeP2Part4}
                <Link to="/b2c-industries">{copy.narrativeB2cLink}</Link>
                {copy.narrativeP2Part5}
                <Link to={getLocalizedPathForLanguage('/healthcare-market-research', language)}>
                  {copy.narrativeHealthcareLink}
                </Link>
                {copy.narrativeP2Part6}
              </p>
            </div>
            <CountryCoverageGrid groups={regionGroups} segment="b2b" layout="grouped" />
          </div>
        </section>

        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> {copy.nextEyebrow}
              </div>
              <h2 className="bx-h2">
                {copy.nextH2Before}<em>{copy.nextH2Em}</em>
              </h2>
            </div>
            <div className="bx-next-grid">
              {copy.nextSteps.map((step) => (
                <Link
                  key={step.path}
                  to={getLocalizedPathForLanguage(step.path, language)}
                  className="bx-next-card"
                >
                  <span className="bx-next-label">
                    {step.label} <span className="bx-next-arrow" aria-hidden="true">→</span>
                  </span>
                  <span className="bx-next-desc">{step.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className="bx-eyebrow gold">
                <span className="bx-line" /> {copy.faqEyebrow} <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                {copy.faqH2Before}<em>{copy.faqH2Em}</em>
              </h2>
            </div>
            <div className="bx-faq-wrap">
              {copy.faqItems.map((item) => (
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

        <section className="bx-cta-section">
          <div className="bx-cta-card">
            <h2>{copy.finalCtaH2}</h2>
            <p>{copy.finalCtaP}</p>
            <div className="bx-cta-actions">
              <Link to={contactPath} className="bx-btn-gold">{copy.finalCtaBook}</Link>
              <Link to={marketResearchPath} className="bx-btn-ghost">{copy.finalCtaSeeWork}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
