import type { PortableTextBlock } from '@portabletext/types';

export type BlogFaqItem = { question: string; answer: string };

const EN_FAQ_MARKERS =
  /\b(SFDA|MOHAP|NUPCO|Gulf|Who is this|How does BioNixus support pharmaceutical teams in the Gulf|What is the typical SFDA)\b/i;

export function looksLikeEnglishFaq(items: BlogFaqItem[]): boolean {
  if (!items.length) return true;
  return items.some((item) => EN_FAQ_MARKERS.test(item.question) || EN_FAQ_MARKERS.test(item.answer));
}

export const GENERIC_GERMAN_BLOG_FAQ: BlogFaqItem[] = [
  {
    question: 'Für wen ist dieser Leitfaden gedacht?',
    answer:
      'Commercial-, Market-Access- und Medical-Affairs-Verantwortliche in Deutschland und internationalen Teams mit Deutschland-Fokus. Er unterstützt Zulassungs-, Erstattungs- und Insight-Planung, ersetzt aber keine produktspezifische medizinische Beratung.',
  },
  {
    question: 'Wie sollten Teams Marktgrößen-Schätzungen für Deutschland validieren?',
    answer:
      'Mehrere Quellen nutzen — veröffentlichte Regulator-Zusammenfassungen, lokale Epidemiologie und Kostenträger-Interviews. BioNixus empfiehlt konservative Modellierung entlang AMNOG-Timing und GKV-Erstattungsregeln statt einzelner globaler Prognosen.',
  },
  {
    question: 'Wie läuft die AMNOG-Nutzenbewertung nach einer EMA-Zulassung ab?',
    answer:
      'Neue Wirkstoffe durchlaufen unmittelbar nach Markteintritt eine frühe Nutzenbewertung beim G-BA und IQWiG, gefolgt von Preisverhandlungen mit dem GKV-Spitzenverband — abhängig von Therapiegebiet, Vergleichstherapie und Evidenzlage.',
  },
  {
    question: 'Wann lohnt sich Custom Research statt Syndicated Data?',
    answer:
      'Syndicated Audits beantworten Volumen- und Marktanteilsfragen; Custom quantitative und qualitative Forschung erklärt, warum sich Verschreibungs- und Erstattungsverhalten in Deutschland unterscheidet. Mixed-Mode-Designs sind für Zugangs- und Launch-Entscheidungen üblich.',
  },
  {
    question: 'Wie unterstützt BioNixus pharmazeutische Teams in Deutschland und Europa?',
    answer:
      'BioNixus bietet Gesundheitsmarktforschung, Marktzugangsberatung, AMNOG- und HTA-Dossier-Analysen, KOL-Mapping und Wettbewerbssimulationen in Deutschland, der EU und UK. Kontaktieren Sie BioNixus für ein Briefing.',
  },
  {
    question: 'Enthält dieser Artikel klinische Behandlungsempfehlungen?',
    answer:
      'Nein. Er behandelt ausschließlich kommerzielle, Zugangs- und Forschungsoperationen. Kliniker sollten zugelassene Produktinformationen und lokale Leitlinien befolgen.',
  },
];

/** FAQ for /de/blog index and general German blog hub pages. */
export const BLOG_INDEX_FAQ_DE: BlogFaqItem[] = [
  {
    question: 'Welche Themen behandelt der BioNixus-Blog?',
    answer:
      'Artikel zu quantitativer Ärzteforschung, qualitativen KOL-Programmen, Marktzugang in Deutschland, Europa und weltweit, Krankenhausadoption, regulatorischen Updates und Launch-Strategie — für Commercial-, Medical- und Access-Teams.',
  },
  {
    question: 'Wie oft erscheinen neue Insights?',
    answer:
      'Wir veröffentlichen praxisnahe Artikel aus laufenden Programmen, sobald Märkte sich verschieben. Abonnieren Sie den Newsletter in der Fußzeile für monatliche Highlights aus der Pharma-Marktforschung.',
  },
  {
    question: 'Kann ich ein Thema oder Länder-Deep-Dive anfragen?',
    answer:
      'Ja. Nutzen Sie das Kontaktformular mit Therapiegebiet, Geografie und Entscheidungsfrist — in der Regel erhalten Sie innerhalb eines Werktags einen Methodik-Entwurf.',
  },
];

