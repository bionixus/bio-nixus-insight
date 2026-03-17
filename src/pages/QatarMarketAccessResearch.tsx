import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/qatar-market-access-research';

export default function QatarMarketAccessResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Access Research Qatar | BioNixus</title>
        <meta
          name="description"
          content="Market access research Qatar for pharmaceutical teams needing payer pathway evidence, formulary readiness diagnostics, and launch planning support."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Market Access Research Qatar', href: '/qatar-market-access-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Market Access Research Qatar</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Qatar market access decisions are shaped by concentrated institutional demand and high evidence standards.
              BioNixus helps teams prioritize value story, sequencing, and access actions with lower execution risk.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Institutional stakeholder mapping for launch and access pathways.</li>
              <li>Payer evidence expectation analysis and objection handling.</li>
              <li>Practical action plans for 30/60/90 day execution.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gcc-market-access-guide" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                GCC market access guide
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request Qatar access scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

