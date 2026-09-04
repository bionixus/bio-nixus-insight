import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ShieldCheck,
  Users,
  Target,
  Brain,
  CheckCircle2,
} from 'lucide-react';

const CANONICAL = 'https://www.bionixus.com/fr/quantitative-healthcare-market-research';
const EN_CANONICAL = 'https://www.bionixus.com/quantitative-healthcare-market-research';

const methodologyPillars = [
  {
    title: 'Architecture d\'enquête à grande échelle',
    body:
      "Conception d'enquêtes stratifiées et statistiquement dimensionnées qui préservent la représentativité par spécialité médicale, cadre d'exercice (hospitalier / libéral / clinique privée), zone géographique (Île-de-France versus régions, urbain versus rural), et rôle décisionnel dans l'organisation. En France comme dans les autres marchés européens, chaque cellule d'échantillon est calibrée à partir des données SNIIRAM, Ordre des Médecins, et registres régionaux pour éviter les biais de composition.",
  },
  {
    title: 'Discipline de tracking',
    body:
      "Mise en place de vagues avec batteries de mesure stables, cadres de pondération invariants, et contrôles anti-dérive pour que chaque mouvement trimestriel ou semestriel reflète un changement réel de comportement — pas du bruit de questionnaire. Nos protocoles de tracking pharmaceutique respectent les principes EphMRA et sont conçus pour fournir des séries temporelles utilisables sur 3 à 5 ans sans réingénierie majeure.",
  },
  {
    title: 'Recrutement HCP vérifié',
    body:
      "Construction d'échantillons défendables par vérification des licences (RPPS en France, GMC au Royaume-Uni, DHA / SFDA au Golfe), validation d'emploi, vérification de spécialité, et détection multi-couches de doublons. Pour les études sensibles (accès au marché, HAS, remboursement) cette rigueur est indispensable pour éviter toute contestation méthodologique par un régulateur ou un audit interne.",
  },
  {
    title: 'Validation des données à l\'ère de l\'IA',
    body:
      "Application de contrôles qualité multi-couches : logique conditionnelle, détection de vitesse de réponse, cohérence sémantique, et détection AI-assistée d'anomalies avec adjudication humaine. Nous utilisons l'IA pour accélérer le triage — jamais pour remplacer la supervision méthodologique senior sur les décisions d'inclusion / exclusion finale.",
  },
];

const modes = [
  {
    title: 'CAWI — enquête en ligne',
    body:
      "Le mode dominant pour les médecins libéraux, cardiologues, pharmaciens et infirmiers en France et en Europe de l'Ouest. Rapide, économique, avec une bonne base de panels dédiés (Cegedim, EPG, panels internes BioNixus). Idéal pour les échantillons de 200 à 1 000+ répondants et les études nécessitant du média visuel (tests de messages, tests de concept, packaging).",
  },
  {
    title: 'CATI — enquête téléphonique assistée',
    body:
      "Toujours pertinent au Golfe (Arabie Saoudite, Émirats Arabes Unis, Qatar) pour atteindre les chefs de service hospitaliers, les consultants et les prescripteurs seniors difficiles à recruter en ligne. Nos équipes CATI bilingues arabe-anglais et français-anglais atteignent des taux de coopération élevés grâce à un scripting culturellement adapté et à une gestion fine des créneaux horaires.",
  },
  {
    title: 'CAPI — enquête en face-à-face',
    body:
      "Utilisé quand la profondeur du contenu ou la sensibilité du sujet exige un contact direct : conjoint analysis complexes, tests d'aides visuelles, immersion en cabinet ou en hôpital. Souvent combiné avec un mode hybride pour maximiser les insights qualitatifs intégrés à un cadre quantitatif.",
  },
  {
    title: 'Modes hybrides et Push-to-Web',
    body:
      "Pour les études pan-européennes ou pan-MENA, nous mixons souvent CATI d'accroche + CAWI en complétion pour maximiser à la fois la représentativité et la profondeur du contenu. Les technologies Push-to-Web depuis SMS ou WhatsApp performent particulièrement bien au Golfe où les taux de pénétration mobile HCP sont supérieurs à 95 %.",
  },
];

