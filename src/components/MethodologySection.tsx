import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getLocalizedPathForLanguage } from '@/lib/seo';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import type { Language } from '@/lib/i18n';

type MethodologySectionProps = { nestUnderParentH1?: boolean };

function MethodologySectionTitle({
  nestUnderParentH1,
  className,
  children,
}: {
  nestUnderParentH1: boolean;
  className: string;
  children: ReactNode;
}) {
  return nestUnderParentH1 ? (
    <h2 className={className}>{children}</h2>
  ) : (
    <h1 className={className}>{children}</h1>
  );
}

function MethodologyStepHeading({
  nestUnderParentH1,
  className,
  children,
}: {
  nestUnderParentH1: boolean;
  className: string;
  children: ReactNode;
}) {
  return nestUnderParentH1 ? (
    <h3 className={className}>{children}</h3>
  ) : (
    <h2 className={className}>{children}</h2>
  );
}

function MethodologySubHeading({
  nestUnderParentH1,
  className,
  children,
}: {
  nestUnderParentH1: boolean;
  className: string;
  children: ReactNode;
}) {
  return nestUnderParentH1 ? (
    <h4 className={className}>{children}</h4>
  ) : (
    <h3 className={className}>{children}</h3>
  );
}

type MethodologyStep = {
  title: string;
  description?: string;
  items?: string[];
  subsections?: { heading: string; items: string[] }[];
};

type MethodologyBundle = {
  title: string;
  intro?: string;
  steps: MethodologyStep[];
};

const LANG_ATTR: Record<Language, string | undefined> = {
  en: 'en',
  de: 'de',
  fr: 'fr',
  es: 'es',
  zh: 'zh-CN',
  ar: 'ar',
  pt: 'pt',
  ru: 'ru',
};

const MethodologySection = ({ nestUnderParentH1 = false }: MethodologySectionProps) => {
  const { t, language } = useLanguage();
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const services = t as typeof t & {
    methodologyEn?: MethodologyBundle;
    methodologyDe?: MethodologyBundle;
    methodologyFr?: MethodologyBundle;
    methodologyEs?: MethodologyBundle;
    methodologyZh?: MethodologyBundle;
    methodologyAr?: MethodologyBundle;
    methodologyPt?: MethodologyBundle;
    methodologyRu?: MethodologyBundle;
  };

  const byLang: Record<Language, MethodologyBundle | undefined> = {
    en: services.methodologyEn,
    de: services.methodologyDe,
    fr: services.methodologyFr,
    es: services.methodologyEs,
    zh: services.methodologyZh,
    ar: services.methodologyAr,
    pt: services.methodologyPt,
    ru: services.methodologyRu,
  };

  const data = byLang[language] ?? services.methodologyEn;
  if (!data) return null;

  const methodologyHref = getLocalizedPathForLanguage('/methodology', language);

  return (
    <section
      id="methodology"
      className="methodology premium-home-cream section-padding"
      lang={LANG_ATTR[language]}
      dir={language === 'ar' ? 'rtl' : undefined}
      ref={sectionRef}
    >
      <div className="container-wide max-w-6xl mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center sr sr-up">
          <PremiumEyebrow>{t.footer.methodology}</PremiumEyebrow>
          <MethodologySectionTitle
            nestUnderParentH1={nestUnderParentH1}
            className="font-display text-3xl md:text-4xl font-light tracking-tight text-[#0C1B33]"
          >
            {data.title}
          </MethodologySectionTitle>
          {data.intro ? (
            <p className="mt-5 text-base md:text-lg font-light leading-relaxed text-[#7A7267]">
              {data.intro}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {data.steps.map((step, i) => (
            <article key={step.title} className="premium-card h-full sr sr-scale-up sr-spring">
              <span className="mb-5 block font-display text-3xl font-light text-[#C9A84C]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <MethodologyStepHeading
                nestUnderParentH1={nestUnderParentH1}
                className="mb-4 font-display text-xl font-medium text-[#0C1B33]"
              >
                {step.title}
              </MethodologyStepHeading>
              {step.description ? (
                <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">{step.description}</p>
              ) : null}
              {step.items ? (
                <ul className="list-disc space-y-2 ps-5 text-[15px] font-light leading-relaxed text-[#7A7267]">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {step.subsections ? (
                <div className="space-y-4">
                  {step.subsections.map((sub) => (
                    <div key={sub.heading}>
                      <MethodologySubHeading
                        nestUnderParentH1={nestUnderParentH1}
                        className="mb-2 text-sm font-semibold text-[#0C1B33]"
                      >
                        {sub.heading}
                      </MethodologySubHeading>
                      <ul className="list-disc space-y-1 ps-5 text-[15px] font-light leading-relaxed text-[#7A7267]">
                        {sub.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-12 text-center sr sr-up">
          <Link
            to={methodologyHref}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#C9A84C] transition-all hover:gap-3"
          >
            {t.footer.methodology}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
