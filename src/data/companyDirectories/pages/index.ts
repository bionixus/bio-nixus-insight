/**
 * Aggregates every directory page input. One file per page lives at
 * `./{entity}/{country}.ts` and exports a `DirectoryPageInput`; each wave adds
 * its imports here. Order does not matter — the registry sorts by path.
 */
import type { DirectoryPageInput } from '../types';

// Wave 1 — MENA healthcare gaps: pharmaceutical distributors
import { pharmaceuticalDistributorsSaudiArabia } from './pharmaceutical-distributors/saudi-arabia';
import { pharmaceuticalDistributorsUae } from './pharmaceutical-distributors/uae';
import { pharmaceuticalDistributorsEgypt } from './pharmaceutical-distributors/egypt';
import { pharmaceuticalDistributorsKuwait } from './pharmaceutical-distributors/kuwait';
import { pharmaceuticalDistributorsQatar } from './pharmaceutical-distributors/qatar';
import { pharmaceuticalDistributorsOman } from './pharmaceutical-distributors/oman';
import { pharmaceuticalDistributorsBahrain } from './pharmaceutical-distributors/bahrain';
import { pharmaceuticalDistributorsIraq } from './pharmaceutical-distributors/iraq';
import { pharmaceuticalDistributorsJordan } from './pharmaceutical-distributors/jordan';
import { pharmaceuticalDistributorsMorocco } from './pharmaceutical-distributors/morocco';
import { pharmaceuticalDistributorsTurkey } from './pharmaceutical-distributors/turkey';
import { pharmaceuticalDistributorsPakistan } from './pharmaceutical-distributors/pakistan';

// Wave 1 — MENA healthcare gaps: medical device companies
import { medicalDeviceCompaniesEgypt } from './medical-device-companies/egypt';
import { medicalDeviceCompaniesKuwait } from './medical-device-companies/kuwait';
import { medicalDeviceCompaniesQatar } from './medical-device-companies/qatar';
import { medicalDeviceCompaniesOman } from './medical-device-companies/oman';
import { medicalDeviceCompaniesBahrain } from './medical-device-companies/bahrain';
import { medicalDeviceCompaniesIraq } from './medical-device-companies/iraq';
import { medicalDeviceCompaniesJordan } from './medical-device-companies/jordan';
import { medicalDeviceCompaniesMorocco } from './medical-device-companies/morocco';
import { medicalDeviceCompaniesTurkey } from './medical-device-companies/turkey';
import { medicalDeviceCompaniesIran } from './medical-device-companies/iran';

// Wave 1 — MENA healthcare gaps: pharmacy chains
import { pharmacyChainsUae } from './pharmacy-chains/uae';
import { pharmacyChainsEgypt } from './pharmacy-chains/egypt';
import { pharmacyChainsKuwait } from './pharmacy-chains/kuwait';
import { pharmacyChainsQatar } from './pharmacy-chains/qatar';
import { pharmacyChainsOman } from './pharmacy-chains/oman';
import { pharmacyChainsBahrain } from './pharmacy-chains/bahrain';
import { pharmacyChainsJordan } from './pharmacy-chains/jordan';
import { pharmacyChainsTurkey } from './pharmacy-chains/turkey';

// Wave 1 — MENA healthcare gaps: private hospital groups and operators
import { hospitalGroupsSaudiArabia } from './hospital-groups/saudi-arabia';
import { hospitalGroupsUae } from './hospital-groups/uae';
import { hospitalGroupsEgypt } from './hospital-groups/egypt';
import { hospitalGroupsKuwait } from './hospital-groups/kuwait';
import { hospitalGroupsQatar } from './hospital-groups/qatar';
import { hospitalGroupsOman } from './hospital-groups/oman';
import { hospitalGroupsBahrain } from './hospital-groups/bahrain';
import { hospitalGroupsTurkey } from './hospital-groups/turkey';

