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

export const SITE_URL = 'https://www.amporntourchiangmai.com';
export const SOCIAL_IMAGE = `${SITE_URL}/images/doi-inthanon-hero.jpg`;

export const defaultSEO: SEOConfig = {
  title: 'Amporn Tour - Licensed Chiang Mai Private Tours',
  description: 'Licensed Chiang Mai private tours with local guides, hotel pickup, clear prices, Doi Inthanon, Chiang Rai, temples, waterfalls, trekking, and WhatsApp booking.',
  keywords: [
    'Chiang Mai private tours',
    'licensed Chiang Mai tour operator',
    'Doi Inthanon private tour',
    'Chiang Rai day tour',
    'Northern Thailand tours',
    'temple tours Thailand',
    'Chiang Mai WhatsApp tour booking',
  ],
  image: SOCIAL_IMAGE,
  url: SITE_URL,
};

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Amporn Tour',
    description: 'Licensed Chiang Mai private tours with local guides, hotel pickup, clear prices, and WhatsApp booking.',
    url: SITE_URL,
    telephone: '+66-89-999-5677',
    image: absoluteUrl('/images/amporn-logo-new.jpg'),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/images/amporn-logo-new.jpg'),
      width: 800,
      height: 800,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '146/5 Ratchiangsaen Road, Haiya',
      addressLocality: 'Muang Chiang Mai',
      addressRegion: 'Chiang Mai',
      postalCode: '50100',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.7883,
      longitude: 98.9853,
    },
    priceRange: 'THB 900-2500+',
    areaServed: [
      { '@type': 'City', name: 'Chiang Mai' },
      { '@type': 'City', name: 'Chiang Rai' },
      { '@type': 'AdministrativeArea', name: 'Northern Thailand' },
    ],
    sameAs: [
      'https://wa.me/66899995677',
      'https://maps.app.goo.gl/2wbPCLXRqcieFkeFA',
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
    '@id': `${SITE_URL}/#tourservice`,
    name: 'Private Tours in Chiang Mai and Northern Thailand',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Amporn Tour',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Chiang Mai',
    },
    description: 'Custom private and small-group tours for temples, mountains, waterfalls, trekking, Chiang Rai, and Doi Inthanon.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'THB',
      lowPrice: '900',
      highPrice: '2500',
      availability: 'https://schema.org/InStock',
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
    '@id': `${SITE_URL}/#organization`,
    name: 'Amporn Tour',
    url: SITE_URL,
    logo: absoluteUrl('/images/amporn-logo-new.jpg'),
    description: 'Licensed Chiang Mai tour operator for private tours in Northern Thailand.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+66-89-999-5677',
      availableLanguage: ['English', 'Thai'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '146/5 Ratchiangsaen Road, Haiya',
      addressLocality: 'Muang Chiang Mai',
      postalCode: '50100',
      addressCountry: 'TH',
    },
    sameAs: [
      'https://wa.me/66899995677',
      'https://maps.app.goo.gl/2wbPCLXRqcieFkeFA',
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
        name: 'Do you offer private tours in Chiang Mai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Amporn Tour offers private and small-group tours in Chiang Mai, Chiang Rai, Doi Inthanon, temples, waterfalls, trekking routes, and custom itineraries.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I confirm the price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Send your travel date, hotel area, group size, and preferred tour on WhatsApp. The final price, inclusions, pickup, and payment terms are confirmed before booking.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is usually included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most listed tours include transportation, guide service, listed entrance tickets, lunch where stated, and accident insurance. Check each tour page for exact inclusions and exclusions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the fastest way to contact Amporn Tour?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WhatsApp at +66 89 999 5677 is the fastest way to ask availability, price, pickup details, and recent guest feedback.',
        },
      },
    ],
  };
}

/**
 * Update document head with SEO meta tags
 */
export function updateSEOMeta(config: SEOConfig = defaultSEO) {
  document.title = config.title;

  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', config.description);

  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (!keywordsMeta) {
    keywordsMeta = document.createElement('meta');
    keywordsMeta.setAttribute('name', 'keywords');
    document.head.appendChild(keywordsMeta);
  }
  keywordsMeta.setAttribute('content', config.keywords.join(', '));

  updateOGTags(config);
  updateTwitterTags(config);
}

function updateOGTags(config: SEOConfig) {
  const ogTags = [
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:image', content: absoluteUrl(config.image || SOCIAL_IMAGE) },
    { property: 'og:url', content: config.url || SITE_URL },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Amporn Tour Chiang Mai' },
  ];

  ogTags.forEach((tag) => {
    let meta = document.querySelector(`meta[property="${tag.property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });
}

function updateTwitterTags(config: SEOConfig) {
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
    { name: 'twitter:image', content: absoluteUrl(config.image || SOCIAL_IMAGE) },
  ];

  twitterTags.forEach((tag) => {
    let meta = document.querySelector(`meta[name="${tag.name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', tag.name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });
}

/**
 * Add JSON-LD script to document head
 */
export function addJsonLdScript(schema: any) {
  const id = schema['@id'] || schema['@type'];
  const existing = document.querySelector(`script[data-schema-id="${id}"]`);
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.schemaId = id;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
