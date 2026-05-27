import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export function MethodologyLongFormDe({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="section-padding bg-background" id="research-design">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            1. Prinzipien der Studienkonzeption
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jedes Projekt beginnt mit einer strukturierten Designphase, die kommerzielle Fragestellungen in ein prüfbares Forschungsgerüst übersetzt. Gemeinsam mit Marken‑, Medical‑Affairs‑ und Market‑Access‑Teams definieren wir Ziele, die konkret genug sind, um Entscheidungen zu treiben, und zugleich flexibel bleiben, um kurs‑Korrekturen während der Feldphase zu ermöglichen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Quantitative Forschung</strong> nutzt standardisierte Fragebögen auf Basis validierter Skalen sowie conjoint‑ oder MaxDiff‑Designs für Trade‑off‑Messungen. Erhebungsinstrumente werden vor dem Feldstart durch kognitives Pretesting mit mindestens fünf Respondenten überprüft. Skip‑Logiken, Randomisierung und Plausibilitätsfragen schützen die Datenintegrität von Anfang an. Lesen Sie mehr zu unserer Herangehensweise an die{' '}
            <Link to={p('/services/quantitative-research')} className="text-primary hover:underline font-medium">
              quantitative Gesundheitsforschung
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Qualitative Forschung</strong> folgt halb‑strukturierten Leitfäden mit Entscheidungsbaum‑Logik. Ob Einzelinterviews mit Ärztinnen und Ärzten, Payer‑Advisory‑Boards oder ethnografische Beobachtungen in Kliniken — jedes Interviewleitfadenset wird intern pilotiert und nach den ersten zwei bis drei Gesprächen verfeinert. Bei komplexen Therapiegebieten setzen wir medizinische Moderatorinnen und Moderatoren ein, die klinische Nuancen erkunden können, ohne zu lenken. Erfahren Sie mehr über{' '}
            <Link to={p('/services/qualitative-research')} className="text-primary hover:underline font-medium">
              qualitative pharmazeutische Forschung
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Mixed‑Method‑Designs setzen wir ein, wenn statistische Generalisierbarkeit und erklärende Tiefe gleichermaßen gefragt sind — etwa bei einer Launch‑Readiness‑Studie aus einer Ärztebefragung (n ≈ 200) und Tiefeinterviews mit intensiv verschreibenden Spezialisten.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="sampling-frameworks">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            2. Stichprobendesign und Stichprobengröße
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Datenqualität beginnt bei der Rekrutierung. BioNixus pflegt proprietäre Ärzte‑ und HCP‑Panels in mehr als 17 EMEA‑ und GCC‑Märkten und ergänzt diese durch akkreditierte Panel‑Partner nach ESOMAR‑ und BHBIA‑Standards. Rekrutierung erfolgt über verifizierte Ärzteinformationssysteme, Krankenhausregister und Mitgliedschaften fachlicher Gesellschaften — nicht über offene Opt‑In‑Pools im offenen Internet.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Stichprobenumfänge leiten wir aus vorab definierten Power‑Annahmen ab. Bei den meisten quantitativen Vorhaben streben wir pro auswertbarer Teilgruppe mindestens einen Fehlerbereich von ±5&nbsp;% bei 95&nbsp;%‑Konfidenz an. Bei kleinen Zielpopulationen — etwa seltenen Indikationen oder nationalen Gremiumsmitgliedern — kann eine quasi‑Vollerhebung sinnvoller sein; dann passen wir die Auswertung an die Basis an.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Quotierung sichert Repräsentation nach Fachrichtung, Setting (stationär vs. niedergelassen), Verschreibungsvolumen und Region. Bei Multimarket‑Studien definieren wir Länderquoten so, dass keine einzelne Märktekohorte die Aggregation dominiert.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vor qualitativer Feldarbeit prüfen Projektleitung und Auftraggeber gemeinsam die Rekruter‑Screener. Fachrichtung, Verschreibungsbefugnis und Behandlungserfahrung verifizieren wir doppelt — durch Abgleich von Profiler‑Daten mit Screenerantworten.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="fieldwork-governance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            3. Feldsteuerung und Qualitätskontrolle
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Feldarbeit ist dort, wo Methodik operative Disziplin braucht. Jedes Projekt folgt einem Feldprotokoll mit Rekrutierungs‑Zeitplänen, respondentengerechten und kodexkonformen Honoraren, Zeitfenstern für Interviews sowie Eskalationspfaden bei Quotenausfall.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Online‑Befragungen werden über Monitoring‑Dashboards begleitet — Abschlussquoten, Median‑Bearbeitungszeit, Abbruchsstufen und Hinweise auf „Straight‑lining“. Bei systematisch zu kurzen Bearbeitungszeiten erfolgt Prüfung und Ausschluss, wenn die Qualitätsprüfung nicht bestanden wird.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Qualitative Sitzungen werden mit Einwilligung aufgezeichnet und wortgetreu transkribiert. Moderatoren dokumentieren bis 24&nbsp;Stunden danach Briefing‑Notizen zu Hypothesen und emergenten Themen — solange Gesprächsinhalt noch aktuell ist. In multimarketen Projekten führt eine zentrale Projektmanagementeinheit tägliche Feld‑Checks mit Local Teams durch, um Übersetzungsabweichungen oder Rekrutierungs‑Drifts früh zu erkennen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Auch bei{' '}
            <Link to={p('/services/clinical-trial-support')} className="text-primary hover:underline font-medium">
              klinischer Studienbegleitung
            </Link>{' '}
            gelten diese Governance‑Regeln — ergänzt um Site‑Machbarkeit und Profiling‑Untersuchungen von Prüfzentren oder Investigators.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="data-validation">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            4. Datenvalidierung und KI‑gestützte Qualitätssicherung
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Rohdaten durchlaufen vor jeder Auswertung mehrere Filterstufen. Automatisiert werden Duplikate, unmögliche Antwort‑Kombinationen (etwa AllgemeinmedizinerIn mit neurochirurgischen Eingriffen) sowie statistisch auffällige Muster markiert.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In einem zweiten Schritt prüfen Senior‑Researcher markierte Datensätze gegen Rekrutierungsnachweise und klären ggf. Rückfragen mit Respondenten. Nicht nachvollziehbare Einträge entfernen wir mit dokumentiertem Ausschlussgrund.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            KI‑gestütztes QA ergänzt dieses Modell: NLP überprüft offene Verbatim‑Antworten auf Kohärenz, Relevanz und Mindestsubstanz; qualitative Transkripte können zusätzliche Themenmodelle durchlaufen — maschinell gefundene Theme werden jedoch immer durch menschliche Analystinnen und Analysten verifiziert. KI beschleunigt Musterfindung; Interpretation bleibt menschliche Verantwortung.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Diese Mehrlagen‑Logik erzeugt Daten, denen Auftraggebende auch für interne Entscheidungen sowie — wenn nötig — regulatorische oder HTA‑Dossiers vertrauen können. Erfahren Sie mehr über die Integration von Evidenz in{' '}
            <Link to={p('/services/market-access')} className="text-primary hover:underline font-medium">
              Market‑Access‑ und Bewertungsstrategien (HTA)
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="ethics-compliance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            5. Ethik, GDPR und regulatorische Angleichung
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BioNixus‑Projekte orientieren sich an GDPR, britischem Datenschutzgesetz sowie Leitlinien von ESOMAR, EphMRA und BHBIA. In GCC‑Märkten berücksichtigen wir zusätzlich lokale Gesetze — etwa PDPL in Saudi‑Arabien, das UAE Federal Data Protection Law und Kuwait (CITRA).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Einwilligungen holen wir vor Datenaufnahme ein; Unterlagen sind in der bevorzugten Sprache der Teilnehmenden und erläutern Verwendungszweck sowie Aufbewahrungsfristen. Personenbezogene Daten werden pseudonymisiert erfasst und auf verschlüsselten EU‑Servern verarbeitet. Identifizierbare Information geben wir ohne ausdrückliche Zusatzfreigabe für Follow‑ups nicht weiter.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wo Bezüge zu patientenbezogenen Informationen bestehen — auch indirekt über ärztliche Angaben zu Patientenkohorten — aktivieren wir, wo nötig, ethisches Review sowie verschärfte De‑Identifikation. Für unerwünschte Arzneimittel­reaktionen schulen wir alle Moderatorinnen, Moderatoren und Interviewer vor Feldstart mit 24‑h‑Eskalationspfaden zur Pharmakovigilanzeinheit der Auftraggebenden.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Honorarabrechnung erfolgt über nachvollziehbare Kanäle und entspricht lokal gültigen Fair‑Market‑Value‑Leitlinien der pharmazeutischen Industrieverbände — zum Schutz von Respondenten wie Sponsoren gegen Transparenz‑ und Compliance‑Risiken.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="reporting-standards">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            6. Reporting‑Standards und Deliverable‑Struktur
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Erkenntnisse haben nur Wirkung, wenn sie Entscheider:innen erreichen. Unsere Reporting‑Struktur ist „Decision‑first“: jede Deliverable öffnet mit einer Executive‑Summary aus drei bis fünf Kernergebnissen und Handlungsempfehlungen, bevor Detailtabellen folgen.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Quantitative Reports liefern vollständige Methodikanhänge — Stichprobentabellen, Gewichtungen, Konfidenzintervalle und Fragbogenkopien — damit Sponsor:innen Evidence nachvollziehen können. Qualitative Arbeiten präsentieren Themen‑Analysen mit anonymisierten Zitaten.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zu den Standard‑Deliverables zählen interaktive Dashboards für Tracker, Executive‑Decks sowie technische Annexes für Regulatorika oder{' '}
            <Link to={p('/services/competitive-intelligence')} className="text-primary hover:underline font-medium">
              Wettbewerbs‑Intelligence
            </Link>
            ‑Teams — dort mit ereignisbasierten Echtzeit‑Updates möglich.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vor Auslieferung prüfen Analyst:innen Dateninhalte sowie Senior Direktor:innen narrativ‑strategische Kohärenz. Ebenso verläuft QA bei{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="text-primary hover:underline font-medium">
              KOL‑ und Stakeholder‑Mappings
            </Link>{' '}
            — inkl. Visualisierung von Einflussnetzwerken.
          </p>
        </div>
      </section>
    </>
  );
}
