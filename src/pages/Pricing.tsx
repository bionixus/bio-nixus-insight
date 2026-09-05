import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { STATS } from '@/lib/companyStats';
import { BIONIXUS_PHONE_UK, BIONIXUS_PHONE_UK_DISPLAY } from '@/components/report-conversion/constants';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { OncologyPremiumStyles } from '@/pages/oncology-listicle/OncologyPremiumStyles';

const PATH = '/pricing';
const CANONICAL = `https://www.bionixus.com${PATH}`;
const CTR = getCtrSeo(PATH);
const PAGE_TITLE = CTR?.title ?? 'Market Research Pricing | $10k–$75k Country (2026)';
const PAGE_DESCRIPTION =
  CTR?.description ??
  'BioNixus market research pricing is by project and country. 2026 bands: $10,000–$75,000 single-country, $25,000–$120,000 multi-country. Proposal in 48 hours.';

const BANDS = [
  {
    name: 'Single-country study',
    price: '$10,000–$75,000 USD',
    limits: 'One country; qualitative, quantitative, or mixed-method',
    includes: 'Guide or instrument, recruitment, fieldwork, decision-ready readout',
    note: 'Qualitative KOL or payer interviews sit toward the lower end. Account-level or SKU-level cuts sit toward the upper end.',
  },
  {
    name: 'Multi-country study',
    price: '$25,000–$120,000 USD',
    limits: 'Two or more countries; comparable design with local adaptation',
    includes: 'Shared instrument, local recruitment, cross-country readout',
    note: 'GCC and MENA programmes (for example Saudi Arabia + UAE + Egypt) sit in this band.',
  },
] as const;

