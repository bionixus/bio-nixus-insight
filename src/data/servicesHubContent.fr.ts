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
  Globe2,
} from 'lucide-react';
import type {
  CommercialOffering,
  HealthcareService,
  MethodologyService,
} from './servicesHubContent';

export const FR_HERO_METRICS = [
  { value: 'EU5+UK', label: 'Marchés cœur avec profondeur pays' },
  { value: '6', label: 'Modules pharmaceutiques' },
  { value: 'RGPD', label: 'Terrain conforme' },
  { value: '9+', label: 'Modes de recueil' },
] as const;

export const FR_HEALTHCARE_SERVICES: HealthcareService[] = [
  {
    slug: 'quantitative-research',
    title: 'Études quantitatives & enquêtes auprès des médecins',
    summary:
      'Enquêtes statistiquement robustes auprès des médecins, des payeurs et des décideurs hospitaliers en France, dans l\'EU5 et au Royaume-Uni — en ligne, par téléphone (CATI) et en face-à-face (CAPI), avec des échantillons dimensionnés, des quotas et des tests de significativité pour les décisions liées à la HAS, à la Commission de la Transparence et au CEPS.',
    icon: BarChart3,
    tags: ['France', 'EU5', 'Payeurs'],
  },
  {
    slug: 'qualitative-research',
    title: 'Études qualitatives & regards d\'experts',
    summary:
      'Entretiens approfondis, focus groups et advisory boards avec des KOL, des prescripteurs et des décideurs hospitaliers — pour expliquer l\'adoption, la réalité des parcours de soins et les conditions d\'accès en France et en Europe, et pas seulement les mesurer.',
    icon: Users,
    tags: ['KOL', 'Advisory boards', 'Parcours de soins'],
  },
  {
    slug: 'market-access',
    title: 'Accès au marché, HTA & stratégie de remboursement',
    summary:
      'Programmes de prix, d\'engagement payeurs et de value story fondés sur les preuves pour la France (HAS, Commission de la Transparence, CEPS), l\'Allemagne (G-BA, IQWiG), le Royaume-Uni (NICE) et les autres marchés européens — alignés sur la logique nationale d\'évaluation HTA et de remboursement.',
    icon: Landmark,
    tags: ['HTA', 'HAS', 'NICE'],
  },
  {
    slug: 'competitive-intelligence',
    title: 'Veille concurrentielle',
    summary:
      'Analyses de pipeline et de paysage concurrentiel, revues de préparation au lancement, scénarios biosimilaires et génériques — comme base solide pour vos décisions de portefeuille et de lancement en Europe.',
    icon: Search,
    tags: ['Pipeline', 'Lancement', 'Biosimilaires'],
  },
  {
    slug: 'clinical-trial-support',
    title: 'Appui aux essais cliniques',
    summary:
      'Identification des centres et des investigateurs, faisabilité du recrutement, retours de protocole auprès des prescripteurs et planification RWE en France, dans l\'EU5 et sur les marchés européens adjacents.',
    icon: Microscope,
    tags: ['Faisabilité', 'RWE', 'Investigateurs'],
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'Cartographie des KOL & des parties prenantes',
    summary:
      'Identification des leaders d\'opinion, des comités et des voix achats dans les CHU français, les sociétés savantes européennes et les processus HTA nationaux — parcours patient et analyse des parcours de soins inclus.',
    icon: Map,
    tags: ['Parties prenantes', 'Parcours patient', 'Influence'],
  },
];

