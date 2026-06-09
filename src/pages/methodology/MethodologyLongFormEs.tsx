import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export function MethodologyLongFormEs({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="section-padding bg-background" id="research-design">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            1. Principios de diseño de investigación
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cada programa arranca traduciendo objetivos comerciales a un marco de investigación contrastable con equipos clínico‑comercial, medical affairs y acceso al mercado. Definimos metas suficientemente accionables y con capacidad para ajustes a mitad del estudio.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Las <strong className="text-foreground">líneas cuantitativas</strong> utilizan cuestionarios estructurados y escalas validadas más ejercicios conjunto o MaxDiff cuando se debe medir el intercambio atributos. Todo instrumento pasa por pre‑test cognitivo (mínimo cinco médicos antes del lanzamiento) y filtros rutas, rotación ítems y trampas anticlick. Amplíe nuestros servicios en{' '}
            <Link to={p('/services/quantitative-research')} className="text-primary hover:underline font-medium">
              investigación cuantitativa sanitario‑farmacéutica
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La parte <strong className="text-foreground">cualitativa</strong> se apoya entrevistas guiadas arborescentes; entrevistas 1‑a‑1, grupos payer u observaciones en entorno hospital tras pilot interno. Temas especializados incorporan moderación clínica. Revise también{' '}
            <Link to={p('/services/qualitative-research')} className="text-primary hover:underline font-medium">
              investigación cualitativa pharma
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Combinamos diseños mixtos si se requiere explicativa + robustez muestral simultáneas (p. ej., encuesta 200 especialistas más 20 mini‑cases).
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="sampling-frameworks">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            2. Muestreos y tamaño muestral responsable
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Calidad muestral marca credibilidad. BioNixus gestiona redes PRO salud (más de 17 mercados en EMEA y el Golfo) más partners ESOMAR/BHBIA. Recruiting siempre federado médico institucional, nunca sólo redes auto‑reportadas abiertas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Targets numéricos alineamos a potencias previas; orientativamente objetivo habitual ±5 % MR al 95 % dentro subsegmentación reportada. Coberturas raras → enfoques tipo censo muestral y estadística adaptativa.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cuotas garantizan paridad territorial, práctica hospitalaria/consulta, nivel prescriptor. Multipaís evita dominancia regional en agregaciones.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            En cualitativo filtros cliente + PM firman antes de campo; segunda verificación cruzará panel vs screener.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="fieldwork-governance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            3. Gobernanza de trabajo de campo
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Documentos operativos fijan plazos, incentivos dentro códigos deontológicos país, agendas entrevistas, triggers si cuotas retrasa‑ban.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cuanti online monitorea en vivo completitud/mediana tiempo/puntos abandono/indicadores &quot;linealidad&quot;. Tiempos anómalamente bajos abren revisión antes exclusión QA.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cuali graba‑transcribe bajo consent; debrief moderator &lt;=24 h. Equipos multi‑office daily stand‑ups corrigen discrepancias lingüísticas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            El track{' '}
            <Link to={p('/services/clinical-trial-support')} className="text-primary hover:underline font-medium">
              soporte clínico a ensayos
            </Link>{' '}
            replica marco pero añade pre‑valoración feasibility site &amp; perfiles investigative.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="data-validation">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            4. Validación datos y QA aumentada IA
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fase automatizada marca duplicidades, combinaciones ilegibles, patrones outliers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Auditor senior revisa banderas comparando onboarding original; comunicación respondent si procede antes expulsiones documentadas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Modelos NLP evalúan abiertas (cohesión/longitud útil); tópicos estadísticos asisten codificación inicial mas confirmación interpretativa sólo equipo humano.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Así producimos ficheros confiables para decision regulatoria‑comercial. Integremos contenido en rutas{' '}
            <Link to={p('/services/market-access')} className="text-primary hover:underline font-medium">
              acceso al mercado y HTA / pricing estratégico
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" id="ethics-compliance">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            5. Ética, GDPR y compatibilidades regulatorias
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cumplimiento integra GDPR británico + europeo ESOMAR, EphMRA, directrices legal‑éticas BHBIA. Estados GCC agregamos PD Arabia Saudí, ley federación datos EAU reglamentos CITRA Kuwait…
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Consentimiento informados previos multilingües exponen tratamiento‑retención; datos personales pseudonimización en ingesta y almacenamiento cifrado EU. Solo identidade cruda si segunda voluntad explícita.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Diseños donde exista sensibilidad indirecta pacientes activan revisión ética especial y protocolos sanitización endurecidos más PV guardrails canales 24 h pharma sponsor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Honorarios ejecutados vías auditables benchmarking industria garantizan anticorrupción y transparencia.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream" id="reporting-standards">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
            6. Estándares de reporting y formato entregables
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cada dossier enfoca ejecutiva inicial (3‑5 bullets clave más acciones) antes gráficas profundización.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Anex cuanti cubren muestra/pesos/confianza/forms; cuali trae temas verbatim anonimizada.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Kit típico: dashboards trackers, ppt board, dossier tecnológico dossier payer. También paneles tiempo real{' '}
            <Link to={p('/services/competitive-intelligence')} className="text-primary hover:underline font-medium">
              inteligencia competitiva pharma
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Doble chequeo interno (analítica → liderazgo técnico) antes release. Deliverables{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="text-primary hover:underline font-medium">
              mapas KOL y stakeholders influyentes
            </Link>{' '}
            igual protocolo especial visual network science.
          </p>
        </div>
      </section>
    </>
  );
}
