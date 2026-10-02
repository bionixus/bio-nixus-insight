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
const PAGE_TITLE = CTR?.title ?? 'Custom Research from $10,000 to $60,000 | BioNixus';
const PAGE_DESCRIPTION =
  CTR?.description ??
  'Custom research from $10,000 to $60,000. BioNixus prices pharma and healthcare primary studies by project. No syndicated report fee. Proposal in 48 hours.';

const CUSTOM_RESEARCH_PRICE = '$10,000–$60,000 USD';

const BANDS = [
  {
    name: 'Single-country study',
    price: CUSTOM_RESEARCH_PRICE,
    limits: 'One country; qualitative, quantitative, or mixed-method',
    includes: 'Guide or instrument, recruitment, fieldwork, decision-ready readout',
    note: 'Qualitative KOL or payer interviews and account-level or SKU-level cuts are scoped inside this range.',
  },
  {
    name: 'Multi-country study',
    price: CUSTOM_RESEARCH_PRICE,
    limits: 'Two or more countries; comparable design with local adaptation',
    includes: 'Shared instrument, local recruitment, cross-country readout',
    note: 'GCC and MENA programmes (for example Saudi Arabia + UAE + Egypt) use the same custom-research range.',
  },
] as const;

const MORE_FAQ = [
  {
    question: 'Will you sign a master services agreement?',
    answer:
      'Yes. BioNixus works under client MSAs with statements of work per study. Each SOW references the published project bands unless scope expands to additional countries or methods.',
  },
] as const;

