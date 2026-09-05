import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Layers, Package } from 'lucide-react';
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

const PATH = '/account-level-market-research';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const PAGE_TITLE = CTR?.title ?? 'What Is Account-Level Market Research Data?';
const PAGE_DESCRIPTION =
  CTR?.description ??
  'Account-level market research cuts brand vs competitor data by customer account — not only a national average. SKU-level adds the product cut syndicated audits miss.';
const PUBLISHED = '2026-09-02';
const AUTHOR = 'Haidy Yahia';

const FAQ = [
  {
    question: 'What is account-level market research data?',
    answer:
      'Account-level market research data is brand or competitor evidence cut by customer account — a named hospital, distributor, retailer, or key account — not only a national or global aggregate. It answers how this brand is doing in these accounts, in this country.',
  },
  {
    question: 'What is SKU-level competitor data?',
    answer:
      'SKU-level competitor data is the same evidence cut by product SKU for a named brand in a named country. It shows which pack, strength, or line is winning or losing inside an account, not just the franchise total.',
  },
  {
    question: 'Why do IQVIA and Nielsen miss account-level cuts?',
    answer:
      'Syndicated IQVIA and NielsenIQ feeds are built for national, modern-trade, or panel-modelled audits. They typically miss subaccounts, subregions, traditional trade, and account-level or SKU-level primary data. That is a product design choice, not a quality failure.',
  },
  {
    question: 'Is account-level data the same as Veeva or claims data?',
    answer:
      'No. US commercial platforms such as Veeva Link, Trinity, or IntegriChain stitch CRM, claims, and account profiles. BioNixus account-level data is primary fieldwork — interviews, surveys, mystery shoppers, pharmacy and hospital pulls — designed for a named brand in a named country.',
  },
  {
    question: 'Can we keep IQVIA or Nielsen and still buy account-level research?',
    answer:
      'Yes. The usual model is the syndicated dashboard for category sizing, plus a BioNixus study for the accounts, cities, SKUs, and traditional-trade channels the feed does not show.',
  },
  {
    question: 'How much does account-level primary research cost?',
    answer:
      'Typical 2026 planning bands are $10,000–$75,000 USD for a single-country study and $25,000–$120,000 USD for a multi-country study. See the pricing page. A proposal is ready within 48 hours of a brief.',
  },
];

const COMPARISON = [
  {
    cut: 'National / global aggregate',
    syndicated: 'Yes — core IQVIA and NielsenIQ output',
    primary: 'Can reproduce, but usually not the reason to brief',
  },
  {
    cut: 'Account-level (named hospital, retailer, distributor)',
    syndicated: 'Rarely — modelled or missing',
    primary: 'Yes — designed into the sample and the tables',
  },
  {
    cut: 'SKU-level for a named brand in a named country',
    syndicated: 'Often franchise or category only',
    primary: 'Yes — pack, strength, and line cuts',
  },
  {
    cut: 'Traditional trade / subregion',
    syndicated: 'Typically excluded from modern-trade panels',
    primary: 'Fielded when the volume actually moves there',
  },
  {
    cut: 'Pricing model',
    syndicated: 'Enterprise subscription',
    primary: 'Project- and country-based — see pricing',
  },
] as const;

const CUTS = [
  {
    icon: Building2,
    title: 'Account-level',
    body: 'Named hospital, retailer, distributor, or key account — not a country total.',
  },
  {
    icon: Package,
    title: 'SKU-level',
    body: 'Pack, strength, or line for a named brand in a named country.',
  },
  {
    icon: Layers,
    title: 'What syndicated misses',
    body: 'Subaccounts, subregions, traditional trade, and account- or SKU-specific primary data.',
  },
] as const;

