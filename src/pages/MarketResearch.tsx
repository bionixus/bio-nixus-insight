import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, MessageSquareQuote, Trophy, ShieldCheck, FlaskConical, Stethoscope } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const pageUrl = 'https://www.bionixus.com/market-research';
const faqItems = [
  {
    question: 'Which market research service should we start with?',
    answer:
      'Start with the decision you need to make. Use quantitative research for sizing and confidence, qualitative research for behavior and context, and healthcare-specific programs for execution in regulated care environments.',
  },
  {
    question: 'Can BioNixus combine Saudi, GCC, and Europe evidence in one program?',
    answer:
      'Yes. We design unified programs with local modules so leadership gets cross-market comparability without losing country-specific insight quality.',
  },
];

const MarketResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Research Services Hub | Healthcare & Pharma Strategy | BioNixus</title>
        <meta
          name="description"
          content="Comprehensive market research services for healthcare and pharmaceutical teams, including Saudi-focused programs, healthcare strategy studies, qualitative insight, and market access intelligence."
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
        <section className="section-padding pt-24 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              Complete Guide to Market Research Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              BioNixus supports healthcare and pharmaceutical teams with decision-ready market research for launch
              planning, market access, product optimization, and country expansion. This page is your service hub: start
              with the right research approach, compare service types, and navigate to specialized pages by objective and
              geography.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mt-4">
              If your immediate priority is Saudi execution, begin with our{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                pharmaceutical market research in Saudi Arabia
              </Link>{' '}
              page. For broader healthcare-specific planning, use{' '}
              <Link to="/market-research-healthcare" className="text-primary underline">
                healthcare market research
              </Link>
              . For method-focused programs, review{' '}
              <Link to="/qualitative-market-research" className="text-primary underline">
                qualitative market research
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto grid md:grid-cols-4 gap-4">
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Proven success model</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structured research programs aligned to commercial, medical, and access priorities.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Quantitative precision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Robust sample design, advanced analytics, and measurable outputs for confident decisions.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Qualitative depth</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deep stakeholder insight from physicians, payers, patients, and healthcare decision makers.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Access-ready evidence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Practical outputs for payer engagement, access planning, and institutional activation.
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
                    Quantitative research services for healthcare and pharma teams, including market sizing,
                    segmentation, physician surveys, pricing research, and advanced statistical modeling.
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
                    Qualitative research services including in-depth interviews, advisory boards, pathway mapping, and
                    insight synthesis to uncover decision drivers and adoption barriers.
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
                  Research-led account sequencing helped teams concentrate effort where early conversion probability was
                  highest.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <Stethoscope className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Sharper physician engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Stakeholder insights improved message relevance and reduced friction in scientific communication.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Stronger market access planning</h3>
                <p className="text-sm text-muted-foreground">
                  Evidence mapping aligned payer narratives with practical implementation constraints.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Service links by objective</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Saudi pharmaceutical market strategy</h3>
                <p className="text-sm text-muted-foreground">SFDA, local access dynamics, and Vision 2030 execution priorities.</p>
              </Link>
              <Link to="/market-research-healthcare" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Healthcare market research programs</h3>
                <p className="text-sm text-muted-foreground">Healthcare-specific evidence for commercial, medical, and access teams.</p>
              </Link>
              <Link to="/qualitative-market-research" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Qualitative market research</h3>
                <p className="text-sm text-muted-foreground">Understand decision logic with IDIs, focus groups, and stakeholder interviews.</p>
              </Link>
              <Link to="/pharmacies-saudi-arabia-marketing" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Pharmacy channel strategy in Saudi Arabia</h3>
                <p className="text-sm text-muted-foreground">Retail and institutional pharmacy evidence for activation planning.</p>
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
      </main>

      <Footer />
    </div>
  );
};

export default MarketResearch;
