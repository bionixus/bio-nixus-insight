import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';
import { RouteLoadingFallback } from '@/components/RouteLoadingFallback';
import Index from '@/pages/Index';
import Blog from '@/pages/Blog';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import ClientReviews from '@/pages/ClientReviews';
import Services from '@/pages/Services';
import FAQ from '@/pages/FAQ';
import HealthcareMarketStatistics from '@/pages/HealthcareMarketStatistics';
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
import { buildDevelopedMarketMedtechRoutes } from '@/data/developedMarketMedtechRoutes';
import { buildSpecialtyMarketDemandRoutes } from '@/data/specialtyMarketDemandRoutes';
import BionixusIndustries from '@/pages/industries/BionixusIndustries';
import BionixusIndustriesInsights from '@/pages/industries/BionixusIndustriesInsights';
import IndustrySegmentPage from '@/pages/industries/IndustrySegmentPage';
import MarketResearchHome from '@/pages/MarketResearchHome';
import MarketResearchSaudiArabiaPharmaceutical from '@/pages/MarketResearchSaudiArabiaPharmaceutical';
import MarketResearchHealthcare from '@/pages/MarketResearchHealthcare';
import QualitativeMarketResearch from '@/pages/QualitativeMarketResearch';
import QuantitativeHealthcareMarketResearchGuide from '@/pages/QuantitativeHealthcareMarketResearchGuide';
import GccPharmaceuticalMarketResearch from '@/pages/GccPharmaceuticalMarketResearch';
import UaePharmaceuticalMarketResearch from '@/pages/UaePharmaceuticalMarketResearch';
import KuwaitPharmaceuticalMarketResearch from '@/pages/KuwaitPharmaceuticalMarketResearch';
import QatarPharmaceuticalMarketResearch from '@/pages/QatarPharmaceuticalMarketResearch';
import BahrainPharmaceuticalMarketResearch from '@/pages/BahrainPharmaceuticalMarketResearch';
import OmanPharmaceuticalMarketResearch from '@/pages/OmanPharmaceuticalMarketResearch';
import JordanPharmaceuticalMarketResearch from '@/pages/JordanPharmaceuticalMarketResearch';
import EgyptPharmaceuticalMarketResearch from '@/pages/EgyptPharmaceuticalMarketResearch';
import HealthcareMarketResearchInEgypt from '@/pages/HealthcareMarketResearchInEgypt';
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
import HtaStudiesSaudiArabia from '@/pages/HtaStudiesSaudiArabia';
import CostEffectivenessAnalysisSaudiArabia from '@/pages/CostEffectivenessAnalysisSaudiArabia';
import CostEffectivenessAnalysisGcc from '@/pages/CostEffectivenessAnalysisGcc';
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
import GlobalWebsites from '@/pages/GlobalWebsites';
import GlobalWebsiteCountry from '@/pages/GlobalWebsiteCountry';
import PremiumHomePreview from '@/pages/PremiumHomePreview';
import ConfPortfolio from '@/pages/ConfPortfolio';
import MarketResearchUae from '@/pages/MarketResearchUae';
import DiabetesMarketResearchUae from '@/pages/DiabetesMarketResearchUae';
import SpecialistPhysicianPanelUae from '@/pages/SpecialistPhysicianPanelUae';
import MslInsightResearchMiddleEast from '@/pages/MslInsightResearchMiddleEast';
import MedicalAffairsInsightResearchGcc from '@/pages/MedicalAffairsInsightResearchGcc';
import BrandTrackingPharmaGcc from '@/pages/BrandTrackingPharmaGcc';
import CommercialEffectivenessPharmaMiddleEast from '@/pages/CommercialEffectivenessPharmaMiddleEast';
import HealthcareFieldworkGcc from '@/pages/HealthcareFieldworkGcc';
import PatientJourneyResearchGcc from '@/pages/PatientJourneyResearchGcc';
import PatientAdherenceResearchMiddleEast from '@/pages/PatientAdherenceResearchMiddleEast';
import RespiratoryMarketAccessGcc from '@/pages/RespiratoryMarketAccessGcc';
import UaePricingReimbursementStrategy from '@/pages/UaePricingReimbursementStrategy';
import MarketResearchKsa from '@/pages/MarketResearchKsa';
import MarketResearchSaudi from '@/pages/MarketResearchSaudi';
import MarketResearchKuwait from '@/pages/MarketResearchKuwait';
import MarketResearchQatar from '@/pages/MarketResearchQatar';
import MarketResearchOman from '@/pages/MarketResearchOman';
import MarketResearchBahrain from '@/pages/MarketResearchBahrain';
import MarketResearchEgypt from '@/pages/MarketResearchEgypt';
import Nf1PharmaMarketResearch from '@/pages/Nf1PharmaMarketResearch';
import DesmoidTumorPharmaMarketResearch from '@/pages/DesmoidTumorPharmaMarketResearch';
import {
  AiChatbotsLeadGeneration,
  ArMarketResearchEgypt,
  ArMarketResearchKsa,
  ArMarketResearchKuwait,
  ArMarketResearchSaudi,
  ArMarketResearchUae,
  ArTopMarketResearchCompaniesEgypt2026,
  BionixusMarketResearchMiddleEast,
} from '@/routes/lazyMarketingPages';
import TopGlobalHealthcareMarketResearchCompanies2026 from '@/pages/TopGlobalHealthcareMarketResearchCompanies2026';
import TopPharmaceuticalAnalyticsCompaniesWorldwide2026 from '@/pages/TopPharmaceuticalAnalyticsCompaniesWorldwide2026';
import BestGlobalMarketResearchCompaniesPharma2026 from '@/pages/BestGlobalMarketResearchCompaniesPharma2026';
import TopMarketResearchCompaniesGcc2026 from '@/pages/TopMarketResearchCompaniesGcc2026';
import TopPharmaMarketResearchCompaniesMiddleEast2026 from '@/pages/TopPharmaMarketResearchCompaniesMiddleEast2026';
import TopMarketResearchCompaniesEgypt2026 from '@/pages/TopMarketResearchCompaniesEgypt2026';
import TopMarketResearchCompaniesSaudiArabia2026 from '@/pages/TopMarketResearchCompaniesSaudiArabia2026';
import HealthcareMarketResearchCompanies2026 from '@/pages/HealthcareMarketResearchCompanies2026';
import TopMarketResearchCompaniesUae2026 from '@/pages/TopMarketResearchCompaniesUae2026';
import TopMarketResearchCompaniesDubai2026 from '@/pages/TopMarketResearchCompaniesDubai2026';
import TopMarketResearchCompaniesAbuDhabi2026 from '@/pages/TopMarketResearchCompaniesAbuDhabi2026';
import TopMarketResearchCompaniesRiyadh2026 from '@/pages/TopMarketResearchCompaniesRiyadh2026';
import TopHealthcareMarketResearchCompaniesRiyadh2026 from '@/pages/TopHealthcareMarketResearchCompaniesRiyadh2026';
import TopHealthcareMarketResearchCompaniesSaudiArabia2026 from '@/pages/TopHealthcareMarketResearchCompaniesSaudiArabia2026';
import TopHealthcareMarketResearchCompaniesDubai2026 from '@/pages/TopHealthcareMarketResearchCompaniesDubai2026';
import TopHealthcareMarketResearchCompaniesAbuDhabi2026 from '@/pages/TopHealthcareMarketResearchCompaniesAbuDhabi2026';
import TopHealthcareMarketResearchCompaniesKuwait2026 from '@/pages/TopHealthcareMarketResearchCompaniesKuwait2026';
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
  CaseStudy,
  PressReleasePage,
  UaePharmaCompanies,
  KuwaitPharmaCompanies,
  SaudiPharmaCompanies,
  EgyptPharmaCompanies,
  QatarPharmaCompanies,
  OmanPharmaCompanies,
  BahrainPharmaCompanies,
  IraqPharmaCompanies,
  IranPharmaCompanies,
} from '@/routes/lazyReportPages';
import HealthcareReportsHub from '@/pages/HealthcareReportsHub';
import HealthcareReportsByTherapy from '@/pages/HealthcareReportsByTherapy';
import HealthcareReportsByCountry from '@/pages/HealthcareReportsByCountry';
import { SKYRIZI_ROOT_SLUG } from '@/data/blog-skyrizi-omnichannel';
import BlogPostPage from '@/pages/BlogPost';
import HubPage from '@/pages/healthcare-research/HubPage';
import FrHubPage from '@/pages/healthcare-research/FrHubPage';
import FrFranceCountryPage from '@/pages/healthcare-research/FrFranceCountryPage';
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
import TopOncologyMarketResearchCompanies2026 from '@/pages/TopOncologyMarketResearchCompanies2026';
import BestObesityWeightManagementMarketResearchFirms2026 from '@/pages/BestObesityWeightManagementMarketResearchFirms2026';
import LeadingBiologicsBiosimilarsMarketResearchCompanies2026 from '@/pages/LeadingBiologicsBiosimilarsMarketResearchCompanies2026';
import BestRareDiseaseMarketResearchCompanies2026 from '@/pages/BestRareDiseaseMarketResearchCompanies2026';
import TopConsumerHealthcareMarketResearchFirms2026 from '@/pages/TopConsumerHealthcareMarketResearchFirms2026';
// --- ported SEO page imports ---
import ArBahthSuqAdwiyahSaudiArabia from '@/pages/ArBahthSuqAdwiyahSaudiArabia';
import ArHealthcareMarketResearch from '@/pages/ArHealthcareMarketResearch';
import ArHealthcareMarketResearchSaudiArabia from '@/pages/ArHealthcareMarketResearchSaudiArabia';
import ArTopHealthcareMarketResearchCompaniesSaudiArabia2026 from '@/pages/ArTopHealthcareMarketResearchCompaniesSaudiArabia2026';
import ArTopMarketResearchCompaniesSaudiArabia2026 from '@/pages/ArTopMarketResearchCompaniesSaudiArabia2026';
import AustraliaPharmaceuticalMarketResearch from '@/pages/AustraliaPharmaceuticalMarketResearch';
import BrazilPharmaceuticalMarketResearch from '@/pages/BrazilPharmaceuticalMarketResearch';
import BrazilHealthcareMarketResearch from '@/pages/BrazilHealthcareMarketResearch';
import CanadaPharmaceuticalMarketResearch from '@/pages/CanadaPharmaceuticalMarketResearch';
import IndiaPharmaceuticalMarketResearch from '@/pages/IndiaPharmaceuticalMarketResearch';
import SingaporePharmaceuticalMarketResearch from '@/pages/SingaporePharmaceuticalMarketResearch';
import PolandPharmaceuticalMarketResearch from '@/pages/PolandPharmaceuticalMarketResearch';
import MalaysiaPharmaceuticalMarketResearch from '@/pages/MalaysiaPharmaceuticalMarketResearch';
import HealthcareMarketResearchMalaysia from '@/pages/HealthcareMarketResearchMalaysia';
import TopMarketResearchCompaniesMalaysia2026 from '@/pages/TopMarketResearchCompaniesMalaysia2026';
import TopHealthcareMarketResearchCompaniesMalaysia2026 from '@/pages/TopHealthcareMarketResearchCompaniesMalaysia2026';
import HealthcareMarketResearchPoland from '@/pages/HealthcareMarketResearchPoland';
import TopMarketResearchCompaniesPoland2026 from '@/pages/TopMarketResearchCompaniesPoland2026';
import TopHealthcareMarketResearchCompaniesPoland2026 from '@/pages/TopHealthcareMarketResearchCompaniesPoland2026';
import TopHealthcareMarketResearchCompaniesTurkey2026 from '@/pages/TopHealthcareMarketResearchCompaniesTurkey2026';
import TurkeyPharmaceuticalMarketResearch from '@/pages/TurkeyPharmaceuticalMarketResearch';
import HealthcareMarketResearchTurkey from '@/pages/HealthcareMarketResearchTurkey';
import TopMarketResearchCompaniesTurkey2026 from '@/pages/TopMarketResearchCompaniesTurkey2026';
import NetherlandsPharmaceuticalMarketResearch from '@/pages/NetherlandsPharmaceuticalMarketResearch';
import HealthcareMarketResearchNetherlands from '@/pages/HealthcareMarketResearchNetherlands';
import TopMarketResearchCompaniesNetherlands2026 from '@/pages/TopMarketResearchCompaniesNetherlands2026';
import TopHealthcareMarketResearchCompaniesNetherlands2026 from '@/pages/TopHealthcareMarketResearchCompaniesNetherlands2026';
import SwedenPharmaceuticalMarketResearch from '@/pages/SwedenPharmaceuticalMarketResearch';
import HealthcareMarketResearchSweden from '@/pages/HealthcareMarketResearchSweden';
import TopMarketResearchCompaniesSweden2026 from '@/pages/TopMarketResearchCompaniesSweden2026';
import TopHealthcareMarketResearchCompaniesSweden2026 from '@/pages/TopHealthcareMarketResearchCompaniesSweden2026';
import ArgentinaPharmaceuticalMarketResearch from '@/pages/ArgentinaPharmaceuticalMarketResearch';
import HealthcareMarketResearchArgentina from '@/pages/HealthcareMarketResearchArgentina';
import IrelandPharmaceuticalMarketResearch from '@/pages/IrelandPharmaceuticalMarketResearch';
import HealthcareMarketResearchIreland from '@/pages/HealthcareMarketResearchIreland';
import TopMarketResearchCompaniesIreland2026 from '@/pages/TopMarketResearchCompaniesIreland2026';
import TopHealthcareMarketResearchCompaniesIreland2026 from '@/pages/TopHealthcareMarketResearchCompaniesIreland2026';
import TopMarketResearchCompaniesSingapore2026 from '@/pages/TopMarketResearchCompaniesSingapore2026';
import TopHealthcareMarketResearchCompaniesSingapore2026 from '@/pages/TopHealthcareMarketResearchCompaniesSingapore2026';
import JapanPharmaceuticalMarketResearch from '@/pages/JapanPharmaceuticalMarketResearch';
import UkPharmaceuticalMarketResearch from '@/pages/UkPharmaceuticalMarketResearch';
import HealthcareMarketResearchUk from '@/pages/HealthcareMarketResearchUk';
import TopMarketResearchCompaniesUk2026 from '@/pages/TopMarketResearchCompaniesUk2026';
import TopHealthcareMarketResearchCompaniesUk2026 from '@/pages/TopHealthcareMarketResearchCompaniesUk2026';
import HealthcareMarketResearchJapan from '@/pages/HealthcareMarketResearchJapan';
import TopMarketResearchCompaniesJapan2026 from '@/pages/TopMarketResearchCompaniesJapan2026';
import TopHealthcareMarketResearchCompaniesJapan2026 from '@/pages/TopHealthcareMarketResearchCompaniesJapan2026';
import ChinaPharmaceuticalMarketResearch from '@/pages/ChinaPharmaceuticalMarketResearch';
import ConsumerMarketResearchPortal from '@/pages/ConsumerMarketResearchPortal';
import DeHealthcareMarketResearchGermany from '@/pages/DeHealthcareMarketResearchGermany';
import DenmarkPharmaceuticalMarketResearch from '@/pages/DenmarkPharmaceuticalMarketResearch';
import EsHealthcareMarketResearchSpain from '@/pages/EsHealthcareMarketResearchSpain';
import FrancePharmaceuticalMarketResearch from '@/pages/FrancePharmaceuticalMarketResearch';
import GccBiopharmaceuticalsMarket from '@/pages/market-research-gcc/GccBiopharmaceuticalsMarket';
import GccClinicalTrialsMarket from '@/pages/market-research-gcc/GccClinicalTrialsMarket';
import GccGenericInjectablesMarket from '@/pages/market-research-gcc/GccGenericInjectablesMarket';
import GccGenericPharmaceuticalsMarket from '@/pages/market-research-gcc/GccGenericPharmaceuticalsMarket';
import GccPersonalizedMedicineMarket from '@/pages/market-research-gcc/GccPersonalizedMedicineMarket';
import GccPharmacyMarket from '@/pages/market-research-gcc/GccPharmacyMarket';
import GermanyPharmaceuticalMarketResearch from '@/pages/GermanyPharmaceuticalMarketResearch';
import HealthcareMarketResearchAustralia from '@/pages/HealthcareMarketResearchAustralia';
import HealthcareMarketResearchCanada from '@/pages/HealthcareMarketResearchCanada';
import HealthcareMarketResearchIndia from '@/pages/HealthcareMarketResearchIndia';
import HealthcareMarketResearchChina from '@/pages/HealthcareMarketResearchChina';
import HealthcareMarketResearchDenmark from '@/pages/HealthcareMarketResearchDenmark';
import HealthcareMarketResearchFrance from '@/pages/HealthcareMarketResearchFrance';
import HealthcareMarketResearchGermany from '@/pages/HealthcareMarketResearchGermany';
import HealthcareMarketResearchInSaudiArabia from '@/pages/HealthcareMarketResearchInSaudiArabia';
import HealthcareMarketResearchInUae from '@/pages/HealthcareMarketResearchInUae';
import HealthcareMarketResearchInKuwait from '@/pages/HealthcareMarketResearchInKuwait';
import HealthcareMarketResearchInQatar from '@/pages/HealthcareMarketResearchInQatar';
import HealthcareMarketResearchInBahrain from '@/pages/HealthcareMarketResearchInBahrain';
import HealthcareMarketResearchInOman from '@/pages/HealthcareMarketResearchInOman';
import HealthcareMarketResearchInJordan from '@/pages/HealthcareMarketResearchInJordan';
import HealthcareMarketResearchItaly from '@/pages/HealthcareMarketResearchItaly';
import HealthcareMarketResearchNewZealand from '@/pages/HealthcareMarketResearchNewZealand';
import HealthcareMarketResearchSingapore from '@/pages/HealthcareMarketResearchSingapore';
import HealthcareMarketResearchSouthKorea from '@/pages/HealthcareMarketResearchSouthKorea';
import HealthcareMarketResearchSpain from '@/pages/HealthcareMarketResearchSpain';
import HealthcareMarketResearchSwitzerland from '@/pages/HealthcareMarketResearchSwitzerland';
import HealthcareMarketResearchUsa from '@/pages/HealthcareMarketResearchUsa';
import HeorConsulting from '@/pages/HeorConsulting';
import IndustryGlobalHubPage from '@/pages/IndustryGlobalHubPage';
import ItalyPharmaceuticalMarketResearch from '@/pages/ItalyPharmaceuticalMarketResearch';
import MarketResearchInEgypt from '@/pages/MarketResearchInEgypt';
import MarketResearchInSaudiArabia from '@/pages/MarketResearchInSaudiArabia';
import MarketResearchInUae from '@/pages/MarketResearchInUae';
import NewZealandPharmaceuticalMarketResearch from '@/pages/NewZealandPharmaceuticalMarketResearch';
import PtBrazilHealthcareMarketResearch from '@/pages/PtBrazilHealthcareMarketResearch';
import PtBrazilPharmaceuticalMarketResearch from '@/pages/PtBrazilPharmaceuticalMarketResearch';
import PtTopEmpresasPesquisaMercadoBrasil2026 from '@/pages/PtTopEmpresasPesquisaMercadoBrasil2026';
import SouthKoreaPharmaceuticalMarketResearch from '@/pages/SouthKoreaPharmaceuticalMarketResearch';
import SpainPharmaceuticalMarketResearch from '@/pages/SpainPharmaceuticalMarketResearch';
import SwitzerlandPharmaceuticalMarketResearch from '@/pages/SwitzerlandPharmaceuticalMarketResearch';
import TopHealthcareMarketResearchCompaniesAustralia2026 from '@/pages/TopHealthcareMarketResearchCompaniesAustralia2026';
import TopHealthcareMarketResearchCompaniesCanada2026 from '@/pages/TopHealthcareMarketResearchCompaniesCanada2026';
import TopHealthcareMarketResearchCompaniesChina2026 from '@/pages/TopHealthcareMarketResearchCompaniesChina2026';
import TopHealthcareMarketResearchCompaniesDenmark2026 from '@/pages/TopHealthcareMarketResearchCompaniesDenmark2026';
import TopHealthcareMarketResearchCompaniesFrance2026 from '@/pages/TopHealthcareMarketResearchCompaniesFrance2026';
import TopHealthcareMarketResearchCompaniesGermany2026 from '@/pages/TopHealthcareMarketResearchCompaniesGermany2026';
import TopHealthcareMarketResearchCompaniesItaly2026 from '@/pages/TopHealthcareMarketResearchCompaniesItaly2026';
import TopHealthcareMarketResearchCompaniesIndia2026 from '@/pages/TopHealthcareMarketResearchCompaniesIndia2026';
import TopHealthcareMarketResearchCompaniesNewZealand2026 from '@/pages/TopHealthcareMarketResearchCompaniesNewZealand2026';
import TopHealthcareMarketResearchCompaniesSouthKorea2026 from '@/pages/TopHealthcareMarketResearchCompaniesSouthKorea2026';
import TopHealthcareMarketResearchCompaniesSpain2026 from '@/pages/TopHealthcareMarketResearchCompaniesSpain2026';
import TopHealthcareMarketResearchCompaniesSwitzerland2026 from '@/pages/TopHealthcareMarketResearchCompaniesSwitzerland2026';
import TopHealthcareMarketResearchCompaniesUae2026 from '@/pages/TopHealthcareMarketResearchCompaniesUae2026';
import TopHealthcareMarketResearchCompaniesUsa2026 from '@/pages/TopHealthcareMarketResearchCompaniesUsa2026';
import TopMarketResearchCompaniesAustralia2026 from '@/pages/TopMarketResearchCompaniesAustralia2026';
import TopMarketResearchCompaniesCanada2026 from '@/pages/TopMarketResearchCompaniesCanada2026';
import TopMarketResearchCompaniesChina2026 from '@/pages/TopMarketResearchCompaniesChina2026';
import TopMarketResearchCompaniesDenmark2026 from '@/pages/TopMarketResearchCompaniesDenmark2026';
import TopMarketResearchCompaniesFrance2026 from '@/pages/TopMarketResearchCompaniesFrance2026';
import TopMarketResearchCompaniesGermany2026 from '@/pages/TopMarketResearchCompaniesGermany2026';
import TopMarketResearchCompaniesItaly2026 from '@/pages/TopMarketResearchCompaniesItaly2026';
import TopMarketResearchCompaniesIndia2026 from '@/pages/TopMarketResearchCompaniesIndia2026';
import TopMarketResearchCompaniesNewZealand2026 from '@/pages/TopMarketResearchCompaniesNewZealand2026';
import TopMarketResearchCompaniesSouthKorea2026 from '@/pages/TopMarketResearchCompaniesSouthKorea2026';
import TopMarketResearchCompaniesSpain2026 from '@/pages/TopMarketResearchCompaniesSpain2026';
import TopMarketResearchCompaniesSwitzerland2026 from '@/pages/TopMarketResearchCompaniesSwitzerland2026';
import TopMarketResearchCompaniesUsa2026 from '@/pages/TopMarketResearchCompaniesUsa2026';
import UsaPharmaceuticalMarketResearch from '@/pages/UsaPharmaceuticalMarketResearch';
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
  return <Suspense fallback={<RouteLoadingFallback />}>{node}</Suspense>;
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
  { path: '/about', element: <About /> },
  { path: '/de/about', element: <About /> },
  { path: '/fr/about', element: <About /> },
  { path: '/es/about', element: <About /> },
  { path: '/zh/about', element: <About /> },
  { path: '/ar/about', element: <About /> },
  { path: '/pt/about', element: <About /> },
  { path: '/ru/about', element: <About /> },
  { path: '/zh/healthcare-market-research', element: <Index /> },
  { path: '/client-reviews', element: <ClientReviews /> },
  { path: '/services', element: <Services /> },
  { path: '/de/services', element: <Services /> },
  { path: '/services/:slug', element: <ServiceDetail /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/healthcare-market-statistics', element: <HealthcareMarketStatistics /> },
  { path: '/resources', element: <Resources /> },
  { path: '/insights', element: <Insights /> },
  { path: '/sitemap', element: <SiteMapPage /> },
  { path: '/mena-pharma-market-data', element: <MenaMarketData /> },
  { path: '/gcc-market-access-guide', element: <GccMarketAccessGuide /> },
  { path: '/market-research-home', element: <MarketResearchHome /> },
  { path: '/market-research', element: <MarketResearch /> },
  { path: '/market-research-uae', element: <MarketResearchUae /> },
  { path: '/diabetes-market-research-uae', element: <DiabetesMarketResearchUae /> },
  { path: '/specialist-physician-panel-uae', element: <SpecialistPhysicianPanelUae /> },
  { path: '/msl-insight-research-middle-east', element: <MslInsightResearchMiddleEast /> },
  { path: '/medical-affairs-insight-research-gcc', element: <MedicalAffairsInsightResearchGcc /> },
  { path: '/brand-tracking-pharma-gcc', element: <BrandTrackingPharmaGcc /> },
  { path: '/commercial-effectiveness-pharma-middle-east', element: <CommercialEffectivenessPharmaMiddleEast /> },
  { path: '/healthcare-fieldwork-gcc', element: <HealthcareFieldworkGcc /> },
  { path: '/patient-journey-research-gcc', element: <PatientJourneyResearchGcc /> },
  { path: '/patient-adherence-research-middle-east', element: <PatientAdherenceResearchMiddleEast /> },
  { path: '/respiratory-market-access-gcc', element: <RespiratoryMarketAccessGcc /> },
  { path: '/uae-pricing-reimbursement-strategy', element: <UaePricingReimbursementStrategy /> },
  { path: '/market-research-ksa', element: <MarketResearchKsa /> },
  { path: '/market-research-saudi', element: <MarketResearchSaudi /> },
  { path: '/market-research-kuwait', element: <MarketResearchKuwait /> },
  { path: '/market-research-qatar', element: <MarketResearchQatar /> },
  { path: '/market-research-oman', element: <MarketResearchOman /> },
  { path: '/market-research-bahrain', element: <MarketResearchBahrain /> },
  { path: '/market-research-egypt', element: <MarketResearchEgypt /> },
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
  { path: '/pharmaceutical-market-research-kuwait', element: <KuwaitPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-qatar', element: <QatarPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-bahrain', element: <BahrainPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-oman', element: <OmanPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-jordan', element: <JordanPharmaceuticalMarketResearch /> },
  { path: '/egypt-pharmaceutical-market-research', element: <EgyptPharmaceuticalMarketResearch /> },
  { path: '/egypt-healthcare-market-research', element: <HealthcareMarketResearchInEgypt /> },
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
  { path: '/hta-studies-saudi-arabia', element: <HtaStudiesSaudiArabia /> },
  { path: '/cost-effectiveness-analysis-saudi-arabia', element: <CostEffectivenessAnalysisSaudiArabia /> },
  { path: '/cost-effectiveness-analysis-gcc', element: <CostEffectivenessAnalysisGcc /> },
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
  { path: '/fr/healthcare-market-research', element: <FrHubPage /> },
  { path: '/fr/healthcare-market-research/france', element: <FrFranceCountryPage /> },
  { path: '/healthcare-market-research/therapy/:area', element: <TherapyPage /> },
  { path: '/healthcare-market-research/services/:service', element: <ServicePage /> },
  { path: '/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/saudi-arabia', element: <CountryPage /> },
  { path: '/uae', element: <CountryPage /> },
  { path: '/kuwait', element: <CountryPage /> },
  { path: '/uk', element: <CountryPage /> },
  { path: '/europe', element: <CountryPage /> },
  { path: '/egypt', element: <CountryPage /> },
  { path: '/pharmaceutical-companies-kuwait', element: suspensePage(<KuwaitPharmaCompanies />) },
  { path: '/pharmaceutical-companies-saudi-arabia', element: suspensePage(<SaudiPharmaCompanies />) },
  { path: '/pharmaceutical-companies-uae', element: suspensePage(<UaePharmaCompanies />) },
  { path: '/insights/top-global-healthcare-market-research-companies-2026', element: <TopGlobalHealthcareMarketResearchCompanies2026 /> },
  { path: '/insights/top-pharmaceutical-analytics-companies-worldwide-2026', element: <TopPharmaceuticalAnalyticsCompaniesWorldwide2026 /> },
  { path: '/insights/best-global-market-research-companies-pharma-2026', element: <BestGlobalMarketResearchCompaniesPharma2026 /> },
  { path: '/insights/top-market-research-companies-gcc-2026', element: <TopMarketResearchCompaniesGcc2026 /> },
  { path: '/insights/top-pharma-market-research-companies-middle-east-2026', element: <TopPharmaMarketResearchCompaniesMiddleEast2026 /> },
  { path: '/insights/top-market-research-companies-egypt-2026', element: <TopMarketResearchCompaniesEgypt2026 /> },
  { path: '/ar/insights/top-market-research-companies-egypt-2026', element: suspensePage(<ArTopMarketResearchCompaniesEgypt2026 />) },
  { path: '/insights/top-market-research-companies-ksa-2026', element: <Navigate to="/insights/top-market-research-companies-saudi-arabia-2026" replace /> },
  { path: '/insights/top-market-research-companies-saudi-arabia-2026', element: <TopMarketResearchCompaniesSaudiArabia2026 /> },
  { path: '/healthcare-market-research-companies', element: <HealthcareMarketResearchCompanies2026 /> },
  { path: '/insights/top-market-research-companies-uae-2026', element: <TopMarketResearchCompaniesUae2026 /> },
  { path: '/insights/top-market-research-companies-dubai-2026', element: <TopMarketResearchCompaniesDubai2026 /> },
  { path: '/insights/top-market-research-companies-abudhabi-2026', element: <Navigate to="/insights/top-market-research-companies-abu-dhabi-2026" replace /> },
  { path: '/insights/top-market-research-companies-abu-dhabi-2026', element: <TopMarketResearchCompaniesAbuDhabi2026 /> },
  { path: '/insights/top-market-research-companies-riyadh-2026', element: <TopMarketResearchCompaniesRiyadh2026 /> },
  {
    path: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026',
    element: <TopHealthcareMarketResearchCompaniesSaudiArabia2026 />,
  },
  {
    path: '/insights/top-healthcare-market-research-companies-dubai-2026',
    element: <TopHealthcareMarketResearchCompaniesDubai2026 />,
  },
  {
    path: '/insights/top-healthcare-market-research-companies-abu-dhabi-2026',
    element: <TopHealthcareMarketResearchCompaniesAbuDhabi2026 />,
  },
  {
    path: '/insights/top-healthcare-market-research-companies-kuwait-2026',
    element: <TopHealthcareMarketResearchCompaniesKuwait2026 />,
  },
  { path: '/insights/top-healthcare-market-research-companies-riyadh-2026', element: <TopHealthcareMarketResearchCompaniesRiyadh2026 /> },
  { path: '/insights/top-market-research-companies-brazil-2026', element: <TopMarketResearchCompaniesBrazil2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-brazil-2026', element: <TopHealthcareMarketResearchCompaniesBrazil2026 /> },
  { path: '/insights/top-market-research-companies-argentina-2026', element: <TopMarketResearchCompaniesArgentina2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-argentina-2026', element: <TopHealthcareMarketResearchCompaniesArgentina2026 /> },
  { path: '/pt/insights/top-market-research-companies-brasil-2026', element: <PtTopMarketResearchCompaniesBrazil2026 /> },
  { path: '/pt/insights/top-empresas-pesquisa-mercado-saude-brasil-2026', element: <PtTopHealthcareMarketResearchCompaniesBrazil2026 /> },
  { path: '/es/insights/top-empresas-investigacion-mercado-argentina-2026', element: <EsTopMarketResearchCompaniesArgentina2026 /> },
  { path: '/es/insights/top-empresas-investigacion-mercado-salud-argentina-2026', element: <EsTopHealthcareMarketResearchCompaniesArgentina2026 /> },
  { path: '/insights/top-oncology-market-research-companies-2026', element: <TopOncologyMarketResearchCompanies2026 /> },
  { path: '/insights/top-obesity-market-research-companies-2026', element: <Navigate to="/insights/best-obesity-weight-management-market-research-firms-2026" replace /> },
  { path: '/insights/best-obesity-weight-management-market-research-firms-2026', element: <BestObesityWeightManagementMarketResearchFirms2026 /> },
  { path: '/insights/leading-biologics-biosimilars-market-research-companies-2026', element: <LeadingBiologicsBiosimilarsMarketResearchCompanies2026 /> },
  { path: '/insights/best-rare-disease-market-research-companies-2026', element: <BestRareDiseaseMarketResearchCompanies2026 /> },
  { path: '/insights/top-consumer-healthcare-market-research-firms-2026', element: <TopConsumerHealthcareMarketResearchFirms2026 /> },
  { path: '/pharmaceutical-companies-egypt', element: suspensePage(<EgyptPharmaCompanies />) },
  { path: '/pharmaceutical-companies-qatar', element: suspensePage(<QatarPharmaCompanies />) },
  { path: '/pharmaceutical-companies-oman', element: suspensePage(<OmanPharmaCompanies />) },
  { path: '/pharmaceutical-companies-bahrain', element: suspensePage(<BahrainPharmaCompanies />) },
  { path: '/pharmaceutical-companies-iraq', element: suspensePage(<IraqPharmaCompanies />) },
  { path: '/pharmaceutical-companies-iran', element: suspensePage(<IranPharmaCompanies />) },
  { path: '/saudi-arabia-medical-devices-market-report', element: suspensePage(<SaudiArabiaMedicalDevicesMarketReport />) },
  { path: '/saudi-arabia-healthcare-market-report', element: suspensePage(<SaudiArabiaHealthcareMarketReport />) },
  { path: '/uae-healthcare-market-report', element: suspensePage(<UaeHealthcareMarketReport />) },
  { path: '/uae-medical-devices-market-report', element: suspensePage(<UaeMedicalDevicesMarketReport />) },
  { path: '/gcc-anesthesia-surgical-market-report', element: suspensePage(<GccAnesthesiaSurgicalMarket />) },
  { path: '/gcc-medical-devices-market-report', element: <GccMedicalDevicesMarketReport /> },
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
  { path: '/de/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/fr/blog', element: <Blog /> },
  { path: '/fr/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/pt/blog', element: <Blog /> },
  { path: '/pt/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/ru/blog', element: <Blog /> },
  { path: '/ru/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/zh/blog', element: <Blog /> },
  { path: '/zh/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/es/market-access', element: <SpanishMarketAccess /> },
  { path: '/de/success-in-startups', element: <GermanSuccessInStartups /> },
  { path: '/ar/arabic-blog-alsawdyh', element: <ArabicBlogAlsawdyh /> },
  { path: '/ar/blog', element: <Blog /> },
  { path: '/ar/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/pharmacies-saudi-arabia-marketing', element: <PharmaciesSaudiArabiaMarketing /> },
  { path: '/bionixus-ai-chatbots-increase-sales-and-lead-generation', element: suspensePage(<AiChatbotsLeadGeneration />) },
  { path: '/blog/:slug', element: suspensePage(<BlogPost />) },
  {
    path: `/${SKYRIZI_ROOT_SLUG}`,
    element: <BlogPostPage fixedSlug={SKYRIZI_ROOT_SLUG} />,
  },
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
  { path: '/ar/market-research-uae', element: suspensePage(<ArMarketResearchUae />) },
  { path: '/ar/market-research-ksa', element: suspensePage(<ArMarketResearchKsa />) },
  { path: '/ar/market-research-saudi', element: suspensePage(<ArMarketResearchSaudi />) },
  { path: '/ar/market-research-kuwait', element: suspensePage(<ArMarketResearchKuwait />) },
  { path: '/ar/market-research-egypt', element: suspensePage(<ArMarketResearchEgypt />) },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/market-research-by-industry', element: <MarketResearchByIndustry /> },
  { path: '/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/de/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/fr/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/es/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/zh/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/ar/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/pt/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/ru/bionixus-industries', element: <BionixusIndustries /> },
  { path: '/bionixus-industries/insights', element: <BionixusIndustriesInsights /> },
  { path: '/bionixus-industries/insights/:slug', element: suspensePage(<BlogPost />) },
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
  ...buildDevelopedMarketMedtechRoutes(),
  ...buildSpecialtyMarketDemandRoutes(),
  { path: '/admin/dashboard', element: suspensePage(<AdminDashboard />) },
  { path: '/admin/login', element: suspensePage(<AdminLogin />) },
  { path: '/admin/import-subscribers', element: suspensePage(<AdminImportSubscribers />) },
  { path: '/admin/analytics', element: suspensePage(<AdminAnalytics />) },
  { path: '/admin/calendar', element: suspensePage(<AdminCalendar />) },
  { path: '/admin/calendar/new', element: suspensePage(<AdminCalendarNew />) },
  { path: '/admin/send-newsletter', element: suspensePage(<AdminSendNewsletter />) },
  // --- ported SEO pages (country pharma/healthcare service + listicles + GCC segments) ---
  { path: '/ar/abhath-suq-adwiyah-saudi-arabia', element: <ArBahthSuqAdwiyahSaudiArabia /> },
  { path: '/ar/healthcare-market-research', element: <ArHealthcareMarketResearch /> },
  { path: '/ar/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/ar/healthcare-market-research/saudi-arabia', element: <ArHealthcareMarketResearchSaudiArabia /> },
  { path: '/ar/insights/top-sharaket-abhath-alsuq-alsaudia-2026', element: <ArTopMarketResearchCompaniesSaudiArabia2026 /> },
  { path: '/ar/insights/top-sharaket-abhath-sihha-alsaudia-2026', element: <ArTopHealthcareMarketResearchCompaniesSaudiArabia2026 /> },
  { path: '/brazil-pharmaceutical-market-research', element: <BrazilPharmaceuticalMarketResearch /> },
  { path: '/brazil-healthcare-market-research', element: <BrazilHealthcareMarketResearch /> },
  { path: '/consumer-market-research', element: <ConsumerMarketResearchPortal /> },
  { path: '/de/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/de/healthcare-market-research/germany', element: <DeHealthcareMarketResearchGermany /> },
  { path: '/es/blog', element: <Blog /> },
  { path: '/es/blog/:slug', element: suspensePage(<BlogPost />) },
  { path: '/es/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/es/healthcare-market-research/spain', element: <EsHealthcareMarketResearchSpain /> },
  { path: '/fr/healthcare-market-research/:country', element: <CountryPage /> },
  { path: '/gcc-biopharmaceuticals-market', element: <GccBiopharmaceuticalsMarket /> },
  { path: '/gcc-clinical-trials-market', element: <GccClinicalTrialsMarket /> },
  { path: '/gcc-generic-injectables-market', element: <GccGenericInjectablesMarket /> },
  { path: '/gcc-generic-pharmaceuticals-market', element: <GccGenericPharmaceuticalsMarket /> },
  { path: '/gcc-personalized-medicine-market', element: <GccPersonalizedMedicineMarket /> },
  { path: '/gcc-pharmacy-market', element: <GccPharmacyMarket /> },
  { path: '/healthcare-market-research-australia', element: <HealthcareMarketResearchAustralia /> },
  { path: '/healthcare-market-research-canada', element: <HealthcareMarketResearchCanada /> },
  { path: '/healthcare-market-research-india', element: <HealthcareMarketResearchIndia /> },
  { path: '/healthcare-market-research-china', element: <HealthcareMarketResearchChina /> },
  { path: '/healthcare-market-research-denmark', element: <HealthcareMarketResearchDenmark /> },
  { path: '/healthcare-market-research-france', element: <HealthcareMarketResearchFrance /> },
  { path: '/healthcare-market-research-germany', element: <HealthcareMarketResearchGermany /> },
  { path: '/healthcare-market-research-in-saudi-arabia', element: <HealthcareMarketResearchInSaudiArabia /> },
  { path: '/healthcare-market-research-in-uae', element: <HealthcareMarketResearchInUae /> },
  { path: '/healthcare-market-research-kuwait', element: <HealthcareMarketResearchInKuwait /> },
  { path: '/healthcare-market-research-qatar', element: <HealthcareMarketResearchInQatar /> },
  { path: '/healthcare-market-research-bahrain', element: <HealthcareMarketResearchInBahrain /> },
  { path: '/healthcare-market-research-oman', element: <HealthcareMarketResearchInOman /> },
  { path: '/healthcare-market-research-jordan', element: <HealthcareMarketResearchInJordan /> },
  { path: '/healthcare-market-research-italy', element: <HealthcareMarketResearchItaly /> },
  { path: '/healthcare-market-research-new-zealand', element: <HealthcareMarketResearchNewZealand /> },
  { path: '/healthcare-market-research-singapore', element: <HealthcareMarketResearchSingapore /> },
  { path: '/healthcare-market-research-south-korea', element: <HealthcareMarketResearchSouthKorea /> },
  { path: '/healthcare-market-research-spain', element: <HealthcareMarketResearchSpain /> },
  { path: '/healthcare-market-research-switzerland', element: <HealthcareMarketResearchSwitzerland /> },
  { path: '/healthcare-market-research-usa', element: <HealthcareMarketResearchUsa /> },
  { path: '/heor-consulting', element: <HeorConsulting /> },
  { path: '/insights/top-healthcare-market-research-companies-australia-2026', element: <TopHealthcareMarketResearchCompaniesAustralia2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-canada-2026', element: <TopHealthcareMarketResearchCompaniesCanada2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-india-2026', element: <TopHealthcareMarketResearchCompaniesIndia2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-china-2026', element: <TopHealthcareMarketResearchCompaniesChina2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-denmark-2026', element: <TopHealthcareMarketResearchCompaniesDenmark2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-france-2026', element: <TopHealthcareMarketResearchCompaniesFrance2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-germany-2026', element: <TopHealthcareMarketResearchCompaniesGermany2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-italy-2026', element: <TopHealthcareMarketResearchCompaniesItaly2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-new-zealand-2026', element: <TopHealthcareMarketResearchCompaniesNewZealand2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-south-korea-2026', element: <TopHealthcareMarketResearchCompaniesSouthKorea2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-spain-2026', element: <TopHealthcareMarketResearchCompaniesSpain2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-switzerland-2026', element: <TopHealthcareMarketResearchCompaniesSwitzerland2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-uae-2026', element: <TopHealthcareMarketResearchCompaniesUae2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-uk-2026', element: <TopHealthcareMarketResearchCompaniesUk2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-usa-2026', element: <TopHealthcareMarketResearchCompaniesUsa2026 /> },
  { path: '/insights/top-market-research-companies-australia-2026', element: <TopMarketResearchCompaniesAustralia2026 /> },
  { path: '/insights/top-market-research-companies-canada-2026', element: <TopMarketResearchCompaniesCanada2026 /> },
  { path: '/insights/top-market-research-companies-india-2026', element: <TopMarketResearchCompaniesIndia2026 /> },
  { path: '/insights/top-market-research-companies-china-2026', element: <TopMarketResearchCompaniesChina2026 /> },
  { path: '/insights/top-market-research-companies-denmark-2026', element: <TopMarketResearchCompaniesDenmark2026 /> },
  { path: '/insights/top-market-research-companies-france-2026', element: <TopMarketResearchCompaniesFrance2026 /> },
  { path: '/insights/top-market-research-companies-germany-2026', element: <TopMarketResearchCompaniesGermany2026 /> },
  { path: '/insights/top-market-research-companies-italy-2026', element: <TopMarketResearchCompaniesItaly2026 /> },
  { path: '/insights/top-market-research-companies-new-zealand-2026', element: <TopMarketResearchCompaniesNewZealand2026 /> },
  { path: '/insights/top-market-research-companies-south-korea-2026', element: <TopMarketResearchCompaniesSouthKorea2026 /> },
  { path: '/insights/top-market-research-companies-spain-2026', element: <TopMarketResearchCompaniesSpain2026 /> },
  { path: '/insights/top-market-research-companies-switzerland-2026', element: <TopMarketResearchCompaniesSwitzerland2026 /> },
  { path: '/insights/top-market-research-companies-usa-2026', element: <TopMarketResearchCompaniesUsa2026 /> },
  { path: '/market-reports/uae-medical-devices-market-report', element: <Navigate to="/uae-medical-devices-market-report" replace /> },
  { path: '/market-research-in-egypt', element: <MarketResearchInEgypt /> },
  { path: '/market-research-in-saudi-arabia', element: <MarketResearchInSaudiArabia /> },
  { path: '/market-research-in-uae', element: <MarketResearchInUae /> },
  { path: '/market-research/:industrySlug', element: <IndustryGlobalHubPage /> },
  { path: '/pharmaceutical-market-research-australia', element: <AustraliaPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-canada', element: <CanadaPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-india', element: <IndiaPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-singapore', element: <SingaporePharmaceuticalMarketResearch /> },
  { path: '/insights/top-market-research-companies-singapore-2026', element: <TopMarketResearchCompaniesSingapore2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-singapore-2026', element: <TopHealthcareMarketResearchCompaniesSingapore2026 /> },
  { path: '/pharmaceutical-market-research-poland', element: <PolandPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-poland', element: <HealthcareMarketResearchPoland /> },
  { path: '/insights/top-market-research-companies-poland-2026', element: <TopMarketResearchCompaniesPoland2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-poland-2026', element: <TopHealthcareMarketResearchCompaniesPoland2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-turkey-2026', element: <TopHealthcareMarketResearchCompaniesTurkey2026 /> },
  { path: '/pharmaceutical-market-research-turkey', element: <TurkeyPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-turkey', element: <HealthcareMarketResearchTurkey /> },
  { path: '/insights/top-market-research-companies-turkey-2026', element: <TopMarketResearchCompaniesTurkey2026 /> },
  { path: '/pharmaceutical-market-research-netherlands', element: <NetherlandsPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-netherlands', element: <HealthcareMarketResearchNetherlands /> },
  { path: '/insights/top-market-research-companies-netherlands-2026', element: <TopMarketResearchCompaniesNetherlands2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-netherlands-2026', element: <TopHealthcareMarketResearchCompaniesNetherlands2026 /> },
  { path: '/pharmaceutical-market-research-sweden', element: <SwedenPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-sweden', element: <HealthcareMarketResearchSweden /> },
  { path: '/insights/top-market-research-companies-sweden-2026', element: <TopMarketResearchCompaniesSweden2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-sweden-2026', element: <TopHealthcareMarketResearchCompaniesSweden2026 /> },
  { path: '/pharmaceutical-market-research-argentina', element: <ArgentinaPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-argentina', element: <HealthcareMarketResearchArgentina /> },
  { path: '/pharmaceutical-market-research-ireland', element: <IrelandPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-ireland', element: <HealthcareMarketResearchIreland /> },
  { path: '/insights/top-market-research-companies-ireland-2026', element: <TopMarketResearchCompaniesIreland2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-ireland-2026', element: <TopHealthcareMarketResearchCompaniesIreland2026 /> },
  { path: '/pharmaceutical-market-research-malaysia', element: <MalaysiaPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-malaysia', element: <HealthcareMarketResearchMalaysia /> },
  { path: '/insights/top-market-research-companies-malaysia-2026', element: <TopMarketResearchCompaniesMalaysia2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-malaysia-2026', element: <TopHealthcareMarketResearchCompaniesMalaysia2026 /> },
  { path: '/pharmaceutical-market-research-japan', element: <JapanPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-japan', element: <HealthcareMarketResearchJapan /> },
  { path: '/insights/top-market-research-companies-japan-2026', element: <TopMarketResearchCompaniesJapan2026 /> },
  { path: '/insights/top-healthcare-market-research-companies-japan-2026', element: <TopHealthcareMarketResearchCompaniesJapan2026 /> },
  { path: '/pharmaceutical-market-research-uk', element: <UkPharmaceuticalMarketResearch /> },
  { path: '/healthcare-market-research-uk', element: <HealthcareMarketResearchUk /> },
  { path: '/insights/top-market-research-companies-uk-2026', element: <TopMarketResearchCompaniesUk2026 /> },
  { path: '/pharmaceutical-market-research-china', element: <ChinaPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-denmark', element: <DenmarkPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-france', element: <FrancePharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-germany', element: <GermanyPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-italy', element: <ItalyPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-new-zealand', element: <NewZealandPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-south-korea', element: <SouthKoreaPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-spain', element: <SpainPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-switzerland', element: <SwitzerlandPharmaceuticalMarketResearch /> },
  { path: '/pharmaceutical-market-research-usa', element: <UsaPharmaceuticalMarketResearch /> },
  { path: '/pt/insights/top-empresas-pesquisa-mercado-brasil-2026', element: <PtTopEmpresasPesquisaMercadoBrasil2026 /> },
  { path: '/pt/pesquisa-mercado-farmaceutico-brasil', element: <PtBrazilPharmaceuticalMarketResearch /> },
  { path: '/pt/pesquisa-mercado-saude-brasil', element: <PtBrazilHealthcareMarketResearch /> },
  { path: '/ru/healthcare-market-research', element: <HubPage /> },
  { path: '/top-market-research-companies-brazil-2026', element: <Navigate to="/insights/top-market-research-companies-brazil-2026" replace /> },
  ...allListicleConfigs.map((config) => ({
    path: config.slug,
    element: <TopCompaniesCountryPage config={config} />,
  })),
  { path: '*', element: suspensePage(<NotFound />) },
];

