import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';
import type { CountryKeywordContent } from '@/data/countryKeywordPages';
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
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';

/**
 * Shared template for country Pharma Insights and Real-World Evidence SEO pages.
 */
export default function CountryKeywordPage({ content }: { content: CountryKeywordContent }) {
  const canonicalPath = `/${content.slug}`;
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: content.pillarLabel, href: content.pillarHref },
    { name: content.breadcrumbLabel, href: canonicalPath },
  ];

  const serviceType =
    content.kind === 'pharma-insights'
      ? `Pharmaceutical insights and market research — ${content.countryName}`
      : `Real-world evidence studies — ${content.countryName}`;

  const jsonLd = [
    {
      ...buildServiceSchema(),
      name: content.h1,
      serviceType,
      description: content.description,
      url: content.canonical,
      areaServed: content.areaServed.map((name) => ({ '@type': 'Country', name })),
    },
    buildBreadcrumbSchema(breadcrumbItems),
    buildFAQSchema(content.faqs, { pageUrl: content.canonical }),
  ];

  const topicsTitle =
    content.kind === 'pharma-insights'
      ? `What pharma insights cover in ${content.countryName}`
      : `What RWE programmes cover in ${content.countryName}`;

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
              <p className="mt-3">
                Start from our{' '}
                {content.hubLinks.map((link, index) => (
                  <span key={link.to}>
                    {index > 0 ? (index === content.hubLinks.length - 1 ? ', or our ' : ', ') : null}
                    <Link to={link.to}>{link.label}</Link>
                  </span>
                ))}{' '}
                for programme design, then request a scoped briefing for {content.countryName}.
              </p>
            </>
          }
          stats={[
            { value: content.countryName, label: 'Market' },
            { value: String(content.topics.length), label: 'research topics' },
            { value: String(content.audiences.length), label: 'audiences' },
            { value: '48h', label: 'to a scoped proposal' },
          ]}
          actions={
            <>
              <DirectoryGoldLink to="/contact">Request a proposal</DirectoryGoldLink>
              <DirectoryOutlineLink href="#topics">Browse the programme</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav
          items={[
            { href: '#topics', label: 'Topics' },
            { href: '#audiences', label: 'Audiences' },
            { href: '#programme', label: 'Programme' },
            { href: '#why', label: 'Why BioNixus' },
            { href: '#related', label: 'Related' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <section className="section-padding py-10 bg-muted/10">
          <div className="container-wide max-w-5xl mx-auto">
            <GeoLLMAnswerBlock
              question={
                content.kind === 'pharma-insights'
                  ? `Pharma insights in ${content.countryName}`
                  : `Real-world evidence in ${content.countryName}`
              }
              answer={content.llmSummary}
              points={content.topics.slice(0, 3).map((t) => ({
                title: t.name,
                description: t.detail,
              }))}
              summary={content.llmSummary}
            />
          </div>
        </section>

        <DirectorySection id="topics" eyebrow="Coverage" title={topicsTitle}>
          <div className="grid sm:grid-cols-2 gap-5">
            {content.topics.map((item) => (
              <DirectoryDriverCard key={item.name} title={item.name} desc={item.detail} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection
          eyebrow="Decisions"
          title={`Commercial decisions this research supports in ${content.countryName}`}
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            <p>
              Launch teams use {content.countryName} evidence to sequence accounts, set uptake expectations, and align
              medical and access stories before activation — especially when {content.regulators} timelines gate first
              revenue.
            </p>
            <p>
              Access and pricing teams stress-test value narratives against payer and procurement behaviour shaped by{' '}
              {content.accessCue}, identifying objections that syndicated sales data cannot surface.
            </p>
            <p>
              Competitive and brand teams validate positioning in live stakeholder conversations — how physicians and
              payers compare your therapy to incumbents in {content.countryName}, not only in global brand books.
            </p>
            <p>
              Lifecycle owners use refresh studies to catch formulary, tender, or switching pressure early enough to
              adjust contracts, medical education, or patient support while share is still defensible.
            </p>
            <p>
              Contact BioNixus for a scoped proposal when your {content.countryName} brief has a fixed committee, HTA, or
              tender date and you need primary evidence on a realistic field timeline.
            </p>
          </div>
        </DirectorySection>

        <DirectorySection id="audiences" surface="cream" eyebrow="Fieldwork" title="Who we interview">
          <div className="grid sm:grid-cols-2 gap-5">
            {content.audiences.map((a) => (
              <DirectoryDriverCard key={a.audience} title={a.audience} desc={a.description} />
            ))}
          </div>
        </DirectorySection>

        <DirectorySection id="programme" eyebrow="Methodology" title="Programme design and deliverables">
          <div className="space-y-10">
            {content.programmeSections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">{section.heading}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((para) => (
                    <p key={para.slice(0, 48)}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Quality, privacy, and fieldwork standards in {content.countryName}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                {[
                  'Screened respondents with verified specialty, institution type, and decision role before interviews or surveys begin.',
                  'Documented informed consent and de-identified reporting suitable for medical, legal, and compliance review.',
                  'Secure data handling with audit trails — not anonymous panels with unverifiable credentials.',
                  'Native-language moderation where local clinical and access context affects how questions are interpreted.',
                  'Quality checks during fieldwork to remove speeders, duplicates, and out-of-scope respondents.',
                  'Explicit limitations and assumptions in every deliverable so leadership knows what evidence can and cannot claim.',
                  'Optional workshop facilitation to translate findings into brand, medical, and access action plans.',
                  'Linkage to BioNixus healthcare market research hubs when the next decision requires a different method or market.',
                ].map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-2 bg-[#FFFEFB] rounded-2xl border border-[#EDE9E3] p-4"
                  >
                    <span className="text-[#C9A84C] flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DirectorySection>

        <DirectorySection id="why" eyebrow="Why BioNixus" title={`Why BioNixus for ${content.countryName}`}>
          <WhyBioNixusIntro />
          <ul className="grid sm:grid-cols-2 gap-3 mt-6">
            {content.whyPoints.map((point) => (
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

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