const FAQ = [
  {
    question: 'How much does primary healthcare market research cost?',
    answer:
      'BioNixus typical 2026 planning bands are $10,000–$75,000 USD for a single-country study and $25,000–$120,000 USD for a multi-country study. Qualitative KOL or payer work sits toward the lower end of each band. Mixed-method physician surveys and specialist HCP samples sit toward the upper end. These are planning bands, not a quote.',
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
      'Syndicated IQVIA or NielsenIQ subscriptions, full CRO trial operations, and field-force outsourcing. Those are different products. Retainers are scoped separately by country and cadence.',
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
      <OncologyPremiumStyles />
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
      <main className="bx-onco">
        <section className="cover">
          <div className="cover-dot" />
          <div className="cover-tri" aria-hidden="true" />
          <div className="cover-tri2" aria-hidden="true" />
          <div className="cover-sheen" aria-hidden="true" />
          <div className="cover-gold-top" aria-hidden="true" />
          <div className="cover-gold" aria-hidden="true" />
          <div className="cover-inner">
            <BreadcrumbNav
              className="crumb-on-cover px-0 pt-0 pb-6 text-sm !text-white/55 [&_a]:!text-white/70 [&_a:hover]:!text-[#D4A84B] [&_span[aria-current]]:!text-[#D4A84B] [&_span.text-foreground]:!text-[#D4A84B]"
              items={[
                { name: 'Home', href: '/' },
                { name: 'Pricing', href: PATH },
              ]}
            />
            <div className="cover-top">
              <div className="clogorow">
                <div>
                  <div className="clogoname">BIONIXUS</div>
                  <div className="clogosub">Intelligence For Business Growth</div>
                </div>
              </div>
              <div className="cover-top-right">
                <div className="cref">
                  Project bands 2026 · USD
                  <br />4 September 2026
                </div>
                <div className="cbadge">Primary research</div>
              </div>
            </div>

            <div className="cover-ornament">
              <span className="or-diamond" />
              <span className="or-txt">Project-priced · Country-scoped · No dashboard minimum</span>
              <span className="or-line" />
            </div>
            <h1 className="cover-title">
              <span className="h1-kicker">Market research pricing 2026</span>
              Priced by project,
              <br />
              not by <em>seat.</em>
            </h1>
            <p className="cover-subtitle">
              BioNixus charges by project and by country — not a syndicated subscription. Typical 2026 bands are{' '}
              <strong>$10,000–$75,000 USD</strong> for a single-country study and{' '}
              <strong>$25,000–$120,000 USD</strong> for a multi-country study. A scoped proposal is ready within 48
              hours of a brief. The same bands are published in{' '}
              <a href="/pricing.md">/pricing.md</a> and <a href="/pricing.txt">/pricing.txt</a>.
            </p>
            <div className="cover-mkts">
              <div className="cmkt live">
                <span className="iso">01</span>
                <span className="nm">Single-country</span>
                <span className="tag">$10k–$75k</span>
              </div>
              <div className="cmkt live">
                <span className="iso">02</span>
                <span className="nm">Multi-country</span>
                <span className="tag">$25k–$120k</span>
              </div>
              <div className="cmkt">
                <span className="iso">03</span>
                <span className="nm">Proposal</span>
                <span className="tag">48 hours</span>
              </div>
              <div className="cmkt">
                <span className="iso">04</span>
                <span className="nm">Units</span>
                <span className="tag">Per project</span>
              </div>
            </div>
            <div className="cdrow">
              <div className="cdcell">
                <div className="cdlbl">Single-country</div>
                <div className="cdval">
                  $10,000–$75,000
                  <br />
                  <span className="accent">USD · one market</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Multi-country</div>
                <div className="cdval">
                  $25,000–$120,000
                  <br />
                  <span className="accent">USD · two or more</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Proposal</div>
                <div className="cdval">
                  48 hours
                  <br />
                  <span className="accent">From brief</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Model</div>
                <div className="cdval">
                  Project + country
                  <br />
                  <span className="accent">No seat fee</span>
                </div>
              </div>
            </div>
            <div className="cover-foot">
              <div>
                <strong>Global HQ</strong> Sheridan, Wyoming · USA · London · Cairo · Riyadh · Dubai ·{' '}
                <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>
              </div>
              <div>
                {STATS.clients} clients · {STATS.countries} countries · {STATS.projectsAnnual} projects
                annually · {STATS.projects2025} in 2025
              </div>
            </div>
          </div>
        </section>

        <article>
          <section className="onco-wrap onco-pad" id="bands" aria-labelledby="bands-title">
            <div className="page-rule">
              <div className="page-rule-text">01 · 2026 project bands</div>
            </div>
            <div className="section-num">01 — Typical planning ranges</div>
            <h2 className="section-title" id="bands-title">
              Two bands. <em>One invoice model.</em>
            </h2>
            <p className="section-lede">
              Last updated 4 September 2026. These figures are planning ranges, not a rate card. Final price depends
              on countries, method, sample incidence, therapy area, language, and ethics or hospital access. For the
              data cut syndicated feeds miss, see{' '}
              <Link to="/account-level-market-research">account-level and SKU-level data</Link>.
            </p>
            <div className="choice-grid">
              <article className="choice-card a">
                <div className="choice-hd">
                  <strong>Single-country</strong>
                  <span>One market</span>
                </div>
                <div className="choice-body">
                  <div className="choice-kicker">Typical 2026 band</div>
                  <div className="choice-amt">$10,000–$75,000</div>
                  <p className="text-[14.5px] leading-relaxed text-[color:var(--onco-text-soft)] mb-2">
                    USD. Qualitative interviews sit toward the floor. Mixed-method and specialist HCP samples sit
                    toward the ceiling.
                  </p>
                  <ul>
                    <li>One country — KOL, payer, hospital, HCP, or consumer</li>
                    <li>Guide or instrument, recruitment, fieldwork</li>
                    <li>Account-level or SKU-level cuts when briefed</li>
                    <li>Decision-ready readout, not a dashboard seat</li>
                  </ul>
                </div>
                <div className="choice-foot">Best for a named brand in one market, including traditional trade.</div>
              </article>
              <article className="choice-card b">
                <div className="choice-hd">
                  <strong>Multi-country</strong>
                  <span>Two or more</span>
                </div>
                <div className="choice-body">
                  <div className="choice-kicker">Typical 2026 band</div>
                  <div className="choice-amt">$25,000–$120,000</div>
                  <p className="text-[14.5px] leading-relaxed text-[color:var(--onco-text-soft)] mb-2">
                    USD. Comparable design across markets, with local adaptation. GCC and MENA programmes sit in this
                    band.
                  </p>
                  <ul>
                    <li>Two or more countries on one instrument</li>
                    <li>Local recruitment in each market</li>
                    <li>Cross-country readout for launch sequencing</li>
                    <li>No enterprise syndicated-dashboard minimum</li>
                  </ul>
                </div>
                <div className="choice-foot">Best for regional launch, tender, or brand-versus-competitor programmes.</div>
              </article>
            </div>
            <div className="stat-band">
              <div className="stat-cell">
                <div className="stat-n">$10k</div>
                <div className="stat-l">Single-country floor</div>
              </div>
              <div className="stat-cell b">
                <div className="stat-n">$75k</div>
                <div className="stat-l">Single-country ceiling</div>
              </div>
              <div className="stat-cell g">
                <div className="stat-n">$25k</div>
                <div className="stat-l">Multi-country floor</div>
              </div>
              <div className="stat-cell s">
                <div className="stat-n">$120k</div>
                <div className="stat-l">Multi-country ceiling</div>
              </div>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="scope" aria-labelledby="scope-title">
            <div className="page-rule">
              <div className="page-rule-text">02 · What moves the number</div>
            </div>
            <div className="section-num">02 — Scope, not seats</div>
            <h2 className="section-title" id="scope-title">
              Keep IQVIA. <em>Price the gap.</em>
            </h2>
            <p className="section-lede">
              Syndicated subscriptions answer national modern-trade or audit questions. They do not price
              account-level or SKU-level fieldwork. Manufacturers who already pay for{' '}
              <Link to="/iqvia-alternative">IQVIA</Link> or <Link to="/nielsen-alternative">NielsenIQ</Link> still
              brief BioNixus for the cut the feed cannot sell.
            </p>
            <div className="matrix-scroll">
              <table className="matrix">
                <thead>
                  <tr>
                    <th>Engagement</th>
                    <th>Typical range</th>
                    <th>Limits</th>
                    <th>Included</th>
                  </tr>
                </thead>
                <tbody>
                  {BANDS.map((band, index) => (
                    <tr key={band.name} className={index === 0 ? 'rec' : undefined}>
                      <td>{band.name}</td>
                      <td>{band.price}</td>
                      <td>{band.limits}</td>
                      <td>{band.includes}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Retainer</td>
                    <td>Custom — country and cadence</td>
                    <td>Agreed markets, study types, reporting cycle</td>
                    <td>Repeat brand, competitor, or mystery-shopper waves</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="note-line">
              HEOR / HTA and specialist healthcare packages sit inside the same two bands. Specialist incidence, ethics,
              and hospital access move a brief toward the ceiling — they do not open a third price list.
            </p>
            <div className="bundle-banner">
              <h3>How much does BioNixus market research cost?</h3>
              <p>
                BioNixus charges by project and by country. Typical 2026 planning bands are{' '}
                <strong>$10,000–$75,000 USD</strong> for a single-country study and{' '}
                <strong>$25,000–$120,000 USD</strong> for a multi-country study. A written proposal is ready within 48
                hours of a brief.
              </p>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="faq" aria-labelledby="faq-title">
            <div className="page-rule">
              <div className="page-rule-text">03 · Questions buyers ask</div>
            </div>
            <h2 className="section-title" id="faq-title">
              Frequently asked questions
            </h2>
            <div className="qa-list">
              {FAQ.map((faq) => (
                <details key={faq.question} className="qa-item">
                  <summary>{faq.question}</summary>
                  <p className="a">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" aria-labelledby="related-title">
            <h2 className="section-title" id="related-title">
              Related reading
            </h2>
            <div className="related-grid">
              <Link className="related-card" to="/account-level-market-research">
                <h3>What account-level data is</h3>
                <p>The cut syndicated IQVIA and Nielsen feeds miss — named accounts and SKUs.</p>
              </Link>
              <Link className="related-card" to="/iqvia-alternative">
                <h3>IQVIA alternative</h3>
                <p>When to keep the dashboard and when to brief primary research.</p>
              </Link>
              <Link className="related-card" to="/healthcare-market-research">
                <h3>Healthcare market research</h3>
                <p>Definition, primary versus syndicated, then country hubs.</p>
              </Link>
              <Link className="related-card" to="/contact">
                <h3>Request a proposal</h3>
                <p>Country, brand or SKU, and study type — scoped in 48 hours.</p>
              </Link>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0">
            <div className="closing-sign">
              <h2>
                Need a number for <em>this</em> brief?
              </h2>
              <p>
                Tell us the country, brand or SKU, and study type. BioNixus will return a scoped proposal within 48
                hours — project-priced, country-scoped, no enterprise dashboard minimum.
              </p>
              <div className="closing-contact">
                <div>
                  <div className="label">Firm</div>
                  <div className="value">BioNixus · USA Global HQ</div>
                </div>
                <div>
                  <div className="label">Email</div>
                  <div className="value mono">
                    <a href="mailto:admin@bionixus.com">admin@bionixus.com</a>
                  </div>
                </div>
                <div>
                  <div className="label">Phone</div>
                  <div className="value mono">
                    <a href={`tel:${BIONIXUS_PHONE_UK}`}>{BIONIXUS_PHONE_UK_DISPLAY}</a>
                  </div>
                </div>
                <div>
                  <div className="label">Proposal</div>
                  <div className="value">
                    <Link to="/contact">Within 48 hours</Link>
                  </div>
                </div>
              </div>
              <ConversionCTA
                variant="talk-to-research"
                market="one or more countries"
                sourceContext="pricing-page"
                ctaId="pricing-page-2026"
                ctaLocation="pricing_footer"
                className="text-left bg-white"
              />
            </div>
            <p className="note-line mt-4">
              Bands are planning ranges published 4 September 2026. They are not a quote and do not include syndicated
              IQVIA or NielsenIQ subscriptions, CRO trial operations, or field-force outsourcing.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
