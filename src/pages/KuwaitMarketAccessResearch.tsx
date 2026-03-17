import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/kuwait-market-access-research';

export default function KuwaitMarketAccessResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Access Research Kuwait | BioNixus</title>
        <meta
          name="description"
          content="Market access research Kuwait for pharmaceutical launch decisions, payer evidence alignment, and institutional adoption planning."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Market Access Research Kuwait', href: '/kuwait-market-access-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Market Access Research Kuwait</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Kuwait access strategy needs institution-level evidence and realistic stakeholder sequencing. BioNixus translates market signals into practical payer and formulary actions.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Access barrier diagnosis by treatment area and care setting.</li>
              <li>Value narrative testing for local decision environments.</li>
              <li>Procurement and formulary influence mapping.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gcc-market-access-guide" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                GCC market access guide
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request Kuwait access scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

