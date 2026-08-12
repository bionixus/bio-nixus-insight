import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileSpreadsheet,
  FlaskConical,
  Globe2,
  LineChart,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const pageUrl = 'https://www.bionixus.com/fr/bionixus-market-research-middle-east';
const englishSiblingUrl = 'https://www.bionixus.com/bionixus-market-research-middle-east';
const pageImage = 'https://www.bionixus.com/images/quant-hcp-survey-executive.png';
const lastUpdated = '2026-03-17';
const editorialLead = 'Dr. Mohammad Alsaadany';
const contactHref = '/fr/contact';

const proofCards = [
  {
    metric: '< 15 jours',
    title: 'Premiers enseignements rapides',
    description:
      "Des preuves pilotes livrées vite pour réduire l'incertitude avant les décisions budgétaires majeures de lancement.",
  },
  {
    metric: '7 marchés prioritaires',
    title: 'Profondeur pays par pays',
    description:
      "Modèles d'exécution adaptés à l'Arabie saoudite, aux Émirats arabes unis, au Koweït, à l'Égypte, au Qatar, à Bahreïn et à Oman.",
  },
  {
    metric: 'Livrables transverses',
    title: 'Confiance décisionnelle',
    description:
      "Les équipes commerciales, médicales et accès au marché s'alignent sur une seule narration de preuves.",
  },
  {
    metric: 'Terrain contrôlé qualité',
    title: 'Intégrité des données',
    description:
      "Validation du recrutement, contrôles qualité des répondants et gouvernance d'échantillonnage transparente.",
  },
];

const countryCards = [
  {
    country: 'Arabie saoudite',
    regulator: 'SFDA',
    marketReality:
      "Achats institutionnels de grande ampleur via NUPCO et complexité du parcours public-privé.",
    researchImplication:
      "Cartographie approfondie des payeurs et des acheteurs, stratégie de compte au niveau segment.",
  },
  {
    country: 'Émirats arabes unis',
    regulator: 'DHA, DOH, MOHAP',
    marketReality:
      "Variations opérationnelles entre les émirats et poids important du secteur privé.",
    researchImplication:
      "Modélisation de la demande par canal et comparaison des parcours médecins par émirat.",
  },
  {
    country: 'Koweït',
    regulator: 'MOH Kuwait',
    marketReality:
      "Sensibilité du processus de formulaire hospitalier et influence décisionnelle concentrée.",
    researchImplication:
      "Séquençage précoce des parties prenantes et cartographie des objections institutionnelles.",
  },
  {
    country: 'Égypte',
    regulator: 'EDA',
    marketReality:
      "Opportunité d'échelle avec pressions d'accessibilité et segmentation des canaux.",
    researchImplication:
      "Cadres de sensibilité au prix et diagnostics des freins à l'adoption.",
  },
  {
    country: 'Qatar',
    regulator: 'MOPH',
    marketReality:
      "Exigences institutionnelles élevées et centres de demande concentrés (HMC, PHCC).",
    researchImplication:
      "Architecture ciblée d'influence KOL et hôpital pour accélérer l'activation.",
  },
  {
    country: 'Bahreïn',
    regulator: 'NHRA',
    marketReality:
      "Marché de taille modeste mais à haute valeur stratégique pour la comparabilité régionale.",
    researchImplication:
      "Échantillonnage précis et benchmarking inter-marchés pour orienter la réplication.",
  },
  {
    country: 'Oman',
    regulator: 'MOH Oman',
    marketReality:
      "Poids du secteur public et contraintes d'accès opérationnel selon les régions.",
    researchImplication:
      "Planification terrain localisée et conception de scénarios pragmatiques de déploiement.",
  },
];

const useCases = [
  {
    title: 'Cadrage pré-lancement',
    icon: Compass,
    summary:
      "Valider les besoins non satisfaits, segmenter l'opportunité et cartographier l'influence des parties prenantes avant la conception commerciale.",
    outputs: [
      'Tableau de bord de préparation au lancement',
      'Carte de priorité des parties prenantes',
      'Séquençage d\'activation par pays',
    ],
  },
  {
    title: 'Accès au marché et preuves de valeur',
    icon: ClipboardCheck,
    summary:
      "Évaluer les seuils de preuves des payeurs et les attentes des comités pour améliorer la stratégie de remboursement.",
    outputs: [
      'Test des messages de valeur',
      "Matrice des freins d'accès",
      'Note d\'implication HTA et payeurs',
    ],
  },
  {
    title: 'Optimisation post-lancement',
    icon: LineChart,
    summary:
      "Suivre les frictions d'adoption, la résonance des messages et les freins de conversion au niveau des comptes.",
    outputs: [
      "Diagnostics d'adoption",
      'Ajustements de segmentation recommandés',
      "Plan d'optimisation à 90 jours",
    ],
  },
];

