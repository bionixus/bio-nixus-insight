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
import { SERVICE_EXPANDED_FAQS, SERVICE_HERO_EXTENSIONS } from '@/data/seo/serviceExpandedPageContent';
import { FAQSection } from '@/components/healthcare-research/FAQSection';

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
    overview: 'BioNixus delivers qualitative pharmaceutical research that goes beyond surface-level insights. Through structured in-depth interviews, focus groups, and advisory boards with Key Opinion Leaders, treating physicians, payers, and hospital decision-makers, we uncover the clinical realities and unmet needs that shape treatment decisions. Neutral moderation, explicit saturation criteria, and probing ladders surface operational specifics when clinicians retreat to platitudes—rescuing inference before flawed quant reruns amplify cost across MENA, UK, and EU5 programmes.',
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
    overview: 'BioNixus provides pharma competitive intelligence services that enable strategic decision-making. Our analysts combine primary physician research with secondary intelligence to deliver comprehensive landscape assessments, pipeline analyses, and launch readiness evaluations tailored to EMEA markets — the competitive intelligence pharmaceutical commercial, medical affairs, and new-product-planning teams rely on for launch and lifecycle decisions. Monitoring ties external signals to explicit KPI owners—account prioritisation, medical education emphasis, HEOR counter-moves, and tender defence—rather than ambient newsletters without action hooks.',
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
    overview: 'BioNixus supports pharmaceutical and biotech clinical development programmes with research-driven intelligence. We leverage our physician networks and healthcare system knowledge to inform site identification, assess recruitment feasibility, and gather protocol feedback from treating investigators across EMEA. Site shortlists are annotated with operational risk tags—diagnostic backlogs, competing trials, nursing bandwidth, and transportation friction—so sponsors de-risk geography before CRO commitment rather than discovering capacity gaps after protocol activation.',
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
    overview: 'BioNixus delivers KOL and stakeholder mapping that goes beyond publication counts. Our approach combines primary engagement, peer nomination studies, and network analysis to identify the physicians and decision-makers who truly influence prescribing, formulary access, and clinical practice in your therapeutic area. Influence maps prioritise decision leverage—initiation, switching, protocol adoption—over connectivity aesthetics, linking advisory blueprinting and MSL deployment to behavioural evidence compliance teams can audit across UK, EU5, GCC, and North Africa affiliate planning cycles.',
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

const GEO_ANSWER_BY_SLUG: Record<
  string,
  { question: string; answer: string; points: { title: string; description: string }[]; summary: string }