export const FR_METHODOLOGY_SERVICES: MethodologyService[] = [
  {
    id: 'cati',
    title: 'CATI — entretiens téléphoniques',
    abbr: 'CATI',
    summary:
      'Entretiens téléphoniques assistés par ordinateur pour atteindre les médecins, les payeurs et les décideurs B2B difficilement joignables — supervision en direct, pilotage des quotas et modération français-anglais en France et dans l\'EU5.',
    icon: Phone,
    industries: 'Pharmaceutique · B2B · Services financiers',
    href: '/services/quantitative-research',
  },
  {
    id: 'cawi',
    title: 'CAWI — enquêtes en ligne',
    abbr: 'CAWI',
    summary:
      'Enquêtes web à grande échelle pour les trackers médecins, les études de marque et les panels — conception mobile-first, détection des fraudes et harmonisation multi-pays en Europe.',
    icon: Monitor,
    industries: 'Santé · Tous secteurs',
    href: '/services/quantitative-research',
  },
  {
    id: 'capi',
    title: 'CAPI — terrain en face-à-face',
    abbr: 'CAPI',
    summary:
      'Entretiens en présentiel pour les audits hospitaliers, les audits en officine et en distribution ainsi que les échanges B2B sur site — appareils utilisables hors ligne et contrôle qualité par superviseur en France et en Europe.',
    icon: UserCheck,
    industries: 'Santé · Distribution · PGC',
    href: '/services/quantitative-research',
  },
  {
    id: 'focus-groups',
    title: 'Focus groups & mini-groupes',
    summary:
      'Discussions de groupe modérées — en présentiel, à distance ou en format hybride — pour les tests de concept et l\'optimisation des messages, avec traduction simultanée en français, anglais et allemand.',
    icon: MessageCircle,
    industries: 'Pharmaceutique · B2C · Tourisme',
    href: '/services/qualitative-research',
  },
  {
    id: 'mystery-shopping',
    title: 'Mystery shopping & programmes d\'audit',
    summary:
      'Audits de service structurés pour les agences bancaires, l\'hôtellerie, les officines et l\'accueil des établissements de santé — évalués au regard de vos propres standards de service.',
    icon: Eye,
    industries: 'Banque · Distribution · Hôtellerie',
    href: '/contact',
  },
  {
    id: 'price-elasticity',
    title: 'Élasticité-prix & conjoint',
    summary:
      'Modèles Van Westendorp, Gabor-Granger et choix discrets pour mesurer la sensibilité au prix et le consentement à payer — lancements de médicaments, PGC et produits d\'assurance en Europe.',
    icon: TrendingUp,
    industries: 'Pharmaceutique · PGC · Assurance',
    href: '/contact',
  },
  {
    id: 'online-behaviour',
    title: 'Suivi des comportements en ligne',
    summary:
      'Analyses de parcours digitaux et études de clickstream — combinées aux données déclaratives pour l\'e-commerce, la banque et les portails santé.',
    icon: MousePointerClick,
    industries: 'B2C · E-commerce · Health-tech',
    href: '/contact',
  },
  {
    id: 'brand-tracking',
    title: 'Tracking de marque & notoriété',
    summary:
      'Trackers continus ou pulse pour la notoriété, la considération, le NPS et le share of voice — en CAWI ou CATI, avec des tableaux de bord exploitables par les équipes marketing.',
    icon: LineChart,
    industries: 'PGC · Télécoms · OTC',
    href: '/services/competitive-intelligence',
  },
  {
    id: 'segmentation',
    title: 'Segmentation & MaxDiff',
    summary:
      'Segmentation par besoins, analyses en classes latentes et priorisation MaxDiff pour les décisions de portefeuille B2B et B2C.',
    icon: Layers,
    industries: 'B2B · Technologie · Consommation',
    href: '/services/quantitative-research',
  },
];

export const FR_COMMERCIAL_OFFERINGS: CommercialOffering[] = [
  {
    to: '/services/cross-industry',
    title: 'Études de marché multisectorielles',
    summary:
      'Page dédiée au parcours Track B pour les commanditaires hors santé — études quantitatives et qualitatives multi-pays en Europe et au MENA pour les PGC, les services financiers, la technologie, l\'industrie et le secteur public.',
    icon: Globe2,
    examples: 'PGC · banque · tech · industrie · secteur public',
  },
  {
    to: '/pharma-healthcare-industries',
    title: 'Pharmaceutique, biotechnologies & dispositifs médicaux',
    summary:
      'Notre cœur de métier — lancement de médicaments, accès au marché, diagnostics, biotechnologies et santé grand public, avec la rigueur d\'échantillonnage et de conformité qu\'exigent les catégories réglementées en France et en Europe.',
    icon: Stethoscope,
    examples: 'Oncologie · maladies rares · dispositifs médicaux · OTC · vaccins',
  },
  {
    to: '/b2b-industries',
    title: 'Études B2B & grands comptes',
    summary:
      'Cartographie des comités d\'achat, dimensionnement de marché et veille concurrentielle pour la technologie, l\'énergie, l\'immobilier, le secteur public et l\'industrie — avec une exécution solide en France et dans l\'UE.',
    icon: Building2,
    examples: 'Technologie · immobilier · énergie · industrie',
  },
  {
    to: '/b2c-industries',
    title: 'Études B2C & consommateurs',
    summary:
      'Tracking de marque, parcours d\'achat, segmentation et études de demande pour les PGC, la distribution, les services financiers, les télécoms et l\'automobile sur les marchés européens.',
    icon: ShoppingBag,
    examples: 'Banque · distribution · tourisme · PGC · télécoms',
  },
  {
    to: '/bionixus-industries',
    title: 'IA, IT & entreprises en croissance',
    summary:
      'Analyses win-loss, recherche de personas acheteurs et validation go-to-market pour les logiciels B2B, la cybersécurité, l\'IA en santé et les services informatiques.',
    icon: Cpu,
    examples: 'SaaS · start-up IA · services IT · health-tech',
  },
];

