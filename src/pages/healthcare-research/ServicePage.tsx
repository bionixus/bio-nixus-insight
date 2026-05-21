import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { TopicalLinks } from '@/components/healthcare-research/TopicalLinks';
import { buildFAQSchema, buildServicePageSchemas } from '@/lib/seo/schemas';

const ALL_SERVICES = ['market-access', 'physician-insights', 'kol-mapping', 'quantitative-research', 'qualitative-research'];
const SERVICE_COUNTRY_LINKS = [
  { slug: 'saudi-arabia', name: 'Saudi Arabia', reason: 'SFDA-aware design, Arabic fieldwork, hospital stakeholder access' },
  { slug: 'uae', name: 'UAE', reason: 'DHA/DOH/MOHAP regulatory awareness, bilingual execution' },
  { slug: 'egypt', name: 'Egypt', reason: 'EDA-aware design, UHIA reimbursement landscape, large patient pool' },
  { slug: 'kuwait', name: 'Kuwait', reason: 'KDFA regulatory context and high payer access' },
];

const SERVICE_COPY: Record<string, string> = {
  'market-access':
    'Market access research for payer evidence planning, value communication, and practical adoption strategy development.',
  'physician-insights':
    'Physician insight studies for treatment behavior, perception analysis, and stakeholder engagement refinement.',
  'kol-mapping':
    'KOL mapping programs to identify influence networks and prioritize expert engagement strategies.',
  'quantitative-research':
    'Quantitative market research including segmentation, adoption measurement, and data-backed forecasting support.',
  'qualitative-research':
    'Qualitative healthcare research including IDIs and focus groups to uncover decision logic and barriers.',
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

export default function ServicePage() {
  const { service = '' } = useParams<{ service: string }>();
  const titleService = service.replace(/-/g, ' ');
  const copy =
    SERVICE_COPY[service] ||
    'Service-specific healthcare market research programs for pharmaceutical strategy and execution decisions.';
  const serviceFaqs = [
    {
      question: `What outcomes does the ${titleService} service support?`,
      answer:
        `BioNixus ${titleService} programs support practical decision outcomes including launch readiness, stakeholder prioritization, evidence planning, market access strategy, and post-launch optimization. Every engagement is scoped against specific business questions — segmentation, message testing, formulary access, or competitive positioning — rather than generic insight reporting.`,
    },
    {
      question: `How does BioNixus align ${titleService} research with local market context?`,
      answer:
        `BioNixus tailors design, recruitment, fieldwork, and interpretation to local institutional realities. For MENA markets this means Arabic-English bilingual execution, regulator-aware methodology (SFDA in KSA, EDA in Egypt, DHA/DOH/MOHAP in UAE), and stakeholder lists built from real decision influence rather than directory pulls.`,
    },
    {
      question: `Can the ${titleService} service be integrated with quantitative and qualitative programs?`,
      answer:
        `Yes. ${titleService} programs are often run as integrated modules within broader quant + qual research designs. This produces both measurable confidence (quantitative) and decision rationale (qualitative) within one program governance — reducing handoff risk and timeline.`,
    },
    {
      question: `What is the typical cost and timeline for a ${titleService} engagement?`,
      answer:
        `Single-market ${titleService} programs typically range from $25,000 to $75,000 and complete in 6–10 weeks. Multi-country programs scale to $80,000–$200,000 with timelines of 10–14 weeks depending on the number of markets and stakeholders. We provide transparent milestone billing with named senior leads on every proposal.`,
    },
    {
      question: `Which markets does BioNixus cover for ${titleService} research?`,
      answer:
        `BioNixus covers the full GCC (Saudi Arabia, UAE, Kuwait, Qatar, Oman, Bahrain), wider MENA (Egypt, Iraq, Iran, Jordan), the United Kingdom, and select European markets. We can also coordinate global studies via partner panels when programs require coverage beyond our direct fieldwork footprint.`,
    },
    {
      question: `How does BioNixus ensure data integrity in ${titleService} programs?`,
      answer:
        `Every program includes documented recruitment verification (panel cross-checks, screener validation), real-time data quality monitoring (response consistency, completion patterns), cleaning rules, and senior-researcher synthesis review. We document the quality assurance steps in every proposal — the QA model is visible to you upfront.`,
    },
    {
      question: `Can ${titleService} findings feed into HEOR or payer submissions?`,
      answer:
        `Yes. Where ${titleService} programs generate evidence relevant to health technology assessment, payer value dossiers, or formulary submissions, we structure outputs to align with HEOR and market access frameworks. This includes traceable methodology documentation, sample provenance, and confidence intervals appropriate for submission contexts.`,
    },
  ];
  const jsonLd = [...buildServicePageSchemas(service, copy), buildFAQSchema(serviceFaqs)];
  const content = SERVICE_SECTIONS[service] || {
    title: `${titleService} Service Delivery Model`,
    bullets: [
      'Align research design to commercial, medical, and access decisions.',
      'Produce decision-ready outputs with clear implementation pathways.',
      'Integrate findings into wider cross-market strategy programs.',
    ],
  };

  return (
    <main>
      <SEOHead
        title={`${titleService} Healthcare Research Service | BioNixus`}
        description={copy}
        canonical={`/healthcare-market-research/services/${service}`}
        jsonLd={jsonLd}
      />
      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleService} Service`, href: `/healthcare-market-research/services/${service}` },
        ]}
      />

      <section className="py-16">
        <div className="container-wide max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-semibold text-foreground mb-4 capitalize">
            {titleService} Research Service
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BioNixus offers specialized healthcare research services aligned to strategic pharmaceutical decisions.
            Explore the broader{' '}
            <Link to="/healthcare-market-research" className="text-primary underline">
              healthcare market research hub
            </Link>{' '}
            for regional and therapy-specific context.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">{content.title}</h2>
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            <p>
              BioNixus services are built to improve decision quality and execution speed across healthcare markets.
              We combine local context, rigorous methods, and cross-functional interpretation to convert insight into
              practical actions.
            </p>
            <p>
              Service programs can run as standalone initiatives or as modules inside broader country and therapy
              strategies, enabling teams to scale evidence and keep planning aligned.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.bullets.map((bullet) => (
              <article key={bullet} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{bullet}</h3>
              </article>
            ))}
          </div>

          {/* Targeted Internal Linking based on Service */}
          {service === 'market-access' && (
            <div className="mt-10 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Deep Dive: Market Access Guides</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/market-access-strategy-uae" className="group flex-1 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all">
                  <h4 className="font-semibold text-primary group-hover:underline mb-1">UAE Market Access Strategy</h4>
                  <p className="text-sm text-muted-foreground">Navigate DOH, DHA, and MOHAP formulary inclusion.</p>
                </Link>
                <Link to="/blog/nice-hta-evidence-requirements-guide" className="group flex-1 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all">
                  <h4 className="font-semibold text-primary group-hover:underline mb-1">NICE HTA Evidence Guide</h4>
                  <p className="text-sm text-muted-foreground">Navigating UK cost-effectiveness and QALY thresholds.</p>
                </Link>
              </div>
            </div>
          )}

          {service === 'kol-mapping' && (
            <div className="mt-10 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Deep Dive: KOL Intelligence</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/kol-mapping-pharma-middle-east" className="group flex-1 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all">
                  <h4 className="font-semibold text-primary group-hover:underline mb-1">GCC KOL Mapping Guide</h4>
                  <p className="text-sm text-muted-foreground">Identifying true clinical influencers in the Middle East.</p>
                </Link>
                <Link to="/blog/competitive-intelligence-pharma-gcc" className="group flex-1 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all">
                  <h4 className="font-semibold text-primary group-hover:underline mb-1">Pharma Competitive Intelligence</h4>
                  <p className="text-sm text-muted-foreground">Tracking competitor formularies and Medical Affairs activities.</p>
                </Link>
              </div>
            </div>
          )}

          {service === 'qualitative-research' && (
            <div className="mt-10 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Deep Dive: Qualitative Methods</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/patient-journey-mapping-saudi-arabia" className="group flex-1 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all">
                  <h4 className="font-semibold text-primary group-hover:underline mb-1">Saudi Patient Journey Mapping</h4>
                  <p className="text-sm text-muted-foreground">Understanding culturally nuanced treatment pathways.</p>
                </Link>
                <Link to="/blog/healthcare-market-research-methodologies-gcc" className="group flex-1 p-4 rounded-lg bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all">
                  <h4 className="font-semibold text-primary group-hover:underline mb-1">GCC Research Methodologies</h4>
                  <p className="text-sm text-muted-foreground">Best practices for IDIs and focus groups in the region.</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            How {titleService} translates to commercial outcomes
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Most market research engagements fail commercially not because the data is wrong, but because
              findings stop short of decisions. BioNixus structures {titleService} programs so each insight
              is tied to a specific action: a launch sequence change, a message refinement, a target list
              update, or a payer evidence priority. We document the decision map at kickoff so synthesis
              flows directly into the workstream that needs it.
            </p>
            <p>
              For pharmaceutical and medtech teams operating across multiple markets, {titleService} programs
              are designed to balance comparability with local specificity. Core indicators stay consistent
              across countries; local modules capture regulatory and cultural nuances that matter for execution.
              This makes the difference between an insight deck that sits in a shared drive and a program
              that demonstrably moves brand performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
            Methods we deploy in {titleService} programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground mb-2">Quantitative HCP surveys</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Statistically robust online and CATI surveys with verified healthcare professional samples;
                segmentation, message testing, and competitive measurement at scale.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground mb-2">Qualitative depth interviews</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One-to-one IDIs with treating specialists, hospital pharmacy leads, and payer-adjacent
                stakeholders; bilingual moderation across MENA and Europe.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground mb-2">Advisory boards &amp; workshops</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structured KOL advisory boards, hybrid format options, and integrated cross-functional
                workshops that turn insight into committed action plans.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground mb-2">Patient and caregiver research</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ethnographic and qualitative patient journey work; integrated with HCP research to give
                a full pathway view from diagnosis through adherence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <FAQSection items={serviceFaqs} title={`${titleService} service FAQs`} />

      <TopicalLinks
        title={`Country markets where we deliver ${titleService}`}
        links={SERVICE_COUNTRY_LINKS.map((c) => ({
          to: `/healthcare-market-research/${c.slug}`,
          title: `${c.name} healthcare market research`,
          description: c.reason,
        }))}
      />

      <TopicalLinks
        title="Other healthcare research services"
        variant="pill"
        links={ALL_SERVICES.filter((s) => s !== service).map((s) => ({
          to: `/healthcare-market-research/services/${s}`,
          title: `${s.replace(/-/g, ' ')}`,
          description: '',
        }))}
      />

      <CTASection variant="service" />
    </main>
  );
}

