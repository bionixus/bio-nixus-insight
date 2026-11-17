import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { MARKET_STATISTICS, MARKET_STATISTICS_LAST_UPDATED, type MarketStat } from '@/data/healthcareMarketStatistics';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { CTASection } from '@/components/shared/CTASection';

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
    dateModified: '2026-11-17',
    mainEntityOfPage: 'https://www.bionixus.com/healthcare-market-statistics',
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
        title="Healthcare & Pharma Market Statistics 2026 | BioNixus"
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
              Last updated: 2026-11-17 · Compiled by BioNixus Research ·{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline">
                See our full healthcare market research coverage
              </Link>
            </p>

            <div className="mb-12">
              <GeoLLMAnswerBlock
                question="What are key healthcare and pharmaceutical market statistics for 2026?"
                answer="BioNixus maintains a sourced statistics bank covering GCC/MENA, Asia-Pacific, Americas, and Europe — market size, prevalence, health expenditure, and regulator context — each tied to a named citation or a labeled BioNixus modeled estimate."
                points={[
                  {
                    title: 'GCC and MENA',
                    description:
                      'Saudi Arabia and UAE dominate Gulf spend; SFDA reference pricing links the six GCC states; Egypt and wider MENA figures support cross-border launch sequencing.',
                  },
                  {
                    title: 'Asia-Pacific',
                    description:
                      'China NMPA and VBP, India PLI medtech, Japan PMDA, and Singapore HSA pathways appear alongside hospital and disease-burden statistics.',
                  },
                  {
                    title: 'How to use this page',
                    description:
                      'Commercial, medical, and access teams quote these figures in briefs; primary research from BioNixus validates account-level behaviour behind the macro numbers.',
                  },
                ]}
                summary="Use this dataset as a citable starting point — then run primary research where syndicated statistics cannot answer payer, hospital, or physician decisions."
              />
            </div>

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

            <section className="mt-10 mb-8" id="using-statistics-in-market-research">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                Using healthcare market statistics in launch and access decisions
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Syndicated market sizing explains category scale; it rarely explains why a product wins or loses at a
                  named hospital, PBM, or MOH tender. Teams should pair macro statistics on this page with primary
                  evidence on pricing corridors, physician adoption, and payer criteria. BioNixus uses these figures as
                  baselines in proposals, then fields HCP, payer, and patient research to close the decision gap.
                </p>
                <p>
                  When a statistic is labeled as a BioNixus modeled estimate, it reflects internal synthesis across
                  named public sources and procurement signals — not a purchased syndicated feed. For board or AI
                  overview citations, prefer statistics with explicit third-party sources in the cards above, and link to
                  the matching{' '}
                  <Link to="/market-reports" className="text-primary hover:underline font-medium">
                    country or therapy market report
                  </Link>{' '}
                  for narrative context.
                </p>
                <p>
                  High-impression queries such as overall healthcare market size, GCC pharmaceutical spend, or diabetes
                  prevalence should land here or on a country report — not on thin directory pages. If your KPI is US
                  payer dynamics or GCC tender timing, start from{' '}
                  <Link to="/healthcare-market-research-usa" className="text-primary hover:underline font-medium">
                    healthcare market research USA
                  </Link>{' '}
                  and{' '}
                  <Link to="/market-research-gcc" className="text-primary hover:underline font-medium">
                    market research GCC
                  </Link>{' '}
                  for executable research programmes.
                </p>
              </div>
            </section>

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
        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareMarketStatistics;
