import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { RelatedPages } from '@/components/healthcare-research/RelatedPages';
import { STATS } from '@/lib/companyStats';
import { BIONIXUS_PHONE_UK, BIONIXUS_PHONE_UK_DISPLAY } from '@/components/report-conversion/constants';
import { OncologyPremiumStyles } from '@/pages/oncology-listicle/OncologyPremiumStyles';
import { getEditorialAuthor, personAuthorJsonLd } from '@/data/editorialAuthors';

interface FirmProfile {
  rank: number;
  name: string;
  type: string;
  hq: string;
  strengths: string[];
  overview: string;
  anchor: string;
  bestFor: string;
  limit: string;
  url: string;
  orgId?: string;
}

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    type: 'Indication-level PRF · recruitment · brand tracker',
    hq: 'USA (HQ) / UK / Middle East / Brazil',
    anchor: 'bionixus',
    url: 'https://www.bionixus.com',
    orgId: 'https://www.bionixus.com/#organization',
    bestFor:
      'Indication-level anonymous PRFs with full patient history, new and current case recruitment, and brand trackers as share of treated patients',
    limit: 'Not a global syndicated sales audit. Complements IQVIA volume; does not replace warehouse or pharmacy unit data.',
    overview:
      'BioNixus is a global market research firm serving 118 clients across 48 countries. In oncology the unit of observation is the patient, not the pack: anonymous Patient Record / Request Forms (PRFs) completed by the treating oncologist, quota-controlled recruitment of new (incident) and current (prevalent) cases, and wave brand trackers that report share of treated patients by indication, line, and biomarker — not SKU unit share. The same GCP-grade discipline used in pharmaceutical primary research is applied to the chart: diagnosis through current regimen, prior lines, reasons for switch, and access constraints, with no patient identifiers.',
    strengths: [
      'Anonymous PRFs with full history — presentation, diagnosis, lines, biomarkers, current intent',
      'New vs current case recruitment with separate quotas so incident is not drowned by prevalent',
      'Brand trackers as share of treated patients, by indication and line',
      'Indication, stage, histology, and biomarker coded on every record — not inferred from SKU',
      'Reason for choice, switch, and discontinuation on the form (IDI overlay if scoped)',
      'Hospital and department fieldwork, including MENA and GCC oncology launches',
      'Optional KOL and tumour-board overlay on the same file',
      'Reconciles to IQVIA units when the client holds both layers',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA',
    type: 'Syndicated volume · prescription audit',
    hq: 'USA',
    anchor: 'iqvia',
    url: 'https://www.iqvia.com',
    bestFor: 'Syndicated sell-in / sell-out, prescription audits, and scale real-world data where panels exist',
    limit:
      'Pack- and channel-level. Rarely indication-coded. Does not recruit incident vs prevalent cases. Brand “share” is units, not patients.',
    overview:
      'IQVIA is the default volume layer for oncology commercial teams: sell-in, sell-out, pharmacy and hospital audits, SKU and molecule share of units, and long time series for forecast calibration and supply. That answers how much product moved. It does not answer which tumour, which line, which biomarker, whether the patient is newly diagnosed or continuing, or why the regimen was chosen. One SKU can serve three indications. Tender and hospital channels distort pack share further. That is generic sales data. It is not a patient record.',
    strengths: [
      'National and regional unit sales at scale',
      'Pharmacy and hospital audit panels in major markets',
      'Long time series for finance, supply, and tender',
      'Useful calibration when paired with indication-level PRFs',
    ],
  },
  {
    rank: 3,
    name: 'Kantar / Cerner Enviza',
    type: 'Epidemiology · patient journey',
    hq: 'UK',
    anchor: 'kantar',
    url: 'https://www.kantar.com',
    bestFor: 'CancerMPact-style epidemiology, patient journey, and treatment satisfaction',
    limit: 'Modelled epidemiology and journey maps — not live PRF recruitment of new vs current cases in-market.',
    overview:
      'Kantar Health and Cerner Enviza (CancerMPact and related products) are strong at epidemiology models, patient journey, and satisfaction. Those outputs are not live, physician-sourced patient records with new-versus-current recruitment in the markets where you are launching.',
    strengths: [
      'Epidemiology and incidence / prevalence models',
      'Cancer patient journey mapping',
      'Treatment satisfaction and PRO work',
      'Oncologist perception tracking in core Western markets',
    ],
  },
  {
    rank: 4,
    name: 'Adelphi Real World',
    type: 'Disease-specific programme (DSP)',
    hq: 'UK',
    anchor: 'adelphi',
    url: 'https://www.adelphirealworld.com',
    bestFor: 'Disease-specific chart programmes (DSP) in core Western markets',
    limit: 'Closest PRF analogue among syndicated chart houses. Coverage thins in MENA, GCC, and many emerging oncology launches.',
    overview:
      'Adelphi Real World Disease Specific Programmes are the closest widely known analogue to a physician-completed chart extract in established Western markets. Coverage and wave design are built around those geographies. For GCC, broader MENA, and many emerging oncology launches, BioNixus fields indication-level PRFs and incident/prevalent quotas in-region rather than waiting on a Western DSP footprint.',
    strengths: [
      'Physician-sourced chart programmes in core Western markets',
      'Indication-structured patient samples where DSP exists',
      'Treatment-pattern evidence beyond pack audits',
      'Established DSP brands buyers already recognise',
    ],
  },
  {
    rank: 5,
    name: 'OPEN Health',
    type: 'HEOR · access evidence',
    hq: 'UK',
    anchor: 'open-health',
    url: 'https://www.openhealth.com',
    bestFor: 'Oncology HEOR, access evidence, and value dossiers',
    limit: 'Evidence for payers — not a commercial brand tracker or case-recruitment engine.',
    overview:
      'OPEN Health is the access and HEOR house: value dossiers, HTA support, modelling. That is a different invoice from commercial brand tracking and case recruitment. Pair it with PRFs when the payer story must rest on treated-patient reality, not pack share.',
    strengths: [
      'Oncology HEOR and economic modelling',
      'HTA submission support (NICE, G-BA, HAS and peers)',
      'Value dossier development',
      'Systematic reviews in oncology',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the top oncology market research companies in 2026?',
    a: 'Ranked by fit for treatment-pattern work — not headcount — the 2026 shortlist is BioNixus (indication-level anonymous PRFs with full history, new and current case recruitment, brand trackers as share of treated patients), IQVIA (syndicated pack and prescription volume), Kantar / Cerner Enviza (epidemiology and journey), Adelphi Real World (Western DSP charts), and OPEN Health (oncology HEOR). BioNixus ranks first when the decision needs the patient behind the pack.',
  },
  {
    q: 'How is BioNixus different from IQVIA in oncology?',
    a: 'IQVIA’s unit of observation is the pack: sell-in, sell-out, and audit share of units. BioNixus’s unit of observation is the anonymous PRF: indication, line, biomarker, full treatment history, and whether the case is new or current. IQVIA answers how much product moved. BioNixus answers who was actually treated, with what, and why. Sophisticated teams buy both and reconcile patient share to units — they do not treat pack share as indication share.',
  },
  {
    q: 'What is an anonymous PRF (Patient Record / Request Form)?',
    a: 'A PRF is a physician-completed extract from the oncology chart with identifiers stripped: no name, hospital file number, or national ID. It captures age band and setting, primary indication and histology, stage, biomarkers and test timing, prior lines and reasons for discontinuation, a new-versus-current flag, current regimen and intent, and the brand chosen with alternatives considered. GDPR and local research ethics rules apply. BioNixus uses PRFs as the standard oncology instrument.',
  },
  {
    q: 'Why do new and current case recruitment matter?',
    a: 'Prevalent (already on treatment) patients dominate any convenience sample and flatten launch and switch signals. BioNixus sets separate quotas for new (incident / first presentation this period) and current (continuing) cases, with tumour and line screens, so brand trackers can report share of new patients versus share of continuing patients — something a sales audit does not recruit.',
  },
  {
    q: 'What is an oncology brand tracker if it is not IQVIA share?',
    a: 'A BioNixus oncology brand tracker is share of treated patients, by indication and line, including switch-in and switch-out, run in waves. IQVIA brand “share” is unit share. One SKU can serve multiple tumours; hospital and tender channels distort packs further. Patient-share trackers are the commercial KPI when the molecule is multi-indication or when new-patient starts are the launch metric.',
  },
  {
    q: 'When should we still buy IQVIA?',
    a: 'Buy IQVIA when you need national or regional unit sales, channel mix, and a long time series. Supply, tender, and finance will keep asking for it. Buy BioNixus when the same SKU treats more than one cancer, when you must separate new patients from continuing ones, or when brand share among treated patients is the KPI. Buy both at launch or defence and reconcile the two resolutions in one file.',
  },
  {
    q: 'Can HCP surveys replace PRFs?',
    a: 'No. Kantar and other HCP survey houses are strong at attitude and share of mention. Stated practice is not documented history, not incident/prevalent quotas, and not indication-coded brand share among treated patients. Use surveys for message and perception; use PRFs for the oncology file.',
  },
  {
    q: 'Which regions can BioNixus field oncology PRFs in?',
    a: `BioNixus delivers research across ${STATS.countries} countries, with oncology fieldwork depth in MENA (including Saudi Arabia, UAE, Kuwait, and Egypt), the UK, Europe, and Brazil, plus coordination from US headquarters. Adelphi-style DSPs are strongest in core Western markets; BioNixus is built for indication-level recruitment where those programmes thin out. See healthcare market research for the full service map.`,
  },
];

