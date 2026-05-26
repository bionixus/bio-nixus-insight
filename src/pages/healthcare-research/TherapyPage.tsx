import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { TherapyMarketReferenceGuide } from '@/components/seo/TherapyMarketReferenceGuide';
import { buildFAQSchema, buildTherapyPageSchemas } from '@/lib/seo/schemas';

const BIOLOGICS_SEO_TITLE = 'Biologics Research Guide: Biosimilars & Market Access | BioNixus';

const IMMUNOLOGY_SEO_TITLE = 'Immunology Research Guide: Biologics & Patient Pathways | BioNixus';

const THERAPY_COPY: Record<string, string> = {
  oncology:
    'Oncology market research programs focused on treatment pathways, biomarker behavior, and evidence expectations across MENA, UK, and Europe.',
  diabetes:
    'Diabetes market intelligence for pharmaceutical teams covering physician behavior, switch drivers, adherence barriers, and access constraints.',
  respiratory:
    'Respiratory market research to support portfolio strategy, stakeholder targeting, and evidence-based engagement planning.',
  immunology:
    'Immunology market research across MENA, UK & Europe: immune-mediated disease pathways, biologic sequencing and switching, safety and monitoring narratives, access and step-therapy friction—quantitative and qualitative insights for specialty and primary stakeholders.',
  biologics:
    'Biologics and biosimilars market research across MENA, UK & Europe: adoption drivers, substitution confidence, hospital tendering, payer evidence, and launch or defense strategy—quantitative and qualitative pharmaceutical studies.',
  vaccines:
    'Vaccines and immunization programs: HCP confidence, public uptake drivers, communication testing, and rollout strategy support for national and private channels in priority healthcare markets.',
  cardiology:
    'Cardiology pharmaceutical market research covering acute and chronic pathways, interventional adoption, guideline-aligned prescribing, and payer-relevant outcomes.',
  'rare-diseases':
    'Rare disease market research for orphan and specialty therapies: patient-finding realism, KOL networks, access hurdles, and evidence needs across MENA, UK, and Europe.',
  'aesthetic-medicine':
    'Aesthetic medicine market research for injectables, devices, and consumer-medical positioning—demand signals, channel dynamics, and competitive differentiation.',
};

const THERAPY_SECTIONS: Record<string, { title: string; points: string[] }> = {
  oncology: {
    title: 'Oncology Market Research Priorities',
    points: [
      'Map treatment pathway behavior and referral dynamics across high-value oncology centers.',
      'Assess biomarker-driven decision logic, evidence confidence, and protocol preferences.',
      'Quantify adoption barriers for novel therapies and identify segment-specific acceleration levers.',
    ],
  },
  diabetes: {
    title: 'Diabetes Market Research Priorities',
    points: [
      'Measure treatment switching, adherence constraints, and physician confidence by patient segment.',
      'Profile differences between institutional and private-care management pathways.',
      'Test value communication and outcome expectations to improve launch and lifecycle planning.',
    ],
  },
  respiratory: {
    title: 'Respiratory Market Research Priorities',
    points: [
      'Analyze prescription behavior in chronic and acute respiratory pathways.',
      'Identify key barriers to guideline-aligned therapy adoption in target markets.',
      'Prioritize stakeholder engagement strategy using influence- and setting-based segmentation.',
    ],
  },
  immunology: {
    title: 'Immune-mediated disease: where insight must match longitudinal reality',
    points: [
      'Sequencing & switching: line-of-therapy etiquette, inertia after response, intolerance triggers, steroid bridges, biosimilar pressure, and who can authorize change in clustered practices.',
      'Safety & coordination: screening habits, vaccination policy in practice, infection anxiety, tuberculosis pathways, pregnancy and family-planning counselling, multidisciplinary handoffs.',
      'Access & stewardship: prior authorization burdens, institutional protocols, payer step-edit rules, nurse-led dosing models, infusion vs self-admin friction, tender effects in chronic IMID.',
    ],
  },
  biologics: {
    title: 'Biologics and biosimilars: where market research creates leverage',
    points: [
      'Prescriber & patient narratives: substitution confidence, inertia, monitoring burden, and who truly decides in complex indications.',
      'Institutional procurement: tender mechanics, budgeting cycles, pharmacist-led switching, biosimilar listing rules, and center-level variation.',
      'Access & defence: formulary hurdles, pharmacoeconomic expectations, evidence thresholds for interchangeable or preferred status, and competitive simulation.',
    ],
  },
  vaccines: {
    title: 'Vaccine Market Research Priorities',
    points: [
      'Assess vaccine confidence drivers and adoption constraints in prioritized populations.',
      'Map healthcare provider communication needs for stronger uptake programs.',
      'Support rollout strategy with targeted evidence on channel and stakeholder differences.',
    ],
  },
};

