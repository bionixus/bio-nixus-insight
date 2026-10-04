import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
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
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';

type LinkItem = {
  to: string;
  label: string;
  primary?: boolean;
};

/** Answer-first block rendered directly under the hero (LLM/AI-overview citable). */
export type StrategicAnswerBlock = {
  question: string;
  answer: string;
  points: Array<{ title: string; description: string }>;
  summary: string;
};

/** Extra long-form section rendered after "Delivery priorities". Any combination of paragraphs, items and links. */
export type StrategicSection = {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  items?: Array<{ title: string; body: string }>;
  links?: LinkItem[];
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
  /** Optional per-region breakdown (e.g. payer/HTA landscape by country) — renders as its own section with one H3 per region. */
  regionalLandscapes?: Array<{ region: string; paragraphs: string[] }>;
  /** Optional answer-first block under the hero (question as H2). */
  answerBlock?: StrategicAnswerBlock;
  /** Optional additional sections rendered after "Delivery priorities". */
  sections?: StrategicSection[];
  /** ISO dates for a WebPage node (datePublished/dateModified). Bump modifiedAt on every content change. */
  publishedAt?: string;
  modifiedAt?: string;
};

/** Lower-cases a label for mid-sentence use while keeping acronyms (HEOR, GCC, RWE, KOL) intact. */
function sentenceCaseLabel(label: string): string {
  return label
    .split(' ')
    .map((word) => (/^[A-Z0-9&/-]{2,}$/.test(word) ? word : word.toLowerCase()))
    .join(' ');
}

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
  regionalLandscapes,
  answerBlock,
  sections,
  publishedAt,
  modifiedAt,
}: StrategicServicePageProps) {
  const resolvedFaqs = expandedContent?.faqs ?? faqs;
  const pagePath = canonicalUrl.replace('https://www.bionixus.com', '') || '/';
  const slugKey = pagePath.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'service';
  const resolvedMediaSlug = mediaSlug ?? slugKey.replace(/^-|-$/g, '');
  const pageMedia = getPageMedia(resolvedMediaSlug) ?? getPageMedia('default-service');
  const faqSectionId = `service-faq-${slugKey}`;
  const marketName = areaServed && areaServed.length ? areaServed[0] : 'GCC & MENA';
  const serviceLabel = sentenceCaseLabel(serviceType ?? breadcrumbLabel);
  const breadcrumbLabelLower = sentenceCaseLabel(breadcrumbLabel);

  const config: ReportConversionConfig = {
    showEgyptPhone: Boolean(areaServed?.some((a) => /egypt/i.test(a))),
    marketName,
    reportLabel: breadcrumbLabel,
    canonicalPath: pagePath,
    emailSubject: `${h1} — BioNixus`,
    routingHint: `Tell us your target market and the decision you are making, and we route you to the right ${serviceLabel} lead.`,
    primaryCtaLabel: 'Book a 30-minute scoping call',
    consultationHeadline: `Plan your ${breadcrumbLabelLower} with BioNixus`,
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
    ...(modifiedAt
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { '@id': 'https://www.bionixus.com/#website' },
            datePublished: publishedAt ?? modifiedAt,
            dateModified: modifiedAt,
          },
        ]
      : []),
    ...(resolvedFaqs && resolvedFaqs.length ? [buildFAQSchema(resolvedFaqs, { pageUrl: canonicalUrl })] : []),
  ];

  return (
    <div className="directory-page min-h-screen">
      <SEOHead title={title} description={description} canonical={canonicalUrl} jsonLd={jsonLd} />
      <ReportReadingProgress progressId={`service-rp-${slugKey}`} />
      <Navbar />
      <main>
        <ReportPremiumHero
          title={h1}
          description={intro}
          config={config}
          countryName={marketName}
          badges={['Primary research', 'Senior-led analysis', 'Bilingual fieldwork']}
          stats={metrics.map((m) => ({ value: m.value, label: m.label }))}
          statsCaption=""
          heroImage={pageMedia?.heroImage}
          breadcrumbs={breadcrumbItems}
        />

        {/* Hub link must sit within the first 200 words of visible content, ahead of media blocks. */}
        <div className="section-padding py-4">
          <p className="container-wide max-w-4xl mx-auto text-sm text-muted-foreground leading-relaxed">
            For regional context and related services, start from our{' '}
            <Link to="/healthcare-market-research" className="text-primary underline font-medium">
              healthcare market research hub
            </Link>{' '}
            before scoping this engagement.
          </p>
        </div>

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
          {answerBlock ? (
            <section className="section-padding pt-0" id="answer">
              <div className="container-wide max-w-4xl mx-auto">
                <GeoLLMAnswerBlock
                  question={answerBlock.question}
                  answer={answerBlock.answer}
                  points={answerBlock.points}
                  summary={answerBlock.summary}
                />
              </div>
            </section>
          ) : null}
          {expandedContent ? <ExpandedServiceLandingContent content={expandedContent} /> : null}

          {/* Decision framework */}
          <section className="section-padding bg-cream-dark rounded-2xl border border-border/40" id="decision-framework">
            <div className="container-wide max-w-4xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Executive decision framework</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                How we approach {breadcrumbLabelLower}
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

          {sections?.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={`section-padding ${index % 2 === 0 ? 'bg-cream-dark rounded-2xl border border-border/40' : ''}`}
            >
              <div className="container-wide max-w-4xl mx-auto">
                {section.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{section.eyebrow}</p>
                ) : null}
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">{section.heading}</h2>
                {section.intro ? (
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{section.intro}</p>
                ) : null}
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 48)} className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
                {section.items && section.items.length ? (
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    {section.items.map((item) => (
                      <article key={item.title} className="bg-card rounded-xl border border-border p-5 shadow-sm">
                        <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                      </article>
                    ))}
                  </div>
                ) : null}
                {section.links && section.links.length ? (
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <li key={`${link.to}-${link.label}`}>
                        <Link to={link.to} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                          {link.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}

          <section className="section-padding pt-0">
            <div className="container-wide max-w-4xl mx-auto">
              <ConversionCTA
                variant="talk-to-research"
                market={marketName}
                ctaId={`${slugKey}_cta_1`}
                ctaLocation="after_delivery_priorities"
              />
            </div>
          </section>

          {regionalLandscapes && regionalLandscapes.length ? (
            <section className="section-padding" id="regional-landscapes">
              <div className="container-wide max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
                  Regional payer &amp; HTA landscapes
                </h2>
                <div className="space-y-8">
                  {regionalLandscapes.map((entry) => (
                    <article key={entry.region}>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-3">{entry.region}</h3>
                      {entry.paragraphs.map((p, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
                          {p}
                        </p>
                      ))}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

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

          <section className="section-padding">
            <div className="container-wide max-w-4xl mx-auto">
              <ConversionCTA
                variant="talk-to-research"
                market={marketName}
                ctaId={`${slugKey}_cta_2`}
                ctaLocation="after_proof_snapshot"
              />
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
