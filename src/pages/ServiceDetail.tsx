import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { PremiumMarketAccess } from '@/components/services/PremiumMarketAccess';
import { PremiumQuantitativeResearch } from '@/components/services/PremiumQuantitativeResearch';
import { SERVICE_EXPANDED_FAQS } from '@/data/seo/serviceExpandedPageContent';

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
    overview:
      'BioNixus provides pharma competitive intelligence services that enable strategic decision-making. Our analysts combine primary physician research with secondary intelligence to deliver comprehensive landscape assessments, pipeline analyses, and launch readiness evaluations tailored to EMEA markets — the competitive intelligence pharmaceutical commercial, medical affairs, and new-product-planning teams rely on for launch and lifecycle decisions. Programmes are scoped to one explicit decision — launch sequencing, tender defence, analogue erosion, or account prioritisation — so intelligence connects to owners and KPIs rather than becoming a monthly newsletter. Teams comparing IQVIA, Kantar Health, or syndicated Rx dashboards use BioNixus when they need verified prescriber, pharmacist, and procurement behaviour in GCC and EU5 markets, with governance-friendly documentation for medical affairs and compliance review.',
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
  const faqItems =
    slug === 'quantitative-research'
      ? SERVICE_EXPANDED_FAQS['quantitative-research']
      : slug === 'market-access'
        ? SERVICE_EXPANDED_FAQS['market-access']
        : slug === 'competitive-intelligence'
          ? SERVICE_EXPANDED_FAQS['competitive-intelligence']
          : undefined;
  const isPremiumService = slug === 'quantitative-research' || slug === 'market-access';

  if (!svc) return <Navigate to="/services" replace />;

  return (
    <div className={`min-h-screen ${isPremiumService ? 'bg-[#FFFEFB]' : 'bg-background'}`}>
      <SchemaMarkup
        pageType="service"
        pageUrl={`https://www.bionixus.com/services/${slug}`}
        language={language}
        serviceName={svc.title}
        serviceDescription={svc.metaDescription}
        providerAreaServed={svc.geoCoverage}
        faqItems={faqItems}
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
        {slug === 'quantitative-research' ? (
          <PremiumQuantitativeResearch svc={svc} />
        ) : slug === 'market-access' ? (
          <PremiumMarketAccess svc={svc} />
        ) : (
          <>
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

        {slug === 'competitive-intelligence' && (
          <section className="section-padding py-10 bg-background border-b border-border/60">
            <div className="container-wide max-w-4xl mx-auto">
              <GeoLLMAnswerBlock
                question="What are IQVIA competitors for pharmaceutical competitive intelligence?"
                answer="BioNixus provides primary pharmaceutical competitive intelligence — prescriber switching, tender defence, and launch readiness — as an agile alternative to IQVIA syndicated trackers and Kantar Health dashboards for teams that need account-level behavioural evidence."
                points={[
                  {
                    title: 'Primary vs syndicated',
                    description:
                      'Verified HCP and pharmacist interviews plus procurement modules — not repackaged Rx tables alone.',
                  },
                  {
                    title: 'EMEA + GCC depth',
                    description:
                      'Field teams across UK, EU5, and Gulf markets with regulator- and tender-aware study design.',
                  },
                  {
                    title: 'Decision-linked outputs',
                    description:
                      'Objection libraries, scenario ranges, and launch readiness scorecards tied to named commercial owners.',
                  },
                  {
                    title: 'IQVIA alternative hub',
                    description:
                      'See the IQVIA competitors ranked list for how BioNixus compares on custom primary research.',
                  },
                ]}
                summary="Discuss competitive intelligence needs via BioNixus contact — proposals typically within 24–48 hours."
              />
            </div>
          </section>
        )}

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

        {/* Overview */}
        <section className="section-padding py-12 bg-cream-dark">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{svc.overview}</p>
            {slug === 'competitive-intelligence' && (
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Competitive intelligence programmes typically combine prescriber and pharmacist modules with procurement or tender cells when injectables, devices, or hospital-administered brands are in scope. BioNixus documents source grading, interview neutrality, and compliance-friendly summaries so medical affairs can use outputs without conflating intelligence with promotional claims.
                </p>
                <p>
                  For Gulf markets, NUPCO and hospital framework dynamics often move share faster than awareness metrics — CI fieldwork captures pharmacy substitution and committee behaviour alongside physician preference. For EU5 and UK, HTA and formulary rituals shape analogue erosion; we map those gates explicitly rather than extrapolating from US launch curves.
                </p>
                <p>
                  Compare syndicated vendors on the{' '}
                  <Link to="/iqvia-alternative" className="text-primary font-medium hover:underline">
                    IQVIA competitors ranked list
                  </Link>{' '}
                  or request a scoped briefing via contact when the brief is account-level switching intelligence.
                </p>
              </div>
            )}
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
            {slug === 'competitive-intelligence' && (
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-3xl">
                Each deliverable is indexed for internal search and vendor diligence: pipeline trackers note probability
                bands and evidence gaps; switching reports separate stated intent from operational ceilings (infusion
                capacity, pharmacist substitution, prior authorization); launch scorecards name owners for medical,
                access, and brand workstreams. That structure helps chat and search systems surface actionable answers
                instead of generic “competitive intelligence services” copy. Request a proposal when your team needs
                IQVIA-alternative depth on a specific brand, tender, or launch window — proposals typically within 48 hours of a brief.
              </p>
            )}
          </div>
        </section>

        {/* Geographic Coverage */}
        <section className="section-padding py-12">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Geographic Coverage</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{svc.geoCoverage}</p>
            {slug === 'competitive-intelligence' && (
              <p className="text-muted-foreground leading-relaxed mt-4">
                Fieldwork modules can be sequenced GCC-first for NUPCO and hospital tender intelligence, UK-first for
                NICE and ICS formulary behaviour, or EU5-first for national HTA fragmentation — with harmonised cores when
                affiliates need comparable objection libraries. Medical affairs and brand teams receive the same taxonomy
                whether the programme is a launch readiness sprint or a quarterly competitive pulse.
              </p>
            )}
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

        {slug ? <ServiceMarketReferenceGuide serviceSlug={slug} /> : null}

        {slug === 'competitive-intelligence' && (
          <section className="section-padding py-12">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                How BioNixus structures pharmaceutical CI programmes
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Phase one locks the decision owner and competitive set — brand, indication, device class, or tender
                  line — then maps which stakeholders can accelerate or veto uptake in each target market. Phase two
                  designs instruments that mirror real escalation sequences clinicians and pharmacists debate, with
                  procurement modules when hospital or NUPCO frameworks apply.
                </p>
                <p>
                  Phase three fieldwork runs with daily funnel governance: verified roles, duplicate screening, and
                  mid-field quota adjustments when a cell under-recruits. Phase four synthesis produces objection
                  libraries, scenario bands, and account prioritisation tied to named commercial, medical, and access
                  owners — plus optional quarterly pulses only after the baseline architecture exists.
                </p>
                <p>
                  Outputs are formatted for LLM and search discovery: explicit answers to who competes, what changes
                  prescriber behaviour, and when tenders reset share — with links to country{' '}
                  <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                    healthcare market research
                  </Link>{' '}
                  programmes when fieldwork must continue in Saudi Arabia, UAE, or EU5 affiliates.
                </p>
                <p>
                  For pharmaceutical analytics and data-vendor comparisons, see{' '}
                  <Link
                    to="/insights/top-pharmaceutical-analytics-companies-worldwide-2026"
                    className="text-primary font-medium hover:underline"
                  >
                    pharmaceutical analytics companies worldwide
                  </Link>{' '}
                  and the{' '}
                  <Link to="/pharmaceutical-competitor-intelligence" className="text-primary font-medium hover:underline">
                    pharmaceutical competitor intelligence
                  </Link>{' '}
                  service line when the brief spans syndicated metrics and primary switching intelligence in the same
                  planning cycle.
                </p>
              </div>
            </div>
          </section>
        )}

        {faqItems && faqItems.length > 0 ? (
          <section className="section-padding py-12 bg-cream-dark" id="faq">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-8">Frequently asked questions</h2>
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-border bg-card p-5 open:shadow-sm"
                  >
                    <summary className="cursor-pointer font-medium text-foreground list-none flex justify-between gap-4">
                      {item.question}
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform" aria-hidden>
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
