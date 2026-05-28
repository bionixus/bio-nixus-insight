import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Oman Healthcare Market Report', href: '/oman-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Oman healthcare market in 2026?',
    answer:
      'The Oman healthcare market is estimated at USD 5.5–6.5 billion in 2026, growing at approximately 6.2% CAGR through 2030. Government healthcare expenditure accounts for approximately 70% of total spend, funded through Oman\'s oil revenues and supplemented by growing employer and private health insurance. Oman\'s population of 4.9 million — including a large expatriate workforce — creates a diverse healthcare demand profile.',
  },
  {
    question: 'What is the Oman pharmaceutical market size in 2026?',
    answer:
      'The Oman pharmaceutical market is estimated at USD 520–580 million in 2026, growing at 6.5–7% CAGR. MOH Central Medical Stores supplies government hospitals; private pharmacies and private hospital chains serve the remainder. Oman imports approximately 97% of pharmaceutical requirements — local manufacturing is limited to a small number of generic producers. Branded specialty pharmaceuticals in oncology, diabetes, and cardiovascular disease represent the highest-value market segments.',
  },
  {
    question: 'How does MOH Oman pharmaceutical procurement and registration work?',
    answer:
      'The Directorate General of Pharmaceutical Affairs and Drug Control at MOH Oman manages drug registration. Registration follows a technical dossier review process aligned with WHO standards; CE or FDA clearance and reference registration in ICH countries expedite review. Timelines range from 12–24 months for initial registration. Formulary listing at MOH Central Medical Stores follows registration and requires a local agent with an active import license. BioNixus tracks MOH Oman registration status and formulary listing timelines across therapeutic categories.',
  },
  {
    question: 'What is driving pharmaceutical market growth in Oman?',
    answer:
      'Oman pharmaceutical market growth is driven by: (1) chronic disease burden — diabetes (19%), cardiovascular disease, and cancer incidence all exceed global averages; (2) Vision 2040\'s commitment to expanding health insurance coverage to all Oman residents, increasing retail pharmacy channel value; (3) private hospital sector growth as Aster, Badr Al Samaa, and international hospital groups expand specialty capacity; and (4) increased awareness and early diagnosis driven by national screening programs.',
  },
  {
    question: 'Which therapy areas have the highest growth potential in Oman?',
    answer:
      'Oncology is Oman\'s fastest-growing pharmaceutical therapy area — the Sultan Qaboos Comprehensive Cancer Care and Research Centre expansion is creating new consumption capacity. Diabetes management (GLP-1 receptor agonists, insulin intensification) is structurally large given ~19% adult prevalence. Rare diseases have growing attention through Royal Hospital\'s genetics program. Immunology and biologics are expanding as private insurance formularies broaden coverage of specialty drugs.',
  },
  {
    question: 'How does BioNixus conduct pharmaceutical market research in Oman?',
    answer:
      'BioNixus conducts Oman pharmaceutical market research through primary physician surveys across specialist panels at Royal Hospital, Sultan Qaboos University Hospital, and private hospital groups. Programs include quantitative HCP surveys (oncology, endocrinology, cardiology, rheumatology), qualitative KOL interviews, MOH registration and formulary tracking, and competitive consumption intelligence. Oman is covered both as part of GCC-wide programs and as standalone country engagements.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/oman-healthcare-market-report');
const FAQ_SECTION_ID = 'oman-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Oman Healthcare Market Report 2026: Pharmaceutical Intelligence and Market Access',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/oman-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/oman-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

const OmanHealthcareMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Oman Healthcare Market Report 2026 | Pharma Market Size & MOH Access Intelligence | BioNixus"
        description="Oman healthcare market at USD 5.5–6.5B in 2026. Pharmaceutical market (USD 550M), MOH registration, Vision 2040 healthcare privatization, therapy area analysis, and BioNixus primary HCP research."
        canonical="https://www.bionixus.com/oman-healthcare-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-oman-healthcare-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

        <section className="section-padding pb-10">
          <div className="container-wide max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              Published by BioNixus · Updated May 2026 · Open access
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Oman Healthcare Market Report 2026: Pharmaceutical Intelligence, MOH Access, and Vision 2040 Strategy
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus delivers Oman pharmaceutical consumption intelligence, MOH registration tracking, and
              primary HCP research across Royal Hospital, Sultan Qaboos University Hospital, and Oman's
              growing private hospital sector.
            </p>
            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$6B</p><p className="text-xs text-muted-foreground mt-1">Oman healthcare market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$550M</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">6.2%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oman offers pharmaceutical commercial teams a less saturated competitive environment than Saudi
              Arabia or UAE, with strong specialist loyalty and MOH procurement cycles that create predictable
              access windows. Vision 2040's private sector participation targets are gradually diversifying the
              procurement landscape, adding private hospital and insurance-funded channels to the previously
              government-dominated market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See also:{' '}
              <Link to="/oman-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Oman Medical Devices Market Report
              </Link>
              {' '}and the{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <section className="section-padding" id="therapy-areas">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Oman Pharmaceutical Therapy Areas 2026</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { area: 'Oncology', note: 'Sultan Qaboos Comprehensive Cancer Centre expansion driving infusion drug demand. BioNixus oncologist panel active at Royal Hospital and SQUH.' },
                { area: 'Diabetes', note: '~19% adult diabetes prevalence. GLP-1 and insulin intensification demand growing. MOH national diabetes program prioritizes treatment access.' },
                { area: 'Cardiovascular', note: 'CVD is the leading cause of mortality. Anticoagulants, statins, and antihypertensives represent the largest pharmaceutical volume category.' },
                { area: 'Rare Diseases', note: 'Royal Hospital\'s genetics program manages growing rare disease patient population. Orphan drug programs require patient-level consumption data.' },
                { area: 'Respiratory', note: 'COPD and asthma burden driven by aging population and indoor air quality factors. Biologic therapy adoption growing at Royal Hospital.' },
                { area: 'Mental Health', note: 'Growing recognition of mental health burden; psychiatry capacity expansion at Al Masarra Hospital and private sector.' },
              ].map(({ area, note }) => (
                <div key={area} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{area}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Oman healthcare market 2026 — pharma, MOH access, Vision 2040, and therapy area FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default OmanHealthcareMarketReport;
