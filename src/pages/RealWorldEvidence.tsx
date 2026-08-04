import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
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

              <section aria-labelledby="use-cases">
                <h2 id="use-cases" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Where BioNixus RWE creates the most value
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    RWE is most useful when it is tied to a decision that is close enough to act on and specific enough to test. A
                    global evidence gap, a payer objection, or a launch assumption can all be valid starting points, but the study must
                    translate that question into observable practice: who treats, which patients move through which pathway, where
                    friction appears, and what evidence would change a stakeholder&apos;s next step.
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong className="text-foreground">Regulatory and safety dialogue:</strong> supporting post-approval commitments and
                      real-world effectiveness narratives with defensible methods.
                    </li>
                    <li>
                      <strong className="text-foreground">HTA and payer submissions:</strong> localized unmet need, comparator context, and
                      treatment-pathway evidence aligned with European and UK expectations, often connected to broader{' '}
                      <Link to="/services/market-access" className="text-primary underline">
                        market access services
                      </Link>{' '}
                      and HEOR planning.
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
                  <p>
                    For teams planning across Saudi Arabia, the UAE, and neighboring Gulf markets, BioNixus market analysis shows that
                    context matters as much as dataset size. Evidence must account for public-sector pathways, private-provider
                    influence, specialist concentration, tender and formulary dynamics, and the practical availability of experienced
                    respondents. That is why GCC RWE programs often benefit from paired{' '}
                    <Link to="/bionixus-market-research-middle-east" className="text-primary underline">
                      Middle East pharmaceutical market research
                    </Link>{' '}
                    and access strategy work rather than a data pull alone.
                  </p>
                </div>
              </section>

              <section aria-labelledby="decision-framework">
                <h2 id="decision-framework" className="text-2xl font-display font-semibold text-foreground mb-4">
                  A decision framework for real world evidence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The strongest RWE programs begin with a simple chain of reasoning: why the evidence matters, what the evidence says,
                  and what the organization should do next. BioNixus uses this sequence to keep RWE from becoming an unfocused data
                  exercise and to help medical, access, HEOR, and commercial teams agree on what success looks like before fieldwork
                  begins.
                </p>
                <div className="grid md:grid-cols-3 gap-5">
                  <section className="rounded-xl border border-border bg-card p-5" aria-labelledby="why-rwe-matters">
                    <h3 id="why-rwe-matters" className="font-semibold text-foreground mb-3">
                      1. Why RWE matters
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We define the stakeholder decision first: a payer challenge, an HTA evidence gap, a medical affairs narrative, a
                      lifecycle management question, or a launch sequencing risk. This step clarifies the population, geography,
                      comparator, and behavior that matter. It also distinguishes questions that require real-world data from questions
                      better answered through positioning, pricing, or conventional research.
                    </p>
                  </section>
                  <section className="rounded-xl border border-border bg-card p-5" aria-labelledby="what-evidence-says">
                    <h3 id="what-evidence-says" className="font-semibold text-foreground mb-3">
                      2. What the evidence says
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We then design the evidence stack: secondary RWD where it is fit for purpose, primary physician and payer insight
                      where the market is under-documented, and structured synthesis where the organization needs a defendable story.
                      The output explains the strength of each source, the limitations, and the level of confidence teams should place
                      on each conclusion.
                    </p>
                  </section>
                  <section className="rounded-xl border border-border bg-card p-5" aria-labelledby="what-to-do-next">
                    <h3 id="what-to-do-next" className="font-semibold text-foreground mb-3">
                      3. What to do next
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Finally, we translate findings into action: claims to prioritize, objections to prepare for, markets to sequence,
                      evidence gaps to close, and messages to pressure-test. This keeps RWE connected to decisions such as an advisory
                      board agenda, an HTA dossier section, payer discussion guide, publication outline, or regional launch workshop.
                    </p>
                  </section>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  This framework is intentionally practical. It gives cross-functional teams a common vocabulary for deciding whether
                  they need more evidence, a clearer narrative, a local-market validation step, or a change in launch sequencing. It also
                  prevents RWE from being treated as a retrospective justification exercise after a strategy has already been set.
                </p>
              </section>

              <section aria-labelledby="methodology">
                <h2 id="methodology" className="text-2xl font-display font-semibold text-foreground mb-4">
                  RWE methodology: mixed methods, real-world data, and governance
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    BioNixus designs RWE around the evidence standard required for the decision. Some questions call for structured
                    quantitative work across prescribers, payers, or treatment centers. Others need qualitative depth to understand why
                    practice diverges from guidelines, how clinicians interpret endpoint relevance, or where patient-flow assumptions
                    break down. Many high-value programs combine both, using qualitative work to refine hypotheses and quantitative
                    evidence to estimate the scale and consistency of what was heard.
                  </p>
                  <p>
                    We distinguish primary real-world insight from secondary RWD at the protocol stage. Primary evidence may include
                    expert interviews, payer depth, structured clinician surveys, chart-review style discussion where appropriate, or
                    pathway mapping with specialists. Secondary sources may include published literature, registries, claims or EMR
                    extracts where available, treatment guidelines, formulary materials, and public access documents. The purpose is not
                    to force every source into one model; it is to choose the evidence that can credibly answer the question.
                  </p>
                  <p>
                    The methodology also considers how evidence will be used after delivery. HTA and payer teams often need language that
                    can sit beside clinical and economic evidence, while medical affairs may need a clearer explanation of why practice
                    differs between centers or why physicians hesitate to change therapy. Regional launch teams may need to understand
                    which assumptions are transferable from Europe to the Gulf and which require local validation. Defining those use
                    contexts early helps us choose the right mix of sample, source, and analysis rather than over-building a study that is
                    larger than the decision requires.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Mixed-method design</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A typical program may begin with depth interviews to expose access friction, move into a targeted survey to size
                      pathway behavior, and finish with synthesis that connects field evidence to published outcomes, guidelines, and
                      economic assumptions. This is especially useful when treatment choices are sensitive to specialty, line of therapy,
                      institutional protocol, or reimbursement status.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Primary versus secondary RWD</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Secondary datasets can be powerful, but they are not equally mature across every therapy area or region. Where
                      secondary data is incomplete, BioNixus uses primary evidence to document decision pathways, clinical rationale,
                      and payer expectations. Where secondary sources are strong, we use primary research to interpret the behavior
                      behind the numbers and identify implications for strategy.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">GCC and EMEA considerations</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      In Europe and the UK, RWE often needs to speak to HTA standards, comparator selection, pathway sequencing, and
                      local payer evidence expectations. In GCC markets, BioNixus market analysis points to a different set of practical
                      considerations: institutional access, public and private channel differences, specialist availability, multilingual
                      engagement, and the need to align evidence with local launch and formulary realities.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Quality and governance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every program includes documented objectives, source rationale, respondent criteria, assumptions, and limitations.
                      We build quality checks into recruitment, discussion guides, survey logic, translation workflows where needed, and
                      analysis tables. The result is evidence that can be reviewed by medical, access, legal, and compliance stakeholders
                      without losing the practical urgency of the business question.
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="process-timeline">
                <h2 id="process-timeline" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Process and timeline from brief to evidence package
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Timelines vary by specialty, geography, respondent access, translation needs, and whether institutional approvals are
                  required. Rather than promising fabricated exact dates, BioNixus scopes RWE in phased ranges so teams can plan around
                  launch, access, publication, or governance milestones with realistic expectations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We also identify decision checkpoints before fieldwork starts. Some teams need an early readout to support a global
                  evidence-planning meeting; others need a fuller package before local payer conversations or medical congress planning.
                  Building those checkpoints into the timeline allows evidence to inform live strategy while preserving the quality
                  controls needed for a credible final package.
                </p>
                <ol className="space-y-4 text-muted-foreground leading-relaxed">
                  <li className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Brief and decision alignment: usually 1-2 weeks</h3>
                    We confirm the decision to be supported, the priority markets, the stakeholder audience, existing evidence assets,
                    and what the final output must enable. This phase often includes a short gap map, a source feasibility check, and a
                    recommendation on whether the program should be qualitative, quantitative, mixed-method, or linked to HEOR.
                  </li>
                  <li className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Protocol and materials: usually 2-4 weeks</h3>
                    BioNixus prepares a protocol memo, research instruments, sampling approach, analysis framework, and quality plan. If
                    the work will support HTA or payer discussions, we align definitions, populations, comparators, and endpoint language
                    with the access narrative early, reducing rework after fieldwork.
                  </li>
                  <li className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Field setup and evidence generation: commonly 3-8 weeks</h3>
                    Fieldwork duration depends on respondent seniority, therapy area complexity, and market access. Specialist and payer
                    recruitment in rare disease, oncology, or Gulf institutional settings may require longer windows. We provide
                    transparent progress updates so teams know whether the sample remains feasible or should be adjusted.
                  </li>
                  <li className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Analysis and triangulation: commonly 2-4 weeks</h3>
                    We analyze findings against the original decision framework, compare primary evidence with available secondary
                    sources, identify market-specific differences, and separate robust conclusions from directional hypotheses. This is
                    where RWE becomes decision-ready rather than a collection of transcripts, tables, or isolated observations.
                  </li>
                  <li className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Packaging and stakeholder workshop: commonly 1-3 weeks</h3>
                    Final outputs are shaped for the audience: medical affairs, market access, HEOR, commercial leadership, or regional
                    launch teams. We often close with a workshop that converts evidence into claims, evidence gaps, payer actions,
                    publication implications, and next-step research priorities.
                  </li>
                </ol>
              </section>

              <section aria-labelledby="deliverables">
                <h2 id="deliverables" className="text-2xl font-display font-semibold text-foreground mb-4">
                  Deliverables built for internal decisions and external evidence use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  BioNixus deliverables are designed to travel across functions. A medical team may need a clear evidence narrative for
                  field teams, while access colleagues need assumptions that can feed payer engagement or budget-impact discussions. We
                  package each program so the method, finding, implication, and recommended action remain connected.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The level of detail is calibrated to the audience. Senior leadership may need a concise evidence story and a decision
                  memo, while technical stakeholders may need appendices showing source logic, field definitions, respondent mix, and
                  evidence confidence. When a program is intended to support external-facing activity, we separate what can be stated
                  confidently from what should remain an internal hypothesis, helping teams use RWE responsibly in payer, medical, and
                  regional launch settings.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Protocol memo</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Objectives, research questions, source rationale, market scope, inclusion criteria, field approach, analysis plan,
                      governance checks, and known limitations before evidence generation begins.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Analysis tables and evidence maps</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Structured outputs that show treatment pathways, stakeholder responses, source comparisons, confidence levels, and
                      country or segment differences without hiding the assumptions behind each conclusion.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">HTA-ready narrative</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Evidence summaries written to support unmet need, comparator context, pathway burden, subgroup rationale, and payer
                      objections when combined with clinical and economic materials.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Workshop readout</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A facilitated session for medical, access, HEOR, and commercial teams that converts findings into claims, evidence
                      gaps, message tests, local-market actions, and next-stage research choices.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Payer and medical affairs materials</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Briefing slides, objection maps, field-medical narrative inputs, advisory board stimuli, and evidence summaries
                      tailored to the audience that will use the RWE.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">Next-step evidence roadmap</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A practical plan for follow-on studies, publication opportunities, local validation, evidence-generation
                      sequencing, or links to broader{' '}
                      <Link to="/healthcare-market-research" className="text-primary underline">
                        healthcare market research
                      </Link>{' '}
                      programs.
                    </p>
                  </div>
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
