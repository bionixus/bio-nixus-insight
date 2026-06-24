import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard, HealthcareStatPanel } from '@/components/healthcare-research/healthcareResearchUi';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportPremiumSection } from '@/components/report-premium';
import { FR_FRANCE_CONTENT } from '@/data/frHealthcareMarketResearchContent';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';

const content = FR_FRANCE_CONTENT;
const faqSectionId = 'fr-france-mr-faq';
const franceConfig = COUNTRY_CONFIGS.france;

const config: ReportConversionConfig = {
  showEgyptPhone: false,
  marketName: 'France',
  reportLabel: 'Études de marché pharmaceutique France',
  canonicalPath: content.canonicalPath,
  emailSubject: 'Études de marché France — BioNixus',
  routingHint: 'Précisez votre indication, votre calendrier HAS et vos questions payeurs pour un routage rapide.',
  primaryCtaLabel: 'Planifier un briefing France',
  consultationHeadline: 'Prêt pour une étude de marché en France ?',
  consultationBody:
    'BioNixus associe fieldwork français, préparation HAS et modules CEESP dans une gouvernance documentée.',
  asideDeskLabel: 'Bureau France',
  midPageHeadline: 'Commander une étude médecins ou payeurs en France',
  midPageBody:
    'Réservez un briefing pour aligner échantillon, méthode et calendrier avant la proposition formelle.',
};

export default function FrFranceCountryPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: content.h1,
      description: content.seoDescription,
      serviceType: 'Études de marché pharmaceutique France',
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      areaServed: 'France',
      url: `https://www.bionixus.com${content.canonicalPath}`,
    },
    buildBreadcrumbSchema([
      { name: 'Accueil', href: '/fr' },
      { name: content.breadcrumbHub, href: '/fr/healthcare-market-research' },
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
        <meta property="og:locale" content="fr_FR" />
      </Helmet>

      <HealthcareResearchPageShell
        progressId="fr-france-mr"
        config={config}
        breadcrumbs={[
          { name: 'Accueil', href: '/fr' },
          { name: content.breadcrumbHub, href: '/fr/healthcare-market-research' },
          { name: content.breadcrumbCurrent, href: content.canonicalPath },
        ]}
        hero={{
          title: content.h1,
          description: (
            <p>
              Retour au{' '}
              <Link to="/fr/healthcare-market-research" className="text-primary font-medium hover:underline">
                hub recherche de marché santé
              </Link>
              . {content.intro}
            </p>
          ),
          stats: content.keyStats.map((s) => ({ value: s.value, label: s.label })),
          statsCaption: '',
          badges: ['HAS / ANSM', 'Fieldwork FR–EN', 'Market access'],
          countryName: 'France',
        }}
        tocItems={[
          { href: '#regulatory-fr', label: 'Réglementaire' },
          { href: '#services-fr', label: 'Services' },
          { href: '#methodology-france', label: 'Méthodologie' },
          { href: '#related-fr', label: 'Liens' },
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: 'FAQ — études de marché France',
          items: content.faqs,
        }}
      >
        <ReportPremiumSection id="regulatory-fr" title={content.regulatoryTitle} variant="cream">
          {content.regulatoryParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              {paragraph}
            </p>
          ))}
          <p className="text-sm text-muted-foreground max-w-4xl">
            Contexte approfondi :{' '}
            <Link to="/blog/etudes-marche-pharmaceutique-france-2026" className="text-primary underline font-medium">
              guide études de marché pharmaceutique France 2026
            </Link>
            . Version anglaise :{' '}
            <Link to="/healthcare-market-research/france" className="text-primary underline font-medium">
              France healthcare market research
            </Link>
            .
          </p>
          <ReportMidPageCta config={config} className="mt-6" />
        </ReportPremiumSection>

        <ReportPremiumSection id="services-fr" title={content.servicesTitle}>
          <div className="grid md:grid-cols-2 gap-4">
            {content.services.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </ReportPremiumSection>

        <ReportPremiumSection id="methodology-france" title={content.methodologyTitle} variant="cream">
          {content.methodologyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              {paragraph}
            </p>
          ))}
          <HealthcareStatPanel
            className="mt-6"
            stats={content.keyStats.map((s) => ({ label: s.label, value: s.value }))}
          />
        </ReportPremiumSection>

        <ReportPremiumSection id="related-fr" title="Pages connexes">
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {content.relatedLinks.map((link) => (
              <HealthcareNavCard key={link.to} to={link.to} title={link.label} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Retour au{' '}
            <Link to="/fr/healthcare-market-research" className="text-primary underline font-medium">
              hub recherche de marché santé
            </Link>{' '}
            ou{' '}
            <Link to="/fr/contacts" className="text-primary underline font-medium">
              contactez BioNixus
            </Link>{' '}
            pour une proposition France.
          </p>
        </ReportPremiumSection>
      </HealthcareResearchPageShell>

      {franceConfig ? (
        <RelatedPages
          currentSlug={franceConfig.slug}
          relatedCountries={franceConfig.relatedCountries}
          relatedTherapies={franceConfig.relatedTherapies}
        />
      ) : null}
    </>
  );
}
