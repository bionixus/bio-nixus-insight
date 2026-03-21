import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const pageUrl = 'https://www.bionixus.com/real-world-evidence';

const faqItems = [
  {
    question: 'What is real world evidence (RWE) in pharmaceutical strategy?',
    answer:
      'Real world evidence is insight derived from real-world data sources and primary field evidence—such as clinical practice patterns, treatment pathways, payer behavior, and patient outcomes outside tightly controlled trial settings. For pharmaceutical teams, RWE supports regulatory discussions, HTA submissions, medical affairs narratives, and commercial prioritization when trial evidence alone does not answer stakeholder questions.',
  },
  {
    question: 'How does BioNixus approach RWE differently from large global data platforms?',
    answer:
      'BioNixus combines principal-led study design with hands-on EMEA and MENA execution. Rather than defaulting to a single proprietary dataset, we align each protocol to your decision, stakeholder, and geography—then deliver transparent methods documentation and outputs your medical, access, and commercial teams can use in live planning cycles.',
  },
  {
    question: 'Can BioNixus support RWE for GCC and Middle East markets?',
    answer:
      'Yes. We run GCC-focused RWE programs that respect institutional, regulatory, and recruitment realities across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman. See our dedicated GCC RWE page for regional execution detail.',
  },
  {
    question: 'What types of RWE studies does BioNixus run?',
    answer:
      'Typical programs include physician and payer qualitative depth, quantitative treatment-pathway and prescribing surveys, chart-review style structured interviews where appropriate, and evidence synthesis that connects primary insight to HEOR and access storylines. Study design is always matched to the decision you need to make—not to a generic catalogue.',
  },
  {
    question: 'How does RWE support HTA and payer engagement in Europe and the UK?',
    answer:
      'HTA bodies and payers increasingly expect evidence that reflects local practice and burden of disease. BioNixus structures RWE to clarify unmet need, comparator context, and real-world treatment sequences so your value story aligns with NICE, G-BA, and other HTA-informed expectations when combined with your clinical and economic modelling.',
  },
  {
    question: 'What governance and quality standards apply to BioNixus RWE?',
    answer:
      'We apply protocol-level quality controls, documented assumptions, recruitment verification, and clear analytical traceability. Programs are designed for GDPR-aware handling where EU or UK data is involved and for culturally appropriate engagement across Middle East healthcare systems.',
  },
  {
    question: 'How quickly can an RWE program move from brief to field?',
    answer:
      'After objective alignment and protocol sign-off, many programs move into field setup within a few weeks. Timelines depend on specialty, geography, and any institutional approvals required. We scope honestly up front so launch and access windows stay realistic.',
  },
  {
    question: 'Where should I start if I am comparing RWE partners?',
    answer:
      'Start with one concrete decision—for example payer messaging, label-supporting evidence gaps, or GCC launch sequencing—and request a short methodology memo. Compare how each partner maps that decision to design, geography, and deliverables before committing to a multi-year data relationship.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Real World Evidence (RWE) for Pharmaceutical Teams',
    url: pageUrl,
    description:
      'Real world evidence and RWE studies for pharma: BioNixus delivers EMEA and MENA execution, transparent methodology, and decision-ready outputs for HTA, payers, and lifecycle strategy.',
    isPartOf: { '@type': 'WebSite', name: 'BioNixus', url: 'https://www.bionixus.com' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real World Evidence (RWE) for pharmaceutical and biotech teams',
    serviceType: 'Healthcare real world evidence studies and market research',
    areaServed: [
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Place', name: 'United Kingdom' },
      { '@type': 'Place', name: 'Middle East' },
      { '@type': 'Place', name: 'Gulf Cooperation Council' },
    ],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    offers: {
      '@type': 'Offer',
      description:
        'Principal-led RWE design, qualitative and quantitative fieldwork, and evidence packaging for regulatory, HTA, medical affairs, and commercial decisions.',
    },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Real World Evidence', href: '/real-world-evidence' },
  ]),
  buildFAQSchema(faqItems),
];

