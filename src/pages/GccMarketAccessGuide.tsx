import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, BookOpen, Clock, FileCheck, Building2, Globe, ShieldCheck, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

/* ------------------------------------------------------------------ */
/* Regulatory & market access data for GCC countries                  */
/* Sources: SFDA, MOHAP, DHA, DOH, MOPH, NHRA, MOH (Kuwait/Oman)     */
/* ------------------------------------------------------------------ */

interface RegulatoryBody {
  country: string;
  flag: string;
  authority: string;
  fullName: string;
  registrationTimeline: string;
  renewalPeriod: string;
  pricingMechanism: string;
  reimbursementModel: string;
  keyRequirements: string[];
  localPartnerRequired: boolean;
}

const regulatoryBodies: RegulatoryBody[] = [
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    authority: 'SFDA',
    fullName: 'Saudi Food and Drug Authority',
    registrationTimeline: '8–18 months',
    renewalPeriod: '5 years',
    pricingMechanism: 'External Reference Pricing (14 reference countries)',
    reimbursementModel: 'Government formulary (MOH & military hospitals cover ~60% of market)',
    keyRequirements: [
      'CTD format dossier required',
      'GMP certificates from approved authorities',
      'Stability data for Zone IVB climate',
      'Arabic labelling mandatory',
      'Local Authorised Representative (scientific office) required',
    ],
    localPartnerRequired: true,
  },
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    authority: 'MOHAP / DHA / DOH',
    fullName: 'Ministry of Health and Prevention / Dubai Health Authority / Dept. of Health Abu Dhabi',
    registrationTimeline: '6–14 months',
    renewalPeriod: '5 years',
    pricingMechanism: 'External Reference Pricing (basket of EU + regional prices)',
    reimbursementModel: 'Insurance-based (mandatory health insurance in Abu Dhabi & Dubai)',
    keyRequirements: [
      'MOHAP registration for nationwide marketing',
      'Additional DHA/DOH registration for Dubai and Abu Dhabi respectively',
      'Certificate of Pharmaceutical Product (CPP)',
      'Free Sale Certificate from country of origin',
      'Local agent appointment mandatory',
    ],
    localPartnerRequired: true,
  },
  {
    country: 'Kuwait',
    flag: '🇰🇼',
    authority: 'MOH Drug & Food Control',
    fullName: 'Ministry of Health — Drug & Food Control Administration',
    registrationTimeline: '12–24 months',
    renewalPeriod: '5 years',
    pricingMechanism: 'Cost-plus pricing with manufacturer price ceiling',
    reimbursementModel: 'Government-funded healthcare (free for Kuwaiti citizens)',
    keyRequirements: [
      'Product samples for laboratory testing',
      'GMP certificates',
      'CPP and Free Sale Certificate',
      'Arabic labelling',
      'Local agent mandatory',
    ],
    localPartnerRequired: true,
  },
  {
    country: 'Qatar',
    flag: '🇶🇦',
    authority: 'MOPH',
    fullName: 'Ministry of Public Health — Pharmacy & Drug Control Department',
    registrationTimeline: '8–16 months',
    renewalPeriod: '5 years',
    pricingMechanism: 'Reference pricing (benchmarked to KSA, UAE, and select EU markets)',
    reimbursementModel: 'Government-funded primary & secondary care; Hamad Medical Corp formulary',
    keyRequirements: [
      'CTD format dossier',
      'GMP inspection or PIC/S membership evidence',
      'Bioequivalence data for generics',
      'Local agent with warehouse facility',
    ],
    localPartnerRequired: true,
  },
  {
    country: 'Bahrain',
    flag: '🇧🇭',
    authority: 'NHRA',
    fullName: 'National Health Regulatory Authority',
    registrationTimeline: '6–12 months',
    renewalPeriod: '5 years',
    pricingMechanism: 'External Reference Pricing (GCC harmonised pricing initiative)',
    reimbursementModel: 'Government hospitals + private insurance (Sehati programme expanding)',
    keyRequirements: [
      'NHRA electronic submission system',
      'First GCC country with formal biosimilar pathway',
      'CPP and GMP evidence',
      'Stability data for tropical conditions',
    ],
    localPartnerRequired: true,
  },
  {
    country: 'Oman',
    flag: '🇴🇲',
    authority: 'MOH DGPA',
    fullName: 'Ministry of Health — Directorate General of Pharmaceutical Affairs',
    registrationTimeline: '10–18 months',
    renewalPeriod: '5 years',
    pricingMechanism: 'GCC unified pricing framework (in progress)',
    reimbursementModel: 'Government-funded healthcare for Omani nationals; private insurance growing',
    keyRequirements: [
      'Registration dossier in CTD format',
      'Local agent with MOH-approved warehouse',
      'Arabic and English labelling',
      'Vision 2040 incentives for local manufacturing',
    ],
    localPartnerRequired: true,
  },
];

