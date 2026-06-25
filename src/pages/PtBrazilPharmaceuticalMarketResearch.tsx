import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ArrowRight, CheckCircle2, Building2, Users, BarChart3, ShieldCheck } from 'lucide-react';

const CANONICAL = 'https://www.bionixus.com/pt/pesquisa-mercado-farmaceutico-brasil';
const PAGE_TITLE = 'Empresa de Pesquisa de Mercado Farmacêutico no Brasil | ANVISA, CONITEC, CMED | BioNixus';
const PAGE_DESC =
  'BioNixus é uma empresa de pesquisa de mercado farmacêutico no Brasil — pesquisas com profissionais de saúde, mapeamento de KOLs, evidências para CONITEC, pesquisa de precificação CMED e estudos com pacientes em conformidade com a LGPD.';

const SERVICES = [
  {
    icon: Users,
    title: 'Pesquisas com médicos e mapeamento de KOLs',
    body: 'Pesquisas quantitativas e entrevistas qualitativas com prescritores, farmacêuticos e decisores de formulário em oncologia, cardiologia, diabetes, imunologia e doenças infecciosas. Identificação e mapeamento de KOLs por instituição e especialidade, com painéis validados pelo Conselho Federal de Medicina (CRM).',
  },
  {
    icon: BarChart3,
    title: 'Evidências para CONITEC e acesso ao SUS',
    body: 'Geração de evidências primárias para submissões ao CONITEC: pesquisas de disposição de prescrição com médicos, entrevistas de carga da doença com pacientes e pesquisas com decisores do formulário SUS. Aprovação ética pelo CEP gerenciada por meio de parceiros hospitalares acadêmicos, conforme a Resolução CNS 510/2016.',
  },
  {
    icon: BarChart3,
    title: 'Pesquisa de precificação e acesso ao mercado',
    body: 'Análise de teto de preços CMED, mapeamento do diferencial de preços SUS vs. plano privado, pesquisa de disposição a pagar, análise de substituição por genérico e testes de cenários de preço de lançamento. Evidências calibradas aos limites de custo-efetividade do CONITEC.',
  },
  {
    icon: ShieldCheck,
    title: 'Pesquisa com pacientes em conformidade com a LGPD',
    body: 'Mapeamento da jornada do paciente, estudos de experiência de tratamento e validação de instrumentos de qualidade de vida com aprovação CEP. Conformidade total com a LGPD (Lei 13.709/2018) e processamento de dados alinhado à ANPD. Áreas terapêuticas: oncologia, doenças raras, diabetes, cardiovascular e imunologia.',
  },
  {
    icon: Building2,
    title: 'Inteligência de lançamento e concorrência',
    body: 'Pesquisa de awareness pré-lançamento, testes de mensagens, rastreamento de share of voice nas comunidades de prescritores de São Paulo e Rio de Janeiro, e pesquisas de posicionamento competitivo calibradas aos marcos de aprovação da ANVISA.',
  },
  {
    icon: CheckCircle2,
    title: 'Pesquisa de formulário SUS e PCDT',
    body: 'Pesquisa mapeando as lacunas nos Protocolos Clínicos e Diretrizes Terapêuticas (PCDT), prioridades dos comitês de formulário e alinhamento com critérios de inclusão na RENAME. Modelagem de volumes de compras SUS e pesquisas com decisores de compras hospitalares.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Quais pesquisas farmacêuticas a BioNixus realiza no Brasil?',
    a: 'A BioNixus realiza quatro tipos de pesquisa farmacêutica primária no Brasil: (1) pesquisas com médicos e entrevistas com KOLs em oncologia, cardiologia, diabetes, imunologia e doenças infecciosas; (2) pesquisa com pacientes e cuidadores com aprovação CEP conforme a Resolução CNS 510/2016 e em conformidade com a LGPD; (3) pesquisa de precificação e acesso ao mercado, incluindo análise CMED, avaliação SUS vs. plano privado e geração de evidências para o CONITEC; e (4) inteligência de lançamento, rastreamento de share of voice e posicionamento competitivo. Todos os estudos são conduzidos em português e em conformidade com o código promocional da ANVISA e as diretrizes da INTERFARMA.',
  },
  {
    q: 'Como a BioNixus recruta médicos e KOLs para pesquisa farmacêutica?',
    a: 'O recrutamento de médicos e KOLs pela BioNixus no Brasil combina cinco métodos: (1) validação pelo registro do Conselho Federal de Medicina (CRM) e especialidade; (2) acesso a redes hospitalares por meio de centros médicos acadêmicos (Hospital das Clínicas USP, INCA, Hospital Albert Einstein, Hospital Sírio-Libanês) e hospitais públicos regionais via parceiros CEP; (3) listas de sociedades de especialidades como SBC (cardiologia), SBOC (oncologia), SBD (diabetes), SBI (infectologia) e ABR (reumatologia); (4) painéis digitais profissionais para pesquisas quantitativas com verificação de credenciais; e (5) amostragem snowball por indicação de pares para especialidades de difícil acesso. Todos os participantes são compensados conforme as orientações da INTERFARMA e do CFM.',
  },
  {
    q: 'O que é o CONITEC e como a pesquisa primária apoia as submissões ao SUS?',
    a: 'O CONITEC (Comissão Nacional de Incorporação de Tecnologias no SUS) avalia evidências clínicas e econômicas para decisões de reembolso pelo SUS. As avaliações do CONITEC exigem dossiês de Avaliação de Tecnologias em Saúde (ATS) com eficácia clínica, análise de custo-efetividade (custo/QALY) e impacto orçamentário pela perspectiva do SUS. A BioNixus apoia submissões ao CONITEC com evidências primárias brasileiras: pesquisas de disposição de prescrição com médicos que estabelecem necessidade médica não atendida, entrevistas de carga da doença com pacientes que informam cálculos de QALY e pesquisas com decisores do formulário SUS.',
  },
  {
    q: 'Como funciona a regulação de preços CMED para medicamentos no Brasil?',
    a: 'A CMED (Câmara de Regulação do Mercado de Medicamentos) regula os preços máximos de medicamentos no Brasil por meio das estruturas de Preço de Fábrica (PCFAR) e Preço Máximo ao Consumidor (PMC). A CMED utiliza uma cesta de referência de 12 países para definir os preços máximos de fábrica para novos produtos. A BioNixus realiza pesquisas de precificação que mapeiam o diferencial de preços SUS vs. plano privado, avaliam gatilhos de substituição por marca/genérico, testam cenários de preço de lançamento contra os tetos CMED e quantificam a disposição a pagar dos pagadores e prescritores.',
  },
  {
    q: 'A BioNixus realiza pesquisas com pacientes em conformidade com a LGPD e o CONEP?',
    a: 'Sim. Toda a pesquisa com pacientes da BioNixus no Brasil opera em conformidade com a LGPD (Lei 13.709/2018) — incluindo consentimento explícito, minimização de dados e acordos de processamento de dados conformes com a ANPD — e com as diretrizes do CONEP/CEP sob a Resolução CNS 510/2016. A BioNixus trabalha com parceiros hospitalares acadêmicos registrados no CEP para patrocinar a aprovação ética de forma eficiente. Áreas terapêuticas de pesquisa com pacientes: oncologia, doenças raras, diabetes, cardiovascular, doenças autoimunes e HIV/AIDS.',
  },
];

