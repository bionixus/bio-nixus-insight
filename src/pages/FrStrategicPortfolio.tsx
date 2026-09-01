import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

const CANONICAL = 'https://www.bionixus.com/fr/strategic-portfolio';
const EN_CANONICAL = 'https://www.bionixus.com/strategic-portfolio';
const AR_CANONICAL = 'https://www.bionixus.com/ar/strategic-portfolio';

const capabilityPillars = [
  {
    title: 'Recherche pharmaceutique primaire',
    description:
      "Études quantitatives et qualitatives sur mesure auprès des médecins, pharmaciens, payeurs et patients dans l'EMEA et le MENA. Notre équipe conçoit chaque instrument autour d'une décision commerciale précise — lancement, accès au marché, cycle de vie, ou repositionnement concurrentiel — plutôt que d'utiliser des questionnaires génériques réutilisés d'un pays à l'autre.",
    icon: BarChart3,
  },
  {
    title: 'Accès au marché et HEOR',
    description:
      "Cartographie payeur, dossiers HAS/CEPS en France, ASMR et positionnement de valeur, modèles économiques budgétaires et pharmaco-économiques adaptés aux exigences locales de l'AIFA (Italie), du G-BA/IQWiG (Allemagne), du NICE (Royaume-Uni), et des autorités du Golfe (SFDA, DHA, MOHAP). Nos livrables sont utilisables directement par les équipes d'accès sans réinterprétation.",
    icon: ShieldCheck,
  },
  {
    title: 'Cartographie KOL et engagement scientifique',
    description:
      "Identification et profilage des leaders d'opinion nationaux et régionaux — présidents de sociétés savantes, chefs de service dans les CHU français et les hôpitaux universitaires du Golfe, éditeurs de guidelines, investigateurs cliniques. Nous fournissons des cartes d'influence structurées, des profils enrichis et une analyse de réseaux qui alimente directement les plans d'engagement médical.",
    icon: Users,
  },
  {
    title: 'Real-World Evidence',
    description:
      "Études observationnelles, analyses de bases de données (SNDS français, PMSI, données payeurs régionales du Golfe), audits de dossiers patients et études de pratiques cliniques. Ces preuves de vie réelle soutiennent les dossiers de remboursement, la surveillance post-commercialisation et les stratégies de contrats d'accès conditionnels.",
    icon: Globe2,
  },
  {
    title: 'Intelligence concurrentielle',
    description:
      "Surveillance systématique des lancements concurrents, mapping des pipelines, analyse des messages promotionnels, audits de veille scientifique dans les congrès (ESMO, ASCO, ESC, EHA, EULAR) et évaluation des dynamiques de part de voix par pays. Nous transformons les signaux disparates en un tableau de bord d'action pour les équipes commerciales.",
    icon: Sparkles,
  },
  {
    title: 'Programmes de tracking et gouvernance',
    description:
      "Trackers de marque, U&A, satisfaction prescripteur et parcours patient déployés en vagues trimestrielles ou semestrielles avec une gouvernance rigoureuse — batteries de mesures stables, contrôles de dérive d'instrument, pondération transparente. Objectif : permettre à la direction de suivre le mouvement réel du marché, pas le bruit de sondage.",
    icon: BookOpen,
  },
];