// Wave 2 — pharmaceutical companies (countries without a legacy pharma directory)
import { pharmaceuticalCompaniesPakistan } from './pharmaceutical-companies/pakistan';
import { pharmaceuticalCompaniesMexico } from './pharmaceutical-companies/mexico';
import { pharmaceuticalCompaniesIndonesia } from './pharmaceutical-companies/indonesia';
import { pharmaceuticalCompaniesNigeria } from './pharmaceutical-companies/nigeria';
import { pharmaceuticalCompaniesSouthAfrica } from './pharmaceutical-companies/south-africa';
import { pharmaceuticalCompaniesKenya } from './pharmaceutical-companies/kenya';
import { pharmaceuticalCompaniesEthiopia } from './pharmaceutical-companies/ethiopia';
import { pharmaceuticalCompaniesArgentina } from './pharmaceutical-companies/argentina';
import { pharmaceuticalCompaniesColombia } from './pharmaceutical-companies/colombia';
import { pharmaceuticalCompaniesChile } from './pharmaceutical-companies/chile';
import { pharmaceuticalCompaniesPeru } from './pharmaceutical-companies/peru';
import { pharmaceuticalCompaniesLebanon } from './pharmaceutical-companies/lebanon';
import { pharmaceuticalCompaniesAlgeria } from './pharmaceutical-companies/algeria';
import { pharmaceuticalCompaniesTunisia } from './pharmaceutical-companies/tunisia';
import { pharmaceuticalCompaniesLibya } from './pharmaceutical-companies/libya';
import { pharmaceuticalCompaniesYemen } from './pharmaceutical-companies/yemen';
import { pharmaceuticalCompaniesVietnam } from './pharmaceutical-companies/vietnam';
import { pharmaceuticalCompaniesThailand } from './pharmaceutical-companies/thailand';
import { pharmaceuticalCompaniesPhilippines } from './pharmaceutical-companies/philippines';
import { pharmaceuticalCompaniesBangladesh } from './pharmaceutical-companies/bangladesh';
import { pharmaceuticalCompaniesAustralia } from './pharmaceutical-companies/australia';
import { pharmaceuticalCompaniesKazakhstan } from './pharmaceutical-companies/kazakhstan';
import { pharmaceuticalCompaniesPoland } from './pharmaceutical-companies/poland';
import { pharmaceuticalCompaniesItaly } from './pharmaceutical-companies/italy';
import { pharmaceuticalCompaniesSpain } from './pharmaceutical-companies/spain';
import { pharmaceuticalCompaniesFrance } from './pharmaceutical-companies/france';
import { pharmaceuticalCompaniesNetherlands } from './pharmaceutical-companies/netherlands';
import { pharmaceuticalCompaniesBelgium } from './pharmaceutical-companies/belgium';
import { pharmaceuticalCompaniesSweden } from './pharmaceutical-companies/sweden';
import { pharmaceuticalCompaniesIreland } from './pharmaceutical-companies/ireland';

// Wave 2 — biotech / CRO / health insurers (priority markets)
import { biotechCompaniesSaudiArabia } from './biotech-companies/saudi-arabia';
import { biotechCompaniesUae } from './biotech-companies/uae';
import { biotechCompaniesEgypt } from './biotech-companies/egypt';
import { biotechCompaniesTurkey } from './biotech-companies/turkey';
import { biotechCompaniesKuwait } from './biotech-companies/kuwait';
import { croCompaniesSaudiArabia } from './cro-companies/saudi-arabia';
import { croCompaniesUae } from './cro-companies/uae';
import { croCompaniesEgypt } from './cro-companies/egypt';
import { croCompaniesTurkey } from './cro-companies/turkey';
import { healthInsurersSaudiArabia } from './health-insurers/saudi-arabia';
import { healthInsurersUae } from './health-insurers/uae';
import { healthInsurersEgypt } from './health-insurers/egypt';
import { healthInsurersKuwait } from './health-insurers/kuwait';
import { healthInsurersQatar } from './health-insurers/qatar';
import { healthInsurersTurkey } from './health-insurers/turkey';

