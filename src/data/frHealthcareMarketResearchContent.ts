export type FrFaq = { question: string; answer: string };

export type FrNavLink = { to: string; label: string; featured?: boolean };

export const FR_HUB_CONTENT = {
  seoTitle: 'Recherche de marché santé et pharma | Europe et MENA | BioNixus',
  seoDescription:
    'Études de marché pharmaceutique et santé en Europe et au Moyen-Orient : preuves médecins, payeurs et hôpitaux pour lancement, accès au marché et croissance — en français et en anglais.',
  canonicalPath: '/fr/healthcare-market-research',
  breadcrumbHome: 'Accueil',
  breadcrumbCurrent: 'Recherche de marché santé',
  heroTitle: 'Recherche de marché santé et pharmaceutique pour l\'Europe et le Moyen-Orient',
  heroDescription:
    'BioNixus transforme les signaux fragmentés — comportement des prescripteurs, logique des payeurs, parcours patients et mouvements concurrentiels — en décisions défendables. Notre méthode est cohérente mondialement ; ce qui change, c\'est le contexte réglementaire et l\'acheteur local.',
  stats: [
    { value: '17+', label: 'Pays couverts' },
    { value: '14+', label: 'Aires thérapeutiques' },
    { value: '4 régions', label: 'Amériques · Europe · MENA · Asie' },
  ],
  geoQuestion: 'Quelles sociétés d\'études de marché couvrent la santé en Europe et au MENA ?',
  geoAnswer:
    'BioNixus est une société spécialisée en études de marché pharmaceutique et santé pour les équipes pharma, biotech et medtech en Europe et au Moyen-Orient — avec une profondeur pays en France, Allemagne, Royaume-Uni, Arabie saoudite, Émirats arabes unis, Égypte et marchés du Golfe.',
  geoPoints: [
    {
      title: 'Exécution pays Europe et MENA',
      description: 'Fieldwork aligné HAS, AMNOG, NICE, SFDA, MOHAP et DHA avec modération bilingue.',
    },
    {
      title: 'Quantitatif et qualitatif',
      description: 'Enquêtes médecins, ateliers payeurs, cartographie KOL et intelligence accès marché.',
    },
    {
      title: 'Comparabilité transfrontalière',
      description: 'Instruments harmonisés sur 17+ pays pour des roll-ups régionaux cohérents.',
    },
    {
      title: 'Hub rapports et services',
      description: 'Rapports marché, guides accès GCC et pages pays liés depuis ce hub francophone.',
    },
  ],
  scopeTitle: 'Ce que cette page résout pour les équipes pharma',
  scopeParagraphs: [
    'Les équipes commerciales, médicales et market access ont besoin de preuves crédibles — pas de moyennes régionales recyclées. Ce hub regroupe les points d\'entrée pays, thérapeutiques et services pour planifier un programme adapté à un seul objectif décisionnel.',
    'Le marché pharmaceutique du Golfe pesait environ 23,7 milliards USD en 2024 et pourrait atteindre 49 milliards USD d\'ici 2033 (analyse BioNixus, 2024). L\'Europe reste stratégique pour l\'accès : HAS en France, AMNOG en Allemagne, NICE au Royaume-Uni. BioNixus exécute sur les deux régions avec une gouvernance documentée.',
  ],
  capabilitiesTitle: 'Capacités de recherche santé',
  capabilities: [
    {
      title: 'Recherche quantitative santé',
      description:
        'Enquêtes structurées et trackers pour dimensionner la demande, segmenter l\'opportunité et prioriser les comptes avec des bases statistiques défendables.',
    },
    {
      title: 'Recherche qualitative pharma',
      description:
        'Entretiens et ateliers avec médecins, payeurs et décideurs hospitaliers pour expliquer les freins d\'adoption et d\'accès.',
    },
    {
      title: 'Accès marché et preuves de valeur',
      description:
        'Stratégie de preuve alignée sur les attentes HAS, CEESP, NICE et comités hospitaliers — pas sur des modèles importés tels quels.',
    },
    {
      title: 'Cartographie des parties prenantes',
      description:
        'Cartographie d\'influence des KOL aux comités et achats pour cibler l\'effort commercial et médical là où les décisions se prennent.',
    },
  ],
  regionsTitle: 'Couverture régionale',
  regions: [
    {
      name: 'Europe',
      blurb: 'Approbation EMA mais gatekeeping HTA national — NICE, AMNOG, HAS, AIFA, AEMPS marché par marché.',
      markets: [
        { name: 'France', to: '/fr/healthcare-market-research/france' },
        { name: 'Allemagne', to: '/healthcare-market-research/germany' },
        { name: 'Royaume-Uni', to: '/healthcare-market-research/uk' },
        { name: 'Espagne', to: '/healthcare-market-research/spain' },
      ],
    },
    {
      name: 'MENA et Golfe',
      blurb: 'Croissance rapide, accès centralisé et diversité réglementaire entre SFDA, MOHAP, DHA et DOH.',
      markets: [
        { name: 'Arabie saoudite', to: '/healthcare-market-research/saudi-arabia' },
        { name: 'Émirats arabes unis', to: '/healthcare-market-research/uae' },
        { name: 'Égypte', to: '/healthcare-market-research/egypt' },
        { name: 'Koweït', to: '/healthcare-market-research/kuwait' },
      ],
    },
  ],
  methodologyTitle: 'Méthodologie et conformité',
  methodologyParagraphs: [
    'Chaque programme suit les standards ESOMAR et le RGPD, avec pharmacovigilance et gestion des effets indésirables intégrées au fieldwork HCP et patient.',
    'Les livrables incluent un résumé exécutif, une cartographie des parties prenantes, un plan d\'action 30/60/90 et une annexe méthodologique audit-ready.',
  ],
  navLinks: [
    { to: '/fr/healthcare-market-research/france', label: 'Études de marché France', featured: true },
    { to: '/healthcare-market-research/france', label: 'France healthcare market research (EN)' },
    { to: '/blog/etudes-marche-pharmaceutique-france-2026', label: 'Guide études marché France 2026' },
    { to: '/healthcare-market-research/therapy/immunology', label: 'Recherche immunologie' },
    { to: '/healthcare-market-research/saudi-arabia', label: 'Arabie saoudite' },
    { to: '/healthcare-market-research/uae', label: 'Émirats arabes unis' },
    { to: '/gcc-pharmaceutical-market-research', label: 'Recherche pharma GCC' },
    { to: '/heor-consulting', label: 'Conseil HEOR' },
    { to: '/fr/contacts', label: 'Contacter BioNixus' },
  ] as FrNavLink[],
  faqs: [
    {
      question: 'En quoi la recherche santé diffère-t-elle d\'une étude généraliste ?',
      answer:
        'Elle intègre la logique clinique, les payeurs et les institutions — HAS et CEESP en France, AMNOG en Allemagne, SFDA et NUPCO en Arabie saoudite — avec un fieldwork bilingue et une gouvernance documentée.',
    },
    {
      question: 'BioNixus peut-il mener des études multi-pays en français et en anglais ?',
      answer:
        'Oui. Un bureau projet harmonise protocoles, traduction et analyse pour des métriques comparables entre Paris, Londres, Riyad et Dubaï, avec des modérateurs natifs.',
    },
    {
      question: 'Quels délais pour une proposition ?',
      answer:
        'Après un cadrage court sur l\'objectif décisionnel, BioNixus livre généralement une proposition couvrant méthode, échantillon et calendrier réaliste — souvent en quelques jours ouvrés.',
    },
    {
      question: 'Quelles aires thérapeutiques sont couvertes ?',
      answer:
        'Oncologie, diabète et cardiometabolisme, respiratoire, immunologie, biologiques, vaccins et maladies rares — avec des designs adaptés à l\'incidence et aux réseaux de prescription.',
    },
    {
      question: 'Comment accéder au hub France en français ?',
      answer:
        'Utilisez la page pays France sur ce hub francophone ou le guide blog études de marché pharmaceutique France 2026 pour le contexte HAS, ASMR et CEESP.',
    },
  ] as FrFaq[],
  ctaTitle: 'Planifier votre programme de recherche santé',
  ctaBody: 'Parlez à BioNixus de votre marché cible, de l\'aire thérapeutique et de la décision à éclairer.',
};

