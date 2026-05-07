import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  onLoad?: () => void;
}

const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E';

/**
 * LazyImage Component
 * Keeps image loading efficient while avoiding blank placeholders forever when
 * IntersectionObserver is missing or slow to fire.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || DEFAULT_PLACEHOLDER);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let didCancel = false;

    const loadImage = () => {
      if (didCancel) return;
      const image = new Image();
      image.src = src;
      image.onload = () => {
        if (didCancel) return;
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      };
      image.onerror = () => {
        if (didCancel) return;
        setImageSrc(src);
      };
    };

    if (typeof window === 'undefined' || !('IntersectionObserver' in window) || !imgRef.current) {
      loadImage();
      return () => {
        didCancel = true;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          loadImage();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(imgRef.current);

    const fallbackTimer = window.setTimeout(loadImage, 1800);

    return () => {
      didCancel = true;
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [src, onLoad]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-75'} ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
