import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { TopicalLinks } from '@/components/healthcare-research/TopicalLinks';
import { buildFAQSchema, buildTherapyPageSchemas } from '@/lib/seo/schemas';

const ALL_THERAPIES = ['oncology', 'diabetes', 'respiratory', 'immunology', 'biologics', 'vaccines', 'cardiology', 'rare-diseases', 'aesthetic-medicine'];
const THERAPY_COUNTRY_MAP: Record<string, Array<{ slug: string; name: string; reason: string }>> = {
  oncology: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'SFDA fast-track oncology pathway and Vision 2030 cancer centres' },
    { slug: 'uae', name: 'UAE', reason: 'DHA and DOH formulary leadership for immuno-oncology launches' },
    { slug: 'egypt', name: 'Egypt', reason: 'Largest oncology patient population in MENA; EDA pricing reform' },
  ],
  diabetes: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'Highest diabetes prevalence in MENA; major GLP-1 market' },
    { slug: 'uae', name: 'UAE', reason: 'Premium private market for new-class diabetes therapies' },
    { slug: 'kuwait', name: 'Kuwait', reason: 'Specialist diabetes centres and high payer access' },
  ],
  respiratory: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'High asthma/COPD burden with growing biologics adoption' },
    { slug: 'uae', name: 'UAE', reason: 'Regional respiratory specialty hubs and formulary innovation' },
  ],
  immunology: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'Specialist immunology centres in Riyadh and Jeddah' },
    { slug: 'uae', name: 'UAE', reason: 'Strong biologics and rheumatology specialist base' },
  ],
  biologics: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'Biosimilar policy and Vision 2030 localisation incentives' },
    { slug: 'uae', name: 'UAE', reason: 'Reference market for specialty biologics in the Gulf' },
  ],
  vaccines: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'Hajj and Umrah immunisation programmes; MOH procurement' },
    { slug: 'uae', name: 'UAE', reason: 'Rapid vaccine policy adoption and adult immunisation' },
  ],
  cardiology: [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'High CVD burden; tertiary cardiac centres' },
    { slug: 'egypt', name: 'Egypt', reason: 'Large CVD patient pool; UHIA reimbursement reform' },
  ],
  'rare-diseases': [
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'High consanguinity-driven rare disease prevalence; SFDA orphan pathway' },
    { slug: 'uae', name: 'UAE', reason: 'Genomics programmes and rare disease access initiatives' },
  ],
  'aesthetic-medicine': [
    { slug: 'uae', name: 'UAE', reason: 'Premium aesthetic medicine market with high per-capita spend' },
    { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'Rapidly growing aesthetic and dermatology market' },
  ],
};

