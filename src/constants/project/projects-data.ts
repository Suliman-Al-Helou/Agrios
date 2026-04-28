// ─── Types ────────────────────────────────────────────────
export type SocialPlatform = "twitter" | "facebook" | "pinterest" | "instagram";

export type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  description: string[];
  highlight: string;
  meta: {
    service: string;
    farmer: string;
    duration: string;
    location: string;
  };
  challenges: {
    points: string[];
    conclusion: string;
  };
  social: { platform: SocialPlatform; href: string; label: string }[];
};

// ─── Shared Data ──────────────────────────────────────────
const SHARED_DESCRIPTION = [
  "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelites port lacus quis enim var sed effictur turpis gila sed sit amet finibus eros. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  "The term translates When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelites port lacus quis enim var sed effictur turpis gila sed sit amet finibus eros.",
];

const SHARED_HIGHLIGHT =
  "Biophilia is the idea that humans possess an innate tendency to seek connections with nature. The term translates";

const SHARED_CHALLENGES = {
  points: [
    "Nemo enim ipsam voluptatem quia voluptas.",
    "Accusamus et iusto odio dignissimos ducimus.",
    "Nam liberto tempore, cum soluta nobis est elidend.",
    "Accusamus et iusto odio dignissimos ducimus.",
  ],
  conclusion:
    "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};

const SHARED_SOCIAL: { platform: SocialPlatform; href: string; label: string }[] = [
  { platform: "twitter",   href: "https://twitter.com",   label: "Twitter"   },
  { platform: "facebook",  href: "https://facebook.com",  label: "Facebook"  },
  { platform: "pinterest", href: "https://pinterest.com", label: "Pinterest" },
  { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
];

// ─── Projects Data ────────────────────────────────────────
export const PROJECTS_DATA: Record<string, Project> = {
  "easy-harvesting": {
    id: "easy-harvesting",
    title: "Easy Harvesting",
    image: "/images/project/projectid/hero-project.webp",
    imageAlt: "Easy harvesting — hay bales in open field",
    href: "/projects/easy-harvesting",
    description: SHARED_DESCRIPTION,
    highlight: SHARED_HIGHLIGHT,
    meta: { service: "Easy Harvesting", farmer: "Mike Hardson", duration: "4.5 Months", location: "Broklyn, New York" },
    challenges: SHARED_CHALLENGES,
    social: SHARED_SOCIAL,
  },
  "agriculture-farming": {
    id: "agriculture-farming",
    title: "Agriculture Farming",
    image: "/images/project/projectid/master-project-1.webp",
    imageAlt: "Agriculture farming — worker in rice paddy",
    href: "/projects/agriculture-farming",
    description: SHARED_DESCRIPTION,
    highlight: SHARED_HIGHLIGHT,
    meta: { service: "Agriculture Farming", farmer: "John Smith", duration: "6 Months", location: "California, USA" },
    challenges: SHARED_CHALLENGES,
    social: SHARED_SOCIAL,
  },
  "ecological-farming": {
    id: "ecological-farming",
    title: "Ecological Farming",
    image: "/images/project/projectid/master-project-2.webp",
    imageAlt: "Ecological farming — greenhouse vegetable rows",
    href: "/projects/ecological-farming",
    description: SHARED_DESCRIPTION,
    highlight: SHARED_HIGHLIGHT,
    meta: { service: "Ecological Farming", farmer: "Sarah Green", duration: "3 Months", location: "Oregon, USA" },
    challenges: SHARED_CHALLENGES,
    social: SHARED_SOCIAL,
  },
  "organic-solutions": {
    id: "organic-solutions",
    title: "Organic Solutions",
    image: "/images/project/projectid/master-project-3.webp",
    imageAlt: "Organic solutions — tractor at sunset",
    href: "/projects/organic-solutions",
    description: SHARED_DESCRIPTION,
    highlight: SHARED_HIGHLIGHT,
    meta: { service: "Organic Solutions", farmer: "David Brown", duration: "5 Months", location: "Texas, USA" },
    challenges: SHARED_CHALLENGES,
    social: SHARED_SOCIAL,
  },
  "fresh-products": {
    id: "fresh-products",
    title: "Fresh Products",
    image: "/images/project/projectid/master-project-4.webp",
    imageAlt: "Fresh products — sheep on farm",
    href: "/projects/fresh-products",
    description: SHARED_DESCRIPTION,
    highlight: SHARED_HIGHLIGHT,
    meta: { service: "Fresh Products", farmer: "Emma Wilson", duration: "4 Months", location: "Vermont, USA" },
    challenges: SHARED_CHALLENGES,
    social: SHARED_SOCIAL,
  },
  "healthy-food": {
    id: "healthy-food",
    title: "Healthy Food",
    image: "/images/projects/project-section-6.svg",
    imageAlt: "Healthy food — farmer tending rice crops",
    href: "/projects/healthy-food",
    description: SHARED_DESCRIPTION,
    highlight: SHARED_HIGHLIGHT,
    meta: { service: "Healthy Food", farmer: "Mike Hardson", duration: "4.5 Months", location: "Broklyn, New York" },
    challenges: SHARED_CHALLENGES,
    social: SHARED_SOCIAL,
  },
};

// ─── Helpers ──────────────────────────────────────────────
export const PROJECT_IDS = Object.keys(PROJECTS_DATA);

export function getSimilarProjects(currentId: string, count = 4): Project[] {
  return Object.values(PROJECTS_DATA)
    .filter((p) => p.id !== currentId)
    .slice(0, count);
}