// ─── Section Content ──────────────────────────────────────
export const NEWS_CONTENT = {
  badge: "From the Blog",
  title: "News & Articles",
};

// ─── Type ─────────────────────────────────────────────────
export type NewsArticle = {
  id: number;
  title: string;
  image: string;
  imageGrid: string;
  imageAlt: string;
  date: string;
  author: string;
  comments: number;
  href: string;
  titleGrid: string;
  excerpt?: string;
  category?: string;
};

// ─── All 6 Articles ───────────────────────────────────────
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: "Bringing Food Production Back To Cities",
    image: "/images/news/news-1.webp",
    imageGrid: "/images/news/grid/newsGrid-1.webp",
    imageAlt: "Urban farming and food production in cities",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    href: "/news/bringing-food-production-back-to-cities",
    excerpt:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    category: "Agriculture",
    titleGrid: "Bringing Food Production Back To Cities",
  },
  {
    id: 2,
    title: "The Future of Farming, Smart Irrigation Solutions",
    image: "/images/news/news-2.webp",
    imageGrid: "/images/news/grid/newsGrid-2.webp",
    imageAlt: "Smart irrigation technology in modern farming",
    date: "12 August 2022",
    author: "Kevin Martin",
    comments: 3,
    href: "/news/future-of-farming-smart-irrigation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available.",
    category: "Farming",
    titleGrid: "The Future of Farming, Smart Irrigation Solutions",
  },
  {
    id: 3,
    title: "Agronomy and relation to Other Sciences",
    image: "/images/news/news-3.webp",
    imageGrid: "/images/news/grid/newsGrid-3.webp",
    imageAlt: "Agronomy science and research overview",
    date: "20 September 2022",
    author: "Kevin Martin",
    comments: 2,
    href: "/news/agronomy-and-other-sciences",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available.",
    category: "Organic",
    titleGrid: "Agronomy and relation to Other Sciences",
  },
  {
    id: 4,
    title: "We grow products with the organic farming",
    image: "/images/home/news/news-4.webp",
    imageGrid: "/images/news/grid/newsGrid-4.webp",
    imageAlt: "Organic farming products and harvest",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    href: "/news/organic-farming-products",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available.",
    category: "Organic",
    titleGrid: "We grow products with the organic farming",
  },
  {
    id: 5,
    title: "A Quick Solution to Low Milk Production in Zimbabwe",
    image: "/images/home/news/news-5.webp",
    imageGrid: "/images/news/grid/newsGrid-5.webp",
    imageAlt: "Dairy farming solutions in Zimbabwe",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    href: "/news/milk-production-zimbabwe",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available.",
    category: "Farming",
    titleGrid: "A Quick Solution to Low Milk Production in Zimbabwe",
  },
  {
    id: 6,
    title: "Winter wheat harvest organic gather nice moment",
    image: "/images/home/news/news-6.webp",
    imageGrid: "/images/news/grid/newsGrid-6.webp",
    imageAlt: "Winter wheat harvest in organic farm",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    href: "/news/winter-wheat-harvest",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available.",
    category: "Agriculture",
    titleGrid: "Winter wheat harvest organic gather nice moment",
  },
];
// ─── Sidebar ──────────────────────────────────────────────
export const LATEST_POSTS = NEWS_ARTICLES.slice(0, 3).map((a) => ({
  id: a.id,
  title: a.title,
  date: a.date,
  image: a.image,
  imageAlt: a.imageAlt,
  href: a.href,
}));

export const CATEGORIES = [
  {
    id: "agriculture",
    label: "Agriculture",
    href: "/news?category=agriculture",
  },
  { id: "farm", label: "Farm", href: "/news?category=farm" },
  { id: "farming", label: "Farming", href: "/news?category=farming" },
  {
    id: "vegetables",
    label: "Fresh Vegetables",
    href: "/news?category=vegetables",
  },
  { id: "harvest", label: "Harvest", href: "/news?category=harvest" },
  { id: "Organic", label: "Organic", href: "/news?category=organic" },
];

export const TAGS = [
  { id: "agriculture", label: "agriculture", href: "/news?tag=agriculture" },
  { id: "farming", label: "farming", href: "/news?tag=farming" },
  { id: "harvest", label: "harvest", href: "/news?tag=harvest" },
  { id: "organic", label: "organic", href: "/news?tag=organic" },
  { id: "vegetables", label: "vegetables", href: "/news?tag=vegetables" },
];
// ─── Helpers ──────────────────────────────────────────────
// الـ Home بيعرض 3 بس
export const HOME_NEWS = NEWS_ARTICLES.slice(0, 3);

// الـ Grid بيعرض كل الـ 6
export const ALL_NEWS = NEWS_ARTICLES;
