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
    type: 'Custom PRF · quota recruitment · line-of-therapy tracker',
    hq: 'USA (HQ) / UK / Middle East / Brazil',
    anchor: 'bionixus',
    url: 'https://www.bionixus.com',
    orgId: 'https://www.bionixus.com/#organization',
    bestFor:
      'Custom anonymous PRFs across malignant and benign hematology, incident and prevalent case quotas by subtype and line, and brand trackers as share of treated patients — including MENA and GCC transplant centers',
    limit:
      'Not a syndicated audit or a multi-client panel. Complements IQVIA volume and syndicated monitors; does not replace warehouse or pharmacy unit data.',
    overview:
      `BioNixus is a global market research firm serving ${STATS.clients} clients across ${STATS.countries} countries. In hematology the unit of observation is the patient chart, not the vial: anonymous Patient Record / Request Forms (PRFs) completed by the treating hematologist, quota-controlled recruitment of new (incident) and current (prevalent) cases by diagnosis, risk group, and line, and wave brand trackers that report share of treated patients — not SKU unit share and not a natural-fallout syndicate. The same discipline covers benign hematology (hemophilia, sickle cell disease, thalassemia, ITP, PNH) where no oncology panel reaches, with fieldwork in transplant centers and hemophilia treatment centers across MENA, the GCC, the UK, Europe, and Brazil.`,
    strengths: [
      'Anonymous PRFs with full history — diagnosis, risk score, cytogenetics/molecular, transplant status, every prior line',
      'New vs current case recruitment with separate quotas, so long-surviving prevalent pools (CML, CLL, myeloma) do not drown the launch signal',
      'Brand trackers as share of treated patients, by subtype and line — including CAR-T, bispecific, and gene-therapy sequencing',
      'Benign hematology covered with the same instrument: prophylaxis vs on-demand, factor vs non-factor, disease-modifying vs curative intent',
      'Reason for choice, switch, and discontinuation on the form (IDI overlay if scoped)',
      'Transplant-center and hemophilia-treatment-center fieldwork, including Saudi Arabia, UAE, Bahrain, Kuwait, and Egypt',
      'Optional KOL, tumor-board, and MDT overlay on the same file',
      'Reconciles to IQVIA units or syndicated monitor share when the client holds both layers',
    ],
  },
  {
    rank: 2,
    name: 'IQVIA',
    type: 'Syndicated volume · Oncology Dynamics panel',
    hq: 'USA',
    anchor: 'iqvia',
    url: 'https://www.iqvia.com',
    bestFor:
      'National unit sales and hospital audits, plus IQVIA Oncology Dynamics — a syndicated, physician-reported panel of anonymized cancer patient records that includes hematologic malignancies in 20+ countries',
    limit:
      'Audits are pack-level. Oncology Dynamics is a natural-fallout, multi-client panel: later lines and rare subtypes can run thin (IQVIA sells a “Boost” add-on for exactly this), benign hematology is outside its oncology scope, and MENA coverage is limited.',
    overview:
      'IQVIA is the default volume layer for hematology commercial teams: sell-in, sell-out, hospital and pharmacy audits, and SKU share of units. It also runs Oncology Dynamics, a syndicated survey in which oncologists and hematologists report anonymized records of drug-treated patients — leukemias, lymphomas, myeloma, MDS, and MPN included — on a quarterly cycle in more than 20 countries, projected to treated prevalence. That is a real patient layer, and a good one where the panel runs. Its constraints are structural, not a quality flaw: the sample is whatever falls out of the panel in a two-week window, so third-line myeloma, post-CAR-T relapse, or a specific cytogenetic subgroup may be a handful of records; the study is designed for the syndicate rather than for your launch; hemophilia, sickle cell, thalassemia, and ITP are not oncology and are not in it; and the country list does not extend to most of MENA.',
    strengths: [
      'National and regional unit sales at scale (MIDAS, hospital and retail audits)',
      'Oncology Dynamics: anonymized patient-level records by indication, line, biomarker status, and therapy initiator',
      'Harmonized methodology across 20+ countries for cross-market KPI comparison',
      'Long time series for finance, supply, and tender calibration',
    ],
  },
  {
    rank: 3,
    name: 'Oracle Life Sciences (CancerMPact)',
    type: 'Epidemiology · treatment architecture',
    hq: 'USA',
    anchor: 'oracle-life-sciences',
    url: 'https://www.oracle.com/life-sciences/',
    bestFor:
      'CancerMPact Patient Metrics (epidemiology), Treatment Architecture (management by stage, segment, and line for up to 31 tumor types in the US, EU5, Japan, and China), and Future Trends for pipeline scenario planning',
    limit:
      'Subscription desk resource for the G8 markets. Not in-market recruitment of new vs current cases, and no fieldwork footprint in MENA or the GCC.',
    overview:
      'CancerMPact — built by Kantar Health, carried into Cerner Enviza, and now sold by Oracle Life Sciences — remains the reference desk resource for hematology epidemiology and treatment architecture. Its Treatment Architecture Trends module covers annual drug treatment by stage, patient segment, and line of therapy across the US, EU5, Japan, and China, with more than seven years of history. Hematologic malignancies are included. It is the right tool for sizing a myeloma or CLL opportunity in the G8 and for stress-testing a forecast against expected label changes. It is not a live, physician-completed patient record in the Gulf, and it does not recruit incident versus prevalent cases for your launch.',
    strengths: [
      'Patient Metrics epidemiology across hematologic and solid tumors in the G8',
      'Treatment Architecture by stage, segment, and line of therapy with multi-year trends',
      'Future Trends and CancerLandscape trial-landscape modules for pipeline scenarios',
      'Long-standing analyst coverage of myeloma, lymphoma, and leukemia treatment paradigms',
    ],
  },
  {
    rank: 4,
    name: 'Adelphi Real World',
    type: 'Disease Specific Programme (DSP)',
    hq: 'UK',
    anchor: 'adelphi',
    url: 'https://www.adelphirealworld.com',
    bestFor:
      'Disease Specific Programmes in hematologic malignancies — including MDS (France, Germany, Italy, Spain, UK, US) and CLL/SLL (with Brazil and Japan waves) — combining physician-completed patient record forms with patient- and caregiver-reported outcomes',
    limit:
      'Subscription syndicate with a footprint built around large Western and selected Asian and LATAM markets. Coverage thins in MENA, the GCC, and most emerging hematology launches.',
    overview:
      'Adelphi Real World’s Disease Specific Programmes are large, multinational, cross-sectional surveys with retrospective data collection: hematologists, hematologist-oncologists, and oncologists complete patient record forms on consecutive patients, and the same patients optionally complete PRO instruments. Published hematology DSPs include myelodysplastic syndromes (fielded July 2023–February 2024 across France, Germany, Italy, Spain, the UK, and the US) and chronic lymphocytic leukemia / small lymphocytic lymphoma, with waves in Brazil and Japan. The methodology is published, validated, and widely cited in HEOR. For GCC and wider MENA hematology, BioNixus fields the equivalent physician-completed record in-region rather than waiting on a Western DSP footprint.',
    strengths: [
      'Physician-completed PRFs paired with patient- and caregiver-reported outcomes',
      'MDS and CLL/SLL programmes with published, citable methodology',
      'Treatment-pattern and burden-of-illness evidence for reimbursement submissions',
      'Cross-country comparability where the DSP runs',
    ],
  },
  {
    rank: 5,
    name: 'OPEN Health',
    type: 'HEOR · access evidence',
    hq: 'UK',
    anchor: 'open-health',
    url: 'https://www.openhealth.com',
    bestFor:
      'Hematology HEOR, HTA submissions, and value dossiers — including one-time cell and gene therapies where survival extrapolation and payment models decide access',
    limit: 'Evidence for payers — not a commercial brand tracker or a case-recruitment engine.',
    overview:
      'OPEN Health is the access and HEOR house: systematic reviews, indirect treatment comparisons, economic models, and HTA dossiers. In hematology that increasingly means one-time CAR-T and gene therapies in myeloma, lymphoma, hemophilia, sickle cell disease, and thalassemia, where the payer conversation turns on durability, extrapolation, and outcomes-based agreements. That is a different invoice from commercial brand tracking and case recruitment. Pair it with PRFs when the payer story must rest on treated-patient reality in your markets, not on a G8 model.',
    strengths: [
      'Hematology HEOR and economic modelling, including cell and gene therapy',
      'HTA submission support (NICE, G-BA, HAS, and peers)',
      'Value dossier and global value story development',
      'Systematic reviews and network meta-analysis in hematologic malignancies',
    ],
  },
];

