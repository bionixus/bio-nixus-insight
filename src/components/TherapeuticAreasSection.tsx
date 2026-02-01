import { useLanguage } from '@/contexts/LanguageContext';

type TherapeuticArea = { name: string; description: string };
type TherapeuticAreasDe = { title: string; areas: TherapeuticArea[] };

type TherapeuticAreasFr = TherapeuticAreasDe;
type TherapeuticAreasEs = TherapeuticAreasDe;
type TherapeuticAreasZh = TherapeuticAreasDe;

const TherapeuticAreasSection = () => {
  const { t, language } = useLanguage();
  const dataDe = 'therapeuticAreasDe' in t ? (t as { therapeuticAreasDe?: TherapeuticAreasDe }).therapeuticAreasDe : undefined;
  const dataFr = 'therapeuticAreasFr' in t ? (t as { therapeuticAreasFr?: TherapeuticAreasFr }).therapeuticAreasFr : undefined;
  const dataEs = 'therapeuticAreasEs' in t ? (t as { therapeuticAreasEs?: TherapeuticAreasEs }).therapeuticAreasEs : undefined;
  const dataZh = 'therapeuticAreasZh' in t ? (t as { therapeuticAreasZh?: TherapeuticAreasZh }).therapeuticAreasZh : undefined;
  const data = language === 'zh' ? dataZh : language === 'es' ? dataEs : language === 'fr' ? dataFr : dataDe;

  if ((language !== 'de' && language !== 'fr' && language !== 'es' && language !== 'zh') || !data) return null;

  return (
    <section
      id="therapeutic-areas"
      className="therapeutic-areas section-padding bg-muted/30"
      lang={language}
    >
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
          {data.title}
        </h2>
        <div className="areas-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.areas.map((area, i) => (
            <div
              key={i}
              className="area rounded-xl bg-background p-6 shadow-sm border border-border animate-fade-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <h4 className="font-display font-semibold text-foreground mb-2">
                {area.name}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreasSection;
