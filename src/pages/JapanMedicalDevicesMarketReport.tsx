import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { getStandaloneReportConfig } from '@/data/reportConversionConfig';
import { MarketIntelligenceSections } from '@/components/market-intelligence';
import { buildReportEnrichmentSchemas } from '@/lib/reportEnrichmentSchemas';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero } from '@/components/report-premium';
import { finalizeStandaloneMedDeviceFaqs } from '@/data/standaloneCountryReportContent';

const PAGE_TITLE = 'Japan Medical Devices Market Report 2026 | Size, PMDA & NHI';
const PAGE_DESCRIPTION =
  'Japan medical devices market report 2026 — ~USD 41B market size, PMDA Class I–IV (todokede/ninsho/shonin), NHI listing, forecast to ~USD 64B. BioNixus.';
const PAGE_MODIFIED = '2026-08-18';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
  { name: 'Japan Medical Devices Market Report', href: '/japan-medical-devices-market-report' },
];

const REPORT_FAQ_ITEMS = finalizeStandaloneMedDeviceFaqs([
  {
    question: 'How big is the Japan medical devices market in 2026?',
    answer: 'This Japan medical devices market report sizes the market at approximately USD 41 billion in 2026 — the world\'s third-largest after the United States and China — with a Fortune Business Insights–aligned path to roughly USD 64 billion by 2032 (~6.5% CAGR). Peer desk estimates commonly fall in a USD 31–47 billion band depending on product scope. Japan combines dense hospital infrastructure (~8,100 hospitals, ~1.5 million beds — among the highest OECD bed densities) with NHI reimbursement covering virtually all approved procedures and devices, plus a strong domestic OEM base (Olympus, Terumo, Hoya, Omron, Sysmex).',
  },
  {
    question: 'How does PMDA regulate medical devices in Japan?',
    answer: 'PMDA (Pharmaceuticals and Medical Devices Agency) reviews medical device applications on behalf of MHLW (Ministry of Health, Labour and Welfare), which issues the final marketing authorisation. Japan classifies devices into four classes based on risk: Class I (general medical devices — filing with local regulatory authority); Class II (controlled medical devices — conformity certification by Registered Certification Bodies or PMDA); Class III and IV (highly controlled and specially controlled medical devices — PMDA review with clinical evidence). Japan has historically experienced a "device lag" of 2–4 years behind US device approvals — MHLW has implemented reform programs including the Priority Review system for innovative devices. PMDA participates in the IMDRF (International Medical Device Regulators Forum), facilitating international regulatory alignment.',
  },
  {
    question: 'How does NHI reimbursement pricing work for medical devices in Japan?',
    answer: 'NHI medical device reimbursement in Japan works through the "Functional Classification System" — devices are classified into functional categories and reimbursed at a single price per category. New devices are listed in the NHI reimbursement schedule through a biannual revision process (C1/C2 listing for innovative devices, A/B/C listing for standard devices). The C1 and C2 categories enable premium pricing for genuinely innovative devices above existing category prices. Insurance Coverage with Evidence Development (Conditional Coverage) — "先進医療制度 (Advanced Medical Technology System)" — provides a pathway for early access to promising devices at hospital cost while NHI listing evidence is collected. Hospital-specific billing supplements (DPC/PDPS system) govern device reimbursement within inpatient care.',
  },
  {
    question: 'What are the largest medical device segments in Japan?',
    answer: 'The five largest Japanese medical device segments by NHI spend and import value are: diagnostic imaging (MRI, CT, ultrasound, endoscopy — Japan has the world\'s highest per-capita endoscopy rate; Olympus dominates endoscopy globally with ~70% share); in vitro diagnostics (clinical chemistry, haematology, immunoassay — Sysmex is a global IVD leader); cardiovascular devices (stents, cardiac rhythm management, TAVR — Japan is among the world\'s largest TAVR procedure markets given the aging population); orthopaedics and joint replacement (high joint replacement rates; significant domestic manufacturing); and surgical instruments and robotics (da Vinci surgical systems widely installed; Japanese domestic robotic surgery development growing).',
  },
  {
    question: 'What is the strategic importance of Japan\'s device lag reduction for international manufacturers?',
    answer: 'Japan\'s historical "device lag" — the delay between FDA/CE approval and PMDA approval — was a major commercial barrier for international medical device manufacturers, historically costing 2–4 years of market access. MHLW\'s reform program has significantly reduced device lag: the Priority Review pathway provides accelerated PMDA review for innovative devices; early consultation with PMDA reduces dossier preparation time; IMDRF work-sharing enables parallel review with FDA. Reducing device lag is critical for Japanese patient access and commercial success — each year of lag delays NHI listing, hospital adoption, and revenue generation in a market where physicians and hospitals prefer to use the latest technologies. The reduction in lag has made Japan a more attractive concurrent global launch market.',
  },
  {
    question: 'What is the difference between shonin, ninsho, and todokede approval in Japan?',
    answer: 'Japan uses three distinct approval mechanisms tied directly to device classification. Class I general medical devices use todokede (届出) — a simple notification filed with the prefectural government, with no pre-market technical review by PMDA. Class II controlled medical devices generally use ninsho (認証) — third-party certification issued by a PMDA-designated Registered Certification Body against Japan Certification Standards (JCS) that are mapped to specific JMDN codes, so a device only qualifies for the faster ninsho route if a JCS already exists for its exact code. Class III and Class IV highly controlled and specially controlled devices generally require shonin (承認) — full PMDA review culminating in MHLW marketing approval, including clinical evidence for genuinely novel technologies such as pacemakers, drug-eluting stents, and artificial heart valves. Manufacturers who misjudge which pathway applies to a borderline device commonly lose months to a rejected ninsho application that should have gone through PMDA shonin review from the outset.',
  },
  {
    question: 'What is JMDN and why does it matter for device registration and reimbursement?',
    answer: 'JMDN (Japan Medical Device Nomenclature) is the standardized coding system, maintained under MHLW and JAAME (Japan Association for the Advancement of Medical Equipment) oversight, that assigns every device model sold in Japan to a defined generic product category — conceptually aligned with the international GMDN system but with Japan-specific category definitions. The JMDN code a manufacturer selects at filing determines which risk class and certification standard apply, whether a Registered Certification Body can issue ninsho or the filing must go to PMDA for shonin, and — critically for commercial planning — which NHI functional reimbursement category the device is priced against once approved. Because JMDN codes link classification directly to pricing, an imprecise or overly broad code selection can push a genuinely differentiated device into a generic functional category with a low reimbursement ceiling, while an inaccurate code can trigger additional PMDA queries that add months to review. Experienced regulatory teams treat JMDN code selection as a pricing decision as much as a classification decision.',
  },
  {
    question: 'How do foreign medical device manufacturers register through Japan\'s MAH/DMAH system?',
    answer: 'A foreign manufacturer without a licensed Japanese entity cannot hold PMDA/MHLW marketing authorization directly — it must work through a Marketing Authorization Holder (MAH, holding a 製造販売業許可 manufacturing-and-marketing business license) or, for many Class II and some Class III devices, appoint an in-country Designated Marketing Authorization Holder (DMAH, 選任製造販売業者). The MAH or DMAH assumes full domestic regulatory responsibility, including compliance with Japan\'s QMS Ordinance (the local equivalent of ISO 13485), adverse-event and malfunction reporting to PMDA, recall execution, and Japanese-language labeling and instructions for use. Because the MAH/DMAH is the legal point of contact for MHLW and PMDA rather than the overseas manufacturer, selecting a partner with a strong compliance track record and adequate device-category experience is a material commercial decision — a weak MAH relationship can slow every subsequent submission, price revision filing, and post-market variation for that device line.',
  },
  {
    question: 'What ongoing post-market obligations apply to devices sold in Japan?',
    answer: 'Marketing authorization in Japan is not a one-time event — the Marketing Authorization Holder or Designated Marketing Authorization Holder carries continuing obligations under Japan\'s QMS Ordinance for the full commercial life of the device. These include mandatory adverse-event and malfunction reporting to PMDA within defined timeframes, periodic safety and quality audits of the manufacturing site (including overseas facilities), management of design or labeling changes through PMDA variation procedures, and execution of any field safety corrective action or recall coordinated with MHLW. Re-examination and re-evaluation requirements can also apply to certain higher-risk Class III and Class IV devices at defined intervals after initial approval. Manufacturers that treat Japanese compliance as a filing-only exercise, rather than resourcing an ongoing local quality and vigilance function through their MAH/DMAH, commonly encounter friction at the next price-revision cycle or facility inspection.',
  },
  {
    question: 'Does Japan offer an expedited pathway for breakthrough medical devices?',
    answer: 'Yes — the Sakigake priority-review designation, administered jointly by MHLW and PMDA, is available to medical devices (as well as drugs and regenerative medicine products) that address serious unmet medical need and where Japan is positioned among the earliest markets for development. A device granted Sakigake designation is eligible for prioritized PMDA consultation slots, a dedicated reviewer team, and a target review period of around six months versus the roughly twelve-month standard timeline. Because NHI listing only follows MHLW approval, cutting PMDA review time directly shortens the path to reimbursed hospital adoption. Sakigake designation is selective and requires an early, well-documented application — manufacturers planning a genuine Japan-first or Japan-early launch strategy should raise Sakigake eligibility with PMDA during the initial consultation phase rather than after standard filing is already underway.',
  },
  {
    question: 'How does BioNixus support Japanese medtech companies entering the GCC and MENA market?',
    answer: 'BioNixus supports Japanese medical device manufacturers — including Olympus, Terumo, and emerging Japanese medtech companies — in entering GCC and MENA markets. Japanese devices (particularly Olympus endoscopy, Terumo cardiovascular, Sysmex IVD) have significant installed bases in GCC hospitals. BioNixus provides SFDA, MOHAP/DHA/DOH, HMC, and GCC-wide regulatory pathway intelligence; hospital procurement and installed base intelligence; distributor network mapping; and primary research with biomedical engineers and clinical specialists. BioNixus operates from London with in-country research teams across the GCC and Egypt.',
  },
], 'japan');

