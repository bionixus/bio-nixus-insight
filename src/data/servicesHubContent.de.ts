import {
  BarChart3,
  Users,
  Landmark,
  Search,
  Microscope,
  Map,
  Phone,
  Monitor,
  UserCheck,
  Eye,
  TrendingUp,
  MessageCircle,
  MousePointerClick,
  Layers,
  LineChart,
  Stethoscope,
  Building2,
  ShoppingBag,
  Cpu,
} from 'lucide-react';
import type {
  CommercialOffering,
  HealthcareService,
  MethodologyService,
} from './servicesHubContent';

export const DE_HERO_METRICS = [
  { value: 'EU5+UK', label: 'Kernmärkte mit Länder-Tiefe' },
  { value: '6', label: 'Pharmazeutische Module' },
  { value: 'DSGVO', label: 'Konforme Feldforschung' },
  { value: '9+', label: 'Erhebungsmethoden' },
] as const;

export const DE_HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    slug: 'quantitative-research',
    title: 'Quantitative Marktforschung & Ärztebefragungen',
    summary:
      'Statistisch abgesicherte Ärzte-, Kostenträger- und Klinikumfragen in Deutschland, EU5 und UK — online, telefonisch (CATI) und face-to-face (CAPI) mit definierten Stichproben, Quoten und Signifikanztests für G-BA-, IQWiG- und AMNOG-relevante Entscheidungen.',
    icon: BarChart3,
    tags: ['Deutschland', 'EU5', 'Kostenträger'],
  },
  {
    slug: 'qualitative-research',
    title: 'Qualitative Marktforschung & Experten-Erkenntnisse',
    summary:
      'Experteninterviews, Fokusgruppen und Advisory Boards mit KOLs, Behandlern und Krankenhaus-Entscheidern — um Adoption, Versorgungsrealität und Marktzugang in Deutschland und Europa zu erklären, nicht nur zu messen.',
    icon: Users,
    tags: ['KOL', 'Advisory Boards', 'Behandlungspfade'],
  },
  {
    slug: 'market-access',
    title: 'Marktzugang, HTA & Erstattungsstrategie',
    summary:
      'Evidenzbasierte Preis-, Kostenträger- und Wertstory-Programme für Deutschland (G-BA, IQWiG, AMNOG), Frankreich (HAS), UK (NICE) und weitere EU-Märkte — abgestimmt auf nationale HTA- und Erstattungslogik.',
    icon: Landmark,
    tags: ['HTA', 'AMNOG', 'NICE'],
  },
  {
    slug: 'competitive-intelligence',
    title: 'Wettbewerbsanalyse',
    summary:
      'Pipeline- und Landschaftsanalysen, Markteinführungsreife, Biosimilar- und Generika-Szenarien — als belastbare Grundlage für Portfolio- und Launch-Entscheidungen in Europa.',
    icon: Search,
    tags: ['Pipeline', 'Markteinführung', 'Biosimilars'],
  },
  {
    slug: 'clinical-trial-support',
    title: 'Unterstützung klinischer Studien',
    summary:
      'Standort- und Prüfer-Identifikation, Rekrutierungs-Durchführbarkeit, Protokoll-Feedback von Behandlern und RWE-Planung in Deutschland, EU5 und angrenzenden europäischen Märkten.',
    icon: Microscope,
    tags: ['Durchführbarkeit', 'RWE', 'Prüfer'],
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL- & Interessengruppen-Kartierung',
    summary:
      'Identifikation von Meinungsführern, Gremien und Beschaffungsstimmen in deutschen Universitätskliniken, EU-Fachgesellschaften und nationalen HTA-Prozessen — inklusive Patientenreise und Behandlungspfadanalyse.',
    icon: Map,
    tags: ['Interessengruppen', 'Patientenreise', 'Einfluss'],
  },
];