const regionalCoverage = [
  {
    region: 'Golfe (GCC)',
    countries: ['Arabie Saoudite', 'Émirats Arabes Unis', 'Qatar', 'Koweït', 'Oman', 'Bahreïn'],
    highlights:
      "Panels HCP vérifiés dans tous les émirats et provinces, recrutement bilingue arabe-anglais, connaissance intime des réformes de Vision 2030 (Saudi FDA, NUPCO, CBAHI, MoH tenders) et du système de santé émirati (DHA, MOHAP, DoH Abu Dhabi, Malaffi). Notre bureau régional exécute des programmes complexes en respectant les cadres de gouvernance locaux et les délais de lancement des laboratoires internationaux.",
  },
  {
    region: 'Moyen-Orient élargi',
    countries: ['Égypte', 'Turquie', 'Jordanie', 'Liban', 'Iraq', 'Maroc', 'Tunisie'],
    highlights:
      "Exécution ciblée pour les marchés à volume élevé et à structure de prix distincte de l'EMEA. En Égypte, nous couvrons Le Caire, Alexandrie et la Haute-Égypte avec des équipes bilingues arabe-anglais. En Turquie, nous conduisons des études auprès des grands hôpitaux universitaires d'Istanbul, Ankara et Izmir en tenant compte du système SGK et des dynamiques génériques.",
  },
  {
    region: 'Europe (G5 & UK)',
    countries: ['France', 'Allemagne', 'Italie', 'Espagne', 'Royaume-Uni'],
    highlights:
      "Recherche pharmaceutique européenne rigoureuse alignée sur les autorités d'évaluation locales — HAS (France), G-BA/IQWiG (Allemagne), AIFA (Italie), AEMPS (Espagne), NICE et SMC (Royaume-Uni). Nos panels comprennent des médecins hospitaliers et libéraux dans les CHU, les cliniques privées, et les centres spécialisés (Institut Curie, Institut Gustave Roussy, Charité Berlin, Karolinska, Royal Marsden).",
  },
  {
    region: 'Marchés matures internationaux',
    countries: ['États-Unis', 'Canada', 'Japon', 'Corée du Sud', 'Singapour', 'Brésil'],
    highlights:
      "Pour les clients qui construisent une stratégie mondiale, nous étendons nos programmes régionaux vers les marchés matures avec des instruments comparables. Cela permet des benchmarks EMEA/MENA versus États-Unis ou Japon utilisant les mêmes définitions de segment, les mêmes questions clés et la même architecture d'analyse.",
  },
];

const therapyAreas = [
  'Oncologie & hémato-oncologie (immunothérapies, thérapies ciblées, CAR-T, cancers rares)',
  'Immunologie & inflammation (rhumatologie, dermatologie, gastro-entérologie, biothérapies)',
  'Diabète, cardio-métabolique & obésité (analogues GLP-1, iSGLT2, insuffisance cardiaque)',
  'Neurologie & neurodégénératives (SEP, Parkinson, Alzheimer, épilepsie, migraine)',
  "Maladies rares & médicaments orphelins (recherche de patients, cartographie des centres experts)",
  'Vaccins & santé publique (adultes, pédiatriques, voyageurs, campagnes régionales)',
  'Hôpital-spécialité (anti-infectieux, hémostase, soins intensifs, néphrologie)',
  'Dispositifs médicaux & diagnostics compagnons',
  "Santé de la femme et santé reproductive",
  "Ophtalmologie et thérapies rétiniennes",
];

const methodologies = [
  {
    title: 'Études qualitatives',
    body:
      "IDI (entretiens individuels approfondis), focus groups en présentiel et hybrides, advisory boards multi-pays, ateliers ethnographiques et cliniques accompagnés, safari observationnel en pharmacie. Nos modérateurs multilingues (français, anglais, arabe, allemand, italien, espagnol) garantissent une richesse linguistique fidèle sans perte d'insight en traduction.",
  },
  {
    title: 'Études quantitatives',
    body:
      "Enquêtes en ligne (CAWI), téléphoniques (CATI), face-à-face (CAPI), et hybrides. Conception d'échantillonnage stratifié par spécialité, secteur et région, contrôle des quotas incidence-aware pour les spécialités à faible fréquence, et validation multi-couches (checks logiques, vitesse, cohérence sémantique, détection AI-assistée d'anomalies avec adjudication humaine).",
  },
  {
    title: 'Modélisation avancée',
    body:
      "Segmentation latente, analyse conjointe (choice-based, adaptive), analyse de driver multivariée, modèles de propension au switch, TURF, MaxDiff. Ces méthodes traduisent les préférences déclarées et les compromis en scénarios exploitables pour la stratégie de portefeuille et la messaging.",
  },
  {
    title: 'Analyse de données secondaires',
    body:
      "Exploitation de bases de données commerciales (IQVIA MIDAS, Symphony, données de dispensation), bases publiques (SNDS français, PMSI, Sistema Sanitario Nazionale italien), et données propriétaires clients. Nous produisons des analyses cohortes, des trajectoires thérapeutiques, et des benchmarks de consommation par pays.",
  },
];

