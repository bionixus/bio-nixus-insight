import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { SpecialtyMarketDemandContent } from '@/data/specialtyMarketDemandContent';

/**
 * Shared template for GSC demand-driven specialty market pages
 * (country × device category, drug-class access, trend, calendar guides).
 */
export default function SpecialtyMarketDemandPage({ content }: { content: SpecialtyMarketDemandContent }) {
  const canonicalPath = `/${content.slug}`;
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: content.breadcrumbLabel, href: canonicalPath },
  ];

  const jsonLd = [
    {
      ...buildServiceSchema(),
      name: content.h1,
      serviceType: `${content.segmentLabel} market research`,
      description: content.description,
      url: content.canonical,
      ...(content.areaServed?.length
        ? {
            areaServed: content.areaServed.map((name) => ({ '@type': 'Country', name })),
          }
        : {}),
    },
    buildBreadcrumbSchema(breadcrumbItems),
    buildFAQSchema(content.faqs, { pageUrl: content.canonical }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={content.title}
        description={content.description}
        canonical={canonicalPath}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav items={breadcrumbItems} />

        <section className="section-padding py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {content.badge}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              {content.h1}
            </h1>
            <div className="space-y-4">
              {content.intro.map((para) => (
                <p key={para.slice(0, 48)} className="text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            {content.hubLink ? (
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Start from our{' '}
                <Link to={content.hubLink.to} className="text-primary font-medium hover:underline">
                  {content.hubLink.label}
                </Link>{' '}
                for broader programme design, or request a scoped briefing for this market.
              </p>
            ) : null}
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              What we research in the {content.segmentLabel.toLowerCase()} market
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {content.researchTopics.map((item) => (
                <article key={item.name} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {content.demandDrivers.heading}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {content.demandDrivers.drivers.map((d) => (
                <article key={d.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {content.marketStructure.heading}
            </h2>
            <div className="space-y-4">
              {content.marketStructure.paragraphs.map((para) => (
                <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {content.signalGrid ? (
          <section className="section-padding py-10 bg-muted/20">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                {content.signalGrid.heading}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.signalGrid.items.map((item) => (
                  <article key={item.label} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.signal}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {content.calendarBlocks ? (
          <section className="section-padding py-10">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                {content.calendarBlocks.heading}
              </h2>
              <div className="space-y-4">
                {content.calendarBlocks.items.map((item) => (
                  <article key={item.period} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.period}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Who we interview
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.audiences.map((a) => (
                <article key={a.audience} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{a.audience}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Why BioNixus for {content.segmentLabel.toLowerCase()} research
            </h2>
            <WhyBioNixusIntro />
            <ul className="grid sm:grid-cols-2 gap-3 mt-6">
              {content.whyBionixus.map((point) => (
                <li key={point.slice(0, 48)} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">Related research resources</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {content.relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Frequently asked questions</h2>
            <div className="space-y-3">
              {content.faqs.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
