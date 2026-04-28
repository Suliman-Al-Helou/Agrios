// ─── Types ────────────────────────────────────────────────
export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  href: string;
  author: string;   // جديد
  comments: number; // جديد
};

// ─── Articles ─────────────────────────────────────────────
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "bringing-food-production",
    title: "Bringing Food Production Back To Cities",
    excerpt:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations ofpassages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    image: "/images/news/news-1.webp",
    imageAlt: "Hay bales in open field at sunset",
    date: "05 July 2022",
    category: "Agriculture",
    href: "/news/bringing-food-production",
        author: "John Doe",  // جديد
    comments: 5, 
  },
  {
    id: "future-of-farming",
    title: "The Future of Farming, Smart Irrigation Solutions",
    excerpt:
      "passages of Lorem Ipsum available, but the majority have alteration in some injected or words whichpassages of Lorem Ipsum available, but the majority have alteration in some injected or words which",
    image: "/images/news/news-2.webp",
    imageAlt: "Family working together on organic farm",
    date: "12 August 2022",
    category: "Farming",
    href: "/news/future-of-farming",
        author: "John Doe",  // جديد
    comments: 5, 
  },
  {
    id: "agronomy-and-sciences",
    title: "Agronomy and relation to Other Sciences",
    excerpt:
      "don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, youdon’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    image: "/images/news/news-3.webp",
    imageAlt: "Farmer picking fresh flowers in field",
    date: "20 September 2022",
    category: "Organic",
    href: "/news/agronomy-and-sciences",
        author: "John Doe",  // جديد
    comments: 5, 
  },
];

