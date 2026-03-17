import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSpreadsheet,
  FlaskConical,
  Globe2,
  LineChart,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const pageUrl = 'https://www.bionixus.com/bionixus-market-research-middle-east';
const pageImage = 'https://www.bionixus.com/images/quant-hcp-survey-executive.png';
const lastUpdated = '2026-03-17';
const editorialLead = 'Dr. Mohammad Alsaadany';
const contactHref = '/contact?utm_source=middle-east-page&utm_medium=organic&utm_campaign=middle-east-pharma-research';

const proofCards = [
  {
    metric: '< 15 days',
    title: 'Time-to-first insight',
    description: 'Fast pilot evidence to reduce launch uncertainty before major budget commitments.',
  },
  {
    metric: '7 priority markets',
    title: 'Country-by-country depth',
    description: 'Execution models tailored for KSA, UAE, Kuwait, Egypt, Qatar, Bahrain, and Oman.',
  },
  {
    metric: 'Cross-functional output',
    title: 'Decision confidence',
    description: 'Commercial, medical, and market access teams align on one evidence narrative.',
  },
  {
    metric: 'QA-controlled fieldwork',
    title: 'Data integrity',
    description: 'Recruitment validation, respondent quality checks, and transparent sampling governance.',
  },
];

const countryCards = [
  {
    country: 'Saudi Arabia',
    regulator: 'SFDA',
    marketReality: 'Large institutional purchasing and mixed public-private pathway complexity.',
    researchImplication: 'Strong payer + procurement mapping and segment-level account strategy.',
  },
  {
    country: 'United Arab Emirates',
    regulator: 'DHA, DOH, MOHAP',
    marketReality: 'Multi-emirate operational variation with private provider influence.',
    researchImplication: 'Channel-specific demand modeling and physician pathway comparison by emirate.',
  },
  {
    country: 'Kuwait',
    regulator: 'MOH Kuwait',
    marketReality: 'Formulary process sensitivity and concentrated decision influence.',
    researchImplication: 'Early stakeholder sequencing and institutional objection mapping.',
  },
  {
    country: 'Egypt',
    regulator: 'EDA',
    marketReality: 'Scale opportunity with affordability and channel segmentation pressures.',
    researchImplication: 'Pricing sensitivity frameworks and adoption barrier diagnostics.',
  },
  {
    country: 'Qatar',
    regulator: 'MOPH',
    marketReality: 'High-standard institutional quality expectations with concentrated demand centers.',
    researchImplication: 'Focused KOL and hospital-influence architecture for faster activation.',
  },
  {
    country: 'Bahrain',
    regulator: 'NHRA',
    marketReality: 'Smaller market size but high strategic value for regional comparability.',
    researchImplication: 'Precision sampling with cross-market benchmarking to guide replication.',
  },
  {
    country: 'Oman',
    regulator: 'MOH Oman',
    marketReality: 'Public sector influence and operational access constraints by region.',
    researchImplication: 'Localized field planning and practical roll-out scenario design.',
  },
];

const useCases = [
  {
    title: 'Pre-launch market shaping',
    icon: Compass,
    summary: 'Validate unmet need, segment opportunity, and stakeholder influence before go-to-market design.',
    outputs: ['Launch readiness scorecard', 'Stakeholder priority map', 'Country activation sequencing'],
  },
  {
    title: 'Market access and value evidence',
    icon: ClipboardCheck,
    summary: 'Assess payer evidence thresholds and committee expectations to improve reimbursement strategy quality.',
    outputs: ['Value message testing', 'Access barrier matrix', 'HTA and payer implication brief'],
  },
  {
    title: 'Post-launch optimization',
    icon: LineChart,
    summary: 'Track adoption friction, message resonance, and account-level conversion barriers after launch.',
    outputs: ['Adoption diagnostics', 'Segment adjustment recommendations', '90-day optimization plan'],
  },
];

