import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { GccSegmentContent } from '@/data/gccSegmentMarketContent';
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
 * Shared template for GCC pharmaceutical market-segment landing pages.
 * Driven entirely by a GccSegmentContent config so each segment page stays unique
 * in copy while sharing one consistent, design-system-aligned layout.
 */
export default function GccSegmentMarketPage({ content }: { content: GccSegmentContent }) {
  const canonicalPath = `/${content.slug}`;
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: `GCC ${content.segmentLabel} Market`, href: canonicalPath },
  ];

  const jsonLd = [
    {
      ...buildServiceSchema(),
      name: `GCC ${content.segmentLabel} Market Research`,
      serviceType: `${content.segmentLabel} market research`,
      description: content.description,
      url: content.canonical,
      areaServed: [
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Oman' },
        { '@type': 'Country', name: 'Bahrain' },
      ],
    },
    buildBreadcrumbSchema(breadcrumbItems),
    buildFAQSchema(content.faqs, { pageUrl: content.canonical }),
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
          kicker="GCC Market Intelligence"
          h1={content.h1}
          lead={content.intro[0] ?? content.description}
          rest={
            content.intro.length > 1 ? (
              <>
                {content.intro.slice(1).map((para) => (
                  <p key={para.slice(0, 40)} className="mt-3">
                    {para}
                  </p>
                ))}
              </>
            ) : undefined
          }
          stats={[
            { value: 'GCC', label: 'Region' },
            { value: content.segmentLabel, label: 'Segment' },
            { value: String(content.countrySignals.length), label: 'country signals' },
            { value: '48h', label: 'to a scoped proposal' },
          ]}
          actions={
            <>
              <DirectoryGoldLink to="/contact">Request a proposal</DirectoryGoldLink>
              <DirectoryOutlineLink href="#research">See what we research</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav
          items={[
            { href: '#research', label: 'Research' },
            { href: '#drivers', label: 'Drivers' },
            { href: '#structure', label: 'Structure' },
            { href: '#countries', label: 'By country' },
            { href: '#audiences', label: 'Audiences' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <DirectorySection
          id="research"
          eyebrow="Coverage"
          title={`What we research in the GCC ${content.segmentLabel.toLowerCase()} market`}
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
              <p key={para.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </DirectorySection>

        <DirectorySection
          id="countries"
          surface="cream"
          eyebrow="By market"
          title={`GCC ${content.segmentLabel.toLowerCase()} market by country`}
        >
          <div className="grid md:grid-cols-2 gap-5">
            {content.countrySignals.map((c) => (
              <DirectoryDriverCard key={c.country} title={c.country} desc={c.signal} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="audiences" eyebrow="Fieldwork" title="Research audiences we reach">
          <div className="grid md:grid-cols-2 gap-5">
            {content.audiences.map((a) => (
              <DirectoryDriverCard key={a.audience} title={a.audience} desc={a.description} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection
          id="why"
          surface="cream"
          eyebrow="Why BioNixus"
          title={`Why pharmaceutical teams choose BioNixus for GCC ${content.segmentLabel.toLowerCase()} research`}
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

        <DirectorySection id="related" eyebrow="Keep reading" title="Related GCC research resources">
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
