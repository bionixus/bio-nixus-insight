import type { ReportEntry } from '@/data/healthcareReportTypes';
import { GCC_BIOSIMILARS_COPY } from '@/data/reportCopyOverrides/gccBiosimilarsMarketReport';
import { GCC_IMMUNOLOGY_BIOLOGICS_COPY } from '@/data/reportCopyOverrides/gccImmunologyBiologicsMarketReport';
import { SAUDI_ARABIA_ONCOLOGY_COPY } from '@/data/reportCopyOverrides/saudiArabiaOncologyMarketReport';
import { SAUDI_ARABIA_DIABETES_COPY } from '@/data/reportCopyOverrides/saudiArabiaDiabetesMarketReport';
import { UAE_ONCOLOGY_COPY } from '@/data/reportCopyOverrides/uaeOncologyMarketReport';
import { UAE_DIABETES_COPY } from '@/data/reportCopyOverrides/uaeDiabetesMarketReport';
import { SAUDI_ARABIA_CARDIOVASCULAR_COPY } from '@/data/reportCopyOverrides/saudiArabiaCardiovascularMarketReport';
import { SAUDI_ARABIA_IMMUNOLOGY_BIOLOGICS_COPY } from '@/data/reportCopyOverrides/saudiArabiaImmunologyBiologicsMarketReport';
import { UAE_CARDIOVASCULAR_COPY } from '@/data/reportCopyOverrides/uaeCardiovascularMarketReport';
import { UAE_IMMUNOLOGY_BIOLOGICS_COPY } from '@/data/reportCopyOverrides/uaeImmunologyBiologicsMarketReport';
import { SAUDI_ARABIA_RESPIRATORY_COPY } from '@/data/reportCopyOverrides/saudiArabiaRespiratoryMarketReport';
import { SAUDI_ARABIA_RARE_DISEASES_COPY } from '@/data/reportCopyOverrides/saudiArabiaRareDiseasesMarketReport';
import { UAE_RESPIRATORY_COPY } from '@/data/reportCopyOverrides/uaeRespiratoryMarketReport';
import { UAE_RARE_DISEASES_COPY } from '@/data/reportCopyOverrides/uaeRareDiseasesMarketReport';
import { SAUDI_ARABIA_NEUROLOGY_CNS_COPY } from '@/data/reportCopyOverrides/saudiArabiaNeurologyCnsMarketReport';
import { SAUDI_ARABIA_BIOSIMILARS_COPY } from '@/data/reportCopyOverrides/saudiArabiaBiosimilarsMarketReport';
import { UAE_NEUROLOGY_CNS_COPY } from '@/data/reportCopyOverrides/uaeNeurologyCnsMarketReport';
import { UAE_BIOSIMILARS_COPY } from '@/data/reportCopyOverrides/uaeBiosimilarsMarketReport';
import { SAUDI_ARABIA_DIGITAL_HEALTH_COPY } from '@/data/reportCopyOverrides/saudiArabiaDigitalHealthMarketReport';
import { SAUDI_ARABIA_VACCINES_COPY } from '@/data/reportCopyOverrides/saudiArabiaVaccinesMarketReport';
import { SAUDI_ARABIA_DERMATOLOGY_COPY } from '@/data/reportCopyOverrides/saudiArabiaDermatologyMarketReport';
import { UAE_DIGITAL_HEALTH_COPY } from '@/data/reportCopyOverrides/uaeDigitalHealthMarketReport';
import { UAE_VACCINES_COPY } from '@/data/reportCopyOverrides/uaeVaccinesMarketReport';
import { UAE_DERMATOLOGY_COPY } from '@/data/reportCopyOverrides/uaeDermatologyMarketReport';

type OverrideCopy = Partial<ReportEntry> & { slug: string };

/** Hand-authored copy overrides, applied on top of the programmatic report entries. */
const OVERRIDES: OverrideCopy[] = [
  GCC_BIOSIMILARS_COPY,
  GCC_IMMUNOLOGY_BIOLOGICS_COPY,
  SAUDI_ARABIA_ONCOLOGY_COPY,
  SAUDI_ARABIA_DIABETES_COPY,
  UAE_ONCOLOGY_COPY,
  UAE_DIABETES_COPY,
  SAUDI_ARABIA_CARDIOVASCULAR_COPY,
  SAUDI_ARABIA_IMMUNOLOGY_BIOLOGICS_COPY,
  UAE_CARDIOVASCULAR_COPY,
  UAE_IMMUNOLOGY_BIOLOGICS_COPY,
  SAUDI_ARABIA_RESPIRATORY_COPY,
  SAUDI_ARABIA_RARE_DISEASES_COPY,
  UAE_RESPIRATORY_COPY,
  UAE_RARE_DISEASES_COPY,
  SAUDI_ARABIA_NEUROLOGY_CNS_COPY,
  SAUDI_ARABIA_BIOSIMILARS_COPY,
  UAE_NEUROLOGY_CNS_COPY,
  UAE_BIOSIMILARS_COPY,
  SAUDI_ARABIA_DIGITAL_HEALTH_COPY,
  SAUDI_ARABIA_VACCINES_COPY,
  SAUDI_ARABIA_DERMATOLOGY_COPY,
  UAE_DIGITAL_HEALTH_COPY,
  UAE_VACCINES_COPY,
  UAE_DERMATOLOGY_COPY,
];

const BY_SLUG = new Map<string, OverrideCopy>(OVERRIDES.map((o) => [o.slug, o]));

/** Apply hand-authored copy overrides after programmatic assembly. */
export function applyReportCopyOverrides(entries: ReportEntry[]): ReportEntry[] {
  return entries.map((entry) => {
    const override = BY_SLUG.get(entry.slug);
    if (!override) return entry;
    const { slug: _slug, ...patch } = override;
    return { ...entry, ...patch };
  });
}
