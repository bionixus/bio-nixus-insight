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
import HealthcareFieldworkGcc from '@/pages/HealthcareFieldworkGcc';
import PharmaFieldworkSaudiArabia from '@/pages/PharmaFieldworkSaudiArabia';
import PharmaFieldworkUae from '@/pages/PharmaFieldworkUae';
import RealWorldEvidence from '@/pages/RealWorldEvidence';
import RealWorldEvidenceGcc from '@/pages/RealWorldEvidenceGcc';
import HeorConsultingSaudiArabia from '@/pages/HeorConsultingSaudiArabia';
import PatientSupportProgramResearchGcc from '@/pages/PatientSupportProgramResearchGcc';
import PatientJourneyResearchGcc from '@/pages/PatientJourneyResearchGcc';
import PatientAdherenceResearchMiddleEast from '@/pages/PatientAdherenceResearchMiddleEast';
import BudgetImpactModelSaudiArabia from '@/pages/BudgetImpactModelSaudiArabia';
import UaePricingReimbursementStrategy from '@/pages/UaePricingReimbursementStrategy';
import SpecialistPhysicianPanelUae from '@/pages/SpecialistPhysicianPanelUae';
import BrandTrackingPharmaGcc from '@/pages/BrandTrackingPharmaGcc';
import CommercialEffectivenessPharmaMiddleEast from '@/pages/CommercialEffectivenessPharmaMiddleEast';
import DiabetesMarketResearchUae from '@/pages/DiabetesMarketResearchUae';
import RespiratoryMarketAccessGcc from '@/pages/RespiratoryMarketAccessGcc';
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
import ArMarketResearchUae from '@/pages/ArMarketResearchUae';
import ArMarketResearchKsa from '@/pages/ArMarketResearchKsa';
import ArMarketResearchSaudi from '@/pages/ArMarketResearchSaudi';
import ArMarketResearchKuwait from '@/pages/ArMarketResearchKuwait';
import ArMarketResearchEgypt from '@/pages/ArMarketResearchEgypt';
import TopMarketResearchCompaniesEgypt2026 from '@/pages/TopMarketResearchCompaniesEgypt2026';
import ArTopMarketResearchCompaniesEgypt2026 from '@/pages/ArTopMarketResearchCompaniesEgypt2026';
import CaseStudy from '@/pages/CaseStudy';
import HubPage from '@/pages/healthcare-research/HubPage';
import CountryPage from '@/pages/healthcare-research/CountryPage';
import TherapyPage from '@/pages/healthcare-research/TherapyPage';
import ServicePage from '@/pages/healthcare-research/ServicePage';

const RealWorldDataHealthcareMiddleEast = lazy(() => import('@/pages/RealWorldDataHealthcareMiddleEast'));
const CostEffectivenessAnalysisGcc = lazy(() => import('@/pages/CostEffectivenessAnalysisGcc'));
const MedicalAffairsInsightResearchGcc = lazy(() => import('@/pages/MedicalAffairsInsightResearchGcc'));
const MslInsightResearchMiddleEast = lazy(() => import('@/pages/MslInsightResearchMiddleEast'));
const PressReleases = lazy(() => import('@/pages/PressReleases'));
const PressRelease = lazy(() => import('@/pages/PressRelease'));

const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AdminLogin = lazy(() => import('@/pages/AdminLogin'));
const AdminImportSubscribers = lazy(() => import('@/pages/AdminImportSubscribers'));
const AdminAnalytics = lazy(() => import('@/pages/AdminAnalytics'));
const AdminGsc = lazy(() => import('@/pages/AdminGsc'));
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
  { path: '/healthcare-fieldwork-gcc', element: <HealthcareFieldworkGcc /> },
  { path: '/pharma-fieldwork-saudi-arabia', element: <PharmaFieldworkSaudiArabia /> },
  { path: '/pharma-fieldwork-uae', element: <PharmaFieldworkUae /> },
  { path: '/real-world-evidence', element: <RealWorldEvidence /> },
  { path: '/real-world-evidence-gcc', element: <RealWorldEvidenceGcc /> },
  { path: '/real-world-data-healthcare-middle-east', element: suspensePage(<RealWorldDataHealthcareMiddleEast />) },
  { path: '/cost-effectiveness-analysis-gcc', element: suspensePage(<CostEffectivenessAnalysisGcc />) },
  { path: '/heor-consulting-saudi-arabia', element: <HeorConsultingSaudiArabia /> },
  { path: '/patient-support-program-research-gcc', element: <PatientSupportProgramResearchGcc /> },
  { path: '/patient-journey-research-gcc', element: <PatientJourneyResearchGcc /> },
  { path: '/patient-adherence-research-middle-east', element: <PatientAdherenceResearchMiddleEast /> },
  { path: '/budget-impact-model-saudi-arabia', element: <BudgetImpactModelSaudiArabia /> },
  { path: '/uae-pricing-reimbursement-strategy', element: <UaePricingReimbursementStrategy /> },
  { path: '/specialist-physician-panel-uae', element: <SpecialistPhysicianPanelUae /> },
  { path: '/brand-tracking-pharma-gcc', element: <BrandTrackingPharmaGcc /> },
  { path: '/commercial-effectiveness-pharma-middle-east', element: <CommercialEffectivenessPharmaMiddleEast /> },
  { path: '/medical-affairs-insight-research-gcc', element: suspensePage(<MedicalAffairsInsightResearchGcc />) },
  { path: '/msl-insight-research-middle-east', element: suspensePage(<MslInsightResearchMiddleEast />) },
  { path: '/diabetes-market-research-uae', element: <DiabetesMarketResearchUae /> },
  { path: '/respiratory-market-access-gcc', element: <RespiratoryMarketAccessGcc /> },
  {
    path: '/quantitative-healthcare-market-research',
    element: <QuantitativeHealthcareMarketResearchGuide />,
  },
  { path: '/global-websites', element: <GlobalWebsites /> },
  { path: '/global-websites/:countrySlug', element: <GlobalWebsiteCountry /> },
  { path: '/new-home', element: <PremiumHomePreview /> },
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
  { path: '/press-releases', element: suspensePage(<PressReleases />) },
  { path: '/press-releases/:slug', element: suspensePage(<PressRelease />) },
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
  { path: '/admin/gsc', element: suspensePage(<AdminGsc />) },
  { path: '/admin/calendar', element: suspensePage(<AdminCalendar />) },
  { path: '/admin/calendar/new', element: suspensePage(<AdminCalendarNew />) },
  { path: '/admin/send-newsletter', element: suspensePage(<AdminSendNewsletter />) },
  { path: '*', element: suspensePage(<NotFound />) },
];

