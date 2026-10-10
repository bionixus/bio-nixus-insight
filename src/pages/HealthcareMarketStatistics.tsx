import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { MARKET_STATISTICS, MARKET_STATISTICS_LAST_UPDATED, type MarketStat } from '@/data/healthcareMarketStatistics';
import { HEALTHCARE_MARKET_STATISTICS_FAQ } from '@/data/healthcareMarketStatisticsFaq';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare & Pharma Market Statistics', href: '/healthcare-market-statistics' },
];

const totalStats = MARKET_STATISTICS.reduce((sum, region) => sum + region.stats.length, 0);

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Healthcare & Pharma Market Statistics 2026 (MENA, Asia & Global)',
    description:
      'A sourced collection of healthcare and pharmaceutical market statistics covering the MENA/GCC region, Asia-Pacific, and global benchmark markets, compiled by BioNixus.',
    creator: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    temporalCoverage: '2026',
    dateModified: MARKET_STATISTICS_LAST_UPDATED,
    license: 'https://www.bionixus.com/terms',
    variableMeasured: [
      'Healthcare market size (USD)',
      'Pharmaceutical market size (USD)',
      'Medical devices market size (USD)',
      'Disease prevalence (%)',
      'Population and health expenditure',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Healthcare & Pharma Market Statistics 2026 (MENA, Asia & Global)',
    image: 'https://www.bionixus.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-07-22',
    dateModified: MARKET_STATISTICS_LAST_UPDATED,
    mainEntityOfPage: 'https://www.bionixus.com/healthcare-market-statistics',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HEALTHCARE_MARKET_STATISTICS_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
];

function StatCard({ item }: { item: MarketStat }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
      <p className="text-foreground leading-relaxed mb-3">{item.stat}</p>
      <p className="text-xs text-muted-foreground">
        Source:{' '}
        {item.sourceHref ? (
          <Link to={item.sourceHref} className="text-primary hover:underline font-medium">
            {item.source}
          </Link>
        ) : (
          <span className="font-medium">{item.source}</span>
        )}
        {item.isBioNixusEstimate ? (
          <span className="ml-1 text-muted-foreground/80">(BioNixus modeled estimate, not third-party-verified)</span>
        ) : null}
      </p>
    </div>
  );
}

const HealthcareMarketStatistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Healthcare & Pharma Market Statistics 2026 (MENA, Asia & Global) | BioNixus"
        description={`${totalStats} sourced healthcare and pharmaceutical market statistics for MENA/GCC, Asia-Pacific, and global markets — market size, disease prevalence, and regulatory data, each with a cited source.`}
        canonical="https://www.bionixus.com/healthcare-market-statistics"
        jsonLd={jsonLd}
      />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section className="section-padding pt-4 pb-8">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              Healthcare &amp; Pharma Market Statistics 2026 (MENA, Asia &amp; Global)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {totalStats} sourced healthcare and pharmaceutical market statistics — market size, disease
              prevalence, health expenditure, and regulatory data — covering the MENA/GCC region, Asia-Pacific, and
              global benchmark markets. Every figure below cites its source; figures marked as a BioNixus modeled
              estimate are our own market analysis rather than a third-party dataset.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {MARKET_STATISTICS_LAST_UPDATED} · Compiled by BioNixus Research ·{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline">
                See our full healthcare market research coverage
              </Link>
            </p>

            <GeoLLMAnswerBlock
              question="Where can I find sourced healthcare and pharmaceutical market statistics for MENA, Asia, and global markets?"
              answer="BioNixus publishes a curated statistics hub with cited figures for GCC and MENA healthcare and pharma sizing, Asia-Pacific disease burden, and US/Europe/LatAm benchmarks. Each card names its source; BioNixus modeled estimates link to the matching country market report. Use this page for decks and LLM-readable facts, then commission primary research for account, payer, or pharmacy decisions."
              points={[
                {
                  title: 'MENA & GCC',
                  description:
                    'Saudi, UAE, Egypt, Qatar, Kuwait, Bahrain, and Oman — market size, diabetes and obesity prevalence, SFDA milestones, and medical devices spend.',
                },
                {
                  title: 'Asia-Pacific',
                  description: 'China, India, Japan, South Korea, Singapore, and Australia — population, cancer and diabetes burden, and policy shocks such as China VBP.',
                },
                {
                  title: 'Global benchmarks',
                  description:
                    'United States, UK, Germany, Brazil, Canada, and Spain — expenditure, devices, and oncology/diabetes prevalence with named third-party sources.',
                },
                {
                  title: 'Primary research',
                  description:
                    'For IQVIA-alternative account-level work, see /healthcare-market-research or email admin@bionixus.com.',
                },
              ]}
              summary="Figures update with underlying BioNixus market reports; check the last-updated date before external citation."
              pageUrl="https://www.bionixus.com/healthcare-market-statistics"
            />

            <section className="mb-12" aria-labelledby="how-to-use-stats">
              <h2 id="how-to-use-stats" className="text-2xl font-display font-semibold text-foreground mb-3">
                How teams use this dataset
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Strategy and market-access teams pull macro anchors from this hub when framing a country entry, therapy-area
                prioritisation, or board narrative. The numbers are intentionally conservative: we cite IDF, WHO, IARC, national
                ministries, and named industry bodies wherever possible, and we label BioNixus modeled estimates when the figure
                comes from our market reports rather than a single syndicated feed.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Syndicated audit data (for example IQVIA-style sales tracking) answers share within a measured universe. This page
                answers questions syndicated data rarely states in one place — population scale, disease prevalence, regulatory
                inflection points, and devices spend bands. When your decision depends on a specific hospital formulary, government
                tender, or pharmacy chain, pair these statistics with{' '}
                <Link to="/account-level-market-research" className="text-primary hover:underline font-medium">
                  account-level primary research
                </Link>{' '}
                or a scoped proposal via{' '}
                <a href="mailto:admin@bionixus.com" className="text-primary hover:underline font-medium">
                  admin@bionixus.com
                </a>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For Middle East-only cuts, see our{' '}
                <Link to="/blog/middle-east-healthcare-market-statistics-2026" className="text-primary hover:underline font-medium">
                  2026 Middle East healthcare statistics article
                </Link>{' '}
                and the{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary hover:underline font-medium">
                  GCC pharmaceutical market research hub
                </Link>
                .
              </p>
            </section>

            {MARKET_STATISTICS.map((region) => (
              <section key={region.region} className="mb-14" id={region.region.toLowerCase().replace(/[^a-z]+/g, '-')}>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                  {region.region}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{region.intro}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {region.stats.map((item) => (
                    <StatCard key={item.stat} item={item} />
                  ))}
                </div>
              </section>
            ))}

            <section className="mt-14 mb-10" id="faq" aria-labelledby="stats-faq-heading">
              <h2 id="stats-faq-heading" className="text-2xl font-display font-semibold text-foreground mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-3 max-w-3xl">
                {HEALTHCARE_MARKET_STATISTICS_FAQ.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-border bg-card p-4 shadow-sm open:shadow-md"
                  >
                    <summary className="cursor-pointer font-medium text-foreground list-none flex justify-between gap-4">
                      {item.q}
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform" aria-hidden>
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ConversionCTA
              variant="talk-to-research"
              market="Global healthcare & pharma"
              sourceContext="Healthcare market statistics hub"
              defaultNeed="Custom data cut or country sizing validation"
              ctaId="healthcare_market_statistics_mid"
              ctaLocation="statistics_hub_faq"
            />

            <div className="mt-4 p-6 rounded-xl border border-border bg-muted/20">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Methodology</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Third-party figures are drawn from named sources including the IDF Diabetes Atlas, IARC GLOBOCAN,
                the WHO Global TB Report, national statistics agencies (World Bank, IMF, national census bureaus),
                national cancer and diabetes registries, and named industry bodies (Fortune Business Insights,
                Market Research Future, BVMed, MDMA/AdvaMed). Figures labeled "BioNixus modeled estimate" reflect
                BioNixus's own market-sizing analysis rather than a published third-party dataset, and are labeled
                as such throughout. For market-specific detail behind any figure, see our{' '}
                <Link to="/market-reports" className="text-primary hover:underline font-medium">
                  market reports hub
                </Link>
                {' '}or{' '}
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  request a custom data cut
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareMarketStatistics;
