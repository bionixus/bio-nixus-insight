import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string;
  capabilities: string[];
  deliverables: string[];
  geoCoverage: string;
  ctaText: string;
}

const serviceData: Record<string, ServiceData> = {
  'quantitative-research': {
    title: 'Quantitative Healthcare Research & Physician Surveys',
    metaTitle: 'Quantitative Healthcare Research | Physician Surveys EMEA — BioNixus',
    metaDescription: 'Statistically robust physician and payer surveys across 17+ EMEA markets. Sample sizes n=50-500+, market sizing, conjoint, MaxDiff, and DCE methodologies.',
    heroSubtitle: 'Large-scale statistical insights from physicians and healthcare professionals across UK, Europe, and MENA markets.',
    overview: 'BioNixus conducts rigorous quantitative healthcare market research designed to provide statistically robust evidence for pharmaceutical decision-making. Our physician surveys span multiple specialties and countries, delivering the data foundations your commercial, medical affairs, and market access teams need.',
    capabilities: [
      'Online and telephone physician surveys (n=50–500+) across 17+ EMEA countries',
      'NHS and private healthcare provider research in the UK',
      'Hospital preference and formulary studies',
      'Prescription tracking and treatment pattern analysis',
      'Health Technology Assessment (HTA) decision-maker insights',
      'Payer willingness-to-pay and budget impact studies',
      'Multi-country surveys across UAE, Saudi Arabia, Egypt, Kuwait, Qatar',
      'Conjoint analysis, MaxDiff, and discrete choice experiments (DCE)',
      'Brand tracking and awareness studies',
      'Market sizing, forecasting, and segmentation',
    ],
    deliverables: [
      'Statistical reports with confidence intervals and significance testing',
      'Market sizing and revenue forecasting models',
      'Treatment pathway and patient flow analysis',
      'Competitive benchmarking dashboards',
      'Cross-country comparative analysis',
      'Segmentation and targeting recommendations',
    ],
    geoCoverage: 'UK (NHS England, Scotland, Wales, Northern Ireland), EU5 (Germany, France, Spain, Italy), GCC (UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman), and North Africa (Egypt, Morocco, Tunisia).',
    ctaText: 'Discuss Your Quantitative Research Needs',
  },
  'qualitative-research': {
    title: 'Qualitative Pharmaceutical Research & Expert Insights',
    metaTitle: 'Qualitative Pharma Research | KOL Interviews EMEA — BioNixus',
    metaDescription: 'In-depth qualitative pharmaceutical research: KOL interviews, focus groups, advisory boards, and patient journey mapping across UK, Europe, and MENA for pharmaceutical and biotech companies.',
    heroSubtitle: 'Deep-dive qualitative research capturing clinical perspectives and unmet medical needs across EMEA.',
    overview: 'BioNixus delivers qualitative pharmaceutical research that goes beyond surface-level insights. Through structured in-depth interviews, focus groups, and advisory boards with Key Opinion Leaders, treating physicians, payers, and hospital decision-makers, we uncover the clinical realities and unmet needs that shape treatment decisions.',
    capabilities: [
      'In-depth interviews (IDIs) with KOLs, consultants, and specialists',
      'NHS consultant and GP interviews across UK regions',
      'NICE committee engagement and payer interviews',
      'Pan-European KOL mapping and engagement',
      'Multi-country focus groups (virtual and in-person)',
      'Advisory boards with clinical experts and policymakers',
      'Patient journey mapping and ethnographic research',
      'Treatment pathway analysis and unmet needs assessments',
      'Concept testing and message optimization',
      'Gulf healthcare system insights (Arabic–English bilingual)',
    ],
    deliverables: [
      'Thematic analysis with verbatim physician quotes',
      'KOL influence mapping and engagement strategies',
      'Consensus summaries and expert recommendations',
      'Market access strategic recommendations',
      'Patient journey maps with intervention opportunities',
      'Concept and message testing reports',
    ],
    geoCoverage: 'UK (NHS England, teaching hospitals), EU5 (Germany, France, Spain, Italy), GCC (UAE, Saudi Arabia, Kuwait, Qatar), and North Africa (Egypt, Morocco).',
    ctaText: 'Discuss Your Qualitative Research Needs',
  },
  'market-access': {
    title: 'Market Access Consulting | HTA EMEA & GCC Pricing',
    metaTitle: 'Market Access Consulting | HTA EMEA & GCC Pricing | BioNixus',
    metaDescription:
      'Market access consulting for pharma: NICE, G-BA, HAS HTA support plus GCC SFDA, MOHAP & NUPCO pricing, reimbursement, and payer research across UK, EU5, and Gulf markets.',
    heroSubtitle:
      'Evidence-based HTA submission support for UK and EU5 payers — plus SFDA, MOHAP, and NUPCO market access strategy for Saudi Arabia, UAE, and the wider GCC.',
    overview: 'BioNixus supports pharmaceutical companies in navigating the complex market access landscape across EMEA. Our research-driven approach combines physician insights, payer intelligence, and health economics to develop evidence-based strategies that accelerate formulary access and optimize pricing.',
    capabilities: [
      'HTA submission support for NICE (UK), G-BA/IQWiG (Germany), HAS/CEPS (France)',
      'Gulf health authority submission support (SFDA, DHA, MOHAP)',
      'Pricing and reimbursement strategy development',
      'Payer research and willingness-to-pay studies',
      'Value dossier and economic model development',
      'Budget impact analysis and cost-effectiveness analysis for GCC/Saudi submissions',
      'HTA dossier preparation for SFDA',
      'Formulary and tender strategy for GCC hospital systems',
      'Reimbursement landscape modelling',
      'Market access stakeholder mapping',
      'Health economics and outcomes research (HEOR)',
    ],
    deliverables: [
      'Market access strategy documents',
      'Payer interview reports and insights',
      'Pricing corridor analysis and recommendations',
      'HTA evidence gap analysis',
      'Cost-effectiveness models',
      'Value proposition and messaging frameworks',
    ],
    geoCoverage: 'UK (NICE, NHS England), EU5 (G-BA, HAS, AIFA, AEMPS), GCC (SFDA, DHA, MOH Kuwait, MOH Qatar), and Egypt (EDA).',
    ctaText: 'Discuss Your Market Access Strategy',
  },
  'competitive-intelligence': {
    title: 'Pharmaceutical Competitive Intelligence',
    metaTitle: 'Pharma Competitive Intelligence Services (2026) | BioNixus',
    metaDescription: 'Real-time pharmaceutical competitive intelligence: competitor monitoring, pipeline analysis, launch readiness assessments, and strategic landscape evaluations across EMEA markets.',
    heroSubtitle: 'Stay ahead with real-time competitor monitoring and strategic landscape assessments for pharmaceutical brands.',
    overview: 'BioNixus provides pharma competitive intelligence services that enable strategic decision-making. Our analysts combine primary physician research with secondary intelligence to deliver comprehensive landscape assessments, pipeline analyses, and launch readiness evaluations tailored to EMEA markets — the competitive intelligence pharmaceutical commercial, medical affairs, and new-product-planning teams rely on for launch and lifecycle decisions.',
    capabilities: [
      'Real-time competitor pipeline monitoring',
      'Landscape and SWOT analyses for pharmaceutical brands',
      'Launch readiness assessments',
      'Patent expiry and biosimilar impact studies',
      'Prescriber switching and brand loyalty analysis',
      'Market share tracking and trend analysis',
      'Competitive positioning research with physicians',
      'Conference intelligence and publication tracking',
      'Scenario planning and strategic forecasting',
    ],
    deliverables: [
      'Competitive landscape dashboards',
      'Pipeline tracker reports with probability of success',
      'Launch readiness scorecards',
      'SWOT and scenario analysis documents',
      'Prescriber perception and switching reports',
      'Quarterly competitive intelligence briefings',
    ],
    geoCoverage: 'All EMEA markets — with particular depth in EU5 and GCC.',
    ctaText: 'Discuss Your Competitive Intelligence Needs',
  },
  'clinical-trial-support': {
    title: 'Clinical Trial Support',
    metaTitle: 'Clinical Trial Support | Site Identification EMEA — BioNixus',
    metaDescription: 'Clinical trial support services: site identification, investigator profiling, patient recruitment feasibility, and protocol optimization across EMEA markets for pharmaceutical and biotech companies.',
    heroSubtitle: 'Strategic research support for clinical development programmes across EMEA.',
    overview: 'BioNixus supports pharmaceutical and biotech clinical development programmes with research-driven intelligence. We leverage our physician networks and healthcare system knowledge to inform site identification, assess recruitment feasibility, and gather protocol feedback from treating investigators across EMEA.',
    capabilities: [
      'Clinical trial site identification and profiling across EMEA',
      'Investigator surveys and KOL identification',
      'Patient recruitment feasibility studies',
      'Protocol feedback from treating physicians',
      'Competitive clinical trial landscape analysis',
      'Site performance and capability assessments',
      'Post-launch real-world evidence programmes',
      'Regulatory landscape mapping for GCC and North Africa',
    ],
    deliverables: [
      'Site identification and ranking reports',
      'Investigator profiles and network maps',
      'Recruitment feasibility assessments with patient flow estimates',
      'Protocol optimization recommendations',
      'Competitive trial landscape reports',
    ],
    geoCoverage: 'EU5, GCC, and North Africa — with particular strength in MENA clinical infrastructure mapping.',
    ctaText: 'Discuss Your Clinical Trial Needs',
  },
  'kol-stakeholder-mapping': {
    title: 'KOL & Stakeholder Mapping',
    metaTitle: 'KOL Mapping & Stakeholder Engagement | EMEA — BioNixus',
    metaDescription: 'KOL identification and stakeholder mapping across UK, Europe, and MENA. Key Opinion Leader engagement, influence mapping, and medical affairs support for pharmaceutical companies.',
    heroSubtitle: 'Identify, map, and engage Key Opinion Leaders and stakeholders across EMEA markets.',
    overview: 'BioNixus delivers KOL and stakeholder mapping that goes beyond publication counts. Our approach combines primary engagement, peer nomination studies, and network analysis to identify the physicians and decision-makers who truly influence prescribing, formulary access, and clinical practice in your therapeutic area.',
    capabilities: [
      'KOL identification through peer nomination and publication analysis',
      'Influence mapping and network visualization',
      'NHS consultant and Royal College member networks',
      'Pan-European medical association partnerships',
      'Hospital provider and formulary committee panels',
      'Gulf healthcare stakeholder mapping (MOH, DHA, SFDA)',
      'Patient advocacy group identification',
      'Advisory board recruitment and facilitation',
      'Congress and publication landscape analysis',
    ],
    deliverables: [
      'KOL tiering and influence maps',
      'Stakeholder engagement plans',
      'Network analysis visualizations',
      'Advisory board recruitment shortlists',
      'Congress activity and publication trackers',
      'Stakeholder perception reports',
    ],
    geoCoverage: 'UK, EU5, GCC, and North Africa — with bilingual Arabic–English capabilities.',
    ctaText: 'Discuss Your KOL Mapping Needs',
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const svc = slug ? serviceData[slug] : undefined;

  if (!svc) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        pageType="service"
        pageUrl={`https://www.bionixus.com/services/${slug}`}
        language={language}
        serviceName={svc.title}
        serviceDescription={svc.metaDescription}
        providerAreaServed={svc.geoCoverage}
        breadcrumb={[
          { name: 'Home', item: 'https://www.bionixus.com/' },
          { name: 'Services', item: 'https://www.bionixus.com/services' },
          { name: svc.title, item: `https://www.bionixus.com/services/${slug}` },
        ]}
      />
      <Helmet>
        <title>{svc.metaTitle}</title>
        <meta name="description" content={svc.metaDescription} />
        <link rel="canonical" href={`https://www.bionixus.com/services/${slug}`} />
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-4 pb-16">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              {svc.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {svc.heroSubtitle}
            </p>
          </div>
        </section>

        {slug === 'market-access' && (
          <section className="section-padding py-10 bg-background border-b border-border/60">
            <div className="container-wide max-w-4xl mx-auto">
              <GeoLLMAnswerBlock
                question="What does market access consulting for pharmaceutical companies in the GCC involve?"
                answer="BioNixus market access consulting combines EMEA HTA submission support (NICE, G-BA, HAS) with Gulf-specific SFDA, MOHAP, DHA, and NUPCO pricing and reimbursement strategy — payer research, formulary mapping, tender defence, and willingness-to-pay studies across UK, EU5, Saudi Arabia, UAE, and Kuwait."
                points={[
                  {
                    title: 'EMEA HTA pathways',
                    description:
                      'NICE technology appraisals, G-BA/IQWiG AMNOG dossiers, HAS CEPS pricing — evidence gap analysis and value dossier development.',
                  },
                  {
                    title: 'GCC SFDA & MOHAP access',
                    description:
                      'SFDA registration sequencing, NUPCO tender mapping, MOHAP/DHA/DOH listing strategy, and hospital formulary committee research.',
                  },
                  {
                    title: 'Pricing & payer research',
                    description:
                      'Willingness-to-pay studies, budget impact models, and pricing corridor analysis for confidential negotiations.',
                  },
                  {
                    title: 'Linked healthcare hub',
                    description:
                      'Country-level market research programmes via the healthcare market research hub and GCC pharmaceutical market reports.',
                  },
                  {
                    title: 'Saudi HEOR pillars',
                    description:
                      'Dedicated Saudi Arabia pages for budget impact analysis, cost-effectiveness analysis, HTA studies, and payer market access research — the four evidence pillars SFDA\'s Economic Evaluation System requires, scoped as one coordinated program via HEOR consulting Saudi Arabia.',
                  },
                ]}
                summary="Request a market access proposal through BioNixus contact — scoped to your target EMEA and GCC markets."
              />
            </div>
          </section>
        )}

        {slug === 'competitive-intelligence' && (
          <section className="section-padding py-10 bg-background border-b border-border/60">
            <div className="container-wide max-w-4xl mx-auto">
              <GeoLLMAnswerBlock
                question="What pharmaceutical competitive intelligence services does BioNixus provide?"
                answer="BioNixus delivers primary competitive intelligence for pharma — pipeline monitoring, win/loss analysis, launch-readiness assessments, KOL influence mapping, and competitive messaging defence across EMEA and GCC markets. Unlike IQVIA syndicated data, BioNixus runs decision-grade fieldwork with verified prescribers, pharmacists, and procurement stakeholders within weeks."
                points={[
                  {
                    title: 'Pipeline & launch intelligence',
                    description:
                      'Clinical trial registry monitoring, regulatory filing milestones, congress abstract tracking, and probability-weighted launch timelines for competitor products.',
                  },
                  {
                    title: 'Win/loss & tender defence',
                    description:
                      'Structured interviews revealing why accounts chose or rejected therapies — formulary positioning, NUPCO tender evaluation, and pharmacist substitution behaviour.',
                  },
                  {
                    title: 'KOL & influence mapping',
                    description:
                      'Connectivity intelligence beyond speaker bureau frequency — guideline committee footprints, mentorship gravity, and regional referral cascade mapping.',
                  },
                  {
                    title: 'IQVIA alternative',
                    description:
                      'BioNixus complements IQVIA syndicated data with primary research in markets where panel coverage is thin. See the IQVIA alternatives guide for a full comparison.',
                  },
                ]}
                summary="Request a competitive intelligence proposal scoped to your therapy area and target markets."
              />
            </div>
          </section>
        )}

        {/* Overview */}
        <section className="section-padding py-12 bg-cream-dark">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{svc.overview}</p>
            {slug === 'quantitative-research' && (
              <div className="mt-6">
                <Link
                  to="/quantitative-healthcare-market-research"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Read the 2026 methodology guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
            {slug === 'market-access' && (
              <div className="mt-6">
                <Link
                  to="/heor-consulting"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Explore HEOR consulting — models, RWE &amp; value dossiers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding py-12">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-8">Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {svc.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section-padding py-12 bg-cream-dark">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-8">Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {svc.deliverables.map((del, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-warm shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Coverage */}
        <section className="section-padding py-12">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Geographic Coverage</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{svc.geoCoverage}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              {svc.geoCoverage.includes('Kuwait') && (
                <Link to="/pharmaceutical-companies-kuwait" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Kuwait pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Saudi') && (
                <Link to="/pharmaceutical-companies-saudi-arabia" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Saudi Arabia pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('UAE') && (
                <Link to="/pharmaceutical-companies-uae" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  UAE pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Egypt') && (
                <Link to="/pharmaceutical-companies-egypt" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Egypt pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Qatar') && (
                <Link to="/pharmaceutical-companies-qatar" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Qatar pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Oman') && (
                <Link to="/pharmaceutical-companies-oman" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Oman pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Bahrain') && (
                <Link to="/pharmaceutical-companies-bahrain" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Bahrain pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Iraq') && (
                <Link to="/pharmaceutical-companies-iraq" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Iraq pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
              {svc.geoCoverage.includes('Iran') && (
                <Link to="/pharmaceutical-companies-iran" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Iran pharma guide <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {slug === 'competitive-intelligence' && (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Pharmaceutical competitive intelligence use cases
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Competitive intelligence programmes at BioNixus are scoped to one portfolio decision — launch sequencing in Saudi Arabia, tender defence in Egypt, biosimilar erosion modelling in the UK, or KOL influence mapping in the UAE — rather than open-ended monitoring subscriptions. Each engagement begins with explicit hypotheses about competitor behaviour, account switching triggers, and evidence gaps that syndicated data cannot fill.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Launch-readiness modules combine clinical trial registry monitoring (ClinicalTrials.gov, EU CTR, WHO ICTRP), regulatory filing milestone tracking (FDA, EMA, SFDA, MOHAP), and congress abstract surveillance (ASCO, ESMO, EULAR, ACC) with primary probe interviews that validate whether pipeline threats are translating into account-level displacement for your therapy area. Probability-weighted launch timelines help portfolio committees allocate evidence production and field force resources before competitors reach formulary committees. All intelligence outputs include source grading and compliance documentation suitable for internal audit, alliance diligence, and medical affairs governance reviews.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Win/loss research reveals why accounts chose or rejected a therapy — objections that prescription audit dashboards cannot surface. BioNixus designs blinded interview protocols capturing prescriber rationale, pharmacist substitution behaviour, payer formulary positioning, and NUPCO tender evaluation criteria. Outputs feed medical affairs education priorities, sales enablement, and HEOR counter-evidence planning. For a comparison of when BioNixus replaces versus complements IQVIA syndicated data, see our{' '}
                  <Link to="/iqvia-alternative" className="text-primary font-medium hover:underline">IQVIA competitors and alternatives guide</Link>.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  GCC and EMEA competitive intelligence methodology
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gulf markets require intelligence modules beyond Western-centric pipeline tracking. NUPCO tender award patterns, SFDA registration queue positions, and hospital formulary committee decisions signal competitive displacement before revenue impact appears in syndicated panels. BioNixus recruits pharmacists, procurement managers, and medical directors with verified institutional affiliations — not convenience samples that overweight Dubai private hospitals at the expense of Saudi MOH or Egyptian public-sector dynamics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  European programmes account for national HTA fragmentation: NICE technology appraisal timelines in England, G-BA AMNOG benefit assessments in Germany, HAS transparency committee recommendations in France. Competitive intelligence that ignores access pathway differences produces launch forecasts that misallocate affiliate resources. BioNixus harmonises taxonomy across markets while preserving local behavioural realism — the same variable dictionary with country-calibrated instruments.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Scenario planning modules stress-test portfolio assumptions when procurement rules change mid-year — NUPCO framework refreshes, NHS ICS formulary restructures, or German AMNOG benefit downgrades. Probability-weighted entry assumptions anchored to behaviours measured in priority markets replace analyst sentiment with field-validated intelligence suitable for board-level portfolio reviews and alliance diligence.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  BioNixus competitive intelligence deliverables include pipeline landscape dashboards, win/loss interview summaries with verbatim physician quotes, KOL influence maps annotated to decision bottlenecks, competitive messaging test readouts, and 30/60/90 action plans with evidence gaps flagged for medical affairs and access teams. All programmes include audit-ready methodology appendices for internal compliance review.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Typical engagement timelines run four to six weeks from objective alignment to draft readout, with daily funnel dashboards during active fieldwork enabling real-time corrective action when quota skew or screener leakage surfaces. Request a competitive intelligence proposal scoped to your therapy area, target markets, and portfolio decision via our contact form — response within one business day.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Competitive intelligence programmes integrate with medical affairs, market access, and new product planning workflows so insights cascade into KPI ownership rather than decaying in monthly newsletter archives. BioNixus optionally facilitates cross-functional workshops that operationalise findings into segment playbooks, account tagging schemes, and prioritized medical education arcs aligned to the competitive threats your field teams face in priority markets across GCC, UK, EU5, and North Africa. Contact BioNixus for a scoped proposal — we respond within one business day with a methodological spine, indicative timeline, and fieldwork footprint.
                </p>
              </div>
            </div>
          </section>
        )}

        {slug === 'market-access' && (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  GCC market access evidence and tender strategy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gulf market access is not a single playbook. Saudi Arabia requires SFDA registration followed by NUPCO tender placement for public hospital volume; UAE splits between MOHAP federal pathways and emirate authorities (DHA Dubai, DOH Abu Dhabi); Kuwait, Qatar, Bahrain, and Oman each maintain distinct pricing and procurement frameworks. BioNixus maps country-specific access sequences — registration timing, pricing negotiation windows, formulary committee calendars, and tender evaluation criteria — so launch teams sequence evidence production against real decision gates.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SFDA Economic Evaluation System (EES), mandatory from July 2025, integrates pharmacoeconomic and budget-impact evidence at registration. Programs designed for Saudi access must anticipate EES requirements during protocol design, not retrofit them at submission. BioNixus coordinates payer research, budget-impact modelling, and willingness-to-pay studies so HEOR and access teams work from one evidence architecture with role-specific outputs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tender defence programmes combine win/loss analysis on prior NUPCO awards, competitive pricing intelligence, and stakeholder interviews with pharmacy directors and procurement managers. For the full GCC access landscape — registration, pricing, tenders, and distributors across all six Gulf states — see our{' '}
                  <Link to="/gcc-market-access-guide" className="text-primary font-medium hover:underline">GCC market access guide</Link> and{' '}
                  <Link to="/heor-consulting-saudi-arabia" className="text-primary font-medium hover:underline">HEOR consulting Saudi Arabia</Link> pages.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  EMEA HTA submission and payer research
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  European market access requires navigating distinct HTA bodies with different evidence thresholds. NICE technology appraisals in England demand cost-per-QALY analysis against GBP 20,000–30,000 willingness-to-pay thresholds; G-BA AMNOG assessments in Germany focus on additional clinical benefit versus appropriate comparator; HAS CEPS pricing in France uses transparency committee recommendations that shape confidential negotiation corridors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  BioNixus payer research modules identify the specific objections each HTA body raises for your therapy class — extrapolation concerns, subgroup fragility, caregiver burden, implementation barriers — so HEOR teams refine models before submission rather than after rejection. NHS Integrated Care Board stewardship adds another layer: formulary decisions increasingly sit with ICS pharmacy leads rather than individual trust committees, requiring research instruments that capture both national HTA outcomes and local implementation friction.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Willingness-to-pay studies and pricing corridor analysis inform confidential negotiations with payers and authorities. BioNixus designs conjoint and discrete-choice experiments that reflect real formulary trade-offs — not hypothetical attribute lists divorced from committee evaluation rituals. Budget-impact models populated from locally observed treatment sequences reduce the rework cycle between payer interviews and HEOR deliverables, accelerating time-to-submission for SFDA EES, NICE, and G-BA dossiers.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Market access deliverables include payer interview reports, pricing corridor recommendations, HTA evidence gap analyses, cost-effectiveness model inputs, value proposition frameworks, and formulary positioning strategies aligned to SFDA EES, NICE, and NUPCO evaluation criteria. Request a scoped proposal via our contact form — typical turnaround for a methodological spine is within five business days.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  BioNixus serves pharmaceutical and medical device manufacturers across GCC, UK, EU5, and North Africa with market access research that connects prescriber behaviour to payer and procurement reality. Explore our healthcare market research hub for country-level programmes or the GCC market access guide for registration and tender context across all six Gulf states.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For Saudi Arabia specifically, SFDA EES submissions require coordinated budget-impact, cost-effectiveness, HTA, and payer research modules — see our dedicated HEOR consulting and Saudi payer market access research pages for the four evidence pillars scoped as one coordinated programme.
                </p>
              </div>
            </div>
          </section>
        )}

        {slug ? <ServiceMarketReferenceGuide serviceSlug={slug} /> : null}

        {/* CTA */}
        <section className="section-padding py-16 bg-primary">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground mb-4">
              {svc.ctaText}
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Tell us about your project and receive a tailored proposal within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