const methodologyComparison = [
  {
    model: 'Qualitatif',
    bestFor: "Formulation d'hypothèses initiales et diagnostic narratif des parties prenantes.",
    strength: 'Grande profondeur contextuelle sur les parcours décisionnels par pays.',
    risk: "Direction forte mais non projetable statistiquement seul.",
    gccFit: "Idéal pour les sprints de pré-lancement ou de cadrage de preuves.",
  },
  {
    model: 'Quantitatif',
    bestFor: 'Dimensionnement de marché, priorisation de segments et mesure d\'adoption.',
    strength: 'Confiance statistique et comparabilité des vagues dans le temps.',
    risk: "Une gouvernance d'échantillonnage faible crée une fausse précision.",
    gccFit: "Idéal pour les décisions de séquençage de lancement et d'accès.",
  },
  {
    model: 'Hybride',
    bestFor: 'Combiner la profondeur comportementale et la confiance à l\'échelle décisionnelle.',
    strength: 'Équilibre entre certitude et contexte pour les équipes transverses.',
    risk: "Exige une discipline plus stricte sur les instruments et la gouvernance.",
    gccFit: "Idéal pour les programmes multi-pays CCG mêlant lancement et accès.",
  },
];

const executionBlueprint = [
  {
    tier: 'Jours 1-30',
    focus: 'Cadrage décisionnel et cartographie des risques',
    output: 'Hypothèses de marché prioritaires + architecture des parties prenantes',
  },
  {
    tier: 'Jours 31-60',
    focus: "Terrain et validation",
    output: 'Pack de preuves intermédiaire + diagnostic des frictions d\'accès',
  },
  {
    tier: 'Jours 61-90',
    focus: 'Activation et optimisation',
    output: "Plan d'action par pays + feuille de route liée aux KPI",
  },
];

const caseSnapshots = [
  {
    title: "Séquençage d'un lancement oncologique CCG",
    result: "-31 % d'incertitude sur la priorité de lancement",
    detail:
      "L'évidence transversale a mis en évidence où les freins payeurs et hospitaliers étaient les plus actionnables en premier.",
  },
  {
    title: "Étude d'accès multi-émirats aux EAU",
    result: '+22 % d\'adéquation des messages d\'accès',
    detail:
      "Différenciation des hypothèses de parcours médecin par émirat pour éviter une planification trop généralisée.",
  },
  {
    title: 'Diagnostics de demande institutionnelle en Arabie saoudite',
    result: 'Passage pilote-décision en 14 jours',
    detail:
      "Structuration des preuves quant + qual en un récit unique de gouvernance pour le commercial et l'accès.",
  },
];

