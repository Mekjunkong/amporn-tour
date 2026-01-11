/**
 * English-only translations for European market
 * Focused on European travelers
 */

export const translations = {
  // Navigation
  nav: {
    home: 'Home',
    tours: 'Tours',
    about: 'About',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  // Hero Section
  hero: {
    headline: 'Discover Northern Thailand with Amporn Tour',
    subheadline: 'Professional private tours in Chiang Mai for European travelers',
    cta: 'Start Your Journey',
    whatsapp: 'Message on WhatsApp',
  },
  // Tours Section
  tours: {
    title: 'Our Tours & Services',
    subtitle: 'Flexible, personalized experiences tailored to your interests',
    chiangmai: {
      title: 'Chiang Mai City Highlights',
      description: 'Explore ancient temples, vibrant markets, and local culture in Thailand\'s cultural heart.',
    },
    nature: {
      title: 'Nature & Mountain Excursions',
      description: 'Trek through lush forests, visit waterfalls, and experience Doi Inthanon National Park.',
    },
    cultural: {
      title: 'Cultural & Temple Visits',
      description: 'Discover Buddhist temples, meet monks, and learn about Thai traditions.',
    },
    daytrip: {
      title: 'Day Trips',
      description: 'Golden Triangle, hot springs, Karen villages, and scenic viewpoints.',
    },
    private: {
      title: 'Private Tours',
      description: 'Customized itineraries designed specifically for you and your group.',
    },
    family: {
      title: 'Family-Friendly Tours',
      description: 'Fun, safe, and engaging experiences for families with children.',
    },
    detailsAvailable: 'Details available upon request via WhatsApp',
  },
  // European Travelers Section
  european: {
    title: 'For European Travelers',
    subtitle: 'We welcome guests from across Europe and understand your travel expectations',
    comfort: 'Comfort & Safety',
    comfortDesc: 'We prioritize your comfort and safety with professional guides, reliable transportation, and well-planned itineraries.',
    flexibility: 'Flexible Scheduling',
    flexibilityDesc: 'We accommodate your schedule and preferences, whether you prefer early starts, leisurely mornings, or specific activity times.',
    expertise: 'Local Knowledge',
    expertiseDesc: 'Our guides have deep knowledge of Northern Thailand and can take you beyond typical tourist routes to authentic experiences.',
    value: 'Excellent Value',
    valueDesc: 'Enjoy premium tour experiences at competitive prices compared to European tour operators.',
  },
  // About Section
  about: {
    title: 'About Amporn Tour',
    intro: 'Welcome to Amporn Tour, your trusted guide to Northern Thailand.',
    story: 'With deep local knowledge and a passion for hospitality, Amporn Tour specializes in creating memorable, personalized travel experiences. We work with travelers from across Europe and the world to ensure every tour is tailored to your interests and comfort.',
    expertise: 'Local Expertise',
    expertiseDesc: 'Born and raised in Chiang Mai, we know every corner of the region and can take you beyond typical tourist routes.',
    reliability: 'Reliability & Safety',
    reliabilityDesc: 'Your safety and satisfaction are our top priorities. We maintain high standards and communicate clearly at every step.',
    flexibility: 'Flexibility & Customization',
    flexibilityDesc: 'No two travelers are the same. We customize every tour to match your interests, pace, and preferences.',
  },
  // Contact Section
  contact: {
    title: 'Get in Touch',
    whatsapp: 'WhatsApp',
    phone: 'Phone',
    hours: 'Business Hours',
    hoursText: 'Please contact us for availability',
    form: {
      name: 'Your Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try WhatsApp instead.',
    },
  },
  // Footer
  footer: {
    contact: 'Contact',
    phone: '+66 89 999 5677',
    location: 'Chiang Mai, Northern Thailand',
    copyright: '© 2026 Amporn Tour. All rights reserved.',
  },
  // WhatsApp Messages
  whatsapp: {
    message: 'Hello, I found Amporn Tour through your website and would like to ask about tours in Chiang Mai.',
  },
};

export function getTranslation(key: string): string {
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
