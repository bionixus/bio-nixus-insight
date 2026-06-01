import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  ExecutiveDecisionBlock,
  PremiumHero,
  ProofMetricGrid,
} from '@/components/page/PremiumPageSections';

const pageUrl = 'https://www.bionixus.com/specialist-physician-panel-uae';

const faqItems = [
  {
    question: 'How does BioNixus verify the credentials of UAE specialist physicians in its panel?',
    answer:
      'BioNixus applies a three-layer validation protocol before any specialist is admitted to a UAE panel. First, licence verification: we check active licensure against the Dubai Health Authority (DHA) physician register, the Department of Health Abu Dhabi (DOH) practitioner database, or the Ministry of Health and Prevention (MOHAP) register depending on the emirate of practice. Each register is publicly searchable and provides licence number, specialty classification, and practice setting. Second, specialty verification: we confirm that the declared specialty aligns with the licensing authority\'s registered specialty field. Third, practice setting confirmation: we verify current employment through clinic, hospital, or health system directories including SEHA (Abu Dhabi Health Services), the DHA network, and major private hospital groups such as Aster, Mediclinic, and Cleveland Clinic Abu Dhabi. Physicians who have relocated, retired, or whose licences are lapsed are removed from active panels at each quarterly refresh cycle.',
  },
  {
    question: 'Which specialist categories are available in the BioNixus UAE physician panel?',
    answer:
      'BioNixus maintains active UAE panels across the following specialty categories: oncology (medical, haematological, radiation), cardiology, endocrinology and diabetology, rheumatology, neurology (including MS and movement disorders), pulmonology and respiratory medicine, nephrology, gastroenterology, dermatology, and infectious disease. Panel depth varies by specialty: endocrinology/diabetology and cardiology have the strongest representation — 100+ verified panellists each — due to UAE disease burden patterns. Oncology, rheumatology, and neurology have panels of 40–80 verified specialists. Ultra-rare disease specialties have limited UAE-based specialists (15–30 nationally) and require enhanced recruitment. BioNixus provides written feasibility assessments for any specialty before project commitment, including estimated target specialist population size and realistic achievable sample sizes within the project timeline.',
  },
  {
    question: 'What research applications can the UAE specialist physician panel support?',
    answer:
      'The BioNixus UAE specialist panel supports: concept and pre-launch research (product profile testing, unmet need mapping) with 20–40 specialists; advertising and promotional material testing; advisory boards with 8–12 specialists; Delphi panels with 15–25 specialists for consensus-building on treatment guideline interpretation; conjoint and discrete choice experiments with 30–60 specialists quantifying product attribute preferences; brand tracking surveys with 80–120 specialists per wave; and patient identification studies mapping case numbers and referral pathways. Each application has validated instrument templates calibrated for UAE specialist cognitive contexts and clinical decision-making frameworks.',
  },
  {
    question: 'How does BioNixus handle data privacy and research ethics for UAE physician panel studies?',
    answer:
      'BioNixus adheres to UAE data privacy requirements under Federal Decree-Law No. 45 of 2021 (the UAE Personal Data Protection Law, PDPL), which came into force in January 2022. Under the PDPL, personal data collected during research must be processed with explicit informed consent, stored securely with defined retention periods, and subject to data subject access and erasure rights. All BioNixus UAE panel research uses explicit opt-in consent specifying research purpose, commissioning organisation category, data storage location, and intended use. Physician identities are not disclosed to client organisations without separate written consent. Honoraria are paid in compliance with UAE healthcare professional interaction codes aligned to IFPMA guidelines and are fully disclosed in the consent process. Ethical review through a recognised institutional review board (IRB) is available for studies that qualify as research under UAE regulatory definitions.',
  },
  {
    question: 'What are realistic feasibility expectations for UAE specialist physician studies?',
    answer:
      'Feasibility varies substantially by specialty, study type, and required sample size. For high-prevalence specialties — endocrinology/diabetology, cardiology, general internal medicine — BioNixus achieves quantitative survey completion rates of 35–50% of contacted panellists, allowing a 30-specialist survey to complete in 10–15 working days. For lower-prevalence specialties — neurology sub-specialties, haematological oncology, rheumatology — contact-to-completion rates of 20–30% are typical, extending timelines to 15–25 working days. Advisory board recruitment for 10 specialists typically completes in 48–72 hours for common specialties and 5–10 working days for rare disease specialties. Ultra-rare disease specialist studies may require cross-GCC recruitment — BioNixus can expand scope to Oman, Kuwait, or Bahrain to achieve viable sample sizes. All feasibility estimates are provided in writing before project initiation.',
  },
  {
    question: 'How does the Dubai vs Abu Dhabi specialist panel composition differ, and does it matter for research design?',
    answer:
      'Dubai and Abu Dhabi specialist physician populations differ in ways that affect research design. Dubai hosts a more cosmopolitan, internationally trained specialist workforce with significant proportions of UK, US, Australian, and European-trained physicians, particularly in private hospitals such as Mediclinic, Saudi German Hospital, and NMC Healthcare. English is dominant and digital surveys achieve high completion rates. Abu Dhabi has a higher proportion of specialists within the SEHA public healthcare network — operating Tawam Hospital (Johns Hopkins affiliate), Sheikh Khalifa Medical City, and other major facilities. SEHA-affiliated specialists follow DOH clinical guidelines and formulary constraints closely, making them particularly valuable for formulary access and prescribing behaviour research. For brand tracking or prescribing behaviour studies, separate Dubai and Abu Dhabi sub-samples are recommended when market dynamics differ by emirate — common for biologics, speciality oncology agents, and high-cost endocrine therapies where DHA and DOH formulary listings diverge.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Specialist Physician Panel UAE',
    serviceType: 'Specialist physician recruitment and panel management for pharmaceutical market research in the UAE',
    areaServed: ['United Arab Emirates', 'Dubai', 'Abu Dhabi'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    description:
      'BioNixus maintains validated UAE specialist physician panels across oncology, cardiology, endocrinology, rheumatology, neurology, and 10+ other specialties. Panels are DHA/DOH/MOHAP licence-verified, supporting advisory boards, conjoint studies, brand tracking, and concept testing.',
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'GCC HCP Recruitment', href: '/gcc-hcp-recruitment-market-research' },
    { name: 'Specialist Physician Panel UAE', href: '/specialist-physician-panel-uae' },
  ]),
  buildFAQSchema(faqItems),
];

