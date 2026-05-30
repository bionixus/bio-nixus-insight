import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, MessageSquareQuote, Trophy, ShieldCheck, FlaskConical, Stethoscope } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExecutiveDecisionBlock, ProofMetricGrid } from '@/components/page/PremiumPageSections';
import { MARKET_RESEARCH_HUB_SECTIONS } from '@/data/marketResearchCountryContent';

const pageUrl = 'https://www.bionixus.com/market-research';
const faqItems = [
  {
    question: 'Which market research service should we start with?',
    answer:
      'Start from the decision, not the method. If you need to size an opportunity or validate a forecast, lead with quantitative research. If you need to understand why a prescriber hesitates or a committee stalls, lead with qualitative. If the work runs inside a regulated care environment with payer and procurement gates, use a healthcare-specific program. Most launch and access projects end up blending the first two.',
  },
  {
    question: 'Can BioNixus combine Saudi, GCC, and Europe evidence in one program?',
    answer:
      'Yes — and it is one of the most common briefs we run. A single program office coordinates fieldwork across markets so leadership gets numbers that compare like-for-like, while local modules preserve the SFDA, payer, and pathway nuance that a regional average would flatten. You get the roll-up and the country detail in one evidence base.',
  },
  {
    question: 'How is pharmaceutical market research different from consumer research?',
    answer:
      'The respondent and the logic are different. Pharma research has to reflect clinical pathways, payer and committee economics, regulatory milestones, and specialist populations that are often small and hard to reach — conditions a general consumer panel is not built for. Screening, sample design, and adverse-event handling all change as a result.',
  },
  {
    question: 'What countries does BioNixus cover from this hub?',
    answer:
      'Dedicated country pages cover Saudi Arabia (both KSA and Saudi keyword routes), the UAE, Kuwait, and Egypt, with the healthcare market research hub extending coverage to the UK, EU5, and further MENA markets. Across our operating history we have run work in 17+ countries, so a market not listed here is usually still in reach.',
  },
  {
    question: 'How fast can a market research program start?',
    answer:
      'After a short objective workshop and a feasibility check, focused modules can move to field within one to two weeks. Multi-country programs take longer — ethics approvals and hospital access add real calendar time — and where a specialist sample is genuinely scarce, we tell you up front rather than after the contract is signed.',
  },
];

const MarketResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Research Services Hub | Healthcare & Pharma Strategy | BioNixus</title>
        <meta
          name="description"
          content="The BioNixus market research hub for healthcare and pharma teams: choose quantitative, qualitative, or healthcare-specific programs, then route to Saudi, UAE, Kuwait, and Egypt evidence built for launch, access, and pricing decisions."
        />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Healthcare and Pharmaceutical Market Research Services',
            serviceType: 'Market Research',
            provider: {
              '@type': 'Organization',
              name: 'BioNixus',
              url: 'https://www.bionixus.com',
            },
            areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'United Kingdom', 'Europe'],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
          ]}
        />
        <section className="section-padding pt-16 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              Market research services for healthcare and pharma
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              Global medicine spending is forecast to reach roughly $2.3 trillion by 2028, growing 5–8% a year (BioNixus market
              analysis, 2024) — and most of that spend is decided one launch, one formulary, and one prescriber at a
              time. BioNixus gives healthcare and pharmaceutical teams the evidence to make those calls: launch
              planning, market access, product optimization, and country expansion. Treat this page as your starting
              point — choose the research approach that fits your decision, compare the service types, and route to the
              country or method page you need.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mt-4">
              {MARKET_RESEARCH_HUB_SECTIONS.introExtra}
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mt-4">
              If Saudi Arabia is your immediate priority, start with the{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                healthcare market research company in Saudi Arabia
              </Link>{' '}
              page, where SFDA and NUPCO logic shapes every study. For healthcare-specific planning across markets, use the{' '}
              <Link to="/market-research-healthcare" className="text-primary underline">
                healthcare market research
              </Link>{' '}
              hub. And if the method is what you're weighing, compare{' '}
              <Link to="/qualitative-market-research" className="text-primary underline">
                qualitative market research
              </Link>{' '}
              against the quantitative track below.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
              <Link to="/healthcare-market-research/uae" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
                Market Research UAE
              </Link>
              <Link to="/market-research-ksa" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
                Market Research KSA
              </Link>
              <Link to="/market-research-saudi" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
                Market Research Saudi
              </Link>
              <Link
                to="/market-research-saudi-arabia-pharmaceutical"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Pharma market research company Saudi Arabia
              </Link>
              <Link to="/market-research-kuwait" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
                Market Research Kuwait
              </Link>
              <Link to="/market-research-egypt" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
                Market Research Egypt
              </Link>
              <Link to="/pharmaceutical-companies-uae" className="rounded-lg border border-border bg-card p-4 text-primary hover:underline">
                Pharma market research top companies in UAE
              </Link>
              <Link
                to="/uae-pharmaceutical-market-research"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Healthcare market research company UAE
              </Link>
              <Link
                to="/egypt-pharmaceutical-market-research"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Healthcare market research company Egypt
              </Link>
              <Link
                to="/market-research-by-industry"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline md:col-span-2 lg:col-span-3"
              >
                Market research by industry — Saudi Arabia, UAE &amp; Egypt (MedTech, FMCG, telecom, and more)
              </Link>
            </div>
          </div>
        </section>

        <ExecutiveDecisionBlock
          heading="Executive decision layer"
          points={[
            {
              title: 'Why it matters',
              body: 'Research earns its keep only when it answers a specific decision — which account to prioritize, which message to lead with, whether the price will clear the committee. Insight with no decision attached is cost, not value.',
            },
            {
              title: 'What the evidence says',
              body: 'The strongest programs pair a number with a reason: quant tells you how big and how fast, qual tells you why. Run them together and the cross-functional argument is usually settled before the readout ends.',
            },
            {
              title: 'What to do next',
              body: 'Name one decision and its deadline, pick the method that answers it, and hold the findings to a 30/60/90 plan with owners — so the work moves into action instead of a shared drive.',
            },
          ]}
        />

        <ProofMetricGrid
          heading="Execution proof snapshot"
          metrics={[
            {
              label: 'Proposal speed',
              value: '10-14 days',
              detail: 'Typical objective-to-scope turnaround for priority pharma and healthcare studies.',
            },
            {
              label: 'Coverage model',
              value: 'GCC + Europe',
              detail: 'Country-level modules with one decision framework for leadership comparability.',
            },
            {
              label: 'Decision utility',
              value: '30/60/90',
              detail: 'Insight translated into action checkpoints instead of report-only outputs.',
            },
          ]}
        />

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto grid md:grid-cols-4 gap-4">
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Built around your decision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every program starts from a commercial, medical, or access decision and is designed backward from it — never a template applied to your brand.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Quantitative precision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sample frames sized for real statistical confidence, with analytics and forecast inputs you can defend in front of a board.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Qualitative depth</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The rationale behind the number — drawn from physicians, payers, patients, and the committee members who actually gate access.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Access-ready evidence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Findings shaped to the questions payers and hospital committees ask — so your access case survives the review, not just the internal sign-off.
              </p>
            </article>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Explore our market research services
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Choose a track for immediate navigation, then use the comparison table below to combine methods based on
                your decision timeline.
              </p>

              <Tabs defaultValue="quantitative" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="quantitative">Quantitative</TabsTrigger>
                  <TabsTrigger value="qualitative">Qualitative</TabsTrigger>
                </TabsList>

                <TabsContent value="quantitative" className="pt-4">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reach for quantitative when the question is how big, how fast, or how many. Market sizing,
                    segmentation, physician surveys, pricing research, and statistical modeling — sized so the answer
                    holds up when finance and leadership press on it.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    For implementation standards, benchmarks, and execution workflow, review the{' '}
                    <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                      quantitative healthcare market research guide
                    </Link>
                    .
                  </p>
                  <Link
                    to="/services/quantitative-research"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Open Quantitative Market Research
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </TabsContent>

                <TabsContent value="qualitative" className="pt-4">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reach for qualitative when the question is why. In-depth interviews, advisory boards, patient-pathway
                    mapping, and synthesis that surfaces the decision drivers and adoption barriers a survey can measure
                    but never explain.
                  </p>
                  <Link
                    to="/services/qualitative-research"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Open Qualitative Market Research
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              {MARKET_RESEARCH_HUB_SECTIONS.whyHeading}
            </h2>
            {MARKET_RESEARCH_HUB_SECTIONS.whyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              {MARKET_RESEARCH_HUB_SECTIONS.methodHeading}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Method</th>
                    <th className="text-left p-4 font-semibold text-foreground">Best when</th>
                    <th className="text-left p-4 font-semibold text-foreground">Primary output</th>
                    <th className="text-left p-4 font-semibold text-foreground">Deep dive</th>
                  </tr>
                </thead>
                <tbody>
                  {MARKET_RESEARCH_HUB_SECTIONS.methodRows.map((row) => (
                    <tr key={row.method} className="border-t border-border">
                      <td className="p-4 text-foreground font-medium">{row.method}</td>
                      <td className="p-4 text-muted-foreground">{row.when}</td>
                      <td className="p-4 text-muted-foreground">{row.output}</td>
                      <td className="p-4">
                        <Link to={row.link} className="text-primary underline">
                          Open guide
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Compare market research service types</h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Service type</th>
                    <th className="text-left p-4 font-semibold text-foreground">Best used for</th>
                    <th className="text-left p-4 font-semibold text-foreground">Primary output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Quantitative research</td>
                    <td className="p-4 text-muted-foreground">Segmentation, market sizing, adoption measurement</td>
                    <td className="p-4 text-muted-foreground">Statistical confidence and forecast-ready evidence</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Qualitative research</td>
                    <td className="p-4 text-muted-foreground">Decision rationale, objections, message testing</td>
                    <td className="p-4 text-muted-foreground">Behavioral insight and strategic context</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Healthcare-specific programs</td>
                    <td className="p-4 text-muted-foreground">Clinical pathways, stakeholder influence, compliance context</td>
                    <td className="p-4 text-muted-foreground">Execution-ready healthcare strategy guidance</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-foreground">Saudi-focused research</td>
                    <td className="p-4 text-muted-foreground">SFDA alignment, Vision 2030 priorities, local access planning</td>
                    <td className="p-4 text-muted-foreground">Country-specific market entry and growth priorities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Client outcomes and proof points</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <FlaskConical className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Faster launch prioritization</h3>
                <p className="text-sm text-muted-foreground">
                  Sequencing accounts by evidence rather than instinct let teams put early effort where conversion was most likely — and stop spreading a small field force thin.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <Stethoscope className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Sharper physician engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Knowing what physicians actually weigh let teams lead with the message that mattered, cutting friction out of scientific exchange.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Stronger market access planning</h3>
                <p className="text-sm text-muted-foreground">
                  Mapping the evidence payers ask for against real implementation constraints kept access narratives honest — and defensible at committee.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Service links by objective</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/healthcare-market-research/saudi-arabia" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Saudi pharmaceutical market strategy</h3>
                <p className="text-sm text-muted-foreground">How SFDA registration, NUPCO procurement, and Vision 2030 priorities reshape a launch in the Kingdom.</p>
              </Link>
              <Link to="/market-research-healthcare" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Healthcare market research programs</h3>
                <p className="text-sm text-muted-foreground">Physician, payer, and patient evidence built for commercial, medical, and access teams across regulated markets.</p>
              </Link>
              <Link to="/bionixus-market-research-middle-east" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Middle East pharmaceutical market research</h3>
                <p className="text-sm text-muted-foreground">The GCC evidence playbook — launch readiness, access strategy, and the first 90 days of activation across six markets.</p>
              </Link>
              <Link to="/qualitative-market-research" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Qualitative market research</h3>
                <p className="text-sm text-muted-foreground">Get to the why behind the data — through in-depth interviews, focus groups, and stakeholder conversations.</p>
              </Link>
              <Link to="/pharmacies-saudi-arabia-marketing" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Pharmacy channel strategy in Saudi Arabia</h3>
                <p className="text-sm text-muted-foreground">Retail and institutional pharmacy evidence for the activation decisions that move volume on the ground.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Market research FAQs</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>

      <Footer />
    </div>
  );
};

export default MarketResearch;
