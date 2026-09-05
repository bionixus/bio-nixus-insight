import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, MapPin, Store } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { isValidSchemaNode } from '@/components/SchemaMarkup';

const PATH = '/nielsen-alternative';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const PAGE_TITLE = CTR?.title ?? 'Nielsen Alternatives & Competitors: Ranked (2026)';
const PAGE_DESCRIPTION =
  CTR?.description ??
  'NielsenIQ alternatives for FMCG and retail research 2026 — when BioNixus wins on account-level and traditional-trade data, and when Nielsen panels still fit.';
const PUBLISHED = '2026-09-05';
const AUTHOR = 'BioNixus Research Team';

const ALTERNATIVES = [
  {
    name: 'BioNixus',
    bestFor: 'Account-level and SKU-level primary research; traditional trade; industries Nielsen does not cover',
    region: '48 countries — MENA, Europe, Americas, Asia',
    model: 'Project- and country-based. No enterprise dashboard minimum.',
    highlight: true,
  },
  {
    name: 'NielsenIQ',
    bestFor: 'Modern-trade retail measurement, POS, and household panels for FMCG and OTC',
    region: 'Global syndicated coverage; MENA often via a regional hub',
    model: 'Syndicated subscription. Category sizing at national / modern-trade cuts.',
  },
  {
    name: 'Kantar',
    bestFor: 'Brand tracking and large-scale consumer panels',
    region: 'Global network; GCC via Dubai hub',
    model: 'Syndicated trackers plus custom quant at network scale',
  },
  {
    name: 'Ipsos',
    bestFor: 'Custom U&A, brand, and public-affairs studies',
    region: 'Offices in Riyadh, Jeddah, Dubai and a wider global network',
    model: 'Project-based at large-agency scale',
  },
  {
    name: 'Euromonitor',
    bestFor: 'Desk-based category sizing and competitive landscapes',
    region: 'Syndicated Passport reports, not in-country fieldwork',
    model: 'Report and database subscription',
  },
  {
    name: 'GfK',
    bestFor: 'Tech and consumer-durables retail panels',
    region: 'GCC coverage for electronics and durables',
    model: 'Syndicated POS / channel data',
  },
] as const;

const FAQ = [
  {
    question: 'What is the best Nielsen alternative for FMCG research in MENA?',
    answer:
      'Keep NielsenIQ when you need modern-trade retail measurement and household panels. Add BioNixus when the brief is account-level or SKU-level brand vs competitor data, traditional trade, or a category Nielsen does not audit — real estate, banking, manufacturing, or B2B.',
  },
  {
    question: 'Does NielsenIQ cover traditional trade and subregions?',
    answer:
      'Syndicated retail audits are strongest in modern trade and national cuts. They typically miss traditional trade, subaccount, and subregion depth. Primary fieldwork fills that gap.',
  },
  {
    question: 'Can we keep Nielsen and still hire BioNixus?',
    answer:
      'Yes. The usual model is Nielsen or similar for category sizing, plus a custom study for the accounts, cities, and SKUs the dashboard does not show. It is not an either/or switch.',
  },
  {
    question: 'How is BioNixus priced versus a Nielsen subscription?',
    answer:
      'BioNixus prices by project and by country. There is no enterprise syndicated minimum. A scoped proposal is ready within 48 hours of a brief. Nielsen subscription fees are not public — ask them directly.',
  },
  {
    question: 'Which industries does Nielsen not cover that BioNixus does?',
    answer:
      'NielsenIQ is built for FMCG, retail, and adjacent consumer packaged goods. BioNixus also fields real estate, banking and financial services, manufacturing, hospitality, and B2B studies — the categories manufacturers ask about when the syndicated feed has nothing to buy.',
  },
];

const WHEN_NIELSEN = [
  'You need standardized modern-trade retail measurement across many countries.',
  'The category is FMCG or OTC and the panel covers your channels.',
  'You already have the subscription and the question is national share, not a named account.',
] as const;

const WHEN_BIONIXUS = [
  'You need brand vs competitor data at account or SKU level in one country.',
  'Traditional trade or a subregion is where the volume actually moves.',
  'The industry is real estate, banking, manufacturing, hospitality, or B2B — Nielsen has no feed to buy.',
] as const;

