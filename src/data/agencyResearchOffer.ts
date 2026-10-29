/** Approved agency-offer copy. Do not reword. The public intro omits the internal tagging sentence. */

export const PHYSICIAN_NETWORK_STATEMENT =
  'BioNixus works with a network of about 82,000+ physicians globally and about 3,200 in the Middle East, with role and licence checks matched to the country of practice.';

export const AGENCY_OFFER_BULLETS = [
  'White-label delivery: instruments, fieldwork, and datasets can ship under the commissioning agency’s brand. BioNixus stays off client-facing materials unless you ask otherwise.',
  'Client confidentiality: the end client’s identity and study purpose are held to the people working the project. We do not reuse agency client names in marketing.',
  '48-hour quote: from a complete brief (markets, specialty, method, n, timeline), BioNixus aims to return a costed quote within 48 hours. This is a response-time commitment, not a guarantee of project outcomes or timelines in field.',
] as const;

export const AGENCY_QUOTE_INTRO =
  'Tell us the markets, specialty and method. We aim to return a costed quote within 48 hours of a complete brief.';

export const AGENCY_QUOTE_SUCCESS =
  'Thanks — we aim to reply with a costed quote within 48 hours of a complete brief.';

export const AGENCY_QUOTE_FORM_VARIANT = 'agency-quote';

export const AGENCY_QUOTE_TAGS = 'source-ai-search,agency-quote';

export function agencyQuoteRef(pageSlug: string): string {
  return `agency-${pageSlug}`;
}
