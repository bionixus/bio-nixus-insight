/**
 * Central registry of all data-driven country listicle pages.
 *
 * Every config added here automatically gets a route in src/routes.tsx
 * (via the allListicleConfigs spread) and a sitemap entry.
 *
 * Keep this file free of JSX/React imports.
 */
import type { CountryListicleConfig } from './types';

// GCC
import { qatarGeneralEn } from './gcc/qatar.general.en';
import { qatarHealthcareEn } from './gcc/qatar.healthcare.en';
import { omanGeneralEn } from './gcc/oman.general.en';
import { bahrainGeneralEn } from './gcc/bahrain.general.en';
import { kuwaitGeneralEn } from './gcc/kuwait.general.en';

// MENA / Levant / North Africa
import { jordanGeneralEn } from './mena/jordan.general.en';
import { lebanonGeneralEn } from './mena/lebanon.general.en';
import { iraqGeneralEn } from './mena/iraq.general.en';
import { moroccoGeneralEn } from './mena/morocco.general.en';
import { algeriaGeneralEn } from './mena/algeria.general.en';
import { tunisiaGeneralEn } from './mena/tunisia.general.en';

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

// Europe (healthcare)
import { ukHealthcareEn } from './europe/uk.healthcare.en';
import { germanyHealthcareEn } from './europe/germany.healthcare.en';
import { franceHealthcareEn } from './europe/france.healthcare.en';
import { spainHealthcareEn } from './europe/spain.healthcare.en';
import { italyHealthcareEn } from './europe/italy.healthcare.en';
import { netherlandsHealthcareEn } from './europe/netherlands.healthcare.en';

// LATAM (healthcare)
import { mexicoHealthcareEn } from './latam/mexico.healthcare.en';
import { colombiaHealthcareEn } from './latam/colombia.healthcare.en';
import { chileHealthcareEn } from './latam/chile.healthcare.en';
import { peruHealthcareEn } from './latam/peru.healthcare.en';

export const allListicleConfigs: CountryListicleConfig[] = [
  // GCC
  qatarGeneralEn,
  qatarHealthcareEn,
  omanGeneralEn,
  bahrainGeneralEn,
  kuwaitGeneralEn,
  // MENA
  jordanGeneralEn,
  lebanonGeneralEn,
  iraqGeneralEn,
  moroccoGeneralEn,
  algeriaGeneralEn,
  tunisiaGeneralEn,
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
  // Europe healthcare
  ukHealthcareEn,
  germanyHealthcareEn,
  franceHealthcareEn,
  spainHealthcareEn,
  italyHealthcareEn,
  netherlandsHealthcareEn,
  // LATAM healthcare
  mexicoHealthcareEn,
  colombiaHealthcareEn,
  chileHealthcareEn,
  peruHealthcareEn,
];
