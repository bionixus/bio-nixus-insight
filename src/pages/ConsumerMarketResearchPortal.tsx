import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Store,
  Banknote,
  Smartphone,
  Car,
  Hotel,
  Cpu,
  Zap,
  Building2,
  Tv,
  GraduationCap,
  Landmark,
  Users,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from '@/lib/seo/schemas';

// ─── Data ────────────────────────────────────────────────────────────────────

const B2C_INDUSTRIES = [
  {
    icon: ShoppingCart,
    name: 'FMCG & Consumer Goods',
    description: 'Brand health, shopper insights, NPD, and pricing research',
    countries: 10,
    href: '/market-research/fmcg',
  },
  {
    icon: Store,
    name: 'Retail & Shopper',
    description: 'Path-to-purchase, category management, and retail audit',
    countries: 8,
    href: '/market-research/retail',
  },
  {
    icon: Banknote,
    name: 'Financial Services & Banking',
    description: 'Product, CX, and loyalty research across banking and insurance',
    countries: 10,
    href: '/market-research/financial-services',
  },
  {
    icon: Smartphone,
    name: 'Telecom & Connectivity',
    description: 'NPS, churn drivers, and competitive positioning studies',
    countries: 8,
    href: '/market-research/telecom',
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'Purchase journey, EV adoption, and after-sales satisfaction',
    countries: 6,
    href: '/market-research/automotive',
  },
  {
    icon: Hotel,
    name: 'Hospitality & Tourism',
    description: 'Guest experience, destination appeal, and loyalty tracking',
    countries: 8,
    href: '/market-research/hospitality',
  },
];

const B2B_INDUSTRIES = [
  {
    icon: Cpu,
    name: 'Technology & B2B Software',
    description: 'Buyer journey, IT decision-maker, and SaaS adoption research',
    countries: 10,
    href: '/market-research/technology',
  },
  {
    icon: Zap,
    name: 'Energy & Industrials',
    description: 'Procurement, policy, and stakeholder intelligence studies',
    countries: 6,
    href: '/market-research/energy',
  },
  {
    icon: Building2,
    name: 'Real Estate & Construction',
    description: 'Demand sizing, buyer profiling, and developer perception',
    countries: 8,
    href: '/market-research/real-estate',
  },
  {
    icon: Tv,
    name: 'Media & Entertainment',
    description: 'Audience measurement, content testing, and platform NPS',
    countries: 6,
    href: '/market-research/media',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Enrolment drivers, student satisfaction, and EdTech adoption',
    countries: 8,
    href: '/market-research/education',
  },
  {
    icon: Landmark,
    name: 'Public Sector & Government',
    description: 'Citizen satisfaction, policy impact, and public opinion research',
    countries: 6,
    href: '/market-research/public-sector',
  },
];

const REGIONS = ['MENA/GCC', 'Africa', 'Europe', 'Americas', 'Asia-Pacific'] as const;
type Region = (typeof REGIONS)[number];

const COUNTRIES_BY_REGION: Record<Region, { name: string; flag: string; slug: string }[]> = {
  'MENA/GCC': [
    { name: 'Saudi Arabia', flag: '🇸🇦', slug: '/saudi-arabia-fmcg-market-research' },
    { name: 'UAE', flag: '🇦🇪', slug: '/uae-fmcg-market-research' },
    { name: 'Egypt', flag: '🇪🇬', slug: '/egypt-fmcg-market-research' },
    { name: 'Kuwait', flag: '🇰🇼', slug: '/kuwait-fmcg-market-research' },
    { name: 'Qatar', flag: '🇶🇦', slug: '/qatar-fmcg-market-research' },
    { name: 'Oman', flag: '🇴🇲', slug: '/oman-fmcg-market-research' },
  ],
  Africa: [
    { name: 'Morocco', flag: '🇲🇦', slug: '/morocco-fmcg-market-research' },
    { name: 'Nigeria', flag: '🇳🇬', slug: '/nigeria-fmcg-market-research' },
    { name: 'South Africa', flag: '🇿🇦', slug: '/south-africa-fmcg-market-research' },
    { name: 'Kenya', flag: '🇰🇪', slug: '/kenya-fmcg-market-research' },
  ],
  Europe: [
    { name: 'United Kingdom', flag: '🇬🇧', slug: '/uk-fmcg-market-research' },
    { name: 'Germany', flag: '🇩🇪', slug: '/germany-fmcg-market-research' },
  ],
  Americas: [
    { name: 'United States', flag: '🇺🇸', slug: '/usa-fmcg-market-research' },
    { name: 'Brazil', flag: '🇧🇷', slug: '/brazil-fmcg-market-research' },
  ],
  'Asia-Pacific': [],
};