const faqItems = [
  {
    q: 'What are the top hematology market research companies in 2026?',
    a: 'Ranked by fit for treatment-pattern and brand-tracker work — not by headcount — the 2026 shortlist is BioNixus (custom anonymous PRFs across malignant and benign hematology, incident and prevalent case quotas, brand trackers as share of treated patients), IQVIA (unit audits plus the syndicated Oncology Dynamics patient panel), Oracle Life Sciences (CancerMPact epidemiology and treatment architecture), Adelphi Real World (MDS and CLL/SLL Disease Specific Programmes), and OPEN Health (hematology HEOR). BioNixus ranks first when the decision needs the patient behind the vial in your launch markets.',
  },
  {
    q: 'How is BioNixus different from IQVIA in hematology?',
    a: 'IQVIA gives you two things: unit audits (packs, vials, hospital and retail volume) and Oncology Dynamics, a syndicated panel in which hematologists report anonymized records of patients seen in a two-week window each quarter, projected to treated prevalence in 20+ countries. BioNixus gives you a custom PRF programme: you choose the diagnoses, risk groups, and lines; new and current cases are recruited to separate quotas; and the tracker runs in the markets you are launching in — including Saudi Arabia, the UAE, Bahrain, Kuwait, and Egypt, which are not in the syndicate. Sophisticated teams hold both and reconcile patient share to units. They do not treat pack share as line-of-therapy share, and they do not read a three-record subgroup in a fallout panel as a market.',
  },
  {
    q: 'What does a hematology PRF capture that a sales audit cannot?',
    a: 'A BioNixus hematology PRF is a physician-completed extract from the chart with identifiers stripped: age band and setting of care; diagnosis and classification (for example AML, CLL, DLBCL, multiple myeloma, MDS, or hemophilia A/B and sickle cell genotype); risk stratification (ELN, IPSS-M/IPSS-R, R-ISS, CLL-IPI, severity and inhibitor status in hemophilia); cytogenetic and molecular markers (del(17p)/TP53, IGHV, FLT3, NPM1, BCR-ABL, JAK2, t(4;14), 1q gain); transplant status and CAR-T or bispecific exposure; measurable residual disease results; every prior line with reason for stopping; a new-versus-current flag; current regimen and intent; and the brand chosen with alternatives considered. A unit audit records that a vial left a hospital pharmacy.',
  },
  {
    q: 'Why do new and current case quotas matter more in hematology than elsewhere?',
    a: 'Because hematology has some of the longest-surviving prevalent pools in medicine. Patients on a BCR-ABL inhibitor for CML, on continuous BTK inhibition for CLL, or on maintenance after transplant in myeloma stay “treated” for years. In any convenience or fallout sample those continuing patients swamp the newly diagnosed and the newly relapsed — exactly the patients a launch is trying to win. BioNixus sets separate quotas for new (incident or newly relapsed this period) and current (continuing) cases so the tracker reports share of new starts and share of continuing patients as two numbers, not one blended figure.',
  },
  {
    q: 'Does this ranking cover benign (non-malignant) hematology?',
    a: 'Yes, and it is where the field splits hardest. Hemophilia, von Willebrand disease, sickle cell disease, thalassemia, ITP, PNH, and aplastic anemia sit outside every oncology panel listed here — IQVIA Oncology Dynamics and CancerMPact are cancer instruments. BioNixus applies the same PRF discipline to benign hematology: prophylaxis versus on-demand, factor versus non-factor, disease-modifying versus one-time curative intent, and referral to accredited treatment centers. That matters in the Gulf, where sickle cell disease and beta-thalassemia are among the most prevalent inherited conditions, national premarital screening programmes exist, and CRISPR-based exa-cel (Casgevy) was approved by Bahrain’s NHRA in December 2023 and by the SFDA in January 2024 — the first medicine to come through the SFDA Breakthrough pathway.',
  },
  {
    q: 'How do you track brand share for CAR-T, bispecifics, and gene therapy when there is no “pack”?',
    a: 'You stop counting units. A one-time CAR-T infusion, a fixed-duration bispecific course, and a single gene-therapy administration cannot be compared with monthly oral or IV regimens on a pack basis. BioNixus trackers report share of eligible patients referred, share of treated patients by line, sequencing (what came before, what is planned after), bridging therapy, time from decision to infusion, and the reasons a certified center was or was not used. Because the PRF is completed by the treating hematologist, the denominator is real patients — not shipments to a handful of accredited sites.',
  },
  {
    q: 'Which regions can BioNixus field hematology PRFs in?',
    a: `BioNixus delivers research across ${STATS.countries} countries, with hematology fieldwork depth in MENA (Saudi Arabia, the UAE, Bahrain, Kuwait, Qatar, and Egypt), the UK, Europe, and Brazil, coordinated from US headquarters. Recruitment runs through transplant centers, hemophilia treatment centers, and general hematology departments — not a rented panel. Syndicated monitors and Western DSPs are strongest in the G7; BioNixus is built for subtype-level recruitment where those programmes thin out. See healthcare market research for the full service map.`,
  },
  {
    q: 'What does a hematology market research programme cost?',
    a: 'BioNixus engagements start at USD 20,000. Cost is driven by the number of diagnoses and lines in scope, the number of markets, the incident-to-prevalent quota mix, the number of tracker waves, and whether a KOL or IDI overlay is added. A single-market, single-indication PRF wave sits at the lower end; a multi-country GCC myeloma tracker with quarterly waves and a benign-hematology module sits higher. Request a proposal and we will return a scoped design and price within 48 hours.',
  },
];