> = {
  'competitive-intelligence': {
    question: 'What does pharmaceutical competitive intelligence include for EMEA launches?',
    answer:
      'BioNixus pharmaceutical competitive intelligence combines primary prescriber and account probes with pipeline, congress, and access monitoring—mapped to launch sequencing, tender defence, and medical education priorities across EU5, GCC, and North Africa.',
    points: [
      {
        title: 'Decision-linked monitoring',
        description:
          'Pipeline probability, switching barriers, and access objections tied to explicit KPI owners—not ambient newsletters without action hooks.',
      },
      {
        title: 'Primary + secondary fusion',
        description:
          'Structured field modules validate whether syndicated share shifts actually change prescribing or procurement in priority accounts.',
      },
      {
        title: 'Launch readiness scorecards',
        description:
          'Scenario planning for analogue erosion, biosimilar pressure, and procurement rule changes mid-year.',
      },
      {
        title: 'Compliance-safe documentation',
        description:
          'Source-graded summaries and firewalls separating intelligence from promotional planning.',
      },
    ],
    summary: 'Request a competitive intelligence scope via BioNixus contact—aligned to your therapy area and priority EMEA markets.',
  },
  'qualitative-research': {
    question: 'When should pharmaceutical teams use qualitative research instead of quantitative surveys alone?',
    answer:
      'BioNixus qualitative pharmaceutical research reveals payer skepticism, stewardship interactions, and operational frictions that flatten in quantitative distributions—using neutral IDIs, triads, and panels with explicit saturation criteria across MENA, UK, and EU5.',
    points: [
      {
        title: 'Rescue stalled quant',
        description:
          'When flat distributions hide polarised camps or vignettes mis-specify clinically realistic alternatives.',
      },
      {
        title: 'Payer-adjacent depth',
        description:
          'Economic reluctance masquerading as clinical caution—informing HEOR refinement and tender defence.',
      },
      {
        title: 'Multilingual moderation',
        description:
          'Arabic, French, and European field protocols preserving local decision authenticity with harmonised codebooks.',
      },
      {
        title: 'Workshop translation',
        description:
          'Objection hierarchies linked to medical education arcs and brand message tests affiliates can execute.',
      },
    ],
    summary: 'Discuss qualitative module design on the BioNixus contact form—standalone or sequenced with quant on the same programme.',
  },
  'kol-stakeholder-mapping': {
    question: 'How does KOL mapping differ from speaker bureau lists in pharmaceutical research?',
    answer:
      'BioNixus KOL mapping prioritises decision leverage—who moves initiation, switching, and protocol adoption—over connectivity aesthetics, mapping guideline footprints, referral gravity, and multidisciplinary convening centrality across UK, EU5, and GCC markets.',
    points: [
      {
        title: 'Influence vs prominence',
        description:
          'Protocol veto players, biopsy referral accelerators, and pharmacist opinion leaders—not speaker frequency alone.',
      },
      {
        title: 'Advisory blueprinting',
        description:
          'Roster recommendations linked to specific decision types medical affairs and commercial teams must align on.',
      },
      {
        title: 'Congress and MSL alignment',
        description:
          'Engagement calendars that follow behavioural evidence rather than ceremonial visibility.',
      },
      {
        title: 'Ethical documentation',
        description:
          'Behavioural observation without inducement distortions; transparency for compliance teams.',
      },
    ],
    summary: 'Commission KOL mapping through BioNixus contact—scoped to therapy area, institution types, and affiliate planning cycles.',
  },
  'clinical-trial-support': {
    question: 'What clinical trial feasibility research does BioNixus provide in the GCC and EMEA?',
    answer:
      'BioNixus clinical trial support maps site-level operational reality—investigator capacity, patient flow, ethics timelines, and competing protocols—across Saudi Arabia, UAE, EU5, and North Africa before sponsors commit geography to a protocol.',
    points: [
      {
        title: 'Site ranking with risk tags',
        description:
          'Enrolment capacity beyond optimistic feasibility questionnaires—diagnostic backlogs and competing trials included.',
      },
      {
        title: 'Regulatory rhythm mapping',
        description:
          'SFDA, institutional ethics, and ICH-GCP conduct expectations that shift start-up timelines materially.',
      },
      {
        title: 'Investigator network maps',
        description:
          'Credible PIs and research-active KOLs by therapy area with trial experience and referral gravity.',
      },
      {
        title: 'Pre-launch bridges',
        description:
          'Recruitment friction feeding medical narrative testing and RWE planning before commercial readiness clocks diverge.',
      },
    ],
    summary: 'Request trial feasibility scope via BioNixus contact—site lists, indication, and target GCC or European markets.',
  },
};

const SERVICE_FAQ_SLUG_ALIASES: Record<string, string> = {
  'kol-stakeholder-mapping': 'kol-mapping',
};

function resolveServiceFaqSlug(slug: string): string {
  return SERVICE_FAQ_SLUG_ALIASES[slug] ?? slug;
}

