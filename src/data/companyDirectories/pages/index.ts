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
import { biotechCompaniesQatar } from './biotech-companies/qatar';
import { biotechCompaniesIndia } from './biotech-companies/india';
import { croCompaniesSaudiArabia } from './cro-companies/saudi-arabia';
import { croCompaniesUae } from './cro-companies/uae';
import { croCompaniesEgypt } from './cro-companies/egypt';
import { croCompaniesTurkey } from './cro-companies/turkey';
import { croCompaniesJordan } from './cro-companies/jordan';
import { healthInsurersSaudiArabia } from './health-insurers/saudi-arabia';
import { healthInsurersUae } from './health-insurers/uae';
import { healthInsurersEgypt } from './health-insurers/egypt';
import { healthInsurersKuwait } from './health-insurers/kuwait';
import { healthInsurersQatar } from './health-insurers/qatar';
import { healthInsurersTurkey } from './health-insurers/turkey';

// Wave 3 — banks (GCC, Egypt, Turkey, US, G5 Europe)
import { banksSaudiArabia } from './banks/saudi-arabia';
import { banksUae } from './banks/uae';
import { banksEgypt } from './banks/egypt';
import { banksKuwait } from './banks/kuwait';
import { banksQatar } from './banks/qatar';
import { banksOman } from './banks/oman';
import { banksBahrain } from './banks/bahrain';
import { banksTurkey } from './banks/turkey';
import { banksUsa } from './banks/usa';
import { banksUk } from './banks/uk';
import { banksGermany } from './banks/germany';
import { banksFrance } from './banks/france';
import { banksItaly } from './banks/italy';
import { banksSpain } from './banks/spain';
import { banksJordan } from './banks/jordan';
import { banksMorocco } from './banks/morocco';
import { banksPakistan } from './banks/pakistan';
import { banksNigeria } from './banks/nigeria';

// Wave 3 — automotive distributors (GCC, Egypt, Turkey)
import { automotiveDistributorsSaudiArabia } from './automotive-distributors/saudi-arabia';
import { automotiveDistributorsUae } from './automotive-distributors/uae';
import { automotiveDistributorsEgypt } from './automotive-distributors/egypt';
import { automotiveDistributorsKuwait } from './automotive-distributors/kuwait';
import { automotiveDistributorsQatar } from './automotive-distributors/qatar';
import { automotiveDistributorsOman } from './automotive-distributors/oman';
import { automotiveDistributorsBahrain } from './automotive-distributors/bahrain';
import { automotiveDistributorsTurkey } from './automotive-distributors/turkey';
import { automotiveDistributorsMorocco } from './automotive-distributors/morocco';

// Wave 3 — food & beverage manufacturers (not the grocery FMCG basket)
import { foodBeverageCompaniesSaudiArabia } from './food-beverage-companies/saudi-arabia';
import { foodBeverageCompaniesUae } from './food-beverage-companies/uae';
import { foodBeverageCompaniesEgypt } from './food-beverage-companies/egypt';
import { foodBeverageCompaniesKuwait } from './food-beverage-companies/kuwait';
import { foodBeverageCompaniesQatar } from './food-beverage-companies/qatar';
import { foodBeverageCompaniesOman } from './food-beverage-companies/oman';
import { foodBeverageCompaniesBahrain } from './food-beverage-companies/bahrain';
import { foodBeverageCompaniesTurkey } from './food-beverage-companies/turkey';
import { foodBeverageCompaniesMorocco } from './food-beverage-companies/morocco';

// Wave 3 — FMCG expansion (do not recreate Egypt/UAE/KSA/Kuwait/Oman/Qatar)
import { fmcgCompaniesTurkey } from './fmcg-companies/turkey';
import { fmcgCompaniesBahrain } from './fmcg-companies/bahrain';
import { fmcgCompaniesNigeria } from './fmcg-companies/nigeria';
import { fmcgCompaniesPakistan } from './fmcg-companies/pakistan';
import { fmcgCompaniesIndonesia } from './fmcg-companies/indonesia';
import { fmcgCompaniesMexico } from './fmcg-companies/mexico';
import { fmcgCompaniesSouthAfrica } from './fmcg-companies/south-africa';
import { fmcgCompaniesKenya } from './fmcg-companies/kenya';
import { fmcgCompaniesMorocco } from './fmcg-companies/morocco';
import { fmcgCompaniesJordan } from './fmcg-companies/jordan';
import { fmcgCompaniesIraq } from './fmcg-companies/iraq';
import { fmcgCompaniesAlgeria } from './fmcg-companies/algeria';
import { fmcgCompaniesTunisia } from './fmcg-companies/tunisia';
import { fmcgCompaniesLebanon } from './fmcg-companies/lebanon';