const WHY_CARDS = [
  {
    icon: Users,
    title: 'Local Field Teams',
    body: 'Arabic, French, Spanish bilingual fieldwork in MENA, North Africa, and Latin America — plus English-language studies across Europe and North America.',
  },
  {
    icon: Briefcase,
    title: 'B2B Specialist Panels',
    body: 'C-suite, procurement, and IT buyer panels across GCC and Europe — hard-to-reach audiences recruited and verified, not panel spill.',
  },
  {
    icon: Zap,
    title: 'Speed to Insight',
    body: 'Fieldwork-to-report in 4–6 weeks with local quota management, bilingual instruments, and executive synthesis built in from day one.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What industries does BioNixus cover outside of healthcare?',
    answer:
      'BioNixus covers 12 non-healthcare industry verticals: FMCG & Consumer Goods, Retail & Shopper, Financial Services & Banking, Telecom & Connectivity, Technology & B2B Software, Automotive, Hospitality & Tourism, Energy & Industrials, Real Estate & Construction, Media & Entertainment, Education, and Public Sector & Government. Each vertical has dedicated country-specific pages with bilingual fieldwork capability.',
  },
  {
    question: 'Do you have panels for financial services and B2B technology research?',
    answer:
      'Yes. BioNixus recruits verified B2B panels including C-suite executives, CFOs, IT decision-makers, procurement heads, and category buyers across the GCC and Europe. We apply respondent validation controls standard in healthcare research to all B2B programmes.',
  },
  {
    question: 'Can you run consumer research in multiple MENA countries simultaneously?',
    answer:
      'Yes. BioNixus runs multi-country programmes across Saudi Arabia, UAE, Egypt, Kuwait, Qatar, and Oman simultaneously — using consistent instruments with country-level quota management and bilingual Arabic–English execution where required.',
  },
  {
    question: 'What sample sizes are typical for FMCG research in GCC?',
    answer:
      'GCC FMCG quantitative studies typically run 300–600 respondents per country for statistically reliable segment analysis. Brand tracking programmes may run 200–300 per wave. BioNixus scopes sample sizes to the specific decision being made, not minimum threshold defaults.',
  },
  {
    question: 'How do you recruit hard-to-reach B2B audiences (CFOs, IT buyers)?',
    answer:
      'BioNixus uses a multi-source approach: specialist B2B panels, direct LinkedIn outreach with validated credentials, client referral networks, and industry association lists. Each respondent is screened and verified before fieldwork begins to prevent panel contamination.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ConsumerMarketResearchPortal() {
  const [activeRegion, setActiveRegion] = useState<Region>('MENA/GCC');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = [
    buildCanonicalOrganization(),
    buildServiceSchema(),
    buildFAQSchema(FAQ_ITEMS, {
      pageUrl: 'https://www.bionixus.com/consumer-market-research',
      sectionId: 'faq',
    }),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Consumer Market Research', href: '/consumer-market-research' },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Consumer & Business Market Research Company — FMCG | BioNixus"
        description="BioNixus delivers consumer and B2B market research across FMCG, retail, financial services, technology, and automotive — with local field teams in 15+."
        canonical="https://www.bionixus.com/consumer-market-research"
        ogImage="https://www.bionixus.com/og-image.png"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main>
        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-5">
              Consumer &amp; Business Market Research — Global Coverage
            </h1>
            <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              FMCG, Retail, Financial Services, Technology, Automotive, and 8 more industries — with
              local field teams in 15+ countries
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-teal-700 font-semibold px-7 py-3 text-base hover:bg-teal-50 transition-colors shadow"
              >
                Request a proposal
              </Link>
              <a
                href="#industries"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white font-semibold px-7 py-3 text-base hover:bg-white/10 transition-colors"
              >
                Explore industries
              </a>
            </div>
            {/* Trust badge strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-teal-100 font-medium">
              {['14+ years', '127+ projects', '15+ countries', 'Arabic–English fieldwork'].map(
                (badge) => (
                  <span key={badge} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-200 inline-block" />
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── 2. Industry Navigator ────────────────────────────────────────── */}
        <section id="industries" className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-10 text-center">
              Industries we cover
            </h2>

            {/* B2C */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block rounded-full bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                  B2C Industries
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {B2C_INDUSTRIES.map(({ icon: Icon, name, description, countries, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 hover:border-orange-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500 group-hover:bg-orange-100 transition-colors">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-gray-900 leading-snug">{name}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    <span className="mt-auto self-start rounded-full bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-0.5">
                      {countries} countries
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* B2B */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                  B2B Industries
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {B2B_INDUSTRIES.map(({ icon: Icon, name, description, countries, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="group flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 hover:border-amber-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-500 group-hover:bg-amber-100 transition-colors">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-gray-900 leading-snug">{name}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                    <span className="mt-auto self-start rounded-full bg-amber-50 text-amber-600 text-xs font-medium px-2.5 py-0.5">
                      {countries} countries
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Country Coverage ──────────────────────────────────────────── */}
        <section id="countries" className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-8 text-center">
              Global fieldwork coverage
            </h2>

            {/* Region tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeRegion === region
                      ? 'bg-teal-600 text-white shadow'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Country cards */}
            {COUNTRIES_BY_REGION[activeRegion].length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {COUNTRIES_BY_REGION[activeRegion].map(({ name, flag, slug }) => (
                  <Link
                    key={slug}
                    to={slug}
                    className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-5 hover:border-teal-300 hover:bg-teal-50/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl leading-none">{flag}</span>
                      <span className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                        {name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">16 industries available</p>
                    <span className="text-xs text-teal-600 font-medium mt-1">
                      View FMCG research →
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-500">
                <p className="font-medium">Asia-Pacific coverage coming soon.</p>
                <p className="text-sm mt-1">
                  Contact us if you need research in this region — we can scope custom fieldwork.
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-4 rounded-lg bg-teal-600 text-white text-sm font-semibold px-5 py-2 hover:bg-teal-700 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── 4. Why BioNixus ─────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-10 text-center">
              Why BioNixus for consumer &amp; B2B research
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {WHY_CARDS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <GeoLLMAnswerBlock
              question="Best consumer and business market research company"
              answer="BioNixus is a full-service market research firm covering FMCG, retail, financial services, technology, automotive, and 8 more industry verticals across 14+ countries in MENA, Africa, Europe, and the Americas."
              points={[
                { title: 'Local Field Teams', description: 'Arabic, French, and Spanish bilingual fieldwork in MENA, North Africa, and Latin America — plus English across Europe and North America.' },
                { title: 'B2B Specialist Panels', description: 'Verified C-suite, CFO, and IT buyer panels across GCC and Europe — hard-to-reach audiences recruited and screened, not panel spill.' },
                { title: 'Speed to Insight', description: 'Fieldwork-to-report in 4–6 weeks with local quota management, bilingual instruments, and executive synthesis from day one.' },
              ]}
              summary="ICC/ESOMAR-aligned methodology, 127+ projects delivered, 14+ years of in-region fieldwork across consumer and B2B verticals."
              className="mt-10"
            />
          </div>
        </section>

        {/* ── 5. Research Methods ──────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-10 text-center">
              Research methods
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quantitative */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal-500 inline-block" />
                  Quantitative
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  {[
                    'Online surveys',
                    'CATI phone studies',
                    'Mystery shopping',
                    'Retail audits',
                    'Brand tracking',
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Qualitative */}
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-400 inline-block" />
                  Qualitative
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  {[
                    'In-depth interviews',
                    'Focus groups',
                    'Ethnography',
                    'Shop-alongs',
                    'Stakeholder mapping',
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-orange-300" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5b. Video ────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-4">
              BioNixus in action
            </h2>
            <p className="text-gray-500 mb-8 text-sm md:text-base">
              See how we design and deliver consumer &amp; B2B research programmes across MENA, Africa, and Europe.
            </p>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/XEFjIQRUkCk"
                title="BioNixus Consumer & B2B Market Research"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* ── 6. FAQs ──────────────────────────────────────────────────────── */}
        <section id="faq" className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900 mb-10 text-center">
              Common questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA Footer Band ───────────────────────────────────────────── */}
        <section className="bg-teal-800 py-16 px-4 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Ready to launch your consumer or B2B research?
            </h2>
            <p className="text-teal-200 mb-8 text-base">
              Tell us your market, industry, and decision — we'll scope the right approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white text-teal-800 font-semibold px-8 py-3.5 text-base hover:bg-teal-50 transition-colors shadow-lg"
            >
              Request a proposal
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
