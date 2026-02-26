import { Helmet } from 'react-helmet-async';

interface OpenGraphMetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article';
  locale: string;
  alternateLocales?: string[];
}

export default function OpenGraphMeta({
  title,
  description,
  image,
  url,
  type = 'website',
  locale,
  alternateLocales = [],
}: OpenGraphMetaProps) {
  return (
    <Helmet>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((alt) => (
        <meta key={alt} property="og:locale:alternate" content={alt} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

