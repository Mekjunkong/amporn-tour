import { useEffect } from 'react';
import {
  generateLocalBusinessSchema,
  generateTourServiceSchema,
  generateOrganizationSchema,
  generateFAQSchema,
  addJsonLdScript,
  updateSEOMeta,
  defaultSEO,
} from '@/lib/seo';

/**
 * SEOHead Component
 * Injects all necessary SEO meta tags and structured data
 * Should be placed in the root of the application
 */
export default function SEOHead() {
  useEffect(() => {
    // Update meta tags
    updateSEOMeta(defaultSEO);

    // Add structured data schemas
    addJsonLdScript(generateLocalBusinessSchema());
    addJsonLdScript(generateTourServiceSchema());
    addJsonLdScript(generateOrganizationSchema());
    addJsonLdScript(generateFAQSchema());

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://amporn-tour.manus.space');

    // Add robots meta
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Add language alternates
    const languages = [
      { hrefLang: 'en', href: 'https://amporn-tour.manus.space' },
      { hrefLang: 'th', href: 'https://amporn-tour.manus.space?lang=th' },
      { hrefLang: 'he', href: 'https://amporn-tour.manus.space?lang=he' },
      { hrefLang: 'x-default', href: 'https://amporn-tour.manus.space' },
    ];

    languages.forEach(lang => {
      let link = document.querySelector(`link[hrefLang="${lang.hrefLang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hrefLang', lang.hrefLang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', lang.href);
    });
  }, []);

  return null;
}
