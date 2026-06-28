import type { BlogPostCtaSection } from '@/types/blog';

const EN_CTA_MARKERS =
  /\b(Scope your|Request a commercial briefing|SFDA|MOHAP|NUPCO|GCC and MENA|tender intelligence)\b/i;

export function looksLikeEnglishCta(cta: BlogPostCtaSection | undefined | null): boolean {
  if (!cta) return true;
  const blob = [cta.title, cta.description, cta.buttonText].filter(Boolean).join(' ');
  if (!blob.trim()) return true;
  return EN_CTA_MARKERS.test(blob);
}

/** Default German article CTA — Germany & Europe capabilities. */
export const DEFAULT_GERMAN_BLOG_CTA: BlogPostCtaSection = {
  title: 'Marktzugangs-Briefing für Deutschland & Europa',
  description:
    'BioNixus unterstützt AMNOG- und HTA-Dossiers, GKV- und NHS-Erstattungsmapping, Ärzte- und Kostenträgerforschung, KOL-Programme sowie Wettbewerbsanalysen in Deutschland, der EU und UK — für strategische Zugangs- und Launch-Entscheidungen.',
  buttonText: 'Briefing anfragen',
  buttonUrl: 'https://www.bionixus.com/de/contact',
};

const GERMAN_BLOG_CTA_BY_SLUG: Record<string, BlogPostCtaSection> = {
  'pharmamarktforschung-deutschland-2026': {
    title: 'Pharmamarktforschung in Deutschland & Europa mit BioNixus',
    description:
      'Ärztebefragungen, KOL-Mapping, RWE-Studien und AMNOG-begleitende Forschung in Deutschland — ergänzt durch EU-HTA- und UK-NICE-Expertise für kohärente Europa-Strategien.',
    buttonText: 'Jetzt anfragen',
    buttonUrl: 'https://www.bionixus.com/de/contact',
  },
  'amnog-frueher-nutzen-marktzugang-2026': {
    title: 'AMNOG & europäischer Marktzugang mit BioNixus',
    description:
      'Von der frühen Nutzenbewertung (G-BA/IQWiG) bis zu EU-HTA und nationalen Preisverhandlungen — BioNixus verbindet Dossier-Strategie, Evidenzplanung und Feldforschung für Deutschland und Europa.',
    buttonText: 'Beratung anfragen',
    buttonUrl: 'https://www.bionixus.com/de/contact',
  },
  'gesundheitsmarkt-deutschland-2026': {
    title: 'Gesundheitsmarkt Deutschland & Europa — Briefing anfragen',
    description:
      'BioNixus liefert Marktzugangs-Intelligence zu GKV-Reformen, AMNOG, EU-HTA und Erstattung in Deutschland — mit Vergleich zu UK, Frankreich und weiteren EU-Märkten.',
    buttonText: 'Briefing anfragen',
    buttonUrl: 'https://www.bionixus.com/de/contact',
  },
  'deutsche-pharmaunternehmen-2026-pipeline-updates': {
    title: 'Pipeline-Insights & Marktzugang Deutschland/Europa',
    description:
      'BioNixus unterstützt Commercial- und Access-Teams mit AMNOG-Dossier-Planung, GKV-Erstattungsmodellen, KOL-Tracking und Wettbewerbsanalysen — in Deutschland und über EU-HTA-Pfade hinweg.',
    buttonText: 'Briefing anfragen',
    buttonUrl: 'https://www.bionixus.com/de/contact',
  },
};

export function getGermanBlogCta(
  slug: string | undefined,
  sanityCta: BlogPostCtaSection | undefined | null,
): BlogPostCtaSection {
  if (slug && GERMAN_BLOG_CTA_BY_SLUG[slug]) {
    return GERMAN_BLOG_CTA_BY_SLUG[slug];
  }
  if (sanityCta && !looksLikeEnglishCta(sanityCta)) {
    return {
      ...DEFAULT_GERMAN_BLOG_CTA,
      ...sanityCta,
      buttonUrl: sanityCta.buttonUrl || DEFAULT_GERMAN_BLOG_CTA.buttonUrl,
      buttonText: sanityCta.buttonText || DEFAULT_GERMAN_BLOG_CTA.buttonText,
    };
  }
  return DEFAULT_GERMAN_BLOG_CTA;
}
