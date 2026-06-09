import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  BarChart2,
  Users,
  Search,
  TrendingUp,
  Globe,
  ShieldCheck,
  FlaskConical,
  Building2,
  Cpu,
  Banknote,
  Leaf,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
  Layers,
  Target,
  Microscope,
  Activity,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas'

const BASE_URL = 'https://www.bionixus.com'
const PAGE_URL = `${BASE_URL}/market-study`

// ── Schema ────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: 'What is a market study?',
    answer:
      'A market study is a structured investigation of a specific market, product category, geographic territory, or target audience. It gathers quantitative and qualitative evidence to inform commercial, strategic, or policy decisions. Market studies answer questions about market size, demand, competition, pricing dynamics, customer behaviour, and barriers to entry. The terms "market study" and "market research" are often used interchangeably, though "market study" frequently refers to a bounded, project-specific investigation while "market research" can describe an ongoing programme of intelligence gathering.',
  },
  {
    question: 'What are the main types of market studies?',
    answer:
      'The six principal types are: (1) Qualitative market studies — in-depth interviews, focus groups, and advisory boards that explore motivations, attitudes, and context; (2) Quantitative market studies — surveys and structured data collection that measure incidence, prevalence, and statistical patterns; (3) Market sizing and opportunity assessment — estimating total addressable market (TAM), growth rates, and segment potential; (4) Competitive intelligence studies — systematic mapping of competitor positioning, capabilities, pricing, and strategy; (5) Brand and perception studies — measuring awareness, consideration, preference, and message recall among target audiences; (6) Market access and payer studies — evaluating reimbursement pathways, willingness-to-pay, and healthcare system decision logic, especially relevant in pharmaceutical and medtech markets.',
  },
  {
    question: 'What is the difference between a market study and market research?',
    answer:
      'A market study is typically a discrete, objective-bound project with a defined scope and deliverable — for example, "assess prescriber demand for a new oncology product across five GCC markets." Market research is a broader term encompassing the full range of methods, processes, and continuous programmes used to collect and analyse information about markets, customers, and competitors. In practice, a market study is one type of market research project. Market research as a discipline also includes tracking studies, customer satisfaction programmes, brand health monitoring, and ongoing competitive intelligence that run continuously rather than as one-off projects.',
  },
  {
    question: 'How much does a market study cost?',
    answer:
      'Market study costs vary widely based on methodology, geography, and complexity. A qualitative study with 10–15 in-depth interviews across two markets typically costs $18,000–$40,000. A quantitative physician survey across three GCC countries with n=150 respondents runs $30,000–$65,000. A full mixed-methods market entry assessment — combining desk research, qualitative KOL interviews, and a quantitative sizing model — typically costs $45,000–$120,000. Pharmaceutical market studies in GCC and Middle East markets tend to cost 15–25% more than equivalent Western European projects due to specialist recruitment constraints and bilingual execution requirements. Competitive intelligence and secondary research programmes are generally lower-cost ($8,000–$25,000) but sacrifice primary data depth.',
  },
  {
    question: 'How long does a market study take?',
    answer:
      'Timelines depend on methodology and geographic scope. A targeted qualitative study (8–12 IDIs, single market) typically takes 4–6 weeks from briefing to final report. A multi-country quantitative survey with 200+ respondents across five markets requires 8–12 weeks. A comprehensive mixed-methods market study covering GCC and MENA — with desk research, qualitative fieldwork, quantitative validation, and synthesis — runs 12–16 weeks. Specialist recruitment (rare disease, senior KOLs, payer decision-makers) adds 2–4 weeks. Ramadan periods in GCC markets reduce active fieldwork windows and should be planned around when scheduling recruitment timelines.',
  },
  {
    question: 'What makes pharmaceutical and healthcare market studies different?',
    answer:
      'Healthcare market studies operate under additional constraints that affect methodology, ethics, and data interpretation. Respondent verification is essential — HCP participants must be validated against official medical registers (SCFHS in Saudi Arabia, DHA/DOH in UAE, GMC in the UK) to prevent panel contamination. Institutional ethics review may be required for studies conducted in hospital settings or involving patient data. Regulatory and formulary context matters: a market study for a pharmaceutical product must account for SFDA, EMA, or FDA approval status, reimbursement pathways, and prescribing restrictions. Healthcare market studies frequently require bilingual execution (English and Arabic in GCC), and cultural norms around medical authority and patient communication affect instrument design. BioNixus applies pharmaceutical-grade quality controls — participant verification, moderator calibration, verbatim transcription — as standard across all healthcare market studies.',
  },
  {
    question: 'What industries use market studies?',
    answer:
      'Market studies are used across virtually all commercial and public-sector industries. The most intensive users are: pharmaceutical and biotech (pre-launch evidence, lifecycle management, market access); consumer goods and FMCG (product development, pricing, distribution); technology and software (user research, competitive positioning, TAM sizing); financial services (product fit, regulatory impact, customer behaviour); healthcare and medical devices (clinical adoption, payer evidence, regulatory strategy); energy and utilities (demand forecasting, policy impact, customer segmentation); automotive (consumer preference, EV adoption, fleet demand); and government and public-sector organisations (policy evaluation, citizen surveys, public health studies).',
  },
  {
    question: 'Why should I hire a specialist market research firm for a market study?',
    answer:
      'Specialist firms bring three things that in-house teams rarely replicate: panel access (validated, pre-screened respondents who can be reached at speed), methodological depth (survey design, moderator training, statistical analysis, and synthesis expertise), and geographic reach (fieldwork operations across multiple markets without building local infrastructure). For pharmaceutical market studies in GCC and Middle East, a specialist firm like BioNixus also brings regulatory-context awareness, Arabic-language execution capability, and established relationships with KOLs, hospital gatekeepers, and payer decision-makers — all of which materially affect data quality and study feasibility.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is Market Study? Types, Methods and Industry Applications',
    description:
      'A complete guide to market studies: definition, types (qualitative, quantitative, competitive intelligence, market sizing, brand tracking, market access), industries, methodology, costs, and timelines.',
    mainEntityOfPage: PAGE_URL,
    datePublished: '2025-01-15T09:00:00Z',
    dateModified: '2026-06-08T09:00:00Z',
    author: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/bionixus-logo.webp` },
    },
    about: [
      {
        '@type': 'DefinedTerm',
        name: 'Market Study',
        description:
          'A market study is a structured, bounded investigation of a specific market, product category, or target audience designed to gather evidence that informs commercial, strategic, or policy decisions.',
      },
      { '@type': 'Thing', name: 'Market Research' },
      { '@type': 'Thing', name: 'Primary Research' },
      { '@type': 'Thing', name: 'Competitive Intelligence' },
    ],
    keywords:
      'market study, market research, types of market studies, qualitative market research, quantitative market research, competitive intelligence, market sizing, brand tracking, market access research, pharmaceutical market study',
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Types of Market Studies',
    description: 'The six principal types of market studies used across industries.',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Qualitative Market Study',
        description:
          'In-depth interviews, focus groups, advisory boards, and ethnographic research that explore motivations, attitudes, barriers, and contextual factors driving market behaviour.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Quantitative Market Study',
        description:
          'Structured surveys, physician panels, and consumer panels that measure incidence, prevalence, preference, and statistical patterns across representative samples.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Market Sizing and Opportunity Assessment',
        description:
          'TAM/SAM/SOM estimation, demand forecasting, market growth modelling, and segment potential analysis to quantify commercial opportunity.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Competitive Intelligence Study',
        description:
          'Systematic mapping of competitor positioning, capabilities, pricing strategy, pipeline, and market share to identify threats and white-space opportunities.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Brand and Perception Study',
        description:
          'Measurement of brand awareness, consideration, preference, message recall, and net promoter score among target audiences.',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Market Access and Payer Study',
        description:
          'Evaluation of reimbursement pathways, willingness-to-pay thresholds, HTA evidence requirements, and payer decision logic — critical in pharmaceutical and medtech markets.',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Market Study Services',
    serviceType: 'Market research and market study services for healthcare, pharma, and commercial industries',
    description:
      'BioNixus delivers market studies across GCC, MENA, UK, and Europe — qualitative, quantitative, competitive intelligence, market sizing, and market access research.',
    provider: { '@type': 'Organization', name: 'BioNixus', url: BASE_URL },
    areaServed: [
      'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman',
      'Egypt', 'Jordan', 'United Kingdom', 'Europe',
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceRange: '$18,000–$120,000',
    },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Market Research', href: '/market-research-home' },
    { name: 'What is Market Study', href: '/market-study' },
  ]),
  buildFAQSchema(faqItems),
]

// ── Data ──────────────────────────────────────────────────────────────────

const STUDY_TYPES = [
  {
    icon: Users,
    title: 'Qualitative Market Study',
    anchor: 'qualitative',
    badge: 'Exploratory',
    badgeColor: 'hsl(210 80% 92%)',
    badgeText: 'hsl(210 80% 28%)',
    description:
      'In-depth interviews (IDIs), focus groups, advisory boards, KOL consultations, and ethnographic observation. Qualitative studies answer the "why" — uncovering motivations, barriers, contextual factors, and the logic behind decisions that surveys cannot capture.',
    useCases: ['Pre-launch positioning', 'Payer objection mapping', 'Patient journey research', 'Message testing'],
    cost: '$18K–$80K',
    timeline: '5–10 weeks',
  },
  {
    icon: BarChart2,
    title: 'Quantitative Market Study',
    anchor: 'quantitative',
    badge: 'Measurement',
    badgeColor: 'hsl(var(--accent) / 0.15)',
    badgeText: 'hsl(var(--navy-deep))',
    description:
      'Physician panels, consumer surveys, and structured data collection that measure incidence, prevalence, prescribing intent, and market share at scale. Quantitative studies provide statistical confidence and segment-level comparability across markets.',
    useCases: ['Prescribing intent measurement', 'Product awareness tracking', 'Willingness-to-pay', 'Segmentation'],
    cost: '$25K–$65K',
    timeline: '6–10 weeks',
  },
  {
    icon: TrendingUp,
    title: 'Market Sizing & Opportunity',
    anchor: 'sizing',
    badge: 'Strategic',
    badgeColor: 'hsl(160 55% 90%)',
    badgeText: 'hsl(160 55% 22%)',
    description:
      'Total addressable market (TAM), serviceable addressable market (SAM), and growth forecasting models built from primary research, epidemiological data, and market analytics. Provides the evidence base for business case development and portfolio prioritisation.',
    useCases: ['Market entry business case', 'Portfolio prioritisation', 'Investor reporting', 'Launch sizing'],
    cost: '$20K–$55K',
    timeline: '4–8 weeks',
  },
  {
    icon: Search,
    title: 'Competitive Intelligence Study',
    anchor: 'competitive',
    badge: 'Intelligence',
    badgeColor: 'hsl(280 50% 92%)',
    badgeText: 'hsl(280 50% 28%)',
    description:
      'Systematic landscape mapping of competitor positioning, pipeline, pricing, distribution, and key account activity. CI studies identify white-space opportunities, differentiation gaps, and pre-empt competitive threats before they impact commercial performance.',
    useCases: ['Launch landscape mapping', 'Pipeline surveillance', 'Pricing benchmarking', 'Share-of-voice analysis'],
    cost: '$15K–$45K',
    timeline: '3–6 weeks',
  },
  {
    icon: Activity,
    title: 'Brand & Perception Study',
    anchor: 'brand',
    badge: 'Tracking',
    badgeColor: 'hsl(43 90% 92%)',
    badgeText: 'hsl(43 80% 28%)',
    description:
      'Awareness, consideration, preference, and message recall measurement among HCPs, patients, or consumers. Brand tracking studies establish baselines before launch and monitor promotional impact across multiple waves over time.',
    useCases: ['Pre-launch baseline', 'Post-launch brand health', 'Message impact tracking', 'NPS measurement'],
    cost: '$20K–$50K',
    timeline: '4–8 weeks',
  },
  {
    icon: ShieldCheck,
    title: 'Market Access & Payer Study',
    anchor: 'market-access',
    badge: 'Pharma/Medtech',
    badgeColor: 'hsl(var(--navy-medium) / 0.12)',
    badgeText: 'hsl(var(--primary))',
    description:
      'Reimbursement pathway assessment, HTA evidence mapping, willingness-to-pay modelling, and payer decision-logic research. Critical for pharmaceutical and medtech organisations preparing formulary submissions, HEOR evidence packs, or pricing strategy.',
    useCases: ['Formulary dossier evidence', 'ICER/QALY modelling context', 'Payer landscape mapping', 'HEOR research'],
    cost: '$30K–$80K',
    timeline: '6–12 weeks',
  },
]

const INDUSTRIES = [
  { icon: Microscope, name: 'Pharmaceutical & Biotech', highlight: true, description: 'Pre-launch evidence, prescribing dynamics, market access, HEOR, and lifecycle management across GCC, MENA, UK, and Europe.' },
  { icon: Activity, name: 'Medical Devices & Diagnostics', highlight: false, description: 'Clinical adoption studies, procurement intelligence, and HCP perception research for device and IVD companies.' },
  { icon: ShieldCheck, name: 'Healthcare Systems & Payers', highlight: false, description: 'Hospital formulary decision-making, budget impact evidence, and population health analytics for government health systems.' },
  { icon: Building2, name: 'Consumer Goods & FMCG', highlight: false, description: 'Shopper research, brand equity tracking, product development insights, and category management for consumer brands.' },
  { icon: Cpu, name: 'Technology & Software', highlight: false, description: 'B2B buyer journey research, competitive positioning, TAM sizing, and product-market fit validation for tech companies.' },
  { icon: Banknote, name: 'Financial Services', highlight: false, description: 'Customer segmentation, product adoption research, regulatory impact assessment, and wealth management insights.' },
  { icon: Globe, name: 'Government & Public Sector', highlight: false, description: 'Policy evaluation, citizen surveys, public health programme research, and socioeconomic impact assessments.' },
  { icon: Leaf, name: 'Energy & Sustainability', highlight: false, description: 'Demand forecasting, energy transition research, stakeholder mapping, and ESG perception studies.' },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Define objectives & scope', body: 'Translate a business question into specific research objectives. Clarify what decisions the study must inform, who the target respondents are, and what "good enough" evidence looks like for the use case.' },
  { num: '02', title: 'Select methodology', body: 'Choose between qualitative, quantitative, or mixed methods based on whether you need depth (qual), measurement (quant), or both. Confirm geographic scope, sample specifications, and language requirements.' },
  { num: '03', title: 'Design instruments', body: 'Build discussion guides (qualitative) or questionnaires (quantitative) aligned to research objectives. Pilot-test instruments before full fieldwork, especially in cross-language studies where translation adds latency.' },
  { num: '04', title: 'Recruit & execute fieldwork', body: 'Screen and verify participants, manage scheduling logistics, and execute interviews, surveys, or focus groups under quality-controlled conditions. In GCC markets, budgeting 2–4 weeks for specialist recruitment is standard.' },
  { num: '05', title: 'Analyse & synthesise', body: 'Apply thematic coding (qualitative), statistical analysis (quantitative), or integrated synthesis (mixed methods) to convert raw data into findings. Map findings to original objectives, not just to data patterns.' },
  { num: '06', title: 'Deliver actionable outputs', body: 'Produce a topline report (1–2 weeks post-fieldwork) followed by a full strategic report with recommendations, decision-ready frameworks, and presentation materials for stakeholder briefing.' },
]

const CAPABILITIES = [
  { icon: FlaskConical, title: 'Pharmaceutical-grade methodology', body: 'ISO 20252 research quality standards, HCP participant verification against national medical registers, and structured ethics protocols for studies in institutional settings.' },
  { icon: Globe, title: 'GCC & MENA regional coverage', body: 'Active fieldwork operations across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Egypt, Jordan, and Lebanon — with established KOL networks and institutional access.' },
  { icon: Users, title: 'Bilingual Arabic-English execution', body: 'Native Arabic moderators and bilingual (Gulf and Egyptian dialect) instruments, back-translated and validated before fieldwork. Critical for GCC HCP and patient studies.' },
  { icon: Layers, title: 'Qualitative + quantitative integration', body: 'Single-source design that links qual depth to quant measurement — ensuring your market study delivers both the insight and the statistical confidence for internal decision gates.' },
  { icon: Target, title: 'Market access alignment', body: 'Evidence synthesis aligned to SFDA, DHA, NUPCO, and MOHAP decision logic — connecting primary research findings to formulary listing, tender, and reimbursement strategy.' },
  { icon: BookOpen, title: '120+ programmes, 17 countries', body: 'Delivered healthcare market studies for multinational pharma, specialty biotech, medtech companies, and government health entities across four continents.' },
]

// ── Component ─────────────────────────────────────────────────────────────

export default function WhatIsMarketStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>What is Market Study? Types, Methods &amp; Industries | BioNixus</title>
        <meta
          name="description"
          content="What is a market study? Complete guide covering definition, 6 types (qualitative, quantitative, competitive intelligence, market sizing, brand tracking, market access), industries, costs ($18K–$120K), timelines, and how to commission one."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="What is Market Study? Types, Methods & Industries | BioNixus" />
        <meta property="og:description" content="Complete guide to market studies: definition, types, industries, costs, and timelines. Covers qualitative, quantitative, competitive intelligence, market sizing, brand tracking, and market access studies." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <Navbar />

      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Market Research', href: '/market-research-home' },
          { name: 'What is Market Study', href: '/market-study' },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--accent)) 0%, hsl(var(--gold-light)) 55%, transparent 100%)' }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: 'hsl(var(--accent))' }} />
        <div className="absolute bottom-0 left-1/3 w-80 h-40 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--gold-light))' }} />

        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border" style={{ background: 'hsl(var(--accent) / 0.12)', borderColor: 'hsl(var(--accent) / 0.25)' }}>
            <BookOpen className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
            <span className="text-[10px] font-extrabold tracking-[0.14em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Complete Guide</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-[-0.025em] max-w-4xl mb-6 text-balance">
            What is Market Study?
          </h1>

          <p className="text-white/70 text-xl md:text-[1.25rem] max-w-3xl leading-[1.7] mb-10">
            A market study is a structured investigation of a market, product category, or target audience designed to gather evidence for commercial or strategic decisions. This guide covers every type — qualitative, quantitative, competitive intelligence, market sizing, brand tracking, and market access — with industry applications, costs, and timelines.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {[
              { value: '6', label: 'Types of market studies' },
              { value: '8+', label: 'Industries covered' },
              { value: '$18K–$120K', label: 'Typical cost range' },
              { value: '4–16 wks', label: 'Typical timeline' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-2xl font-bold" style={{ color: 'hsl(var(--accent))' }}>{value}</div>
                <div className="text-[12px] text-white/50 uppercase tracking-[0.08em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEFINITION BOX ────────────────────────────────────────────────── */}
      <section className="py-14 md:py-18 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
                Market Study: Definition
              </h2>

              {/* LLM-optimised direct definition */}
              <div
                className="mb-8 p-5 md:p-6 rounded-2xl border"
                style={{ borderLeft: '4px solid hsl(var(--accent))', background: 'hsl(var(--accent) / 0.04)', borderColor: 'hsl(var(--accent) / 0.2)' }}
              >
                <p className="font-display text-[1.15rem] font-semibold text-foreground leading-[1.65] mb-0">
                  A <strong>market study</strong> is a structured, bounded investigation of a specific market, product category, geographic territory, or target audience. It gathers primary and secondary evidence to answer defined commercial, strategic, or policy questions — informing decisions about market entry, product launch, pricing, competitive positioning, or access strategy.
                </p>
              </div>

              <div className="space-y-5 text-[16px] text-muted-foreground leading-[1.82]">
                <p>
                  The terms <em>market study</em> and <em>market research</em> are used interchangeably across industries. The distinction, where it exists, is one of scope: a market study is typically a time-bound project with a specific deliverable, while market research can describe both one-off studies and continuous intelligence programmes. A product team commissioning a pre-launch study of HCP prescribing intent is running a market study; a commercial function tracking brand equity across 12 monthly waves is running a market research programme.
                </p>
                <p>
                  Market studies draw on two evidence sources. <strong>Primary research</strong> generates new data directly from target respondents — physicians, patients, payers, consumers, or expert stakeholders — through interviews, surveys, focus groups, or observational methods. <strong>Secondary research</strong> synthesises existing published and proprietary data, including epidemiological databases, competitive intelligence filings, prescription audit data, and academic literature. Most market studies combine both: secondary research establishes market context and baseline sizing; primary research provides the decision-specific insight that published sources cannot supply.
                </p>
                <p>
                  The output of a market study is a decision-ready evidence set — not raw data. A well-designed market study maps findings directly to the business questions that prompted the study: should we enter this market? At what price should we position? Which segments should we prioritise? What evidence does the payer need? When the output does not connect to these questions, the study has failed regardless of the methodological rigour applied.
                </p>
              </div>
            </div>

            {/* Quick navigation */}
            <aside className="sticky top-20">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-[10px] font-extrabold tracking-[0.12em] uppercase mb-4" style={{ color: 'hsl(var(--accent))' }}>In this guide</p>
                <nav className="space-y-1">
                  {[
                    { href: '#types', label: 'Types of market studies' },
                    { href: '#industries', label: 'Industries & applications' },
                    { href: '#how-to', label: 'How to conduct a market study' },
                    { href: '#pharma', label: 'Pharmaceutical market studies' },
                    { href: '#capabilities', label: 'BioNixus capabilities' },
                    { href: '#costs', label: 'Costs & timelines' },
                    { href: '#faq', label: 'Frequently asked questions' },
                  ].map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-muted-foreground border-l-2 border-transparent hover:border-accent hover:bg-accent/5 hover:text-foreground transition-all"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <div
                className="mt-4 rounded-2xl p-5 relative overflow-hidden"
                style={{ background: 'linear-gradient(160deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
              >
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-[0.1]" style={{ background: 'hsl(var(--accent))' }} />
                <p className="text-[11px] font-extrabold tracking-[0.12em] uppercase mb-2" style={{ color: 'hsl(var(--accent))' }}>Commission a study</p>
                <p className="text-white/80 text-sm leading-snug mb-4">Speak with a BioNixus researcher about your study scope and objectives.</p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-bold rounded-md w-full transition-all hover:-translate-y-0.5"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                >
                  Request a briefing <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── TYPES OF MARKET STUDIES ───────────────────────────────────────── */}
      <section id="types" className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'hsl(var(--accent) / 0.1)' }}>
              <Layers className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
              <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Taxonomy</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Types of Market Studies
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              Six distinct study types cover the range of commercial intelligence needs. Most market studies combine two or more types depending on the decision being informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STUDY_TYPES.map(({ icon: Icon, title, badge, badgeColor, badgeText, description, useCases, cost, timeline }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--navy-deep) / 0.06)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} aria-hidden />
                  </div>
                  <span
                    className="text-[9px] font-extrabold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: badgeColor, color: badgeText }}
                  >
                    {badge}
                  </span>
                </div>

                <h3 className="font-display text-[1rem] font-bold text-foreground mb-3 leading-snug">{title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-[1.72] mb-4 flex-1">{description}</p>

                <div className="mb-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-muted-foreground mb-2">Common uses</p>
                  <div className="flex flex-wrap gap-1.5">
                    {useCases.map((uc) => (
                      <span key={uc} className="text-[11px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground border border-border">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border text-[12px]">
                  <span className="text-muted-foreground">Cost: <strong className="text-foreground">{cost}</strong></span>
                  <span className="text-muted-foreground">Timeline: <strong className="text-foreground">{timeline}</strong></span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 p-5 md:p-6 rounded-2xl border border-border bg-background">
            <p className="text-[14px] text-muted-foreground leading-[1.75]">
              <strong className="text-foreground">Mixed-methods design</strong> — combining qualitative and quantitative methods in a single programme — is the gold standard for complex strategic decisions. A typical mixed-methods market study runs an exploratory qualitative phase (IDIs, advisory boards) to generate hypotheses and refine language, followed by a quantitative phase (structured survey) that sizes and validates the patterns identified qualitatively. See{' '}
              <Link to="/qualitative-market-research" className="text-primary hover:underline">qualitative market research</Link> and{' '}
              <Link to="/quantitative-healthcare-market-research" className="text-primary hover:underline">quantitative market research</Link> for methodology detail.
            </p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section id="industries" className="py-14 md:py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'hsl(var(--accent) / 0.1)' }}>
              <Globe className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
              <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Industries</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Market Studies Across Industries
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              Every industry that faces a commercial or policy decision benefits from a market study. The methods, regulatory constraints, and evidence thresholds differ significantly by sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map(({ icon: Icon, name, highlight, description }) => (
              <div
                key={name}
                className="rounded-xl p-5 border transition-all hover:shadow-sm"
                style={highlight
                  ? { background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)', borderColor: 'hsl(var(--accent) / 0.3)' }
                  : { background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }
                }
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: highlight ? 'hsl(var(--accent) / 0.15)' : 'hsl(var(--muted))' }}
                >
                  <Icon
                    className="w-4.5 h-4.5"
                    style={{ color: highlight ? 'hsl(var(--accent))' : 'hsl(var(--primary))' }}
                    aria-hidden
                  />
                </div>
                {highlight && (
                  <span
                    className="inline-block text-[9px] font-extrabold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full mb-2"
                    style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                  >
                    BioNixus Specialist
                  </span>
                )}
                <h3
                  className="font-semibold text-[14px] mb-2 leading-snug"
                  style={{ color: highlight ? '#fff' : 'hsl(var(--foreground))' }}
                >
                  {name}
                </h3>
                <p
                  className="text-[12.5px] leading-[1.65]"
                  style={{ color: highlight ? 'hsl(var(--white) / 0.65)' : 'hsl(var(--muted-foreground))' }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHARMACEUTICAL MARKET STUDIES ────────────────────────────────── */}
      <section id="pharma" className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'hsl(var(--accent) / 0.1)' }}>
                <FlaskConical className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
                <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Pharma Focus</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground tracking-tight mb-5">
                Pharmaceutical &amp; Healthcare Market Studies
              </h2>
              <div className="space-y-4 text-[15px] text-muted-foreground leading-[1.82]">
                <p>
                  Pharmaceutical market studies operate under methodological and ethical requirements that general market research firms do not routinely meet. Respondent verification — confirming that HCP participants are practising, registered clinicians — is non-negotiable. Institutional ethics review may be required for research conducted in hospital settings or involving patient data. Study instruments must reflect the regulatory and formulary context of each market.
                </p>
                <p>
                  In GCC and Middle East markets specifically, pharmaceutical market studies must account for the dual role of government health ministries as both regulators and procurers. SFDA in Saudi Arabia, the Ministry of Public Health in Kuwait, and the tripartite DHA/DOH/MOHAP structure in the UAE each have distinct formulary listing processes, procurement timelines, and evidence requirements. A market study that does not reflect this institutional landscape will produce findings that cannot be translated into access strategy.
                </p>
                <p>
                  The principal pharmaceutical market study types — and their strategic applications — include:
                </p>
                <ul className="space-y-2">
                  {[
                    ['Pre-launch landscape assessment', 'Treatment pathway mapping, unmet need characterisation, competitor positioning, and KOL opinion profiling before launch.'],
                    ['Pricing and willingness-to-pay research', 'Van Westendorp price sensitivity modelling, conjoint analysis, and payer budget impact evidence.'],
                    ['Market access and HEOR study', 'Evidence gap analysis, cost-effectiveness data requirements, and reimbursement pathway mapping aligned to NCEHTA, NICE, or equivalent HTA bodies.'],
                    ['Post-launch brand tracking', 'Prescribing intent vs actual behaviour, awareness, message recall, and promotional impact measurement across HCP segments.'],
                  ].map(([title, body]) => (
                    <li key={title} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
                      <span><strong className="text-foreground">{title}</strong> — {body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" aria-hidden />
                  GCC Market Study Requirements
                </h3>
                <div className="space-y-3">
                  {[
                    ['SCFHS / DHA / DOH verification', 'HCP respondents verified against national medical registers before scheduling.'],
                    ['IRB/ethics documentation', 'Studies in institutional settings or with patient data require ethics committee approval.'],
                    ['Arabic-English bilingual instruments', 'Discussion guides and questionnaires translated, back-translated, and pilot-tested.'],
                    ['MOPH / SFDA formulary context', 'Study design must reflect procurement pathway and evidence requirements of the specific regulator.'],
                    ['Ramadan scheduling buffer', 'Active fieldwork windows in GCC are reduced during Ramadan — plan 2–3 week buffer.'],
                  ].map(([label, desc]) => (
                    <div key={label} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
                      <div>
                        <p className="text-[13px] font-semibold text-foreground">{label}</p>
                        <p className="text-[12px] text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-bold text-foreground mb-3">Related pages</h3>
                <div className="space-y-2">
                  {[
                    { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharmaceutical market research — Saudi Arabia' },
                    { to: '/uae-pharmaceutical-market-research', label: 'Pharmaceutical market research — UAE' },
                    { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency in GCC' },
                    { to: '/cost-effectiveness-analysis-gcc', label: 'Cost-effectiveness analysis GCC' },
                    { to: '/real-world-data-healthcare-middle-east', label: 'Real-world data — Middle East' },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="flex items-center gap-1.5 text-[13px] text-primary hover:text-accent-foreground transition-colors hover:underline"
                    >
                      <ArrowRight className="w-3 h-3 flex-shrink-0" aria-hidden />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CONDUCT ────────────────────────────────────────────────── */}
      <section id="how-to" className="py-14 md:py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'hsl(var(--accent) / 0.1)' }}>
              <Target className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
              <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Process</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              How to Conduct a Market Study
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              A six-stage process from objective definition to actionable output delivery. The quality of stage one — defining what decisions the study must inform — determines the quality of everything that follows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map(({ num, title, body }) => (
              <div key={num} className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden">
                <div
                  className="absolute top-4 right-4 font-display text-5xl font-black leading-none select-none pointer-events-none"
                  style={{ color: 'hsl(var(--primary) / 0.05)' }}
                >
                  {num}
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-[12px] font-black"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                >
                  {num}
                </div>
                <h3 className="font-display text-[15px] font-bold text-foreground mb-2 leading-snug">{title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-[1.72]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSTS & TIMELINES ─────────────────────────────────────────────── */}
      <section id="costs" className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground tracking-tight mb-3">
              Market Study Costs &amp; Timelines
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Reference ranges for the GCC and MENA region. Western European studies typically cost 10–20% less; North American studies are broadly comparable.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'hsl(var(--primary))' }}>
                  {['Study Type', 'Methodology', 'Typical Cost (USD)', 'Typical Timeline', 'Best for'].map((h) => (
                    <th key={h} className="text-left px-5 py-3.5 text-white/90 text-[11px] font-bold uppercase tracking-[0.08em]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Qualitative', '8–15 IDIs or 2–3 focus groups', '$18,000–$80,000', '5–10 weeks', 'Understanding why; exploratory insight'],
                  ['Quantitative', 'Survey n=100–400', '$25,000–$65,000', '6–10 weeks', 'Sizing, intent, segment measurement'],
                  ['Mixed methods', 'Qual + quant sequenced', '$45,000–$120,000', '10–16 weeks', 'Strategic decisions requiring both depth and scale'],
                  ['Market sizing', 'Desk + primary modelling', '$20,000–$55,000', '4–8 weeks', 'TAM/SAM, business case, investor reporting'],
                  ['Competitive intelligence', 'Desk + expert interviews', '$15,000–$45,000', '3–6 weeks', 'Landscape mapping, launch readiness'],
                  ['Market access / HEOR', 'Payer interviews + modelling', '$30,000–$80,000', '6–12 weeks', 'Reimbursement dossiers, HTA evidence'],
                ].map(([type, method, cost, time, best]) => (
                  <tr key={type} className="hover:bg-muted/40 transition-colors bg-card">
                    <td className="px-5 py-3.5 font-semibold text-foreground">{type}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{method}</td>
                    <td className="px-5 py-3.5 font-medium text-foreground">{cost}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{time}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[12px] text-muted-foreground">
            Ranges are indicative and depend on specialty incidence, geographic scope, language requirements, and report complexity. GCC specialist studies (oncology, rare disease, payers) carry a 20–30% premium over general physician surveys.
          </p>
        </div>
      </section>

      {/* ── BIONIXUS CAPABILITIES ─────────────────────────────────────────── */}
      <section id="capabilities" className="py-14 md:py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{ background: 'hsl(var(--accent) / 0.1)' }}>
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} aria-hidden />
              <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--accent))' }}>BioNixus</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              BioNixus Market Study Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
              BioNixus is a global insights network with strong regional presence in GCC and MENA, delivering pharmaceutical-grade market studies across 17 countries. 120+ delivered programmes since 2012.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-sm hover:border-primary/20 transition-all">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'hsl(var(--navy-deep) / 0.06)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} aria-hidden />
                </div>
                <h3 className="font-display text-[15px] font-bold text-foreground mb-2">{title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-[1.72]">{body}</p>
              </div>
            ))}
          </div>

          {/* Proof metrics bar */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '120+', label: 'Research programmes delivered' },
                { value: '17', label: 'Countries covered' },
                { value: '8,000+', label: 'Pre-verified HCPs in GCC panel' },
                { value: '12+', label: 'Years of GCC/MENA expertise' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl font-black mb-1" style={{ color: 'hsl(var(--accent))' }}>{value}</div>
                  <div className="text-[12px] text-white/55 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-14 md:py-20 bg-muted/30">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-foreground tracking-tight mb-2 flex items-center gap-3">
              <span
                className="inline-flex px-2 py-0.5 text-[10px] font-extrabold tracking-[0.1em] uppercase rounded-sm"
                style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
              >
                FAQ
              </span>
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Direct answers to the most common questions about market studies — designed for search engines and AI assistants.
            </p>

            <div className="w-full divide-y divide-border border-t border-border">
              {faqItems.map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-left text-[15px] font-semibold text-primary hover:text-accent-foreground py-5 list-none [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <svg className="w-4 h-4 shrink-0 ml-4 text-muted-foreground transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </summary>
                  <div className="text-[15px] text-muted-foreground leading-[1.82] pb-6">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 100%)' }}
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-[0.07]" style={{ background: 'hsl(var(--accent))' }} />
            <div className="absolute bottom-0 left-1/3 w-80 h-40 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--gold-light))' }} />

            <div className="relative z-10 max-w-2xl">
              <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase mb-3" style={{ color: 'hsl(var(--accent))' }}>
                Commission a Market Study
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to start your market study?
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Speak with a BioNixus researcher about your study objectives, geography, and timeline. We design and deliver pharmaceutical-grade market studies across GCC, MENA, UK, and Europe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-0.5 shadow-lg"
                  style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--navy-deep))' }}
                >
                  Request a briefing
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <Link
                  to="/market-research-home"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold border transition-all hover:bg-white/10"
                  style={{ borderColor: 'hsl(var(--white) / 0.2)', color: '#fff' }}
                >
                  Explore services
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
