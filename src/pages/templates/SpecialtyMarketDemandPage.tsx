import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { SpecialtyMarketDemandContent } from '@/data/specialtyMarketDemandContent';
import {
  buildSpecialtyMarketContextSection,
  buildSpecialtyMarketEvidenceSection,
  buildSpecialtyMarketDeliverables,
  buildSpecialtyMarketEngagement,
  buildSpecialtyMarketGeoBlock,
  buildSpecialtyMarketMethodology,
  buildSupplementarySpecialtyFaqs,
} from '@/data/specialtyMarketMethodology';
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
 * Shared template for GSC demand-driven specialty market pages
 * (country × device category, drug-class access, trend, calendar guides).
 */
export default function SpecialtyMarketDemandPage({ content }: { content: SpecialtyMarketDemandContent }) {
  const canonicalPath = `/${content.slug}`;
  const geoBlock = buildSpecialtyMarketGeoBlock(content);
  const marketContext = buildSpecialtyMarketContextSection(content);
  const evidenceSection = buildSpecialtyMarketEvidenceSection(content);
  const methodology = buildSpecialtyMarketMethodology(content);
  const deliverables = buildSpecialtyMarketDeliverables(content);
  const engagement = buildSpecialtyMarketEngagement(content);
  const allFaqs = [...content.faqs, ...buildSupplementarySpecialtyFaqs(content)];
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
    buildFAQSchema(allFaqs, { pageUrl: content.canonical }),
  ];

  const jumpItems = [
    { href: '#research', label: 'Research' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#structure', label: 'Structure' },
    { href: '#context', label: 'Context' },
    ...(content.signalGrid ? [{ href: '#signals', label: 'Signals' }] : []),
    ...(content.calendarBlocks ? [{ href: '#calendar', label: 'Calendar' }] : []),
    { href: '#audiences', label: 'Audiences' },
    { href: '#evidence', label: 'Evidence' },
    { href: '#methodology', label: 'Methodology' },
    { href: '#deliverables', label: 'Deliverables' },
    { href: '#engagement', label: 'Timeline' },
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
            <>
              {content.intro.slice(1).map((para) => (
                <p key={para.slice(0, 48)} className="mt-3">
                  {para}
                </p>
              ))}
              {content.hubLink ? (
                <p className="mt-3">
                  Start from our <Link to={content.hubLink.to}>{content.hubLink.label}</Link> for broader programme
                  design, or request a scoped briefing for this market.
                </p>
              ) : null}
            </>
          }
          stats={[
            { value: content.segmentLabel, label: 'Segment' },
            { value: String(content.researchTopics.length), label: 'research topics' },
            { value: String(content.demandDrivers.drivers.length), label: 'demand drivers' },
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

        <section className="section-padding py-10 bg-[#FFFEFB] border-b border-[#EDE9E3]">
          <div className="container max-w-4xl">
            <GeoLLMAnswerBlock
              question={geoBlock.question}
              answer={geoBlock.answer}
              points={geoBlock.points}
              summary={geoBlock.summary}
              pageUrl={content.canonical}
            />
          </div>
        </section>

        <DirectorySection
          id="research"
          eyebrow="Coverage"
          title={`What we research in the ${content.segmentLabel.toLowerCase()} market`}
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {content.researchTopics.map((item) => (
              <DirectoryDriverCard key={item.name} title={item.name} desc={item.detail} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="drivers" surface="cream" eyebrow="What is moving" title={content.demandDrivers.heading}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {content.demandDrivers.drivers.map((d) => (
              <DirectoryDriverCard key={d.title} title={d.title} desc={d.detail} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="structure" eyebrow="Market structure" title={content.marketStructure.heading}>
          <div className="space-y-4 max-w-3xl">
            {content.marketStructure.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="context" surface="cream" eyebrow="Intelligence" title={marketContext.heading}>
          <div className="space-y-4 max-w-3xl">
            {marketContext.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </DirectorySection>

        {content.signalGrid ? (
          <DirectorySection id="signals" surface="cream" eyebrow="Signals" title={content.signalGrid.heading}>
            <div className="grid sm:grid-cols-2 gap-5">
              {content.signalGrid.items.map((item) => (
                <DirectoryDriverCard key={item.label} title={item.label} desc={item.signal} />
              ))}
            </div>
          </DirectorySection>
        ) : null}

        {content.calendarBlocks ? (
          <DirectorySection id="calendar" eyebrow="Calendar" title={content.calendarBlocks.heading}>
            <div className="space-y-4">
              {content.calendarBlocks.items.map((item) => (
                <DirectoryDriverCard key={item.period} title={item.period} desc={item.detail} />
              ))}
            </div>
          </DirectorySection>
        ) : null}

        <DirectorySection id="audiences" surface="cream" eyebrow="Fieldwork" title="Who we interview">
          <div className="grid sm:grid-cols-2 gap-5">
            {content.audiences.map((a) => (
              <DirectoryDriverCard key={a.audience} title={a.audience} desc={a.description} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="evidence" eyebrow="Quality" title={evidenceSection.heading}>
          <div className="space-y-4 max-w-3xl">
            {evidenceSection.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="methodology" eyebrow="How we work" title={methodology.heading}>
          <div className="space-y-4 max-w-3xl">
            {methodology.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </DirectorySection>

        <DirectorySection
          id="deliverables"
          surface="cream"
          eyebrow="Outputs"
          title={deliverables.heading}
        >
          <ul className="grid sm:grid-cols-2 gap-3 max-w-4xl">
            {deliverables.bullets.map((point) => (
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

        <DirectorySection id="engagement" eyebrow="Timeline" title={engagement.heading}>
          <div className="space-y-4 max-w-3xl">
            {engagement.steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] p-5">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </DirectorySection>

        <DirectorySection
          id="why"
          surface="cream"
          eyebrow="Why BioNixus"
          title={`Why BioNixus for ${content.segmentLabel.toLowerCase()} research`}
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

        <DirectorySection id="related" surface="cream" eyebrow="Keep reading" title="Related research resources">
          <div className="grid md:grid-cols-2 gap-3">
            {content.relatedLinks.map((link) => (
              <DirectoryLinkTile key={link.to} to={link.to} title={link.label} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="faq" eyebrow="Questions" title="Frequently asked questions">
          <DirectoryFaqList items={allFaqs.map((item) => ({ q: item.question, a: item.answer }))} />
        </DirectorySection>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
