import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

// ─── Logo ────────────────────────────────────────────────
export const LOGO = {
  src: "/images/home/navbar/logo.webp",
  alt: "Agrios Agriculture Farming Logo",
  width: 170,
  height: 50,
};

// ─── Social Links ─────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    id: "twitter",
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    id: "facebook",
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    id: "pinterest",
    icon: FaPinterestP,
    href: "https://pinterest.com",
    label: "Pinterest",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
];

// ─── Contact Info ─────────────────────────────────────────
export const CONTACT_INFO = [
  {
    id: "phone",
    icon: Phone,
    label: "Call anytime",
    value: "+972 59 287 7251",
    href: "tel:+972592877251",
  },
  {
    id: "email",
    icon: Mail,
    label: "Send email",
    value: "sulimanalhellou@gmail.com",
    href: "mailto:sulimanalhellou@gmail.com",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Our location",
    value: "Palestine, Gaza",
    href: "https://maps.google.com/?q=Gaza,Palestine",
  },
];

// ─── Nav Menu Items ───────────────────────────────────────
export type MenuItem = {
  label: string;
  href: string;
  dropdown: { label: string; href: string }[] | null;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    dropdown: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/home-2" },
    ],
  },
  { label: "About", href: "/about", dropdown: null },
  {
    label: "Services",
    href: "/services",
    // navbar.ts — غير هاد
    dropdown: [
      { label: "Agriculture Products", href: "/services/agriculture-products" },
      { label: "Organic Products", href: "/services/organic-products" },
      { label: "Fresh Vegetables", href: "/services/fresh-vegetables" },
      { label: "Dairy Products", href: "/services/dairy-products" },
    ],
  },
  {
  label: "Projects",
  href: "/project",
  dropdown: [
    { label: "Easy Harvesting",    href: "/project/easy-harvesting"    },
    { label: "Agriculture Farming", href: "/project/agriculture-farming" },
    { label: "Ecological Farming",  href: "/project/ecological-farming"  },
    { label: "Organic Solutions",   href: "/project/organic-solutions"   },
    { label: "Fresh Products",      href: "/project/fresh-products"      },
    { label: "Healthy Food",        href: "/project/healthy-food"        },
  ],
},
  {
    label: "News",
    href: "/news",
    dropdown: [
      { label: "News Grid", href: "/news/grid" },
      { label: "Latest News", href: "/news/bringing-food-production-back-to-cities"  },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "Product 1", href: "/shop?category=agriculture" },
      { label: "Product 2", href: "/shop/apples" },
    ],
  },
  { label: "Contact", href: "/contact", dropdown: null },
];