const gccContext = [
  {
    title: 'Arabie Saoudite',
    body:
      "Marché prioritaire avec 100 000+ médecins actifs, dont environ 40 % dans le secteur public (MoH, KFSH, Hôpitaux de la Garde Nationale). Recrutement CATI et CAWI bilingues arabe-anglais, avec des panels vérifiés SCFHS. Les réformes Vision 2030 (Health Holding Company, privatisation) créent un besoin constant d'études tracker sur l'adoption et la perception des innovations.",
  },
  {
    title: 'Émirats Arabes Unis',
    body:
      "Environ 50 000 professionnels de santé enregistrés à MOHAP, DHA, DoH. Les plateformes Malaffi (Abu Dhabi) et Nabidh (Dubaï) permettent une segmentation fine par pratique clinique réelle. Nos panels couvrent les hôpitaux gouvernementaux, les groupes privés (NMC, Aster, Mediclinic, Cleveland Clinic Abu Dhabi) et les cabinets indépendants.",
  },
  {
    title: 'Qatar, Koweït, Oman, Bahreïn',
    body:
      "Marchés plus petits mais avec des dynamiques de tarification alignées sur le GCC-DR. Nos échantillons couvrent Hamad Medical Corporation, Kuwait MoH, Royal Hospital d'Oman, Salmaniya Medical Complex. Les études régionales combinent ces quatre marchés pour offrir une lecture Golfe consolidée.",
  },
];

const europeanContext = [
  {
    title: 'France',
    body:
      "220 000+ médecins actifs, avec des panels vérifiés RPPS. Les CHU (AP-HP, HCL Lyon, AP-HM Marseille, CHU Bordeaux) constituent le cœur du recrutement pour les études oncologie, immunologie et maladies rares. Le SNDS et le PMSI permettent une triangulation quantitatif + real-world pour les études HAS et CEPS.",
  },
  {
    title: 'Allemagne',
    body:
      "410 000+ médecins avec un accès panel via Vaerdi, Cegedim, EPG. Les hôpitaux universitaires (Charité, LMU, UKE, Heidelberg) sont incontournables pour les études AMNOG. Le G-BA et l'IQWiG exigent une preuve quantitative rigoureuse sur les indicateurs cliniques prédéfinis.",
  },
  {
    title: 'Italie, Espagne, Royaume-Uni',
    body:
      "Panels vérifiés dans chaque pays avec des logiques de recrutement adaptées : régions italiennes (Lombardia, Lazio, Emilia-Romagna), Comunidades Autónomas espagnoles, et Integrated Care Systems britanniques. Le NHS Data Discover et le CPRD britanniques offrent un socle real-world unique.",
  },
];

const qualityFrameworks = [
  {
    title: 'Framework de vérification en 5 étapes',
    body:
      "1) Vérification identifiant national (RPPS France, GMC Royaume-Uni, DHA/SFDA/MOHAP Golfe). 2) Validation employeur avec cross-check institutionnel. 3) Vérification spécialité via questions cliniques calibrées. 4) Détection duplicate multi-signal (IP, device fingerprint, hash email hashé). 5) Adjudication humaine sur les cas ambigus.",
  },
  {
    title: 'Contrôle qualité en cours de terrain',
    body:
      "Monitoring quotidien de la santé du quota, revue hebdomadaire de la vitesse moyenne de réponse, détection des patterns de straight-lining, contrôle de la variance sur les questions de cohérence interne. Chaque anomalie déclenche une revue d'échantillon avant clôture du terrain.",
  },
  {
    title: 'Analyse et pondération',
    body:
      "Application de poids de population (par spécialité, région, cadre d'exercice) calibrés sur les données de l'Ordre des Médecins ou équivalent local. Documentation transparente des choix de pondération, publication des CVs de non-réponse, et calcul d'intervalles de confiance ajustés pour l'échantillonnage complexe.",
  },
];

