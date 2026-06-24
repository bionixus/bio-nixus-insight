import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EmeaSignalsSection from '@/components/home/EmeaSignalsSection';
import ServicesSection from '@/components/ServicesSection';
import GeographicCoverageSection from '@/components/GeographicCoverageSection';
import MethodologySection from '@/components/MethodologySection';
import TherapeuticAreasSection from '@/components/TherapeuticAreasSection';
import StatsSection from '@/components/StatsSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HomePathwaysSection, { type PathwayCard } from '@/components/home/HomePathwaysSection';
import { HomeExplainerSection } from '@/components/media/HomeExplainerSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { CTASection } from '@/components/shared/CTASection';
import { useSanityLatestInsights } from '@/hooks/useSanityBlog';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useInitialData } from '@/contexts/InitialDataContext';
import type { BlogPost } from '@/types/blog';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { getHomePageFaq, HOME_FAQ_SECTION_ID } from '@/lib/homePageFaq';
import { languagePaths, seoByLanguage } from '@/lib/seo';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { hash } = useLocation();
  const { language } = useLanguage();
  const { data: routeData } = useInitialData();
  const ssrHomeInsights = Array.isArray(routeData.homeLatestInsights)
    ? (routeData.homeLatestInsights as BlogPost[])
    : undefined;
  const { data: sanityPosts, isLoading: blogLoading } = useSanityLatestInsights(3, ssrHomeInsights);
  const homeArticlePosts = sanityPosts ?? ssrHomeInsights;
  const homeFaq = getHomePageFaq(language);
  const homeCanonicalUrl = new URL(seoByLanguage[language].canonicalPath, 'https://www.bionixus.com').toString();
  const basePath = languagePaths[language] || '/';
  const contactHref =
    language === 'fr' ? '/fr/contacts' : language === 'ar' ? '/ar/contacts' : `${basePath === '/' ? '' : basePath}/contact`;

  const featuredCards: PathwayCard[] = [
    ...(language === 'ar'
      ? [
          {
            to: '/ar/arabic-blog-alsawdyh',
            title: 'دليل أبحاث السوق الدوائي في السعودية',
            description:
              'دليل عربي عملي يربط التنظيم المحلي، ديناميكيات المستشفيات، وأسئلة الوصول إلى السوق بقرارات الأدوية في المملكة.',
            highlight: true,
            label: 'موارد عربية',
            decisionHint: 'مقالات وروابط ذات صلة',
          },
        ]
      : []),
    {
      to: '/healthcare-market-research',
      title: 'Healthcare Market Research',
      description:
        'Decision-ready healthcare market research programs for pharmaceutical teams in Europe, the UK, MENA, and GCC markets.',
      highlight: false,
    },
    {
      to: '/healthcare-market-research/saudi-arabia',
      title: 'Saudi Arabia Pharmaceutical Research',
      description:
        'SFDA-aligned pharmaceutical and healthcare market research intelligence for launch, access, and growth in KSA.',
      highlight: true,
      label: 'Country-Level Depth',
      decisionHint: 'Best for country-level execution',
    },
    {
      to: '/healthcare-market-research/uae',
      title: 'UAE Pharmaceutical Market Research',
      description:
        'Dubai and Abu Dhabi healthcare intelligence for drug development, market access, and quantitative and qualitative research across the Emirates.',
      highlight: true,
      label: 'UAE Priority',
      decisionHint: 'Best for UAE launch and access execution',
    },
    {
      to: '/bionixus-market-research-middle-east',
      title: 'Middle East Pharmaceutical Market Research',
      description:
        'GCC-focused pharmaceutical evidence programs for launch sequencing, market access, and cross-country execution.',
      highlight: true,
      label: 'GCC Priority',
      decisionHint: 'Best for Middle East launch and access decisions',
    },
    {
      to: '/strategic-portfolio',
      title: 'Strategic Portfolio',
      description:
        'Full capability overview: 127+ projects, 48 global clients, dual-practice healthcare and consumer research across Egypt and MENA.',
      highlight: true,
      label: 'Egypt Focus',
      decisionHint: 'See our market research portfolio',
    },
    {
      to: '/insights/top-market-research-companies-egypt-2026',
      title: 'Top Market Research Companies in Egypt (2026)',
      description:
        'Independent guide comparing 5 leading firms for healthcare, pharma, and consumer research in Egypt — the largest market in MENA.',
      highlight: true,
      label: 'New Guide',
      decisionHint: 'Best for Egypt partner selection',
    },
    {
      to: '/quantitative-healthcare-market-research',
      title: 'Quantitative Healthcare Market Research Guide',
      description:
        'Execution-ready 2026 guide for survey architecture, tracker governance, and AI-assisted validation in Saudi Arabia and UAE.',
      highlight: true,
      label: 'Featured Guide',
      decisionHint: 'Best for quantitative design decisions',
    },
    {
      to: '/global-websites',
      title: 'Global Websites Directory',
      description:
        'Discover healthcare market research pages by country to support pharmaceutical strategy across Europe and the Middle East.',
      highlight: true,
      label: 'Country-Level Depth',
      decisionHint: 'Best for multi-country planning',
    },
  ];

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        pageType="home"
        pageUrl={homeCanonicalUrl}
        language={language}
        faqItems={homeFaq.items}
        articlePosts={homeArticlePosts}
      />
      <Navbar />
      <main>
        <HeroSection />
        <EmeaSignalsSection />
        <ServicesSection />
        <HomeExplainerSection />
        <StatsSection />
        <div className="cv-auto">
          <BlogSection
            posts={homeArticlePosts ?? undefined}
            isLoading={blogLoading && !ssrHomeInsights?.length}
          />
        </div>
        <TestimonialsSection />
        <div className="cv-auto">
          <GeographicCoverageSection />
        </div>
        <div className="cv-auto">
          <TherapeuticAreasSection />
        </div>
        <div className="cv-auto">
          <HomePathwaysSection cards={featuredCards} />
        </div>
        <div className="cv-auto">
          <MethodologySection nestUnderParentH1 />
        </div>
        <div className="section-padding bg-cream border-t border-border">
          <FAQSection
            sectionId={HOME_FAQ_SECTION_ID}
            title={homeFaq.sectionTitle}
            items={homeFaq.items}
            className="py-14 bg-transparent"
          />
          <div className="container-wide max-w-4xl mx-auto pb-12 text-center text-sm text-muted-foreground">
            <Link to="/faq" className="text-primary font-medium hover:underline cursor-pointer">
              {homeFaq.ctaFullFaq}
            </Link>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <Link to={contactHref} className="text-primary font-medium hover:underline cursor-pointer">
              {homeFaq.ctaProposal}
            </Link>
          </div>
        </div>
        <CTASection variant="research-proposal" />
        <div className="cv-auto">
          <ContactSection embedOnHomePage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
