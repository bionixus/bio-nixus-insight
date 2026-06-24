import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard } from '@/components/healthcare-research/healthcareResearchUi';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportPremiumSection } from '@/components/report-premium';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { FR_HUB_CONTENT } from '@/data/frHealthcareMarketResearchContent';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';

const content = FR_HUB_CONTENT;
const faqSectionId = 'fr-healthcare-mr-hub-faq';

const config: ReportConversionConfig = {
  showEgyptPhone: false,
  marketName: 'Europe et MENA',
  reportLabel: 'Recherche de marché santé',
  canonicalPath: content.canonicalPath,
  emailSubject: 'Recherche de marché santé — BioNixus',
  routingHint:
    'Indiquez votre marché cible, votre aire thérapeutique et la décision à éclairer pour un routage rapide.',
  primaryCtaLabel: 'Réserver un briefing',
  consultationHeadline: 'Planifier votre programme de recherche santé',
  consultationBody:
    'BioNixus associe conception senior-led, fieldwork bilingue et gouvernance audit-ready — calibré sur la décision devant vous.',
  asideDeskLabel: 'Bureau Europe & MENA',
  midPageHeadline: 'Cadrer une étude de marché santé',
  midPageBody:
    'Réservez un briefing de 30 minutes pour aligner objectifs, parties prenantes et calendrier avant la proposition.',
};

export default function FrHubPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: content.heroTitle,
      description: content.seoDescription,
      serviceType: 'Études de marché pharmaceutique et santé',
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      areaServed: ['France', 'Europe', 'Moyen-Orient', 'Golfe'],
      url: `https://www.bionixus.com${content.canonicalPath}`,
    },
    buildBreadcrumbSchema([
      { name: content.breadcrumbHome, href: '/fr' },
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
        progressId="fr-healthcare-mr-hub"
        config={config}
        breadcrumbs={[
          { name: content.breadcrumbHome, href: '/fr' },
          { name: content.breadcrumbCurrent, href: content.canonicalPath },
        ]}
        hero={{
          title: content.heroTitle,
          description: (
            <>
              <p>{content.heroDescription}</p>
              <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
                Commencez par la{' '}
                <Link className="font-medium text-primary hover:underline" to="/fr/healthcare-market-research/france">
                  page France
                </Link>{' '}
                ou le{' '}
                <Link className="font-medium text-primary hover:underline" to="/blog/etudes-marche-pharmaceutique-france-2026">
                  guide études de marché France 2026
                </Link>
                . Hub anglais :{' '}
                <Link className="font-medium text-primary hover:underline" to="/healthcare-market-research">
                  healthcare market research
                </Link>
                .
              </p>
            </>
          ),
          stats: content.stats,
          statsCaption: '',
          badges: ['BioNixus', 'Europe & MENA', 'Fieldwork bilingue'],
          countryName: 'Europe et MENA',
        }}
        tocItems={[
          { href: '#scope-fr', label: 'Périmètre' },
          { href: '#capabilities-fr', label: 'Capacités' },
          { href: '#regions-fr', label: 'Régions' },
          { href: '#methodology-fr', label: 'Méthodologie' },
          { href: '#explore-fr', label: 'Explorer' },
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: 'FAQ — recherche de marché santé',
          items: content.faqs,
        }}
      >
        <section className="py-10 bg-background border-b border-border/60">
          <div className="container-wide max-w-5xl mx-auto px-4">
            <GeoLLMAnswerBlock
              question={content.geoQuestion}
              answer={content.geoAnswer}
              points={content.geoPoints}
              summary="Utilisez les liens ci-dessous pour cadrer un programme ou demander une proposition via BioNixus."
            />
          </div>
        </section>

        <ReportPremiumSection id="scope-fr" title={content.scopeTitle} variant="cream">
          {content.scopeParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              {paragraph}
            </p>
          ))}
          <ReportMidPageCta config={config} className="mt-6" />
        </ReportPremiumSection>

        <ReportPremiumSection id="capabilities-fr" title={content.capabilitiesTitle}>
          <div className="grid md:grid-cols-2 gap-4">
            {content.capabilities.map((item) => (
              <article key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </ReportPremiumSection>

        <ReportPremiumSection id="regions-fr" title={content.regionsTitle} variant="cream">
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

        <ReportPremiumSection id="methodology-fr" title={content.methodologyTitle}>
          {content.methodologyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </ReportPremiumSection>

        <ReportPremiumSection id="explore-fr" title="Explorer ensuite" variant="cream">
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
