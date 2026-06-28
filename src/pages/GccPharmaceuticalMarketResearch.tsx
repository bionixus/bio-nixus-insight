import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero, ReportPremiumSection } from '@/components/report-premium';

const pageUrl = 'https://www.bionixus.com/gcc-pharmaceutical-market-research';
const REPORT_CONVERSION = getStandaloneReportConfig('/gcc-pharmaceutical-market-research');

const PAGE_TITLE = 'GCC Biologics & Generic Injectables Market 2026 | BioNixus';
const PAGE_H1 =
  'GCC Biologics & Generic Injectables Market Research 2026 — Precision Medicine & Drug Repurposing';
const PAGE_DESCRIPTION =
  'GCC biologics market ($4.8–5.4B), generic injectables ($1.6–1.9B), drug repurposing & Saudi precision medicine — pharmaceutical market research across KSA, UAE, Kuwait, Qatar, Bahrain & Oman.';

const FAQ_ITEMS = [
  {
    question: 'What is the size of the GCC biologics market in 2026?',
    answer:
      'The GCC biologics market is estimated at USD 4.8–5.4 billion in 2026, driven by Saudi Arabia (~55% of regional spend) and the UAE (~20%). Growth is concentrated in oncology, autoimmune, and diabetes biologics, with biosimilar penetration accelerating after SFDA and MOHAP pathways matured in 2024–2025.',
  },
  {
    question: 'How big is the GCC generic injectables market?',
    answer:
      'The GCC generic injectables market is approximately USD 1.6–1.9 billion in 2026, with Saudi Arabia and the UAE accounting for the majority of hospital-administered volume. Demand is shaped by NUPCO tendering in KSA, MOHAP listing in the UAE, and a growing focus on local manufacturing under Vision 2030.',
  },
  {
    question: 'What is the GCC drug repurposing market opportunity?',
    answer:
      'GCC drug repurposing is an emerging opportunity driven by oncology, rare disease, and metabolic indications. Saudi Arabia and the UAE both fund repurposing through R&D grants and public–private partnerships. BioNixus tracks repurposing pipelines, payer appetite, and physician adoption signals across the six GCC markets.',
  },
  {
    question: 'How is the Saudi Arabia precision medicine market evolving?',
    answer:
      'Saudi Arabia precision medicine is one of the fastest-growing GCC subsegments, with the Saudi Genome Program, Vision 2030 health pillar, and SFDA companion-diagnostic guidance driving adoption. Oncology, rare disease, and pharmacogenomics are the most active therapy areas, supported by King Faisal, King Abdulaziz Medical City, and major academic networks.',
  },
  {
    question: 'How does BioNixus support GCC pharmaceutical market research?',
    answer:
      'BioNixus runs primary physician and KOL research, quantitative tracker programs, market access and pricing studies, KOL mapping, and competitive intelligence across Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain, and Oman. Programs are bilingual (Arabic/English), SFDA/MOHAP-aware, and aligned to launch, access, and growth decision windows.',
  },
  {
    question: 'Which GCC therapy areas drive the most pharma growth in 2026?',
    answer:
      'In 2026, the fastest-growing GCC therapy areas are oncology, diabetes and obesity (GLP-1 driven), rare disease, immunology, and cardiovascular. Saudi Arabia and the UAE concentrate the bulk of innovative-medicine spend, while Kuwait and Qatar prioritize tendered generic and hospital-administered portfolios.',
  },
];

const FAQ_SECTION_ID = 'gcc-pharma-research-faq';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'GCC Pharmaceutical Market Research', item: pageUrl },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_H1,
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    datePublished: '2025-09-01',
    dateModified: '2026-06-28',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${pageUrl}#${FAQ_SECTION_ID}`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

const SEGMENT_ROWS = [
  {
    segment: 'GCC biologics market',
    size2026: 'USD 4.8–5.4B',
    growth: '8–11% CAGR',
    leadMarkets: 'Saudi Arabia, UAE',
    drivers: 'Oncology, immunology, GLP-1 diabetes; biosimilar uptake post-SFDA/MOHAP pathways',
  },
  {
    segment: 'GCC generic injectables market',
    size2026: 'USD 1.6–1.9B',
    growth: '6–9% CAGR',
    leadMarkets: 'Saudi Arabia, UAE, Kuwait',
    drivers: 'NUPCO tenders, hospital-administered volume, local manufacturing incentives',
  },
  {
    segment: 'GCC drug repurposing',
    size2026: 'Emerging (no single audited total)',
    growth: 'Pipeline-led',
    leadMarkets: 'Saudi Arabia, UAE',
    drivers: 'Oncology, rare disease, metabolic; academic–industry PPP grants',
  },
  {
    segment: 'Saudi Arabia precision medicine',
    size2026: 'Fastest GCC subsegment',
    growth: '15%+ in genomics-guided oncology',
    leadMarkets: 'Riyadh, Jeddah academic networks',
    drivers: 'Saudi Genome Program, SFDA companion diagnostics, Vision 2030 health pillar',
  },
];

