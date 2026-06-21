import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard } from '@/components/healthcare-research/healthcareResearchUi';
import { getHealthcareMarketResearchServiceConfig } from '@/data/reportConversionConfig';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportInsightGrid } from '@/components/report-premium';
import { ReportPremiumSection } from '@/components/report-premium';
import { buildFAQSchema, buildServicePageSchemas } from '@/lib/seo/schemas';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';
import { SERVICE_EXPANDED_FAQS } from '@/data/seo/serviceExpandedPageContent';

function mergeServiceFaqs(
  service: string,
  base: { question: string; answer: string }[],
): { question: string; answer: string }[] {
  const extra = SERVICE_EXPANDED_FAQS[service];
  if (!extra?.length) return base;
  const seen = new Set(base.map((item) => item.question.toLowerCase()));
  const appended = extra.filter((item) => !seen.has(item.question.toLowerCase()));
  return [...base, ...appended];
}

const SERVICE_COPY: Record<string, string> = {
  'market-access':
    'Market access research for pharma: payer evidence bundles, value narratives, pricing and policy signals, adoption barriers, and launch sequencing—actionable outputs for GCC, UK, and EU5 teams from BioNixus.',
  'physician-insights':
    'Physician insight studies for specialty and primary care pathways: treatment behavior, indication confidence, competitive switching, and messaging tests that refine field, medical, and access plans across MENA and Europe.',
  'kol-mapping':
    'KOL mapping and influence intelligence for healthcare: network analysis, evidence champions, connectivity scoring, and advisory design so medical and commercial teams engage the right experts in each market.',
  'quantitative-research':
    'Quantitative healthcare research with robust sampling, segmentation, MaxDiff/conjoint where needed, adoption metrics, and forecasting-grade analytics for portfolio, launch, and lifecycle decisions.',
  'qualitative-research':
    'Qualitative pharma research through IDIs, expert panels, and focus groups—revealing payer and prescriber rationale, access friction, and behavioral barriers that quantitative trackers miss.',
};

const SERVICE_SECTIONS: Record<string, { title: string; bullets: string[] }> = {
  'market-access': {
    title: 'Market Access Research Delivery Model',
    bullets: [
      'Assess evidence expectations and decision criteria across target stakeholders.',
      'Map access barriers by market and treatment pathway.',
      'Translate findings into practical access strategy priorities.',
    ],
  },
  'physician-insights': {
    title: 'Physician Insight Program Structure',
    bullets: [
      'Quantify prescribing patterns, switch intent, and confidence profiles.',
      'Identify channel and segment-level differences in adoption behavior.',
      'Support focused engagement plans for field and medical teams.',
    ],
  },
  'kol-mapping': {
    title: 'KOL Mapping and Influence Intelligence',
    bullets: [
      'Map influence networks based on real decision impact, not title alone.',
      'Prioritize experts by strategic relevance and stakeholder connectivity.',
      'Guide evidence dissemination and advisory planning.',
    ],
  },
  'quantitative-research': {
    title: 'Quantitative Research Execution Approach',
    bullets: [
      'Design robust sampling frameworks for market-representative signal quality.',
      'Deliver segmented analytics for opportunity and risk prioritization.',
      'Support confidence-led decisions with measurable outputs.',
    ],
  },
  'qualitative-research': {
    title: 'Qualitative Research Execution Approach',
    bullets: [
      'Use targeted IDIs and stakeholder conversations to reveal decision rationale.',
      'Identify barriers and unmet needs not visible in quantitative outputs.',
      'Translate qualitative depth into executable strategy actions.',
    ],
  },
};

const SERVICE_HERO_COPY: Record<string, string> = {
  'market-access':
    'Market access programs are structured to test evidence expectations, payer objections, and institutional pathway constraints before launch-critical commitments.',
  'physician-insights':
    'Physician insight studies are designed to distinguish stated preferences from real prescribing behavior across specialties, settings, and account types.',
  'kol-mapping':
    'KOL mapping programs identify who shapes clinical consensus in practice, where influence is concentrated, and how evidence travels across peer networks.',
  'quantitative-research':
    'Quantitative studies provide measurable confidence on segmentation, demand signals, and adoption risk, with analysis built for decision use rather than reporting volume.',
  'qualitative-research':
    'Qualitative programs surface the rationale behind behavior, helping teams interpret barriers, language sensitivity, and stakeholder decision logic with context.',
};

