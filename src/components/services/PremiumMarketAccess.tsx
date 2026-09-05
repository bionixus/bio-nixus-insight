import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Scale, Wallet } from 'lucide-react';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';
import { SERVICE_EXPANDED_FAQS } from '@/data/seo/serviceExpandedPageContent';

const PATH = '/services/market-access';

const METHOD_CARDS = [
  {
    icon: Scale,
    title: 'EMEA HTA pathways',
    body: 'NICE technology appraisals, G-BA/IQWiG AMNOG dossiers, HAS CEPS pricing — evidence-gap analysis and value-dossier development.',
  },
  {
    icon: Building2,
    title: 'GCC SFDA & MOHAP access',
    body: 'SFDA sequencing, NUPCO tender mapping, MOHAP/DHA/DOH listing strategy, and hospital formulary committee research.',
  },
  {
    icon: Wallet,
    title: 'Pricing & payer research',
    body: 'Willingness-to-pay studies, budget-impact models, and pricing-corridor analysis for confidential negotiations.',
  },
] as const;

const COVERAGE_LINKS = [
  { to: '/gcc-market-access-guide', label: 'GCC market access guide' },
  { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting Saudi Arabia' },
  { to: '/pharmaceutical-companies-saudi-arabia', label: 'Saudi Arabia pharma guide' },
  { to: '/pharmaceutical-companies-uae', label: 'UAE pharma guide' },
  { to: '/pharmaceutical-companies-kuwait', label: 'Kuwait pharma guide' },
  { to: '/pharmaceutical-companies-qatar', label: 'Qatar pharma guide' },
  { to: '/pharmaceutical-companies-egypt', label: 'Egypt pharma guide' },
] as const;

type MarketAccessCopy = {
  title: string;
  heroSubtitle: string;
  overview: string;
  capabilities: string[];
  deliverables: string[];
  geoCoverage: string;
  ctaText: string;
};

type PremiumMarketAccessProps = {
  svc: MarketAccessCopy;
};

export function PremiumMarketAccess({ svc }: PremiumMarketAccessProps) {
  const faqItems = SERVICE_EXPANDED_FAQS['market-access'] ?? [];

  return (
    <>
      <div className="premium-home-ivory pt-24 pb-0">
        <div className="container-wide mx-auto max-w-6xl">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Market access', href: PATH },
            ]}
            className="px-0"
          />
        </div>
      </div>

      <section
        className="premium-home-midnight section-padding pt-10 pb-16 md:pt-14 md:pb-24"
        aria-labelledby="market-access-heading"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent" aria-hidden="true" />
        <div className="container-wide relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
            <div>
              <PremiumEyebrow>HTA · Pricing · Reimbursement</PremiumEyebrow>
              <h1
                id="market-access-heading"
                className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
              >
                {svc.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">
                {svc.heroSubtitle} Part of our{' '}
                <Link to="/healthcare-market-research" className="text-[#C9A84C] underline-offset-4 hover:underline">
                  healthcare market research
                </Link>{' '}
                programmes — payer evidence for commercial, HEOR, and affiliate access teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contact" className="premium-gold-btn">
                  Request a proposal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/gcc-market-access-guide"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
                >
                  GCC market access guide
                </Link>
              </div>
            </div>

            <aside className="premium-card-dark p-7 md:p-8" aria-label="Market access pathways at a glance">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">The pathway</p>
              <p className="mt-3 font-display text-xl font-light text-[#FFFEFB]">The dossier is not the listing</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/40">
                Authorities, calendars, and tender grain already in the brief — from the capabilities we field, not a
                published price.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  { label: 'EMEA HTA', value: 'NICE · G-BA · HAS' },
                  { label: 'GCC access', value: 'SFDA · MOHAP · NUPCO' },
                  { label: 'Evidence', value: 'WTP · BIA · corridors' },
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

      <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="access-cuts-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <PremiumEyebrow>Three gates</PremiumEyebrow>
            <h2
              id="access-cuts-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              The brief is not a reference price
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
          <GeoLLMAnswerBlock
            className="mt-12 border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.06)]"
            question="What does market access consulting for pharmaceutical companies in the GCC involve?"
            answer="BioNixus market access consulting combines EMEA HTA submission support (NICE, G-BA, HAS) with Gulf-specific SFDA, MOHAP, DHA, and NUPCO pricing and reimbursement strategy — payer research, formulary mapping, tender defence, and willingness-to-pay studies across UK, EU5, Saudi Arabia, UAE, and Kuwait."
            points={[
              {
                title: 'EMEA HTA pathways',
                description:
                  'NICE technology appraisals, G-BA/IQWiG AMNOG dossiers, HAS CEPS pricing — evidence gap analysis and value dossier development.',
              },
              {
                title: 'GCC SFDA & MOHAP access',
                description:
                  'SFDA registration sequencing, NUPCO tender mapping, MOHAP/DHA/DOH listing strategy, and hospital formulary committee research.',
              },
              {
                title: 'Pricing & payer research',
                description:
                  'Willingness-to-pay studies, budget impact models, and pricing corridor analysis for confidential negotiations.',
              },
              {
                title: 'Linked healthcare hub',
                description:
                  'Country-level market research programmes via the healthcare market research hub and GCC pharmaceutical market reports.',
              },
              {
                title: 'Saudi HEOR pillars',
                description:
                  "Dedicated Saudi Arabia pages for budget impact analysis, cost-effectiveness analysis, HTA studies, and payer market access research — the four evidence pillars SFDA's Economic Evaluation System requires, scoped as one coordinated program via HEOR consulting Saudi Arabia.",
              },
            ]}
            summary="Request a market access proposal through BioNixus contact — scoped to your target EMEA and GCC markets."
          />
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="access-overview-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">Overview</PremiumEyebrow>
          <h2
            id="access-overview-heading"
            className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            Overview
          </h2>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-[#7A7267]">{svc.overview}</p>
          <p className="mt-6">
            <Link
              to="/heor-consulting"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C9A84C] underline-offset-4 hover:underline"
            >
              Explore HEOR consulting — models, RWE and value dossiers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="access-capabilities-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <PremiumEyebrow>What we field</PremiumEyebrow>
            <h2
              id="access-capabilities-heading"
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

      <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="access-deliverables-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <PremiumEyebrow tone="teal">What you receive</PremiumEyebrow>
            <h2
              id="access-deliverables-heading"
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

      <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="access-coverage-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="premium-card overflow-hidden p-0 md:grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-home-midnight px-8 py-10 md:px-10 md:py-12">
              <p className="relative z-10 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                Where listing happens
              </p>
              <p className="relative z-10 mt-4 font-display text-2xl font-light leading-snug text-[#FFFEFB] md:text-3xl">
                UK, EU5, GCC, and Egypt
              </p>
            </div>
            <div className="px-8 py-10 md:px-10 md:py-12">
              <h2
                id="access-coverage-heading"
                className="mb-4 font-display text-2xl font-light tracking-tight text-[#0C1B33] md:text-3xl"
              >
                Geographic Coverage
              </h2>
              <p className="font-light leading-relaxed text-[#7A7267]">{svc.geoCoverage}</p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {COVERAGE_LINKS.map((link) => (
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
            </div>
          </div>
        </div>
      </section>

      <ServiceMarketReferenceGuide serviceSlug="market-access" />

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
              href="mailto:admin@bionixus.com?subject=Market%20access%20consulting"
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