const BIOLOGICS_FAQS = [
  {
    question: 'What is biologics market research in pharma?',
    answer:
      'Biologics market research translates prescriber, nurse, pharmacist, payer, procurement, and patient-adjacent behavior into actionable evidence. It connects clinical differentiation, biosimilar competition, procurement rules, formulary pathways, monitoring requirements, center capacity, and real-world inertia so teams can prioritize segments, narratives, investments, and access tactics with confidence.',
  },
  {
    question: 'How does biologics research differ from small-molecule pharma research?',
    answer:
      'Biologics are large, complex molecules with manufacturing sensitivity, heightened immunogenicity considerations, nuanced administration and cold-chain realities, specialty distribution, biosimilar substitutability questions, and often higher budget impact per patient. Studies must reflect institutional workflow, pharmacist governance, infusion capacity, longitudinal monitoring burdens, tender cycles, and how safety-efficacy trade-offs show up beyond a simple comparative efficacy spreadsheet.',
  },
  {
    question: 'How do biosimilars change what market research needs to measure?',
    answer:
      'Biosimilars compress differentiation into trust, familiarity, extrapolation acceptance, labeling confidence, pharmacist substitution policy, interchangeability narratives where relevant, procurement scoring, rebate structures, switching protocols, adverse-event attribution concerns, and post-switch monitoring habits. Robust research validates which claims move behavior and where education, patient support, or economic tools are required—rather than assuming price alone decides.',
  },
  {
    question: 'Which stakeholder groups matter most for biologics uptake studies?',
    answer:
      'It depends on the indication, setting, and access model—but specialist prescribers, nurses who operationalize dosing and monitoring, hospital pharmacists and pharmacy and therapeutics committee influencers, formulary authorities, payer or HTA-aligned reviewers where applicable, procurement teams in tender-led systems, infusion center leads, medical science liaisons and clinical educators, and where appropriate caregivers or empowered patients frequently shape speed and breadth of uptake.',
  },
  {
    question: 'What research methodologies work best for biologics?',
    answer:
      'Most programs blend targeted quantitative surveying with depth interviews, triads, or advisory-style discussions; conjoint or MaxDiff when messaging or valuation trade-offs matter; simulated or sequential choice modules when tenders or formulary tiers drive behavior; electronic diaries when adherence or symptom burden matters; qualitative chart or pathway walkthroughs; and secondary desk analytics for policy, pricing, tender calendars, competitor labels, or institution lists. The methodology choice follows the commercial question—not the reverse.',
  },
  {
    question: 'Can biologics market research cover both launch planning and biosimilar defense?',
    answer:
      'Yes. Launch work focuses on segmentation, prioritization centers, differentiated clinical narratives credible to local peers, uptake acceleration levers, and access sequencing. Biosimilar defense research stress-tests erosion scenarios, traces decision chains that trigger switches, validates defensive evidence packages, aligns medical and payer stories, informs contracting strategy, improves patient retention programs and identifies leakage early enough to intervene—without speculative guesswork.',
  },
  {
    question: 'How does BioNixus adapt biologics studies for GCC, MENA, UK, or European contexts?',
    answer:
      'Each market layers public and private reimbursement pathways, institution types, pharmacist substitution practices, sourcing rules, import realities, multilingual fieldwork nuances, differing KOL hierarchies and referral gravity, localized evidence expectations and tender mechanics. Comparable core metrics enable regional roll-ups while localized modules preserve decision realism—preventing falsely uniform strategies that fracture in-market execution.',
  },
  {
    question: 'What deliverables typically come out of a biologics-focused engagement?',
    answer:
      'Stakeholder-specific insight decks, prioritized segment dossiers with behavioral rationale, uptake or erosion forecasts grounded in surveyed likelihoods, differentiated messaging hierarchies validated quantitatively, objection libraries with counter-evidence, access risk maps citing operational blockers—not labels—executive summaries for regional governance, simulation outputs for payer or procurement conversations, optional workshop facilitation to translate findings into rollout plans.',
  },
];