const faqItems = [
  {
    question:
      "En quoi les études pharmaceutiques Moyen-Orient diffèrent-elles des études globales standardisées ?",
    answer:
      "Les programmes régionaux exigent une logique de parties prenantes propre à chaque pays, une interprétation des parcours payeurs et un test de faisabilité opérationnelle. Un modèle global unique capture rarement ces dynamiques, donc BioNixus adapte la méthodologie à la réalité décisionnelle locale tout en préservant la comparabilité inter-marchés.",
  },
  {
    question: "Que contient la première phase d'un engagement ?",
    answer:
      "Dans les deux premières semaines, les équipes reçoivent généralement l'alignement des objectifs, l'architecture des parties prenantes, le cadre d'hypothèses pilotes et une feuille de route de preuves orientée décision. Le but est de passer rapidement de l'intention aux priorités prêtes à être exécutées.",
  },
  {
    question: "Les livrables sont-ils utilisables par les équipes commerciales et médicales ?",
    answer:
      "Oui. Nous structurons les niveaux d'analyse pour que les fonctions commerciales, médicales et accès au marché puissent travailler à partir de la même base de preuves tout en préservant les implications spécifiques à chaque rôle et les priorités décisionnelles.",
  },
  {
    question: "En combien de temps BioNixus peut-il lancer un programme multi-pays au Moyen-Orient ?",
    answer:
      "La plupart des programmes démarrent par un court sprint de découverte puis passent rapidement en phase terrain une fois le périmètre et la conformité alignés. Les délais dépendent du mix marché et de la complexité des parties prenantes, mais des démarrages rapides sont possibles avec des questions décisionnelles claires.",
  },
  {
    question:
      "Quels contrôles qualité d'échantillon sont utilisés pour les études pharmaceutiques CCG ?",
    answer:
      "Les programmes appliquent des contrôles d'éligibilité par rôle, une validation du recrutement, une détection des doublons et une gouvernance de revue qualité avant l'analyse finale. Cela protège contre une composition d'échantillon faible et améliore la confiance décisionnelle.",
  },
  {
    question:
      "BioNixus peut-il conduire des études CCG combinant méthodes qualitatives et quantitatives ?",
    answer:
      "Oui. Les programmes hybrides sont conçus pour les équipes qui ont besoin à la fois d'interprétation contextuelle et de confiance statistique dans un même cycle décisionnel, particulièrement pour la planification de lancement et d'accès.",
  },
  {
    question:
      "Comment BioNixus accompagne-t-il les équipes de direction après la livraison des insights ?",
    answer:
      "Chaque mission inclut une phase d'activation pratique où les résultats sont convertis en actions à 30, 60 et 90 jours, avec une répartition des responsabilités et des jalons mesurables pour l'exécution commerciale et l'accès au marché.",
  },
  {
    question:
      "Quelle est la spécificité des études pharmaceutiques en Arabie saoudite via la SFDA et NUPCO ?",
    answer:
      "L'Arabie saoudite combine l'approbation SFDA (Saudi Food and Drug Authority) avec les achats centralisés via NUPCO (National Unified Procurement Company). Les études doivent modéliser à la fois la conformité réglementaire SFDA, la logique des appels d'offres NUPCO et la dynamique de formulaire hospitalier dans les groupes MOH, SEHA équivalents et hôpitaux militaires. BioNixus intègre ces trois couches dans une seule évidence exploitable.",
  },
];

const methodologySteps = [
  {
    name: 'Découvrir',
    icon: Globe2,
    detail:
      "Définir les questions décisionnelles, les hypothèses de marché et l'architecture des parties prenantes par pays.",
  },
  {
    name: 'Valider',
    icon: FlaskConical,
    detail:
      "Exécuter une recherche mixte avec des contrôles qualité, puis tester les hypothèses face à l'évidence terrain.",
  },
  {
    name: 'Activer',
    icon: BarChart3,
    detail:
      "Traduire les résultats en actions de lancement, d'accès et de croissance avec une feuille de route d'implémentation mesurable.",
  },
];

const first14DaysDeliverables = [
  "Atelier de priorité décisionnelle et hiérarchie des objectifs",
  "Carte d'influence des parties prenantes par pays et fonction",
  "Segmentation initiale et hypothèses de demande",
  "Architecture des instruments de recherche (draft)",
  "Registre des risques avec actions de mitigation pour le terrain",
  "Feuille de route de preuves exécutives et prochaines étapes immédiates",
];

const faqSchema = buildFAQSchema(faqItems, { pageUrl });
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Accueil', href: '/fr' },
  { name: 'Études de marché santé', href: '/fr/healthcare-market-research' },
  { name: 'Études Moyen-Orient', href: '/fr/bionixus-market-research-middle-east' },
]);

const pageJsonLd: object[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Études pharmaceutiques Moyen-Orient | BioNixus',
    url: pageUrl,
    description:
      "Études pharmaceutiques Moyen-Orient et CCG pour les décisions de lancement, d'accès au marché et de croissance commerciale.",
    primaryImageOfPage: pageImage,
    dateModified: lastUpdated,
    inLanguage: 'fr',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'BioNixus — études pharmaceutiques Moyen-Orient',
    description:
      "Programmes de recherche pharmaceutique et santé au Moyen-Orient pour les décisions de lancement, d'accès au marché et de croissance à travers le CCG et l'Afrique du Nord.",
    areaServed: [
      'Arabie saoudite',
      'Émirats arabes unis',
      'Koweït',
      'Égypte',
      'Qatar',
      'Bahreïn',
      'Oman',
    ],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: 'https://www.bionixus.com/favicon.ico',
    },
    image: pageImage,
    url: pageUrl,
  },
  faqSchema,
  breadcrumbSchema,
];