const COUNTRY_BREAKDOWN = [
  {
    country: 'Saudi Arabia',
    share: '~46% GCC pharma spend',
    focus: 'NUPCO tendering, SFDA biologics/biosimilars, precision medicine at KFSH&RC and NGHA clusters',
    link: '/healthcare-market-research/saudi-arabia',
    linkLabel: 'Healthcare market research Saudi Arabia',
  },
  {
    country: 'United Arab Emirates',
    share: '~22% GCC pharma spend',
    focus: 'MOHAP/DHA/DOH listing, private hospital branded uptake, Dubai–Abu Dhabi launch sequencing',
    link: '/healthcare-market-research/uae',
    linkLabel: 'Healthcare market research UAE',
  },
  {
    country: 'Kuwait',
    share: '~8% GCC pharma spend',
    focus: 'MOH tender stores, hospital injectables, distributor-led retail pharmacy',
    link: '/healthcare-market-research/kuwait',
    linkLabel: 'Healthcare market research Kuwait',
  },
  {
    country: 'Qatar, Bahrain, Oman',
    share: '~24% combined',
    focus: 'MOPH/NHRA/MOH registration, Hamad and NHRA mutual recognition, smaller tender calendars',
    link: '/healthcare-market-research/qatar',
    linkLabel: 'Healthcare market research Qatar',
  },
];

