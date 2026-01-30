import { 
  TrendingUp, 
  Target, 
  Users, 
  Microscope, 
  Rocket, 
  BarChart3 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [TrendingUp, Target, Users, Microscope, Rocket, BarChart3];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 animate-fade-up">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group bg-background p-8 rounded-xl shadow-sm hover:shadow-elegant transition-all duration-500 border border-border hover:border-primary/20 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