export const FR_HUB_LINKS = [
  { to: '/healthcare-market-research/france', label: 'Études de marché santé France' },
  { to: '/healthcare-market-research', label: 'Hub études de marché santé Europe' },
  { to: '/services/cross-industry', label: 'Études de marché multisectorielles (Track B)' },
  { to: '/blog/pharmaceutical-market-research-uk-2026', label: 'Études de marché pharmaceutiques Royaume-Uni (2026)' },
  { to: '/blog/healthcare-market-research-europe-2026', label: 'Études de marché santé Europe (2026)' },
  { to: '/methodology', label: 'Méthodologie & conformité' },
  { to: '/case-studies', label: 'Études de cas' },
] as const;

export const FR_SERVICE_FAQ = [
  {
    question: 'BioNixus couvre-t-il d\'autres marchés européens que la France ?',
    answer:
      'Oui. Notre priorité est la France, l\'EU5 et le Royaume-Uni — complétés par la Suisse, la Belgique, les pays nordiques et des programmes paneuropéens. La même méthodologie s\'applique aux catégories B2B et B2C ; le détail figure dans le hub sectoriel.',
  },
  {
    question: 'Quel mode de recueil choisir — CATI, CAWI ou CAPI ?',
    answer:
      'Le CAWI convient aux grands panels en ligne et aux trackers. Le CATI atteint les médecins et les payeurs difficilement joignables en ligne. Le CAPI est indispensable pour les audits hospitaliers et les entretiens sur site. Nous recommandons le mode adapté — ou un dispositif mixte — selon la cible, le marché et le calendrier.',
  },
  {
    question: 'Quelles prestations conviennent à un lancement en France ?',
    answer:
      'Le schéma classique associe des enquêtes quantitatives auprès des médecins, une exploration qualitative auprès des KOL et un volet accès au marché centré sur la HAS, la Commission de la Transparence et le CEPS. Les modules sont ajustés à votre phase — positionnement, prix, dossier HTA — et calés sur votre calendrier de gouvernance en France et en Europe.',
  },
  {
    question: 'Peut-on commander un module isolé ou un programme européen intégré ?',
    answer:
      'Les deux. Chaque carte de prestation renvoie vers une page de périmètre dédiée. Vous pouvez commander une vague CATI, un programme de focus groups, une étude d\'élasticité-prix ou un dispositif multi-pays partageant la même logique d\'échantillonnage et le même reporting.',
  },
  {
    question: 'Quelle est votre couverture en France et en Europe ?',
    answer:
      'Nous réalisons le terrain en France, dans l\'EU5, au Royaume-Uni et sur d\'autres marchés européens, au sein d\'une capacité d\'exécution couvrant 48 pays — avec des bureaux et des réseaux terrain aux États-Unis, au Royaume-Uni, en Égypte, en Arabie saoudite, aux Émirats arabes unis, au Koweït et au Brésil. Les programmes mondiaux restent possibles lorsque votre stratégie dépasse l\'Europe.',
  },
  {
    question: 'Sous quel délai recevons-nous une proposition ?',
    answer:
      'Transmettez votre objectif, votre cible, votre secteur et votre calendrier via le formulaire de contact. Vous recevez en général une proposition méthodologique sur mesure sous un jour ouvré.',
  },
] as const;