function getServiceExtraToc(service: string): { href: string; label: string }[] {
  switch (service) {
    case 'market-access':
      return [
        { href: '#market-access-pathway', label: 'Access evidence' },
        { href: '#market-access-modules', label: 'Research modules' },
        { href: '#market-access-execution', label: 'Launch sequencing' },
      ];
    case 'physician-insights':
      return [
        { href: '#physician-insights-pathway', label: 'Prescribing pathways' },
        { href: '#physician-insights-modules', label: 'Research modules' },
        { href: '#physician-insights-execution', label: 'Field alignment' },
      ];
    case 'kol-mapping':
      return [
        { href: '#kol-mapping-pathway', label: 'Influence mapping' },
        { href: '#kol-mapping-modules', label: 'Research modules' },
        { href: '#kol-mapping-execution', label: 'Engagement planning' },
      ];
    case 'quantitative-research':
      return [
        { href: '#quantitative-research-pathway', label: 'Sampling design' },
        { href: '#quantitative-research-modules', label: 'Research modules' },
        { href: '#quantitative-research-execution', label: 'Governance handoff' },
      ];
    case 'qualitative-research':
      return [
        { href: '#qualitative-research-pathway', label: 'Decision forensics' },
        { href: '#qualitative-research-modules', label: 'Research modules' },
        { href: '#qualitative-research-execution', label: 'Workshop translation' },
      ];
    default:
      return [];
  }
}

const SERVICES_WITH_DEEP_DIVES = new Set([
  'market-access',
  'physician-insights',
  'kol-mapping',
  'quantitative-research',
  'qualitative-research',
]);

