import { lazy, Suspense, type ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import HubPage from '@/pages/healthcare-research/HubPage';
import CountryPage from '@/pages/healthcare-research/CountryPage';
import TherapyPage from '@/pages/healthcare-research/TherapyPage';
import ServicePage from '@/pages/healthcare-research/ServicePage';

const CaseStudies = lazy(() => import('@/pages/CaseStudies'));
const CaseStudy = lazy(() => import('@/pages/CaseStudy'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Resources = lazy(() => import('@/pages/Resources'));
const SiteMapPage = lazy(() => import('@/pages/SiteMapPage'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Contact = lazy(() => import('@/pages/Contact'));
const Methodology = lazy(() => import('@/pages/Methodology'));
const VerifyEmail = lazy(() => import('@/pages/VerifyEmail'));
const MenaMarketData = lazy(() => import('@/pages/MenaMarketData'));
const GccMarketAccessGuide = lazy(() => import('@/pages/GccMarketAccessGuide'));
const MarketResearch = lazy(() => import('@/pages/MarketResearch'));
const BionixusMarketResearchMiddleEast = lazy(() => import('@/pages/BionixusMarketResearchMiddleEast'));
const QuantitativeHealthcareMarketResearchGuide = lazy(
  () => import('@/pages/QuantitativeHealthcareMarketResearchGuide'),
);
const GlobalWebsites = lazy(() => import('@/pages/GlobalWebsites'));
const GlobalWebsiteCountry = lazy(() => import('@/pages/GlobalWebsiteCountry'));
const KuwaitPharmaCompanies = lazy(() => import('@/pages/KuwaitPharmaCompanies'));
const SaudiPharmaCompanies = lazy(() => import('@/pages/SaudiPharmaCompanies'));
const UaePharmaCompanies = lazy(() => import('@/pages/UaePharmaCompanies'));
const EgyptPharmaCompanies = lazy(() => import('@/pages/EgyptPharmaCompanies'));
const QatarPharmaCompanies = lazy(() => import('@/pages/QatarPharmaCompanies'));
const OmanPharmaCompanies = lazy(() => import('@/pages/OmanPharmaCompanies'));
const BahrainPharmaCompanies = lazy(() => import('@/pages/BahrainPharmaCompanies'));
const IraqPharmaCompanies = lazy(() => import('@/pages/IraqPharmaCompanies'));
const IranPharmaCompanies = lazy(() => import('@/pages/IranPharmaCompanies'));
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AdminLogin = lazy(() => import('@/pages/AdminLogin'));
const AdminImportSubscribers = lazy(() => import('@/pages/AdminImportSubscribers'));
const AdminAnalytics = lazy(() => import('@/pages/AdminAnalytics'));
const AdminCalendar = lazy(() => import('@/pages/AdminCalendar'));
const AdminCalendarNew = lazy(() => import('@/pages/AdminCalendarNew'));
const AdminSendNewsletter = lazy(() => import('@/pages/AdminSendNewsletter'));
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
  { path: '/about', element: suspensePage(<About />) },
  { path: '/services', element: suspensePage(<Services />) },
  { path: '/services/:slug', element: suspensePage(<ServiceDetail />) },
  { path: '/faq', element: suspensePage(<FAQ />) },
  { path: '/resources', element: suspensePage(<Resources />) },
  { path: '/sitemap', element: suspensePage(<SiteMapPage />) },
  { path: '/mena-pharma-market-data', element: suspensePage(<MenaMarketData />) },
  { path: '/gcc-market-access-guide', element: suspensePage(<GccMarketAccessGuide />) },
  { path: '/market-research', element: suspensePage(<MarketResearch />) },
  { path: '/bionixus-market-research-middle-east', element: suspensePage(<BionixusMarketResearchMiddleEast />) },
  {
    path: '/quantitative-healthcare-market-research',
    element: suspensePage(<QuantitativeHealthcareMarketResearchGuide />),
  },
  { path: '/global-websites', element: suspensePage(<GlobalWebsites />) },
  { path: '/global-websites/:countrySlug', element: suspensePage(<GlobalWebsiteCountry />) },
  { path: '/healthcare-market-research', element: <HubPage /> },
  { path: '/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/healthcare-market-research/therapy/:area', element: <TherapyPage /> },
  { path: '/healthcare-market-research/services/:service', element: <ServicePage /> },
  { path: '/pharmaceutical-companies-kuwait', element: suspensePage(<KuwaitPharmaCompanies />) },
  { path: '/pharmaceutical-companies-saudi-arabia', element: suspensePage(<SaudiPharmaCompanies />) },
  { path: '/pharmaceutical-companies-uae', element: suspensePage(<UaePharmaCompanies />) },
  { path: '/pharmaceutical-companies-egypt', element: suspensePage(<EgyptPharmaCompanies />) },
  { path: '/pharmaceutical-companies-qatar', element: suspensePage(<QatarPharmaCompanies />) },
  { path: '/pharmaceutical-companies-oman', element: suspensePage(<OmanPharmaCompanies />) },
  { path: '/pharmaceutical-companies-bahrain', element: suspensePage(<BahrainPharmaCompanies />) },
  { path: '/pharmaceutical-companies-iraq', element: suspensePage(<IraqPharmaCompanies />) },
  { path: '/pharmaceutical-companies-iran', element: suspensePage(<IranPharmaCompanies />) },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/case-studies', element: suspensePage(<CaseStudies />) },
  { path: '/case-studies/:slug', element: suspensePage(<CaseStudy />) },
  { path: '/privacy', element: suspensePage(<Privacy />) },
  { path: '/contact', element: suspensePage(<Contact />) },
  { path: '/de/contact', element: suspensePage(<Contact />) },
  { path: '/fr/contact', element: suspensePage(<Contact />) },
  { path: '/es/contact', element: suspensePage(<Contact />) },
  { path: '/zh/contact', element: suspensePage(<Contact />) },
  { path: '/ar/contact', element: suspensePage(<Contact />) },
  { path: '/methodology', element: suspensePage(<Methodology />) },
  { path: '/de/methodology', element: suspensePage(<Methodology />) },
  { path: '/fr/methodology', element: suspensePage(<Methodology />) },
  { path: '/es/methodology', element: suspensePage(<Methodology />) },
  { path: '/zh/methodology', element: suspensePage(<Methodology />) },
  { path: '/ar/methodology', element: suspensePage(<Methodology />) },
  { path: '/verify-email', element: suspensePage(<VerifyEmail />) },
  { path: '/admin/dashboard', element: suspensePage(<AdminDashboard />) },
  { path: '/admin/login', element: suspensePage(<AdminLogin />) },
  { path: '/admin/import-subscribers', element: suspensePage(<AdminImportSubscribers />) },
  { path: '/admin/analytics', element: suspensePage(<AdminAnalytics />) },
  { path: '/admin/calendar', element: suspensePage(<AdminCalendar />) },
  { path: '/admin/calendar/new', element: suspensePage(<AdminCalendarNew />) },
  { path: '/admin/send-newsletter', element: suspensePage(<AdminSendNewsletter />) },
  { path: '*', element: suspensePage(<NotFound />) },
];

