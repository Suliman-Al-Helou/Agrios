import { NEWS_CONTENT, NEWS_ARTICLES } from "@/constants/home/News";
import NewsCard from "@/components/shared/NewsCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NewsSection() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Header — مكون مشترك */}
        <SectionHeader badge={NEWS_CONTENT.badge} title={NEWS_CONTENT.title} />

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {NEWS_ARTICLES.map((article, index) => (
            <NewsCard
              key={article.id}
              title={article.title}
              image={article.image}
              imageGrid={""}
              imageAlt={article.imageAlt}
              date={article.date}
              author={article.author}
              comments={article.comments}
              href={article.href}
              titleGrid={""}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
