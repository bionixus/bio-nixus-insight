import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { formatLanguages, getCountryBySlug } from '@/lib/globalWebsitesData';
import { useMemo } from 'react';

type MarketSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

function buildMarketSections(countryName: string, regionName: string): MarketSection[] {
  return [
    {
      id: 'executive-summary',
      title: '1) Executive Summary',
      paragraphs: [
        `${countryName} represents a high-priority market within BioNixus' ${regionName} strategy. This market blueprint is designed as a practical operating guide for commercial leaders, medical teams, access specialists, and evidence-generation partners who need to move from broad market assumptions to disciplined execution. The objective is to create one consistent operating model that aligns market sizing, segmentation, stakeholder mapping, access logic, and launch planning into a single decision workflow rather than disconnected workstreams.`,
        `For ${countryName}, a winning strategy requires a market-specific view of demand signals, referral pathways, reimbursement pressure, and provider decision behavior. Commercial planning cannot be separated from regulatory timelines, payer logic, and local treatment protocols. This is why the framework used in this page intentionally links clinical value story, pricing narrative, channel readiness, and adoption barriers. The result is a strategy architecture that helps teams prioritize what to research first, what to validate in fieldwork, and what to convert into action in each quarter.`,
        `The recommended model for ${countryName} is evidence-led and execution-focused: define opportunity, test assumptions early, pressure-test access routes, and stage investments in line with adoption certainty. This reduces expensive late-stage pivots and improves launch confidence. Throughout this page, each section follows the same structure used across all global market pages so leadership can compare countries consistently while still respecting local market differences, language context, and operational constraints.`,
      ],
    },
    {
      id: 'market-landscape',
      title: '2) Market Landscape and Opportunity Framing',
      paragraphs: [
        `A rigorous market landscape for ${countryName} begins with a unified demand model rather than isolated volume estimates. Teams should triangulate epidemiology, diagnosis velocity, treatment eligibility, referral concentration, and provider throughput to create a realistic opportunity envelope. Overstated assumptions usually come from static prevalence figures without accounting for real-world bottlenecks such as delayed diagnosis, specialist concentration, and treatment drop-off. A credible opportunity model therefore must include pathway friction, not just disease burden.`,
        `In ${countryName}, segmentation should move beyond simple specialty labels and focus on decision ecosystems: who initiates therapy, who confirms treatment, who controls protocol access, and who influences continuation. This approach identifies practical leverage points for uptake and avoids generic messaging that does not match local clinical workflow. Market attractiveness also needs a readiness lens: data accessibility, field-force reach, institutional openness, and policy predictability all affect the speed at which opportunity can be converted into sustainable demand.`,
        `For portfolio teams, the most useful output is a staged opportunity map: immediate, medium-term, and structural upside. Immediate opportunities come from clearly identifiable patient clusters and established pathways. Medium-term opportunities are unlocked by education, pathway optimization, and access negotiations. Structural upside depends on policy shifts, infrastructure improvement, and broader diagnostic penetration. Framing ${countryName} through this staged lens allows smarter sequencing of investment and more realistic performance commitments.`,
      ],
    },
    {
      id: 'system-access',
      title: '3) Healthcare System, Access Routes, and Funding Logic',
      paragraphs: [
        `Understanding how care is delivered and financed in ${countryName} is central to any commercialization plan. Access success depends on where budget authority sits, how formularies are governed, how treatment protocols are updated, and what evidence format is considered decision-grade by local stakeholders. Teams should map institutional and payer pathways at a granular level and identify where decisions are centralized versus where local committees have practical veto power.`,
        `A common failure mode is treating reimbursement as a single event rather than a sequence. In practice, ${countryName} may require multiple gates: evidence submission, committee evaluation, protocol placement, procurement alignment, and implementation at site level. Each gate introduces timing risk and messaging requirements. The access plan must define which evidence claims are used at each stage, who owns each conversation, and what fallback options exist if timelines shift or objections emerge.`,
        `Funding architecture also shapes adoption quality. Even when formal access is achieved, utilization may remain low if operational steps are unclear for hospitals, physicians, or pharmacy teams. Therefore, market plans for ${countryName} should include implementation design: ordering flow, treatment initiation process, documentation burden, and patient follow-up mechanics. Access strategy is successful only when policy approval translates into repeatable use at point of care.`,
      ],
    },
    {
      id: 'regulatory-hta',
      title: '4) Regulatory, HTA, and Evidence Alignment',
      paragraphs: [
        `Regulatory pathway planning in ${countryName} should be integrated with pricing and market-access objectives from day one. Too often, regulatory and commercial plans are developed in parallel without shared assumptions, leading to evidence packages that satisfy technical approval requirements but leave major access questions unresolved. A better model is to define a unified evidence roadmap where clinical endpoints, economic narratives, and real-world data priorities support both approval and reimbursement outcomes.`,
        `For HTA-style evaluations or payer evidence reviews, decision-makers in ${countryName} typically need clarity on comparative value, budget impact trajectory, and expected patient-level outcomes in routine practice. This requires early design of local evidence adaptation: reference populations, local cost structures, pathway comparators, and treatment persistence assumptions. Teams should avoid direct import of global economic models without local calibration, since credibility drops quickly when assumptions do not reflect local practice.`,
        `Operationally, the most effective approach is to maintain an evidence governance cadence: periodic review of data gaps, planned analyses, stakeholder feedback, and objection patterns. In ${countryName}, this creates a living evidence system that evolves with regulatory progress and payer dialogue rather than a static submission package. The long-term advantage is not only faster initial access, but stronger resilience when re-evaluation, tender pressure, or policy updates occur.`,
      ],
    },
    {
      id: 'epidemiology-demand',
      title: '5) Epidemiology, Diagnosis Dynamics, and Demand Signals',
      paragraphs: [
        `Market demand in ${countryName} is strongly affected by diagnosis flow quality, not only prevalence. Teams should model the journey from symptom presentation to specialist confirmation, then quantify where patient leakage occurs. Key leakage points often include referral delays, uneven diagnostic capability, and variation in guideline adherence. Without this view, demand forecasts overestimate treatment-ready populations and underprepare teams for activation challenges.`,
        `A strong demand intelligence layer combines secondary data with field validation. Claims, registry, and procurement signals can indicate baseline volumes, but clinician interviews and pathway observation reveal behavioral drivers that data alone misses. In ${countryName}, teams should test assumptions around diagnosis timing, treatment eligibility criteria, and patient persistence drivers. These insights materially improve targeting, educational strategy, and early-launch expectations.`,
        `Demand signals should be monitored continuously with a practical dashboard: referral velocity, new starts, discontinuation drivers, and institution-level variation. This is especially important in ${countryName} where market conditions can shift with policy updates or provider behavior changes. Continuous monitoring turns demand planning from a one-time exercise into an execution control mechanism that supports faster tactical adjustments and better resource allocation.`,
      ],
    },
    {
      id: 'stakeholder-kol',
      title: '6) Stakeholder Mapping and KOL Influence Networks',
      paragraphs: [
        `Effective engagement in ${countryName} depends on understanding influence networks, not just creating a list of senior experts. True influence may come from protocol authors, referral gatekeepers, institutional champions, payer-facing clinicians, and multidisciplinary committees. Stakeholder mapping should classify both formal authority and informal credibility, then connect each stakeholder to specific decisions in the adoption pathway.`,
        `KOL strategy for ${countryName} should include clear engagement objectives by phase: evidence interpretation, pathway education, access support, and implementation optimization. Each objective requires a different interaction format and supporting material. For example, early-stage engagements may prioritize unmet need framing and patient identification barriers, while later-stage discussions focus on treatment sequencing, practical implementation, and outcomes tracking.`,
        `High-performing teams also track stakeholder sentiment changes over time. In ${countryName}, stakeholder confidence is influenced by local experience, peer endorsement, and operational ease at site level. A structured listening loop that captures objections, evidence requests, and adoption friction enables faster messaging refinement and stronger relationships. Stakeholder strategy is most valuable when it functions as a decision intelligence engine, not just a relationship list.`,
      ],
    },
    {
      id: 'provider-channel',
      title: '7) Provider, Institution, and Channel Readiness',
      paragraphs: [
        `Provider and institution readiness in ${countryName} should be assessed as an operational system: awareness, protocol fit, procurement path, pharmacy workflow, and follow-up capability. Even with strong clinical interest, adoption can stall when one operational node fails. Therefore, readiness scoring should be done at account level and include both clinical and administrative dimensions so deployment resources can be prioritized where conversion potential is highest.`,
        `Channel strategy in ${countryName} must reflect who actually controls therapy flow. In some contexts, specialist centers drive treatment initiation while peripheral institutions handle continuation; in others, procurement structure and distribution design shape practical availability. Commercial and medical teams should align account strategy with real-world channel mechanics rather than theoretical pathway maps. This alignment prevents misallocation of field activity and reduces time-to-activation.`,
        `Readiness programs should include practical enablement assets: implementation checklists, role-specific training, referral support materials, and post-initiation tracking templates. In ${countryName}, these assets help convert policy or protocol inclusion into day-to-day use. The key metric is not only account coverage, but activation depth: the proportion of prioritized accounts that can independently identify, initiate, and maintain appropriate patients.`,
      ],
    },
    {
      id: 'competitive-intelligence',
      title: '8) Competitive, Pipeline, and Strategic Positioning',
      paragraphs: [
        `Competitive intelligence in ${countryName} should cover current standards of care, emerging alternatives, substitution risks, and likely pricing responses. A static competitor profile is not enough; teams need scenario-based intelligence that anticipates how competitor moves will influence payer preferences, clinician behavior, and patient flow. This requires continuous monitoring of trial activity, guideline discussion, local partnerships, and market access tactics.`,
        `Positioning strategy should articulate where the offer is superior, where parity is acceptable, and where mitigation is needed. In ${countryName}, credible positioning balances clinical differentiation with practical benefits such as pathway simplicity, implementation support, and predictable budget impact. Overclaiming differentiation can reduce trust; under-communicating practical value can slow adoption. The strongest position integrates evidence strength with operational relevance.`,
        `Pipeline monitoring should also inform investment timing. If near-term entrants are likely in ${countryName}, launch sequencing, account prioritization, and evidence communication need to accelerate in strategic segments. Conversely, if the competitive window is wider, teams can build deeper ecosystem readiness before scaling. Competitive strategy is therefore not a separate stream; it should directly shape field deployment, evidence cadence, and partnership planning.`,
      ],
    },
    {
      id: 'go-to-market',
      title: '9) Go-to-Market Architecture and Launch Sequencing',
      paragraphs: [
        `A robust go-to-market model for ${countryName} starts with phased deployment rather than full-market activation. Phase one should focus on high-readiness institutions and clearly defined patient segments, generating proof of execution and local case confidence. Phase two scales into adjacent accounts with tailored support based on lessons from early sites. Phase three expands through broader ecosystem partnerships and pathway optimization, supported by accumulated local evidence.`,
        `Launch sequencing should be governed by measurable readiness gates: account qualification, stakeholder alignment, access progress, and operational capability. In ${countryName}, this gate approach prevents premature scaling that inflates cost without durable uptake. Each phase should define expected outputs, risk indicators, and decision thresholds for progression. This creates transparency for leadership and enables disciplined resource deployment across commercial, medical, and market access teams.`,
        `Cross-functional alignment is the main predictor of launch quality. Teams in ${countryName} should operate through a single launch control room with shared metrics and weekly decision routines. Commercial activity, evidence updates, stakeholder sentiment, and access progress must be reviewed together to avoid fragmented responses. With this governance model, market execution becomes adaptive and resilient instead of reactive and siloed.`,
      ],
    },
    {
      id: 'evidence-heor',
      title: '10) Real-World Evidence, HEOR, and Outcomes Strategy',
      paragraphs: [
        `In ${countryName}, real-world evidence should be planned as a staged program aligned to value questions from clinicians, payers, and institutional decision-makers. Early evidence often needs to demonstrate practical feasibility and patient identification quality. Mid-stage evidence should validate outcome consistency and treatment persistence. Later evidence can focus on comparative effectiveness, cost trajectories, and pathway optimization opportunities.`,
        `HEOR design must be locally meaningful. Budget impact and value claims should be built with assumptions that reflect ${countryName}'s treatment pathways, cost structures, and care delivery patterns. Teams should pre-test model assumptions with local experts to ensure relevance and defensibility. Transparent assumptions and sensitivity analyses improve trust and reduce pushback during payer or committee discussions.`,
        `Outcomes strategy should include implementation metrics, not only clinical endpoints. For ${countryName}, tracking referral quality, initiation lag, adherence patterns, and discontinuation reasons can identify operational bottlenecks that limit realized value. Embedding these metrics into market governance helps teams convert evidence generation into actionable optimization, strengthening both short-term adoption and long-term market positioning.`,
      ],
    },
    {
      id: 'risk-governance',
      title: '11) Risk Management, Compliance, and Governance',
      paragraphs: [
        `Sustainable growth in ${countryName} requires proactive risk management across regulatory, operational, reputational, and commercial dimensions. Teams should maintain a risk register linked to mitigation owners and escalation thresholds. Typical risk categories include evidence misalignment, access delay, procurement disruption, field execution inconsistency, and stakeholder miscommunication. A visible risk governance routine reduces surprise and improves decision speed.`,
        `Compliance frameworks should be embedded into engagement design from the start. In ${countryName}, this means ensuring medical-commercial boundaries are clear, promotional standards are respected, data handling is secure, and third-party interactions follow local rules. Compliance-by-design protects both brand trust and execution continuity. It also enables teams to move faster because guardrails are pre-defined rather than interpreted ad hoc.`,
        `Governance cadence should combine strategic and operational views: monthly leadership steering for direction, weekly cross-functional operations for execution, and rapid-response pathways for emergent issues. For ${countryName}, this layered governance model ensures decisions remain aligned with market reality while preserving strategic consistency. Governance is most effective when it is data-informed, accountable, and tightly connected to execution outcomes.`,
      ],
    },
    {
      id: 'action-plan',
      title: '12) 12-Month Action Plan for Market Execution',
      paragraphs: [
        `Months 1-3 in ${countryName} should focus on baseline validation: refine demand model, prioritize target accounts, confirm stakeholder map, and finalize evidence priorities by decision gate. The primary output is a validated launch blueprint with explicit assumptions and quantified risks. Teams should also complete operational readiness checks across account onboarding, documentation flow, and follow-up pathways to prevent avoidable friction during activation.`,
        `Months 4-8 should prioritize controlled activation. Launch in highest-readiness accounts, monitor conversion and persistence indicators weekly, and adjust engagement tactics based on stakeholder feedback. In ${countryName}, this phase is where field insights must directly shape messaging and support assets. Access progress, account activation depth, and early outcomes should be reviewed in one integrated dashboard to maintain alignment across functions.`,
        `Months 9-12 should transition from activation to scale with discipline. Expand into adjacent segments only where readiness thresholds are met, reinforce successful account models, and formalize evidence outputs that strengthen market credibility. For ${countryName}, the year-one objective is not maximum spread but durable momentum: predictable initiation flow, stable continuation patterns, and a governance model capable of supporting long-term growth.`,
      ],
    },
  ];
}

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const GlobalWebsiteCountry = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const country = countrySlug ? getCountryBySlug(countrySlug) : undefined;

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="section-padding pt-24 pb-20">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Country page not found
            </h1>
            <p className="text-muted-foreground mb-8">
              The requested country page is not available. Browse all countries from the global websites hub.
            </p>
            <Link to="/global-websites" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Global Websites
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const canonicalUrl = `https://www.bionixus.com/global-websites/${country.slug}`;
  const marketSections = useMemo(
    () => buildMarketSections(country.countryName, country.regionName),
    [country.countryName, country.regionName]
  );
  const estimatedWordCount = useMemo(
    () => countWords(marketSections.map((s) => [s.title, ...s.paragraphs].join(' ')).join(' ')),
    [marketSections]
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{country.countryName} | BioNixus Global Websites</title>
        <meta
          name="description"
          content={`Comprehensive ${country.countryName} healthcare market strategy guide by BioNixus with standardized structure, stakeholder mapping, access logic, and execution roadmap.`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />

      <main>
        <section className="section-padding pt-24 pb-6">
          <div className="container-wide max-w-5xl mx-auto">
            <Link
              to="/global-websites"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Global Websites
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              {country.countryName} Healthcare Market Strategy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              A standardized long-form market blueprint for {country.countryName} within our {country.regionName}{' '}
              coverage. This page follows the same structure used across all global market pages for consistency in
              planning, execution, and leadership comparison.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Estimated page length: ~{estimatedWordCount.toLocaleString()} words
            </p>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Country details</h2>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Country:</strong> {country.countryName}
              </p>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Region:</strong> {country.regionName}
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Languages:</strong> {formatLanguages(country.languages)}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">Market website</h2>
              <a
                href={country.url}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Visit primary route for {country.countryName}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Market Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-3">
              {marketSections.map((section) => (
                <li key={section.id} className="bg-card border border-border rounded-lg px-4 py-3">
                  <a href={`#${section.id}`} className="text-primary font-medium hover:underline">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-8">
            {marketSections.map((section) => (
              <article key={section.id} id={section.id} className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{section.title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={`${section.id}-${idx}`}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-5">Work with BioNixus</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Contact BioNixus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <Link to={basePath} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Return to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalWebsiteCountry;
