import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { ExecutiveDecisionBlock, PremiumHero } from '@/components/page/PremiumPageSections';

const pageUrl = 'https://www.bionixus.com/real-world-evidence-gcc';
const faqItems = [
  {
    question: 'What decisions can GCC RWE studies support?',
    answer:
      'RWE programs support payer negotiations, launch sequencing, treatment pathway optimization, and lifecycle strategy decisions across GCC institutional contexts.',
  },
  {
    question: 'How does BioNixus handle RWE quality governance?',
    answer:
      'BioNixus applies protocol-level quality controls, transparent assumptions, and clear analytical documentation so outputs can be trusted in high-stakes decisions.',
  },
  {
    question: 'Can GCC RWE outputs connect to HEOR and budget impact work?',
    answer:
      'Yes. GCC RWE outputs are structured to feed HEOR narratives, budget-impact models, and market-access evidence packages.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real World Evidence GCC',
    serviceType: 'Real world evidence studies for GCC pharmaceutical teams',
    areaServed: ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Real World Evidence GCC', href: '/real-world-evidence-gcc' },
  ]),
  buildFAQSchema(faqItems),
];

export default function RealWorldEvidenceGcc() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Real World Evidence GCC | BioNixus</title>
        <meta
          name="description"
          content="Real world evidence GCC programs for pharmaceutical launch and access strategy with practical study design, data quality governance, and stakeholder-ready outputs."
        />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`rwe-gcc-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Real World Evidence GCC', href: '/real-world-evidence-gcc' }]} />
        <PremiumHero
          h1="Real World Evidence GCC"
          intro="BioNixus helps teams generate real world evidence in GCC markets with fit-for-purpose design, local relevance, and decision-ready outputs for market access and lifecycle strategy."
          links={[
            { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
            { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting in Saudi Arabia' },
            { to: '/gcc-market-access-guide', label: 'GCC market access guide' },
            { to: '/contact', label: 'Request RWE scope' },
          ]}
        />
        <ExecutiveDecisionBlock
          heading="RWE decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'RWE bridges clinical reality and payer expectations when market-access choices carry high financial risk.',
            },
            {
              title: 'What the evidence says',
              body: 'Protocol quality and transparent assumptions are the strongest drivers of trusted RWE outputs.',
            },
            {
              title: 'What to do next',
              body: 'Prioritize one decision objective, align protocol scope, and map outputs to commercial/access actions.',
            },
          ]}
        />
        <section className="section-padding py-6">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
              <h2 className="text-lg font-semibold text-foreground mb-3">GCC RWE delivery proof points</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Study setup speed</p>
                  <p className="text-xl font-semibold text-foreground">2-3 weeks</p>
                  <p className="text-xs text-muted-foreground mt-1">From protocol alignment to executable RWE field setup.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Governance reliability</p>
                  <p className="text-xl font-semibold text-foreground">95%+</p>
                  <p className="text-xs text-muted-foreground mt-1">Quality-control pass rate before insight handover.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Decision utility</p>
                  <p className="text-xl font-semibold text-foreground">30/60/90</p>
                  <p className="text-xs text-muted-foreground mt-1">Action format mapped to launch and access decision windows.</p>
                </article>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/healthcare-market-research-agency-gcc" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Back to healthcare market research agency GCC
              </Link>
              <Link to="/heor-consulting-saudi-arabia" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                HEOR consulting in Saudi Arabia
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request RWE scope
              </Link>
            </div>
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Real world evidence GCC FAQs</h2>
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