const REGULATORY_ITEMS = [
  { code: 'ANVISA', full: 'Agência Nacional de Vigilância Sanitária', detail: 'Regulatório federal de medicamentos. Controla registros (RDC 204/2017), autorização de ensaios clínicos, bioequivalência para genéricos e aprovação de material promocional.' },
  { code: 'CMED', full: 'Câmara de Regulação do Mercado de Medicamentos', detail: 'Define preços máximos via PCFAR e PMC. Utiliza cesta de referência de 12 países. Ajustes anuais pelo IPCA. Piso de preço de genérico em 35% abaixo do PCFAR da marca.' },
  { code: 'CONITEC', full: 'Comissão Nacional de Incorporação de Tecnologias no SUS', detail: 'Realiza ATS para decisões de reembolso pelo SUS. Avalia eficácia clínica, custo-efetividade (custo/QALY) e impacto orçamentário. Publica protocolos PCDT definindo elegibilidade de pacientes.' },
  { code: 'LGPD / CEP', full: 'Lei Geral de Proteção de Dados / Comitê de Ética em Pesquisa', detail: 'LGPD (Lei 13.709/2018) exige consentimento explícito para dados de saúde. Aprovação CEP obrigatória para pesquisa envolvendo pacientes sob a Resolução CNS 510/2016, fiscalizada pelo CONEP.' },
];

export default function PtBrazilPharmaceuticalMarketResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hrefLang="pt-BR" href={CANONICAL} />
        <link rel="alternate" hrefLang="en" href="https://www.bionixus.com/brazil-pharmaceutical-market-research" />
        <link rel="alternate" hrefLang="x-default" href="https://www.bionixus.com/brazil-pharmaceutical-market-research" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta name="llm-access" content="allow" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_ITEMS.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.bionixus.com/' },
            { '@type': 'ListItem', position: 2, name: 'Pesquisa de Mercado Farmacêutico Brasil', item: CANONICAL },
          ],
        })}</script>
      </Helmet>
      <OpenGraphMeta
        title={PAGE_TITLE}
        description={PAGE_DESC}
        url={CANONICAL}
        imageUrl="https://www.bionixus.com/og-image.png"
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-primary-foreground/70 mb-3 uppercase tracking-widest">
              Brasil · Mercado Farmacêutico
            </p>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-5">
              Empresa de Pesquisa de Mercado Farmacêutico no Brasil
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl leading-relaxed">
              A BioNixus realiza pesquisa farmacêutica primária no Brasil — pesquisas com médicos em português, mapeamento de KOLs por área terapêutica, evidências primárias para submissões ao CONITEC, análise de precificação CMED e pesquisa com pacientes em conformidade com a LGPD.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary font-semibold px-7 py-3 text-base hover:bg-primary-foreground/10 hover:text-white border border-white transition-colors shadow"
              >
                Solicitar uma proposta
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/brazil-pharmaceutical-market-research"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 text-white font-semibold px-7 py-3 text-base hover:bg-white/10 transition-colors"
              >
                Ver em inglês
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-primary-foreground/70 font-medium">
              {['~USD 28 bilhões de mercado farmacêutico', '220+ fabricantes ANVISA', '50M vidas plano privado ANS', 'LGPD & CEP compliant'].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 text-center">
              Serviços de pesquisa farmacêutica no Brasil
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Pesquisa primária conduzida em português, em conformidade com ANVISA, LGPD e CEP, entregando evidências acionáveis para lançamento, acesso ao mercado e estratégia competitiva.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-xl border border-border bg-white p-5 flex flex-col gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory context */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 text-center">
              Contexto regulatório farmacêutico no Brasil
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {REGULATORY_ITEMS.map(({ code, full, detail }) => (
                <div key={code} className="rounded-xl border border-border p-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-0.5">{code}</p>
                  <p className="text-sm font-medium text-foreground mb-2">{full}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10 text-center">
              Perguntas frequentes — pesquisa farmacêutica no Brasil
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map(({ q, a }) => (
                <details key={q} className="group rounded-xl border border-border bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer text-left font-medium text-foreground text-sm md:text-base list-none">
                    {q}
                    <span className="flex-shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-6 pb-5 pt-3 text-sm text-muted-foreground leading-relaxed border-t border-border">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 px-4 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Pronto para iniciar sua pesquisa farmacêutica no Brasil?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Conte-nos sobre seu produto, área terapêutica e decisão — definiremos a abordagem certa.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary font-semibold px-8 py-3.5 text-base hover:bg-primary-foreground/10 hover:text-white border border-white transition-colors shadow-lg"
            >
              Solicitar uma proposta
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
