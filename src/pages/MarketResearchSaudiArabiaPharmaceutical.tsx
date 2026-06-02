import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const faqItems = [
  {
    question: 'What regulations govern pharmaceutical market research in Saudi Arabia?',
    answer:
      'Non-interventional pharmaceutical research in Saudi Arabia is governed by the Saudi Food and Drug Authority (SFDA) guideline NG-REG-005, which covers observational studies, patient registries, and post-marketing surveillance. Studies involving data collection from human subjects also require ethics committee (EC) approval from the Saudi Health Council (SHC) or an institutional review board affiliated with the relevant Ministry of Health (MOH) or quasi-government institution (e.g., King Faisal Specialist Hospital & Research Centre — KFSH&RC, King Abdulaziz Medical City). SCFHS (Saudi Commission for Health Specialties) registration is required for all practising licensed physicians in KSA, making licence verification straightforward for research recruitment. Qualitative and quantitative surveys with HCPs that do not collect patient-level data and are conducted through consent-based research panels generally do not require SFDA or SHC approval, but BioNixus confirms the regulatory pathway for each study at briefing stage.',
  },
  {
    question: 'How do you recruit physicians for pharmaceutical research in Saudi Arabia?',
    answer:
      'BioNixus recruits Saudi Arabia HCPs through its pre-verified panel of 8,000+ GCC healthcare professionals, supplemented by on-demand recruitment for specialist audiences. Recruitment uses a three-stage process: (1) Licence verification — all KSA physicians are confirmed against the SCFHS online registry before scheduling. (2) Specialty and institutional screener — a structured screener confirms clinical role, specialty, hospital sector (MOH, military, quasi-government, private), and primary city of practice. (3) Quota management — city, specialty, and sector quotas are locked in the project management system before fieldwork begins. For rare specialist audiences (e.g., oncologists, haematologists, rheumatologists), BioNixus supplements panel recruitment with targeted outreach via medical congress contacts (ASMO, ASMOG, Saudi Society for Blood and Marrow Transplantation) and institutional channels to achieve n targets within the project timeline.',
  },
  {
    question: 'How does Vision 2030 affect pharmaceutical market research strategy in Saudi Arabia?',
    answer:
      'Saudi Vision 2030 is transforming the healthcare research landscape in several ways that directly affect pharmaceutical market research strategy. First, privatisation: the Saudi government is transferring management of 250+ MOH hospitals to the private sector by 2030. This shifts prescribing and formulary authority from centralised MOH procurement to facility-level P&T committees — increasing the number of access decision points and requiring pharma companies to develop institution-level engagement strategies alongside NUPCO (National Unified Procurement Company) tender relationships. Second, mandatory insurance expansion: Vision 2030 targets universal health coverage, expanding mandatory insurance from the current public sector to a broader population. This will grow the Saudi private payer market and increase the importance of value evidence and cost-effectiveness data. Third, digital health acceleration: the Saudi Data and AI Authority (SDAIA) and the National Health Information Centre are building a national health data infrastructure, creating future opportunities for real-world evidence generation from EHR data. BioNixus helps pharma companies understand these structural shifts through market access research, payer attitude studies, and institutional engagement mapping.',
  },
  {
    question: "What is NUPCO's role and how does it affect market research needs?",
    answer:
      "NUPCO (National Unified Procurement Company) is Saudi Arabia's government entity responsible for centralised pharmaceutical procurement for the MOH hospital system — approximately 260 hospitals and 2,500 primary health care centres. NUPCO controls the government formulary, negotiates national contracts with pharmaceutical manufacturers, and determines which drugs are stocked in the MOH supply chain. For any pharmaceutical company targeting the government sector — which represents approximately 70% of Saudi drug consumption — understanding NUPCO's formulary decision criteria, therapeutic committee priorities, and evidence requirements is essential. BioNixus conducts payer research targeting NUPCO procurement officials (where accessible), MOH therapeutic committee members, and formulary committee advisors to help pharma clients develop evidence packages aligned to NUPCO listing standards. NUPCO's shift toward value-based procurement under Vision 2030 is increasing demand for health economic evidence and real-world data in the dossier development process.",
  },
  {
    question: 'What are the costs and timelines for pharmaceutical market research in Saudi Arabia?',
    answer:
      'Cost and timeline depend primarily on methodology and respondent scarcity. A quantitative online survey with 75 verified KSA physicians (one specialty) costs approximately $20,000–$40,000 USD and takes 5–8 weeks. A KOL interview series (12–15 specialists across Riyadh, Jeddah, and Eastern Province) costs $25,000–$50,000 USD and takes 5–7 weeks. An advisory board with 8–10 KSA specialists costs $18,000–$35,000 USD and can be deployed in 4–6 weeks. Multi-country GCC programmes with KSA as the primary market start at $60,000 USD for a two-country quant study. Patient chart review studies requiring institutional access and IRB approval typically take 10–16 weeks and cost $30,000–$60,000 USD. Brand tracking programmes (2 waves) run $70,000–$150,000 USD. Ramadan and national holiday scheduling can extend timelines by 2–4 weeks if fieldwork overlaps — BioNixus builds scheduling risk mitigation into all KSA project plans.',
  },
  {
    question: 'How does BioNixus handle Arabic-language pharmaceutical research in Saudi Arabia?',
    answer:
      'BioNixus conducts all Saudi Arabia fieldwork with Arabic-first instruments by default for HCP and patient audiences. Discussion guides, screeners, and questionnaires are written in English, professionally translated into Gulf Arabic (Najdi dialect for Riyadh and central regions; Hejazi for Jeddah and western regions where appropriate), and back-translated by an independent translator. Discrepancies are reviewed by a bilingual research lead before finalisation. Moderators for qualitative studies are Saudi or Gulf-national Arabic speakers with clinical research training, not general translators. For studies targeting expatriate HCPs in Saudi Arabia (approximately 30–40% of KSA physicians are expatriates, predominantly from Arab countries and Southeast Asia), bilingual facilitation options are available. All reports are delivered in English to support global pharma team workflows, with Arabic verbatims quoted directly in analysis sections to preserve nuance.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pharmaceutical Market Research Saudi Arabia',
    serviceType: 'Pharmaceutical and healthcare market research in Saudi Arabia',
    description:
      'Primary pharma market research in Saudi Arabia: HCP surveys, KOL interviews, advisory boards, NUPCO payer research, and brand tracking. SCFHS-verified panels, bilingual Arabic/English.',
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', priceRange: '$18,000–$150,000' },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Pharmaceutical Market Research Saudi Arabia', href: '/market-research-saudi-arabia-pharmaceutical' },
  ]),
  buildFAQSchema(faqItems),
];

