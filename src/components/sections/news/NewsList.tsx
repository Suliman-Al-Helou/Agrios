"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "motion/react";
import { MessageCircle, ChevronRight  } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import type { NewsArticle } from "@/constants/shared/newsCard";

// ─── Article Card ─────────────────────────────────────────
function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <motion.article
      variants={fadeUp}
      className="border-b border-gray-100 pb-6 last:border-0 last:pb-0 "
    >
      <Link href={article.href} className="group block ">
        {/* Image */}
        <div
          className="relative w-full overflow-hidden rounded-2xl "
          style={{ height: "300px" }}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <span className="absolute bottom-4 left-4 z-10 rounded-lg bg-[#4BAF47] px-6 py-2 text-xs font-bold text-white shadow">
            {article.date}
          </span>
        </div>

        {/* Meta */}
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#EEC044]" />
            <span>By {article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle size={15} className="text-[#EEC044]" />
            <span>{article.comments} Comments</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-black transition-colors duration-300 group-hover:text-[#4BAF47]">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {article.excerpt}
        </p>

        {/* Read More */}
        <p className="mt-4 mb-4 font-bold text-black underline-offset-4 decoration-[#4BAF47] decoration-2 group-hover:underline">
          Read More
        </p>
      </Link>
    </motion.article>
  );
}

// ─── Pagination ───────────────────────────────────────────
function PaginationInner() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <nav aria-label="Blog pagination" className="mt-10 flex gap-2">
      {[1, 2, 3].map((page) => (
        <Link
          key={page}
          href={`/news?page=${page === 3 ? currentPage + 1 : page}`} // لو ضغط على السهم يروح للصفحة التالية
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-110 ${
            page === currentPage
              ? "bg-[#4BAF47] text-white shadow-lg"
              : "border border-gray-200 bg-white text-gray-600 hover:border-[#4BAF47] hover:text-[#4BAF47]"
          }`}
        >
          {/* هنا الشرط: لو الرقم 3 اعرض السهم، غير هيك اعرض الرقم */}
          {page === 3 ? (
      <ChevronRight size={20}/>
          ) : (
            page
          )}
        </Link>
      ))}
    </nav>
  );
}

// ─── Export ───────────────────────────────────────────────
export default function NewsList({ articles }: { articles: NewsArticle[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="min-w-0 flex-1 space-y-12"
    >
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}

      <Suspense>
        <PaginationInner />
      </Suspense>
    </motion.div>
  );
}