import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { ArrowRight, Zap, Globe, FileCheck } from 'lucide-react';

type ContactPageCopy = {
  heroTitle?: string;
  heroSubtitle?: string;
  statLine?: string;
  badges?: string[];
};

const contactGuideByLanguage: Record<
  Language,
  { heading: string; paragraphs: string[] }
> = {
  en: {
    heading: 'What happens after you contact BioNixus',
    paragraphs: [
      'Share your objective market, timeline, and evidence standard—whether you need a GCC physician survey, EU5 payer interviews, or a blended qualitative and quantitative program. Our team triages requests the same day and aligns you with a research director who has executed comparable studies in your geography and therapy area.',
      'Typical engagements span launch readiness, market access evidence design, competitive intelligence, KOL mapping, and post-launch adoption tracking. We translate field protocols into decision-ready outputs: executive summaries, segment narratives, and data cuts that connect to pricing, access, and medical affairs milestones.',
      'BioNixus maintains bilingual Arabic–English capabilities for Gulf programs alongside GDPR-aligned European fieldwork. If you are comparing vendors, ask for methodology notes, sample governance, and recent anonymized deliverable structures—we respond with concrete examples rather than generic capability decks.',
    ],
  },
  de: {
    heading: 'Ablauf nach Ihrer Kontaktaufnahme',
    paragraphs: [
      'Beschreiben Sie Zielmarkt, Zeitplan und Evidenzstandard—ob Golf-Ärztebefragung, EU5-Payer-Interviews oder ein kombiniertes qualitatives und quantitatives Programm. Wir priorisieren Anfragen am selben Tag und verbinden Sie mit einer Research-Führungskraft mit nachweislicher Erfahrung in Ihrer Region und Indikation.',
      'Typische Mandate umfassen Launch-Readiness, Marktzugang, Wettbewerbsintelligenz, KOL-Mapping und Post-Launch-Adoption. Wir liefern entscheidungsreife Ausgaben: Management-Summarys, Segmentnarrative und Daten-Schnitte, die zu Pricing-, Zugangs- und Medical-Affairs-Meilensteinen passen.',
      'Für Golfprogramme stehen zweisprachige arabisch-englische Teams zur Verfügung; in Europa arbeiten wir DSGVO-konform. Bei Vendor-Vergleichen erhalten Sie Methodik, Sample-Governance und Beispielstrukturen—konkret statt generischer Folien.',
    ],
  },
  fr: {
    heading: 'Après votre message : comment nous travaillons',
    paragraphs: [
      'Indiquez marché cible, calendrier et niveau de preuve—enquête médecins GCC, entretiens payeurs EU5 ou programme mixte quali/quant. Nous priorisons le jour même et vous mettons en relation avec un directeur de recherche ayant mené des études comparables.',
      'Les missions couvrent préparation de lancement, market access, intelligence concurrentielle, cartographie des KOL et suivi d’adoption post-lancement. Les livrables restent orientés décision : synthèses exécutives, récits par segment et jeux de données alignés pricing, accès et affaires médicales.',
      'Capacités bilingues arabe–anglais pour le Golfe et terrain européen aligné RGPD. Pour comparer des prestataires, nous fournissons méthodologie, gouvernance d’échantillon et exemples de structures de livrables.',
    ],
  },
  es: {
    heading: 'Qué ocurre cuando contactas con BioNixus',
    paragraphs: [
      'Indica mercado objetivo, plazo y estándar de evidencia—encuesta a médicos en GCC, entrevistas con pagadores en EU5 o un programa mixto cualitativo y cuantitativo. Priorizamos el mismo día y te conectamos con un director de investigación con experiencia comparable.',
      'Los encargos típicos cubren preparación de lanzamiento, market access, inteligencia competitiva, mapeo de KOL y seguimiento post-lanzamiento. Los entregables son accionables: resúmenes ejecutivos, narrativas por segmento y cortes de datos alineados con pricing, acceso y asuntos médicos.',
      'Capacidad bilingüe árabe–inglés para el Golfo y trabajo de campo en Europa alineado con RGPD. Si comparas proveedores, compartimos metodología, gobernanza de muestra y ejemplos de estructura de informes.',
    ],
  },
  zh: {
    heading: '提交咨询后的流程',
    paragraphs: [
      '请说明目标市场、时间线与证据标准——无论是GCC医生调研、EU5支付方访谈，还是定量定性混合项目。我们会在当日完成分流，并由在相应地区与适应症有执行经验的研究负责人对接。',
      '常见项目涵盖上市准备、市场准入证据设计、竞争情报、KOL图谱与上市后采用追踪。交付物强调可决策：高管摘要、细分叙事以及与定价、准入和医学事务里程碑对齐的数据切片。',
      '海湾项目支持阿英双语执行，欧洲现场遵循GDPR。若在做供应商比选，我们可提供方法论、样本治理与匿名化交付结构示例，而非泛泛的能力介绍。',
    ],
  },
  ar: {
    heading: 'ماذا يحدث بعد تواصلك مع BioNixus',
    paragraphs: [
      'اذكر السوق المستهدف والجدول الزمني ومستوى الأدلة المطلوب—سواء كان ذلك استطلاع أطباء في دول الخليج، أو مقابلات جهات دفع في أوروبا، أو برنامج كمي ونوعي مدمج. نقوم بفرز الطلبات في نفس اليوم ونوصلك بمدير بحث لديه خبرة تنفيذ مماثلة في جغرافيتك ومجال علاجك.',
      'تشمل المشاريع الشائعة جاهزية الإطلاق، تصميم أدلة الوصول إلى السوق، استخبارات تنافسية، خرائط أصحاب التأثير، ومتابعة التبني بعد الإطلاق. نحول بروتوكولات الميدان إلى مخرجات جاهزة للقرار: ملخصات تنفيذية، سرديات شرائح، وتقطيعات بيانات ترتبط بمحاور التسعير والوصول والشؤون الطبية.',
      'نوفر قدرات ثنائية اللغة عربية–إنجليزية لبرامج الخليج، مع عمل ميداني أوروبي متوافق مع GDPR. عند مقارنة الموردين يمكننا تزويدك بملاحظات منهجية وحوكمة عينة وأمثلة هياكل تسليم—بشكل ملموس لا عروض عامة.',
    ],
  },
};

