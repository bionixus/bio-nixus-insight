import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { SegmentMarketContent } from '@/data/segmentMarkets/types';

/**
 * Shared template for geography × segment market landing pages
 * (e.g. /saudi-arabia-molecular-diagnostics-market, /gcc-nutraceuticals-market).
 */
export default function SegmentMarketPage({ content }: { content: SegmentMarketContent }) {
  const canonicalPath = `/${content.slug}`;
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: content.breadcrumbLabel, href: canonicalPath },
  ];

  const jsonLd = [
    {
      ...buildServiceSchema(),
      name: `${content.geoLabel} ${content.segmentLabel} Market Research`,
      serviceType: `${content.segmentLabel} market research and market intelligence`,
      description: content.description,
      url: content.canonical,
      areaServed: content.areaServed.map((name) => ({ '@type': 'Country', name })),
    },
    buildBreadcrumbSchema(breadcrumbItems),
    buildFAQSchema(content.faqs, { pageUrl: content.canonical }),
    ...(content.rankedList
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `${content.canonical}#ranked-list`,
            name: content.rankedList.heading,
            url: `${content.canonical}#ranked-list`,
            numberOfItems: content.rankedList.items.length,
            itemListOrder: 'https://schema.org/ItemListOrderAscending',
            itemListElement: content.rankedList.items.map((item) => ({
              '@type': 'ListItem',
              position: item.rank,
              name: item.name,
              ...(item.url ? { url: item.url } : {}),
              item: {
                '@type': 'Organization',
                name: item.name,
                ...(item.url ? { url: item.url } : {}),
                description: item.cells.join(' — '),
              },
            })),
          },
        ]
      : []),
    ...(content.lastUpdated
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: content.h1,
            description: content.description,
            mainEntityOfPage: content.canonical,
            dateModified: content.lastUpdated,
            author: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
            publisher: {
              '@type': 'Organization',
              name: 'BioNixus',
              url: 'https://www.bionixus.com',
              logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
            },
          },
        ]
      : []),
  ];

  const lastUpdatedLabel = content.lastUpdated
    ? new Date(`${content.lastUpdated}T00:00:00Z`).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      })
    : null;

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
            {lastUpdatedLabel && (
              <p className="text-sm text-muted-foreground mb-4">
                Updated{' '}
                <time dateTime={content.lastUpdated}>{lastUpdatedLabel}</time>
              </p>
            )}
            <div className="space-y-4">
              {content.intro.map((para) => (
                <p key={para.slice(0, 48)} className="text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <GeoLLMAnswerBlock
              question={content.quickAnswer.question}
              answer={content.quickAnswer.answer}
              points={content.quickAnswer.points}
              summary={content.quickAnswer.summary}
              pageUrl={content.canonical}
            />
          </div>
        </section>

        {content.rankedList && (
          <section className="section-padding py-10" id="ranked-list">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                {content.rankedList.heading}
              </h2>
              {content.rankedList.intro && (
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{content.rankedList.intro}</p>
              )}
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40">
                    <tr className="text-left">
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground w-12">
                        #
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        Pharmacy
                      </th>
                      {content.rankedList.columns.map((col) => (
                        <th key={col} scope="col" className="px-4 py-3 font-semibold text-foreground">
                          {col}
                        </th>
                      ))}
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.rankedList.items.map((item) => (
                      <tr key={item.rank} className="border-t border-border align-top">
                        <td className="px-4 py-3 font-semibold text-foreground">{item.rank}</td>
                        <td className="px-4 py-3 font-semibold text-foreground">
                          {item.url ? (
                            <a
                              href={item.url}
                              rel="nofollow noopener"
                              target="_blank"
                              className="text-primary hover:underline"
                            >
                              {item.name}
                            </a>
                          ) : (
                            item.name
                          )}
                        </td>
                        {item.cells.map((cell, idx) => (
                          <td key={idx} className="px-4 py-3 text-muted-foreground leading-relaxed">
                            {cell}
                          </td>
                        ))}
                        <td className="px-4 py-3 text-muted-foreground leading-relaxed">
                          {item.source ? (
                            <a
                              href={item.source.href}
                              rel="nofollow noopener"
                              target="_blank"
                              className="text-primary hover:underline"
                            >
                              {item.source.label}
                            </a>
                          ) : (
                            '—'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {content.rankedList.footnote && (
                <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-3xl">
                  {content.rankedList.footnote}
                </p>
              )}
            </div>
          </section>
        )}

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              What we research in the {content.geoLabel} {content.segmentLabel.toLowerCase()} market
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

        {content.segmentBreakdown && (
          <section className="section-padding py-10 bg-muted/20">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                {content.segmentBreakdown.heading}
              </h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                {content.segmentBreakdown.items.map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                    <dt className="text-base font-semibold text-foreground mb-2">{item.label}</dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {content.demandDrivers.heading}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {content.demandDrivers.drivers.map((driver) => (
                <article key={driver.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{driver.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{driver.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              {content.marketStructure.heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {content.marketStructure.paragraphs.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {content.geoSignals && (
          <section className="section-padding py-10">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                {content.geoSignals.heading}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {content.geoSignals.items.map((item) => (
                  <article key={item.name} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.signal}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Who we interview
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.audiences.map((audience) => (
                <article key={audience.audience} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{audience.audience}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {content.methodology && content.methodology.length > 0 && (
          <section className="section-padding py-10">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                How we size and validate the {content.segmentLabel.toLowerCase()} opportunity
              </h2>
              <ul className="space-y-3">
                {content.methodology.map((step) => (
                  <li key={step.slice(0, 48)} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary flex-shrink-0">→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Why teams choose BioNixus for {content.geoLabel} {content.segmentLabel.toLowerCase()} research
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

        <section className="section-padding py-8">
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

        <section className="section-padding py-8 bg-muted/20">
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
