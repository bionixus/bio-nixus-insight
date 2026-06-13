import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import Services from '@/pages/Services';
import FAQ from '@/pages/FAQ';
import Resources from '@/pages/Resources';
import Insights from '@/pages/Insights';
import NewsHub from '@/pages/NewsHub';
import Media from '@/pages/Media';
import SiteMapPage from '@/pages/SiteMapPage';
import ServiceDetail from '@/pages/ServiceDetail';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
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
import MarketResearchByIndustry from '@/pages/MarketResearchByIndustry';
import { buildIndustryMatrixRoutes } from '@/data/industryMatrixRoutes';
import BionixusIndustries from '@/pages/industries/BionixusIndustries';
import IndustrySegmentPage from '@/pages/industries/IndustrySegmentPage';
import MarketResearchHome from '@/pages/MarketResearchHome';
import MarketResearchSaudiArabiaPharmaceutical from '@/pages/MarketResearchSaudiArabiaPharmaceutical';
import MarketResearchHealthcare from '@/pages/MarketResearchHealthcare';
import QualitativeMarketResearch from '@/pages/QualitativeMarketResearch';
import BionixusMarketResearchMiddleEast from '@/pages/BionixusMarketResearchMiddleEast';
import QuantitativeHealthcareMarketResearchGuide from '@/pages/QuantitativeHealthcareMarketResearchGuide';
import GccPharmaceuticalMarketResearch from '@/pages/GccPharmaceuticalMarketResearch';
import UaePharmaceuticalMarketResearch from '@/pages/UaePharmaceuticalMarketResearch';
import EgyptPharmaceuticalMarketResearch from '@/pages/EgyptPharmaceuticalMarketResearch';
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
import PharmaFieldworkSaudiArabia from '@/pages/PharmaFieldworkSaudiArabia';
import PharmaFieldworkUae from '@/pages/PharmaFieldworkUae';
import PharmaFieldworkEgypt from '@/pages/PharmaFieldworkEgypt';
import ClinicalDiagnosticsMarketResearch from '@/pages/ClinicalDiagnosticsMarketResearch';
import ClinicalDiagnosticsProposalRequest from '@/pages/ClinicalDiagnosticsProposalRequest';
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
import MarketResearchInUae from '@/pages/MarketResearchInUae';
import MarketResearchInSaudiArabia from '@/pages/MarketResearchInSaudiArabia';
import MarketResearchInEgypt from '@/pages/MarketResearchInEgypt';
import HealthcareMarketResearchInUae from '@/pages/HealthcareMarketResearchInUae';
import HealthcareMarketResearchInSaudiArabia from '@/pages/HealthcareMarketResearchInSaudiArabia';
import Nf1PharmaMarketResearch from '@/pages/Nf1PharmaMarketResearch';
import DesmoidTumorPharmaMarketResearch from '@/pages/DesmoidTumorPharmaMarketResearch';
import ArMarketResearchUae from '@/pages/ArMarketResearchUae';
import ArMarketResearchKsa from '@/pages/ArMarketResearchKsa';
import ArMarketResearchSaudi from '@/pages/ArMarketResearchSaudi';
import ArMarketResearchKuwait from '@/pages/ArMarketResearchKuwait';
import ArMarketResearchEgypt from '@/pages/ArMarketResearchEgypt';
import TopMarketResearchCompaniesEgypt2026 from '@/pages/TopMarketResearchCompaniesEgypt2026';
import ArTopMarketResearchCompaniesEgypt2026 from '@/pages/ArTopMarketResearchCompaniesEgypt2026';
import TopMarketResearchCompaniesSaudiArabia2026 from '@/pages/TopMarketResearchCompaniesSaudiArabia2026';
import TopMarketResearchCompaniesUae2026 from '@/pages/TopMarketResearchCompaniesUae2026';
import TopMarketResearchCompaniesDubai2026 from '@/pages/TopMarketResearchCompaniesDubai2026';
import TopMarketResearchCompaniesAbuDhabi2026 from '@/pages/TopMarketResearchCompaniesAbuDhabi2026';
import TopMarketResearchCompaniesRiyadh2026 from '@/pages/TopMarketResearchCompaniesRiyadh2026';
import TopHealthcareMarketResearchCompaniesRiyadh2026 from '@/pages/TopHealthcareMarketResearchCompaniesRiyadh2026';
import TopCompaniesCountryPage from '@/pages/insights/TopCompaniesCountryPage';
import { allListicleConfigs } from '@/data/topCompanies';
import {
  SaudiArabiaMedicalDevicesMarketReport,
  SaudiArabiaHealthcareMarketReport,
  UaeHealthcareMarketReport,
  UaeMedicalDevicesMarketReport,
  GccAnesthesiaSurgicalMarket,
  GccMedicalDevicesMarketReport,
  KuwaitMedicalDevicesMarketReport,
  KuwaitHealthcareMarketReport,
  QatarMedicalDevicesMarketReport,
  QatarHealthcareMarketReport,
  BahrainMedicalDevicesMarketReport,
  BahrainHealthcareMarketReport,
  OmanMedicalDevicesMarketReport,
  OmanHealthcareMarketReport,
  EgyptMedicalDevicesMarketReport,
  EgyptHealthcareMarketReport,
  UkHealthcareMarketReport,
  UkMedicalDevicesMarketReport,
  GermanyHealthcareMarketReport,
  GermanyMedicalDevicesMarketReport,
  FranceHealthcareMarketReport,
  FranceMedicalDevicesMarketReport,
  ItalyHealthcareMarketReport,
  ItalyMedicalDevicesMarketReport,
  SpainHealthcareMarketReport,
  SpainMedicalDevicesMarketReport,
  UsaHealthcareMarketReport,
  UsaMedicalDevicesMarketReport,
  BrazilHealthcareMarketReport,
  BrazilMedicalDevicesMarketReport,
  CanadaHealthcareMarketReport,
  CanadaMedicalDevicesMarketReport,
  IndiaHealthcareMarketReport,
  IndiaMedicalDevicesMarketReport,
  ChinaHealthcareMarketReport,
  ChinaMedicalDevicesMarketReport,
  JapanHealthcareMarketReport,
  JapanMedicalDevicesMarketReport,
  SouthKoreaHealthcareMarketReport,
  SouthKoreaMedicalDevicesMarketReport,
  AustraliaHealthcareMarketReport,
  AustraliaMedicalDevicesMarketReport,
  SingaporeHealthcareMarketReport,
  SingaporeMedicalDevicesMarketReport,
  TurkeyHealthcareMarketReport,
  TurkeyMedicalDevicesMarketReport,
  HealthcareReportPage,
  BlogPost,
  PressReleasePage,
} from '@/routes/lazyReportPages';
import HealthcareReportsHub from '@/pages/HealthcareReportsHub';
import HealthcareReportsByTherapy from '@/pages/HealthcareReportsByTherapy';
import HealthcareReportsByCountry from '@/pages/HealthcareReportsByCountry';
import CaseStudy from '@/pages/CaseStudy';
import HubPage from '@/pages/healthcare-research/HubPage';
import CountryPage from '@/pages/healthcare-research/CountryPage';
import TherapyPage from '@/pages/healthcare-research/TherapyPage';
import ServicePage from '@/pages/healthcare-research/ServicePage';
import TopMarketResearchCompaniesBrazil2026 from '@/pages/TopMarketResearchCompaniesBrazil2026';
import TopHealthcareMarketResearchCompaniesBrazil2026 from '@/pages/TopHealthcareMarketResearchCompaniesBrazil2026';
import TopMarketResearchCompaniesArgentina2026 from '@/pages/TopMarketResearchCompaniesArgentina2026';
import TopHealthcareMarketResearchCompaniesArgentina2026 from '@/pages/TopHealthcareMarketResearchCompaniesArgentina2026';
import PtTopMarketResearchCompaniesBrazil2026 from '@/pages/PtTopMarketResearchCompaniesBrazil2026';
import PtTopHealthcareMarketResearchCompaniesBrazil2026 from '@/pages/PtTopHealthcareMarketResearchCompaniesBrazil2026';
import EsTopMarketResearchCompaniesArgentina2026 from '@/pages/EsTopMarketResearchCompaniesArgentina2026';
import EsTopHealthcareMarketResearchCompaniesArgentina2026 from '@/pages/EsTopHealthcareMarketResearchCompaniesArgentina2026';
import TopCompaniesCountryPage from '@/pages/insights/TopCompaniesCountryPage';
import { allListicleConfigs } from '@/data/topCompanies';

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
  { path: '/pt', element: <Index /> },
  { path: '/ru', element: <Index /> },
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
  { path: '/market-research-in-uae', element: <MarketResearchInUae /> },
  { path: '/market-research-in-saudi-arabia', element: <MarketResearchInSaudiArabia /> },
  { path: '/market-research-in-egypt', element: <MarketResearchInEgypt /> },
  { path: '/healthcare-market-research-in-uae', element: <HealthcareMarketResearchInUae /> },
  { path: '/healthcare-market-research-in-saudi-arabia', element: <HealthcareMarketResearchInSaudiArabia /> },
  { path: '/market-research-saudi-arabia-pharmaceutical', element: <MarketResearchSaudiArabiaPharmaceutical /> },
  { path: '/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/de/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/fr/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/es/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/zh/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/ar/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/pt/market-research-healthcare', element: <MarketResearchHealthcare /> },
  { path: '/ru/market-research-healthcare', element: <MarketResearchHealthcare /> },
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
  { path: '/egypt-pharmaceutical-market-research', element: <EgyptPharmaceuticalMarketResearch /> },
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
  { path: '/pharma-fieldwork-saudi-arabia', element: <PharmaFieldworkSaudiArabia /> },
  { path: '/pharma-fieldwork-uae', element: <PharmaFieldworkUae /> },
  { path: '/pharma-fieldwork-egypt', element: <PharmaFieldworkEgypt /> },
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
  { path: '/strategic-portfolios', element: <ConfPortfolio /> },
  { path: '/ar/strategic-portfolio', element: <ConfPortfolio locale="ar" /> },
  { path: '/ar/strategic-portfolios', element: <ConfPortfolio locale="ar" /> },
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
  { path: '/insights/top-market-research-companies-ksa-2026', element: <Navigate to="/insights/top-market-research-companies-saudi-arabia-2026" replace /> },
  { path: '/insights/top-market-research-companies-saudi-arabia-2026', element: <TopMarketResearchCompaniesSaudiArabia2026 /> },
  { path: '/insights/top-market-research-companies-uae-2026', element: <TopMarketResearchCompaniesUae2026 /> },
  { path: '/insights/top-market-research-companies-dubai-2026', element: <TopMarketResearchCompaniesDubai2026 /> },
  { path: '/insights/top-market-research-companies-abudhabi-2026', element: <Navigate to="/insights/top-market-research-companies-abu-dhabi-2026" replace /> },
  { path: '/insights/top-market-research-companies-abu-dhabi-2026', element: <TopMarketResearchCompaniesAbuDhabi2026 /> },
  { path: '/insights/top-market-research-companies-riyadh-2026', element: <TopMarketResearchCompaniesRiyadh2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-riyadh-2026', element: <TopHealthcareMarketResearchCompaniesRiyadh2026 /> },
  ...allListicleConfigs.map((config) => ({
    path: config.slug,
    element: <TopCompaniesCountryPage config={config} />,
  })),
  { path: '/insights/top-market-research-companies-brazil-2026', element: <TopMarketResearchCompaniesBrazil2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-brazil-2026', element: <TopHealthcareMarketResearchCompaniesBrazil2026 /> },
  { path: '/insights/top-market-research-companies-argentina-2026', element: <TopMarketResearchCompaniesArgentina2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-argentina-2026', element: <TopHealthcareMarketResearchCompaniesArgentina2026 /> },
  { path: '/pt/insights/top-market-research-companies-brasil-2026', element: <PtTopMarketResearchCompaniesBrazil2026 /> },
  { path: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026', element: <PtTopHealthcareMarketResearchCompaniesBrazil2026 /> },
  { path: '/es/insights/top-empresas-investigacion-mercado-argentina-2026', element: <EsTopMarketResearchCompaniesArgentina2026 /> },
  { path: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026', element: <EsTopHealthcareMarketResearchCompaniesArgentina2026 /> },
  { path: '/pharmaceutical-companies-egypt', element: <EgyptPharmaCompanies /> },
  { path: '/pharmaceutical-companies-qatar', element: <QatarPharmaCompanies /> },
  { path: '/pharmaceutical-companies-oman', element: <OmanPharmaCompanies /> },
  { path: '/pharmaceutical-companies-bahrain', element: <BahrainPharmaCompanies /> },
  { path: '/pharmaceutical-companies-iraq', element: <IraqPharmaCompanies /> },
  { path: '/pharmaceutical-companies-iran', element: <IranPharmaCompanies /> },
  { path: '/saudi-arabia-medical-devices-market-report', element: suspensePage(<SaudiArabiaMedicalDevicesMarketReport />) },
  { path: '/saudi-arabia-healthcare-market-report', element: suspensePage(<SaudiArabiaHealthcareMarketReport />) },
  { path: '/uae-healthcare-market-report', element: suspensePage(<UaeHealthcareMarketReport />) },
  { path: '/uae-medical-devices-market-report', element: suspensePage(<UaeMedicalDevicesMarketReport />) },
  { path: '/gcc-anesthesia-surgical-market-report', element: suspensePage(<GccAnesthesiaSurgicalMarket />) },
  { path: '/gcc-medical-devices-market-report', element: suspensePage(<GccMedicalDevicesMarketReport />) },
  { path: '/kuwait-medical-devices-market-report', element: suspensePage(<KuwaitMedicalDevicesMarketReport />) },
  { path: '/kuwait-healthcare-market-report', element: suspensePage(<KuwaitHealthcareMarketReport />) },
  { path: '/qatar-medical-devices-market-report', element: suspensePage(<QatarMedicalDevicesMarketReport />) },
  { path: '/qatar-healthcare-market-report', element: suspensePage(<QatarHealthcareMarketReport />) },
  { path: '/bahrain-medical-devices-market-report', element: suspensePage(<BahrainMedicalDevicesMarketReport />) },
  { path: '/bahrain-healthcare-market-report', element: suspensePage(<BahrainHealthcareMarketReport />) },
  { path: '/oman-medical-devices-market-report', element: suspensePage(<OmanMedicalDevicesMarketReport />) },
  { path: '/oman-healthcare-market-report', element: suspensePage(<OmanHealthcareMarketReport />) },
  { path: '/egypt-medical-devices-market-report', element: suspensePage(<EgyptMedicalDevicesMarketReport />) },
  { path: '/egypt-healthcare-market-report', element: suspensePage(<EgyptHealthcareMarketReport />) },
  { path: '/uk-healthcare-market-report', element: suspensePage(<UkHealthcareMarketReport />) },
  { path: '/uk-medical-devices-market-report', element: suspensePage(<UkMedicalDevicesMarketReport />) },
  { path: '/germany-healthcare-market-report', element: suspensePage(<GermanyHealthcareMarketReport />) },
  { path: '/germany-medical-devices-market-report', element: suspensePage(<GermanyMedicalDevicesMarketReport />) },
  { path: '/france-healthcare-market-report', element: suspensePage(<FranceHealthcareMarketReport />) },
  { path: '/france-medical-devices-market-report', element: suspensePage(<FranceMedicalDevicesMarketReport />) },
  { path: '/italy-healthcare-market-report', element: suspensePage(<ItalyHealthcareMarketReport />) },
  { path: '/italy-medical-devices-market-report', element: suspensePage(<ItalyMedicalDevicesMarketReport />) },
  { path: '/spain-healthcare-market-report', element: suspensePage(<SpainHealthcareMarketReport />) },
  { path: '/spain-medical-devices-market-report', element: suspensePage(<SpainMedicalDevicesMarketReport />) },
  { path: '/usa-healthcare-market-report', element: suspensePage(<UsaHealthcareMarketReport />) },
  { path: '/usa-medical-devices-market-report', element: suspensePage(<UsaMedicalDevicesMarketReport />) },
  { path: '/brazil-healthcare-market-report', element: suspensePage(<BrazilHealthcareMarketReport />) },
  { path: '/brazil-medical-devices-market-report', element: suspensePage(<BrazilMedicalDevicesMarketReport />) },
  { path: '/canada-healthcare-market-report', element: suspensePage(<CanadaHealthcareMarketReport />) },
  { path: '/canada-medical-devices-market-report', element: suspensePage(<CanadaMedicalDevicesMarketReport />) },
  { path: '/india-healthcare-market-report', element: suspensePage(<IndiaHealthcareMarketReport />) },
  { path: '/india-medical-devices-market-report', element: suspensePage(<IndiaMedicalDevicesMarketReport />) },
  { path: '/china-healthcare-market-report', element: suspensePage(<ChinaHealthcareMarketReport />) },
  { path: '/china-medical-devices-market-report', element: suspensePage(<ChinaMedicalDevicesMarketReport />) },
  { path: '/japan-healthcare-market-report', element: suspensePage(<JapanHealthcareMarketReport />) },
  { path: '/japan-medical-devices-market-report', element: suspensePage(<JapanMedicalDevicesMarketReport />) },
  { path: '/south-korea-healthcare-market-report', element: suspensePage(<SouthKoreaHealthcareMarketReport />) },
  { path: '/south-korea-medical-devices-market-report', element: suspensePage(<SouthKoreaMedicalDevicesMarketReport />) },
  { path: '/australia-healthcare-market-report', element: suspensePage(<AustraliaHealthcareMarketReport />) },
  { path: '/australia-medical-devices-market-report', element: suspensePage(<AustraliaMedicalDevicesMarketReport />) },
  { path: '/singapore-healthcare-market-report', element: suspensePage(<SingaporeHealthcareMarketReport />) },
  { path: '/singapore-medical-devices-market-report', element: suspensePage(<SingaporeMedicalDevicesMarketReport />) },
  { path: '/turkey-healthcare-market-report', element: suspensePage(<TurkeyHealthcareMarketReport />) },
  { path: '/turkey-medical-devices-market-report', element: suspensePage(<TurkeyMedicalDevicesMarketReport />) },
  { path: '/market-reports', element: suspensePage(<HealthcareReportsHub />) },
  { path: '/market-reports/therapy/:therapyAreaSlug', element: suspensePage(<HealthcareReportsByTherapy />) },
  { path: '/market-reports/country/:marketSlug', element: suspensePage(<HealthcareReportsByCountry />) },
  { path: '/market-reports/:slug', element: suspensePage(<HealthcareReportPage />) },
  { path: '/news', element: <NewsHub /> },
  { path: '/news/:slug', element: suspensePage(<PressReleasePage />) },
  { path: '/media', element: <Media /> },
  { path: '/blog', element: <Blog /> },
  { path: '/de/blog', element: <Blog /> },
  { path: '/fr/blog', element: <Blog /> },
  { path: '/pt/blog', element: <Blog /> },
  { path: '/pt/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/ru/blog', element: <Blog /> },
  { path: '/ru/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/es/market-access', element: <SpanishMarketAccess /> },
  { path: '/de/success-in-startups', element: <GermanSuccessInStartups /> },
  { path: '/ar/arabic-blog-alsawdyh', element: <ArabicBlogAlsawdyh /> },
  { path: '/ar/blog', element: <Blog /> },
  { path: '/ar/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/pharmacies-saudi-arabia-marketing', element: <PharmaciesSaudiArabiaMarketing /> },
  { path: '/bionixus-ai-chatbots-increase-sales-and-lead-generation', element: <AiChatbotsLeadGeneration /> },
  { path: '/blog/:slug', element: suspensePage(<BlogPost />) },
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
  { path: '/pt/contact', element: <Contact /> },
  { path: '/ru/contact', element: <Contact /> },
  { path: '/methodology', element: <Methodology /> },
  { path: '/de/methodology', element: <Methodology /> },
  { path: '/fr/methodology', element: <Methodology /> },
  { path: '/es/methodology', element: <Methodology /> },
  { path: '/zh/methodology', element: <Methodology /> },
  { path: '/ar/methodology', element: <Methodology /> },
  { path: '/pt/methodology', element: <Methodology /> },
  { path: '/ru/methodology', element: <Methodology /> },
  { path: '/ar/market-research-uae', element: <ArMarketResearchUae /> },
  { path: '/ar/market-research-ksa', element: <ArMarketResearchKsa /> },
  { path: '/ar/market-research-saudi', element: <ArMarketResearchSaudi /> },
  { path: '/ar/market-research-kuwait', element: <ArMarketResearchKuwait /> },
  { path: '/ar/market-research-egypt', element: <ArMarketResearchEgypt /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/market-research-by-industry', element: <MarketResearchByIndustry /> },
  { path: '/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/pharma-healthcare-industries', element: <IndustrySegmentPage slug="pharma-healthcare" /> },
  {
    path: '/clinical-diagnostics-market-research',
    element: <ClinicalDiagnosticsMarketResearch />,
  },
  {
    path: '/clinical-diagnostics-proposal-request',
    element: <ClinicalDiagnosticsProposalRequest />,
  },
  { path: '/b2b-industries', element: <IndustrySegmentPage slug="b2b" /> },
  { path: '/b2c-industries', element: <IndustrySegmentPage slug="b2c" /> },
  ...buildIndustryMatrixRoutes(),
  { path: '/admin/dashboard', element: suspensePage(<AdminDashboard />) },
  { path: '/admin/login', element: suspensePage(<AdminLogin />) },
  { path: '/admin/import-subscribers', element: suspensePage(<AdminImportSubscribers />) },
  { path: '/admin/analytics', element: suspensePage(<AdminAnalytics />) },
  { path: '/admin/calendar', element: suspensePage(<AdminCalendar />) },
  { path: '/admin/calendar/new', element: suspensePage(<AdminCalendarNew />) },
  { path: '/admin/send-newsletter', element: suspensePage(<AdminSendNewsletter />) },
  // Data-driven country listicle pages (direct imports — SSR-safe)
  ...allListicleConfigs.map((config) => ({
    path: config.slug,
    element: <TopCompaniesCountryPage config={config} />,
  })),
  { path: '*', element: suspensePage(<NotFound />) },
];