const methodologyComparison = [
  {
    model: 'Qualitative',
    bestFor: 'Early hypothesis shaping and stakeholder narrative diagnosis.',
    strength: 'High contextual depth in country-specific decision pathways.',
    risk: 'Can be directionally strong but not statistically projectable alone.',
    gccFit: 'Best for pre-launch or evidence-framing sprints.',
  },
  {
    model: 'Quantitative',
    bestFor: 'Market sizing, segment prioritization, and adoption measurement.',
    strength: 'Statistical confidence and trend comparability across waves.',
    risk: 'Weak sampling governance can create false precision.',
    gccFit: 'Best for launch sequencing and access evidence decisions.',
  },
  {
    model: 'Hybrid',
    bestFor: 'Combining behavior depth with confidence at decision scale.',
    strength: 'Balanced certainty + context for cross-functional teams.',
    risk: 'Requires tighter governance and instrument discipline.',
    gccFit: 'Best for multi-country GCC programs with launch and access overlap.',
  },
];

const executionBlueprint = [
  { tier: 'Days 1-30', focus: 'Decision framing and risk mapping', output: 'Priority market hypotheses + stakeholder architecture' },
  { tier: 'Days 31-60', focus: 'Fieldwork and validation execution', output: 'Interim evidence pack + access friction diagnostics' },
  { tier: 'Days 61-90', focus: 'Activation and optimization', output: 'Country action plan + KPI-linked execution roadmap' },
];

const caseSnapshots = [
  {
    title: 'GCC oncology launch sequencing',
    result: 'Reduced launch-priority uncertainty by 31%',
    detail: 'Cross-country stakeholder evidence highlighted where payer and hospital barriers were most actionable first.',
  },
  {
    title: 'UAE multi-emirate access study',
    result: 'Improved access message fit by 22%',
    detail: 'Differentiated physician pathway assumptions by emirate to prevent over-generalized market planning.',
  },
  {
    title: 'Saudi institutional demand diagnostics',
    result: 'Cut pilot-to-decision time to 14 days',
    detail: 'Structured quant + qual evidence into one governance narrative for commercial and market access teams.',
  },
];

const faqItems = [
  {
    question: 'How is Middle East healthcare research different from global templated studies?',
    answer:
      'Regional programs require country-specific stakeholder logic, payer pathway interpretation, and operational feasibility testing. A global template alone rarely captures these dynamics, so we adapt methodology to local decision realities while preserving comparability.',
  },
  {
    question: 'What does the first engagement phase typically include?',
    answer:
      'In the first two weeks, teams usually receive objective alignment, stakeholder architecture, pilot hypothesis framework, and a decision-oriented evidence roadmap. This is designed to move quickly from intent to execution-ready priorities.',
  },
  {
    question: 'Can outputs be used by both commercial and medical teams?',
    answer:
      'Yes. We structure analysis layers so commercial, medical, and market access functions can work from the same evidence base while preserving role-specific implications and decision priorities.',
  },
  {
    question: 'How quickly can BioNixus start a Middle East multi-country program?',
    answer:
      'Most programs begin with a short discovery sprint and can move into fieldwork quickly once scope and compliance requirements are aligned. Timelines depend on market mix and stakeholder complexity, but rapid starts are possible with clear decision questions.',
  },
  {
    question: 'What sample quality controls are used in GCC pharmaceutical research?',
    answer:
      'Programs use role-based eligibility checks, recruitment validation, duplicate detection, and quality-review governance before final analysis. This protects against weak sample composition and improves decision confidence.',
  },
  {
    question: 'Can BioNixus run GCC pharmaceutical market research with both qual and quant methods?',
    answer:
      'Yes. Hybrid programs are designed for teams that need contextual interpretation and statistical confidence in one decision cycle, especially for launch and access planning.',
  },
  {
    question: 'How do you support leadership teams after insights are delivered?',
    answer:
      'Each engagement includes a practical activation phase where findings are translated into 30/60/90 day actions, owner mapping, and measurable checkpoints for commercial and market access execution.',
  },
];

const methodologySteps = [
  {
    name: 'Discover',
    icon: Globe2,
    detail: 'Define decision questions, market hypotheses, and country-specific stakeholder architecture.',
  },
  {
    name: 'Validate',
    icon: FlaskConical,
    detail: 'Execute mixed-method research with quality controls, then test assumptions against field evidence.',
  },
  {
    name: 'Activate',
    icon: BarChart3,
    detail: 'Translate findings into launch, access, and growth actions with a measurable implementation roadmap.',
  },
];