const applications = [
  {
    title: 'Segmentation de prescripteurs',
    body:
      "Identification de 3 à 6 clusters comportementaux par analyse latente ou k-means, avec profilage démographique, clinique et psychographique. Sortie directement actionable pour la stratégie commerciale et l'engagement médical différencié par segment.",
  },
  {
    title: 'Analyse conjointe (CBC / ACBC)',
    body:
      "Quantification des drivers de choix — efficacité, tolérance, mode d'administration, prix — via des méthodes choice-based ou adaptative. Simulation de scénarios de lancement et positionnement optimal versus comparateurs dans chaque pays.",
  },
  {
    title: 'Message testing quantitatif',
    body:
      "Évaluation comparative de 6 à 20 messages sur un large échantillon de prescripteurs, avec analyses par segment, MaxDiff et TURF pour identifier le mix optimal de messages à activer dans les campagnes commerciales.",
  },
  {
    title: 'Trackers de perception et d\'adoption',
    body:
      "Suivi trimestriel ou semestriel des indicateurs clés post-lancement : notoriété, essai, adoption, satisfaction, share of prescription. Alertes automatiques quand un indicateur franchit un seuil critique.",
  },
];

const faqItems = [
  {
    q: "Qu'est-ce que la recherche quantitative en santé et pourquoi est-elle essentielle ?",
    a: "La recherche quantitative en santé est la mesure structurée d'attitudes, de comportements, de patterns de prescription et de facteurs de décision auprès de professionnels de santé ou de patients via des méthodes statistiques (surveys, trackers, modèles). Elle est essentielle pour prendre des décisions à fort enjeu — lancement, positionnement, accès au marché — en réduisant le biais et en construisant une preuve défendable.",
  },
  {
    q: "Quels modes utilisez-vous pour les enquêtes HCP en France ?",
    a: "En France, le mode dominant est CAWI (en ligne) pour la plupart des médecins libéraux et hospitaliers avec des taux de complétion très corrects. Nous complétons avec CATI pour les chefs de service, les KOL et les spécialités rares, et CAPI lorsque le contenu exige de l'immersion (tests d'aides visuelles complexes, conjoint volumineux). Les modes hybrides sont fréquents pour les études sensibles.",
  },
  {
    q: "Quel est l'échantillon typique pour une étude quantitative HCP en Europe ?",
    a: "Le dimensionnement dépend des objectifs et des sous-groupes. Une étude France avec 3 spécialités et lecture par segment prescripteur nécessite typiquement 300 à 500 répondants. Une étude EU5 avec sous-groupes par pays et par spécialité peut atteindre 1 500 à 2 500 répondants. Nous privilégions la robustesse des cellules décisionnelles plutôt qu'un chiffre global spectaculaire.",
  },
  {
    q: "Combien de temps prend une étude quantitative multi-pays ?",
    a: "Une étude quantitative pan-européenne bien préparée nécessite typiquement 10 à 14 semaines : 3-4 semaines de conception (questionnaire, protocol, cognitive testing), 4-6 semaines de terrain, 2-3 semaines d'analyse et de reporting. Les études GCC (Arabie Saoudite, Émirats) peuvent aller un peu plus vite grâce à la concentration des panels sur des plateformes bilingues.",
  },
  {
    q: "Comment garantissez-vous la qualité du recrutement HCP ?",
    a: "Nous appliquons un framework en 5 étapes : vérification de l'identifiant national (RPPS, GMC, DHA, SFDA), validation employeur, vérification spécialité par questions cliniques, détection multi-signal des doublons, et adjudication humaine sur les cas ambigus. Chaque respondant est traçable via un audit trail complet à disposition du client sur demande.",
  },
  {
    q: "Le SNDS peut-il compléter la recherche quantitative primaire en France ?",
    a: "Absolument. Le Système National des Données de Santé (SNDS) permet des analyses de vie réelle sur les trajectoires thérapeutiques, l'adhérence et les événements cliniques. En combinaison avec un questionnaire primaire, il permet de trianguler comportements déclarés et comportements observés — une méthode particulièrement puissante pour les dossiers HAS et CEPS. BioNixus travaille avec des partenaires certifiés SNDS pour ces études.",
  },
  {
    q: "Comment se comparent le CAWI en France et le CATI au Golfe ?",
    a: "En France, le CAWI atteint typiquement 20-35 % de completion rate qualifiée sur des panels vérifiés, avec des coûts par completed relativement bas. Au Golfe, le CATI performe mieux pour les chefs de service et les KOL (30-40 %) mais coûte 2 à 3 fois plus par completed. Les modes hybrides Push-to-Web via WhatsApp performent bien au Golfe (25-32 %) et deviennent de plus en plus l'option privilégiée pour les études tracker.",
  },
  {
    q: "L'IA peut-elle remplacer la validation humaine des données quantitatives ?",
    a: "Non. L'IA accélère le triage d'anomalies, le codage des réponses ouvertes, et la détection de patterns suspects — mais la décision finale d'inclusion/exclusion doit rester humaine et méthodologiquement supervisée. Pour les études à fort enjeu (HAS, G-BA, CEPS, NUPCO), l'audit trail humain est indispensable pour défendre le protocole en cas de challenge.",
  },
];

