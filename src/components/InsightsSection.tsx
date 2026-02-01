import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const InsightsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="insights" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 animate-fade-up">
            {t.insights.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {t.insights.subtitle}
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {t.insights.items.map((insight, index) => (
            <article
              key={index}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Same grade blue background for all cards */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary via-primary/95 to-navy-medium">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {insight.date}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {insight.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {insight.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-3 transition-all">
                  {t.insights.readMore}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
