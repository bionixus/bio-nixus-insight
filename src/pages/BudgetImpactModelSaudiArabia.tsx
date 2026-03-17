import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';

const pageUrl = 'https://www.bionixus.com/budget-impact-model-saudi-arabia';

export default function BudgetImpactModelSaudiArabia() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Budget Impact Model Saudi Arabia | BioNixus</title>
        <meta
          name="description"
          content="Budget impact model support in Saudi Arabia with payer-relevant assumptions, scenario testing, and actionable evidence for market access planning."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Budget Impact Model Saudi Arabia', href: '/budget-impact-model-saudi-arabia' }]} />
        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">Budget Impact Model Saudi Arabia</h1>
            <p className="text-muted-foreground leading-relaxed mb-5">
              BioNixus builds budget impact models for Saudi Arabia with local market assumptions, uptake scenarios, and payer-aligned evidence framing for practical access decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/heor-consulting-saudi-arabia" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                HEOR consulting Saudi Arabia
              </Link>
              <Link to="/contact" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Request budget-impact scope
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

