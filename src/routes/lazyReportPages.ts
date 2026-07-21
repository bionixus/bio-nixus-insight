/**
 * Country / medical-device market report pages.
 * Eager imports (not React.lazy) so renderToString SSR includes full page HTML —
 * lazy()+Suspense only ships the fallback during server render.
 */
export { default as SaudiArabiaMedicalDevicesMarketReport } from '@/pages/SaudiArabiaMedicalDevicesMarketReport';
export { default as SaudiArabiaHealthcareMarketReport } from '@/pages/SaudiArabiaHealthcareMarketReport';
export { default as UaeHealthcareMarketReport } from '@/pages/UaeHealthcareMarketReport';
export { default as UaeMedicalDevicesMarketReport } from '@/pages/UaeMedicalDevicesMarketReport';
export { default as GccAnesthesiaSurgicalMarket } from '@/pages/GccAnesthesiaSurgicalMarket';
export { default as GccMedicalDevicesMarketReport } from '@/pages/GccMedicalDevicesMarketReport';
export { default as KuwaitMedicalDevicesMarketReport } from '@/pages/KuwaitMedicalDevicesMarketReport';
export { default as KuwaitHealthcareMarketReport } from '@/pages/KuwaitHealthcareMarketReport';
export { default as QatarMedicalDevicesMarketReport } from '@/pages/QatarMedicalDevicesMarketReport';
export { default as QatarHealthcareMarketReport } from '@/pages/QatarHealthcareMarketReport';
export { default as BahrainMedicalDevicesMarketReport } from '@/pages/BahrainMedicalDevicesMarketReport';
export { default as BahrainHealthcareMarketReport } from '@/pages/BahrainHealthcareMarketReport';
export { default as OmanMedicalDevicesMarketReport } from '@/pages/OmanMedicalDevicesMarketReport';
export { default as OmanHealthcareMarketReport } from '@/pages/OmanHealthcareMarketReport';
export { default as EgyptMedicalDevicesMarketReport } from '@/pages/EgyptMedicalDevicesMarketReport';
export { default as EgyptHealthcareMarketReport } from '@/pages/EgyptHealthcareMarketReport';
export { default as UkHealthcareMarketReport } from '@/pages/UkHealthcareMarketReport';
export { default as UkMedicalDevicesMarketReport } from '@/pages/UkMedicalDevicesMarketReport';
export { default as GermanyHealthcareMarketReport } from '@/pages/GermanyHealthcareMarketReport';
export { default as GermanyMedicalDevicesMarketReport } from '@/pages/GermanyMedicalDevicesMarketReport';
export { default as FranceHealthcareMarketReport } from '@/pages/FranceHealthcareMarketReport';
export { default as FranceMedicalDevicesMarketReport } from '@/pages/FranceMedicalDevicesMarketReport';
export { default as ItalyHealthcareMarketReport } from '@/pages/ItalyHealthcareMarketReport';
export { default as ItalyMedicalDevicesMarketReport } from '@/pages/ItalyMedicalDevicesMarketReport';
export { default as SpainHealthcareMarketReport } from '@/pages/SpainHealthcareMarketReport';
export { default as SpainMedicalDevicesMarketReport } from '@/pages/SpainMedicalDevicesMarketReport';
export { default as UsaHealthcareMarketReport } from '@/pages/UsaHealthcareMarketReport';
export { default as UsaMedicalDevicesMarketReport } from '@/pages/UsaMedicalDevicesMarketReport';
export { default as BrazilHealthcareMarketReport } from '@/pages/BrazilHealthcareMarketReport';
export { default as BrazilMedicalDevicesMarketReport } from '@/pages/BrazilMedicalDevicesMarketReport';
export { default as CanadaHealthcareMarketReport } from '@/pages/CanadaHealthcareMarketReport';
export { default as CanadaMedicalDevicesMarketReport } from '@/pages/CanadaMedicalDevicesMarketReport';
export { default as IndiaHealthcareMarketReport } from '@/pages/IndiaHealthcareMarketReport';
export { default as IndiaMedicalDevicesMarketReport } from '@/pages/IndiaMedicalDevicesMarketReport';
export { default as ChinaHealthcareMarketReport } from '@/pages/ChinaHealthcareMarketReport';
export { default as ChinaMedicalDevicesMarketReport } from '@/pages/ChinaMedicalDevicesMarketReport';
export { default as JapanHealthcareMarketReport } from '@/pages/JapanHealthcareMarketReport';
export { default as JapanMedicalDevicesMarketReport } from '@/pages/JapanMedicalDevicesMarketReport';
export { default as SouthKoreaHealthcareMarketReport } from '@/pages/SouthKoreaHealthcareMarketReport';
export { default as SouthKoreaMedicalDevicesMarketReport } from '@/pages/SouthKoreaMedicalDevicesMarketReport';
export { default as AustraliaHealthcareMarketReport } from '@/pages/AustraliaHealthcareMarketReport';
export { default as AustraliaMedicalDevicesMarketReport } from '@/pages/AustraliaMedicalDevicesMarketReport';
export { default as SingaporeHealthcareMarketReport } from '@/pages/SingaporeHealthcareMarketReport';
export { default as SingaporeMedicalDevicesMarketReport } from '@/pages/SingaporeMedicalDevicesMarketReport';
export { default as TurkeyHealthcareMarketReport } from '@/pages/TurkeyHealthcareMarketReport';
export { default as TurkeyMedicalDevicesMarketReport } from '@/pages/TurkeyMedicalDevicesMarketReport';

export { default as UaePharmaCompanies } from '@/pages/UaePharmaCompanies';
export { default as KuwaitPharmaCompanies } from '@/pages/KuwaitPharmaCompanies';
export { default as SaudiPharmaCompanies } from '@/pages/SaudiPharmaCompanies';
export { default as EgyptPharmaCompanies } from '@/pages/EgyptPharmaCompanies';
export { default as QatarPharmaCompanies } from '@/pages/QatarPharmaCompanies';
export { default as OmanPharmaCompanies } from '@/pages/OmanPharmaCompanies';
export { default as BahrainPharmaCompanies } from '@/pages/BahrainPharmaCompanies';
export { default as IraqPharmaCompanies } from '@/pages/IraqPharmaCompanies';
export { default as IranPharmaCompanies } from '@/pages/IranPharmaCompanies';

/**
 * Programmatic / CMS-backed report slugs — previously React.lazy(), which meant
 * every /blog/:slug, /market-reports/:slug, /case-studies/:slug, and /news/:slug
 * page (hundreds of URLs) served only the Suspense fallback (~2.8KB, no content,
 * no internal links) to renderToString SSR — invisible to any crawler that
 * doesn't execute JavaScript, including GPTBot, ClaudeBot, and PerplexityBot.
 * Eager imports so SSR includes full page HTML, matching the pattern above.
 */
export { default as HealthcareReportPage } from '@/pages/HealthcareReportPage';
export { default as BlogPost } from '@/pages/BlogPost';
export { default as CaseStudy } from '@/pages/CaseStudy';
export { default as PressReleasePage } from '@/pages/PressReleasePage';
