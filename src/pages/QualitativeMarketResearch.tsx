import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const faqItems = [
  {
    question: 'When should pharmaceutical teams use qualitative research instead of quantitative?',
    answer:
      'Qualitative methods are most valuable when you need to understand the why behind decisions — not just measure the what. Use qualitative research at early-stage hypothesis generation (before building a survey), when quantitative data reveals an anomaly you cannot explain (e.g., unexpectedly low prescribing intent), when designing messaging or positioning before exposure testing, when exploring stakeholder archetypes and unmet needs ahead of a launch, and when evaluating payer objection logic or access barriers in a new market. In GCC and Middle East markets specifically, qualitative methods are often essential because institutional and cultural context heavily shapes treatment decisions, and that context rarely surfaces in closed-ended surveys.',
  },
  {
    question: 'What is the typical cost and timeline for a qualitative study in the GCC?',
    answer:
      'A standard qualitative programme with 8–12 in-depth interviews (IDIs) across two to three GCC markets typically costs between $18,000 and $40,000 and takes 5–8 weeks from briefing to final report. Advisory boards (6–10 specialist KOLs) range from $20,000 to $45,000. Multi-country programmes across all six GCC markets with 15–20 IDIs run from $40,000 to $80,000 depending on specialty incidence and language complexity. Ethnographic or observational studies add 2–4 weeks and cost $10,000–$25,000 more than a standard IDI programme. Timelines are affected by specialist incidence, Ramadan scheduling, and the need for Arabic-language or bilingual moderation.',
  },
  {
    question: 'How does BioNixus handle Arabic-language qualitative research?',
    answer:
      'BioNixus employs bilingual moderators (Arabic/English) who are trained in clinical and commercial pharma research contexts. Discussion guides are developed in English, professionally translated and back-translated into Arabic (Gulf dialect or Egyptian Arabic depending on the country), and reviewed by the client team before fieldwork. Interviews are conducted in the respondent\'s preferred language. Transcripts are prepared in English with verbatim Arabic excerpts preserved for key insights. All translated instruments go through a three-stage review: translation → independent back-translation → reconciliation. This ensures that pharma-specific terminology (e.g., formulary listing, reimbursement dossier, pharmacovigilance) is rendered accurately and respondents are not confused by Western clinical jargon.',
  },
  {
    question: 'What quality controls does BioNixus apply to qualitative fieldwork?',
    answer:
      'BioNixus applies a five-layer quality protocol for qualitative studies: (1) Participant verification — all HCP respondents are verified against SCFHS (Saudi Arabia), DHA/DOH (UAE), or equivalent national registers before scheduling. (2) Moderator calibration — moderators conduct a pilot interview (not included in analysis) to align on probing depth and discussion guide pacing. (3) Client observation — clients can observe live IDIs via secure video link or receive recordings for review; NDA-governed. (4) Verbatim transcription — all interviews are transcribed verbatim (with Arabic sections translated) and cross-checked for accuracy by a second analyst. (5) Member checking — for advisory boards and expert panels, preliminary findings are shared with participants to validate interpretation accuracy. This protocol ensures that strategic recommendations are grounded in what respondents actually said, not analyst paraphrase.',
  },
  {
    question: 'Can qualitative research support a regulatory dossier or HTA submission?',
    answer:
      'Yes, with appropriate design. Qualitative evidence is increasingly accepted in payer and HTA contexts as supporting material for unmet need characterisation and patient experience documentation. For SFDA submissions in Saudi Arabia or DHA formulary applications in Dubai, qualitative patient journey data can substantiate the burden-of-disease narrative in a value dossier. For NICE or G-BA processes in Europe, patient preference interviews and carer insight studies can directly support the benefit assessment. BioNixus designs these studies with documentation standards in mind: signed consent forms, IRB/ethics committee approval documentation (where required), verifiable participant lists, and structured analysis frameworks that map to the evidence requirements of the relevant payer or regulator.',
  },
  {
    question: 'What deliverables can I expect from a BioNixus qualitative programme?',
    answer:
      'Standard deliverables include: (1) Discussion guide — approved before fieldwork begins. (2) Recruitment screener and participant profile summary. (3) Verbatim transcripts for all interviews (English, with Arabic verbatims preserved). (4) Analysis framework — codebook or thematic matrix mapping to study objectives. (5) Topline report (7–10 days post-fieldwork) — key themes, priority findings, and immediate implications. (6) Full strategic report (3–4 weeks post-fieldwork) — deep-dive findings with direct quotations, decision-journey maps, stakeholder archetypes, barrier/facilitator analysis, and prioritised recommendations. (7) Presentation deck ready for internal stakeholder briefing. For advisory board programmes, add: advisory board charter, discussion agenda, and a consensus summary document capturing participant recommendations by strategic question.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Qualitative Market Research for Healthcare and Pharma',
    serviceType: 'Qualitative pharmaceutical and healthcare market research',
    description:
      'In-depth qualitative research for pharmaceutical companies in GCC, Middle East, UK, and Europe — IDIs, focus groups, advisory boards, KOL mapping, and ethnographic studies.',
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    areaServed: [
      'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman',
      'Egypt', 'Jordan', 'Lebanon', 'United Kingdom', 'Europe',
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceRange: '$18,000–$80,000',
    },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Qualitative Market Research', href: '/qualitative-market-research' },
  ]),
  buildFAQSchema(faqItems),
];

