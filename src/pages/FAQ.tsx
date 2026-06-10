import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is BioNixus?',
    answer: 'BioNixus is a specialist pharmaceutical and healthcare market research company, US-headquartered with operations in London and Cairo. We have been operating since 2012 and run quantitative and qualitative research for pharmaceutical, biotech, and medical device teams across Europe, the Middle East, and North Africa (EMEA). To date that adds up to 127+ delivered projects for 48 clients, across 17+ countries and 14+ therapeutic areas.',
  },
  {
    question: 'What services does BioNixus offer?',
    answer: 'The core is healthcare market research: quantitative physician and HCP surveys, qualitative KOL interviews and focus groups, market access and HTA consulting, competitive intelligence, clinical trial support, and KOL and stakeholder mapping. The mix is built around your decision rather than sold as a fixed package, and it runs across 17+ countries in EMEA.',
  },
  {
    question: 'Which countries does BioNixus cover?',
    answer: 'We work across 17+ countries: the EU5 (UK, Germany, France, Spain, Italy), the GCC (UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman), and North Africa (Egypt, Morocco, Tunisia, Algeria). Our depth is strongest in MENA, where a proprietary physician and HCP panel and bilingual Arabic–English teams let us recruit specialists that generalist agencies struggle to reach.',
  },
  {
    question: 'What makes BioNixus different from larger market research firms?',
    answer: 'Three things. First, genuine MENA depth — a proprietary GCC physician and HCP panel and Arabic–English research teams, not a regional desk bolted onto a Western agency. Second, a senior-led, lean model: the people who scope your study are the people who run it, which keeps quality high and cost competitive against the large consultancies. Third, that proprietary network means we can recruit scarce specialists quickly and bring back authentic clinical perspective across 17+ countries.',
  },
  {
    question: 'What therapeutic areas does BioNixus specialize in?',
    answer: 'We have run work across 14+ therapeutic areas — oncology, immunology, cardiology, neurology, rare disease, respiratory, diabetes and endocrinology, infectious disease, ophthalmology, dermatology, gastroenterology, and haematology among them. Study design shifts with the area: a rare-disease programme leans on a small expert panel, while primary-care categories support large, statistically robust samples.',
  },
  {
    question: 'How does BioNixus conduct physician surveys in the MENA region?',
    answer: 'MENA physician surveys draw on our proprietary HCP panel across the GCC and North Africa, with every instrument available in Arabic and English. Our bilingual teams work first-hand with the regulators that shape clinical and access behaviour — SFDA, DHA, MOHAP, and EDA — and design around the cultural realities of how decisions actually get made in the region, rather than importing a Western template unchanged.',
  },
  {
    question: 'What is the typical timeline for a BioNixus project?',
    answer: 'It depends on scope. A focused single-country quantitative survey usually runs 4–6 weeks from kick-off to final report; a multi-country qualitative study is more often 8–12 weeks once ethics and hospital-access steps are factored in. You will have a tailored proposal with a realistic timeline within 24 hours of your first enquiry — and if a specialist sample is genuinely scarce, we flag it before you commit.',
  },
  {
    question: 'Does BioNixus support HTA submissions?',
    answer: 'Yes. We provide market access consulting and HTA submission support for NICE (UK), G-BA/IQWiG (Germany), HAS/CEPS (France), and Gulf authorities including SFDA (Saudi Arabia) and DHA (Dubai). The research is designed to feed straight into value dossiers, economic models, and payer engagement — so the evidence you gather is the evidence the submission actually needs, not a separate exercise.',
  },
  {
    question: 'Is BioNixus GDPR compliant?',
    answer: 'Yes. We work to GDPR alongside the relevant industry codes — BHBIA (British Healthcare Business Intelligence Association), EphMRA (European Pharmaceutical Market Research Association), and ICC/ESOMAR — with adverse-event handling and pharmacovigilance reporting designed into HCP and patient fieldwork. Data protection is part of the study design from the first draft, not a compliance check at the end.',
  },
  {
    question: 'How can I contact BioNixus?',
    answer: 'You can reach us by email at admin@bionixus.com, by phone at +1 888 465 5557 (US) or +44 7727 666682 (UK), or by visiting our contact page at bionixus.com/contact to request a tailored proposal.',
  },
  {
    question: 'Where is BioNixus located?',
    answer: 'BioNixus is headquartered at 1309 Coffeen Ave, Sheridan, Wyoming 82801, USA, with a UK office at 128 City Road, London, EC1V 2NX, GB, and an operational base in Cairo for MENA fieldwork. That spread is deliberate: it lets us sit between Western pharmaceutical innovation and the on-the-ground realities of EMEA markets, rather than viewing the region from a distance.',
  },
  {
    question: 'Can BioNixus conduct research in Arabic?',
    answer: 'Yes. Bilingual Arabic–English capability is built in, not outsourced: survey instruments, interview guides, moderation, and final deliverables can all be produced in Arabic. We interview each respondent in the language they are most comfortable working in, which protects clinical nuance and keeps response quality high across mixed Arabic- and English-speaking HCP samples.',
  },
];

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

