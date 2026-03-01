import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const qualFaq = [
  {
    question: 'When should pharmaceutical teams use qualitative research?',
    answer:
      'Use qualitative methods when you need to understand why decisions happen: physician rationale, payer objections, implementation barriers, and unmet stakeholder needs.',
  },
  {
    question: 'How is qualitative different from quantitative research?',
    answer:
      'Quantitative methods measure scale and statistical confidence, while qualitative methods explain decision logic and context. Most strategic programs benefit from both.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Qualitative Market Research',
    serviceType: 'Qualitative healthcare and pharmaceutical research',
    provider: { '@type': 'Organization', name: 'BioNixus' },
    areaServed: ['MENA', 'United Kingdom', 'Europe'],
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Qualitative Market Research', href: '/qualitative-market-research' },
  ]),
  buildFAQSchema(qualFaq),
];

export default function QualitativeMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Qualitative Market Research for Healthcare and Pharma | BioNixus"
        description="Qualitative healthcare market research programs including IDIs, focus groups, ethnographic insight, and strategy-oriented synthesis for pharmaceutical teams."
        canonical="/qualitative-market-research"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Qualitative Market Research', href: '/qualitative-market-research' },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Qualitative Market Research for Pharmaceutical Strategy
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Qualitative research explains decision behavior. BioNixus helps teams understand the motivations, barriers,
              and context that drive adoption outcomes across healthcare markets.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Why qualitative methodology matters</h2>
            <p>
              In complex healthcare markets, strategic failure often comes from misunderstanding stakeholder logic rather
              than lacking data volume. Qualitative methods uncover the reasons behind treatment decisions, evidence
              skepticism, adoption hesitation, and implementation friction.
            </p>
            <p>
              We use qualitative programs to identify what quantitative dashboards cannot explain on their own. This is
              especially useful when teams need to clarify physician perception shifts, payer narrative gaps, or pathway
              barriers before scaling investment.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Core qualitative methods</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">In-depth interviews (IDIs)</h3>
                <p className="text-sm text-muted-foreground">Detailed one-to-one conversations for high-context insight.</p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Focus groups</h3>
                <p className="text-sm text-muted-foreground">Group dynamics to test messaging and surface collective views.</p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Ethnographic workflow insight</h3>
                <p className="text-sm text-muted-foreground">Real-world context for pathway and implementation bottlenecks.</p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Advisory and expert boards</h3>
                <p className="text-sm text-muted-foreground">Structured expert feedback for strategic option testing.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Qualitative analysis frameworks we apply</h2>
            <p>
              We apply thematic coding, decision-journey analysis, and barrier/facilitator matrices to organize qualitative
              data into strategic patterns. Outputs are designed for action: what to change, where to focus, and how to
              sequence interventions.
            </p>
            <p>
              Findings are translated into practical recommendations for commercial teams, medical strategy leaders, and
              market-access stakeholders. This reduces the gap between insight and execution.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Qualitative vs quantitative: when to use each</h2>
            <p>
              Use qualitative methods when you need to diagnose behavior and messaging fit. Use quantitative methods when
              you need scale, segment sizing, and statistical confidence. High-stakes programs usually combine both.
            </p>
            <p>
              If you need broader service orchestration, start with{' '}
              <Link to="/market-research" className="text-primary underline">
                market research services
              </Link>{' '}
              and then align qualitative workstreams with relevant quantitative modules.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {qualFaq.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
}
