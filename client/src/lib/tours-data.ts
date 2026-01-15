/**
 * Tour Data - Complete tour packages with details, images, and pricing
 */

export interface TourImage {
  src: string;
  alt: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  images: TourImage[];
  activities: string[];
  packageIncludes: string[];
  packageExcludes?: string[];
  pickupTime: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  highlights: string[];
  itinerary: string;
  pricePerPerson: number;
  currency: string;
  seasonalNote?: string;
  paymentTerms?: string;
  cancellationPolicy?: string;
}

export const tours: Tour[] = [
  {
    id: 'doi-inthanon-trek-pha-dok-siew',
    title: 'Doi Inthanon National Park - Trek Pha Dok Siew',
    description: 'Experience the highest spot in Thailand with stunning mountain views, ancient temples, and nature trails. Visit the King\'s and Queen\'s Pagodas, explore local Hmong markets, and trek through the beautiful Pha Dok Siew nature trail.',
    shortDescription: 'Trek through Thailand\'s highest mountain with temple visits and waterfall exploration',
    heroImage: '/images/tour-pha-dok-siew-banner.jpg',
    images: [
      { src: '/images/real-pha-dok-siew-1.jpg', alt: 'Tour group at Pha Dok Siew waterfall trail' },
    ],
    activities: [
      'The Highest Spot in Thailand',
      'King\'s and Queen\'s Pagoda',
      'Hmong Market',
      'White Karen Village',
      'Wachirathan Waterfall',
      '2 hrs Trek Pha Dok Siew Nature Trail',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '07:00 - 07:30 AM',
    duration: '8-9 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Moderate',
    highlights: [
      'Visit Thailand\'s highest mountain peak at 2,565 meters',
      'Explore sacred King\'s and Queen\'s Pagodas with panoramic views',
      'Experience authentic Hmong culture and local markets',
      'Trek through pristine nature trails with waterfalls',
      'Visit White Karen Village to learn about local traditions',
    ],
    itinerary: 'Start early morning pickup from your hotel. Drive to Doi Inthanon National Park, visiting the highest point with stunning views. Explore the King\'s and Queen\'s Pagodas, visit the Hmong Market, and trek through the Pha Dok Siew nature trail. Stop at Wachirathan Waterfall and White Karen Village. Lunch included. Return to hotel by evening.',
    pricePerPerson: 1500,
    currency: 'THB',
    packageExcludes: ['Personal expenses', 'Drinks and snacks', 'Optional activities'],
    paymentTerms: '50% deposit required to confirm booking, balance due 3 days before tour',
    cancellationPolicy: 'Free cancellation up to 7 days before tour. 50% refund for 3-7 days. No refund within 3 days.',
  },
  {
    id: 'one-day-trek-elephant-care',
    title: 'One Day Trek & Elephant Care',
    description: 'Spend a day with rescued elephants in their natural habitat. Trek through lush forests, interact with elephants, enjoy bamboo rafting, and visit beautiful waterfalls. An ethical and memorable experience with proper animal care.',
    shortDescription: 'Trek and interact with elephants, bamboo rafting, and waterfall exploration',
    heroImage: '/images/tour-elephant-banner.jpg',
    images: [
      { src: '/images/real-elephant-feeding.jpg', alt: 'Feeding elephants in sanctuary' },
      { src: '/images/real-elephant-bathing.jpg', alt: 'Elephant bathing in river' },
      { src: '/images/real-elephant-group.jpg', alt: 'Group experience with elephants' },
      { src: '/images/real-elephant-rafting.jpg', alt: 'Bamboo rafting adventure' },
    ],
    activities: [
      'Elephant Care',
      'Trekking About 1 Hour',
      'Mae Wang Water Fall',
      'Bamboo Rafting',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '08:00 - 08:30 AM',
    duration: '8-9 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Easy to Moderate',
    highlights: [
      'Ethical elephant interaction and care experience',
      'Trek through pristine jungle forests',
      'Visit Mae Wang Waterfall',
      'Bamboo rafting on scenic river',
      'Learn about elephant conservation',
    ],
    itinerary: 'Morning pickup from hotel. Travel to elephant sanctuary for hands-on care experience. Trek through forest for about 1 hour. Visit Mae Wang Waterfall for swimming and relaxation. Enjoy bamboo rafting on the river. Lunch included. Return to hotel by evening.',
    pricePerPerson: 1800,
    currency: 'THB',
    packageExcludes: ['Personal expenses', 'Drinks and snacks', 'Optional activities'],
    paymentTerms: '50% deposit required to confirm booking, balance due 3 days before tour',
    cancellationPolicy: 'Free cancellation up to 7 days before tour. 50% refund for 3-7 days. No refund within 3 days.',
  },
  {
    id: 'doi-suthep-temple-hmong-village',
    title: 'Doi Suthep Temple & Hmong Village',
    description: 'Visit the most famous temple in Northern Thailand perched on a mountain. Explore the sacred Doi Suthep temple with 306 steps flanked by mythical Nagas, enjoy panoramic city views, and visit authentic Hmong villages with local crafts.',
    shortDescription: 'Visit iconic Doi Suthep temple and explore authentic Hmong mountain villages',
    heroImage: '/images/tour-doi-suthep-banner.jpg',
    images: [],
    activities: [
      'Doi Suthep Temple',
      'Hmong Village Market',
      'Local Craft Shops',
      'Panoramic City Views',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '08:00 - 08:30 AM',
    duration: '6-7 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Easy',
    highlights: [
      'Visit the most sacred temple in Northern Thailand',
      'Climb 306 steps flanked by mythical Naga balustrades',
      'Enjoy spectacular panoramic views of Chiang Mai city',
      'Explore authentic Hmong village culture and crafts',
      'Shop for traditional textiles and handicrafts',
    ],
    itinerary: 'Morning pickup from hotel. Drive to Doi Suthep Temple and climb the 306 steps to the golden pagoda. Explore the temple grounds and enjoy city views. Explore Hmong village markets and craft shops. Return to hotel by evening.',
    pricePerPerson: 900,
    currency: 'THB',
  },
  {
    id: 'chiang-rai-one-day-golden-triangle',
    title: 'Chiang Rai One Day & Golden Triangle',
    description: 'Explore Chiang Rai\'s most iconic temples including the stunning White Temple and Blue Temple. Visit the famous Golden Triangle where Thailand, Laos, and Myanmar meet. Experience hot springs, local culture, and boat trips along the Mae Khong River.',
    shortDescription: 'Explore Chiang Rai temples and the Golden Triangle border region',
    heroImage: '/images/tour-chiang-rai-banner.jpg',
    images: [],
    activities: [
      'Hot Spring',
      'White Temple',
      'Blue Temple',
      'Black Museum',
      'Karen Long Neck Village',
      'Golden Triangle',
      'Boat Trip Along Mae Khong River',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '07:00 - 07:30 AM',
    duration: '10-11 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Easy',
    highlights: [
      'Visit the famous White Temple with intricate white architecture',
      'Explore the Blue Temple with stunning blue interior',
      'Relax in natural hot springs',
      'Visit the unique Black Museum',
      'Experience Karen Long Neck Village culture',
      'Stand at the Golden Triangle where three countries meet',
      'Boat trip along the Mae Khong River',
    ],
    itinerary: 'Early morning pickup from hotel. Drive to Chiang Rai (about 3 hours). Visit hot springs, White Temple, Blue Temple, and Black Museum. Lunch included. Afternoon visit to Karen Long Neck Village and Golden Triangle. Boat trip on Mae Khong River. Return to Chiang Mai by evening.',
    pricePerPerson: 1700,
    currency: 'THB',
    packageExcludes: ['Personal expenses', 'Drinks and snacks', 'Optional activities'],
    paymentTerms: '50% deposit required to confirm booking, balance due 3 days before tour',
    cancellationPolicy: 'Free cancellation up to 7 days before tour. 50% refund for 3-7 days. No refund within 3 days.',
  },
  {
    id: 'chiang-rai-one-day',
    title: 'Chiang Rai One Day',
    description: 'Discover the charm of Chiang Rai with its famous temples and cultural sites. Visit the White Temple, Blue Temple, Black Museum, and hot springs. Experience local culture and enjoy optional visits to Karen Long Neck Village.',
    shortDescription: 'Full day exploration of Chiang Rai\'s temples and cultural attractions',
    heroImage: '/images/tour-chiang-rai-one-day-banner.jpg',
    images: [],
    activities: [
      'Hot Spring',
      'White Temple',
      'Blue Temple',
      'Black Museum',
      'Optional: Karen Long Neck Village',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '07:00 - 07:30 AM',
    duration: '8-9 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Easy',
    highlights: [
      'Visit the iconic White Temple with its unique architecture',
      'Explore the serene Blue Temple',
      'Experience the quirky Black Museum',
      'Relax in natural hot springs',
      'Optional cultural village visits',
    ],
    itinerary: 'Morning pickup from hotel. Drive to Chiang Rai. Visit hot springs, White Temple, Blue Temple, and Black Museum. Lunch included. Optional visit to Karen Long Neck Village. Return to Chiang Mai by evening.',
    pricePerPerson: 1300,
    currency: 'THB',
    packageExcludes: ['Personal expenses', 'Drinks and snacks', 'Optional activities'],
    paymentTerms: '50% deposit required to confirm booking, balance due 3 days before tour',
    cancellationPolicy: 'Free cancellation up to 7 days before tour. 50% refund for 3-7 days. No refund within 3 days.',
  },
  {
    id: 'doi-inthanon-trek-kew-mae-pan',
    title: 'Doi Inthanon National Park - Trek Kew Mae Pan',
    description: 'Experience the highest mountain in Thailand with the scenic Kew Mae Pan nature trail. Visit the King\'s and Queen\'s Pagodas, explore local markets, and trek through pristine forests with panoramic mountain views. Available November to May.',
    shortDescription: 'Trek the scenic Kew Mae Pan trail on Thailand\'s highest mountain',
    heroImage: '/images/tour-kew-mae-pan-banner.jpg',
    images: [
      { src: '/images/real-kew-mae-pan-1.jpg', alt: 'Tour group at Kew Mae Pan entrance' },
      { src: '/images/real-kew-mae-pan-2.jpg', alt: 'Mountain viewpoint with visitors' },
    ],
    activities: [
      'The Highest Spot in Thailand',
      'King\'s and Queen\'s Pagoda',
      'Hmong Market',
      'White Karen Village',
      'Wachirathan Waterfall',
      '2 hrs Trek Kew Mae Pan Nature Trail',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '07:00 - 07:30 AM',
    duration: '8-9 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Moderate',
    highlights: [
      'Trek the scenic Kew Mae Pan nature trail',
      'Visit Thailand\'s highest mountain peak',
      'Explore sacred King\'s and Queen\'s Pagodas',
      'Experience authentic Hmong culture',
      'Visit White Karen Village',
      'See Wachirathan Waterfall',
      'Enjoy panoramic mountain views',
    ],
    itinerary: 'Early morning pickup from hotel. Drive to Doi Inthanon National Park. Visit the highest point with panoramic views. Trek the Kew Mae Pan nature trail (2 hours). Visit King\'s and Queen\'s Pagodas, Hmong Market, and White Karen Village. Lunch included. Return to hotel by evening.',
    pricePerPerson: 1500,
    currency: 'THB',
    seasonalNote: 'Available November 1 - May 31',
  },
  {
    id: 'doi-inthanon-national-park',
    title: 'Doi Inthanon National Park',
    description: 'Experience Thailand\'s highest mountain with stunning views, sacred temples, and natural beauty. Visit the King\'s and Queen\'s Pagodas, explore Hmong markets, and discover White Karen villages.',
    shortDescription: 'Full day at Thailand\'s highest mountain with temples and local villages',
    heroImage: '/images/tour-doi-inthanon-banner.jpg',
    images: [
      { src: '/images/real-doi-inthanon-1.jpg', alt: 'Group at highest spot in Thailand sign' },
      { src: '/images/real-doi-inthanon-2.jpg', alt: 'King and Queen Pagodas with gardens' },
    ],
    activities: [
      'The Highest Spot in Thailand',
      'King\'s and Queen\'s Pagoda',
      'Hmong Market',
      'White Karen Village',
      'Wachirathan Waterfall',
    ],
    packageIncludes: [
      'Transportation',
      'Tourist Guide',
      'Entrance Ticket',
      'Accident Insurance',
      'Lunch',
    ],
    pickupTime: '07:00 - 07:30 AM',
    duration: '8-9 hours',
    groupSize: 'Small groups or private',
    difficulty: 'Easy to Moderate',
    highlights: [
      'Visit Thailand\'s highest mountain peak at 2,565 meters',
      'Explore sacred King\'s and Queen\'s Pagodas',
      'Experience authentic Hmong culture and markets',
      'Visit White Karen Village',
      'See beautiful Wachirathan Waterfall',
    ],
    itinerary: 'Morning pickup from hotel. Drive to Doi Inthanon National Park. Visit the highest point with panoramic views. Explore the King\'s and Queen\'s Pagodas, Hmong Market, and White Karen Village. Stop at Wachirathan Waterfall. Lunch included. Return to hotel by evening.',
    pricePerPerson: 1400,
    currency: 'THB',
  },
];

export function getTourById(id: string): Tour | undefined {
  return tours.find(tour => tour.id === id);
}

export function getAllTours(): Tour[] {
  return tours;
}
