import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations.
 * Content is visible by default so the page never hides key sections if
 * IntersectionObserver, JavaScript timing, or reduced motion behavior fails.
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(node);

    const fallback = window.setTimeout(() => setIsVisible(true), 1200);

    return () => {
      window.clearTimeout(fallback);
      observer.unobserve(node);
    };
  }, []);

  return { ref, isVisible };
}