export const DE_METHODOLOGY_SERVICES: MethodologyService[] = [
  {
    id: 'cati',
    title: 'CATI — Telefonische Befragung',
    abbr: 'CATI',
    summary:
      'Computerunterstützte Telefoninterviews für schwer erreichbare Ärzte, Kostenträger und B2B-Entscheider — mit Live-Supervision, Quotensteuerung und deutsch-englischer Moderation in DACH und EU5.',
    icon: Phone,
    industries: 'Pharmazeutik · B2B · Finanzdienstleistungen',
    href: '/services/quantitative-research',
  },
  {
    id: 'cawi',
    title: 'CAWI — Online-Umfragen',
    abbr: 'CAWI',
    summary:
      'Skalierbare Web-Umfragen für Ärzte-Tracker, Markenstudien und Panels — mobile-first, Betrugsprävention und harmonisierte EU-Mehrländer-Auswertung.',
    icon: Monitor,
    industries: 'Gesundheitswesen · Alle Branchen',
    href: '/services/quantitative-research',
  },
  {
    id: 'capi',
    title: 'CAPI — Face-to-face-Feldforschung',
    abbr: 'CAPI',
    summary:
      'Persönliche Interviews für Krankenhaus-Audits, Apotheken- und Retail-Audits sowie Vor-Ort-B2B-Gespräche — mit Offline-fähigen Geräten und Supervisor-QC in Deutschland und Europa.',
    icon: UserCheck,
    industries: 'Gesundheitswesen · Handel · FMCG',
    href: '/services/quantitative-research',
  },
  {
    id: 'focus-groups',
    title: 'Fokusgruppen & Mini-Gruppen',
    summary:
      'Moderierte Gruppendiskussionen — vor Ort, virtuell oder hybrid — für Konzepttests und Botschaftsoptimierung mit simultaner Übersetzung auf Deutsch, Englisch und Französisch.',
    icon: MessageCircle,
    industries: 'Pharmazeutik · B2C · Tourismus',
    href: '/services/qualitative-research',
  },
  {
    id: 'mystery-shopping',
    title: 'Mystery Shopping & Audit-Programme',
    summary:
      'Strukturierte Service-Audits für Bankfilialen, Hotellerie, Apotheken und Gesundheits-Front-of-House — bewertet nach Ihren Servicestandards.',
    icon: Eye,
    industries: 'Banking · Handel · Hotellerie',
    href: '/contact',
  },
  {
    id: 'price-elasticity',
    title: 'Preiselastizität & Conjoint',
    summary:
      'Van-Westendorp-, Gabor-Granger- und Discrete-Choice-Modelle für Preissensitivität und Zahlungsbereitschaft — für Arzneimittel-Launches, FMCG und Versicherungsprodukte in Europa.',
    icon: TrendingUp,
    industries: 'Pharmazeutik · FMCG · Versicherung',
    href: '/contact',
  },
  {
    id: 'online-behaviour',
    title: 'Online-Verhaltenstracking',
    summary:
      'Digitale Journey-Analysen und Klickstream-Studien — kombiniert mit Umfragedaten für E-Commerce, Banking und Gesundheitsportale.',
    icon: MousePointerClick,
    industries: 'B2C · E-Commerce · Health-Tech',
    href: '/contact',
  },
  {
    id: 'brand-tracking',
    title: 'Marken-Tracking & Bekanntheit',
    summary:
      'Kontinuierliche oder Pulse-Tracker für Bekanntheit, Consideration, NPS und Share-of-Voice — CAWI oder CATI mit Dashboards für Marketing-Teams.',
    icon: LineChart,
    industries: 'FMCG · Telekom · OTC',
    href: '/services/competitive-intelligence',
  },
  {
    id: 'segmentation',
    title: 'Segmentierung & MaxDiff',
    summary:
      'Bedarfsgestützte Segmentierung, Latent-Class-Analysen und MaxDiff-Priorisierung für B2B- und B2C-Portfolioentscheidungen.',
    icon: Layers,
    industries: 'B2B · Technologie · Konsum',
    href: '/services/quantitative-research',
  },
];

export const DE_COMMERCIAL_OFFERINGS: CommercialOffering[] = [
  {
    to: '/pharma-healthcare-industries',
    title: 'Pharmazeutik, Biotechnologie & Medizintechnik',
    summary:
      'Unser Kern — Arzneimittel-Markteinführung, Marktzugang, Diagnostik, Biotechnologie und Consumer Health mit der Stichproben- und Compliance-Disziplin regulierter Kategorien in Deutschland und Europa.',
    icon: Stethoscope,
    examples: 'Onkologie · seltene Erkrankungen · Medizinprodukte · OTC · Impfstoffe',
  },
  {
    to: '/b2b-industries',
    title: 'B2B- & Unternehmensforschung',
    summary:
      'Buyer-Committee-Mapping, Marktgrößen und Wettbewerbsanalyse für Technologie, Energie, Immobilien, öffentlichen Sektor und Industrie — mit starker Umsetzung in DACH und EU.',
    icon: Building2,
    examples: 'Technologie · Immobilien · Energie · Industrie',
  },
  {
    to: '/b2c-industries',
    title: 'B2C- & Verbraucherforschung',
    summary:
      'Marken-Tracking, Käuferreise, Segmentierung und Nachfragestudien für FMCG, Handel, Finanzdienstleistungen, Telekom und Automotive in europäischen Märkten.',
    icon: ShoppingBag,
    examples: 'Banking · Handel · Tourismus · FMCG · Telekom',
  },
  {
    to: '/bionixus-industries',
    title: 'KI, IT & Wachstumsunternehmen',
    summary:
      'Win-Loss-Analysen, Buyer-Persona-Forschung und GTM-Validierung für B2B-Software, Cybersicherheit, Health-Tech-KI und IT-Dienstleistungen.',
    icon: Cpu,
    examples: 'SaaS · KI-Start-ups · IT-Services · Health-Tech',
  },
];

