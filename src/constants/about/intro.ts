// About Intro Section
type AboutContent = {
  badge: string;
  title: string;
};

export const ABOUT_CONTENT: AboutContent = {
  badge: "Get To Know Us",
  title: "The Best Agriculture Market",
};
export const ABOUT_INTRO = {
  subtitle:
    "There are many variations of passages of lorem available, but the majority have suffered alteration.",
  description:
    "At Agrios, we believe in farming that works with nature. Our certified organic practices ensure every product reaches you fresh, nutritious, and free from harmful chemicals.",
  checklist: [
    { id: "c1", text: "100% certified organic and pesticide-free products." },
    { id: "c2", text: "Sustainably farmed using eco-friendly irrigation." },
    { id: "c3", text: "Lorem ipsum on the tend to repeat." },
  ],
  cta: { label: "Discover More", href: "/contact" },
  images: {
    main: { src: "/images/about/contact/contact-1.svg", alt: "Agriculture field" },
    secondary: { src: "/images/about/contact/contact-2.svg", alt: "Farmer with crops" },
  },
};