const differentiators = [
  {
    title: 'Un partenaire, une méthode, plusieurs pays',
    body:
      "Beaucoup de programmes multi-pays perdent en cohérence parce que chaque marché est sous-traité à une agence locale différente. Chez BioNixus, un chef de projet senior pilote tous les pays d'un même programme, avec des instruments harmonisés et une gouvernance analytique commune. Le livrable final compare pommes avec pommes, pas pommes avec poires.",
  },
  {
    title: 'Discipline pharma appliquée à toutes les études',
    body:
      "Nos processus de recrutement et de contrôle qualité sont conçus pour les exigences des équipes réglementaires et d'accès. Vérification des licences médicales, validation d'emploi, détection de doublons, audit trail complet. Cela protège votre décision commerciale même en cas de challenge par un régulateur ou un auditeur interne.",
  },
  {
    title: "Une équipe seniorisée sur chaque projet",
    body:
      "Les projets BioNixus sont menés par des consultants seniors de 10 à 20 ans d'expérience pharmaceutique — pas par des juniors supervisés à distance. Cela se traduit par des instruments plus intelligents, une interprétation stratégique plus fine, et des recommandations directement actionnables par les comités de direction.",
  },
  {
    title: "Passerelle MENA ↔ Global",
    body:
      "Nous sommes l'un des rares partenaires à combiner exécution profonde dans le Golfe et en Égypte avec une capacité de programme européenne et transatlantique. Cela permet aux équipes globales de comparer leurs benchmarks EMEA/MENA à ceux du G5 avec un seul instrument, sans les décalages typiques de vendeurs multiples.",
  },
];

const caseSnapshots = [
  {
    title: 'Programme de lancement oncologique multi-marchés',
    body:
      "Pour un laboratoire top-10 lançant une immunothérapie de 2e génération, nous avons exécuté un programme intégré en France, Allemagne, Italie, Espagne, Royaume-Uni, Arabie Saoudite et Émirats Arabes Unis. Le programme comprenait : 320 entretiens qualitatifs avec oncologues et payeurs, 1 200 réponses quantitatives, une segmentation latente à 4 clusters, et un modèle de choix conjoint pour tester six scénarios de prix-remboursement. Le laboratoire a utilisé les livrables pour prioriser deux marchés de lancement rapide et ajuster son dossier HAS.",
  },
  {
    title: 'Étude payeur Vision 2030 en Arabie Saoudite',
    body:
      "Pour un fabricant de dispositifs médicaux évaluant l'opportunité d'accès dans le cadre des réformes NUPCO et de la privatisation des soins, nous avons conduit 45 entretiens avec des acheteurs institutionnels, des chefs de service hospitaliers et des consultants d'accès à Riyad, Jeddah et Dammam. Le rapport a fourni une carte de décision d'entrée avec des scénarios chiffrés par cluster hospitalier.",
  },
  {
    title: 'Tracker de perception KOL en Europe',
    body:
      "Pour une biotech préparant le lancement d'un traitement rare dans la sclérose en plaques progressive, nous avons déployé un tracker semestriel auprès de 80 neurologues KOL en France, Allemagne, Italie, Espagne et Royaume-Uni. Le programme a suivi la perception du mécanisme d'action, la conviction sur le profil d'efficacité, et la position vis-à-vis des comparateurs sur quatre vagues.",
  },
];