const prfRows = [
  { num: 'A', block: 'Identity stripped', capture: 'Age band, sex, setting — transplant center, HTC, or general hematology; never a name or file number', tag: 'Privacy' },
  { num: 'B', block: 'Disease & risk', capture: 'Diagnosis and classification, risk score (ELN, IPSS-M, R-ISS, CLL-IPI), cytogenetic and molecular markers, hemophilia severity / SCD genotype', tag: 'Subtype' },
  { num: 'C', block: 'History', capture: 'Every prior line with dates and response depth, transplant status, CAR-T / bispecific exposure, MRD results, reasons for discontinuation', tag: 'Chart' },
  { num: 'D', block: 'This visit / this wave', capture: 'New or current case flag · current regimen · intent (induction, consolidation, maintenance, prophylaxis, on-demand) · next planned step', tag: 'Recruit' },
  { num: 'E', block: 'Brand', capture: 'Product chosen, alternatives considered, tender, protocol, or accredited-center constraint', tag: 'Tracker' },
];

const CANONICAL = 'https://www.bionixus.com/insights/top-hematology-market-research-companies-2026';

const PAGE_AUTHOR = getEditorialAuthor({
  path: '/insights/top-hematology-market-research-companies-2026',
  pageType: 'comparison',
});
const PAGE_TITLE = 'Top Hematology Market Research Companies 2026 | BioNixus';
const PAGE_DESCRIPTION =
  'Top hematology market research companies 2026: BioNixus vs IQVIA, Oracle, Adelphi. Anonymous PRFs, line-of-therapy brand trackers, malignant + benign.';
