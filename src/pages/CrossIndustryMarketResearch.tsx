import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { trackCtaClick } from '@/lib/analytics';
import {
  BIONIXUS_EMAIL,
  BIONIXUS_PHONE_LINES,
  mailtoHref,
} from '@/components/report-conversion/constants';

const PAGE_PATH = '/services/cross-industry';
const CANONICAL = `https://www.bionixus.com${PAGE_PATH}`;

const industries = [
  {
    title: 'FMCG & consumer',
    body: 'Brand tracking, shopper insight, category sizing, and concept tests for brands entering or expanding across MENA and European markets.',
  },
  {
    title: 'Financial services',
    body: 'Product strategy, customer journey, and competitive intelligence for banks, insurers, and fintech teams evaluating regional demand.',
  },
  {
    title: 'Technology & SaaS',
    body: 'Market sizing, win-loss, buyer-committee mapping, and GTM validation for software and technology companies planning multi-country launches.',
  },
  {
    title: 'Industrial & energy',
    body: 'Commercial strategy and market-entry research for industrial, manufacturing, and energy teams that need comparable readouts across borders.',
  },
  {
    title: 'Government & public sector',
    body: 'Policy research, programme evaluation, and stakeholder insight where compliance-aware fieldwork and transparent methodology matter.',
  },
] as const;

const capabilities = [
  {
    title: 'Quantitative research',
    body: 'Online and telephone surveys, brand trackers, pricing studies, and market sizing with sample governance that survives internal review.',
  },
  {
    title: 'Qualitative research',
    body: 'In-depth interviews, focus groups, and moderated workshops that explain buyer logic, adoption barriers, and message fit.',
  },
  {
    title: 'Multi-country programmes',
    body: 'One programme office coordinates fieldwork across MENA, GCC, Egypt, the UK, and Europe so leadership gets numbers that compare like-for-like.',
  },
  {
    title: 'Compliance-aware fieldwork',
    body: 'Local recruitment standards, documented quality controls, and bilingual Arabic–English execution where Gulf and North African markets require it.',
  },
] as const;

const proofPoints = [
  { value: '127+', label: 'Projects delivered', detail: 'Across commercial and research programmes' },
  { value: '38', label: 'Countries', detail: 'Across MENA, Europe, and global programmes' },
  { value: 'Q+Q', label: 'Methods', detail: 'Quantitative and qualitative under one team' },
] as const;

const faqs = [
  {
    question: 'Is BioNixus only a healthcare market research agency?',
    answer:
      'No. Healthcare and life sciences remain a flagship practice, but BioNixus also runs quantitative and qualitative programmes for FMCG, financial services, technology, industrial, and public-sector buyers. This page is the dedicated entry point for non-healthcare briefs.',
  },
  {
    question: 'Which markets can you cover in one study?',
    answer:
      'Typical multi-country scopes combine Egypt and wider MENA, GCC markets, the UK, and selected European countries. Coverage depends on incidence, language needs, and fieldwork feasibility — we confirm that in the scoping call before proposing a design.',
  },
  {
    question: 'How fast can we get a research scope?',
    answer:
      'After a short objective workshop, focused single-market scopes often move to a written proposal within a few business days. Multi-country designs take longer when recruitment feasibility or local compliance steps need mapping first.',
  },
  {
    question: 'How should Track B paid media land here?',
    answer:
      'Use campaign UTMs in the form crossindustry_{platform}_{objective} (for example crossindustry_google_search or crossindustry_linkedin_leadgen). Proposal submissions capture utm_source, utm_medium, utm_campaign, utm_content, and utm_term for GA4 and CRM routing.',
  },
] as const;

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Cross-industry market research', href: PAGE_PATH },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cross-industry market research across MENA & Europe',
    description:
      'Quantitative and qualitative market research for FMCG, financial services, technology, industrial, and public-sector teams entering MENA and European markets.',
    serviceType: 'Multi-country market research',
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    areaServed: ['MENA', 'GCC', 'Egypt', 'United Kingdom', 'Europe'],
    url: CANONICAL,
  },
  buildBreadcrumbSchema(breadcrumbItems),
  buildFAQSchema(faqs, { pageUrl: CANONICAL }),
];

