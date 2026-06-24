import { buildImageSrcSet, CONTENT_FIGURE_SIZES, HERO_VISUAL_SIZES } from '@/lib/image-utils';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: 'content' | 'hero' | string;
  srcSetWidths?: number[];
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority,
  sizes = 'content',
  srcSetWidths,
}: OptimizedImageProps) {
  const resolvedSizes =
    sizes === 'content' ? CONTENT_FIGURE_SIZES : sizes === 'hero' ? HERO_VISUAL_SIZES : sizes;
  const srcSet = buildImageSrcSet(src, srcSetWidths);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      {...(fetchPriority ? { fetchPriority } : {})}
      {...(srcSet ? { srcSet, sizes: resolvedSizes } : {})}
      className={className}
    />
  );
}