const IMMUNOLOGY_FAQS = [
  {
    question: 'What is immunology market research in pharma?',
    answer:
      'Immunology market research translates how clinicians, nurses, pharmacists, and payers behave across chronic immune-mediated diseases—often for years—not just at initiation. It links treatment sequencing, intolerance and secondary loss patterns, steroid dependence, multidisciplinary monitoring habits, vaccination and infection risk tolerance, formulary stewardship, infusion logistics, biosimilar acceptance, and patient-facing education to actionable launch, segmentation, messaging, access, and medical strategies.',
  },
  {
    question: 'Which disease areas typically sit under immunology market research?',
    answer:
      'Programs commonly span rheumatologic conditions, inflammatory bowel disease and related gastrointestinal immune disease, psoriasis and broader dermatologic immune disease, systemic immune and autoinflammatory phenotypes where specialists overlap, and selected respiratory or ophthalmic immune-mediated indications depending on stakeholder routing. Geography and referral culture determine whether gastroenterologists, rheumatologists, dermatologists, combined internal medicine pathways, or generalists gate the decisive conversation—research design must mirror that hierarchy rather than a textbook taxonomy.',
  },
  {
    question: 'Why is sequencing central to immunology insights?',
    answer:
      'Most immune-mediated franchises compete after conventional therapy failures or partial responses—not on a pristine treatment-naïve canvas. Physicians compare mechanisms, infusion burden, adverse-event familiarity, tuberculosis or hepatitis screening practicality, contraception counselling load, escalation speed after flare, interoperability with steroids or bridging regimens, and practice-level comfort with initiation risk. Market research must surface which trade-offs dominate in each segment and how local guidelines, hospital protocols, or payer rules compress choice—otherwise forecasts misread “share of voice” as “share of eligible patients.”',
  },
  {
    question: 'Which stakeholders should immunology studies prioritize?',
    answer:
      'Treating specialists remain pivotal, but durable performance often depends on nurses managing infusions or injection training, pharmacists reconciling monitoring labs and drug interactions, coordination teams handling prior authorization burdens, allied health reinforcing adherence messaging, infusion center supervisors protecting chair time, payer pharmacists interpreting step edits, primary care gateways in certain markets and engaged patients advocating for escalation. Sampling should overweight participants with disproportionate veto or acceleration power along the longitudinal pathway—not ceremonial titles.',
  },
  {
    question: 'How does safety framing affect immunology messaging research?',
    answer:
      'Clinicians calibrate nuanced infection and malignancy vigilance narratives against lived practice constraints—delayed screening completions, heterogeneous vaccination uptake, heterogeneous documentation burden, heterogeneous comfort discussing pregnancy risk categorically versus nuanced counselling. Messaging tests must avoid abstract efficacy claims divorced from operational reality; pairing quantitative appeal ranking with qualitative chart-stimulated recall reveals which safety stories feel credible versus alarmist—and which reassurance formats reduce unnecessary defensive prescribing inertia.',
  },
  {
    question: 'What research methods suit immunology portfolios?',
    answer:
      'Mixed methods dominate: segmentation surveys calibrated to prescribing volume clusters; depth interviewing and triangulation across specialties within the same market; discrete choice experiments when sequenced pairwise comparisons mimic real escalation decisions; patient advisory or caregiver modules when adherence or stigma shapes persistence; analogue forecasting workshops when analogue brands fragment by mechanism class; ethnographic-lite clinic flow mapping when infusion throughput or nurse bandwidth bottlenecks determine adoption ceilings. Modules flex by indication maturity and biosimilar pressure intensity.',
  },
  {
    question: 'Can BioNixus support biosimilar, tender, or access defence work in immunology?',
    answer:
      'Yes. Tender-led institutions, mandated substitution corridors, rebate-driven contracting, payer step protocols, pharmacist-led switching mandates, or internal pathway governance can erode stable chronic share even when physician satisfaction remains high. Research isolates trigger points—often operational or economic rather than purely clinical—so medical, access, and brand teams align defensive evidence, services, contracting counter-moves, and retention programs before erosion accelerates. Pair with our broader biologics intelligence when procurement mechanics dominate.',
  },
  {
    question: 'How does BioNixus localize immunology research across GCC, MENA, UK, and Europe?',
    answer:
      'Markets diverge in public versus private routing, specialist density, referral lag, screening infrastructure, nursing scope of practice, language of scientific discourse, tender intensity, importation realities, and cultural sensitivity around chronic visible disease or fertility discussions. We maintain comparable analytical cores for regional governance while embedding market modules that respect local decision chains—preventing “one slide deck” strategies that fail where practice truly differs.',
  },
];