const DATE_PUBLISHED = '2026-09-04';
const DATE_MODIFIED = '2026-09-04';

export default function TopHematologyMarketResearchCompanies2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bionixus.com/insights' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Top Hematology Market Research Companies (2026)',
        item: CANONICAL,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: 'https://www.bionixus.com/og-image.png',
    headline: 'Top Hematology Market Research Companies (2026)',
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    author: personAuthorJsonLd(PAGE_AUTHOR),
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 },
    },
    inLanguage: 'en',
    about: {
      '@type': 'Thing',
      name: 'Hematology market research',
    },
    keywords:
      'hematology market research companies, haematology market research, BioNixus vs IQVIA, anonymous PRF, patient record form, line of therapy tracker, multiple myeloma market research, CLL market research, AML market research, hemophilia market research, sickle cell disease market research',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Hematology Market Research Companies 2026',
    description:
      'Hematology market research firms ranked by fit for custom PRFs, incident and prevalent case recruitment, and patient-share brand trackers versus unit audits and syndicated panels.',
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
          publishedTime: DATE_PUBLISHED,
          modifiedTime: DATE_MODIFIED,
          section: 'Hematology Market Research',
          tags: [
            'hematology market research',
            'BioNixus vs IQVIA',
            'anonymous PRF',
            'line of therapy tracker',
            'multiple myeloma',
            'hemophilia',
            'sickle cell disease',
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
                { name: 'Top Hematology Market Research Companies', href: '/insights/top-hematology-market-research-companies-2026' },
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
                  Ranking 2026 · Subtype-level · PRF
                  <br />4 September 2026
                </div>
                <div className="cbadge">Hematology Intelligence</div>
              </div>
            </div>

            <div className="cover-ornament">
              <span className="or-diamond" />
              <span className="or-txt">Ranking &amp; comparison · Malignant + benign · PRF · Line-of-therapy trackers</span>
              <span className="or-line" />
            </div>
            <h1 className="cover-title">
              <span className="h1-kicker">Top Hematology Market Research Companies 2026</span>
              The patient,
              <br />
              not the <em>vial.</em>
            </h1>
            <p className="cover-subtitle">
              IQVIA tells you how many vials left the hospital pharmacy. Syndicated monitors tell you what fell into a
              panel last quarter. BioNixus tells you which diagnosis, which risk group, which line, and whether the case
              is new or continuing — from anonymous PRFs with full patient history, quota-controlled recruitment, and
              brand trackers, across malignant and benign hematology. This ranking sits inside{' '}
              <Link to="/healthcare-market-research">healthcare market research</Link> for hematology brand, medical,
              and access teams who need treatment-pattern evidence, not a shipment cube.
            </p>
            <div className="cover-mkts">
              <div className="cmkt live">
                <span className="iso">01</span>
                <span className="nm">BioNixus</span>
                <span className="tag">PRF · Line</span>
              </div>
              <div className="cmkt">
                <span className="iso">02</span>
                <span className="nm">IQVIA</span>
                <span className="tag">Audit + panel</span>
              </div>
              <div className="cmkt">
                <span className="iso">03</span>
                <span className="nm">Oracle LS</span>
                <span className="tag">CancerMPact</span>
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
                  Subtype + line
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
                <div className="cdlbl">Scope</div>
                <div className="cdval">
                  Malignant + benign
                  <br />
                  <span className="accent">Myeloma to hemophilia</span>
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
            <div className="section-num">01 — Hematology research is not one market</div>
            <h2 className="section-title" id="split-title">
              Four instruments. <em>One decision.</em>
            </h2>
            <p className="section-lede">
              A hematology brand team does not buy “market research.” It buys a unit of observation: the vial, the
              syndicated panel record, the <strong>custom patient chart</strong>, or the payer dossier. Mixing those
              products is how a myeloma launch ends up with the wrong share number. BioNixus is a global market research
              firm in {STATS.countries} countries for {STATS.clients} clients — built for the custom patient layer, across
              blood cancers and inherited blood disorders alike.
            </p>
            <div className="stat-band">
              <div className="stat-cell">
                <div className="stat-n">Vial</div>
                <div className="stat-l">IQVIA · hospital &amp; retail audits</div>
              </div>
              <div className="stat-cell b">
                <div className="stat-n">Syndicate</div>
                <div className="stat-l">IQVIA Oncology Dynamics · panel records</div>
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
              <h3>The pack problem is worse in hematology</h3>
              <p>
                The same molecule crosses diagnoses: rituximab across DLBCL, follicular lymphoma, and CLL; venetoclax in
                CLL and AML; lenalidomide in myeloma, del(5q) MDS, and follicular lymphoma; ibrutinib in CLL, mantle cell
                lymphoma, and Waldenström. One SKU, four markets. Hospital and tender channels distort volume further. Then
                the newest classes break the pack logic entirely: a CAR-T infusion is one bag, a bispecific is a
                fixed-duration course, factor replacement in hemophilia is dosed per kilogram on a prophylaxis or
                on-demand schedule, and a gene therapy is administered once. Counting vials tells you{' '}
                <strong>how much left the pharmacy</strong>. It cannot tell you <strong>which diagnosis</strong>,{' '}
                <strong>which line</strong>, <strong>which risk group</strong>, <strong>new or continuing</strong>, or{' '}
                <strong>why</strong>.
              </p>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="ranking-2026" aria-labelledby="ranking-title">
            <div className="page-rule">
              <div className="page-rule-text">02 · 2026 ranking</div>
            </div>
            <div className="section-num">02 — Top hematology market research companies</div>
            <h2 className="section-title" id="ranking-title">
              Ranked by the job, <em>not by headcount.</em>
            </h2>
            <p className="section-lede">
              This ranking is for hematology commercial, medical, and access teams who need treatment-pattern evidence —
              not a list of the largest data vendors. Direct answer:{' '}
              <strong>
                BioNixus is #1 for custom subtype- and line-level PRFs and patient-share trackers, including benign
                hematology and MENA; IQVIA is #1 for unit volume and syndicated panel reads.
              </strong>
            </p>
            <div className="matrix-scroll">
              <table className="matrix">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Firm</th>
                    <th>Best for</th>
                    <th>Limit in hematology</th>
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
              Clarivate (DRG), GlobalData, and Evaluate remain useful for pipeline, epidemiology, and forecast desk
              research. They are not listed above because they do not field physician-sourced patient records. Vendor
              descriptions reflect publicly characterised products as of September 2026.
            </p>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="bionixus-vs-iqvia" aria-labelledby="compare-title">
            <div className="page-rule">
              <div className="page-rule-text">03 · BioNixus vs IQVIA</div>
            </div>
            <div className="section-num">03 — The comparison that matters</div>
            <h2 className="section-title" id="compare-title">
              Volume is necessary. <em>A fallout panel is not a launch file.</em>
            </h2>
            <p className="section-lede">
              Use IQVIA when you need the market’s size in units, or a harmonised cross-country read from a syndicated
              panel. Use BioNixus when you need the <strong>hematology patient</strong> behind those units — diagnosis,
              risk, history, new versus current, and brand share among treated patients — recruited to quota in the
              markets you are actually launching in.
            </p>
            <div className="choice-grid">
              <article className="choice-card a">
                <div className="choice-hd">
                  <strong>IQVIA</strong>
                  <span>Audit + syndicated panel</span>
                </div>
                <div className="choice-body">
                  <div className="choice-kicker">Unit of observation</div>
                  <div className="choice-amt">The vial — or the fallout record</div>
                  <ul>
                    <li>Sell-in, sell-out, hospital and retail audits</li>
                    <li>SKU / molecule share of units across channels</li>
                    <li>Oncology Dynamics: anonymised records from a two-week window each quarter</li>
                    <li>Projected to treated prevalence in 20+ countries</li>
                    <li>Same questionnaire and quotas for every subscriber</li>
                  </ul>
                </div>
                <div className="choice-foot">
                  Answers: “How much moved, and what did the panel see?” Does not answer: “Who is newly relapsed in Riyadh
                  this quarter, and what did the hematologist choose instead of you?”
                </div>
              </article>
              <article className="choice-card b">
                <div className="choice-hd">
                  <strong>BioNixus</strong>
                  <span>Custom subtype-level patients</span>
                </div>
                <div className="choice-body">
                  <div className="choice-kicker">Unit of observation</div>
                  <div className="choice-amt">The PRF, recruited to your quota</div>
                  <ul>
                    <li>Anonymous Patient Record / Request Forms scoped to your diagnoses and lines</li>
                    <li>Full history — diagnosis, risk, cytogenetics, transplant, MRD, every prior line</li>
                    <li>New (incident / newly relapsed) and current (continuing) quotas set by design</li>
                    <li>Brand trackers as share of treated patients, by subtype and line</li>
                    <li>Benign hematology and MENA / GCC centers in the same programme</li>
                  </ul>
                </div>
                <div className="choice-foot">
                  Answers: “Who is actually treated, with what, and why — including first presentation and first relapse
                  this wave, in the markets that matter to you.”
                </div>
              </article>
            </div>
            <h3 className="subhead">Capability matrix — hematology commercial use</h3>
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
                    <td>National unit / vial sales</td>
                    <td>Core product</td>
                    <td>Not the offer — we sit beside it</td>
                  </tr>
                  <tr>
                    <td>Diagnosis split of a multi-indication molecule</td>
                    <td>Not in the audit; partial via Oncology Dynamics where the panel runs</td>
                    <td>Coded on every PRF</td>
                  </tr>
                  <tr className="rec">
                    <td>Anonymous PRF with full patient history</td>
                    <td>Panel records from a two-week fallout window</td>
                    <td>Custom full-history instrument, scoped to your indications</td>
                  </tr>
                  <tr className="rec">
                    <td>New cases vs current / continuing cases</td>
                    <td>Not a recruitment quota</td>
                    <td>Quota-controlled recruitment</td>
                  </tr>
                  <tr className="rec">
                    <td>Brand tracker (share of patients, not vials)</td>
                    <td>Panel projections in 20+ markets</td>
                    <td>Wave tracker in your markets, including MENA</td>
                  </tr>
                  <tr>
                    <td>Rare subtypes and later lines (e.g., post-CAR-T myeloma, TP53-mutated CLL)</td>
                    <td>Samples can be small; “Boost” add-on sold to fill them</td>
                    <td>Recruited to quota by design</td>
                  </tr>
                  <tr>
                    <td>Benign hematology (hemophilia, SCD, thalassemia, ITP, PNH)</td>
                    <td>Outside the oncology panel</td>
                    <td>Same PRF discipline; HTC and transplant-center fieldwork</td>
                  </tr>
                  <tr>
                    <td>MENA / GCC / emerging hematology launches</td>
                    <td>Audit coverage varies; panel list does not reach most of MENA</td>
                    <td>Field teams at hospital and subtype level</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bundle-banner">
              <h3>They are not competitors for the same invoice</h3>
              <p>
                Sophisticated hematology teams buy IQVIA for volume and a harmonised global read, and BioNixus for the
                patient in their launch markets. Trouble starts when a board is shown vial share and told it is
                line-of-therapy share — or when a new myeloma entrant’s “market” is counted as every unit of a molecule
                that also treats lymphoma and MDS. BioNixus exists so that conversation stops.
              </p>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0" id="what-bionixus-fields" aria-labelledby="instruments-title">
            <div className="page-rule">
              <div className="page-rule-text">04 · What BioNixus fields</div>
            </div>
            <div className="section-num">04 — PRF, recruitment, brand tracker</div>
            <h2 className="section-title" id="instruments-title">
              Three instruments. <em>One hematology file.</em>
            </h2>
            <p className="section-lede">
              Every record is anonymised. No name, no hospital ID, no national identifier. The treating hematologist
              completes the form from the chart. GDPR and local research ethics rules apply. Blood cancers are scoped
              alongside our{' '}
              <Link to="/healthcare-market-research/therapy/oncology">oncology therapy market research</Link>; inherited
              blood disorders sit with{' '}
              <Link to="/healthcare-market-research/therapy/rare-diseases">rare disease market research</Link>.
            </p>
            <div className="phases">
              <div className="phase">
                <div className="num">INSTRUMENT 1</div>
                <h3>Anonymous PRF</h3>
                <ul>
                  <li>Patient Record / Request Form</li>
                  <li>Full history: presentation → diagnosis → every line</li>
                  <li>Classification, risk score, cytogenetics / molecular</li>
                  <li>Transplant status, CAR-T / bispecific exposure, MRD</li>
                  <li>Current regimen and intent</li>
                </ul>
              </div>
              <div className="phase p2">
                <div className="num">INSTRUMENT 2</div>
                <h3>Case recruitment</h3>
                <ul>
                  <li>New cases — first diagnosis or first relapse this period</li>
                  <li>Current cases — continuing on treatment</li>
                  <li>Separate quotas so incident is not drowned by long-surviving prevalent</li>
                  <li>Diagnosis, risk-group, and line screens</li>
                  <li>Physician-verified, not a panel fallout</li>
                </ul>
              </div>
              <div className="phase p3">
                <div className="num">INSTRUMENT 3</div>
                <h3>Brand tracker</h3>
                <ul>
                  <li>Share of treated patients, by diagnosis and line</li>
                  <li>Share of new starts vs continuing</li>
                  <li>CAR-T, bispecific, and gene-therapy sequencing</li>
                  <li>Prophylaxis vs on-demand · factor vs non-factor</li>
                  <li>Waves — not a one-off audit</li>
                </ul>
              </div>
              <div className="phase p4">
                <div className="num">LAYER</div>
                <h3>Center &amp; subtype</h3>
                <ul>
                  <li>Transplant center, HTC, or general hematology — not a country blob</li>
                  <li>Diagnosis coded, not inferred from SKU</li>
                  <li>Optional KOL / MDT / tumor-board overlay</li>
                  <li>Aligns to IQVIA units or syndicated share if you hold both</li>
                  <li>Dashboard for medical + brand</li>
                </ul>
              </div>
            </div>
            <h3 className="subhead">Illustrative PRF spine — what “full history” means in hematology</h3>
            <div className="rq-blueprint">
              <div className="rq-bp-hd">
                <div>
                  <div className="rq-bp-eyebrow">Anonymous · physician-completed · no identifiers</div>
                  <div className="rq-bp-title">Patient Record Form — hematology core fields</div>
                </div>
                <div className="rq-bp-pills">
                  <span className="rq-pill rec">Subtype</span>
                  <span className="rq-pill">New / current</span>
                  <span className="rq-pill">Tracker-ready</span>
                </div>
              </div>
              <div className="rq-row hdr">
                <div />
                <div>Block</div>
                <div>What is captured</div>
                <div>Why an audit cannot</div>
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
              Keep IQVIA for volume. <em>Buy BioNixus for the patient.</em>
            </h2>
            <div className="why-grid">
              <div className="why-cell">
                <div className="n">01</div>
                <h3>Buy IQVIA when</h3>
                <p>
                  You need national or regional unit sales, channel mix, and a long time series — or a harmonised
                  cross-country panel read in the 20+ markets Oncology Dynamics covers. Supply, tender, and finance will
                  keep asking for it.
                </p>
              </div>
              <div className="why-cell">
                <div className="n">02</div>
                <h3>Buy BioNixus when</h3>
                <p>
                  The same molecule treats more than one blood cancer, you must separate new starts from continuing
                  patients, the subgroup you care about is too rare for a fallout panel, the indication is benign
                  hematology, or the market is in MENA.
                </p>
              </div>
              <div className="why-cell">
                <div className="n">03</div>
                <h3>Buy both when</h3>
                <p>
                  You are launching or defending in hematology. Reconcile BioNixus patient share to IQVIA units so
                  medical, brand, and finance argue from one file — two resolutions, not two stories.
                </p>
              </div>
              <div className="why-cell">
                <div className="n">04</div>
                <h3>Do not buy surveys alone</h3>
                <p>
                  HCP “share of mention” is not a PRF. Attitude surveys are strong at message and perception. They do
                  not replace documented history, MRD status, and incident/prevalent quotas.
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
              Profiles below are assessed by the hematology job, not corporate revenue. Select on unit of observation
              first — vial, syndicated panel record, custom chart, or access dossier.
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
              <Link className="related-card" to="/insights/top-oncology-market-research-companies-2026">
                <h3>Top oncology market research companies</h3>
                <p>The solid-tumor companion ranking: indication-level PRFs versus pack data.</p>
              </Link>
              <Link className="related-card" to="/healthcare-market-research/therapy/oncology">
                <h3>Oncology therapy area research</h3>
                <p>BioNixus hemato-oncology capability, methodology, and in-region execution.</p>
              </Link>
              <Link className="related-card" to="/insights/best-rare-disease-market-research-companies-2026">
                <h3>Best rare disease market research companies</h3>
                <p>Where hemophilia, PNH, and inherited blood disorders sit as orphan indications.</p>
              </Link>
              <Link className="related-card" to="/insights/top-healthcare-market-research-companies-saudi-arabia-2026">
                <h3>Healthcare market research companies — KSA</h3>
                <p>Country ranking for the Gulf’s largest hematology and transplant market.</p>
              </Link>
            </div>
          </section>

          <section className="onco-wrap onco-pad pt-0">
            <div className="closing-sign">
              <h2>
                If your hematology file is still <em>a shipment cube</em>, you do not have the market.
              </h2>
              <p>
                BioNixus fields anonymous PRFs with full patient history, recruits new and current cases to quota, and
                tracks brands as share of treated patients — by diagnosis and line, across blood cancers and inherited
                blood disorders. IQVIA remains the volume layer. Syndicated monitors remain the global read. We are the
                custom patient layer in your launch markets. Request a proposal and we will map which diagnoses, lines,
                centers, and waves you need before the next forecast cycle.
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
                market="hematology"
                ctaId="hematology-listicle-2026"
                ctaLocation="hematology_listicle_footer"
                className="text-left bg-white"
              />
            </div>
            <p className="note-line mt-4">
              Ranking reflects fit for hematology treatment-pattern and brand-tracker work, not corporate revenue. IQVIA,
              Oracle Life Sciences, Adelphi Real World, and OPEN Health are independent organisations; descriptions
              of their products are based on publicly characterised offerings (company fact sheets, published methodology,
              and peer-reviewed studies citing them) and buyer practice as of September 2026, not a paid audit of each
              firm. Product names are trademarks of their respective owners. PRFs contain no patient identifiers. BioNixus
              does not provide legal, medical, or regulatory advice.
            </p>
          </section>
        </article>

        <RelatedPages
          currentSlug="hematology-global"
          relatedCountries={['saudi-arabia', 'uae', 'uk']}
          relatedTherapies={['oncology', 'rare-diseases']}
        />
      </main>
      <Footer />
    </div>
  );
}
