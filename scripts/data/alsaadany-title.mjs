/** Canonical job title for Mohammad Alsaadany, shared by SSR and the news RSS builder. */

export const ALSAADANY_JOB_TITLE = 'AMEA Director (APAC, Middle East and Africa)';

const LEGACY_TITLES = new Set([
  'mea director',
  'healthcare market research advisor',
  'healthcare market research advisor, bionixus',
  'director, bionixus healthcare market research',
  'directeur, bionixus healthcare market research',
  'المدير، bionixus لأبحاث سوق الرعاية الصحية',
]);

/** "MEA Director" only. The leading A in "AMEA Director" blocks a second replacement. */
const MEA_DIRECTOR = /(?<![A-Za-z])MEA Director\b/g;

export function canonicalAlsaadanyJobTitle(title) {
  const trimmed = typeof title === 'string' ? title.trim() : '';
  if (!trimmed || LEGACY_TITLES.has(trimmed.toLowerCase())) return ALSAADANY_JOB_TITLE;
  return trimmed;
}

export function replaceMeaDirectorTitle(value) {
  return value.replace(MEA_DIRECTOR, ALSAADANY_JOB_TITLE);
}

export function replaceLegacyAlsaadanyPhrases(value) {
  if (typeof value === 'string') return replaceMeaDirectorTitle(value);
  if (Array.isArray(value)) return value.map((item) => replaceLegacyAlsaadanyPhrases(item));
  if (value && typeof value === 'object') {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = replaceLegacyAlsaadanyPhrases(child);
    }
    return out;
  }
  return value;
}