export default function SpecialistPhysicianPanelUae() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Specialist Physician Panel UAE | BioNixus</title>
        <meta
          name="description"
          content="Validated specialist physician panel UAE: DHA, DOH, and MOHAP licence-verified specialists across oncology, cardiology, endocrinology, rheumatology, and neurology. Advisory boards, conjoint studies, brand tracking, and concept testing with 48–72h advisory board recruitment."
        />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`spp-uae-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'GCC HCP Recruitment', href: '/gcc-hcp-recruitment-market-research' },
            { name: 'Specialist Physician Panel UAE', href: '/specialist-physician-panel-uae' },
          ]}
        />
        <PremiumHero
          h1="Specialist Physician Panel UAE"
          intro="BioNixus maintains validated UAE specialist physician panels across 12+ therapy areas, with active licence verification against DHA, DOH, and MOHAP databases. Whether you need 10 specialists for an advisory board in 72 hours or 80 for a quarterly brand tracking wave, our UAE physician panels deliver credible, verified respondents matched to your research objectives."
          links={[
            { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research' },
            { to: '/pharma-fieldwork-uae', label: 'Pharma fieldwork UAE' },
            { to: '/uae-pharmaceutical-market-research', label: 'UAE pharmaceutical market research' },
            { to: '/contact', label: 'Request panel feasibility' },
          ]}
        />

        <ExecutiveDecisionBlock
          heading="UAE specialist panel: decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'The UAE has approximately 15,000 licensed physicians (MOH 2024), of whom a much smaller subset practise as specialists in commercially relevant therapy areas. Reaching the right specialists — with verified credentials and active UAE practice — is the prerequisite for any credible primary research programme.',
            },
            {
              title: 'What the evidence says',
              body: 'UAE specialist panels with DHA/DOH/MOHAP licence verification consistently outperform unverified panels on data quality metrics, including specialty alignment, prescribing authority, and UAE-specific clinical experience. Unverified panels carry significant risk of including retired, relocated, or misclassified respondents.',
            },
            {
              title: 'What to do next',
              body: 'Request a written feasibility assessment for your target specialty, required sample size, and research method. BioNixus provides feasibility estimates within 24 hours for standard specialties, including panel depth, estimated completion timelines, and cost ranges.',
            },
          ]}
        />

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-10">

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Why specialist physician panels matter for UAE pharma research
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The UAE pharmaceutical market is characterised by a specialist-driven prescribing culture in which key decision-making for branded, speciality, and high-cost therapies is concentrated among a relatively small number of identifiable physicians. In contrast to the United Kingdom, where general practitioners control the majority of prescribing volume, UAE prescribing for speciality products flows almost entirely through specialists — oncologists, cardiologists, endocrinologists, rheumatologists, and pulmonologists — operating within hospital-based settings under DHA, DOH, SEHA, or private hospital governance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This concentration means that the sample frame for effective UAE pharma market research is narrow and precisely defined. Reaching even 30 oncologists or 25 rheumatologists with verified UAE practising credentials, relevant prescribing authority, and active patient loads constitutes access to a large proportion of the commercially relevant audience for most speciality products. Conversely, research conducted with unverified, non-specialist, or non-UAE-practising respondents produces systematically misleading insights that can misdirect commercial strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The BioNixus UAE specialist physician panel was built to solve this problem: verified credentials, specialty-confirmed respondents, and regular panel refresh cycles ensure that research outputs reflect the views of physicians who are actively treating UAE patients today.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                UAE specialist physician landscape
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The UAE had approximately 15,000 licensed physicians as of the Ministry of Health 2024 register, reflecting steady growth driven by healthcare infrastructure expansion and major public and private hospital development programmes. The physician workforce is overwhelmingly expatriate — estimated at 85–90% of total — with the largest national-origin groups coming from Egypt, India, Pakistan, the United Kingdom, and the United States. This workforce composition has significant implications for research design: English is the effective professional lingua franca, and most UAE-based specialists received their postgraduate training and specialty certification in international centres — UK Royal Colleges, US board certification bodies, Egyptian and Indian specialist training programmes — creating a population with sophisticated clinical literacy and genuine familiarity with international clinical trial literature.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Key specialist categories for pharmaceutical market research in the UAE, with estimated active practitioner numbers, include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>
                  <strong>Endocrinology and diabetology:</strong> 200–280 licensed specialists across DHA, DOH, and MOHAP registers. The largest specialist category by commercial relevance given UAE's approximately 19% adult diabetes prevalence (IDF Diabetes Atlas 2023).
                </li>
                <li>
                  <strong>Cardiology:</strong> 300–380 licensed cardiologists, including interventional, electrophysiology, and heart failure sub-specialists. High concentrations at SEHA hospitals, Cleveland Clinic Abu Dhabi, and major Dubai private hospitals.
                </li>
                <li>
                  <strong>Oncology (medical):</strong> 150–200 licensed medical oncologists. Concentrated at National Cancer Institute Abu Dhabi (NCIAD), Tawam Hospital (Johns Hopkins affiliate), and Mediclinic City Hospital Dubai.
                </li>
                <li>
                  <strong>Rheumatology:</strong> 80–120 licensed rheumatologists. Lower density than cardiology or endocrinology; UAE does not have a formal domestic rheumatology training programme, so specialists are internationally trained.
                </li>
                <li>
                  <strong>Neurology:</strong> 100–150 licensed neurologists, including MS, epilepsy, and movement disorder sub-specialists. Research into rare neurological conditions may require GCC-wide panel expansion.
                </li>
                <li>
                  <strong>Pulmonology and respiratory medicine:</strong> 120–160 licensed pulmonologists. Strong representation at SEHA facilities and private hospitals with respiratory ICU capability.
                </li>
                <li>
                  <strong>Nephrology:</strong> 100–130 licensed nephrologists, with close linkage to transplant and dialysis programmes across Abu Dhabi and Dubai.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Panel validation methodology
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The integrity of a specialist physician panel depends entirely on the rigour of the validation process. BioNixus applies the following three-stage protocol for UAE panel qualification.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Licence verification</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every panellist is verified against at least one of the three UAE licensing authority registers: the DHA Health Professional Register, the DOH Abu Dhabi Healthcare Professional Register, or the MOHAP physician licence register. Verification confirms active licence status, registered specialty, and emirate of practice. Physicians whose licences have lapsed, been suspended, or been transferred out of the UAE are removed from active panel status and flagged for re-verification before any subsequent contact.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Specialty verification</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Specialty verification confirms that the panellist's self-declared specialty matches the registered specialty on the licensing authority database. This catches misclassification — for example, a general internist who self-identifies as an endocrinologist — that would introduce noise into specialty-specific research. For sub-specialty precision (e.g., haematological oncologist vs. medical oncologist; MS neurologist vs. general neurologist), BioNixus applies a further screening questionnaire at enrolment and at each annual panel refresh.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Practice setting confirmation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Panellists confirm their current primary practice setting at enrolment: public hospital (SEHA, DHA facilities), private hospital (Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi, Saudi German), or private clinic and polyclinic. Practice setting is a critical sampling variable: formulary access research should over-sample public hospital specialists who work within DHA/DOH formulary constraints, while treatment preference research may benefit from sampling across both public and private settings.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quarterly panel refresh</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UAE physician panels face specific maintenance challenges due to the high-turnover expatriate workforce: physicians rotate on 2–5 year employment contracts, and workforce exits due to contract non-renewal, voluntary departure, or retirement are frequent. BioNixus runs quarterly refresh cycles — re-verification of licence status, updated practice setting confirmation, and removal of inactive panellists. New panellists are recruited continuously through physician directories, medical association databases, LinkedIn professional recruitment, and clinic network partnerships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Research applications and sample size guidance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BioNixus UAE specialist panels support the full range of pharmaceutical market research applications. The following guidance is based on standard practice for UAE specialist studies.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quantitative specialist surveys</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quantitative surveys covering prescribing behaviour, product awareness, willingness-to-prescribe, treatment pathway mapping, and message testing typically require 30–80 specialists for statistically reportable findings. For most UAE specialties, n=30–40 provides sufficient power for descriptive analysis and subgroup comparison by practice setting or emirate. Brand tracking waves use n=80–120 specialists per specialty to enable wave-on-wave trending with statistically detectable movement. Surveys are conducted online in English; Arabic versions are available for specialties where survey completion rates are higher in Arabic, more common among MOHAP-registered physicians in the northern emirates.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Advisory boards and expert panels</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Advisory boards of 8–12 specialists provide the qualitative depth for clinical positioning, evidence gap identification, and market access strategy validation. BioNixus recruits UAE advisory boards within 48–72 hours for common specialties. Advisory boards can be conducted in-person in Dubai or Abu Dhabi with full logistics support including venue, AV, and catering, or virtually via secure video conferencing. Hybrid formats are also available. Output: a structured advisory board report including key verbatims, thematic analysis, and specific recommendations, delivered within 5 working days of the board.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Delphi panels</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Delphi methodology is well-suited to UAE contexts where standard-of-care definitions, guideline interpretation, and treatment decision rules vary between DHA, DOH, and MOHAP healthcare settings. BioNixus UAE Delphi panels typically run 2–3 iterative rounds with 15–25 specialists, using structured questionnaires and anonymised feedback between rounds to build consensus on clinically contested questions. Applications include defining treatment intensification criteria for HbA1c management in UAE diabetes patients, establishing biologic initiation thresholds for rheumatoid arthritis or severe asthma in GCC clinical settings, and mapping referral pathway standards across primary and secondary care.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Conjoint and discrete choice experiments</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conjoint analysis and discrete choice experiments quantify the relative importance specialists assign to treatment attributes — efficacy, tolerability, dosing frequency, device features, patient support programmes — and are particularly valuable for product profile optimisation and positioning strategy. UAE conjoint studies typically require 40–60 specialists for robust attribute-level estimates. Study instruments are validated for UAE specialist comprehension before launch; BioNixus conducts cognitive pilot interviews with 3–5 specialists to confirm that choice tasks are appropriately calibrated to UAE clinical decision-making contexts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Recruitment channels and ethics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BioNixus recruits UAE specialist panellists through four primary channels, each with distinct coverage and yield characteristics.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                <li>
                  <strong>LinkedIn professional recruitment:</strong> LinkedIn penetration among UAE-based healthcare professionals is high relative to other markets. BioNixus uses specialty-targeted LinkedIn outreach with physician-specific messaging. Yield: 15–25% connection acceptance, 8–12% survey completion from initial outreach. Particularly effective for DHA-registered private hospital specialists.
                </li>
                <li>
                  <strong>Clinic and hospital networks:</strong> Direct recruitment partnerships with clinic coordinators and hospital medical education departments at major UAE facilities — SEHA hospitals, Mediclinic, Aster Hospitals, NMC Healthcare, Cleveland Clinic Abu Dhabi — enable direct specialist referral. Yield: 20–35% completion from referred contacts.
                </li>
                <li>
                  <strong>Medical association databases:</strong> The Emirates Medical Association and specialty society rosters — including the Emirates Diabetes and Endocrine Society and Emirates Cardiology Society — provide identifiable specialist directories cross-referenced with licensing registers. Yield: 10–18% from association directory outreach.
                </li>
                <li>
                  <strong>Panel re-contact:</strong> Verified panellists who have participated in previous BioNixus UAE research and consented to future contact achieve the highest yield: 35–55% completion. Panel re-contact is the fastest route for advisory board recruitment when timeline is the priority.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All research is conducted under the UAE Personal Data Protection Law (PDPL, Federal Decree-Law No. 45 of 2021) with explicit informed consent. Honoraria follow IFPMA guidelines and range from $100–$200 per 20-minute survey to $500–$1,000 per hour for advisory board participation, with full compliance documentation maintained by BioNixus.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Turnaround times and cost ranges
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Advisory board (8–12 specialists):</strong> 48–72 hours recruitment for common specialties; 5–10 working days for rare disease specialties. Cost: $15,000–$30,000 including logistics, facilitation, and report.</li>
                <li><strong>Quantitative survey (30–40 specialists):</strong> 2–3 weeks from instrument finalisation to data delivery. Cost: $20,000–$45,000 depending on questionnaire length and specialty.</li>
                <li><strong>Quantitative survey (80–120 specialists, brand tracking wave):</strong> 3–5 weeks. Cost: $35,000–$70,000 per wave.</li>
                <li><strong>Delphi panel (15–25 specialists, 2 rounds):</strong> 4–6 weeks. Cost: $25,000–$50,000.</li>
                <li><strong>Conjoint or discrete choice experiment (40–60 specialists):</strong> 4–6 weeks. Cost: $30,000–$60,000.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All projects include a written feasibility assessment before commitment. Rare specialty projects requiring GCC-wide panel expansion are scoped separately, with clear milestone pricing across countries.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
              <h2 className="text-lg font-semibold text-foreground mb-3">UAE specialist physician panel proof points</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">UAE licensed physicians</p>
                  <p className="text-xl font-semibold text-foreground">~15,000</p>
                  <p className="text-xs text-muted-foreground mt-1">MOH 2024. BioNixus maintains verified specialist sub-panels across 12+ therapy areas.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Advisory board recruitment</p>
                  <p className="text-xl font-semibold text-foreground">48–72h</p>
                  <p className="text-xs text-muted-foreground mt-1">For 10-specialist advisory boards in common UAE specialties from panel re-contact.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Study cost range</p>
                  <p className="text-xl font-semibold text-foreground">$15K–$60K</p>
                  <p className="text-xs text-muted-foreground mt-1">Advisory boards through full conjoint studies. Fixed-fee scoping available for all study types.</p>
                </article>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gcc-hcp-recruitment-market-research" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                GCC HCP recruitment market research
              </Link>
              <Link to="/pharma-fieldwork-uae" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Pharma fieldwork UAE
              </Link>
              <Link to="/uae-pharmaceutical-market-research" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                UAE pharmaceutical market research
              </Link>
              <Link to="/contact" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Request panel feasibility
              </Link>
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Specialist physician panel UAE FAQs</h2>
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
