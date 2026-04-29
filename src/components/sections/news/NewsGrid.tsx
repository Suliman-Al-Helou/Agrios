import NewsCard from "@/components/shared/NewsCard";
import type { NewsArticle } from "@/constants/shared/newsCard";

export default function NewsGrid({ articles }: { articles: NewsArticle[] }) {
  return (
    <section className="bg-white py-20" aria-label="News grid">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard
              key={article.id}
              title={article.title}
              image={""}
              imageGrid={article.imageGrid}
              imageAlt={article.imageAlt}
              date={article.date}
              author={article.author}
              comments={article.comments}
              href={article.href}
              titleGrid={article.titleGrid}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