const faqItems = [
  {
    q: "Qu'est-ce que le portefeuille stratégique de BioNixus ?",
    a: "Le portefeuille stratégique de BioNixus décrit l'ensemble de nos capacités de recherche primaire, d'accès au marché, de HEOR, de cartographie KOL, de real-world evidence, d'intelligence concurrentielle et de programmes de tracking. Il représente 15+ années d'expérience pharmaceutique et médico-santé exécutées à travers l'EMEA, le MENA, l'Amérique du Nord, l'Amérique latine et l'Asie-Pacifique — avec un ancrage particulièrement profond dans le Golfe et en France.",
  },
  {
    q: "Dans quels pays BioNixus peut-il exécuter des études pharmaceutiques ?",
    a: "Nous exécutons des programmes primaires dans plus de 48 pays. Nos zones de force principale sont le Golfe (Arabie Saoudite, Émirats Arabes Unis, Qatar, Koweït, Oman, Bahreïn), l'Égypte, la Turquie, la France, l'Allemagne, l'Italie, l'Espagne, le Royaume-Uni, les États-Unis, le Canada, le Brésil et le Japon. Pour chaque pays, nous disposons de panels HCP vérifiés, de partenaires terrain locaux et d'une gouvernance de projet centralisée qui garantit la cohérence des instruments.",
  },
  {
    q: "Comment se différencie BioNixus des acteurs globaux comme IQVIA ou Kantar Health ?",
    a: "Nous nous positionnons comme l'alternative agile et spécialiste régionale à IQVIA et Kantar Health. Nos programmes sont menés par des consultants seniors, avec une profondeur MENA-EMEA que peu de compétiteurs peuvent égaler. Nos délais sont plus courts, nos livrables plus interprétatifs, et notre modèle de tarification plus transparent — sans les frais généraux d'une grande structure multi-pays.",
  },
  {
    q: "Quel est le budget typique d'un programme stratégique BioNixus ?",
    a: "Le budget varie selon le nombre de pays, la méthodologie et la profondeur des livrables. Un programme qualitatif ciblé sur un pays du Golfe ou en France se situe généralement entre 40 000 et 90 000 euros. Un programme multi-pays combinant qualitatif, quantitatif et modélisation avancée dépasse fréquemment 200 000 euros. Notre seuil minimum d'engagement est de 20 000 dollars pour préserver la qualité méthodologique.",
  },
  {
    q: "BioNixus peut-il livrer des rapports en français ?",
    a: "Oui. Le français est l'une de nos langues natives de livraison, avec l'anglais, l'arabe, l'allemand, l'italien, et l'espagnol. Nos rapports France et Maghreb sont produits en français, et nous pouvons livrer des versions bilingues pour les équipes internationales.",
  },
  {
    q: "Combien de temps faut-il pour lancer un programme ?",
    a: "Un programme qualitatif ciblé peut démarrer sous 2 à 3 semaines. Un programme quantitatif multi-pays nécessite 4 à 6 semaines de setup avant lancement terrain. Nous privilégions un temps de préparation suffisant pour ne pas compromettre la qualité de l'échantillon et la robustesse de l'instrument — la vitesse ne doit jamais éroder la fiabilité des décisions stratégiques.",
  },
  {
    q: "Le portefeuille stratégique couvre-t-il aussi les dispositifs médicaux et les diagnostics ?",
    a: "Oui. Notre équipe travaille régulièrement pour des fabricants de dispositifs médicaux, de diagnostics compagnons et de biomarqueurs. Les méthodologies sont adaptées aux spécificités de ces marchés — cycles d'achat institutionnels, procédures d'homologation, remboursement du dispositif versus du geste, et rôle des KOL techniques.",
  },
  {
    q: "Comment garantissez-vous la conformité éthique et réglementaire ?",
    a: "Toutes nos études respectent les principes de l'EphMRA, de l'ESOMAR et les régulations locales (RGPD en Europe, lois locales de protection des données au Moyen-Orient). Nous archivons les procédures de recrutement, les scripts d'entretien, les données brutes et les logs de contrôle qualité pour un audit complet à la demande du client ou du régulateur.",
  },
];

