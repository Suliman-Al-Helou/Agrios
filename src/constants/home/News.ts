export const NEWS_CONTENT = {
  badge: "From the Blog",
  title: "News & Articles",
};

export type NewsArticle = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  comments: number;
  href: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: "Bringing Food Production Back To Cities",
    image: "/images/home/news/news-1.webp",
    imageAlt: "Urban farming and food production in cities",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    href: "/news/bringing-food-production-back-to-cities",
  },
  {
    id: 2,
    title: "The Future of Farming, Smart Irrigation Solutions",
    image: "/images/home/news/news-2.webp",
    imageAlt: "Smart irrigation technology in modern farming",
    date: "12 August 2022",
    author: "Kevin Martin",
    comments: 3,
    href: "/news/future-of-farming-smart-irrigation",
  },
  {
    id: 3,
    title: "Agronomy and relation to Other Sciences",
    image: "/images/home/news/news-3.webp",
    imageAlt: "Agronomy science and research overview",
    date: "20 September 2022",
    author: "Kevin Martin",
    comments: 2,
    href: "/news/agronomy-and-other-sciences",
  },
];
