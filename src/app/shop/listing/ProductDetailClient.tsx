"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Star, Plus, Minus, ShoppingCart, Heart } from "lucide-react";
import { staggerContainer, fadeUp, slideLeft } from "@/lib/animations";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/constants/shop/products";

// ─── Stars ────────────────────────────────────────────────
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count
              ? "fill-[#EEC044] text-[#EEC044]"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

// ─── Quantity Selector ────────────────────────────────────
function QuantitySelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[20px] font-bold text-black">Choose Quantity</span>
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
        <span className="w-8 text-center text-sm font-bold text-black">
          {value}
        </span>
        <div className="flex flex-col gap-0.5">
          <button
            onClick={() => onChange(value + 1)}
            aria-label="Increase quantity"
            className="text-black transition-colors hover:text-[#4BAF47]"
          >
            <Plus size={12} />
          </button>
          <button
            onClick={() => onChange(Math.max(1, value - 1))}
            aria-label="Decrease quantity"
            className="text-black transition-colors hover:text-[#4BAF47]"
          >
            <Minus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Review ───────────────────────────────────────────────
function Review() {
  return (
    <div className="flex gap-4 items-center">
<div className="relative h-[170px] w-[170px] shrink-0 overflow-hidden rounded-full">
  <Image
    src="/images/home/testimonials/Testimonials-1.webp"
    alt="Kevin Martin"
    width={170}
    height={170}
    className="h-full w-full object-cover object-top"
    sizes="170px"
  />
</div>
      <div>
        <p className="font-bold text-gray-900">Kevin Martin</p>
        <p className="mb-2 text-sm text-[#4BAF47]">July 10, 2022</p>
        <p className="text-sm leading-relaxed text-gray-500">
          It has survived not only five centuries, but also the leap into
          electronic typesetting unchanged. It was popularised in the sheets
          containing lorem ipsum is simply free text. sint occaecat cupidatat
          non proident sunt in culpa qui officia deserunt molit anim id est
          laborum. Vivaus sed delly molestie sapien.
        </p>
      </div>
    </div>
  );
}

// ─── Review Form ──────────────────────────────────────────
function ReviewForm({ productName }: { productName: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    review: "",
    saveInfo: false,
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", review: "", saveInfo: false });
  }

  return (
    <motion.div variants={fadeUp} className="mt-10">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">Add a review</h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Save info checkbox */}
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={form.saveInfo}
            onChange={(e) => setForm({ ...form, saveInfo: e.target.checked })}
            className="rounded border-gray-300 text-[#4BAF47] focus:ring-[#4BAF47]"
          />
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>

        <p className="text-sm text-gray-500">Your rating</p>

        {/* Review textarea */}
        <div>
          <label htmlFor="review-text" className="sr-only">
            Your Review
          </label>
          <textarea
            id="review-text"
            placeholder="Your Review..."
            rows={5}
            required
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
            className="placeholder:text[#878680] w-full resize-none rounded-lg border border-gray-200 bg-[#F8F7F0] px-4 py-3 text-sm text-black transition outline-none focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
          />
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="review-name" className="sr-only">
              Your Name
            </label>
            <input
              id="review-name"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="placeholder:text[#878680] w-full rounded-lg border border-gray-200 bg-[#F8F7F0] px-4 py-3 text-sm text-black transition outline-none focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
            />
          </div>
          <div>
            <label htmlFor="review-email" className="sr-only">
              Email Address
            </label>
            <input
              id="review-email"
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="placeholder:text[#878680] w-full rounded-lg border border-gray-200 bg-[#F8F7F0] px-4 py-3 text-sm text-black transition outline-none focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-[#4BAF47] px-8 py-3 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-green-600 active:scale-95"
        >
          {sent ? "Review Submitted! ✓" : "Submit Review"}
        </button>
      </form>
    </motion.div>
  );
}

// ─── Social Share ─────────────────────────────────────────
const SOCIAL = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaPinterestP, href: "https://pinterest.com", label: "Pinterest" },
];

// ─── Main Export ──────────────────────────────────────────
export default function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  function handleAddToCart() {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        imageAlt: product.imageAlt,
      },
      quantity,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* ── Product Top ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 flex flex-col gap-8 lg:flex-row"
        >
          {/* Image */}
          <motion.div
            variants={slideLeft}
            className="w-140 items-center justify-center rounded-2xl md:w-[420px] lg:shrink-0"
            style={{ minHeight: "380px" }}
          >
            <div
              className="relative rounded-2xl"
              style={{ width: "565px", height: "565px" }}
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                className="object-contain"
                sizes="300px"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeUp} className="flex-1 space-y-5">
            {/* Title + Price */}
            <div className="flex items-end gap-6">
              <h1 className="text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              <span className="text-[20px] font-bold text-[#4BAF47]">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <StarRating />
              <span className="text-sm text-gray-400">
                ({product.reviews} Customer Review)
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-500">
              {product.description}
            </p>

            {/* Quantity */}
            <QuantitySelector value={quantity} onChange={setQuantity} />

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 rounded-lg bg-[#4BAF47] px-4 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-green-600 active:scale-95"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart size={18} />
                {added ? "Added! ✓" : "Add to cart"}
              </button>
              <button
                className="flex items-center gap-2 rounded-lg bg-[#EEC044] px-4 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-yellow-500 active:scale-95"
                aria-label={`Add ${product.name} to wishlist`}
              >
                <Heart size={18} />
                Add to wishlist
              </button>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
              <span className="text-sm font-semibold text-gray-700">
                Share with Friends
              </span>
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${label}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-black transition-all hover:scale-110 hover:border-[#4BAF47] hover:text-[#4BAF47]"
                >
                  <Icon size={13} />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Description ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 border-t border-gray-100 pt-10"
        >
          <motion.div variants={fadeUp}>
            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Description
            </h2>
            <div className="space-y-4">
              {product.fullDescription.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-500">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div
            variants={fadeUp}
            className="border-t border-gray-100 pt-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {product.reviews} review{product.reviews !== 1 ? "s" : ""} for{" "}
              {product.name}
            </h2>
            <Review />
          </motion.div>

          {/* Review Form */}
          <ReviewForm productName={product.name} />
        </motion.div>
      </div>
    </section>
  );
}
