import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import SchemaMarkup from '@/components/SchemaMarkup';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
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
    overview: 'BioNixus conducts rigorous quantitative healthcare market research designed to provide statistically robust evidence for pharmaceutical decision-making. Our physician surveys span multiple specialties and countries, delivering the data foundations your commercial, medical affairs, and market access teams need. Programmes include online and telephone HCP surveys (n=50–500+), conjoint and MaxDiff trade-off modules, market sizing with forecast bridges, and payer-adjacent quotas when tender or formulary decisions shape uptake — harmonised across GCC, UK, EU5, and North Africa with reproducible governance artefacts for affiliate and alliance diligence.',
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
      'GCC and MENA physician panel access with Arabic–English bilingual fieldwork',
      'Forecast bridge modules linking survey intent to operational adoption ceilings',
      'Pharmacist and procurement quotas when tender or formulary scoring drives prescribing',
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
      'GCC and MENA physician panel access with Arabic–English bilingual fieldwork',
      'Forecast bridge modules linking survey intent to operational adoption ceilings',
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

        {slug === 'quantitative-research' && (
          <section className="section-padding py-10 bg-background border-b border-border/60">
            <div className="container-wide max-w-4xl mx-auto">
              <GeoLLMAnswerBlock
                question="What does quantitative healthcare market research include at BioNixus?"
                answer="BioNixus quantitative healthcare research delivers statistically powered physician, pharmacist, and payer-adjacent surveys — n=50 to 500+ — with conjoint, MaxDiff, discrete choice, market sizing, and forecast bridges across GCC, UK, EU5, and MENA. Sampling aligns to subgroup decisions that move revenue, not headline significance alone."
                points={[
                  {
                    title: 'Physician & HCP surveys',
                    description:
                      'Online and telephone modules across 17+ EMEA markets with volume-stratified quotas, treatment-pattern tracking, and formulary preference studies.',
                  },
                  {
                    title: 'Trade-off & messaging science',
                    description:
                      'Conjoint, MaxDiff, and DCE designs under cognitive-load budgets clinicians can complete — ranking attributes that mirror real tender and prescribing decisions.',
                  },
                  {
                    title: 'Market sizing & forecasting',
                    description:
                      'Segmentation, adoption curves, and elasticity diagnostics bridging stated intent to operational ceilings — preventing exaggerated launch ramps.',
                  },
                  {
                    title: 'Payer-adjacent quant',
                    description:
                      'Pharmacist, procurement, and HTA decision-maker modules when substitution rules and tender scoring drive uptake — not physician-only panels.',
                  },
                  {
                    title: 'Governance-ready deliverables',
                    description:
                      'Leadership synthesis plus reproducible appendix layers — questionnaire versioning, quota logs, dashboard codebooks — for analytics governance and alliance diligence.',
                  },
                ]}
                summary="Request a quantitative research proposal through BioNixus contact — scoped to your target markets and decision timeline."
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
            {slug === 'quantitative-research' && (
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <h3 className="text-xl font-display font-semibold text-foreground">Quantitative methodology standards</h3>
                <p>
                  BioNixus quantitative programmes begin with a calibrated scope memo that defines hypotheses, minimally sufficient sample sizes, quota strata, and the commercial decisions the survey must resolve — launch sequencing, messaging prioritisation, access objection hierarchies, or forecast governance. Instrument design follows cognitive-load budgets: conjoint and MaxDiff modules avoid factorial explosions that clinicians abandon midstream, while vignettes anchor abstract attributes to ward, procurement, and stewardship rituals stakeholders actually encounter.
                </p>
                <p>
                  Field execution emphasises quota integrity and adaptive choreography. When recruiting friction spikes in a priority segment, BioNixus adjusts quotas transparently rather than silently biasing inference. Physician modules stratify by prescribing volume and corridor type; payer-adjacent modules include pharmacists and procurement stakeholders when tender scoring or formulary substitution drives behaviour. Cross-country programmes harmonise variable dictionaries while preserving local language modules and recruitment ethics appropriate to each market.
                </p>
                <p>
                  Deliverables bifurcate intentionally: concise leadership synthesis for governance meetings plus reproducible appendix layers — questionnaire versioning, quota logs, significance testing, dashboard codebooks — satisfying analytics governance and alliance diligence. Forecast bridges stress-test elasticity of stated intent against operational ceilings, preventing exaggerated adoption ramps that affiliates cannot operationalise. Teams integrating quant with qualitative forensics on the same hub programme reduce rework when segment hypotheses remain unstable after an initial wave.                   For methodology depth, see the quantitative healthcare market research guide linked above and the healthcare market research hub for integrated qual-quant programmes.
                </p>
              </div>
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

        {slug && SERVICE_EXPANDED_FAQS[slug]?.length ? (
          <section className="section-padding py-12 bg-muted/30" id={`${slug}-faq`}>
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {SERVICE_EXPANDED_FAQS[slug].map((faq) => (
                  <details key={faq.question} className="bg-card border border-border rounded-xl p-6">
                    <summary className="text-lg font-display font-semibold text-foreground cursor-pointer list-none">
                      {faq.question}
                    </summary>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
