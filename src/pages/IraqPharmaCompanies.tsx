import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'SDI (State Company for Drug Industries)', hq: 'Samarra, Iraq', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic, generics', notes: 'Largest state-owned manufacturer; Samarra-based' },
  { name: 'Iraqi-Egyptian Company for Pharmaceutical Industries', hq: 'Iraq', type: 'Local Manufacturer', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'Joint venture' },
  { name: 'Pioneer Industries Company', hq: 'Iraq', type: 'Local Manufacturer', therapeuticAreas: 'Private generics', notes: 'Private generics manufacturer' },
  { name: 'Dar Al Dawa - Iraq', hq: 'Erbil, Iraq', type: 'Local Manufacturer', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'Jordanian JV, Erbil-based' },
  { name: 'Modern Drug Industries (MDI)', hq: 'Iraq', type: 'Local Manufacturer', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'Private manufacturer' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'MNC office in Iraq' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'MNC office in Iraq' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'MNC office in Iraq' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'MNC office in Iraq' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'MNC office in Iraq' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'MNC office in Iraq' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases, haemophilia', notes: 'MNC office in Iraq' },
  { name: 'Julphar', hq: 'UAE', type: 'Regional', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'UAE regional player' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'Strong Iraq presence' },
  { name: 'Pharma International', hq: 'Jordan', type: 'Regional', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'Jordan-based regional' },
  { name: 'SPIMACO', hq: 'Saudi Arabia', type: 'Regional', therapeuticAreas: 'Generics, OTC, biosimilars', notes: 'Saudi regional presence' },
  { name: 'Ibn Hayyan Pharma', hq: 'Iraq', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Major distributor' },
  { name: 'Dijla Pharma', hq: 'Baghdad, Iraq', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Baghdad-based distributor' },
  { name: 'Al Masar Pharma', hq: 'Iraq', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Pharma distributor' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in Iraq?', a: 'Iraq has approximately 18 major pharmaceutical companies including local manufacturers (e.g. SDI, Iraqi-Egyptian Company, Pioneer Industries, Dar Al Dawa - Iraq, MDI), MNC offices (Pfizer, Novartis, Roche, Sanofi, AstraZeneca, GSK, Novo Nordisk), regional players (Julphar, Hikma, Pharma International, SPIMACO), and major distributors (Ibn Hayyan Pharma, Dijla Pharma, Al Masar Pharma). The market is valued at $2.8 billion with ~80% import dependency.' },
  { q: 'What is the size of Iraq\'s pharmaceutical market?', a: 'Iraq\'s pharmaceutical market is valued at approximately US$2.8 billion, growing at 8.5% year-over-year. With a population of 44.5 million (second-largest Arab state) and per-capita pharmaceutical spending of $63, the market has massive growth potential. Post-conflict healthcare reconstruction ($5B+ invested) and chronic disease burden are key drivers.' },
  { q: 'What is KIMADIA\'s role in Iraq\'s pharmaceutical market?', a: 'KIMADIA (State Company for Marketing Drugs & Medical Appliances) under the Ministry of Health (MOH) dominates government procurement in federal Iraq. It manages drug registration, tender pricing, and distribution to public healthcare facilities. Pricing is government-controlled via KIMADIA tender pricing. Private pharmacies (30,000+) serve the private channel.' },
  { q: 'How does the Kurdistan Region (KRG) market differ?', a: 'The Kurdistan Region has a separate healthcare market and procurement system from federal Iraq. Companies targeting the full Iraqi market must engage both federal (MOH/KIMADIA) and KRG systems. KRG represents a distinct access pathway and formulary environment.' },
  { q: 'What is the status of local pharmaceutical manufacturing in Iraq?', a: 'Local manufacturing exists but is limited; approximately 80% of pharmaceuticals are imported. Key local manufacturers include SDI (State Company for Drug Industries, Samarra — largest state-owned), Iraqi-Egyptian Company for Pharmaceutical Industries (joint venture), Pioneer Industries Company, Dar Al Dawa - Iraq (Jordanian JV, Erbil-based), and Modern Drug Industries (MDI). Post-conflict reconstruction is driving investment in healthcare infrastructure.' },
  { q: 'What are the main market entry challenges in Iraq?', a: 'Market entry challenges include navigating dual federal and KRG regulatory/procurement systems, KIMADIA-dominated government tenders, 12–24 month registration timelines with 5-year renewal, government-controlled pricing, and post-conflict operational considerations. Local or regional partners and understanding NGO and international health partnerships can support market access.' },
];

const IraqPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-iraq';

  const ogTitle = "Pharmaceutical Companies in Iraq — Complete Industry Guide 2026";
  const ogDescription = "Comprehensive guide: 18+ pharmaceutical companies in Iraq, $2.8B market data, KIMADIA regulatory landscape, KRG market, and outlook.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Iraq | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in Iraq for 2026: top pharma companies list, $2.8B market size, KIMADIA regulatory landscape, KRG market, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in Iraq, Iraq pharmaceutical companies, pharma companies in Iraq, top pharmaceutical companies in Iraq, list of pharmaceutical companies in Iraq, KIMADIA drug registration, Iraq pharma market, KRG pharmaceutical" />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in Iraq: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in Iraq — local manufacturers, MNC offices, distributors, $2.8B market data, KIMADIA regulatory landscape, and dual federal-KRG market outlook.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Iraq' }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
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
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Iraq</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Iraq</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in Iraq — a large population market (44.5M, second-largest Arab state) with $2.8B market growing at 8.5%. Post-conflict reconstruction is driving investment; KIMADIA dominates government procurement; dual market (federal + KRG); ~80% imports; $63/capita shows massive growth potential.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: MOH, KIMADIA, IQVIA MEA, company and industry reports</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Iraq: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$2.8B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">8.5%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">44.5M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$63</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Iraqi Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> KIMADIA Regulatory Landscape</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Iraq</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Iraq Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Iraq&apos;s pharmaceutical market is a <strong className="text-foreground">large population market</strong> — 44.5 million people (second-largest Arab state) — valued at approximately <strong className="text-foreground">US$2.8 billion</strong>, growing at <strong className="text-foreground">8.5% year-over-year</strong>. Per-capita pharmaceutical spending of <strong className="text-foreground">$63</strong> indicates massive growth potential as healthcare access and insurance coverage expand.</p>
            <p>Post-conflict healthcare reconstruction is driving investment, with <strong className="text-foreground">$5B+ invested</strong> in healthcare. <strong className="text-foreground">KIMADIA</strong> (State Company for Marketing Drugs &amp; Medical Appliances) under the MOH dominates government procurement in federal Iraq. The market is <strong className="text-foreground">dual</strong>: federal Iraq and the <strong className="text-foreground">Kurdistan Region (KRG)</strong> operate separate procurement systems. Approximately <strong className="text-foreground">80% of pharmaceuticals are imported</strong>; local manufacturing is led by SDI (State Company for Drug Industries, Samarra) and a small number of private and joint-venture manufacturers.</p>
            <p>Chronic disease burden (diabetes, cardiovascular) and one of the youngest demographics in the region drive sustained demand. NGO and international health partnerships play a significant role in supply and access. For broader regional context, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Iraq</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major pharmaceutical companies operating in Iraq — including local manufacturers, multinational corporation offices, regional players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Iraq by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Iraq pharmaceutical companies span local manufacturers (state-owned and private), multinational corporation offices, regional players, and major distributors.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Local manufacturing is limited; ~80% of the market is imported. Key players include SDI (State Company for Drug Industries, Samarra — largest state-owned), Iraqi-Egyptian Company for Pharmaceutical Industries (joint venture), Pioneer Industries Company (private generics), Dar Al Dawa - Iraq (Jordanian JV, Erbil-based), and Modern Drug Industries (MDI).</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3></div><p className="text-sm text-muted-foreground mb-4">Major global pharmaceutical companies maintain presence in Iraq. MNCs supply innovator and specialty drugs through KIMADIA tenders and private channels.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Pharma Companies</h3></div><p className="text-sm text-muted-foreground mb-4">Regional players from UAE (Julphar), Jordan/UK (Hikma — strong Iraq presence), Jordan (Pharma International), and Saudi (SPIMACO) are active in the Iraqi market.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">Major distributors include Ibn Hayyan Pharma, Dijla Pharma (Baghdad-based), and Al Masar Pharma. Private pharmacies (30,000+) serve the private channel.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Iraq: KIMADIA Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The Ministry of Health (MOH) and KIMADIA (State Company for Marketing Drugs &amp; Medical Appliances) oversee pharmaceutical registration, pricing, and government procurement in federal Iraq.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">The <strong className="text-foreground">MOH</strong> and <strong className="text-foreground">KIMADIA (State Company for Marketing Drugs &amp; Medical Appliances)</strong> oversee drug registration, government procurement, and distribution in federal Iraq. Pricing is <strong className="text-foreground">government-controlled (KIMADIA tender pricing)</strong>. The Kurdistan Region (KRG) has a separate procurement system.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">12&ndash;24 months</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">5 years</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">Government-controlled (KIMADIA tender pricing)</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Submission via MOH/KIMADIA processes</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP and quality documentation</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Arabic labelling where required</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Tender participation for government channel</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Separate KRG pathway for Kurdistan Region market</span></li></ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Dual Market: Federal Iraq &amp; KRG</h3><p className="text-sm text-muted-foreground leading-relaxed">Companies targeting the full Iraqi market must engage both <strong className="text-foreground">federal Iraq (MOH/KIMADIA)</strong> and the <strong className="text-foreground">Kurdistan Region (KRG)</strong>, which has a separate healthcare and procurement system. For GCC and broader MENA registration context, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p></div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Iraq</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Iraq&apos;s pharmaceutical distribution is split between government procurement (KIMADIA-dominated) and the private channel (pharmacies and distributors).</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Government Channel (KIMADIA)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p><strong className="text-foreground">KIMADIA dominates government procurement</strong> in federal Iraq. Tender pricing is government-controlled. Public hospitals and MOH facilities are supplied through this channel.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> KIMADIA tender system</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> MOH and public healthcare facilities</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Government-controlled pricing</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Private Channel &amp; KRG</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p><strong className="text-foreground">Private pharmacies (30,000+)</strong> serve the private channel. Major distributors include Ibn Hayyan Pharma, Dijla Pharma (Baghdad), and Al Masar Pharma. <strong className="text-foreground">KRG has a separate procurement system</strong> in the Kurdistan Region.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> 30,000+ private pharmacies</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Major distributors (Ibn Hayyan, Dijla, Al Masar)</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> KRG separate procurement in Kurdistan</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Growing insurance coverage</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Iraqi Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Post-conflict reconstruction, demographics, and healthcare investment are driving growth in Iraq&apos;s pharmaceutical sector.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Post-Conflict Healthcare Reconstruction', desc: 'Over $5B+ invested in healthcare reconstruction, creating sustained demand for medicines, hospital supplies, and infrastructure. International and NGO partnerships support access and supply.' },
            { title: 'Population & Demographics', desc: '44.5 million population (second-largest Arab state) with one of the youngest demographics in the region, driving long-term market expansion and per-capita growth potential ($63/capita).' },
            { title: 'Kurdistan Region (KRG) Market', desc: 'KRG operates a separate healthcare and procurement system, offering a distinct market segment and access pathway for companies.' },
            { title: 'Growing Insurance Coverage', desc: 'Expanding insurance coverage is increasing private-sector utilisation and creating more predictable reimbursement dynamics.' },
            { title: 'Chronic Disease Burden', desc: 'Diabetes, cardiovascular disease, and other chronic conditions drive sustained demand for metabolic, cardiovascular, and specialty therapies.' },
            { title: 'NGO & International Partnerships', desc: 'NGO and international health partnerships play a significant role in supply, access, and capacity building in the Iraqi market.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Iraq</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus supports pharma, biotech, and medtech companies with market intelligence and strategy for the Iraqi market:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Market Entry & Regulatory Strategy', desc: 'KIMADIA and KRG pathway analysis, tender strategy, local partner identification, and dual federal-KRG market access planning.' },
            { title: 'Competitive Intelligence', desc: 'Monitoring of competitor presence, tender outcomes, distributor landscape, and market share across federal Iraq and KRG.' },
            { title: 'Stakeholder & KOL Mapping', desc: 'Physician and payer mapping across MOH, KRG, and private sector; NGO and international partnership landscape.' },
            { title: 'Market Sizing & Demand Assessment', desc: 'Market sizing, therapeutic area demand, and growth drivers for the $2.8B Iraqi pharma market and KRG segment.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>MOH and KIMADIA public information</li><li>IQVIA Middle East &amp; Africa market reports</li><li>Company and industry reports</li><li>BioNixus proprietary research</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Iraq, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on Iraq?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research for Iraq and the wider MENA region — market entry strategy, KIMADIA/KRG pathways, competitive intelligence, and stakeholder mapping.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default IraqPharmaCompanies;
