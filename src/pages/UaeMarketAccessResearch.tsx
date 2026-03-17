import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/uae-market-access-research';

export default function UaeMarketAccessResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Market Access Research UAE | BioNixus</title>
        <meta
          name="description"
          content="Market access research UAE for pricing, reimbursement, and formulary pathway decisions across DHA, DOH, and MOHAP contexts."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Market Access Research UAE', href: '/uae-market-access-research' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Market Access Research UAE</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus helps teams plan UAE market access with emirate-specific evidence, payer objection mapping, and pricing strategy guidance aligned to real institutional decision pathways.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>DOH vs DHA vs MOHAP pathway implications for launch planning.</li>
              <li>Evidence testing for pricing and reimbursement narratives.</li>
              <li>Hospital and committee-level access friction diagnostics.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gcc-market-access-guide" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                GCC market access guide
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request UAE access scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