export const DE_HUB_LINKS = [
  { to: '/healthcare-market-research/germany', label: 'Gesundheitsmarktforschung Deutschland' },
  { to: '/healthcare-market-research', label: 'Gesundheitsmarktforschungs-Hub Europa' },
  { to: '/blog/pharmaceutical-market-research-uk-2026', label: 'Pharmazeutische Marktforschung UK (2026)' },
  { to: '/blog/healthcare-market-research-europe-2026', label: 'Gesundheitsmarktforschung Europa (2026)' },
  { to: '/methodology', label: 'Methodik & Compliance' },
  { to: '/case-studies', label: 'Fallstudien' },
] as const;

export const DE_SERVICE_FAQ = [
  {
    question: 'Deckt BioNixus neben Deutschland auch andere europäische Märkte ab?',
    answer:
      'Ja. Unser Schwerpunkt liegt auf Deutschland, EU5 und UK — ergänzt durch Schweiz, Benelux, Skandinavien und pan-europäische Programme. Dieselbe Methodik gilt auch für B2B- und B2C-Kategorien; Details finden Sie im Branchen-Hub.',
  },
  {
    question: 'Welche Erhebungsmethode passt — CATI, CAWI oder CAPI?',
    answer:
      'CAWI eignet sich für große Online-Panels und Tracker. CATI erreicht Ärzte und Kostenträger, die online schwer erreichbar sind. CAPI ist nötig für Krankenhaus-Audits und Vor-Ort-Interviews. Wir empfehlen die passende Methode — oder Mixed-Mode — nach Zielgruppe, Markt und Timeline.',
  },
  {
    question: 'Welche Leistungen passen zu einer Markteinführung in Deutschland?',
    answer:
      'Typisch sind quantitative Ärztebefragungen, qualitative KOL-Tiefe und Marktzugang mit G-BA/IQWiG/AMNOG-Bezug. Module werden an Ihre Phase angepasst — von Positionierung über Preis bis HTA — und an Ihren Governance-Kalender in Deutschland und Europa ausgerichtet.',
  },
  {
    question: 'Kann ich ein einzelnes Modul oder ein integriertes EU-Programm beauftragen?',
    answer:
      'Beides. Jede Leistungskarte verlinkt auf eine Detailseite. Sie können eine CATI-Welle, Fokusgruppen, Preiselastizitätsstudien oder ein Mehrländer-Programm mit gemeinsamer Stichprobenlogik und Reporting beauftragen.',
  },
  {
    question: 'Wie ist Ihre Abdeckung in Deutschland und Europa?',
    answer:
      'Wir führen Feldforschung in Deutschland, EU5, UK und weiteren europäischen Märkten durch — mit Büros in London und Netzwerken für DACH, Benelux und Südeuropa. Globale Programme bleiben möglich, wenn Ihre Strategie über Europa hinausgeht.',
  },
  {
    question: 'Wie schnell erhalte ich ein Angebot?',
    answer:
      'Senden Sie Ziel, Zielgruppe, Branche und Zeitplan über das Kontaktformular. In der Regel erhalten Sie innerhalb eines Werktags einen maßgeschneiderten Methodenvorschlag.',
  },
] as const;

export const DE_RECOVERY_LINK_LABELS: Record<string, string> = {
  '/blog/healthcare-market-research-europe-2026': 'Gesundheitsmarktforschung Europa (2026-Leitfaden)',
  '/blog/pharmaceutical-market-research-uk-2026': 'Pharmazeutische Marktforschung UK (2026-Leitfaden)',
  '/blog/quantitative-market-research-and-market-access': 'Quantitative Marktforschung und Marktzugang',
  '/blog/hospital-market-research': 'Krankenhaus-Marktforschung für Pharma',
  '/healthcare-market-research/germany': 'Gesundheitsmarktforschung Deutschland',
  '/healthcare-market-research/france': 'Gesundheitsmarktforschung Frankreich',
  '/healthcare-market-research/united-kingdom': 'Gesundheitsmarktforschung Vereinigtes Königreich',
};