export default function MarketResearchSaudiArabiaPharmaceutical() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Market Research Saudi Arabia | Pharma Research Company KSA — BioNixus</title>
        <meta
          name="description"
          content="Expert pharmaceutical market research in Saudi Arabia: SCFHS-verified HCP surveys, KOL interviews, NUPCO payer research, advisory boards, brand tracking. Arabic/English bilingual field operations."
        />
        <link rel="canonical" href="https://www.bionixus.com/market-research-saudi-arabia-pharmaceutical" />
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
            { name: 'Pharmaceutical Market Research Saudi Arabia', href: '/market-research-saudi-arabia-pharmaceutical' },
          ]}
        />

        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Pharmaceutical Market Research in Saudi Arabia
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-3xl">
              Evidence-backed pharma research across the GCC's largest market. BioNixus helps commercial, medical, and
              market access teams navigate SFDA regulation, NUPCO procurement, Vision 2030 healthcare transformation,
              and Saudi Arabia's evolving prescribing landscape — from Riyadh to Jeddah to the Eastern Province.
            </p>
          </div>
        </section>

        {/* Market overview */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Saudi Arabia pharmaceutical market overview
            </h2>
            <p>
              Saudi Arabia is the GCC's largest pharmaceutical market, valued at approximately $8.5 billion in 2024
              (BMI/Fitch Research) and projected to reach $12 billion by 2030 at a compound annual growth rate of
              approximately 6%. The market is split roughly 70/30 between the government sector (MOH hospitals,
              military medical services, National Guard Health Affairs, quasi-government institutions including KFSH&RC
              and King Fahad Medical City) and the private sector (private hospitals, polyclinics, retail pharmacy).
            </p>
            <p>
              This government/private split is critical for pharmaceutical market research design. Government sector
              access is mediated by NUPCO (National Unified Procurement Company), which operates centralised tendering
              for the MOH supply chain. A drug not on the NUPCO formulary cannot be dispensed in the 260+ MOH hospitals
              and 2,500+ primary health care centres that serve the majority of Saudi nationals. Private sector access
              is more fragmented — each hospital network has its own P&amp;T committee and formulary process — but
              price premiums are achievable in private settings that NUPCO tenders do not allow.
            </p>
            <p>
              Saudi Arabia's population of approximately 36 million (GASTAT 2024) supports a large HCP workforce, with
              over 80,000 licensed physicians registered with SCFHS (Saudi Commission for Health Specialties). The
              physician workforce is approximately 30–40% Saudi national and 60–70% expatriate, drawn primarily from
              Arab countries (Egypt, Jordan, Syria, Sudan), Pakistan, India, and Western countries. This diversity
              requires research designs that account for both Gulf Arabic and international clinical training contexts.
            </p>
          </div>
        </section>

        {/* Key market drivers */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Therapy areas and disease burden in Saudi Arabia
            </h2>
            <p>
              Saudi Arabia's disease profile creates concentrated pharmaceutical market opportunities in specific
              therapy areas that BioNixus has researched extensively:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mt-2">
              {[
                {
                  area: 'Diabetes and metabolic disease',
                  detail:
                    'Saudi Arabia has one of the world\'s highest diabetes prevalence rates — approximately 33% of adults aged 15 and over (IDF Diabetes Atlas 2023). Type 2 diabetes, obesity, and metabolic syndrome are the dominant primary care disease burden. GLP-1 receptor agonists, SGLT-2 inhibitors, and insulin optimisation are among the most active pharma research areas. Ramadan fasting (approximately 25 days annually for the majority of Saudi patients) creates unique clinical management challenges that are increasingly important for drug labelling and patient education research.',
                },
                {
                  area: 'Oncology',
                  detail:
                    'The King Faisal Specialist Hospital & Research Centre (KFSH&RC) in Riyadh is the GCC\'s pre-eminent oncology referral centre and a critical KOL source for oncology pharmaceutical research. The National Centre for Cancer Care and Research (NCCC) operates the primary cancer registry. Key research topics include CAR-T access and funding, immunotherapy adoption barriers, biosimilar uptake in oncology, and the expansion of private oncology capacity under Vision 2030.',
                },
                {
                  area: 'Cardiovascular disease',
                  detail:
                    'CVD is Saudi Arabia\'s leading cause of mortality, with hypertension affecting approximately 40% of adults. Research topics include statin therapy optimisation, PCSK9 inhibitor access, heart failure management, and the impact of lifestyle interventions on cardiovascular risk in a population with high obesity and sedentary rates. NUPCO formulary inclusion and MOH clinical practice guideline alignment are key market access levers.',
                },
                {
                  area: 'Respiratory (asthma and COPD)',
                  detail:
                    'Asthma affects approximately 2 million Saudis (estimated 6–8% prevalence). COPD burden is driven by smoking (approximately 25% male prevalence) and occupational dust exposure. Biologic therapy access for severe asthma (dupilumab, mepolizumab, benralizumab) requires SFDA approval and NUPCO formulary listing — a multi-year access pathway that pharmaceutical teams must plan for early in the launch timeline.',
                },
                {
                  area: 'Rare diseases and orphan drugs',
                  detail:
                    'Saudi Arabia has a high burden of rare genetic diseases driven by high consanguinity rates (approximately 57% of marriages are between relatives per published studies). Lysosomal storage diseases, haemoglobin disorders, and primary immune deficiencies are disproportionately prevalent. SFDA has established expedited review pathways for orphan drugs under the Saudi Orphan Drug Programme. BioNixus supports patient identification research, caregiver burden studies, and payer willingness-to-fund assessments for rare disease launches.',
                },
                {
                  area: 'Mental health',
                  detail:
                    'Saudi Arabia launched a national mental health strategy in 2020 targeting a 30% reduction in mental health service gaps by 2030. Antidepressant, antipsychotic, and ADHD medication markets are growing rapidly from a low base. Stigma is a significant factor in treatment-seeking behaviour and adherence — qualitative research addressing patient and HCP perspectives on mental health management is a growing area of pharmaceutical research activity.',
                },
              ].map(({ area, detail }) => (
                <article key={area} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{area}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Fieldwork considerations */}
        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Saudi Arabia fieldwork: key operational considerations
            </h2>
            <h3 className="text-xl font-semibold text-foreground">Geographic coverage</h3>
            <p>
              Saudi Arabia's population is concentrated in five major urban clusters: Riyadh region (approximately 35%
              of population), Makkah region including Jeddah (approximately 25%), Eastern Province including
              Dammam/Al Khobar/Al Ahsa (approximately 15%), Madinah (approximately 7%), and Asir including Abha
              (approximately 5%). BioNixus research designs typically require Riyadh and Jeddah as mandatory cities,
              with Eastern Province added for studies where the oil sector workforce population and ARAMCO Medical
              Services Organisation (MSO) are relevant targets.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Gender-segregated hospital environments</h3>
            <p>
              Saudi hospitals operate gender-segregated clinical environments. Female physicians represent approximately
              30% of SCFHS-registered doctors and are the majority in obstetrics, gynaecology, paediatrics, and
              endocrinology. BioNixus employs female Arabic-speaking moderators for IDI programmes with female HCP
              respondents. Mixed-gender focus groups are not conducted in-person in Saudi Arabia; gender-separate video
              interviews or telephone IDIs are used instead.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Ramadan scheduling</h3>
            <p>
              Ramadan reduces HCP availability for research by approximately 30–40% as clinical workloads compress and
              personal commitments increase. BioNixus builds Ramadan windows into all KSA project plans and advises
              clients on optimal fieldwork scheduling relative to Islamic calendar dates. Where fieldwork cannot avoid
              Ramadan, quotas are adjusted with client agreement and incentive structures are adapted.
            </p>
            <h3 className="text-xl font-semibold text-foreground">PDPL 2021 compliance</h3>
            <p>
              Saudi Arabia's Personal Data Protection Law (Royal Decree M/19 of 2021, in force September 2023) requires
              informed consent for personal data collection, purpose limitation, and data security measures. BioNixus
              research instruments include PDPL-compliant consent notices, and data retention policies are aligned to
              the minimum necessary period for study completion and regulatory documentation.
            </p>
          </div>
        </section>

        {/* Proof metrics */}
        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6 text-center">
              Saudi Arabia research at a glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-4xl font-display font-bold text-primary mb-2">80,000+</p>
                <p className="text-sm text-muted-foreground">SCFHS-registered physicians in Saudi Arabia</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-4xl font-display font-bold text-primary mb-2">5</p>
                <p className="text-sm text-muted-foreground">Major city regions covered: Riyadh, Jeddah, Eastern, Makkah, Madinah</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-4xl font-display font-bold text-primary mb-2">5–8 wks</p>
                <p className="text-sm text-muted-foreground">Typical KSA physician survey delivery (briefing to report)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Related Saudi Arabia and GCC research</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Pharma fieldwork Saudi Arabia', to: '/pharma-fieldwork-saudi-arabia' },
                { label: 'KOL mapping Saudi Arabia oncology', to: '/kol-mapping-saudi-arabia-oncology' },
                { label: 'Saudi payer market access research', to: '/saudi-payer-market-access-research' },
                { label: 'HEOR consulting Saudi Arabia', to: '/heor-consulting-saudi-arabia' },
                { label: 'Budget impact model Saudi Arabia', to: '/budget-impact-model-saudi-arabia' },
                { label: 'HCP recruitment GCC', to: '/gcc-hcp-recruitment-market-research' },
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
        <section className="py-12 bg-muted/20">
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
              Start your Saudi Arabia pharma research programme
            </h2>
            <p className="text-primary-foreground/90">
              Share your objective and target respondent. BioNixus will propose a KSA-specific research design, SCFHS
              verification plan, timeline, and cost range within 48 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Request a Saudi Arabia research proposal
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