function trackCtaClick(ctaName: string, ctaPlacement: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'middle_east_cta_click', {
      cta_name: ctaName,
      cta_placement: ctaPlacement,
      page_path: '/fr/bionixus-market-research-middle-east',
    });
  }
}

const FrBionixusMarketResearchMiddleEast = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Études Pharmaceutiques Moyen-Orient | Programmes CCG | BioNixus"
        description="Études pharmaceutiques Moyen-Orient et CCG : lancement, accès au marché et croissance. BioNixus livre des programmes de preuves au niveau pays en Arabie saoudite, EAU, Koweït, Qatar, Bahreïn et Oman."
        canonical={pageUrl}
        ogImage={pageImage}
        jsonLd={pageJsonLd}
      />

      <Navbar />

      <main className="pb-20 md:pb-0">
        <BreadcrumbNav
          items={[
            { name: 'Accueil', href: '/fr' },
            { name: 'Études de marché santé', href: '/fr/healthcare-market-research' },
            { name: 'Études Moyen-Orient', href: '/fr/bionixus-market-research-middle-east' },
          ]}
        />

        <section className="section-padding pt-14 pb-12 bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep text-primary-foreground relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-warm/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-gold-light/10 blur-3xl"
            aria-hidden
          />
          <div className="container-wide max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <p className="inline-flex items-center rounded-full border border-gold-warm/40 bg-gold-warm/10 text-gold-light text-sm px-3 py-1 mb-4">
                Études pharmaceutiques Moyen-Orient
              </p>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-white/5 text-primary-foreground/80 text-xs px-3 py-1 mb-4 ml-2">
                <CalendarDays className="w-3.5 h-3.5 text-gold-warm" />
                Dernière mise à jour : mars 2026
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-5 leading-tight">
                Études pharmaceutiques Moyen-Orient qui accélèrent les décisions de lancement au CCG
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
                BioNixus construit des études pharmaceutiques et de marché santé prêtes à la décision
                pour les équipes qui opèrent à travers le CCG et le Moyen-Orient élargi. Pour le
                contexte de service plus large, commencez par notre{' '}
                <Link
                  to="/healthcare-market-research"
                  className="text-gold-light underline underline-offset-4 hover:text-gold-warm"
                >
                  hub d'études de marché santé
                </Link>{' '}
                puis utilisez cette page pour la profondeur d'exécution au niveau pays.
              </p>
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
                Si vous évaluez des sociétés d'études de marché santé au Moyen-Orient, cette page
                explique comment BioNixus convertit l'intelligence régionale en décisions de
                préparation au lancement et d'accès au marché que les équipes peuvent exécuter
                rapidement. Version anglaise disponible :{' '}
                <Link
                  to="/bionixus-market-research-middle-east"
                  className="text-gold-light underline underline-offset-4 hover:text-gold-warm"
                >
                  BioNixus Market Research — Middle East
                </Link>
                .
              </p>
              <ul className="space-y-2 mb-7">
                <li className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold-warm mt-0.5 shrink-0" />
                  Réduire le risque de lancement grâce à des preuves payeurs et parties prenantes propres à chaque pays.
                </li>
                <li className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold-warm mt-0.5 shrink-0" />
                  Aligner commercial, médical et accès au marché sur un même cadre de preuves.
                </li>
                <li className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-gold-warm mt-0.5 shrink-0" />
                  Traduire les insights en plans d'action à 30, 60 et 90 jours.
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={contactHref}
                  onClick={() => trackCtaClick('book_strategy_call', 'hero_primary')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold-warm text-navy-deep font-semibold hover:bg-gold-light transition-colors"
                >
                  Réserver un appel stratégique (20 min)
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#proof-band"
                  onClick={() => trackCtaClick('see_proof', 'hero_secondary')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  Voir les preuves régionales
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-gold-warm/30 bg-white/5 backdrop-blur p-5 md:p-6 text-primary-foreground">
              <h2 className="text-xl font-display font-semibold mb-4 text-gold-light">
                Cockpit d'intelligence régionale
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">Marchés couverts</p>
                  <p className="text-xl font-semibold">7+</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">Modèle d'étude</p>
                  <p className="text-xl font-semibold">Qual + Quant</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">Résultat principal</p>
                  <p className="text-xl font-semibold">Clarté d'exécution</p>
                </div>
                <div className="rounded-lg border border-primary-foreground/10 p-3 bg-white/5">
                  <p className="text-xs text-primary-foreground/70">Usage prioritaire</p>
                  <p className="text-xl font-semibold">Lancement + Accès</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-primary-foreground/85">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-warm" />
                  Gouvernance terrain alignée RGPD
                </p>
                <p className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-gold-warm" />
                  Livrables structurés prêts à la décision
                </p>
                <p className="flex items-center gap-2">
                  <Users2 className="w-4 h-4 text-gold-warm" />
                  Cartographie payeurs et prestataires
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              En quoi les études pharmaceutiques Moyen-Orient diffèrent des données syndiquées globales
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                Les bases syndiquées globales capturent rarement les dynamiques au niveau des comptes
                qui déterminent les résultats de lancement au CCG : structures de lots d'appels d'offres
                NUPCO en Arabie saoudite, divergences de formulaires DHA vs DOH aux Émirats arabes unis,
                cycles d'achat de Hamad Medical Corporation au Qatar et déploiement de l'assurance
                santé universelle en Égypte qui redessine les bassins de population du Caire. Les
                programmes BioNixus Moyen-Orient sont conçus autour de ces réalités opérationnelles —
                pas de modèles importés des marchés américains ou européens.
              </p>
              <p>
                Une mission BioNixus Moyen-Orient typique commence par une carte décisionnelle : quelle
                séquence pays, quel niveau de partie prenante (prescripteur, pharmacien, payeur,
                acheteur) et quel seuil de preuves le comité d'accès exige. Le terrain combine ensuite
                des enquêtes quantitatives auprès des médecins ou des hôpitaux avec de la profondeur
                qualitative là où le message, la gestion des objections ou l'influence KOL restent à
                clarifier. Les livrables incluent le séquençage d'activation par pays, les cartes de
                priorité des parties prenantes et des plans d'action à 30/60/90 jours — pas des slides
                déconnectées du calendrier de lancement.
              </p>
              <p>
                Pour les équipes qui utilisent déjà IQVIA ou Kantar au global, BioNixus opère souvent
                comme le partenaire spécialiste MENA : des KPI harmonisés pour le reporting global mais
                l'exécution terrain, la modération en arabe et l'accès hospitalier gérés depuis Le Caire
                et les bureaux CCG.
              </p>
            </div>
          </div>
        </section>

        <section id="proof-band" className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Pourquoi les équipes basculent vers BioNixus
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {proofCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm text-primary font-semibold">{card.metric}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="executive-overview" className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
              Vue d'ensemble exécutive
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Le Moyen-Orient n'est pas un marché unique. C'est un portefeuille de systèmes de santé
                avec des attentes réglementaires, une logique d'achat institutionnelle, une maturité
                de remboursement et des schémas d'influence différents. Le succès stratégique dépend
                de preuves localisées, pas d'hypothèses généralisées.
              </p>
              <p>
                BioNixus aide les équipes pharmaceutiques à répondre à des questions à fort enjeu en
                phases pré-lancement, lancement et croissance : où se concentre la demande, qu'est-ce
                qui bloque l'adoption, quelles parties prenantes portent une influence réelle et
                comment les preuves doivent être cadrées pour accélérer les décisions commerciales
                et d'accès.
              </p>
              <p>
                Notre modèle combine la certitude quantitative avec la profondeur qualitative et
                traduit les deux en plans d'implémentation pratiques. L'objectif n'est pas de générer
                plus de rapports. L'objectif est d'améliorer les décisions marché réelles sous
                pression calendaire réelle.
              </p>
              <p>
                Chaque programme est piloté par un référent senior — pas un chef de projet junior —
                et validé par une revue méthodologique indépendante avant remise. Cette gouvernance
                protège la crédibilité des évidences transmises aux comités d'investissement, aux
                comités d'accès et aux directions générales régionales.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
              Complexité de la demande et de l'accès dans le CCG
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Les décisions pharmaceutiques dans le CCG sont façonnées par des parcours payeurs non
              uniformes, des contrôles d'achat au niveau institutionnel et une concentration de
              spécialistes par ville et par réseau. Pour les équipes stratégie, cela signifie que la
              conception des études doit être native pays dès le premier jour pour éviter une fausse
              comparabilité.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">Hétérogénéité réglementaire</h3>
                <p className="text-sm text-muted-foreground">
                  SFDA, DHA/DOH/MOHAP, EDA, MOPH et NHRA imposent des attentes d'approbation et de
                  preuves distinctes.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  Variation des achats institutionnels
                </h3>
                <p className="text-sm text-muted-foreground">
                  Les dynamiques d'achat NUPCO et de formulaire hospitalier diffèrent selon les
                  pays et les cadres de soins.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  Asymétrie d'influence des parties prenantes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Médecins, payeurs et KOLs pèsent différemment selon les décisions de lancement et
                  d'accès dans chaque marché.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Quand utiliser Qual, Quant ou Hybride dans le CCG
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="min-w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Modèle</th>
                    <th className="text-left p-3 font-semibold text-foreground">Cas d'usage</th>
                    <th className="text-left p-3 font-semibold text-foreground">Force</th>
                    <th className="text-left p-3 font-semibold text-foreground">Risque</th>
                    <th className="text-left p-3 font-semibold text-foreground">Meilleur usage CCG</th>
                  </tr>
                </thead>
                <tbody>
                  {methodologyComparison.map((row) => (
                    <tr key={row.model} className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">{row.model}</td>
                      <td className="p-3 text-muted-foreground">{row.bestFor}</td>
                      <td className="p-3 text-muted-foreground">{row.strength}</td>
                      <td className="p-3 text-muted-foreground">{row.risk}</td>
                      <td className="p-3 text-muted-foreground">{row.gccFit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="country-depth" className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-3">
              Profondeur d'exécution pays par pays
            </h2>
            <p className="text-muted-foreground mb-6">
              Chaque marché requiert des priorités de recherche différentes. Nous utilisons une
              planification au niveau pays pour préserver la pertinence tout en gardant une colonne
              vertébrale régionale comparable.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left p-3 font-semibold text-foreground">Pays</th>
                    <th className="text-left p-3 font-semibold text-foreground">Contexte réglementaire</th>
                    <th className="text-left p-3 font-semibold text-foreground">Réalité de marché</th>
                    <th className="text-left p-3 font-semibold text-foreground">Implication étude</th>
                  </tr>
                </thead>
                <tbody>
                  {countryCards.map((row) => (
                    <tr key={row.country} className="border-b border-border last:border-b-0">
                      <td className="p-3 text-foreground font-medium">{row.country}</td>
                      <td className="p-3 text-muted-foreground">{row.regulator}</td>
                      <td className="p-3 text-muted-foreground">{row.marketReality}</td>
                      <td className="p-3 text-muted-foreground">{row.researchImplication}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/10">
          <div className="container-wide max-w-5xl mx-auto">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Dubaï et EAU : le marché pharmaceutique qui croît le plus vite au MENA
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
              Les Émirats arabes unis — et Dubaï en particulier — représentent la dépense
              pharmaceutique par habitant la plus élevée du CCG, avec un marché estimé à environ
              4,5 milliards de dollars annuels. Avec l'implantation des sièges régionaux de nombreux
              laboratoires globaux à Dubaï, la demande pour des études alignées DHA et MOHAP continue
              d'accélérer. BioNixus fournit des enquêtes médecins, du KOL mapping, de la veille
              concurrentielle et des études d'accès à travers Dubaï, Abou Dhabi et les sept émirats.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/healthcare-market-research"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Hub d'études de marché santé
              </Link>
              <Link
                to="/bionixus-market-research-middle-east"
                className="inline-flex items-center rounded-xl border border-border px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors text-sm"
              >
                Voir la version anglaise
              </Link>
            </div>
          </div>
        </section>

        <section id="decision-ecosystem" className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-3">
              L'écosystème décisionnel
            </h2>
            <p className="text-muted-foreground mb-6">
              Nous structurons chaque programme pour capturer non seulement le comportement de
              prescription, mais aussi les contraintes institutionnelles et d'accès qui influencent
              l'adoption finale.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Médecins',
                  icon: Users2,
                  text: 'Préférence de traitement, acceptation des preuves et logique de switch.',
                },
                {
                  title: 'Payeurs',
                  icon: ClipboardCheck,
                  text: "Seuils de valeur, contraintes budgétaires et déclencheurs d'accès.",
                },
                {
                  title: 'Hôpitaux',
                  icon: Building2,
                  text: 'Dynamiques de formulaire, parcours d\'achat et freins au niveau compte.',
                },
                {
                  title: 'KOLs',
                  icon: Globe2,
                  text: "Architecture d'influence, résonance narrative et moteurs de crédibilité clinique.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-navy-deep to-navy-medium text-primary-foreground p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold mb-3">
                Besoin de preuves actionnables au prochain trimestre ?
              </h2>
              <p className="text-primary-foreground/90 mb-5">
                Nous pouvons cadrer vos questions marché prioritaires et les convertir en feuille de
                route pratique avec responsabilités claires et jalons calendaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={contactHref}
                  onClick={() => trackCtaClick('request_research_scope', 'mid_scroll')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-warm text-navy-deep px-5 py-3 font-semibold hover:bg-gold-light transition-colors"
                >
                  Demander votre cadrage
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/healthcare-market-research"
                  onClick={() => trackCtaClick('explore_market_research_hub', 'mid_scroll')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  Explorer l'architecture de service
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="methodology-framework" className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Cadre méthodologique
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {methodologySteps.map((step) => (
                <article key={step.name} className="rounded-xl border border-border bg-card p-5">
                  <step.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{step.name}</h3>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Playbooks par cas d'usage
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="rounded-xl border border-border bg-card p-5">
                  <useCase.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{useCase.summary}</p>
                  <ul className="space-y-1">
                    {useCase.outputs.map((output) => (
                      <li
                        key={output}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Ce que vous obtenez dans les 14 premiers jours
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {first14DaysDeliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground flex gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Plan d'exécution 90 jours par maturité de marché
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {executionBlueprint.map((step) => (
                <article key={step.tier} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold text-primary mb-2">{step.tier}</p>
                  <h3 className="font-semibold text-foreground mb-2">{step.focus}</h3>
                  <p className="text-sm text-muted-foreground">{step.output}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Instantanés de programmes récents
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {caseSnapshots.map((snapshot) => (
                <article key={snapshot.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{snapshot.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{snapshot.result}</p>
                  <p className="text-sm text-muted-foreground">{snapshot.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Supervision éditoriale et méthodologique
              </p>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
                {editorialLead}
              </h2>
              <p className="text-sm text-primary font-medium mb-3">
                Conseiller Études de Marché Santé, BioNixus
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cette page est revue face aux conditions actives du marché pharmaceutique CCG et aux
                contraintes d'exécution. Dernière revue : {lastUpdated}. La supervision inclut la
                cohérence méthodologique, la validation de la logique des parties prenantes et la
                conversion des résultats en livrables actionnables de lancement et d'accès.
              </p>
            </article>
          </div>
        </section>

        <section id="faq" className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">
                    {item.question}
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="rounded-2xl border border-gold-warm/30 bg-gradient-to-br from-navy-deep to-navy-medium text-primary-foreground p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">
                Construisez votre feuille de route de preuves Moyen-Orient
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Échangez avec un référent senior sur votre prochaine décision de lancement ou d'accès.
                Vous recevrez un cadrage clair, un calendrier pratique et les livrables recommandés de
                la première phase.
              </p>
              <p className="text-sm text-primary-foreground/80 mb-6">
                SLA de réponse : sous un jour ouvré. Votre demande est traitée par les responsables
                stratégie, pas par un support générique.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={contactHref}
                  onClick={() => trackCtaClick('book_strategy_call', 'final_cta')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold-warm text-navy-deep font-semibold hover:bg-gold-light transition-colors"
                >
                  Réserver un appel stratégique
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/healthcare-market-research"
                  onClick={() => trackCtaClick('visit_healthcare_hub', 'final_cta')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/30 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
                >
                  Explorer le hub études de marché santé
                </Link>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-6">
                Contenu original également disponible sur la page anglaise :{' '}
                <a
                  href={englishSiblingUrl}
                  className="underline hover:text-gold-light"
                >
                  {englishSiblingUrl}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur p-3 md:hidden">
        <Link
          to={contactHref}
          onClick={() => trackCtaClick('book_strategy_call', 'sticky_mobile')}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          Parler à un référent stratégie
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default FrBionixusMarketResearchMiddleEast;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
