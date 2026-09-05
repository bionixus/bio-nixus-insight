/**
 * Site-wide chrome copy (navigation, cards, marquees, sticky CTA) that sits outside the
 * page-level i18n bundles. English is the complete shape; every other locale is deep-merged
 * over it, so a missing key degrades to English rather than crashing a component.
 */
import type { Language } from './i18n';

export type UiChromeStrings = {
  nav: {
    globalSites: string;
    language: string;
    /** `{language}` placeholder */
    languageCurrent: string;
    /** `{language}` placeholder */
    languageSwitchTo: string;
    openMenu: string;
    closeMenu: string;
    searchOpen: string;
    searchTooltip: string;
    searchTitle: string;
    searchKicker: string;
    searchPlaceholder: string;
    searchHint: string;
    searchEmpty: string;
    searchNoResults: string;
    searchError: string;
    /** `{count}` placeholder */
    searchCount: string;
    logoAlt: string;
    footerLogoAlt: string;
    watchFullPage: string;
  };
  brands: {
    /** Marquee wordmarks, localized where a market-standard rendering exists. */
    companies: [string, string, string, string, string, string];
    /** Two-character avatars in the hero trust strip, same order as `companies`. */
    initials: [string, string, string, string];
  };
  blogCards: {
    featuredInsight: string;
    latestInsight: string;
    noArticles: string;
    coverAlt: string;
  };
  coverageMap: {
    alt: string;
    caption: string;
  };
  chart: {
    /** Abbreviated label for the 2026 forecast point on the hero chart axis. */
    forecastYear: string;
  };
  exploreResearch: {
    heading: string;
    kicker: string;
    lede: string;
    startHere: string;
    hub: string;
    iqvia: string;
    nielsen: string;
    oncology: string;
    ksaFirms: string;
    uaeFirms: string;
    egyptFirms: string;
    gccFirms: string;
    rankings: string;
    compare: string;
    more: string;
    accountLevel: string;
    pricing: string;
    statistics: string;
    faq: string;
    featuredReports: string;
    saudiReport: string;
    uaeReport: string;
    usaReport: string;
    byCountry: string;
    countryUsa: string;
    countrySaudi: string;
    countryUae: string;
    countryTurkey: string;
    countryEgypt: string;
  };
  services: {
    /** Inline anchor text closing the third intro column on the Services hub. */
    industriesHubLink: string;
  };
};

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

const en: UiChromeStrings = {
  nav: {
    globalSites: 'Global Sites',
    language: 'Language',
    languageCurrent: '{language}, current language',
    languageSwitchTo: 'Switch language to {language}',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    searchOpen: 'Search pages',
    searchTooltip: 'Search pages ⌘K',
    searchTitle: 'Search BioNixus pages',
    searchKicker: 'Site search',
    searchPlaceholder: 'Type a word — usa, saudi, oncology…',
    searchHint: 'Lists every published URL that contains your word.',
    searchEmpty: 'Type at least two characters to list matching URLs.',
    searchNoResults: 'No published URLs contain that word.',
    searchError: 'Search index could not be loaded. Try again in a moment.',
    searchCount: '{count} matching URLs',
    logoAlt: 'BioNixus — Global Market Research for Pharma, Healthcare & Industries',
    footerLogoAlt: 'BioNixus — Healthcare Market Research Company',
    watchFullPage: 'Open full watch page',
  },
  brands: {
    companies: ['Pfizer', 'Roche', 'Novartis', 'Sanofi', 'AstraZeneca', 'Merck'],
    initials: ['PF', 'RO', 'NV', 'AZ'],
  },
  blogCards: {
    featuredInsight: 'Featured insight',
    latestInsight: 'Latest insight',
    noArticles: 'No articles match the selected filters.',
    coverAlt: 'Blog post cover',
  },
  coverageMap: {
    alt: 'BioNixus global research coverage map showing Google-listed offices in Sheridan, London, Sheikh Zayed, Dubai, Al Khobar, Salmiya, and São Paulo.',
    caption:
      'Google-listed offices: Sheridan (US HQ), London, Sheikh Zayed (Egypt), Dubai, Al Khobar (KSA), Salmiya (Kuwait), plus São Paulo — bilingual Arabic–English fieldwork across GCC and MENA markets, with GDPR-aligned European programmes.',
  },
  chart: {
    forecastYear: '26E',
  },
  exploreResearch: {
    heading: 'Explore BioNixus research',
    kicker: 'Indexed destinations',
    lede: 'Each URL is a decision page — country programs, competitor alternatives, and reports a marketing team can brief from.',
    startHere: 'Start here',
    hub: 'Global healthcare market research hub',
    iqvia: 'BioNixus vs. IQVIA and other legacy vendors',
    nielsen: 'Nielsen alternative',
    oncology: 'Top oncology market research companies 2026',
    ksaFirms: 'Market research firms KSA',
    uaeFirms: 'Market research firms UAE',
    egyptFirms: 'Market research firms Egypt',
    gccFirms: 'Market research firms GCC',
    rankings: 'Rankings',
    compare: 'Compare',
    more: 'Also in this library',
    accountLevel: 'What account-level and SKU-level data is',
    pricing: 'Market research pricing',
    statistics: 'Healthcare & Pharma Market Statistics 2026',
    faq: 'Frequently Asked Questions',
    featuredReports: 'Featured market reports',
    saudiReport: 'Saudi Arabia Healthcare Market Report',
    uaeReport: 'UAE Healthcare Market Report',
    usaReport: 'USA Healthcare Market Report',
    byCountry: 'Research by country',
    countryUsa: 'Healthcare market research USA',
    countrySaudi: 'Healthcare market research Saudi Arabia',
    countryUae: 'Healthcare market research UAE',
    countryTurkey: 'Healthcare market research Turkey',
    countryEgypt: 'Healthcare market research Egypt',
  },
  services: {
    industriesHubLink: 'industries hub',
  },
};

