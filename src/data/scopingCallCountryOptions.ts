import { CONTACT_FORM_COUNTRIES } from '@/data/contactFormCountries';

/**
 * Country dropdown for the exit-intent scoping-call popup.
 * Reuses the contact form's ISO list. Favored markets are pinned in
 * "Common choices". Submitted values stay the canonical country names.
 */
export type ScopingCallCountryOption = {
  value: string;
  label: string;
};

export const SCOPING_CALL_MULTI_COUNTRY = 'Multi-country / Global';
export const SCOPING_CALL_OTHER_COUNTRY = 'Other';

export const SCOPING_CALL_FAVORED_COUNTRIES: readonly ScopingCallCountryOption[] = [
  { value: 'United States', label: 'United States (USA)' },
  { value: 'Canada', label: 'Canada' },
  { value: 'United Kingdom', label: 'United Kingdom (UK)' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia (KSA)' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates (UAE)' },
  { value: 'China', label: 'China' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Japan', label: 'Japan' },
];

/** Common choices on the primary country dropdown, including multi-country. */
export const SCOPING_CALL_COMMON_CHOICES: readonly ScopingCallCountryOption[] = [
  ...SCOPING_CALL_FAVORED_COUNTRIES,
  { value: SCOPING_CALL_MULTI_COUNTRY, label: SCOPING_CALL_MULTI_COUNTRY },
];

const favoredValues = new Set(SCOPING_CALL_FAVORED_COUNTRIES.map((option) => option.value));

export const SCOPING_CALL_ALPHABETICAL_COUNTRIES: readonly ScopingCallCountryOption[] = CONTACT_FORM_COUNTRIES.filter(
  (name) => !favoredValues.has(name),
).map((name) => ({ value: name, label: name }));

const scopingCallCountryValues = new Set<string>([
  ...SCOPING_CALL_COMMON_CHOICES.map((option) => option.value),
  ...SCOPING_CALL_ALPHABETICAL_COUNTRIES.map((option) => option.value),
  SCOPING_CALL_OTHER_COUNTRY,
]);

export function isScopingCallCountry(value: string): boolean {
  return scopingCallCountryValues.has(value);
}

/** Selectable countries on the primary dropdown, excluding the empty placeholder. */
export const SCOPING_CALL_COUNTRY_COUNT = scopingCallCountryValues.size;

/**
 * One `markets` string for HighLevel and Formspree.
 * A single country is sent as-is. Multi-country appends the main country and
 * the free-text other countries when either is filled.
 */
export function serializeScopingCallMarkets(country: string, mainCountry: string, otherCountries: string): string {
  const selected = country.trim();
  if (selected !== SCOPING_CALL_MULTI_COUNTRY) return selected;
  const main = mainCountry.trim();
  const other = otherCountries.trim();
  if (!main && !other) return SCOPING_CALL_MULTI_COUNTRY;
  const details = [main ? `Main: ${main}` : '', other ? `Other: ${other}` : ''].filter(Boolean);
  return `${SCOPING_CALL_MULTI_COUNTRY} (${details.join('; ')})`;
}
