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
  { name: 'Saudi Arabia Medical Devices Market Report', href: '/saudi-arabia-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = [
  {
    question: 'How big is the Saudi Arabia medical devices market in 2026?',
    answer:
      'The Saudi Arabia medical devices market is valued at approximately USD 2.8–3.1 billion in 2026, having grown from USD 2.11 billion. Riyadh, Jeddah, and Dammam account for the majority of consumption, driven by hospital infrastructure expansion under Vision 2030 and rising chronic disease burden. Diagnostic devices and cardiovascular equipment represent the largest segments.',
  },
  {
    question: 'What are the largest medical device segments in Saudi Arabia?',
    answer:
      'Diagnostic devices lead the Saudi Arabia medical devices market, followed by therapeutic devices, surgical instruments, monitoring devices, and consumables. By application, cardiovascular is the dominant segment, with orthopedics, neurology, respiratory, and diabetes care growing rapidly. Minimally invasive technology and robotic surgery adoption is accelerating in private hospitals.',
  },
  {
    question: 'Who are the leading medical device companies in Saudi Arabia?',
    answer:
      'The Saudi Arabia medical devices market is led by multinational OEMs including Siemens Healthineers, GE Healthcare, Philips Healthcare, Medtronic, Abbott Laboratories, Boston Scientific, B. Braun, Stryker, and Johnson & Johnson. Local distributors such as AMSCO, Al-Faisaliah, and Cigalah provide last-mile channel access. Over 25 strategic manufacturing partnerships were announced in Saudi Arabia in 2022–2025 under local content incentives.',
  },
  {
    question: 'What is the SFDA medical device registration process in Saudi Arabia?',
    answer:
      'All medical devices sold in Saudi Arabia require SFDA registration under the Medical Devices Interim Regulation (MDIR). Class A devices follow a notification pathway; Class B–D devices require technical file review with typical timelines of 6–18 months depending on risk class. SFDA aligns with GHTF/IMDRF frameworks and accepts CE and FDA clearance as supporting evidence. BioNixus tracks SFDA registration timelines and procurement listing by hospital account.',
  },
  {
    question: 'How does Vision 2030 impact the Saudi Arabia medical devices market?',
    answer:
      'Vision 2030 is the primary structural driver for Saudi Arabia\'s medical devices market. SAR 500 billion in healthcare infrastructure investment, a target of 40% private healthcare participation by 2030, and NIDLP local manufacturing incentives are expanding hospital capacity and device procurement budgets. The National Transformation Program and Hospital Automation Initiative are accelerating imaging, monitoring, and surgical equipment upgrades at scale.',
  },
  {
    question: 'How does BioNixus track medical device consumption in Saudi Arabia?',
    answer:
      'BioNixus tracks Saudi Arabia medical device consumption through hospital procurement records, surgery volume data, and primary research with biomedical engineers, procurement heads, and clinical department leads across MOH, NGHA, private hospital networks, and specialty centers. Our account-level data enables commercial teams to size hospital-specific device budgets, identify procurement cycles, and quantify competitive position at the account level — intelligence that aggregate market reports cannot provide.',
  },
];

const REPORT_CONVERSION = getStandaloneReportConfig('/saudi-arabia-medical-devices-market-report');
const FAQ_SECTION_ID = 'saudi-arabia-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Saudi Arabia Medical Devices Market Report 2026: Hospital Consumption and Commercial Intelligence',
    author: { '@type': 'Organization', name: 'BioNixus' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-01',
    dateModified: '2026-05-27',
    mainEntityOfPage: 'https://www.bionixus.com/saudi-arabia-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/saudi-arabia-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-display font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function SegmentRow({ segment, share, note }: { segment: string; share: string; note: string }) {
  return (
    <tr className="border-b border-border">
      <td className="py-3 pr-4 font-medium text-primary text-sm">{segment}</td>
      <td className="py-3 px-4 text-sm text-muted-foreground">{share}</td>
      <td className="py-3 pl-4 text-sm text-muted-foreground">{note}</td>
    </tr>
  );
}

const SaudiArabiaMedicalDevicesMarketReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SEOHead
        title="Saudi Arabia Medical Devices Market Report 2026 | Hospital Consumption Intelligence | BioNixus"
        description="Saudi Arabia medical devices market valued at USD 2.8B in 2026. Hospital-level procurement data, SFDA registration intelligence, segment analysis by device type, and commercial strategy for Riyadh, Jeddah, and Dammam accounts."
        canonical="https://www.bionixus.com/saudi-arabia-medical-devices-market-report"
        jsonLd={jsonLd}
      />
      <ReportReadingProgress progressId="report-rp-saudi-arabia-medical-devices-market-report" />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pb-10">
          <div className="container-wide max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              Published by BioNixus · Updated May 2026 · Open access — no registration required
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Saudi Arabia Medical Devices Market Report 2026: Hospital Consumption and Commercial Intelligence
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus delivers hospital-level medical device consumption data, procurement intelligence, and
              primary HCP research across Saudi Arabia — sourced directly from hospital procurement systems,
              biomedical engineers, and clinical department leads across MOH, NGHA, and private hospital networks.
            </p>
            <ReportEarlyCtaBar config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        {/* Executive Summary */}
        <ReportContentWithAside config={REPORT_CONVERSION} containerClassName="container-wide max-w-6xl mx-auto section-padding">
        <section className="section-padding bg-cream-dark" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Executive Summary
            </h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <StatCard value="$2.8B" label="Saudi medical devices market 2026 (est.)" />
                <StatCard value="$4.5B+" label="Forecast by 2030" />
                <StatCard value="8.3%" label="CAGR 2026–2030" />
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Saudi Arabia is the largest medical devices market in the Middle East, accounting for
              approximately 52% of total GCC medical device spend. The market is driven by Vision 2030
              healthcare infrastructure investment, rising chronic disease prevalence — particularly diabetes
              (18% adult population) and cardiovascular disease — and a rapidly expanding private hospital sector.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Over SAR 500 billion in healthcare capital is being deployed across Saudi Arabia through 2030,
              creating unprecedented procurement activity across diagnostic imaging, surgical equipment, patient
              monitoring, and consumables. BioNixus tracks this activity at account level — enabling commercial
              teams to identify procurement windows, budget cycles, and competitive positioning at individual hospital accounts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For broader regional context, see BioNixus's{' '}
              <Link to="/gcc-pharma-market-report-2026" className="text-primary hover:underline font-medium">
                GCC Pharmaceutical Market Report 2026
              </Link>
              {' '}and{' '}
              <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary hover:underline font-medium">
                SFDA Market Access Strategy guide
              </Link>.
            </p>
          </div>
        </section>

        {/* Market Segmentation */}
        <section className="section-padding" id="market-segments">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Market Segmentation: Saudi Arabia Medical Devices 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Saudi Arabia medical devices market is segmented by product type, clinical application,
              end-user setting, and technology. Diagnostic imaging and patient monitoring represent the
              highest aggregate procurement value; surgical consumables drive the highest volume.
            </p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">By Product Type</h3>
            <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-primary/20 bg-primary/5">
                    <th className="py-3 pl-4 pr-4 text-sm font-semibold text-foreground">Segment</th>
                    <th className="py-3 px-4 text-sm font-semibold text-foreground">Market Share</th>
                    <th className="py-3 pl-4 pr-4 text-sm font-semibold text-foreground">Key Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  <SegmentRow
                    segment="Diagnostic Devices"
                    share="~32%"
                    note="Imaging, in-vitro diagnostics, pathology — fastest MOH procurement category"
                  />
                  <SegmentRow
                    segment="Therapeutic Devices"
                    share="~22%"
                    note="Dialysis, infusion pumps, ventilators — hospital channel dominant"
                  />
                  <SegmentRow
                    segment="Surgical Instruments"
                    share="~18%"
                    note="Minimally invasive and robotic surgery driving premium mix upgrade"
                  />
                  <SegmentRow
                    segment="Monitoring Devices"
                    share="~15%"
                    note="ICU and step-down unit expansion across private hospitals in Riyadh"
                  />
                  <SegmentRow
                    segment="Consumables"
                    share="~13%"
                    note="High-volume, recurring procurement — formulary listing drives access"
                  />
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">By Clinical Application</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { area: 'Cardiovascular', note: 'Leading application — interventional cardiology growth driven by high CVD prevalence' },
                { area: 'Diabetes Care', note: 'Glucose monitoring and insulin delivery devices scaling with 4M+ diabetic population' },
                { area: 'Orthopedics', note: 'Joint replacement and spine surgery volumes growing with aging population and sports medicine' },
                { area: 'Oncology', note: 'Linear accelerators, biopsy devices, and infusion equipment tracking oncology bed expansion' },
                { area: 'Neurology', note: 'Neuromonitoring and neurovascular devices accelerating in academic medical centers' },
                { area: 'Respiratory', note: 'Ventilators and nebulization equipment; post-COVID infrastructure investments driving growth' },
              ].map(({ area, note }) => (
                <div key={area} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{area}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How BioNixus Data Is Different */}
        <section className="section-padding bg-cream-dark" id="data-methodology">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              How BioNixus Medical Device Intelligence Works
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Published market reports on Saudi Arabia medical devices extrapolate from import statistics,
              distributor revenues, and industry interviews — producing useful market-level totals but limited
              account-level or procurement-cycle resolution. BioNixus operates differently.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                {
                  label: 'Hospital procurement records',
                  text: 'Direct sourcing from biomedical engineering departments and procurement offices at MOH hospitals, NGHA facilities, and private hospital groups — capturing purchase order data by device category, model, and supplier.',
                },
                {
                  label: 'Surgery and procedure volume data',
                  text: 'Operating theater utilization and procedure volume data from surgical departments — enabling device consumption estimation at indication and department level.',
                },
                {
                  label: 'Primary HCP and procurement research',
                  text: 'Quantitative and qualitative surveys with surgeons, intensivists, biomedical engineers, and procurement leads — mapping decision criteria, supplier preference, and procurement timeline.',
                },
                {
                  label: 'SFDA registration and tender tracking',
                  text: 'Systematic monitoring of SFDA device registration approvals, NUPCO and MOH tender outcomes, and hospital formulary listings — providing commercial teams with a leading indicator of competitive landscape shifts.',
                },
              ].map(({ label, text }) => (
                <li key={label} className="flex gap-3 text-muted-foreground">
                  <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">{label}</strong> — {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Regional Breakdown */}
        <section className="section-padding" id="regional-breakdown">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Regional Breakdown: Saudi Arabia Medical Device Markets
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  city: 'Riyadh',
                  share: '~42% of national spend',
                  note: 'Home to KAMC, KFSH&RC, King Saud University Medical City, and the largest concentration of private hospital groups. The National Guard Health Affairs and Saudi Aramco health facilities add institutional procurement depth.',
                },
                {
                  city: 'Jeddah',
                  share: '~26% of national spend',
                  note: 'King Faisal Specialist Hospital, King Abdullah Medical Complex, and an expanding private hospital corridor including Dr. Sulaiman Al Habib and Saudi German Hospital. Strong pharmaceutical and device distributor base.',
                },
                {
                  city: 'Eastern Province',
                  share: '~18% of national spend',
                  note: 'Saudi Aramco medical operations and Dammam Medical Complex anchor device procurement. Expanding petrochemical and industrial worker population drives occupational health device demand.',
                },
              ].map(({ city, share, note }) => (
                <div key={city} className="bg-white rounded-xl border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{city}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {share}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section className="section-padding bg-cream-dark" id="key-players">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Leading Medical Device Companies in Saudi Arabia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Saudi Arabia medical devices market is dominated by multinational OEMs distributing through
              registered Saudi agents. Local manufacturing remains nascent but is scaling under Vision 2030
              NIDLP incentives, with over 25 international manufacturing partnerships announced since 2022.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { company: 'Siemens Healthineers', note: 'Imaging and diagnostics — strong NGHA and MOH installation base' },
                { company: 'GE Healthcare', note: 'Patient monitoring, ultrasound, CT — large installed base across private hospitals' },
                { company: 'Philips Healthcare', note: 'Cardiac imaging, ICU monitoring, radiology — KFSH&RC preferred supplier' },
                { company: 'Medtronic', note: 'Cardiovascular, neuromodulation, diabetes devices — extensive surgeon relationships' },
                { company: 'Abbott Laboratories', note: 'Point-of-care diagnostics, heart rhythm management, structural heart' },
                { company: 'Boston Scientific', note: 'Interventional cardiology, endoscopy, neuromodulation' },
              ].map(({ company, note }) => (
                <div key={company} className="bg-white rounded-xl border border-border p-4 shadow-sm">
                  <p className="font-semibold text-foreground text-sm mb-1">{company}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        </ReportContentWithAside>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="Saudi Arabia medical devices market — SFDA, Vision 2030, and hospital procurement FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30"
        />

        {/* CTA */}
        <ReportConsultationBand config={REPORT_CONVERSION} />
        </main>

      <Footer />
    </div>
  );
};

export default SaudiArabiaMedicalDevicesMarketReport;
