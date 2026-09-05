import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe2, SlidersHorizontal } from 'lucide-react';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';
import { SERVICE_EXPANDED_FAQS } from '@/data/seo/serviceExpandedPageContent';

const PATH = '/services/quantitative-research';

const METHOD_CARDS = [
  {
    icon: BarChart3,
    title: 'Physician surveys',
    body: 'Online and telephone studies (n=50–500+) across 17+ EMEA countries — NHS, private, and hospital settings.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Trade-off design',
    body: 'Conjoint, MaxDiff, and discrete choice experiments sized to the cognitive load clinicians can actually complete.',
  },
  {
    icon: Globe2,
    title: 'Decision-ready cuts',
    body: 'Market sizing, tracking, HTA decision-maker insights, and payer willingness-to-pay — not a headline average alone.',
  },
] as const;

const COVERAGE_LINKS = [
  { match: 'Kuwait', to: '/pharmaceutical-companies-kuwait', label: 'Kuwait pharma guide' },
  { match: 'Saudi', to: '/pharmaceutical-companies-saudi-arabia', label: 'Saudi Arabia pharma guide' },
  { match: 'UAE', to: '/pharmaceutical-companies-uae', label: 'UAE pharma guide' },
  { match: 'Egypt', to: '/pharmaceutical-companies-egypt', label: 'Egypt pharma guide' },
  { match: 'Qatar', to: '/pharmaceutical-companies-qatar', label: 'Qatar pharma guide' },
  { match: 'Oman', to: '/pharmaceutical-companies-oman', label: 'Oman pharma guide' },
  { match: 'Bahrain', to: '/pharmaceutical-companies-bahrain', label: 'Bahrain pharma guide' },
] as const;

type QuantitativeServiceCopy = {
  title: string;
  heroSubtitle: string;
  overview: string;
  capabilities: string[];
  deliverables: string[];
  geoCoverage: string;
  ctaText: string;
};

type PremiumQuantitativeResearchProps = {
  svc: QuantitativeServiceCopy;
};

export function PremiumQuantitativeResearch({ svc }: PremiumQuantitativeResearchProps) {
  const faqItems = SERVICE_EXPANDED_FAQS['quantitative-research'] ?? [];
  const coverageLinks = COVERAGE_LINKS.filter((link) => svc.geoCoverage.includes(link.match));

  return (
    <>
      <div className="premium-home-ivory pt-24 pb-0">
        <div className="container-wide mx-auto max-w-6xl">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Quantitative research', href: PATH },
            ]}
            className="px-0"
          />
        </div>
      </div>

      <section
        className="premium-home-midnight section-padding pt-10 pb-16 md:pt-14 md:pb-24"
        aria-labelledby="quant-research-heading"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent" aria-hidden="true" />
        <div className="container-wide relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
            <div>
              <PremiumEyebrow>Physician surveys · EMEA</PremiumEyebrow>
              <h1
                id="quant-research-heading"
                className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
              >
                {svc.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">
                {svc.heroSubtitle} Part of our{' '}
                <Link to="/healthcare-market-research" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  healthcare market research
                </Link>{' '}
                programmes — statistically robust evidence for commercial, medical affairs, and market access teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contact" className="premium-gold-btn">
                  Request a proposal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/quantitative-healthcare-market-research"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
                >
                  2026 methodology guide
                </Link>
              </div>
            </div>

            <aside className="premium-card-dark p-7 md:p-8" aria-label="Quantitative research methods at a glance">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">The instrument</p>
              <p className="mt-3 font-display text-xl font-light text-[#FFFEFB]">Powered for the decision, not the headline</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/40">
                Sample, method, and market cuts already in the brief — from the capabilities we field, not a published
                market size.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  { label: 'Sample', value: 'n=50–500+ physicians' },
                  { label: 'Methods', value: 'Conjoint · MaxDiff · DCE' },
                  { label: 'Coverage', value: '17+ EMEA markets' },
                ].map((row) => (
                  <li key={row.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{row.label}</p>
                    <p className="mt-1.5 font-display text-lg font-light text-[#FFFEFB]">{row.value}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="quant-methods-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <PremiumEyebrow>Three cuts</PremiumEyebrow>
            <h2
              id="quant-methods-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              The brief is not a country average
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {METHOD_CARDS.map((card) => (
              <article key={card.title} className="premium-card">
                <card.icon className="mb-5 h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{card.title}</h3>
                <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="quant-overview-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">Overview</PremiumEyebrow>
          <h2
            id="quant-overview-heading"
            className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            Overview
          </h2>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-[#7A7267]">{svc.overview}</p>
          <p className="mt-6">
            <Link
              to="/quantitative-healthcare-market-research"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Read the 2026 methodology guide
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="quant-capabilities-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <PremiumEyebrow>What we field</PremiumEyebrow>
            <h2
              id="quant-capabilities-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              Capabilities
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {svc.capabilities.map((capability) => (
              <li key={capability} className="premium-card p-6">
                <p className="text-[15px] font-light leading-relaxed text-[#0C1B33]">{capability}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="quant-deliverables-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <PremiumEyebrow tone="teal">What you receive</PremiumEyebrow>
            <h2
              id="quant-deliverables-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              Deliverables
            </h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {svc.deliverables.map((deliverable) => (
              <li key={deliverable} className="premium-card p-6">
                <p className="text-[15px] font-light leading-relaxed text-[#0C1B33]">{deliverable}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="quant-coverage-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="premium-card overflow-hidden p-0 md:grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-home-midnight px-8 py-10 md:px-10 md:py-12">
              <p className="relative z-10 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                Where we field
              </p>
              <p className="relative z-10 mt-4 font-display text-2xl font-light leading-snug text-[#FFFEFB] md:text-3xl">
                UK, EU5, GCC, and North Africa
              </p>
            </div>
            <div className="px-8 py-10 md:px-10 md:py-12">
              <h2
                id="quant-coverage-heading"
                className="mb-4 font-display text-2xl font-light tracking-tight text-[#0C1B33] md:text-3xl"
              >
                Geographic Coverage
              </h2>
              <p className="font-light leading-relaxed text-[#7A7267]">{svc.geoCoverage}</p>
              {coverageLinks.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {coverageLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
                      >
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <ServiceMarketReferenceGuide serviceSlug="quantitative-research" />

      {faqItems.length > 0 ? (
        <div className="premium-home-ivory">
          <FAQSection
            premium
            title="Frequently asked questions"
            items={faqItems}
            className="section-padding py-16 md:py-20"
          />
        </div>
      ) : null}

      <section className="premium-home-midnight section-padding py-20 md:py-24">
        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-6 block h-px w-10 bg-[#C9A84C]/40" aria-hidden="true" />
          <h2 className="mb-5 font-display text-3xl font-light tracking-tight text-[#FFFEFB] md:text-4xl">
            {svc.ctaText}
          </h2>
          <p className="mb-9 text-base font-light leading-relaxed text-white/45">
            Tell us about your project and receive a tailored proposal within 24 hours.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="premium-gold-btn">
              Request a Proposal
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="mailto:admin@bionixus.com?subject=Quantitative%20healthcare%20research"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 px-8 py-[15px] text-sm font-medium tracking-wide text-white/60 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
            >
              Email admin@bionixus.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
