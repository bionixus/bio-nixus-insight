import type { JSX } from 'react';
import type { Language } from '@/lib/i18n';
import { MethodologyLongFormLayout, type MethodologyLongFormCopy } from './MethodologyLongFormLayout';

type Props = { lang: Language };

export const METHODOLOGY_FR_FAQ = [
  {
    question: 'BioNixus utilise-t-il la même méthodologie pour la santé et la grande consommation ?',
    answer:
      'Oui — la colonne de gouvernance est la même : conception centrée sur la décision, échantillon vérifié, protocoles terrain, validation en plusieurs étapes, éthique et un rapport pour ceux qui agissent. Les répondants, les codes et le grain des tableaux changent. Les briefs santé recrutent médecins, payeurs et comptes hospitaliers sous BHBIA, EphMRA et pharmacovigilance. Les briefs consommation recrutent shoppers, acheteurs de catégorie et comptes retail nommés sous ESOMAR et les codes locaux.',
  },
  {
    question: 'Comment vérifiez-vous les échantillons santé ?',
    answer:
      'Les panélistes santé passent une vérification de licence contre les registres officiels, une confirmation de spécialité et un contrôle du lieu d’exercice. Nous recrutons dans des bases médicales vérifiées, des registres hospitaliers et des listes de sociétés — pas dans des pools internet ouverts. Un rafraîchissement trimestriel retire les médecins déménagés ou à la retraite.',
  },
  {
    question: 'Comment échantillonnez-vous les études consommation et commerce traditionnel ?',
    answer:
      'Les échantillons consommation se construisent autour des comptes et canaux où le volume se déplace vraiment — modern trade, pharmacies et épiceries indépendantes, bakals et distributeurs nommés — plus des quotas shopper et acheteur quand le brief a besoin de preuves de panier. Les screeners sont relus avant le terrain. Mystery shops, visites de comptes et intercepts quand un panel syndiqué sous-échantillonne le canal.',
  },
  {
    question: 'Quels contrôles qualité s’appliquent sur le terrain ?',
    answer:
      'Chaque projet suit un protocole de délais de recrutement, d’honoraires conformes, de fenêtres d’entretien et d’escalade de quotas. Les enquêtes quantitatives sont suivies en temps réel sur la durée, l’abandon et le straight-lining. Les sessions qualitatives sont enregistrées avec consentement, transcrites et débriefées sous 24 heures. Les études multi-pays tiennent des stand-ups quotidiens.',
  },
  {
    question: 'Comment le RGPD et la protection des données locales sont-ils traités ?',
    answer:
      'Les projets opèrent sous RGPD, UK Data Protection Act, lignes directrices ESOMAR et droit local — y compris le PDPL saoudien, la loi fédérale des Émirats et les exigences CITRA au Koweït. Le travail santé suit aussi BHBIA et EphMRA. Le consentement est recueilli avant la collecte ; les données sont pseudonymisées ; les informations identifiables ne vont pas au client sans consentement de suivi.',
  },
  {
    question: 'Que contient un rapport méthodologique BioNixus ?',
    answer:
      'Chaque livrable s’ouvre sur les constats clés et les actions recommandées, puis les données de soutien. Les packs quantitatifs incluent tableaux d’échantillon, pondération, intervalles de confiance et questionnaire. Les packs qualitatifs incluent une analyse thématique avec verbatims anonymisés. Les trackers peuvent inclure des tableaux de bord. Les dossiers santé peuvent inclure des annexes HTA ; les packs consommation, des coupes marque et trade pour le Head of Marketing.',
  },
] as const;

