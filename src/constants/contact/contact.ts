// ─── Hero ─────────────────────────────────────────────────
export const CONTACT_PAGE_HERO = {
  title: "Contact",
  backgroundImage: "/bg-hero.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ],
};

// ─── Info Cards ───────────────────────────────────────────
export type ContactCard = {
  title: string;
  bgColor: string;
  description?: string;
  phone?: string;
  email?: string;
  workTime?: string;
  address?: string;
  delay?: number;
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: "About",
    description:
      "Lorem ipsum is simply free text used by copytypinh refreshing. Neque porro est qui",
    bgColor: "bg-[#4BAF47]",
  },
  {
    title: "Contact",
    phone: "+972 59 287 7251",
    email: "sulimanalhellou@gmail.com",
    workTime: "Mon - Fri: 7:00 am - 6:00 pm",
    bgColor: "bg-[#C5CE38]",
  },
  {
    title: "Address",
    address: "66 Broklun Road Golden Street, New Your United States of Ameriaca",
    bgColor: "bg-[#EEC044]",
  },
];

// ─── Map ──────────────────────────────────────────────────
export const CONTACT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0!2d34.4667!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzAwLjAiTiAzNMKwMjgnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890";