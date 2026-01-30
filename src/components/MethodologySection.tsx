import { useLanguage } from '@/contexts/LanguageContext';

type MethodologyStep = {
  title: string;
  items?: string[];
  subsections?: { heading: string; items: string[] }[];
};
type MethodologyAr = { title: string; steps: MethodologyStep[] };

const MethodologySection = () => {
  const { t, language } = useLanguage();
  const data = 'methodologyAr' in t ? (t as { methodologyAr?: MethodologyAr }).methodologyAr : undefined;

  if (language !== 'ar' || !data) return null;

  return (
    <section
      id="methodology"
      className="methodology section-padding bg-cream"
      dir="rtl"
    >
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground text-center mb-12 animate-fade-up">
          {data.title}
        </h2>
        <div className="methodology-steps space-y-8 md:space-y-10">
          {data.steps.map((step, i) => (
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
