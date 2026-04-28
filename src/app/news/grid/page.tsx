import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import NewsGrid from "@/components/sections/news/NewsGrid";
import { ALL_NEWS } from "@/constants/shared/newsCard";

// ─── SEO ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "News Grid",
  description:
    "Browse all Agrios news and articles in a grid layout — agriculture, organic farming, and sustainable food production.",
  openGraph: {
    title: "News Grid | Agrios Agriculture Farming",
    description: "All news and articles from Agrios.",
    images: ["/images/home/news/news-1.webp"],
  },
  alternates: { canonical: "/news/grid" },
};

// ─── Page ─────────────────────────────────────────────────
export default function NewsGridPage() {
  return (
    <main>
      <PageHero
        title="News Grid"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: "News Grid" },
        ]}
      />
      <NewsGrid articles={ALL_NEWS} />
    </main>
  );
}