export const FR_RECOVERY_LINK_LABELS: Record<string, string> = {
  '/blog/healthcare-market-research-europe-2026': 'Études de marché santé en Europe (guide 2026)',
  '/blog/pharmaceutical-market-research-uk-2026': 'Études de marché pharmaceutiques au Royaume-Uni (guide 2026)',
  '/blog/quantitative-market-research-and-market-access': 'Études quantitatives et accès au marché',
  '/blog/hospital-market-research': 'Études de marché hospitalières pour la pharma',
  '/healthcare-market-research/germany': 'Études de marché santé Allemagne',
  '/healthcare-market-research/france': 'Études de marché santé France',
  '/healthcare-market-research/uk': 'Études de marché santé Royaume-Uni',
};

export const FR_SERVICES_HUB_COPY = {
  seo: {
    title: 'Études de marché pharmaceutiques France & Europe | BioNixus',
    description:
      'Études de marché pharmaceutiques et santé en France, dans l\'EU5 et au Royaume-Uni : enquêtes médecins quantitatives et qualitatives, HTA et accès au marché, cartographie KOL, terrain conforme au RGPD.',
    canonical: 'https://www.bionixus.com/fr/services',
  },
  breadcrumb: { home: 'Accueil', services: 'Prestations' },
  hero: {
    eyebrow: 'France & Europe',
    h1: 'Études de marché pharmaceutiques et santé pour la France et l\'Europe',
    subtitle:
      'BioNixus conduit des programmes pilotés par des consultants seniors en France, dans l\'EU5 et au Royaume-Uni — des enquêtes médecins et de la stratégie HTA jusqu\'au CATI, CAWI, CAPI, focus groups et élasticité-prix. Une méthodologie, une équipe senior, calibrées sur votre décision de lancement ou d\'accès au marché.',
    ctaProposal: 'Demander une proposition',
    ctaMethodology: 'Méthodologie de recherche',
  },
  intro: {
    h2: 'Trois portefeuilles de recherche connectés',
    columns: [
      {
        h3: 'Pharmaceutique & santé',
        body: 'Catégories réglementées avec des échantillons vérifiés de professionnels de santé et de payeurs, une synthèse orientée HTA et des preuves prêtes pour le lancement en France, dans l\'EU5, au Royaume-Uni et sur les marchés européens adjacents.',
      },
      {
        h3: 'Méthodologies & terrain',
        body: 'CATI, CAWI, CAPI, focus groups, mystery shopping, élasticité-prix, tracking de marque et comportements digitaux — combinables dans un même programme avec un contrôle qualité et un reporting communs.',
      },
      {
        h3: 'Commercial & multisectoriel',
        body: 'Programmes hors pharma pour les acheteurs grands comptes, les décideurs institutionnels et les marchés de consommation. Point d\'entrée :',
      },
    ],
  },
  healthcare: {
    h2: 'Modules pharmaceutiques & santé',
    intro:
      'Méthodes quantitatives et qualitatives, accès au marché, veille concurrentielle, appui aux essais cliniques et cartographie des parties prenantes — combinables en un seul programme européen.',
    viewScope: 'Voir le périmètre',
  },
  methodology: {
    eyebrow: 'Terrain & analytique',
    h2: 'Méthodes pour la pharma et les autres secteurs',
    intro:
      'La même équipe senior conduit le terrain CATI, CAWI et CAPI pour les panels médecins et les programmes B2B — auxquels s\'ajoutent le mystery shopping, l\'élasticité-prix, les focus groups et le suivi des comportements en ligne lorsque votre catégorie l\'exige.',
    learnMore: 'En savoir plus',
  },
  commercial: {
    h2: 'Études commerciales & multisectorielles',
    intro:
      'Programmes hors pharma pour les acheteurs grands comptes, les décideurs institutionnels et les marchés de consommation — priorité à la France, à l\'EU5 et au Royaume-Uni.',
    explore: 'Découvrir le segment',
  },
  links: {
    h2: 'Hubs de recherche & secteurs associés',
    intro:
      'Partez du hub santé, d\'un segment sectoriel ou d\'un index pays — selon votre catégorie et votre géographie.',
    moreGuides: 'Autres guides de recherche',
    linksCount: 'liens',
  },
  faq: { h2: 'Questions fréquentes' },
  jsonLd: {
    collectionName: 'Études de marché pharmaceutiques France & Europe',
    collectionDescription:
      'Études de marché pharmaceutiques et santé centrées sur la France et l\'Europe — méthodes quantitatives et qualitatives, HTA et accès au marché, terrain conforme au RGPD.',
  },
} as const;
