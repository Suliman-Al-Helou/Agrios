"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { caveat } from "@/lib/fonts";
import Container from "@/components/ui/Container";
import { HERO_CONTENT, HERO_SLIDES } from "@/constants/home/Hero";
import Link from "next/link";

interface HeroContentProps {
  activeIndex: number;
  onDotClick: (index: number) => void;
}

export default function HeroContent({ activeIndex, onDotClick }: HeroContentProps) {
  return (
    <div className="relative z-10 flex h-full items-center justify-center md:justify-start">
      <Container>
        <AnimatedSection className="relative flex flex-col items-center md:block">
          <p className="mb-4 text-sm tracking-widest text-white uppercase">
            {HERO_CONTENT.badge}
          </p>

          <h1
            className={`${caveat.className} text-center text-4xl font-bold text-white sm:text-5xl md:w-auto md:text-start md:text-[110px] md:leading-tight`}
          >
            {HERO_CONTENT.title}
          </h1>

          <p className="mt-6 mb-10 text-center text-gray-200 md:w-[520px] md:text-start">
            {HERO_CONTENT.description}
          </p>

          <div>
            <Link
              href={HERO_CONTENT.cta.href}
              className="inline-flex h-14 w-48 items-center justify-center rounded-[10px] bg-[#4BAF47] px-6 py-3 font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95"
            >
              {HERO_CONTENT.cta.label}
            </Link>
          </div>
        </AnimatedSection>

          {/* Desktop Dots */}
          <div className="absolute top-1/2 right-50 z-20 hidden -translate-y-1/2 flex-col gap-4 md:flex">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-10 w-10 rounded-full border transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_4px_10px_rgba(34,197,94,0.3)] ${
                  activeIndex === index
                    ? "border-green-500 bg-green-500 shadow-md"
                    : "border-gray-300 bg-white/20 hover:border-green-400 hover:bg-green-50"
                }`}
              />
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="mt-8 flex justify-center md:hidden gap-3">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-7 bg-green-500" : "w-2.5 bg-white/50"
                }`}
              />
            ))}
          </div>

      </Container>
    </div>
  );
}