export default function QualitativeMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Qualitative Market Research for Healthcare and Pharma | BioNixus</title>
        <meta
          name="description"
          content="Expert qualitative pharmaceutical market research across GCC and Middle East: IDIs, advisory boards, KOL interviews, focus groups. Arabic-language moderation, ISO 20252 quality standards."
        />
        <link rel="canonical" href="https://www.bionixus.com/qualitative-market-research" />
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Qualitative Market Research', href: '/qualitative-market-research' },
          ]}
        />

        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Qualitative Market Research for Pharmaceutical Strategy
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-3xl">
              Qualitative research reveals the decisions behind the data. BioNixus helps pharmaceutical, biotech, and
              medical device companies understand the motivations, barriers, and context that drive clinical adoption,
              prescribing behaviour, and market access outcomes across GCC, Middle East, UK, and European markets.
            </p>
          </div>
        </section>

        {/* Executive summary */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Why qualitative methodology matters in pharmaceutical research
            </h2>
            <p>
              In complex healthcare markets, strategic failure often stems from misunderstanding stakeholder logic rather
              than lacking data volume. A physician survey may show only 30% prescribing intent for a new product, but
              a quantitative instrument alone cannot tell you whether that gap is driven by clinical uncertainty, formulary
              access barriers, detailing frequency, inertia from an established competitor, or a perception about safety
              signals. Qualitative methods provide the explanatory layer that turns data points into actionable strategy.
            </p>
            <p>
              This is particularly important in GCC and Middle East markets, where healthcare systems are evolving rapidly
              under government transformation programmes such as Saudi Vision 2030 and UAE Centennial 2071. Treatment
              pathways, HCP decision authority, institutional procurement dynamics, and patient-physician communication
              norms differ significantly from Western European or North American benchmarks. Standard research instruments
              developed elsewhere frequently miss context that only structured qualitative exploration can uncover.
            </p>
            <p>
              BioNixus runs qualitative programmes across six GCC markets, Egypt, Jordan, Lebanon, the UK, and continental
              Europe. Our methodology follows ISO 20252 research quality standards, and our field operations are staffed
              with bilingual (Arabic/English) moderators trained in pharmaceutical, clinical, and commercial research
              contexts.
            </p>
          </div>
        </section>

        {/* Methods */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Core qualitative methods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">In-depth interviews (IDIs)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  One-to-one structured conversations, 45–75 minutes, with HCPs, payers, patients, or caregivers. IDIs
                  are the primary method for exploring individual decision logic, personal experience, and clinical
                  reasoning without social desirability bias. BioNixus conducts IDIs by telephone, video (Teams/Zoom),
                  or face-to-face at clinical settings across GCC. Specialist IDIs for oncologists, cardiologists, or
                  diabetologists typically achieve higher quality data than focus groups because respondents can engage
                  in depth without deferring to dominant peers.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Focus groups and mini-groups</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Group discussions of 4–8 participants, useful for testing messaging, exploring shared perceptions, and
                  observing social dynamics in treatment decision-making. Mini-groups (4–5 participants) are preferred in
                  GCC for specialist audiences where full groups of 8 are difficult to schedule. Focus groups are
                  particularly effective for patient-facing research, where shared experience among individuals with the
                  same condition generates richer narrative. Arabic-language groups are facilitated by native moderators;
                  mixed groups (e.g., GCC HCPs with varied national backgrounds) may use bilingual facilitation.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Advisory boards and expert panels</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structured multi-stakeholder forums with 6–12 KOLs, treating specialists, or institutional
                  decision-makers. Advisory boards combine qualitative insight generation with knowledge transfer, making
                  them valuable for pre-launch clinical opinion profiling, formulary strategy testing, and medical
                  education programme design. BioNixus recruits GCC advisory board members from its pre-verified panel
                  of 8,000+ HCPs and can seat boards within 4–6 weeks for most specialties. A typical advisory board
                  programme includes participant briefing materials, a structured discussion agenda aligned to strategic
                  questions, and a consensus summary output.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">KOL mapping and landscape interviews</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Systematic identification, profiling, and qualitative engagement of Key Opinion Leaders across a
                  therapeutic area and geography. BioNixus KOL mapping programmes combine desk research (publication
                  analysis, conference presence, institutional affiliation) with semi-structured interview validation to
                  produce tiered influence maps. These are used by medical affairs teams to prioritise engagement, plan
                  medical congress presence, and design KOL advisory structures. KSA oncology, cardiology, and diabetes
                  are our most common mapping engagements in GCC.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Ethnographic and workflow observation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real-world observation of clinical workflow, patient consultations (with appropriate consent and IRB
                  approval), or pharmacy dispensing environments. Ethnographic methods reveal implementation bottlenecks,
                  guideline-to-practice gaps, and patient-interaction dynamics that respondents rarely articulate in
                  interview settings because they have normalised those behaviours. This method is particularly powerful
                  for adherence research, nurse-led care pathways, and specialty infusion centre workflows in UAE and
                  Saudi Arabia.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-3 text-lg">Dyadic and caregiver interviews</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Paired interviews between a patient and their primary caregiver, used in therapy areas where family
                  involvement in care decisions is high — which includes most GCC disease management contexts. Dyadic
                  interviews reveal alignment or conflict between patient and caregiver priorities, caregiver-led
                  treatment decision dynamics, and the practical burden of disease management within family units. These
                  are common in paediatric oncology, diabetes management, rare disease, and neurodegenerative conditions
                  across Saudi Arabia, Kuwait, and the UAE.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Analysis frameworks */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Qualitative analysis frameworks we apply
            </h2>
            <p>
              Raw qualitative data has no intrinsic value unless it is synthesised into patterns that answer strategic
              questions. BioNixus uses a set of structured analysis frameworks, selected based on study design and
              client objectives, to transform interview transcripts into decision-ready output:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Thematic coding:</strong> All transcripts are coded against a
                predetermined codebook developed from the discussion guide. Emerging codes are added inductively.
                Frequency and emphasis weighting helps prioritise themes for the report narrative.
              </li>
              <li>
                <strong className="text-foreground">Barrier/facilitator matrix:</strong> Findings are mapped into a
                structured grid of what promotes vs. impedes the target behaviour (prescribing, adherence, formulary
                listing, or protocol adoption), categorised by stakeholder type and theme.
              </li>
              <li>
                <strong className="text-foreground">Decision-journey mapping:</strong> Stakeholder decision steps are
                sequenced chronologically, with friction points, information sources, and influencer nodes marked at each
                stage. Particularly useful for physician treatment-initiation studies and payer dossier evaluation
                research.
              </li>
              <li>
                <strong className="text-foreground">Archetype construction:</strong> Respondents are clustered into
                attitudinal or behavioural archetypes based on coded data patterns. Archetypes are used to guide
                segmented messaging, sales force deployment, and medical education prioritisation.
              </li>
              <li>
                <strong className="text-foreground">Narrative analysis:</strong> For patient experience and adherence
                studies, the lived experience narrative is tracked across the disease timeline — diagnosis, treatment
                initiation, ongoing management, and transition events — to identify moments of maximum intervention
                opportunity.
              </li>
            </ul>
            <p>
              All analysis is conducted in English regardless of the fieldwork language, ensuring consistent analytical
              rigour across multi-country studies. Arabic verbatims are preserved in the report appendix with English
              translation to support client review and regulatory documentation purposes.
            </p>
          </div>
        </section>

        {/* GCC-specific considerations */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              GCC-specific qualitative research considerations
            </h2>
            <p>
              Pharmaceutical qualitative research in GCC markets requires adaptation that goes beyond language translation.
              Several structural and cultural factors shape how respondents engage, what they will discuss candidly, and
              how findings should be interpreted:
            </p>
            <h3 className="text-xl font-semibold text-foreground">Gender-segregated fieldwork in Saudi Arabia</h3>
            <p>
              Saudi hospitals operate gender-segregated clinical environments. Female HCPs are a growing workforce segment
              — by 2025, approximately 30% of SCFHS-registered physicians in Saudi Arabia are women, with higher
              representation in paediatrics, obstetrics, and endocrinology. BioNixus field teams include female
              Arabic-speaking moderators for studies requiring female respondent engagement. Mixed-gender groups are
              not conducted in-person in KSA; gender-separate online groups or individual IDIs are the standard approach.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Ramadan scheduling and response dynamics</h3>
            <p>
              Fieldwork scheduling during Ramadan typically reduces availability of HCP respondents by 30–40% as clinical
              workloads compress and interpersonal communication patterns shift. BioNixus advises clients on Ramadan
              timing at briefing stage and builds scheduling flexibility into project timelines. Where fieldwork spans
              Ramadan, quota targets are adjusted with client agreement to prevent quality degradation from rushed
              respondent selection.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Institutional vs. private sector stratification</h3>
            <p>
              GCC healthcare operates across public (Ministry of Health, military, quasi-government) and private sector
              streams with distinct formulary access, procurement, and prescribing authority structures. A cardiologist
              at a MOH hospital in Riyadh operates under different prescribing constraints than a counterpart at a private
              hospital with direct physician-led formulary access. Qualitative sampling must stratify by sector to capture
              the full decision landscape — otherwise findings skew toward either the government or private experience
              and misrepresent the market.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Expatriate HCP workforce dynamics in UAE</h3>
            <p>
              Approximately 70% of UAE physicians are expatriates (Indian, Egyptian, Jordanian, Western). This creates
              a multilingual workforce with varying clinical training backgrounds, prescribing habits shaped by home-market
              experience, and language preferences for clinical documentation. UAE qualitative studies frequently require
              English-language facilitation for the expatriate physician segment alongside Arabic for national and Gulf
              HCPs — or bilingual facilitation of a single mixed-language group. BioNixus field operations are
              structured to accommodate this complexity at no additional coordination cost.
            </p>
          </div>
        </section>

        {/* Therapy areas */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Therapy area expertise in qualitative research
            </h2>
            <p>
              BioNixus has conducted qualitative programmes across a wide range of therapy areas in GCC and Middle East
              markets. Depth of prior research means faster discussion guide development, better moderator calibration,
              and more relevant contextualisation of findings for pharmaceutical strategy teams:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                { area: 'Oncology', detail: 'KSA KFSH&RC/NCCC network, UAE Tawam Hospital, MENA HAA guidelines' },
                { area: 'Diabetes & Metabolic', detail: 'GLP-1 adoption, Ramadan fasting research design, 33% KSA prevalence context' },
                { area: 'Cardiovascular', detail: 'Formulary access KSA/UAE, HCP switching barriers, statin optimisation' },
                { area: 'Respiratory', detail: 'Inhaler technique gap research, GINA/GOLD adherence, biologic access KSA/UAE' },
                { area: 'Rare Diseases', detail: 'Low-incidence recruitment, caregiver research, patient registry access' },
                { area: 'Biosimilars', detail: 'Physician switching intention, pharmacist substitution attitudes, patient perception' },
                { area: 'Neurology', detail: 'MS payer access UAE/KSA, epilepsy AED pathway, migraine specialist dynamics' },
                { area: 'Infectious Disease', detail: 'Antimicrobial stewardship, hepatitis C elimination programmes (Egypt)' },
                { area: 'Ophthalmology', detail: 'Intravitreal injection centre research, Dubai Eye Hospital, KSA cornea programmes' },
              ].map(({ area, detail }) => (
                <div key={area} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-semibold text-foreground text-sm">{area}</p>
                  <p className="text-xs text-muted-foreground mt-1">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof metrics */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6 text-center">
              Qualitative research at scale
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-4xl font-display font-bold text-primary mb-2">8,000+</p>
                <p className="text-sm text-muted-foreground">Pre-verified HCPs in GCC qualitative panel</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-4xl font-display font-bold text-primary mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Middle East &amp; North Africa markets covered</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-4xl font-display font-bold text-primary mb-2">5–8 wks</p>
                <p className="text-sm text-muted-foreground">Typical IDI programme delivery (briefing to report)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualitative vs quantitative */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Qualitative vs. quantitative: strategic design principles
            </h2>
            <p>
              Most high-stakes pharmaceutical research programmes benefit from a mixed-methods design where qualitative
              and quantitative phases are sequenced to maximise the strategic yield of each:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Qual before quant (exploratory):</strong> Run IDIs or a focus group
                to identify the decision criteria, terminology, and behavioural archetypes before building a quantitative
                survey. This prevents surveys from testing the wrong hypotheses or using language that respondents do not
                recognise.
              </li>
              <li>
                <strong className="text-foreground">Quant before qual (explanatory):</strong> Run a large-n survey to
                identify statistical patterns — e.g., a 40-percentage-point gap in prescribing intent between early
                adopters and mainstream physicians — and then run IDIs to diagnose the root causes driving that gap.
              </li>
              <li>
                <strong className="text-foreground">Parallel qual + quant:</strong> Run simultaneously when time is
                constrained and the programme design allows independent inquiry tracks. Results are integrated at the
                reporting stage.
              </li>
            </ul>
            <p>
              If you are deciding between a standalone qualitative programme and a broader mixed-methods approach, our{' '}
              <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                quantitative healthcare market research
              </Link>{' '}
              page explains the quant methodology stack in detail. For integrated market access intelligence, see our{' '}
              <Link to="/gcc-market-access-guide" className="text-primary underline">
                GCC market access guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Related services */}
        <section className="py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Related services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Patient journey research GCC', to: '/patient-journey-research-gcc' },
                { label: 'HCP recruitment GCC', to: '/gcc-hcp-recruitment-market-research' },
                { label: 'Healthcare fieldwork GCC', to: '/healthcare-fieldwork-gcc' },
                { label: 'KOL mapping Saudi Arabia', to: '/kol-mapping-saudi-arabia-oncology' },
                { label: 'Brand tracking pharma GCC', to: '/brand-tracking-pharma-gcc' },
                { label: 'Patient adherence research Middle East', to: '/patient-adherence-research-middle-east' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-display font-semibold">
              Start your qualitative research programme
            </h2>
            <p className="text-primary-foreground/90">
              Tell us your strategic question and target respondent. We'll propose a qualitative design, timeline, and
              cost range within 48 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Request a qualitative research proposal
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
