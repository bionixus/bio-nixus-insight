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
                question="What are the best IQVIA alternatives for pharmaceutical competitive intelligence?"
                answer="BioNixus provides agile pharma competitive intelligence across EMEA — primary physician and payer research plus pipeline monitoring, launch readiness scorecards, and prescriber switching analysis. Unlike syndicated data vendors, BioNixus delivers decision-ready intelligence scoped to your therapy, country, and launch milestone."
                points={[
                  {
                    title: 'Primary research depth',
                    description:
                      'Verified HCP, payer, and procurement interviews — not desk-only syndicated tables — for launch and lifecycle decisions in GCC and EU5.',
                  },
                  {
                    title: 'Launch readiness modules',
                    description:
                      'Pipeline trackers, objection libraries, and scenario planning tied to SFDA, NUPCO, or NICE timelines.',
                  },
                  {
                    title: 'Prescriber switching & loyalty',
                    description:
                      'Quantitative and qualitative modules on brand loyalty, biosimilar defence, and account-level switching barriers.',
                  },
                  {
                    title: 'Linked IQVIA comparison hub',
                    description:
                      'See our IQVIA alternative page for a full competitor comparison and ranked alternatives for healthcare market research.',
                  },
                ]}
                summary="Commission competitive intelligence scoped to one launch, defence, or portfolio decision — not an annual syndicated subscription you cannot action."
              />
            </div>
          </section>
        )}

        {/* Overview */}
        <section className="section-padding py-12 bg-cream-dark">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{svc.overview}</p>
            {(slug === 'market-access' || slug === 'competitive-intelligence') && (
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                {slug === 'market-access'
                  ? 'BioNixus programmes are designed for pharmaceutical and medtech teams that need payer-ready evidence and pricing narratives — not slide decks that stall at the first formulary committee question. Every module ties to a dated milestone: SFDA EES submission, NICE appraisal, NUPCO tender defence, or emirate formulary review.'
                  : 'BioNixus competitive intelligence is built for launch, line extension, and defence decisions — combining pipeline awareness with verified prescriber, pharmacist, and payer voices in your therapy and geography. Outputs feed war-games, account plans, and medical affairs objection handling in the same quarter they are delivered.'}
              </p>
            )}
            {(slug === 'market-access' || slug === 'competitive-intelligence') && (
              <p className="text-muted-foreground leading-relaxed mt-4">
                Engagements typically run four to eight weeks from protocol sign-off to board-ready readout, depending on
                country count and stakeholder rarity — with daily quality dashboards during fieldwork and documented
                exclusion rules suitable for medical affairs and compliance review. Fixed-fee proposals are available
                for single-country modules; multi-country roll-ups use harmonised instruments with local appendices.
              </p>
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
          </div>
        </section>

        {/* Deliverables depth for legacy service pages */}
        {(slug === 'market-access' || slug === 'competitive-intelligence') && (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Example deliverables</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Deliverables are tailored to your milestone — launch, tender defence, HTA filing, or competitive
                war-game — with primary research verification documented for medical affairs and compliance reviewers.
                Each output lists evidence gaps, competitive implications, and recommended next research modules so
                commercial and medical teams can act in the same quarter.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground leading-relaxed">
                {(slug === 'market-access'
                  ? [
                      'Payer and formulary committee interview summaries with verbatim objections',
                      'Pricing corridor and willingness-to-pay analysis for confidential negotiations',
                      'HTA / SFDA EES evidence gap lists with recommended study modules',
                      'NUPCO or MOH tender defence briefs linked to procurement stakeholder research',
                      'Cross-country access sequencing memo for EU5 + GCC portfolio committees',
                      'Executive readout deck with owners, timelines, and next-step research options',
                    ]
                  : [
                      'Competitive landscape and pipeline tracker with probability-weighted scenarios',
                      'Prescriber switching and loyalty analysis with account-level barriers',
                      'Launch readiness scorecard with red/amber/green gates',
                      'KOL and treater influence map for message testing',
                      'Tender outcome and substitution post-mortem modules (GCC / EU5)',
                      'Quarterly CI briefing formatted for commercial and medical affairs alignment',
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

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

        {slug ? <ServiceMarketReferenceGuide serviceSlug={slug} /> : null}

        {(slug === 'market-access' || slug === 'competitive-intelligence') && (
          <section className="section-padding py-12 bg-muted/20">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                BioNixus {slug === 'market-access' ? 'market access' : 'competitive intelligence'} methodology
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {(slug === 'market-access'
                  ? [
                      {
                        title: 'Evidence and payer mapping',
                        body: 'Desk review of HTA precedents, formulary minutes where available, and payer landscape structure — then primary interviews to validate what committees actually ask during listing or tender defence.',
                      },
                      {
                        title: 'Pricing and WTP modules',
                        body: 'Confidential pricing corridor analysis supported by willingness-to-pay and budget-impact inputs sized to local epidemiology — especially for SFDA EES, NICE, and emirate formulary submissions.',
                      },
                      {
                        title: 'Stakeholder objection research',
                        body: 'Structured modules capture hospital pharmacist, procurement, and payer objections that block uptake after regulatory approval — closing the gap between registered and reimbursed.',
                      },
                      {
                        title: 'Action-oriented deliverables',
                        body: 'Outputs include evidence gap lists, negotiation narratives, and sequenced access milestones with owners — formatted for internal access, medical, and commercial alignment rather than static landscape decks.',
                      },
                    ]
                  : [
                      {
                        title: 'Landscape and pipeline monitoring',
                        body: 'Structured tracking of competitor trials, label changes, and launch signals in your therapy and geography — filtered to decisions you can action this quarter.',
                      },
                      {
                        title: 'Primary prescriber and payer research',
                        body: 'Verified HCP, pharmacist, and payer interviews on switching barriers, loyalty drivers, and message credibility — the layer syndicated datasets cannot supply.',
                      },
                      {
                        title: 'Launch readiness scorecards',
                        body: 'Checklists weighting evidence, access, account preparedness, and competitive noise before launch or line extension — with explicit red/amber/green gates for portfolio committees.',
                      },
                      {
                        title: 'Scenario and defence planning',
                        body: 'War-game modules for biosimilar entry, tender loss, or new competitor data — linking intelligence to account plans and medical affairs responses.',
                      },
                    ]
                ).map((item) => (
                  <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {(slug === 'market-access' || slug === 'competitive-intelligence') && (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {slug === 'market-access' ? 'When teams commission market access research' : 'When teams commission competitive intelligence'}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {slug === 'market-access' ? (
                  <>
                    <p>
                      Market access consulting is most valuable when a single reimbursement or listing decision carries
                      material revenue risk — for example SFDA Economic Evaluation Submission ahead of NUPCO tender
                      participation, NICE technology appraisal sequencing, or UAE emirate formulary positioning for a
                      high-cost biologic. BioNixus scopes payer, physician, and procurement modules around that milestone
                      rather than delivering generic landscape slides.
                    </p>
                    <p>
                      Typical programmes combine HTA evidence-gap analysis, willingness-to-pay or budget-impact inputs,
                      hospital formulary committee objection research, and pricing corridor analysis for confidential
                      negotiations. Outputs are structured for internal access, medical, and commercial alignment — see
                      also our{' '}
                      <Link to="/gcc-market-access-guide" className="text-primary hover:underline font-medium">
                        GCC market access guide
                      </Link>{' '}
                      and{' '}
                      <Link to="/healthcare-market-research/services/market-access" className="text-primary hover:underline font-medium">
                        healthcare hub market access service
                      </Link>
                      .
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Competitive intelligence is most actionable when tied to a launch, defence, or line-extension
                      decision — for example mapping biosimilar switch barriers after a Gulf tender award, building an
                      objection library before a Japan OR platform launch, or stress-testing pipeline assumptions ahead of
                      a portfolio committee. BioNixus blends primary HCP and payer research with structured landscape
                      monitoring so intelligence feeds account plans, not inbox clutter.
                    </p>
                    <p>
                      For teams evaluating syndicated vendors, compare scope and turnaround against our{' '}
                      <Link to="/iqvia-alternative" className="text-primary hover:underline font-medium">
                        IQVIA alternatives guide
                      </Link>{' '}
                      — then commission therapy-specific CI modules via{' '}
                      <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                        healthcare market research
                      </Link>{' '}
                      when primary validation is required.
                    </p>
                    <p>
                      Minimum engagement is USD 20,000 for a scoped CI module with verified prescriber or payer
                      interviews. Programmes typically cover EU5, UK, GCC, Egypt, or Japan — with bilingual
                      Arabic–English fieldwork in Gulf countries and therapy-specific sampling rather than one global
                      average. BioNixus documents exclusion rules and quality dashboards during fieldwork so medical
                      affairs and compliance teams can reuse outputs in launch war-games and account plans.
                    </p>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {(slug === 'market-access' || slug === 'competitive-intelligence') && (
          <section className="section-padding py-12">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
              <div className="space-y-3">
                {(slug === 'market-access'
                  ? [
                      {
                        q: 'Does BioNixus support both EU HTA and GCC access in one programme?',
                        a: 'Yes. Many manufacturers sequence EU5 HTA dossiers alongside SFDA registration and Gulf tender planning. BioNixus aligns sample frames and evidence modules so payer narratives stay consistent while respecting country-specific committee questions.',
                      },
                      {
                        q: 'What is the difference between market access consulting and HEOR?',
                        a: 'HEOR produces economic models and evidence summaries; market access consulting applies those outputs to payer engagement, pricing corridors, and formulary strategy. BioNixus integrates both when SFDA EES, NICE, or emirate formulary submissions require linked quantitative and qualitative modules.',
                      },
                      {
                        q: 'How quickly can a market access proposal be scoped?',
                        a: 'BioNixus typically returns a scoped proposal within one business day once target countries, therapy area, and decision milestone are confirmed — with feasibility notes for Saudi, UAE, or EU5 payer recruitment.',
                      },
                      {
                        q: 'Which GCC markets does BioNixus cover for access consulting?',
                        a: 'Saudi Arabia, UAE, Kuwait, Qatar, Oman, and Bahrain — with dedicated modules for SFDA EES, NUPCO tenders, MOHAP/DHA/DOH formularies, and hospital procurement. Egypt and wider MENA access research is available when portfolio sequencing requires it.',
                      },
                      {
                        q: 'Can market access research inform tender defence?',
                        a: 'Yes. BioNixus interviews pharmacists, procurement officers, and committee stakeholders on award criteria, substitution behaviour, and budget-impact sensitivities — producing tender defence narratives tied to real committee questions rather than template slides.',
                      },
                      {
                        q: 'Does BioNixus integrate RWE with access strategy?',
                        a: 'Yes. Real-world evidence modules can feed SFDA EES, NICE, and emirate formulary narratives when utilization or persistence claims must be validated locally. BioNixus designs linked RWE and access fieldwork so economic models and payer interviews draw from one evidence architecture — reducing rework between HEOR, medical, and access teams at tender or appraisal milestones.',
                      },
                    ]
                  : [
                      {
                        q: 'How is BioNixus competitive intelligence different from IQVIA or Kantar?',
                        a: 'BioNixus focuses on primary research and decision-ready synthesis for your therapy and country — not syndicated datasets sold across competitors. Turnaround and sample verification are scoped to launch or defence milestones you can action this quarter.',
                      },
                      {
                        q: 'Can competitive intelligence include prescriber switching research?',
                        a: 'Yes. Modules quantify loyalty, switching barriers, and account-level substitution behaviour after tenders or guideline changes — especially relevant for biosimilars, oncology line extensions, and device platform defence in Japan or the GCC.',
                      },
                      {
                        q: 'Do you monitor competitor pipelines?',
                        a: 'Yes. Pipeline trackers and launch readiness scorecards complement primary interviews — with probability-weighted scenarios for portfolio committees rather than undifferentiated news feeds.',
                      },
                      {
                        q: 'Which regions does BioNixus cover for pharma CI?',
                        a: 'EU5, UK, GCC, Egypt, and selected APAC markets — with bilingual Arabic–English fieldwork in Gulf countries and therapy-specific modules rather than one global average.',
                      },
                      {
                        q: 'Can CI modules run before a launch war-game?',
                        a: 'Yes. BioNixus builds objection libraries and scenario briefs designed for launch war-games — linking prescriber, payer, and account intelligence to red-team exercises commercial and medical affairs teams run before approval or tender milestones.',
                      },
                      {
                        q: 'How often should CI trackers update during launch year?',
                        a: 'Monthly cadence is typical for competitive launch windows, with weekly sprints around label changes, tender awards, or congress data releases. BioNixus aligns tracker granularity to decisions on the calendar — avoiding undifferentiated news feeds that portfolio teams stop reading while still surfacing signals that change account plans.',
                      },
                    ]
                ).map((faq) => (
                  <details key={faq.q} className="rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-semibold text-foreground">{faq.q}</summary>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {(slug === 'market-access' || slug === 'competitive-intelligence') && (
          <section className="section-padding py-12">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                {slug === 'market-access' ? 'Regional access depth' : 'Regional competitive intelligence depth'}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {slug === 'market-access' ? (
                  <>
                    <p>
                      In Saudi Arabia, BioNixus connects SFDA registration sequencing with NUPCO tender mapping and SFDA
                      Economic Evaluation Submission requirements — so pricing, HEOR, and procurement research inform one
                      access timeline rather than three disconnected workstreams. In the UAE, emirate-specific DHA and
                      DOH formulary behaviour requires separate payer modules even when MOHAP national registration is
                      complete — a pattern that also applies to Kuwait MOH tenders and Qatar MOPH/Hamad procurement for
                      hospital-administered therapies.
                    </p>
                    <p>
                      In EU5, access modules align to NICE, G-BA/IQWiG, HAS, AIFA, and AEMPS expectations — with
                      primary payer interviews validating which economic endpoints committees weight for your therapeutic
                      class. Egypt EDA and broader MENA modules are available when portfolio sequencing spans Gulf and
                      North Africa launches in the same year.
                    </p>
                    <p>
                      Request a scoped access proposal via our{' '}
                      <Link to="/contact" className="text-primary hover:underline font-medium">
                        contact form
                      </Link>{' '}
                      — or start from the{' '}
                      <Link to="/heor-consulting-saudi-arabia" className="text-primary hover:underline font-medium">
                        HEOR consulting Saudi Arabia
                      </Link>{' '}
                      pillar when SFDA Economic Evaluation Submission is on your critical path.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Competitive intelligence in the GCC often centres on tender outcomes, biosimilar substitution, and
                      prescriber switching after NUPCO or MOH awards — not pipeline slides alone. BioNixus runs primary
                      modules with oncologists, hospital pharmacists, and procurement officers to explain why incumbents
                      retain share despite price pressure, and which message themes actually move switching in government
                      formularies versus private hospitals.
                    </p>
                    <p>
                      In EU5 and the UK, CI programmes track competitor label expansions, HTA wins, and account-level
                      defence narratives — linked to prescriber objection libraries suitable for medical affairs and
                      commercial teams. For Japan and APAC device or surgical portfolios, modules isolate OR and
                      procurement dynamics that generic MedTech CI reports bury inside imaging capital headlines.
                    </p>
                    <p>
                      BioNixus competitive intelligence is scoped to one decision owner and milestone — with verified
                      primary research, explicit limitations, and board-ready synthesis. Request a proposal through our{' '}
                      <Link to="/contact" className="text-primary hover:underline font-medium">
                        contact form
                      </Link>{' '}
                      or explore the{' '}
                      <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                        healthcare market research hub
                      </Link>{' '}
                      for linked country and therapy modules. For IQVIA comparison detail, see{' '}
                      <Link to="/iqvia-alternative" className="text-primary hover:underline font-medium">
                        IQVIA alternatives
                      </Link>
                      .
                    </p>
                    <p>
                      Typical competitive intelligence engagements include pipeline monitoring, prescriber objection
                      libraries, and launch readiness scorecards — delivered in formats medical affairs, commercial,
                      and new-product planning teams can use without re-analysing raw transcripts.
                    </p>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

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
