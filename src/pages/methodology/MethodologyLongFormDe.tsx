import type { JSX } from 'react';
import type { Language } from '@/lib/i18n';
import { MethodologyLongFormLayout, type MethodologyLongFormCopy } from './MethodologyLongFormLayout';

type Props = { lang: Language };

export const METHODOLOGY_DE_FAQ = [
  {
    question: 'Nutzt BioNixus dieselbe Methodik für Gesundheits- und Konsumforschung?',
    answer:
      'Ja — das Governance-Gerüst ist dasselbe: entscheidungsorientiertes Design, verifizierte Stichprobe, Feldprotokolle, mehrstufige Validierung, Ethik und ein Bericht für die, die handeln. Befragte, Kodizes und die Feinheit der Tabellen ändern sich. Gesundheitsbriefs rekrutieren Ärzte, Kostenträger und Krankenhaus-Accounts unter BHBIA, EphMRA und Pharmakovigilanz. Konsumbriefs rekrutieren Shopper, Category Buyer und benannte Handelsaccounts unter ESOMAR und lokalen Kodizes.',
  },
  {
    question: 'Wie verifizieren Sie Gesundheitsstichproben?',
    answer:
      'Gesundheits-Panellisten durchlaufen Lizenzprüfung gegen Behördenregister, Facharztbestätigung und Praxis-Checks über Klinikverzeichnisse. Wir rekrutieren aus verifizierten Ärzte-Datenbanken, Krankenhausregistern und Fachgesellschaften — nicht aus offenen Internet-Pools. Quartalsweise Refreshs entfernen umgezogene oder pensionierte Ärzte.',
  },
  {
    question: 'Wie ziehen Sie Stichproben für Konsum- und Traditional-Trade-Studien?',
    answer:
      'Konsumstichproben entstehen um die Accounts und Kanäle, in denen Volumen wirklich läuft — Modern Trade, unabhängige Apotheken und Lebensmitteleinzelhändler, Bakals und benannte Distributoren — plus Shopper- und Buyer-Quoten, wenn der Brief Haushalts- oder Warenkorb-Evidenz braucht. Screener werden vor dem Feld geprüft. Mystery Shops, Account-Besuche und Intercepts, wenn ein syndiziertes Panel den Kanal untererfasst.',
  },
  {
    question: 'Welche Qualitätskontrollen gelten im Feld?',
    answer:
      'Jedes Projekt läuft gegen ein Protokoll für Rekrutierungsfristen, konforme Honorare, Interviewfenster und Quoten-Eskalation. Quantitative Befragungen werden in Echtzeit auf Dauer, Abbruch und Straight-Lining überwacht. Qualitative Sessions werden mit Einwilligung aufgezeichnet, transkribiert und innerhalb von 24 Stunden debrieft. Multi-Markt-Studien haben tägliche Stand-ups gegen Übersetzungs- oder Rekrutierungsdrift.',
  },
  {
    question: 'Wie werden DSGVO und lokaler Datenschutz gehandhabt?',
    answer:
      'Projekte laufen unter DSGVO, UK Data Protection Act, ESOMAR-Leitlinien und lokalem Recht — einschließlich saudischem PDPL, dem Bundesdatenschutzgesetz der VAE und CITRA-Vorgaben in Kuwait. Gesundheitsarbeit folgt zusätzlich BHBIA und EphMRA. Einwilligung vor der Erhebung, Daten werden pseudonymisiert, identifizierbare Angaben gehen nicht an den Auftraggeber ohne extra Follow-up-Einwilligung.',
  },
  {
    question: 'Was enthält ein BioNixus-Methodikbericht?',
    answer:
      'Jedes Deliverable öffnet mit Kernbefunden und empfohlenen Handlungen, dann den Stützdaten. Quantitative Packs enthalten Stichprobentabellen, Gewichtung, Konfidenzintervalle und den Fragebogen. Qualitative Packs enthalten Themenanalyse mit anonymisierten Verbatims. Tracker können Dashboards enthalten. Gesundheitsdossiers können HTA-Anhänge enthalten; Konsum-Packs enthalten Marken- und Trade-Schnitte für den Head of Marketing.',
  },
] as const;

