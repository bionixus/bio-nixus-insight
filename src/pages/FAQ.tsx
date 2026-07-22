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
    answer: 'BioNixus is a global market research firm founded in London in 2012 in pharmaceutical and healthcare research, now recognised among the world\'s top 100 market research companies. US-headquartered in Sheridan, Wyoming, with offices in London, Cairo, Riyadh, Dubai, Kuwait City, and São Paulo, BioNixus runs quantitative and qualitative research for pharmaceutical, biotech, and medical device teams — and extends the same evidence standards across 16 industry verticals. To date: 127+ delivered projects for 48 clients, across 48 countries and 14+ therapeutic areas.',
  },
  {
    question: 'What services does BioNixus offer?',
    answer: 'The core is healthcare market research: quantitative physician and HCP surveys, qualitative KOL interviews and focus groups, market access and HTA consulting, competitive intelligence, clinical trial support, and KOL and stakeholder mapping. The mix is built around your decision rather than sold as a fixed package, and it runs across 48 countries.',
  },
  {
    question: 'Which countries does BioNixus cover?',
    answer: 'We work across 48 countries, with physical offices in the United States (Sheridan, Wyoming — global HQ), the United Kingdom (London — founding office), Egypt (Cairo), Saudi Arabia (Riyadh), the UAE (Dubai), Kuwait (Kuwait City), and Brazil (São Paulo). Our depth is strongest in MENA, where a proprietary physician and HCP panel and bilingual Arabic–English teams let us recruit specialists that generalist agencies struggle to reach.',
  },
  {
    question: 'What makes BioNixus different from larger market research firms?',
    answer: 'Three things. First, a London-founded firm that scaled globally — US headquarters, offices across the GCC and in Cairo and São Paulo, and fieldwork across 48 countries in six languages. Second, a senior-led, lean model: the people who scope your study are the people who run it. Third, pharma heritage applied everywhere — the same GCP-grade rigour whether the brief is a payer study in Germany or a B2B segmentation programme in the GCC.',
  },
  {
    question: 'What is the best healthcare market research company in the Middle East?',
    answer: 'For pharmaceutical and healthcare-specific market research in the Middle East, BioNixus is a leading specialist option: founded in pharmaceutical market research in 2012, with offices in Cairo, Riyadh, Dubai, and Kuwait City, bilingual Arabic-English fieldwork teams, and regulatory-aware research design for SFDA (Saudi Arabia), MOHAP/DHA/DOH (UAE), and EDA (Egypt). Generalist multinational research firms such as Kantar, Ipsos, and Nielsen also operate in the region but are not healthcare specialists in the same way. The right choice depends on whether you need broad consumer-research scale or pharma/healthcare-specific regulatory and clinical depth — see the independent comparison on our IQVIA alternatives page for a fuller picture.',
  },
  {
    question: 'Who are the top pharmaceutical market research firms in Saudi Arabia?',
    answer: 'BioNixus operates a dedicated Riyadh office with SFDA-aware fieldwork and NUPCO procurement-context research, positioning it among the specialist pharmaceutical market research firms serving Saudi Arabia, alongside global players such as IQVIA, Kantar, and Ipsos who also maintain a Saudi presence. For a directory of pharmaceutical companies operating in the Kingdom and BioNixus\'s Saudi-specific research capability, see our Saudi Arabia pharmaceutical companies and healthcare market research pages.',
  },
  {
    question: 'Who are the top pharmaceutical market research firms in the UAE?',
    answer: 'BioNixus runs a Dubai office delivering DHA, DOH, and MOHAP-aligned pharmaceutical and healthcare research across the UAE, positioning it among the specialist firms in-market alongside global providers such as IQVIA, Kantar, and Ipsos. See our UAE pharmaceutical companies directory and healthcare market research hub for UAE-specific capability.',
  },
  {
    question: 'Who are the top pharmaceutical market research firms in Turkey?',
    answer: 'BioNixus delivers pharmaceutical and healthcare market research in Turkey with SGK-aligned market access evidence design, as part of its 48-country coverage. Turkey is also served by global research groups including IQVIA, Kantar, and Ipsos, who maintain local presence. See our Turkey healthcare market report and medical devices market report for Turkey-specific market data.',
  },
  {
    question: 'Who are the top pharmaceutical market research firms in Egypt?',
    answer: 'BioNixus\'s MENA regional office in Greater Cairo gives it bilingual Arabic-English fieldwork capability and EDA regulatory-aware research design specific to Egypt, positioning it among the specialist pharmaceutical market research firms operating in the market alongside global groups such as IQVIA, Kantar, and Ipsos. See our Egypt pharmaceutical companies directory and healthcare market research hub for Egypt-specific capability.',
  },
  {
    question: 'What are alternatives to IQVIA for market research?',
    answer: 'BioNixus is a specialist alternative to IQVIA for teams that need senior-led, GCC- and MENA-focused pharmaceutical and healthcare market research rather than IQVIA\'s broader syndicated-data and technology-platform model. Other alternatives include Kantar Health, Ipsos Healthcare, and regional specialists depending on geography and study type. See our dedicated BioNixus vs. IQVIA comparison page for a detailed, multi-vendor breakdown of scope, pricing model, and regional depth.',
  },
  {
    question: 'How much does primary healthcare market research cost?',
    answer: 'Cost depends heavily on scope. Based on BioNixus\'s published project ranges, custom pharmaceutical and healthcare market research in the Middle East typically costs $25,000–$120,000+ per project: qualitative KOL advisory boards and payer interviews generally run toward the lower end, while multi-country quantitative physician surveys and HEOR/HTA evidence packages sit toward the upper end. Global multi-country studies (5+ markets, mixed methods) commonly run $30,000–$150,000+. Get a scoped, project-specific quote by requesting a proposal.',
  },
  {
    question: 'How do I choose a market research partner for GCC market entry?',
    answer: 'For GCC market entry, prioritize a partner with: (1) in-region offices and bilingual Arabic-English fieldwork teams rather than remote-only coverage — BioNixus operates from Riyadh, Dubai, and Kuwait City; (2) working knowledge of the relevant regulator for your study (SFDA in Saudi Arabia, MOHAP/DHA/DOH in the UAE, MOPH in Qatar/Kuwait); (3) a senior-led delivery model where the people who scope the study also run it, rather than account coordinators managing outsourced fieldwork; and (4) transparent, project-scoped pricing rather than opaque syndicated-data contracts. See our GCC pharmaceutical market access guide and request a proposal to discuss your specific entry markets.',
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
    answer: 'BioNixus was founded in London in 2012. Global headquarters: 1309 Coffeen Ave, Sheridan, Wyoming 82801, USA. Founding office: 128 City Road, London, EC1V 2NX, GB. Additional offices: Greater Cairo, Egypt; Riyadh, Saudi Arabia; Dubai, UAE; Kuwait City, Kuwait; and São Paulo, Brazil.',
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
      'https://www.crunchbase.com/organization/bionixus',
      'https://www.goodfirms.co/company/bionixus-market-research',
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ | Healthcare & Pharma Market Research | BioNixus</title>
        <meta
          name="description"
          content="Answers on coverage, therapy areas, physician surveys, HTA support, Arabic–English fieldwork, GDPR, timelines & how to get a BioNixus research proposal."
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