interface TimelineStep {
  phase: string;
  duration: string;
  description: string;
}

const registrationTimeline: TimelineStep[] = [
  { phase: 'Pre-Submission', duration: '1–3 months', description: 'Appoint local authorised representative, prepare dossier (CTD), obtain CPP & GMP certificates, arrange stability data for Zone IVB, translate labelling to Arabic.' },
  { phase: 'Dossier Submission', duration: '1–2 weeks', description: 'Submit via national regulatory authority electronic portal (where available). Pay registration fees. Receive acknowledgement and tracking number.' },
  { phase: 'Administrative Review', duration: '1–3 months', description: 'Authority verifies completeness of documentation. Deficiency letters issued if information is missing. Respond within 30–90 days depending on country.' },
  { phase: 'Scientific Assessment', duration: '3–8 months', description: 'Quality, safety, and efficacy review. May include requests for additional clinical data, bioequivalence studies (generics), or GMP inspection.' },
  { phase: 'Pricing Approval', duration: '1–3 months', description: 'External reference pricing calculation. Manufacturer submits proposed price; authority benchmarks against reference basket. Price negotiation may occur.' },
  { phase: 'Marketing Authorisation', duration: '2–4 weeks', description: 'Registration certificate issued. Product added to national formulary (if applicable). Import license obtained through local agent.' },
];

