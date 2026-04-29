// ─── Hero ─────────────────────────────────────────────────
export const PROJECTS_PAGE_HERO = {
  title: "Projects",
  backgroundImage: "/bg-hero.webp",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Projects" }],
};

// ─── Projects Grid ────────────────────────────────────────
export type Projects = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const PROJECTS_LIST: Projects[] = [
  {
    id: "easy-harvesting",
    title: "Easy Harvesting",
    image: "/images/project/hero/project-01.webp",
    imageAlt: "Easy harvesting — hay bales in open field",
    href: "/projects/easy-harvesting",
  },
  {
    id: "agriculture-farming",
    title: "Agriculture Farming",
    image: "/images/project/hero/project-02.webp",
    imageAlt: "Agriculture farming — worker in rice paddy",
    href: "/projects/agriculture-farming",
  },
  {
    id: "ecological-farming",
    title: "Ecological Farming",
    image: "/images/project/hero/project-03.webp",
    imageAlt: "Ecological farming — greenhouse vegetable rows",
    href: "/projects/ecological-farming",
  },
  {
    id: "organic-solutions",
    title: "Organic Solutions",
    image: "/images/project/hero/project-04.webp",
    imageAlt: "Organic solutions — tractor at sunset",
    href: "/projects/organic-solutions",
  },
  {
    id: "fresh-products",
    title: "Fresh Products",
    image: "/images/project/hero/project-05.webp",
    imageAlt: "Fresh products — sheep on farm",
    href: "/projects/fresh-products",
  },
  {
    id: "healthy-food",
    title: "Healthy Food",
    image: "/images/project/hero/project-06.webp",
    imageAlt: "Healthy food — farmer tending rice crops",
    href: "/projects/healthy-food",
  },
];
