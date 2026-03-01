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
    '@type': 'Article',
    headline: 'Erfolgsfaktoren für Healthcare Startups',
    inLanguage: 'de',
    publisher: { '@type': 'Organization', name: 'BioNixus' },
  },
  buildBreadcrumbSchema([
    { name: 'Start', href: '/de' },
    { name: 'Blog', href: '/de/blog' },
    { name: 'Success in Startups', href: '/de/success-in-startups' },
  ]),
];

export default function GermanSuccessInStartups() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Erfolg in Healthcare Startups | BioNixus Blog (DE)"
        description="Praxisnahe Perspektiven für Healthcare- und Pharma-Startups: Marktzugang, Evidenzstrategie und skalierbare Go-to-Market-Modelle."
        canonical="/de/success-in-startups"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Start', href: '/de' },
            { name: 'Blog', href: '/de/blog' },
            { name: 'Success in Startups', href: '/de/success-in-startups' },
          ]}
        />

        <section className="py-16">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-semibold text-foreground mb-4">
              Erfolgsfaktoren für Healthcare Startups
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Erfolgreiche Healthcare-Startups gewinnen nicht nur durch Technologie, sondern durch evidenzbasierte
              Marktentscheidungen. Entscheidend sind klare Priorisierung, regulatorisches Verständnis und ein belastbares
              Marktzugangsmodell.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              BioNixus unterstützt Teams mit strukturierter Marktforschung, um frühe Annahmen zu validieren und
              Go-to-Market-Risiken zu reduzieren. Für weitere Insights besuchen Sie den{' '}
              <Link to="/de/blog" className="text-primary underline">
                deutschen Blogbereich
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