const FAQ = [
  {
    question: 'How much does primary healthcare market research cost?',
    answer:
      'Custom research from $10,000 to $60,000. Qualitative KOL or payer work and mixed-method physician surveys are scoped inside that range. This is a planning range, not a quote.',
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
  {
    question: 'Can we run a pilot before a multi-country programme?',
    answer:
      'Yes. Many affiliates start with a single-country qualitative or quantitative study inside the $10,000–$60,000 band, then extend the instrument to additional markets once the steering committee signs off the guide and tables.',
  },
  {
    question: 'Do you support Arabic and English in the same study?',
    answer:
      'Yes. GCC and MENA programmes routinely use bilingual materials, moderators, and transcripts. Language scope is fixed in the proposal so procurement sees one price, not per-language surcharges hidden later.',
  },
  {
    question: 'How does BioNixus compare to freelance moderators or panels?',
    answer:
      'Freelancers may be cheaper per interview but rarely ship governance, hospital access, payer ethics, or multi-country coordination. BioNixus bundles design, recruitment, QC, and a single accountable team — the model large pharma procurement expects.',
  },
  ...MORE_FAQ,
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
              BioNixus charges by project and by country — not a syndicated subscription. Custom research from{' '}
              <strong>$10,000 to $60,000</strong>. A scoped proposal is ready within 48
              hours of a brief. The same range is published in{' '}
              <a href="/pricing.md">/pricing.md</a> and <a href="/pricing.txt">/pricing.txt</a>. Finance teams can
              paste those bands into vendor comparisons without requesting a custom rate card.
            </p>
            <div className="cover-mkts">
              <div className="cmkt live">
                <span className="iso">01</span>
                <span className="nm">Single-country</span>
                <span className="tag">$10k–$60k</span>
              </div>
              <div className="cmkt live">
                <span className="iso">02</span>
                <span className="nm">Multi-country</span>
                <span className="tag">$10k–$60k</span>
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
                  $10,000–$60,000
                  <br />
                  <span className="accent">USD · one market</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Multi-country</div>
                <div className="cdval">
                  $10,000–$60,000
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
                <strong>Global HQ</strong> Sheridan, Wyoming · USA · London · Cairo · Al Khobar · Dubai ·{' '}
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
              One range. <em>One invoice model.</em>
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
                  <div className="choice-amt">$10,000–$60,000</div>
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
                  <div className="choice-amt">$10,000–$60,000</div>
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
                <div className="stat-l">Custom research floor</div>
              </div>
              <div className="stat-cell b">
                <div className="stat-n">$60k</div>
                <div className="stat-l">Custom research ceiling</div>
              </div>
              <div className="stat-cell g">
                <div className="stat-n">$10k–$60k</div>
                <div className="stat-l">Single-country studies</div>
              </div>
              <div className="stat-cell s">
                <div className="stat-n">$10k–$60k</div>
                <div className="stat-l">Multi-country studies</div>
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
              HEOR / HTA and specialist healthcare packages sit inside custom research from $10,000 to $60,000. Specialist incidence, ethics,
              and hospital access are scoped inside that range — they do not open a second price list.
            </p>
            <div className="bundle-banner">
              <h3>How much does BioNixus market research cost?</h3>
              <p>
                BioNixus charges by project and by country. Custom research from{' '}
                <strong>$10,000 to $60,000</strong>. A written proposal is ready within 48
                hours of a brief.
              </p>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="deliverables" aria-labelledby="deliverables-title">
            <div className="page-rule">
              <div className="page-rule-text">03 · Deliverables buyers receive</div>
            </div>
            <div className="section-num">03 — What is in the proposal and readout</div>
            <h2 className="section-title" id="deliverables-title">
              Fixed scope. <em>Audit-ready outputs.</em>
            </h2>
            <p className="section-lede">
              Every BioNixus engagement ships with a written scope before fieldwork starts. The invoice matches that
              scope — not a dashboard seat, not an overage line you discover after sign-off. Teams use these readouts
              for launch sequencing, tender defence, payer conversations, and board-ready market narratives.
            </p>
            <div className="choice-grid">
              <article className="choice-card a">
                <div className="choice-hd">
                  <strong>Qualitative programmes</strong>
                  <span>KOL · payer · hospital</span>
                </div>
                <div className="choice-body">
                  <p className="text-[14.5px] leading-relaxed text-[color:var(--onco-text-soft)]">
                    Discussion guides or interview grids, recruitment screeners, anonymised transcripts or summaries,
                    and a decision deck with verbatims tagged to decision criteria. Account-level cuts appear when the
                    brief names hospitals, retailers, or distributors — not when a syndicated feed averages them away.
                  </p>
                  <ul>
                    <li>Moderator notes and quality checks on every session</li>
                    <li>Arabic–English field teams in GCC and MENA without a second vendor</li>
                    <li>Ethics or hospital access documented when required</li>
                  </ul>
                </div>
              </article>
              <article className="choice-card b">
                <div className="choice-hd">
                  <strong>Quantitative programmes</strong>
                  <span>Physician · patient · HCP</span>
                </div>
                <div className="choice-body">
                  <p className="text-[14.5px] leading-relaxed text-[color:var(--onco-text-soft)]">
                    Sample design memo, tested questionnaire, field progress reporting, cleaned data tables, and
                    executive charts with methodology footnotes. Incidence for rare specialists or dual-licensed HCPs is
                    priced inside the band — it changes timeline and sample size, not the pricing model.
                  </p>
                  <ul>
                    <li>Mobile-first surveys where physicians prefer async completion</li>
                    <li>Weighting notes when panels are stratified by city or specialty</li>
                    <li>SKU-level brand share tables when the brief requires pack cuts</li>
                  </ul>
                </div>
              </article>
            </div>
            <p className="note-line">
              HEOR, pricing, and market-access modules reuse the same deliverable standard: traceable assumptions,
              cited payer rules where public, and clear separation between syndicated background and primary evidence.
              See{' '}
              <Link to="/healthcare-market-research/services/market-access">market access research</Link> and{' '}
              <Link to="/healthcare-market-research/services/competitive-intelligence">competitive intelligence</Link>{' '}
              for service-level detail.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="geography" aria-labelledby="geography-title">
            <div className="page-rule">
              <div className="page-rule-text">04 · Geography and languages</div>
            </div>
            <h2 className="section-title" id="geography-title">
              One invoice per country. <em>Comparable multi-market design.</em>
            </h2>
            <p className="section-lede">
              BioNixus prices each country as its own workstream inside a multi-country programme. That mirrors how
              affiliates actually buy research — Saudi Arabia fieldwork is not subsidised by Egypt incidence, and UAE
              hospital access is not averaged into a “MENA” line item unless you explicitly want a regional readout only.
            </p>
            <p className="section-lede">
              Priority delivery markets include the GCC (Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain), wider Middle
              East and North Africa, G5 Europe, the United States, Turkey, Brazil, and selected Asia hubs. Language
              coverage follows the brief: Modern Standard Arabic and Egyptian Arabic for Egypt, Gulf Arabic where
              clinicians expect it, plus English for multinational steering committees.
            </p>
            <p className="section-lede">
              Manufacturers planning GCC launch often pair{' '}
              <Link to="/healthcare-market-research/saudi-arabia">Saudi Arabia healthcare research</Link> with{' '}
              <Link to="/healthcare-market-research/uae">UAE programmes</Link> under one instrument. FMCG teams
              comparing Nielsen gaps brief Egypt or UAE account-level studies from the same{' '}
              <Link to="/account-level-market-research">account-level methodology page</Link>.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="procurement" aria-labelledby="procurement-title">
            <div className="page-rule">
              <div className="page-rule-text">05 · Procurement and contracting</div>
            </div>
            <h2 className="section-title" id="procurement-title">
              How procurement teams <em>buy research</em>
            </h2>
            <p className="section-lede">
              Most BioNixus clients are pharma, medtech, or healthcare brands with a minimum project budget of about
              $20,000 USD. Procurement usually asks three questions: is the vendor on the approved list, does the
              statement of work match the RFP, and can legal sign a standard services agreement without a six-month
              negotiation. BioNixus answers with a fixed-scope proposal, named roles, timeline, and data-handling terms
              suitable for GDPR and regional privacy expectations.
            </p>
            <p className="section-lede">
              Unlike enterprise syndicated contracts, there is no auto-renewing subscription or seat count. Retainers are
              available when a brand needs quarterly waves — still scoped by country and study type, still inside custom
              research bands unless you add markets or methods. If your comparison set includes IQVIA, Kantar Health, or
              NielsenIQ, keep those dashboards for national audits and brief BioNixus for the account-level or
              SKU-level primary gap; see{' '}
              <Link to="/iqvia-alternative">IQVIA alternatives</Link> and{' '}
              <Link to="/nielsen-alternative">Nielsen alternatives</Link> for positioning language your procurement
              team can paste into vendor scorecards.
            </p>
            <p className="section-lede">
              To start: email{' '}
              <a href="mailto:admin@bionixus.com">admin@bionixus.com</a> or use the{' '}
              <Link to="/contact">request-a-proposal form</Link> with country, therapy area, method preference, and
              decision date. Machine-readable bands remain at <a href="/pricing.md">/pricing.md</a> for finance
              systems and LLM crawlers that ingest structured pricing pages.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="industries" aria-labelledby="industries-title">
            <div className="page-rule">
              <div className="page-rule-text">06 · Therapy and sector fit</div>
            </div>
            <h2 className="section-title" id="industries-title">
              Who buys <em>project-priced</em> research
            </h2>
            <p className="section-lede">
              BioNixus is built for pharmaceutical, biotechnology, medical device, diagnostic, and health-adjacent
              consumer brands that need primary evidence in specific countries. Oncology, rare disease, metabolic,
              vaccines, and hospital devices share the same pricing mechanics — incidence and access drive timeline,
              not a different subscription tier.
            </p>
            <p className="section-lede">
              Launch marketing teams brief message and positioning studies. Market access teams brief payer and HTA
              modules. Commercial excellence teams brief account-level brand share work when syndicated audits cannot
              show named hospitals or SKUs. Medical affairs may sponsor KOL mapping or treatment pathway research that
              feeds both publication plans and access dossiers. Each workstream can be a separate project inside the
              published bands, or combined when the steering committee wants one field window.
            </p>
            <p className="section-lede">
              Minimum engagement size is typically aligned with a $20,000 USD decision — smaller exploratory calls are
              routed to the contact form so senior researchers can qualify fit before scoping. If your comparison set
              includes global CROs or syndicated vendors, use the IQVIA and Nielsen alternative pages to explain when
              BioNixus complements rather than replaces those contracts.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="timeline" aria-labelledby="timeline-title">
            <div className="page-rule">
              <div className="page-rule-text">07 · Typical timeline</div>
            </div>
            <h2 className="section-title" id="timeline-title">
              From brief to <em>fieldwork</em>
            </h2>
            <p className="section-lede">
              Timelines depend on incidence, ethics, and hospital access — not on whether you buy a subscription. The
              sequence below is typical for a single-country qualitative or quantitative study inside the published
              bands. Multi-country programmes add parallel recruitment but keep one steering call rhythm per week.
            </p>
            <ol className="qa-list list-decimal pl-6 space-y-4 text-[15px] leading-relaxed text-[color:var(--onco-text-soft)]">
              <li>
                <strong className="text-[color:var(--onco-ink)]">Days 0–2:</strong> Brief intake, conflict check, and
                written proposal with method, sample, countries, price, and deliverables.
              </li>
              <li>
                <strong className="text-[color:var(--onco-ink)]">Days 3–7:</strong> Guide or questionnaire finalisation,
                translation when needed, and recruitment screeners live in market.
              </li>
              <li>
                <strong className="text-[color:var(--onco-ink)]">Weeks 2–4:</strong> Fieldwork — interviews, surveys,
                mystery shops, or hospital pulls — with progress reporting against the agreed n.
              </li>
              <li>
                <strong className="text-[color:var(--onco-ink)]">Weeks 3–5:</strong> Analysis, account-level or SKU
                tables when briefed, and executive readout with clear separation between syndicated background and
                primary findings.
              </li>
            </ol>
            <p className="note-line">
              Rush timelines are possible when incidence allows and ethics are not required. Tell us the board or launch
              date in the first email so the proposal names a realistic field window. Weekend or holiday field pauses are
              respected in Muslim-majority markets during Ramadan and Eid unless the brief explicitly requires
              continuous tracking.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="faq" aria-labelledby="faq-title">
            <div className="page-rule">
              <div className="page-rule-text">08 · Questions buyers ask</div>
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
              Bands are planning ranges published 4 September 2026 (updated 2 October 2026 for deliverable and timeline
              sections). They are not a quote and do not include syndicated IQVIA or NielsenIQ subscriptions, CRO trial
              operations, or field-force outsourcing. VAT, withholding, and local statutory charges, if applicable, are
              stated on the invoice — they are not hidden in a per-seat renewal.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
