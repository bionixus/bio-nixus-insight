import { Link } from 'react-router-dom';
import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import {
  getDevelopedMarketMedtechCountry,
  getDevelopedMarketMedtechExpandedContent,
  getDevelopedMarketMedtechPath,
  type DevelopedMarketMedtechSlug,
} from '@/data/developedMarketMedtechPages';

type DevelopedMarketMedtechPageProps = {
  countrySlug: DevelopedMarketMedtechSlug;
};

export default function DevelopedMarketMedtechPage({ countrySlug }: DevelopedMarketMedtechPageProps) {
  const country = getDevelopedMarketMedtechCountry(countrySlug);
  const expandedContent = getDevelopedMarketMedtechExpandedContent(countrySlug);
  const path = getDevelopedMarketMedtechPath(countrySlug);
  const canonicalUrl = `https://www.bionixus.com${path}`;
  const [relatedA, relatedB] = country.relatedSlugs.map((slug) => getDevelopedMarketMedtechCountry(slug));

  return (
    <StrategicServicePage
      title={`MedTech Market Research Company in ${country.label} (2026) | ${country.regulatorShort} Context | BioNixus`}
      description={`BioNixus is a MedTech and medical devices market research company in ${country.label} — ${country.regulatorShort}-aware hospital procurement research, clinician adoption studies, KOL mapping, and competitive intelligence for device manufacturers.`}
      canonicalUrl={canonicalUrl}
      breadcrumbLabel={`MedTech Market Research ${country.label}`}
      serviceType={`MedTech and medical devices market research in ${country.label}`}
      areaServed={[country.label]}
      h1={`MedTech & Medical Devices Market Research Company in ${country.label}`}
      intro={`BioNixus delivers MedTech and medical devices market research in ${country.label} for manufacturers that need credible local evidence — not desk syndication. Our ${country.label} programmes combine hospital procurement research, clinician adoption studies, KOL mapping, and ${country.regulatorShort}-aware competitive intelligence, with fieldwork in ${country.languages} where local nuance affects conclusions.`}
      links={[
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: country.healthcareResearchPath, label: `Healthcare market research ${country.label}`, primary: true },
        { to: country.medDevicesReportPath, label: country.medDevicesReportPath.includes('pharmaceutical') ? `Pharmaceutical market research ${country.label}` : `${country.label} medical devices market report` },
        { to: getDevelopedMarketMedtechPath(relatedA.slug), label: `MedTech market research ${relatedA.label}` },
        { to: getDevelopedMarketMedtechPath(relatedB.slug), label: `MedTech market research ${relatedB.label}` },
        { to: '/contact', label: 'Request a MedTech research proposal' },
      ]}
      bullets={[
        `${country.regulatorShort}-aware study design aligned to device classification and hospital listing pathways.`,
        `Verified specialist and procurement stakeholder recruitment across ${country.label} academic and community settings.`,
        `Mixed quant + qual modules mapping prescriber intent to committee behaviour and workflow friction.`,
        `Optional GCC and MENA expansion intelligence for ${country.label} manufacturers entering Gulf markets.`,
      ]}
      decisionPoints={country.executivePoints}
      metrics={[country.metricOne, country.metricTwo, country.metricThree]}
      expandedContent={expandedContent}
      mediaSlug={`${countrySlug}-medtech-market-research`}
    />
  );
}

export function DevelopedMarketMedtechHubLink({ slug }: { slug: DevelopedMarketMedtechSlug }) {
  const country = getDevelopedMarketMedtechCountry(slug);
  return (
    <Link to={getDevelopedMarketMedtechPath(slug)} className="text-primary underline font-medium">
      MedTech market research in {country.label}
    </Link>
  );
}