export default function ServicePage() {
  const { service = '' } = useParams<{ service: string }>();
  const titleService = service.replace(/-/g, ' ');
  const copy =
    SERVICE_COPY[service] ||
    'Service-specific healthcare market research programs for pharmaceutical strategy and execution decisions.';
  const serviceFaqs = mergeServiceFaqs(service, [
    {
      question: `What outcomes does the ${titleService} service support?`,
      answer:
        'This service supports practical decision outcomes such as launch readiness, stakeholder prioritization, evidence planning, and strategy refinement across country-specific healthcare markets.',
    },
    {
      question: `How does BioNixus align ${titleService} research with local market context?`,
      answer:
        'BioNixus tailors design, recruitment, and interpretation to local institutional realities so findings remain actionable rather than generic across MENA, UK, and Europe.',
    },
    {
      question: `Can the ${titleService} service be integrated with quantitative and qualitative programs?`,
      answer:
        'Yes. Service-specific programs are often integrated into broader quantitative and qualitative research plans to provide both measurable confidence and deeper decision rationale.',
    },
  ]);
  const jsonLd = [...buildServicePageSchemas(service, copy), buildFAQSchema(serviceFaqs)];
  const content = SERVICE_SECTIONS[service] || {
    title: `${titleService} Service Delivery Model`,
    bullets: [
      'Align research design to commercial, medical, and access decisions.',
      'Produce decision-ready outputs with clear implementation pathways.',
      'Integrate findings into wider cross-market strategy programs.',
    ],
  };
  const heroCopy =
    SERVICE_HERO_COPY[service] ||
    'BioNixus provides service-specific healthcare research programs that connect evidence generation to practical execution decisions.';

  const conversionConfig = getHealthcareMarketResearchServiceConfig(titleService, service);
  const faqSectionId = `healthcare-mr-service-${service}-faq`;
  const displayTitle = `${titleService.charAt(0).toUpperCase() + titleService.slice(1)} research service`;

  return (
    <>
      <SEOHead
        title={`${titleService} Healthcare Research Service | BioNixus`}
        description={copy}
        canonical={`/healthcare-market-research/services/${service}`}
        jsonLd={jsonLd}
      />

      <HealthcareResearchPageShell
        progressId={`healthcare-mr-service-${service}`}
        config={conversionConfig}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleService} Service`, href: `/healthcare-market-research/services/${service}` },
        ]}
        hero={{
          title: displayTitle,
          therapySlug: service,
          statsCaption: '',
          stats: [
            { value: 'Quant + qual', label: 'Integrated methods' },
            { value: '17+', label: 'Markets covered' },
            { value: 'ESOMAR', label: 'Governance standard' },
          ],
          description: (
            <p>
              {heroCopy} Explore the broader{' '}
              <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                healthcare market research hub
              </Link>{' '}
              for regional and therapy-specific context, and review structured therapy outputs in the{' '}
              <Link to="/market-reports" className="text-primary font-medium hover:underline">
                market reports hub
              </Link>
              .
            </p>
          ),
        }}
        tocItems={[
          { href: '#delivery-model', label: 'Delivery model' },
          ...getServiceExtraToc(service),
          ...(SERVICES_WITH_DEEP_DIVES.has(service)
            ? [{ href: '#deep-dives', label: 'Related guides' }]
            : []),
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: `${titleService} service FAQs`,
          items: serviceFaqs,
        }}
      >
        <ReportPremiumSection id="delivery-model" title={content.title} variant="cream">
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            <p>
              Each service module is mapped to a concrete decision stage: opportunity framing, segment prioritization,
              execution planning, and post-launch optimization.
            </p>
            <p>
              Programs can run independently or within broader country and therapy workstreams so evidence remains
              aligned across commercial, medical, and market-access stakeholders.
            </p>
            {service === 'physician-insights' ? (
              <>
                <p>
                  Physician insight programmes distinguish{' '}
                  <strong className="font-medium text-foreground">stated preference</strong> from{' '}
                  <strong className="font-medium text-foreground">treated-in-practice behaviour</strong> by pairing
                  volume-stratified quotas with operational friction diagnostics—infusion capacity, monitoring burden,
                  prior authorisation fatigue—that explain why confident specialists still maintain suboptimal regimens.
                </p>
                <p>
                  Wave sequencing aligns to formulary and procurement calendars so insight arrives before message
                  scale-up, with explicit handoff gates linking segment dossiers to access objection libraries on the{' '}
                  <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                    market access service
                  </Link>{' '}
                  and quant validation modules when hybrid designs are required.
                </p>
              </>
            ) : null}
            {service === 'kol-mapping' ? (
              <>
                <p>
                  KOL mapping prioritises{' '}
                  <strong className="font-medium text-foreground">decision leverage</strong>—who moves initiation,
                  switching, and protocol adoption—over connectivity aesthetics that compliance teams cannot action.
                  Influence tiers connect to congress, advisory, and MSL calendars so engagement spend follows behavioural
                  evidence rather than ceremonial prominence.
                </p>
                <p>
                  GCC referral gravity and European centre clustering diverge materially; harmonised taxonomies enable
                  portfolio governance while local modules preserve institution types where consensus actually binds
                  uptake. See also{' '}
                  <Link to="/kol-mapping-saudi-arabia-oncology" className="text-primary underline">
                    oncology KOL mapping in Saudi Arabia
                  </Link>{' '}
                  for a country-specific example.
                </p>
              </>
            ) : null}
            {service === 'quantitative-research' ? (
              <>
                <p>
                  Quantitative engagements align{' '}
                  <strong className="font-medium text-foreground">powering and quota design</strong> to subgroup
                  decisions that move revenue and access—not global headline significance that leaves decisive segments
                  unresolved. Trade-off modules respect cognitive load budgets clinicians and payer-adjacent stakeholders
                  can realistically complete under ward and procurement time pressure.
                </p>
                <p>
                  Deliverables bifurcate into leadership synthesis and reproducible appendix layers—questionnaire
                  versioning, quota logs, dashboard codebooks—for governance and alliance diligence. The{' '}
                  <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                    quantitative methodology guide
                  </Link>{' '}
                  documents sampling and forecast-bridge standards BioNixus applies across MENA, the UK, and EU5.
                </p>
              </>
            ) : null}
            {service === 'qualitative-research' ? (
              <>
                <p>
                  Qualitative modules apply{' '}
                  <strong className="font-medium text-foreground">neutral moderation</strong>, explicit saturation
                  criteria, and probing ladders that surface operational specifics when clinicians retreat to
                  platitudes—substitution habits, stewardship interactions, access friction subtext quantitative
                  trackers miss.
                </p>
                <p>
                  Multi-country programmes harmonise thematic codes for regional roll-ups while tagging irreducible
                  cultural divergences affiliates must respect. Optional workshops translate objection hierarchies into
                  HEOR refinement priorities and medical education arcs medical affairs can execute within the same
                  planning cycle.
                </p>
              </>
            ) : null}
          </div>
          <ReportInsightGrid items={content.bullets} />
        </ReportPremiumSection>

        {service === 'market-access' ? (
          <>
            <ReportPremiumSection
              id="market-access-pathway"
              title="Market access research: where dossier claims stop converting to funded uptake"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Market access programmes fail when willingness-to-pay exercises ignore the procedural calendars,
                  comparator acceptability rituals, and budget-impact skepticism that gate real uptake. BioNixus maps{' '}
                  <strong className="font-medium text-foreground">payer objections</strong>,{' '}
                  <strong className="font-medium text-foreground">formulary stewardship behaviour</strong>, and{' '}
                  <strong className="font-medium text-foreground">tender scoring dimensions</strong>—so HEOR, medical,
                  and brand teams refine dossiers and launch sequencing with behavioural realism before submission.
                </p>
                <p>
                  GCC contexts often feature consolidated procurement horizons and pharmacist substitution overlays; the
                  UK applies NICE-aligned cost-effectiveness rituals; EU5 markets fragment by national HTA, rebate, and
                  regional autonomy. Comparable survey cores enable regional governance; local modules preserve the access
                  realism that determines whether launch spend matches committee calendars.
                </p>
                <p>
                  Link to{' '}
                  <Link to="/gcc-market-access-guide" className="text-primary underline">
                    GCC market access guide
                  </Link>
                  ,{' '}
                  <Link to="/heor-consulting-saudi-arabia" className="text-primary underline">
                    HEOR consulting in Saudi Arabia
                  </Link>
                  , and{' '}
                  <Link to="/uae-pricing-reimbursement-strategy" className="text-primary underline">
                    UAE pricing and reimbursement strategy
                  </Link>{' '}
                  when Gulf procurement or SFDA economic evaluation overlays dominate the decision.
                </p>
                <p>
                  Iterative loops connect qualitative payer hesitations—extrapolation realism, subgroup fragility,
                  adherence doubts—to targeted HEOR refinement instead of static models misaligned with live stakeholder
                  discourse encountered in interviews.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="market-access-modules"
              title="Modules BioNixus integrates for market access engagements"
              variant="muted"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>
                    <strong className="text-foreground">Payer and authority objection forensics:</strong> ranked
                    hesitations by decision stage, comparator acceptability sensitivities, and budget-impact skepticism
                    modalities that determine deferral or rejection.
                  </li>
                  <li>
                    <strong className="text-foreground">Stakeholder and veto mapping:</strong> formulary committees, HTA
                    reviewers, hospital procurement leads, and clinician champions who translate dossier claims into
                    protocol behaviour—not ceremonial titles alone.
                  </li>
                  <li>
                    <strong className="text-foreground">Pricing and narrative testing:</strong> value communication,
                    outcomes-based access discussions, and tender scenario notes where institutional procurement overlays
                    medical decision-making.
                  </li>
                  <li>
                    <strong className="text-foreground">Launch sequencing alignment:</strong> country order, evidence
                    sequencing, and affiliate resource allocation tied to registration timing, formulary cycles, and
                    procurement windows that actually bind uptake.
                  </li>
                </ul>
                <p>
                  Deliverables include objection libraries, evidence-gap maps, pricing narrative tests, and executive
                  summaries linking access risks to commercial KPI owners—outputs leadership teams can execute without
                  weeks of reinterpretation across MENA, the UK, and EU5.
                </p>
                <p>
                  For multinational affiliates, BioNixus harmonises objection taxonomies and procedural calendars so
                  regional roll-ups remain comparable while preserving the local access realism that determines whether
                  launch sequencing matches formulary reconsideration rhythms, tender windows, and HTA submission
                  deadlines in each priority market.
                </p>
                <p>
                  Access research should also stress-test how medical education, patient support, and field medical
                  narratives align with payer-facing value stories. When clinical champions articulate benefits that
                  committees cannot fund under current scoring rules, listing delays persist despite strong efficacy data.
                  BioNixus maps this alignment gap before dossier finalisation.
                </p>
                <p>
                  For Gulf portfolios, pair this service with{' '}
                  <Link to="/healthcare-market-research/saudi-arabia" className="text-primary underline">
                    Saudi Arabia healthcare market research
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/uae" className="text-primary underline">
                    UAE healthcare market research
                  </Link>
                  , and therapy-specific modules on the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  so access, medical, and commercial teams share one behavioural evidence base.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="market-access-execution"
              title="From access insight to affiliate execution: sequencing launches without wasted field spend"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Market access research earns its budget when it changes{' '}
                  <strong className="font-medium text-foreground">country order</strong>,{' '}
                  <strong className="font-medium text-foreground">evidence sequencing</strong>, and{' '}
                  <strong className="font-medium text-foreground">affiliate resource allocation</strong>—not when it
                  produces another payer slide deck that affiliates reinterpret for weeks. BioNixus workshops optionally
                  translate objection libraries into explicit launch gates: which markets can absorb field investment now,
                  which require HEOR refinement first, and which should wait for registration or procurement calendar
                  alignment.
                </p>
                <p>
                  In Gulf corridors, consolidated procurement and SFDA economic evaluation overlays mean access insight
                  must connect to tender defence and pricing narrative tests before brand teams scale messaging. UK and EU5
                  affiliates benefit from comparator acceptability maps and subgroup fragility registers that tell medical
                  affairs exactly which evidence gaps to close before resubmission—not generic “strengthen the dossier”
                  guidance.
                </p>
                <p>
                  Pair execution planning with{' '}
                  <Link to="/healthcare-market-research/services/physician-insights" className="text-primary underline">
                    physician insight studies
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/qualitative-research" className="text-primary underline">
                    qualitative payer forensics
                  </Link>
                  , and country reports on the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  so access, medical, and commercial teams share one behavioural evidence base rather than three
                  incompatible storylines.
                </p>
              </div>
            </ReportPremiumSection>
          </>
        ) : null}

        {service === 'physician-insights' ? (
          <>
            <ReportPremiumSection
              id="physician-insights-pathway"
              title="Physician insight research: where stated preference stops converting to prescribing behaviour"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Physician insight programmes fail when Likert optimism is mistaken for realised uptake.
                  BioNixus decomposes{' '}
                  <strong className="font-medium text-foreground">initiation and switch intent</strong>,{' '}
                  <strong className="font-medium text-foreground">confidence by patient segment</strong>, and{' '}
                  <strong className="font-medium text-foreground">operational frictions</strong>—infusion capacity,
                  monitoring burden, prior authorisation fatigue, pharmacist substitution—that separate stated preference
                  from treated-in-practice populations across MENA, the UK, and Europe.
                </p>
                <p>
                  Quotas reflect prescribing volume concentration, corridor type, and setting mix rather than title
                  alone. Branching logic keys off analogue exposure, biosimilar pressure, and institution type so
                  segments remain statistically actionable for field, medical, and access teams.
                </p>
                <p>
                  Pair with{' '}
                  <Link to="/healthcare-market-research/services/quantitative-research" className="text-primary underline">
                    quantitative healthcare research
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/qualitative-research" className="text-primary underline">
                    qualitative forensics
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when hybrid designs must connect measurable confidence to decision rationale.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="physician-insights-modules"
              title="Modules BioNixus integrates for physician insight engagements"
              variant="muted"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>
                    <strong className="text-foreground">Prescribing inertia and switch forensics:</strong> where
                    suboptimal regimens persist after partial response, and which operational levers block escalation.
                  </li>
                  <li>
                    <strong className="text-foreground">Segmentation by volume and corridor:</strong> tertiary hub
                    versus community anchor, public–private routing, and procedural intersections that shape initiation.
                  </li>
                  <li>
                    <strong className="text-foreground">Message and objection testing:</strong> pairwise comparisons
                    among plausible next-line options with objection coding tied to decision stage—not promotional
                    superlatives.
                  </li>
                  <li>
                    <strong className="text-foreground">Forecast bridges:</strong> intent scales tempered with inertia
                    diagnostics, infusion capacity overlays, and analogue cohort harmonisation for governance-ready
                    adoption envelopes.
                  </li>
                </ul>
                <p>
                  Deliverables include segment dossiers, objection hierarchies, medical education choke-point maps, and
                  executive summaries linking evidence gaps to KPI owners—outputs brand and medical affairs teams can
                  execute without weeks of reinterpretation.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="physician-insights-execution"
              title="From physician insight to field and medical alignment: closing the execution gap"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Physician insight research earns its budget when it changes{' '}
                  <strong className="font-medium text-foreground">call prioritisation</strong>,{' '}
                  <strong className="font-medium text-foreground">medical education sequencing</strong>, and{' '}
                  <strong className="font-medium text-foreground">access narrative tests</strong>—not when it produces
                  another segmentation deck affiliates reinterpret for weeks. BioNixus workshops optionally translate
                  segment dossiers into explicit field gates: which corridors warrant MSL depth now, which require
                  infusion-capacity or monitoring-burden messaging first, and which should wait until formulary or
                  procurement calendars align.
                </p>
                <p>
                  In Gulf markets, public–private routing and pharmacist substitution overlays mean physician confidence
                  must connect to tender defence and step-therapy narratives before brand teams scale messaging. UK and
                  EU5 affiliates benefit from inertia registers and objection hierarchies that tell medical affairs
                  exactly which operational frictions to address in the next advisory cycle—not generic “increase
                  awareness” guidance disconnected from who initiates versus who maintains therapy in practice.
                </p>
                <p>
                  Pair execution planning with{' '}
                  <Link to="/specialist-physician-panel-uae" className="text-primary underline">
                    specialist physician panels in the UAE
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/kol-mapping" className="text-primary underline">
                    KOL mapping
                  </Link>
                  , and country reports on the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  so field, medical, and access teams share one behavioural evidence base rather than three incompatible
                  storylines.
                </p>
              </div>
            </ReportPremiumSection>
          </>
        ) : null}

        {service === 'kol-mapping' ? (
          <>
            <ReportPremiumSection
              id="kol-mapping-pathway"
              title="KOL mapping: influence that moves consensus—not speaker bureau frequency alone"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  KOL programmes misallocate resources when connectivity graphs reward ceremonial prominence over
                  decision leverage. BioNixus maps{' '}
                  <strong className="font-medium text-foreground">guideline footprints</strong>,{' '}
                  <strong className="font-medium text-foreground">referral acceleration</strong>, and{' '}
                  <strong className="font-medium text-foreground">multidisciplinary convening centrality</strong> relative
                  to the bottlenecks that gate initiation, switching, and protocol adoption in each market.
                </p>
                <p>
                  True influence merges formal roles with informal trust propagation: biopsy referral accelerators,
                  protocol veto players, pharmacist opinion leaders translating substitution confidence, and regional
                  gravity wells that cascade guideline behaviour. Outputs elevate advisory blueprinting and investigator
                  strategy where trials intersect commercial arcs.
                </p>
                <p>
                  Connect with{' '}
                  <Link to="/kol-mapping-saudi-arabia-oncology" className="text-primary underline">
                    oncology KOL mapping in Saudi Arabia
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/physician-insights" className="text-primary underline">
                    physician insight studies
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when influence maps must explain why consensus shifts—or stalls—in specific institution types.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="kol-mapping-modules"
              title="Modules BioNixus integrates for KOL mapping engagements"
              variant="muted"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>
                    <strong className="text-foreground">Influence network forensics:</strong> mentorship gravity,
                    trainee spillover, multidisciplinary board dynamics, and connectivity resilient to spokesperson
                    fatigue.
                  </li>
                  <li>
                    <strong className="text-foreground">Decision-relevant tiering:</strong> experts prioritised by
                    initiation, switching, and protocol adoption influence—not title or publication volume alone.
                  </li>
                  <li>
                    <strong className="text-foreground">Advisory and congress planning:</strong> roster recommendations
                    linked to specific decision types medical affairs and commercial teams must align on.
                  </li>
                  <li>
                    <strong className="text-foreground">Ethical documentation:</strong> behavioural observation without
                    inducement distortions; transparency for compliance teams outweighs vanity network aesthetics.
                  </li>
                </ul>
                <p>
                  Deliverables include influence maps annotated by decision relevance, advisory roster recommendations,
                  and workshop options to translate maps into medical and commercial action plans across GCC and
                  European affiliates.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="kol-mapping-execution"
              title="From influence maps to congress and advisory execution: prioritising engagement spend"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  KOL mapping earns its budget when it changes{' '}
                  <strong className="font-medium text-foreground">advisory roster composition</strong>,{' '}
                  <strong className="font-medium text-foreground">MSL territory design</strong>, and{' '}
                  <strong className="font-medium text-foreground">congress engagement priorities</strong>—not when it
                  produces connectivity visuals that compliance teams cannot action. BioNixus links tiered experts to
                  specific decision types—initiation, switching, protocol adoption—so medical affairs and commercial
                  teams align on who must move consensus in the next planning cycle versus who amplifies messages
                  already settled.
                </p>
                <p>
                  GCC referral gravity and European centre-of-excellence clustering diverge materially; harmonised
                  taxonomies enable portfolio governance while local modules preserve the institution types where
                  influence actually binds uptake. Investigator strategy and trial-site selection intersect commercial
                  arcs when launch and evidence generation overlap—maps that ignore that intersection misallocate
                  engagement spend toward ceremonial prominence.
                </p>
                <p>
                  Connect execution planning with{' '}
                  <Link to="/msl-insight-research-middle-east" className="text-primary underline">
                    MSL insight research in the Middle East
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/physician-insights" className="text-primary underline">
                    physician insight studies
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when influence intelligence must explain why consensus shifts—or stalls—in specific hospital and
                  procurement contexts.
                </p>
                <p>
                  Investigator and trial-site overlays can be scoped when launch and evidence generation intersect, so
                  engagement plans do not treat clinical development and commercial influence as separate silos.
                </p>
              </div>
            </ReportPremiumSection>
          </>
        ) : null}

        {service === 'quantitative-research' ? (
          <>
            <ReportPremiumSection
              id="quantitative-research-pathway"
              title="Quantitative research: sampling and inference built for decisions—not reporting volume"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Quantitative programmes fail when global headline significance masks unresolved segment decisions.
                  BioNixus aligns{' '}
                  <strong className="font-medium text-foreground">powering</strong>,{' '}
                  <strong className="font-medium text-foreground">quota integrity</strong>, and{' '}
                  <strong className="font-medium text-foreground">trade-off design</strong> to the subgroups that move
                  revenue and access—MaxDiff or discrete choice when messaging and tender scoring trade-offs mirror real
                  decisions, not factorial explosions clinicians abandon midstream.
                </p>
                <p>
                  Adaptive quota choreography rescues timelines when recruiting friction spikes without silently biasing
                  inference. Forecast bridges stress-test elasticity of behavioural intent versus operational ceilings—
                  preventing exaggerated adoption ramps affiliates cannot defend in governance reviews.
                </p>
                <p>
                  See the{' '}
                  <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                    quantitative healthcare market research methodology guide
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/qualitative-research" className="text-primary underline">
                    qualitative research service
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when sequential hybrids must rescue unstable segment hypotheses.
                </p>
                <p>
                  Longitudinal tracker modules can reuse harmonised variable dictionaries when affiliates need
                  consistent segment definitions across launch-readiness and post-launch monitoring waves—reducing
                  rework when governance teams compare cohorts year over year.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="quantitative-research-modules"
              title="Modules BioNixus integrates for quantitative engagements"
              variant="muted"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>
                    <strong className="text-foreground">Sampling and segmentation:</strong> robust frameworks for
                    market-representative signal quality with volume-stratified quotas in specialty markets.
                  </li>
                  <li>
                    <strong className="text-foreground">Trade-off and choice modules:</strong> MaxDiff, DCE, and pairwise
                    designs anchored to clinically realistic vignettes and procurement scoring rituals.
                  </li>
                  <li>
                    <strong className="text-foreground">Forecast and adoption bridges:</strong> intent tempered with
                    inertia diagnostics, capacity overlays, and analogue harmonisation for governance-ready scenarios.
                  </li>
                  <li>
                    <strong className="text-foreground">Governance artefacts:</strong> leadership synthesis plus
                    reproducible appendix layers—questionnaire versioning, quota logs, dashboard codebooks—for alliance
                    diligence.
                  </li>
                </ul>
                <p>
                  Deliverables emphasise segmented analytics for opportunity and risk prioritisation, with measurable
                  outputs leadership teams can execute across MENA, the UK, and EU5 without reinterpretation marathons.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="quantitative-research-execution"
              title="From quant outputs to governance-ready decisions: reproducibility affiliates can defend"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Quantitative research earns its budget when leadership can defend{' '}
                  <strong className="font-medium text-foreground">segment prioritisation</strong>,{' '}
                  <strong className="font-medium text-foreground">forecast assumptions</strong>, and{' '}
                  <strong className="font-medium text-foreground">message trade-off rankings</strong> in governance
                  reviews—not when dashboards accumulate metrics no affiliate acts on. BioNixus pairs concise executive
                  synthesis with reproducible appendix layers—questionnaire versioning, quota logs, dashboard codebooks—
                  so analytics teams and alliance partners can audit inference without weeks of reconstruction.
                </p>
                <p>
                  Adaptive quota choreography and forecast bridges stress-test elasticity of intent versus operational
                  ceilings—infusion capacity, monitoring burden, prior authorisation fatigue—preventing exaggerated
                  adoption ramps that access and field teams cannot execute. When subgroup decisions remain unresolved,
                  sequential qual modules rescue inference before costly quant reruns amplify spend without changing
                  the commercial question.
                </p>
                <p>
                  Align handoff with{' '}
                  <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                    quantitative methodology standards
                  </Link>
                  ,{' '}
                  <Link to="/brand-tracking-pharma-gcc" className="text-primary underline">
                    brand tracking in the GCC
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when longitudinal tracking must connect to the same variable dictionaries used in launch-readiness
                  waves.
                </p>
                <p>
                  ESOMAR-aligned field governance, multilingual recruitment, and appendix versioning are standard on
                  quant engagements so analytics and compliance teams can audit quota integrity without reconstructing
                  methodology from presentation slides alone.
                </p>
              </div>
            </ReportPremiumSection>
          </>
        ) : null}

        {service === 'qualitative-research' ? (
          <>
            <ReportPremiumSection
              id="qualitative-research-pathway"
              title="Qualitative research: decision rationale quantitative trackers cannot recover alone"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Qualitative depth earns its budget when it changes inference—not when it decorates flat quant
                  distributions. BioNixus uses IDIs, triads, and structured panels with{' '}
                  <strong className="font-medium text-foreground">neutral moderation</strong>,{' '}
                  <strong className="font-medium text-foreground">explicit saturation criteria</strong>, and{' '}
                  <strong className="font-medium text-foreground">probing ladders</strong> that surface stewardship
                  interactions, covert substitution habits, and access friction subtext quantitative instruments miss.
                </p>
                <p>
                  When flat distributions conceal polarised camps or vignettes mis-specify clinically realistic
                  alternatives, structured qual rescues inference before flawed quant reruns amplify cost. Multi-country
                  programmes harmonise thematic codes while tagging irreducible cultural divergences affiliates must
                  respect.
                </p>
                <p>
                  Pair with{' '}
                  <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                    market access research
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/physician-insights" className="text-primary underline">
                    physician insight studies
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when payer-adjacent depth must inform HEOR refinement and pricing narrative tests.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="qualitative-research-modules"
              title="Modules BioNixus integrates for qualitative engagements"
              variant="muted"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>
                    <strong className="text-foreground">Payer and access forensics:</strong> skepticism patterns that
                    should inform dossier sequencing, tender defence, and subgroup acceptability tests.
                  </li>
                  <li>
                    <strong className="text-foreground">Pathway and vignette walkthroughs:</strong> chart-stimulated
                    recall and operational specifics when clinicians retreat to platitudes.
                  </li>
                  <li>
                    <strong className="text-foreground">Theme libraries linked to quant segments:</strong> objection
                    hierarchies with illustrative quotes graded for governance and KPI ownership tables.
                  </li>
                  <li>
                    <strong className="text-foreground">Workshop facilitation:</strong> optional sessions translating
                    qual depth into medical education arcs and brand message tests affiliates can execute.
                  </li>
                </ul>
                <p>
                  Deliverables connect qualitative findings to medical, brand, and access owners with explicit linkage
                  tables—so depth converts to action rather than anecdote archives.
                </p>
              </div>
            </ReportPremiumSection>

            <ReportPremiumSection
              id="qualitative-research-execution"
              title="From qual depth to workshop-ready action: translating themes without losing nuance"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Qualitative research earns its budget when themes change{' '}
                  <strong className="font-medium text-foreground">HEOR refinement priorities</strong>,{' '}
                  <strong className="font-medium text-foreground">medical education arcs</strong>, and{' '}
                  <strong className="font-medium text-foreground">pricing narrative tests</strong>—not when quote decks
                  accumulate without KPI owners. BioNixus optional workshops translate objection hierarchies and pathway
                  walkthroughs into explicit next steps: which access objections require dossier sequencing changes, which
                  operational frictions medical affairs should address in advisory design, and which message tests quant
                  should validate before field scale-up.
                </p>
                <p>
                  Multi-country programmes harmonise thematic codes for regional roll-ups while tagging irreducible
                  cultural divergences affiliates must respect—avoiding false universal narratives that erode local
                  credibility. Payer-adjacent depth interviews isolate skepticism patterns that masquerade as clinical
                  caution, informing tender defence and subgroup acceptability tests before submission cycles close.
                </p>
                <p>
                  Pair workshop translation with{' '}
                  <Link to="/patient-journey-research-gcc" className="text-primary underline">
                    patient journey research in the GCC
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/market-access" className="text-primary underline">
                    market access research
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary underline">
                    healthcare market research hub
                  </Link>{' '}
                  when qual depth must inform access, medical, and brand planning in the same governance cycle.
                </p>
                <p>
                  Chart-stimulated recall and pathway walkthroughs can be scoped when clinicians default to guideline
                  platitudes—surfacing where operational specifics, not abstract efficacy claims, determine the next
                  therapeutic step in busy ward and clinic settings.
                </p>
                <p>
                  ESOMAR-aligned moderation standards, multilingual field protocols, and explicit saturation
                  documentation are included so medical governance and procurement reviewers can trust thematic
                  stability—not informal “we spoke to enough people” assertions—across MENA, UK, and EU5 programmes.
                </p>
              </div>
            </ReportPremiumSection>
          </>
        ) : null}

        {SERVICES_WITH_DEEP_DIVES.has(service) && (
          <ReportPremiumSection
            id="deep-dives"
            title={
              service === 'market-access'
                ? 'Deep dive: market access guides'
                : service === 'physician-insights'
                  ? 'Deep dive: physician insights'
                  : service === 'kol-mapping'
                    ? 'Deep dive: KOL intelligence'
                    : service === 'quantitative-research'
                      ? 'Deep dive: quantitative methods'
                      : 'Deep dive: qualitative methods'
            }
            variant="muted"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {service === 'market-access' && (
                <>
                  <HealthcareNavCard
                    to="/blog/market-access-strategy-uae"
                    title="UAE market access strategy"
                    description="Navigate DOH, DHA, and MOHAP formulary inclusion."
                  />
                  <HealthcareNavCard
                    to="/blog/nice-hta-evidence-requirements-guide"
                    title="NICE HTA evidence guide"
                    description="Navigating UK cost-effectiveness and QALY thresholds."
                  />
                </>
              )}
              {service === 'kol-mapping' && (
                <>
                  <HealthcareNavCard
                    to="/blog/kol-mapping-pharma-middle-east"
                    title="GCC KOL mapping guide"
                    description="Identifying true clinical influencers in the Middle East."
                  />
                  <HealthcareNavCard
                    to="/blog/competitive-intelligence-pharma-gcc"
                    title="Pharma competitive intelligence"
                    description="Tracking competitor formularies and Medical Affairs activities."
                  />
                </>
              )}
              {service === 'physician-insights' && (
                <>
                  <HealthcareNavCard
                    to="/blog/quantitative-market-research-and-market-access"
                    title="Quantitative research and market access"
                    description="How robust quant underpins access and forecasting decisions."
                  />
                  <HealthcareNavCard
                    to="/blog/healthcare-market-research-methodologies-gcc"
                    title="GCC research methodologies"
                    description="Best practices for physician fieldwork in the region."
                  />
                </>
              )}
              {service === 'quantitative-research' && (
                <>
                  <HealthcareNavCard
                    to="/quantitative-healthcare-market-research"
                    title="Quantitative methodology guide"
                    description="Sampling, trade-off design, and forecast-bridge standards."
                  />
                  <HealthcareNavCard
                    to="/blog/quantitative-market-research-and-market-access"
                    title="Quant and market access"
                    description="Connecting statistical rigour to access outcomes."
                  />
                </>
              )}
              {service === 'qualitative-research' && (
                <>
                  <HealthcareNavCard
                    to="/blog/patient-journey-mapping-saudi-arabia"
                    title="Saudi patient journey mapping"
                    description="Understanding culturally nuanced treatment pathways."
                  />
                  <HealthcareNavCard
                    to="/blog/healthcare-market-research-methodologies-gcc"
                    title="GCC research methodologies"
                    description="Best practices for IDIs and focus groups in the region."
                  />
                </>
              )}
            </div>
          </ReportPremiumSection>
        )}

        <ServiceMarketReferenceGuide serviceSlug={service} />
        <ReportMidPageCta config={conversionConfig} className="my-4" />
      </HealthcareResearchPageShell>
    </>
  );
}