export default function TherapyPage() {
  const { area = '' } = useParams<{ area: string }>();
  const titleArea = area.replace(/-/g, ' ');
  const isBiologics = area === 'biologics';
  const isImmunology = area === 'immunology';
  const copy =
    THERAPY_COPY[area] ||
    'Therapy-focused pharmaceutical market research with actionable evidence for stakeholder engagement and growth planning.';
  const therapyFaqs = isBiologics
    ? BIOLOGICS_FAQS
    : isImmunology
      ? IMMUNOLOGY_FAQS
      : [
        {
          question: `How does BioNixus approach ${titleArea} pharmaceutical market research?`,
          answer:
            'BioNixus combines quantitative and qualitative methods to identify adoption drivers, evidence expectations, and stakeholder barriers specific to this therapy area across MENA, UK, and Europe.',
        },
        {
          question: `Which stakeholder groups are prioritized in ${titleArea} therapy studies?`,
          answer:
            'Stakeholders are selected by real decision influence and pathway relevance, including treating specialists, institutional influencers, and where needed market access and payer-adjacent participants.',
        },
        {
          question: `Can ${titleArea} market research support launch and post-launch optimization?`,
          answer:
            'Yes. Therapy-focused research can inform launch planning, segment prioritization, communication strategy, and post-launch optimization by revealing where adoption friction appears and how to reduce it.',
        },
      ];
  const jsonLd = [...buildTherapyPageSchemas(area, copy), buildFAQSchema(therapyFaqs)];
  const content = THERAPY_SECTIONS[area] || {
    title: `${titleArea} Research Priorities`,
    points: [
      'Identify stakeholder decision drivers and barriers relevant to this therapy area.',
      'Support launch and optimization strategy with country-aware evidence.',
      'Translate insights into practical actions for commercial, medical, and access teams.',
    ],
  };

  return (
    <main>
      <SEOHead
        title={
          isBiologics
            ? BIOLOGICS_SEO_TITLE
            : isImmunology
              ? IMMUNOLOGY_SEO_TITLE
              : `${titleArea} Market Research | BioNixus`
        }
        description={copy}
        canonical={`/healthcare-market-research/therapy/${area}`}
        jsonLd={jsonLd}
      />
      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleArea} Therapy`, href: `/healthcare-market-research/therapy/${area}` },
        ]}
      />

      <section className="py-16">
        <div className="container-wide max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-semibold text-foreground mb-4 capitalize">
            {isBiologics
              ? 'Biologics market research guide'
              : isImmunology
                ? 'Immunology market research guide'
                : `${titleArea} Market Research`}
          </h1>
          {isBiologics ? (
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Biologics and biosimilars sit at the intersection of clinical sophistication, institutional workflow,
                and budget impact. Competitive advantage rarely comes from a slide deck alone—it comes from a precise
                map of{' '}
                <strong className="font-medium text-foreground">who influences initiation, continuation, substitution</strong>{' '}
                and{' '}
                <strong className="font-medium text-foreground">
                  which procurement, formulary, and operational constraints govern speed.
                </strong>{' '}
                BioNixus builds mixed-method programs that answer those decision realities for biotech, specialty pharma,
                and biosimilar developers operating across GCC, broader MENA, the United Kingdom, and Europe. Explore the{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research hub
                </Link>{' '}
                for country coverage, or continue below for a structured guide to biologics insight work.
              </p>
              <p>
                If your portfolio skews toward immune-mediated disease, pair this page with{' '}
                <Link to="/healthcare-market-research/therapy/immunology" className="text-primary underline">
                  immunology market research
                </Link>
                . For Gulf commercial context—tender density, private growth, and regulatory pacing—see{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                . When launch planning centers on Saudi Arabia’s biosimilar access environment, our{' '}
                <Link to="/biosimilar-market-entry-saudi-arabia" className="text-primary underline">
                  biosimilar market entry in Saudi Arabia
                </Link>{' '}
                perspective connects policy and stakeholder behavior to practical sequencing.
              </p>
            </div>
          ) : isImmunology ? (
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Immunology is a portfolio of long-horizon decisions: who escalates, who stalls, who switches after loss of
                response, and which operational frictions quietly cap share even when trial data look compelling. BioNixus
                designs studies that connect{' '}
                <strong className="font-medium text-foreground">
                  specialist judgment, nursing execution, safety rituals, and access guardrails
                </strong>{' '}
                so brand, medical, and market access teams invest where behavior actually changes—not where slide templates
                assume it should. Start from the{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research hub
                </Link>{' '}
                for regional coverage, then use this guide to align your immunology research blueprint.
              </p>
              <p>
                Most immunology assets compete as advanced therapies; link this page with our{' '}
                <Link to="/healthcare-market-research/therapy/biologics" className="text-primary underline">
                  biologics market research guide
                </Link>{' '}
                for procurement, tender, and biosimilar substitution dynamics. For Gulf context on institution mix and access
                evolution, see{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>
                . Where Saudi tendering and biosimilar listing shape chronic immune-mediated categories, our{' '}
                <Link to="/biosimilar-market-entry-saudi-arabia" className="text-primary underline">
                  biosimilar market entry in Saudi Arabia
                </Link>{' '}
                note grounds policy in prescriber and pharmacist behavior. Browse all therapy routes on{' '}
                <Link to="/pharmaceutical-therapy-areas" className="text-primary underline">
                  pharmaceutical therapy areas
                </Link>
                , including{' '}
                <Link to="/healthcare-market-research/therapy/rare-diseases" className="text-primary underline">
                  rare disease market research
                </Link>{' '}
                when your asset spans specialist overlap or orphan-like referral patterns.
              </p>
            </div>
          ) : (
            <p className="text-lg text-muted-foreground leading-relaxed">
              BioNixus provides therapy-specific intelligence for evidence-led strategy. Visit the{' '}
              <Link to="/healthcare-market-research" className="text-primary underline">
                healthcare market research hub
              </Link>{' '}
              to explore country coverage and service capabilities across MENA, UK, and Europe.
            </p>
          )}
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">{content.title}</h2>
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            {isBiologics ? (
              <>
                <p>
                  Biologics programs should not be reduced to a single “awareness” metric. Uptake is governed by
                  multi-step choices: diagnosis-to-treatment intervals, center capacity, cold chain and handling
                  confidence, prior authorization burden, laboratory monitoring cadence, nurse training, pharmacovigilance
                  culture, and how institutions attribute benefit or risk after a switch. Our guide below breaks these
                  layers into research questions your brand, access, and medical teams can align on before fieldwork
                  begins.
                </p>
                <p>
                  Whether you are introducing a novel mechanism, expanding into a new geography, or defending share
                  against biosimilars, the research architecture stays consistent: measure{' '}
                  <strong className="font-medium text-foreground">decision influence</strong>, not title labels; separate{' '}
                  <strong className="font-medium text-foreground">public from private</strong> routes where they diverge;
                  and treat tender-led institutions as markets with their own scoring rules, not as uniform hospital
                  accounts.
                </p>
              </>
            ) : isImmunology ? (
              <>
                <p>
                  Immune-mediated categories reward research that respects chronicity: flares, partial responses, comorbid
                  infections, pregnancies, travel and work schedules, prior authorization fatigue, and practice-level
                  familiarity with each mechanism class. The guide below frames modules you can combine—so quant trends
                  do not drown in anecdote, and qual depth still rolls up to segment logic your regional teams can execute.
                </p>
                <p>
                  Whether you launch first-in-class, fight post-biosimilar erosion, or expand from one specialty corridor
                  into another, anchor on three lenses:{' '}
                  <strong className="font-medium text-foreground">clinical sequencing credibility</strong>,{' '}
                  <strong className="font-medium text-foreground">operational feasibility of safe initiation and monitoring</strong>
                  , and <strong className="font-medium text-foreground">access pathways that filter real eligible patients</strong>.
                </p>
              </>
            ) : (
              <>
                <p>
                  BioNixus designs {titleArea} programs around practical decisions, not generic reporting. Our teams
                  combine quantitative and qualitative approaches to reveal where opportunity is strong, where resistance
                  appears, and how strategy can be adapted across healthcare markets.
                </p>
                <p>
                  For cross-country planning, each study is built with comparable core indicators and local modules so
                  leadership teams can scale what works and adapt what must remain market-specific.
                </p>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.points.map((point) => (
              <article key={point} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isImmunology ? (
        <>
          <section className="py-12">
            <div className="container-wide max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                What immunology means for pharmaceutical market research
              </h2>
              <p>
                In commercial research terms, immunology is less a single specialty map than a{' '}
                <strong className="font-medium text-foreground">network of chronic decisions</strong> linking diagnosis
                confidence, guideline adoption speed, treat-to-target literacy (where applicable), pragmatic tolerance of
                symptoms, corticosteroid dependence, step-up versus step-down cultural norms, and institution-specific
                governance of advanced therapy initiation. Share shifts when any node in that network tightens—often before
                controlled trial outcomes stop looking favorable on paper.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Cross-specialty routing and “who owns” escalation
                </h3>
                <p>
                  The same molecule may travel through gastroenterology, rheumatology, or dermatology dominant pathways
                  depending on country, center type, and referral congestion. Effective studies document not only
                  prescribers but also gatekeeping primary care, combined internal medicine models, and hospitalist
                  interfaces where acute flares interrupt longitudinal plans. Ignoring routing misallocates sales and
                  medical effort toward specialists who endorse a brand but rarely control first advanced-therapy access.
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Persistence, switching, and hidden loss of response
                </h3>
                <p>
                  Chronic immune populations accumulate tolerance to inconvenience: infusion travel time, lab cadence,
                  injection anxiety, co-pay surprises, pharmacy switching, or nursing turnover that breaks training
                  continuity. Research should distinguish visible discontinuation from silent suboptimal persistence where
                  patients remain “on therapy” but dose-optimize late or supplement heavily with steroids—patterns that skew
                  real-world outcomes narratives and understated competitive vulnerability.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/20">
            <div className="container-wide max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                Modules we typically integrate for immunology engagements
              </h2>
              <p className="text-foreground font-medium">
                Scope modules up or down by indication specificity, biosimilar pressure, infusion intensity, subcutaneous
                cannibalization risk, or companion diagnostic footprint.
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Disease corridor mapping:</strong> time-to-diagnosis anecdotes,
                  misclassification risk, biopsy or objective testing practicality, steroid exposure history influence on
                  eligibility perception, multidisciplinary meeting dynamics.
                </li>
                <li>
                  <strong className="text-foreground">Treatment history reconstruction:</strong> sequence recall accuracy,
                  class failure definitions, escalation urgency triggers, inertia after stable but symptomatic partial
                  response, coexistence of surgery or acute-care episodes that reset planning.
                </li>
                <li>
                  <strong className="text-foreground">Safety ritual calibration:</strong> screening completion rates,
                  latent tuberculosis handling confidence, hepatitis B protocols, vaccination counselling burden, infectious
                  event attribution after therapy changes, contraception counselling tone and consistency.
                </li>
                <li>
                  <strong className="text-foreground">Access friction forensics:</strong> prior authorization delay
                  distributions, appeal pathways, pharmacist overrides, mandated switches, rebate-influenced preferred
                  product tiers, infusion center quotas, nurse staffing breakpoints.
                </li>
                <li>
                  <strong className="text-foreground">Narrative and evidence testing:</strong> mechanism differentiation
                  comprehension, pairwise forced choices among realistic next-line options—not placebo comparators—adverse-event
                  frame sensitivity, adherence support concept appeal, analogue brand halo or contamination effects.
                </li>
              </ul>
            </div>
          </section>

          <section className="py-12">
            <div className="container-wide max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                Designing studies that survive affiliate review—and still mirror clinical reality
              </h2>
              <p>
                Immunology instruments walk a thin line: sufficiently concrete to emulate true escalation debates without
                becoming non-compliant promotional simulations. Our guides balance behavioral realism with restrained,
                guideline-aligned vignettes and neutral scenario framing so markets stay comparable across affiliates while
                still producing segment sharpness—not generic Likert applause meters.
              </p>
              <p>
                Sample construction intentionally mixes high-volume community anchors with academically influential centers
                when portfolios depend on guideline cascade effects. Weighting aligns to revenue concentration plus strategic
                future pockets where early skepticism could metastasize if left unexamined.
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground">
                Turning insight into coordinated brand, medical, and access motions
              </h3>
              <p>
                Deliverables emphasize operational translation: prioritized account archetypes annotated with bottleneck
                types, escalation trigger lexicons clinicians actually use versus marketing language drift, caregiver or
                patient conversation guides when self-advocacy alters pacing, payer objection trees tied to observable
                administration patterns—not abstract value dossier repetition. Workshops optionally stress-test playbook
                adoption with cross-functional regional leaders to close the last-mile execution gap.
              </p>
            </div>
          </section>

          <RelatedPages
            currentSlug={area}
            relatedCountries={['saudi-arabia', 'uae', 'uk']}
            relatedTherapies={['biologics', 'rare-diseases', 'respiratory']}
          />
        </>
      ) : null}

      {isBiologics ? (
        <>
          <section className="py-12">
            <div className="container-wide max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                What “biologics” means for pharmaceutical market research
              </h2>
              <p>
                In market research terms, a biologic is any complex therapy whose commercial performance depends on{' '}
                <strong className="font-medium text-foreground">manufacturing quality perception</strong>,{' '}
                <strong className="font-medium text-foreground">administration logistics</strong>,{' '}
                <strong className="font-medium text-foreground">longitudinal safety monitoring</strong>, and{' '}
                <strong className="font-medium text-foreground">institutional governance</strong> as much as on
                pivotal trial efficacy endpoints. Oncology monoclonals, fusion proteins, monoclonal antibodies in
                immunology, novel biologic platforms in rare disease, and long-acting hormonal or enzyme therapies each
                carry different stakeholder anxieties; the common thread is that confidence is granular and brittle.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Clinical narratives vs. procurement reality
                </h3>
                <p>
                  Prescribers may articulate scientifically sound preferences while institutions operationalize tenders,
                  quotas, rebate-driven bundles, or pathway protocols that constrain choice. Effective biologics research
                  documents both narratives and traces how they collide at the moment of prescribing, pharmacy review, or
                  patient scheduling—so forecasting models stop treating hospitals as homogeneous.
                </p>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Why biosimilars intensify behavioral measurement
                </h3>
                <p>
                  Interchangeability, extrapolation across indications, post-switch attribution of adverse events, and
                  perceived differences in immunogenicity or device experience can stall substitution even when
                  regulators have cleared the product. Research must isolate which concerns are scientifically grounded vs.
                  habit-based, institutionally amplified, or economically incentivized—and which educational or service
                  investments actually move them within a six- to eighteen-month horizon.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-muted/20">
            <div className="container-wide max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                Modules we typically integrate in biologic and biosimilar engagements
              </h2>
              <p className="text-foreground font-medium">
                Use this checklist internally to clarify scope—you can omit, merge, or expand modules depending on TA,
                molecule class, maturity, or competitive arc.
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                <li>
                  <strong className="text-foreground">Pathway decomposition:</strong> map referral, biopsy or biomarker
                  timing, multidisciplinary tumor boards or rheumatology corridors, initiation workflows, escalation
                  rules, relapse handling, bridging therapy usage, line-of-therapy etiquette.
                </li>
                <li>
                  <strong className="text-foreground">Adoption hurdle coding:</strong> quantify frequency and severity of
                  access delays, infusion chair scarcity, staffing for home administration, reimbursement coding confusion,
                  and lab turnaround anxieties.
                </li>
                <li>
                  <strong className="text-foreground">Biosimilar substitution simulation:</strong> present realistic
                  patient vignettes varied by induction vs. maintenance, comorbidity burden, antibody history, fertility
                  status, payer type, switching incentives, pharmacist notification rules.
                </li>
                <li>
                  <strong className="text-foreground">Economic stakeholder overlay:</strong> triangulate clinician intent with
                  finance, procurement scoring dimensions, retrospective budget impact anecdotes, rebate sensitivity, and—where
                  allowed—pricing bands from desk research.
                </li>
                <li>
                  <strong className="text-foreground">Medical affairs listening layer:</strong> capture knowledge gaps field
                  medical teams should close first, misconceptions that harden quietly in nurse communities, investigator-level skepticism,
                  pharmacovigilance reporting quirks after product transitions.
                </li>
              </ul>
            </div>
          </section>

          <section className="py-12">
            <div className="container-wide max-w-5xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                Designing studies that meet affiliate governance and methodological quality bars
              </h2>
              <p>
                Insight quality for biologics is sensitive to recruitment rigor—mixing tertiary academic hubs with busy
                community practices changes results dramatically. Sampling plans should mirror your revenue concentration while
                preserving enough exploratory depth to anticipate edge-case blockers uncovered by oncology nursing leads or
                rheumatology coordinators in high-volume infusion suites.
              </p>
              <p>
                Questionnaire design avoids leading efficacy superlatives; instead we emphasize behaviorally anchored scales,
                discrete choice experiments when trade-offs mirror real tenders, branching logic keyed to prescribing volume,
                biosimilar exposure history, and institution type so analysis segments remain statistically actionable rather
                than ornamental.
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground">Outputs leadership teams actually use</h3>
              <p>
                Beyond slide-ready findings, engagements often yield segment-level playbooks—for example when a cluster of
                centers grants pharmacists substitution authority, pairing a specific evidence pack with a differentiated
                adherence or monitoring service—so commercial and access leads can synchronize without debating
                interpretation for weeks. Workshops optionally convert findings into scenario-modeled launch or defense roadmaps
                anchored in prioritized accounts.
              </p>
            </div>
          </section>

          <RelatedPages
            currentSlug={area}
            relatedCountries={['saudi-arabia', 'uae', 'uk']}
            relatedTherapies={['oncology', 'immunology', 'rare-diseases']}
          />
        </>
      ) : null}

      <TherapyMarketReferenceGuide areaSlug={area} />

      <FAQSection
        items={therapyFaqs}
        title={
          isBiologics
            ? 'Biologics and biosimilars market research FAQs'
            : isImmunology
              ? 'Immunology market research FAQs'
              : `${titleArea} therapy research FAQs`
        }
      />
      <CTASection variant="therapy" therapyArea={titleArea} />
    </main>
  );
}