const FAQ = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'BioNixus Healthcare Market Research FAQ',
    url: 'https://www.bionixus.com/faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.bionixus.com/faq' },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.bionixus.com/#organization',
    name: 'BioNixus',
    foundingDate: '2012',
    url: 'https://www.bionixus.com',
    logo: 'https://www.bionixus.com/bionixus-logo.webp',
    sameAs: [
      'https://www.linkedin.com/company/bionixus/',
      'https://www.facebook.com/Bionixus',
      'https://www.instagram.com/bionixus_',
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ | BioNixus Healthcare Market Research</title>
        <meta
          name="description"
          content="Straight answers on BioNixus healthcare market research: where we cover, the therapy areas and methods we run, HTA and access support, Arabic–English fieldwork, GDPR and ESOMAR compliance, timelines, and how to reach us."
        />
        <link rel="canonical" href="https://www.bionixus.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
          </div>
        </div>

        <section className="section-padding pt-4 pb-16">
          <div className="container-wide max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              FAQ
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The questions buyers actually ask before they brief us — answered plainly, with no marketing varnish.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-12 text-[15px] rounded-xl border border-border bg-muted/20 p-6 md:p-8">
              <p>
                BioNixus works with pharmaceutical, biotech, and medical device teams that need evidence they can defend
                across Europe, the United Kingdom, and MENA — particularly where bilingual Arabic–English fieldwork and
                Gulf health-authority context decide whether a study holds up. Use this page for fast answers on coverage,
                compliance, and timelines; when you want the detail, the{' '}
                <Link to="/services" className="text-primary underline">
                  pharmaceutical market research services
                </Link>{' '}
                hub and the{' '}
                <Link to="/methodology" className="text-primary underline">
                  research methodology
                </Link>{' '}
                page go deeper.
              </p>
              <p>
                Most projects pair quantitative physician or pharmacist surveys with qualitative depth — KOL interviews,
                payer conversations, hospital-committee dynamics — and a competitive-intelligence module where it earns
                its place. You receive structured outputs (segment summaries, message testing, demand forecasts, access
                narratives) that commercial, medical, and access stakeholders can act on without re-reading raw tabs. For
                country-level specifics, start with{' '}
                <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                  market research in Saudi Arabia
                </Link>{' '}
                or the{' '}
                <Link to="/healthcare-market-research" className="text-primary underline">
                  healthcare market research
                </Link>{' '}
                hub.
              </p>
              <p>
                If your question is not here, send us your target market, sample constraints, and decision deadline. We
                reply with a scoped proposal that names the design choices, risks, and quality controls behind the work —
                you can reach the{' '}
                <Link to="/contact" className="text-primary underline">
                  BioNixus team
                </Link>{' '}
                directly.
              </p>
            </div>

            <div className="divide-y divide-border border-t border-border">
              {faqs.map((faq, i) => (
                <FAQAccordion key={i} faq={faq} index={i} />
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-cream-dark rounded-xl">
              <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get in touch with our team — we typically respond within 24 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