const first14DaysDeliverables = [
  'Decision-priority workshop and objective hierarchy',
  'Stakeholder influence map by country and function',
  'Initial segmentation and demand hypotheses',
  'Draft research instrument architecture',
  'Risk register with mitigation actions for fieldwork',
  'Executive evidence roadmap with immediate next steps',
];

const pageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Middle East Pharmaceutical Market Research | BioNixus',
    url: pageUrl,
    description:
      'Middle East pharmaceutical market research programs for GCC launch, market access, and commercial growth decisions.',
    primaryImageOfPage: pageImage,
    dateModified: lastUpdated,
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BioNixus Middle East Pharmaceutical Market Research',
    description:
      'Middle East healthcare and pharmaceutical market research programs for launch, market access, and growth decisions across GCC and North Africa.',
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Egypt', 'Qatar', 'Bahrain', 'Oman'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: 'https://www.bionixus.com/favicon.ico',
    },
    image: pageImage,
    url: pageUrl,
  },
  buildFAQSchema(faqItems),
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Market Research', href: '/market-research' },
    { name: 'Middle East Market Research', href: '/bionixus-market-research-middle-east' },
  ]),
];

function trackCtaClick(ctaName: string, ctaPlacement: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'middle_east_cta_click', {
      cta_name: ctaName,
      cta_placement: ctaPlacement,
      page_path: '/bionixus-market-research-middle-east',
    });
  }
}