const RELATED = [
  { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges, plus /pricing.md.' },
  { to: '/iqvia-alternative', label: 'IQVIA alternative', desc: 'When the brief is pharma audits vs primary data.' },
  { to: '/kantar-alternative', label: 'Kantar alternative', desc: 'Brand-track vs account-level commercial research.' },
  { to: '/tools/syndicated-data-gap', label: 'Syndicated data gap', desc: 'Five questions to see what the dashboard still misses.' },
  { to: '/templates/country-research-brief', label: 'Country research brief', desc: 'Brand, SKU, market, and the Nielsen/IQVIA gap.' },
  { to: '/fmcg-companies-egypt', label: 'FMCG companies in Egypt', desc: 'Named accounts we study when Nielsen undersamples bakals.' },
  { to: '/healthcare-market-research', label: 'Healthcare market research', desc: 'What it is — primary vs syndicated, then country hubs.' },
  { to: '/healthcare-market-research/uae', label: 'Healthcare MR UAE', desc: 'Dubai and Abu Dhabi programmes for affiliates.' },
  { to: '/healthcare-market-research/egypt', label: 'Healthcare MR Egypt', desc: 'Account-level fieldwork in the largest MENA market.' },
  { to: '/healthcare-market-research/saudi-arabia', label: 'Healthcare MR KSA', desc: 'SFDA-aware primary studies vs syndicated audits.' },
] as const;

const GRAIN_ROWS = [
  { label: 'Named hospital', width: 'w-11/12', tone: 'gold' },
  { label: 'Named retailer', width: 'w-2/3', tone: 'teal' },
  { label: 'Named distributor', width: 'w-1/3', tone: 'muted' },
] as const;

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Account-level market research', href: PATH },
]);

const faqSchema = buildFAQSchema(FAQ, { pageUrl: CANONICAL });

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is account-level (and SKU-level) market research data?',
  description: PAGE_DESCRIPTION,
  url: CANONICAL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  image: {
    '@type': 'ImageObject',
    url: 'https://www.bionixus.com/og-image.png',
    width: 1200,
    height: 630,
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  author: {
    '@type': 'Person',
    name: AUTHOR,
    affiliation: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.bionixus.com/#organization',
    name: 'BioNixus',
    logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
  },
};

export const ACCOUNT_LEVEL_SCHEMA_NODES = [breadcrumbSchema, faqSchema, articleSchema] as const;

