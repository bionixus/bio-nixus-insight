import { CONTACT_FORM_COUNTRIES } from '@/data/contactFormCountries';

/**
 * Country dropdown for the exit-intent scoping-call popup.
 * Reuses the contact form's ISO country list. United States and Canada are
 * pinned first so they are visible without scrolling to U / C. Submitted
 * values stay the canonical names (the select label may add "USA").
 */
export type ScopingCallCountryOption = {
  value: string;
  label: string;
};

export const SCOPING_CALL_FEATURED_COUNTRIES: readonly ScopingCallCountryOption[] = [
  { value: 'United States', label: 'United States (USA)' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Multi-country / Global', label: 'Multi-country / Global' },
  { value: 'Other', label: 'Other' },
];

const featuredValues = new Set(SCOPING_CALL_FEATURED_COUNTRIES.map((option) => option.value));

export const SCOPING_CALL_OTHER_COUNTRIES: readonly ScopingCallCountryOption[] = CONTACT_FORM_COUNTRIES.filter(
  (name) => !featuredValues.has(name),
).map((name) => ({ value: name, label: name }));

const scopingCallCountryValues = new Set<string>([
  ...SCOPING_CALL_FEATURED_COUNTRIES.map((option) => option.value),
  ...SCOPING_CALL_OTHER_COUNTRIES.map((option) => option.value),
]);

export function isScopingCallCountry(value: string): boolean {
  return scopingCallCountryValues.has(value);
}

/** Selectable countries, excluding the empty placeholder. */
export const SCOPING_CALL_COUNTRY_COUNT =
  SCOPING_CALL_FEATURED_COUNTRIES.length + SCOPING_CALL_OTHER_COUNTRIES.length;
