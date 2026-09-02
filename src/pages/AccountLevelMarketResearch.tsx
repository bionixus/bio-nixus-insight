import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
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
      'Typical 2026 planning bands are $20,000–$75,000 for a single-country study and $45,000–$120,000+ for multi-country GCC or MENA work. See the pricing page. A proposal is ready within 48 hours of a brief.',
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
    primary: 'Project- and country-based — see /pricing',
  },
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
    <div className="min-h-screen bg-background">
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
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Account-level market research</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              Last updated 2 September 2026 · {AUTHOR}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              What is account-level (and SKU-level) market research data?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Account-level market research data is brand versus competitor evidence cut by customer account — a
              named hospital, retailer, or distributor — not only a national average. SKU-level data adds the
              product cut: how this pack or line is doing in that account, in that country. Syndicated IQVIA and
              Nielsen audits are built for the national feed. Primary fieldwork is how you get the rest.
            </p>
            <GeoLLMAnswerBlock
              className="mt-8"
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

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Account-level vs SKU-level vs national audits
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-muted/40 text-left">
                    <th className="p-3 border-b border-border">Cut</th>
                    <th className="p-3 border-b border-border">Syndicated (IQVIA / NielsenIQ)</th>
                    <th className="p-3 border-b border-border">Primary fieldwork (BioNixus)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.cut} className="align-top">
                      <td className="p-3 border-b border-border font-semibold text-foreground">{row.cut}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{row.syndicated}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{row.primary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Why syndicated audits miss traditional trade
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-3">
              Traditional trade — independent pharmacies, grocers, and non-modern retail — is where a large share
              of volume still moves in Egypt, the GCC, and other emerging markets. National modern-trade panels
              and prescription audits are not designed to sample those accounts. Subregion and subaccount cuts
              sit below the subscription grain. That is why a Head of Marketing can pay for IQVIA or Nielsen and
              still be blind on how the brand stacks up in-market.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Primary studies fill that gap: mystery shoppers, account interviews, pharmacy and hospital pulls,
              and surveys designed for the accounts and SKUs in the brief. See{' '}
              <Link to="/iqvia-alternative" className="text-primary underline font-medium">
                IQVIA alternative
              </Link>{' '}
              for pharma audits and{' '}
              <Link to="/nielsen-alternative" className="text-primary underline font-medium">
                Nielsen alternative
              </Link>{' '}
              for FMCG retail measurement.
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Account-level data is not a US commercial-data platform
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Searches for “account-level market research data” often return Veeva, Trinity, IntegriChain, or
              EVERSANA — software that stitches CRM, claims, and payer profiles, mostly for the United States.
              That is a different product. BioNixus is a primary market research firm: field teams collect
              account-level and SKU-level evidence for a named brand in a named country, including markets those
              platforms do not cover.
            </p>
          </div>
        </section>

        <section className="section-padding py-12" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {FAQ.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{faq.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Related resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/pricing', label: 'Pricing bands', desc: 'Project- and country-based ranges, plus /pricing.md.' },
                { to: '/iqvia-alternative', label: 'IQVIA alternative', desc: 'When the brief is pharma audits vs primary data.' },
                { to: '/healthcare-market-research', label: 'Healthcare market research', desc: 'What it is — primary vs syndicated, then country hubs.' },
                { to: '/healthcare-market-research/uae', label: 'Healthcare MR UAE', desc: 'Dubai and Abu Dhabi programmes for affiliates.' },
                { to: '/healthcare-market-research/egypt', label: 'Healthcare MR Egypt', desc: 'Account-level fieldwork in the largest MENA market.' },
                { to: '/healthcare-market-research/saudi-arabia', label: 'Healthcare MR KSA', desc: 'SFDA-aware primary studies vs syndicated audits.' },
              ].map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-1">{r.label}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ListicleProposalCta
          countryName="the GCC"
          ctaId="account_level_footer"
          headline="Need account-level or SKU-level data for a named brand?"
          body="Tell us the country, the accounts, and the SKU. Proposal ready within 48 hours of a brief."
        />
      </main>
      <Footer />
    </div>
  );
}
