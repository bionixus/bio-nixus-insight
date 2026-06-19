/**
 * Central registry of all data-driven country listicle pages.
 *
 * Every config added here automatically gets a route in src/routes.tsx
 * (via the allListicleConfigs spread) and a sitemap entry.
 *
 * Keep this file free of JSX/React imports.
 */
import type { CountryListicleConfig } from './types';

// GCC (general)
import { uaeGeneralEn } from './gcc/uae.general.en';
import { dubaiGeneralEn } from './gcc/dubai.general.en';
import { abuDhabiGeneralEn } from './gcc/abu-dhabi.general.en';
import { ksaGeneralEn } from './gcc/ksa.general.en';
import { ksaHealthcareEn } from './gcc/ksa.healthcare.en';
import { riyadhGeneralEn } from './gcc/riyadh.general.en';
import { qatarGeneralEn } from './gcc/qatar.general.en';
import { qatarGeneralAr } from './gcc/qatar.general.ar';
import { qatarHealthcareEn } from './gcc/qatar.healthcare.en';
import { omanGeneralEn } from './gcc/oman.general.en';
import { omanHealthcareEn } from './gcc/oman.healthcare.en';
import { bahrainGeneralEn } from './gcc/bahrain.general.en';
import { bahrainHealthcareEn } from './gcc/bahrain.healthcare.en';
import { kuwaitGeneralEn } from './gcc/kuwait.general.en';
import { kuwaitGeneralAr } from './gcc/kuwait.general.ar';
import { kuwaitHealthcareEn } from './gcc/kuwait.healthcare.en';
import { abuDhabiHealthcareEn } from './gcc/abu-dhabi.healthcare.en';
import { dubaiHealthcareEn } from './gcc/dubai.healthcare.en';

// MENA / Levant / North Africa
import { jordanGeneralEn } from './mena/jordan.general.en';
import { jordanHealthcareEn } from './mena/jordan.healthcare.en';
import { lebanonGeneralEn } from './mena/lebanon.general.en';
import { lebanonHealthcareEn } from './mena/lebanon.healthcare.en';
import { iraqGeneralEn } from './mena/iraq.general.en';
import { moroccoGeneralEn } from './mena/morocco.general.en';
import { algeriaGeneralEn } from './mena/algeria.general.en';
import { tunisiaGeneralEn } from './mena/tunisia.general.en';
import { egyptHealthcareEn } from './mena/egypt.healthcare.en';

// Africa
import { southAfricaGeneralEn } from './africa/south-africa.general.en';
import { nigeriaGeneralEn } from './africa/nigeria.general.en';
import { ghanaGeneralEn } from './africa/ghana.general.en';
import { kenyaGeneralEn } from './africa/kenya.general.en';
import { ethiopiaGeneralEn } from './africa/ethiopia.general.en';
import { tanzaniaGeneralEn } from './africa/tanzania.general.en';
import { ugandaGeneralEn } from './africa/uganda.general.en';
import { coteDivoireGeneralEn } from './africa/cote-divoire.general.en';
import { senegalGeneralEn } from './africa/senegal.general.en';
import { angolaGeneralEn } from './africa/angola.general.en';

// Europe (healthcare)
import { ukHealthcareEn } from './europe/uk.healthcare.en';
import { germanyHealthcareEn } from './europe/germany.healthcare.en';
import { franceHealthcareEn } from './europe/france.healthcare.en';
import { spainHealthcareEn } from './europe/spain.healthcare.en';
import { italyHealthcareEn } from './europe/italy.healthcare.en';
import { netherlandsHealthcareEn } from './europe/netherlands.healthcare.en';
import { turkeyHealthcareEn } from './europe/turkey.healthcare.en';
import { polandHealthcareEn } from './europe/poland.healthcare.en';
import { belgiumHealthcareEn } from './europe/belgium.healthcare.en';

// LATAM (healthcare)
import { mexicoHealthcareEn } from './latam/mexico.healthcare.en';
import { colombiaHealthcareEn } from './latam/colombia.healthcare.en';
import { chileHealthcareEn } from './latam/chile.healthcare.en';
import { peruHealthcareEn } from './latam/peru.healthcare.en';

export const allListicleConfigs: CountryListicleConfig[] = [
  // GCC general
  uaeGeneralEn,
  dubaiGeneralEn,
  abuDhabiGeneralEn,
  ksaGeneralEn,
  ksaHealthcareEn,
  riyadhGeneralEn,
  qatarGeneralEn,
  qatarGeneralAr,
  qatarHealthcareEn,
  omanGeneralEn,
  omanHealthcareEn,
  bahrainGeneralEn,
  bahrainHealthcareEn,
  kuwaitGeneralEn,
  kuwaitGeneralAr,
  kuwaitHealthcareEn,
  abuDhabiHealthcareEn,
  dubaiHealthcareEn,
  // MENA
  jordanGeneralEn,
  jordanHealthcareEn,
  lebanonGeneralEn,
  lebanonHealthcareEn,
  iraqGeneralEn,
  moroccoGeneralEn,
  algeriaGeneralEn,
  tunisiaGeneralEn,
  egyptHealthcareEn,
  // Africa
  southAfricaGeneralEn,
  nigeriaGeneralEn,
  ghanaGeneralEn,
  kenyaGeneralEn,
  ethiopiaGeneralEn,
  tanzaniaGeneralEn,
  ugandaGeneralEn,
  coteDivoireGeneralEn,
  senegalGeneralEn,
  angolaGeneralEn,
  // Europe healthcare
  ukHealthcareEn,
  germanyHealthcareEn,
  franceHealthcareEn,
  spainHealthcareEn,
  italyHealthcareEn,
  netherlandsHealthcareEn,
  turkeyHealthcareEn,
  polandHealthcareEn,
  belgiumHealthcareEn,
  // LATAM healthcare
  mexicoHealthcareEn,
  colombiaHealthcareEn,
  chileHealthcareEn,
  peruHealthcareEn,
];