const GERMAN_BLOG_FAQ_BY_SLUG: Record<string, BlogFaqItem[]> = {
  'pharmamarktforschung-deutschland-2026': [
    {
      question: 'Was macht Deutschland zum wichtigsten Pharmamarkt in Europa?',
      answer:
        'Deutschland ist mit einem Marktvolumen von über 50 Milliarden Euro der größte Pharmamarkt in Europa — getrieben durch GKV-Abdeckung, hohe Innovationsnachfrage und AMNOG als zentrales Erstattungsinstrument.',
    },
    {
      question: 'Wie beeinflusst das AMNOG-Verfahren die Pharmamarktforschung?',
      answer:
        'AMNOG zwingt Teams, früh versorgungsnahe Evidenz zu planen. Marktforschung sollte Therapiezufriedenheit, unerfüllte Bedürfnisse und Patientenperspektive vor dem Launch abbilden, um Dossiers und Preisverhandlungen zu stützen.',
    },
    {
      question: 'Welche Rolle spielen Kassenärztliche Vereinigungen (KVen)?',
      answer:
        'KVen steuern Honorar- und Wirtschaftlichkeitslogik in der vertragsärztlichen Versorgung. Ihre Prüfungen beeinflussen Verordnungsverhalten und erzeugen regionale Unterschiede in der Marktsituation.',
    },
    {
      question: 'Welche RWE-Datenquellen stehen in Deutschland zur Verfügung?',
      answer:
        'GKV-Routinedaten, FDZ Gesundheit, InGef, WIdO/AOK, Fachgesellschaftsregister, Krebsregister, ePA-Infrastruktur sowie Verordnungsdaten von IQVIA und Insight Health — jeweils mit Ethik- und Datenschutzfreigaben.',
    },
    {
      question: 'Wie kann BioNixus beim Markteintritt in Deutschland helfen?',
      answer:
        'Mit Marktstrukturanalysen, Ärztebefragungen, KOL-Mapping, RWE-Design, AMNOG-begleitender Forschung und Launch-Monitoring für pharmazeutische Teams.',
    },
  ],
  'amnog-frueher-nutzen-marktzugang-2026': [
    {
      question: 'Was ist der Unterschied zwischen dem IQWiG-Bericht und dem G-BA-Beschluss?',
      answer:
        'Das IQWiG erstellt eine wissenschaftliche Dossierbewertung mit Empfehlung zum Zusatznutzen. Der G-BA entscheidet verbindlich — oft nach Anhörung — und sein Beschluss bildet die Basis für die Preisverhandlungen.',
    },
    {
      question: 'Welche Bedeutung hat die zweckmäßige Vergleichstherapie (ZVT)?',
      answer:
        'Die ZVT ist der Maßstab für den Zusatznutzen. Weicht das Studiendesign ab, fehlt oft ein direkter Vergleich — mit negativem Bewertungsrisiko. Frühzeitige ZVT-Abstimmung ist essenziell.',
    },
    {
      question: 'Wie werden Orphan Drugs im AMNOG-Verfahren behandelt?',
      answer:
        'Mit EU-Orphan-Designation gilt automatisch Zusatznutzen, solange der GKV-Umsatz 50 Mio. € nicht überschreitet. Darüber hinaus ist eine vollständige Nutzenbewertung erforderlich.',
    },
    {
      question: 'Was passiert, wenn kein Zusatznutzen festgestellt wird?',
      answer:
        'Der Erstattungsbetrag orientiert sich am Kostenniveau der Vergleichstherapie. Das Produkt kann weiter vermarktet werden, aber oft zu wirtschaftlich unattraktiven Konditionen.',
    },
    {
      question: 'Wie beeinflusst der AMNOG-Beschluss Preise in anderen EU-Ländern?',
      answer:
        'Viele EU-Märkte nutzen deutsche Erstattungspreise als Referenz. AMNOG-Ergebnisse sollten daher in einer kohärenten Pan-EU-Preisstrategie mitgedacht werden.',
    },
  ],
};

export function getGermanBlogFaqItems(
  slug: string | undefined,
  title: string | undefined,
  sanityFaq: BlogFaqItem[] = [],
): BlogFaqItem[] {
  if (slug && GERMAN_BLOG_FAQ_BY_SLUG[slug]) {
    return GERMAN_BLOG_FAQ_BY_SLUG[slug];
  }
  if (sanityFaq.length > 0 && !looksLikeEnglishFaq(sanityFaq)) {
    return sanityFaq;
  }
  const focus = title?.split(':')[0]?.trim() || 'dieser Leitfaden';
  return GENERIC_GERMAN_BLOG_FAQ.map((item, index) =>
    index === 0
      ? {
          ...item,
          question: `Für wen ist ${focus} gedacht?`,
        }
      : item,
  );
}

