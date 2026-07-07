import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTASection } from '@/components/shared/CTASection';
import {
  buildDevelopedMarketMedtechListicleFaqs,
  buildDevelopedMarketMedtechListicleFirms,
  getDevelopedMarketMedtechCountry,
  getDevelopedMarketMedtechListicleLandscapeParagraphs,
  getDevelopedMarketMedtechListiclePath,
  getDevelopedMarketMedtechPath,
  type DevelopedMarketMedtechSlug,
} from '@/data/developedMarketMedtechPages';

type DevelopedMarketMedtechListiclePageProps = {
  countrySlug: DevelopedMarketMedtechSlug;
};

export default function DevelopedMarketMedtechListiclePage({
  countrySlug,
}: DevelopedMarketMedtechListiclePageProps) {
  const country = getDevelopedMarketMedtechCountry(countrySlug);
  const listiclePath = getDevelopedMarketMedtechListiclePath(countrySlug);
  const bofuPath = getDevelopedMarketMedtechPath(countrySlug);
  const firms = buildDevelopedMarketMedtechListicleFirms(country);
  const faqs = buildDevelopedMarketMedtechListicleFaqs(country);
  const landscape = getDevelopedMarketMedtechListicleLandscapeParagraphs(country);
  const canonical = `https://www.bionixus.com${listiclePath}`;
  const h1 = `${firms.length} Best MedTech Market Research Firms in ${country.label} (2026 Rankings)`;
  const pageTitle = `${h1} | BioNixus`;
  const metaDescription = `Ranked ${firms.length} best MedTech market research firms in ${country.label} for 2026 — compared by hospital fieldwork, ${country.regulatorShort} context, and device category expertise.`;

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
    numberOfItems: firms.length,
    itemListElement: firms.map((f) => ({
      '@type': 'ListItem',
      position: f.rank,
      name: f.name,
      description: f.overview.slice(0, 200),
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* No separate OpenGraphMeta here: it previously rendered right after
          SEOHead and silently overrode SEOHead's dynamic per-page og:image
          with the generic og-image.png (react-helmet-async's last-tag-wins
          semantics for duplicate meta tags). SEOHead already sets the full
          set of og and twitter tags, including og:type via the ogType prop. */}
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonical={listiclePath}
        ogType="article"
        jsonLd={[breadcrumbSchema, itemListSchema, faqSchema]}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/insights" className="hover:text-primary transition-colors">
                Insights
              </Link>
              <span>/</span>
              <span className="text-foreground">MedTech — {country.label}</span>
            </nav>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              2026 MedTech Industry Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              A ranked comparison of MedTech and medical devices market research firms serving {country.label} in
              2026. For regional context, start from the{' '}
              <Link to="/healthcare-market-research" className="text-primary underline font-medium">
                healthcare market research hub
              </Link>{' '}
              and{' '}
              <Link to={country.healthcareResearchPath} className="text-primary underline font-medium">
                healthcare market research in {country.label}
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              For company-intent programmes, see our{' '}
              <Link to={bofuPath} className="text-primary underline font-medium">
                MedTech market research company in {country.label}
              </Link>{' '}
              page and the{' '}
              <Link to={country.medDevicesReportPath} className="text-primary underline font-medium">
                {country.label} market intelligence briefing
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding py-8" aria-label="Quick Answer">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">
                Top MedTech market research firms in {country.label} (2026)
              </h2>
              <ol className="space-y-2">
                {firms.map((firm) => (
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
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              The {country.label} MedTech research landscape in 2026
            </h2>
            {landscape.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto space-y-8">
            {firms.map((firm) => (
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
                    <Link to={bofuPath} className="text-primary underline font-medium">
                      View BioNixus MedTech market research in {country.label}
                    </Link>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              MedTech market research in {country.label} — frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border border-border bg-card p-5 group"
                >
                  <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                  </summary>
                  <p className="text-muted-foreground leading-relaxed mt-3 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Related market intelligence</h2>
            <p className="text-muted-foreground leading-relaxed">
              Compare MedTech research needs with our pages for{' '}
              <Link to={getDevelopedMarketMedtechPath(country.relatedSlugs[0])} className="text-primary underline font-medium">
                {getDevelopedMarketMedtechCountry(country.relatedSlugs[0]).label}
              </Link>{' '}
              and{' '}
              <Link to={getDevelopedMarketMedtechPath(country.relatedSlugs[1])} className="text-primary underline font-medium">
                {getDevelopedMarketMedtechCountry(country.relatedSlugs[1]).label}
              </Link>
              , or explore the{' '}
              <Link to="/healthcare-market-research" className="text-primary underline font-medium">
                global healthcare market research hub
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection variant="country" countryName={country.label} />
      </main>
      <Footer />
    </div>
  );
}