const REPORT_CONVERSION = getStandaloneReportConfig('/japan-medical-devices-market-report');
const FAQ_SECTION_ID = 'japan-medical-devices-faq';

const jsonLd = [
  buildBreadcrumbSchema(breadcrumbItems),
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: 'https://www.bionixus.com/og-linkedin.png',
    headline: 'Japan Medical Devices Market Report 2026: Size, PMDA, NHI Reimbursement, and Device Lag Reduction',
    author: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
    },
    datePublished: '2026-05-27',
    dateModified: PAGE_MODIFIED,
    description: PAGE_DESCRIPTION,
    mainEntityOfPage: 'https://www.bionixus.com/japan-medical-devices-market-report',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `https://www.bionixus.com/japan-medical-devices-market-report#${FAQ_SECTION_ID}`,
    mainEntity: REPORT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
  ...buildReportEnrichmentSchemas({
    pageTitle: PAGE_TITLE,
    pageMetaDescription: PAGE_DESCRIPTION,
    countryName: 'Japan',
    marketSlug: 'japan',
    publishedDate: '2026-05-27',
    modifiedDate: PAGE_MODIFIED,
    variant: 'medical-devices',
  }),
];

function SegmentRow({ segment, share, note }: { segment: string; share: string; note: string }) {
  return (
    <tr className="border-b border-border">
      <td className="py-3 pr-4 font-medium text-primary text-sm">{segment}</td>
      <td className="py-3 px-4 text-sm text-muted-foreground">{share}</td>
      <td className="py-3 pl-4 text-sm text-muted-foreground">{note}</td>
    </tr>
  );
}

