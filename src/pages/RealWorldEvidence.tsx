import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { RWE_COUNTRY_PAGES } from '@/data/countryKeywordPages';

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
                programs in Europe, the UK, and the Middle East.                 If your stakeholders need proof beyond the clinical trial, we build
                RWE that fits your geography, therapy area, and decision timeline—not a one-size-fits-all data product.
                Most programmes combine at least one quantitative wave with targeted qualitative depth so you can defend both
                the numbers and the “why” behind prescriber and payer behaviour.
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
                <WhyBioNixusIntro className="text-muted-foreground leading-relaxed mb-6" />
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

              <section aria-labelledby="rwe-protocol">
                <h2 id="rwe-protocol" className="text-2xl font-display font-semibold text-foreground mb-4">
                  How BioNixus designs a real world evidence protocol
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Strong RWE starts with a single decision—not a data shopping list. BioNixus typically works through four
                    linked steps: <strong className="text-foreground">decision framing</strong> (what must be true for your
                    launch, access, or medical narrative to move), <strong className="text-foreground">evidence mapping</strong>{' '}
                    (which gaps RCTs leave in your markets), <strong className="text-foreground">study design</strong> (mixed
                    methods, sample, geography, and feasibility), and <strong className="text-foreground">delivery packaging</strong>{' '}
                    (tables, narratives, and stakeholder-ready summaries). Each step is documented so medical, access, and
                    commercial teams can reuse the work without re-interpreting raw outputs.
                  </p>
                  <p>
                    For European and UK programmes, we align early with HTA-facing questions: unmet need in local practice,
                    comparator relevance, treatment sequences, and resource use that payers recognise. For GCC and wider MENA
                    work, we factor institutional pathways, referral patterns, and formulary or tender dynamics that syndicated
                    panels rarely capture at account level. That regional specificity is why many teams pair{' '}
                    <Link to="/bionixus-market-research-middle-east" className="text-primary underline">
                      Middle East pharmaceutical research
                    </Link>{' '}
                    with global lifecycle plans instead of treating MENA as a bolt-on wave.
                  </p>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      <strong className="text-foreground">Kickoff and success criteria:</strong> agree the decision owner,
                      markets, timelines, and what “good enough” evidence looks like for regulators, payers, or internal
                      governance.
                    </li>
                    <li>
                      <strong className="text-foreground">Protocol and instruments:</strong> surveys, discussion guides,
                      chart-review style structured interviews, or hybrid designs—each tied to analysable research questions.
                    </li>
                    <li>
                      <strong className="text-foreground">Field and quality:</strong> recruitment verification, attention
                      checks where appropriate, and documented handling of incomplete or sensitive responses.
                    </li>
                    <li>
                      <strong className="text-foreground">Analysis and narrative:</strong> transparent limitations, sensitivity
                      notes, and plain-language implications for access and medical stakeholders.
                    </li>
                  </ol>
                </div>
              </section>

              <section aria-labelledby="rwe-vs-syndicated" className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 id="rwe-vs-syndicated" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Primary RWE vs syndicated datasets: when each fits
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Syndicated real-world and sales datasets excel when you need longitudinal market sizing, class trends, or
                    benchmarked share in well-covered markets. They are weaker when your question is narrowly geographic (a
                    single GCC emirate), stakeholder-specific (a payer committee narrative), or therapy-specific in a way
                    standard extracts cannot segment. BioNixus does not ask you to abandon syndicated partners; we help you
                    decide where <strong className="text-foreground">primary RWE</strong> must fill gaps so your story holds in
                    committee rooms and affiliate boards.
                  </p>
                  <p>
                    Teams evaluating partners often compare large platforms with regional specialists. If your brief is
                    “explain practice change in Saudi oncology clinics after a new pathway,” primary field evidence usually
                    outperforms a generic extract. If your brief is “track oral anticoagulant class volume across Western
                    Europe,” syndicated data may be the right backbone—with targeted qual to explain switches. We state that
                    trade-off openly because credible RWE partners should not oversell a single data product.
                  </p>
                </div>
              </section>

              <section aria-labelledby="rwe-governance">
                <h2 id="rwe-governance" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Governance, privacy, and quality assurance
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Pharmaceutical RWE must withstand scrutiny from medical governance, legal review, and—where applicable—
                    data-protection officers. BioNixus programmes are scoped with clear roles for sponsor and field partner,
                    documented consent or participation models, and minimisation of identifiable information in deliverables.
                    EU and UK engagements are planned with GDPR-aware handling; Middle East work respects local institutional
                    requirements and culturally appropriate engagement norms.
                  </p>
                  <p>
                    Quality assurance is built into field operations: screeners aligned to specialty and setting, duplicate and
                    speed checks for quantitative waves, moderation guides and back-translation where Arabic or other local
                    languages are used, and audit trails for coding and tabulation. When chart-review style interviews are in
                    scope, we define what can and cannot be collected up front so clinicians can participate without ethical
                    ambiguity.
                  </p>
                  <p>
                    For teams comparing RWE vendors, ask for a sample methods appendix and a recent redacted deliverable
                    outline—not only a capabilities deck. The difference between usable RWE and shelf-ware is usually
                    traceability: can you explain who was interviewed, how they were qualified, and what you would do
                    differently if a regulator or payer challenges the conclusion?
                  </p>
                </div>
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

              <section aria-labelledby="rwe-deliverables">
                <h2 id="rwe-deliverables" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Typical RWE deliverables and timelines
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Deliverables are scoped to the decision, not to a fixed slide count. A payer-focused GCC programme might
                    emphasise treatment-pathway diagrams, tariff and formulary context, and payer-verbatim themes; a medical
                    affairs programme in the UK might emphasise practice-pattern statistics, KOL-aligned discussion guides,
                    and publication-ready methods text. BioNixus agrees deliverable formats at protocol stage so legal and
                    medical review cycles are predictable.
                  </p>
                  <p>
                    Indicative timelines after protocol approval: <strong className="text-foreground">2–4 weeks</strong> for
                    setup and ethics or institutional alignment where needed; <strong className="text-foreground">4–10 weeks</strong>{' '}
                    for field depending on specialty and geography; <strong className="text-foreground">2–4 weeks</strong> for
                    analysis, QC, and narrative packaging. Urgent programmes can run overlapping waves when feasibility allows—we
                    flag compression risks up front rather than promising impossible n sizes.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Executive summary with decision implications and explicit limitations</li>
                    <li>Methods appendix suitable for internal governance or external appendix use</li>
                    <li>Tabulations, coded qual themes, or integrated mixed-methods storyline</li>
                    <li>Optional workshop or readout with medical, access, and commercial stakeholders</li>
                  </ul>
                </div>
              </section>

              <section aria-labelledby="rwe-stakeholders" className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
                <h2 id="rwe-stakeholders" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Stakeholder maps we field for RWE
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real world evidence is only as credible as the respondents behind it. BioNixus recruits and interviews
                  stakeholders that match your market access and medical strategy—not generic “healthcare professionals.”
                  Examples by workstream:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-semibold text-foreground mb-2">Clinical practice</h3>
                    Hospital consultants, community specialists, nurses in pathway-critical roles, and—in GCC—physicians in
                    both public and private sectors where dual practice shapes uptake.
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-semibold text-foreground mb-2">Payers and access</h3>
                    HTA-informed payers in Europe, NHS commissioning and pharmacy leads in the UK, and Gulf formulary,
                    tender, and insurance medical directors where pricing and listing decisions are made.
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-semibold text-foreground mb-2">Patients and caregivers</h3>
                    Where ethics and design allow, patient experience and adherence insight—often paired with HCP interviews
                    to explain discordance between intent and practice.
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <h3 className="font-semibold text-foreground mb-2">Health system administrators</h3>
                    Hospital pharmacy, procurement, and clinical service leads who influence adoption even when they do not
                    write the prescription.
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Need a stakeholder map before committing budget? Request a{' '}
                  <Link to="/contact" className="text-primary underline">
                    short scoping call
                  </Link>{' '}
                  with a named principal researcher—we will outline feasible n, markets, and risks before you issue a formal RFP.
                  You will receive a one-page scope memo you can share internally without circulating a full vendor deck or lengthy capabilities library.
                </p>
              </section>

              <section aria-labelledby="rwe-by-country" className="rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
                <h2 id="rwe-by-country" className="text-xl font-display font-semibold text-foreground mb-4">
                  Real-world evidence by country
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Country spokes for practice-pattern and pathway RWE. Each page links back to this hub and to the matching{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research
                  </Link>{' '}
                  country programme.
                </p>
                <div className="flex flex-wrap gap-2">
                  {RWE_COUNTRY_PAGES.map((page) => (
                    <Link
                      key={page.slug}
                      to={`/${page.slug}`}
                      className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                    >
                      {page.countryName}
                    </Link>
                  ))}
                  <Link
                    to="/real-world-evidence-gcc"
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm text-primary hover:underline"
                  >
                    GCC regional RWE
                  </Link>
                </div>
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
