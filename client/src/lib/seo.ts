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
  title: 'Amporn Tour | Private Tours in Chiang Mai, Northern Thailand',
  description: 'Professional private and small-group tours in Chiang Mai and Northern Thailand. Experienced with Israeli and international travelers. Flexible, personalized itineraries. WhatsApp: +66 89 999 5677',
  keywords: [
    'Chiang Mai tours',
    'private tours Chiang Mai',
    'Northern Thailand tours',
    'Israeli friendly tours',
    'Jewish friendly tours Chiang Mai',
    'Doi Inthanon tours',
    'Golden Triangle tours',
    'temple tours Thailand',
    'adventure tours Chiang Mai',
    'cultural tours Thailand',
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
    description: 'Professional private tours in Northern Thailand',
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
    description: 'Flexible, personalized private and small-group tours in Northern Thailand',
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
    description: 'Professional private tours in Northern Thailand for international travelers',
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
        name: 'Do you offer tours for Israeli travelers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we have extensive experience working with Israeli travelers and understand your travel preferences. We offer flexible tours tailored to your needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you accommodate Shabbat schedules?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can arrange tours that respect Shabbat schedules. Please discuss your specific needs when booking via WhatsApp.',
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
