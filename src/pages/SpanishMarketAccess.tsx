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
    name: 'Market Access en Mercados Sanitarios',
    provider: { '@type': 'Organization', name: 'BioNixus' },
    areaServed: ['España', 'LatAm', 'EMEA'],
  },
  buildBreadcrumbSchema([
    { name: 'Inicio', href: '/es' },
    { name: 'Market Access', href: '/es/market-access' },
  ]),
];

export default function SpanishMarketAccess() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Market Access en Salud y Farma | BioNixus"
        description="Servicios de market access para farma y healthcare con evidencia, insights de pagadores y estrategia práctica para Europa y mercados internacionales."
        canonical="/es/market-access"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Inicio', href: '/es' },
            { name: 'Market Access', href: '/es/market-access' },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl font-display font-semibold mb-4">Market Access para Farma y Healthcare</h1>
            <p className="text-lg text-primary-foreground/90">
              Diseñamos programas de investigación orientados a decisiones de acceso, precio y adopción en mercados
              sanitarios complejos.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Enfoque regional y diferenciación</h2>
            <p>
              Esta página en español incorpora contexto regional para equipos que operan en España y mercados
              internacionales con necesidades de acceso similares. El objetivo es traducir evidencia clínica y económica en
              mensajes útiles para pagadores y decisores.
            </p>
            <p>
              Para detalles de servicios relacionados, consulte también{' '}
              <Link to="/services/market-access" className="text-primary underline">
                Market Access Services
              </Link>{' '}
              y nuestro{' '}
              <Link to="/market-research" className="text-primary underline">
                hub de market research
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
}
