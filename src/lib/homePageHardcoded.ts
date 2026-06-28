/** Auto-generated from scripts/data/home-hardcoded-i18n-checklist-v2.csv — do not edit by hand */
import type { Language } from './i18n';

export type HomePathwayCardCopy = {
  title: string;
  description: string;
  label?: string;
  hint?: string;
};

export type HomePageHardcodedCopy = {
  compliance: { badges: [string, string, string, string, string] };
  heroDashboard: {
    heading: string;
    status: string;
    calloutValue: string;
    calloutLabel: string;
    calloutCagr: string;
    legendGlobal: string;
    legendRegional: string;
    metrics: [
      { label: string; value: string; sub: string },
      { label: string; value: string; sub: string },
      { label: string; value: string; sub: string },
    ];
  };
  globalReach: { signals: [string, string, string, string] };
  industriesGateway: {
    h2: string;
    intro: string;
    stats: [{ value: string; label: string }, { value: string; label: string }, { value: string; label: string }];
    exploreAll: string;
    insightsLink: string;
    exploreSegment: string;
  };
  industrySegments: {
    pharma: { label: string; tagline: string; navLabel: string };
    b2b: { label: string; tagline: string; navLabel: string };
    b2c: { label: string; tagline: string; navLabel: string };
  };
  pathways: {
    h2: string;
    introFull: string;
    introPart1?: string;
    introLinkHealthcare?: string;
    introPart2?: string;
    introLinkHub?: string;
    introPart3?: string;
    moreSummary: string;
    moreLinksTemplate: string;
  };
  pathwayCards: HomePathwayCardCopy[];
  visualBriefing: {
    heading: string;
    figures: [{ alt: string; caption: string }, { alt: string; caption: string }];
  };
  overviewVideo: {
    title: string;
    description: string;
    transcript: string;
    fallbackLabel: string;
  };
  cta: {
    researchProposalHeadline: string;
    body: string;
    requestProposal: string;
    emailUs: string;
    mailtoSubject: string;
    phoneRegionLabels: [string, string, string];
  };
  testimonials: {
    marquee: string;
    altTemplate: string;
  };
  heroTrust: {
    primary: string;
    stats: string;
  };
  videoEmbed: {
    transcriptLabel: string;
  };
};

