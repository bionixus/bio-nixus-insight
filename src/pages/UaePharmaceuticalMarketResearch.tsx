import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/uae-pharmaceutical-market-research';

export default function UaePharmaceuticalMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>UAE Pharmaceutical Market Research | BioNixus</title>
        <meta
          name="description"
          content="UAE pharmaceutical market research for emirate-level access strategy, physician pathway analysis, and launch activation planning."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'UAE Pharmaceutical Market Research', href: '/uae-pharmaceutical-market-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">UAE Pharmaceutical Market Research</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              UAE research execution requires emirate-aware design across DHA, DOH, and MOHAP pathways. This page supports the Middle East pillar with UAE-specific planning depth.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Channel-specific demand modeling by emirate and provider type.</li>
              <li>Payer and institutional access barriers mapped for launch planning.</li>
              <li>Evidence translation for commercial and market access teams.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bionixus-market-research-middle-east" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Back to Middle East Pillar
              </Link>
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Compare with Saudi Arabia page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