// Wave 4 — medical devices priority markets (legacy KSA/UAE/Japan/USA excluded)
import { medicalDeviceCompaniesGermany } from './medical-device-companies/germany';
import { medicalDeviceCompaniesUk } from './medical-device-companies/uk';
import { medicalDeviceCompaniesChina } from './medical-device-companies/china';
import { medicalDeviceCompaniesIndia } from './medical-device-companies/india';
import { medicalDeviceCompaniesSouthKorea } from './medical-device-companies/south-korea';
import { medicalDeviceCompaniesSingapore } from './medical-device-companies/singapore';
import { medicalDeviceCompaniesMalaysia } from './medical-device-companies/malaysia';
import { medicalDeviceCompaniesBrazil } from './medical-device-companies/brazil';
import { medicalDeviceCompaniesFrance } from './medical-device-companies/france';
import { medicalDeviceCompaniesItaly } from './medical-device-companies/italy';
import { medicalDeviceCompaniesSpain } from './medical-device-companies/spain';
import { medicalDeviceCompaniesCanada } from './medical-device-companies/canada';
import { medicalDeviceCompaniesAustralia } from './medical-device-companies/australia';
import { medicalDeviceCompaniesSwitzerland } from './medical-device-companies/switzerland';
import { medicalDeviceCompaniesMexico } from './medical-device-companies/mexico';

// Wave 4 — distributors priority markets
import { pharmaceuticalDistributorsIndia } from './pharmaceutical-distributors/india';
import { pharmaceuticalDistributorsChina } from './pharmaceutical-distributors/china';
import { pharmaceuticalDistributorsBrazil } from './pharmaceutical-distributors/brazil';
import { pharmaceuticalDistributorsMexico } from './pharmaceutical-distributors/mexico';
import { pharmaceuticalDistributorsSouthAfrica } from './pharmaceutical-distributors/south-africa';
import { pharmaceuticalDistributorsNigeria } from './pharmaceutical-distributors/nigeria';
import { pharmaceuticalDistributorsIndonesia } from './pharmaceutical-distributors/indonesia';
import { pharmaceuticalDistributorsVietnam } from './pharmaceutical-distributors/vietnam';

// Wave 4 — retail expansion (do not recreate Egypt/UAE/KSA/Kuwait/Oman/Qatar)
import { retailCompaniesBahrain } from './retail-companies/bahrain';
import { retailCompaniesJordan } from './retail-companies/jordan';
import { retailCompaniesMorocco } from './retail-companies/morocco';
import { retailCompaniesIraq } from './retail-companies/iraq';
import { retailCompaniesTurkey } from './retail-companies/turkey';
import { retailCompaniesPakistan } from './retail-companies/pakistan';
import { retailCompaniesNigeria } from './retail-companies/nigeria';
import { retailCompaniesSouthAfrica } from './retail-companies/south-africa';

// Wave 4 — real-estate developers (do not recreate Egypt/UAE/KSA)
import { realEstateCompaniesBahrain } from './real-estate-companies/bahrain';
import { realEstateCompaniesJordan } from './real-estate-companies/jordan';
import { realEstateCompaniesMorocco } from './real-estate-companies/morocco';
import { realEstateCompaniesIraq } from './real-estate-companies/iraq';
import { realEstateCompaniesTurkey } from './real-estate-companies/turkey';
import { realEstateCompaniesPakistan } from './real-estate-companies/pakistan';

// Wave 5 — construction
import { constructionCompaniesSaudiArabia } from './construction-companies/saudi-arabia';
import { constructionCompaniesUae } from './construction-companies/uae';
import { constructionCompaniesQatar } from './construction-companies/qatar';
import { constructionCompaniesEgypt } from './construction-companies/egypt';
import { constructionCompaniesKuwait } from './construction-companies/kuwait';
import { constructionCompaniesOman } from './construction-companies/oman';

// Wave 5 — cosmetics
import { cosmeticsCompaniesSaudiArabia } from './cosmetics-companies/saudi-arabia';
import { cosmeticsCompaniesUae } from './cosmetics-companies/uae';
import { cosmeticsCompaniesEgypt } from './cosmetics-companies/egypt';
import { cosmeticsCompaniesKuwait } from './cosmetics-companies/kuwait';
import { cosmeticsCompaniesQatar } from './cosmetics-companies/qatar';

// Wave 5 — hotel groups
import { hotelGroupsUae } from './hotel-groups/uae';
import { hotelGroupsSaudiArabia } from './hotel-groups/saudi-arabia';
import { hotelGroupsEgypt } from './hotel-groups/egypt';
import { hotelGroupsQatar } from './hotel-groups/qatar';
import { hotelGroupsOman } from './hotel-groups/oman';

// Wave 5 — logistics
import { logisticsCompaniesUae } from './logistics-companies/uae';
import { logisticsCompaniesSaudiArabia } from './logistics-companies/saudi-arabia';
import { logisticsCompaniesEgypt } from './logistics-companies/egypt';
import { logisticsCompaniesQatar } from './logistics-companies/qatar';
import { logisticsCompaniesOman } from './logistics-companies/oman';

