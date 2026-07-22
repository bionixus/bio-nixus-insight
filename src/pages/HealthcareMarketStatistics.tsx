import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { MARKET_STATISTICS, MARKET_STATISTICS_LAST_UPDATED, type MarketStat } from '@/data/healthcareMarketStatistics';

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
    author: {
      '@type': 'Organization',
      name: 'BioNixus',
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
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: {MARKET_STATISTICS_LAST_UPDATED} · Compiled by BioNixus Research ·{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline">
                See our full healthcare market research coverage
              </Link>
            </p>

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