const GAPS = [
  {
    icon: Store,
    title: 'Traditional trade',
    body: 'Bakals, wholesalers, and open markets where modern-trade panels undersample or exclude volume.',
  },
  {
    icon: MapPin,
    title: 'Named accounts & cities',
    body: 'How this SKU is doing in these accounts and subregions — not only a national share curve.',
  },
  {
    icon: BarChart3,
    title: 'Categories with no panel',
    body: 'Real estate, banking, manufacturing, hospitality, B2B — industries Nielsen does not sell.',
  },
] as const;

const RELATED = [
  { to: '/account-level-market-research', label: 'Account-level data', desc: 'What account- and SKU-level cuts are — and what syndicated feeds miss.' },
  { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges, plus /pricing.md.' },
  { to: '/iqvia-alternative', label: 'IQVIA alternative', desc: 'Pharma audits and syndicated healthcare data.' },
  { to: '/kantar-alternative', label: 'Kantar alternative', desc: 'Brand trackers and Marketplace vs in-market primary.' },
  { to: '/gfk-alternative', label: 'GfK alternative', desc: 'Consumer and retail panels vs traditional-trade fieldwork.' },
  { to: '/ims-health-alternative', label: 'IMS Health alternative', desc: 'Legacy IQVIA audit name — keep the feed, add account-level.' },
  { to: '/bionixus-vs-nielsen', label: 'BioNixus vs Nielsen', desc: 'Head-to-head for commercial directors.' },
  { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: 'Market research firms KSA', desc: 'Country ranking — includes NielsenIQ.' },
  { to: '/insights/top-market-research-companies-uae-2026', label: 'Market research firms UAE', desc: 'Country ranking — includes NielsenIQ.' },
  { to: '/insights/top-market-research-companies-egypt-2026', label: 'Market research firms Egypt', desc: 'Country ranking — includes NielsenIQ.' },
  { to: '/insights/top-fmcg-market-research-companies-saudi-arabia-2026', label: 'FMCG firms in KSA', desc: 'Industry listicle already ranking near page 1.' },
  { to: '/bionixus-vs-iqvia-mena', label: 'BioNixus vs IQVIA MENA', desc: 'Side-by-side MENA capability comparison.' },
] as const;

const faqSchema = buildFAQSchema(FAQ, { pageUrl: CANONICAL });
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Nielsen Alternative', href: PATH },
]);

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NielsenIQ alternatives 2026',
  numberOfItems: ALTERNATIVES.length,
  itemListElement: ALTERNATIVES.map((alt, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: alt.name,
    description: alt.bestFor,
  })),
};

