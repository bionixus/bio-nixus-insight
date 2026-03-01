import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pharmacy Marketing Research in Saudi Arabia',
    provider: { '@type': 'Organization', name: 'BioNixus' },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Pharmacies Marketing in Saudi Arabia', href: '/pharmacies-saudi-arabia-marketing' },
  ]),
];

export default function PharmaciesSaudiArabiaMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pharmacies Marketing in Saudi Arabia | Retail & Institutional Insight | BioNixus"
        description="Saudi pharmacy marketing research covering retail chain dynamics, HCP influence, patient behavior, and channel activation strategy."
        canonical="/pharmacies-saudi-arabia-marketing"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Pharmacies Marketing in Saudi Arabia', href: '/pharmacies-saudi-arabia-marketing' },
          ]}
        />
        <section className="py-16">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl font-display font-semibold text-foreground mb-4">
              Pharmacies Marketing in Saudi Arabia
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pharmacy channel strategy in Saudi Arabia requires localized evidence on retail behavior, institutional
              purchasing patterns, and point-of-care influence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BioNixus supports teams with practical channel research that connects pharmacy insight to demand generation,
              access strategy, and physician engagement priorities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For broader Saudi planning, see{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                pharmaceutical market research in Saudi Arabia
              </Link>
              .
            </p>
          </div>
        </section>
        <CTASection variant="country" countryName="Saudi Arabia" />
      </main>
      <Footer />
    </div>
  );
}