export const METHODOLOGY_FR_COPY: MethodologyLongFormCopy = {
  faqTitle: 'Questions fréquentes',
  faq: METHODOLOGY_FR_FAQ,
  theatre: {
    eyebrow: 'Une même colonne',
    h2: 'Santé et grande consommation partagent la méthode, pas le répondant',
    leadBefore:
      'BioNixus est un institut d’études primaires. Les six mêmes contrôles — conception, échantillon, terrain, validation, éthique et rapport — s’appliquent à un brief',
    healthcareLink: 'd’études de marché santé',
    leadMid: 'et à un brief consommation ou',
    industryLink: 'secteur',
    leadAfter:
      '. Ce qui change, c’est qui est dans l’échantillon, quel code régit l’honoraire, et à quel grain les tableaux doivent être coupés.',
    caption: 'Comment la méthodologie BioNixus s’applique en santé versus grande consommation',
    controlCol: 'Contrôle',
    healthcareCol: 'Santé',
    consumerCol: 'Grande consommation et autres secteurs',
    rows: [
      {
        cut: 'À qui nous parlons',
        healthcare: 'Médecins, payeurs, KOL, comptes hospitaliers et officines',
        consumer: 'Shoppers, acheteurs de catégorie, distributeurs, commerce traditionnel',
      },
      {
        cut: 'Comment nous les trouvons',
        healthcare: 'Registres de licences, réseaux hospitaliers, sociétés de spécialité',
        consumer: 'Comptes nommés, listes trade, intercepts, mystery shops, recontact avec consentement',
      },
      {
        cut: 'Codes qui lient le travail',
        healthcare: 'BHBIA, EphMRA, pharmacovigilance, honoraires à la juste valeur de marché',
        consumer: 'ESOMAR, codes locaux d’études consommation, incentives auditables',
      },
      {
        cut: 'Ce que le pack doit affronter',
        healthcare: 'Diligence médicale, accès et HTA',
        consumer: 'Examen marque, trade et directeur commercial',
      },
    ],
  },
  design: {
    h2: 'Principes de conception d’étude',
    lead:
      'Chaque programme commence par transformer une question business en quelque chose qu’une étude peut vraiment répondre. Nous nous asseyons avec ceux qui utiliseront la preuve — marque, médical et market access en santé ; marque, catégorie et trade en consommation — et fixons des objectifs assez précis pour décider, assez souples pour corriger le cap. Une étude autour de la mauvaise question est rapide, bon marché et inutile.',
    quantitative: {
      title: 'Quantitatif',
      body:
        'Questionnaires structurés, échelles validées, conjoint ou MaxDiff quand les arbitrages comptent — choix de traitement du médecin ou choix de pack du shopper. Les instruments passent un pré-test cognitif avec au moins cinq répondants.',
      link: 'Études quantitatives',
    },
    qualitative: {
      title: 'Qualitatif',
      body:
        'Guides semi-directifs en arbre de décision. Santé : entretiens médecins, boards payeurs, ethnographie hospitalière. Consommation : depths shoppers, entretiens distributeurs, observation en magasin. Les guides sont affinés après les deux ou trois premières sessions.',
      link: 'Études qualitatives',
    },
    mixed: {
      title: 'Méthode mixte',
      body:
        'Quand le brief a besoin de grain statistique et de profondeur explicative — une étude de lancement qui couple une enquête 200 médecins avec des depths spécialistes, ou une étude catégorie qui couple une enquête shopper avec des visites de comptes que le flux syndiqué ne montre pas.',
    },
  },
  sampling: {
    h2: 'Cadres d’échantillonnage et gouvernance de la taille',
    lead:
      'La qualité de l’échantillon détermine la crédibilité de tout insight. Les échantillons santé viennent de panels professionnels propriétaires dans 17+ marchés EMEA et CCG, plus des partenaires ESOMAR et BHBIA. Les échantillons consommation et industrie se construisent autour des comptes et canaux du brief — pas d’un pool internet ouvert.',
    healthcareKicker: 'Santé',
    panelTitle: 'Sourcing du panel',
    panel: [
      {
        title: 'Vérification de licence.',
        body:
          'Recrutement dans les bases réglementaires — DHA Dubaï, DOH Abou Dhabi, SFDA Arabie saoudite, MOHAP Émirats et MOH Koweït — pour que chaque panéliste ait une licence, une spécialité et un lieu d’exercice auditables avant le premier contact.',
      },
      {
        title: 'Réseaux hospitaliers.',
        body:
          'Orientation spécialisée via des coordinateurs dans SEHA, Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi et Saudi German Hospital.',
      },
      {
        title: 'Sociétés professionnelles.',
        body: 'Les listes de sociétés sont croisées avec les registres de licences pour que l’adhésion ne tienne jamais seule.',
      },
      {
        title: 'Validation en trois couches.',
        body: 'Licence, spécialité et lieu d’exercice. Un rafraîchissement trimestriel retire les médecins déménagés ou à la retraite.',
      },
    ],
    consumerKicker: 'Grande consommation & industrie',
    channelTitle: 'Sourcing par compte et canal',
    namedTitle: 'Comptes nommés.',
    namedBefore:
      'Distributeurs, pharmacies indépendantes, épiceries et bakals sont échantillonnés là où le volume se déplace — le grain que les flux syndiqués',
    nielsen: 'Nielsen',
    namedMid: 'et',
    gfk: 'de type GfK',
    namedMid2: 'manquent en général. Voir',
    accountLink: 'les études au niveau du compte',
    namedAfter: '.',
    shopper: {
      title: 'Quotas shopper et acheteur.',
      body:
        'Les acheteurs de catégorie et shoppers ménage sont recrutés sur le SKU, le canal et la ville du brief — pas une moyenne nationale qui cache le compte.',
    },
    mystery: {
      title: 'Mystery shop et intercept.',
      body:
        'Quand la question est ce qui se passe en rayon, au comptoir ou dans le magasin de commerce traditionnel.',
    },
    recontact: {
      title: 'Recontact avec consentement.',
      body:
        'Les répondants vérifiés des vagues précédentes qui ont accepté un nouveau contact restent la voie la plus rapide quand le délai prime.',
    },
    closing:
      'Les tailles d’échantillon se calculent contre des cibles de puissance statistique. Pour la plupart des programmes quantitatifs, nous visons au moins ±5 % de marge d’erreur à 95 % de confiance dans chaque sous-groupe reportable. Si la population est petite — spécialistes de maladies rares, membres de formulaire national ou courte liste de key accounts — nous recrutons en quasi-recensement et ajustons l’analyse.',
  },
  field: {
    h2: 'Gouvernance terrain et contrôles qualité',
    p1:
      'Le terrain est le lieu où la méthodologie rencontre la discipline opérationnelle. Chaque projet — santé ou consommation — suit un protocole de délais de recrutement, d’honoraires (conformes au code sectoriel), de fenêtres d’entretien et d’escalade de quotas.',
    p2:
      'Les enquêtes quantitatives ont des tableaux de bord en temps réel sur le taux d’achèvement, le temps médian, l’abandon et le straight-lining. Celles qui finissent en moins d’un tiers du temps médian attendu sont signalées et exclues si la qualité échoue.',
    p3:
      'Le qualitatif est enregistré avec consentement et transcrit. Les modérateurs remettent des notes de débrief sous 24 heures. Les études multi-pays ont un chef de projet central et des stand-ups quotidiens avec les équipes locales.',
    p4Before: 'Le terrain',
    clinicalLink: 'd’appui aux essais cliniques',
    p4After:
      'suit la même colonne, avec des contrôles extra d’identification de centres et de profil d’investigateurs. Les vagues mystery shop et visites de comptes suivent la même colonne, avec des journaux de sélection de magasin et de disponibilité SKU.',
  },
  validation: {
    h2: 'Validation des données et assurance qualité assistée par IA',
    p1:
      'Les données brutes passent un pipeline de validation en plusieurs étapes. La première est automatisée : les algorithmes signalent les ID dupliqués, les combinaisons impossibles et les schémas de réponses anormaux.',
    p2:
      'La deuxième est menée par un analyste. Un chercheur senior relit les enregistrements signalés contre les données de recrutement et contacte au besoin le répondant. Les enregistrements non validables sont retirés avec un motif documenté.',
    p3:
      'L’assurance qualité assistée par IA ajoute une troisième couche. Des modèles de langage évaluent les questions ouvertes. Les transcriptions qualitatives passent par une modélisation thématique. Les thèmes machine sont ensuite validés par l’équipe d’analyse — l’IA accélère la détection ; chaque conclusion interprétative est relue par un humain.',
    p4Before:
      'Les clients reçoivent des jeux de données auxquels ils peuvent se fier pour les décisions internes et, en briefs santé, pour des dépôts réglementaires ou HTA. Voir comment la preuve alimente',
    accessLink: 'l’accès au marché et la stratégie HTA',
    p4After: '.',
  },
  ethics: {
    h2: 'Éthique, RGPD et codes sectoriels',
    p1:
      'Chaque projet BioNixus opère sous RGPD, UK Data Protection Act, lignes directrices ESOMAR et droit local — y compris PDPL saoudien, loi fédérale des Émirats et CITRA au Koweït. Ce plancher s’applique à la santé et à la consommation.',
    p2:
      'Les programmes santé ajoutent les Legal & Ethical Guidelines BHBIA et le code EphMRA. Les études qui touchent des données patients — même indirectement via des dossiers rapportés par des médecins — obtiennent une revue éthique là où elle est exigée. Le signalement d’événements indésirables est briefé à chaque modérateur, avec escalade 24 heures vers la pharmacovigilance du client.',
    p3:
      'Les programmes consommation et industrie restent dans ESOMAR et le code local applicable. Les incentives passent par des canaux auditables. Les honoraires santé sont en plus calés sur les barèmes de juste valeur de marché.',
    p4:
      'Le consentement est recueilli avant la collecte, dans la langue préférée du répondant. Les données personnelles sont pseudonymisées et stockées sur des serveurs chiffrés dans l’UE.',
  },
  reporting: {
    h2: 'Standards de reporting et structure des livrables',
    p1:
      'Un insight n’a de valeur que s’il atteint ceux qui agissent. Les rapports s’ouvrent sur trois à cinq constats clés et les actions recommandées — avant les données de soutien. Cela vaut pour un Head of Marketing d’une marque consommation et pour un lead market access au lancement d’une thérapie.',
    p2:
      'Les rapports quantitatifs incluent des annexes méthodologiques — composition de l’échantillon, pondération, intervalles de confiance et questionnaire. Les rapports qualitatifs présentent une analyse thématique avec verbatims anonymisés.',
    p3Before:
      'Les livrables standard incluent des tableaux de bord pour les trackers, des decks exécutifs et des annexes techniques. Les packs santé peuvent être coupés pour les équipes HTA. Les packs consommation, pour les décisions marque, trade et SKU. Pour',
    intelLink: 'l’intelligence concurrentielle',
    p3After: 'nous fournissons des rapports de suivi avec alertes dans les deux théâtres.',
    p4Before: 'Tous les rapports passent une revue interne en deux étapes — analyste pour l’exactitude, directeur senior pour la cohérence stratégique. ',
    kolLink: 'Le mapping KOL et parties prenantes',
    p4After: 'suit le même protocole, avec une visualisation extra des réseaux d’influence.',
  },
};

export function MethodologyLongFormFr({ lang }: Props): JSX.Element {
  return <MethodologyLongFormLayout lang={lang} copy={METHODOLOGY_FR_COPY} />;
}