export default function NielsenAlternative() {
  return (
    <div className="min-h-screen bg-[#FFFEFB]">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        {isValidSchemaNode(breadcrumbSchema) && (
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        )}
        {isValidSchemaNode(faqSchema) && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_US"
        article={{ publishedTime: PUBLISHED, modifiedTime: PUBLISHED, author: AUTHOR, section: 'Competitors' }}
      />
      <Navbar />
      <main>
        <div className="premium-home-ivory pt-24 pb-0">
          <div className="container-wide mx-auto max-w-6xl">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: 'Nielsen alternative', href: PATH },
              ]}
              className="px-0"
            />
          </div>
        </div>

        {/* Hero — brand-led midnight plane */}
        <section
          className="premium-home-midnight section-padding relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24"
          aria-labelledby="nielsen-alt-heading"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#C9A84C]/[0.06] blur-3xl motion-safe:animate-pulse"
            aria-hidden="true"
          />
          <div className="container-wide relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
              <div>
                <PremiumEyebrow>NielsenIQ alternative · 2026</PremiumEyebrow>
                <h1
                  id="nielsen-alt-heading"
                  className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
                >
                  Nielsen alternative for account-level market research
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">
                  NielsenIQ is the right buy when you need modern-trade retail measurement and household panels for
                  FMCG. It is the wrong buy when you need account-level or SKU-level brand vs competitor data,
                  traditional trade, or a category the panel does not audit. BioNixus fills that gap with primary
                  fieldwork — priced by project and country.
                </p>
                <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/40">
                  For pharma audits, see{' '}
                  <Link to="/iqvia-alternative" className="text-[#C9A84C] underline-offset-4 hover:underline">
                    IQVIA alternative
                  </Link>
                  . These two pages do different jobs.
                </p>
                <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  Last updated 5 September 2026 · {AUTHOR}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to="/contact" className="premium-gold-btn">
                    Request a proposal
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href="#comparison"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
                  >
                    Compare alternatives
                  </a>
                </div>
              </div>

              <aside
                className="premium-card-dark p-7 md:p-8 motion-safe:transition-transform motion-safe:duration-500 hover:-translate-y-0.5"
                aria-label="When to keep Nielsen vs add BioNixus"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  The decision in one panel
                </p>
                <p className="mt-3 font-display text-xl font-light text-[#FFFEFB]">
                  Keep the dashboard. Buy the cut it cannot sell.
                </p>
                <div className="mt-7 space-y-5">
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-white/35">NielsenIQ</p>
                    <p className="text-sm font-light leading-relaxed text-white/55">
                      Modern-trade POS · household panels · national FMCG / OTC sizing
                    </p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/5 rounded-full bg-white/30" />
                    </div>
                  </div>
                  <div className="h-px bg-white/10" aria-hidden="true" />
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-[#C9A84C]/80">BioNixus</p>
                    <p className="text-sm font-light leading-relaxed text-white/55">
                      Account &amp; SKU primary · traditional trade · categories with no panel
                    </p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-11/12 rounded-full bg-[#C9A84C]" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Quick answer + gaps */}
        <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="gaps-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <PremiumEyebrow>What the panel misses</PremiumEyebrow>
              <h2
                id="gaps-heading"
                className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
              >
                Three reasons manufacturers still brief primary research
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {GAPS.map((gap) => (
                <article
                  key={gap.title}
                  className="premium-card motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-1"
                >
                  <gap.icon className="mb-5 h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                  <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{gap.title}</h3>
                  <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">{gap.body}</p>
                </article>
              ))}
            </div>
            <GeoLLMAnswerBlock
              className="mt-12 border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.06)]"
              question="What is the best Nielsen alternative?"
              answer="Keep NielsenIQ for modern-trade retail panels and category sizing. Choose BioNixus as the Nielsen alternative when the brief is account-level or SKU-level primary research, traditional trade, or an industry Nielsen does not cover — real estate, banking, manufacturing, or B2B. Most teams run both."
              points={[
                {
                  title: 'What Nielsen does well',
                  description: 'POS and household panels for FMCG and OTC in modern trade. National category sizing.',
                },
                {
                  title: 'What it misses',
                  description:
                    'Traditional trade, subregion, subaccount, and SKU-level cuts for a named brand in a named country.',
                },
                {
                  title: 'How BioNixus prices',
                  description: 'Project- and country-based. 48 hours from brief to a proposal ready to launch.',
                },
              ]}
              summary="BioNixus is the Nielsen alternative for manufacturers who already pay for a dashboard and still cannot see their accounts."
            />
          </div>
        </section>

        {/* Who each is for */}
        <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="who-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <PremiumEyebrow>Fit</PremiumEyebrow>
              <h2
                id="who-heading"
                className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
              >
                NielsenIQ vs BioNixus — who each is for
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="premium-card">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A7267]">
                  Stay with NielsenIQ when
                </p>
                <ul className="space-y-3">
                  {WHEN_NIELSEN.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] font-light leading-relaxed text-[#7A7267]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0C1B33]/25" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="premium-card border-[#C9A84C]/25 shadow-[0_24px_80px_rgba(201,168,76,0.08)]">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                  Add BioNixus when
                </p>
                <ul className="space-y-3">
                  {WHEN_BIONIXUS.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] font-light leading-relaxed text-[#7A7267]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C9A84C]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section
          id="comparison"
          className="premium-home-ivory section-padding py-16 md:py-20"
          aria-labelledby="comparison-heading"
        >
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <PremiumEyebrow>Shortlist</PremiumEyebrow>
              <h2
                id="comparison-heading"
                className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
              >
                Nielsen alternatives compared
              </h2>
              <p className="mt-4 font-light leading-relaxed text-[#7A7267]">
                Include real options. Being listed here is not an attack on Nielsen — it is a shortlist for buyers who
                typed “Nielsen alternative.”
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.06)]">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-[#06101F] text-[#FFFEFB]">
                    <th scope="col" className="px-5 py-4 font-medium">
                      Firm
                    </th>
                    <th scope="col" className="px-5 py-4 font-medium">
                      Best for
                    </th>
                    <th scope="col" className="px-5 py-4 font-medium">
                      Coverage
                    </th>
                    <th scope="col" className="border-l border-[#C9A84C]/30 px-5 py-4 font-medium text-[#C9A84C]">
                      Model
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ALTERNATIVES.map((alt) => (
                    <tr
                      key={alt.name}
                      className={`align-top border-t border-[#EDE9E3] ${
                        'highlight' in alt && alt.highlight ? 'bg-[#C9A84C]/[0.06]' : ''
                      }`}
                    >
                      <th scope="row" className="px-5 py-4 font-medium text-[#0C1B33]">
                        {alt.name}
                        {'highlight' in alt && alt.highlight ? (
                          <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A84C]">
                            Primary
                          </span>
                        ) : null}
                      </th>
                      <td className="px-5 py-4 font-light leading-relaxed text-[#7A7267]">{alt.bestFor}</td>
                      <td className="px-5 py-4 font-light leading-relaxed text-[#7A7267]">{alt.region}</td>
                      <td className="border-l border-[#C9A84C]/15 px-5 py-4 font-light leading-relaxed text-[#0C1B33]">
                        {alt.model}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Keep both */}
        <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="keep-both-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="premium-card overflow-hidden p-0 md:grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="premium-home-midnight relative px-8 py-10 md:px-10 md:py-12">
                <p className="relative z-10 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  Not either / or
                </p>
                <p className="relative z-10 mt-4 font-display text-2xl font-light leading-snug text-[#FFFEFB] md:text-3xl">
                  You do not have to switch off Nielsen
                </p>
              </div>
              <div className="px-8 py-10 md:px-10 md:py-12">
                <h2
                  id="keep-both-heading"
                  className="mb-4 font-display text-2xl font-light tracking-tight text-[#0C1B33] md:text-3xl"
                >
                  Two products. One commercial question.
                </h2>
                <p className="font-light leading-relaxed text-[#7A7267]">
                  The dashboard answers “what is the category doing in modern trade?” The brief we take is “how is this
                  SKU doing in these accounts, in this country, including traditional trade?” Those are different
                  products. Manufacturers already paying for Nielsen still brief BioNixus for the cut the feed cannot
                  produce.
                </p>
                <p className="mt-4 font-light leading-relaxed text-[#7A7267]">
                  Proposal ready within 48 hours of a brief. See{' '}
                  <Link to="/pricing" className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    pricing bands
                  </Link>{' '}
                  or{' '}
                  <Link
                    to="/account-level-market-research"
                    className="font-medium text-[#C9A84C] underline-offset-4 hover:underline"
                  >
                    account-level market research
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="premium-home-ivory">
          <FAQSection
            premium
            title="Frequently asked questions"
            items={FAQ}
            className="section-padding py-16 md:py-20"
          />
        </div>

        <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="related-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-10">
              <PremiumEyebrow>Continue</PremiumEyebrow>
              <h2
                id="related-heading"
                className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
              >
                Related resources
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {RELATED.map((resource) => (
                <Link key={resource.to} to={resource.to} className="premium-card group block p-6">
                  <h3 className="mb-2 font-display text-lg font-medium text-[#0C1B33] group-hover:text-[#C9A84C]">
                    {resource.label}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#7A7267]">{resource.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A84C]">
                    Open
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-home-midnight section-padding py-20 md:py-24">
          <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-6 block h-px w-10 bg-[#C9A84C]/40" aria-hidden="true" />
            <h2 className="mb-5 font-display text-3xl font-light tracking-tight text-[#FFFEFB] md:text-4xl">
              Need the cut Nielsen does not sell?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-white/45">
              Account-level or SKU-level primary research — including traditional trade. Proposal ready within 48 hours
              of a brief.
            </p>
            <ConversionCTA
              variant="talk-to-research"
              market="MENA retail & FMCG"
              ctaId="nielsen_alternative_footer"
              ctaLocation="listicle_footer"
              className="border-[#EDE9E3] bg-[#FFFEFB] text-left"
            />
            <p className="mt-8">
              <a
                href="mailto:admin@bionixus.com?subject=Nielsen%20alternative%20research"
                className="text-sm font-medium text-white/50 underline decoration-white/20 underline-offset-4 hover:text-[#C9A84C]"
              >
                Or email admin@bionixus.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
