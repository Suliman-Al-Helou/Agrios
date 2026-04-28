import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import NewsList from "@/components/sections/news/NewsList";
import NewsSidebar from "@/components/sections/news/NewsSidebar";
import {
  NEWS_ARTICLES,
  LATEST_POSTS,
  CATEGORIES,
  TAGS,
} from "@/constants/shared/newsCard";

// ─── SEO ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "Stay updated with the latest news, articles, and insights from Agrios on agriculture, organic farming, and sustainable food production.",
  keywords: [
    "agriculture news",
    "farming blog",
    "organic farming",
    "food production",
  ],
  openGraph: {
    title: "News & Blog | Agrios Agriculture Farming",
    description: "Latest news and articles on agriculture and organic farming.",
    images: ["/images/news/news-1.svg"],
  },
  alternates: { canonical: "/news" },
};

// ─── Page ─────────────────────────────────────────────────
export default function NewsPage() {
  return (
    <main>
      <PageHero
        title="Our Blog"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-10 md:flex-row lg:items-start">
            <div className="flex-1">
              <NewsList articles={NEWS_ARTICLES} />
            </div>
            <div className="w-full md:w-72">
              <NewsSidebar
                latestPosts={LATEST_POSTS}
                categories={CATEGORIES}
                tags={TAGS}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
