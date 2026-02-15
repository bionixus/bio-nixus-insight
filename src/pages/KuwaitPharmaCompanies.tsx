import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

/* ------------------------------------------------------------------ */
/* Pharmaceutical companies operating in Kuwait — local & MNC offices  */
/* Sources: MOH Kuwait, KSPICO, YIACO, Alghanim, company filings      */
/* ------------------------------------------------------------------ */

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'Kuwait Saudi Pharmaceutical Industries (KSPICO)', hq: 'Kuwait', type: 'Local Manufacturer', therapeuticAreas: 'Generics, IV solutions, oral solids & liquids, topicals', notes: 'Kuwait\'s only GMP-certified manufacturer; 120+ products; owned by Mezzan Holding' },
  { name: 'YIACO Medical (Kuwait Drug Company)', hq: 'Kuwait', type: 'Distributor', therapeuticAreas: 'Oncology, haematology, immunology, rare diseases', notes: 'Largest pharma distributor; represents Roche, Octapharma; operates 22 retail pharmacies' },
  { name: 'Alghanim Industries — Healthcare Division', hq: 'Kuwait', type: 'Distributor', therapeuticAreas: 'Multi-therapeutic, medical devices', notes: 'One of Kuwait\'s largest conglomerates; represents multiple MNC principals' },
  { name: 'Warba Pharmaceutical Company', hq: 'Kuwait', type: 'Distributor', therapeuticAreas: 'Generics, OTC, consumer health', notes: 'Major local distributor serving retail pharmacy and hospital channels' },
  { name: 'Al-Rashed International Shipping (Pharma Division)', hq: 'Kuwait', type: 'Distributor', therapeuticAreas: 'Cold-chain biologics, vaccines', notes: 'Specialised cold-chain pharmaceutical logistics across Kuwait' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Regional office covers Kuwait; significant MOH tender presence' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Top 3 MNC by value sales in Kuwait; strong hospital formulary presence' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Distributed via YIACO; leading oncology portfolio in Kuwait' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'Strong insulin franchise; #1 diabetes brand in Kuwait' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'Growing oncology and respiratory presence; active in MOH tenders' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'Largest vaccine supplier in Kuwait; Ventolin market leader' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease, diabetes', notes: 'Keytruda growing rapidly; HPV vaccine programme with MOH' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Humira & Rinvoq franchise; strong dermatology presence' },
  { name: 'Eli Lilly', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Diabetes, oncology, immunology, neuroscience', notes: 'Fastest-growing MNC in MEA (100%+ YoY); GLP-1 agonist demand surge' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases, haemophilia', notes: 'Market leader in insulin; Ozempic/Wegovy driving growth' },
  { name: 'Julphar (Gulf Pharmaceutical Industries)', hq: 'UAE', type: 'Regional', therapeuticAreas: 'Generics, anti-infectives, cardiovascular, diabetes', notes: 'Largest Arab pharma manufacturer; exports to Kuwait extensively' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'MENA-headquartered MNC; strong injectable portfolio in Kuwait hospitals' },
  { name: 'Tabuk Pharmaceutical', hq: 'Saudi Arabia', type: 'Regional', therapeuticAreas: 'Generics, anti-infectives, gastroenterology', notes: 'Part of Astellas; growing GCC exports including Kuwait' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Respiratory, cardiovascular, metabolism, oncology', notes: 'Jardiance diabetes franchise; animal health division also active' },
  { name: 'Bayer', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Cardiovascular, oncology, consumer health, crop science', notes: 'Xarelto anticoagulant leader; consumer health (Aspirin, Bepanthen) strong in retail' },
];

const faqItems = [
  {
    q: 'How many pharmaceutical companies operate in Kuwait?',
    a: 'Approximately 148 pharmaceutical companies operate in Kuwait, including one local GMP-certified manufacturer (KSPICO), several major distributors (YIACO, Alghanim, Warba), and offices or representatives of over 100 multinational pharmaceutical companies. Kuwait imports approximately 95% of its pharmaceuticals.',
  },
  {
    q: 'What is the size of Kuwait\'s pharmaceutical market?',
    a: 'Kuwait\'s pharmaceutical market is valued at approximately US$1.2 billion (2024–2025) and is projected to grow at a 5.1–5.7% CAGR through 2030. Oncology drugs represent the largest segment at approximately US$169 million, followed by anti-diabetes and anti-hypertensive medications.',
  },
  {
    q: 'How do you register a pharmaceutical product in Kuwait?',
    a: 'Pharmaceutical registration in Kuwait is managed by the Ministry of Health\'s Drug & Food Control Administration under Ministerial Decree No. 302/2019. Companies must submit clinical trial data, quality documentation, GMP certificates, and product samples. Registration typically takes 12–24 months, and a local authorised agent is mandatory for foreign companies.',
  },
  {
    q: 'Who regulates pharmaceuticals in Kuwait?',
    a: 'The Ministry of Health (MOH) — specifically the Drug & Food Control Administration — is the primary pharmaceutical regulatory authority in Kuwait. It oversees drug registration, pricing (cost-plus model), quality control, pharmacovigilance, and import licensing. Kuwait also participates in the GCC Centralised Registration Procedure.',
  },
  {
    q: 'What are the main pharmaceutical distribution channels in Kuwait?',
    a: 'Kuwait\'s pharmaceutical distribution operates through two main channels: government hospitals and polyclinics (which provide free medications to Kuwaiti citizens and account for ~60% of volume) and the private sector (private hospitals, clinics, and retail pharmacies covering ~40%). The Central Medical Stores division of MOH manages government procurement through public tenders.',
  },
  {
    q: 'Is local pharmaceutical manufacturing growing in Kuwait?',
    a: 'Local manufacturing remains limited — KSPICO is currently Kuwait\'s only GMP-certified pharmaceutical manufacturer. However, Kuwait\'s Vision 2035 "New Kuwait" strategy includes healthcare self-sufficiency goals, and the pharmaceutical contract manufacturing market (valued at US$370 million in 2024) is growing due to government incentives and demand for generic drugs.',
  },
];

const KuwaitPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-kuwait';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Kuwait | Industry Guide 2026 | BioNixus</title>
        <meta
          name="description"
          content="Complete guide to pharmaceutical companies in Kuwait for 2026: top pharma companies list, market size ($1.2B), MOH drug registration, distribution channels, and industry outlook. Local manufacturers, MNC offices, and distributors."
        />
        <meta
          name="keywords"
          content="pharmaceutical companies in Kuwait, Kuwait pharmaceutical companies, pharma companies in Kuwait, top pharmaceutical companies in Kuwait, list of pharmaceutical companies in Kuwait, Kuwait pharma market, drug registration Kuwait, Kuwait MOH pharmaceutical, Kuwait pharmaceutical industry 2026"
        />
        <link rel="canonical" href={citationUrl} />
        <meta property="og:title" content="Pharmaceutical Companies in Kuwait — Complete Industry Guide 2026" />
        <meta property="og:description" content="Comprehensive guide: 20+ pharmaceutical companies in Kuwait, $1.2B market data, MOH registration process, distribution channels, and market outlook for pharma companies." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={citationUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Pharmaceutical Companies in Kuwait: Complete Industry Guide 2026',
            description: 'Comprehensive guide to pharmaceutical companies operating in Kuwait — including local manufacturers, multinational offices, distributors, market data, regulatory landscape, and industry outlook.',
            url: citationUrl,
            datePublished: '2026-02-15',
            dateModified: '2026-02-15',
            author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
            publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Kuwait' },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to={basePath} className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-foreground">Pharmaceutical Companies in Kuwait</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Industry Guide 2026
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Pharmaceutical Companies in Kuwait
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              A comprehensive guide to the pharmaceutical industry in Kuwait — covering major pharma companies, market size and growth, drug registration with the Ministry of Health, distribution channels, and strategic opportunities for pharmaceutical and life sciences companies entering the Kuwaiti market.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: February 2026 &middot; Sources: Kuwait MOH, IQVIA MEA, Ken Research, KSPICO, YIACO, company filings
            </p>

            {/* Citation box */}
            <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl">
              <div className="flex items-start gap-3">
                <Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    BioNixus. &quot;Pharmaceutical Companies in Kuwait: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026,{' '}
                    <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.
                    <br />
                    Licensed under{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      CC BY 4.0
                    </a>{' '}
                    — free to share and adapt with attribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$1.2B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">8.4%</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">4.9M</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Population</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$245</p>
                <p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Kuwait Pharmaceutical Market Overview</a>
              <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies in Kuwait</a>
              <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
              <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape</a>
              <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
              <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Market Growth Drivers</a>
              <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Kuwait</a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="section-padding py-16" id="market-overview">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Kuwait Pharmaceutical Market Overview
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Kuwait&apos;s pharmaceutical market is valued at approximately <strong className="text-foreground">US$1.2 billion</strong> and is projected to grow at a 5.1&ndash;5.7% compound annual growth rate (CAGR) through 2030. Despite being one of the smaller GCC markets by population (4.9 million), Kuwait boasts the third-highest pharmaceutical spending per capita in the Gulf region at <strong className="text-foreground">$245 per person</strong>, reflecting the country&apos;s generous government-funded healthcare system.
              </p>
              <p>
                A defining characteristic of Kuwait pharmaceutical companies and the broader industry is its near-total reliance on imports: <strong className="text-foreground">approximately 95% of all pharmaceuticals consumed in Kuwait are imported</strong>. This creates significant opportunities for multinational pharmaceutical companies, regional manufacturers, and specialist distributors. The government procurement channel — managed through MOH&apos;s Central Medical Stores — accounts for roughly 60% of pharmaceutical volume, with the private sector (hospitals, clinics, and retail pharmacies) covering the remaining 40%.
              </p>
              <p>
                Oncology drugs represent the largest therapeutic segment at approximately US$169 million, followed by anti-diabetes medications (driven by Kuwait&apos;s diabetes prevalence rate of ~22%, one of the highest globally), anti-hypertensives, and respiratory treatments. The growing burden of chronic disease, combined with an ageing expatriate workforce and rising patient expectations, continues to drive pharmaceutical demand across all categories.
              </p>
              <p>
                For a broader regional context, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Top Pharmaceutical Companies Table */}
        <section className="section-padding py-16 bg-muted/30" id="top-companies">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Top Pharmaceutical Companies in Kuwait
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              The following table lists the major pharmaceutical companies operating in Kuwait — including local manufacturers, multinational corporation offices, regional players, and specialist distributors. This is not an exhaustive list of all 148+ registered companies, but represents the most significant players by market share and therapeutic coverage.
            </p>

            {/* Responsive table */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Company</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pharmaCompanies.map((c, i) => (
                    <tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}>
                      <td className="px-4 py-3 font-medium text-foreground">{c.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.hq}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' :
                          c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' :
                          c.type === 'Regional' ? 'bg-amber-50 text-amber-700' :
                          'bg-purple-50 text-purple-700'
                        }`}>
                          {c.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card view */}
            <div className="mt-6 md:hidden space-y-4">
              <p className="text-xs text-muted-foreground italic">Showing {pharmaCompanies.length} companies. Scroll the table or tap cards below for full details.</p>
            </div>
          </div>
        </section>

        {/* Companies by Category */}
        <section className="section-padding py-16" id="companies-by-category">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              List of Pharmaceutical Companies in Kuwait by Category
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Kuwait pharmaceutical companies fall into four main categories: local manufacturers, multinational corporation offices, regional Arab pharmaceutical companies, and specialist distributors.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Local Manufacturers */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Pill className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Kuwait&apos;s local pharmaceutical manufacturing sector is limited but strategically important. KSPICO (Kuwait Saudi Pharmaceutical Industries Company) is the country&apos;s only GMP-certified manufacturer, producing over 120 products including oral solids, liquids, IV solutions, and topical formulations. The pharmaceutical contract manufacturing market in Kuwait reached US$370 million in 2024, with government incentives under Vision 2035 encouraging further expansion.
                </p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (
                    <li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>
                  ))}
                </ul>
              </div>

              {/* MNC Offices */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Most major global pharmaceutical companies maintain direct or representative offices in Kuwait, typically through regional hubs in Dubai or Riyadh. These companies dominate the innovator drug segment and drive therapeutic advancement across oncology, immunology, diabetes, and rare diseases. MNCs collectively hold approximately 59% of Kuwait&apos;s pharmaceutical market value.
                </p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (
                    <li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>
                  ))}
                </ul>
              </div>

              {/* Regional */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Regional Arab Pharma Companies</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Regional pharmaceutical companies headquartered in the UAE, Jordan, and Saudi Arabia play an important role in Kuwait&apos;s market — particularly in the generics, branded generics, and injectable segments. These companies benefit from GCC regulatory harmonisation and shared Arabic-language labelling requirements.
                </p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {pharmaCompanies.filter(c => c.type === 'Regional').map(c => (
                    <li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>
                  ))}
                </ul>
              </div>

              {/* Distributors */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Distributors &amp; Importers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Given that 95% of pharmaceuticals are imported, distributors are the backbone of Kuwait&apos;s pharmaceutical supply chain. Leading distributors handle registration, marketing, sales, warehousing, and last-mile delivery on behalf of international principals. YIACO and Alghanim are the largest, each representing dozens of global pharmaceutical brands.
                </p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (
                    <li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Landscape */}
        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Pharma Companies in Kuwait: Regulatory Landscape
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Understanding Kuwait&apos;s pharmaceutical regulatory environment is essential for any company planning to register, manufacture, or distribute drugs in the country.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  Regulatory Authority
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The <strong className="text-foreground">Ministry of Health (MOH) — Drug &amp; Food Control Administration</strong> is the primary pharmaceutical regulatory body in Kuwait. It oversees drug registration, quality control, pricing approval, pharmacovigilance, and import licensing under <strong className="text-foreground">Ministerial Decree No. 302/2019</strong>.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p>
                    <p className="text-lg font-semibold text-foreground">12&ndash;24 months</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p>
                    <p className="text-lg font-semibold text-foreground">5 years</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p>
                    <p className="text-sm text-foreground">Cost-plus pricing with manufacturer price ceiling</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-primary" />
                  Key Registration Requirements
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                    <span>Common Technical Document (CTD) format dossier with complete Module 1&ndash;5 documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                    <span>Clinical trial data and bioequivalence studies (for generics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                    <span>GMP certificates from recognised international authorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                    <span>Certificate of Pharmaceutical Product (CPP) and Free Sale Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                    <span>Product samples for laboratory analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                    <span>Arabic labelling mandatory; patient information leaflets in Arabic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span>
                    <span className="font-medium">Local authorised agent mandatory for all foreign companies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">GCC Centralised Registration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kuwait participates in the <strong className="text-foreground">GCC Centralised Registration Procedure</strong>, which allows pharmaceutical companies to submit a single application reviewed by one GCC country, with the registration recognised by other member states. While this can expedite market entry, individual country-level pricing approval, import permits, and local agent requirements still apply separately. For complete GCC registration details, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Distribution Channels */}
        <section className="section-padding py-16" id="distribution-channels">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Drug Distribution Channels in Kuwait
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Kuwait&apos;s pharmaceutical distribution system is shaped by its government-funded healthcare model, with two distinct channels serving different patient populations.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Government Channel (~60% of volume)
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Kuwaiti citizens receive free healthcare including medications through the Ministry of Health&apos;s network of <strong className="text-foreground">6 public hospitals, 100+ primary health centres (polyclinics)</strong>, and specialty care facilities. The <strong className="text-foreground">Central Medical Stores (CMS)</strong> division manages all government pharmaceutical procurement through public tenders.
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Central Medical Stores (CMS) procurement via public tenders</li>
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hospital formulary committees determine drug selection</li>
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Preference for lowest-cost GMP-certified suppliers</li>
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Growing interest in biosimilars to manage costs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Private Sector (~40% of volume)
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Expatriates (who make up ~70% of Kuwait&apos;s population) primarily access healthcare through private hospitals, clinics, and retail pharmacies. The private sector is also where branded and innovator drugs see stronger demand, as physician prescribing is less constrained by formulary restrictions.
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> 12+ private hospitals (Dar Al Shifa, Hadi Hospital, Royale Hayat, etc.)</li>
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> 1,000+ retail pharmacies (chains: YIACO, Pharmazone, Care Pharmacy)</li>
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Private insurance coverage growing but not yet mandatory</li>
                    <li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Higher willingness to pay for branded/innovator products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Drivers */}
        <section className="section-padding py-16 bg-muted/30" id="growth-drivers">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Kuwait Pharmaceutical Market Growth Drivers
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Multiple structural factors are driving sustained growth in Kuwait&apos;s pharmaceutical sector.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Vision 2035 "New Kuwait"',
                  desc: 'Kuwait\'s national development plan prioritises healthcare transformation, including hospital expansion, digital health infrastructure, and pharmaceutical self-sufficiency targets. The government is investing in new healthcare facilities and incentivising local pharmaceutical production.',
                },
                {
                  title: 'Chronic Disease Burden',
                  desc: 'Kuwait has one of the world\'s highest diabetes prevalence rates (~22%) and significant cardiovascular disease burden. Obesity rates exceed 40%, driving demand for GLP-1 agonists, anti-hypertensives, and metabolic disease therapies.',
                },
                {
                  title: 'Healthcare Spending Growth',
                  desc: 'Government healthcare expenditure continues to increase, with Kuwait spending approximately 5.5% of GDP on healthcare. Per-capita pharmaceutical spending of $245 is among the highest in the GCC, and growing.',
                },
                {
                  title: 'Oncology Drug Demand',
                  desc: 'Oncology is the largest pharmaceutical segment ($169M) and fastest-growing category. Kuwait Cancer Control Centre and expanding private oncology services are driving adoption of immunotherapies, targeted agents, and biosimilars.',
                },
                {
                  title: 'Population Demographics',
                  desc: 'Kuwait\'s population of 4.9 million includes a 70% expatriate workforce. An ageing Kuwaiti citizen population and young expatriate demographics create diverse pharmaceutical demand patterns.',
                },
                {
                  title: 'Regulatory Modernisation',
                  desc: 'Kuwait MOH is modernising drug registration processes, participating in GCC harmonisation initiatives, and adopting international standards (ICH guidelines) — creating more predictable market access pathways for pharmaceutical companies.',
                },
              ].map((d) => (
                <div key={d.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BioNixus Support */}
        <section className="section-padding py-16" id="bionixus-support">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              How BioNixus Supports Pharma Companies in Kuwait
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              BioNixus is a leading healthcare market research company with deep expertise in the Kuwaiti and wider GCC pharmaceutical market. We help pharma, biotech, and medtech companies make evidence-based strategic decisions through:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: 'Physician Surveys & KOL Mapping',
                  desc: 'Quantitative and qualitative research with Kuwaiti physicians, pharmacists, and hospital formulary decision-makers. Access to 200+ healthcare professionals across government and private sectors.',
                },
                {
                  title: 'Market Access & Pricing Strategy',
                  desc: 'MOH formulary inclusion strategy, competitive pricing analysis, reimbursement landscape assessment, and payer research to optimise your product\'s commercial success in Kuwait.',
                },
                {
                  title: 'Competitive Intelligence',
                  desc: 'Real-time monitoring of competitor launches, tender outcomes, formulary changes, and market share dynamics across all therapeutic areas in Kuwait.',
                },
                {
                  title: 'Market Entry Strategy',
                  desc: 'Comprehensive market assessment for pharma companies entering Kuwait — including regulatory pathway analysis, partner identification, KOL engagement, and go-to-market planning.',
                },
              ].map((s) => (
                <div key={s.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding py-16 bg-muted/30" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="section-padding py-12" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Data Sources &amp; Methodology
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This guide aggregates publicly available information from the following sources:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>IQVIA Middle East &amp; Africa Pharmaceutical Market Quarterly Report, Q3 2024</li>
                <li>Ken Research — Kuwait Pharmaceutical Market Size &amp; Outlook, 2025&ndash;2030</li>
                <li>Grand View Research — Kuwait Pharmaceutical Market Report, 2025&ndash;2030</li>
                <li>Kuwait Ministry of Health — Drug &amp; Food Control Administration publications</li>
                <li>Ministerial Decree No. 302/2019 on Registration &amp; Pricing of Pharmaceutical Products</li>
                <li>KSPICO, YIACO, and company annual reports and corporate websites</li>
                <li>BioNixus proprietary research from physician surveys across Kuwait (2024&ndash;2025)</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Company data reflects publicly available information as of February 2026. Market valuations are estimated based on IQVIA and third-party research. For customised market intelligence on Kuwait, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Need Market Intelligence on Kuwait?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus delivers custom pharmaceutical market research across Kuwait and the GCC — physician surveys, competitive intelligence, market access strategy, and KOL mapping for pharma, biotech, and medtech companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KuwaitPharmaCompanies;