// Wave 5 — industrial manufacturing
import { manufacturingCompaniesSaudiArabia } from './manufacturing-companies/saudi-arabia';
import { manufacturingCompaniesUae } from './manufacturing-companies/uae';
import { manufacturingCompaniesEgypt } from './manufacturing-companies/egypt';
import { manufacturingCompaniesTurkey } from './manufacturing-companies/turkey';
import { manufacturingCompaniesQatar } from './manufacturing-companies/qatar';

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
  biotechCompaniesQatar,
  biotechCompaniesIndia,
  croCompaniesSaudiArabia,
  croCompaniesUae,
  croCompaniesEgypt,
  croCompaniesTurkey,
  croCompaniesJordan,
  healthInsurersSaudiArabia,
  healthInsurersUae,
  healthInsurersEgypt,
  healthInsurersKuwait,
  healthInsurersQatar,
  healthInsurersTurkey,
  banksSaudiArabia,
  banksUae,
  banksEgypt,
  banksKuwait,
  banksQatar,
  banksOman,
  banksBahrain,
  banksTurkey,
  banksUsa,
  banksUk,
  banksGermany,
  banksFrance,
  banksItaly,
  banksSpain,
  banksJordan,
  banksMorocco,
  banksPakistan,
  banksNigeria,
  automotiveDistributorsSaudiArabia,
  automotiveDistributorsUae,
  automotiveDistributorsEgypt,
  automotiveDistributorsKuwait,
  automotiveDistributorsQatar,
  automotiveDistributorsOman,
  automotiveDistributorsBahrain,
  automotiveDistributorsTurkey,
  automotiveDistributorsMorocco,
  foodBeverageCompaniesSaudiArabia,
  foodBeverageCompaniesUae,
  foodBeverageCompaniesEgypt,
  foodBeverageCompaniesKuwait,
  foodBeverageCompaniesQatar,
  foodBeverageCompaniesOman,
  foodBeverageCompaniesBahrain,
  foodBeverageCompaniesTurkey,
  foodBeverageCompaniesMorocco,
  fmcgCompaniesTurkey,
  fmcgCompaniesBahrain,
  fmcgCompaniesNigeria,
  fmcgCompaniesPakistan,
  fmcgCompaniesIndonesia,
  fmcgCompaniesMexico,
  fmcgCompaniesSouthAfrica,
  fmcgCompaniesKenya,
  fmcgCompaniesMorocco,
  fmcgCompaniesJordan,
  fmcgCompaniesIraq,
  fmcgCompaniesAlgeria,
  fmcgCompaniesTunisia,
  fmcgCompaniesLebanon,
  medicalDeviceCompaniesGermany,
  medicalDeviceCompaniesUk,
  medicalDeviceCompaniesChina,
  medicalDeviceCompaniesIndia,
  medicalDeviceCompaniesSouthKorea,
  medicalDeviceCompaniesSingapore,
  medicalDeviceCompaniesMalaysia,
  medicalDeviceCompaniesBrazil,
  medicalDeviceCompaniesFrance,
  medicalDeviceCompaniesItaly,
  medicalDeviceCompaniesSpain,
  medicalDeviceCompaniesCanada,
  medicalDeviceCompaniesAustralia,
  medicalDeviceCompaniesSwitzerland,
  medicalDeviceCompaniesMexico,
  pharmaceuticalDistributorsIndia,
  pharmaceuticalDistributorsChina,
  pharmaceuticalDistributorsBrazil,
  pharmaceuticalDistributorsMexico,
  pharmaceuticalDistributorsSouthAfrica,
  pharmaceuticalDistributorsNigeria,
  pharmaceuticalDistributorsIndonesia,
  pharmaceuticalDistributorsVietnam,
  retailCompaniesBahrain,
  retailCompaniesJordan,
  retailCompaniesMorocco,
  retailCompaniesIraq,
  retailCompaniesTurkey,
  retailCompaniesPakistan,
  retailCompaniesNigeria,
  retailCompaniesSouthAfrica,
  realEstateCompaniesBahrain,
  realEstateCompaniesJordan,
  realEstateCompaniesMorocco,
  realEstateCompaniesIraq,
  realEstateCompaniesTurkey,
  realEstateCompaniesPakistan,
  constructionCompaniesSaudiArabia,
  constructionCompaniesUae,
  constructionCompaniesQatar,
  constructionCompaniesEgypt,
  constructionCompaniesKuwait,
  constructionCompaniesOman,
  cosmeticsCompaniesSaudiArabia,
  cosmeticsCompaniesUae,
  cosmeticsCompaniesEgypt,
  cosmeticsCompaniesKuwait,
  cosmeticsCompaniesQatar,
  hotelGroupsUae,
  hotelGroupsSaudiArabia,
  hotelGroupsEgypt,
  hotelGroupsQatar,
  hotelGroupsOman,
  logisticsCompaniesUae,
  logisticsCompaniesSaudiArabia,
  logisticsCompaniesEgypt,
  logisticsCompaniesQatar,
  logisticsCompaniesOman,
  manufacturingCompaniesSaudiArabia,
  manufacturingCompaniesUae,
  manufacturingCompaniesEgypt,
  manufacturingCompaniesTurkey,
  manufacturingCompaniesQatar,
];
