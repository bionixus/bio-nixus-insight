import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 120 });

  return (
    <section className="section-padding bg-cream-dark" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 sr sr-up sr-line sr-line-center">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-foreground/70 sr sr-up">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm border border-border sr sr-scale-up sr-spring hover-lift"
            >
              <Quote className="w-10 h-10 text-gold-warm mb-6" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-8 font-display italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by Industry Leaders – continuous marquee ticker */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-sm text-foreground/70 mb-8 uppercase tracking-widest">
            Industry Leaders We Serve Alongside
          </p>
          <div className="overflow-hidden select-none w-full" aria-hidden="true">
            <div
              className="flex animate-marquee will-change-transform"
              style={{ width: 'max-content' }}
            >
              {[...Array(3)].map((_, set) => (
                <div key={set} className="flex items-center gap-16 shrink-0 px-8">
                  {['Pfizer', 'Roche', 'Novartis', 'Sanofi', 'AstraZeneca', 'Merck'].map((company) => (
                    <span
                      key={`${set}-${company}`}
                      className="text-xl font-display font-semibold text-foreground/75 whitespace-nowrap"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
