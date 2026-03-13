import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';

const insightsPageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'BioNixus Insights for Healthcare and Pharmaceutical Teams',
    description:
      'Learn why BioNixus insights help healthcare and pharmaceutical teams make better launch, access, and growth decisions.',
    url: 'https://www.bionixus.com/insights',
    isPartOf: {
      '@type': 'WebSite',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
    ],
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="BioNixus Insights for Healthcare & Pharma Strategy"
        description="Discover why BioNixus insights improve healthcare and pharmaceutical decisions across market access, launch planning, and growth strategy."
        canonical="/insights"
        jsonLd={insightsPageSchemas}
      />
      <Navbar />
      <main>
        <div className="container-wide max-w-6xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Insights', href: '/insights' },
            ]}
          />
        </div>

        <section className="section-padding pt-6">
          <article className="container-wide max-w-4xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
                Why BioNixus Insights Matter in Healthcare and Pharmaceuticals
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BioNixus insights connect market signals, stakeholder behavior, and regulatory context into
                decision-ready guidance for healthcare and pharmaceutical teams. These insights reduce uncertainty and
                improve the quality of launch, access, and growth decisions across complex markets.
              </p>
            </header>

            <section className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-display font-semibold text-foreground">
                Better Decisions Across the Product Lifecycle
              </h2>
              <p>
                In pharmaceutical strategy, timing and evidence quality directly affect commercial outcomes. BioNixus
                insights help teams prioritize the right opportunities, understand clinician and payer expectations,
                and align internal plans with real market conditions.
              </p>
              <p>
                In healthcare services, insight depth is equally important. Decision-makers need clarity on demand
                patterns, treatment pathways, and access barriers. BioNixus translates this complexity into practical
                actions that leadership teams can apply immediately.
              </p>
            </section>

            <section className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-display font-semibold text-foreground">
                Insight Quality Drives Commercial and Access Performance
              </h2>
              <p>
                High-impact insight programs support market entry planning, message optimization, competitive
                positioning, and market access readiness. With stronger evidence, teams can improve stakeholder
                alignment, reduce strategic rework, and accelerate informed execution.
              </p>
              <p>
                BioNixus combines quantitative and qualitative methods to ensure the insight output is both rigorous
                and actionable. This makes insights usable not only for research teams, but also for commercial,
                medical, and market access leaders.
              </p>
            </section>
          </article>
        </section>

        <section className="section-padding pt-0">
          <div className="container-wide max-w-4xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
              Explore BioNixus Insight Resources
            </h2>
            <p className="text-muted-foreground mb-6">
              Continue with our latest thought leadership in the blog or review practical outcomes in our case studies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/blog"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Explore the Blog
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