const prfRows = [
  { num: 'A', block: 'Identity stripped', capture: 'Age band, sex, setting of care — never a name or file number', tag: 'Privacy' },
  { num: 'B', block: 'Disease', capture: 'Primary indication, histology, stage at diagnosis and now, key biomarkers', tag: 'Indication' },
  { num: 'C', block: 'History', capture: 'Prior lines, dates (month/year), responses, reasons for discontinuation', tag: 'Chart' },
  { num: 'D', block: 'This visit / this wave', capture: 'New case or current case flag · current regimen · intent · next planned step', tag: 'Recruit' },
  { num: 'E', block: 'Brand', capture: 'Product chosen, alternatives considered, access or protocol constraint', tag: 'Tracker' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-oncology-market-research-companies-2026';

const PAGE_AUTHOR = getEditorialAuthor({
  path: '/insights/top-oncology-market-research-companies-2026',
  pageType: 'comparison',
});
const PAGE_TITLE = 'Top Oncology Market Research Companies 2026 | BioNixus';
const PAGE_DESCRIPTION =
  'Compare BioNixus vs IQVIA: indication-level PRFs with full patient history, new vs current case recruitment, and brand trackers — not generic pack sales data.';

export default function TopOncologyMarketResearchCompanies2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Top Oncology Market Research Companies (2026)',
        item: CANONICAL,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: 'https://www.bionixus.com/og-image.png',
    headline: 'Top Oncology Market Research Companies (2026)',
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    datePublished: '2026-06-12',
    dateModified: '2026-09-04',
    author: personAuthorJsonLd(PAGE_AUTHOR),
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } },
    inLanguage: 'en',
    about: {
      '@type': 'Thing',
      name: 'Oncology market research',
    },
    keywords:
      'oncology market research companies, BioNixus vs IQVIA, anonymous PRF, patient record form, indication-level oncology, brand tracker share of patients, new vs current case recruitment',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Oncology Market Research Companies 2026',
    description:
      'Oncology market research firms ranked by fit for indication-level PRFs, case recruitment, and patient-share brand trackers versus pack-level sales audits.',
    numberOfItems: firms.length,
    itemListElement: firms.map((f) => ({
      '@type': 'ListItem',
      position: f.rank,
      item: {
        '@type': 'Organization',
        ...(f.orgId ? { '@id': f.orgId } : {}),
        name: f.name,
        url: f.url,
        description: `Best for: ${f.bestFor}`,
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <OncologyPremiumStyles />
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="en"
        article={{
          publishedTime: '2026-06-12',
          modifiedTime: '2026-09-04',
          section: 'Oncology Market Research',
          tags: [
            'oncology market research',
            'BioNixus vs IQVIA',
            'anonymous PRF',
            'indication-level research',
            'oncology brand tracker',
          ],
        }}
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
                { name: 'Insights', href: '/insights' },
                { name: 'Top Oncology Market Research Companies', href: '/insights/top-oncology-market-research-companies-2026' },
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
                  Ranking 2026 · Indication-level · PRF
                  <br />1 September 2026
                </div>
                <div className="cbadge">Oncology Intelligence</div>
              </div>
            </div>

            <div className="cover-ornament">
              <span className="or-diamond" />
              <span className="or-txt">Ranking &amp; comparison · Indication-level · PRF · Brand trackers</span>
              <span className="or-line" />
            </div>
            <h1 className="cover-title">
              <span className="h1-kicker">Top Oncology Market Research Companies 2026</span>
              The patient,
              <br />
              not the <em>pack.</em>
            </h1>
            <p className="cover-subtitle">
              IQVIA tells you how many units moved. BioNixus tells you which indication, which line, which biomarker —
              from anonymous PRFs with full patient history, new and current case recruitment, and brand trackers. This
              ranking sits inside{' '}
              <Link to="/healthcare-market-research">healthcare market research</Link>
              {' '}
              for pharmaceutical and oncology brand teams who need treatment-pattern evidence, not a sales cube.
            </p>
            <div className="cover-mkts">
              <div className="cmkt live">
                <span className="iso">01</span>
                <span className="nm">BioNixus</span>
                <span className="tag">PRF · Indication</span>
              </div>
              <div className="cmkt">
                <span className="iso">02</span>
                <span className="nm">IQVIA</span>
                <span className="tag">Sales audit</span>
              </div>
              <div className="cmkt">
                <span className="iso">03</span>
                <span className="nm">Kantar</span>
                <span className="tag">Journey</span>
              </div>
              <div className="cmkt">
                <span className="iso">04</span>
                <span className="nm">Adelphi</span>
                <span className="tag">Chart DSP</span>
              </div>
            </div>
            <div className="cdrow">
              <div className="cdcell">
                <div className="cdlbl">Unit of data</div>
                <div className="cdval">
                  Anonymous PRF
                  <br />
                  <span className="accent">Full history</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Resolution</div>
                <div className="cdval">
                  Indication-level
                  <br />
                  <span className="accent">Not SKU share</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Recruitment</div>
                <div className="cdval">
                  New + current
                  <br />
                  <span className="accent">Incident · prevalent</span>
                </div>
              </div>
              <div className="cdcell">
                <div className="cdlbl">Tracking</div>
                <div className="cdval">
                  Brand trackers
                  <br />
                  <span className="accent">Share of patients</span>
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
          <section className="onco-wrap onco-pad" id="how-the-field-splits" aria-labelledby="split-title">
            <div className="page-rule">
              <div className="page-rule-text">01 · How the field splits</div>
            </div>
            <div className="section-num">01 — Oncology research is not one market</div>
            <h2 className="section-title" id="split-title">
              Four houses. <em>One decision.</em>
            </h2>
            <p className="section-lede">
              An oncology brand team does not buy “market research.” It buys a unit of observation. Pack sales, HCP
              attitude, epidemiology, or the <strong>patient record</strong>. Mixing those products is how launches get
              the wrong share number. BioNixus is a global market research firm in {STATS.countries} countries for{' '}
              {STATS.clients} clients — built for the patient layer.
            </p>
            <div className="stat-band">
              <div className="stat-cell">
                <div className="stat-n">Pack</div>
                <div className="stat-l">IQVIA · sell-in / sell-out</div>
              </div>
              <div className="stat-cell b">
                <div className="stat-n">Survey</div>
                <div className="stat-l">Kantar HCP / patient survey</div>
              </div>
              <div className="stat-cell g">
                <div className="stat-n">Chart</div>
                <div className="stat-l">Adelphi DSP · BioNixus PRF</div>
              </div>
              <div className="stat-cell s">
                <div className="stat-n">Access</div>
                <div className="stat-l">OPEN Health · HEOR</div>
              </div>
            </div>
            <div className="bundle-banner">
              <h3>The IQVIA problem in oncology</h3>
              <p>
                Syndicated sales and prescription audits are excellent at answering “how many packs left the warehouse
                or the pharmacy?” They are weak at answering the questions that decide an oncology P&amp;L:{' '}
                <strong>which indication</strong>, <strong>which line</strong>, <strong>which biomarker</strong>,{' '}
                <strong>new diagnosis or continuing patient</strong>, and <strong>why the regimen was chosen</strong>. One
                SKU can serve three tumours. Tender and hospital channels distort pack share further. That is generic
                sales data. It is not a patient.
              </p>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="ranking-2026" aria-labelledby="ranking-title">
            <div className="page-rule">
              <div className="page-rule-text">02 · 2026 ranking</div>
            </div>
            <div className="section-num">02 — Top oncology market research companies</div>
            <h2 className="section-title" id="ranking-title">
              Ranked by the job, <em>not by headcount.</em>
            </h2>
            <p className="section-lede">
              This ranking is for oncology commercial, medical, and access teams who need treatment-pattern evidence —
              not a Fortune-500 list of the largest data vendors. Direct answer:{' '}
              <strong>BioNixus is #1 for indication-level PRFs and patient-share trackers; IQVIA is #1 for pack volume.</strong>
            </p>
            <div className="matrix-scroll">
              <table className="matrix">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Firm</th>
                    <th>Best for</th>
                    <th>Limit in oncology</th>
                  </tr>
                </thead>
                <tbody>
                  {firms.map((firm) => (
                    <tr key={firm.anchor} className={firm.rank === 1 ? 'rec' : undefined}>
                      <td>{firm.rank}</td>
                      <td>
                        <a href={`#${firm.anchor}`}>{firm.name}</a>
                      </td>
                      <td>{firm.bestFor}</td>
                      <td>{firm.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note-line">
              Clarivate/DRG and GlobalData remain useful for pipeline and epidemiology desk research. They are not listed
              above because they do not field physician-sourced patient records.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="bionixus-vs-iqvia" aria-labelledby="compare-title">
            <div className="page-rule">
              <div className="page-rule-text">03 · BioNixus vs IQVIA</div>
            </div>
            <div className="section-num">03 — The comparison that matters</div>
            <h2 className="section-title" id="compare-title">
              Volume is necessary. <em>It is not sufficient.</em>
            </h2>
            <p className="section-lede">
              Use IQVIA when you need the market’s size in units. Use BioNixus when you need the{' '}
              <strong>oncology patient</strong> behind those units — indication, history, new versus current, and brand
              share among treated patients.
            </p>
            <div className="choice-grid">
              <article className="choice-card a">
                <div className="choice-hd">
                  <strong>IQVIA</strong>
                  <span>Syndicated volume</span>
                </div>
                <div className="choice-body">
                  <div className="choice-kicker">Unit of observation</div>
                  <div className="choice-amt">The pack</div>
                  <ul>
                    <li>Sell-in, sell-out, pharmacy and hospital audits</li>
                    <li>SKU / molecule share of units</li>
                    <li>Channel and geography at scale</li>
                    <li>Useful for forecast calibration and supply</li>
                    <li>Generic sales data — one number, many indications</li>
                  </ul>
                </div>
                <div className="choice-foot">
                  Answers: “How much product moved?” Does not answer: “In which tumour, which line, which patient?”
                </div>
              </article>
              <article className="choice-card b">
                <div className="choice-hd">
                  <strong>BioNixus</strong>
                  <span>Indication-level patients</span>
                </div>
                <div className="choice-body">
                  <div className="choice-kicker">Unit of observation</div>
                  <div className="choice-amt">The PRF</div>
                  <ul>
                    <li>Anonymous Patient Record / Request Forms</li>
                    <li>Full patient history — diagnosis through current line</li>
                    <li>New (incident) and current (prevalent) case recruitment</li>
                    <li>Brand trackers as share of treated patients</li>
                    <li>Indication, stage, biomarker, prior therapy coded</li>
                  </ul>
                </div>
                <div className="choice-foot">
                  Answers: “Who is actually treated, with what, and why — including first presentation this wave.”
                </div>
              </article>
            </div>
            <h3 className="subhead">Capability matrix — oncology commercial use</h3>
            <div className="matrix-scroll">
              <table className="matrix">
                <thead>
                  <tr>
                    <th>Need</th>
                    <th>IQVIA</th>
                    <th>BioNixus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>National pack / unit sales</td>
                    <td>Core product</td>
                    <td>Not the offer — we sit beside it</td>
                  </tr>
                  <tr>
                    <td>Indication-level split of the same SKU</td>
                    <td>Typically not</td>
                    <td>Coded on every PRF</td>
                  </tr>
                  <tr className="rec">
                    <td>Anonymous PRF with full patient history</td>
                    <td>Not a sales-audit output</td>
                    <td>Standard instrument</td>
                  </tr>
                  <tr className="rec">
                    <td>New cases vs current / continuing cases</td>
                    <td>Not recruited as such</td>
                    <td>Quota-controlled recruitment</td>
                  </tr>
                  <tr className="rec">
                    <td>Brand tracker (share of patients, not packs)</td>
                    <td>Unit share only</td>
                    <td>Wave tracker on treated patients</td>
                  </tr>
                  <tr>
                    <td>Line of therapy · biomarker · prior regimens</td>
                    <td>Limited / modelled</td>
                    <td>Captured from the treating physician</td>
                  </tr>
                  <tr>
                    <td>Reason for choice / switch / discontinuation</td>
                    <td>Not in the audit</td>
                    <td>On the form and in the IDI if scoped</td>
                  </tr>
                  <tr>
                    <td>MENA / GCC / emerging oncology launches</td>
                    <td>Audit coverage varies; often pack-only</td>
                    <td>Field teams at hospital and indication level</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bundle-banner">
              <h3>They are not competitors for the same invoice</h3>
              <p>
                Sophisticated oncology teams buy IQVIA for volume and BioNixus for the patient. Trouble starts when a
                board is shown pack share and told it is indication share — or when a new molecule’s “market” is counted
                as every unit of a multi-indication SKU. BioNixus exists so that conversation stops.
              </p>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="what-bionixus-fields" aria-labelledby="instruments-title">
            <div className="page-rule">
              <div className="page-rule-text">04 · What BioNixus fields</div>
            </div>
            <div className="section-num">04 — PRF, recruitment, brand tracker</div>
            <h2 className="section-title" id="instruments-title">
              Three instruments. <em>One oncology file.</em>
            </h2>
            <p className="section-lede">
              Every record is anonymised. No name, no hospital ID, no national identifier. The treating oncologist
              completes the form from the chart. GDPR and local research ethics rules apply. For therapy-area scoping
              see{' '}
              <Link to="/healthcare-market-research/therapy/oncology">oncology therapy market research</Link>.
            </p>
            <div className="phases">
              <div className="phase">
                <div className="num">INSTRUMENT 1</div>
                <h3>Anonymous PRF</h3>
                <ul>
                  <li>Patient Record / Request Form</li>
                  <li>Full history: presentation → diagnosis → lines</li>
                  <li>Indication, histology, stage, ECOG</li>
                  <li>Biomarkers and test timing</li>
                  <li>Current regimen and intent</li>
                </ul>
              </div>
              <div className="phase p2">
                <div className="num">INSTRUMENT 2</div>
                <h3>Case recruitment</h3>
                <ul>
                  <li>New cases — first presentation this period</li>
                  <li>Current cases — already on treatment</li>
                  <li>Separate quotas so incident is not drowned by prevalent</li>
                  <li>Tumour and line screens</li>
                  <li>Physician-verified, not a panel dump</li>
                </ul>
              </div>
              <div className="phase p3">
                <div className="num">INSTRUMENT 3</div>
                <h3>Brand tracker</h3>
                <ul>
                  <li>Share of treated patients, by indication</li>
                  <li>Share of new patients vs continuing</li>
                  <li>Line-level brand position</li>
                  <li>Switch-in / switch-out</li>
                  <li>Waves — not a one-off audit</li>
                </ul>
              </div>
              <div className="phase p4">
                <div className="num">LAYER</div>
                <h3>Hospital &amp; indication</h3>
                <ul>
                  <li>Department, not country blob</li>
                  <li>Indication coded, not inferred from SKU</li>
                  <li>Optional KOL / tumour-board overlay</li>
                  <li>Aligns to IQVIA units if you hold both</li>
                  <li>Dashboard for medical + brand</li>
                </ul>
              </div>
            </div>
            <h3 className="subhead">Illustrative PRF spine — what “full history” means</h3>
            <div className="rq-blueprint">
              <div className="rq-bp-hd">
                <div>
                  <div className="rq-bp-eyebrow">Anonymous · physician-completed · no identifiers</div>
                  <div className="rq-bp-title">Patient Record Form — oncology core fields</div>
                </div>
                <div className="rq-bp-pills">
                  <span className="rq-pill rec">Indication</span>
                  <span className="rq-pill">New / current</span>
                  <span className="rq-pill">Tracker-ready</span>
                </div>
              </div>
              <div className="rq-row hdr">
                <div />
                <div>Block</div>
                <div>What is captured</div>
                <div>Why IQVIA cannot</div>
              </div>
              {prfRows.map((row) => (
                <div className="rq-row" key={row.num}>
                  <div className="rq-num">{row.num}</div>
                  <div className="rq-dec">{row.block}</div>
                  <div className="rq-out">{row.capture}</div>
                  <div className="rq-tag">{row.tag}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="when-to-buy" aria-labelledby="budget-title">
            <div className="page-rule">
              <div className="page-rule-text">05 · When to buy which</div>
            </div>
            <div className="section-num">05 — A practical split of budget</div>
            <h2 className="section-title" id="budget-title">
              Keep IQVIA for volume. <em>Buy BioNixus for the tumour.</em>
            </h2>
            <div className="why-grid">
              <div className="why-cell">
                <div className="n">01</div>
                <h3>Buy IQVIA when</h3>
                <p>
                  You need national or regional unit sales, channel mix, and a long time series. Supply, tender, and
                  finance will keep asking for it. That is the right tool.
                </p>
              </div>
              <div className="why-cell">
                <div className="n">02</div>
                <h3>Buy BioNixus when</h3>
                <p>
                  The same SKU treats more than one cancer, or you must separate new patients from continuing ones, or
                  brand share among treated patients is the KPI — not pack share.
                </p>
              </div>
              <div className="why-cell">
                <div className="n">03</div>
                <h3>Buy both when</h3>
                <p>
                  You are launching or defending in oncology. Reconcile BioNixus patient share to IQVIA units so medical,
                  brand, and finance argue from one file — two resolutions, not two stories.
                </p>
              </div>
              <div className="why-cell">
                <div className="n">04</div>
                <h3>Do not buy surveys alone</h3>
                <p>
                  HCP “share of mention” is not a PRF. Kantar and similar survey houses are strong at attitude. They do
                  not replace documented history and incident/prevalent quotas.
                </p>
              </div>
            </div>
            <div className="fit-band">
              <div className="fit-cell">
                <div className="k">Projects</div>
                <div className="v">{STATS.projectsAnnual} annually</div>
              </div>
              <div className="fit-cell g">
                <div className="k">Clients</div>
                <div className="v">{STATS.clients} organisations</div>
              </div>
              <div className="fit-cell b">
                <div className="k">Coverage</div>
                <div className="v">{STATS.countries} countries</div>
              </div>
              <div className="fit-cell s">
                <div className="k">Heritage</div>
                <div className="v">Pharma-founded · London 2012</div>
              </div>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="firm-profiles" aria-labelledby="profiles-title">
            <div className="page-rule">
              <div className="page-rule-text">06 · Firm profiles</div>
            </div>
            <div className="section-num">06 — Who belongs on the shortlist</div>
            <h2 className="section-title" id="profiles-title">
              Five firms. <em>Different jobs.</em>
            </h2>
            <p className="section-lede">
              Profiles below are assessed by the oncology job, not corporate revenue. Select on unit of observation first
              — pack, survey, chart, or access dossier.
            </p>
            {firms.map((firm) => (
              <article key={firm.anchor} id={firm.anchor} className={firm.rank === 1 ? 'firm-card rec' : 'firm-card'}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="firm-rank">{firm.rank}</span>
                  <h3 className="text-xl m-0">{firm.name}</h3>
                  <span className="firm-type">{firm.type}</span>
                  <span className="text-sm text-muted-foreground">HQ: {firm.hq}</span>
                </div>
                <p className="section-lede mb-2">
                  <strong>Best for:</strong> {firm.bestFor}
                </p>
                <p className="section-lede mb-2">{firm.overview}</p>
                <p className="note-line">Limit: {firm.limit}</p>
                <ul>
                  {firm.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="onco-wrap onco-pad pt-0" id="faq" aria-labelledby="faq-title">
            <div className="page-rule">
              <div className="page-rule-text">07 · Questions buyers ask</div>
            </div>
            <h2 className="section-title" id="faq-title">
              Frequently asked questions
            </h2>
            <div className="qa-list">
              {faqItems.map((faq) => (
                <details key={faq.q} className="qa-item">
                  <summary>{faq.q}</summary>
                  <p className="a">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" aria-labelledby="related-title">
            <h2 className="section-title" id="related-title">
              Related reading
            </h2>
            <div className="related-grid">
              <Link className="related-card" to="/insights/top-hematology-market-research-companies-2026">
                <h3>Top hematology market research companies</h3>
                <p>The blood-cancer and benign-hematology companion ranking: PRFs versus vial data.</p>
              </Link>
              <Link className="related-card" to="/healthcare-market-research/therapy/oncology">
                <h3>Oncology therapy area research</h3>
                <p>BioNixus oncology capability, methodology, and in-region execution.</p>
              </Link>
              <Link className="related-card" to="/kol-mapping-saudi-arabia-oncology">
                <h3>Oncology KOL mapping — Saudi Arabia</h3>
                <p>Influence mapping for oncology networks in the Kingdom.</p>
              </Link>
              <Link className="related-card" to="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">
                <h3>Healthcare market research companies — KSA</h3>
                <p>Country ranking for pharmaceutical and healthcare research buyers.</p>
              </Link>
              <Link className="related-card" to="/insights/best-global-market-research-companies-pharma-2026">
                <h3>Best global market research companies for pharma</h3>
                <p>Full-service primary research ranking for pharmaceutical buyers.</p>
              </Link>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0">
            <div className="closing-sign">
              <h2>
                If your oncology file is still <em>a sales cube</em>, you do not have the market.
              </h2>
              <p>
                BioNixus fields anonymous PRFs with full patient history, recruits new and current cases to quota, and
                tracks brands as share of treated patients — at indication level. IQVIA remains the volume layer. We are
                the patient layer. Request a proposal and we will map which tumours, lines, and waves you need before the
                next forecast cycle.
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
                market="oncology"
                ctaId="oncology-listicle-2026"
                ctaLocation="oncology_listicle_footer"
                className="text-left bg-white"
              />
            </div>
            <p className="note-line mt-4">
              Ranking reflects fit for oncology treatment-pattern and brand-tracker work, not corporate revenue. IQVIA,
              Kantar, Cerner Enviza, Adelphi, and OPEN Health are independent organisations; descriptions of their
              typical commercial products are based on publicly characterised offerings and buyer practice, not a paid
              audit of each firm. PRFs contain no patient identifiers. BioNixus does not provide legal, medical, or
              regulatory advice.
            </p>
          </section>
        </article>

        <RelatedPages
          currentSlug="oncology-global"
          relatedCountries={['saudi-arabia', 'uae', 'uk']}
          relatedTherapies={['oncology', 'rare-diseases']}
        />
      </main>
      <Footer />
    </div>
  );
}
