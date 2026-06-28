import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  buildIndustryCountryPageConfig,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';
import { getIndustryListicleCrossLinks } from '@/data/industry-listicle-clusters';
import { getHealthcareIndustryExpandedContent } from '@/data/industryHealthcareExpandedContent';
import { getGccIndustryExpandedContent } from '@/data/industryGccAdjacentExpandedContent';
import {
  getCommercialIndustryExpandedContent,
  getIndustryBofuPageEnhancements,
} from '@/data/industryCommercialExpandedContent';
import { INDUSTRY_SEGMENT } from '@/data/bionixusIndustrySegments';
import { BIONIXUS_MARKETING_CLAIMS } from '@/data/marketingClaims';
import { PREMIUM_INDUSTRIES_CSS } from '@/pages/industries/premiumIndustriesCss';
import type { ServiceLandingExpandedContent } from '@/data/serviceLandingContent';

type IndustryCountryBofuPageProps = {
  countrySlug: MatrixCountrySlug;
  industrySlug: MatrixIndustrySlug;
};

const SEGMENT_ACCENT: Record<'pharma-healthcare' | 'b2b' | 'b2c', 'teal' | 'gold' | 'coral'> = {
  'pharma-healthcare': 'teal',
  b2b: 'gold',
  b2c: 'coral',
};

const DEFAULT_HERO_STATS = [
  { value: '38', label: 'Countries fielded', sub: 'MENA · Americas · Europe' },
  {
    value: BIONIXUS_MARKETING_CLAIMS.completedProjectsMena.value,
    label: 'Projects delivered',
    sub: 'Cross-industry governance',
  },
  { value: 'AR + EN', label: 'Bilingual fieldwork', sub: 'Standard across MENA' },
  { value: '2–4 wk', label: 'To field-ready', sub: 'After feasibility sign-off' },
];

