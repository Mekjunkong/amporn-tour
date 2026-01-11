/**
 * SEO Utilities for Amporn Tour
 * Handles meta tags, structured data, and SEO optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Amporn Tour | Private Tours in Chiang Mai for European Travelers',
  description: 'Private tours in Chiang Mai for European travelers. Flexible itineraries, local expertise, excellent value.',
  keywords: [
    'Chiang Mai tours',
    'private tours Chiang Mai',
    'Northern Thailand tours',
    'Doi Inthanon',
    'temple tours Thailand',
    'European tours',
  ],
  image: '/images/doi-inthanon-hero.jpg',
};

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://amporn-tour.manus.space',
    name: 'Amporn Tour',
    description: 'Professional private tours in Northern Thailand for European travelers',
    url: 'https://amporn-tour.manus.space',
    telephone: '+66899995677',
    image: '/images/amporn-logo.png',
    logo: {
      '@type': 'ImageObject',
      url: '/images/amporn-logo.png',
      width: 200,
      height: 200,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chiang Mai',
      addressRegion: 'Chiang Mai Province',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.7883,
      longitude: 98.9853,
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Chiang Mai',
      },
      {
        '@type': 'City',
        name: 'Chiang Rai',
      },
      {
        '@type': 'City',
        name: 'Mae Hong Son',
      },
    ],
    sameAs: [
      'https://wa.me/66899995677',
    ],
  };
}

/**
 * Generate JSON-LD structured data for Tour Services
 */
export function generateTourServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Private Tours in Northern Thailand',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Amporn Tour',
      url: 'https://amporn-tour.manus.space',
    },
    areaServed: {
      '@type': 'City',
      name: 'Chiang Mai',
    },
    description: 'Flexible, personalized private tours in Northern Thailand for European travelers',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'THB',
      priceRange: '1000-5000',
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amporn Tour',
    url: 'https://amporn-tour.manus.space',
    logo: '/images/amporn-logo.png',
    description: 'Professional private tours in Northern Thailand for European travelers',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+66-89-999-5677',
      contactOption: 'TollFree',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chiang Mai',
      addressCountry: 'TH',
    },
    sameAs: [
      'https://wa.me/66899995677',
    ],
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer private tours for groups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in private and small-group tours customized to your interests and preferences.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you customize tours to my interests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We create flexible itineraries tailored to your specific interests, pace, and preferences.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best way to contact you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via WhatsApp at +66 89 999 5677 or call directly. WhatsApp is the fastest way to get in touch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer private tours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in private and small-group tours customized to your interests and preferences.',
        },
      },
    ],
  };
}

/**
 * Update document head with SEO meta tags
 */
export function updateSEOMeta(config: SEOConfig = defaultSEO) {
  // Title
  document.title = config.title;

  // Meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', config.description);

  // Keywords
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (!keywordsMeta) {
    keywordsMeta = document.createElement('meta');
    keywordsMeta.setAttribute('name', 'keywords');
    document.head.appendChild(keywordsMeta);
  }
  keywordsMeta.setAttribute('content', config.keywords.join(', '));

  // OG tags
  updateOGTags(config);
}

/**
 * Update Open Graph meta tags for social sharing
 */
function updateOGTags(config: SEOConfig) {
  const ogTags = [
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:image', content: config.image || '/images/amporn-logo.png' },
    { property: 'og:url', content: config.url || 'https://amporn-tour.manus.space' },
    { property: 'og:type', content: 'website' },
  ];

  ogTags.forEach(tag => {
    let meta = document.querySelector(`meta[property="${tag.property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });
}

/**
 * Add JSON-LD script to document head
 */
export function addJsonLdScript(schema: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
