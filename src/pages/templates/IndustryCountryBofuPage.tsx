import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { ExecutiveDecisionBlock } from '@/components/page/PremiumPageSections';
import {
  buildIndustryCountryPageConfig,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';
import { countryMarketContextData, COUNTRY_MARKET_CONTEXT_DATA } from '@/data/countryMarketContext';

type IndustryCountryBofuPageProps = {
  countrySlug: MatrixCountrySlug;
  industrySlug: MatrixIndustrySlug;
};

export default function IndustryCountryBofuPage({ countrySlug, industrySlug }: IndustryCountryBofuPageProps) {
  const config = buildIndustryCountryPageConfig(countrySlug, industrySlug);
  if (!config) return null;

  const countryCtx =
    COUNTRY_MARKET_CONTEXT_DATA[countrySlug] ??
    countryMarketContextData.find((c) => c.slug === countrySlug);

  const pageUrl = `https://www.bionixus.com${config.bofuPath}`;
  const orgId = 'https://www.bionixus.com/#organization';

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
    buildFAQSchema(config.faqItems),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={config.title}
        description={config.metaDescription}
        canonical={config.bofuPath}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: config.h1, href: config.bofuPath },
          ]}
        />

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {countryCtx?.flag && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                  {countryCtx.flag} {config.country.label}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                {config.country.regulatorShort}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                {config.industry.displayNameShort} Research
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
              {config.h1}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 mb-4 max-w-3xl">
              {config.heroIntro}
            </p>
            <p className="text-sm leading-relaxed text-primary-foreground/80 mb-8 max-w-3xl">
              For regional context, see{' '}
              <Link to={config.country.midFunnelPath} className="underline font-medium text-primary-foreground">
                market research in {config.country.label}
              </Link>
              {' '}or compare{' '}
              <Link to={config.listiclePath} className="underline font-medium text-primary-foreground">
                top {config.industry.displayNameShort.toLowerCase()} market research companies in{' '}
                {config.country.label} (2026)
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              {[
                'ESOMAR member',
                '14+ years in-region fieldwork',
                'Bilingual Arabic–English teams',
                'ISO-compliant data handling',
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/60 inline-block" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Country stats strip ───────────────────────────────────── */}
        {countryCtx && (
          <section className="py-10 bg-primary/5 border-b border-border">
            <div className="container-wide max-w-5xl">
              <div className="grid grid-cols-3 gap-6 text-center">
                {countryCtx.keyStats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </div>
                    {stat.note && (
                      <div className="text-xs text-muted-foreground/60 italic">{stat.note}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Executive decision block ──────────────────────────────── */}
        <ExecutiveDecisionBlock heading={config.executiveHeading} points={config.executivePoints} />

        {/* ── Country market overview ───────────────────────────────── */}
        {countryCtx && (
          <section className="py-14 bg-background">
            <div className="container-wide max-w-5xl">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl leading-none" aria-hidden="true">{countryCtx.flag}</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-1">
                    {config.country.label} market context
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Key sectors: {countryCtx.topSectors.join(' · ')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">{countryCtx.marketOverviewP1}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{countryCtx.marketOverviewP2}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-2">Regulatory environment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{countryCtx.regulatoryNote}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-2">Fieldwork considerations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{countryCtx.fieldworkNote}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Why BioNixus ─────────────────────────────────────────── */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
              Why BioNixus for {config.industry.displayNameShort} in {config.country.label}
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Four reasons clients choose BioNixus for their {config.industry.displayNameShort.toLowerCase()} research
              mandates in {config.country.label}.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {config.proofBullets.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Decision map ─────────────────────────────────────────── */}
        <section className="py-12">
          <div className="container-wide max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
              Decision map for {config.industry.displayNameShort} research in {config.country.label}
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              A structured approach to planning and executing {config.industry.displayNameShort.toLowerCase()} market
              research in {config.country.label}.
            </p>
            <ol className="space-y-4 list-none pl-0">
              {config.regulatorySteps.map((item, idx) => (
                <li key={item.step} className="rounded-xl border border-border bg-card p-5 flex gap-4">
                  <span className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.step}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.detail}</p>
                    <Link to={item.link.to} className="text-sm font-medium text-primary hover:underline">
                      {item.link.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Market entry barriers ────────────────────────────────── */}
        {countryCtx && (
          <section className="py-12 bg-muted/20">
            <div className="container-wide max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
                Market entry barriers in {config.country.label}
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
                Common barriers clients face when conducting{' '}
                {config.industry.displayNameShort.toLowerCase()} research in {config.country.label}, and how
                BioNixus mitigates each one.
              </p>
              <div className="space-y-4">
                {countryCtx.marketBarriers.map((b, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-card p-5 grid md:grid-cols-2 gap-6"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-destructive/70 mb-2">
                        Barrier
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">{b.barrier}</p>
                    </div>
                    <div className="md:border-l md:border-border md:pl-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                        BioNixus mitigation
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.mitigation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Stakeholder coverage ─────────────────────────────────── */}
        <section className="py-12">
          <div className="container-wide max-w-5xl overflow-x-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-5">
              Stakeholder coverage
            </h2>
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-3 pr-4 font-semibold text-foreground">
                    Stakeholder
                  </th>
                  <th scope="col" className="py-3 font-semibold text-foreground">
                    Research focus
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {config.stakeholderRows.map((row) => (
                  <tr key={row.role} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium text-foreground">{row.role}</td>
                    <td className="py-3">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Uniqueness ───────────────────────────────────────────── */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Why {config.industry.displayNameShort} in {config.country.label} is unique
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              {config.uniquenessParagraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              <p>
                Pharmaceutical company intent?{' '}
                <Link to={config.country.pharmaBofuPath} className="text-primary underline font-medium">
                  Healthcare market research — pharma in {config.country.label}
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────────── */}
        <section className="py-12">
          <div className="container-wide max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-5">
              {config.servicesHeading}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {config.serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.body}</p>
                </article>
              ))}
            </div>
            {config.relatedReportLink ? (
              <p className="mt-6 text-sm text-muted-foreground">
                Market structure:{' '}
                <Link to={config.relatedReportLink.to} className="text-primary underline">
                  {config.relatedReportLink.label}
                </Link>
              </p>
            ) : null}
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────────── */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Frequently asked questions
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Common questions about {config.industry.displayNameShort.toLowerCase()} market research in{' '}
              {config.country.label}.
            </p>
            <div className="space-y-3">
              {config.faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-border bg-card overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-foreground select-none list-none hover:bg-muted/40 transition-colors">
                    <span>{item.question}</span>
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="country" countryName={config.country.label} />
      </main>
      <Footer />
    </div>
  );
}
