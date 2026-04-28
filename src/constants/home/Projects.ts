export const PROJECTS_CONTENT = {
  badge: "Recently completed",
  title: "Explore Projects",
};

export type Project = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Easy Harvesting",
    image: "/images/home/projects/project-section-1.webp",
    imageAlt: "Easy harvesting project overview",
    href: "/projects/easy-harvesting",
  },
  {
    id: 2,
    title: "Agriculture Farming",
    image: "/images/home/projects/project-section-2.webp",
    imageAlt: "Agriculture farming project overview",
    href: "/projects/agriculture-farming",
  },
  {
    id: 3,
    title: "Ecological Farming",
    image: "/images/home/projects/project-section-3.webp",
    imageAlt: "Ecological farming project overview",
    href: "/projects/ecological-farming",
  },
  {
    id: 4,
    title: "Organic Solutions",
    image: "/images/home/projects/project-section-1.webp  ",
    imageAlt: "Organic solutions project overview",
    href: "/projects/organic-solutions",
  },
];
