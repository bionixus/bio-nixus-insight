export type Language = 'en' | 'de' | 'fr' | 'es' | 'zh' | 'ar';

export const languages: { code: Language; name: string; flag: string; rtl?: boolean }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
];

export const translations = {
  en: {
    nav: {
      services: 'Services',
      insights: 'Insights',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      tagline: 'EMEA Healthcare Market Research',
      title: 'EMEA Healthcare Market Research for Pharmaceutical Excellence',
      subtitle: 'Transform Physician & Hospital Insights into Strategic Intelligence Across UK, Europe & MENA Markets',
      valueProposition: 'We deliver comprehensive quantitative and qualitative market research services that transform clinical data into actionable pharmaceutical intelligence. Our specialized methodology captures authentic physician perspectives from NHS and private healthcare settings, hospital trends, and patient insights across UK, European, and MENA markets to power your drug development, market access, and commercial strategies.',
      serviceHighlights: [
        'UK NHS & Private Healthcare Research',
        'Pan-European Physician Surveys',
        'Qualitative KOL Interviews',
        'Multi-Country Data Analytics',
        'UK • Europe • MENA Coverage',
      ],
      cta: 'Get UK Research Proposal',
      ctaSecondary: 'View European Case Studies',
      trustBar: 'Trusted by pharmaceutical companies in',
      trustCountries: 'UK • Germany • France • Spain • Italy • UAE • Saudi Arabia • Egypt • Kuwait • Qatar',
      complianceBadges: ['MHRA Compliant', 'EMA Aligned', 'GDPR Compliant', 'SFDA Compliant', 'ICH-GCP'],
    },
    services: {
      title: 'Comprehensive Healthcare Market Research Services for UK & European Pharmaceutical Companies',
      subtitle: 'Quantitative and qualitative insights from physicians and hospitals across UK, Europe & MENA',
      items: [
        {
          title: 'Quantitative Healthcare Research & Physician Surveys Across UK & Europe',
          description: 'Robust statistical insights from large-scale physician and healthcare professional surveys across UK, European and MENA markets. NHS physician surveys and GP practice research, private healthcare provider studies (UK, Germany, France), hospital preference studies, prescription behavior tracking, NICE/HTA decision-maker insights, payer and reimbursement landscape analysis. Multi-country physician surveys (UAE, Saudi Arabia, Egypt, Kuwait, Qatar). Deliverables: Statistical reports, UK/EU market size estimates, NHS pathway analysis, trend forecasting, segmentation analysis, cross-country comparative insights.',
        },
        {
          title: 'Qualitative Pharmaceutical Research & Expert Insights - UK & Europe',
          description: 'Deep-dive qualitative research capturing nuanced clinical perspectives and unmet medical needs. UK: In-depth NHS consultant and GP interviews, private healthcare specialist insights, NICE committee member engagement, Royal College expert advisory boards. European: Pan-European KOL mapping and interviews, multi-country healthcare stakeholder focus groups, cross-border treatment pathway analysis. MENA: Regional physician and hospital administrator interviews, Gulf healthcare system insights. Deliverables: Thematic analysis reports, UK NHS insights, European consensus summaries, strategic market access recommendations.',
        },
        {
          title: 'Market Access & HTA Strategy',
          description: 'NICE, G-BA, HAS and HTA body requirement integration. Evidence-based pricing strategies and payer engagement frameworks for UK and European markets. Reimbursement landscape modeling and cost-effectiveness analysis for HTA submissions.',
        },
        {
          title: 'KOL & Stakeholder Mapping',
          description: 'UK and Pan-European KOL mapping and engagement. NHS consultant and Royal College member networks. Multi-country medical association partnerships and hospital provider panels.',
        },
        {
          title: 'Geographic Coverage: UK • Europe • MENA',
          description: 'UK: NHS England, Scotland, Wales, Northern Ireland; London teaching hospitals; NICE, MHRA stakeholder research. Europe: Germany (G-BA, IQWiG), France (HAS, CEPS), Spain, Italy, Netherlands, Belgium, Switzerland. MENA: UAE (DHA, HAAD), Saudi Arabia (Vision 2030), Egypt, Kuwait, Qatar.',
        },
        {
          title: 'Methodology & Compliance',
          description: 'MHRA and EMA regulatory alignment. GDPR-compliant data collection. NHS Research Ethics Committee (REC) standards. Multi-lingual survey deployment (English, German, French, Spanish, Italian, Arabic). Secure data encryption and HEOR analysis.',
        },
      ],
    },
    insights: {
      title: 'Latest Insights',
      subtitle: 'Thought leadership and research perspectives from our global team',
      readMore: 'Read Article',
      items: [
        {
          category: 'Market Access',
          title: 'The Future of Value-Based Healthcare Agreements in Europe',
          excerpt: 'How innovative contracting models are reshaping pharmaceutical pricing and access strategies across major European markets.',
          date: '2024 Q4 Report',
        },
        {
          category: 'Digital Health',
          title: 'AI-Driven Drug Discovery: Market Implications',
          excerpt: 'Analyzing the competitive landscape shift as artificial intelligence transforms pharmaceutical R&D and time-to-market.',
          date: 'Strategic Brief',
        },
        {
          category: 'Oncology',
          title: 'Precision Medicine Market Dynamics 2025',
          excerpt: 'Comprehensive analysis of biomarker-driven therapies and the evolving oncology treatment paradigm.',
          date: 'Industry Analysis',
        },
      ],
    },
    blog: {
      title: 'Latest Insights',
      subtitle: 'Thought leadership and research perspectives from our global team',
      readMore: 'Read Article',
      readMoreArticles: 'Read more articles',
      filterAllTopics: 'All topics',
      filterAllCountries: 'All countries',
      filterByTopic: 'Topic',
      filterByCountry: 'Country',
      items: [
        { category: 'Market Access', country: 'Europe', title: 'The Future of Value-Based Healthcare Agreements in Europe', excerpt: 'How innovative contracting models are reshaping pharmaceutical pricing and access strategies across major European markets.', date: '2024 Q4 Report' },
        { category: 'Digital Health', country: 'USA', title: 'AI-Driven Drug Discovery: Market Implications', excerpt: 'Analyzing the competitive landscape shift as artificial intelligence transforms pharmaceutical R&D and time-to-market.', date: 'Strategic Brief' },
        { category: 'Oncology', country: 'UK', title: 'Precision Medicine Market Dynamics 2025', excerpt: 'Comprehensive analysis of biomarker-driven therapies and the evolving oncology treatment paradigm.', date: 'Industry Analysis' },
      ],
    },
    stats: {
      title: 'Global Impact',
      items: [
        { value: '50+', label: 'Countries Covered' },
        { value: '10+', label: 'Pharma Clients' },
        { value: '120+', label: 'Projects Delivered' },
        { value: '15+', label: 'Years Experience' },
      ],
    },
    testimonials: {
      title: 'Client Perspectives',
      subtitle: 'Trusted by leading pharmaceutical and biotech companies worldwide',
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Ready to transform your healthcare market strategy? Our team of experts is here to help.',
      cta: 'Schedule a Consultation',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    localePrompt: {
      title: 'You are opening from {region}.',
      question: 'Do you want to switch to {language}?',
      yes: 'Yes',
      no: 'No',
    },
    footer: {
      tagline: 'EMEA Healthcare Market Research | Pharma Insights Europe & MENA',
      copyright: '© 2024 BioNixus. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    cookieConsent: {
      message: 'We use cookies to improve your experience and analyse site traffic. By clicking Accept you agree to our use of cookies and our Privacy Policy.',
      accept: 'Accept',
      decline: 'Decline',
      privacyLink: 'Privacy Policy',
    },
  },
  de: {
    nav: {
      services: 'Leistungen',
      insights: 'Erkenntnisse',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'EMEA Healthcare Market Research',
      title: 'EMEA Healthcare Market Research for Pharmaceutical Excellence',
      subtitle: 'Transform Physician & Hospital Insights into Strategic Intelligence Across UK, Europe & MENA Markets',
      valueProposition: 'We deliver comprehensive quantitative and qualitative market research services that transform clinical data into actionable pharmaceutical intelligence. Our specialized methodology captures authentic physician perspectives from NHS and private healthcare settings, hospital trends, and patient insights across UK, European, and MENA markets to power your drug development, market access, and commercial strategies.',
      serviceHighlights: ['UK NHS & Private Healthcare Research', 'Pan-European Physician Surveys', 'Qualitative KOL Interviews', 'Multi-Country Data Analytics', 'UK • Europe • MENA Coverage'],
      cta: 'Get UK Research Proposal',
      ctaSecondary: 'View European Case Studies',
      trustBar: 'Trusted by pharmaceutical companies in',
      trustCountries: 'UK • Germany • France • Spain • Italy • UAE • Saudi Arabia • Egypt • Kuwait • Qatar',
      complianceBadges: ['MHRA Compliant', 'EMA Aligned', 'GDPR Compliant', 'SFDA Compliant', 'ICH-GCP'],
    },
    services: {
      title: 'Unsere Expertise',
      subtitle: 'Umfassende Gesundheitsmarktforschungslösungen, zugeschnitten auf Ihre strategischen Bedürfnisse',
      items: [
        {
          title: 'Marktzugang & Preisgestaltung',
          description: 'Navigieren Sie komplexe Erstattungslandschaften mit evidenzbasierten Preisstrategien und Kostenträger-Engagement-Frameworks.',
        },
        {
          title: 'Wettbewerbsanalyse',
          description: 'Bleiben Sie mit Echtzeit-Wettbewerbsbeobachtung, Pipeline-Analyse und strategischen Positionierungserkenntnissen voraus.',
        },
        {
          title: 'Patientenreise-Mapping',
          description: 'Verstehen Sie die gesamte Patientenerfahrung von der Diagnose bis zur Behandlung, um Berührungspunkte und Ergebnisse zu optimieren.',
        },
        {
          title: 'KOL & Stakeholder-Analyse',
          description: 'Identifizieren und engagieren Sie Key Opinion Leader mit datengestütztem Einfluss-Mapping und Beziehungsstrategien.',
        },
        {
          title: 'Klinische Studienoptimierung',
          description: 'Beschleunigen Sie die Entwicklung mit Standortauswahl-Analytik, Patientenrekrutierungsstrategien und Protokolloptimierung.',
        },
        {
          title: 'Launch-Exzellenz',
          description: 'Maximieren Sie die Launch-Wirkung mit integrierten Go-to-Market-Strategien, Prognosen und Marktgestaltungsinitiativen.',
        },
      ],
    },
    insights: {
      title: 'Aktuelle Erkenntnisse',
      subtitle: 'Thought Leadership und Forschungsperspektiven von unserem globalen Team',
      readMore: 'Artikel lesen',
      items: [
        {
          category: 'Marktzugang',
          title: 'Die Zukunft wertbasierter Gesundheitsvereinbarungen in Europa',
          excerpt: 'Wie innovative Vertragsmodelle pharmazeutische Preis- und Zugangsstrategien in großen europäischen Märkten umgestalten.',
          date: '2024 Q4 Bericht',
        },
        {
          category: 'Digitale Gesundheit',
          title: 'KI-gesteuerte Arzneimittelentdeckung: Marktimplikationen',
          excerpt: 'Analyse der Wettbewerbslandschaftsverschiebung, während künstliche Intelligenz pharmazeutische F&E transformiert.',
          date: 'Strategische Kurzanalyse',
        },
        {
          category: 'Onkologie',
          title: 'Präzisionsmedizin Marktdynamik 2025',
          excerpt: 'Umfassende Analyse von Biomarker-gesteuerten Therapien und dem sich entwickelnden Onkologie-Behandlungsparadigma.',
          date: 'Branchenanalyse',
        },
      ],
    },
    blog: {
      title: 'Aktuelle Erkenntnisse',
      subtitle: 'Thought Leadership und Forschungsperspektiven von unserem globalen Team',
      readMore: 'Artikel lesen',
      readMoreArticles: 'Weitere Artikel lesen',
      filterAllTopics: 'Alle Themen',
      filterAllCountries: 'Alle Länder',
      filterByTopic: 'Thema',
      filterByCountry: 'Land',
      items: [
        { category: 'Marktzugang', country: 'Europa', title: 'Die Zukunft wertbasierter Gesundheitsvereinbarungen in Europa', excerpt: 'Wie innovative Vertragsmodelle pharmazeutische Preis- und Zugangsstrategien in großen europäischen Märkten umgestalten.', date: '2024 Q4 Bericht' },
        { category: 'Digitale Gesundheit', country: 'USA', title: 'KI-gesteuerte Arzneimittelentdeckung: Marktimplikationen', excerpt: 'Analyse der Wettbewerbslandschaftsverschiebung, während künstliche Intelligenz pharmazeutische F&E transformiert.', date: 'Strategische Kurzanalyse' },
        { category: 'Onkologie', country: 'UK', title: 'Präzisionsmedizin Marktdynamik 2025', excerpt: 'Umfassende Analyse von Biomarker-gesteuerten Therapien und dem sich entwickelnden Onkologie-Behandlungsparadigma.', date: 'Branchenanalyse' },
      ],
    },
    stats: {
      title: 'Globale Wirkung',
      items: [
        { value: '50+', label: 'Abgedeckte Länder' },
        { value: '10+', label: 'Pharma-Kunden' },
        { value: '120+', label: 'Gelieferte Projekte' },
        { value: '15+', label: 'Jahre Erfahrung' },
      ],
    },
    testimonials: {
      title: 'Kundenperspektiven',
      subtitle: 'Vertraut von führenden Pharma- und Biotech-Unternehmen weltweit',
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Bereit, Ihre Gesundheitsmarktstrategie zu transformieren? Unser Expertenteam steht Ihnen zur Verfügung.',
      cta: 'Beratung vereinbaren',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    localePrompt: {
      title: 'Sie öffnen von {region}.',
      question: 'Möchten Sie zu {language} wechseln?',
      yes: 'Ja',
      no: 'Nein',
    },
    footer: {
      tagline: 'Strategische Gesundheitsintelligenz',
      copyright: '© 2024 BioNixus. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
    },
    cookieConsent: {
      message: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Website-Traffic zu analysieren. Mit Klick auf Akzeptieren stimmen Sie unserer Cookie-Nutzung und der Datenschutzerklärung zu.',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
      privacyLink: 'Datenschutz',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      insights: 'Perspectives',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      tagline: 'EMEA Healthcare Market Research',
      title: 'EMEA Healthcare Market Research for Pharmaceutical Excellence',
      subtitle: 'Transform Physician & Hospital Insights into Strategic Intelligence Across UK, Europe & MENA Markets',
      valueProposition: 'We deliver comprehensive quantitative and qualitative market research services that transform clinical data into actionable pharmaceutical intelligence. Our specialized methodology captures authentic physician perspectives from NHS and private healthcare settings, hospital trends, and patient insights across UK, European, and MENA markets to power your drug development, market access, and commercial strategies.',
      serviceHighlights: ['UK NHS & Private Healthcare Research', 'Pan-European Physician Surveys', 'Qualitative KOL Interviews', 'Multi-Country Data Analytics', 'UK • Europe • MENA Coverage'],
      cta: 'Get UK Research Proposal',
      ctaSecondary: 'View European Case Studies',
      trustBar: 'Trusted by pharmaceutical companies in',
      trustCountries: 'UK • Germany • France • Spain • Italy • UAE • Saudi Arabia • Egypt • Kuwait • Qatar',
      complianceBadges: ['MHRA Compliant', 'EMA Aligned', 'GDPR Compliant', 'SFDA Compliant', 'ICH-GCP'],
    },
    services: {
      title: 'Notre Expertise',
      subtitle: 'Solutions complètes d\'études de marché santé adaptées à vos besoins stratégiques',
      items: [
        {
          title: 'Accès au Marché & Tarification',
          description: 'Naviguez dans des paysages de remboursement complexes avec des stratégies de prix basées sur les preuves.',
        },
        {
          title: 'Veille Concurrentielle',
          description: 'Gardez une longueur d\'avance avec une surveillance concurrentielle en temps réel et une analyse de pipeline.',
        },
        {
          title: 'Cartographie du Parcours Patient',
          description: 'Comprenez l\'expérience patient complète du diagnostic au traitement pour optimiser les résultats.',
        },
        {
          title: 'Analyse KOL & Parties Prenantes',
          description: 'Identifiez et engagez les leaders d\'opinion clés avec une cartographie d\'influence basée sur les données.',
        },
        {
          title: 'Optimisation des Essais Cliniques',
          description: 'Accélérez le développement avec des analyses de sélection de sites et des stratégies de recrutement.',
        },
        {
          title: 'Excellence de Lancement',
          description: 'Maximisez l\'impact du lancement avec des stratégies go-to-market intégrées et des prévisions.',
        },
      ],
    },
    insights: {
      title: 'Dernières Perspectives',
      subtitle: 'Leadership éclairé et perspectives de recherche de notre équipe mondiale',
      readMore: 'Lire l\'article',
      items: [
        {
          category: 'Accès au Marché',
          title: 'L\'Avenir des Accords de Santé Basés sur la Valeur en Europe',
          excerpt: 'Comment les modèles contractuels innovants remodèlent les stratégies de prix et d\'accès pharmaceutiques.',
          date: 'Rapport T4 2024',
        },
        {
          category: 'Santé Numérique',
          title: 'Découverte de Médicaments par l\'IA: Implications Marché',
          excerpt: 'Analyse du changement de paysage concurrentiel alors que l\'IA transforme la R&D pharmaceutique.',
          date: 'Note Stratégique',
        },
        {
          category: 'Oncologie',
          title: 'Dynamique du Marché de la Médecine de Précision 2025',
          excerpt: 'Analyse complète des thérapies guidées par biomarqueurs et du paradigme de traitement oncologique.',
          date: 'Analyse Sectorielle',
        },
      ],
    },
    blog: {
      title: 'Dernières Perspectives',
      subtitle: 'Leadership éclairé et perspectives de recherche de notre équipe mondiale',
      readMore: 'Lire l\'article',
      readMoreArticles: 'Lire plus d\'articles',
      filterAllTopics: 'Tous les thèmes',
      filterAllCountries: 'Tous les pays',
      filterByTopic: 'Thème',
      filterByCountry: 'Pays',
      items: [
        { category: 'Accès au Marché', country: 'Europe', title: 'L\'Avenir des Accords de Santé Basés sur la Valeur en Europe', excerpt: 'Comment les modèles contractuels innovants remodèlent les stratégies de prix et d\'accès pharmaceutiques.', date: 'Rapport T4 2024' },
        { category: 'Santé Numérique', country: 'USA', title: 'Découverte de Médicaments par l\'IA: Implications Marché', excerpt: 'Analyse du changement de paysage concurrentiel alors que l\'IA transforme la R&D pharmaceutique.', date: 'Note Stratégique' },
        { category: 'Oncologie', country: 'Royaume-Uni', title: 'Dynamique du Marché de la Médecine de Précision 2025', excerpt: 'Analyse complète des thérapies guidées par biomarqueurs et du paradigme de traitement oncologique.', date: 'Analyse Sectorielle' },
      ],
    },
    stats: {
      title: 'Impact Mondial',
      items: [
        { value: '50+', label: 'Pays Couverts' },
        { value: '10+', label: 'Clients Pharma' },
        { value: '120+', label: 'Projets Livrés' },
        { value: '15+', label: 'Ans d\'Expérience' },
      ],
    },
    testimonials: {
      title: 'Perspectives Clients',
      subtitle: 'Approuvé par les principales entreprises pharmaceutiques et biotechnologiques mondiales',
    },
    contact: {
      title: 'Connectons-nous',
      subtitle: 'Prêt à transformer votre stratégie de marché santé? Notre équipe d\'experts est là pour vous aider.',
      cta: 'Planifier une Consultation',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    localePrompt: {
      title: 'Vous ouvrez depuis {region}.',
      question: 'Voulez-vous passer à {language} ?',
      yes: 'Oui',
      no: 'Non',
    },
    footer: {
      tagline: 'Intelligence Stratégique en Santé',
      copyright: '© 2024 BioNixus. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
    },
    cookieConsent: {
      message: 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En cliquant sur Accepter, vous acceptez notre utilisation des cookies et notre Politique de Confidentialité.',
      accept: 'Accepter',
      decline: 'Refuser',
      privacyLink: 'Politique de Confidentialité',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      insights: 'Perspectivas',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'EMEA Healthcare Market Research',
      title: 'EMEA Healthcare Market Research for Pharmaceutical Excellence',
      subtitle: 'Transform Physician & Hospital Insights into Strategic Intelligence Across UK, Europe & MENA Markets',
      valueProposition: 'We deliver comprehensive quantitative and qualitative market research services that transform clinical data into actionable pharmaceutical intelligence. Our specialized methodology captures authentic physician perspectives from NHS and private healthcare settings, hospital trends, and patient insights across UK, European, and MENA markets to power your drug development, market access, and commercial strategies.',
      serviceHighlights: ['UK NHS & Private Healthcare Research', 'Pan-European Physician Surveys', 'Qualitative KOL Interviews', 'Multi-Country Data Analytics', 'UK • Europe • MENA Coverage'],
      cta: 'Get UK Research Proposal',
      ctaSecondary: 'View European Case Studies',
      trustBar: 'Trusted by pharmaceutical companies in',
      trustCountries: 'UK • Germany • France • Spain • Italy • UAE • Saudi Arabia • Egypt • Kuwait • Qatar',
      complianceBadges: ['MHRA Compliant', 'EMA Aligned', 'GDPR Compliant', 'SFDA Compliant', 'ICH-GCP'],
    },
    services: {
      title: 'Nuestra Experiencia',
      subtitle: 'Soluciones integrales de investigación de mercado sanitario adaptadas a sus necesidades estratégicas',
      items: [
        {
          title: 'Acceso al Mercado y Precios',
          description: 'Navegue por paisajes de reembolso complejos con estrategias de precios basadas en evidencia.',
        },
        {
          title: 'Inteligencia Competitiva',
          description: 'Manténgase adelante con monitoreo competitivo en tiempo real y análisis de pipeline.',
        },
        {
          title: 'Mapeo del Recorrido del Paciente',
          description: 'Comprenda la experiencia completa del paciente desde el diagnóstico hasta el tratamiento.',
        },
        {
          title: 'Análisis de KOL y Stakeholders',
          description: 'Identifique y comprometa a líderes de opinión clave con mapeo de influencia basado en datos.',
        },
        {
          title: 'Optimización de Ensayos Clínicos',
          description: 'Acelere el desarrollo con análisis de selección de sitios y estrategias de reclutamiento.',
        },
        {
          title: 'Excelencia en Lanzamiento',
          description: 'Maximice el impacto del lanzamiento con estrategias integradas go-to-market y pronósticos.',
        },
      ],
    },
    insights: {
      title: 'Últimas Perspectivas',
      subtitle: 'Liderazgo de pensamiento y perspectivas de investigación de nuestro equipo global',
      readMore: 'Leer Artículo',
      items: [
        {
          category: 'Acceso al Mercado',
          title: 'El Futuro de los Acuerdos de Salud Basados en Valor en Europa',
          excerpt: 'Cómo los modelos de contratación innovadores están remodelando las estrategias de precios farmacéuticos.',
          date: 'Informe Q4 2024',
        },
        {
          category: 'Salud Digital',
          title: 'Descubrimiento de Fármacos con IA: Implicaciones de Mercado',
          excerpt: 'Análisis del cambio en el panorama competitivo mientras la IA transforma la I+D farmacéutica.',
          date: 'Brief Estratégico',
        },
        {
          category: 'Oncología',
          title: 'Dinámica del Mercado de Medicina de Precisión 2025',
          excerpt: 'Análisis integral de terapias guiadas por biomarcadores y el paradigma de tratamiento oncológico.',
          date: 'Análisis Industrial',
        },
      ],
    },
    blog: {
      title: 'Últimas Perspectivas',
      subtitle: 'Liderazgo de pensamiento y perspectivas de investigación de nuestro equipo global',
      readMore: 'Leer Artículo',
      readMoreArticles: 'Leer más artículos',
      filterAllTopics: 'Todos los temas',
      filterAllCountries: 'Todos los países',
      filterByTopic: 'Tema',
      filterByCountry: 'País',
      items: [
        { category: 'Acceso al Mercado', country: 'Europa', title: 'El Futuro de los Acuerdos de Salud Basados en Valor en Europa', excerpt: 'Cómo los modelos de contratación innovadores están remodelando las estrategias de precios farmacéuticos.', date: 'Informe Q4 2024' },
        { category: 'Salud Digital', country: 'EE. UU.', title: 'Descubrimiento de Fármacos con IA: Implicaciones de Mercado', excerpt: 'Análisis del cambio en el panorama competitivo mientras la IA transforma la I+D farmacéutica.', date: 'Brief Estratégico' },
        { category: 'Oncología', country: 'Reino Unido', title: 'Dinámica del Mercado de Medicina de Precisión 2025', excerpt: 'Análisis integral de terapias guiadas por biomarcadores y el paradigma de tratamiento oncológico.', date: 'Análisis Industrial' },
      ],
    },
    stats: {
      title: 'Impacto Global',
      items: [
        { value: '50+', label: 'Países Cubiertos' },
        { value: '10+', label: 'Clientes Pharma' },
        { value: '120+', label: 'Proyectos Entregados' },
        { value: '15+', label: 'Años de Experiencia' },
      ],
    },
    testimonials: {
      title: 'Perspectivas de Clientes',
      subtitle: 'Confiado por empresas farmacéuticas y biotecnológicas líderes en todo el mundo',
    },
    contact: {
      title: 'Conectemos',
      subtitle: '¿Listo para transformar su estrategia de mercado sanitario? Nuestro equipo de expertos está aquí para ayudar.',
      cta: 'Programar Consulta',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    localePrompt: {
      title: 'Está abriendo desde {region}.',
      question: '¿Desea cambiar a {language}?',
      yes: 'Sí',
      no: 'No',
    },
    footer: {
      tagline: 'Inteligencia Estratégica en Salud',
      copyright: '© 2024 BioNixus. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
    },
    cookieConsent: {
      message: 'Utilizamos cookies para mejorar su experiencia y analizar el tráfico del sitio. Al hacer clic en Aceptar, acepta nuestro uso de cookies y nuestra Política de Privacidad.',
      accept: 'Aceptar',
      decline: 'Rechazar',
      privacyLink: 'Política de Privacidad',
    },
  },
  zh: {
    nav: {
      services: '服务',
      insights: '洞察',
      about: '关于我们',
      contact: '联系我们',
    },
    hero: {
      tagline: 'EMEA Healthcare Market Research',
      title: 'EMEA Healthcare Market Research for Pharmaceutical Excellence',
      subtitle: 'Transform Physician & Hospital Insights into Strategic Intelligence Across UK, Europe & MENA Markets',
      valueProposition: 'We deliver comprehensive quantitative and qualitative market research services that transform clinical data into actionable pharmaceutical intelligence. Our specialized methodology captures authentic physician perspectives from NHS and private healthcare settings, hospital trends, and patient insights across UK, European, and MENA markets to power your drug development, market access, and commercial strategies.',
      serviceHighlights: ['UK NHS & Private Healthcare Research', 'Pan-European Physician Surveys', 'Qualitative KOL Interviews', 'Multi-Country Data Analytics', 'UK • Europe • MENA Coverage'],
      cta: 'Get UK Research Proposal',
      ctaSecondary: 'View European Case Studies',
      trustBar: 'Trusted by pharmaceutical companies in',
      trustCountries: 'UK • Germany • France • Spain • Italy • UAE • Saudi Arabia • Egypt • Kuwait • Qatar',
      complianceBadges: ['MHRA Compliant', 'EMA Aligned', 'GDPR Compliant', 'SFDA Compliant', 'ICH-GCP'],
    },
    services: {
      title: '我们的专业领域',
      subtitle: '根据您的战略需求量身定制的全面医疗健康市场研究解决方案',
      items: [
        {
          title: '市场准入与定价',
          description: '通过基于证据的定价策略和付款方参与框架，驾驭复杂的报销环境。',
        },
        {
          title: '竞争情报',
          description: '通过实时竞争监控、管线分析和战略定位洞察保持领先。',
        },
        {
          title: '患者旅程映射',
          description: '了解从诊断到治疗的完整患者体验，以优化接触点和结果。',
        },
        {
          title: 'KOL与利益相关者分析',
          description: '通过数据驱动的影响力映射和关系策略识别和吸引关键意见领袖。',
        },
        {
          title: '临床试验优化',
          description: '通过站点选择分析、患者招募策略和方案优化加速开发。',
        },
        {
          title: '上市卓越',
          description: '通过整合的市场进入策略、预测和市场塑造计划最大化上市影响。',
        },
      ],
    },
    insights: {
      title: '最新洞察',
      subtitle: '来自我们全球团队的思想领导力和研究视角',
      readMore: '阅读文章',
      items: [
        {
          category: '市场准入',
          title: '欧洲基于价值的医疗协议的未来',
          excerpt: '创新合同模式如何重塑主要欧洲市场的制药定价和准入策略。',
          date: '2024年第四季度报告',
        },
        {
          category: '数字健康',
          title: 'AI驱动的药物发现：市场影响',
          excerpt: '分析人工智能改变制药研发和上市时间时的竞争格局变化。',
          date: '战略简报',
        },
        {
          category: '肿瘤学',
          title: '2025年精准医疗市场动态',
          excerpt: '对生物标志物驱动疗法和不断发展的肿瘤治疗范式的全面分析。',
          date: '行业分析',
        },
      ],
    },
    blog: {
      title: '最新洞察',
      subtitle: '来自我们全球团队的思想领导力和研究视角',
      readMore: '阅读文章',
      readMoreArticles: '阅读更多文章',
      filterAllTopics: '全部主题',
      filterAllCountries: '全部国家',
      filterByTopic: '主题',
      filterByCountry: '国家',
      items: [
        { category: '市场准入', country: '欧洲', title: '欧洲基于价值的医疗协议的未来', excerpt: '创新合同模式如何重塑主要欧洲市场的制药定价和准入策略。', date: '2024年第四季度报告' },
        { category: '数字健康', country: '美国', title: 'AI驱动的药物发现：市场影响', excerpt: '分析人工智能改变制药研发和上市时间时的竞争格局变化。', date: '战略简报' },
        { category: '肿瘤学', country: '英国', title: '2025年精准医疗市场动态', excerpt: '对生物标志物驱动疗法和不断发展的肿瘤治疗范式的全面分析。', date: '行业分析' },
      ],
    },
    stats: {
      title: '全球影响',
      items: [
        { value: '50+', label: '覆盖国家' },
        { value: '10+', label: '制药客户' },
        { value: '120+', label: '交付项目' },
        { value: '15+', label: '年经验' },
      ],
    },
    testimonials: {
      title: '客户观点',
      subtitle: '受到全球领先制药和生物技术公司的信赖',
    },
    contact: {
      title: '让我们联系',
      subtitle: '准备好转变您的医疗健康市场战略了吗？我们的专家团队随时为您服务。',
      cta: '预约咨询',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    localePrompt: {
      title: '您正在从 {region} 打开。',
      question: '是否切换到 {language}？',
      yes: '是',
      no: '否',
    },
    footer: {
      tagline: '战略医疗健康智能',
      copyright: '© 2024 BioNixus。保留所有权利。',
      privacy: '隐私政策',
      terms: '服务条款',
    },
    cookieConsent: {
      message: '我们使用 Cookie 来改善您的体验并分析网站流量。点击“接受”即表示您同意我们使用 Cookie 和我们的隐私政策。',
      accept: '接受',
      decline: '拒绝',
      privacyLink: '隐私政策',
    },
  },
  ar: {
    nav: {
      services: 'الخدمات',
      insights: 'الرؤى',
      about: 'من نحن',
      contact: 'اتصل بنا',
    },
    hero: {
      tagline: 'أبحاث السوق الصحية في الشرق الأوسط والخليج',
      title: 'أبحاث السوق الصحية والدوائية في الشرق الأوسط ودول الخليج',
      subtitle: 'حوّل رؤى الأطباء والمستشفيات إلى ذكاء استراتيجي عبر أسواق الخليج وشمال أفريقيا',
      valueProposition: 'نقدم خدمات أبحاث سوق كمية ونوعية شاملة تحول البيانات السريرية إلى معلومات دوائية قابلة للتنفيذ. منهجيتنا المتخصصة تلتقط وجهات نظر الأطباء الحقيقية من القطاعين الحكومي والخاص، اتجاهات المستشفيات، ورؤى المرضى عبر أسواق دول الخليج والشرق الأوسط لدعم استراتيجيات تطوير الأدوية، الوصول للسوق، والتسويق التجاري.',
      serviceHighlights: ['أبحاث المستشفيات الحكومية والخاصة', 'استبيانات الأطباء الكمية', 'مقابلات الخبراء النوعية', 'تحليل البيانات متعدد الدول', 'تغطية شاملة للخليج والشرق الأوسط'],
      cta: 'احصل على عرض أسعار',
      ctaSecondary: 'استعرض دراسات الحالة',
      trustBar: 'موثوق به من قبل شركات الأدوية في',
      trustCountries: 'السعودية • الإمارات • الكويت • قطر • مصر • المغرب • الجزائر • تونس',
      complianceBadges: ['MHRA Compliant', 'EMA Aligned', 'GDPR Compliant', 'SFDA Compliant', 'ICH-GCP'],
    },
    services: {
      title: 'خبرتنا',
      subtitle: 'حلول شاملة لأبحاث سوق الرعاية الصحية مصممة وفقاً لاحتياجاتك الاستراتيجية',
      servicePrimaryAr: [
        {
          title: 'أبحاث السوق الكمية واستبيانات الأطباء في دول الخليج والشرق الأوسط',
          lead: 'رؤى إحصائية قوية من استبيانات واسعة النطاق للأطباء والمهنيين الصحيين عبر أسواق الخليج، شمال أفريقيا والشرق الأوسط. منهجياتنا الكمية تقدم الأدلة التي تحتاجها لاتخاذ قرارات استراتيجية.',
          countries: [
            { name: 'المملكة العربية السعودية', items: ['استبيانات أطباء وزارة الصحة والقطاع الخاص', 'دراسات المستشفيات الجامعية والتخصصية (الرياض، جدة، الدمام)', 'تحليل سلوك الوصفات الطبية والتفضيلات العلاجية', 'أبحاث مدن الملك فهد الطبية ومجمع الملك عبدالله الطبي', 'دراسات رؤية 2030 والتحول الصحي', 'تحليل حجم السوق والتنبؤ بالاتجاهات'] },
            { name: 'الإمارات العربية المتحدة', items: ['أبحاث هيئة الصحة بدبي (DHA) ودائرة الصحة أبوظبي (DOH)', 'دراسات المستشفيات الخاصة والمراكز التخصصية', 'تحليل السياحة العلاجية والرعاية التخصصية', 'استبيانات الأطباء في دبي، أبوظبي، الشارقة', 'أبحاث مدينة دبي الطبية ومستشفى كليفلاند كلينك'] },
            { name: 'الكويت', items: ['دراسات نظام الرعاية الصحية بوزارة الصحة', 'أبحاث المستشفيات التخصصية والمجمعات الطبية', 'تحليل تفضيلات الأطباء والأنماط العلاجية'] },
            { name: 'قطر', items: ['أبحاث مؤسسة حمد الطبية والمؤسسات الصحية', 'دراسات المستشفيات الخاصة والعيادات التخصصية', 'تحليل المبادرات الصحية والاستراتيجية الوطنية للصحة'] },
            { name: 'مصر', items: ['أبحاث أكبر سوق دوائي في شمال أفريقيا', 'استبيانات المستشفيات الحكومية والجامعية (القاهرة، الإسكندرية)', 'دراسات القطاع الخاص والمراكز الطبية التخصصية', 'تحليل شبكات المستشفيات والرعاية الأولية', 'أبحاث التأمين الصحي الشامل'] },
            { name: 'المغرب', items: ['دراسات النظام الصحي في الرباط، الدار البيضاء، مراكش', 'أبحاث المستشفيات الجامعية CHU', 'تحليل القطاع الخاص والعيادات التخصصية'] },
            { name: 'الجزائر', items: ['أبحاث القطاع الصحي العام والخاص', 'دراسات المستشفيات الجامعية في الجزائر، وهران، قسنطينة', 'تحليل سوق الأدوية والتوزيع'] },
            { name: 'تونس', items: ['أبحاث النظام الصحي الوطني', 'دراسات المستشفيات الجامعية والمراكز المتخصصة', 'تحليل القطاع الخاص الصحي'] },
            { name: 'إيران', items: ['أبحاث سوق الأدوية الإيراني', 'دراسات المستشفيات والمراكز البحثية الطبية', 'تحليل النظام الصحي والتصنيع المحلي للأدوية'] },
          ],
          deliverables: 'المخرجات: تقارير إحصائية شاملة، تقديرات حجم السوق، تحليل مسارات العلاج، التنبؤ بالاتجاهات، تحليل التقسيم، رؤى مقارنة عبر الدول، لوحات الذكاء التنافسي',
        },
        {
          title: 'الأبحاث النوعية ورؤى الخبراء الطبيين في الشرق الأوسط',
          lead: 'أبحاث نوعية متعمقة تلتقط وجهات النظر السريرية الدقيقة، الاحتياجات الطبية غير الملباة، والذكاء الاستراتيجي من خلال التفاعل مع الخبراء عبر الأسواق الرئيسية.',
          countries: [
            { name: 'المملكة العربية السعودية - البحث النوعي', items: ['مقابلات متعمقة مع استشاريين وأطباء متخصصين', 'مجموعات النقاش مع مديري المستشفيات', 'مجالس استشارية للخبراء الطبيين KOL', 'دراسات تجربة المرضى', 'تحليل الاحتياجات غير الملباة في التخصصات العلاجية'] },
            { name: 'الإمارات العربية المتحدة - رؤى الخبراء', items: ['مقابلات الأطباء الاستشاريين في القطاعين العام والخاص', 'جلسات الخبراء الطبيين والقادة الرأي KOL', 'مجموعات التركيز مع المهنيين الصحيين', 'دراسات مسارات العلاج عبر الحدود'] },
            { name: 'الكويت وقطر - البحث النوعي', items: ['مقابلات الخبراء الطبيين والاستشاريين', 'مجالس استشارية للأطباء', 'دراسات النظام الصحي والسياسات'] },
            { name: 'مصر - رؤى متعمقة', items: ['مقابلات أساتذة الجامعات والاستشاريين', 'مجموعات نقاش مع الأطباء المتخصصين', 'دراسات الممارسات الطبية الإثنوغرافية', 'تحليل وجهات نظر المرضى الثقافية'] },
            { name: 'المغرب والجزائر وتونس - البحث النوعي', items: ['مقابلات الخبراء الطبيين في شمال أفريقيا', 'دراسات النظم الصحية المقارنة', 'تحليل السياق الثقافي والاجتماعي'] },
            { name: 'إيران - رؤى الخبراء', items: ['مقابلات الأطباء والباحثين الإيرانيين', 'دراسات السوق والنظام الصحي', 'تحليل التصنيع المحلي والابتكار'] },
          ],
          deliverables: 'المخرجات: تقارير التحليل الموضوعي، رؤى النظام الصحي، ملخصات إجماع الخبراء، توصيات استراتيجية للوصول للسوق، استراتيجيات التفاعل مع KOL، تقييمات الاحتياجات غير الملباة',
        },
      ],
      serviceSecondaryAr: [
        {
          title: 'استراتيجية الوصول للسوق ودعم الاقتصاد الصحي',
          intro: 'الاستفادة من رؤى أبحاث السوق العميقة لدعم استراتيجيات الوصول للسوق والتسعير والسداد عبر أسواق الخليج والشرق الأوسط.',
          regions: [
            { name: 'دول الخليج العربي', items: ['تحليل المشهد التنظيمي والتسعير (SFDA، DHA، MOH)', 'استراتيجية المناقصات الحكومية والوصول لقوائم المستشفيات', 'رؤى أصحاب المصلحة الحكوميين', 'تطوير عرض القيمة والرسائل التسويقية'] },
            { name: 'مصر وشمال أفريقيا', items: ['استراتيجية التسعير والسداد', 'تحليل التأمين الصحي والقطاع الخاص', 'أبحاث الاقتصاد الصحي والنتائج (HEOR)'] },
          ],
          note: 'خدماتنا في الوصول للسوق قائمة على الأبحاث، باستخدام رؤى الأطباء، الجهات الدافعة، وأصحاب المصلحة المجمعة من خلال قدراتنا الأساسية في أبحاث السوق.',
        },
        {
          title: 'دراسات الجدوى للتجارب السريرية ومعلومات المواقع البحثية',
          intro: 'دعم التطوير السريري برؤى بحثية استراتيجية حول جدوى التجارب، اختيار المواقع، وشبكات الباحثين.',
          regions: [
            { name: 'خدمات أبحاث التجارب السريرية', items: ['دراسات الجدوى وتحديد المواقع البحثية في الخليج والشرق الأوسط', 'رسم خرائط الباحثين وتحديد KOL', 'رؤى توظيف المرضى وتحسين البروتوكول', 'تحليل المشهد التنافسي للتجارب', 'تقييم أداء وقدرات المواقع'] },
          ],
          note: 'تستفيد خدمات التجارب السريرية من شبكات الأطباء الواسعة ومعرفتنا بالنظام الصحي لدعم برامج التطوير السريري الخاصة بك.',
        },
      ],
      items: [
        {
          title: 'الوصول إلى السوق والتسعير',
          description: 'تنقل في مشهد التعويضات المعقد باستخدام استراتيجيات تسعير قائمة على الأدلة وأطر إشراك الدافعين.',
        },
        {
          title: 'الاستخبارات التنافسية',
          description: 'ابق في المقدمة مع المراقبة التنافسية في الوقت الفعلي وتحليل خط الأنابيب ورؤى الموقع الاستراتيجي.',
        },
      ],
    },
    insights: {
      title: 'أحدث الرؤى',
      subtitle: 'القيادة الفكرية ووجهات نظر البحث من فريقنا العالمي',
      readMore: 'اقرأ المقال',
      items: [
        {
          category: 'الوصول إلى السوق',
          title: 'مستقبل اتفاقيات الرعاية الصحية القائمة على القيمة في أوروبا',
          excerpt: 'كيف تعيد نماذج التعاقد المبتكرة تشكيل استراتيجيات التسعير والوصول الصيدلاني عبر الأسواق الأوروبية الرئيسية.',
          date: 'تقرير الربع الرابع 2024',
        },
        {
          category: 'الصحة الرقمية',
          title: 'اكتشاف الأدوية بالذكاء الاصطناعي: تداعيات السوق',
          excerpt: 'تحليل تحول المشهد التنافسي بينما يحول الذكاء الاصطناعي البحث والتطوير الصيدلاني ووقت الوصول إلى السوق.',
          date: 'موجز استراتيجي',
        },
        {
          category: 'الأورام',
          title: 'ديناميكيات سوق الطب الدقيق 2025',
          excerpt: 'تحليل شامل للعلاجات الموجهة بالمؤشرات الحيوية ونموذج علاج الأورام المتطور.',
          date: 'تحليل الصناعة',
        },
      ],
    },
    blog: {
      title: 'أحدث الرؤى',
      subtitle: 'القيادة الفكرية ووجهات نظر البحث من فريقنا العالمي',
      readMore: 'اقرأ المقال',
      readMoreArticles: 'اقرأ المزيد من المقالات',
      filterAllTopics: 'جميع المواضيع',
      filterAllCountries: 'جميع البلدان',
      filterByTopic: 'الموضوع',
      filterByCountry: 'البلد',
      items: [
        { category: 'الوصول إلى السوق', country: 'أوروبا', title: 'مستقبل اتفاقيات الرعاية الصحية القائمة على القيمة في أوروبا', excerpt: 'كيف تعيد نماذج التعاقد المبتكرة تشكيل استراتيجيات التسعير والوصول الصيدلاني عبر الأسواق الأوروبية الرئيسية.', date: 'تقرير الربع الرابع 2024' },
        { category: 'الصحة الرقمية', country: 'الولايات المتحدة', title: 'اكتشاف الأدوية بالذكاء الاصطناعي: تداعيات السوق', excerpt: 'تحليل تحول المشهد التنافسي بينما يحول الذكاء الاصطناعي البحث والتطوير الصيدلاني ووقت الوصول إلى السوق.', date: 'موجز استراتيجي' },
        { category: 'الأورام', country: 'المملكة المتحدة', title: 'ديناميكيات سوق الطب الدقيق 2025', excerpt: 'تحليل شامل للعلاجات الموجهة بالمؤشرات الحيوية ونموذج علاج الأورام المتطور.', date: 'تحليل الصناعة' },
      ],
    },
    stats: {
      title: 'التأثير العالمي',
      items: [
        { value: '+50', label: 'دولة مغطاة' },
        { value: '+10', label: 'شركاء نجاح' },
        { value: '+120', label: 'مشروع منجز' },
        { value: '+15', label: 'سنة خبرة' },
      ],
    },
    testimonials: {
      title: 'آراء العملاء',
      subtitle: 'موثوق به من قبل شركات الأدوية والتكنولوجيا الحيوية الرائدة في جميع أنحاء العالم',
    },
    contact: {
      title: 'لنتواصل',
      subtitle: 'هل أنت مستعد لتحويل استراتيجية سوق الرعاية الصحية الخاصة بك؟ فريق خبرائنا هنا للمساعدة.',
      cta: 'حدد موعد استشارة',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    localePrompt: {
      title: 'أنت تفتح من {region}.',
      question: 'هل تريد التبديل إلى {language}؟',
      yes: 'نعم',
      no: 'لا',
    },
    footer: {
      tagline: 'الذكاء الاستراتيجي للرعاية الصحية',
      copyright: '© 2024 بيونيكسس. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    cookieConsent: {
      message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة الموقع. بالنقر على قبول فإنك توافق على استخدامنا لملفات تعريف الارتباط وسياسة الخصوصية.',
      accept: 'قبول',
      decline: 'رفض',
      privacyLink: 'سياسة الخصوصية',
    },
    geographicCoverageAr: {
      title: 'أبحاث السوق الصحية عبر دول الخليج والشرق الأوسط',
      countries: [
        {
          name: 'المملكة العربية السعودية - مركز الأبحاث الدوائية',
          featured: true,
          marketSize: 'أكبر سوق دوائي في منطقة الخليج',
          sections: [
            { heading: 'التغطية الجغرافية', items: ['الرياض: مستشفيات وزارة الصحة، المدن الطبية، القطاع الخاص', 'جدة: المستشفيات الجامعية، المراكز التخصصية', 'الدمام والمنطقة الشرقية: المجمعات الطبية', 'المدينة المنورة، مكة المكرمة، أبها: التغطية الإقليمية'] },
            { heading: 'المؤسسات الصحية الرئيسية', items: ['وزارة الصحة - شبكة المستشفيات الحكومية', 'مدينة الملك فهد الطبية', 'مجمع الملك عبدالله الطبي', 'مستشفى الملك فيصل التخصصي', 'القطاع الخاص: مستشفى المملكة، سليمان الحبيب، دله'] },
            { heading: 'التخصصات البحثية', text: 'السكري، القلب والأوعية الدموية، الأورام، الأمراض النادرة، طب الأطفال، صحة المرأة' },
            { heading: 'الامتثال التنظيمي', text: 'متوافق مع هيئة الغذاء والدواء السعودية (SFDA) ووزارة الصحة' },
          ],
        },
        {
          name: 'الإمارات العربية المتحدة - مركز الابتكار الصحي',
          featured: true,
          marketSize: 'سوق صحي متقدم مع سياحة علاجية',
          sections: [
            { heading: 'التغطية الجغرافية', items: ['دبي: مدينة دبي الطبية، مستشفيات القطاع الخاص', 'أبوظبي: مستشفى كليفلاند كلينك، مدينة الشيخ خليفة الطبية', 'الشارقة والإمارات الشمالية: المستشفيات الإقليمية'] },
            { heading: 'المؤسسات الصحية الرئيسية', items: ['هيئة الصحة بدبي (DHA)', 'دائرة الصحة أبوظبي (DOH)', 'مستشفى كليفلاند كلينك أبوظبي', 'مستشفى الجليلة التخصصي للأطفال', 'القطاع الخاص: NMC، ميدكير، برجيل'] },
            { heading: 'التخصصات البحثية', text: 'الأورام، القلب، الجراحة التخصصية، الطب التجديدي، الأمراض الاستقلابية' },
          ],
        },
        {
          name: 'الكويت - نظام صحي متقدم',
          featured: false,
          sections: [
            { heading: 'التغطية', items: ['مستشفيات وزارة الصحة', 'المجمعات الطبية التخصصية', 'القطاع الخاص والعيادات'] },
            { heading: 'التخصصات البحثية', text: 'السكري، أمراض القلب، جراحة السمنة، الأمراض المزمنة' },
          ],
        },
        {
          name: 'قطر - التميز الطبي',
          featured: false,
          sections: [
            { heading: 'المؤسسات الرئيسية', items: ['مؤسسة حمد الطبية', 'سدرة للطب', 'مستشفى العمادي', 'المراكز الطبية التخصصية'] },
            { heading: 'التخصصات البحثية', text: 'طب الأطفال، صحة المرأة، الأورام، الطب الرياضي' },
          ],
        },
        {
          name: 'مصر - أكبر سوق في شمال أفريقيا',
          featured: true,
          marketSize: '100+ مليون نسمة، سوق دوائي متنامي',
          sections: [
            { heading: 'التغطية الجغرافية', items: ['القاهرة الكبرى: المستشفيات الجامعية، المراكز التخصصية', 'الإسكندرية: مستشفيات جامعية وخاصة', 'الدلتا والصعيد: مستشفيات إقليمية'] },
            { heading: 'المؤسسات الصحية', items: ['مستشفيات جامعة القاهرة وعين شمس', 'المعهد القومي للأورام', 'معهد القلب القومي', 'القطاع الخاص: دار الفؤاد، السعودي الألماني، كليوباترا'] },
            { heading: 'التخصصات البحثية', text: 'الأورام، القلب والأوعية الدموية، السكري، الكبد، الأمراض المعدية، صحة الأم والطفل' },
            { heading: 'الامتثال', text: 'متوافق مع هيئة الدواء المصرية ووزارة الصحة' },
          ],
        },
        {
          name: 'المغرب - سوق شمال أفريقيا الاستراتيجي',
          featured: false,
          sections: [
            { heading: 'التغطية الجغرافية', items: ['الدار البيضاء: المستشفيات الجامعية CHU، القطاع الخاص', 'الرباط: المراكز الطبية الحكومية', 'مراكش، فاس، طنجة: التغطية الإقليمية'] },
            { heading: 'التخصصات البحثية', text: 'الأورام، أمراض القلب، السكري، الأمراض المعدية' },
          ],
        },
        {
          name: 'الجزائر - سوق متنامي',
          featured: false,
          sections: [
            { heading: 'التغطية', items: ['الجزائر العاصمة، وهران، قسنطينة', 'المستشفيات الجامعية CHU', 'القطاع العام والخاص'] },
          ],
        },
        {
          name: 'تونس - مركز طبي إقليمي',
          featured: false,
          sections: [
            { heading: 'التغطية', items: ['تونس العاصمة، صفاقس، سوسة', 'المستشفيات الجامعية', 'العيادات التخصصية'] },
          ],
        },
      ],
    },
    methodologyAr: {
      title: 'منهجية أبحاث السوق الصحية القائمة على الأدلة',
      steps: [
        {
          title: 'المرحلة 1: تصميم البحث وتطوير البروتوكول',
          items: ['منهجية مخصصة متوافقة مع المجال العلاجي', 'الامتثال التنظيمي (SFDA، DHA، وزارات الصحة الإقليمية)', 'حماية البيانات والخصوصية', 'معايير البحث السريري الدولية (ICH-GCP)', 'حسابات القوة الإحصائية', 'التكيف الثقافي واللغوي'],
        },
        {
          title: 'المرحلة 2: توظيف الأطباء والمهنيين الصحيين',
          subsections: [
            { heading: 'دول الخليج', items: ['قوائم الأطباء المعتمدين من الهيئات الصحية', 'شبكات الاستشاريين في المستشفيات الحكومية والخاصة', 'تغطية التخصصات المتعددة (الأورام، القلب، الغدد الصماء، إلخ)', 'التمثيل عبر مستويات المستشفيات (أولية، ثانوية، ثالثية)'] },
            { heading: 'مصر وشمال أفريقيا', items: ['شراكات مع الجمعيات الطبية', 'شبكات الأطباء الجامعيين', 'الوصول للقطاعين العام والخاص'] },
          ],
        },
        {
          title: 'المرحلة 3: جمع البيانات وضمان الجودة',
          items: ['نشر الاستبيانات متعددة اللغات (العربية، الإنجليزية، الفارسية)', 'التحقق من البيانات في الوقت الفعلي', 'بروتوكولات التحقق من هوية الأطباء', 'مراقبة الامتثال للخصوصية وحماية البيانات', 'التشفير الآمن للبيانات والتخزين', 'فريق بحث ثنائي اللغة (عربي-إنجليزي)'],
        },
        {
          title: 'المرحلة 4: التحليل المتقدم وتوليد الرؤى',
          subsections: [
            { heading: 'التحليل الإحصائي', items: ['نمذجة الانحدار والتحليلات التنبؤية', 'تقسيم السوق وتحليل المجموعات', 'الترميز الموضوعي للبيانات النوعية', 'التحليل المقارن عبر البلدان'] },
            { heading: 'تحليلات خاصة بالمنطقة', items: ['رسم خرائط مسارات العلاج الإقليمية', 'اقتصاديات الصحة وأبحاث النتائج (HEOR)', 'نمذجة فعالية التكلفة', 'تحليل مشهد الدفع والسداد'] },
          ],
        },
        {
          title: 'المرحلة 5: التقارير الاستراتيجية والتوصيات',
          subsections: [
            { heading: 'المخرجات', items: ['لوحات المعلومات التنفيذية (عربي-إنجليزي)', 'توصيات استراتيجية للوصول للسوق', 'رؤى المشهد التنظيمي الإقليمي', 'تقييمات فرص السوق', 'ذكاء دوائي قابل للتنفيذ', 'دعم التقديمات التنظيمية'] },
          ],
        },
      ],
    },
  },
} as const;

export type TranslationKey = typeof translations['en'];
