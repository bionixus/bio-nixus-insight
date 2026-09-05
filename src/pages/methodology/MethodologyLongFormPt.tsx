import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

type Props = { lang: Language };

export const METHODOLOGY_PT_FAQ = [
  {
    question: 'A BioNixus usa a mesma metodologia para pesquisa em saúde e em consumo?',
    answer:
      'Sim — a espinha de governação é a mesma: desenho centrado na decisão, amostragem verificada, protocolos de campo, validação em várias etapas, ética e um relatório feito para quem age. Mudam os respondentes, os códigos e o detalhe das tabelas. Em saúde recrutamos médicos, pagadores e contas hospitalares sob BHBIA, EphMRA e farmacovigilância. Em consumo recrutamos shoppers, compradores de categoria e contas de retalho nomeadas sob ESOMAR e códigos locais.',
  },
  {
    question: 'Como verificam as amostras de saúde?',
    answer:
      'Os painelistas de saúde passam verificação de licença contra registos oficiais, confirmação de especialidade e checagem do local de prática em diretórios de unidades. Recrutamos de bases médicas verificadas, registos hospitalares e listas de sociedades — não de pools abertos na internet. Ciclos trimestrais retiram médicos que mudaram de país ou se reformaram.',
  },
  {
    question: 'Como amostram estudos de consumo e comércio tradicional?',
    answer:
      'As amostras de consumo são construídas em torno das contas e canais onde o volume realmente se move — modern trade, farmácias e mercearias independentes, bakals e distribuidores nomeados — mais quotas de shopper e comprador de categoria quando o brief precisa de evidência de cesto. Os screeners são revistos antes do campo. Mystery shops, visitas a contas e intercepts entram quando um painel sindicado subamostra o canal.',
  },
  {
    question: 'Que controlos de qualidade se aplicam no campo?',
    answer:
      'Cada projeto corre contra um protocolo de prazos de recrutamento, honorários conformes, janelas de agendamento e escalada de quotas. Inquéritos quantitativos são monitorizados em tempo real quanto a duração, abandono e respostas em linha reta. Sessões qualitativas são gravadas com consentimento, transcritas e debriefadas em 24 horas. Estudos multi-mercado têm stand-ups diários para apanhar deriva de tradução ou de recrutamento.',
  },
  {
    question: 'Como tratam o RGPD e a proteção de dados local?',
    answer:
      'Os projetos operam sob RGPD, UK Data Protection Act, diretrizes ESOMAR e leis locais, incluindo PDPL da Arábia Saudita, a lei federal de dados dos EAU e requisitos CITRA do Kuwait. Trabalho de saúde segue também BHBIA e EphMRA. O consentimento é obtido antes da recolha, os dados são pseudonimizados e informação identificável não é partilhada com o cliente salvo consentimento extra para follow-up.',
  },
  {
    question: 'O que inclui um relatório metodológico da BioNixus?',
    answer:
      'Cada entregável abre com achados-chave e ações recomendadas, depois os dados de suporte. Pacotes quantitativos incluem tabelas de amostra, ponderação, intervalos de confiança e o questionário. Pacotes qualitativos incluem análise temática com verbatim anonimizado. Trackers podem incluir dashboards. Dossiers de saúde podem incluir anexos prontos para HTA; pacotes de consumo incluem cortes de marca e trade que um Head of Marketing leva ao diretor comercial.',
  },
] as const;

const THEATRE_ROWS = [
  {
    cut: 'Com quem falamos',
    healthcare: 'Médicos, pagadores, KOLs, contas hospitalares e de farmácia',
    consumer: 'Shoppers, compradores de categoria, retalhistas, distribuidores, comércio tradicional',
  },
  {
    cut: 'Como os encontramos',
    healthcare: 'Registos de licença, redes hospitalares, sociedades de especialidade',
    consumer: 'Contas nomeadas, listas de trade, intercepts, mystery shops, recontacto com consentimento',
  },
  {
    cut: 'Códigos que vinculam o trabalho',
    healthcare: 'BHBIA, EphMRA, farmacovigilância, honorários a valor de mercado justo',
    consumer: 'ESOMAR, códigos locais de pesquisa de consumo, incentivos auditáveis',
  },
  {
    cut: 'O que o pacote tem de sobreviver',
    healthcare: 'Diligência médica, de acesso e de HTA',
    consumer: 'Escrutínio de marca, trade e diretor comercial',
  },
] as const;

