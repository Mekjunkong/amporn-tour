import { ImgHTMLAttributes, useState } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /**
   * Image source path (without extension)
   * Example: "/images/tour-banner" will load tour-banner.webp with tour-banner.jpg fallback
   */
  src: string;
  /**
   * Alt text for accessibility
   */
  alt: string;
  /**
   * Priority loading for above-the-fold images (disables lazy loading)
   * Use for hero images and LCP candidates
   */
  priority?: boolean;
  /**
   * CSS classes
   */
  className?: string;
}

/**
 * OptimizedImage Component
 * 
 * Automatically serves WebP format with JPEG/PNG fallback for browser compatibility.
 * Implements lazy loading for below-the-fold images to improve initial page load.
 * 
 * Features:
 * - Automatic WebP format with fallback
 * - Lazy loading (except priority images)
 * - Error handling with fallback to JPEG
 * - Responsive image loading
 * 
 * Usage:
 * ```tsx
 * // Regular image (lazy loaded)
 * <OptimizedImage src="/images/tour-banner" alt="Tour banner" />
 * 
 * // Priority image (hero/LCP - eager loaded)
 * <OptimizedImage src="/images/hero" alt="Hero" priority />
 * ```
 */
export default function OptimizedImage({
  src,
  alt,
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [webpError, setWebpError] = useState(false);

  // Remove file extension if present
  const baseSrc = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');

  // Determine which format to use
  const imageSrc = imageError || webpError ? `${baseSrc}.jpg` : `${baseSrc}.webp`;

  const handleError = () => {
    if (!webpError) {
      // First error: try JPEG fallback
      setWebpError(true);
    } else {
      // Second error: mark as failed
      setImageError(true);
      console.error(`Failed to load image: ${src}`);
    }
  };

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {!webpError && (
        <source srcSet={`${baseSrc}.webp`} type="image/webp" />
      )}
      
      {/* JPEG/PNG fallback for older browsers */}
      <source srcSet={`${baseSrc}.jpg`} type="image/jpeg" />
      
      {/* Actual img element */}
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={className}
        onError={handleError}
        {...props}
      />
    </picture>
  );
}
