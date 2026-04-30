"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { heroSlide } from "@/lib/animations";
import { HERO_SLIDES } from "@/constants/home/Hero";

interface HeroBackgroundProps {
  activeIndex: number;
}

export default function HeroBackground({ activeIndex }: HeroBackgroundProps) {
  const slide = HERO_SLIDES[activeIndex];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          variants={heroSlide}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="relative w-full h-[800px]">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill

              priority={slide.id === 1}
              loading={slide.id !== 1 ? "lazy" : undefined}
              className="object-cover"
              sizes="100vw"
              quality={80} 
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[#1F1E17]/30" />
    </div>
  );
}
