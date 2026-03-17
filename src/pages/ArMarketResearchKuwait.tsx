import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function ArMarketResearchKuwait() {
  return (
    <MarketResearchCountryLanding
      title="أبحاث السوق في الكويت | BioNixus"
      description="صفحة أبحاث السوق في الكويت مع تركيز على الاحتياج الدوائي والصحي وروابط الصفحات المرتبطة بالنية الشرائية."
      canonical="/ar/market-research-kuwait"
      h1="أبحاث السوق في الكويت"
      intro="نقدم أبحاث السوق في الكويت لدعم قرارات الشركات الدوائية والفرق الصحية من خلال رؤى قابلة للتنفيذ بسرعة."
      countryLabel="Kuwait"
      primaryKeyword="Market Research Kuwait"
      supportingKeywords={[
        'Pharma market research Kuwait',
        'Healthcare market research Kuwait',
        'Top pharma companies in Kuwait',
      ]}
      faqItems={[
        {
          question: 'هل الصفحة موجهة للكلمات القصيرة والطويلة معاً؟',
          answer: 'نعم، تم بناؤها لتغطي الكلمات الأساسية مع روابط مباشرة لعبارات الشركات الدوائية في الكويت.',
        },
        {
          question: 'هل توجد صفحات مرتبطة بدول قريبة؟',
          answer: 'نعم، ستجد روابط داخلية لصفحات الإمارات والسعودية ومصر لدعم الربط الموضوعي.',
        },
      ]}
      relatedLinks={[
        { to: '/market-research-kuwait', label: 'Market Research Kuwait (EN)' },
        { to: '/kuwait-market-access-research', label: 'Kuwait market access research' },
        { to: '/pharmaceutical-companies-kuwait', label: 'Top pharmaceutical companies in Kuwait' },
        { to: '/ar/market-research-uae', label: 'أبحاث السوق في الإمارات' },
      ]}
    />
  );
}
