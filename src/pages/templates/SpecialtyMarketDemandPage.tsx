import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { SpecialtyMarketDemandContent } from '@/data/specialtyMarketDemandContent';
import { buildSpecialtyMethodologyBlock } from '@/data/specialtyMarketMethodology';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
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

const STANDARD_DELIVERABLES: Array<{ title: string; desc: string }> = [
  {
    title: 'Executive synthesis',
    desc: 'One decision memo linking findings to launch, access, tender, or portfolio owners — with evidence gaps flagged explicitly.',
  },
  {
    title: 'Stakeholder segmentation',
    desc: 'Influence maps and objection themes by account type, specialty, or procurement cell — not a single undifferentiated average.',
  },
  {
    title: 'Competitive objection library',
    desc: 'Ranked barriers and switch triggers drawn from verified interviews, suitable for medical education and tender defence.',
  },
  {
    title: 'Quant modules (when scoped)',
    desc: 'Adoption, share-of-voice, or scoring modules with documented powering assumptions and quota logs.',
  },
  {
    title: 'Qual depth (when scoped)',
    desc: 'Structured interviews until thematic saturation on the decision in scope, with neutral moderation standards.',
  },
  {
    title: 'Methodology appendix',
    desc: 'Audit-ready documentation of instruments, ethics, recruitment funnel, and cleaning rules for governance review.',
  },
  {
    title: 'Activation workshop',
    desc: 'Optional leadership readout translating segments into thirty/sixty/ninety-day actions with named owners.',
  },
  {
    title: 'Multi-country harmonisation',
    desc: 'Comparable cores with local modules when programmes span GCC, EU5, UK, or North America roll-ups.',
  },
];

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

  const methodology = buildSpecialtyMethodologyBlock(content.segmentLabel);

  const jumpItems = [
    { href: '#research', label: 'Research' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#structure', label: 'Structure' },
    ...(content.signalGrid ? [{ href: '#signals', label: 'Signals' }] : []),
    ...(content.calendarBlocks ? [{ href: '#calendar', label: 'Calendar' }] : []),
    { href: '#methodology', label: 'Methodology' },
    { href: '#deliverables', label: 'Deliverables' },
    { href: '#audiences', label: 'Audiences' },
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

        <section className="section-padding py-10 bg-background border-b border-[#EDE9E3]">
          <div className="container-wide max-w-4xl mx-auto">
            <GeoLLMAnswerBlock
              question={`What is the ${content.segmentLabel} market and how does BioNixus research it?`}
              answer={`BioNixus researches the ${content.segmentLabel.toLowerCase()} market through primary interviews and surveys with verified clinicians, procurement leaders, and access stakeholders — mapped to regulators, tenders, and care pathways rather than syndicated revenue tables.`}
              points={content.researchTopics.slice(0, 4).map((topic) => ({
                title: topic.name,
                description: topic.detail,
              }))}
              summary="Request a scoped proposal via the contact form — typically within 48 hours of a brief."
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

        <DirectorySection id="methodology" eyebrow="Methodology" title={methodology.heading}>
          <div className="space-y-4 max-w-3xl mb-10">
            {methodology.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <h3 className="text-lg font-display font-semibold text-foreground mb-4">{methodology.timelineHeading}</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {methodology.timelineSteps.map((step) => (
              <DirectoryDriverCard key={step.title} title={step.title} desc={step.body} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="deliverables" surface="cream" eyebrow="Outputs" title="Typical deliverables">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {STANDARD_DELIVERABLES.map((item) => (
              <DirectoryDriverCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="engagement" eyebrow="How we work" title={methodology.engagementHeading}>
          <div className="grid sm:grid-cols-2 gap-5">
            {methodology.engagementModels.map((item) => (
              <DirectoryDriverCard key={item.title} title={item.title} desc={item.body} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="audiences" surface="cream" eyebrow="Fieldwork" title="Who we interview">
          <div className="grid sm:grid-cols-2 gap-5">
            {content.audiences.map((a) => (
              <DirectoryDriverCard key={a.audience} title={a.audience} desc={a.description} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection
          id="why"
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
          <DirectoryFaqList items={content.faqs.map((item) => ({ q: item.question, a: item.answer }))} />
        </DirectorySection>

        <DirectorySection id="hub-context" surface="cream" eyebrow="Context" title="How this page fits your research stack">
          <div className="space-y-4 max-w-3xl text-muted-foreground leading-relaxed">
            <p>
              This {content.segmentLabel.toLowerCase()} briefing is one module in a wider{' '}
              <Link to="/healthcare-market-research">healthcare market research</Link> programme. Sponsors typically
              combine it with country service pages, therapy hubs, or GCC access guides when registration, pricing, or
              tender timing is on the critical path — rather than treating a single landing page as the entire evidence
              plan.
            </p>
            <p>
              BioNixus is positioned as an agile alternative to IQVIA, Kantar Health, and syndicated trackers when teams
              need verified primary fieldwork with audit-ready methodology. Compare vendor models on the{' '}
              <Link to="/iqvia-alternative">IQVIA competitors list</Link> or request a scoped proposal when your brief is
              account-level, access-level, or procurement-level intelligence for {content.segmentLabel.toLowerCase()}.
            </p>
          </div>
        </DirectorySection>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
