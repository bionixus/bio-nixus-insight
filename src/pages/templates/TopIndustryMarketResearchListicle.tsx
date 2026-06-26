import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import {
  buildIndustryCountryPageConfig,
  buildMatrixSeoCopy,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';
import { getIndustryListicleCrossLinks } from '@/data/industry-listicle-clusters';
import { IndustryListicleClusterCallout } from '@/components/seo/IndustryListicleClusterCallout';

type TopIndustryMarketResearchListicleProps = {
  countrySlug: MatrixCountrySlug;
  industrySlug: MatrixIndustrySlug;
};

export default function TopIndustryMarketResearchListicle({
  countrySlug,
  industrySlug,
}: TopIndustryMarketResearchListicleProps) {
  const config = buildIndustryCountryPageConfig(countrySlug, industrySlug);
  if (!config) return null;

  const canonical = `https://www.bionixus.com${config.listiclePath}`;
  const firmCount = config.listicleFirms.length;
  const h1 = `${firmCount} Best ${config.industry.displayName} Market Research Firms in ${config.country.label} (2026 Rankings)`;
  const pageTitle = `${h1} | BioNixus`;
  const metaDescription = buildMatrixSeoCopy(config.country, config.industry).listicleMetaDescription;
  const hubPath = config.industry.isHealthcareAdjacent
    ? config.country.healthcareHubPath
    : config.country.midFunnelPath;
  const hubLabel = config.industry.isHealthcareAdjacent
    ? 'healthcare market research hub'
    : `market research in ${config.country.label}`;
  const clusterLinks = getIndustryListicleCrossLinks(
    countrySlug,
    industrySlug,
    config.bofuPath,
    config.industry.displayNameShort,
    config.country.label,
  );
  const clusterRole = `Industry-specific buyer guide for ${config.industry.displayNameShort.toLowerCase()} programs in ${config.country.label} — distinct from cross-industry geo rankings and the BioNixus services page.`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: h1, item: canonical },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: h1,
    numberOfItems: config.listicleFirms.length,
    itemListElement: config.listicleFirms.map((f) => ({
      '@type': 'ListItem',
      position: f.rank,
      name: f.name,
      description: f.overview.slice(0, 200),
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.listicleFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonical={config.listiclePath}
        jsonLd={[breadcrumbSchema, itemListSchema, faqSchema]}
      />
      <OpenGraphMeta
        title={pageTitle}
        description={metaDescription}
        image="https://www.bionixus.com/og-image.png"
        url={canonical}
        type="article"
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-primary transition-colors">
                Insights
              </Link>
              <span>/</span>
              <span className="text-foreground">{config.industry.displayNameShort} — {config.country.label}</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              2026 Industry Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              A ranked comparison of market research firms serving {config.industry.displayNameShort.toLowerCase()}{' '}
              clients in {config.country.label} for 2026. For regional context, see our{' '}
              <Link to={hubPath} className="text-primary underline font-medium">
                {hubLabel}
              </Link>
              .
            </p>
            <IndustryListicleClusterCallout
              industryLabel={config.industry.displayNameShort}
              countryLabel={config.country.label}
              roleText={clusterRole}
              links={clusterLinks}
            />
            <p className="text-muted-foreground leading-relaxed max-w-3xl mt-4">
              For company-intent programs, see our{' '}
              <Link to={config.bofuPath} className="text-primary underline font-medium">
                {config.industry.displayNameShort} market research company in {config.country.label}
              </Link>{' '}
              page.
            </p>
          </div>
        </section>

        <section className="section-padding py-8" aria-label="Quick Answer">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">
                Top {config.industry.displayNameShort} market research firms in {config.country.label} (2026)
              </h2>
              <ol className="space-y-2">
                {config.listicleFirms.map((firm) => (
                  <li key={firm.anchor} className="flex items-start gap-3 text-sm">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      {firm.rank}
                    </span>
                    <span className="text-foreground">
                      <strong>{firm.name}</strong>
                      <span className="text-muted-foreground"> — {firm.type}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-8">
            {config.listicleFirms.map((firm) => (
              <article
                key={firm.anchor}
                id={firm.anchor}
                className="rounded-xl border border-border bg-card p-6 md:p-8 scroll-mt-24"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    {firm.rank}
                  </span>
                  <div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">{firm.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {firm.type} · {firm.hq}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{firm.overview}</p>
                <ul className="space-y-2">
                  {firm.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                {firm.rank === 1 ? (
                  <p className="mt-4">
                    <Link to={config.bofuPath} className="text-primary font-medium hover:underline">
                      View BioNixus {config.industry.displayNameShort} company page in {config.country.label}
                    </Link>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">FAQs</h2>
            <div className="space-y-4">
              {config.listicleFaqs.map((faq) => (
                <details key={faq.q} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{faq.q}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to={config.bofuPath}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {config.industry.displayNameShort} market research company — {config.country.label}
                </h3>
                <p className="text-sm text-muted-foreground">BioNixus BOFU execution page.</p>
              </Link>
              <Link
                to={config.country.midFunnelPath}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">Market research {config.country.label}</h3>
                <p className="text-sm text-muted-foreground">Country mid-funnel landing.</p>
              </Link>
              <Link
                to={config.country.pharmaBofuPath}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">Pharma market research company</h3>
                <p className="text-sm text-muted-foreground">Separate pharmaceutical company-intent URL.</p>
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">Request a proposal</h3>
                <p className="text-sm text-muted-foreground">Scope a custom {config.country.label} program.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
