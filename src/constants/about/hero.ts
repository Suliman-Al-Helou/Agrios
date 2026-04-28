// PageHero
export interface HeroContent {
  title: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
  backgroundImage: string;
}

export const ABOUT_HERO: HeroContent = {
  title: "About",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About" }
  ],
  backgroundImage: "/bg-hero.webp"
};