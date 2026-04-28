import type { FooterLink, NewsItem, ContactInfo } from "./footer.types";

export const FOOTER_EXPLORE_LINKS: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Meet the Farmers", href: "/farmers" },
  { label: "Latest News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NEWS_ITEMS: NewsItem[] = [
  {
    title: "Bringing Food Production Back To Cities",
    date: "July 5, 2022",
    href: "/news/food-production-cities",
  },
  {
    title: "The Future of Farming, Smart Irrigation Solutions",
    date: "July 5, 2022",
    href: "/news/smart-irrigation",
  },
];

export const FOOTER_CONTACT_INFO: ContactInfo = {
  phone: "+972 59 287 7251",
  email: "sulimanalhellou@gmail.com",
  address: "Gaza, Palestine",
  city: "Palestine",
};

export const FOOTER_SOCIAL_LINKS = [
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://pinterest.com", label: "Pinterest" },
  { href: "https://instagram.com", label: "Instagram" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];