export default function FrQuantitativeHealthcareMarketResearch() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.bionixus.com/fr' },
      { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.bionixus.com/fr/ressources' },
      { '@type': 'ListItem', position: 3, name: 'Recherche quantitative en santé', item: CANONICAL },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Recherche Quantitative en Santé — Enquêtes HCP, Échantillonnage, CATI/CAPI/en ligne en France, Europe et GCC",
    description:
      "Guide 2026 sur la recherche quantitative auprès des professionnels de santé : méthodologies CATI, CAPI, CAWI et hybrides, échantillonnage, contrôle qualité et applications décisionnelles pour les équipes pharmaceutiques.",
    url: CANONICAL,
    image: 'https://www.bionixus.com/og-image.png',
    inLanguage: 'fr',
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } },
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
        <title>Recherche Quantitative en Santé | Enquêtes HCP GCC & Europe | BioNixus</title>
        <meta
          name="description"
          content="Guide 2026 sur la recherche quantitative auprès des professionnels de santé : enquêtes CATI/CAPI/en ligne, échantillonnage, validation et applications au GCC et en Europe."
        />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="fr" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href={EN_CANONICAL} />
        <link rel="alternate" hrefLang="x-default" href={EN_CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="Recherche Quantitative en Santé | Enquêtes HCP GCC & Europe | BioNixus"
        description="Guide 2026 sur la recherche quantitative en santé : conception d'enquête, sampling, CATI/CAPI/en ligne, et applications au GCC et en Europe par BioNixus."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="fr_FR"
        alternateLocales={['en_US']}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/fr" className="hover:text-primary transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-muted-foreground">Ressources</span>
              <span>/</span>
              <span className="text-foreground">Recherche quantitative en santé</span>
            </div>
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Guide méthodologique 2026
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Recherche Quantitative en Santé : enquêtes HCP, échantillonnage et modes CATI / CAPI / en ligne au GCC et en Europe
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Ce guide explique comment BioNixus conçoit et exécute des programmes de recherche quantitative auprès des professionnels de santé — de la France et de l'Europe du G5 aux six pays du Conseil de coopération du Golfe. Il détaille les méthodologies d'échantillonnage, les modes de collecte (CATI, CAPI, CAWI, hybride), les protocoles de vérification HCP, et les applications stratégiques les plus fréquentes pour les équipes commerciales, médicales et d'accès au marché.
            </p>
            <p className="text-sm text-muted-foreground">
              Version française · Consultez aussi la{' '}
              <Link to="/quantitative-healthcare-market-research" className="text-primary hover:underline font-medium">
                version anglaise du guide sur la recherche quantitative en santé
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">4</p>
                <p className="text-primary-foreground/80 text-sm mt-1">modes de collecte</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">6</p>
                <p className="text-primary-foreground/80 text-sm mt-1">pays GCC couverts</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">EU5 + UK</p>
                <p className="text-primary-foreground/80 text-sm mt-1">Europe en profondeur</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">15+</p>
                <p className="text-primary-foreground/80 text-sm mt-1">années d'expérience</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <BarChart3 className="w-7 h-7 text-primary" />
              Quatre piliers méthodologiques structurent nos programmes quantitatifs
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              La qualité d'une étude quantitative HCP ne repose pas sur une seule décision technique mais sur l'articulation cohérente de quatre disciplines : sampling, tracking, recrutement vérifié et validation des données. Chaque programme BioNixus est bâti à partir de ces piliers, adaptés aux spécificités du marché ciblé.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {methodologyPillars.map((p) => (
                <div key={p.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="modes">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Modes de collecte : choisir CATI, CAPI, CAWI ou hybride
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Aucun mode n'est intrinsèquement supérieur. Le bon choix dépend de la cible HCP, du contenu du questionnaire, du budget et du délai. Nos consultants seniors sélectionnent — et souvent combinent — les modes suivants pour maximiser la qualité de la preuve dans chaque contexte.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {modes.map((m) => (
                <div key={m.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="gcc-context">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              Contexte GCC : recrutement HCP dans le Golfe
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Les six pays du Conseil de coopération du Golfe partagent des logiques de tarification alignées mais des paysages HCP très différents. Nos panels vérifiés couvrent chaque marché avec un recrutement bilingue arabe-anglais et une adaptation culturelle des scripts CATI.
            </p>
            <div className="space-y-5">
              {gccContext.map((c) => (
                <div key={c.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="european-context">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <Target className="w-7 h-7 text-primary" />
              Contexte européen : de la France à la Grande-Bretagne
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              L'Europe présente une diversité méthodologique : le SNDS français, le CPRD britannique, et les registres régionaux italiens et espagnols offrent des socles quantitatifs uniques. Nos panels HCP sont vérifiés pays par pays et harmonisés pour permettre des lectures cross-country cohérentes.
            </p>
            <div className="space-y-5">
              {europeanContext.map((c) => (
                <div key={c.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="quality">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-primary" />
              Frameworks de qualité : de la vérification à l'analyse
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              La qualité des données quantitatives est un système, pas une case à cocher en fin de projet. Nos frameworks couvrent trois moments critiques — recrutement, terrain, analyse — avec des contrôles imbriqués et un audit trail complet.
            </p>
            <div className="space-y-5">
              {qualityFrameworks.map((q) => (
                <div key={q.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{q.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="applications">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 flex items-center gap-3">
              <Brain className="w-7 h-7 text-primary" />
              Applications décisionnelles typiques
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              La valeur d'une étude quantitative n'est pas dans la richesse du tableau croisé, mais dans la clarté de la décision qu'elle permet. Voici les quatre familles d'applications que nous exécutons le plus fréquemment pour nos clients pharmaceutiques.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((a) => (
                <div key={a.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="implementation">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Blueprint d'implémentation en 5 phases
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Notre calendrier type sur un programme quantitatif européen ou GCC s'étale sur 10 à 14 semaines, avec des points de gouvernance hebdomadaires. Chaque phase est calibrée pour éviter les compressions de qualité en fin de terrain.
            </p>
            <div className="space-y-5">
              {[
                {
                  phase: 'Phase 1 — Décision et scoping (Semaine 1)',
                  body:
                    "Atelier de scoping avec les fonctions client (Commercial, Medical, Market Access), formulation des hypothèses de décision, définition de la population cible, et établissement des seuils décisionnels a priori pour éviter le pilotage post-hoc.",
                },
                {
                  phase: 'Phase 2 — Sampling et recrutement (Semaines 1-2)',
                  body:
                    "Construction des quotas par pays, spécialité, cadre d'exercice, rôle décisionnel. Activation des panels vérifiés (RPPS, GMC, SFDA, MOHAP) et mise en place des règles de vérification et de détection de doublons.",
                },
                {
                  phase: 'Phase 3 — Conception d\'instrument (Semaines 2-3)',
                  body:
                    "Développement du questionnaire par module (batterie tracker stable + blocs stratégiques), cognitive pre-testing avec 5-10 HCP par pays, validation linguistique et culturelle, et intégration des règles de logique et de branchement.",
                },
                {
                  phase: 'Phase 4 — Terrain et validation (Semaines 3-8)',
                  body:
                    "Lancement terrain progressif (soft launch 10 %, revue qualité, hard launch), monitoring quotidien de la santé du quota, application des contrôles de qualité (vitesse, cohérence, straight-lining), et adjudication humaine sur les cas ambigus.",
                },
                {
                  phase: 'Phase 5 — Analyse et interprétation (Semaines 8-12)',
                  body:
                    "Pondération et analyse par segment, modélisation avancée (segmentation latente, driver analysis, choice modeling), rédaction du rapport stratégique, session de restitution en direct avec le comité de direction du client.",
                },
              ].map((step) => (
                <div key={step.phase} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{step.phase}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="ethics">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              Éthique, RGPD et bonnes pratiques
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Toutes nos enquêtes quantitatives respectent le RGPD (Règlement européen sur la Protection des Données) et les cadres équivalents dans les pays du Golfe (PDPL en Arabie Saoudite, loi émiratie sur la protection des données). Les données identifiantes sont séparées des réponses dès l'ingestion, les serveurs sont conformes SOC 2 avec chiffrement en transit et au repos, et un DPO externe supervise nos pratiques annuellement.
              </p>
              <p>
                Sur le plan éthique, nous suivons les principes EphMRA et ESOMAR : consentement éclairé documenté, absence de biais promotionnel dans les questions primaires, respect de la Loi Anti-cadeaux française (Loi Bertrand modifiée) et du Heilmittelwerbegesetz allemand pour les rémunérations HCP. Toute compensation est fixée en fonction du temps réel de participation et selon les fair market values validées par les agences réglementaires locales.
              </p>
              <p>
                Nous archivons systématiquement les scripts d'entretien, les données brutes anonymisées, les logs de contrôle qualité et les procédures de pondération pour un audit complet à tout moment. Cette discipline est particulièrement précieuse quand les résultats sont utilisés dans un dossier HAS, un dossier AMNOG ou un dossier NUPCO — trois contextes où la traçabilité méthodologique peut faire la différence entre un remboursement obtenu ou refusé.
              </p>
              <p>
                Enfin, nous documentons tous les choix méthodologiques (définitions d'échantillon, seuils d'exclusion, pondérations, tests statistiques utilisés) dans une annexe méthodologique livrée avec chaque rapport final. Cela permet à nos clients de reproduire ou de contester tout résultat, et de démontrer leur conformité en cas de challenge par un régulateur ou un auditeur interne.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              Questions fréquentes
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
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Ressources associées</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: '/quantitative-healthcare-market-research', label: 'English methodology guide', desc: 'Consultez le guide anglais complet.' },
                { to: '/fr/strategic-portfolio', label: 'Portefeuille stratégique', desc: 'Capacités globales BioNixus.' },
                { to: '/fr/healthcare-market-research', label: 'Blueprints d\'entrée pays', desc: 'Plans d\'accès pharmaceutique par pays.' },
                { to: '/fr/healthcare-market-research/france', label: 'Études santé France', desc: 'Focus HAS/CEPS et marché français.' },
                { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East', desc: 'Exécution terrain au Moyen-Orient (EN).' },
                { to: '/fr/contact', label: 'Contacter BioNixus', desc: 'Discutez d\'un projet quantitatif sur mesure.' },
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
              Concevons ensemble votre prochain programme quantitatif
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Un consultant senior BioNixus prendra le temps de comprendre votre décision commerciale et vous proposera un design d'étude quantitative — sampling, mode, contrôle qualité, analyse — adapté à votre calendrier et à votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/fr/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Demander une proposition <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:mosama@bionixus.com?subject=Recherche%20quantitative%20BioNixus"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                Écrire à l'équipe
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-primary-foreground/85 text-sm">
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Conforme RGPD et EphMRA</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Panels vérifiés RPPS et GMC</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Bilingue arabe-anglais au Golfe</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