export const METHODOLOGY_DE_COPY: MethodologyLongFormCopy = {
  faqTitle: 'Häufig gestellte Fragen',
  faq: METHODOLOGY_DE_FAQ,
  theatre: {
    eyebrow: 'Ein Gerüst',
    h2: 'Gesundheitswesen und Konsum teilen die Methode, nicht den Befragten',
    leadBefore:
      'BioNixus ist ein Primärforschungsinstitut. Dieselben sechs Kontrollen — Design, Stichprobe, Feld, Validierung, Ethik und Bericht — laufen auf einem Briefing für',
    healthcareLink: 'Gesundheitsmarktforschung',
    leadMid: 'und auf einem Konsum- oder',
    industryLink: 'Branchen',
    leadAfter:
      '-Briefing. Was sich ändert, ist, wer in der Stichprobe sitzt, welcher Kodex das Honorar steuert und wie fein die Tabellen geschnitten werden müssen.',
    caption: 'Wie die BioNixus-Methodik in Gesundheitswesen versus Konsumgütern greift',
    controlCol: 'Kontrolle',
    healthcareCol: 'Gesundheitswesen',
    consumerCol: 'Konsumgüter und andere Branchen',
    rows: [
      {
        cut: 'Mit wem wir sprechen',
        healthcare: 'Ärzte, Kostenträger, KOLs, Krankenhaus- und Apotheken-Accounts',
        consumer: 'Shopper, Category Buyer, Handel, Distributoren, Traditional Trade',
      },
      {
        cut: 'Wie wir sie finden',
        healthcare: 'Lizenzregister, Krankenhausnetze, Fachgesellschaften',
        consumer: 'Benannte Accounts, Handelslisten, Intercepts, Mystery Shops, Rekontakt mit Einwilligung',
      },
      {
        cut: 'Kodizes, die die Arbeit binden',
        healthcare: 'BHBIA, EphMRA, Pharmakovigilanz, Honorare zum Fair Market Value',
        consumer: 'ESOMAR, lokale Konsumforschungskodizes, auditierbare Incentives',
      },
      {
        cut: 'Was das Pack überstehen muss',
        healthcare: 'Medizinische, Access- und HTA-Prüfung',
        consumer: 'Prüfung durch Marke, Trade und Commercial Director',
      },
    ],
  },
  design: {
    h2: 'Prinzipien der Studienkonzeption',
    lead:
      'Jedes Programm beginnt damit, eine Geschäftsfrage in etwas zu übersetzen, das eine Studie wirklich beantworten kann. Wir setzen uns mit denen, die die Evidenz nutzen — Brand, Medical und Market Access im Gesundheitsbrief; Marke, Kategorie und Trade im Konsumbrief — und legen Ziele fest, die konkret genug sind, um zu entscheiden, und flexibel genug, um nachzusteuern. Eine Studie um die falsche Frage ist schnell, günstig und nutzlos.',
    quantitative: {
      title: 'Quantitativ',
      body:
        'Strukturierte Fragebögen, validierte Skalen und Conjoint oder MaxDiff, wenn Trade-offs zählen — Therapieentscheidung des Arztes oder Pack-Wahl des Shoppers. Instrumente erhalten ein kognitives Pretest mit mindestens fünf Befragten. Skip-Logik, Randomisierung und Trap-Fragen schützen die Integrität.',
      link: 'Quantitative Forschung',
    },
    qualitative: {
      title: 'Qualitativ',
      body:
        'Halbstrukturierte Leitfäden mit Entscheidungsbaum-Logik. Gesundheitswesen: Arztinterviews, Payer-Boards, Krankenhausethnografie. Konsum: Shopper-Depths, Händler- und Distributorengespräche, Beobachtung im Markt. Leitfäden werden nach den ersten zwei bis drei Sessions verfeinert.',
      link: 'Qualitative Forschung',
    },
    mixed: {
      title: 'Mixed Method',
      body:
        'Wenn der Brief statistisches Korn und erklärende Tiefe braucht — eine Launch-Studie mit einer 200-Ärzte-Befragung plus Spezialisten-Depths, oder eine Kategoriestudie mit Shopper-Survey und Account-Besuchen, die der syndizierte Feed nicht zeigt.',
    },
  },
  sampling: {
    h2: 'Stichprobenrahmen und Steuerung der Stichprobengröße',
    lead:
      'Stichprobenqualität bestimmt die Glaubwürdigkeit jedes Insights. Gesundheitsstichproben kommen aus proprietären Fachpanels in 17+ EMEA- und GCC-Märkten plus akkreditierte ESOMAR- und BHBIA-Partner. Konsum- und Branchenstichproben entstehen um die Accounts und Kanäle im Brief — nicht aus einem offenen Internet-Pool.',
    healthcareKicker: 'Gesundheitswesen',
    panelTitle: 'Panel-Sourcing',
    panel: [
      {
        title: 'Lizenzprüfung.',
        body:
          'Rekrutierung aus Regulierungsdatenbanken — DHA Dubai, DOH Abu Dhabi, SFDA Saudi-Arabien, MOHAP VAE und MOH Kuwait — damit jeder Panellist vor dem Erstkontakt eine auditierbare Lizenz, Fachrichtung und Praxis hat.',
      },
      {
        title: 'Krankenhaus- und Kliniknetze.',
        body:
          'Fachüberweisung über Koordinatoren in SEHA, Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi und Saudi German Hospital — für Therapietiefe, die Register allein nicht liefern.',
      },
      {
        title: 'Fachgesellschaften.',
        body: 'Mitgliederlisten werden mit Lizenzregistern gekreuzt, damit Mitgliedschaft nie allein steht.',
      },
      {
        title: 'Dreischichtige Validierung.',
        body: 'Lizenz, Fachrichtung und Praxissetting. Quartalsweiser Refresh entfernt umgezogene oder pensionierte Ärzte.',
      },
    ],
    consumerKicker: 'Konsumgüter & Industrie',
    channelTitle: 'Account- und Kanal-Sourcing',
    namedTitle: 'Benannte Accounts.',
    namedBefore:
      'Händler, Distributoren, unabhängige Apotheken, Lebensmitteleinzelhändler und Bakals werden gezogen, wo das Volumen läuft — das Korn, das syndizierte',
    nielsen: 'Nielsen',
    namedMid: 'und',
    gfk: 'GfK-ähnliche',
    namedMid2: 'Feeds typischerweise verfehlen. Siehe',
    accountLink: 'Account-Level-Marktforschung',
    namedAfter: '.',
    shopper: {
      title: 'Shopper- und Buyer-Quoten.',
      body:
        'Category Buyer und Haushalts-Shopper werden auf SKU, Kanal und Stadt im Brief rekrutiert — nicht auf einen nationalen Durchschnitt, der den Account versteckt.',
    },
    mystery: {
      title: 'Mystery Shop und Intercept.',
      body:
        'Wenn die Frage ist, was am Regal, an der Theke oder im Traditional-Trade-Laden passiert — Methoden, die ein Panel-Dashboard nicht ersetzt.',
    },
    recontact: {
      title: 'Rekontakt mit Einwilligung.',
      body:
        'Verifizierte Befragte früherer Wellen, die Folgekontakt zugestimmt haben, bleiben der schnellste Weg, wenn die Timeline Priorität hat — in beiden Feldern.',
    },
    closing:
      'Stichprobengrößen werden gegen vorab definierte Power-Ziele berechnet. Bei den meisten quantitativen Programmen streben wir mindestens ±5 % Fehlerbereich bei 95 % Konfidenz in jeder berichtbaren Teilgruppe an. Ist die Population klein — Seltene-Erkrankungen-Spezialisten, nationale Formulary-Mitglieder oder eine kurze Key-Account-Liste — rekrutieren wir zensusartig und passen die Analyse an die kleinere Basis an.',
  },
  field: {
    h2: 'Feld-Governance und Qualitätskontrollen',
    p1:
      'Im Feld trifft Methodik auf operative Disziplin. Jedes Projekt — Gesundheit oder Konsum — läuft gegen ein Protokoll für Rekrutierungsfristen, Honorare (konform zum Branchenkodex), Interviewfenster und Eskalation bei Quotenlücken.',
    p2:
      'Quantitative Befragungen haben Echtzeit-Dashboards für Abschlussrate, Medianzeit, Abbruch und Straight-Lining. Befragungen, die durchgängig in weniger als einem Drittel der erwarteten Medianzeit enden, werden markiert und bei Qualitätsversagen ausgeschlossen.',
    p3:
      'Qualitatives Feld wird mit Einwilligung aufgezeichnet und wörtlich transkribiert. Moderatoren liefern Debrief-Notizen innerhalb von 24 Stunden. Multi-Markt-Studien haben einen zentralen Projektleiter und tägliche Stand-ups mit lokalen Teams.',
    p4Before: 'Feldarbeit für',
    clinicalLink: 'klinische Studienunterstützung',
    p4After:
      'folgt demselben Gerüst, mit Extra-Kontrollen für Site-Identifikation und Investigator-Profiling. Mystery-Shop- und Account-Besuchswellen folgen demselben Gerüst, mit Logs für Store-Auswahl und SKU-Verfügbarkeit.',
  },
  validation: {
    h2: 'Datenvalidierung und KI-gestützte Qualitätssicherung',
    p1:
      'Rohdaten durchlaufen eine mehrstufige Validierungspipeline. Die erste Stufe ist automatisiert: Algorithmen markieren doppelte IDs, unmögliche Kombinationen und statistisch anomale Antwortmuster.',
    p2:
      'Die zweite Stufe führt ein Analyst. Ein Senior Researcher prüft markierte Datensätze gegen Rekrutierungsdaten und kontaktiert bei Bedarf Befragte. Nicht validierbare Records werden mit dokumentierter Begründung entfernt.',
    p3:
      'KI-gestützte Qualitätssicherung fügt eine dritte Schicht hinzu. Sprachmodelle prüfen Open-Ends auf Kohärenz, Relevanz und Mindestlänge. Qualitative Transkripte durchlaufen Topic-Modelling. Maschinell erzeugte Themen validiert das Analyseteam — KI beschleunigt Mustererkennung; jede Interpretation bleibt menschlich geprüft.',
    p4Before: 'Auftraggeber erhalten Datensätze, denen interne Entscheidungen und, bei Gesundheitsbriefs, regulatorische oder HTA-Einreichungen trauen können. Wie Evidenz',
    accessLink: 'Market Access und HTA-Strategie',
    p4After: ' speist — und wie Konsumbriefs stattdessen Marken- und Trade-Entscheidungen speisen.',
  },
  ethics: {
    h2: 'Ethik, DSGVO und Branchenkodizes',
    p1:
      'Jedes BioNixus-Projekt läuft unter DSGVO, UK Data Protection Act, ESOMAR-Leitlinien und lokalem Datenschutzrecht — einschließlich saudischem PDPL, dem Bundesdatenschutzgesetz der VAE und CITRA-Vorgaben in Kuwait. Diese Untergrenze gilt für Gesundheit und Konsum gleichermaßen.',
    p2:
      'Gesundheitsprogramme ergänzen BHBIA Legal & Ethical Guidelines und den EphMRA Code of Conduct. Studien, die Patientendaten berühren — auch indirekt über arztberichtete Records — holen ethische Prüfung ein, wo vorgeschrieben. Adverse-Event-Reporting wird jedem Moderator vor dem Feld briefed, mit 24-Stunden-Eskalation an die Pharmakovigilanz des Auftraggebers.',
    p3:
      'Konsum- und Branchenprogramme bleiben innerhalb von ESOMAR und dem geltenden lokalen Kodex. Incentives laufen über auditierbare Kanäle. Gesundheits-Honorare werden zusätzlich gegen Fair-Market-Value-Leitlinien der lokalen Pharmaverbände gespiegelt.',
    p4:
      'Einwilligung erfolgt vor der Erhebung, in der bevorzugten Sprache des Befragten. Personenbezogene Daten werden pseudonymisiert und auf verschlüsselten EU-Servern gespeichert.',
  },
  reporting: {
    h2: 'Berichtsstandards und Deliverable-Strukturen',
    p1:
      'Insight hat keinen Wert, bis er die erreicht, die handeln. Berichte öffnen mit drei bis fünf Kernbefunden und den empfohlenen Handlungen — bevor Stützdaten folgen. Das gilt für einen Head of Marketing einer Konsummarke und für einen Market-Access-Lead beim Therapie-Launch.',
    p2:
      'Quantitative Berichte enthalten Methodik-Anhänge — Stichprobenzusammensetzung, Gewichtung, Konfidenzintervalle und den Fragebogen. Qualitative Berichte präsentieren Themenanalyse mit anonymisierten Verbatims.',
    p3Before:
      'Standard-Deliverables umfassen interaktive Dashboards für Tracker, Executive-Decks und technische Anhänge. Gesundheitspacks können für HTA geschnitten werden. Konsum-Packs für Marken-, Trade- und SKU-Entscheidungen. Für',
    intelLink: 'Competitive Intelligence',
    p3After: 'liefern wir Monitoring-Berichte mit Alert-Updates in beiden Feldern.',
    p4Before:
      'Alle Berichte durchlaufen eine zweistufige interne Prüfung — Analyst auf Datenkorrektheit, Senior Director auf strategische Kohärenz. ',
    kolLink: 'KOL- und Stakeholder-Mapping',
    p4After: 'folgt demselben Protokoll, mit zusätzlicher Visualisierung von Einflussnetzwerken.',
  },
};

export function MethodologyLongFormDe({ lang }: Props): JSX.Element {
  return <MethodologyLongFormLayout lang={lang} copy={METHODOLOGY_DE_COPY} />;
}
