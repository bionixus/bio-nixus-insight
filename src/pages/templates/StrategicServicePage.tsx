import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { ExpandedServiceLandingContent } from '@/components/page/ExpandedServiceLandingContent';
import type { ServiceLandingExpandedContent } from '@/data/serviceLandingContent';
import { getPageMedia } from '@/data/mediaAssets';
import { MediaVisualBriefing } from '@/components/media/MediaVisualBriefing';
import { ProcessWorkflowVisual } from '@/components/media/ProcessWorkflowVisual';
import { ProofVideoEmbed } from '@/components/media/ProofVideoEmbed';

type LinkItem = {
  to: string;
  label: string;
  primary?: boolean;
};

type StrategicServicePageProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  breadcrumbLabel: string;
  h1: string;
  intro: string;
  links: LinkItem[];
  bullets: string[];
  decisionPoints: Array<{ title: string; body: string }>;
  metrics: Array<{ label: string; value: string; detail: string }>;
  /** Optional service category for Service schema (defaults to the breadcrumb label). */
  serviceType?: string;
  /** Optional regions the service covers, for Service.areaServed. */
  areaServed?: string[];
  /** Optional FAQ entries; when provided, a FAQPage schema + on-page FAQ render. */
  faqs?: Array<{ question: string; answer: string }>;
  /** Optional long-form sections from serviceLandingContent ([BIO-451]). */
  expandedContent?: ServiceLandingExpandedContent;
  /** Key into PAGE_MEDIA in mediaAssets.ts; defaults to slug derived from canonical URL. */
  mediaSlug?: string;
};

export default function StrategicServicePage({
  title,
  description,
  canonicalUrl,
  breadcrumbLabel,
  h1,
  intro,
  links,
  bullets,
  decisionPoints,
  metrics,
  serviceType,
  areaServed,
  faqs,
  expandedContent,
  mediaSlug,
}: StrategicServicePageProps) {
  const resolvedFaqs = expandedContent?.faqs ?? faqs;
  const pagePath = canonicalUrl.replace('https://www.bionixus.com', '') || '/';
  const slugKey = pagePath.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'service';
  const resolvedMediaSlug = mediaSlug ?? slugKey.replace(/^-|-$/g, '');
  const pageMedia = getPageMedia(resolvedMediaSlug) ?? getPageMedia('default-service');
  const faqSectionId = `service-faq-${slugKey}`;
  const marketName = areaServed && areaServed.length ? areaServed[0] : 'GCC & MENA';
  const serviceLabel = (serviceType ?? breadcrumbLabel).toLowerCase();

  const config: ReportConversionConfig = {
    showEgyptPhone: Boolean(areaServed?.some((a) => /egypt/i.test(a))),
    marketName,
    reportLabel: breadcrumbLabel,
    canonicalPath: pagePath,
    emailSubject: `${h1} — BioNixus`,
    routingHint: `Tell us your target market and the decision you are making, and we route you to the right ${serviceLabel} lead.`,
    primaryCtaLabel: 'Book a discovery call',
    consultationHeadline: `Plan your ${breadcrumbLabel.toLowerCase()} with BioNixus`,
    consultationBody:
      'BioNixus pairs senior-led design with bilingual Arabic–English fieldwork and audit-ready governance — scoped to the decision in front of you, not a generic template.',
    asideDeskLabel: `${marketName} desk`,
    midPageHeadline: `Scope a ${serviceLabel} engagement`,
    midPageBody:
      'Book a 30-minute briefing to align on objectives, stakeholders, and timeline before we build the proposal.',
  };

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: breadcrumbLabel, href: pagePath },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: h1,
      description,
      serviceType: serviceType ?? breadcrumbLabel,
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      ...(areaServed && areaServed.length ? { areaServed } : {}),
      url: canonicalUrl,
    },
    buildBreadcrumbSchema(breadcrumbItems),
    ...(resolvedFaqs && resolvedFaqs.length ? [buildFAQSchema(resolvedFaqs, { pageUrl: canonicalUrl })] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={description} canonical={canonicalUrl} jsonLd={jsonLd} />
      <ReportReadingProgress progressId={`service-rp-${slugKey}`} />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <ReportPremiumHero
          title={h1}
          description={intro}
          config={config}
          countryName={marketName}
          badges={['BioNixus service', 'Senior-led analysis', 'Bilingual fieldwork']}
          stats={metrics.map((m) => ({ value: m.value, label: m.label }))}
          statsCaption=""
          heroImage={pageMedia?.heroImage}
        />

        {pageMedia?.visualBriefing ? (
          <MediaVisualBriefing
            heading={pageMedia.visualBriefing.heading}
            figures={pageMedia.visualBriefing.figures}
          />
        ) : null}
        {pageMedia?.processHeading ? (
          <ProcessWorkflowVisual
            heading={pageMedia.processHeading}
            steps={[
              'Discovery and feasibility sprint',
              'Protocol and sample governance',
              'Bilingual field execution',
              'Decision-ready insight handover',
            ]}
          />
        ) : null}

        <ReportContentWithAside config={config}>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            For regional context and related services, start from our{' '}
            <Link to="/healthcare-market-research" className="text-primary underline font-medium">
              healthcare market research hub
            </Link>{' '}
            before scoping this engagement.
          </p>
          {expandedContent ? <ExpandedServiceLandingContent content={expandedContent} /> : null}

          {/* Decision framework */}
          <section className="section-padding bg-cream-dark rounded-2xl border border-border/40" id="decision-framework">
            <div className="container-wide max-w-4xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Executive decision framework</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                How we approach {breadcrumbLabel.toLowerCase()}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {decisionPoints.map((point) => (
                  <article key={point.title} className="bg-card rounded-xl border border-border p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
                  </article>
                ))}
              </div>
              <ReportMidPageCta config={config} className="mt-8" />
            </div>
          </section>

          {pageMedia?.proofVideo ? (
            <ProofVideoEmbed config={pageMedia.proofVideo} className="py-6" />
          ) : null}

          {/* Delivery priorities */}
          <section className="section-padding" id="delivery-priorities">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Delivery priorities</h2>
              <ul className="space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold" aria-hidden>
                      ✓
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Proof & execution snapshot */}
          <section className="section-padding bg-cream-dark rounded-2xl border border-border/40" id="proof-snapshot">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                Proof &amp; execution snapshot
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {metrics.map((metric) => (
                  <article key={metric.label} className="bg-card rounded-xl border border-border p-5 shadow-sm text-center">
                    <p className="text-2xl md:text-3xl font-display font-bold text-primary tabular-nums">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground mt-2">{metric.label}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{metric.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Explore next */}
          <section className="section-padding" id="explore-next">
            <div className="container-wide max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Explore next</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {links.map((link) => (
                  <Link
                    key={`${link.to}-${link.label}`}
                    to={link.to}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary"
                  >
                    <span className="text-sm font-semibold text-foreground">{link.label}</span>
                    <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {resolvedFaqs && resolvedFaqs.length ? (
            <FAQSection
              sectionId={faqSectionId}
              title={`${breadcrumbLabel} — frequently asked questions`}
              items={resolvedFaqs}
              className="bg-muted/30 rounded-2xl border border-border/40"
            />
          ) : null}
        </ReportContentWithAside>

        <ReportConsultationBand config={config} />
      </main>
      <Footer />
    </div>
  );
}