const Contact = () => {
  const { t, language, isRTL } = useLanguage();
  const cp = (t as { contactPage?: ContactPageCopy }).contactPage;
  const heroTitle = cp?.heroTitle ?? t.contact.title;
  const heroSubtitle = cp?.heroSubtitle ?? t.contact.subtitle;
  const statLine = cp?.statLine ?? '';
  const badges = cp?.badges ?? [];
  const guide = contactGuideByLanguage[language] ?? contactGuideByLanguage.en;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Catchy hero for pharma – encourage get in touch */}
        <section className="relative section-padding pt-28 pb-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="container-wide max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get in touch
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4 text-balance">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {heroSubtitle}
            </p>
            {statLine && (
              <p className="text-sm text-muted-foreground mb-8">
                {statLine}
              </p>
            )}
            {badges.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-foreground/90 text-sm font-medium"
                  >
                    {i === 0 && <Zap className="w-4 h-4 text-primary" />}
                    {i === 1 && <Globe className="w-4 h-4 text-primary" />}
                    {i === 2 && <FileCheck className="w-4 h-4 text-primary" />}
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity group"
            >
              Request a proposal
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rtl:scale-x-[-1] group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
          </div>
        </section>

        <section className="section-padding py-12 border-b border-border bg-muted/20" aria-labelledby="contact-guide-heading">
          <div className={`container-wide max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : ''}`}>
            <h2 id="contact-guide-heading" className="text-2xl font-display font-semibold text-foreground">
              {guide.heading}
            </h2>
            {guide.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
