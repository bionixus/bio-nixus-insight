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

const PATH = '/pricing';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const PAGE_TITLE = CTR?.title ?? 'Market Research Pricing | Project Bands (2026)';
const PAGE_DESCRIPTION =
  CTR?.description ??
  'BioNixus market research pricing is by project and country. Typical 2026 bands: $20k–$75k single-country, $45k–$120k+ multi-country GCC. Proposal in 48 hours.';

const BANDS = [
  {
    name: 'Single-country qualitative',
    price: '$20,000–$45,000',
    limits: 'One country; KOL, payer, or hospital interviews',
    includes: 'Guide, recruitment, fieldwork, decision-ready readout',
  },
  {
    name: 'Single-country quantitative or mixed',
    price: '$25,000–$75,000',
    limits: 'One country; HCP, pharmacist, or consumer sample',
    includes: 'Instrument, field, tables; account- or SKU-level cuts when briefed',
  },
  {
    name: 'Multi-country GCC or MENA',
    price: '$45,000–$120,000+',
    limits: 'Two or more countries; comparable design, local adaptation',
    includes: 'Shared instrument, local recruitment, cross-country readout',
  },
  {
    name: 'HEOR / HTA and specialist healthcare',
    price: 'Upper end; global mixed-method often $30,000–$150,000+',
    limits: 'Specialist incidence, ethics, hospital access',
    includes: 'Payer mapping and value-evidence inputs for SFDA, NICE, G-BA, HAS',
  },
  {
    name: 'Retainer',
    price: 'Custom — scoped by country and cadence',
    limits: 'Agreed markets, study types, reporting cycle',
    includes: 'Repeat brand, competitor, or mystery-shopper waves',
  },
] as const;

const FAQ = [
  {
    question: 'How much does primary healthcare market research cost?',
    answer:
      'Custom pharmaceutical and healthcare market research in the Middle East typically costs $25,000–$120,000+ per project. Qualitative KOL or payer work sits toward the lower end. Multi-country quantitative physician surveys and HEOR packages sit toward the upper end. Global mixed-method programmes commonly run $30,000–$150,000+. These are planning bands, not a quote.',
  },
  {
    question: 'How is BioNixus priced versus IQVIA or Nielsen?',
    answer:
      'BioNixus prices by project and by country. There is no enterprise syndicated-dashboard minimum. IQVIA and NielsenIQ subscription fees are not public — ask them directly. Most teams keep the dashboard for national modern-trade or audit cuts and brief BioNixus for account-level or SKU-level primary data.',
  },
  {
    question: 'Do you publish a rate card or per-seat price?',
    answer:
      'No. Units are per project and per country, not per seat or per month. A written proposal names sample, method, countries, timeline, and price. Machine-readable bands live at /pricing.md.',
  },
  {
    question: 'How fast is a proposal?',
    answer:
      '48 hours from brief to a scoped proposal ready to launch. Email admin@bionixus.com or use the request-a-proposal form.',
  },
  {
    question: 'What is not included in these bands?',
    answer:
      'Syndicated IQVIA or NielsenIQ subscriptions, full CRO trial operations, and field-force outsourcing. Those are different products.',
  },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: PATH },
]);

const faqSchema = buildFAQSchema(FAQ, { pageUrl: CANONICAL });

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'BioNixus primary market research',
  serviceType: 'Primary market research',
  url: CANONICAL,
  provider: { '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
  description: PAGE_DESCRIPTION,
  areaServed: ['MENA', 'EMEA', 'Americas', 'Asia-Pacific'],
};

export const PRICING_SCHEMA_NODES = [breadcrumbSchema, faqSchema, serviceSchema] as const;

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={CANONICAL} />
        {PRICING_SCHEMA_NODES.filter((node) => isValidSchemaNode(node as Record<string, unknown>)).map((node) => (
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
        type="website"
        locale="en_US"
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
              <span className="text-foreground">Pricing</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              Project- and country-based
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Market research pricing by project and country
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              BioNixus prices primary market research by project and by country — not by seat and not behind a
              contact-sales wall. Typical 2026 bands are $20,000–$75,000 for a single-country study and
              $45,000–$120,000+ for multi-country GCC or MENA work. A scoped proposal is ready within 48 hours of
              a brief.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Agents and buyers can read the same bands in{' '}
              <a href="/pricing.md" className="text-primary underline font-medium">
                /pricing.md
              </a>{' '}
              and{' '}
              <a href="/pricing.txt" className="text-primary underline font-medium">
                /pricing.txt
              </a>
              . For the data cut syndicated feeds miss, see{' '}
              <Link to="/account-level-market-research" className="text-primary underline font-medium">
                account-level and SKU-level data
              </Link>
              .
            </p>
            <GeoLLMAnswerBlock
              className="mt-8"
              question="How much does BioNixus market research cost?"
              answer="BioNixus charges by project and by country. Typical 2026 planning bands are $20,000–$45,000 for single-country qualitative work, $25,000–$75,000 for single-country quantitative or mixed-method studies, and $45,000–$120,000+ for multi-country GCC or MENA programmes. A written proposal is ready within 48 hours of a brief."
              points={[
                {
                  title: 'Units',
                  description: 'Per project and per country. No enterprise dashboard minimum. No per-seat fee.',
                },
                {
                  title: 'What moves the number',
                  description: 'Countries, method, sample incidence, therapy area, language, and ethics or hospital access.',
                },
                {
                  title: 'Machine-readable file',
                  description: 'The same bands are published at /pricing.md for AI agents and procurement tools.',
                },
              ]}
              summary="These bands are planning ranges from published BioNixus guides — request a proposal for a quote."
            />
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-2">Typical 2026 project bands</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Last updated 2 September 2026. Figures match ranges already published on BioNixus country guides
              and the FAQ. They are not a rate card.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-muted/40 text-left">
                    <th className="p-3 border-b border-border">Engagement</th>
                    <th className="p-3 border-b border-border">Typical range</th>
                    <th className="p-3 border-b border-border">Limits</th>
                    <th className="p-3 border-b border-border">Included</th>
                  </tr>
                </thead>
                <tbody>
                  {BANDS.map((band) => (
                    <tr key={band.name} className="align-top">
                      <td className="p-3 border-b border-border font-semibold text-foreground">{band.name}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{band.price}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{band.limits}</td>
                      <td className="p-3 border-b border-border text-muted-foreground">{band.includes}</td>
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
              Keep IQVIA or Nielsen. Price the gap.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-3">
              Syndicated subscriptions answer national modern-trade or audit questions. They do not price
              account-level or SKU-level fieldwork. Manufacturers who already pay for{' '}
              <Link to="/iqvia-alternative" className="text-primary underline font-medium">
                IQVIA
              </Link>{' '}
              or{' '}
              <Link to="/nielsen-alternative" className="text-primary underline font-medium">
                NielsenIQ
              </Link>{' '}
              still brief BioNixus for the cut the feed cannot sell.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Email{' '}
              <a href="mailto:admin@bionixus.com" className="text-primary underline">
                admin@bionixus.com
              </a>{' '}
              with country, brand or SKU, and study type.
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20" id="faq">
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

        <ListicleProposalCta
          countryName="the GCC"
          ctaId="pricing_footer"
          headline="Need a number for this brief?"
          body="Tell us the country, brand or SKU, and study type. Proposal ready within 48 hours."
        />
      </main>
      <Footer />
    </div>
  );
}