export const homePageHardcoded: Record<Language, HomePageHardcodedCopy> = {
  en: {
    compliance: {
      badges: [
        "EMA Aligned",
        "GDPR Compliant",
        "FDA Compliant",
        "MOHAP Compliant",
        "GCP Standards"
      ]
    },
    heroDashboard: {
      heading: "Market Intelligence Dashboard",
      status: "Live",
      calloutValue: "~$1.8T",
      calloutLabel: "Global Pharma Market (2026E)",
      calloutCagr: "↑ ~6% CAGR 2024–2026",
      legendGlobal: "Global benchmark",
      legendRegional: "Regional depth",
      metrics: [
        {
          label: "Global Pharma",
          value: "~$1.8T",
          sub: "2026E market"
        },
        {
          label: "Americas Pharma",
          value: "~$720B",
          sub: "2026E market"
        },
        {
          label: "APAC Pharma",
          value: "~$480B",
          sub: "2026E market"
        }
      ]
    },
    globalReach: {
      signals: [
        "6 continents · 38 countries",
        "Pharma & healthcare — where we lead",
        "Enterprise & consumer research",
        "GDPR · GCP · local regulatory alignment"
      ]
    },
    industriesGateway: {
      h2: "Beyond healthcare — research across industries",
      intro: "The same sampling discipline and senior-led analysis we built for pharma now extends to B2B and B2C markets.",
      stats: [
        {
          value: "127+",
          label: "Projects across industries"
        },
        {
          value: "16",
          label: "Industry verticals"
        },
        {
          value: "7",
          label: "GCC/MENA markets with industry pages"
        }
      ],
      exploreAll: "Explore all industries",
      insightsLink: "Read B2B & B2C industry insights",
      exploreSegment: "Explore {segment}"
    },
    industrySegments: {
      pharma: {
        label: "Pharma & Healthcare",
        tagline: "Where BioNixus was built — and still leads.",
        navLabel: "Pharma & Healthcare"
      },
      b2b: {
        label: "B2B Industries",
        tagline: "Enterprise, institutional, and infrastructure markets.",
        navLabel: "B2B Industries"
      },
      b2c: {
        label: "B2C Industries",
        tagline: "Consumer demand, brands, and the shopper journey.",
        navLabel: "B2C Industries"
      }
    },
    pathways: {
      h2: "Healthcare Research Pathways",
      introFull: "BioNixus runs healthcare market research globally — with country-level depth across the Americas, Europe, and the Middle East. Use these healthcare market research pathways for launch, market access, and growth. Compare methods in our market research hub.",
      introPart1: "BioNixus runs healthcare market research globally — with country-level depth across the Americas, Europe, and the Middle East. Use these ",
      introLinkHealthcare: "healthcare market research",
      introPart2: " pathways for launch, market access, and growth. Compare methods in our ",
      introLinkHub: "market research",
      introPart3: " hub.",
      moreSummary: "More research pathways",
      moreLinksTemplate: "{N} links"
    },
    pathwayCards: [
      {
        title: "Healthcare Market Research",
        description: "Decision-ready healthcare market research programs for pharmaceutical teams — globally, with deep execution in Europe, the Americas, and the Middle East."
      },
      {
        title: "Saudi Arabia Pharmaceutical Research",
        description: "FDA-aligned pharmaceutical and healthcare market research intelligence for launch, access, and growth in KSA.",
        label: "Country-Level Depth",
        hint: "Best for country-level execution"
      },
      {
        title: "UAE Pharmaceutical Market Research",
        description: "Dubai and Abu Dhabi healthcare intelligence for drug development, market access, and quantitative and qualitative research across the Emirates.",
        label: "UAE Priority",
        hint: "Best for UAE launch and access execution"
      },
      {
        title: "Middle East Pharmaceutical Market Research",
        description: "GCC-focused pharmaceutical evidence programs for launch sequencing, market access, and cross-country execution.",
        label: "GCC Priority",
        hint: "Best for Middle East launch and access decisions"
      },
      {
        title: "Strategic Portfolio",
        description: "Full capability overview: 127+ projects, 48 global clients, dual-practice healthcare and consumer research across Egypt and MENA.",
        label: "Egypt Focus",
        hint: "See our market research portfolio"
      },
      {
        title: "Top Market Research Companies in Egypt (2026)",
        description: "Independent guide comparing 5 leading firms for healthcare, pharma, and consumer research in Egypt — the largest market in MENA.",
        label: "New Guide",
        hint: "Best for Egypt partner selection"
      },
      {
        title: "Quantitative Healthcare Market Research Guide",
        description: "Execution-ready 2026 guide for survey architecture, tracker governance, and AI-assisted validation in Saudi Arabia and UAE.",
        label: "Featured Guide",
        hint: "Best for quantitative design decisions"
      },
      {
        title: "All Industries",
        description: "Explore pharma and healthcare, B2B, and B2C market research — the same rigor behind 127+ projects across 16 industry verticals.",
        label: "Cross-Industry",
        hint: "Explore the industries hub"
      },
      {
        title: "Global Websites Directory",
        description: "Discover market research pages by country and region to support pharmaceutical and enterprise strategy worldwide.",
        label: "Country-Level Depth",
        hint: "Best for multi-country planning"
      }
    ],
    visualBriefing: {
      heading: "How BioNixus turns field evidence into launch decisions",
      figures: [
        {
          alt: "Healthcare market research workshop with GCC commercial and market access leaders reviewing pharmaceutical evidence",
          caption: "Converting pharmaceutical data and evidence into launch and access actions."
        },
        {
          alt: "Pharmaceutical data validation workflow combining quantitative analytics and AI-assisted quality review",
          caption: "Human validation operations with governed AI-assisted quality controls for healthcare datasets."
        }
      ]
    },
    overviewVideo: {
      title: "BioNixus healthcare market research overview",
      description: "A short overview of how BioNixus designs quantitative, qualitative, and access programs for pharmaceutical teams in global markets including the Americas, Europe, and the Middle East.",
      transcript: "BioNixus supports pharmaceutical and healthcare teams with market research built for real decisions — launch readiness, market access, payer evidence, and competitive intelligence. Programs combine senior-led design, bilingual Arabic–English fieldwork, and audit-ready governance across global markets including the Americas, Europe, and the Middle East.",
      fallbackLabel: "Browse anonymized case studies"
    },
    cta: {
      researchProposalHeadline: "Get a custom healthcare market research proposal",
      body: "Our team supports pharmaceutical companies with decision-ready insights across the Americas, Europe, and the Middle East using quantitative and qualitative methodologies.",
      requestProposal: "Request a proposal",
      emailUs: "Email us",
      mailtoSubject: "Healthcare Market Research Inquiry",
      phoneRegionLabels: [
        "US No.",
        "Europe No.",
        "Middle East, Africa and Asia No."
      ]
    },
    testimonials: {
      marquee: "Industry Leaders We Serve Alongside",
      altTemplate: "{company} pharmaceutical market research case study preview"
    },
    heroTrust: {
      primary: "Trusted by",
      stats: "48 global clients · 127+ projects · 38 countries"
    },
    videoEmbed: {
      transcriptLabel: "Transcript"
    }
  },
  de: {
    compliance: {
      badges: [
        "Ausgerichtet an der Europäischen Arzneimittel-Agentur",
        "Konform mit der Datenschutz-Grundverordnung",
        "Konform mit der saudi-arabischen Lebensmittel- und Arzneimittelbehörde",
        "Konform mit dem Gesundheitsministerium der Vereinigten Arabischen Emirate",
        "Standards Guter Klinischer Praxis"
      ]
    },
    heroDashboard: {
      heading: "Marktinformations-Dashboard",
      status: "Aktuell",
      calloutValue: "~1,8 Bio. USD",
      calloutLabel: "Globaler Arzneimittelmarkt (Prognose 2026)",
      calloutCagr: "↑ ~6 % durchschnittliche jährliche Wachstumsrate 2024–2026",
      legendGlobal: "Globale Referenz",
      legendRegional: "Regionale Markttiefe",
      metrics: [
        {
          label: "Globaler Arzneimittelmarkt",
          value: "~1,8 Bio. USD",
          sub: "Marktprognose 2026"
        },
        {
          label: "Arzneimittelmarkt Amerika",
          value: "~$720B",
          sub: "Marktprognose 2026"
        },
        {
          label: "Arzneimittelmarkt Asien und Pazifik",
          value: "~$480B",
          sub: "Marktprognose 2026"
        }
      ]
    },
    globalReach: {
      signals: [
        "6 Kontinente · 38 Länder",
        "Pharmazeutik und Gesundheitswesen — wo wir führend sind",
        "Forschung für Unternehmen und Verbraucher",
        "Datenschutz-Grundverordnung · Gute Klinische Praxis · lokale Regulierungskonformität"
      ]
    },
    industriesGateway: {
      h2: "Über das Gesundheitswesen hinaus — Forschung in allen Branchen",
      intro: "Dieselbe Stichprobenmethodik und von erfahrenen Analysten geleitete Auswertung, die wir für die Pharmaindustrie entwickelt haben, gilt jetzt auch für Geschäfts- und Privatkundenmärkte.",
      stats: [
        {
          value: "127+",
          label: "Projekte branchenübergreifend"
        },
        {
          value: "16",
          label: "Branchenvertikalen"
        },
        {
          value: "7",
          label: "Märkte des Golf-Kooperationsrats und des Nahen Ostens und Nordafrikas mit Branchenseiten"
        }
      ],
      exploreAll: "Alle Branchen entdecken",
      insightsLink: "Geschäftskunden- & Privatkunden-Brancheninsights lesen",
      exploreSegment: "Entdecken: {segment}"
    },
    industrySegments: {
      pharma: {
        label: "Pharmaindustrie & Gesundheitswesen",
        tagline: "Wo BioNixus entstand — und weiterhin führt.",
        navLabel: "Pharmaindustrie & Gesundheitswesen"
      },
      b2b: {
        label: "Geschäftskunden-Branchen",
        tagline: "Unternehmens-, institutionelle und Infrastrukturmärkte.",
        navLabel: "Geschäftskunden-Branchen"
      },
      b2c: {
        label: "Privatkunden-Branchen",
        tagline: "Verbrauchernachfrage, Marken und Shopper Journey.",
        navLabel: "Privatkunden-Branchen"
      }
    },
    pathways: {
      h2: "Gesundheitswesen-Forschungspfade",
      introFull: "BioNixus führt Gesundheitsmarktforschung weltweit durch — mit Länder-Tiefe in Amerika, Europa und Naher Osten. Nutzen Sie diese Pfade für Markteinführung, Marktzugang und Wachstum. Methoden vergleichen Sie in unserem Marktforschungs-Übersichtsbereich.",
      moreSummary: "Weitere Forschungspfade",
      moreLinksTemplate: "{N} Links"
    },
    pathwayCards: [
      {
        title: "Gesundheitsmarktforschung",
        description: "Entscheidungsreife Gesundheitsmarktforschung für Pharmaindustrie-Teams — global, mit starker Umsetzung in Europa, Amerika und Nahem Osten."
      },
      {
        title: "Pharmaindustriezeutische Forschung Saudi-Arabien",
        description: "saudi-arabische Arzneimittelbehörde-ausgerichtete Pharmaindustrie- und Gesundheitsmarkt-Marktinformationen für Markteinführung, Zugang und Wachstum in Saudi-Arabien.",
        label: "Länder-Tiefe",
        hint: "Ideal für länderbezogene Umsetzung"
      },
      {
        title: "Pharmaindustriemarktforschung Vereinigte Arabische Emirate",
        description: "Gesundheits-Marktinformationen für Dubai und Abu Dhabi: Arzneimittelentwicklung, Marktzugang sowie quantitative und qualitative Forschung in den Emiraten.",
        label: "Vereinigte Arabische Emirate-Priorität",
        hint: "Ideal für Markteinführung- und Marktzugang-Umsetzung in den Vereinigte Arabische Emirate"
      },
      {
        title: "Pharmaindustriemarktforschung Naher Osten",
        description: "Arzneimittel-Evidenzprogramme mit Fokus auf den Golf-Kooperationsrat für Reihenfolge der Markteinführung, Marktzugang und länderübergreifende Umsetzung.",
        label: "Priorität Golf-Kooperationsrat",
        hint: "Ideal für Markteinführung- und Marktzugang-Entscheidungen im Nahen Osten"
      },
      {
        title: "Strategisches Portfolio",
        description: "Vollständiger Leistungsüberblick: 127+ Projekte, 48 globale Kunden, Gesundheitswesen- und Verbraucherforschung in Ägypten und Naher Osten und Nordafrika.",
        label: "Fokus Ägypten",
        hint: "Unser Marktforschungs-Portfolio ansehen"
      },
      {
        title: "Top-Marktforschungsunternehmen in Ägypten (2026)",
        description: "Unabhängiger Leitfaden: Vergleich von 5 führenden Anbietern für Gesundheitswesen-, Pharmaindustrie- und Verbraucherforschung in Ägypten — dem größten Naher Osten und Nordafrika-Markt.",
        label: "Neuer Leitfaden",
        hint: "Ideal für Partnerauswahl in Ägypten"
      },
      {
        title: "Leitfaden quantitative Gesundheitsmarktforschung",
        description: "Umsetzungsfertiger 2026-Leitfaden für Umfragearchitektur, Laufende-Studien-Governance und KI-gestützte Validierung in Saudi-Arabien und den Vereinigte Arabische Emirate.",
        label: "Empfohlener Leitfaden",
        hint: "Ideal für quantitative Design-Entscheidungen"
      },
      {
        title: "Alle Branchen",
        description: "Entdecken Sie Pharmaindustrie-, Geschäftskunden- und Privatkunden-Marktforschung — dieselbe Qualität hinter 127+ Projekten in 16 Branchen.",
        label: "Branchenübergreifend",
        hint: "Branchen-Übersichtsbereich entdecken"
      },
      {
        title: "Verzeichnis globaler Websites",
        description: "Marktforschungsseiten nach Land und Region — für Pharmaindustrie- und Unternehmensstrategie weltweit.",
        label: "Länder-Tiefe",
        hint: "Ideal für Mehrländer-Planung"
      }
    ],
    visualBriefing: {
      heading: "Wie BioNixus Felddaten in Markteinführung-Entscheidungen überführt",
      figures: [
        {
          alt: "Gesundheitswesen-Marktforschungs-Workshop mit Golf-Kooperationsrat-Commercial- und Marktzugang-Führungskräften",
          caption: "Pharmaindustrie-Daten und Evidenz in Markteinführung- und Marktzugang-Maßnahmen überführen."
        },
        {
          alt: "Pharmaindustrie-Datenvalidierung mit quantitativer Analytik und KI-gestützter Qualitätsprüfung",
          caption: "Menschliche Validierung mit geregelten KI-gestützten Qualitätskontrollen für Gesundheitswesen-Datensätze."
        }
      ]
    },
    overviewVideo: {
      title: "BioNixus Gesundheitsmarktforschung — Überblick",
      description: "Kurzer Überblick, wie BioNixus quantitative, qualitative und Marktzugang-Programme für Pharmaindustrie-Teams in Amerika, Europa und Nahem Osten gestaltet.",
      transcript: "BioNixus unterstützt Pharmaindustrie- und Gesundheitswesen-Teams mit Marktforschung für echte Entscheidungen — Markteinführung-Readiness, Marktzugang, Payör-Evidenz und Wettbewerbsintelligence. Programme verbinden erfahrene geführte Konzeption, zweisprachige arabisch-englische Feldarbeit und auditfähige Governance in Amerika, Europa und Nahem Osten.",
      fallbackLabel: "Anonymisierte Fallstudien ansehen"
    },
    cta: {
      researchProposalHeadline: "Individuelles Gesundheitsmarktforschungs-Angebot anfordern",
      body: "Unser Team liefert Pharmaindustrieunternehmen entscheidungsreife Erkenntnisse in Amerika, Europa und Nahem Osten — quantitativ und qualitativ.",
      requestProposal: "Angebot anfordern",
      emailUs: "E-Mail senden",
      mailtoSubject: "Anfrage Gesundheitsmarktforschung",
      phoneRegionLabels: [
        "US-Nr.",
        "Europa-Nr.",
        "Naher Osten, Afrika & Asien"
      ]
    },
    testimonials: {
      marquee: "Branchenführer an unserer Seite",
      altTemplate: "{company} — Fallstudie Pharmaindustriemarktforschung (Vorschau)"
    },
    heroTrust: {
      primary: "Vertrauenswürdig bei",
      stats: "48 globale Kunden · 127+ Projekte · 38 Länder"
    },
    videoEmbed: {
      transcriptLabel: "Transkript"
    }
  },
  fr: {
    compliance: {
      badges: [
        "Aligné sur l’Agence européenne des médicaments",
        "Conforme au Règlement général sur la protection des données",
        "Conforme à l’Autorité saoudienne des aliments et des médicaments",
        "Conforme au ministère de la Santé des Émirats arabes unis",
        "Normes de Bonnes Pratiques Cliniques"
      ]
    },
    heroDashboard: {
      heading: "Tableau de bord d’information marché",
      status: "En direct",
      calloutValue: "~1,8 bill. USD",
      calloutLabel: "Marché mondial des médicaments (estimation 2026)",
      calloutCagr: "↑ ~6 % taux de croissance annuel composé 2024–2026",
      legendGlobal: "Référence mondiale",
      legendRegional: "Profondeur régionale",
      metrics: [
        {
          label: "Médicaments — monde",
          value: "~1,8 bill. USD",
          sub: "Marché estimé 2026"
        },
        {
          label: "Médicaments — Amériques",
          value: "~$720B",
          sub: "Marché estimé 2026"
        },
        {
          label: "Médicaments — Asie et Pacifique",
          value: "~$480B",
          sub: "Marché estimé 2026"
        }
      ]
    },
    globalReach: {
      signals: [
        "6 continents · 38 pays",
        "Médicaments et santé — notre cœur de métier",
        "Recherche entreprises et consommateurs",
        "RGPD · Bonnes Pratiques Cliniques · alignement réglementaire local"
      ]
    },
    industriesGateway: {
      h2: "Au-delà de la santé — recherche dans tous les secteurs",
      intro: "La même rigueur d’échantillonnage et la même analyse pilotée par des experts, développées pour l’industrie pharmaceutique, s’étendent désormais aux marchés entreprises et consommateurs.",
      stats: [
        {
          value: "127+",
          label: "Projets multi-secteurs"
        },
        {
          value: "16",
          label: "Verticales sectorielles"
        },
        {
          value: "7",
          label: "Marchés du Conseil de coopération du Golfe et du Moyen-Orient et de l’Afrique du Nord avec pages sectorielles"
        }
      ],
      exploreAll: "Explorer tous les secteurs",
      insightsLink: "Lire les insights entreprises & consommateurs",
      exploreSegment: "Explorer {segment}"
    },
    industrySegments: {
      pharma: {
        label: "industrie pharmaceutique & santé",
        tagline: "Là où BioNixus a été fondée — et où elle reste leader.",
        navLabel: "industrie pharmaceutique & santé"
      },
      b2b: {
        label: "Secteurs entreprises",
        tagline: "Marchés entreprises, institutionnels et infrastructures.",
        navLabel: "Secteurs entreprises"
      },
      b2c: {
        label: "Secteurs consommateurs",
        tagline: "Demande consommateur, marques et parcours d'achat.",
        navLabel: "Secteurs consommateurs"
      }
    },
    pathways: {
      h2: "Parcours de recherche santé",
      introFull: "BioNixus mène des études de marché santé dans le monde — avec une profondeur pays en Amériques, Europe et Moyen-Orient. Utilisez ces parcours pour lancement, accès marché et croissance. Comparez les méthodes dans notre hub.",
      moreSummary: "Plus de parcours de recherche",
      moreLinksTemplate: "{N} liens"
    },
    pathwayCards: [
      {
        title: "Études de marché santé",
        description: "Programmes d'études de marché santé prêts à la décision pour équipes industrie pharmaceutique — mondialement, avec exécution approfondie en Europe, Amériques et Moyen-Orient."
      },
      {
        title: "Recherche industrie pharmaceutiqueceutique Arabie saoudite",
        description: "information marché industrie pharmaceutique et santé alignée FDA pour lancement, accès et croissance en Arabie saoudite.",
        label: "Profondeur pays",
        hint: "Idéal pour exécution au niveau pays"
      },
      {
        title: "Études industrie pharmaceutique EAU",
        description: "information marché santé Dubaï et Abu Dhabi pour développement, accès marché et recherche quantitative et qualitative aux Émirats.",
        label: "Priorité EAU",
        hint: "Idéal pour lancement et accès aux EAU"
      },
      {
        title: "Études industrie pharmaceutique Moyen-Orient",
        description: "Programmes de preuves pharmaceutiques centrés sur le Conseil de coopération du Golfe pour séquençage des lancements, accès au marché et exécution transfrontalière.",
        label: "Priorité Conseil de coopération du Golfe",
        hint: "Idéal pour décisions lancement et accès au Moyen-Orient"
      },
      {
        title: "Portefeuille stratégique",
        description: "Vue d'ensemble des capacités : 127+ projets, 48 clients mondiaux, recherche santé et consommateur en Égypte et Moyen-Orient et Afrique du Nord.",
        label: "Focus Égypte",
        hint: "Voir notre portefeuille d'études"
      },
      {
        title: "Meilleures sociétés d'études en Égypte (2026)",
        description: "Guide indépendant comparant 5 leaders en recherche santé, industrie pharmaceutique et consommateur en Égypte — plus grand marché Moyen-Orient et Afrique du Nord.",
        label: "Nouveau guide",
        hint: "Idéal pour choisir un partenaire en Égypte"
      },
      {
        title: "Guide recherche quantitative santé",
        description: "Guide 2026 prêt à l'exécution : architecture d'enquêtes, gouvernance des trackers et validation assistée par IA en Arabie saoudite et EAU.",
        label: "Guide à la une",
        hint: "Idéal pour décisions de design quantitatif"
      },
      {
        title: "Tous les secteurs",
        description: "Explorez la recherche industrie pharmaceutique, entreprises et consommateurs — la même rigueur derrière 127+ projets dans 16 verticales.",
        label: "Multi-secteur",
        hint: "Explorer le hub secteurs"
      },
      {
        title: "Annuaire de sites mondiaux",
        description: "Découvrez les pages d'études par pays et région pour stratégies industrie pharmaceutique et entreprise dans le monde.",
        label: "Profondeur pays",
        hint: "Idéal pour planification multi-pays"
      }
    ],
    visualBriefing: {
      heading: "Comment BioNixus transforme les preuves terrain en décisions de lancement",
      figures: [
        {
          alt: "Atelier d'études santé avec leaders commerciaux et accès marché CCG",
          caption: "Transformer données et preuves industrie pharmaceutique en actions de lancement et d'accès."
        },
        {
          alt: "Workflow de validation de données industrie pharmaceutique avec analytique quantitative et contrôle qualité assisté par IA",
          caption: "Validation humaine avec contrôles qualité IA gouvernés pour jeux de données santé."
        }
      ]
    },
    overviewVideo: {
      title: "Vue d'ensemble des études de marché santé BioNixus",
      description: "Brève présentation de la conception de programmes quantitatifs, qualitatifs et d'accès pour équipes industrie pharmaceutique en Amériques, Europe et Moyen-Orient.",
      transcript: "BioNixus accompagne les équipes industrie pharmaceutique et santé avec des études conçues pour de vraies décisions — préparation au lancement, accès marché, preuves payeurs et veille concurrentielle. Programmes combinant design senior, terrain bilingue arabe-anglais et gouvernance audit-ready en Amériques, Europe et Moyen-Orient.",
      fallbackLabel: "Parcourir des études de cas anonymisées"
    },
    cta: {
      researchProposalHeadline: "Demander une proposition d'études de marché santé sur mesure",
      body: "Notre équipe accompagne les laboratoires avec des insights prêts à la décision en Amériques, Europe et Moyen-Orient, via méthodes quantitatives et qualitatives.",
      requestProposal: "Demander une proposition",
      emailUs: "Nous écrire",
      mailtoSubject: "Demande études de marché santé",
      phoneRegionLabels: [
        "N° US",
        "N° Europe",
        "Moyen-Orient, Afrique et Asie"
      ]
    },
    testimonials: {
      marquee: "Leaders sectoriels à nos côtés",
      altTemplate: "{company} — aperçu étude de cas industrie pharmaceutique"
    },
    heroTrust: {
      primary: "Recommandé par",
      stats: "48 clients mondiaux · 127+ projets · 38 pays"
    },
    videoEmbed: {
      transcriptLabel: "Transcription"
    }
  },
  es: {
    compliance: {
      badges: [
        "Alineado con la Agencia Europea de Medicamentos",
        "Conforme al Reglamento General de Protección de Datos",
        "Conforme con la Autoridad Saudí de Alimentos y Medicamentos",
        "Conforme con el Ministerio de Salud de los Emiratos Árabes Unidos",
        "Estándares de Buenas Prácticas Clínicas"
      ]
    },
    heroDashboard: {
      heading: "Panel de información de mercado",
      status: "En vivo",
      calloutValue: "~1,8 bill. USD",
      calloutLabel: "Mercado farmacéutico global (estimación 2026)",
      calloutCagr: "↑ ~6 % tasa de crecimiento anual compuesta 2024–2026",
      legendGlobal: "Referencia global",
      legendRegional: "Profundidad regional",
      metrics: [
        {
          label: "Fármacos — global",
          value: "~1,8 bill. USD",
          sub: "Mercado estimado 2026"
        },
        {
          label: "Fármacos — Américas",
          value: "~$720B",
          sub: "Mercado estimado 2026"
        },
        {
          label: "Fármacos — Asia y Pacífico",
          value: "~$480B",
          sub: "Mercado estimado 2026"
        }
      ]
    },
    globalReach: {
      signals: [
        "6 continentes · 38 países",
        "Medicamentos y sanidad — donde lideramos",
        "Investigación empresarial y de consumo",
        "RGPD · Buenas Prácticas Clínicas · alineamiento regulatorio local"
      ]
    },
    industriesGateway: {
      h2: "Más allá de la sanidad — investigación en todos los sectores",
      intro: "La misma disciplina de muestreo y el análisis liderado por expertos que creamos para la industria farmacéutica se extiende ahora a mercados empresariales y de consumo.",
      stats: [
        {
          value: "127+",
          label: "Proyectos multisectoriales"
        },
        {
          value: "16",
          label: "Verticales industriales"
        },
        {
          value: "7",
          label: "Mercados del Consejo de Cooperación del Golfo y de Oriente Medio y Norte de África con páginas sectoriales"
        }
      ],
      exploreAll: "Explorar todas las industrias",
      insightsLink: "Leer insights empresarial y consumo",
      exploreSegment: "Explorar {segment}"
    },
    industrySegments: {
      pharma: {
        label: "Farma y sanidad",
        tagline: "Donde nació BioNixus — y donde sigue liderando.",
        navLabel: "Farma y sanidad"
      },
      b2b: {
        label: "Industrias empresarial",
        tagline: "Mercados empresariales, institucionales e infraestructura.",
        navLabel: "Industrias empresarial"
      },
      b2c: {
        label: "Industrias consumo",
        tagline: "Demanda del consumidor, marcas y recorrido del comprador.",
        navLabel: "Industrias consumo"
      }
    },
    pathways: {
      h2: "Rutas de investigación sanitaria",
      introFull: "BioNixus ejecuta investigación de mercado sanitario a nivel global — con profundidad por país en Américas, Europa y Oriente Medio. Use estas rutas para lanzamiento, acceso y crecimiento. Compare métodos en nuestro hub.",
      moreSummary: "Más rutas de investigación",
      moreLinksTemplate: "{N} enlaces"
    },
    pathwayCards: [
      {
        title: "Investigación de mercado sanitario",
        description: "Programas de investigación sanitaria listos para decisiones — globalmente, con ejecución profunda en Europa, Américas y Oriente Medio."
      },
      {
        title: "Investigación farmacéutica Arabia Saudí",
        description: "Inteligencia farmacéutica y sanitaria alineada con FDA para lanzamiento, acceso y crecimiento en Arabia Saudí.",
        label: "Profundidad por país",
        hint: "Ideal para ejecución por país"
      },
      {
        title: "Investigación farmacéutica EAU",
        description: "Inteligencia sanitaria Dubái y Abu Dabi para desarrollo, acceso y investigación cuantitativa y cualitativa en los Emiratos.",
        label: "Prioridad EAU",
        hint: "Ideal para lanzamiento y acceso en EAU"
      },
      {
        title: "Investigación farmacéutica Oriente Medio",
        description: "Programas de evidencia farmacéutica centrados en el Consejo de Cooperación del Golfo para secuencia de lanzamientos, acceso al mercado y ejecución transfronteriza.",
        label: "Prioridad Consejo de Cooperación del Golfo",
        hint: "Ideal para decisiones de lanzamiento y acceso en Oriente Medio"
      },
      {
        title: "Portafolio estratégico",
        description: "Panorama de capacidades: 127+ proyectos, 48 clientes globales, investigación sanitaria y de consumo en Egipto y Oriente Medio y Norte de África.",
        label: "Enfoque Egipto",
        hint: "Ver nuestro portafolio de investigación"
      },
      {
        title: "Principales empresas de investigación en Egipto (2026)",
        description: "Guía independiente que compara 5 firmas líderes en sanidad, farmacéutico y consumo en Egipto — el mayor mercado de Oriente Medio y Norte de África.",
        label: "Nueva guía",
        hint: "Ideal para elegir socio en Egipto"
      },
      {
        title: "Guía de investigación cuantitativa sanitaria",
        description: "Guía 2026 lista para ejecución: arquitectura de encuestas, gobernanza de trackers y validación asistida por IA en Arabia Saudí y EAU.",
        label: "Guía destacada",
        hint: "Ideal para decisiones de diseño cuantitativo"
      },
      {
        title: "Todas las industrias",
        description: "Explore investigación farmacéutico, empresarial y consumo — el mismo rigor en 127+ proyectos y 16 verticales.",
        label: "Multisectorial",
        hint: "Explorar el hub de industrias"
      },
      {
        title: "Directorio de sitios globales",
        description: "Descubra páginas de investigación por país y región para estrategia farmacéutica y empresarial global.",
        label: "Profundidad por país",
        hint: "Ideal para planificación multipaís"
      }
    ],
    visualBriefing: {
      heading: "Cómo BioNixus convierte evidencia de campo en decisiones de lanzamiento",
      figures: [
        {
          alt: "Taller de investigación sanitaria con líderes comerciales y de acceso Consejo de Cooperación del Golfo del sector farmacéutico",
          caption: "Convertir datos y evidencia farmacéutica en acciones de lanzamiento y acceso."
        },
        {
          alt: "Flujo de validación de datos farmacéuticos con analítica cuantitativa y revisión de calidad asistida por IA",
          caption: "Validación humana con controles de calidad IA gobernados para datos sanitarios."
        }
      ]
    },
    overviewVideo: {
      title: "Resumen de investigación de mercado sanitario BioNixus",
      description: "Breve resumen de cómo BioNixus diseña programas cuantitativos, cualitativos y de acceso para equipos farmacéuticos en Américas, Europa y Oriente Medio.",
      transcript: "BioNixus apoya a equipos farmacéuticos y sanitarios con investigación para decisiones reales — preparación de lanzamiento, acceso, evidencia de pagadores e inteligencia competitiva. Programas con diseño senior, campo bilingüe árabe-inglés y gobernanza lista para auditoría en Américas, Europa y Oriente Medio.",
      fallbackLabel: "Ver casos de estudio anonimizados"
    },
    cta: {
      researchProposalHeadline: "Solicitar una propuesta a medida de investigación sanitaria",
      body: "Nuestro equipo apoya a laboratorios con insights listos para decisiones en Américas, Europa y Oriente Medio, con metodologías cuantitativas y cualitativas.",
      requestProposal: "Solicitar propuesta",
      emailUs: "Enviar correo",
      mailtoSubject: "Consulta investigación de mercado sanitario",
      phoneRegionLabels: [
        "N.º EE. UU.",
        "N.º Europa",
        "Oriente Medio, África y Asia"
      ]
    },
    testimonials: {
      marquee: "Líderes del sector a nuestro lado",
      altTemplate: "{company} — vista previa caso de estudio farmacéutico"
    },
    heroTrust: {
      primary: "Recomendado por",
      stats: "48 clientes globales · 127+ proyectos · 38 países"
    },
    videoEmbed: {
      transcriptLabel: "Transcripción"
    }
  },
  pt: {
    compliance: {
      badges: [
        "Alinhado à Agência Europeia de Medicamentos",
        "Em conformidade com o Regulamento Geral de Proteção de Dados",
        "Em conformidade com a Autoridade Saudita de Alimentos e Medicamentos",
        "Em conformidade com o Ministério da Saúde dos Emirados Árabes Unidos",
        "Padrões de Boas Práticas Clínicas"
      ]
    },
    heroDashboard: {
      heading: "Painel de informações de mercado",
      status: "Ao vivo",
      calloutValue: "~US$ 1,8 tri",
      calloutLabel: "Mercado farmacêutico global (estimativa 2026)",
      calloutCagr: "↑ ~6% taxa de crescimento anual composta 2024–2026",
      legendGlobal: "Referência global",
      legendRegional: "Profundidade regional",
      metrics: [
        {
          label: "Medicamentos — global",
          value: "~US$ 1,8 tri",
          sub: "Mercado estimado 2026"
        },
        {
          label: "Medicamentos — Américas",
          value: "~$720B",
          sub: "Mercado estimado 2026"
        },
        {
          label: "Medicamentos — Ásia e Pacífico",
          value: "~$480B",
          sub: "Mercado estimado 2026"
        }
      ]
    },
    globalReach: {
      signals: [
        "6 continentes · 38 países",
        "Medicamentos e saúde — onde lideramos",
        "Pesquisa empresarial e de consumo",
        "Proteção de dados · Boas Práticas Clínicas · conformidade regulatória local"
      ]
    },
    industriesGateway: {
      h2: "Além da saúde — pesquisa em todos os setores",
      intro: "A mesma disciplina de amostragem e análise liderada por especialistas que construímos para a indústria farmacêutica agora se estende aos mercados corporativos e de consumo.",
      stats: [
        {
          value: "127+",
          label: "Projetos multisectoriais"
        },
        {
          value: "16",
          label: "Verticais setoriais"
        },
        {
          value: "7",
          label: "Mercados do Conselho de Cooperação do Golfo e do Oriente Médio e Norte da África com páginas setoriais"
        }
      ],
      exploreAll: "Explorar todos os setores",
      insightsLink: "Ler insights corporativo e consumo",
      exploreSegment: "Explorar {segment}"
    },
    industrySegments: {
      pharma: {
        label: "Farma e saúde",
        tagline: "Onde a BioNixus nasceu — e ainda lidera.",
        navLabel: "Farma e saúde"
      },
      b2b: {
        label: "Setores corporativo",
        tagline: "Mercados empresariais, institucionais e de infraestrutura.",
        navLabel: "Setores corporativo"
      },
      b2c: {
        label: "Setores consumo",
        tagline: "Demanda do consumidor, marcas e jornada do comprador.",
        navLabel: "Setores consumo"
      }
    },
    pathways: {
      h2: "Rotas de pesquisa em saúde",
      introFull: "A BioNixus conduz pesquisa de mercado em saúde globalmente — com profundidade por país nas Américas, Europa e Oriente Médio. Use estas rotas para lançamento, acesso e crescimento. Compare métodos no nosso hub.",
      moreSummary: "Mais rotas de pesquisa",
      moreLinksTemplate: "{N} links"
    },
    pathwayCards: [
      {
        title: "Pesquisa de mercado em saúde",
        description: "Programas de pesquisa em saúde prontos para decisão — globalmente, com execução profunda na Europa, Américas e Oriente Médio."
      },
      {
        title: "Pesquisa farmacêutica Arábia Saudita",
        description: "Inteligência farmacêutica e de saúde alinhada à FDA para lançamento, acesso e crescimento na Arábia Saudita.",
        label: "Profundidade por país",
        hint: "Ideal para execução por país"
      },
      {
        title: "Pesquisa farmacêutica EAU",
        description: "Inteligência em saúde Dubai e Abu Dhabi para desenvolvimento, acesso e pesquisa quantitativa e qualitativa nos Emirados.",
        label: "Prioridade EAU",
        hint: "Ideal para lançamento e acesso nos EAU"
      },
      {
        title: "Pesquisa farmacêutica Oriente Médio",
        description: "Programas de evidência farmacêutica focados no Conselho de Cooperação do Golfo para sequência de lançamentos, acesso ao mercado e execução entre países.",
        label: "Prioridade Conselho de Cooperação do Golfo",
        hint: "Ideal para decisões de lançamento e acesso no Oriente Médio"
      },
      {
        title: "Portfólio estratégico",
        description: "Visão completa: 127+ projetos, 48 clientes globais, pesquisa em saúde e consumo no Egito e Oriente Médio e Norte da África.",
        label: "Foco Egito",
        hint: "Ver nosso portfólio de pesquisa"
      },
      {
        title: "Principais empresas de pesquisa no Egito (2026)",
        description: "Guia independente comparando 5 líderes em saúde, farmacêutica e consumo no Egito — maior mercado da Oriente Médio e Norte da África.",
        label: "Novo guia",
        hint: "Ideal para escolher parceiro no Egito"
      },
      {
        title: "Guia de pesquisa quantitativa em saúde",
        description: "Guia 2026 pronto para execução: arquitetura de pesquisas, governança de trackers e validação assistida por IA na Arábia Saudita e EAU.",
        label: "Guia em destaque",
        hint: "Ideal para decisões de design quantitativo"
      },
      {
        title: "Todos os setores",
        description: "Explore pesquisa farmacêutica, corporativo e consumo — o mesmo rigor em 127+ projetos e 16 verticais.",
        label: "Multissetorial",
        hint: "Explorar o hub de setores"
      },
      {
        title: "Diretório de sites globais",
        description: "Descubra páginas de pesquisa por país e região para estratégia farmacêutica e empresarial global.",
        label: "Profundidade por país",
        hint: "Ideal para planejamento multirregional"
      }
    ],
    visualBriefing: {
      heading: "Como a BioNixus transforma evidências de campo em decisões de lançamento",
      figures: [
        {
          alt: "Workshop de pesquisa em saúde com líderes comerciais e de acesso Conselho de Cooperação do Golfo",
          caption: "Converter dados e evidências farmacêuticas em ações de lançamento e acesso."
        },
        {
          alt: "Fluxo de validação de dados farmacêuticos com analítica quantitativa e revisão de qualidade assistida por IA",
          caption: "Validação humana com controles de qualidade IA governados para dados de saúde."
        }
      ]
    },
    overviewVideo: {
      title: "Visão geral da pesquisa de mercado em saúde BioNixus",
      description: "Breve visão de como a BioNixus projeta programas quantitativos, qualitativos e de acesso para equipes farmacêuticas nas Américas, Europa e Oriente Médio.",
      transcript: "A BioNixus apoia equipes farmacêuticas e de saúde com pesquisa para decisões reais — prontidão de lançamento, acesso, evidências de pagadores e inteligência competitiva. Programas com design sênior, campo bilíngue árabe-inglês e governança pronta para auditoria nas Américas, Europa e Oriente Médio.",
      fallbackLabel: "Ver casos de estudo anonimizados"
    },
    cta: {
      researchProposalHeadline: "Solicitar proposta personalizada de pesquisa em saúde",
      body: "Nossa equipe apoia empresas farmacêuticas com insights prontos para decisão nas Américas, Europa e Oriente Médio, com metodologias quantitativas e qualitativas.",
      requestProposal: "Solicitar proposta",
      emailUs: "Enviar e-mail",
      mailtoSubject: "Consulta pesquisa de mercado em saúde",
      phoneRegionLabels: [
        "N.º EUA",
        "N.º Europa",
        "Oriente Médio, África e Ásia"
      ]
    },
    testimonials: {
      marquee: "Líderes do setor ao nosso lado",
      altTemplate: "{company} — prévia caso de estudo farmacêutico"
    },
    heroTrust: {
      primary: "Recomendado por",
      stats: "48 clientes globais · 127+ projetos · 38 países"
    },
    videoEmbed: {
      transcriptLabel: "Transcrição"
    }
  },
  ru: {
    compliance: {
      badges: [
        "Соответствие Европейскому агентству лекарственных средств",
        "Соответствие Общему регламенту по защите данных",
        "Соответствие Управлению по контролю за продуктами и лекарствами Саудовской Аравии",
        "Соответствие Министерству здравоохранения Объединённых Арабских Эмиратов",
        "Стандарты Надлежащей клинической практики"
      ]
    },
    heroDashboard: {
      heading: "Панель рыночной информации",
      status: "Актуально",
      calloutValue: "~1,8 трln USD",
      calloutLabel: "Глобальный фармацевтический рынок (прогноз 2026)",
      calloutCagr: "↑ ~6% среднегодовой темп роста 2024–2026",
      legendGlobal: "Глобальный ориентир",
      legendRegional: "Региональная глубина",
      metrics: [
        {
          label: "Мировые лекарства",
          value: "~1,8 трln USD",
          sub: "Прогноз рынка 2026"
        },
        {
          label: "Лекарства — Америка",
          value: "~$720B",
          sub: "Прогноз рынка 2026"
        },
        {
          label: "Лекарства — Азия и Тихий океан",
          value: "~$480B",
          sub: "Прогноз рынка 2026"
        }
      ]
    },
    globalReach: {
      signals: [
        "6 континентов · 38 стран",
        "Лекарства и здравоохранение — наше ядро",
        "Исследования для предприятий и потребителей",
        "Защита данных · Надлежащая клиническая практика · соответствие местным нормам"
      ]
    },
    industriesGateway: {
      h2: "За пределами здравоохранения — исследования во всех отраслях",
      intro: "Та же дисциплина выборки и экспертный анализ, созданные для фармацевтики, теперь распространяются на корпоративные и потребительские рынки.",
      stats: [
        {
          value: "127+",
          label: "Проекты по отраслям"
        },
        {
          value: "16",
          label: "Отраслевые вертикали"
        },
        {
          value: "7",
          label: "Рынки Совета сотрудничества стран Залива и Ближнего Востока и Северной Африки со страницами отраслей"
        }
      ],
      exploreAll: "Изучить все отрасли",
      insightsLink: "Читать отраслевую аналитику корпоратив и потребитель",
      exploreSegment: "Изучить {segment}"
    },
    industrySegments: {
      pharma: {
        label: "Фарма и здравоохранение",
        tagline: "Где BioNixus была создана — и где по-прежнему лидирует.",
        navLabel: "Фарма и здравоохранение"
      },
      b2b: {
        label: "корпоратив-отрасли",
        tagline: "Корпоративные, институциональные рынки и инфраструктура.",
        navLabel: "корпоратив-отрасли"
      },
      b2c: {
        label: "потребитель-отрасли",
        tagline: "Спрос потребителей, бренды и путь покупателя.",
        navLabel: "потребитель-отрасли"
      }
    },
    pathways: {
      h2: "Направления исследований в здравоохранении",
      introFull: "BioNixus проводит исследования рынка здравоохранения по всему миру — с глубиной на уровне стран в Америке, Европе и на Ближнем Востоке. Используйте эти маршруты для запуска, доступа и роста. Сравните методы в нашем хабе.",
      moreSummary: "Другие направления исследований",
      moreLinksTemplate: "{N} ссылок"
    },
    pathwayCards: [
      {
        title: "Исследования рынка здравоохранения",
        description: "Готовые к решениям программы исследований для фармкоманд — глобально, с глубоким исполнением в Европе, Америке и на Ближнем Востоке."
      },
      {
        title: "Фармацевтические исследования в Саудовской Аравии",
        description: "Фарма- и медицинская аналитика в соответствии с FDA для запуска, доступа и роста в Саудовская Аравия.",
        label: "Глубина на уровне страны",
        hint: "Лучше для исполнения на уровне страны"
      },
      {
        title: "Фармацевтические исследования в ОАЭ",
        description: "Медицинская аналитика Дубая и Абу-Даби для разработки, доступа и количественных/качественных исследований в Эмиратах.",
        label: "Приоритет ОАЭ",
        hint: "Лучше для запуска и доступа в ОАЭ"
      },
      {
        title: "Фармацевтические исследования на Ближнем Востоке",
        description: "Программы фармацевтических доказательств с фокусом на Совет сотрудничества стран Залива: последовательность вывода на рынок, доступ и межстрановое исполнение.",
        label: "Приоритет Совета сотрудничества стран Залива",
        hint: "Лучше для решений по запуску и доступу на Ближнем Востоке"
      },
      {
        title: "Стратегический портфель",
        description: "Полный обзор возможностей: 127+ проектов, 48 клиентов, исследования здравоохранения и потребителей в Египте и Ближний Восток и Северная Африка.",
        label: "Фокус на Египте",
        hint: "Смотреть портфолио исследований"
      },
      {
        title: "Лучшие исследовательские компании Египта (2026)",
        description: "Независимый гид: сравнение 5 ведущих компаний в здравоохранении, фарме и потребительских исследованиях в Египте — крупнейшем рынке Ближний Восток и Северная Африка.",
        label: "Новый гид",
        hint: "Лучше для выбора партнёра в Египте"
      },
      {
        title: "Гид по количественным исследованиям здравоохранения",
        description: "Готовый к исполнению гид 2026: архитектура опросов, управление трекерами и AI-валидация в Саудовская Аравия и ОАЭ.",
        label: "Рекомендуемый гид",
        hint: "Лучше для решений по количественному дизайну"
      },
      {
        title: "Все отрасли",
        description: "Исследования фармы, корпоратив и потребитель — та же строгость в 127+ проектах и 16 отраслях.",
        label: "Межотраслевой",
        hint: "Изучить отраслевой хаб"
      },
      {
        title: "Каталог глобальных сайтов",
        description: "Страницы исследований по странам и регионам для фарма- и корпоративной стратегии по всему миру.",
        label: "Глубина на уровне страны",
        hint: "Лучше для мульти-странового планирования"
      }
    ],
    visualBriefing: {
      heading: "Как BioNixus превращает полевые данные в решения по запуску",
      figures: [
        {
          alt: "Воркшоп по исследованиям здравоохранения с коммерческими и access-лидерами Совет сотрудничества стран Залива",
          caption: "Преобразование фармданных и доказательств в действия по запуску и доступу."
        },
        {
          alt: "Процесс валидации фармданных с количественной аналитикой и AI-контролем качества",
          caption: "Человеческая валидация с управляемым AI-контролем качества медицинских данных."
        }
      ]
    },
    overviewVideo: {
      title: "Обзор исследований рынка здравоохранения BioNixus",
      description: "Краткий обзор того, как BioNixus проектирует количественные, качественные и access-программы для фармкоманд в Америке, Европе и на Ближнем Востоке.",
      transcript: "BioNixus поддерживает фарма- и медицинские команды исследованиями для реальных решений — готовность к запуску, доступ, доказательства для плательщиков и конкурентная разведка. Программы с экспертным дизайном, двуязычным полем арабский–английский и audit-ready управлением в Америке, Европе и на Ближнем Востоке.",
      fallbackLabel: "Просмотреть анонимизированные кейсы"
    },
    cta: {
      researchProposalHeadline: "Запросить индивидуальное предложение по исследованиям здравоохранения",
      body: "Наша команда поддерживает фармкомпании готовыми к решениям инсайтами в Америке, Европе и на Ближнем Востоке — количественными и качественными методами.",
      requestProposal: "Запросить предложение",
      emailUs: "Написать нам",
      mailtoSubject: "Запрос исследований здравоохранения",
      phoneRegionLabels: [
        "США",
        "Европа",
        "Ближний Восток, Африка и Азия"
      ]
    },
    testimonials: {
      marquee: "Отраслевые лидеры рядом с нами",
      altTemplate: "{company} — превью фарма-кейса"
    },
    heroTrust: {
      primary: "Нам доверяют",
      stats: "48 клиентов · 127+ проектов · 38 стран"
    },
    videoEmbed: {
      transcriptLabel: "Транскрипт"
    }
  },
  zh: {
    compliance: {
      badges: [
        "符合欧洲药品管理局要求",
        "符合《通用数据保护条例》",
        "符合沙特阿拉伯食品药品管理局要求",
        "符合阿联酋卫生部要求",
        "良好临床规范标准"
      ]
    },
    heroDashboard: {
      heading: "市场信息仪表盘",
      status: "实时",
      calloutValue: "约一点八万亿美元",
      calloutLabel: "全球医药市场（二〇二六年预测）",
      calloutCagr: "↑ 约百分之六复合年增长率 二〇二四至二〇二六",
      legendGlobal: "全球参照基准",
      legendRegional: "区域深度",
      metrics: [
        {
          label: "全球医药",
          value: "约一点八万亿美元",
          sub: "二〇二六年预测市场"
        },
        {
          label: "美洲医药市场",
          value: "约七千二百亿美元",
          sub: "二〇二六年预测市场"
        },
        {
          label: "亚太医药市场",
          value: "约四千八百亿美元",
          sub: "二〇二六年预测市场"
        }
      ]
    },
    globalReach: {
      signals: [
        "六大洲 · 三十八个国家",
        "医药与健康 — 我们的核心优势",
        "企业与消费者研究",
        "数据保护条例 · 良好临床规范 · 本地监管合规"
      ]
    },
    industriesGateway: {
      h2: "超越医疗健康 — 跨行业研究",
      intro: "我们在制药行业建立的抽样规范与资深分析师主导的方法，现已延伸至企业市场与消费者市场。",
      stats: [
        {
          value: "一百二十七+",
          label: "跨行业项目"
        },
        {
          value: "十六",
          label: "行业垂直领域"
        },
        {
          value: "七",
          label: "海湾合作委员会与中东和北非市场行业页面"
        }
      ],
      exploreAll: "探索全部行业",
      insightsLink: "阅读 企业 与 消费者 行业洞察",
      exploreSegment: "探索 {segment}"
    },
    industrySegments: {
      pharma: {
        label: "医药与健康",
        tagline: "BioNixus 创立并持续领先之处。",
        navLabel: "医药与健康"
      },
      b2b: {
        label: "企业 行业",
        tagline: "企业、机构与基础设施市场。",
        navLabel: "企业 行业"
      },
      b2c: {
        label: "消费者 行业",
        tagline: "消费需求、品牌与购物路径。",
        navLabel: "消费者 行业"
      }
    },
    pathways: {
      h2: "医疗健康研究路径",
      introFull: "BioNixus 在全球开展医疗健康市场研究 — 在美洲、欧洲与中东具备国家级深度。使用这些路径支持上市、准入与增长。请在我们的市场研究枢纽中比较方法。",
      moreSummary: "更多研究路径",
      moreLinksTemplate: "{N} 个链接"
    },
    pathwayCards: [
      {
        title: "医疗健康市场研究",
        description: "为制药团队提供可决策的医疗健康市场研究 — 全球覆盖，在欧洲、美洲与中东深度执行。"
      },
      {
        title: "沙特阿拉伯医药研究",
        description: "符合 沙特食品药品管理局 框架的医药与健康市场情报，支持沙特上市、准入与增长。",
        label: "国家级深度",
        hint: "最适合国家级执行"
      },
      {
        title: "阿联酋医药市场研究",
        description: "迪拜与阿布扎比医疗情报 — 药物开发、市场准入及阿联酋全境定量与定性研究。",
        label: "阿联酋优先",
        hint: "最适合阿联酋上市与准入执行"
      },
      {
        title: "中东医药市场研究",
        description: "以海湾合作委员会为重点的制药证据项目，支持上市排序、市场准入与跨国执行。",
        label: "海湾合作委员会优先",
        hint: "最适合中东上市与准入决策"
      },
      {
        title: "战略能力组合",
        description: "完整能力概览：一百二十七+项目、四十八家全球客户，埃及与 中东与北非 医疗及消费者研究双轨实践。",
        label: "埃及聚焦",
        hint: "查看我们的市场研究组合"
      },
      {
        title: "埃及顶尖市场研究公司（二〇二六）",
        description: "独立指南：对比埃及 五家领先医疗、医药与消费者研究机构 — 中东与北非 最大市场。",
        label: "新指南",
        hint: "最适合埃及合作伙伴选择"
      },
      {
        title: "定量医疗健康市场研究指南",
        description: "二〇二六年可执行指南 — 沙特与阿联酋的问卷架构、追踪治理与 AI 辅助验证。",
        label: "精选指南",
        hint: "最适合定量设计决策"
      },
      {
        title: "全部行业",
        description: "探索医药健康、企业 与 消费者 市场研究 — 一百二十七+项目、十六个行业垂直领域的同等严谨标准。",
        label: "跨行业",
        hint: "探索行业枢纽"
      },
      {
        title: "全球网站目录",
        description: "按国家与地区浏览市场研究页面，支持全球制药与企业战略。",
        label: "国家级深度",
        hint: "最适合多国规划"
      }
    ],
    visualBriefing: {
      heading: "BioNixus 如何将现场证据转化为上市决策",
      figures: [
        {
          alt: "海湾合作委员会 商业与市场准入负责人审阅制药证据的医疗健康研究工作坊",
          caption: "将制药数据与证据转化为上市与准入行动。"
        },
        {
          alt: "结合定量分析与 AI 辅助质量审查的制药数据验证流程",
          caption: "对健康数据集进行人工验证，并配合受治理的 AI 辅助质量控制。"
        }
      ]
    },
    overviewVideo: {
      title: "BioNixus 医疗健康市场研究概览",
      description: "简要介绍 BioNixus 如何为美洲、欧洲与中东的制药团队设计定量、定性与准入项目。",
      transcript: "BioNixus 为制药与健康团队提供面向真实决策的市场研究 — 上市准备、市场准入、支付方证据与竞争情报。项目结合资深设计、阿英双语现场工作与可审计治理，覆盖美洲、欧洲与中东。",
      fallbackLabel: "浏览匿名案例研究"
    },
    cta: {
      researchProposalHeadline: "获取定制医疗健康市场研究方案",
      body: "我们的团队以定量与定性方法，在美洲、欧洲与中东为制药企业提供可决策洞察。",
      requestProposal: "索取方案",
      emailUs: "发送邮件",
      mailtoSubject: "医疗健康市场研究咨询",
      phoneRegionLabels: [
        "美国电话",
        "欧洲电话",
        "中东、非洲与亚洲"
      ]
    },
    testimonials: {
      marquee: "我们服务的行业领导者",
      altTemplate: "{company} 医药市场研究案例预览"
    },
    heroTrust: {
      primary: "深受信赖",
      stats: "四十八家全球客户 · 一百二十七+项目 · 三十八个国家"
    },
    videoEmbed: {
      transcriptLabel: "文字稿"
    }
  },
  ar: {
    compliance: {
      badges: [
        "متوافق مع الوكالة الأوروبية للأدوية",
        "متوافق مع اللائحة العامة لحماية البيانات",
        "متوافق مع الهيئة العامة للغذاء والدواء في السعودية",
        "متوافق مع وزارة الصحة ووقاية المجتمع في الإمارات",
        "معايير ممارسات التصنيع السريري الجيدة"
      ]
    },
    heroDashboard: {
      heading: "لوحة معلومات السوق",
      status: "مباشر",
      calloutValue: "~١.٨ تريليون دولار",
      calloutLabel: "السوق الدوائي العالمي (تقدير ٢٠٢٦)",
      calloutCagr: "↑ ~٦% معدل النمو السنوي المركب ٢٠٢٤–٢٠٢٦",
      legendGlobal: "معيار عالمي",
      legendRegional: "عمق إقليمي",
      metrics: [
        {
          label: "الأدوية — عالمياً",
          value: "~١.٨ تريليون دولار",
          sub: "تقدير السوق ٢٠٢٦"
        },
        {
          label: "الأدوية — الأمريكتان",
          value: "~٧٢٠ مليار دولار",
          sub: "تقدير السوق ٢٠٢٦"
        },
        {
          label: "الأدوية — آسيا والمحيط الهادئ",
          value: "~٤٨٠ مليار دولار",
          sub: "تقدير السوق ٢٠٢٦"
        }
      ]
    },
    globalReach: {
      signals: [
        "٦ قارات · ٣٨ دولة",
        "الأدوية والرعاية الصحية — حيث نتصدر",
        "أبحاث المؤسسات والمستهلكين",
        "حماية البيانات · ممارسات التصنيع السريري · التوافق التنظيمي المحلي"
      ]
    },
    industriesGateway: {
      h2: "ما وراء الرعاية الصحية — أبحاث في جميع القطاعات",
      intro: "نفس انضباط العيّنة والتحليل بقيادة خبراء كبار الذي بنيناه للصناعة الدوائية يمتد الآن إلى أسواق الشركات والمستهلكين.",
      stats: [
        {
          value: "١٢٧+",
          label: "مشاريع عبر القطاعات"
        },
        {
          value: "١٦",
          label: "قطاعات صناعية"
        },
        {
          value: "٧",
          label: "أسواق مجلس التعاون الخليجي والشرق الأوسط وشمال أفريقيا بصفحات قطاعية"
        }
      ],
      exploreAll: "استكشف جميع القطاعات",
      insightsLink: "اقرأ رؤى قطاعات الشركات و المستهلكين",
      exploreSegment: "استكشف {segment}"
    },
    industrySegments: {
      pharma: {
        label: "الأدوية والرعاية الصحية",
        tagline: "حيث تأسست بيونكسس — وما زالت تقود.",
        navLabel: "الأدوية والرعاية الصحية"
      },
      b2b: {
        label: "قطاعات الشركات",
        tagline: "أسواق المؤسسات والبنية التحتية.",
        navLabel: "قطاعات الشركات"
      },
      b2c: {
        label: "قطاعات المستهلكين",
        tagline: "الطلب الاستهلاكي والعلامات ورحلة المشتري.",
        navLabel: "قطاعات المستهلكين"
      }
    },
    pathways: {
      h2: "مسارات أبحاث الرعاية الصحية",
      introFull: "تنفّذ بيونكسس أبحاث السوق الصحي عالمياً — بعمق على مستوى الدولة عبر الأمريكتين وأوروبا والشرق الأوسط. استخدم هذه المسارات للإطلاق والوصول والنمو. قارن المنهجيات في مركز أبحاث السوق.",
      moreSummary: "مسارات بحث إضافية",
      moreLinksTemplate: "{N} روابط"
    },
    pathwayCards: [
      {
        title: "أبحاث السوق الصحي",
        description: "برامج أبحاث سوق صحي جاهزة للقرار — عالمياً، بتنفيذ عميق في أوروبا والأمريكتين والشرق الأوسط."
      },
      {
        title: "أبحاث الأدوية في السعودية",
        description: "ذكاء دوائي وصحي متوافق مع هيئة الغذاء والدواء السعودية للإطلاق والوصول والنمو في المملكة.",
        label: "عمق على مستوى الدولة",
        hint: "الأفضل للتنفيذ على مستوى الدولة"
      },
      {
        title: "أبحاث السوق الدوائي في الإمارات",
        description: "ذكاء صحي في دبي وأبوظبي للتطوير والوصول والبحث الكمي والنوعي عبر الإمارات.",
        label: "أولوية الإمارات",
        hint: "الأفضل لإطلاق ووصول الإمارات"
      },
      {
        title: "أبحاث السوق الدوائي في الشرق الأوسط",
        description: "برامج أدلة دوائية مركّزة على مجلس التعاون الخليجي لتسلسل الإطلاق والوصول إلى السوق والتنفيذ عبر الدول.",
        label: "أولوية مجلس التعاون الخليجي",
        hint: "الأفضل لقرارات الإطلاق والوصول في الشرق الأوسط"
      },
      {
        title: "محفظة استراتيجية",
        description: "نظرة شاملة: ١٢٧+ مشروعاً، ٤٨ عميلاً عالمياً، أبحاث صحية واستهلاكية في مصر والشرق الأوسط وشمال أفريقيا.",
        label: "تركيز مصر",
        hint: "اطلع على محفظة أبحاث السوق"
      },
      {
        title: "أفضل شركات أبحاث السوق في مصر (٢٠٢٦)",
        description: "دليل مستقل يقارن ٥ شركات رائدة في الأبحاث الصحية والدوائية والاستهلاكية في مصر — أكبر سوق في الشرق الأوسط وشمال أفريقيا.",
        label: "دليل جديد",
        hint: "الأفضل لاختيار شريك في مصر"
      },
      {
        title: "دليل الأبحاث الكمية للسوق الصحي",
        description: "دليل ٢٠٢٦ جاهز للتنفيذ: هندسة الاستبيانات وحوكمة المتتبعات والتحقق المدعوم بالذكاء الاصطناعي في السعودية والإمارات.",
        label: "دليل مميز",
        hint: "الأفضل لقرارات التصميم الكمي"
      },
      {
        title: "جميع القطاعات",
        description: "استكشف أبحاث الأدوية و الشركات و المستهلكين — نفس الصرامة في ١٢٧+ مشروعاً عبر ١٦ قطاعاً.",
        label: "عبر القطاعات",
        hint: "استكشف مركز القطاعات"
      },
      {
        title: "دليل المواقع العالمية",
        description: "اكتشف صفحات أبحاث السوق حسب الدولة والمنطقة لدعم الاستراتيجية الدوائية والمؤسسية عالمياً.",
        label: "عمق على مستوى الدولة",
        hint: "الأفضل للتخطيط متعدد الدول"
      }
    ],
    visualBriefing: {
      heading: "كيف تحوّل بيونكسس أدلة الميدان إلى قرارات إطلاق",
      figures: [
        {
          alt: "ورشة أبحاث سوق صحي مع قادة تجاريين ووصول للسوق في الخليج يراجعون أدلة دوائية",
          caption: "تحويل البيانات والأدلة الدوائية إلى إجراءات إطلاق ووصول."
        },
        {
          alt: "سير عمل التحقق من البيانات الدوائية مع التحليلات الكمية ومراجعة الجودة بالذكاء الاصطناعي",
          caption: "عمليات تحقق بشرية مع ضوابط جودة بالذكاء الاصطناعي لمجموعات بيانات الرعاية الصحية."
        }
      ]
    },
    overviewVideo: {
      title: "نظرة عامة على أبحاث السوق الصحي بيونكسس",
      description: "نظرة قصيرة على كيفية تصميم بيونكسس برامج كمية ونوعية ووصول للفرق الدوائية في الأمريكتين وأوروبا والشرق الأوسط.",
      transcript: "تدعم بيونكسس الفرق الدوائية والصحية بأبحاث سوق مبنية لقرارات حقيقية — جاهزية الإطلاق والوصول وأدلة الدافعين والذكاء التنافسي. تجمع البرامج تصميماً بقيادة كبار الخبراء وميداناً ثنائي اللغة عربي–إنجليزي وحوكمة جاهزة للتدقيق.",
      fallbackLabel: "تصفح دراسات حالة مجهولة"
    },
    cta: {
      researchProposalHeadline: "اطلب عرضاً مخصصاً لأبحاث السوق الصحي",
      body: "يدعم فريقنا شركات الأدوية برؤى جاهزة للقرار عبر الأمريكتين وأوروبا والشرق الأوسط بمنهجيات كمية ونوعية.",
      requestProposal: "طلب عرض",
      emailUs: "راسلنا",
      mailtoSubject: "استفسار أبحاث السوق الصحي",
      phoneRegionLabels: [
        "رقم أمريكي",
        "رقم أوروبي",
        " الشرق الأوسط وأفريقيا وآسيا"
      ]
    },
    testimonials: {
      marquee: "قادة الصناعة الذين نخدم إلى جانبهم",
      altTemplate: "{company} — معاينة دراسة حالة أبحاث سوق دوائية"
    },
    heroTrust: {
      primary: "موثوق به من",
      stats: "٤٨ عميلاً عالمياً · ١٢٧+ مشروعاً · ٣٨ دولة"
    },
    videoEmbed: {
      transcriptLabel: "النص"
    }
  }
};

export type HomePageTranslations = { homePage: HomePageHardcodedCopy };
