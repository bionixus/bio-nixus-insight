import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { SHARED_FIGURES } from '@/data/mediaAssets';
import { formatTemplate } from '@/lib/uiChromeStrings';

const TESTIMONIAL_THUMBNAILS = [
  SHARED_FIGURES.hcpWorkshop,
  SHARED_FIGURES.validationLab,
  SHARED_FIGURES.hcpWorkshop,
] as const;

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 120 });

  return (
    <section id="testimonials" className="premium-home-midnight section-padding" ref={sectionRef}>
      <div className="container-wide relative z-10 max-w-6xl">
        <div className="mb-16 border-b border-white/10 pb-12">
          <p className="mb-8 text-center text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
            {t.homePage.testimonials.marquee}
          </p>
          <div className="w-full overflow-hidden select-none" aria-hidden="true">
            <div className="flex w-max animate-marquee will-change-transform">
              {[...Array(3)].map((_, set) => (
                <div key={set} className="flex shrink-0 items-center gap-16 px-8">
                  {t.ui.brands.companies.map((company) => (
                    <span
                      key={`${set}-${company}`}
                      className="whitespace-nowrap font-display text-xl font-medium text-white/35"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mx-auto mb-5 block h-px w-10 bg-[#0EA5A0]/40" aria-hidden="true" />
          <h2 className="mb-5 font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#FFFEFB] sr sr-up">
            {t.testimonials.title}
          </h2>
          <p className="text-base font-light leading-relaxed text-white/45 sr sr-up">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Link
              key={index}
              to="/case-studies"
              className="premium-card-dark group block overflow-hidden sr sr-scale-up sr-spring"
            >
              <OptimizedImage
                src={TESTIMONIAL_THUMBNAILS[index % TESTIMONIAL_THUMBNAILS.length].src}
                alt={formatTemplate(t.homePage.testimonials.altTemplate, {
                  company: testimonial.company,
                })}
                width={400}
                height={240}
                className="h-40 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                loading="lazy"
              />
              <div className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-[#C9A84C]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C]">
                    {testimonial.role}
                  </span>
                  <span className="text-xs text-white/35">{testimonial.company}</span>
                </div>
                <p className="mb-6 font-display text-lg font-light leading-relaxed text-[#FFFEFB]">
                  {testimonial.quote}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/70">{testimonial.author}</span>
                  <ArrowRight className="h-5 w-5 text-[#C9A84C]/70 transition-all group-hover:translate-x-1 group-hover:text-[#C9A84C] rtl:rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
