import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Building2,
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
    '@type': 'ProfessionalService',
    name: 'BioNixus Middle East Healthcare Market Research',
    description:
      'Middle East healthcare and pharmaceutical market research programs for launch, market access, and growth decisions across GCC and North Africa.',
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Egypt', 'Qatar', 'Bahrain', 'Oman'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
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
        <title>Middle East Healthcare Market Research | BioNixus Strategic Evidence Programs</title>
        <meta
          name="description"
          content="Deep, country-specific healthcare market research for Middle East pharmaceutical teams. Improve launch, market access, and growth decisions with decision-ready evidence."
        />
        <link rel="canonical" href={pageUrl} />
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
                Middle East Healthcare Market Research
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-5">
                Deep regional evidence that moves launch and access decisions faster
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BioNixus builds decision-ready healthcare intelligence programs for pharmaceutical teams operating across
                the GCC and wider Middle East. For broader service context, start with our{' '}
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
                  to="/contact"
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
                  to="/contact"
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
                  to="/contact"
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
          to="/contact"
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