export const DIRECTORY_PAGE_INPUTS: DirectoryPageInput[] = [
  hospitalGroupsSaudiArabia,
  hospitalGroupsUae,
  hospitalGroupsEgypt,
  hospitalGroupsKuwait,
  hospitalGroupsQatar,
  hospitalGroupsOman,
  hospitalGroupsBahrain,
  hospitalGroupsTurkey,
  pharmacyChainsUae,
  pharmacyChainsEgypt,
  pharmacyChainsKuwait,
  pharmacyChainsQatar,
  pharmacyChainsOman,
  pharmacyChainsBahrain,
  pharmacyChainsJordan,
  pharmacyChainsTurkey,
  medicalDeviceCompaniesEgypt,
  medicalDeviceCompaniesKuwait,
  medicalDeviceCompaniesQatar,
  medicalDeviceCompaniesOman,
  medicalDeviceCompaniesBahrain,
  medicalDeviceCompaniesIraq,
  medicalDeviceCompaniesJordan,
  medicalDeviceCompaniesMorocco,
  medicalDeviceCompaniesTurkey,
  medicalDeviceCompaniesIran,
  pharmaceuticalDistributorsSaudiArabia,
  pharmaceuticalDistributorsUae,
  pharmaceuticalDistributorsEgypt,
  pharmaceuticalDistributorsKuwait,
  pharmaceuticalDistributorsQatar,
  pharmaceuticalDistributorsOman,
  pharmaceuticalDistributorsBahrain,
  pharmaceuticalDistributorsIraq,
  pharmaceuticalDistributorsJordan,
  pharmaceuticalDistributorsMorocco,
  pharmaceuticalDistributorsTurkey,
  pharmaceuticalDistributorsPakistan,
  pharmaceuticalCompaniesPakistan,
  pharmaceuticalCompaniesMexico,
  pharmaceuticalCompaniesIndonesia,
  pharmaceuticalCompaniesNigeria,
  pharmaceuticalCompaniesSouthAfrica,
  pharmaceuticalCompaniesKenya,
  pharmaceuticalCompaniesEthiopia,
  pharmaceuticalCompaniesArgentina,
  pharmaceuticalCompaniesColombia,
  pharmaceuticalCompaniesChile,
  pharmaceuticalCompaniesPeru,
  pharmaceuticalCompaniesLebanon,
  pharmaceuticalCompaniesAlgeria,
  pharmaceuticalCompaniesTunisia,
  pharmaceuticalCompaniesLibya,
  pharmaceuticalCompaniesYemen,
  pharmaceuticalCompaniesVietnam,
  pharmaceuticalCompaniesThailand,
  pharmaceuticalCompaniesPhilippines,
  pharmaceuticalCompaniesBangladesh,
  pharmaceuticalCompaniesAustralia,
  pharmaceuticalCompaniesKazakhstan,
  pharmaceuticalCompaniesPoland,
  pharmaceuticalCompaniesItaly,
  pharmaceuticalCompaniesSpain,
  pharmaceuticalCompaniesFrance,
  pharmaceuticalCompaniesNetherlands,
  pharmaceuticalCompaniesBelgium,
  pharmaceuticalCompaniesSweden,
  pharmaceuticalCompaniesIreland,
  biotechCompaniesSaudiArabia,
  biotechCompaniesUae,
  biotechCompaniesEgypt,
  biotechCompaniesTurkey,
  biotechCompaniesKuwait,
  croCompaniesSaudiArabia,
  croCompaniesUae,
  croCompaniesEgypt,
  croCompaniesTurkey,
  healthInsurersSaudiArabia,
  healthInsurersUae,
  healthInsurersEgypt,
  healthInsurersKuwait,
  healthInsurersQatar,
  healthInsurersTurkey,
];