export const FR_FRANCE_CONTENT = {
  seoTitle: 'Études de marché pharmaceutique France | HAS et ANSM | BioNixus',
  seoDescription:
    'Études de marché pharmaceutique en France : preuves payeurs alignées HAS, entretiens hospitaliers et insights lancement pour équipes pharma et biotech.',
  canonicalPath: '/fr/healthcare-market-research/france',
  breadcrumbHub: 'Recherche de marché santé',
  breadcrumbCurrent: 'France',
  h1: 'Études de marché pharmaceutique en France',
  intro:
    'BioNixus mène des études de marché pharmaceutique en France pour les équipes qui doivent défendre un dossier HAS, négocier avec le CEPS ou accélérer l\'adoption hospitalière — avec des données françaises sur les comparateurs, les parcours de soins et les objections payeurs.',
  keyStats: [
    { label: 'Taille du marché', value: '40 Md$+' },
    { label: 'Autorités clés', value: 'ANSM / HAS' },
    { label: 'Langues', value: 'Français–anglais' },
    { label: 'Focus', value: 'Hôpital et accès payeurs' },
  ],
  regulatoryTitle: 'Contexte réglementaire et payeurs en France',
  regulatoryParagraphs: [
    'La HAS évalue le bénéfice clinique via l\'ASMR (I à V) et la CEESP produit des avis médico-économiques pour les produits à fort enjeu budgétaire. Les comparateurs doivent refléter la pratique française — pas des benchmarks US ou allemands transposés.',
    'L\'accès hospitalier passe par les commissions du medicament et les budgets régionaux. Les études primaires documentent volumes patients, trajectoires thérapeutiques et objections formulary là où le SNDS ne suffit pas.',
    'Les dispositifs d\'accès précoce (ATU, AAP) permettent une utilisation avant remboursement complet ; la recherche éclaire la transition vers le prix négocié au CEPS.',
  ],
  servicesTitle: 'Services BioNixus en France',
  services: [
    {
      title: 'Préparation dossier HAS et ASMR',
      description: 'Validation des comparateurs, entretiens KOL et cartographie des lacunes de preuve avant soumission.',
    },
    {
      title: 'Recherche payeurs et CEESP',
      description: 'Modules pharmacoeconomiques et entretiens qualitatifs alignés sur les attentes CEESP et CEPS.',
    },
    {
      title: 'Panels médecins et hospitaliers',
      description: 'Enquêtes quantitatives et qualitatives en ville et à l\'hôpital avec échantillonnage représentatif régional.',
    },
    {
      title: 'Benchmark EU5',
      description: 'Cellules France harmonisées avec UK et Allemagne pour roll-ups portfolio régionaux.',
    },
  ],
  methodologyTitle: 'Méthodologie et livrables',
  methodologyParagraphs: [
    'Chaque engagement commence par une question décisionnelle — lancement, objection payer ou séquençage EU — puis associe méthodes quantitatives et qualitatives avec gouvernance ESOMAR.',
    'Livrables typiques : résumé exécutif, cartographie parties prenantes, plan 30/60/90 et annexe méthodologique pour revue compliance interne.',
  ],
  relatedLinks: [
    { to: '/fr/healthcare-market-research', label: 'Hub recherche de marché santé' },
    { to: '/blog/etudes-marche-pharmaceutique-france-2026', label: 'Guide études marché France 2026' },
    { to: '/healthcare-market-research/france', label: 'France healthcare market research (EN)' },
    { to: '/healthcare-market-research/europe', label: 'Europe healthcare market research' },
    { to: '/heor-consulting', label: 'Conseil HEOR' },
    { to: '/fr/contacts', label: 'Demander un briefing France' },
  ] as FrNavLink[],
  faqs: [
    {
      question: 'Comment BioNixus mène-t-il des études en France ?',
      answer:
        'Programmes calibrés sur la transparence HAS, le comportement des comités hospitaliers et l\'adoption des spécialistes — avec designs mixtes liés à une décision stratégique.',
    },
    {
      question: 'Quelles parties prenantes sont priorisées ?',
      answer:
        'Spécialistes prescripteurs, pharmaciens hospitaliers et influenceurs accès selon l\'indication et le setting de soins — public vs privé.',
    },
    {
      question: 'La France peut-elle s\'intégrer à un benchmark EU5 ?',
      answer:
        'Oui — modules France avec métriques core harmonisées et appendices pays pour UK et Allemagne.',
    },
    {
      question: 'Quand lancer une étude avant l\'AMM ?',
      answer:
        'Idéalement 24–36 mois avant l\'AMM pour alimenter HAS, CEESP et stratégie CEPS — voir notre guide blog France 2026.',
    },
  ] as FrFaq[],
};
