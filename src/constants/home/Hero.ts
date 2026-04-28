export type HeroSlide = {
  id: number;
  image: string;
  alt: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/images/home/hero/hero-1.webp",
    alt: "Agriculture and Eco Farming - slide 1",
  },
  {
    id: 2,
    image: "/images/home/hero/hero-2.webp",
    alt: "Agriculture and Eco Farming - slide 2",
  },
  {
    id: 3,
    image: "/images/home/hero/hero-3.webp",
    alt: "Agriculture and Eco Farming - slide 3",
  },
];

export const HERO_CONTENT = {
  badge: "Welcome to Agrios Farming",
  title: "Agriculture & Eco Farming",
  description:
    "We grow the finest organic produce using sustainable farming practices. From seed to harvest, quality and nature go hand in hand at Agrios.",
  cta: {
    label: "Discover More",
    href: "/about",
  },
};