export default function CrossIndustryMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cross-Industry Market Research MENA & Europe | BioNixus"
        description="Multi-country quantitative and qualitative market research for FMCG, financial services, technology, industrial, and public-sector teams across MENA and Europe."
        canonical={PAGE_PATH}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section className="section-padding pt-4 pb-16 bg-gradient-to-br from-[#06101F] via-[#0C1B33] to-[#12263F] text-[#FFFEFB]">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
              Cross-industry research · Track B
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-semibold mb-5 max-w-4xl leading-tight">
              Multi-country market research across MENA &amp; Europe
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mb-8">
              Quantitative and qualitative research for any industry entering MENA — regional execution depth,
              comparable multi-country methodology, and compliance-aware fieldwork without healthcare-only messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C9A84C] text-[#06101F] font-semibold hover:bg-[#E4CC7A] transition-colors"
                onClick={() =>
                  trackCtaClick({
                    ctaId: 'cross_industry_hero_request_scope',
                    ctaLocation: 'hero',
                    targetUrl: '#contact',
                  })
                }
              >
                Request a research scope for your market
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-[#FFFEFB] font-semibold hover:bg-white/10 transition-colors"
                onClick={() =>
                  trackCtaClick({
                    ctaId: 'cross_industry_hero_services',
                    ctaLocation: 'hero',
                    targetUrl: '/services',
                  })
                }
              >
                View all research services
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 border-b border-border/60" aria-label="Proof points">
          <div className="container-wide max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
            {proofPoints.map((point) => (
              <article key={point.label} className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-display font-semibold text-foreground">{point.value}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{point.label}</p>
                <p className="text-sm text-muted-foreground">{point.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Research capabilities for non-healthcare buyers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Start from the decision — market entry, brand performance, competitive positioning, or customer experience —
              then choose the methods that fit. BioNixus runs the same senior-led programme office used across{' '}
              <Link to="/market-research" className="text-primary underline font-medium">
                market research services
              </Link>{' '}
              and the{' '}
              <Link to="/bionixus-industries" className="text-primary underline font-medium">
                industries hub
              </Link>
              , scoped without pharma-specific terminology.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {capabilities.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-14 bg-[#F4F2ED]">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Industries we support on this track
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Track B campaigns and inbound briefs land here when the buyer is outside healthcare — so messaging stays
              focused on regional depth and methodology rather than therapy-area evidence.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map((item) => (
                <article key={item.title} className="rounded-xl border border-[#D6D0C7]/60 bg-white p-6">
                  <h3 className="text-base font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-14">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Regional depth where multi-country studies usually stall
            </h2>
            <p>
              Egypt and wider MENA consumer research, GCC bilingual fieldwork, and European coordination sit in one
              operating model. That matters when a brand team needs comparable readouts across markets that do not share
              the same language, panel infrastructure, or fieldwork norms.
            </p>
            <p>
              We design programmes so country modules stay locally credible while the master analysis stays decision-ready
              for regional leadership — whether the brief is a FMCG launch, a banking product test, or a technology GTM
              study.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm">
              <Link
                to="/market-research-egypt"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline font-medium"
              >
                Egypt market research programmes
              </Link>
              <Link
                to="/bionixus-market-research-middle-east"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline font-medium"
              >
                Middle East market research pillar
              </Link>
              <Link
                to="/b2b-industries"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline font-medium"
              >
                B2B &amp; enterprise research
              </Link>
              <Link
                to="/b2c-industries"
                className="rounded-lg border border-border bg-card p-4 text-primary hover:underline font-medium"
              >
                B2C &amp; consumer research
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-14 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-14 bg-primary text-primary-foreground">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Request a research scope for your market
            </h2>
            <p className="text-primary-foreground/90 mb-7 leading-relaxed max-w-2xl mx-auto">
              Tell us the industry, markets, and decision you need to make. We return a scoped proposal with method mix,
              timeline, and fieldwork feasibility — not a generic capability deck.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                onClick={() =>
                  trackCtaClick({
                    ctaId: 'cross_industry_band_request_scope',
                    ctaLocation: 'pre_form_band',
                    targetUrl: '#contact',
                  })
                }
              >
                Request a research scope for your market
              </a>
              <a
                href={mailtoHref('Cross-industry market research scope — BioNixus')}
                className="px-6 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
              >
                Email {BIONIXUS_EMAIL}
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-x-4">
              {BIONIXUS_PHONE_LINES.map((line, index) => (
                <span key={line.tel} className="inline-flex items-center gap-2">
                  {index > 0 ? (
                    <span className="hidden sm:inline text-primary-foreground/50" aria-hidden>
                      |
                    </span>
                  ) : null}
                  <a className="underline" href={`tel:${line.tel}`}>
                    {line.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
