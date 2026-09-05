import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Building2, Globe, Pill, ShieldCheck, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { PharmaDirectoryBridge } from '@/components/seo/PharmaDirectoryBridge';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { getPharmaGuideConfig } from '@/data/reportConversionConfig';
import { getEditorialAuthor, personAuthorJsonLd } from '@/data/editorialAuthors';
import { PharmaCompaniesGlobalHubLinks } from '@/components/seo/PharmaCompaniesGlobalHubLinks';
import { PharmaCompaniesQuickAnswer } from '@/components/seo/PharmaCompaniesQuickAnswer';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { CountryDirectoryLinks } from '@/components/seo/CountryDirectoryLinks';
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { PHARMA_GUIDE_ARTICLE_CONTAINER } from '@/components/report-conversion/constants';
import {
  DirectoryCategoryCard,
  DirectoryDriverCard,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';

const PHARMA_CONVERSION = getPharmaGuideConfig('usa');
const PAGE_AUTHOR = getEditorialAuthor({
  path: '/pharmaceutical-companies-usa',
  countrySlug: 'united-states',
  pageType: 'article',
});

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const TYPE_BADGE: Record<PharmaCompany['type'], string> = {
  'Local Manufacturer': 'bg-[#E8F3EE] text-[#1B5E45]',
  'MNC Office': 'bg-[#E8EDF5] text-[#14233E]',
  Regional: 'bg-[#FBF3E0] text-[#8A6A12]',
  Distributor: 'bg-[#F3EEF7] text-[#5B3A75]',
};

const pharmaCompanies: PharmaCompany[] = [
  { name: 'Pfizer', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'US HQ; major innovator and vaccine franchise' },
  { name: 'Johnson & Johnson (Janssen)', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, immunology, neuroscience, medtech', notes: 'Broad pharma + medtech footprint' },
  { name: 'Merck & Co. (MSD)', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, vaccines, infectious disease', notes: 'Keytruda-led oncology franchise' },
  { name: 'AbbVie', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology and aesthetics leadership' },
  { name: 'Eli Lilly', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Diabetes, obesity, oncology, neuroscience', notes: 'GLP-1 and metabolic growth leader' },
  { name: 'Bristol Myers Squibb', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, haematology, immunology, cardiovascular', notes: 'Oncology and specialty focus' },
  { name: 'Amgen', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, bone health, inflammation, biosimilars', notes: 'Biotech major; biosimilars expanding' },
  { name: 'Gilead Sciences', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'HIV, antiviral, oncology', notes: 'Antiviral and oncology portfolio' },
  { name: 'Regeneron', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Ophthalmology, immunology, oncology', notes: 'Antibody platform; Dupixent partnership' },
  { name: 'Vertex Pharmaceuticals', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Cystic fibrosis, rare diseases', notes: 'CF franchise; pipeline expansion' },
  { name: 'Moderna', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Vaccines, mRNA therapeutics', notes: 'mRNA vaccine platform' },
  { name: 'Biogen', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: "Neuroscience, MS, Alzheimer's", notes: 'Neuroscience-focused biotech' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, cardiovascular, gene therapy', notes: 'Major US commercial and manufacturing presence' },
  { name: 'Roche / Genentech', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Genentech as US research/commercial hub' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Immunology, vaccines, rare diseases, diabetes', notes: 'Strong US specialty and vaccine presence' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, CVRM, rare diseases', notes: 'Major US oncology and respiratory footprint' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, specialty', notes: 'Vaccine and specialty presence in US' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases', notes: 'GLP-1 franchise driving US growth' },
  { name: 'Takeda', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'GI, rare diseases, oncology, plasma', notes: 'US specialty and plasma focus' },
  { name: 'Bayer', hq: 'Germany', type: 'MNC Office', therapeuticAreas: "Cardiology, oncology, women's health, consumer", notes: 'US pharma and consumer health' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'CVRM, respiratory, oncology', notes: 'Jardiance franchise; large US operations' },
  { name: 'Daiichi Sankyo', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'Oncology (ADCs), cardiovascular', notes: 'Enhertu-led US oncology growth' },
  { name: 'Astellas', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'Oncology, urology, transplant', notes: 'Xtandi and cell therapy investment' },
  { name: 'Teva Pharmaceuticals USA', hq: 'Israel', type: 'MNC Office', therapeuticAreas: 'Generics, biosimilars, CNS specialty', notes: 'Largest US generics supplier' },
  { name: 'Viatris', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Generics, biosimilars, established brands', notes: 'Mylan-Upjohn merged portfolio' },
  { name: 'McKesson', hq: 'USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty pharmacy', notes: 'Leading US pharmaceutical wholesaler' },
  { name: 'Cencora (AmerisourceBergen)', hq: 'USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty', notes: 'Big Three wholesaler' },
  { name: 'Cardinal Health', hq: 'USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty', notes: 'Big Three wholesaler and specialty services' },
];

const faqItems = [
  { q: 'How many major pharmaceutical companies operate in the USA?', a: 'The USA hosts the densest concentration of global pharmaceutical and biotech headquarters. This guide highlights 20+ major manufacturers and biotech firms plus the Big Three wholesalers (McKesson, Cencora, Cardinal Health) that dominate national distribution.' },
  { q: 'What is the size of the US pharmaceutical market?', a: 'Public estimates commonly place US prescription pharmaceutical spending in the USD 600 billion-plus range — the largest national market worldwide. Specialty, oncology, and metabolic (including GLP-1) categories drive disproportionate value growth.' },
  { q: 'Who regulates pharmaceuticals in the United States?', a: 'The FDA oversees drug approval, manufacturing quality, labelling, and pharmacovigilance. CMS shapes Medicare and Medicaid coverage and reimbursement, while commercial insurers and PBMs control much of private-sector formulary access.' },
  { q: 'How do drugs reach patients in the USA?', a: 'Most prescription medicines flow through national wholesalers (McKesson, Cencora, Cardinal Health) into retail chains, independent pharmacies, hospitals, and specialty pharmacies. Specialty products increasingly use limited-distribution and specialty pharmacy channels.' },
  { q: 'Do foreign companies need a local presence to sell in the USA?', a: 'Foreign manufacturers typically establish a US affiliate or partner for FDA submissions, labelling, pharmacovigilance, and commercial operations. Distribution agreements with wholesalers and specialty pharmacies are standard for national reach.' },
  { q: 'Which therapeutic areas dominate US pharma growth?', a: 'Oncology, immunology, rare diseases, and metabolic diseases (notably GLP-1 obesity/diabetes therapies) are among the strongest growth drivers. Vaccines and infectious disease remain strategically important for several majors.' },
  { q: 'What are the largest pharmaceutical companies in the USA by revenue?', a: 'By 2026 US-market revenue, the leaders are Eli Lilly, Pfizer, Merck & Co., AbbVie, Johnson & Johnson, Bristol Myers Squibb, Amgen, and Gilead among US-headquartered firms — with Novo Nordisk, Roche/Genentech, AstraZeneca, and Novartis the largest foreign players by US sales.' },
  { q: 'How is the Inflation Reduction Act changing US pharma?', a: 'The IRA introduced Medicare price negotiation for selected high-spend drugs, a $2,000 Part D out-of-pocket cap, and inflation rebates. Manufacturers are responding with revised launch sequencing, indication strategies, and portfolio decisions weighted toward earlier lifecycle value capture.' },
];

const TOP_10_US_PHARMA: { name: string; note: string }[] = [
  { name: 'Eli Lilly', note: 'GLP-1 franchise (Mounjaro, Zepbound) has made Lilly the most valuable pharma company globally' },
  { name: 'Pfizer', note: 'broadest US commercial infrastructure; oncology and vaccine anchor' },
  { name: 'Merck & Co. (MSD)', note: "Keytruda remains the world's top-selling drug" },
  { name: 'AbbVie', note: 'Skyrizi and Rinvoq successfully replaced Humira revenue' },
  { name: 'Johnson & Johnson', note: 'diversified pharma + medtech leader' },
  { name: 'Novo Nordisk (US)', note: 'Ozempic/Wegovy drive the largest foreign-company US franchise' },
  { name: 'Bristol Myers Squibb', note: 'oncology, haematology, and cardiovascular specialty depth' },
  { name: 'Amgen', note: 'biotech pioneer with expanding biosimilar and obesity pipeline' },
  { name: 'AstraZeneca (US)', note: 'fastest-growing large-cap oncology portfolio' },
  { name: 'Gilead Sciences', note: 'HIV leadership plus growing oncology franchise' },
];

const RELATED_DIRECTORIES = [
  { to: '/pharmaceutical-companies-uk', title: 'Pharmaceutical companies in UK' },
  { to: '/pharmaceutical-companies-germany', title: 'Pharmaceutical companies in Germany' },
  { to: '/pharmaceutical-companies-brazil', title: 'Pharmaceutical companies in Brazil' },
  { to: '/pharmaceutical-companies-canada', title: 'Pharmaceutical companies in Canada' },
  { to: '/insights/top-global-healthcare-market-research-companies-2026', title: 'Healthcare market research companies' },
  { to: '/insights/top-healthcare-market-research-companies-usa-2026', title: 'USA healthcare MR companies 2026' },
  { to: '/medical-device-companies-usa', title: 'Medical device companies in USA' },
];

const GROWTH_DRIVERS = [
  { title: 'Specialty & Oncology', desc: 'Specialty medicines and oncology continue to concentrate value growth and drive complex channel strategies.' },
  { title: 'Metabolic / GLP-1 Demand', desc: 'Diabetes and obesity therapies have reshaped volume, manufacturing, and payer budgets across the US market.' },
  { title: 'IRA & Payer Pressure', desc: 'Inflation Reduction Act negotiation and PBM reform debates are reshaping pricing and launch sequencing.' },
  { title: 'Biotech Innovation Clusters', desc: 'Boston, Bay Area, San Diego, and other hubs feed continuous pipeline renewal into Big Pharma portfolios.' },
  { title: 'Specialty Pharmacy', desc: 'Limited distribution and specialty pharmacy networks are critical for high-cost biologics and cell/gene therapies.' },
  { title: 'Manufacturing Resilience', desc: 'Onshoring and dual-sourcing strategies remain priorities after pandemic supply shocks.' },
];

const BIONIXUS_SERVICES = [
  { title: 'Physician Surveys & KOL Mapping', desc: 'Quantitative and qualitative research with US physicians across specialties, IDNs, and community settings.' },
  { title: 'Market Access & Payer Strategy', desc: 'CMS, commercial payer, and PBM landscape research to stress-test formulary and contracting hypotheses.' },
  { title: 'Competitive Intelligence', desc: 'Launch tracking, share-of-voice, and channel monitoring across key US therapeutic categories.' },
  { title: 'Market Entry & Expansion', desc: 'Indication prioritisation, stakeholder mapping, and go-to-market planning for US launches.' },
];

const UsaPharmaCompanies = () => {
  const past70Percent = useScrollThreshold(70);
  const { language } = useLanguage();
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-usa';

  const ogTitle = 'Top Pharmaceutical Companies in USA (2026 Ranked List)';
  const ogDescription = 'Complete 2026 list of pharmaceutical companies in the USA — Big Pharma, biotech, wholesalers, FDA/CMS context. Research by BioNixus.';

  return (
    <div className="directory-page min-h-screen">
      <Helmet>
        <title>Top Pharmaceutical Companies in USA (2026 Ranked List)</title>
        <meta name="description" content="Complete 2026 list of pharmaceutical companies in the USA — Big Pharma, biotech, wholesalers, FDA/CMS context. Research by BioNixus." />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, pharmaCompanies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline: 'Pharmaceutical Companies in the USA: Complete Industry Guide 2026', description: 'Guide to pharmaceutical companies in the United States — major manufacturers, biotech leaders, wholesalers, FDA/CMS landscape, and market structure for 2026.', url: citationUrl, datePublished: '2026-08-14', dateModified: '2026-09-05', author: personAuthorJsonLd(PAGE_AUTHOR), publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in the USA', item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, faqItems))}</script>
      </Helmet>
      <OpenGraphMeta
        title={ogTitle}
        description={ogDescription}
        image="https://www.bionixus.com/og-image.png"
        url={citationUrl}
        type="article"
        locale={language === 'ar' ? 'ar_SA' : 'en_US'}
        alternateLocales={language === 'ar' ? ['en_US'] : ['ar_SA']}
      />
      <Navbar />
      <ReportReadingProgress progressId="pharma-guide-rp-usa" />
      <main>
        <div data-hero-lcp>
          <DirectoryHero
            breadcrumbs={[
              { name: 'Home', href: '/' },
              { name: 'Resources', href: '/resources' },
              { name: 'Pharmaceutical Companies in the USA', href: '/pharmaceutical-companies-usa' },
            ]}
            kicker="Industry Guide 2026"
            h1="Pharmaceutical Companies in the USA"
            lead={
              <>
                The United States is the world&apos;s largest pharmaceutical market — BioNixus sizes prescription medicines at USD 590–640 billion in 2026 — with headquarters and major commercial operations for
                most global innovators. Pharmaceutical companies in the USA set the pace for specialty, oncology, and
                metabolic launches — start from{' '}
                <Link to="/healthcare-market-research">healthcare market research</Link> for programme scoping.
              </>
            }
            rest="This guide covers major manufacturers, biotech leaders, wholesalers, FDA/CMS dynamics, distribution channels, and strategic opportunities."
            metaLine="Last updated: September 2026 · Sources: FDA, CMS, company filings, BioNixus research"
            stats={[
              { value: '$590–640B', label: 'Rx pharma market (BioNixus)' },
              { value: '340M+', label: 'Population' },
              { value: 'FDA', label: 'Primary drug regulator' },
              { value: 'CMS', label: 'Federal payer / coverage' },
            ]}
            actions={
              <>
                <DirectoryGoldLink to="#request-proposal">Request a USA research proposal</DirectoryGoldLink>
                <DirectoryOutlineLink href="#top-companies">Browse the companies</DirectoryOutlineLink>
              </>
            }
          />
        </div>

        <DirectoryJumpNav
          items={[
            { href: '#pharma-companies-quick-answer', label: 'Answer' },
            { href: '#top-companies', label: 'Companies' },
            { href: '#companies-by-category', label: 'Categories' },
            { href: '#regulatory-landscape', label: 'FDA / CMS' },
            { href: '#distribution-channels', label: 'Channels' },
            { href: '#growth-drivers', label: 'Drivers' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <DirectorySection id="cite" eyebrow="Attribution">
          <div className="premium-card p-5">
            <p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BioNixus. &quot;Pharmaceutical Companies in the USA: Complete Industry Guide 2026.&quot; BioNixus
              Healthcare Market Research, Aug. 2026,{' '}
              <a href={citationUrl} className="text-primary hover:underline break-all">
                {citationUrl}
              </a>
              .
              <br />
              Licensed under{' '}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CC BY 4.0
              </a>{' '}
              — free to share and adapt with attribution.
            </p>
          </div>
          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" />
        </DirectorySection>

        <PharmaCompaniesQuickAnswer
          country="usa"
          marketSize="approximately USD 600 billion-plus (prescription medicines, established public ballpark)"
          growthRate="mature volume with specialty and GLP-1-led value growth"
          regulatorLabel="FDA and CMS"
          topCompanyNames={pharmaCompanies.map((c) => c.name)}
        />

        <ReportContentWithAside config={PHARMA_CONVERSION} containerClassName={PHARMA_GUIDE_ARTICLE_CONTAINER}>
          <DirectorySection id="market-overview" eyebrow="Market" title="USA Pharmaceutical Market Overview">
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                The US pharmaceutical market is the <strong className="text-foreground">largest globally</strong>, with
                prescription spend commonly framed in the <strong className="text-foreground">USD 600 billion-plus</strong>{' '}
                range. Growth is concentrated in specialty medicines, oncology, immunology, and metabolic therapies
                (including GLP-1s), while traditional primary-care categories remain more mature.
              </p>
              <p>
                Regulation is led by the <strong className="text-foreground">FDA</strong> (approval, manufacturing
                quality, labelling) and coverage policy by <strong className="text-foreground">CMS</strong> (Medicare,
                Medicaid) alongside commercial PBMs and insurers. Distribution is dominated by the &quot;Big Three&quot;
                wholesalers and specialty pharmacy networks.
              </p>
              <p>
                For comparative country programmes, see our{' '}
                <Link to="/healthcare-market-research" className="text-primary hover:underline">
                  healthcare market research hub
                </Link>{' '}
                and peer directories for the UK, Germany, Brazil, and Canada.
              </p>
            </div>
          </DirectorySection>

          <DirectorySection
            id="top-companies"
            surface="cream"
            eyebrow="Ranked list"
            title="Top Pharmaceutical Companies in the USA"
            body="US-market revenue leaders first, then the full operating table — US-headquartered manufacturers, foreign multinational affiliates, and national wholesalers."
          >
            <div className="premium-card p-6 md:p-8 mb-10">
              <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                Top 10 pharmaceutical companies in the USA (2026, by US-market revenue)
              </h3>
              <ol className="space-y-4">
                {TOP_10_US_PHARMA.map((company, index) => (
                  <li key={company.name} className="flex items-start gap-4">
                    <span className="directory-rank mt-0.5 w-8 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                    <span>
                      <strong className="text-foreground">{company.name}</strong>
                      <span className="text-muted-foreground"> — {company.note}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
              <table className="directory-table">
                <thead>
                  <tr>
                    <th scope="col" className="w-12">
                      #
                    </th>
                    <th scope="col">Company</th>
                    <th scope="col">HQ</th>
                    <th scope="col" className="hidden md:table-cell">
                      Type
                    </th>
                    <th scope="col" className="hidden lg:table-cell">
                      Therapeutic Areas
                    </th>
                    <th scope="col" className="hidden xl:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pharmaCompanies.map((company, index) => (
                    <tr key={company.name}>
                      <td className="directory-rank">{String(index + 1).padStart(2, '0')}</td>
                      <td className="font-semibold text-foreground">{company.name}</td>
                      <td className="text-muted-foreground">{company.hq}</td>
                      <td className="hidden md:table-cell">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${TYPE_BADGE[company.type]}`}
                        >
                          {company.type}
                        </span>
                      </td>
                      <td className="text-muted-foreground hidden lg:table-cell">{company.therapeuticAreas}</td>
                      <td className="text-muted-foreground text-xs hidden xl:table-cell">{company.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PharmaDirectoryBridge
              countryName="United States"
              countryDisplay="the USA"
              directorySlug="usa"
              ctaId="pharma_companies_usa_after_table"
            />
          </DirectorySection>

          <ReportMidPageCta config={PHARMA_CONVERSION} />

          <DirectorySection
            id="companies-by-category"
            eyebrow="Categories"
            title="List of Pharmaceutical Companies in the USA by Category"
            body="US pharmaceutical companies span headquarters manufacturers, foreign multinational affiliates with large US operations, and national wholesaler/specialty pharmacy networks."
          >
            <div className="grid md:grid-cols-2 gap-5">
              <DirectoryCategoryCard
                title="US-Headquartered Manufacturers"
                icon={<Pill className="w-5 h-5" />}
                blurb="US-headquartered innovators and biotech majors anchor the market — Pfizer, J&J, Merck, AbbVie, Lilly, BMS, Amgen, Gilead, Regeneron, Vertex, Moderna, and Biogen among others."
                names={pharmaCompanies.filter((c) => c.type === 'Local Manufacturer').map((c) => c.name)}
              />
              <DirectoryCategoryCard
                title="Multinational Pharma Affiliates"
                icon={<Globe className="w-5 h-5" />}
                blurb="European and Japanese MNCs maintain large US commercial and manufacturing footprints (Novartis, Roche/Genentech, Sanofi, AstraZeneca, GSK, Novo Nordisk, Takeda, Bayer)."
                names={pharmaCompanies.filter((c) => c.type === 'MNC Office').map((c) => c.name)}
              />
              <div className="md:col-span-2">
                <DirectoryCategoryCard
                  title="Wholesalers & Distribution"
                  icon={<Truck className="w-5 h-5" />}
                  blurb="McKesson, Cencora (AmerisourceBergen), and Cardinal Health dominate wholesale distribution and specialty pharmacy logistics."
                  names={pharmaCompanies.filter((c) => c.type === 'Distributor').map((c) => c.name)}
                />
              </div>
            </div>
          </DirectorySection>

          <DirectorySection
            id="regulatory-landscape"
            surface="cream"
            eyebrow="Access"
            title="Pharma Companies in the USA: Regulatory Landscape (FDA / CMS)"
            body="FDA leads drug approval and quality; CMS and commercial payers shape coverage and reimbursement."
          >
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div className="premium-card p-6 md:p-7">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
                  Regulatory Authorities
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  <strong className="text-foreground">FDA</strong> leads approval and quality oversight;{' '}
                  <strong className="text-foreground">CMS</strong> shapes federal coverage. Commercial payers and PBMs
                  control most private formulary access. Pricing and access debates centre on IRA negotiation, Part D
                  redesign, and specialty utilization management.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Approval Pathways</p>
                    <p className="text-lg font-semibold text-foreground">NDA/BLA with priority and accelerated options</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing / Access Model</p>
                    <p className="text-sm text-foreground">
                      Commercial + Medicare/Medicaid; IRA negotiation for selected drugs
                    </p>
                  </div>
                </div>
              </div>
              <div className="premium-card p-6 md:p-7">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-[#C9A84C]" />
                  Key Registration Requirements
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li>FDA CTD/eCTD dossier and manufacturing inspections</li>
                  <li>GMP / cGMP compliance</li>
                  <li>Labelling and REMS where applicable</li>
                  <li>Pharmacovigilance and post-marketing commitments</li>
                  <li className="font-medium">US agent / affiliate typically required for foreign applicants</li>
                </ul>
              </div>
            </div>
          </DirectorySection>

          <DirectorySection
            id="distribution-channels"
            eyebrow="Channels"
            title="Drug Distribution Channels in the USA"
            body="US pharmaceutical distribution is dominated by national wholesalers feeding retail, hospital, and specialty pharmacy channels."
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="premium-card p-6 md:p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#C9A84C]" />
                  Private / Commercial Channel
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>Commercial insurance and employer plans dominate private utilisation, with PBMs managing formularies and rebates.</p>
                  <ul className="space-y-2 text-foreground">
                    <li>Retail chains and independent pharmacies</li>
                    <li>Specialty pharmacy limited networks</li>
                    <li>Hospital GPO purchasing</li>
                    <li>PBM formulary and prior authorisation</li>
                  </ul>
                </div>
              </div>
              <div className="premium-card p-6 md:p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#C9A84C]" />
                  Public Payer Channel
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>Medicare (Parts B/D), Medicaid, and VA/DoD channels are major public payers.</p>
                  <ul className="space-y-2 text-foreground">
                    <li>CMS coverage and IRA negotiation</li>
                    <li>State Medicaid formularies</li>
                    <li>340B and safety-net channels</li>
                    <li>VA/DoD procurement</li>
                  </ul>
                </div>
              </div>
            </div>
          </DirectorySection>

          <DirectorySection
            id="growth-drivers"
            surface="cream"
            eyebrow="Outlook"
            title="USA Pharmaceutical Market Growth Drivers"
            body="Specialty innovation, metabolic demand, and payer reform are reshaping the US pharmaceutical landscape."
          >
            <div className="grid md:grid-cols-3 gap-5">
              {GROWTH_DRIVERS.map((driver) => (
                <DirectoryDriverCard key={driver.title} title={driver.title} desc={driver.desc} />
              ))}
            </div>
          </DirectorySection>

          <DirectorySection
            id="bionixus-support"
            eyebrow="Fieldwork"
            title="How BioNixus Supports Pharma Companies in the USA"
            body={
              <>
                BioNixus is a healthcare market research company supporting pharma and biotech programmes in the United
                States and globally. For company-level US programmes, see our{' '}
                <Link to="/pharmaceutical-market-research-usa" className="text-primary hover:underline font-medium">
                  market research company for USA pharma
                </Link>
                . We help pharma, biotech, and medtech companies with:
              </>
            }
          >
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {BIONIXUS_SERVICES.map((service) => (
                <DirectoryDriverCard key={service.title} title={service.title} desc={service.desc} />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              For tailored healthcare research, explore our{' '}
              <Link to="/healthcare-market-research" className="text-primary hover:underline">
                healthcare market research services
              </Link>{' '}
              or contact our{' '}
              <Link to="/healthcare-market-research/united-states" className="text-primary hover:underline">
                US pharmaceutical market research team
              </Link>
              .
            </p>
          </DirectorySection>

          <DirectorySection
            id="peer-directories"
            surface="cream"
            eyebrow="Compare markets"
            title="Pharmaceutical companies in other major markets"
            body="Compare the US pharmaceutical industry with BioNixus company directories for peer markets."
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {RELATED_DIRECTORIES.map((link) => (
                <DirectoryLinkTile key={link.to} to={link.to} title={link.title} />
              ))}
            </div>
          </DirectorySection>

          <section className="section-padding py-10" id="country-directories">
            <div className="container-wide w-full">
              <CountryDirectoryLinks country="usa" excludePath="/pharmaceutical-companies-usa" compact />
            </div>
          </section>

          <PharmaCompaniesFaqSection items={faqItems} contained />

          <PharmaCompaniesGlobalHubLinks country="usa" />

          <DirectorySection id="methodology" eyebrow="Sources" title="Data Sources & Methodology">
            <div className="premium-card p-6 md:p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C9A84C]" />
                How this guide was compiled
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This guide aggregates publicly available information from:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>FDA and CMS public materials</li>
                <li>Company 10-K / annual reports and investor disclosures</li>
                <li>Wholesaler and specialty pharmacy channel disclosures</li>
                <li>BioNixus primary research with US healthcare stakeholders (2024–2026)</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For customised market intelligence on the USA,{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  contact our team
                </Link>
                .
              </p>
            </div>
          </DirectorySection>
        </ReportContentWithAside>

        <div id="request-proposal">
          <ReportConsultationBand config={PHARMA_CONVERSION} />
        </div>
      </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA
              variant="talk-to-research"
              market="the USA"
              ctaId="pharma_companies_usa_scroll70"
              ctaLocation="scroll_70_percent"
              className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UsaPharmaCompanies;
