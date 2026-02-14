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
    answer: 'BioNixus is an international healthcare market research firm headquartered in the USA with offices in London, UK. We specialise in pharmaceutical and life sciences consulting across Europe, the Middle East, and North Africa (EMEA), providing quantitative and qualitative research for pharmaceutical companies, biotech firms, and medical device manufacturers.',
  },
  {
    question: 'What services does BioNixus offer?',
    answer: 'BioNixus provides comprehensive healthcare market research services including quantitative physician surveys, qualitative KOL interviews and focus groups, market access and HTA consulting, competitive intelligence, clinical trial support, and KOL/stakeholder mapping. Our services span 17+ countries across EMEA.',
  },
  {
    question: 'Which countries does BioNixus cover?',
    answer: 'BioNixus operates across 17+ countries spanning the EU5 (UK, Germany, France, Spain, Italy), the GCC (UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Oman), and North Africa (Egypt, Morocco, Tunisia, Algeria). We have particular depth in the MENA region, maintaining the most comprehensive physician panel in the GCC.',
  },
  {
    question: 'What makes BioNixus different from larger market research firms?',
    answer: 'Three core differentiators set BioNixus apart: (1) Deep MENA expertise — we have the most comprehensive physician panel in the GCC and bilingual Arabic–English research teams; (2) Cost-effectiveness — our senior-led, lean model delivers premium quality at competitive rates compared to large consultancies; (3) Our proprietary physician and HCP network enables rapid recruitment and authentic clinical perspectives across 17+ countries.',
  },
  {
    question: 'What therapeutic areas does BioNixus specialise in?',
    answer: 'BioNixus has deep experience across 14+ therapeutic areas including oncology, immunology, cardiology, neurology, rare diseases, respiratory, diabetes and endocrinology, infectious disease, ophthalmology, dermatology, gastroenterology, haematology, and more.',
  },
  {
    question: 'How does BioNixus conduct physician surveys in the MENA region?',
    answer: 'Our MENA physician surveys leverage our proprietary panel of healthcare professionals across the GCC and North Africa. All research materials are available in both Arabic and English. Our bilingual research teams have firsthand experience with local regulatory frameworks (SFDA, DHA, MOHAP, EDA) and understand the cultural nuances of clinical decision-making in the region.',
  },
  {
    question: 'What is the typical timeline for a BioNixus project?',
    answer: 'Timelines vary by project scope: a focused single-country quantitative survey typically takes 4–6 weeks from kick-off to final report, while a multi-country qualitative study may take 8–12 weeks. We provide tailored proposals with detailed timelines within 24 hours of your initial enquiry.',
  },
  {
    question: 'Does BioNixus support HTA submissions?',
    answer: 'Yes. BioNixus provides market access consulting and HTA submission support for NICE (UK), G-BA/IQWiG (Germany), HAS/CEPS (France), and Gulf health authorities including SFDA (Saudi Arabia) and DHA (Dubai). Our research feeds directly into value dossiers, economic models, and payer engagement strategies.',
  },
  {
    question: 'Is BioNixus GDPR compliant?',
    answer: 'Yes. BioNixus adheres to GDPR, BHBIA (British Healthcare Business Intelligence Association), EphMRA (European Pharmaceutical Market Research Association), and ICC/ESOMAR standards. We maintain full data protection compliance across all research activities.',
  },
  {
    question: 'How can I contact BioNixus?',
    answer: 'You can reach us by email at admin@bionixus.com, by phone at +1 888 465 5557 (US) or +44 7727 666682 (UK), or by visiting our contact page at bionixus.com/contact to request a tailored proposal.',
  },
  {
    question: 'Where is BioNixus located?',
    answer: 'BioNixus is headquartered at 1309 Coffeen Ave, Sheridan, Wyoming 82801, USA, with a UK office at 128 City Road, London, EC1V 2NX, GB. Our dual US–UK presence positions us as a bridge between Western pharmaceutical innovation and EMEA market realities.',
  },
  {
    question: 'Can BioNixus conduct research in Arabic?',
    answer: 'Yes. BioNixus has bilingual Arabic–English research capabilities. All survey instruments, interview guides, and research deliverables can be produced in Arabic. Approximately 62% of Gulf physicians prefer Arabic-language clinical discussions, and our teams are equipped to conduct research in the respondent\'s preferred language.',
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
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ | BioNixus Healthcare Market Research — Frequently Asked Questions</title>
        <meta
          name="description"
          content="Frequently asked questions about BioNixus healthcare market research services: MENA coverage, therapeutic areas, physician surveys, HTA support, GDPR compliance, and more."
        />
        <link rel="canonical" href="https://www.bionixus.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Everything you need to know about BioNixus and our healthcare market research services.
            </p>

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