export default function GccPharmaceuticalMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={pageUrl}
        jsonLd={jsonLd}
      />
      <Navbar />
      <ReportReadingProgress progressId="report-rp-gcc-pharmaceutical-market-research" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: 'GCC Pharmaceutical Market Research', href: '/gcc-pharmaceutical-market-research' },
              ]}
            />
          </div>
        </div>

        <ReportPremiumHero
          title={PAGE_H1}
          description={
            <>
              <p>
                GCC pharmaceutical market research for launch, access, and growth across Saudi Arabia, the UAE,
                Kuwait, Qatar, Bahrain, and Oman. This page covers the four sub-segments where the regional market is
                moving fastest in 2026: the{' '}
                <strong className="font-medium text-foreground">GCC biologics market</strong>, the{' '}
                <strong className="font-medium text-foreground">GCC generic injectables market</strong>,{' '}
                <strong className="font-medium text-foreground">GCC drug repurposing</strong>, and the{' '}
                <strong className="font-medium text-foreground">Saudi Arabia precision medicine market</strong>.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                For open-access market sizing and hospital consumption intelligence, see the{' '}
                <Link to="/gcc-pharma-market-report-2026" className="text-primary font-medium hover:underline">
                  GCC pharma market report 2026
                </Link>
                . For country and therapy programmes, use the{' '}
                <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                  healthcare market research hub
                </Link>
                .
              </p>
            </>
          }
          config={REPORT_CONVERSION}
          marketSlug="gcc"
          countryName="GCC"
          stats={[
            { value: '$4.8–5.4B', label: 'GCC biologics market 2026' },
            { value: '$1.6–1.9B', label: 'Generic injectables 2026' },
            { value: '6 markets', label: 'GCC country coverage' },
          ]}
        />

        <section className="section-padding py-10 bg-background border-b border-border/60">
          <div className="container-wide max-w-5xl">
            <GeoLLMAnswerBlock
              question="What is the GCC biologics and generic injectables market size in 2026?"
              answer="BioNixus estimates the GCC biologics market at USD 4.8–5.4 billion and the GCC generic injectables market at USD 1.6–1.9 billion in 2026. Saudi Arabia accounts for roughly 55% of biologics spend and the UAE about 20%; hospital-administered injectables are shaped by NUPCO tendering in KSA and MOHAP listing in the UAE."
              points={[
                {
                  title: 'GCC biologics market',
                  description:
                    'Oncology, immunology, and GLP-1 diabetes biologics; biosimilar penetration accelerating after SFDA and MOHAP interchangeability guidance.',
                },
                {
                  title: 'GCC generic injectables market',
                  description:
                    'Hospital-administered segment driven by centralized tenders — NUPCO in Saudi Arabia, MOHAP and emirate listing in the UAE.',
                },
                {
                  title: 'Saudi Arabia precision medicine',
                  description:
                    'Saudi Genome Program and SFDA companion-diagnostic pathways driving genomics-guided oncology and rare-disease launches.',
                },
                {
                  title: 'GCC drug repurposing',
                  description:
                    'Emerging oncology and rare-disease opportunity funded through Vision 2030 and UAE life-sciences grants.',
                },
              ]}
              summary="For segment-level hospital consumption data, see the GCC pharma market report 2026 and immunology/biosimilars market reports linked below."
            />
          </div>
        </section>

        <ReportContentWithAside
          config={REPORT_CONVERSION}
          tocItems={[
            { href: '#segment-table', label: 'Segment sizing' },
            { href: '#country-breakdown', label: 'Country breakdown' },
            { href: '#priority-segments', label: 'Priority segments' },
            { href: '#research-approach', label: 'Research approach' },
            { href: '#regulatory-landscape', label: 'Regulatory landscape' },
            { href: '#related-resources', label: 'Related resources' },
            { href: `#${FAQ_SECTION_ID}`, label: 'FAQ' },
          ]}
        >
          <ReportPremiumSection id="segment-table" title="GCC pharmaceutical segment sizing (2026 reference)" variant="cream">
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
              The table below maps the four GSC query clusters —{' '}
              <strong className="text-foreground">gcc biologics market</strong>,{' '}
              <strong className="text-foreground">gcc generic injectables market</strong>,{' '}
              <strong className="text-foreground">gcc drug repurposing market</strong>, and{' '}
              <strong className="text-foreground">saudi arabia precision medicine market</strong> — to BioNixus
              macro reference points. Use it to align launch, access, and tender-defence planning with the segments
              that concentrate regional spend.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-left p-3 font-semibold text-foreground">Segment</th>
                    <th className="text-left p-3 font-semibold text-foreground">2026 size</th>
                    <th className="text-left p-3 font-semibold text-foreground">Growth</th>
                    <th className="text-left p-3 font-semibold text-foreground">Lead markets</th>
                    <th className="text-left p-3 font-semibold text-foreground hidden lg:table-cell">Key drivers</th>
                  </tr>
                </thead>
                <tbody>
                  {SEGMENT_ROWS.map((row) => (
                    <tr key={row.segment} className="border-b border-border/60 last:border-0">
                      <td className="p-3 font-medium text-foreground">{row.segment}</td>
                      <td className="p-3 text-muted-foreground">{row.size2026}</td>
                      <td className="p-3 text-muted-foreground">{row.growth}</td>
                      <td className="p-3 text-muted-foreground">{row.leadMarkets}</td>
                      <td className="p-3 text-muted-foreground hidden lg:table-cell">{row.drivers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection id="country-breakdown" title="GCC country breakdown for pharmaceutical market research">
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
              Gulf markets share Arabic-language touchpoints and GCC coordination on several policy themes, but payer
              logic, hospital procurement, and retail pharmacy dynamics diverge materially between Riyadh, Dubai, Doha,
              and Manama. Effective GCC pharmaceutical market research sequences evidence by country — not as a single
              regional average.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {COUNTRY_BREAKDOWN.map((row) => (
                <article key={row.country} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-1">{row.country}</h3>
                  <p className="text-xs font-medium text-primary mb-2">{row.share}</p>
                  <p className="text-sm text-muted-foreground mb-3">{row.focus}</p>
                  <Link
                    to={row.link}
                    className="text-sm text-primary font-semibold underline underline-offset-2 hover:no-underline"
                  >
                    {row.linkLabel}
                  </Link>
                </article>
              ))}
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection id="priority-segments" title="Priority GCC pharma segments in 2026" variant="muted">
            <div className="grid md:grid-cols-2 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">GCC biologics &amp; generic injectables market</h3>
                <p className="text-sm text-muted-foreground">
                  Saudi Arabia and the UAE concentrate most biologics and hospital injectables spend; tracker programmes
                  follow biosimilar penetration, NUPCO tenders, and MOHAP listing. For KSA specifics, combine this hub
                  with the{' '}
                  <Link
                    to="/market-reports/gcc-immunology-biologics-market-report"
                    className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
                  >
                    GCC immunology and biologics market report
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/market-reports/gcc-biosimilars-market-report"
                    className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
                  >
                    GCC biosimilars and generic injectables report
                  </Link>
                  .
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  Saudi Arabia precision medicine &amp; GCC drug repurposing
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Saudi Genome Program and SFDA companion-diagnostic guidance are unlocking precision-medicine
                  launches; regional drug-repurposing activity is rising in oncology and rare disease. See the{' '}
                  <Link
                    to="/market-reports/saudi-arabia-rare-diseases-market-report"
                    className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
                  >
                    Saudi Arabia rare diseases and precision medicine report
                  </Link>{' '}
                  for orphan and biomarker-defined programmes.
                </p>
              </article>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection
            id="research-approach"
            title="How GCC pharmaceutical market research differs from a generic regional study"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                Gulf markets share Arabic language touchpoints and Gulf Cooperation Council coordination on several
                policy themes, but payer logic, hospital procurement, and retail pharmacy dynamics still diverge
                materially between Riyadh, Dubai, Doha, and Manama. Effective GCC pharmaceutical market research
                therefore sequences evidence by country, aligns instruments to bilingual respondent preferences, and
                respects authority-specific confidentiality norms for physicians and payers.
              </p>
              <p>
                BioNixus designs modules for launch sequencing, pricing and access narratives, patient support program
                adoption, and competitive switching in crowded therapeutic classes. Where Saudi Vision 2030 reforms
                accelerate localization expectations, research must connect SFDA registration pathways to hospital
                formulary behavior and retail activation. Where UAE free-zone models influence access, interviews must
                capture both DHA and MOHAP realities alongside private hospital networks.
              </p>
              <p>
                Quantitative programs typically combine representative physician samples with clear screening for
                prescribing volume and institution type. Qualitative work layers KOL, payer, and pharmacist perspectives
                to explain why quantitative signals move—or stall—after policy announcements. Reporting should translate
                those signals into account lists, messaging guardrails, and scenario planning for leadership committees
                rather than stopping at chart decks.
              </p>
              <p>
                For medical device and IVD portfolios that sit alongside pharmaceutical launches, pair this page with
                the{' '}
                <Link to="/gcc-medical-devices-market-report" className="text-primary font-medium hover:underline">
                  GCC medical devices market report
                </Link>{' '}
                — hospital procurement intelligence for SFDA- and MOHAP-registered device categories often determines
                whether a combined pharma–device account strategy is feasible in the same institution.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection id="regulatory-landscape" title="GCC regulatory and access landscape (2026)" variant="cream">
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                Saudi Arabia&apos;s SFDA remains the dominant registration gateway for innovative medicines entering the
                Gulf. Biologics and biosimilars follow distinct MDR pathways; companion diagnostics for precision
                medicine require explicit SFDA alignment before hospital adoption at KFSH&RC, NGHA, and major MOH
                facilities. NUPCO centralized tendering shapes hospital-administered generic injectables — a product
                can be SFDA-approved yet remain commercially invisible if it misses tender windows or price corridors.
              </p>
              <p>
                In the UAE, MOHAP federal registration coexists with DHA (Dubai) and DOH (Abu Dhabi) emirate-specific
                requirements. Private hospital groups in Dubai often adopt branded biologics faster than MOH facilities,
                while Abu Dhabi&apos;s SEHA network follows distinct formulary committees. Kuwait&apos;s MOH tender stores
                and Qatar&apos;s Hamad Medical Corporation procurement operate independently — research programmes must
                map each authority&apos;s evidence expectations separately.
              </p>
              <p>
                BioNixus fieldwork is bilingual (Arabic/English), ESOMAR-compliant, and designed for adverse-event
                handling in HCP interviews. Outputs include stakeholder maps, adoption forecasts, pricing scenario
                libraries, and account-level tender calendars — the operational intelligence commercial and access teams
                need before committing launch sequencing across the six GCC markets.
              </p>
            </div>
          </ReportPremiumSection>

          <ReportPremiumSection id="related-resources" title="Related BioNixus resources" variant="muted">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/gcc-pharma-market-report-2026"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                GCC pharma market report 2026
              </Link>
              <Link
                to="/gcc-medical-devices-market-report"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                GCC medical devices &amp; IVD report
              </Link>
              <Link
                to="/bionixus-market-research-middle-east"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Middle East pharmaceutical market research
              </Link>
              <Link
                to="/healthcare-market-research/saudi-arabia"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Healthcare market research Saudi Arabia
              </Link>
              <Link
                to="/healthcare-market-research/uae"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Healthcare market research UAE
              </Link>
              <Link
                to="/pharmaceutical-companies-saudi-arabia"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Pharmaceutical companies in Saudi Arabia
              </Link>
              <Link
                to="/pharmaceutical-companies-uae"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Pharmaceutical companies in UAE
              </Link>
              <Link
                to="/healthcare-market-research-agency-gcc"
                className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Healthcare market research agency GCC
              </Link>
            </div>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </ReportPremiumSection>

          <FAQSection
            sectionId={FAQ_SECTION_ID}
            title="GCC pharmaceutical market — biologics, injectables, precision medicine & drug repurposing FAQ"
            items={FAQ_ITEMS}
            className="bg-muted/30 rounded-2xl px-4 md:px-6"
          />
        </ReportContentWithAside>

        <ReportConsultationBand config={REPORT_CONVERSION} />
      </main>
      <Footer />
    </div>
  );
}
