import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type MethodologyStep = {
  title: string;
  items?: string[];
  subsections?: { heading: string; items: string[] }[];
};
type MethodologyAr = { title: string; steps: MethodologyStep[] };
type MethodologyStepDe = { title: string; description: string };
type MethodologyDe = { title: string; steps: MethodologyStepDe[] };

type MethodologyFr = MethodologyDe;
type MethodologyEs = MethodologyDe;
type MethodologyZh = MethodologyDe;

type MethodologyEn = { title: string; intro?: string; steps: MethodologyStepDe[] };

const MethodologySection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const dataEn = 'methodologyEn' in t ? (t as { methodologyEn?: MethodologyEn }).methodologyEn : undefined;
  const dataAr = 'methodologyAr' in t ? (t as { methodologyAr?: MethodologyAr }).methodologyAr : undefined;
  const dataDe = 'methodologyDe' in t ? (t as { methodologyDe?: MethodologyDe }).methodologyDe : undefined;
  const dataFr = 'methodologyFr' in t ? (t as { methodologyFr?: MethodologyFr }).methodologyFr : undefined;
  const dataEs = 'methodologyEs' in t ? (t as { methodologyEs?: MethodologyEs }).methodologyEs : undefined;
  const dataZh = 'methodologyZh' in t ? (t as { methodologyZh?: MethodologyZh }).methodologyZh : undefined;

  // English methodology
  if (language === 'en' && dataEn) {
    return (
      <section
        id="methodology"
        className="methodology section-padding bg-cream"
        lang="en"
        ref={sectionRef}
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 sr sr-up sr-line sr-line-center">
            {dataEn.title}
          </h2>
          {dataEn.intro && (
            <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-10 sr sr-up">
              {dataEn.intro}
            </p>
          )}
          <div className="methodology-compact space-y-6">
            {dataEn.steps.map((step, i) => (
              <div
                key={i}
                className="step rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border sr sr-left hover-lift"
              >
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Chinese methodology (compact)
  if (language === 'zh' && dataZh) {
    return (
      <section
        id="methodology"
        className="methodology section-padding bg-cream"
        lang="zh-CN"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataZh.title}
          </h2>
          <div className="methodology-steps space-y-6">
            {dataZh.steps.map((step, i) => (
              <div
                key={i}
                className="step rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Spanish methodology (compact)
  if (language === 'es' && dataEs) {
    return (
      <section
        id="methodology"
        className="methodology section-padding bg-cream"
        lang="es"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataEs.title}
          </h2>
          <div className="methodology-steps space-y-6">
            {dataEs.steps.map((step, i) => (
              <div
                key={i}
                className="step rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // French methodology (compact)
  if (language === 'fr' && dataFr) {
    return (
      <section
        id="methodology"
        className="methodology section-padding bg-cream"
        lang="fr"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataFr.title}
          </h2>
          <div className="methodology-steps space-y-6">
            {dataFr.steps.map((step, i) => (
              <div
                key={i}
                className="step rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // German methodology (compact)
  if (language === 'de' && dataDe) {
    return (
      <section
        id="methodology"
        className="methodology section-padding bg-cream"
        lang="de"
      >
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
            {dataDe.title}
          </h2>
          <div className="methodology-compact space-y-6">
            {dataDe.steps.map((step, i) => (
              <div
                key={i}
                className="step rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Arabic methodology
  if (language !== 'ar' || !dataAr) return null;

  return (
    <section
      id="methodology"
      className="methodology section-padding bg-cream"
      dir="rtl"
    >
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
          {dataAr.title}
        </h2>
        <div className="methodology-steps space-y-8 md:space-y-10">
          {dataAr.steps.map((step, i) => (
            <div
              key={i}
              className="step rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              {step.items ? (
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {step.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              ) : step.subsections ? (
                <div className="space-y-4">
                  {step.subsections.map((sub, j) => (
                    <div key={j}>
                      <h4 className="font-semibold text-foreground text-sm mb-2 mt-4 first:mt-0">
                        {sub.heading}:
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {sub.items.map((item, k) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
