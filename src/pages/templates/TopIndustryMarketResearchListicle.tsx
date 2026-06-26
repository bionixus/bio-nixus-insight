import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import {
  buildIndustryCountryPageConfig,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';

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
  const h1 = `Top ${config.industry.displayName} Market Research Companies in ${config.country.label} (2026)`;

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
        title={`${h1} | BioNixus`}
        description={`Independent 2026 guide to leading ${config.industry.displayNameShort.toLowerCase()} market research companies in ${config.country.label}—capability, methodology, and local expertise.`}
        canonical={config.listiclePath}
        jsonLd={[breadcrumbSchema, itemListSchema, faqSchema]}
      />
      <OpenGraphMeta
        title={`${h1} | BioNixus`}
        description={`Top ${config.industry.displayNameShort.toLowerCase()} market research firms in ${config.country.label} compared for 2026.`}
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
              An independent comparison of market research firms serving {config.industry.displayNameShort.toLowerCase()}{' '}
              clients in {config.country.label}.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              For company-intent programs, see our{' '}
              <Link to={config.bofuPath} className="text-primary underline font-medium">
                {config.industry.displayNameShort} market research company in {config.country.label}
              </Link>{' '}
              page.
            </p>
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