export function MethodologyLongFormPt({ lang }: Props): JSX.Element {
  const p = (path: string) => loc(lang, path);
  return (
    <>
      <section className="premium-home-ivory section-padding py-16 md:py-20" id="two-theatres" aria-labelledby="two-theatres-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <PremiumEyebrow>Uma espinha</PremiumEyebrow>
            <h2
              id="two-theatres-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              Saúde e consumo partilham o método, não o respondente
            </h2>
            <p className="mt-5 max-w-3xl font-light leading-relaxed text-[#7A7267]">
              A BioNixus é uma empresa de pesquisa primária. Os mesmos seis controlos — desenho, amostragem, campo, validação, ética e
              relatório — correm num brief de{' '}
              <Link to={p('/healthcare-market-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                pesquisa de mercado em saúde
              </Link>{' '}
              e num brief de consumo ou{' '}
              <Link to={p('/bionixus-industries')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                indústria
              </Link>
              . O que muda é quem está na amostra, que código governa o honorário e quão finas as tabelas têm de ser.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.05)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Como a metodologia BioNixus se aplica em saúde versus consumo</caption>
              <thead>
                <tr className="bg-[#06101F] text-[#FFFEFB]">
                  <th scope="col" className="px-5 py-4 font-medium">
                    Controlo
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium text-white/70">
                    Saúde
                  </th>
                  <th scope="col" className="border-l border-[#C9A84C]/30 px-5 py-4 font-medium text-[#C9A84C]">
                    Consumo e outras indústrias
                  </th>
                </tr>
              </thead>
              <tbody>
                {THEATRE_ROWS.map((row, index) => (
                  <tr key={row.cut} className={index % 2 === 0 ? 'bg-[#FFFEFB]' : 'bg-[#F4F2ED]/60'}>
                    <th scope="row" className="px-5 py-4 align-top font-medium text-[#0C1B33]">
                      {row.cut}
                    </th>
                    <td className="px-5 py-4 align-top font-light leading-relaxed text-[#7A7267]">{row.healthcare}</td>
                    <td className="border-l border-[#C9A84C]/15 px-5 py-4 align-top font-light leading-relaxed text-[#0C1B33]">
                      {row.consumer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="research-design" aria-labelledby="research-design-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">01</PremiumEyebrow>
          <h2
            id="research-design-heading"
            className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            Princípios de desenho de pesquisa
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Cada programa começa por transformar uma pergunta de negócio em algo que um estudo consegue responder. Sentamo-nos com quem
            vai usar a evidência — marca, medical e acesso num brief de saúde; marca, categoria e trade num brief de consumo — e fixamos
            objetivos específicos o bastante para decidir, mas flexíveis para corrigir o rumo quando os primeiros dados apontam para outro
            sítio. Um estudo desenhado em torno da pergunta errada é rápido, barato e inútil.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Quantitativa</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Questionários estruturados, escalas validadas e conjoint ou MaxDiff quando o trade-off importa — escolha de tratamento
                do médico ou escolha de pack do shopper. Os instrumentos passam pré-teste cognitivo com pelo menos cinco respondentes.{' '}
                <Link to={p('/services/quantitative-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                  Pesquisa quantitativa
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Qualitativa</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Guiões semiestruturados com lógica de árvore de decisão. Saúde: entrevistas a médicos, boards de pagadores, etnografia
                hospitalar. Consumo: profundidade com shoppers, entrevistas a retalhistas e distribuidores, observação em loja.{' '}
                <Link to={p('/services/qualitative-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                  Pesquisa qualitativa
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">Método misto</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                Usado quando o brief precisa de grão estatístico e profundidade explicativa — um estudo de lançamento que junta um
                inquérito a 200 médicos com profundidades a especialistas, ou um estudo de categoria que junta inquérito de shopper com
                visitas a contas que o feed sindicado não mostra.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="sampling-frameworks" aria-labelledby="sampling-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>02</PremiumEyebrow>
          <h2 id="sampling-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Quadros de amostragem e governação do tamanho da amostra
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            A qualidade da amostra determina a credibilidade de qualquer insight. Amostras de saúde vêm de painéis profissionais próprios
            em 17+ mercados EMEA e GCC, mais parceiros acreditados ESOMAR e BHBIA. Amostras de consumo e indústria são construídas em torno
            das contas e canais do brief — não de um pool aberto na internet.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">Saúde</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">Origem do painel</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">Verificação de licença.</strong> Recrutamento a partir de bases
                  regulatórias — DHA Dubai, DOH Abu Dhabi, SFDA Arábia Saudita, MOHAP EAU e MOH Kuwait — para que cada painelista tenha
                  licença, especialidade e local de prática auditáveis antes do primeiro contacto.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Redes hospitalares.</strong> Referência especializada através de
                  coordenadores em unidades como SEHA, Mediclinic, Aster, NMC, Cleveland Clinic Abu Dhabi e Saudi German Hospital.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Associações profissionais.</strong> Listas de sociedades cruzadas com
                  registos de licença para que a filiação nunca fique sozinha.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Validação em três camadas.</strong> Licença, especialidade e local de
                  prática. Atualização trimestral retira médicos que mudaram ou se reformaram.
                </p>
              </div>
            </div>
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#0EA5A0]">Consumo e indústria</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">Origem por conta e canal</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">Contas nomeadas.</strong> Retalhistas, distribuidores, farmácias
                  independentes, mercearias e bakals são amostrados quando é aí que o volume se move — o grão que feeds tipo{' '}
                  <Link to={p('/nielsen-alternative')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    Nielsen
                  </Link>{' '}
                  e{' '}
                  <Link to={p('/gfk-alternative-egypt')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    GfK
                  </Link>{' '}
                  costumam perder. Ver{' '}
                  <Link to={p('/account-level-market-research')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
                    pesquisa ao nível da conta
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Quotas de shopper e comprador.</strong> Compradores de categoria e shoppers
                  de agregado são recrutados para o SKU, canal e cidade do brief — não uma média nacional que esconde a conta.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Mystery shop e intercept.</strong> Usados quando a pergunta é o que acontece
                  na prateleira, no balcão ou na loja de comércio tradicional.
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">Recontacto com consentimento.</strong> Respondentes verificados de ondas
                  anteriores que aceitaram novo contacto são a via mais rápida quando o prazo manda.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Os tamanhos de amostra são calculados contra alvos de poder estatístico. Na maioria dos programas quantitativos, visamos no
            mínimo ±5% de margem de erro a 95% de confiança em cada subgrupo reportável. Quando a população é pequena — especialistas em
            doenças raras, membros de formulário nacional ou uma lista curta de key-account buyers — aplicamos recrutamento tipo censo e
            ajustamos a análise à base menor.
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="fieldwork-governance" aria-labelledby="fieldwork-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">03</PremiumEyebrow>
          <h2 id="fieldwork-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Governação de campo e controlos de qualidade
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            O campo é onde a metodologia encontra disciplina operacional. Cada projeto — saúde ou consumo — corre contra um protocolo de
            prazos de recrutamento, honorários (conformes ao código do setor), janelas de agendamento e escalada de quotas em falta.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Inquéritos quantitativos incluem dashboards em tempo real de taxa de conclusão, tempo mediano, abandono e respostas em linha
            reta. Questionários que terminam em menos de um terço do tempo mediano esperado são sinalizados e excluídos se falharem a
            qualidade.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            O qualitativo é gravado com consentimento e transcrito. Os moderadores entregam notas de debrief em 24 horas. Estudos
            multi-mercado têm um gestor de projeto central e stand-ups diários com equipas locais.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            O suporte a{' '}
            <Link to={p('/services/clinical-trial-support')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              ensaios clínicos
            </Link>{' '}
            segue a mesma espinha, com controlos extra de identificação de centros e perfil de investigadores. Ondas de mystery shop e
            visita a contas seguem a mesma espinha, com logs de seleção de loja e disponibilidade de SKU.
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="data-validation" aria-labelledby="validation-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>04</PremiumEyebrow>
          <h2 id="validation-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Validação de dados e garantia de qualidade com IA
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Os dados brutos passam um pipeline de validação em várias etapas. A primeira é automática: algoritmos assinalam IDs duplicados,
            combinações impossíveis e padrões de resposta anómalos.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            A segunda é conduzida por analista. Um investigador sénior revê os registos assinalados contra os dados de recrutamento e, se
            necessário, contacta o respondente. Registos que não se validam são removidos com racional documentado.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            A garantia de qualidade com IA acrescenta uma terceira camada. Modelos de linguagem avaliam respostas abertas quanto a
            coerência, relevância e comprimento mínimo. Transcrições qualitativas passam por modelação de tópicos. Temas gerados por
            máquina são depois validados pela equipa de análise — a IA acelera a deteção; cada conclusão interpretativa é revista por
            humanos.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Os clientes recebem conjuntos de dados em que podem confiar para decisões internas e, em briefs de saúde, para submissões
            regulatórias ou HTA. Veja como a evidência alimenta{' '}
            <Link to={p('/services/market-access')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              acesso ao mercado e estratégia HTA
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="ethics-compliance" aria-labelledby="ethics-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">05</PremiumEyebrow>
          <h2 id="ethics-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Ética, RGPD e códigos setoriais
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Cada projeto BioNixus opera sob RGPD, UK Data Protection Act, diretrizes ESOMAR e lei local de proteção de dados — incluindo
            PDPL saudita, a lei federal dos EAU e requisitos CITRA do Kuwait. Esse piso aplica-se a saúde e a consumo.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Programas de saúde acrescentam as Legal &amp; Ethical Guidelines da BHBIA e o Código EphMRA. Estudos que tocam dados de
            pacientes — mesmo indiretamente via registos reportados por médicos — obtêm revisão ética quando exigida. Relato de eventos
            adversos é briefado a cada moderador, com escalada de 24 horas à farmacovigilância do cliente.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Programas de consumo e indústria ficam dentro do ESOMAR e do código local aplicável. Incentivos passam por canais auditáveis.
            Honorários de saúde são ainda alinhados a diretrizes de valor de mercado justo.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            O consentimento é obtido antes da recolha, na língua preferida do respondente. Dados pessoais são pseudonimizados e
            armazenados em servidores encriptados na UE.
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="reporting-standards" aria-labelledby="reporting-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>06</PremiumEyebrow>
          <h2 id="reporting-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            Padrões de relatório e estrutura dos entregáveis
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Insight não tem valor até chegar a quem age. Os relatórios abrem com três a cinco achados-chave e as ações recomendadas — antes
            dos dados de suporte. Isso vale para um Head of Marketing de uma marca de consumo e para um lead de acesso num lançamento
            terapêutico.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Relatórios quantitativos incluem anexos de metodologia — composição da amostra, ponderação, intervalos de confiança e o
            questionário. Relatórios qualitativos apresentam análise temática com verbatim anonimizado.
          </p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Entregáveis padrão incluem dashboards para trackers, decks executivos e anexos técnicos. Pacotes de saúde podem ser cortados
            para equipas de HTA. Pacotes de consumo são cortados para decisões de marca, trade e SKU. Em{' '}
            <Link to={p('/services/competitive-intelligence')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              inteligência competitiva
            </Link>
            , fornecemos relatórios de monitorização com atualizações por alerta.
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            Todos os relatórios passam revisão interna em duas etapas — analista para precisão, diretor sénior para coerência estratégica.{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline">
              Mapeamento de KOL e stakeholders
            </Link>{' '}
            segue o mesmo protocolo, com visualização extra de redes de influência.
          </p>
        </div>
      </section>

      <div className="premium-home-cream">
        <FAQSection
          premium
          title="Perguntas frequentes"
          items={[...METHODOLOGY_PT_FAQ]}
          className="section-padding py-16 md:py-20"
        />
      </div>
    </>
  );
}
