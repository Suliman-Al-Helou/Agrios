"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { staggerContainer, fadeUp, slideLeft } from "@/lib/animations";
import NewsSidebar from "@/components/sections/news/NewsSidebar";
import NewsCard from "@/components/shared/NewsCard";
import { User, MessageCircle } from "lucide-react";
import type {
  NewsArticle,
  LATEST_POSTS,
  CATEGORIES,
  TAGS,
} from "@/constants/shared/newsCard";

type Props = {
  article: NewsArticle;
  related: NewsArticle[];
  latestPosts: typeof LATEST_POSTS;
  categories: typeof CATEGORIES;
  tags: typeof TAGS;
};

// ─── Comment Form ─────────────────────────────────────────
function CommentForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <motion.div variants={fadeUp} className="mt-10">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">Leave a Comment</h2>
      <p className="mb-6 text-sm text-gray-500">
        Save my name, email, and website in this browser for the next time I
        comment. *
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-transparent bg-[#F8F7F0] px-4 py-3 text-sm transition outline-none placeholder:text-[#878680] focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-transparent bg-[#F8F7F0] px-4 py-3 text-sm transition outline-none placeholder:text-[#878680] focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Your Comment
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write Comment"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="h-[200px] w-full resize-none rounded-lg border border-transparent bg-[#F8F7F0] px-4 py-3 text-sm transition outline-none placeholder:text-[#878680] focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-[#4BAF47] px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600 active:scale-95"
        >
          Post Comment
        </button>
      </form>
    </motion.div>
  );
}

// ─── Main Article ─────────────────────────────────────────
function ArticleContent({
  article,
  related,
  tags,
}: Pick<Props, "article" | "related" | "tags">) {
  const SOCIAL = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaPinterestP, href: "https://pinterest.com", label: "Pinterest" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="min-w-0 flex-1 space-y-6"
    >
      {/* Hero Image */}
      <motion.div
        variants={fadeUp}
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ height: "340px" }}
      >
        <Image
          src={article.imageGrid}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 65vw"
        />
        <span className="absolute bottom-4 left-4 rounded-lg bg-[#4BAF47] px-5 py-2 text-xs font-bold text-white shadow">
          {article.date}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        className="space-y-5 text-sm leading-relaxed text-gray-500"
      >
        <div className="mb-3 flex items-center justify-start gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User size={16} className="text-yellow-500" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} className="text-yellow-500" />
            <span>
              {article.comments} Comment{article.comments > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        <p>{article.excerpt}</p>
        <p>{article.excerpt}</p>
        <p>{article.excerpt}</p>
      </motion.div>

      {/* Tags + Social */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6"
      >
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-gray-700">Tags:</span>
          {tags.slice(0, 2).map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className="rounded-lg border border-gray-200 bg-[#4BAF47] px-3 py-1.5 text-xs font-medium transition-all hover:border-[#4BAF47] hover:bg-green-600 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Share */}
        <div className="flex items-center gap-2" aria-label="Share article">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${label}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 hover:scale-110 hover:border-[#4BAF47] hover:text-[#4BAF47]"
            >
              <Icon size={13} />
            </Link>
          ))}
        </div>
      </motion.div>
      <motion.div variants={fadeUp} className="flex gap-5"> 
        <p className="bg-[#F8F7F0] p-12.5 rounded-2xl font-bold text-[20px] text-black">Agronomy and relation to Other Sciences</p>
        <p className="bg-[#F8F7F0] p-12.5 rounded-2xl font-bold text-[20px] text-black">Bringing Food Production Back To Cities</p>
      </motion.div>

      {/* Comment Form */}
      <CommentForm />
    </motion.div>
  );
}

// ─── Page Layout ──────────────────────────────────────────
export default function NewsArticleClient({
  article,
  related,
  latestPosts,
  categories,
  tags,
}: Props) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <ArticleContent article={article} related={related} tags={tags} />
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full shrink-0 lg:w-[300px]"
          >
            <NewsSidebar
              latestPosts={latestPosts}
              categories={categories}
              tags={tags}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
