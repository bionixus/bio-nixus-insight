import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary-foreground text-center mb-16 animate-fade-up">
          {t.stats.title}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.items.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold-warm mb-3">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