function mergeServiceFaqs(
  slug: string,
  base: { question: string; answer: string }[],
): { question: string; answer: string }[] {
  const extra = SERVICE_EXPANDED_FAQS[resolveServiceFaqSlug(slug)];
  if (!extra?.length) return base;
  const seen = new Set(base.map((item) => item.question.toLowerCase()));
  const appended = extra.filter((item) => !seen.has(item.question.toLowerCase()));
  return [...base, ...appended];
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const svc = slug ? serviceData[slug] : undefined;
  const faqItems = slug
    ? mergeServiceFaqs(
        slug,
        slug === 'quantitative-research'
          ? SERVICE_EXPANDED_FAQS['quantitative-research']
          : slug === 'market-access'
            ? SERVICE_EXPANDED_FAQS['market-access']
            : [],
      )
    : [];
  const geoAnswer = slug ? GEO_ANSWER_BY_SLUG[slug] : undefined;
  const heroExtension = slug
    ? SERVICE_HERO_EXTENSIONS[slug] ?? SERVICE_HERO_EXTENSIONS[resolveServiceFaqSlug(slug)]
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
            {heroExtension ? (
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">{heroExtension}</p>
            ) : null}
          </div>
        </section>

        {geoAnswer ? (
          <section className="section-padding py-10 bg-background border-b border-border/60">
            <div className="container-wide max-w-4xl mx-auto">
              <GeoLLMAnswerBlock
                question={geoAnswer.question}
                answer={geoAnswer.answer}
                points={geoAnswer.points}
                summary={geoAnswer.summary}
              />
            </div>
          </section>
        ) : null}

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

        {slug === 'qualitative-research' ? (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Qualitative depth that rescues inference before flawed quant reruns
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Qualitative programmes earn budget when they change HEOR refinement priorities, medical education arcs,
                  and pricing narrative tests—not when quote decks accumulate without KPI owners. BioNixus applies neutral
                  moderation, explicit saturation criteria, and probing ladders that surface operational specifics when
                  clinicians retreat to platitudes.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  Multi-country modules harmonise thematic codes for regional roll-ups while tagging irreducible cultural
                  divergences affiliates must respect. Pair with{' '}
                  <Link to="/healthcare-market-research/services/quantitative-research" className="text-primary font-medium hover:underline">
                    quantitative research
                  </Link>
                  ,{' '}
                  <Link to="/healthcare-market-research/services/market-access" className="text-primary font-medium hover:underline">
                    market access research
                  </Link>
                  , and{' '}
                  <Link to="/patient-journey-research-gcc" className="text-primary font-medium hover:underline">
                    patient journey research in the GCC
                  </Link>{' '}
                  when qual depth must inform access, medical, and brand planning in the same governance cycle. Optional
                  workshops translate saturation-stable themes into quarterly action plans affiliates can execute without
                  reconstructing methodology from transcript archives alone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">Typical qualitative modules</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Rescue diagnostics when quant distributions flatten but polarised camps drive revenue',
                    'Payer-adjacent IDIs isolating skepticism that should inform HEOR and tender defence',
                    'Multilingual moderation in Arabic, French, and European protocols with harmonised codebooks',
                    'Saturation documentation by role, corridor, and decision type for governance review',
                    'Workshop translation from theme libraries to medical education and message tests',
                    'Explicit linkage tables from qual findings to KPI owners across medical, brand, and access',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {slug === 'kol-stakeholder-mapping' ? (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Influence maps that move consensus—not speaker bureau frequency alone
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  KOL mapping prioritises decision leverage—who moves initiation, switching, and protocol adoption—over
                  connectivity aesthetics that compliance teams cannot action. BioNixus maps guideline footprints, referral
                  gravity, and multidisciplinary convening centrality relative to bottlenecks that gate uptake in each market.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  Outputs elevate advisory blueprinting, congress engagement calendars, and MSL territory design so engagement
                  spend follows behavioural evidence. See{' '}
                  <Link to="/kol-mapping-saudi-arabia-oncology" className="text-primary font-medium hover:underline">
                    oncology KOL mapping in Saudi Arabia
                  </Link>{' '}
                  and{' '}
                  <Link to="/msl-insight-research-middle-east" className="text-primary font-medium hover:underline">
                    MSL insight research in the Middle East
                  </Link>{' '}
                  for country-specific examples tied to the same influence taxonomy. Pharmacist and stewardship opinion-leader
                  tiers are mapped where substitution confidence gates uptake—especially when economic reluctance masquerades as
                  clinical caution in hospital and tender contexts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">Typical KOL mapping modules</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Peer nomination and structured referral probes to surface hidden accelerators beyond publication lists',
                    'Guideline committee footprint mapping tied to initiation and switching decision types',
                    'Pharmacist and stewardship opinion-leader tiers where substitution confidence gates uptake',
                    'Multidisciplinary convening centrality for tumour boards, stewardship committees, and procurement coalitions',
                    'Congress and publication tracking linked to consensus shifts—not vanity speaker frequency',
                    'Advisory roster recommendations with explicit decision relevance and compliance-safe documentation',
                    'Investigator shortlists where referral gravity accelerates trial enrolment beyond publication prominence',
                    'Workshop facilitation translating influence maps into quarterly MSL and congress engagement calendars',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {slug === 'competitive-intelligence' ? (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  How BioNixus turns competitor signals into launch decisions
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Competitive intelligence programmes fail when monthly newsletters accumulate without changing account prioritisation,
                  medical education emphasis, or access narrative tests. BioNixus structures monitoring around decision hooks:
                  which accounts to defend in tender cycles, which HEOR counter-moves to prepare before dossier resubmission,
                  and which prescriber segments show switching elasticity when biosimilar or follow-on pressure intensifies.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  Primary modules validate secondary share shifts through structured prescriber and pharmacist probes—especially
                  where economic reluctance masquerades as clinical caution. Pair with{' '}
                  <Link to="/pharmaceutical-competitor-intelligence" className="text-primary font-medium hover:underline">
                    pharmaceutical competitor intelligence
                  </Link>
                  ,{' '}
                  <Link to="/services/market-access" className="text-primary font-medium hover:underline">
                    market access research
                  </Link>
                  , and the{' '}
                  <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                    healthcare market research hub
                  </Link>{' '}
                  when launch, access, and field teams must share one competitor narrative.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">Typical engagement modules</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Pipeline probability-weighted scenarios with explicit analogue erosion stress tests',
                    'Prescriber switching and brand loyalty forensics by volume stratum and institution type',
                    'Congress and publication tracking linked to KOL consensus shifts—not vanity speaker lists',
                    'Tender defence intelligence where Gulf procurement scoring overlays medical claims',
                    'Launch readiness scorecards connecting access timing to field investment gates',
                    'Quarterly briefings annotated by decision relevance and KPI ownership tables',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {slug === 'clinical-trial-support' ? (
          <section className="section-padding py-12 bg-cream-dark">
            <div className="container-wide max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Feasibility research that mirrors site-level operational reality
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Protocol enthusiasm among investigators does not equal recruitment velocity. BioNixus maps diagnostic backlogs,
                  competing trials cannibalising the same patients, nursing bandwidth for visit schedules, laboratory turnaround
                  variance, and transportation friction in dispersed geographies—outputs annotated with risk tags sponsors can
                  action without redundant qualification travel.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  GCC start-up runs through SFDA and institutional ethics rhythms that differ materially from EU5 templates.
                  Connect feasibility with{' '}
                  <Link to="/gcc-clinical-trials-market" className="text-primary font-medium hover:underline">
                    GCC clinical trials market intelligence
                  </Link>
                  ,{' '}
                  <Link to="/services/kol-stakeholder-mapping" className="text-primary font-medium hover:underline">
                    KOL mapping
                  </Link>
                  , and{' '}
                  <Link to="/healthcare-market-research/saudi-arabia" className="text-primary font-medium hover:underline">
                    Saudi Arabia healthcare market research
                  </Link>{' '}
                  when R&D and commercial readiness clocks overlap on the same therapy area. Diversity and representation
                  goals are mapped honestly—structural barriers surfaced early rather than performative site lists that fail
                  at activation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">Typical feasibility modules</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Site ranking with risk tags for diagnostic backlogs and competing trials cannibalising patients',
                    'Investigator profiling through structured IDIs—not optimistic self-reported capacity alone',
                    'GCC SFDA and ethics rhythm mapping distinct from EU5 protocol templates',
                    'Patient flow approximations and retention friction in dispersed geographies',
                    'Protocol feedback from treating physicians before amendment costs accumulate',
                    'Competitive trial landscape reports linking sites to enrolment competition intensity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {slug ? <ServiceMarketReferenceGuide serviceSlug={slug} /> : null}

        {faqItems.length > 0 ? (
          <FAQSection
            title={`${svc.title} — frequently asked questions`}
            items={faqItems}
            sectionId={`service-${slug}-faq`}
            className="bg-muted/30"
          />
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
