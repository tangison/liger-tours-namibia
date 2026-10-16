/**
 * Liger Tours Namibia: central content module.
 * Every string below is real client content sourced from ligertoursnamibia.com
 * (retrieved 2026-10-16). No fabricated prices, testimonials, awards or numbers.
 */

export const CONTACT = {
  phoneDisplay: "+264 81 472 2552",
  phoneTel: "+264814722552",
  whatsapp: "https://wa.me/264814722552",
  email: "info@ligertoursnamibia.com",
  location: "Windhoek, Namibia",
  hours: "Reception hours: 7:30 AM - 11:00 PM",
} as const;

export const TAGLINE =
  "Discover Namibia with Liger Tours Namibia. Authentic experiences, unforgettable adventures and breathtaking landscapes.";

export const FOOTER_BLURB =
  "Liger Tours Namibia is a locally owned tour company passionate about sharing the beauty, culture, and wildlife of Namibia.";

export const TICKER_DESTINATIONS = [
  "Sossusvlei",
  "Etosha",
  "Swakopmund",
  "Damaraland",
  "Kalahari",
  "Spitzkoppe",
  "Fish River Canyon",
  "Waterberg",
  "Windhoek",
  "Lüderitz",
];

export type Tour = {
  slug: string;
  title: string;
  cardTitle: string;
  duration?: string;
  description: string;
  overview?: string;
  experience?: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const TOURS: Tour[] = [
  {
    slug: "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha",
    title: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe & Etosha",
    cardTitle: "Windhoek • Sossusvlei • Swakopmund • Spitzkoppe • Etosha",
    description:
      "Our signature Namibia journey combining desert dunes, coastal charm, granite peaks, and exceptional wildlife encounters.",
    highlights: ["Sossusvlei dunes", "Swakopmund coast", "Etosha safari"],
    image: "/images/net/tour-featured.webp",
    imageAlt: "Travellers walking a sandy road toward towering red dunes",
    featured: true,
  },
  {
    slug: "etosha-national-park-waterberg-tour",
    title: "Etosha National Park & Waterberg Tour",
    cardTitle: "Etosha National Park & Waterberg",
    duration: "3-day adventure",
    description:
      "Explore Etosha's famous wildlife and the scenic beauty of the Waterberg Plateau.",
    overview:
      "Experience two of Namibia's most iconic destinations on this exciting 3-day adventure. Discover the wildlife-rich plains of Etosha National Park and the dramatic red cliffs of Waterberg Plateau.",
    experience: [
      "Guided game drives in Etosha National Park",
      "Visits to famous waterholes",
      "Opportunities to see elephants, lions, rhinos, giraffes, and zebras",
      "Scenic exploration of Waterberg Plateau",
      "Sunset photography opportunities",
    ],
    highlights: [
      "Big game wildlife viewing",
      "Etosha's famous salt pan",
      "Waterberg landscapes",
      "Comfortable lodge accommodation",
    ],
    image: "/images/net/tour-etosha.webp",
    imageAlt: "A lion resting in the grass of Etosha National Park",
  },
  {
    slug: "kalahari-quiver-tree-forest-fish-river-canyon",
    title: "Kalahari, Quiver Tree Forest & Fish River Canyon",
    cardTitle: "Kalahari • Quiver Tree Forest • Fish River Canyon",
    description:
      "Journey through the red sands of the Kalahari and witness the dramatic landscapes of southern Namibia.",
    highlights: ["Kalahari Desert", "Quiver Tree Forest", "Fish River Canyon"],
    image: "/images/net/tour-kalahari.webp",
    imageAlt: "Quiver trees standing against a moody Kalahari sky",
  },
  {
    slug: "windhoek-sossusvlei-swakopmund-brandberg",
    title: "Windhoek, Sossusvlei, Swakopmund & Brandberg",
    cardTitle: "Windhoek • Sossusvlei • Swakopmund • Brandberg",
    description:
      "A perfect blend of desert scenery, Atlantic coast adventures, and the majestic Brandberg Mountain.",
    highlights: ["Desert landscapes", "Coastal activities", "Brandberg Mountain"],
    image: "/images/liger/desert-starry-sky.webp",
    imageAlt: "Star-filled desert night sky over the Namib",
  },
  {
    slug: "swakopmund-damaraland-owamboland-etosha",
    title: "Swakopmund, Damaraland, Owamboland & Etosha",
    cardTitle: "Swakopmund • Damaraland • Owamboland • Etosha",
    description:
      "Discover Namibia's diverse cultures, ancient rock landscapes, and world-class wildlife viewing.",
    highlights: ["Damaraland heritage", "Owambo culture", "Etosha wildlife"],
    image: "/images/net/tour-damaraland.webp",
    imageAlt: "Hazy mountain vistas of Damaraland's ancient landscapes",
  },
  {
    slug: "sossusvlei-swakopmund-tour",
    title: "Sossusvlei & Swakopmund Tour",
    cardTitle: "Sossusvlei & Swakopmund",
    description:
      "Ideal for travelers seeking Namibia's iconic dunes and coastal experiences in a shorter itinerary.",
    overview:
      "Perfect for travelers with limited time, this tour showcases Namibia's most famous desert and coastal destinations.",
    experience: [
      "Visit Sossusvlei and Deadvlei",
      "Climb the towering red dunes",
      "Travel through the Namib Desert",
      "Explore Swakopmund's seaside attractions",
      "Enjoy fresh Atlantic air and coastal scenery",
    ],
    highlights: [
      "Sossusvlei dunes",
      "Deadvlei clay pan",
      "Scenic desert roads",
      "Swakopmund coastal charm",
    ],
    image: "/images/net/tour-coast.webp",
    imageAlt: "Green ocean water meeting the dunes of the Namib coast",
  },
  {
    slug: "24-days-namibia-discovery-tour",
    title: "24 Days - Namibia Discovery Tour",
    cardTitle: "24 Days - Namibia Discovery",
    description:
      "A slower-paced itinerary allowing more time at each destination, from the Kalahari to the Zambezi Region.",
    overview:
      "A slower-paced itinerary allowing more time at each destination. Includes multiple game drives, boat cruises, cultural experiences, and leisure days.",
    highlights: [
      "Windhoek",
      "Kalahari",
      "Fish River Canyon",
      "Lüderitz",
      "Sossusvlei",
      "Swakopmund",
      "Cape Cross",
      "Spitzkoppe",
      "Damaraland",
      "Etosha National Park",
      "Rundu",
      "Divundu",
      "Zambezi Region",
    ],
    image: "/images/net/tour-discovery.webp",
    imageAlt: "Guests relaxing in camp chairs during a golden-hour sundowner",
  },
];

export type Activity = {
  slug: string;
  title: string;
  duration: string;
  intro: string;
  whatHappens: string[];
  highlights: string[];
  youMaySee?: string[];
};

export const ACTIVITIES: Activity[] = [
  {
    slug: "swakopmund-coastal-adventure",
    title: "Swakopmund Coastal Adventure",
    duration: "Full Day",
    intro: "A relaxed full day on Namibia's Atlantic coast, at the pace the town is loved for.",
    whatHappens: [
      "Travel along Namibia's scenic coastal route",
      "Visit Swakopmund's historic town center",
      "Walk along the beach and promenade",
      "Explore local shops and cafés",
      "Optional adventure activities can be arranged",
    ],
    highlights: [
      "Atlantic Ocean views",
      "Historic coastal architecture",
      "Fresh sea air",
      "Relaxed seaside atmosphere",
    ],
  },
  {
    slug: "spitzkoppe-hiking-experience",
    title: "Spitzkoppe Hiking Experience",
    duration: "Half Day",
    intro: "Granite arches, desert terrain and wide-open panoramas beneath the Matterhorn of Namibia.",
    whatHappens: [
      "Begin with a safety briefing",
      "Hike through granite formations and desert terrain",
      "Visit natural arches and scenic viewpoints",
      "Learn about local geology and history",
      "Enjoy panoramic views from elevated areas",
    ],
    highlights: [
      "Iconic granite landscapes",
      "Natural rock arches",
      "Desert hiking adventure",
      "Breathtaking panoramic views",
    ],
  },
  {
    slug: "bushmen-walk",
    title: "Step into Ancient Wisdom - The Bushmen Walk",
    duration: "3 Hours",
    intro: "Walk the bush with San guides and read the land the way their ancestors have for millennia.",
    whatHappens: [
      "Meet San guides and learn about their history",
      "Walk through the bush while identifying animal tracks",
      "Discover edible plants and traditional medicines",
      "Learn hunting and survival techniques",
      "Enjoy storytelling and demonstrations of ancient skills",
    ],
    highlights: [
      "Authentic cultural experience",
      "Traditional tracking techniques",
      "Medicinal plant knowledge",
      "Ancient survival wisdom",
    ],
  },
  {
    slug: "traditional-cooking-class",
    title: "Taste Namibia - Traditional Cooking Class",
    duration: "2-3 Hours",
    intro: "Cook, share and taste: the most direct route into Namibian hospitality.",
    whatHappens: [
      "Guests are welcomed with a traditional Namibian drink",
      "The host introduces local ingredients and cooking methods",
      "Participants prepare dishes such as pap, meat stews, and traditional side dishes",
      "Learn the cultural significance of each meal",
      "Enjoy the food together at the end of the class",
    ],
    highlights: [
      "Hands-on cooking experience",
      "Learn traditional recipes",
      "Taste authentic Namibian cuisine",
      "Great cultural interaction",
    ],
  },
  {
    slug: "city-township-tour",
    title: "City & Township Tour - Discover Windhoek",
    duration: "2-3 Hours",
    intro: "From the Christuskirche to Katutura: the whole story of Namibia's capital in one morning.",
    whatHappens: [
      "Visit Windhoek's historic city center",
      "Explore landmarks such as Christuskirche and the Independence Memorial Museum",
      "Drive through modern business districts",
      "Visit Katutura township",
      "Meet local vendors and learn about community life",
      "Taste local snacks (optional)",
    ],
    highlights: ["Namibian history and culture", "Local markets"],
  },
  {
    slug: "game-drive-windhoek",
    title: "Game Drive - Experience the Wild Near Windhoek",
    duration: "3-4 Hours",
    intro: "A short drive from the city, a private reserve, and Namibia's wildlife up close.",
    whatHappens: [
      "Guests are picked up from their accommodation in Windhoek",
      "A short drive takes them to a nearby private reserve",
      "The guide introduces Namibia's wildlife and conservation efforts",
      "The vehicle stops at key wildlife viewing areas",
      "Guests have opportunities to take photos and ask questions",
      "A refreshment stop is included before returning to Windhoek",
    ],
    highlights: ["Wildlife viewing near Windhoek", "Conservation introduction", "Refreshment stop included"],
    youMaySee: ["Giraffes", "Zebras", "Oryx", "Kudu", "Springbok", "Various bird species"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our itinerary was perfectly tailored to our interests. We loved that the team recommended both the iconic attractions and hidden gems that most tourists miss. The service was professional, friendly, and reliable from start to finish.",
    name: "David & Emma T.",
    location: "United Kingdom",
  },
  {
    quote:
      "From the moment we made our enquiry, we felt valued. Communication was quick, the planning was seamless, and our holiday exceeded every expectation. We can't wait to return to Namibia with Liger Tours Namibia!",
    name: "Michael R.",
    location: "Germany",
  },
  {
    quote:
      "Our trip to Namibia was nothing short of spectacular, and Liger Tours Namibia made every moment unforgettable. The itinerary was thoughtfully planned, the recommendations were excellent, and everything ran smoothly from beginning to end. We appreciated the personal attention and warm hospitality throughout our journey. We will definitely recommend Liger Tours Namibia to our friends and family in France.",
    name: "Sophie L.",
    location: "France",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Local Expertise",
    description:
      "Our guides have extensive knowledge of Namibia's history, wildlife, cultures, and hidden gems.",
  },
  {
    title: "Authentic Experiences",
    description:
      "From Bushmen walks and traditional cooking classes to township tours and desert adventures, we focus on genuine cultural encounters.",
  },
  {
    title: "Personalized Service",
    description:
      "We tailor our tours to suit couples, families, groups, and solo travelers.",
  },
  {
    title: "Comfort & Safety",
    description:
      "Your comfort and safety are our top priorities throughout every journey.",
  },
  {
    title: "Passion for Namibia",
    description:
      "We are committed to sharing the beauty and uniqueness of our country with visitors from around the world.",
  },
];

export const ABOUT_STORY = {
  lead: "At Liger Tours Namibia, we believe travel should be effortless, meaningful, and unforgettable.",
  paragraphs: [
    "We specialize in creating personalized travel experiences that showcase the very best of Namibia, from its breathtaking landscapes and extraordinary wildlife to its rich cultures and hidden gems.",
    "Founded by an Environmental Sciences graduate with a deep appreciation for nature and sustainable travel, Liger Tours Namibia is committed to creating personalized travel experiences that connect visitors with the heart of our country. From iconic destinations to hidden gems, every itinerary is thoughtfully planned to suit your interests, pace, and travel style.",
    "Behind every unforgettable journey is a small but dedicated team that shares a passion for Namibia and exceptional customer service. Our friendly and knowledgeable team works together to ensure every aspect of your trip is carefully planned and executed.",
    "As a company registered with the Namibia Tourism Board (NTB), we are committed to maintaining professional standards and providing reliable, high-quality travel services.",
    "Whether you're dreaming of the towering dunes of Sossusvlei, the wildlife of Etosha National Park, the dramatic Skeleton Coast, or authentic cultural encounters, we are committed to providing exceptional service, attention to detail, and experiences that leave lasting memories.",
  ],
  vision:
    "To become one of Namibia's most trusted and inspiring tour companies by delivering exceptional travel experiences that showcase the country's natural wonders, rich cultures, and warm hospitality.",
  mission:
    "To provide unforgettable, high-quality tours that connect travelers with the landscapes, wildlife, and people of Namibia while promoting responsible and sustainable tourism.",
  promise:
    "Whether you join us for a 3-hour game drive near Windhoek or a multi-day safari, we treat every journey with the same care.",
  whyWith: [
    "Experienced local guides",
    "Flexible tour options",
    "Unique cultural activities",
    "Wildlife and adventure experiences",
    "Comfortable transportation",
    "Friendly, personalized service",
  ],
};

/** Brand tokens, sampled directly from the proper client logo artwork
 *  (client-supplied master, 2026-10-16: olive tree, dusty-rose sun gradient,
 *  brush-script wordmark in terracotta rose on transparent black). */
export const BRAND_TOKENS = {
  olive: "#473E21",
  oliveHover: "#383017",
  rose: "#CC8484",
  roseHover: "#C47878",
  roseDeep: "#B37471",
  roseText: "#A15C57",
  sunLight: "#E4B4B4",
  sand: "#FAF7F0",
  cream: "#F3EDDE",
  dark: "#241C16",
  text: "#2B2614",
} as const;
