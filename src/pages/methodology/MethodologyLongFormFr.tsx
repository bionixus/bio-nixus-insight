import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export function MethodologyLongFormFr({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="section-padding bg-background" id="research-design">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            1. Principes de conception d&apos;étude
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Chaque mandat commence par une phase de conception qui traduit les enjeux commerciaux en protocole de recherche vérifiable. Avec les équipes marketing, affaires médicales et market access, nous formulons des objectifs suffisamment précis pour piloter l&apos;action et suffisamment flexibles pour corriger la trajectoire en cours d&apos;étude.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les <strong className="text-foreground">programmes quantitatifs</strong> reposent sur des questionnaires structurés, des échelles validées et, si nécessaire, conjoint ou MaxDiff pour mesurer les arbitrages. Les instruments sont testés cognitivement avec au minimum cinq répondants avant déploiement. Logiques de saut, randomisation et pièges d&apos;attention protègent l&apos;intégrité des données dès l&apos;origine. Découvrez notre approche des{' '}
            <Link to={p('/services/quantitative-research')} className="text-primary hover:underline font-medium">
              études quantitatives en santé
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La <strong className="text-foreground">recherche qualitative</strong> s&apos;appuie sur des guides semi-directifs arborescents : entretiens individuels, groupes conseil payeurs ou observation ethnographique. Chaque guide est pilote et affiné après deux à trois premiers entretiens. Pour les aires thérapeutiques complexes nous faisons intervenir des modérateurs médicaux capables de creuser sans induire la réponse. Explorez nos expertises{' '}
            <Link to={p('/services/qualitative-research')} className="text-primary hover:underline font-medium">
              qualitatives pharma
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Les dispositifs mixtes combinent représentativité statistique et finesse interprétative — par exemple une étude pré-lancement couplant un panel de 200 prescripteurs et vingt entretiens en profondeur chez les spécialistes à forte volumétrie.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="sampling-frameworks">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            2. Échantillonnage et taille de panel
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La qualité d&apos;échantillon garantit la crédibilité des conclusions. BioNixus anime des panels de professionnels de santé dans plus de 17 marchés EMEA et GCC complétés par des partenaires accrédités conformes ESOMAR / BHBIA. La recrue s&apos;effectue depuis des bases médicales validées ou des registres hospitaliers — jamais depuis des agrégateurs open web.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les volumétries visent une puissance statistique prédéfinie : nous ciblons en général une marge d&apos;erreur de ±5&nbsp;% au seuil de 95&nbsp;% pour chaque segment exploitable ; dans les niche rares nous privilégions une logique exhaustive et adaptons les modèles d&apos;analyse.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les quotas garantissent représentativité clinique (spécialité, milieu hospitalier vs ville, volume Rx, géographie). En multi-pays ils sont équilibrés pour éviter une domination d&apos;un marché agrégé.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Avant toute vague qualitative, questionnaire de recrutement et quotas sont cosignés par le chef de projet et le sponsor. Une double validation croise filtres téléphoniques / web et dossiers panels.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="fieldwork-governance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            3. Gouvernance terrain et contrôle qualité
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            C&apos;est sur le terrain que la méthode devient cadre opérationnel. Chaque dossier définit timelines de recrue, niveaux honoraires alignés avec les codes locaux, plages horaires interview et mécanisme d&apos;escalade si quotas en retard.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les CATI/Web suivent tableaux temps réel (taux de complétude, médiane de durée, points d&apos;abandon, lignes trop rectilignes). Des temps de réponse anormalement courts déclenchent revue puis exclusion après échec des contrôles qualité.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Le qualitatif est enregistré (consentement) et transcrit intégralement. Les débrief modérateur arrivent sous 24&nbsp;h avec hypothèses et signaux précoces. Dans les multicountry, pilotage quotidien synchronise traduction locale et quotas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nos modules{' '}
            <Link to={p('/services/clinical-trial-support')} className="text-primary hover:underline font-medium">
              support trials cliniques
            </Link>{' '}
            appliquent le même ossature avec garde additionnelle pour faisabilité site et profiling investigateurs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="data-validation">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            4. Validation des données &amp; QA augmentée IA
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Chaque jeu brut traverse filtrage automatique : doublons, combinaisons impossibles, patrons statistiques atypiques.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Vient ensuite un contrôle analyste qui confronte dossiers suspects aux preuves de recrue et relance ponctuelle des répondants. Exclusions systématiquement motivées dans le dossier final.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L&apos;IA ajoute une couche complémentaire : NLP sur verbatim pour cohérence / matière ; transcripts quali passés par extraction thématique assistée puis revalidés humains (l&apos;interprétation reste équipe analyste).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ces étages successifs garantissent des bases exploitables stratégiquement et, si besoin, pour dossiers réglementaires /{' '}
            <Link to={p('/services/market-access')} className="text-primary hover:underline font-medium">
              market access — stratégie d&apos;évaluation/pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="ethics-compliance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            5. Éthique, RGPD et alignements réglementaires
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les études résident dans un cadre couvrant RGPD, loi UK Data Protection, ESOMAR, EphMRA, BHBIA. Aux pays du Golfe nous intégrons PDPL arabie Saoudite, loi UAE sur la protection données, exigences CITRA Kuwait, etc.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Consents documentés préalablement aux collectes, formulés linguistiques adaptés avec finalité/traitements/durées. Pseudonymisation en collecte stockage européens chiffrés — pas de transfert nominatif hors accord spécifique.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Études où existent données patients — même via perception médecins — suivent CEIC additionnel protocoles renforcés d&apos;anonymisation si requis ; PV briefing modération et escalades 24&nbsp;h Pharmacovigilance du sponsor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Répartition honoraires par canaux auditables contre référentiels valeur de marché des associations locales — minimise risques anticorruption &amp; transparence.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="reporting-standards">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            6. Normes reporting &amp; formats livrables
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            L&apos;insight doit atteindre la chaîne décisionnelle : nos livrables adoptent narration « décision d&apos;abord » — trois à cinq messages clés puis recommandations avant annexes volumétriques.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Les rapports quanti embarquent appendices méthodologiques (composition échantillon, pondérations, intervalles IC, questionnaires). Livrables quali : synthèses thématiques + citations pseudonymes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Stack standard : dashboards pour trackers longitudinal, decks exécutifs, annex techniques pour dossiers agences / payer. Dans les{' '}
            <Link to={p('/services/competitive-intelligence')} className="text-primary hover:underline font-medium">
              programmes de renseignement concurrentiel
            </Link>
            , alerting temps réel.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Double review interne (analyse → direction stratégique) avant envoi sponsor. Nos{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="text-primary hover:underline font-medium">
              cartographies d&apos;influence stakeholders / KOL
            </Link>{' '}
            adoptent également ce protocole avec couches visualisation réseaux.
          </p>
        </div>
      </section>
    </>
  );
}
