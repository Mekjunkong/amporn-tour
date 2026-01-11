import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom hook to scroll to top when route changes
 * Automatically triggers on every page navigation
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}
