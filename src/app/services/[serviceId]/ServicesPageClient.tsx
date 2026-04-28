"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Check, Minus, ChevronRight } from "lucide-react";
import { caveat } from "@/lib/fonts";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "@/lib/animations";
import {
  SERVICE_CATEGORIES,
  HELP_CARD,
  type ServiceData,
} from "@/constants/service";
import PageHero from "@/components/shared/PageHero";

// ─── Sidebar ──────────────────────────────────────────────
function Sidebar({ activeId }: { activeId: string }) {
  return (
    <motion.aside
      variants={slideLeft}
      initial="hidden"
      whileInView="show"
      style={{ width: "370px", flexShrink: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="shrink-0 space-y-4"
    >
      {/* Categories */}
      <div
        className="mb-7 rounded-xl border border-gray-100 bg-white shadow-sm"
        style={{ padding: "20px" }}
      >
        <h2 className="mb-3 text-base font-bold text-black">Categories</h2>
        <ul className="divide-y divide-gray-100">
          {SERVICE_CATEGORIES.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className={`group flex items-center gap-2 py-2.5 transition-colors duration-200 ${
                  activeId === id
                    ? "font-semibold text-[#4BAF47]"
                    : "text-gray-600 hover:text-[#4BAF47]"
                }`}
              >
                <ChevronRight
                  size={14}
                  className={
                    activeId === id
                      ? "text-[#4BAF47]"
                      : "text-gray-300 transition-colors group-hover:text-[#4BAF47]"
                  }
                />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Help Card */}
      <div className="relative overflow-hidden rounded-xl bg-[#4BAF47] p-6 p-10 text-center text-white">
        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-white/10" />

        <h3 className="relative z-10 mb-7 text-lg font-bold">
          {HELP_CARD.title}
        </h3>
        <p className="relative z-10 mb-4 text-sm leading-relaxed text-green-100">
          {HELP_CARD.description}
        </p>
        <a
          href={HELP_CARD.phoneHref}
          className={`${caveat.className} text-[36px]relative z-10 mb-7 flex items-center justify-center gap-2 text-base font-bold transition-colors hover:text-green-200`}
        >
          <Phone size={16} />
          {HELP_CARD.phone}
        </a>
        <Link
          href={HELP_CARD.cta.href}
          className="relative z-10 inline-flex items-center justify-center rounded-lg bg-[#EEC044] p-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-yellow-500 active:scale-95"
        >
          {HELP_CARD.cta.label}
        </Link>
      </div>
    </motion.aside>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-gray-800 transition-colors duration-200 hover:text-[#4BAF47]"
        aria-expanded={open}
      >
        {question}
        <span
          className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded transition-colors duration-200 ${open ? "bg-[#C5CE38] text-white" : "border border-[#4BAF47] text-[#4BAF47]"}`}
        >
          {open ? <Minus size={14} /> : <ChevronRight size={30} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm leading-relaxed text-gray-500">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Content ─────────────────────────────────────────
function ServiceContent({ service }: { service: ServiceData }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="min-w-0 flex-1 space-y-8"
    >
      {/* Main Image */}
      <motion.div
        variants={slideRight}
        className="relative overflow-hidden rounded-xl"
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={service.mainImage.src}
            alt={service.mainImage.alt}
            width={800}
            height={300}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
        {/* Icon badge */}
        <div className="absolute right-0 bottom-0 flex h-20 w-20 items-center justify-center rounded-lg bg-[#C5CE38] shadow-lg">
          <Image
            src={service.icon.src}
            alt={service.icon.alt}
            width={70}
            height={70}
          />
        </div>
      </motion.div>

      {/* Title + Description */}
      <motion.div variants={fadeUp}>
        <h2 className="my-4 text-2xl font-bold text-black md:text-3xl">
          {service.title}
        </h2>
        {service.description.map((para, i) => (
          <p key={i} className="mb-3 text-sm leading-relaxed text-gray-400">
            {para}
          </p>
        ))}
      </motion.div>

      {/* Gallery */}
      <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-4">
        {service.galleryImages.map(({ src, alt }, index) => (
          <div
            key={`${service.id}-gallery-${index}`}
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
            style={{ height: "200px" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          </div>
        ))}
      </motion.div>

      {/* Benefits */}
      <motion.div variants={fadeUp}>
        <h3 className="mt-10 mb-4 text-[30px] font-bold text-black">
          {service.benefits.title}
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <p className="w-72 text-sm leading-relaxed text-gray-500">
            {service.benefits.description}
          </p>
          <ul className="space-y-2">
            {service.benefits.points.map((point) => (
              <li
                key={point}
                className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-800"
              >
                <Check size={14} className="shrink-0 text-[#4BAF47]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div variants={fadeUp} className="space-y-3">
        {service.faq.map(({ id, question, answer }) => (
          <div key={id} className="bg-[#F8F7F0]">
            <FaqItem key={id} question={question} answer={answer} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function ServicesPageClient({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <>
      <PageHero
        title="Services"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <main className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-start gap-8 overflow-hidden">
            <Sidebar activeId={service.id} />
            <ServiceContent service={service} />
          </div>
        </div>
      </main>
    </>
  );
}
