import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { SegmentMarketContent } from '@/data/segmentMarkets/types';
import {
  DirectoryDriverCard,
  DirectoryFaqList,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';

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
            image: 'https://www.bionixus.com/og-image.png',
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

  const jumpItems = [
    { href: '#answer', label: 'Answer' },
    ...(content.rankedList ? [{ href: '#ranked-list', label: 'Ranking' }] : []),
    { href: '#research', label: 'Research' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#structure', label: 'Structure' },
    { href: '#related', label: 'Related' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <div className="directory-page min-h-screen">
      <SEOHead
        title={content.title}
        description={content.description}
        canonical={canonicalPath}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <DirectoryHero
          breadcrumbs={breadcrumbItems}
          kicker={content.badge}
          h1={content.h1}
          lead={content.intro[0] ?? content.description}
          rest={
            content.intro.length > 1 ? (
              <>
                {content.intro.slice(1).map((para) => (
                  <p key={para.slice(0, 48)} className="mt-3">
                    {para}
                  </p>
                ))}
              </>
            ) : undefined
          }
          metaLine={lastUpdatedLabel ? `Updated ${lastUpdatedLabel}` : undefined}
          stats={[
            { value: content.geoLabel, label: 'Market' },
            { value: content.segmentLabel, label: 'Segment' },
            { value: String(content.researchTopics.length), label: 'research topics' },
            { value: '48h', label: 'to a scoped proposal' },
          ]}
          actions={
            <>
              <DirectoryGoldLink to="/contact">Request a proposal</DirectoryGoldLink>
              <DirectoryOutlineLink href="#research">See what we research</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav items={jumpItems} />

        <DirectorySection id="answer" eyebrow="Quick answer">
          <GeoLLMAnswerBlock
            question={content.quickAnswer.question}
            answer={content.quickAnswer.answer}
            points={content.quickAnswer.points}
            summary={content.quickAnswer.summary}
            pageUrl={content.canonical}
          />
        </DirectorySection>

        {content.rankedList ? (
          <DirectorySection
            id="ranked-list"
            surface="cream"
            eyebrow="Named accounts"
            title={content.rankedList.heading}
            body={content.rankedList.intro}
          >
            <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
              <table className="directory-table">
                <thead>
                  <tr>
                    <th scope="col" className="w-12">
                      #
                    </th>
                    <th scope="col">Pharmacy</th>
                    {content.rankedList.columns.map((col) => (
                      <th key={col} scope="col">
                        {col}
                      </th>
                    ))}
                    <th scope="col">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {content.rankedList.items.map((item) => (
                    <tr key={item.rank}>
                      <td className="directory-rank">{String(item.rank).padStart(2, '0')}</td>
                      <td className="font-semibold text-foreground">
                        {item.url ? (
                          <a href={item.url} rel="nofollow noopener" target="_blank" className="text-primary hover:underline">
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}
                      </td>
                      {item.cells.map((cell, idx) => (
                        <td key={idx} className="text-muted-foreground leading-relaxed">
                          {cell}
                        </td>
                      ))}
                      <td className="text-muted-foreground leading-relaxed">
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
            {content.rankedList.footnote ? (
              <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-3xl">{content.rankedList.footnote}</p>
            ) : null}
          </DirectorySection>
        ) : null}

        <DirectorySection
          id="research"
          eyebrow="Coverage"
          title={`What we research in the ${content.geoLabel} ${content.segmentLabel.toLowerCase()} market`}
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {content.researchTopics.map((item) => (
              <DirectoryDriverCard key={item.name} title={item.name} desc={item.detail} />
            ))}
          </div>
        </DirectorySection>

        {content.segmentBreakdown ? (
          <DirectorySection id="breakdown" surface="cream" eyebrow="Breakdown" title={content.segmentBreakdown.heading}>
            <dl className="grid sm:grid-cols-2 gap-5">
              {content.segmentBreakdown.items.map((item) => (
                <DirectoryDriverCard key={item.label} title={item.label} desc={item.detail} />
              ))}
            </dl>
          </DirectorySection>
        ) : null}

        <DirectorySection id="drivers" eyebrow="What is moving" title={content.demandDrivers.heading}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {content.demandDrivers.drivers.map((driver) => (
              <DirectoryDriverCard key={driver.title} title={driver.title} desc={driver.detail} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="structure" surface="cream" eyebrow="Market structure" title={content.marketStructure.heading}>
          <div className="space-y-4 max-w-3xl">
            {content.marketStructure.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </DirectorySection>

        {content.geoSignals ? (
          <DirectorySection id="signals" eyebrow="Signals" title={content.geoSignals.heading}>
            <div className="grid md:grid-cols-2 gap-5">
              {content.geoSignals.items.map((item) => (
                <DirectoryDriverCard key={item.name} title={item.name} desc={item.signal} />
              ))}
            </div>
          </DirectorySection>
        ) : null}

        <DirectorySection id="audiences" surface="cream" eyebrow="Fieldwork" title="Who we interview">
          <div className="grid md:grid-cols-2 gap-5">
            {content.audiences.map((audience) => (
              <DirectoryDriverCard key={audience.audience} title={audience.audience} desc={audience.description} />
            ))}
          </div>
        </DirectorySection>

        {content.methodology && content.methodology.length > 0 ? (
          <DirectorySection
            id="methodology"
            eyebrow="Method"
            title={`How we size and validate the ${content.segmentLabel.toLowerCase()} opportunity`}
          >
            <ul className="space-y-3">
              {content.methodology.map((step) => (
                <li
                  key={step.slice(0, 48)}
                  className="flex gap-3 text-sm text-foreground bg-[#FFFEFB] rounded-2xl border border-[#EDE9E3] p-5"
                >
                  <span className="text-[#C9A84C] flex-shrink-0">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </DirectorySection>
        ) : null}

        <DirectorySection
          id="why"
          surface="cream"
          eyebrow="Why BioNixus"
          title={`Why teams choose BioNixus for ${content.geoLabel} ${content.segmentLabel.toLowerCase()} research`}
        >
          <WhyBioNixusIntro />
          <ul className="grid sm:grid-cols-2 gap-3 mt-6">
            {content.whyBionixus.map((point) => (
              <li
                key={point.slice(0, 48)}
                className="flex gap-2 text-sm text-foreground bg-[#FFFEFB] rounded-2xl border border-[#EDE9E3] p-5"
              >
                <span className="text-[#C9A84C] flex-shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </DirectorySection>

        <DirectorySection id="related" eyebrow="Keep reading" title="Related research resources">
          <div className="grid md:grid-cols-2 gap-3">
            {content.relatedLinks.map((link) => (
              <DirectoryLinkTile key={link.to} to={link.to} title={link.label} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="faq" surface="cream" eyebrow="Questions" title="Frequently asked questions">
          <DirectoryFaqList items={content.faqs.map((item) => ({ q: item.question, a: item.answer }))} />
        </DirectorySection>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
