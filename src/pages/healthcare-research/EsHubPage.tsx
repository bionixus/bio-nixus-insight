import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard } from '@/components/healthcare-research/healthcareResearchUi';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportPremiumSection } from '@/components/report-premium';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ES_HUB_CONTENT } from '@/data/esHealthcareMarketResearchContent';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';

const content = ES_HUB_CONTENT;
const faqSectionId = 'es-healthcare-mr-hub-faq';

const config: ReportConversionConfig = {
  showEgyptPhone: false,
  marketName: 'España, Europa y MENA',
  reportLabel: 'Estudios de mercado sanitario',
  canonicalPath: content.canonicalPath,
  emailSubject: 'Estudios de mercado sanitario — BioNixus',
  routingHint:
    'Indique su mercado objetivo, su área terapéutica y la decisión que necesita respaldar para un enrutamiento rápido.',
  primaryCtaLabel: 'Reservar un briefing',
  consultationHeadline: 'Planifique su programa de investigación sanitaria',
  consultationBody:
    'BioNixus combina diseño senior-led, trabajo de campo bilingüe y gobernanza lista para auditoría — calibrado a la decisión que tiene delante.',
  asideDeskLabel: 'Oficina Europa y MENA',
  midPageHeadline: 'Encuadrar un estudio de mercado sanitario',
  midPageBody:
    'Reserve un briefing de 30 minutos para alinear objetivos, partes interesadas y calendario antes de la propuesta formal.',
};

export default function EsHubPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: content.heroTitle,
      description: content.seoDescription,
      serviceType: 'Estudios de mercado farmacéutico y sanitario',
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      areaServed: ['España', 'Europa', 'Oriente Medio', 'Golfo'],
      url: `https://www.bionixus.com${content.canonicalPath}`,
    },
    buildBreadcrumbSchema([
      { name: content.breadcrumbHome, href: '/es' },
      { name: content.breadcrumbCurrent, href: content.canonicalPath },
    ]),
    buildFAQSchema(content.faqs, { pageUrl: `https://www.bionixus.com${content.canonicalPath}` }),
  ];

  return (
    <>
      <SEOHead
        title={content.seoTitle}
        description={content.seoDescription}
        canonical={content.canonicalPath}
        jsonLd={jsonLd}
      />
      <Helmet>
        <meta property="og:locale" content="es_ES" />
      </Helmet>

      <HealthcareResearchPageShell
        progressId="es-healthcare-mr-hub"
        config={config}
        breadcrumbs={[
          { name: content.breadcrumbHome, href: '/es' },
          { name: content.breadcrumbCurrent, href: content.canonicalPath },
        ]}
        hero={{
          title: content.heroTitle,
          description: (
            <>
              <p>{content.heroDescription}</p>
              <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
                Empiece por la{' '}
                <Link className="font-medium text-primary hover:underline" to="/es/healthcare-market-research/spain">
                  página España
                </Link>
                . Hub en inglés:{' '}
                <Link className="font-medium text-primary hover:underline" to="/healthcare-market-research">
                  healthcare market research
                </Link>
                . Versión en francés:{' '}
                <Link className="font-medium text-primary hover:underline" to="/fr/healthcare-market-research">
                  recherche marché santé
                </Link>
                .
              </p>
            </>
          ),
          stats: content.stats,
          statsCaption: '',
          badges: ['BioNixus', 'Europa y MENA', 'Trabajo de campo bilingüe'],
          countryName: 'España, Europa y MENA',
        }}
        tocItems={[
          { href: '#scope-es', label: 'Alcance' },
          { href: '#capabilities-es', label: 'Capacidades' },
          { href: '#regions-es', label: 'Regiones' },
          { href: '#methodology-es', label: 'Metodología' },
          { href: '#explore-es', label: 'Explorar' },
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: 'FAQ — estudios de mercado sanitario',
          items: content.faqs,
        }}
      >
        <section className="py-10 bg-background border-b border-border/60">
          <div className="container-wide max-w-5xl mx-auto px-4">
            <GeoLLMAnswerBlock
              question={content.geoQuestion}
              answer={content.geoAnswer}
              points={content.geoPoints}
              summary="Utilice los enlaces siguientes para encuadrar un programa o solicitar una propuesta a través de BioNixus."
            />
          </div>
        </section>

        <ReportPremiumSection id="scope-es" title={content.scopeTitle} variant="cream">
          {content.scopeParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              {paragraph}
            </p>
          ))}
          <ReportMidPageCta config={config} className="mt-6" />
        </ReportPremiumSection>

        <ReportPremiumSection id="capabilities-es" title={content.capabilitiesTitle}>
          <div className="grid md:grid-cols-2 gap-4">
            {content.capabilities.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </ReportPremiumSection>

        <ReportPremiumSection id="regions-es" title={content.regionsTitle} variant="cream">
          <div className="space-y-8">
            {content.regions.map((region) => (
              <div key={region.name}>
                <h3 className="text-xl font-semibold text-foreground mb-2">{region.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 max-w-3xl">{region.blurb}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {region.markets.map((market) => (
                    <HealthcareNavCard key={market.to} to={market.to} title={market.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ReportPremiumSection>

        <ReportPremiumSection id="methodology-es" title={content.methodologyTitle}>
          {content.methodologyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </ReportPremiumSection>

        <ReportPremiumSection id="explore-es" title="Explorar a continuación" variant="cream">
          <div className="grid sm:grid-cols-2 gap-3">
            {content.navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group flex items-center justify-between gap-3 rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-primary ${
                  link.featured ? 'border-primary/40' : 'border-border'
                }`}
              >
                <span className="text-sm font-semibold text-foreground">{link.label}</span>
                <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </ReportPremiumSection>
      </HealthcareResearchPageShell>
    </>
  );
}