const THERAPY_COPY: Record<string, string> = {
  oncology:
    'Oncology market research programs focused on treatment pathways, biomarker behavior, and evidence expectations across MENA, UK, and Europe.',
  diabetes:
    'Diabetes market intelligence for pharmaceutical teams covering physician behavior, switch drivers, adherence barriers, and access constraints.',
  respiratory:
    'Respiratory market research to support portfolio strategy, stakeholder targeting, and evidence-based engagement planning.',
  immunology:
    'Immunology-focused healthcare research programs for adoption analysis, segmentation, and message optimization.',
  biologics:
    'Biologics and biosimilar market research with physician, payer, and market access stakeholder insight models.',
  vaccines:
    'Vaccine market research for perception, adoption, and communication strategy across key healthcare markets.',
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
    title: 'Immunology Market Research Priorities',
    points: [
      'Assess stakeholder evidence thresholds for long-term immune-mediated therapy positioning.',
      'Map treatment sequencing and switching drivers across specialist segments.',
      'Develop market-ready communication frameworks aligned to local practice reality.',
    ],
  },
  biologics: {
    title: 'Biologics and Biosimilars Market Research Priorities',
    points: [
      'Understand confidence, substitution behavior, and risk perception among prescribing stakeholders.',
      'Evaluate institutional constraints and procurement dynamics affecting adoption speed.',
      'Support competitive differentiation with decision-linked evidence and segment profiles.',
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

export default function TherapyPage() {
  const { area = '' } = useParams<{ area: string }>();
  const titleArea = area.replace(/-/g, ' ');
  const copy =
    THERAPY_COPY[area] ||
    'Therapy-focused pharmaceutical market research with actionable evidence for stakeholder engagement and growth planning.';
  const therapyFaqs = [
    {
      question: `How does BioNixus approach ${titleArea} pharmaceutical market research?`,
      answer:
        `BioNixus combines quantitative and qualitative methods to identify adoption drivers, evidence expectations, and stakeholder barriers specific to ${titleArea} across MENA, UK, and Europe. Programs are designed around the launch, access, or lifecycle decisions your team needs to make — not generic reporting templates. We typically pair physician depth interviews with quantitative surveys, KOL mapping, and payer or formulary research where access strategy is in scope.`,
    },
    {
      question: `Which stakeholder groups are prioritized in ${titleArea} therapy studies?`,
      answer:
        `Stakeholders are selected by real decision influence and pathway relevance — not job titles alone. For ${titleArea} programs this typically includes treating specialists, multidisciplinary team leads, institutional influencers (hospital pharmacy, formulary committee), payer-adjacent participants, and where relevant patient advocacy organisations. We segment by care setting (tertiary vs private network) because decision logic often differs materially.`,
    },
    {
      question: `Can ${titleArea} market research support launch and post-launch optimization?`,
      answer:
        `Yes. Therapy-focused research is most valuable when tied to specific decisions: launch sequencing, segment prioritization, messaging optimization, and access barrier identification. Post-launch, we run wave studies to detect adoption friction early and inform iterative strategy adjustments. Outputs are designed to feed into commercial, medical affairs, and market access workstreams together.`,
    },
    {
      question: `How long does a ${titleArea} market research study typically take?`,
      answer:
        `Most ${titleArea} programs run 6–12 weeks from kickoff to final readout, depending on scope. Single-market qualitative depth interviews can complete in 6–8 weeks; multi-country quantitative segmentation or KOL mapping with global synthesis typically requires 10–14 weeks. Narrow specialties or rare disease patient research may extend timelines for recruitment.`,
    },
    {
      question: `What is the cost range for ${titleArea} pharmaceutical market research?`,
      answer:
        `Custom ${titleArea} studies typically range from $35,000 for a focused single-market qualitative study to $150,000+ for a multi-country segmentation or full launch readiness program. Cost drivers include sample size, therapeutic-area complexity, number of stakeholder types, geographic spread, and translation requirements. We provide transparent milestone billing on every proposal.`,
    },
    {
      question: `Does BioNixus integrate real-world evidence into ${titleArea} research?`,
      answer:
        `Yes. For therapy areas where real-world treatment patterns, adherence, or outcomes are decision-critical, we integrate real-world evidence (claims data, EMR signals, prescription audits) with primary physician and patient research. This dual-source design strengthens the evidence base for HEOR submissions, payer dossiers, and competitive positioning.`,
    },
    {
      question: `How does BioNixus protect data integrity in ${titleArea} studies?`,
      answer:
        `Every program includes recruitment verification (panel cross-checks, screener validation), response consistency monitoring, cleaning rules for speeders/straight-liners, and senior-researcher synthesis review. We document quality steps in every proposal so the assurance model is visible upfront — not assumed.`,
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
        title={`${titleArea} Market Research | BioNixus`}
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
            {titleArea} Market Research
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {copy}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            BioNixus designs {titleArea} programs around the specific launch, access, and lifecycle decisions
            pharmaceutical teams need to make. Visit the{' '}
            <Link to="/healthcare-market-research" className="text-primary underline">
              healthcare market research hub
            </Link>{' '}
            to explore country coverage and service capabilities across MENA, UK, and Europe, or jump to{' '}
            <Link to="/healthcare-market-research/saudi-arabia" className="text-primary underline">
              Saudi Arabia
            </Link>
            ,{' '}
            <Link to="/healthcare-market-research/uae" className="text-primary underline">
              UAE
            </Link>
            , or{' '}
            <Link to="/healthcare-market-research/egypt" className="text-primary underline">
              Egypt
            </Link>{' '}
            country pages for market-specific methodology.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">{content.title}</h2>
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            <p>
              BioNixus designs {titleArea} programs around practical decisions, not generic reporting. Our teams
              combine quantitative and qualitative approaches to reveal where opportunity is strong, where resistance
              appears, and how strategy can be adapted across healthcare markets.
            </p>
            <p>
              For cross-country planning, each study is built with comparable core indicators and local modules so
              leadership teams can scale what works and adapt what must remain market-specific.
            </p>
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

      <section className="py-12">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            Research methods we deploy for {titleArea}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Physician depth interviews</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One-to-one IDIs with treating specialists to uncover prescribing rationale, adoption
                barriers, and unmet needs. Bilingual moderation (Arabic/English) where required for MENA programs.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Quantitative physician surveys</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Online and CATI surveys with verified HCP samples to measure prescribing patterns,
                segmentation, message resonance, and competitive positioning at statistical confidence.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">KOL mapping &amp; advisory boards</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Influence-based KOL identification (not directory pulls), advisory board design,
                and ongoing engagement intelligence to inform medical affairs strategy.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Payer &amp; market access research</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Formulary committee interviews, HTA dossier feedback, willingness-to-pay analysis,
                and reimbursement landscape mapping for {titleArea} therapies.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Patient journey research</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Patient interviews and ethnographic research to map diagnosis, treatment, and
                adherence pathways — especially valuable for chronic and rare disease programs.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-world evidence integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prescription audits, claims data, and EMR signals paired with primary research to
                strengthen HEOR submissions and competitive positioning.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            Common {titleArea} research questions we answer
          </h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Launch readiness:</strong> Is the market ready for our
              {titleArea.startsWith('a') || titleArea.startsWith('e') || titleArea.startsWith('i') || titleArea.startsWith('o') || titleArea.startsWith('u') ? ' new ' : ' new '}
              {titleArea} therapy, and which segments will adopt first?
            </li>
            <li>
              <strong className="text-foreground">Segmentation:</strong> Which physician archetypes drive
              the highest {titleArea} prescribing volume and how should we target them?
            </li>
            <li>
              <strong className="text-foreground">Switch dynamics:</strong> What triggers a switch from
              competitor therapy to ours, and what reverses it?
            </li>
            <li>
              <strong className="text-foreground">Access barriers:</strong> Where in the formulary or
              reimbursement process do {titleArea} therapies stall?
            </li>
            <li>
              <strong className="text-foreground">Messaging:</strong> Which clinical and economic
              messages resonate strongest with prescribers and payers?
            </li>
            <li>
              <strong className="text-foreground">KOL prioritisation:</strong> Which experts have
              genuine influence on {titleArea} adoption — not just title or congress presence?
            </li>
            <li>
              <strong className="text-foreground">Competitive intelligence:</strong> How are competitor
              {titleArea} brands positioned, and where are they vulnerable?
            </li>
          </ul>
        </div>
      </section>

      <FAQSection items={therapyFaqs} title={`${titleArea} therapy research FAQs`} />

      <TopicalLinks
        title={`Country markets for ${titleArea} research`}
        links={(THERAPY_COUNTRY_MAP[area] || []).map((c) => ({
          to: `/healthcare-market-research/${c.slug}`,
          title: `${c.name} ${titleArea} market research`,
          description: c.reason,
        }))}
      />

      <TopicalLinks
        title="Other therapy areas we research"
        variant="pill"
        links={ALL_THERAPIES.filter((t) => t !== area).map((t) => ({
          to: `/healthcare-market-research/therapy/${t}`,
          title: `${t.replace(/-/g, ' ')} market research`,
          description: '',
        }))}
      />

      <CTASection variant="therapy" therapyArea={titleArea} />
    </main>
  );
}

