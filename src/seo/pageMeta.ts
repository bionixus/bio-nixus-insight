/**
 * Single source of truth for page `<title>` / meta description copy.
 *
 * Supersedes the four parallel, inconsistent systems found across the
 * codebase (SEOHead's own `normalizeSeoTitle`/`buildSeoDescription` at a
 * 65-char / 120-130-char band, ~130 hand-typed <Helmet> blocks with no
 * length enforcement at all, BlogPost.tsx's per-slug conditional tree, and
 * healthcareReportData.ts's own truncation at a 165-char band) for pages
 * that adopt it. Two title formulas, one description formula, both with a
 * hard length band enforced here rather than left to each call site.
 *
 * This module never invents facts: `proofPoint`/`outcome`/any embedded
 * number are the caller's responsibility to source from real page content.
 * Passing a fabricated statistic through `buildMetaDescription` produces a
 * fabricated meta description — the length/formula enforcement here does
 * not make a false number true.
 */

export const BRAND = 'BioNixus';
/** Google SERP display band for titles — stricter than seo-meta.ts's 65, per this rewrite's spec. */
export const TITLE_MAX = 60;
/** Target band for meta descriptions — proof point + outcome + implicit CTA should fit here. */
export const META_MIN = 140;
export const META_MAX = 155;

const DEFAULT_CTA = 'Request a scoping call.';
/** Used only to pad genuinely short copy up to META_MIN — true, generic capability statements, not fabricated specifics. Appended in order, as many as needed. */
const GENERIC_PAD_SENTENCES = [
  'BioNixus delivers decision-ready pharmaceutical and healthcare market research.',
  'Quantitative and qualitative fieldwork across GCC, MENA, and Europe.',
];

function truncateAtWordBoundary(text: string, max: number): string {
  const cleaned = String(text || '').trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, Math.max(0, max));
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > Math.floor(max * 0.5) ? slice.slice(0, lastSpace) : slice;
  return cut.trim().replace(/[.,;:\-–—\s]+$/, '');
}

function joinSentences(parts: Array<string | undefined>): string {
  return parts
    .map((p) => (p || '').trim())
    .filter(Boolean)
    .map((p) => (/[.!?]$/.test(p) ? p : `${p}.`))
    .join(' ');
}

/**
 * Fits `variable + fixed` (e.g. keyword + " in {market} | BioNixus") into
 * `max` chars by truncating ONLY the variable part at a word boundary — the
 * fixed part (market name, year, brand suffix) is never touched. Truncating
 * the whole assembled string blindly is exactly how the pre-rewrite title
 * system mangled country names mid-word (e.g. "...in United Arab" with
 * "Emirates" silently dropped) — this formula must not repeat that bug.
 */
function fitVariablePart(variable: string, fixed: string, max: number): string {
  const budget = max - fixed.length;
  if (budget <= 0) return variable; // fixed part alone already exceeds budget — caller's fixed parts are too long, nothing sensible to trim
  return variable.length > budget ? truncateAtWordBoundary(variable, budget) : variable;
}

export interface CountryServiceTitleInput {
  /** e.g. "Pharmaceutical Market Research", "Healthcare Market Research" */
  primaryKeyword: string;
  /** e.g. "UAE", "Saudi Arabia" */
  market: string;
}

/** `{Primary Keyword} in {Market} | BioNixus` — for country/service pages. */
export function buildCountryServiceTitle({ primaryKeyword, market }: CountryServiceTitleInput): string {
  const fixed = ` in ${market} | ${BRAND}`;
  const keyword = fitVariablePart(primaryKeyword, fixed, TITLE_MAX);
  return `${keyword}${fixed}`;
}

export interface GuideTitleInput {
  /** e.g. "Cut GCC Market Access Timelines" — the benefit, not a generic label */
  benefitHeadline: string;
  year: string | number;
}

/** `{Benefit-led headline} ({Year}) | BioNixus` — for guides/blog. */
export function buildGuideTitle({ benefitHeadline, year }: GuideTitleInput): string {
  const fixed = ` (${year}) | ${BRAND}`;
  const headline = fitVariablePart(benefitHeadline, fixed, TITLE_MAX);
  return `${headline}${fixed}`;
}

export interface MetaDescriptionInput {
  /** A real, fact-grounded proof point — embed a genuine number here when the page has one (e.g. "42 GCC market access studies"). Never invent a number that isn't already true of the page's content. */
  proofPoint: string;
  /** The outcome/benefit to the reader. */
  outcome: string;
  /** Implicit CTA — defaults to a generic, always-true capability statement. */
  cta?: string;
}

/** 1 proof point + 1 outcome + implicit CTA, normalized to the META_MIN–META_MAX band. */
export function buildMetaDescription({ proofPoint, outcome, cta }: MetaDescriptionInput): string {
  const ctaText = cta ?? DEFAULT_CTA;

  let text = joinSentences([proofPoint, outcome, ctaText]);
  if (text.length > META_MAX) {
    text = joinSentences([proofPoint, outcome]);
  }
  if (text.length > META_MAX) {
    text = truncateAtWordBoundary(text, META_MAX);
  }
  for (const pad of GENERIC_PAD_SENTENCES) {
    if (text.length >= META_MIN) break;
    text = joinSentences([text, pad]);
  }
  if (text.length > META_MAX) {
    text = truncateAtWordBoundary(text, META_MAX);
  }
  return text;
}

export type PageMetaSpec =
  | ({ kind: 'country-service' } & CountryServiceTitleInput & MetaDescriptionInput)
  | ({ kind: 'guide' } & GuideTitleInput & MetaDescriptionInput);

export interface ResolvedPageMeta {
  title: string;
  description: string;
}

/** Single entry point: given a discriminated spec, returns the formula-generated title + description. */
export function resolvePageMeta(spec: PageMetaSpec): ResolvedPageMeta {
  const description = buildMetaDescription(spec);
  if (spec.kind === 'country-service') {
    return { title: buildCountryServiceTitle(spec), description };
  }
  return { title: buildGuideTitle(spec), description };
}

export interface PageMetaValidation {
  title: string;
  description: string;
  titleLength: number;
  descriptionLength: number;
  titleOk: boolean;
  descriptionOk: boolean;
}

/** For diff reports / tests: reports actual lengths against this module's bands (TITLE_MAX / META_MIN–META_MAX), not the looser site-wide R03/R05 suite bands. */
export function validatePageMeta(title: string, description: string): PageMetaValidation {
  const titleLength = title.length;
  const descriptionLength = description.length;
  return {
    title,
    description,
    titleLength,
    descriptionLength,
    titleOk: titleLength > 0 && titleLength <= TITLE_MAX,
    descriptionOk: descriptionLength >= META_MIN && descriptionLength <= META_MAX,
  };
}