const overrides: Record<Exclude<Language, 'en'>, DeepPartial<UiChromeStrings>> = {
  de: {
    nav: {
      globalSites: 'Globale Websites',
      language: 'Sprache',
      languageCurrent: '{language}, aktuelle Sprache',
      languageSwitchTo: 'Sprache zu {language} wechseln',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      searchOpen: 'Seiten durchsuchen',
      searchTooltip: 'Seiten durchsuchen ⌘K',
      searchTitle: 'BioNixus-Seiten durchsuchen',
      searchKicker: 'Seitensuche',
      searchPlaceholder: 'Begriff eingeben — usa, saudi, onkologie…',
      searchHint: 'Listet jede veröffentlichte URL, die Ihren Begriff enthält.',
      searchEmpty: 'Geben Sie mindestens zwei Zeichen ein, um passende URLs zu sehen.',
      searchNoResults: 'Keine veröffentlichte URL enthält diesen Begriff.',
      searchError: 'Der Suchindex konnte nicht geladen werden. Bitte versuchen Sie es gleich erneut.',
      searchCount: '{count} passende URLs',
      logoAlt: 'BioNixus — Globale Marktforschung für Pharma, Gesundheitswesen und Industrie',
      footerLogoAlt: 'BioNixus — Gesundheitsmarktforschung',
      watchFullPage: 'Vollständige Videoseite öffnen',
    },
    blogCards: {
      featuredInsight: 'Ausgewählte Analyse',
      latestInsight: 'Neueste Analyse',
      noArticles: 'Keine Artikel entsprechen den gewählten Filtern.',
      coverAlt: 'Titelbild des Beitrags',
    },
    coverageMap: {
      alt: 'Karte der globalen Forschungspräsenz von BioNixus mit Büros in Sheridan (US-Hauptsitz), London, Kairo, Riad, Dubai, Kuwait-Stadt und São Paulo.',
      caption:
        'Büros in Sheridan (US-Hauptsitz), London, Kairo, Riad, Dubai, Kuwait-Stadt und São Paulo — zweisprachige arabisch-englische Feldforschung in GCC- und MENA-Märkten, ergänzt um DSGVO-konforme europäische Programme.',
    },
    chart: {
      forecastYear: '26P',
    },
    exploreResearch: {
      heading: 'BioNixus-Forschung entdecken',
      kicker: 'Indexierte Ziele',
      lede: 'Jede URL ist eine Entscheidungsseite — Länderprogramme, Wettbewerbsalternativen und Berichte, aus denen ein Marketingteam briefen kann.',
      startHere: 'Hier starten',
      hub: 'Globales Zentrum für Gesundheitsmarktforschung',
      iqvia: 'BioNixus im Vergleich zu IQVIA und etablierten Anbietern',
      nielsen: 'Nielsen-Alternative',
      oncology: 'Führende Onkologie-Marktforschungsunternehmen 2026',
      ksaFirms: 'Marktforschungsunternehmen KSA',
      uaeFirms: 'Marktforschungsunternehmen VAE',
      egyptFirms: 'Marktforschungsunternehmen Ägypten',
      gccFirms: 'Marktforschungsunternehmen GCC',
      rankings: 'Ranglisten',
      compare: 'Vergleichen',
      more: 'Ebenfalls in dieser Bibliothek',
      accountLevel: 'Was Account- und SKU-Daten bedeuten',
      pricing: 'Preise für Marktforschung',
      statistics: 'Kennzahlen zum Gesundheits- und Pharmamarkt 2026',
      faq: 'Häufig gestellte Fragen',
      featuredReports: 'Ausgewählte Marktberichte',
      saudiReport: 'Marktbericht Gesundheitswesen Saudi-Arabien',
      uaeReport: 'Marktbericht Gesundheitswesen Vereinigte Arabische Emirate',
      usaReport: 'Marktbericht Gesundheitswesen USA',
      byCountry: 'Forschung nach Land',
      countryUsa: 'Gesundheitsmarktforschung USA',
      countrySaudi: 'Gesundheitsmarktforschung Saudi-Arabien',
      countryUae: 'Gesundheitsmarktforschung Vereinigte Arabische Emirate',
      countryTurkey: 'Gesundheitsmarktforschung Türkei',
      countryEgypt: 'Gesundheitsmarktforschung Ägypten',
    },
    services: {
      industriesHubLink: 'Branchen-Hub',
    },
  },
  fr: {
    nav: {
      globalSites: 'Sites mondiaux',
      language: 'Langue',
      languageCurrent: '{language}, langue actuelle',
      languageSwitchTo: 'Passer à la langue {language}',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      searchOpen: 'Rechercher des pages',
      searchTooltip: 'Rechercher des pages ⌘K',
      searchTitle: 'Rechercher des pages BioNixus',
      searchKicker: 'Recherche sur le site',
      searchPlaceholder: 'Saisissez un mot — usa, arabie, oncologie…',
      searchHint: 'Liste toutes les URL publiées qui contiennent votre mot.',
      searchEmpty: 'Saisissez au moins deux caractères pour afficher les URL correspondantes.',
      searchNoResults: 'Aucune URL publiée ne contient ce mot.',
      searchError: 'L’index de recherche n’a pas pu être chargé. Réessayez dans un instant.',
      searchCount: '{count} URL correspondantes',
      logoAlt: 'BioNixus — Études de marché mondiales pour la pharma, la santé et l’industrie',
      footerLogoAlt: 'BioNixus — Études de marché santé',
      watchFullPage: 'Ouvrir la page de visionnage complète',
    },
    blogCards: {
      featuredInsight: 'Analyse à la une',
      latestInsight: 'Dernière analyse',
      noArticles: 'Aucun article ne correspond aux filtres sélectionnés.',
      coverAlt: 'Image de couverture de l’article',
    },
    coverageMap: {
      alt: 'Carte de la couverture mondiale des études BioNixus, avec des bureaux à Sheridan (siège américain), Londres, Le Caire, Riyad, Dubaï, Koweït et São Paulo.',
      caption:
        'Bureaux à Sheridan (siège américain), Londres, Le Caire, Riyad, Dubaï, Koweït et São Paulo — terrain bilingue arabe-anglais sur les marchés du CCG et de la région MENA, complété par des programmes européens conformes au RGPD.',
    },
    chart: {
      forecastYear: '26P',
    },
    exploreResearch: {
      heading: 'Explorer les recherches BioNixus',
      kicker: 'Destinations indexées',
      lede: 'Chaque URL est une page de décision — programmes pays, alternatives concurrentes et rapports à partir desquels une équipe marketing peut rédiger un brief.',
      startHere: 'Commencer ici',
      hub: 'Pôle mondial d’études de marché santé',
      iqvia: 'BioNixus face à IQVIA et aux prestataires historiques',
      nielsen: 'Alternative à Nielsen',
      oncology: 'Meilleures sociétés d’études de marché en oncologie 2026',
      ksaFirms: 'Sociétés d’études de marché Arabie saoudite',
      uaeFirms: 'Sociétés d’études de marché Émirats',
      egyptFirms: 'Sociétés d’études de marché Égypte',
      gccFirms: 'Sociétés d’études de marché CCG',
      rankings: 'Classements',
      compare: 'Comparer',
      more: 'Aussi dans cette bibliothèque',
      accountLevel: 'Ce que signifient les données au niveau compte et SKU',
      pricing: 'Tarifs des études de marché',
      statistics: 'Statistiques des marchés santé et pharmaceutique 2026',
      faq: 'Questions fréquentes',
      featuredReports: 'Rapports de marché à la une',
      saudiReport: 'Rapport sur le marché de la santé en Arabie saoudite',
      uaeReport: 'Rapport sur le marché de la santé aux Émirats arabes unis',
      usaReport: 'Rapport sur le marché de la santé aux États-Unis',
      byCountry: 'Études par pays',
      countryUsa: 'Études de marché santé États-Unis',
      countrySaudi: 'Études de marché santé Arabie saoudite',
      countryUae: 'Études de marché santé Émirats arabes unis',
      countryTurkey: 'Études de marché santé Turquie',
      countryEgypt: 'Études de marché santé Égypte',
    },
    services: {
      industriesHubLink: 'hub sectoriel',
    },
  },
  es: {
    nav: {
      globalSites: 'Sitios globales',
      language: 'Idioma',
      languageCurrent: '{language}, idioma actual',
      languageSwitchTo: 'Cambiar el idioma a {language}',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      searchOpen: 'Buscar páginas',
      searchTooltip: 'Buscar páginas ⌘K',
      searchTitle: 'Buscar páginas de BioNixus',
      searchKicker: 'Búsqueda del sitio',
      searchPlaceholder: 'Escriba una palabra — usa, arabia, oncología…',
      searchHint: 'Lista todas las URL publicadas que contienen su palabra.',
      searchEmpty: 'Escriba al menos dos caracteres para ver las URL coincidentes.',
      searchNoResults: 'Ninguna URL publicada contiene esa palabra.',
      searchError: 'No se pudo cargar el índice de búsqueda. Inténtelo de nuevo en un momento.',
      searchCount: '{count} URL coincidentes',
      logoAlt: 'BioNixus — Investigación de mercado global para farma, salud e industria',
      footerLogoAlt: 'BioNixus — Investigación de mercado sanitario',
      watchFullPage: 'Abrir la página completa del vídeo',
    },
    blogCards: {
      featuredInsight: 'Análisis destacado',
      latestInsight: 'Último análisis',
      noArticles: 'Ningún artículo coincide con los filtros seleccionados.',
      coverAlt: 'Imagen de portada del artículo',
    },
    coverageMap: {
      alt: 'Mapa de la cobertura global de investigación de BioNixus con oficinas en Sheridan (sede en EE. UU.), Londres, El Cairo, Riad, Dubái, Kuwait y São Paulo.',
      caption:
        'Oficinas en Sheridan (sede en EE. UU.), Londres, El Cairo, Riad, Dubái, Kuwait y São Paulo — trabajo de campo bilingüe árabe-inglés en los mercados del CCG y MENA, con programas europeos conformes al RGPD.',
    },
    chart: {
      forecastYear: '26P',
    },
    exploreResearch: {
      heading: 'Explore la investigación de BioNixus',
      kicker: 'Destinos indexados',
      lede: 'Cada URL es una página de decisión — programas por país, alternativas a competidores e informes a partir de los que un equipo de marketing puede preparar un brief.',
      startHere: 'Empiece aquí',
      hub: 'Centro global de investigación de mercado sanitario',
      iqvia: 'BioNixus frente a IQVIA y otros proveedores tradicionales',
      nielsen: 'Alternativa a Nielsen',
      oncology: 'Mejores empresas de investigación de mercado en oncología 2026',
      ksaFirms: 'Empresas de investigación de mercado Arabia Saudí',
      uaeFirms: 'Empresas de investigación de mercado EAU',
      egyptFirms: 'Empresas de investigación de mercado Egipto',
      gccFirms: 'Empresas de investigación de mercado CCG',
      rankings: 'Rankings',
      compare: 'Comparar',
      more: 'También en esta biblioteca',
      accountLevel: 'Qué significan los datos a nivel de cuenta y SKU',
      pricing: 'Precios de investigación de mercado',
      statistics: 'Estadísticas del mercado sanitario y farmacéutico 2026',
      faq: 'Preguntas frecuentes',
      featuredReports: 'Informes de mercado destacados',
      saudiReport: 'Informe del mercado sanitario de Arabia Saudí',
      uaeReport: 'Informe del mercado sanitario de los Emiratos Árabes Unidos',
      usaReport: 'Informe del mercado sanitario de Estados Unidos',
      byCountry: 'Investigación por país',
      countryUsa: 'Investigación de mercado sanitario Estados Unidos',
      countrySaudi: 'Investigación de mercado sanitario Arabia Saudí',
      countryUae: 'Investigación de mercado sanitario Emiratos Árabes Unidos',
      countryTurkey: 'Investigación de mercado sanitario Turquía',
      countryEgypt: 'Investigación de mercado sanitario Egipto',
    },
    services: {
      industriesHubLink: 'hub de sectores',
    },
  },
  pt: {
    nav: {
      globalSites: 'Sites globais',
      language: 'Idioma',
      languageCurrent: '{language}, idioma atual',
      languageSwitchTo: 'Alterar o idioma para {language}',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      searchOpen: 'Pesquisar páginas',
      searchTooltip: 'Pesquisar páginas ⌘K',
      searchTitle: 'Pesquisar páginas da BioNixus',
      searchKicker: 'Pesquisa no site',
      searchPlaceholder: 'Digite uma palavra — usa, arábia, oncologia…',
      searchHint: 'Lista todos os URLs publicados que contêm a sua palavra.',
      searchEmpty: 'Digite pelo menos dois caracteres para listar os URLs correspondentes.',
      searchNoResults: 'Nenhum URL publicado contém essa palavra.',
      searchError: 'Não foi possível carregar o índice de pesquisa. Tente novamente em instantes.',
      searchCount: '{count} URLs correspondentes',
      logoAlt: 'BioNixus — Pesquisa de mercado global para farma, saúde e indústria',
      footerLogoAlt: 'BioNixus — Pesquisa de mercado em saúde',
      watchFullPage: 'Abrir a página completa do vídeo',
    },
    blogCards: {
      featuredInsight: 'Análise em destaque',
      latestInsight: 'Última análise',
      noArticles: 'Nenhum artigo corresponde aos filtros selecionados.',
      coverAlt: 'Imagem de capa do artigo',
    },
    coverageMap: {
      alt: 'Mapa da cobertura global de pesquisa da BioNixus com escritórios em Sheridan (sede nos EUA), Londres, Cairo, Riade, Dubai, Cidade do Kuwait e São Paulo.',
      caption:
        'Escritórios em Sheridan (sede nos EUA), Londres, Cairo, Riade, Dubai, Cidade do Kuwait e São Paulo — trabalho de campo bilíngue árabe-inglês nos mercados do CCG e MENA, com programas europeus alinhados ao GDPR.',
    },
    chart: {
      forecastYear: '26P',
    },
    exploreResearch: {
      heading: 'Explore a pesquisa da BioNixus',
      kicker: 'Destinos indexados',
      lede: 'Cada URL é uma página de decisão — programas por país, alternativas a concorrentes e relatórios a partir dos quais uma equipa de marketing pode preparar um brief.',
      startHere: 'Comece por aqui',
      hub: 'Centro global de pesquisa de mercado em saúde',
      iqvia: 'BioNixus frente à IQVIA e a outros fornecedores tradicionais',
      nielsen: 'Alternativa à Nielsen',
      oncology: 'Principais empresas de pesquisa de mercado em oncologia 2026',
      ksaFirms: 'Empresas de pesquisa de mercado na Arábia Saudita',
      uaeFirms: 'Empresas de pesquisa de mercado nos EAU',
      egyptFirms: 'Empresas de pesquisa de mercado no Egito',
      gccFirms: 'Empresas de pesquisa de mercado no CCG',
      rankings: 'Rankings',
      compare: 'Comparar',
      more: 'Também nesta biblioteca',
      accountLevel: 'O que significam os dados ao nível da conta e do SKU',
      pricing: 'Preços de pesquisa de mercado',
      statistics: 'Estatísticas do mercado de saúde e farmacêutico 2026',
      faq: 'Perguntas frequentes',
      featuredReports: 'Relatórios de mercado em destaque',
      saudiReport: 'Relatório do mercado de saúde da Arábia Saudita',
      uaeReport: 'Relatório do mercado de saúde dos Emirados Árabes Unidos',
      usaReport: 'Relatório do mercado de saúde dos Estados Unidos',
      byCountry: 'Pesquisa por país',
      countryUsa: 'Pesquisa de mercado em saúde Estados Unidos',
      countrySaudi: 'Pesquisa de mercado em saúde Arábia Saudita',
      countryUae: 'Pesquisa de mercado em saúde Emirados Árabes Unidos',
      countryTurkey: 'Pesquisa de mercado em saúde Turquia',
      countryEgypt: 'Pesquisa de mercado em saúde Egito',
    },
    services: {
      industriesHubLink: 'hub de setores',
    },
  },
  ru: {
    nav: {
      globalSites: 'Глобальные сайты',
      language: 'Язык',
      languageCurrent: '{language}, текущий язык',
      languageSwitchTo: 'Переключить язык на {language}',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      searchOpen: 'Поиск по страницам',
      searchTooltip: 'Поиск по страницам ⌘K',
      searchTitle: 'Поиск страниц BioNixus',
      searchKicker: 'Поиск по сайту',
      searchPlaceholder: 'Введите слово — usa, saudi, онкология…',
      searchHint: 'Показывает все опубликованные URL, содержащие ваше слово.',
      searchEmpty: 'Введите не менее двух символов, чтобы увидеть подходящие URL.',
      searchNoResults: 'Ни один опубликованный URL не содержит это слово.',
      searchError: 'Не удалось загрузить поисковый индекс. Попробуйте ещё раз через минуту.',
      searchCount: '{count} подходящих URL',
      logoAlt: 'BioNixus — глобальные маркетинговые исследования для фармацевтики, здравоохранения и промышленности',
      footerLogoAlt: 'BioNixus — исследования рынка здравоохранения',
      watchFullPage: 'Открыть полную страницу просмотра',
    },
    brands: {
      companies: ['Пфайзер', 'Рош', 'Новартис', 'Санофи', 'АстраЗенека', 'Мерк'],
      initials: ['ПФ', 'РО', 'НВ', 'АЗ'],
    },
    blogCards: {
      featuredInsight: 'Избранный материал',
      latestInsight: 'Свежий материал',
      noArticles: 'Нет статей, соответствующих выбранным фильтрам.',
      coverAlt: 'Обложка статьи',
    },
    coverageMap: {
      alt: 'Карта глобального охвата исследований BioNixus с офисами в Шеридане (штаб-квартира в США), Лондоне, Каире, Эр-Рияде, Дубае, Эль-Кувейте и Сан-Паулу.',
      caption:
        'Офисы в Шеридане (штаб-квартира в США), Лондоне, Каире, Эр-Рияде, Дубае, Эль-Кувейте и Сан-Паулу — двуязычные арабо-английские полевые исследования на рынках ССАГПЗ и MENA, а также европейские программы, соответствующие GDPR.',
    },
    chart: {
      forecastYear: '26П',
    },
    exploreResearch: {
      heading: 'Исследования BioNixus',
      kicker: 'Индексируемые разделы',
      lede: 'Каждый URL — страница для решения: страновые программы, альтернативы конкурентам и отчёты, с которых маркетинговая команда может начать бриф.',
      startHere: 'Начните отсюда',
      hub: 'Глобальный центр исследований рынка здравоохранения',
      iqvia: 'BioNixus в сравнении с IQVIA и другими традиционными поставщиками',
      nielsen: 'Альтернатива Nielsen',
      oncology: 'Ведущие компании по исследованиям рынка онкологии 2026',
      ksaFirms: 'Исследовательские компании Саудовской Аравии',
      uaeFirms: 'Исследовательские компании ОАЭ',
      egyptFirms: 'Исследовательские компании Египта',
      gccFirms: 'Исследовательские компании ССАГПЗ',
      rankings: 'Рейтинги',
      compare: 'Сравнить',
      more: 'Также в этой библиотеке',
      accountLevel: 'Что означают данные на уровне аккаунта и SKU',
      pricing: 'Стоимость маркетинговых исследований',
      statistics: 'Статистика рынков здравоохранения и фармацевтики 2026',
      faq: 'Часто задаваемые вопросы',
      featuredReports: 'Избранные отчёты о рынке',
      saudiReport: 'Отчёт о рынке здравоохранения Саудовской Аравии',
      uaeReport: 'Отчёт о рынке здравоохранения ОАЭ',
      usaReport: 'Отчёт о рынке здравоохранения США',
      byCountry: 'Исследования по странам',
      countryUsa: 'Исследования рынка здравоохранения США',
      countrySaudi: 'Исследования рынка здравоохранения Саудовской Аравии',
      countryUae: 'Исследования рынка здравоохранения ОАЭ',
      countryTurkey: 'Исследования рынка здравоохранения Турции',
      countryEgypt: 'Исследования рынка здравоохранения Египта',
    },
    services: {
      industriesHubLink: 'отраслевой хаб',
    },
  },
  zh: {
    nav: {
      globalSites: '全球站点',
      language: '语言',
      languageCurrent: '{language}，当前语言',
      languageSwitchTo: '切换语言为{language}',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      searchOpen: '搜索页面',
      searchTooltip: '搜索页面 ⌘K',
      searchTitle: '搜索 BioNixus 页面',
      searchKicker: '站内搜索',
      searchPlaceholder: '输入关键词 — 美国、沙特、肿瘤…',
      searchHint: '列出所有包含该词的已发布网址。',
      searchEmpty: '请至少输入两个字符以显示匹配网址。',
      searchNoResults: '没有已发布网址包含该词。',
      searchError: '搜索索引无法加载，请稍后再试。',
      searchCount: '{count} 个匹配网址',
      logoAlt: 'BioNixus — 面向制药、医疗健康与产业的全球市场研究',
      footerLogoAlt: 'BioNixus — 医疗健康市场研究公司',
      watchFullPage: '打开完整观看页',
    },
    brands: {
      companies: ['辉瑞', '罗氏', '诺华', '赛诺菲', '阿斯利康', '默克'],
      initials: ['辉瑞', '罗氏', '诺华', '阿斯'],
    },
    blogCards: {
      featuredInsight: '精选洞察',
      latestInsight: '最新洞察',
      noArticles: '没有符合所选筛选条件的文章。',
      coverAlt: '文章封面图',
    },
    coverageMap: {
      alt: 'BioNixus 全球研究覆盖地图，标注谢里丹（美国总部）、伦敦、开罗、利雅得、迪拜、科威特城与圣保罗七处办公室。',
      caption:
        '办公室分布于谢里丹（美国总部）、伦敦、开罗、利雅得、迪拜、科威特城与圣保罗——在海湾国家与中东北非市场开展阿拉伯语与英语双语实地调研，并配套符合 GDPR 的欧洲项目。',
    },
    chart: {
      forecastYear: '二六预估',
    },
    exploreResearch: {
      heading: '探索 BioNixus 研究',
      kicker: '已收录入口',
      lede: '每个网址都是决策页 — 国家项目、竞品对照与市场报告，营销团队可据此撰写 brief。',
      startHere: '从这里开始',
      hub: '全球医疗健康市场研究中心',
      iqvia: 'BioNixus 与艾昆纬等传统供应商对比',
      nielsen: 'Nielsen 替代方案',
      oncology: '2026 年领先肿瘤市场研究公司',
      ksaFirms: '沙特市场研究公司',
      uaeFirms: '阿联酋市场研究公司',
      egyptFirms: '埃及市场研究公司',
      gccFirms: '海湾合作委员会市场研究公司',
      rankings: '排名',
      compare: '对比',
      more: '本库中的其他页面',
      accountLevel: '账户级与 SKU 级数据的含义',
      pricing: '市场研究报价',
      statistics: '二〇二六年医疗健康与医药市场统计',
      faq: '常见问题',
      featuredReports: '精选市场报告',
      saudiReport: '沙特阿拉伯医疗健康市场报告',
      uaeReport: '阿联酋医疗健康市场报告',
      usaReport: '美国医疗健康市场报告',
      byCountry: '按国家浏览研究',
      countryUsa: '美国医疗健康市场研究',
      countrySaudi: '沙特阿拉伯医疗健康市场研究',
      countryUae: '阿联酋医疗健康市场研究',
      countryTurkey: '土耳其医疗健康市场研究',
      countryEgypt: '埃及医疗健康市场研究',
    },
    services: {
      industriesHubLink: '行业中心页',
    },
  },
  ar: {
    nav: {
      globalSites: 'المواقع العالمية',
      language: 'اللغة',
      languageCurrent: '{language}، اللغة الحالية',
      languageSwitchTo: 'تغيير اللغة إلى {language}',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      searchOpen: 'البحث في الصفحات',
      searchTooltip: 'البحث في الصفحات ⌘K',
      searchTitle: 'البحث في صفحات BioNixus',
      searchKicker: 'بحث الموقع',
      searchPlaceholder: 'اكتب كلمة — أمريكا، السعودية، الأورام…',
      searchHint: 'يعرض كل الروابط المنشورة التي تحتوي على كلمتك.',
      searchEmpty: 'اكتب حرفين على الأقل لعرض الروابط المطابقة.',
      searchNoResults: 'لا توجد روابط منشورة تحتوي على هذه الكلمة.',
      searchError: 'تعذر تحميل فهرس البحث. حاول مرة أخرى بعد لحظات.',
      searchCount: '{count} روابط مطابقة',
      logoAlt: 'بيونكسس — أبحاث سوق عالمية للأدوية والرعاية الصحية والقطاعات',
      footerLogoAlt: 'بيونكسس — شركة أبحاث سوق الرعاية الصحية',
      watchFullPage: 'افتح صفحة المشاهدة الكاملة',
    },
    brands: {
      companies: ['فايزر', 'روش', 'نوفارتس', 'سانوفي', 'أسترازينيكا', 'ميرك'],
      initials: ['فا', 'رو', 'نو', 'أس'],
    },
    blogCards: {
      featuredInsight: 'رؤية مميزة',
      latestInsight: 'أحدث رؤية',
      noArticles: 'لا توجد مقالات مطابقة للفلاتر المحددة.',
      coverAlt: 'صورة غلاف المقال',
    },
    coverageMap: {
      alt: 'خريطة التغطية البحثية العالمية لبيونكسس تُظهر المكاتب في شيريدان (المقر الأمريكي) ولندن والقاهرة والرياض ودبي ومدينة الكويت وساو باولو.',
      caption:
        'مكاتب في شيريدان (المقر الأمريكي) ولندن والقاهرة والرياض ودبي ومدينة الكويت وساو باولو — عمل ميداني ثنائي اللغة بالعربية والإنجليزية في أسواق الخليج والشرق الأوسط وشمال أفريقيا، مع برامج أوروبية متوافقة مع GDPR.',
    },
    chart: {
      forecastYear: '٢٦ تقديري',
    },
    exploreResearch: {
      heading: 'استكشف أبحاث بيونكسس',
      kicker: 'وجهات مُفهرسة',
      lede: 'كل رابط صفحة قرار — برامج دول، بدائل للمنافسين، وتقارير يمكن لفريق التسويق أن يبني عليها الموجز.',
      startHere: 'ابدأ من هنا',
      hub: 'المركز العالمي لأبحاث سوق الرعاية الصحية',
      iqvia: 'بيونكسس مقارنةً بـ IQVIA ومزودي الخدمات التقليديين',
      nielsen: 'بديل نيلسن',
      oncology: 'أبرز شركات أبحاث سوق الأورام 2026',
      ksaFirms: 'شركات أبحاث السوق في السعودية',
      uaeFirms: 'شركات أبحاث السوق في الإمارات',
      egyptFirms: 'شركات أبحاث السوق في مصر',
      gccFirms: 'شركات أبحاث السوق في دول الخليج',
      rankings: 'التصنيفات',
      compare: 'قارن',
      more: 'أيضاً في هذه المكتبة',
      accountLevel: 'ماذا تعني بيانات مستوى الحساب ورمز المنتج',
      pricing: 'أسعار أبحاث السوق',
      statistics: 'إحصاءات سوق الرعاية الصحية والأدوية 2026',
      faq: 'الأسئلة الشائعة',
      featuredReports: 'تقارير السوق المميزة',
      saudiReport: 'تقرير سوق الرعاية الصحية في السعودية',
      uaeReport: 'تقرير سوق الرعاية الصحية في الإمارات',
      usaReport: 'تقرير سوق الرعاية الصحية في الولايات المتحدة',
      byCountry: 'الأبحاث حسب الدولة',
      countryUsa: 'أبحاث سوق الرعاية الصحية في الولايات المتحدة',
      countrySaudi: 'أبحاث سوق الرعاية الصحية في السعودية',
      countryUae: 'أبحاث سوق الرعاية الصحية في الإمارات',
      countryTurkey: 'أبحاث سوق الرعاية الصحية في تركيا',
      countryEgypt: 'أبحاث سوق الرعاية الصحية في مصر',
    },
    services: {
      industriesHubLink: 'مركز القطاعات',
    },
  },
};

function merge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (base === null || typeof base !== 'object' || Array.isArray(base) || typeof override !== 'object') {
    return override as T;
  }
  if (Array.isArray(override)) return override as T;

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    result[key] = merge(result[key], value);
  }
  return result as T;
}

const cache = new Map<Language, UiChromeStrings>();

export function getUiChromeStrings(language: Language): UiChromeStrings {
  const cached = cache.get(language);
  if (cached) return cached;
  const resolved = language === 'en' ? en : merge(en, overrides[language]);
  cache.set(language, resolved);
  return resolved;
}

export function formatTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
