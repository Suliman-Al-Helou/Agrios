"use client";

import { useState, useEffect } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import { HERO_SLIDES } from "@/constants/home/Hero";

const AUTO_SLIDE_INTERVAL = 5000; // 5 ثواني

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative mt-15 h-screen min-h-[80vh] overflow-hidden md:mt-39 md:min-h-screen">
      <HeroBackground activeIndex={activeIndex} />
      <HeroContent activeIndex={activeIndex} onDotClick={handleDotClick} />
    </section>
  );
}