function PremiumExpandedSections({ content, accent }: { content: ServiceLandingExpandedContent; accent: 'teal' | 'gold' | 'coral' }) {
  return (
    <>
      <section className="bx-section cream">
        <div className="bx-inner">
          <div className="bx-section-head">
            <div className={`bx-eyebrow ${accent}`}>
              <span className="bx-line" /> Regulatory context
            </div>
            <h2 className="bx-h2">{content.regulatory.heading}</h2>
          </div>
          <div className="bx-prose">
            {content.regulatory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section">
        <div className="bx-inner">
          <div className="bx-section-head">
            <div className={`bx-eyebrow ${accent}`}>
              <span className="bx-line" /> Market context
            </div>
            <h2 className="bx-h2">{content.marketContext.heading}</h2>
          </div>
          <div className="bx-prose">
            {content.marketContext.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Explore the{' '}
              <Link to={content.hubLink.to}>{content.hubLink.label}</Link> for regional context and related
              services.
            </p>
          </div>
        </div>
      </section>

      <section className="bx-section cream">
        <div className="bx-inner">
          <div className="bx-section-head">
            <div className={`bx-eyebrow ${accent}`}>
              <span className="bx-line" /> Methodology
            </div>
            <h2 className="bx-h2">{content.methodology.heading}</h2>
          </div>
          <div className="bx-prose">
            {content.methodology.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section">
        <div className="bx-inner">
          <div className="bx-section-head">
            <div className={`bx-eyebrow ${accent}`}>
              <span className="bx-line" /> Use cases
            </div>
            <h2 className="bx-h2">{content.useCases.heading}</h2>
            <p className="bx-lead">{content.useCases.paragraph}</p>
          </div>
          <div className="bx-use-grid">
            {content.useCases.areas.map((area) => (
              <div key={area} className="bx-use-item">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section cream">
        <div className="bx-inner">
          <div className="bx-section-head">
            <div className={`bx-eyebrow ${accent}`}>
              <span className="bx-line" /> Process
            </div>
            <h2 className="bx-h2">{content.process.heading}</h2>
          </div>
          <div className="bx-process-steps">
            {content.process.steps.map((step, index) => (
              <article key={step.title} className="bx-process-step">
                <div className="bx-step-num">Step {index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section">
        <div className="bx-inner">
          <div className="bx-section-head">
            <div className={`bx-eyebrow ${accent}`}>
              <span className="bx-line" /> Deliverables
            </div>
            <h2 className="bx-h2">{content.deliverables.heading}</h2>
          </div>
          <div className="bx-use-grid">
            {content.deliverables.bullets.map((bullet) => (
              <div key={bullet.slice(0, 40)} className="bx-use-item">
                {bullet}
              </div>
            ))}
          </div>
          <div className="bx-blueprint" style={{ marginTop: 40 }}>
            <h3>Decision blueprint</h3>
            <p>{content.decisionBlueprint.why}</p>
            <p>{content.decisionBlueprint.evidence}</p>
            <p>{content.decisionBlueprint.next}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function IndustryCountryBofuPage({ countrySlug, industrySlug }: IndustryCountryBofuPageProps) {
  const config = buildIndustryCountryPageConfig(countrySlug, industrySlug);
  if (!config) return null;

  const enhancements = getIndustryBofuPageEnhancements(countrySlug, industrySlug);
  const heroIntro = enhancements?.heroIntro ?? config.heroIntro;
  const heroTagline = enhancements?.heroTagline ?? `${config.country.label} · ${config.industry.displayNameShort} · 2026`;
  const heroStats = enhancements?.heroStats ?? DEFAULT_HERO_STATS;
  const stakeholderRows = enhancements?.stakeholderRows ?? config.stakeholderRows;
  const uniquenessParagraphs = enhancements?.uniquenessParagraphs ?? config.uniquenessParagraphs;

  const pageUrl = `https://www.bionixus.com${config.bofuPath}`;
  const orgId = 'https://www.bionixus.com/#organization';
  const clusterLinks = getIndustryListicleCrossLinks(
    countrySlug,
    industrySlug,
    config.bofuPath,
    config.industry.displayNameShort,
    config.country.label,
  );
  const clusterRole = `Company-intent page for ${config.industry.displayNameShort.toLowerCase()} programs in ${config.country.label} — paired with the 2026 firm rankings listicle and cross-industry geo guides.`;

  const expandedHealthcare =
    industrySlug === 'healthcare' ? getHealthcareIndustryExpandedContent(countrySlug) : null;
  const expandedAdjacent =
    industrySlug !== 'healthcare' ? getGccIndustryExpandedContent(countrySlug, industrySlug) : null;
  const expandedCommercial =
    industrySlug !== 'healthcare' ? getCommercialIndustryExpandedContent(countrySlug, industrySlug) : null;
  const expandedContent = expandedHealthcare ?? expandedAdjacent ?? expandedCommercial;

  const faqItems = expandedCommercial
    ? expandedCommercial.faqs
    : expandedContent
      ? [...config.faqItems, ...expandedContent.faqs]
      : config.faqItems;

  const primaryHubPath = config.industry.isHealthcareAdjacent
    ? '/healthcare-market-research'
    : '/market-research';
  const primaryHubLabel = config.industry.isHealthcareAdjacent
    ? 'healthcare market research hub'
    : 'market research services hub';

  const segment = INDUSTRY_SEGMENT[industrySlug];
  const accent = SEGMENT_ACCENT[segment];

  const industryHubPath = `/market-research/${industrySlug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: 'https://www.bionixus.com/bionixus-logo.webp',
      areaServed: { '@type': 'Country', name: config.country.label },
      knowsAbout: config.industry.knowsAbout,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: config.h1,
      description: config.metaDescription,
      about: { '@id': orgId },
      inLanguage: 'en',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: config.h1,
      serviceType: `${config.industry.displayNameShort} market research company ${config.country.label}`,
      areaServed: { '@type': 'Country', name: config.country.label },
      provider: { '@id': orgId },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: config.h1, href: config.bofuPath },
    ]),
    buildFAQSchema(faqItems),
  ];

  const heroTitleParts = config.h1.replace(/ Market Research Company in .+$/, '');

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={config.title}
        description={config.metaDescription}
        canonical={config.bofuPath}
        jsonLd={jsonLd}
      />
      <style dangerouslySetInnerHTML={{ __html: PREMIUM_INDUSTRIES_CSS }} />
      <Navbar />

      <main className="bx-ind">
        {/* Hero */}
        <section className="bx-hero">
          <div className="bx-hero-bg" aria-hidden="true" />
          <div className="bx-hero-grid" aria-hidden="true">
            <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
              <defs>
                <pattern id="bxHexGridBofu" width="60" height="52" patternUnits="userSpaceOnUse">
                  <path
                    d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bxHexGridBofu)" />
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

          <div className="bx-inner bx-hero-inner bx-solo">
            <div className="bx-hero-copy">
              <nav className="bx-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to="/market-research">Market Research</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{config.country.label}</span>
              </nav>
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> {config.industry.displayNameShort} · {config.country.label}
              </div>
              <h1>
                <em>{heroTitleParts}</em> market research company in {config.country.label}
              </h1>
              <p className="bx-hero-tagline">{heroTagline}</p>
              <p className="bx-hero-sub">{heroIntro}</p>
              <p className="bx-hero-sub" style={{ marginTop: 0 }}>
                For regional context, start from the{' '}
                <Link to={primaryHubPath}>{primaryHubLabel}</Link>
                ; for {config.country.label} see{' '}
                <Link to={config.country.midFunnelPath}>
                  market research in {config.country.label}
                </Link>{' '}
                and the{' '}
                <Link to={config.listiclePath}>
                  top {config.industry.displayNameShort.toLowerCase()} market research companies in{' '}
                  {config.country.label} (2026)
                </Link>
                .
              </p>
              <div className="bx-hero-actions">
                <Link to="/contact" className="bx-btn-gold">
                  Request a proposal →
                </Link>
                <Link to={config.listiclePath} className="bx-btn-ghost">
                  <span aria-hidden="true">◈</span> Compare firms (2026)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="bx-stats">
          <div className="bx-stats-inner">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bx-stat">
                <div className="bx-stat-num">{stat.value}</div>
                <div className="bx-stat-label">{stat.label}</div>
                {stat.sub ? <div className="bx-stat-sub">{stat.sub}</div> : null}
              </div>
            ))}
          </div>
        </div>

        {/* Cluster callout */}
        <section className="bx-section" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="bx-inner">
            <aside className="bx-cluster-callout" aria-label="Related industry research pages">
              <strong>
                {config.industry.displayNameShort} rankings in {config.country.label}
              </strong>
              <p>{clusterRole}</p>
              <ul>
                {clusterLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Executive framework */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Executive framework
              </div>
              <h2 className="bx-h2">{config.executiveHeading}</h2>
            </div>
            <div className="bx-exec-grid">
              {config.executivePoints.map((point) => (
                <article key={point.title} className={`bx-exec-card ${accent}`}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why BioNixus */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Why BioNixus
              </div>
              <h2 className="bx-h2">
                Why BioNixus for {config.industry.displayNameShort} in {config.country.label}
              </h2>
            </div>
            <div className="bx-proof-grid" style={{ marginTop: 0 }}>
              {config.proofBullets.map((item) => (
                <article key={item.title} className="bx-proof-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Decision map */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Decision map
              </div>
              <h2 className="bx-h2">
                Decision map for {config.industry.displayNameShort} research in {config.country.label}
              </h2>
            </div>
            <div className="bx-step-grid">
              {config.regulatorySteps.map((item) => (
                <article key={item.step} className="bx-step-card">
                  <h3>{item.step}</h3>
                  <p>{item.detail}</p>
                  <Link to={item.link.to}>{item.link.label} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stakeholders */}
        <section className="bx-section">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Stakeholders
              </div>
              <h2 className="bx-h2">Stakeholder coverage</h2>
            </div>
            <div className="bx-method-table-wrap">
              <table className="bx-method-table">
                <thead>
                  <tr>
                    <th scope="col">Stakeholder</th>
                    <th scope="col">Research focus</th>
                  </tr>
                </thead>
                <tbody>
                  {stakeholderRows.map((row) => (
                    <tr key={row.role}>
                      <td>{row.role}</td>
                      <td>{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Uniqueness */}
        <section className="bx-section dark">
          <div className="bx-dark-bg" aria-hidden="true" />
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Local context
              </div>
              <h2 className="bx-h2 light">
                Why {config.industry.displayNameShort} in {config.country.label} is unique
              </h2>
            </div>
            <div className="bx-narrative">
              {uniquenessParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p>
                Pharmaceutical company-intent:{' '}
                <Link to={config.country.pharmaBofuPath}>
                  healthcare market research company — pharma in {config.country.label}
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> Services
              </div>
              <h2 className="bx-h2">{config.servicesHeading}</h2>
            </div>
            <div className="bx-cover-grid">
              {(expandedContent?.services.items ?? config.serviceCards.map((c) => ({ title: c.title, description: c.body }))).map(
                (card) => (
                  <article key={card.title} className="bx-cover-card">
                    <h3>{card.title}</h3>
                    <p className="bx-cover-knows">{card.description}</p>
                  </article>
                ),
              )}
            </div>
            {config.relatedReportLink ? (
              <p className="bx-lead" style={{ marginTop: 28 }}>
                Market structure:{' '}
                <Link to={config.relatedReportLink.to}>{config.relatedReportLink.label}</Link>
              </p>
            ) : null}
            {!config.industry.isHealthcareAdjacent ? (
              <p className="bx-lead" style={{ marginTop: config.relatedReportLink ? 12 : 28 }}>
                Global industry hub:{' '}
                <Link to={industryHubPath}>{config.industry.displayNameShort} market research overview</Link>
              </p>
            ) : null}
          </div>
        </section>

        {expandedContent ? <PremiumExpandedSections content={expandedContent} accent={accent} /> : null}

        {expandedHealthcare ? (
          <section className="bx-section cream">
            <div className="bx-inner">
              <div className="bx-section-head">
                <div className={`bx-eyebrow ${accent}`}>
                  <span className="bx-line" /> Execution
                </div>
                <h2 className="bx-h2">{expandedHealthcare.execution.heading}</h2>
              </div>
              <div className="bx-prose">
                {expandedHealthcare.execution.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* FAQ */}
        <section className="bx-section cream">
          <div className="bx-inner">
            <div className="bx-section-head center">
              <div className={`bx-eyebrow ${accent}`}>
                <span className="bx-line" /> FAQs <span className="bx-line" />
              </div>
              <h2 className="bx-h2">
                Frequently asked <em>questions</em>
              </h2>
            </div>
            <div className="bx-faq-wrap">
              {faqItems.map((item) => (
                <details key={item.question} className="bx-faq">
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

        {/* CTA */}
        <section className="bx-cta-section">
          <div className="bx-cta-card">
            <h2>
              Plan {config.industry.displayNameShort.toLowerCase()} research in {config.country.label}
            </h2>
            <p>
              Tell us the decision in front of you — product launch, channel mix, competitive response, or
              customer experience. We will scope the evidence to match it.
            </p>
            <div className="bx-cta-actions">
              <Link to="/contact" className="bx-btn-gold">
                Book a discovery call →
              </Link>
              <a href="mailto:info@bionixus.com" className="bx-btn-ghost">
                info@bionixus.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