export default function FrStrategicPortfolio() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bionixus.com/fr' },
      { '@type': 'ListItem', position: 2, name: 'Portefeuille stratégique', item: CANONICAL },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.bionixus.com/#organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
    logo: 'https://www.bionixus.com/bionixus-logo.webp',
    description:
      "BioNixus est un cabinet de conseil et d'études pharmaceutiques et santé, spécialisé dans la recherche primaire, l'accès au marché et le HEOR, avec un ancrage profond dans le MENA et l'EMEA.",
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Capacités du portefeuille stratégique BioNixus',
    numberOfItems: capabilityPillars.length,
    itemListElement: capabilityPillars.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      description: c.description,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang="fr" />
        <title>Portefeuille Stratégique BioNixus | Recherche Pharma EMEA & MENA</title>
        <meta
          name="description"
          content="Portefeuille stratégique BioNixus : recherche primaire, accès au marché, HEOR, KOL, RWE et intelligence concurrentielle pharma à travers l'EMEA et le MENA."
        />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="fr" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={EN_CANONICAL} />
        <link rel="alternate" hrefLang="ar" href={AR_CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={EN_CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Portefeuille Stratégique BioNixus | Recherche Pharma EMEA & MENA"
        description="Portefeuille stratégique BioNixus : capacités de recherche primaire, accès au marché, HEOR, KOL, RWE et intelligence concurrentielle pharmaceutique à travers l'EMEA et le MENA."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="website"
        locale="fr_FR"
        alternateLocales={['en_US', 'ar_SA']}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/fr" className="hover:text-primary transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-foreground">Portefeuille stratégique</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Portefeuille stratégique BioNixus
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Portefeuille stratégique : recherche pharmaceutique et accès au marché à travers l'EMEA et le MENA
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Le portefeuille stratégique BioNixus rassemble l'ensemble de nos capacités de recherche primaire, d'accès au marché, de HEOR, de cartographie KOL, de real-world evidence, d'intelligence concurrentielle et de trackers de marque — conçues et exécutées par une équipe seniorisée avec une profondeur particulière en France, dans le Golfe et en Égypte. Ce document décrit comment nous transformons chaque décision commerciale ou d'accès en un programme d'évidence structuré, défendable et actionnable.
            </p>
            <p className="text-sm text-muted-foreground">
              Version française · Voir aussi la{' '}
              <Link to="/strategic-portfolio" className="text-primary hover:underline font-medium">
                version anglaise du portefeuille stratégique
              </Link>{' '}
              ou la{' '}
              <Link to="/ar/strategic-portfolio" className="text-primary hover:underline font-medium">
                version arabe
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">38</p>
                <p className="text-primary-foreground/80 text-sm mt-1">pays d'exécution</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">127+</p>
                <p className="text-primary-foreground/80 text-sm mt-1">projets pharmaceutiques</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">118</p>
                <p className="text-primary-foreground/80 text-sm mt-1">clients pharma & medtech</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">15+</p>
                <p className="text-primary-foreground/80 text-sm mt-1">années d'expertise</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="capabilities">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Six piliers de capacités qui structurent notre portefeuille
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Chaque programme BioNixus est bâti à partir d'un ou plusieurs des piliers ci-dessous. Nous ne vendons pas des livrables interchangeables — nous concevons un programme de preuves adapté à la décision commerciale précise que vous devez prendre, en combinant les méthodologies qui maximisent la probabilité d'une décision claire et défendable.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilityPillars.map((pillar) => (
                <div key={pillar.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="regional-coverage">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Couverture régionale : là où nous exécutons vraiment
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Beaucoup d'agences prétendent couvrir « tous les marchés ». Nous préférons être transparents sur les régions où nous détenons une profondeur d'exécution réelle — panels HCP vérifiés, équipes locales, connaissance des cadres réglementaires et payeurs. Voici les quatre grands blocs qui structurent notre portefeuille.
            </p>
            <div className="space-y-6">
              {regionalCoverage.map((region) => (
                <div key={region.region} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <h3 className="text-xl font-display font-semibold text-foreground">{region.region}</h3>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((c) => (
                        <span key={c} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{region.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="therapy-areas">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Aires thérapeutiques couvertes
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Notre équipe a exécuté des projets sur toutes les grandes aires thérapeutiques, avec une profondeur particulière en oncologie, immunologie, maladies rares, diabète-cardio-métabolique et hôpital-spécialité. Nous adaptons systématiquement le recrutement, le langage clinique et l'architecture de l'instrument aux réalités de chaque aire.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {therapyAreas.map((area) => (
                <div key={area} className="flex items-start gap-2 bg-card border border-border rounded-lg p-4">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="methodologies">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Méthodologies : de l'IDI qualitatif au modèle de choix conjoint
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Nous refusons l'approche unique. Chaque décision commerciale mérite la méthodologie qui produit la preuve la plus fiable au meilleur coût, dans les délais imposés par le business. Nos consultants seniors choisissent — et souvent combinent — parmi les familles suivantes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {methodologies.map((m) => (
                <div key={m.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="differentiators">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Ce qui rend le portefeuille BioNixus différent
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Nous nous positionnons comme l'alternative agile et spécialiste régionale aux grands acteurs mondiaux (IQVIA, Kantar Health, Ipsos). Voici les quatre différenciateurs que nos clients pharmaceutiques citent le plus souvent lorsqu'ils nous choisissent pour un programme multi-pays.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((d) => (
                <div key={d.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="case-snapshots">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Aperçus de programmes exécutés
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Trois exemples représentatifs — anonymisés pour préserver la confidentialité — illustrant comment le portefeuille est mis en œuvre dans la pratique.
            </p>
            <div className="space-y-6">
              {caseSnapshots.map((c) => (
                <div key={c.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="governance">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Gouvernance, éthique et sécurité des données
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nos programmes respectent les principes de l'EphMRA, de l'ESOMAR et les réglementations locales de protection des données — RGPD en Europe, PDPL en Arabie Saoudite, loi émiratie sur la protection des données, et cadres équivalents dans les autres pays du portefeuille. Chaque contrat définit clairement le périmètre des données collectées, la durée de conservation, les droits d'accès et les procédures de destruction post-projet.
              </p>
              <p>
                Sur le plan éthique, nos scripts de recrutement et guides d'entretien sont soumis à un contrôle interne avant chaque projet, incluant vérification de neutralité, absence de biais promotionnel dans les questions primaires HCP, et respect des règles nationales de compensation des professionnels de santé. En France par exemple, nous suivons scrupuleusement les principes de la loi Anti-cadeaux et la charte de l'EphMRA France.
              </p>
              <p>
                Techniquement, nos plateformes de recueil sont hébergées sur des infrastructures conformes SOC 2, avec chiffrement en transit et au repos. Les données identifiantes sont séparées des données de réponse dès l'ingestion, et un audit trail complet est conservé pour chaque projet — permettant à nos clients de démontrer leur conformité en cas de challenge par un régulateur ou un auditeur interne.
              </p>
              <p>
                Enfin, nous documentons systématiquement les hypothèses méthodologiques (définition d'échantillon, seuils d'exclusion, pondérations appliquées, tests statistiques utilisés) afin que les résultats soient reproductibles et défendables. Cette discipline documentaire est particulièrement précieuse pour les dossiers HAS/CEPS, les évaluations G-BA/IQWiG, ou les soumissions NUPCO/SFDA au Golfe.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="engagement">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Comment nous travaillons avec vos équipes
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Un programme BioNixus commence toujours par un atelier de cadrage — 60 à 90 minutes en visio ou en présentiel — au cours duquel nous confrontons la question commerciale posée par le client à la méthodologie qui produira la preuve la plus fiable. Ce cadrage est souvent l'étape la plus rentable de tout le projet : il évite les faux départs et aligne les parties prenantes internes du client sur les critères de succès.
              </p>
              <p>
                Ensuite, nous structurons le projet en trois phases : conception (2 à 4 semaines), exécution terrain (4 à 8 semaines selon la méthode et le nombre de pays), et interprétation stratégique (2 à 3 semaines). Nous privilégions les points de gouvernance hebdomadaires plutôt que les longs silences suivis d'un livrable final surprise — cela permet d'ajuster le tir en cours de route et de préparer les stakeholders internes à l'atterrissage.
              </p>
              <p>
                Nos livrables finaux combinent un rapport stratégique exécutif (30 à 60 pages selon la profondeur), un jeu de slides prêtes pour présentation en comité de direction, une annexe méthodologique complète, et l'ensemble des données brutes anonymisées mises à disposition. Nous incluons également une session de restitution en direct avec vos équipes locales et globales, et nous restons disponibles pour un support post-projet pendant 60 jours après remise finale — pour répondre aux questions qui émergent quand les décisions se rapprochent.
              </p>
              <p>
                Pour les clients pharmaceutiques multi-pays, nous proposons également un modèle de partenariat annuel (retainer) qui inclut plusieurs vagues de tracking, un accès prioritaire aux consultants seniors, et un tarif préférentiel sur les études ad-hoc. Ce modèle convient particulièrement aux directions médicales et d'accès au marché qui souhaitent institutionnaliser leur veille sur un portefeuille de produits ou une aire thérapeutique.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Questions fréquentes sur le portefeuille stratégique
            </h2>
            <div className="space-y-4">
              {faqItems.map((f) => (
                <details key={f.q} className="group bg-card border border-border rounded-xl p-6">
                  <summary className="cursor-pointer list-none text-lg font-display font-semibold text-foreground flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-primary text-sm group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Pour aller plus loin</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/strategic-portfolio', label: 'Strategic portfolio (English)', desc: 'Read the English version of our strategic portfolio.' },
                { to: '/ar/strategic-portfolio', label: 'الملف الاستراتيجي (العربية)', desc: 'النسخة العربية للملف الاستراتيجي.' },
                { to: '/fr/healthcare-market-research/france', label: 'Études santé France', desc: 'Recherche pharmaceutique spécifique au marché français.' },
                { to: '/fr/quantitative-healthcare-market-research', label: 'Recherche quantitative santé', desc: 'Méthodologie CATI/CAPI/en ligne GCC & Europe.' },
                { to: '/fr/healthcare-market-research', label: 'Blueprints d\'entrée pays', desc: 'Plans d\'accès pharmaceutique par pays.' },
                { to: '/fr/contact', label: 'Prendre contact', desc: 'Discuter d\'un programme sur mesure avec un consultant senior.' },
              ].map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-1">{r.label}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Discutons de votre prochain programme pharmaceutique
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Un consultant senior BioNixus prendra le temps de comprendre votre décision commerciale, votre calendrier et vos contraintes — et proposera un programme d'évidence structuré, chiffré et défendable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/fr/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Demander une proposition <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:mosama@bionixus.com?subject=Portefeuille%20strat%C3%A9gique%20BioNixus"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                Écrire à l'équipe
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
