import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES, LATEST_POSTS, CATEGORIES, TAGS } from "@/constants/shared/newsCard";
import PageHero from "@/components/shared/PageHero";
import NewsArticleClient from "@/app/news/[slug]/Newsarticleclient";

type Props = { params: Promise<{ slug: string }> };

// ─── Dynamic Metadata ─────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.href === `/news/${slug}`);
  if (!article) return { title: "Article Not Found | Agrios" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Agrios`,
      description: article.excerpt,
      images: [{ url: article.imageGrid, alt: article.imageAlt }],
    },
    alternates: { canonical: `/news/${slug}` },
  };
}

// ─── SSG ──────────────────────────────────────────────────
export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({
    slug: a.href.replace("/news/", ""),
  }));
}

// ─── Page ─────────────────────────────────────────────────
export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.href === `/news/${slug}`);
  if (!article) notFound();

  const related = NEWS_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <main>
      <PageHero
        title="Latest News"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: article.title },
        ]}
      />
      <NewsArticleClient
        article={article}
        related={related}
        latestPosts={LATEST_POSTS}
        categories={CATEGORIES}
        tags={TAGS}
      />
    </main>
  );
}