export const DE_SERVICES_HUB_COPY = {
  seo: {
    title: 'Pharmazeutische Marktforschung Deutschland & Europa | BioNixus',
    description:
      'Pharmazeutische und Gesundheitsmarktforschung mit Schwerpunkt Deutschland, EU5 und UK — quantitative und qualitative Ärztebefragungen, HTA/Marktzugang, KOL-Kartierung und DSGVO-konforme Feldforschung.',
    canonical: 'https://www.bionixus.com/de/services',
  },
  breadcrumb: { home: 'Startseite', services: 'Leistungen' },
  hero: {
    eyebrow: 'Deutschland & Europa',
    h1: 'Pharmazeutische und Gesundheitsmarktforschung für Deutschland und Europa',
    subtitle:
      'BioNixus führt erfahrungsgeleitete Programme in Deutschland, EU5 und UK durch — von Ärztebefragungen und HTA-Strategie bis CATI, CAWI, CAPI, Fokusgruppen und Preiselastizität. Eine Methodik, ein Senior-Team, zugeschnitten auf Ihre Markteinführungs- oder Marktzugangsentscheidung.',
    ctaProposal: 'Angebot anfordern',
    ctaMethodology: 'Forschungsmethodik',
  },
  intro: {
    h2: 'Drei verbundene Forschungsportfolios',
    columns: [
      {
        h3: 'Pharmazeutik & Gesundheitswesen',
        body: 'Regulierte Kategorien mit verifizierten HCP- und Kostenträger-Stichproben, HTA-orientierter Auswertung und markteinführungsreifer Evidenz für Deutschland, EU5, UK und angrenzende EU-Märkte.',
      },
      {
        h3: 'Methodik & Feldforschung',
        body: 'CATI, CAWI, CAPI, Fokusgruppen, Mystery Shopping, Preiselastizität, Marken-Tracking und digitales Verhalten — kombinierbar in einem Programm mit gemeinsamer QC und Reporting.',
      },
      {
        h3: 'Kommerziell & branchenübergreifend',
        body: 'Nicht-pharmazeutische Programme für Unternehmenskäufer, institutionelle Entscheider und Verbrauchermärkte — über den',
      },
    ],
  },
  healthcare: {
    h2: 'Pharmazeutische & Gesundheits-Module',
    intro:
      'Quantitative und qualitative Methoden, Marktzugang, Wettbewerbsanalyse, Studienunterstützung und Interessengruppen-Kartierung — kombinierbar zu einem europäischen Programm.',
    viewScope: 'Leistungsumfang ansehen',
  },
  methodology: {
    eyebrow: 'Feldforschung & Analytik',
    h2: 'Methoden für Pharma und Branchen',
    intro:
      'Dasselbe Senior-Team führt CATI-, CAWI- und CAPI-Feldforschung für Ärzte-Panels und B2B-Programme durch — plus Mystery Shopping, Preiselastizität, Fokusgruppen und Online-Tracking, wo Ihre Kategorie es erfordert.',
    learnMore: 'Mehr erfahren',
  },
  commercial: {
    h2: 'Kommerzielle & branchenübergreifende Forschung',
    intro:
      'Nicht-pharmazeutische Programme für Unternehmenskäufer, institutionelle Entscheider und Verbrauchermärkte — Schwerpunkt DACH, EU5 und UK.',
    explore: 'Segment entdecken',
  },
  links: {
    h2: 'Verwandte Forschungs-Hubs & Branchen',
    intro:
      'Starten Sie vom Gesundheits-Hub, einem Branchensegment oder einem Länderverzeichnis — je nach Kategorie und Geografie.',
    moreGuides: 'Weitere Forschungsleitfäden',
    linksCount: 'Verknüpfungen',
  },
  faq: { h2: 'Häufig gestellte Fragen' },
  jsonLd: {
    collectionName: 'Pharmazeutische Marktforschung Deutschland & Europa',
    collectionDescription:
      'Pharmazeutische und Gesundheitsmarktforschung mit Schwerpunkt Deutschland und Europa — quantitative und qualitative Methoden, HTA/Marktzugang und DSGVO-konforme Feldforschung.',
  },
} as const;
