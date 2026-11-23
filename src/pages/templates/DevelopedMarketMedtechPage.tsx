import { Link } from 'react-router-dom';
import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import {
  getDevelopedMarketMedtechCountry,
  getDevelopedMarketMedtechExpandedContent,
  getDevelopedMarketMedtechListiclePath,
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
  // Titles already fit in 60 characters. UK is the cut-title replacement.
  // The others are the strings the old word-boundary trim already shipped.
  const serviceTitle: Record<DevelopedMarketMedtechSlug, string> = {
    canada: 'MedTech Market Research Company in Canada (2026) | BioNixus',
    usa: 'MedTech Market Research Company in United States | BioNixus',
    uk: 'MedTech Market Research Company in the UK | BioNixus',
    australia: 'MedTech Market Research Company in Australia | BioNixus',
    germany: 'MedTech Market Research Company in Germany | BioNixus',
    france: 'MedTech Market Research Company in France (2026) | BioNixus',
    japan: 'MedTech Market Research Company in Japan (2026) | BioNixus',
    china: 'MedTech Market Research Company in China (2026) | BioNixus',
    singapore: 'MedTech Market Research Company in Singapore | BioNixus',
    italy: 'MedTech Market Research Company in Italy (2026) | BioNixus',
    spain: 'MedTech Market Research Company in Spain (2026) | BioNixus',
    switzerland: 'MedTech Market Research Company in Switzerland | BioNixus',
    denmark: 'MedTech Market Research Company in Denmark | BioNixus',
    'new-zealand': 'MedTech Market Research Company in New Zealand | BioNixus',
    'south-korea': 'MedTech Market Research Company in South Korea | BioNixus',
    poland: 'MedTech Market Research Company in Poland (2026) | BioNixus',
    malaysia: 'MedTech Market Research Company in Malaysia | BioNixus',
    brazil: 'MedTech Market Research Company in Brazil (2026) | BioNixus',
  };
  const [relatedA, relatedB] = country.relatedSlugs.map((slug) => getDevelopedMarketMedtechCountry(slug));

  return (
    <StrategicServicePage
      title={serviceTitle[countrySlug]}
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
        {
          to: getDevelopedMarketMedtechListiclePath(countrySlug),
          label: `Top MedTech market research firms in ${country.label} (2026)`,
          primary: true,
        },
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
