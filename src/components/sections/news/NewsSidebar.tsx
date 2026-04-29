"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type {
  LATEST_POSTS,
  CATEGORIES,
  TAGS,
} from "@/constants/shared/newsCard";

type Props = {
  latestPosts: typeof LATEST_POSTS;
  categories: typeof CATEGORIES;
  tags: typeof TAGS;
};

// ─── Reusable Section Box ─────────────────────────────────
function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} className="rounded-2xl bg-[#F8F7F0] p-8 ">
      <h2 className="mb-4 text-base font-bold text-black   ">{title}</h2>
      {children}
    </motion.div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────
export default function NewsSidebar({ latestPosts, categories, tags }: Props) {
  const [search, setSearch] = useState("");

  return (
    <motion.aside
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="w-full shrink-0 space-y-6"
      aria-label="News sidebar"
    >
      {/* ── Search ── */}
      <motion.div variants={fadeUp} className="relative">
        <input
          id="blog-search"
          type="search"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-14 rounded-xl bg-[#EEC044] pl-6 pr-16 text-sm text-white outline-none placeholder:text-white transition-colors duration-200 focus:ring-2 focus:ring-[#EEC044] focus:ring-offset-2"
          aria-label="Search news articles"
        />
        <button
          aria-label="Submit search"
          className="absolute top-0 right-0 h-full w-14 rounded-r-xl text-white transition-all duration-200 hover:opacity-80 active:scale-95 flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </motion.div>

      {/* ── Latest Posts ── */}
      <SidebarSection title="Latest Posts" >
        <ul className="space-y-4 divide-y divide-gray-200" aria-label="Latest news articles">
          {latestPosts.map((post) => (
            <li
              key={post.id}
              className="pt-4 first:pt-0 hover:bg-white hover:rounded-lg transition-colors duration-200 p-2 -mx-2"
            >
              <Link href={post.href} className="group flex items-start gap-3">
                <div
                  className="relative shrink-0 overflow-hidden rounded-lg"
                  style={{ width: "75px", height: "65px" }}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority  
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="75px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#EEC044]" />
                    <span className="text-xs text-gray-400">
                      {/* by {post.author} */}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug font-semibold text-gray-800 transition-colors duration-200 group-hover:text-[#4BAF47]">
                    {post.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>

      {/* ── Categories ── */}
      <SidebarSection title="Categories">
        <ul className="space-y-2.5" aria-label="News categories">
          {categories.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="flex items-center gap-2 mb-4 text-sm text-gray-600 transition-colors duration-200 hover:text-[#4BAF47]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4BAF47]" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>

      {/* ── Tags ── */}
      <SidebarSection title="Tags">
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="News tags"
        >
          {tags.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              role="listitem"
              className="rounded-lg text-black bg-white px-4 py-2 text-xs font-medium   transition-all duration-200 hover:border-[#4BAF47] hover:bg-[#4BAF47] hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </SidebarSection>
    </motion.aside>
  );
}