const BionixusMarketResearchMiddleEast = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Middle East Pharmaceutical Market Research | GCC Evidence Programs | BioNixus</title>
        <meta
          name="description"
          content="Middle East pharmaceutical market research for GCC launch, access, and growth decisions. BioNixus delivers country-specific evidence programs across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman."
        />
        <meta
          name="keywords"
          content="middle east pharmaceutical market research, gcc pharmaceutical market research, middle east healthcare market research, saudi arabia pharmaceutical research, uae pharmaceutical market research"
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Middle East Pharmaceutical Market Research | GCC Evidence Programs | BioNixus" />
        <meta
          property="og:description"
          content="Decision-ready pharmaceutical market research programs for GCC teams across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman."
        />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Middle East Pharmaceutical Market Research | BioNixus" />
        <meta
          name="twitter:description"
          content="GCC-focused pharmaceutical market research for launch, market access, and growth decisions."
        />
        <meta name="twitter:image" content={pageImage} />
        {pageJsonLd.map((schema, index) => (
          <script key={`middle-east-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navbar />

      <main className="pb-20 md:pb-0">
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: 'Middle East Market Research', href: '/bionixus-market-research-middle-east' },
          ]}
        />

        <section className="section-padding pt-12 pb-10 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container-wide max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 text-primary text-sm px-3 py-1 mb-4">
                Middle East Pharmaceutical Market Research
              </p>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background text-foreground text-xs px-3 py-1 mb-4 ml-2">
                <CalendarDays className="w-3.5 h-3.5 text-primary" />
                Last updated: March 2026
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                Middle East Pharmaceutical Market Research That Moves GCC Launch Decisions Faster
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BioNixus builds decision-ready pharmaceutical market research and middle east healthcare market research
                programs for teams operating across the GCC and wider Middle East. For broader service context, start with our{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research hub
                </Link>{' '}
                and then use this page for country-level execution depth.
              </p>
              <ul className="space-y-2 mb-7">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Reduce launch risk with country-specific stakeholder and payer evidence.
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Align commercial, medical, and market access teams on one evidence framework.
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Translate insights into actionable plans for the next 30, 60, and 90 days.
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`${contactHref}&utm_content=hero_primary_cta`}
                  onClick={() => trackCtaClick('book_strategy_call', 'hero_primary')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Book a 20-minute strategy call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#proof-band"
                  onClick={() => trackCtaClick('see_proof', 'hero_secondary')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
                >
                  See regional proof points
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-5 md:p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">Regional intelligence cockpit</h2>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-lg border border-border p-3 bg-background">
                  <p className="text-xs text-muted-foreground">Coverage markets</p>
                  <p className="text-xl font-semibold text-foreground">7+</p>
                </div>
                <div className="rounded-lg border border-border p-3 bg-background">
                  <p className="text-xs text-muted-foreground">Study model</p>
                  <p className="text-xl font-semibold text-foreground">Qual + Quant</p>
                </div>
                <div className="rounded-lg border border-border p-3 bg-background">
                  <p className="text-xs text-muted-foreground">Core outcome</p>
                  <p className="text-xl font-semibold text-foreground">Execution clarity</p>
                </div>
                <div className="rounded-lg border border-border p-3 bg-background">
                  <p className="text-xs text-muted-foreground">Priority use</p>
                  <p className="text-xl font-semibold text-foreground">Launch + Access</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  GDPR aligned fieldwork governance
                </p>
                <p className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-primary" />
                  Structured decision-ready deliverables
                </p>
                <p className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-primary" />
                  Stakeholder mapping across payer and provider systems
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-padding py-4">
          <div className="container-wide max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {['MHRA aligned approach', 'EMA context aware', 'SFDA market depth', 'GCC stakeholder coverage'].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card p-3 text-sm text-foreground text-center">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding py-6">
          <div className="container-wide max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
            <figure className="rounded-xl border border-border bg-card overflow-hidden">
              <img
                src="/images/quant-hcp-survey-executive.png"
                alt="Middle East pharmaceutical market research workshop with GCC commercial and market access leaders"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-xs text-muted-foreground">
                GCC decision workshop: converting pharmaceutical evidence into launch and access actions.
              </figcaption>
            </figure>
            <figure className="rounded-xl border border-border bg-card overflow-hidden">
              <img
                src="/images/quant-ai-validation-lab.png"
                alt="GCC pharmaceutical data validation workflow combining quantitative analytics and AI-assisted quality review"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <figcaption className="p-4 text-xs text-muted-foreground">
                Validation operations for GCC pharmaceutical datasets with governed AI-assisted quality controls.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section-padding py-6">
          <div className="container-wide max-w-6xl mx-auto rounded-2xl border border-border bg-card p-5 md:p-6">
            <h2 className="text-xl font-display font-semibold text-foreground mb-4">Quick navigation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              <a href="#executive-overview" className="text-primary hover:underline">Executive overview</a>
              <a href="#country-depth" className="text-primary hover:underline">Country execution depth</a>
              <a href="#decision-ecosystem" className="text-primary hover:underline">Decision-maker ecosystem</a>
              <a href="#methodology-framework" className="text-primary hover:underline">Methodology framework</a>
              <a href="#use-cases" className="text-primary hover:underline">Use-case playbooks</a>
              <a href="#faq" className="text-primary hover:underline">FAQ</a>
            </div>
            <div className="mt-5 grid md:grid-cols-3 gap-3">
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-sm text-primary hover:underline">
                Saudi pharmaceutical market research depth
              </Link>
              <Link to="/quantitative-healthcare-market-research" className="text-sm text-primary hover:underline">
                Quantitative healthcare market research guide
              </Link>
              <Link to="/services/quantitative-research" className="text-sm text-primary hover:underline">
                Quantitative research services
              </Link>
            </div>
            <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link to="/gcc-pharmaceutical-market-research" className="text-sm text-primary hover:underline">
                GCC pharmaceutical market research
              </Link>
              <Link to="/uae-pharmaceutical-market-research" className="text-sm text-primary hover:underline">
                UAE pharmaceutical market research
              </Link>
              <Link to="/saudi-payer-market-access-research" className="text-sm text-primary hover:underline">
                Saudi payer market access research
              </Link>
              <Link to="/gcc-hcp-recruitment-market-research" className="text-sm text-primary hover:underline">
                GCC HCP recruitment market research
              </Link>
            </div>
          </div>
        </section>

        <section id="proof-band" className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Why teams switch to BioNixus</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {proofCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-primary font-semibold">{card.metric}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="executive-overview" className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Executive overview</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Middle East is not one market. It is a portfolio of healthcare systems with different regulatory
                expectations, institutional purchasing logic, reimbursement maturity, and stakeholder influence patterns.
                Strategic success depends on localized evidence, not generalized assumptions.
              </p>
              <p>
                BioNixus helps pharmaceutical teams answer high-stakes questions across pre-launch, launch, and growth:
                where demand concentration exists, what blocks adoption, which stakeholders carry real influence, and how
                evidence needs to be framed for faster commercial and access decisions.
              </p>
              <p>
                Our model combines quantitative certainty with qualitative depth and translates both into practical
                implementation plans. The objective is not to generate more reports. The objective is to improve real
                market decisions under real timeline pressure.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
              GCC demand and access complexity snapshot
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GCC pharmaceutical decisions are shaped by non-uniform payer pathways, institution-level procurement controls,
              and specialist concentration by city and network. For strategy teams, this means market research design must
              be country-native from day one to avoid false comparability.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Regulatory heterogeneity</h3>
                <p className="text-sm text-muted-foreground">
                  SFDA, DHA/DOH/MOHAP, and other GCC bodies create distinct approval and evidence expectations.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Institutional purchasing variation</h3>
                <p className="text-sm text-muted-foreground">
                  Account-level procurement and formulary dynamics differ materially by country and care setting.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Stakeholder influence asymmetry</h3>
                <p className="text-sm text-muted-foreground">
                  Physicians, payers, and KOLs carry different weights across launch and access decisions in each market.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              When to use Qual vs Quant vs Hybrid in GCC
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Model</th>
                    <th className="text-left p-3 font-semibold text-foreground">Best used for</th>
                    <th className="text-left p-3 font-semibold text-foreground">Strength</th>
                    <th className="text-left p-3 font-semibold text-foreground">Risk</th>
                    <th className="text-left p-3 font-semibold text-foreground">GCC best fit</th>
                  </tr>
                </thead>
                <tbody>
                  {methodologyComparison.map((row) => (
                    <tr key={row.model} className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">{row.model}</td>
                      <td className="p-3 text-muted-foreground">{row.bestFor}</td>
                      <td className="p-3 text-muted-foreground">{row.strength}</td>
                      <td className="p-3 text-muted-foreground">{row.risk}</td>
                      <td className="p-3 text-muted-foreground">{row.gccFit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="country-depth" className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-3">Country execution depth</h2>
            <p className="text-muted-foreground mb-6">
              Each market requires different research priorities. We use country-level planning to preserve relevance
              while keeping a comparable regional backbone.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left p-3 font-semibold text-foreground">Country</th>
                    <th className="text-left p-3 font-semibold text-foreground">Regulatory context</th>
                    <th className="text-left p-3 font-semibold text-foreground">Market reality</th>
                    <th className="text-left p-3 font-semibold text-foreground">Research implication</th>
                  </tr>
                </thead>
                <tbody>
                  {countryCards.map((row) => (
                    <tr key={row.country} className="border-b border-border last:border-b-0">
                      <td className="p-3 text-foreground font-medium">{row.country}</td>
                      <td className="p-3 text-muted-foreground">{row.regulator}</td>
                      <td className="p-3 text-muted-foreground">{row.marketReality}</td>
                      <td className="p-3 text-muted-foreground">{row.researchImplication}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="decision-ecosystem" className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-3">Decision-maker ecosystem</h2>
            <p className="text-muted-foreground mb-6">
              We structure every program to capture not only prescribing behavior, but also institutional and access
              constraints that influence final adoption.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Physicians', icon: Users2, text: 'Treatment preference, evidence acceptance, and switching logic.' },
                { title: 'Payers', icon: ClipboardCheck, text: 'Value thresholds, budget constraints, and access triggers.' },
                { title: 'Hospitals', icon: Building2, text: 'Formulary dynamics, procurement pathways, and account-level barriers.' },
                { title: 'KOLs', icon: Globe2, text: 'Influence architecture, narrative resonance, and clinical credibility drivers.' },
              ].map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold mb-3">Need actionable evidence in the next quarter?</h2>
              <p className="text-primary-foreground/90 mb-5">
                We can scope your priority market questions and convert them into a practical research roadmap with clear
                stakeholder ownership and timeline checkpoints.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`${contactHref}&utm_content=mid_scroll_scope_cta`}
                  onClick={() => trackCtaClick('request_research_scope', 'mid_scroll')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  Request your research scope
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/market-research"
                  onClick={() => trackCtaClick('explore_market_research_hub', 'mid_scroll')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore service architecture
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="methodology-framework" className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Methodology framework</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {methodologySteps.map((step) => (
                <article key={step.name} className="rounded-xl border border-border bg-card p-5">
                  <step.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{step.name}</h3>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Use-case playbooks</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="rounded-xl border border-border bg-card p-5">
                  <useCase.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{useCase.summary}</p>
                  <ul className="space-y-1">
                    {useCase.outputs.map((output) => (
                      <li key={output} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">What you get in the first 14 days</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {first14DaysDeliverables.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
            ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">90-day execution blueprint by market maturity tier</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {executionBlueprint.map((step) => (
                <article key={step.tier} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold text-primary mb-2">{step.tier}</p>
                  <h3 className="font-semibold text-foreground mb-2">{step.focus}</h3>
                  <p className="text-sm text-muted-foreground">{step.output}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Proof snapshots from recent programs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {caseSnapshots.map((snapshot) => (
                <article key={snapshot.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{snapshot.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{snapshot.result}</p>
                  <p className="text-sm text-muted-foreground">{snapshot.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Editorial and methodology oversight</p>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-2">{editorialLead}</h2>
              <p className="text-sm text-primary font-medium mb-3">Healthcare Market Research Advisor, BioNixus</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This page is reviewed against active GCC pharmaceutical market conditions and execution constraints. Last review date:
                {' '}
                {lastUpdated}. Oversight includes methodology consistency, stakeholder logic validation, and conversion of findings
                into actionable launch and access planning outputs.
              </p>
            </article>
          </div>
        </section>

        <section id="faq" className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <article className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
                Download the GCC Pharmaceutical Research Brief
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Get a concise strategy brief covering stakeholder sequencing, access risk checkpoints, and a 90-day activation template.
              </p>
              <form action="https://formspree.io/f/xgozewew" method="POST" className="grid sm:grid-cols-[1fr_auto] gap-3">
                <input type="hidden" name="_subject" value="Report request: GCC Pharmaceutical Research Brief" />
                <input type="hidden" name="requestType" value="Report Download Request" />
                <input type="hidden" name="formVariant" value="middle_east_page_report_brief" />
                <input type="hidden" name="reportName" value="GCC Pharmaceutical Research Brief" />
                <input type="hidden" name="sourcePage" value="/bionixus-market-research-middle-east" />
                <input type="hidden" name="sourceUrl" value="https://www.bionixus.com/bionixus-market-research-middle-east" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Work email"
                  className="h-11 rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  onClick={() => trackCtaClick('download_research_brief', 'post_faq')}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 h-11 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Send brief
                </button>
              </form>
            </article>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary to-primary/85 text-primary-foreground p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">Build your Middle East evidence roadmap</h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Speak with a senior team member about your next launch or access decision. You will receive a clear scope,
                practical timeline, and recommended first-phase deliverables.
              </p>
              <p className="text-sm text-primary-foreground/80 mb-6">
                Response SLA: within one business day. Your inquiry is handled by strategy leads, not generic support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`${contactHref}&utm_content=final_strategy_cta`}
                  onClick={() => trackCtaClick('book_strategy_call', 'final_cta')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  Book a strategy call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/healthcare-market-research"
                  onClick={() => trackCtaClick('visit_healthcare_hub', 'final_cta')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore healthcare market research hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur p-3 md:hidden">
        <Link
          to={`${contactHref}&utm_content=sticky_mobile_cta`}
          onClick={() => trackCtaClick('book_strategy_call', 'sticky_mobile')}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          Talk to a strategy lead
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default BionixusMarketResearchMiddleEast;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
