"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, Star } from "lucide-react";
import { staggerCards, cardAnimation, fadeUp } from "@/lib/animations";
import { useCartStore } from "@/store/cartStore";
import type { Product, ShopCategory } from "@/constants/shop/products";
import { SORT_OPTIONS, PRICE_MIN, PRICE_MAX } from "@/constants/shop/products";

// ─── Product Card ──────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      imageAlt: product.imageAlt,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.div variants={cardAnimation}>
      <Link
        href={`/shop/listing/${product.id}`}
        className="group block overflow-hidden rounded-lg bg-white  shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        aria-label={`View product: ${product.name}`}
      >
        {/* Image */}
        <div className="relative flex h-48  items-center justify-center bg-[#F5F5F0] overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={270}
            height={160}
            className="object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Info */}
        <div className="p-4">
          {/* Name */}
          <h3 className="mb-1 font-bold text-gray-900 transition-colors group-hover:text-[#4BAF47]">
            {product.name}
          </h3>

          {/* Price + Star row */}
          <div className="flex items-end justify-between">
            <span className="text-sm font-bold text-[#4BAF47]">
              ${product.price.toFixed(2)}
            </span>
            <Star size={14} className="fill-[#EEC044] text-[#EEC044]" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Sidebar ───────────────────────────────────────────────
function Sidebar({
  categories,
  activeCategory,
  onCategory,
  priceRange,
  onPriceRange,
  onApply,
}: {
  categories: ShopCategory[];
  activeCategory: string;
  onCategory: (id: string) => void;
  priceRange: number;
  onPriceRange: (v: number) => void;
  onApply: () => void;
}) {
  return (
    <aside className="w-[240px] md:shrink-0 space-y-6" aria-label="Shop filters">

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-md bg-[#EEC044] px-4 py-3 text-sm text-white placeholder:text-white/80 outline-none"
          aria-label="Search products"
        />
      </div>

      {/* Price */}
      <div className="rounded-md border border-gray-100 p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-800">Price</h3>
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={priceRange}
          onChange={(e) => onPriceRange(Number(e.target.value))}
          className="w-full accent-[#4BAF47]"
          aria-label={`Maximum price: $${priceRange}`}
        />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            ${PRICE_MIN} — ${priceRange}
          </span>
          <button
            onClick={onApply}
            className="rounded bg-[#4BAF47] px-4 py-1.5 text-xs font-bold text-white hover:bg-green-600 transition-colors"
            aria-label="Apply price filter"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-md border border-gray-100 p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-800">Categories</h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => onCategory("all")}
              className={`flex w-full items-center justify-between py-2 text-sm border-b border-gray-100 transition-colors ${
                activeCategory === "all"
                  ? "font-semibold text-[#4BAF47]"
                  : "text-gray-600 hover:text-[#4BAF47]"
              }`}
              aria-pressed={activeCategory === "all"}
            >
              <span>All Products</span>
              <ChevronRight size={14} className="text-gray-400" />
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onCategory(cat.id)}
                className={`flex w-full items-center justify-between py-2 text-sm border-b border-gray-100 transition-colors ${
                  activeCategory === cat.id
                    ? "font-semibold text-[#4BAF47]"
                    : "text-gray-600 hover:text-[#4BAF47]"
                }`}
                aria-pressed={activeCategory === cat.id}
              >
                <span>{cat.label}</span>
                <ChevronRight size={14} className="text-gray-400" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

// ─── Pagination ────────────────────────────────────────────
function Pagination({
  total,
  perPage,
  current,
  onChange,
}: {
  total: number;
  perPage: number;
  current: number;
  onChange: (p: number) => void;
}) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-1">
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          aria-label={`Page ${i + 1}`}
          aria-current={current === i + 1 ? "page" : undefined}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
            current === i + 1
              ? "bg-[#4BAF47] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
      {current < pages && (
        <button
          onClick={() => onChange(current + 1)}
          aria-label="Next page"
          className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────
const PER_PAGE = 9;

export default function ShopGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: ShopCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [priceRange, setPriceRange] = useState(PRICE_MAX);
  const [appliedPrice, setAppliedPrice] = useState(PRICE_MAX);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.price <= appliedPrice);

    if (activeCategory !== "all") {
      list = list.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    switch (sort) {
      case "price-asc":  return [...list].sort((a, b) => a.price - b.price);
      case "price-desc": return [...list].sort((a, b) => b.price - a.price);
      case "name-asc":   return [...list].sort((a, b) => a.name.localeCompare(b.name));
      default:           return list;
    }
  }, [products, activeCategory, sort, appliedPrice]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleCategory(id: string) {
    setActiveCategory(id);
    setPage(1);
  }

  function handleApply() {
    setAppliedPrice(priceRange);
    setPage(1);
  }

  return (
    <section className="bg-white py-16" aria-label="Shop products">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* Sidebar */}
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategory={handleCategory}
            priceRange={priceRange}
            onPriceRange={setPriceRange}
            onApply={handleApply}
          />

          {/* Main */}
          <div className="flex-1">

            {/* Sort Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className=" text-gray-500">
                  {Math.min((page - 1) * PER_PAGE + 1, filtered.length)}–
                  {Math.min(page * PER_PAGE, filtered.length)}
                </span>{" "}
                of{" "}
                <span className=" text-gray-500">{filtered.length}</span>{" "}
                results
              </p>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setPage(1); }}
                aria-label="Sort products"
                className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#4BAF47]"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid */}
            {paginated.length === 0 ? (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <p className="text-lg font-semibold text-gray-700">No products found</p>
                <p className="mt-1 text-sm text-gray-400">Try adjusting your filters</p>
                <button
                  onClick={() => { handleCategory("all"); setAppliedPrice(PRICE_MAX); setPriceRange(PRICE_MAX); }}
                  className="mt-4 rounded-lg bg-[#4BAF47] px-5 py-2 text-sm font-bold text-white hover:bg-green-600"
                  aria-label="Clear all filters"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerCards}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
              >
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            )}

            {/* Pagination */}
            <Pagination
              total={filtered.length}
              perPage={PER_PAGE}
              current={page}
              onChange={setPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}