const GccMarketAccessGuide = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/gcc-market-access-guide';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GCC Pharmaceutical Market Access Guide 2026 | Registration, Pricing & Reimbursement | BioNixus</title>
        <meta
          name="description"
          content="Complete guide to pharmaceutical market access in the GCC: drug registration timelines, pricing mechanisms, reimbursement models, and regulatory requirements for Saudi Arabia (SFDA), UAE (MOHAP), Kuwait, Qatar, Bahrain & Oman."
        />
        <meta
          name="keywords"
          content="GCC pharmaceutical registration, SFDA drug registration, MOHAP drug registration, pharmaceutical market access Saudi Arabia, UAE pharma registration, GCC pricing reimbursement, pharmaceutical regulatory affairs Middle East"
        />
        <link rel="canonical" href={citationUrl} />
        <meta property="og:title" content="GCC Pharmaceutical Market Access Guide 2026 — Registration, Pricing & Reimbursement" />
        <meta property="og:description" content="Free guide: How to register pharmaceuticals in Saudi Arabia, UAE, Kuwait, Qatar, Bahrain & Oman. Registration timelines, pricing mechanisms, and regulatory requirements." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={citationUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'GCC Pharmaceutical Market Access Guide 2026',
            description: 'Complete guide to pharmaceutical drug registration, pricing, and reimbursement across the 6 GCC countries: Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman.',
            url: citationUrl,
            datePublished: '2026-01-15',
            dateModified: '2026-02-14',
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
              { '@type': 'ListItem', position: 3, name: 'GCC Market Access Guide' },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does pharmaceutical registration take in Saudi Arabia (SFDA)?',
                acceptedAnswer: { '@type': 'Answer', text: 'SFDA registration typically takes 8-18 months depending on product type: 8-12 months for generics (ANDA), 12-18 months for new drugs (NDA), and longer for biologics. A local authorised representative (scientific office) is required.' },
              },
              {
                '@type': 'Question',
                name: 'Do I need a local partner to register pharmaceuticals in the GCC?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes, all 6 GCC countries (Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman) require foreign pharmaceutical companies to appoint a local authorised representative or agent to handle regulatory submissions and in-country logistics.' },
              },
              {
                '@type': 'Question',
                name: 'How does pharmaceutical pricing work in the GCC?',
                acceptedAnswer: { '@type': 'Answer', text: 'Most GCC countries use External Reference Pricing (ERP), benchmarking against a basket of reference countries. Saudi Arabia uses 14 reference countries. The GCC is working towards a unified pricing framework, though implementation varies by country.' },
              },
              {
                '@type': 'Question',
                name: 'What is the GCC centralised registration procedure?',
                acceptedAnswer: { '@type': 'Answer', text: 'The GCC Centralised Registration Procedure allows pharmaceutical companies to submit a single application reviewed by one GCC country, with the registration recognised by other GCC states. However, individual country-level pricing and import procedures still apply separately.' },
              },
            ],
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
              <span className="text-foreground">GCC Market Access Guide</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Free Guide
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              GCC Pharmaceutical Market Access Guide 2026
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Everything pharmaceutical companies need to know about drug registration, pricing, and reimbursement across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman. Regulatory authority requirements, timelines, and practical guidance from BioNixus.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: February 2026 &middot; Sources: SFDA, MOHAP, DHA, DOH, MOPH, NHRA, MOH regulatory publications
            </p>

            {/* Citation box */}
            <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl">
              <div className="flex items-start gap-3">
                <Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    BioNixus. "GCC Pharmaceutical Market Access Guide 2026." BioNixus Healthcare Market Research, Feb. 2026,{' '}
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

        {/* Table of Contents */}
        <section className="section-padding py-8 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <a href="#regulatory-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Bodies by Country</a>
              <a href="#registration-timeline" className="text-sm text-primary hover:underline flex items-center gap-2"><Clock className="w-4 h-4" /> Typical Registration Timeline</a>
              <a href="#country-details" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> Country-by-Country Requirements</a>
              <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
            </div>
          </div>
        </section>

        {/* Registration Timeline */}
        <section className="section-padding py-16" id="registration-timeline">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Typical GCC Drug Registration Timeline
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              From pre-submission preparation to marketing authorisation, pharmaceutical registration in the GCC typically takes 8–24 months depending on the country and product type.
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {registrationTimeline.map((step, i) => (
                  <div key={step.phase} className="flex gap-6 md:gap-8 relative">
                    <div className="shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-xl p-6 pb-5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h3 className="text-lg font-display font-semibold text-foreground">{step.phase}</h3>
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                          <Clock className="w-3 h-3" /> {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Country Details */}
        <section className="section-padding py-16 bg-muted/30" id="country-details">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Country-by-Country Regulatory Requirements
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              Detailed breakdown of regulatory authority, registration timelines, pricing mechanisms, and key requirements for pharmaceutical market access in each GCC country.
            </p>

            <div className="space-y-8">
              {regulatoryBodies.map((rb) => (
                <div key={rb.country} className="bg-card border border-border rounded-xl overflow-hidden" id={`regulatory-overview`}>
                  <div className="bg-primary/5 px-6 md:px-8 py-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{rb.flag}</span>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">{rb.country}</h3>
                        <p className="text-sm text-muted-foreground">{rb.fullName} ({rb.authority})</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p>
                        <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" /> {rb.registrationTimeline}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p>
                        <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-primary" /> {rb.renewalPeriod}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Mechanism</p>
                        <p className="text-sm text-foreground">{rb.pricingMechanism}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Reimbursement Model</p>
                        <p className="text-sm text-foreground">{rb.reimbursementModel}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Requirements</p>
                      <ul className="space-y-1.5">
                        {rb.keyRequirements.map((req, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary mt-1 shrink-0">&#x2713;</span>
                            {req}
                          </li>
                        ))}
                        {rb.localPartnerRequired && (
                          <li className="text-sm text-foreground flex items-start gap-2 font-medium">
                            <Building2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                            Local partner / authorised representative required
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How long does pharmaceutical registration take in Saudi Arabia (SFDA)?',
                  a: 'SFDA registration typically takes 8–18 months depending on product type: 8–12 months for generics (ANDA), 12–18 months for new drugs (NDA), and potentially longer for biologics and biosimilars. A local authorised representative (scientific office) is mandatory for foreign companies.',
                },
                {
                  q: 'Do I need a local partner to register pharmaceuticals in the GCC?',
                  a: 'Yes, all 6 GCC countries require foreign pharmaceutical companies to appoint a local authorised representative or agent to handle regulatory submissions, warehousing, and in-country logistics. This is a legal requirement, not optional.',
                },
                {
                  q: 'How does pharmaceutical pricing work in the GCC?',
                  a: 'Most GCC countries use External Reference Pricing (ERP), benchmarking against a basket of reference countries that typically includes select EU markets and regional neighbours. Saudi Arabia uses 14 reference countries. The GCC is working towards a unified pricing framework, though implementation varies by country.',
                },
                {
                  q: 'What is the GCC Centralised Registration Procedure?',
                  a: 'The GCC Centralised Registration Procedure allows pharmaceutical companies to submit a single application reviewed by one GCC country, with the registration recognised by other GCC states. However, individual country-level pricing, import permits, and logistics procedures still apply separately.',
                },
                {
                  q: 'What are the benefits of local pharmaceutical manufacturing in the GCC?',
                  a: 'GCC governments offer significant incentives for local manufacturing: priority regulatory review (faster SFDA approval), preferential government procurement (60%+ of government hospital contracts), tax benefits, and extended market exclusivity periods. Saudi Arabia\'s Vision 2030 targets 40% local manufacturing by 2030.',
                },
                {
                  q: 'Is Arabic labelling mandatory for pharmaceuticals in the GCC?',
                  a: 'Yes, Arabic labelling is mandatory in Saudi Arabia, Kuwait, and Oman. UAE and Qatar require bilingual (English + Arabic) labelling. Bahrain accepts English-only labelling for some product categories but Arabic is recommended. Patient information leaflets must be in Arabic across all GCC markets.',
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Need Market Access Support?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              BioNixus helps pharmaceutical companies navigate GCC market access — from regulatory strategy and payer research to HTA submissions and pricing optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/market-access"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                Market Access Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GccMarketAccessGuide;
