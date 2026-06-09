import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { ReportPremiumHero, type ReportHeroStat } from '@/components/report-premium';

type BreadcrumbItem = { name: string; href: string };

type HealthcareResearchPageShellProps = {
  progressId: string;
  config: ReportConversionConfig;
  breadcrumbs: BreadcrumbItem[];
  hero: {
    title: string;
    description: ReactNode;
    stats?: ReportHeroStat[];
    statsCaption?: string;
    badges?: string[];
    countryName?: string;
    therapyName?: string;
    marketSlug?: string;
    therapySlug?: string;
    metaLinks?: ReactNode;
  };
  tocItems?: { href: string; label: string }[];
  faq?: {
    sectionId: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  children: ReactNode;
};

/** Premium report-style layout for `/healthcare-market-research` hub and sub-routes. */
export function HealthcareResearchPageShell({
  progressId,
  config,
  breadcrumbs,
  hero,
  tocItems,
  faq,
  children,
}: HealthcareResearchPageShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ReportReadingProgress progressId={progressId} />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbs} />
          </div>
        </div>

        <ReportPremiumHero
          title={hero.title}
          description={hero.description}
          config={config}
          countryName={hero.countryName}
          therapyName={hero.therapyName}
          marketSlug={hero.marketSlug}
          therapySlug={hero.therapySlug}
          badges={hero.badges}
          metaLinks={hero.metaLinks}
          stats={hero.stats}
          statsCaption={hero.statsCaption ?? ''}
        />

        <ReportContentWithAside config={config} tocItems={tocItems}>
          {children}
          {faq ? (
            <FAQSection
              sectionId={faq.sectionId}
              title={faq.title}
              items={faq.items}
              className="bg-muted/30 rounded-2xl px-4 md:px-6"
            />
          ) : null}
        </ReportContentWithAside>

        <ReportConsultationBand config={config} />
      </main>
      <Footer />
    </div>
  );
}
