import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { ArrowRight } from 'lucide-react';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { MarketIntelligenceSections } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { finalizeStandaloneHealthcareFaqs } from '@/data/standaloneCountryReportContent';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Bahrain Healthcare Market Report', href: '/bahrain-healthcare-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneHealthcareFaqs([
  {
    question: 'How big is the Bahrain healthcare market in 2026?',
    answer:
      'The Bahrain healthcare market is estimated at USD 2.5–3.0 billion in 2026, growing at approximately 5.5% CAGR through 2030. Government healthcare spending accounts for approximately 65% of total expenditure, with a growing private sector share driven by insurance penetration and medical tourism. Despite its small size relative to Saudi Arabia or UAE, Bahrain benefits from high per-capita healthcare spending and serves as a regional hub for financial sector and expatriate communities.',
  },
  {
    question: 'What is the Bahrain pharmaceutical market size in 2026?',
    answer:
      'The Bahrain pharmaceutical market is estimated at USD 420–480 million in 2026, with government procurement through MOH Bahrain and private retail pharmacy channels each accounting for significant shares. Bahrain imports virtually all pharmaceutical requirements. The NHRA mutual recognition framework for products registered in Saudi Arabia or UAE creates an advantageous regulatory entry pathway that reduces the time and cost of achieving Bahrain pharmaceutical market access.',
  },
  {
    question: 'How does NHRA Bahrain pharmaceutical registration work?',
    answer:
      'The National Health Regulatory Authority (NHRA) of Bahrain manages pharmaceutical registration through two pathways: (1) Mutual recognition — products registered with SFDA (Saudi Arabia) or MOHAP (UAE) can apply for expedited Bahrain registration, typically completing in 3–9 months; (2) Standalone registration — standard technical dossier review, typically 12–18 months. NHRA aligns with ICH guidelines and accepts evidence packages prepared to international standards. BioNixus tracks NHRA registration outcomes and MOH formulary listing timelines.',
  },
  {
    question: 'What role does Bahrain play in a GCC pharmaceutical launch strategy?',
    answer:
      'Bahrain typically enters a GCC launch sequence as the third or fourth market, after Saudi Arabia and UAE, leveraging mutual recognition to minimize incremental registration cost. Its strategic value lies in: (1) completing GCC market coverage for insurance reporting and regional commercial metrics; (2) capturing the Saudi Eastern Province cross-border patient flow; (3) serving as a regulatory reference for further regional expansion into markets that accept GCC registrations. BioNixus advises on Bahrain sequencing within broader GCC market entry strategies.',
  },
  {
    question: 'What are the leading therapy areas in Bahrain?',
    answer:
      'Cardiovascular disease, diabetes, and oncology are Bahrain\'s three highest-value pharmaceutical therapy areas. Bahrain has a genetic disease burden comparable to Kuwait, with elevated rates of thalassaemia and familial hypercholesterolaemia. Rare disease programs at King Hamad University Hospital are growing. Immunology and biologics are expanding as private insurance coverage of specialty drugs improves.',
  },
  {
    question: 'How does BioNixus conduct Bahrain pharmaceutical market research?',
    answer:
      'BioNixus covers Bahrain as part of GCC-wide research programs, typically paired with Saudi Arabia given geographic and patient population overlap. Primary HCP research is conducted with Bahraini specialists across MOH hospitals, Bahrain Defense Force Hospital, and private facilities. Programs include physician surveys, KOL interviews, NHRA registration tracking, and payer access research. Bahrain-specific programs are available for clients with country-specific requirements.',
  },
], 'bahrain');

const REPORT_CONVERSION = getStandaloneReportConfig('/bahrain-healthcare-market-report');
const FAQ_SECTION_ID = 'bahrain-healthcare-market-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bahrain Healthcare Market Report 2026: Pharma, NHRA Registration, and GCC Market Access',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/bahrain-healthcare-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/bahrain-healthcare-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: "Bahrain Healthcare Market Report 2026 | NHRA Registration & GCC Pharma Access | BioNixus",
    pageMetaDescription: "Bahrain healthcare market at USD 2.5–3B in 2026. NHRA pharmaceutical registration (mutual recognition from SFDA/MOHAP), pharma market size, therapy areas, and BioNixus GCC market access intelligence.",
    countryName: "Bahrain",
    marketSlug: "bahrain",
    publishedDate: "2026-05-27",
    modifiedDate: "2026-05-27",
  })
];

const BahrainHealthcareMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead
        title="Bahrain Healthcare Market Report 2026 | NHRA Registration & GCC Pharma Access | BioNixus"
        description="Bahrain healthcare market at USD 2.5–3B in 2026. NHRA pharmaceutical registration (mutual recognition from SFDA/MOHAP), pharma market size, therapy areas, and BioNixus GCC market access intelligence."
        canonical="https://www.bionixus.com/bahrain-healthcare-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-bahrain-healthcare-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide"><BreadcrumbNav items={breadcrumbItems} /></div>
        </div>

                <ReportPremiumHero
          title="Bahrain Healthcare Market Report 2026: NHRA Registration, Pharmaceutical Intelligence, and GCC Market Access"
          description="BioNixus covers Bahrain pharmaceutical and healthcare markets as part of GCC-wide programs — NHRA mutual recognition strategy, MOH Bahrain procurement intelligence, and primary HCP research supporting GCC sequential market entry."
          config={REPORT_CONVERSION}
          marketSlug="bahrain"
          countryName="Bahrain"
          stats={[
            { value: '~$2.7B', label: 'Bahrain healthcare market 2026' },
            { value: '~$450M', label: 'Pharmaceutical market 2026' },
            { value: '5.5%', label: 'CAGR 2026–2030' },
          ]}
        />

        <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div><p className="text-3xl font-display font-bold text-primary">~$2.7B</p><p className="text-xs text-muted-foreground mt-1">Bahrain healthcare market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">~$450M</p><p className="text-xs text-muted-foreground mt-1">Pharmaceutical market 2026</p></div>
                <div><p className="text-3xl font-display font-bold text-primary">5.5%</p><p className="text-xs text-muted-foreground mt-1">CAGR 2026–2030</p></div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bahrain's primary value in a GCC commercial strategy is regulatory efficiency. NHRA's mutual
              recognition pathway — accepting SFDA and MOHAP registrations — means that pharmaceutical and
              device companies already launched in Saudi Arabia or UAE can complete Bahrain registration in
              a fraction of the time and cost of standalone applications. This makes Bahrain an attractive
              market to include in sequential GCC rollout plans.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See also:{' '}
              <Link to="/bahrain-medical-devices-market-report" className="text-primary hover:underline font-medium">
                Bahrain Medical Devices Market Report
              </Link>
              {' '}and the{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>.
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>


        <MarketIntelligenceSections marketSlug="bahrain" countryName="Bahrain" variant="healthcare" />
        <section className="section-padding" id="nhra-access">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              NHRA Bahrain: Regulatory Access Advantage
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Mutual recognition from SFDA', body: 'Products with current SFDA registration can apply for NHRA Bahrain recognition. Technical dossiers and clinical evidence submitted to SFDA are accepted. Typical timelines: 3–9 months. This is the most efficient Bahrain entry pathway for Saudi-registered products.' },
                { title: 'Mutual recognition from MOHAP UAE', body: 'Products registered with UAE Ministry of Health and Prevention qualify for NHRA mutual recognition. Particularly relevant for products launched in UAE before Saudi Arabia.' },
                { title: 'Standalone NHRA registration', body: 'For products not yet registered in Saudi Arabia or UAE, standalone NHRA registration follows ICH CTD format and requires a local agent. Typical timelines: 12–18 months. NHRA is generally considered an efficient regulator with good communication.' },
              ].map(({ title, body }) => (
                <div key={title} className="bg-primary/5 rounded-xl border border-primary/20 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection sectionId={FAQ_SECTION_ID} title="Bahrain healthcare market 2026 — NHRA registration, pharma access, and GCC launch strategy FAQ" items={REPORT_FAQ_ITEMS} className="bg-muted/30" />
        </ReportContentWithAside>
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>
      <Footer />
    </div>
  );
};

export default BahrainHealthcareMarketReport;
