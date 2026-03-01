import { lazy, Suspense, type ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import Services from '@/pages/Services';
import FAQ from '@/pages/FAQ';
import Resources from '@/pages/Resources';
import SiteMapPage from '@/pages/SiteMapPage';
import ServiceDetail from '@/pages/ServiceDetail';
import Privacy from '@/pages/Privacy';
import Contact from '@/pages/Contact';
import Methodology from '@/pages/Methodology';
import VerifyEmail from '@/pages/VerifyEmail';
import MenaMarketData from '@/pages/MenaMarketData';
import GccMarketAccessGuide from '@/pages/GccMarketAccessGuide';
import MarketResearch from '@/pages/MarketResearch';
import MarketResearchSaudiArabiaPharmaceutical from '@/pages/MarketResearchSaudiArabiaPharmaceutical';
import MarketResearchHealthcare from '@/pages/MarketResearchHealthcare';
import QualitativeMarketResearch from '@/pages/QualitativeMarketResearch';
import BionixusMarketResearchMiddleEast from '@/pages/BionixusMarketResearchMiddleEast';
import QuantitativeHealthcareMarketResearchGuide from '@/pages/QuantitativeHealthcareMarketResearchGuide';
import SpanishMarketAccess from '@/pages/SpanishMarketAccess';
import GermanSuccessInStartups from '@/pages/GermanSuccessInStartups';
import ArabicBlogAlsawdyh from '@/pages/ArabicBlogAlsawdyh';
import PharmaciesSaudiArabiaMarketing from '@/pages/PharmaciesSaudiArabiaMarketing';
import AiChatbotsLeadGeneration from '@/pages/AiChatbotsLeadGeneration';
import GlobalWebsites from '@/pages/GlobalWebsites';
import GlobalWebsiteCountry from '@/pages/GlobalWebsiteCountry';
import KuwaitPharmaCompanies from '@/pages/KuwaitPharmaCompanies';
import SaudiPharmaCompanies from '@/pages/SaudiPharmaCompanies';
import UaePharmaCompanies from '@/pages/UaePharmaCompanies';
import EgyptPharmaCompanies from '@/pages/EgyptPharmaCompanies';
import QatarPharmaCompanies from '@/pages/QatarPharmaCompanies';
import OmanPharmaCompanies from '@/pages/OmanPharmaCompanies';
import BahrainPharmaCompanies from '@/pages/BahrainPharmaCompanies';
import IraqPharmaCompanies from '@/pages/IraqPharmaCompanies';
import IranPharmaCompanies from '@/pages/IranPharmaCompanies';
import HubPage from '@/pages/healthcare-research/HubPage';
import CountryPage from '@/pages/healthcare-research/CountryPage';
import TherapyPage from '@/pages/healthcare-research/TherapyPage';
import ServicePage from '@/pages/healthcare-research/ServicePage';

const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AdminLogin = lazy(() => import('@/pages/AdminLogin'));
const AdminImportSubscribers = lazy(() => import('@/pages/AdminImportSubscribers'));
const AdminAnalytics = lazy(() => import('@/pages/AdminAnalytics'));
const AdminCalendar = lazy(() => import('@/pages/AdminCalendar'));
const AdminCalendarNew = lazy(() => import('@/pages/AdminCalendarNew'));
const AdminSendNewsletter = lazy(() => import('@/pages/AdminSendNewsletter'));
const CaseStudy = lazy(() => import('@/pages/CaseStudy'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function suspensePage(node: ReactNode) {
  return (
    <Suspense
      fallback={
        <div className="py-10 text-center text-muted-foreground" role="status" aria-live="polite">
          Loading page...
        </div>
      }
    >
      {node}
    </Suspense>
  );
}

export const routes: RouteObject[] = [
  { path: '/', element: <Index /> },
  { path: '/de', element: <Index /> },
  { path: '/fr', element: <Index /> },
  { path: '/es', element: <Index /> },
  { path: '/zh', element: <Index /> },
  { path: '/ar', element: <Index /> },
  { path: '/zh/about', element: <Index /> },
  { path: '/zh/healthcare-market-research', element: <Index /> },
  { path: '/zh/quantitative-research', element: <Index /> },
  { path: '/zh/qualitative-research', element: <Index /> },
  { path: '/zh/market-access', element: <Index /> },
  { path: '/zh/clinical-trials', element: <Index /> },
  { path: '/zh/contact', element: <Index /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/services/:slug', element: <ServiceDetail /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/resources', element: <Resources /> },
  { path: '/sitemap', element: <SiteMapPage /> },
  { path: '/mena-pharma-market-data', element: <MenaMarketData /> },
  { path: '/gcc-market-access-guide', element: <GccMarketAccessGuide /> },
  { path: '/market-research', element: <MarketResearch /> },
  { path: '/market-research-saudi-arabia-pharmaceutical', element: <MarketResearchSaudiArabiaPharmaceutical /> },
  { path: '/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/qualitative-market-research', element: <QualitativeMarketResearch /> },
  { path: '/bionixus-market-research-middle-east', element: <BionixusMarketResearchMiddleEast /> },
  {
    path: '/quantitative-healthcare-market-research',
    element: <QuantitativeHealthcareMarketResearchGuide />,
  },
  { path: '/global-websites', element: <GlobalWebsites /> },
  { path: '/global-websites/:countrySlug', element: <GlobalWebsiteCountry /> },
  { path: '/healthcare-market-research', element: <HubPage /> },
  { path: '/saudi-arabia', element: <CountryPage /> },
  { path: '/uae', element: <CountryPage /> },
  { path: '/kuwait', element: <CountryPage /> },
  { path: '/uk', element: <CountryPage /> },
  { path: '/europe', element: <CountryPage /> },
  { path: '/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/healthcare-market-research/therapy/:area', element: <TherapyPage /> },
  { path: '/healthcare-market-research/services/:service', element: <ServicePage /> },
  { path: '/pharmaceutical-companies-kuwait', element: <KuwaitPharmaCompanies /> },
  { path: '/pharmaceutical-companies-saudi-arabia', element: <SaudiPharmaCompanies /> },
  { path: '/pharmaceutical-companies-uae', element: <UaePharmaCompanies /> },
  { path: '/pharmaceutical-companies-egypt', element: <EgyptPharmaCompanies /> },
  { path: '/pharmaceutical-companies-qatar', element: <QatarPharmaCompanies /> },
  { path: '/pharmaceutical-companies-oman', element: <OmanPharmaCompanies /> },
  { path: '/pharmaceutical-companies-bahrain', element: <BahrainPharmaCompanies /> },
  { path: '/pharmaceutical-companies-iraq', element: <IraqPharmaCompanies /> },
  { path: '/pharmaceutical-companies-iran', element: <IranPharmaCompanies /> },
  { path: '/blog', element: <Blog /> },
  { path: '/de/blog', element: <Blog /> },
  { path: '/fr/blog', element: <Blog /> },
  { path: '/es/market-access', element: <SpanishMarketAccess /> },
  { path: '/de/success-in-startups', element: <GermanSuccessInStartups /> },
  { path: '/ar/arabic-blog-alsawdyh', element: <ArabicBlogAlsawdyh /> },
  { path: '/pharmacies-saudi-arabia-marketing', element: <PharmaciesSaudiArabiaMarketing /> },
  { path: '/bionixus-ai-chatbots-increase-sales-and-lead-generation', element: <AiChatbotsLeadGeneration /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/case-studies/:slug', element: suspensePage(<CaseStudy />) },
  { path: '/privacy', element: <Privacy /> },
  { path: '/contact', element: <Contact /> },
  { path: '/de/contact', element: <Contact /> },
  { path: '/fr/contacts', element: <Contact /> },
  { path: '/fr/contact', element: <Contact /> },
  { path: '/ar/contacts', element: <Contact /> },
  { path: '/es/contact', element: <Contact /> },
  { path: '/zh/contact', element: <Contact /> },
  { path: '/ar/contact', element: <Contact /> },
  { path: '/methodology', element: <Methodology /> },
  { path: '/de/methodology', element: <Methodology /> },
  { path: '/fr/methodology', element: <Methodology /> },
  { path: '/es/methodology', element: <Methodology /> },
  { path: '/zh/methodology', element: <Methodology /> },
  { path: '/ar/methodology', element: <Methodology /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/admin/dashboard', element: suspensePage(<AdminDashboard />) },
  { path: '/admin/login', element: suspensePage(<AdminLogin />) },
  { path: '/admin/import-subscribers', element: suspensePage(<AdminImportSubscribers />) },
  { path: '/admin/analytics', element: suspensePage(<AdminAnalytics />) },
  { path: '/admin/calendar', element: suspensePage(<AdminCalendar />) },
  { path: '/admin/calendar/new', element: suspensePage(<AdminCalendarNew />) },
  { path: '/admin/send-newsletter', element: suspensePage(<AdminSendNewsletter />) },
  { path: '*', element: suspensePage(<NotFound />) },
];

