import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import {
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from '@/lib/seo/schemas';
import { INDUSTRY_HUB_PAGES } from '@/data/industryHubPages';

const BASE_URL = 'https://www.bionixus.com';

const COUNTRY_FLAG: Record<string, string> = {
  'saudi-arabia': '🇸🇦',
  uae: '🇦🇪',
  egypt: '🇪🇬',
  kuwait: '🇰🇼',
  qatar: '🇶🇦',
  oman: '🇴🇲',
  uk: '🇬🇧',
  usa: '🇺🇸',
  brazil: '🇧🇷',
  germany: '🇩🇪',
};

export default function IndustryGlobalHubPage() {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const config = INDUSTRY_HUB_PAGES.find((p) => p.slug === industrySlug);

  if (!config) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-wide py-24 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            The industry page you requested does not exist.
          </p>
          <Link to="/market-research" className="text-primary underline">
            Back to Market Research
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `${BASE_URL}/market-research/${config.slug}`;

  const jsonLd = [
    buildCanonicalOrganization(),
    {
      ...buildServiceSchema(),
      name: `BioNixus ${config.displayName} Market Research`,
      serviceType: `${config.displayName} Market Research`,
      description: config.heroSubtitle,
      url: canonicalUrl,
    },
    buildFAQSchema(config.faqs, {
      pageUrl: canonicalUrl,
      sectionId: 'faq',
    }),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: config.displayName, href: `/market-research/${config.slug}` },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={config.metaTitle}
        description={config.metaDescription}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main>
        {/* ── Breadcrumb ─────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-border bg-muted/30"
        >
          <div className="container-wide section-padding py-3">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </li>
              <li>
                <Link to="/market-research" className="hover:text-primary transition-colors">
                  Market Research
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                {config.displayName}
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="section-padding py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-wide max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
              {config.segment === 'b2b' ? 'B2B Research' : 'Consumer Research'}
              {' · '}
              {config.displayNameShort}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              {config.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {config.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Request a proposal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#countries"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                View countries
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                ESOMAR member
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                14+ years in-region fieldwork
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                Arabic–English bilingual teams
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                ISO-compliant data handling
              </span>
            </div>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────── */}
        <section className="section-padding py-16 bg-background">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              What we research
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Our {config.displayName.toLowerCase()} research programmes cover the full range of insight needs —
              from strategic brand work to operational tracking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {config.serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Countries ──────────────────────────────────────────────── */}
        <section id="countries" className="section-padding py-16 bg-muted/30">
          <div className="container-wide">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Countries we serve
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              We run {config.displayName.toLowerCase()} research across 10 markets. Select a country for
              localised capabilities and sample specifications.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {config.countryLinks.map((country) => (
                <Link
                  key={country.slug}
                  to={`/${country.slug}-${config.slug}-market-research`}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {COUNTRY_FLAG[country.slug] ?? '🌐'}
                  </span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {country.label}
                  </span>
                  <span className="text-xs text-muted-foreground">16 industries available</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────────────────────── */}
        <section className="section-padding py-14 bg-primary text-primary-foreground">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {config.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ───────────────────────────────────────────────────── */}
        <section id="faq" className="section-padding py-16 bg-background">
          <div className="container-wide max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground mb-10">
              Common questions about {config.displayName.toLowerCase()} market research with BioNixus.
            </p>
            <div className="space-y-3">
              {config.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-card overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-foreground select-none list-none hover:bg-muted/40 transition-colors">
                    <span>{faq.question}</span>
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA band ───────────────────────────────────────────────── */}
        <section className="section-padding py-16 bg-foreground text-background">
          <div className="container-wide text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to launch your {config.displayNameShort.toLowerCase()} research?
            </h2>
            <p className="text-background/70 mb-8 leading-relaxed">
              Tell us about your project and we will respond within one business day with a
              tailored proposal and timeline.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