const JapanMedicalDevicesMarketReport = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <SEOHead
      title={PAGE_TITLE}
      description={PAGE_DESCRIPTION}
      canonical="https://www.bionixus.com/japan-medical-devices-market-report"
      jsonLd={jsonLd}
    />
    <ReportReadingProgress progressId="report-rp-japan-medical-devices-market-report" />
    <main>
      <div className="section-padding pt-24 pb-4">
        <div className="container-wide">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>
      <ReportPremiumHero
        title="Japan Medical Devices Market Report 2026: Size, PMDA Regulation & NHI Intelligence"
        description="BioNixus Japan medical devices market report — ~USD 41B market size, PMDA Class I–IV pathways, NHI functional pricing, hospital procurement intelligence, and GCC/MENA entry support for Japanese and international medtech."
        config={REPORT_CONVERSION}
        marketSlug="japan"
        countryName="Japan"
        stats={[
          { value: '~$41B', label: 'Japan medical devices market 2026' },
          { value: '~$64B', label: 'Forecast 2032' },
          { value: '6.5%', label: 'CAGR 2026–2032' },
        ]}
      />

      <ReportContentWithAside config={REPORT_CONVERSION}>
        <section className="section-padding bg-cream-dark" id="geo-answer-section">
          <div className="container-wide max-w-4xl mx-auto">
            <GeoLLMAnswerBlock
              question="What is the Japan medical devices market size in 2026?"
              answer="The Japan medical devices market is approximately USD 41 billion in 2026 — the world's third-largest — on a path toward roughly USD 64 billion by 2032 (~6.5% CAGR). PMDA Class I–IV pathways (todokede, ninsho, shonin), MAH/DMAH execution, and Chuikyo/NHI functional listing govern commercial access."
              points={[
                {
                  title: 'Market size',
                  description:
                    '~USD 41B in 2026 (Fortune Business Insights–aligned); peer estimates typically USD 31–47B depending on scope.',
                },
                {
                  title: 'Regulatory pathway',
                  description:
                    'Class I todokede, Class II ninsho, Class III/IV shonin under PMDA/MHLW, with Sakigake priority review for unmet need.',
                },
                {
                  title: 'Commercial access',
                  description:
                    'NHI functional-category listing on biannual Chuikyo cycles plus DPC hospital economics drive reimbursed volume.',
                },
                {
                  title: 'BioNixus intelligence',
                  description:
                    'Primary hospital and PMDA-aware research for OEMs entering Japan, and GCC/MENA entry programmes for Japanese medtech.',
                },
              ]}
              summary="Use this Japan medical devices market report for size, PMDA/NHI access, and segment intelligence — and BioNixus Japan MedTech market research when you need custom fieldwork."
            />
          </div>
        </section>

        <section className="section-padding" id="executive-summary">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">Executive Summary</h2>
            <div className="bg-white rounded-xl border border-border p-6 shadow-sm mb-6">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">~$41B</p>
                  <p className="text-xs text-muted-foreground mt-1">Japan medical devices market 2026</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">~$64B</p>
                  <p className="text-xs text-muted-foreground mt-1">Forecast 2032</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">6.5%</p>
                  <p className="text-xs text-muted-foreground mt-1">CAGR 2026–2032</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Japan medical devices market report is part of BioNixus{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                global healthcare market research
              </Link>{' '}
              coverage. It focuses on market size, PMDA pathways, and NHI commercial access — distinct from our{' '}
              <Link to="/japan-medtech-market-research" className="text-primary hover:underline font-medium">
                Japan MedTech market research
              </Link>{' '}
              service page (custom primary research) and{' '}
              <Link to="/japan-medical-device-market-access" className="text-primary hover:underline font-medium">
                Japan medical device market access
              </Link>{' '}
              how-to intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan is the world&apos;s third-largest medical devices market and a global innovation hub for endoscopy,
              cardiovascular devices, IVD, and surgical robotics. Our primary size reference is ~USD 41 billion in 2026
              growing to ~USD 64 billion by 2032 (Fortune Business Insights–aligned; ~6.5% CAGR). Desk estimates from
              other firms typically land between USD 31–47 billion depending on whether capital imaging, IVD, and
              consumables are fully in scope. PMDA device-lag reforms have improved concurrent-launch timing; NHI
              functional categories and biannual Chuikyo revisions remain the core volume framework.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan&apos;s demographic profile anchors demand: more than 28% of the population is over 65 — the highest
              share of any major economy — supported by roughly 8,100 hospitals and close to 1.5 million hospital beds
              (around 12.1 beds per 1,000). That combination sustains high per-capita utilisation of diagnostic imaging,
              endoscopy, cardiac rhythm management, and orthopaedics, while Sakigake priority review shortens the path
              from approval to hospital adoption for genuine innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BioNixus methodology combines regulator- and pathway-aware desk synthesis with primary hospital
              procurement and clinician research — not syndicated table dumps alone. See also the{' '}
              <Link to="/japan-healthcare-market-report" className="text-primary hover:underline font-medium">
                Japan healthcare market report
              </Link>{' '}
              and{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">
                GCC medical devices market report
              </Link>
              . Request a scoped proposal at{' '}
              <a href="mailto:admin@bionixus.com" className="text-primary hover:underline font-medium">
                admin@bionixus.com
              </a>
              .
            </p>
          </div>
        </section>

        <MarketIntelligenceSections marketSlug="japan" countryName="Japan" variant="medical-devices" />

        <section className="section-padding bg-cream-dark" id="market-segments">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Japan Medical Device Market Segments 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Segment value concentrates in imaging/endoscopy, IVD, cardiovascular, orthopaedics, and surgical
              robotics — categories where aging demographics, NHI coverage, and domestic OEM strength reinforce
              installed-base stickiness.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-primary/20 bg-primary/5">
                    <th className="py-3 pl-4 pr-4 text-sm font-semibold text-foreground">Segment</th>
                    <th className="py-3 px-4 text-sm font-semibold text-foreground">Relative weight</th>
                    <th className="py-3 pl-4 pr-4 text-sm font-semibold text-foreground">Key drivers</th>
                  </tr>
                </thead>
                <tbody>
                  <SegmentRow
                    segment="Diagnostic imaging & endoscopy"
                    share="Largest by capital + procedure value"
                    note="Highest per-capita endoscopy rates; Olympus global endoscopy leadership; MRI/CT density"
                  />
                  <SegmentRow
                    segment="In vitro diagnostics"
                    share="Top-tier volume category"
                    note="Clinical chemistry, haematology, immunoassay — Sysmex domestic and export strength"
                  />
                  <SegmentRow
                    segment="Cardiovascular devices"
                    share="High-growth aging category"
                    note="Stents, CRM, TAVR — among the world's largest elderly structural-heart procedure bases"
                  />
                  <SegmentRow
                    segment="Orthopaedics & joints"
                    share="Structurally rising"
                    note="Joint replacement and spine volumes tied to super-aging demographics"
                  />
                  <SegmentRow
                    segment="Surgical instruments & robotics"
                    share="Premium capital growth"
                    note="Large robotic installed base; domestic robotics programmes seeking Sakigake tracks"
                  />
                  <SegmentRow
                    segment="Consumables & home monitoring"
                    share="Recurring volume"
                    note="Diabetes CGM/insulin delivery, home care, remote monitoring under community-care policy"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding" id="japan-device-regulatory-pathway">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Japan Medical Device Regulatory Pathway
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Treat the PMDA pre-submission consultation (sōdan) as a distinct project phase. Manufacturers typically
              engage PMDA six to nine months before filing to lock risk class, JMDN code, bridging-study needs, and the
              correct route among todokede, ninsho, and shonin. Misjudged classification mid-review is a common cause
              of delayed Japanese launches.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: 'Todokede (届出) — Class I',
                  body: 'Prefectural notification for general medical devices; no pre-market PMDA technical review. Fastest path when classification is correctly assigned.',
                },
                {
                  title: 'Ninsho (認証) — Class II',
                  body: 'Third-party certification by a Registered Certification Body against Japan Certification Standards mapped to JMDN codes — only when a JCS exists for that code.',
                },
                {
                  title: 'Shonin (承認) — Class III/IV',
                  body: 'Full PMDA review and MHLW marketing approval, typically ~12 months plus ~3 months ministerial approval; clinical evidence for novel high-risk technologies.',
                },
                {
                  title: 'Sakigake priority review',
                  body: 'Unmet-need designation targeting ~6-month PMDA review with dedicated consultation — shortens the clock to NHI listing when Japan is an early launch market.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-primary/5 rounded-xl border border-primary/20 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Throughout commercial life, the MAH or DMAH must maintain Japan QMS Ordinance compliance, post-market
              surveillance, and adverse-event reporting to PMDA. Because NHI listing follows Chuikyo&apos;s biannual
              cycle, the gap between MHLW approval and the next listing window can add months to effective launch —
              a scheduling detail experienced Japan access teams build into plans from day one.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For access-focused primary research (committee evidence, automation buyers, CIO/biomed scoring), see{' '}
              <Link to="/japan-medical-device-market-access" className="text-primary hover:underline font-medium">
                Japan medical device market access
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding bg-cream-dark" id="japan-device-growth-categories">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Growth Device Categories Tied to Japan&apos;s Aging Population
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'Cardiovascular & structural heart',
                  body: '~350,000 acute CV events annually and high elderly structural-heart burden sustain CRM, DES, and TAVR demand in hospital capital plans.',
                },
                {
                  title: 'Diabetes technology',
                  body: '~10.5 million patients on pharmacotherapy (plus a large undiagnosed pool) drive CGM, insulin delivery, and connected monitoring — Terumo and Omron hold strong domestic positions.',
                },
                {
                  title: 'SaMD & AI diagnostics',
                  body: 'PMDA guidance increasingly accommodates AI imaging support, digital therapeutics, and remote-monitoring software that did not fit legacy hardware-centric classes.',
                },
                {
                  title: 'Home care & robotics',
                  body: 'Community-based care policy plus a large robotic surgical installed base favour remote monitoring, home dialysis/respiratory devices, and Sakigake-track domestic robotics.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-xl border border-border p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              For international manufacturers, Japan&apos;s growth categories favour teams that pair clinical evidence
              with credible JMDN classification, NHI functional-category positioning, and MAH/DMAH execution — rather
              than treating Japan as a simple extension of a US or European device launch.
            </p>
          </div>
        </section>

        <section className="section-padding" id="japan-top-companies">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Top Medical Device Companies Operating in Japan
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Foreign OEMs collectively supply roughly half of Japan&apos;s device market by value alongside a strong
              domestic manufacturing base — Japan is open to well-prepared foreign entrants, procedurally distinctive
              mainly because of the MAH/DMAH requirement.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="p-4 font-display font-semibold text-foreground">
                      Company
                    </th>
                    <th scope="col" className="p-4 font-display font-semibold text-foreground">
                      Origin
                    </th>
                    <th scope="col" className="p-4 font-display font-semibold text-foreground">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {[
                    {
                      company: 'Terumo Corporation',
                      origin: 'Japan',
                      position: 'Major domestic leader; cardiovascular/vascular intervention, blood management',
                    },
                    {
                      company: 'Olympus Corporation',
                      origin: 'Japan',
                      position: 'Global GI endoscopy leader — reported 70%+ global share in prior analyses',
                    },
                    {
                      company: 'Sysmex Corporation',
                      origin: 'Japan',
                      position: 'Leading domestic and global IVD/haematology testing instruments player',
                    },
                    {
                      company: 'Nihon Kohden',
                      origin: 'Japan',
                      position: 'Leading domestic patient monitoring, defibrillators, diagnostic equipment',
                    },
                    {
                      company: 'Asahi Kasei Medical',
                      origin: 'Japan',
                      position: 'Domestic leader in blood purification/dialysis and critical-care devices',
                    },
                    {
                      company: 'Medtronic',
                      origin: 'USA',
                      position: 'Cardiac rhythm management, diabetes, surgical, and neuromodulation devices',
                    },
                    {
                      company: 'Johnson & Johnson MedTech',
                      origin: 'USA',
                      position: 'Surgery, orthopaedics, and vision-care devices',
                    },
                    {
                      company: 'Siemens Healthineers',
                      origin: 'Germany',
                      position: 'Leading foreign imaging and laboratory diagnostics supplier',
                    },
                    {
                      company: 'GE HealthCare',
                      origin: 'USA',
                      position: 'Major foreign imaging and patient monitoring supplier',
                    },
                    {
                      company: 'Philips',
                      origin: 'Netherlands',
                      position: 'Imaging, monitoring, and connected-care devices',
                    },
                  ].map((row) => (
                    <tr key={row.company}>
                      <td className="p-4 font-medium text-foreground whitespace-nowrap">{row.company}</td>
                      <td className="p-4 text-muted-foreground">{row.origin}</td>
                      <td className="p-4 text-muted-foreground">{row.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-dark" id="related-intelligence">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Related BioNixus market intelligence
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Compare this Japan medical devices market report with our{' '}
              <Link to="/china-medical-devices-market-report" className="text-primary hover:underline font-medium">
                China medical devices market report
              </Link>{' '}
              and{' '}
              <Link to="/south-korea-medical-devices-market-report" className="text-primary hover:underline font-medium">
                South Korea medical devices market report
              </Link>
              , set it against the{' '}
              <Link to="/japan-healthcare-market-report" className="text-primary hover:underline font-medium">
                Japan healthcare market report
              </Link>
              , commission custom fieldwork via{' '}
              <Link to="/japan-medtech-market-research" className="text-primary hover:underline font-medium">
                Japan MedTech market research
              </Link>
              , or dig into{' '}
              <Link to="/japan-medical-device-market-access" className="text-primary hover:underline font-medium">
                Japan medical device market access
              </Link>
              . Widen the lens with the{' '}
              <Link to="/gcc-medical-devices-market-report" className="text-primary hover:underline font-medium">
                GCC medical devices market report
              </Link>{' '}
              and the{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline font-medium">
                global healthcare market research hub
              </Link>
              .
            </p>
            <ReportMidPageCta config={REPORT_CONVERSION} className="mt-8" />
          </div>
        </section>

        <FAQSection
          sectionId={FAQ_SECTION_ID}
          title="Japan medical devices market 2026 — PMDA, NHI reimbursement, device lag, and GCC expansion FAQ"
          items={REPORT_FAQ_ITEMS}
          className="bg-muted/30"
        />
      </ReportContentWithAside>
      <ReportConsultationBand config={REPORT_CONVERSION} />
    </main>
    <Footer />
  </div>
);

export default JapanMedicalDevicesMarketReport;
