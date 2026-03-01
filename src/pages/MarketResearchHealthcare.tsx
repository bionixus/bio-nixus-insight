import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const healthcareFaq = [
  {
    question: 'How is healthcare market research different from general B2B studies?',
    answer:
      'Healthcare programs require stakeholder-specific evidence design across clinical, access, and institutional pathways, not only commercial preference measurement.',
  },
  {
    question: 'Can BioNixus support compliance-aware healthcare studies across regions?',
    answer:
      'Yes. We design projects with privacy, governance, and local market constraints in mind while preserving comparability across markets.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Market Research',
    serviceType: 'Healthcare and pharmaceutical market research',
    provider: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'United Kingdom', 'Europe'],
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/market-research-healthcare' },
  ]),
  buildFAQSchema(healthcareFaq),
];

export default function MarketResearchHealthcare() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Healthcare Market Research Services | Compliance, Trends, and Stakeholder Insights | BioNixus"
        description="Healthcare market research services for pharmaceutical teams, combining quantitative rigor, qualitative depth, compliance awareness, and 2026 market trend intelligence."
        canonical="/market-research-healthcare"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research', href: '/market-research-healthcare' },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Healthcare Market Research Services</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              BioNixus delivers healthcare-focused market research programs for pharmaceutical and life-science teams that
              need reliable evidence for launch, access, and growth decisions.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">How this page differs from general market research</h2>
            <p>
              General market research frameworks often miss the institutional complexity of healthcare markets. In
              pharmaceuticals, adoption decisions are shaped by clinical protocols, payer requirements, evidence standards,
              and workflow constraints at provider level. Healthcare research must map these realities directly.
            </p>
            <p>
              This page focuses on healthcare-specific execution: physician behavior, patient-flow friction, committee
              influence, access barriers, and practical implementation. If you need a broader services overview, use our{' '}
              <Link to="/market-research" className="text-primary underline">
                market research hub
              </Link>
              . If you need market-level details for Saudi execution, review our{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                Saudi pharmaceutical research page
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Core healthcare research capabilities</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Stakeholder evidence programs</h3>
                <p className="text-sm text-muted-foreground">
                  Insights from physicians, pharmacists, payers, and institutional decision-makers linked to practical
                  commercial and access decisions.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Healthcare pathway analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Mapping diagnosis, treatment, referral, and continuation pathways to identify leakage points and growth
                  opportunities.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Mixed-method strategy support</h3>
                <p className="text-sm text-muted-foreground">
                  Integrated qualitative and quantitative approaches that convert data into execution-ready priorities.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Compliance and governance in healthcare studies</h2>
            <p>
              Healthcare research must be designed with compliance in mind from day one. Projects should align with
              applicable privacy frameworks, including GDPR where relevant, and with market-specific obligations for
              respondent handling, data storage, and reporting use. BioNixus embeds compliance checks across questionnaire
              design, field execution, and insight delivery to reduce regulatory and reputational risk.
            </p>
            <p>
              For global teams, we structure outputs to support governance across medical, commercial, and access
              functions. This reduces misalignment between what is discovered in research and what can be acted on inside
              controlled operating models.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">2026 healthcare market trend signals</h2>
            <p>
              In 2026, healthcare strategy is being shaped by stronger evidence expectations, tighter budget governance,
              and increased demand for measurable outcomes. Teams need sharper segmentation, stronger comparative value
              narratives, and practical implementation planning in accounts where adoption is operationally constrained.
            </p>
            <p>
              We also see faster shifts in physician information behavior and cross-channel influence, making static annual
              research insufficient for many portfolios. Continuous intelligence loops now matter more than one-off studies,
              especially in therapeutic areas with high competitive churn.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Representative healthcare case study patterns</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Launch readiness under mixed access conditions</h3>
                <p className="text-sm text-muted-foreground">
                  We helped a team align account prioritization and evidence messaging around realistic uptake conditions,
                  improving first-wave activation quality.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Stakeholder objection mapping for better engagement</h3>
                <p className="text-sm text-muted-foreground">
                  A structured qualitative-quantitative workflow identified where value communication was breaking down,
                  enabling a focused correction plan.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Healthcare research FAQs</h2>
            <div className="space-y-3">
              {healthcareFaq.map((item) => (
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
}
