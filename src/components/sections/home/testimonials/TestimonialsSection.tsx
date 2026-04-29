"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caveat } from "@/lib/fonts";
import { ArrowUp, ArrowDown } from "lucide-react";
import {
  TESTIMONIALS_CONTENT,
  TESTIMONIALS,
} from "@/constants/home/Testimonials";


export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((i) => (i + 1) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="bg-[#f5f3ee] px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-9 md:flex-row">
        {/* ── LEFT ── */}
        <AnimatedSection
          animation="slideInLeft"
          className="relative flex flex-col items-center md:items-start"
        >
          <p className={`${caveat.className} mb-2 text-[24px] text-[#EEC044]`}>
            {TESTIMONIALS_CONTENT.badge}
          </p>

          <h2 className="mb-4 text-center text-[25px] leading-snug font-bold text-black md:max-w-80 md:text-start md:text-[48px]">
            {TESTIMONIALS_CONTENT.title}
          </h2>

          <p className="mb-7 text-center text-gray-500 md:w-82 md:text-start">
            {TESTIMONIALS_CONTENT.description}
          </p>

          <Link
            href={TESTIMONIALS_CONTENT.cta.href}
            className="inline-flex h-15 w-60 items-center justify-center rounded-[10px] bg-[#4BAF47] px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95"
          >
            {TESTIMONIALS_CONTENT.cta.label}
          </Link>

          {/* Arrow Controls */}
          <div className="absolute top-45 -right-6 hidden flex-col gap-4 lg:flex">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow transition-all duration-200 hover:bg-gray-50 hover:text-black hover:shadow-md"
            >
              <ArrowUp size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 shadow transition-all duration-200 hover:bg-gray-50 hover:text-black hover:shadow-md"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </AnimatedSection>

        {/* ── RIGHT ── */}
        <AnimatedSection
          animation="slideInRight"
          className="w-full rounded-2xl bg-white shadow-sm md:max-w-xl overflow-hidden"
        >
            <div
              key={testimonial.id}
              className="flex items-center justify-between gap-10 p-10 transition-all duration-500 ease-in-out"
              style={{ animation: 'fadeIn 0.5s ease-out' }}
            >
              {/* Text */}
              <div>
                <p className="mb-6 text-gray-500">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-black">
                    {testimonial.name}
                  </span>
                  <span className="tracking-wide text-yellow-400">
                    {"★".repeat(testimonial.rating)}
                  </span>
                </div>
              </div>

              {/* Avatar */}
              <div className="relative h-24 w-24 shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  fill
                  className="rounded-full object-cover"
                  sizes="96px"
                />
                {/* Dashed ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-dashed border-yellow-400" />
                {/* Green dot */}
                <div className="absolute -bottom-3 left-10 h-6 w-6 rounded-full bg-green-500" />
              </div>
            </div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-2 pb-6 md:hidden">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "h-2 w-6 bg-[#4BAF47]" : "h-2 w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
