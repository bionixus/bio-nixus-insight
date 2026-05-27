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
import Insights from '@/pages/Insights';
import SiteMapPage from '@/pages/SiteMapPage';
import ServiceDetail from '@/pages/ServiceDetail';
import Privacy from '@/pages/Privacy';
const Terms = lazy(() => import('@/pages/Terms'));
import Contact from '@/pages/Contact';
import Methodology from '@/pages/Methodology';
import VerifyEmail from '@/pages/VerifyEmail';
import MenaMarketData from '@/pages/MenaMarketData';
import GccMarketAccessGuide from '@/pages/GccMarketAccessGuide';
import BionixusVsIqviaMena from '@/pages/BionixusVsIqviaMena';
import GccPharmaMarketReport2026 from '@/pages/GccPharmaMarketReport2026';
import KolMappingSaudiArabiaOncology from '@/pages/KolMappingSaudiArabiaOncology';
import PhysicianSurveySaudiArabia from '@/pages/PhysicianSurveySaudiArabia';
import SfdaMarketAccessStrategySaudiArabia from '@/pages/SfdaMarketAccessStrategySaudiArabia';
import BiosimilarMarketEntrySaudiArabia from '@/pages/BiosimilarMarketEntrySaudiArabia';
import IqviaAlternative from '@/pages/IqviaAlternative';
import PharmaceuticalMarketResearchDubai from '@/pages/PharmaceuticalMarketResearchDubai';
import KantarHealthAlternativeGcc from '@/pages/KantarHealthAlternativeGcc';
import GfkAlternativeEgypt from '@/pages/GfkAlternativeEgypt';
import NotFound from '@/pages/NotFound';
import MarketResearch from '@/pages/MarketResearch';
import MarketResearchHome from '@/pages/MarketResearchHome';
import MarketResearchSaudiArabiaPharmaceutical from '@/pages/MarketResearchSaudiArabiaPharmaceutical';
import MarketResearchHealthcare from '@/pages/MarketResearchHealthcare';
import QualitativeMarketResearch from '@/pages/QualitativeMarketResearch';
import BionixusMarketResearchMiddleEast from '@/pages/BionixusMarketResearchMiddleEast';
import QuantitativeHealthcareMarketResearchGuide from '@/pages/QuantitativeHealthcareMarketResearchGuide';
import GccPharmaceuticalMarketResearch from '@/pages/GccPharmaceuticalMarketResearch';
import UaePharmaceuticalMarketResearch from '@/pages/UaePharmaceuticalMarketResearch';
import SaudiPayerMarketAccessResearch from '@/pages/SaudiPayerMarketAccessResearch';
import GccHcpRecruitmentMarketResearch from '@/pages/GccHcpRecruitmentMarketResearch';
import HealthcareMarketResearchAgencyGcc from '@/pages/HealthcareMarketResearchAgencyGcc';
import PharmaceuticalTherapyAreas from '@/pages/PharmaceuticalTherapyAreas';
import UaeMarketAccessResearch from '@/pages/UaeMarketAccessResearch';
import KuwaitMarketAccessResearch from '@/pages/KuwaitMarketAccessResearch';
import QatarMarketAccessResearch from '@/pages/QatarMarketAccessResearch';
import HealthcareFieldworkMiddleEast from '@/pages/HealthcareFieldworkMiddleEast';
import RealWorldEvidence from '@/pages/RealWorldEvidence';
import RealWorldEvidenceGcc from '@/pages/RealWorldEvidenceGcc';
import HeorConsultingSaudiArabia from '@/pages/HeorConsultingSaudiArabia';
import PatientSupportProgramResearchGcc from '@/pages/PatientSupportProgramResearchGcc';
import BudgetImpactModelSaudiArabia from '@/pages/BudgetImpactModelSaudiArabia';
import SpanishMarketAccess from '@/pages/SpanishMarketAccess';
import GermanSuccessInStartups from '@/pages/GermanSuccessInStartups';
import ArabicBlogAlsawdyh from '@/pages/ArabicBlogAlsawdyh';
import PharmaciesSaudiArabiaMarketing from '@/pages/PharmaciesSaudiArabiaMarketing';
import AiChatbotsLeadGeneration from '@/pages/AiChatbotsLeadGeneration';
import GlobalWebsites from '@/pages/GlobalWebsites';
import GlobalWebsiteCountry from '@/pages/GlobalWebsiteCountry';
import PremiumHomePreview from '@/pages/PremiumHomePreview';
import ConfPortfolio from '@/pages/ConfPortfolio';
import KuwaitPharmaCompanies from '@/pages/KuwaitPharmaCompanies';
import SaudiPharmaCompanies from '@/pages/SaudiPharmaCompanies';
import UaePharmaCompanies from '@/pages/UaePharmaCompanies';
import EgyptPharmaCompanies from '@/pages/EgyptPharmaCompanies';
import QatarPharmaCompanies from '@/pages/QatarPharmaCompanies';
import OmanPharmaCompanies from '@/pages/OmanPharmaCompanies';
import BahrainPharmaCompanies from '@/pages/BahrainPharmaCompanies';
import IraqPharmaCompanies from '@/pages/IraqPharmaCompanies';
import IranPharmaCompanies from '@/pages/IranPharmaCompanies';
import MarketResearchUae from '@/pages/MarketResearchUae';
import MarketResearchKsa from '@/pages/MarketResearchKsa';
import MarketResearchSaudi from '@/pages/MarketResearchSaudi';
import MarketResearchKuwait from '@/pages/MarketResearchKuwait';
import MarketResearchEgypt from '@/pages/MarketResearchEgypt';
import Nf1PharmaMarketResearch from '@/pages/Nf1PharmaMarketResearch';
import DesmoidTumorPharmaMarketResearch from '@/pages/DesmoidTumorPharmaMarketResearch';
import ArMarketResearchUae from '@/pages/ArMarketResearchUae';
import ArMarketResearchKsa from '@/pages/ArMarketResearchKsa';
import ArMarketResearchSaudi from '@/pages/ArMarketResearchSaudi';
import ArMarketResearchKuwait from '@/pages/ArMarketResearchKuwait';
import ArMarketResearchEgypt from '@/pages/ArMarketResearchEgypt';
import SaudiArabiaMedicalDevicesMarketReport from '@/pages/SaudiArabiaMedicalDevicesMarketReport';
import SaudiArabiaHealthcareMarketReport from '@/pages/SaudiArabiaHealthcareMarketReport';
import UaeHealthcareMarketReport from '@/pages/UaeHealthcareMarketReport';
import UaeMedicalDevicesMarketReport from '@/pages/UaeMedicalDevicesMarketReport';
import GccAnesthesiaSurgicalMarket from '@/pages/GccAnesthesiaSurgicalMarket';
import GccMedicalDevicesMarketReport from '@/pages/GccMedicalDevicesMarketReport';
import KuwaitMedicalDevicesMarketReport from '@/pages/KuwaitMedicalDevicesMarketReport';
import KuwaitHealthcareMarketReport from '@/pages/KuwaitHealthcareMarketReport';
import QatarMedicalDevicesMarketReport from '@/pages/QatarMedicalDevicesMarketReport';
import QatarHealthcareMarketReport from '@/pages/QatarHealthcareMarketReport';
import BahrainMedicalDevicesMarketReport from '@/pages/BahrainMedicalDevicesMarketReport';
import BahrainHealthcareMarketReport from '@/pages/BahrainHealthcareMarketReport';
import OmanMedicalDevicesMarketReport from '@/pages/OmanMedicalDevicesMarketReport';
import OmanHealthcareMarketReport from '@/pages/OmanHealthcareMarketReport';
import EgyptMedicalDevicesMarketReport from '@/pages/EgyptMedicalDevicesMarketReport';
import EgyptHealthcareMarketReport from '@/pages/EgyptHealthcareMarketReport';
import UkHealthcareMarketReport from '@/pages/UkHealthcareMarketReport';
import UkMedicalDevicesMarketReport from '@/pages/UkMedicalDevicesMarketReport';
import GermanyHealthcareMarketReport from '@/pages/GermanyHealthcareMarketReport';
import GermanyMedicalDevicesMarketReport from '@/pages/GermanyMedicalDevicesMarketReport';
import FranceHealthcareMarketReport from '@/pages/FranceHealthcareMarketReport';
import FranceMedicalDevicesMarketReport from '@/pages/FranceMedicalDevicesMarketReport';
import ItalyHealthcareMarketReport from '@/pages/ItalyHealthcareMarketReport';
import ItalyMedicalDevicesMarketReport from '@/pages/ItalyMedicalDevicesMarketReport';
import SpainHealthcareMarketReport from '@/pages/SpainHealthcareMarketReport';
import SpainMedicalDevicesMarketReport from '@/pages/SpainMedicalDevicesMarketReport';
import UsaHealthcareMarketReport from '@/pages/UsaHealthcareMarketReport';
import UsaMedicalDevicesMarketReport from '@/pages/UsaMedicalDevicesMarketReport';
import BrazilHealthcareMarketReport from '@/pages/BrazilHealthcareMarketReport';
import BrazilMedicalDevicesMarketReport from '@/pages/BrazilMedicalDevicesMarketReport';
import CanadaHealthcareMarketReport from '@/pages/CanadaHealthcareMarketReport';
import CanadaMedicalDevicesMarketReport from '@/pages/CanadaMedicalDevicesMarketReport';
import IndiaHealthcareMarketReport from '@/pages/IndiaHealthcareMarketReport';
import IndiaMedicalDevicesMarketReport from '@/pages/IndiaMedicalDevicesMarketReport';
import ChinaHealthcareMarketReport from '@/pages/ChinaHealthcareMarketReport';
import ChinaMedicalDevicesMarketReport from '@/pages/ChinaMedicalDevicesMarketReport';
import JapanHealthcareMarketReport from '@/pages/JapanHealthcareMarketReport';
import JapanMedicalDevicesMarketReport from '@/pages/JapanMedicalDevicesMarketReport';
import SouthKoreaHealthcareMarketReport from '@/pages/SouthKoreaHealthcareMarketReport';
import SouthKoreaMedicalDevicesMarketReport from '@/pages/SouthKoreaMedicalDevicesMarketReport';
import AustraliaHealthcareMarketReport from '@/pages/AustraliaHealthcareMarketReport';
import AustraliaMedicalDevicesMarketReport from '@/pages/AustraliaMedicalDevicesMarketReport';
import SingaporeHealthcareMarketReport from '@/pages/SingaporeHealthcareMarketReport';
import SingaporeMedicalDevicesMarketReport from '@/pages/SingaporeMedicalDevicesMarketReport';
import TurkeyHealthcareMarketReport from '@/pages/TurkeyHealthcareMarketReport';
import TurkeyMedicalDevicesMarketReport from '@/pages/TurkeyMedicalDevicesMarketReport';
import TopMarketResearchCompaniesEgypt2026 from '@/pages/TopMarketResearchCompaniesEgypt2026';
import ArTopMarketResearchCompaniesEgypt2026 from '@/pages/ArTopMarketResearchCompaniesEgypt2026';
import CaseStudy from '@/pages/CaseStudy';
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
  { path: '/insights', element: <Insights /> },
  { path: '/sitemap', element: <SiteMapPage /> },
  { path: '/mena-pharma-market-data', element: <MenaMarketData /> },
  { path: '/gcc-market-access-guide', element: <GccMarketAccessGuide /> },
  { path: '/market-research-home', element: <MarketResearchHome /> },
  { path: '/market-research', element: <MarketResearch /> },
  { path: '/market-research-uae', element: <MarketResearchUae /> },
  { path: '/market-research-ksa', element: <MarketResearchKsa /> },
  { path: '/market-research-saudi', element: <MarketResearchSaudi /> },
  { path: '/market-research-kuwait', element: <MarketResearchKuwait /> },
  { path: '/market-research-egypt', element: <MarketResearchEgypt /> },
  { path: '/market-research-saudi-arabia-pharmaceutical', element: <MarketResearchSaudiArabiaPharmaceutical /> },
  { path: '/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/de/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/fr/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/es/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/zh/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/ar/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/qualitative-market-research', element: <QualitativeMarketResearch /> },
  { path: '/bionixus-market-research-middle-east', element: <BionixusMarketResearchMiddleEast /> },
  { path: '/bionixus-vs-iqvia-mena', element: <BionixusVsIqviaMena /> },
  { path: '/gcc-pharma-market-report-2026', element: <GccPharmaMarketReport2026 /> },
  { path: '/nf1-pharma-market-research', element: <Nf1PharmaMarketResearch /> },
  { path: '/desmoid-tumor-pharma-market-research', element: <DesmoidTumorPharmaMarketResearch /> },
  { path: '/kol-mapping-saudi-arabia-oncology', element: <KolMappingSaudiArabiaOncology /> },
  { path: '/physician-survey-saudi-arabia', element: <PhysicianSurveySaudiArabia /> },
  { path: '/sfda-market-access-strategy-saudi-arabia', element: <SfdaMarketAccessStrategySaudiArabia /> },
  { path: '/biosimilar-market-entry-saudi-arabia', element: <BiosimilarMarketEntrySaudiArabia /> },
  { path: '/iqvia-alternative', element: <IqviaAlternative /> },
  { path: '/pharmaceutical-market-research-dubai', element: <PharmaceuticalMarketResearchDubai /> },
  { path: '/kantar-health-alternative-gcc', element: <KantarHealthAlternativeGcc /> },
  { path: '/gfk-alternative-egypt', element: <GfkAlternativeEgypt /> },
  { path: '/gcc-pharmaceutical-market-research', element: <GccPharmaceuticalMarketResearch /> },
  { path: '/uae-pharmaceutical-market-research', element: <UaePharmaceuticalMarketResearch /> },
  { path: '/saudi-payer-market-access-research', element: <SaudiPayerMarketAccessResearch /> },
  { path: '/gcc-hcp-recruitment-market-research', element: <GccHcpRecruitmentMarketResearch /> },
  { path: '/healthcare-market-research-agency-gcc', element: <HealthcareMarketResearchAgencyGcc /> },
  { path: '/pharmaceutical-therapy-areas', element: <PharmaceuticalTherapyAreas /> },
  { path: '/uae-market-access-research', element: <UaeMarketAccessResearch /> },
  { path: '/kuwait-market-access-research', element: <KuwaitMarketAccessResearch /> },
  { path: '/qatar-market-access-research', element: <QatarMarketAccessResearch /> },
  { path: '/healthcare-fieldwork-middle-east', element: <HealthcareFieldworkMiddleEast /> },
  { path: '/real-world-evidence', element: <RealWorldEvidence /> },
  { path: '/real-world-evidence-gcc', element: <RealWorldEvidenceGcc /> },
  { path: '/heor-consulting-saudi-arabia', element: <HeorConsultingSaudiArabia /> },
  { path: '/patient-support-program-research-gcc', element: <PatientSupportProgramResearchGcc /> },
  { path: '/budget-impact-model-saudi-arabia', element: <BudgetImpactModelSaudiArabia /> },
  {
    path: '/quantitative-healthcare-market-research',
    element: <QuantitativeHealthcareMarketResearchGuide />,
  },
  { path: '/global-websites', element: <GlobalWebsites /> },
  { path: '/global-websites/:countrySlug', element: <GlobalWebsiteCountry /> },
  { path: '/new-home', element: <PremiumHomePreview /> },
  { path: '/premium-home-preview', element: <PremiumHomePreview /> },
  { path: '/strategic-portfolio', element: <ConfPortfolio /> },
  { path: '/ar/strategic-portfolio', element: <ConfPortfolio locale="ar" /> },
  { path: '/healthcare-market-research', element: <HubPage /> },
  { path: '/saudi-arabia', element: <CountryPage /> },
  { path: '/uae', element: <CountryPage /> },
  { path: '/kuwait', element: <CountryPage /> },
  { path: '/uk', element: <CountryPage /> },
  { path: '/europe', element: <CountryPage /> },
  { path: '/egypt', element: <CountryPage /> },
  { path: '/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/healthcare-market-research/therapy/:area', element: <TherapyPage /> },
  { path: '/healthcare-market-research/services/:service', element: <ServicePage /> },
  { path: '/pharmaceutical-companies-kuwait', element: <KuwaitPharmaCompanies /> },
  { path: '/pharmaceutical-companies-saudi-arabia', element: <SaudiPharmaCompanies /> },
  { path: '/pharmaceutical-companies-uae', element: <UaePharmaCompanies /> },
  { path: '/insights/top-market-research-companies-egypt-2026', element: <TopMarketResearchCompaniesEgypt2026 /> },
  { path: '/ar/insights/top-market-research-companies-egypt-2026', element: <ArTopMarketResearchCompaniesEgypt2026 /> },
  { path: '/pharmaceutical-companies-egypt', element: <EgyptPharmaCompanies /> },
  { path: '/pharmaceutical-companies-qatar', element: <QatarPharmaCompanies /> },
  { path: '/pharmaceutical-companies-oman', element: <OmanPharmaCompanies /> },
  { path: '/pharmaceutical-companies-bahrain', element: <BahrainPharmaCompanies /> },
  { path: '/pharmaceutical-companies-iraq', element: <IraqPharmaCompanies /> },
  { path: '/pharmaceutical-companies-iran', element: <IranPharmaCompanies /> },
  { path: '/saudi-arabia-medical-devices-market-report', element: <SaudiArabiaMedicalDevicesMarketReport /> },
  { path: '/saudi-arabia-healthcare-market-report', element: <SaudiArabiaHealthcareMarketReport /> },
  { path: '/uae-healthcare-market-report', element: <UaeHealthcareMarketReport /> },
  { path: '/uae-medical-devices-market-report', element: <UaeMedicalDevicesMarketReport /> },
  { path: '/gcc-anesthesia-surgical-market-report', element: <GccAnesthesiaSurgicalMarket /> },
  { path: '/gcc-medical-devices-market-report', element: <GccMedicalDevicesMarketReport /> },
  { path: '/kuwait-medical-devices-market-report', element: <KuwaitMedicalDevicesMarketReport /> },
  { path: '/kuwait-healthcare-market-report', element: <KuwaitHealthcareMarketReport /> },
  { path: '/qatar-medical-devices-market-report', element: <QatarMedicalDevicesMarketReport /> },
  { path: '/qatar-healthcare-market-report', element: <QatarHealthcareMarketReport /> },
  { path: '/bahrain-medical-devices-market-report', element: <BahrainMedicalDevicesMarketReport /> },
  { path: '/bahrain-healthcare-market-report', element: <BahrainHealthcareMarketReport /> },
  { path: '/oman-medical-devices-market-report', element: <OmanMedicalDevicesMarketReport /> },
  { path: '/oman-healthcare-market-report', element: <OmanHealthcareMarketReport /> },
  { path: '/egypt-medical-devices-market-report', element: <EgyptMedicalDevicesMarketReport /> },
  { path: '/egypt-healthcare-market-report', element: <EgyptHealthcareMarketReport /> },
  { path: '/uk-healthcare-market-report', element: <UkHealthcareMarketReport /> },
  { path: '/uk-medical-devices-market-report', element: <UkMedicalDevicesMarketReport /> },
  { path: '/germany-healthcare-market-report', element: <GermanyHealthcareMarketReport /> },
  { path: '/germany-medical-devices-market-report', element: <GermanyMedicalDevicesMarketReport /> },
  { path: '/france-healthcare-market-report', element: <FranceHealthcareMarketReport /> },
  { path: '/france-medical-devices-market-report', element: <FranceMedicalDevicesMarketReport /> },
  { path: '/italy-healthcare-market-report', element: <ItalyHealthcareMarketReport /> },
  { path: '/italy-medical-devices-market-report', element: <ItalyMedicalDevicesMarketReport /> },
  { path: '/spain-healthcare-market-report', element: <SpainHealthcareMarketReport /> },
  { path: '/spain-medical-devices-market-report', element: <SpainMedicalDevicesMarketReport /> },
  { path: '/usa-healthcare-market-report', element: <UsaHealthcareMarketReport /> },
  { path: '/usa-medical-devices-market-report', element: <UsaMedicalDevicesMarketReport /> },
  { path: '/brazil-healthcare-market-report', element: <BrazilHealthcareMarketReport /> },
  { path: '/brazil-medical-devices-market-report', element: <BrazilMedicalDevicesMarketReport /> },
  { path: '/canada-healthcare-market-report', element: <CanadaHealthcareMarketReport /> },
  { path: '/canada-medical-devices-market-report', element: <CanadaMedicalDevicesMarketReport /> },
  { path: '/india-healthcare-market-report', element: <IndiaHealthcareMarketReport /> },
  { path: '/india-medical-devices-market-report', element: <IndiaMedicalDevicesMarketReport /> },
  { path: '/china-healthcare-market-report', element: <ChinaHealthcareMarketReport /> },
  { path: '/china-medical-devices-market-report', element: <ChinaMedicalDevicesMarketReport /> },
  { path: '/japan-healthcare-market-report', element: <JapanHealthcareMarketReport /> },
  { path: '/japan-medical-devices-market-report', element: <JapanMedicalDevicesMarketReport /> },
  { path: '/south-korea-healthcare-market-report', element: <SouthKoreaHealthcareMarketReport /> },
  { path: '/south-korea-medical-devices-market-report', element: <SouthKoreaMedicalDevicesMarketReport /> },
  { path: '/australia-healthcare-market-report', element: <AustraliaHealthcareMarketReport /> },
  { path: '/australia-medical-devices-market-report', element: <AustraliaMedicalDevicesMarketReport /> },
  { path: '/singapore-healthcare-market-report', element: <SingaporeHealthcareMarketReport /> },
  { path: '/singapore-medical-devices-market-report', element: <SingaporeMedicalDevicesMarketReport /> },
  { path: '/turkey-healthcare-market-report', element: <TurkeyHealthcareMarketReport /> },
  { path: '/turkey-medical-devices-market-report', element: <TurkeyMedicalDevicesMarketReport /> },
  { path: '/blog', element: <Blog /> },
  { path: '/de/blog', element: <Blog /> },
  { path: '/fr/blog', element: <Blog /> },
  { path: '/es/market-access', element: <SpanishMarketAccess /> },
  { path: '/de/success-in-startups', element: <GermanSuccessInStartups /> },
  { path: '/ar/arabic-blog-alsawdyh', element: <ArabicBlogAlsawdyh /> },
  { path: '/ar/blog', element: <Blog /> },
  { path: '/ar/blog/:slug', element: <BlogPost /> },
  { path: '/pharmacies-saudi-arabia-marketing', element: <PharmaciesSaudiArabiaMarketing /> },
  { path: '/bionixus-ai-chatbots-increase-sales-and-lead-generation', element: <AiChatbotsLeadGeneration /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/case-studies', element: <CaseStudies /> },
  { path: '/case-studies/:slug', element: suspensePage(<CaseStudy />) },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: suspensePage(<Terms />) },
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
  { path: '/ar/market-research-uae', element: <ArMarketResearchUae /> },
  { path: '/ar/market-research-ksa', element: <ArMarketResearchKsa /> },
  { path: '/ar/market-research-saudi', element: <ArMarketResearchSaudi /> },
  { path: '/ar/market-research-kuwait', element: <ArMarketResearchKuwait /> },
  { path: '/ar/market-research-egypt', element: <ArMarketResearchEgypt /> },
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