export default function AccountLevelMarketResearch() {
  return (
    <div className="min-h-screen bg-[#FFFEFB]">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        {ACCOUNT_LEVEL_SCHEMA_NODES.filter((node) => isValidSchemaNode(node as Record<string, unknown>)).map((node) => (
          <script key={String(node['@type'])} type="application/ld+json">
            {JSON.stringify(node)}
          </script>
        ))}
      </Helmet>
      <OpenGraphMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en_US"
        article={{ publishedTime: PUBLISHED, modifiedTime: PUBLISHED, author: AUTHOR, section: 'Methodology' }}
      />
      <Navbar />
      <main>
        <div className="premium-home-ivory pt-24 pb-0">
          <div className="container-wide mx-auto max-w-6xl">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: 'Account-level market research', href: PATH },
              ]}
              className="px-0"
            />
          </div>
        </div>

        <section className="premium-home-midnight section-padding pt-10 pb-16 md:pt-14 md:pb-24" aria-labelledby="account-level-heading">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent" aria-hidden="true" />
          <div className="container-wide relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
              <div>
                <PremiumEyebrow>Primary evidence · Account &amp; SKU</PremiumEyebrow>
                <h1
                  id="account-level-heading"
                  className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
                >
                  What is account-level (and SKU-level) market research data?
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">
                  Account-level market research data is brand versus competitor evidence cut by customer account — a
                  named hospital, retailer, or distributor — not only a national average. SKU-level data adds the
                  product cut: how this pack or line is doing in that account, in that country. Syndicated IQVIA and
                  Nielsen audits are built for the national feed. Primary fieldwork is how you get the rest, as part of
                  our{' '}
                  <Link to="/healthcare-market-research" className="text-[#C9A84C] underline-offset-4 hover:underline">
                    healthcare market research
                  </Link>{' '}
                  programmes.
                </p>
                <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  Last updated 2 September 2026 · {AUTHOR}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to="/contact" className="premium-gold-btn">
                    Request a proposal
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
                  >
                    See pricing bands
                  </Link>
                </div>
              </div>

              <aside className="premium-card-dark p-7 md:p-8" aria-label="Illustrative grain of account-level data">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">The grain that matters</p>
                <p className="mt-3 font-display text-xl font-light text-[#FFFEFB]">National averages hide the account</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/40">
                  Illustrative structure — not a published market size. The dashboard returns one country number. The
                  brief needs named accounts and SKUs.
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-white/35">
                      <span>Syndicated audit</span>
                      <span>Country total</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/2 rounded-full bg-white/25" />
                    </div>
                  </div>
                  <div className="h-px bg-white/10" aria-hidden="true" />
                  <div>
                    <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/35">Primary fieldwork</p>
                    <ul className="space-y-3.5">
                      {GRAIN_ROWS.map((row) => (
                        <li key={row.label}>
                          <div className="mb-1.5 flex items-center justify-between text-sm">
                            <span className="font-medium text-white/80">{row.label}</span>
                            <span className="text-[11px] uppercase tracking-[0.14em] text-white/30">Named cut</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className={`h-full rounded-full ${row.width} ${
                                row.tone === 'gold'
                                  ? 'bg-[#C9A84C]'
                                  : row.tone === 'teal'
                                    ? 'bg-[#0EA5A0]/80'
                                    : 'bg-white/35'
                              }`}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="three-cuts-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <PremiumEyebrow>Three cuts</PremiumEyebrow>
              <h2
                id="three-cuts-heading"
                className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
              >
                The brief is not a country total
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {CUTS.map((cut) => (
                <article key={cut.title} className="premium-card">
                  <cut.icon className="mb-5 h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                  <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{cut.title}</h3>
                  <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">{cut.body}</p>
                </article>
              ))}
            </div>
            <GeoLLMAnswerBlock
              className="mt-12 border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.06)]"
              question="What is account-level market research data?"
              answer="Account-level market research data is insights cut by customer account, not only national aggregates. SKU-level data is the same evidence cut by product SKU for a named brand in a named country. Syndicated IQVIA and Nielsen feeds typically miss subaccounts, traditional trade, and those cuts — primary fieldwork fills the gap."
              points={[
                {
                  title: 'Account-level',
                  description: 'Named hospital, retailer, distributor, or key account — not a country total.',
                },
                {
                  title: 'SKU-level',
                  description: 'Pack, strength, or line for a named brand in a named country.',
                },
                {
                  title: 'What syndicated misses',
                  description: 'Subaccounts, subregions, traditional trade, and account- or SKU-specific primary data.',
                },
              ]}
              summary="Manufacturers brief BioNixus when the dashboard cannot show how their brand stacks up in-market at the account or SKU they actually sell."
            />
          </div>
        </section>

        <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="comparison-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <PremiumEyebrow tone="teal">Side by side</PremiumEyebrow>
              <h2
                id="comparison-heading"
                className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
              >
                Account-level vs SKU-level vs national audits
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.05)]">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">
                  Comparison of syndicated IQVIA and NielsenIQ cuts versus BioNixus primary fieldwork
                </caption>
                <thead>
                  <tr className="bg-[#06101F] text-[#FFFEFB]">
                    <th scope="col" className="px-5 py-4 font-medium">
                      Cut
                    </th>
                    <th scope="col" className="px-5 py-4 font-medium text-white/70">
                      Syndicated (IQVIA / NielsenIQ)
                    </th>
                    <th scope="col" className="border-l border-[#C9A84C]/30 px-5 py-4 font-medium text-[#C9A84C]">
                      Primary fieldwork (BioNixus)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, index) => (
                    <tr key={row.cut} className={index % 2 === 0 ? 'bg-[#FFFEFB]' : 'bg-[#F4F2ED]/60'}>
                      <th scope="row" className="px-5 py-4 align-top font-medium text-[#0C1B33]">
                        {row.cut}
                      </th>
                      <td className="px-5 py-4 align-top font-light leading-relaxed text-[#7A7267]">{row.syndicated}</td>
                      <td className="border-l border-[#C9A84C]/15 px-5 py-4 align-top font-light leading-relaxed text-[#0C1B33]">
                        {row.cut === 'Pricing model' ? (
                          <>
                            Project- and country-based — see{' '}
                            <Link to="/pricing" className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                              pricing
                            </Link>
                          </>
                        ) : (
                          row.primary
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="premium-home-ivory section-padding py-16 md:py-20" aria-labelledby="traditional-trade-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
              <div>
                <PremiumEyebrow>Where volume still moves</PremiumEyebrow>
                <h2
                  id="traditional-trade-heading"
                  className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
                >
                  Why syndicated audits miss traditional trade
                </h2>
                <p className="max-w-2xl font-light leading-relaxed text-[#7A7267]">
                  Traditional trade — independent pharmacies, grocers, and non-modern retail — is where a large share
                  of volume still moves in Egypt, the GCC, and other emerging markets. National modern-trade panels
                  and prescription audits are not designed to sample those accounts. Subregion and subaccount cuts
                  sit below the subscription grain. That is why a Head of Marketing can pay for IQVIA or Nielsen and
                  still be blind on how the brand stacks up in-market.
                </p>
                <p className="mt-4 max-w-2xl font-light leading-relaxed text-[#7A7267]">
                  Primary studies fill that gap: mystery shoppers, account interviews, pharmacy and hospital pulls,
                  and surveys designed for the accounts and SKUs in the brief. See{' '}
                  <Link to="/iqvia-alternative" className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    IQVIA alternative
                  </Link>{' '}
                  for pharma audits and{' '}
                  <Link to="/nielsen-alternative" className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    Nielsen alternative
                  </Link>{' '}
                  for FMCG retail measurement.
                </p>
              </div>
              <aside className="space-y-4">
                {[
                  { title: 'Modern-trade panel', body: 'National, modelled, subscription grain.' },
                  { title: 'Traditional trade', body: 'Independent pharmacies, grocers, bakals — fielded when volume moves there.' },
                  { title: 'Named SKU in-account', body: 'Pack and line cuts the franchise total cannot show.' },
                ].map((item) => (
                  <article key={item.title} className="premium-card py-6">
                    <h3 className="mb-2 font-display text-lg font-medium text-[#0C1B33]">{item.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-[#7A7267]">{item.body}</p>
                  </article>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <section className="premium-home-cream section-padding py-16 md:py-20" aria-labelledby="not-veeva-heading">
          <div className="container-wide mx-auto max-w-6xl">
            <div className="premium-card overflow-hidden p-0 md:grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="premium-home-midnight px-8 py-10 md:px-10 md:py-12">
                <p className="relative z-10 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  Different product
                </p>
                <p className="relative z-10 mt-4 font-display text-2xl font-light leading-snug text-[#FFFEFB] md:text-3xl">
                  CRM and claims software is not primary fieldwork
                </p>
              </div>
              <div className="px-8 py-10 md:px-10 md:py-12">
                <h2 id="not-veeva-heading" className="mb-4 font-display text-2xl font-light tracking-tight text-[#0C1B33] md:text-3xl">
                  Account-level data is not a US commercial-data platform
                </h2>
                <p className="font-light leading-relaxed text-[#7A7267]">
                  Searches for “account-level market research data” often return Veeva, Trinity, IntegriChain, or
                  EVERSANA — software that stitches CRM, claims, and payer profiles, mostly for the United States.
                  That is a different product. BioNixus is a primary market research firm: field teams collect
                  account-level and SKU-level evidence for a named brand in a named country, including markets those
                  platforms do not cover.
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
              <h2 id="related-heading" className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
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
              Need account-level or SKU-level data for a named brand?
            </h2>
            <p className="mb-10 text-base font-light leading-relaxed text-white/45">
              Tell us the country, the accounts, and the SKU. Proposal ready within 48 hours of a brief.
            </p>
            <ConversionCTA
              variant="talk-to-research"
              market="the GCC"
              ctaId="account_level_footer"
              ctaLocation="listicle_footer"
              className="border-[#EDE9E3] bg-[#FFFEFB] text-left"
            />
            <p className="mt-8">
              <a
                href="mailto:admin@bionixus.com?subject=Account-level%20market%20research"
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