export default function RealWorldEvidence() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Real World Evidence (RWE) for Pharma | BioNixus EMEA &amp; MENA</title>
        <meta
          name="description"
          content="Real world evidence (RWE) for pharmaceutical teams in Europe, the UK, and MENA: principal-led study design, HTA-ready narratives, GCC execution, and decision-ready outputs. See why BioNixus is the right RWE partner."
        />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`rwe-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Real World Evidence', href: '/real-world-evidence' },
          ]}
        />

        <article>
          <header className="section-padding pt-10 pb-8 bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground">
            <div className="container-wide max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-5 leading-tight">
                Real World Evidence (RWE) for Pharmaceutical and Biotech Teams
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-4xl">
                BioNixus helps you generate <strong className="font-semibold text-primary-foreground">real world evidence</strong> that
                answers clinical, regulatory, and commercial questions—with senior-led design and execution across{' '}
                <Link to="/healthcare-market-research" className="underline font-semibold">
                  healthcare market research
                </Link>{' '}
                programs in Europe, the UK, and the Middle East. If your stakeholders need proof beyond the clinical trial, we build
                RWE that fits your geography, therapy area, and decision timeline—not a one-size-fits-all data product.
              </p>
            </div>
          </header>

          <div className="section-padding py-12">
            <div className="container-wide max-w-5xl mx-auto space-y-14">
              <section aria-labelledby="what-is-rwe">
                <h2 id="what-is-rwe" className="text-2xl font-display font-semibold text-foreground mb-4">
                  What real world evidence means for pharma today
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Regulators, HTA bodies, payers, and prescribers increasingly expect evidence that reflects how medicines perform in
                    everyday care. <strong className="text-foreground">Real world evidence</strong> closes gaps left by RCTs: treatment
                    sequencing, comorbidity burden, adherence, switch behavior, and pathway friction that shape access and uptake.
                  </p>
                  <p>
                    Effective RWE is not only “big data.” It is a disciplined link between{' '}
                    <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                      quantitative healthcare market research
                    </Link>
                    ,{' '}
                    <Link to="/qualitative-market-research" className="text-primary underline">
                      qualitative insight
                    </Link>
                    , and transparent analytical choices—so your organization can defend conclusions internally and externally.
                  </p>
                </div>
              </section>

              <section aria-labelledby="why-bionixus" className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 id="why-bionixus" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Why BioNixus is the right real world evidence partner
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Large platforms often emphasize proprietary datasets and global scale. BioNixus focuses on{' '}
                  <strong className="text-foreground">decision fidelity</strong>: evidence that matches your question, your markets, and
                  the stakeholders who will actually use the output. That difference matters when you are preparing for a submission,
                  a pricing negotiation, or a regional launch—not buying a generic analytics subscription.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="rounded-xl border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-2">Principal-led design</h3>
                    Senior researchers shape protocol, analysis, and narrative—so RWE does not drift into unfocused data exploration.
                  </li>
                  <li className="rounded-xl border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-2">EMEA &amp; MENA execution depth</h3>
                    Field models aligned to NHS and European payer context and to GCC institutional reality (e.g. SFDA, MOHAP, DHA, DOH
                    considerations in study planning).
                  </li>
                  <li className="rounded-xl border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-2">Mixed methods by design</h3>
                    Surveys, interviews, advisory-style depth, and structured clinical-practice insight—combined so qual and quant
                    reinforce each other.
                  </li>
                  <li className="rounded-xl border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-2">HTA and access fluency</h3>
                    Outputs structured for medical affairs, market access, and HEOR workflows—including links to{' '}
                    <Link to="/heor-consulting-saudi-arabia" className="text-primary underline">
                      HEOR consulting
                    </Link>{' '}
                    and budget-impact narratives where needed.
                  </li>
                  <li className="rounded-xl border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-2">Speed without corner-cutting</h3>
                    Practical scoping that respects recruitment feasibility in specialty and geography—so timelines match reality.
                  </li>
                  <li className="rounded-xl border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-2">Transparent documentation</h3>
                    Clear assumptions, limitations, and quality controls—so your teams can stand behind the evidence in high-stakes
                    forums.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="use-cases">
                <h2 id="use-cases" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Where BioNixus RWE creates the most value
                </h2>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                  <li>
                    <strong className="text-foreground">Regulatory and safety dialogue:</strong> supporting post-approval commitments and
                    real-world effectiveness narratives with defensible methods.
                  </li>
                  <li>
                    <strong className="text-foreground">HTA and payer submissions:</strong> localized unmet need, comparator context, and
                    treatment-pathway evidence aligned with European and UK expectations.
                  </li>
                  <li>
                    <strong className="text-foreground">Medical affairs and publications:</strong> credible insight on practice patterns
                    and evidence interpretation across key markets.
                  </li>
                  <li>
                    <strong className="text-foreground">Commercial prioritization:</strong> segment-level behavior, messaging risk, and
                    account focus grounded in stakeholder reality.
                  </li>
                  <li>
                    <strong className="text-foreground">GCC and Middle East launches:</strong> dedicated{' '}
                    <Link to="/real-world-evidence-gcc" className="text-primary underline">
                      real world evidence GCC
                    </Link>{' '}
                    programs for access and lifecycle decisions in Gulf markets.
                  </li>
                </ul>
              </section>

              <section aria-labelledby="related" className="rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
                <h2 id="related" className="text-xl font-display font-semibold text-foreground mb-4">
                  Related BioNixus capabilities
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/market-research"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                  >
                    Market research hub
                  </Link>
                  <Link
                    to="/services/market-access"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                  >
                    Market access services
                  </Link>
                  <Link
                    to="/bionixus-market-research-middle-east"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                  >
                    Middle East pharmaceutical research
                  </Link>
                  <Link
                    to="/case-studies"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                  >
                    Healthcare case studies
                  </Link>
                  <Link
                    to="/contact"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                  >
                    Contact BioNixus
                  </Link>
                </div>
              </section>

              <section aria-labelledby="rwe-faq">
                <h2 id="rwe-faq" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Real world evidence FAQs
                </h2>
                <div className="space-y-3">
                  {faqItems.map((item) => (
                    <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                      <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
}
