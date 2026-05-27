import { Helmet } from 'react-helmet-async';

export type OpenGraphArticleMeta = {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
};

interface OpenGraphMetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article';
  locale: string;
  alternateLocales?: string[];
  /** og:site_name — defaults to BioNixus when omitted */
  siteName?: string;
  /** twitter:image:alt and og:image:alt */
  imageAlt?: string;
  /** Default 1200 (recommended share image width). */
  imageWidth?: number;
  /** Default 630 (recommended share image height). */
  imageHeight?: number;
  /** twitter:site — @handle */
  twitterSite?: string;
  /** twitter:creator — optional @handle */
  twitterCreator?: string;
  article?: OpenGraphArticleMeta;
}

export default function OpenGraphMeta({
  title,
  description,
  image,
  url,
  type = 'website',
  locale,
  alternateLocales = [],
  siteName = 'BioNixus',
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  twitterSite = '@BioNixus',
  twitterCreator,
  article,
}: OpenGraphMetaProps) {
  const trimmedTags = Array.isArray(article?.tags) ? article.tags.map((t) => t.trim()).filter(Boolean) : [];

  return (
    <Helmet>
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      {imageAlt ? <meta property="og:image:alt" content={imageAlt} /> : null}

      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((alt) => (
        <meta key={alt} property="og:locale:alternate" content={alt} />
      ))}

      {type === 'article' ? (
        <>
          {article?.publishedTime ? <meta property="article:published_time" content={article.publishedTime} /> : null}
          {article?.modifiedTime ? <meta property="article:modified_time" content={article.modifiedTime} /> : null}
          {article?.author ? <meta property="article:author" content={article.author} /> : null}
          {article?.section ? <meta property="article:section" content={article.section} /> : null}
          {trimmedTags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}
      {twitterCreator ? <meta name="twitter:creator" content={twitterCreator} /> : null}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {imageAlt ? <meta name="twitter:image:alt" content={imageAlt} /> : null}
    </Helmet>
  );
}
