// ─── Services Page Constants ──────────────────────────────
// كل البيانات في مكان واحد — الـ components لا تعرف أي نص

import { Tractor, Leaf, ShoppingBasket } from "lucide-react";
import { ServicesSectionData } from "@/types/Service";

export const SERVICES_PAGE: ServicesSectionData = {
  badge: "Our Services",
  title: "What We Offer",
  services: [
    {
      id: 1,
      title: "Agriculture Products",
      image: "/images/services/service-01.webp",
      imageAlt: "Agriculture products field overview",
      icon: "/images/home/services/services-section-icon-1.svg",
      iconAlt: "Agriculture products icon",
      href: "/services/agriculture-products",
    },
    {
      id: 2,
      title: "Organic Products",
      image: "/images/services/service-02.webp",
      imageAlt: "Organic products close up",
      icon: "/images/home/services/services-section-icon-2.svg",
      iconAlt: "Organic products icon",
      href: "/services/organic-products",
    },
    {
      id: 3,
      title: "Fresh Vegetables",
      image: "/images/services/service-03.webp",
      imageAlt: "Fresh vegetables harvest",
      icon: "/images/home/services/services-section-icon-3.svg",
      iconAlt: "Fresh vegetables icon",
      href: "/services/fresh-vegetables",
    },
    {
      id: 4,
      title: "Dairy Products",
      image: "/images/services/service-04.webp",
      imageAlt: "Dairy products farm",
      icon: "/images/home/services/services-section-icon-4.svg",
      iconAlt: "Dairy products icon",
      href: "/services/dairy-products",
    },
  ],
};

// PageHero
export const SERVICES_HERO = {
  title: "Services",
  backgroundImage: "/bg-hero.webp",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Services" }],
};

// Video Section — نفس الـ VideoSection المشترك بس بـ title مختلف
export const SERVICES_VIDEO = {
  title: "Agriculture Matters to the Future of Development",
  backgroundSrc: "/videos/farm-background.mp4",
  videoSrc: "/videos/farm-background.mp4",
  watchLabel: "Watch our video",
};

// Partners / Brands Strip
export const PARTNERS = [
  {
    id: "wheat",
    label: "Quality Wheat",
    logo: "/images/services/partner/partner-1.webp",
  },
  {
    id: "agro",
    label: "Agro",
    logo: "/images/services/partner/partner-2.webp",
  },
  {
    id: "ferm",
    label: "The Ferm",
    logo: "/images/services/partner/partner-3.webp",
  },
  {
    id: "rices",
    label: "Natural Rices",
    logo: "/images/services/partner/partner-4.webp",
  },
  {
    id: "agric",
    label: "Agric",
    logo: "/images/services/partner/partner-5.webp",
  },
];

// Service Tabs (Quality Standards / Organic Farming / Agriculture Products)
export type ServiceTab = {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
};

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "quality",
    label: "Quality Standards",
    image: "/images/services/tab/serviceTab-1.webp",
    imageAlt: "Quality standards — fresh tomatoes harvest",
  },
  {
    id: "organic",
    label: "Organic Farming",
    image: "/images/services/tab/serviceTab-2.webp",
    imageAlt: "Organic farming — farmer in greenhouse",
  },
  {
    id: "agriculture",
    label: "Agriculture Products",
    image: "/images/services/tab/serviceTab-3.webp",
    imageAlt: "Agriculture products — fresh vegetables",
  },
];

// What We Do Section
export const WHAT_WE_DO = {
  badge: "What We Do",
  title: "Healthy Food for Good Growth",
  description1:
    "At Agrios, we cultivate the finest organic produce using sustainable practices that work in harmony with nature. Our farms are certified organic and pesticide-free.",
  description2:
    "From seed to harvest, every step is guided by respect for the land and dedication to quality, ensuring only the best reaches your table.",
  image: {
    src: "/images/services/fancy-image-03.webp",
    alt: "Farmer holding fresh organic vegetables",
  },
  features: [
    {
      id: "harvesting",
      label: "Harvesting",
      icon: "/images/services/do/Vector-1.svg",
      color: "#4BAF47",
    },
    {
      id: "maintenance",
      label: "Maintenance",
      icon: "/images/services/do/Vector-2.svg",
      color: "#EEC044",
    },
    {
      id: "fencing",
      label: "Fencing",
      icon: "/images/services/do/Vector-1.svg",
      color: "#EEC044",
    },
  ],
};

// CTA Banner
export const SERVICES_CTA = {
  badge: "Agriculture Market Leaders",
  title: "We're popular in agriculture market globally",
  buttonLabel: "Discover More",
  buttonHref: "/about",
  backgroundImage: "/images/services/cta-background.svg",
};
