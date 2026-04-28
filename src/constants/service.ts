// ─── Hero ─────────────────────────────────────────────────
export const SERVICES_PAGE_HERO = {
  title: "Services",
  background: {
    src: "/images/services/services-hero-bg.jpg",
    alt: "Agriculture services hero background",
  },
};

// ─── Categories Sidebar ───────────────────────────────────
export const SERVICE_CATEGORIES = [
  { id: "agriculture-products", label: "Agriculture Products", href: "/services/agriculture-products" },
  { id: "organic-products",     label: "Organic Products",     href: "/services/organic-products"     },
  { id: "fresh-vegetables",     label: "Fresh Vegetables",     href: "/services/fresh-vegetables"     },
  { id: "dairy-products",       label: "Dairy Products",       href: "/services/dairy-products"       },
  { id: "harvest",              label: "Harvest",              href: "/services/harvest"              },
];

// ─── Help Card ────────────────────────────────────────────
export const HELP_CARD = {
  title: "Need Help?",
  description:
    "Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.",
  phone: "+972 59 287 7251",
  phoneHref: "tel:+972592877251",
  cta: {
    label: "Start Shopping Now",
    href: "/shop",
  },
};

// ─── Services Data (dynamic per serviceId) ────────────────
export type ServiceData = {
  id: string;
  title: string;
  metaDescription: string;
  mainImage: { src: string; alt: string };
  icon: { src: string; alt: string };
  description: string[];
  galleryImages: { src: string; alt: string }[];
  benefits: {
    title: string;
    description: string;
    points: string[];
  };
  faq: { id: string; question: string; answer: string }[];
};

export const SERVICES_DATA: Record<string, ServiceData> = {
  "agriculture-products": {
    id: "agriculture-products",
    title: "Agriculture Products",
    metaDescription:
      "Explore our premium agriculture products including grains, crops, and farming solutions at Agrios.",
    mainImage: {
      src: "/agriculture-product.webp",
      alt: "Farmer harvesting rice from flooded field",
    },
    icon: { src: "/images/home/services/services-section-icon-1.svg", alt: "Agriculture products icon" },
    description: [
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quiaquaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quisenim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever sincethe 1500s.",
      ".It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    ],
    galleryImages: [
      { src: "/images/services/service-01.webp", alt: "Agriculture hay bales in field" },
      { src: "/images/services/service-02.webp", alt: "Farmer picking fresh produce" },
    ],
    benefits: {
      title: "Our Benefits",
      description: `It has survived not only five centuries em simply dummy text. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum.`,
      points: [
        "Nsectetur cing elit.",
        "Suspe ndisse suscipit sagittis leo.",
        "Entum estibulum dignissim posuere.",
        "Lorem Ipsum on the tend to repeat.",
      ],
    },
    faq: [
      { id: "faq-1", question: "World's hottest destinations for vegans", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-2", question: "Let's grow naturally and live naturally", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-3", question: "Best vegetables for your healthy hair", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
    ],
  },

  "organic-products": {
    id: "organic-products",
    title: "Organic Products",
    metaDescription:
      "Discover our certified organic products grown with sustainable farming practices at Agrios.",
    mainImage: {
      src: "/agriculture-product.webp",
      alt: "Fresh organic vegetables and fruits",
    },
    icon: { src: "/images/home/services/services-section-icon-1.svg", alt: "Organic products icon" },
    description: [
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printing and type setting Ipsum take a look at our round.",
    ],
    galleryImages: [
      { src: "/images/services/service-01.webp", alt: "Organic farm overview" },
      { src: "/images/services/service-02.webp", alt: "Fresh organic produce" },
    ],
    benefits: {
      title: "Our Benefits",
      description: "It has survived not only five centuries em simply dummy text. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum.",
      points: [
        "100% certified organic.",
        "No harmful pesticides.",
        "Sustainably sourced.",
        "Fresh and nutritious.",
      ],
    },
    faq: [
      { id: "faq-1", question: "What makes our products organic?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-2", question: "How are organic products certified?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-3", question: "Benefits of organic farming", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
    ],
  },

  "fresh-vegetables": {
    id: "fresh-vegetables",
    title: "Fresh Vegetables",
    metaDescription:
      "Farm-fresh vegetables delivered straight from our fields to your table at Agrios.",
    mainImage: {
      src: "/agriculture-product.webp",
      alt: "Fresh vegetables harvest in field",
    },
    icon: { src: "/images/home/services/services-section-icon-1.svg", alt: "Fresh vegetables icon" },
    description: [
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printing and type setting Ipsum take a look at our round.",
    ],
    galleryImages: [
      { src: "/images/services/service-01.webp", alt: "Fresh green vegetables" },
      { src: "/images/services/service-02.webp", alt: "Vegetable farm rows" },
    ],
    benefits: {
      title: "Our Benefits",
      description: "It has survived not only five centuries em simply dummy text. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum.",
      points: [
        "Harvested fresh daily.",
        "Rich in vitamins and minerals.",
        "Grown without chemicals.",
        "Delivered within 24 hours.",
      ],
    },
    faq: [
      { id: "faq-1", question: "How fresh are the vegetables?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-2", question: "Do you offer seasonal vegetables?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-3", question: "How to store fresh vegetables?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
    ],
  },

  "dairy-products": {
    id: "dairy-products",
    title: "Dairy Products",
    metaDescription:
      "Premium dairy products from our certified farms including milk, cheese, and more at Agrios.",
    mainImage: {
      src: "/agriculture-product.webp",
      alt: "Fresh dairy products from farm",
    },
    icon: { src: "/images/home/services/services-section-icon-1.svg", alt: "Dairy products icon" },
    description: [
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printing and type setting Ipsum take a look at our round.",
    ],
    galleryImages: [
      { src: "/images/services/service-01.webp", alt: "Fresh milk dairy farm" },
      { src: "/images/services/service-02.webp", alt: "Dairy products variety" },
    ],
    benefits: {
      title: "Our Benefits",
      description: "It has survived not only five centuries em simply dummy text. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum.",
      points: [
        "Fresh from the farm daily.",
        "No artificial additives.",
        "Rich in calcium and protein.",
        "Quality tested and certified.",
      ],
    },
    faq: [
      { id: "faq-1", question: "Are your dairy products pasteurized?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-2", question: "Do you offer lactose-free options?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-3", question: "How long do dairy products last?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
    ],
  },

  "harvest": {
    id: "harvest",
    title: "Harvest",
    metaDescription:
      "Professional harvest services and seasonal crops from Agrios expert farming team.",
    mainImage: {
      src: "/agriculture-product.webp",
      alt: "Harvest season crops in field",
    },
    icon: { src: "/images/home/services/services-section-icon-1.svg", alt: "Harvest icon" },
    description: [
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printing and type setting Ipsum take a look at our round.",
    ],
    galleryImages: [
      { src: "/images/services/service-01.webp", alt: "Harvest season overview" },
      { src: "/images/services/service-02.webp", alt: "Crops being harvested" },
    ],
    benefits: {
      title: "Our Benefits",
      description: "It has survived not only five centuries em simply dummy text. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum.",
      points: [
        "Timely harvest scheduling.",
        "Modern harvesting equipment.",
        "Minimal post-harvest loss.",
        "Expert farming team.",
      ],
    },
    faq: [
      { id: "faq-1", question: "When is the harvest season?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-2", question: "What crops do you harvest?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
      { id: "faq-3", question: "How do you ensure harvest quality?", answer: "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisi." },
    ],
  },
};