import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    quote: "BioNixus transformed our market access strategy with insights that were both rigorous and actionable. Their global perspective was invaluable.",
    author: "Dr. Sarah Mitchell",
    role: "VP Market Access",
    company: "Global Pharma Inc.",
  },
  {
    quote: "The depth of competitive intelligence and speed of delivery exceeded our expectations. A true strategic partner.",
    author: "Michael Chen",
    role: "Chief Strategy Officer",
    company: "BioTech Innovations",
  },
  {
    quote: "Their KOL mapping and patient journey research directly influenced our launch success in three major European markets.",
    author: "Dr. Elena Rodriguez",
    role: "Commercial Director",
    company: "Precision Therapeutics",
  },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 animate-fade-up">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up animation-delay-200">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm border border-border animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
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

        {/* Client Logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Pfizer', 'Roche', 'Novartis', 'Sanofi', 'AstraZeneca', 'Merck'].map((company) => (
              <div
                key={company}
                className="text-xl font-display font-semibold text-foreground/50"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
