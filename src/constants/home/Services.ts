import { ServicesSectionData } from "@/types/Service";

export const HOME_SERVICES: ServicesSectionData = {
  badge: "Our Services",
  title: "What We Offer",

  services: [
    {
      id: 1,
      title: "Agriculture Products",
      image: "/images/home/services/services-section-1.webp",
      imageAlt: "Agriculture products field overview",
      icon: "/images/home/services/services-section-icon-1-optimized.svg",
      iconAlt: "Agriculture products icon",
      href: "/services/agriculture-products",
    },
    {
      id: 2,
      title: "Organic Products",
      image: "/images/home/services/services-section-2.webp",
      imageAlt: "Organic products close up",
      icon: "/images/home/services/services-section-icon-2-optimized.svg",
      iconAlt: "Organic products icon",
      href: "/services/organic-products",
    },
    {
      id: 3,
      title: "Fresh Vegetables",
      image: "/images/home/services/services-section-3.webp",
      imageAlt: "Fresh vegetables harvest",
      icon: "/images/home/services/services-section-icon-3-optimized.svg",
      iconAlt: "Fresh vegetables icon",
      href: "/services/fresh-vegetables",
    },
    {
      id: 4,
      title: "Dairy Products",
      image: "/images/home/services/services-section-4.webp",
      imageAlt: "Dairy products farm",
      icon: "/images/home/services/services-section-icon-4-optimized.svg",
      iconAlt: "Dairy products icon",
      href: "/services/dairy-products",
    },
  ],
};