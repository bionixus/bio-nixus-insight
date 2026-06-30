import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { WhyBioNixusIntro } from '@/components/shared/WhyBioNixusIntro';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const faqItems = [
  {
    question: 'What is the size of the pharmacy market in Saudi Arabia?',
    answer:
      'The Saudi Arabian pharmacy market was valued at approximately SAR 30 billion in 2022, with strong projected growth driven by Vision 2030 healthcare reforms, increasing population, and rising health awareness.',
  },
  {
    question: 'Who are the major pharmacy chains in Saudi Arabia?',
    answer:
      'The dominant pharmacy chains in Saudi Arabia include Nahdi Medical Company (largest by store count), Al-Dawaa Pharmacies, United Pharmacies, Aster Pharmacies, and newer entrants like Innova and Lemon Pharmacies.',
  },
  {
    question: 'How can market research help pharmacies increase sales in Saudi Arabia?',
    answer:
      'Market research helps pharmacies identify customer needs, understand purchasing behavior, spot emerging trends (e.g., wellness products demand among youth), and differentiate from competitors. Case studies show pharmacies achieving up to 40% sales growth by acting on research insights.',
  },
  {
    question: 'What marketing automation tools work best for pharmacies?',
    answer:
      'Effective pharmacy marketing automation tools include CRM platforms like HubSpot and Salesforce Marketing Cloud for customer segmentation, email automation for prescription refill reminders and health tips, and social media schedulers for consistent engagement.',
  },
  {
    question: 'How does BioNixus help pharmacy businesses in Saudi Arabia?',
    answer:
      'BioNixus provides comprehensive healthcare market research services including quantitative and qualitative studies, competitive intelligence against major chains, marketing automation strategy, SFDA-compliant study design, and Arabic-capable field execution.',
  },
  {
    question: 'What are the regulatory challenges for pharmacies in Saudi Arabia?',
    answer:
      'The Saudi Food and Drug Authority (SFDA) enforces rigorous standards for pharmaceutical products. Pharmacies must navigate complex pricing regulations, reimbursement policies, and data privacy requirements.',
  },
  {
    question: 'How long does a pharmacy market research project take in Saudi Arabia?',
    answer:
      'Simple consumer surveys may complete in 3-4 weeks, while comprehensive multi-phase studies involving focus groups, mystery shopping, and competitive analysis typically run 8-12 weeks.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Market Research & Marketing Automation for Pharmacies in Saudi Arabia: How to Grow Retail Sales and Customer Satisfaction',
    description:
      'Comprehensive guide to leveraging market research and marketing automation for pharmacy retail sales growth in Saudi Arabia. Case study showing 40% sales increase.',
    author: { '@type': 'Organization', name: 'BioNixus Market Research' },
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    datePublished: '2024-07-17',
    dateModified: '2026-05-13',
    mainEntityOfPage: 'https://www.bionixus.com/pharmacies-saudi-arabia-marketing',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pharmacy Marketing Research in Saudi Arabia',
    serviceType: 'Pharmacy market research and marketing automation consulting',
    provider: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    { name: 'Saudi Arabia', href: '/healthcare-market-research/saudi-arabia' },
    { name: 'Pharmacies Marketing in Saudi Arabia', href: '/pharmacies-saudi-arabia-marketing' },
  ]),
  buildFAQSchema(faqItems),
];

export default function PharmaciesSaudiArabiaMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pharmacy Market Research Saudi Arabia: Boost Retail Sales 40% | BioNixus"
        description="How pharmacies in Saudi Arabia use market research and marketing automation to boost retail sales by 40%. Nahdi, Al-Dawaa case insights. Expert pharmacy research from BioNixus."
        canonical="/pharmacies-saudi-arabia-marketing"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
            { name: 'Saudi Arabia', href: '/healthcare-market-research/saudi-arabia' },
            { name: 'Pharmacies Marketing in Saudi Arabia', href: '/pharmacies-saudi-arabia-marketing' },
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Market Research &amp; Marketing Automation for Pharmacies in Saudi Arabia
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              How data-driven insights and automation help pharmacy chains achieve <strong>40% retail sales growth</strong> in the
              Kingdom's SAR 30 billion market.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="bg-muted px-3 py-1 rounded-full">12 min read</span>
              <span className="bg-muted px-3 py-1 rounded-full">Updated May 2026</span>
              <span className="bg-muted px-3 py-1 rounded-full">Saudi Arabia</span>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 border-b border-border">
          <div className="container-wide max-w-5xl mx-auto">
            <nav aria-label="Table of contents">
              <h2 className="text-lg font-display font-semibold text-foreground mb-3">In this article</h2>
              <ol className="grid md:grid-cols-2 gap-2 text-sm text-primary list-decimal list-inside">
                <li><a href="#introduction" className="hover:underline">Introduction to the Saudi Pharmacy Market</a></li>
                <li><a href="#market-research-concepts" className="hover:underline">Understanding Market Research</a></li>
                <li><a href="#marketing-automation" className="hover:underline">Marketing Automation: Transforming Engagement</a></li>
                <li><a href="#case-study" className="hover:underline">Case Study: 40% Sales Growth</a></li>
                <li><a href="#best-practices" className="hover:underline">Best Practices for Pharmacies</a></li>
                <li><a href="#future-outlook" className="hover:underline">The Future of Pharmacies in Saudi Arabia</a></li>
                <li><a href="#why-bionixus" className="hover:underline">Why BioNixus</a></li>
                <li><a href="#faq" className="hover:underline">Frequently Asked Questions</a></li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Introduction */}
        <article className="py-12">
          <div className="container-wide max-w-5xl mx-auto prose prose-lg prose-slate max-w-none">
            <section id="introduction">
              <h2 className="text-3xl font-display font-semibold text-foreground mt-0 mb-4">
                Introduction to the Saudi Arabian Pharmacy Market
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Saudi Arabian pharmacy market has experienced significant growth in recent years, driven by
                increasing healthcare expenditure, an expanding population, and a heightened focus on health and wellness.
                As of 2022, the market size was valued at approximately <strong>SAR 30 billion</strong>, with projections
                indicating continued growth. This growth is attributed to the government's ambitious{' '}
                <strong>Vision 2030</strong> plan, which aims to diversify the economy and improve healthcare services
                across the Kingdom.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Key players in the Saudi Arabian pharmacy market include major chains such as{' '}
                <a href="https://www.nahdionline.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Nahdi Medical Company
                </a>, {' '}
                <a href="https://www.al-dawaa.com/english/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Al-Dawaa Pharmacies
                </a>, and{' '}
                <a href="https://unitedpharmacy.sa/en/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  United Pharmacies
                </a>. These chains dominate the landscape, offering a wide range of pharmaceutical products and services.
                The market is also seeing an influx of international brands like{' '}
                <a href="https://www.asterpharmacy.ae/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Aster Pharmacies
                </a> and newer competitors including{' '}
                <a href="https://www.innovaonline.sa/en" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Innova
                </a> and{' '}
                <a href="https://lemon.sa/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Lemon Pharmacies
                </a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Despite its promising growth, the market faces unique challenges. Regulatory compliance is stringent,
                with the <strong>Saudi Food and Drug Authority (SFDA)</strong> enforcing rigorous standards for
                pharmaceutical products. Pharmacies must navigate complex pricing regulations and reimbursement policies.
                The market is also characterized by high customer expectations for quality service and personalized care,
                necessitating a robust customer relationship management strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For deeper context on the broader pharmaceutical landscape, see our guide to{' '}
                <Link to="/healthcare-market-research/saudi-arabia" className="text-primary underline">
                  pharmaceutical market research in Saudi Arabia
                </Link>{' '}
                and the{' '}
                <Link to="/blog/pharma-market-entry-saudi-arabia-playbook" className="text-primary underline">
                  Saudi market entry playbook
                </Link>.
              </p>
            </section>

            {/* Market Research Concepts */}
            <section id="market-research-concepts" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                Understanding Market Research: Key Concepts and Benefits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Market research is a systematic process of gathering, analyzing, and interpreting information about a
                market, including information about the target audience, competitors, and the industry as a whole. For
                pharmacies in Saudi Arabia, understanding market research is pivotal to enhancing retail sales and
                customer satisfaction.
              </p>
              <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">
                Key Research Methods for Pharmacies
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Quantitative Surveys</strong> — Collect data on customer preferences, satisfaction levels, and purchasing behavior at scale. Learn more about{' '}
                    <Link to="/quantitative-healthcare-market-research" className="text-primary underline">
                      quantitative healthcare research methodology
                    </Link>.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Focus Groups</strong> — Qualitative analysis engaging small participant groups to explore perceptions and experiences. See our{' '}
                    <Link to="/qualitative-market-research" className="text-primary underline">
                      qualitative market research services
                    </Link>.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Sales & Social Data Analysis</strong> — Reveals hidden patterns in sales records, customer feedback, and social media interactions.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Competitive Intelligence</strong> — Identify gaps, benchmark against Nahdi, Al-Dawaa, and other chains. Read about{' '}
                    <Link to="/blog/competitive-intelligence-pharma-gcc" className="text-primary underline">
                      competitive intelligence in the GCC
                    </Link>.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pharmacies leveraging these methods can identify unmet customer needs — for example, if research
                indicates growing demand for wellness products among younger demographics, a pharmacy can expand its
                inventory to include vitamins and supplements. Understanding competitive dynamics enables differentiation
                in an increasingly crowded market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The benefits of data-driven decision-making are clear: pharmacies that utilize market research make
                decisions that enhance operational efficiency, improve customer satisfaction, and drive sales growth.
                In Saudi Arabia's competitive market, the ability to anticipate demand is a significant advantage.
              </p>
            </section>

            {/* Marketing Automation */}
            <section id="marketing-automation" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                Marketing Automation: Transforming Customer Engagement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Marketing automation has emerged as a pivotal strategy for revolutionizing customer engagement in the
                pharmacy sector. By leveraging automated tools, pharmacies can streamline marketing efforts, enhance
                customer interaction, and drive increased sales.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border border-border rounded-xl p-6 bg-card">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Email Marketing</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated campaigns for product launches, special promotions, health tips, and prescription refill
                    reminders that foster loyalty through personalized content.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6 bg-card">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Social Media Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule posts, respond to inquiries, and track engagement metrics to maintain consistent presence
                    and drive traffic to physical stores and e-commerce.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6 bg-card">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Personalized Promotions</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze customer data to create targeted offers based on purchase history and health needs, increasing
                    repeat purchases and long-term loyalty.
                  </p>
                </div>
              </div>
            </section>

            {/* Case Study */}
            <section id="case-study" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                Case Study: 40% Sales Growth Through Market Research and Automation
              </h2>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <p className="text-lg font-semibold text-foreground mb-2">Key Results</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">40%</p>
                    <p className="text-sm text-muted-foreground">Retail sales increase in 6 months</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">+35%</p>
                    <p className="text-sm text-muted-foreground">Customer satisfaction improvement</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">3x</p>
                    <p className="text-sm text-muted-foreground">Repeat purchase rate</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mt-6 mb-3">Research Phase</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A prominent Saudi pharmacy chain conducted surveys and focus group discussions with a diverse customer
                base, supplemented by quantitative analysis of sales records. The research revealed:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Significant demand for specialized health supplements</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Strong preference for personalized service</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Notable trend towards online shopping among younger demographics</span>
                </li>
              </ul>

              <h3 className="text-xl font-display font-semibold text-foreground mt-6 mb-3">Automation Implementation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The pharmacy implemented a CRM-integrated marketing automation system delivering personalized
                communications: tailored newsletters for health supplement buyers, automated prescription refill
                reminders, and targeted promotions based on purchase history.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mt-6 mb-3">Challenges Overcome</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Integration of new technology with existing systems required meticulous planning and staff training.
                Data privacy and SFDA regulatory compliance were addressed through stringent data governance policies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Explore more success stories in our{' '}
                <Link to="/case-studies" className="text-primary underline">
                  healthcare market research case studies
                </Link>.
              </p>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                Best Practices for Pharmacies: Integrating Research and Automation
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Comprehensive Market Research</h3>
                    <p className="text-muted-foreground text-sm">Gather data on customer preferences, purchasing behaviors, and competitive positioning through surveys, focus groups, and sales analysis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Select the Right Automation Tools</h3>
                    <p className="text-muted-foreground text-sm">Look for platforms offering customer segmentation, personalized email campaigns, and analytics — HubSpot, Mailchimp, or Salesforce Marketing Cloud.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Develop a Strategy with KPIs</h3>
                    <p className="text-muted-foreground text-sm">Outline objectives, target audience, and performance indicators. Focus on personalized content addressing specific customer needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Continuous Optimization</h3>
                    <p className="text-muted-foreground text-sm">Monitor open rates, click-through rates, and conversion rates. Implement A/B testing to refine strategies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Measure & Report</h3>
                    <p className="text-muted-foreground text-sm">Establish clear benchmarks to evaluate effectiveness. Ensure strategies align with business goals and SFDA compliance requirements.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Outlook */}
            <section id="future-outlook" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                The Future of Pharmacies in Saudi Arabia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The pharmacy industry in Saudi Arabia is evolving rapidly, driven by technology and shifting consumer
                expectations. Key trends shaping the future include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Digital transformation</strong> — E-pharmacy adoption, e-prescription systems, and omnichannel retail models becoming standard.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>AI and big data analytics</strong> — Refining market research precision and enabling hyper-personalized marketing automation.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Evolving SFDA regulation</strong> — Greater emphasis on quality standards, requiring pharmacies to remain vigilant and compliant.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Vision 2030 healthcare reforms</strong> — Privatization and insurance expansion creating new competitive dynamics.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                For broader regional context, see our insights on{' '}
                <Link to="/blog/middle-east-healthcare-market-statistics-2026" className="text-primary underline">
                  Middle East healthcare market statistics 2026
                </Link>{' '}
                and the{' '}
                <Link to="/gcc-pharmaceutical-market-research" className="text-primary underline">
                  GCC pharmaceutical market research
                </Link>{' '}
                overview.
              </p>
            </section>

            {/* Why BioNixus */}
            <section id="why-bionixus" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                Why BioNixus for Pharmacy Market Research in Saudi Arabia?
              </h2>
              <WhyBioNixusIntro className="text-muted-foreground leading-relaxed mb-6" />
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Quantitative & Qualitative Research</h3>
                  <p className="text-xs text-muted-foreground">Physician surveys, patient insights, and payer studies tailored to the Saudi healthcare landscape.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Competitive Intelligence</h3>
                  <p className="text-xs text-muted-foreground">Benchmarking against Nahdi, Al-Dawaa, United, Aster with actionable recommendations.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold text-foreground text-sm mb-1">SFDA-Aware Study Design</h3>
                  <p className="text-xs text-muted-foreground">Ensuring compliance with local regulatory frameworks throughout every research phase.</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold text-foreground text-sm mb-1">Arabic-Capable Execution</h3>
                  <p className="text-xs text-muted-foreground">Native understanding of Saudi consumer culture and healthcare dynamics for authentic insights.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you're an established pharmacy chain optimizing operations, a new entrant evaluating the Saudi
                market, or a pharmaceutical brand seeking distribution insights — BioNixus delivers precision market
                intelligence that translates into growth.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="font-semibold text-foreground mb-2">Get a free market research consultation</p>
                <p className="text-sm text-muted-foreground mb-4">
                  BioNixus — the healthcare market research experts trusted by leading pharmaceutical companies across the Middle East.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>
                    <a href="mailto:admin@bionixus.com" className="text-primary underline">admin@bionixus.com</a>
                  </li>
                  <li>
                    <a href="tel:+447727666682" className="text-primary underline">+44 7727 666 682</a>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-primary/90 transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mt-12">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="border border-border rounded-lg overflow-hidden">
                    <summary className="cursor-pointer px-5 py-4 font-medium text-foreground hover:bg-muted/30 transition-colors">
                      {item.question}
                    </summary>
                    <p className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Pages */}
            <section className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Related Healthcare Market Research Pages
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/healthcare-market-research/saudi-arabia" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">Pharmaceutical Market Research in Saudi Arabia</h3>
                  <p className="text-sm text-muted-foreground">SFDA-aligned research, KSA physician surveys, and payer studies for pharmaceutical brands.</p>
                </Link>
                <Link to="/saudi-payer-market-access-research" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">Saudi Payer & Market Access Research</h3>
                  <p className="text-sm text-muted-foreground">Formulary navigation, pricing evidence, and payer insight for Saudi market entry.</p>
                </Link>
                <Link to="/blog/patient-journey-mapping-saudi-arabia" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">Patient Journey Mapping in Saudi Arabia</h3>
                  <p className="text-sm text-muted-foreground">Understand patient pathways from diagnosis to pharmacy dispensing across Saudi healthcare.</p>
                </Link>
                <Link to="/blog/nupco-saudi-arabia-tendering-guide" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">NUPCO Saudi Arabia Tendering Guide</h3>
                  <p className="text-sm text-muted-foreground">Navigate Saudi procurement and institutional pharmacy supply chains.</p>
                </Link>
                <Link to="/pharmaceutical-companies-saudi-arabia" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">Top Pharmaceutical Companies in Saudi Arabia</h3>
                  <p className="text-sm text-muted-foreground">Directory of leading pharma players in the Saudi market including local and multinational companies.</p>
                </Link>
                <Link to="/healthcare-market-research/saudi-arabia" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">Healthcare Market Research: Saudi Arabia</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive hub for all BioNixus Saudi healthcare research services and capabilities.</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        <CTASection variant="country" countryName="Saudi Arabia" />
      </main>
      <Footer />
    </div>
  );
}