const EN_SUMMARY_MARKERS =
  /\b(market access and healthcare market research guidance|without substituting clinical advice|summarizes payer|Scope your)\b/i;

export function looksLikeEnglishExecutiveSummary(text: string): boolean {
  return EN_SUMMARY_MARKERS.test(text);
}

const GERMAN_EXECUTIVE_SUMMARY_BY_SLUG: Record<string, string> = {
  'deutsche-pharmaunternehmen-2026-pipeline-updates':
    'Deutsche Pharmaunternehmen 2026: Marktzugang und Gesundheitsmarktforschung in Deutschland für pharmazeutische und MedTech-Commercial-Teams. BioNixus fasst Kostenträger-, Zulassungs- und Insight-Implikationen für AMNOG, GKV-Erstattung und EU-HTA zusammen — ohne klinische Beratung zu ersetzen.',
  'gesundheitsmarkt-deutschland-2026':
    'Gesundheitsmarkt Deutschland 2026: Krankenhausreform, Digitalisierung und Pharma-Trends — mit Fokus auf GKV, AMNOG, EU-HTA und Erstattungsmechanismen für Commercial- und Access-Teams in Deutschland und Europa.',
};

export function getGermanExecutiveSummary(title: string | undefined, slug: string | undefined): string {
  if (slug && GERMAN_EXECUTIVE_SUMMARY_BY_SLUG[slug]) {
    return GERMAN_EXECUTIVE_SUMMARY_BY_SLUG[slug];
  }
  const focus = title?.split(':')[0]?.trim() || 'Dieser Artikel';
  return `${focus}: Marktzugang und Gesundheitsmarktforschung in Deutschland und Europa für pharmazeutische und MedTech-Commercial-Teams. BioNixus fasst Kostenträger-, Zulassungs- und Insight-Implikationen zusammen — ohne klinische Beratung zu ersetzen.`;
}

const TOC_HEADING_DE_BY_ANCHOR: Record<string, string> = {
  'key-insights': 'Wichtigste Erkenntnisse auf einen Blick',
  'detailed-analysis': 'Detaillierte Analyse',
  'deutschland-marktzugang': 'Marktzugang und Erstattung in Deutschland',
  'europe-implications': 'Marktzugang in Europa — Implikationen für Sponsoren',
  'bionixus-advisory': 'BioNixus Beratung',
  'related-reading': 'Weiterführende Lektüre',
  'market-context': 'Markt- und Policy-Kontext',
  'definitions-use-cases': 'Definitionen und Anwendungsfälle',
  'operational-playbook': 'Operatives Playbook für Insight- und Access-Teams',
  'future-outlook': 'Ausblick 2026 und darüber hinaus',
  'gcc-implications': 'Marktzugang und Erstattung in Deutschland',
  faq: 'Häufig gestellte Fragen',
  einleitung: 'Einleitung',
  fazit: 'Fazit',
};

export function localizeTocForGerman<T extends { heading?: string; anchor?: string }>(
  items: T[] | null | undefined,
): T[] | null {
  if (!items?.length) return null;
  return items.map((item) => {
    const anchor = item.anchor?.replace(/^#/, '') ?? '';
    const deHeading = anchor ? TOC_HEADING_DE_BY_ANCHOR[anchor] : undefined;
    return deHeading ? { ...item, heading: deHeading } : item;
  });
}

function portableTextToPlainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .flatMap((block) => {
      if (block && typeof block === 'object' && 'children' in block && Array.isArray(block.children)) {
        return block.children.map((child: { text?: string }) => child.text ?? '');
      }
      return [];
    })
    .join(' ')
    .trim();
}

export function resolveGermanExecutiveSummary(
  title: string | undefined,
  slug: string | undefined,
  summary: string | PortableTextBlock[] | null,
): string | PortableTextBlock[] | null {
  if (!summary) {
    return getGermanExecutiveSummary(title, slug);
  }
  const plain = typeof summary === 'string' ? summary : portableTextToPlainText(summary);
  if (!plain || looksLikeEnglishExecutiveSummary(plain)) {
    return getGermanExecutiveSummary(title, slug);
  }
  return summary;
}
