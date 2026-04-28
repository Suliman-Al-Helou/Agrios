import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import VideoSection from "@/components/ui/VideoSection";
import TeamSection from "@/components/sections/about/TeamSection";
import { ABOUT_VIDEO } from "@/constants/about/video";
import { ABOUT_HERO } from "@/constants/about/hero";
import TestimonialsSection from "@/components/sections/about/TestimonialsSection";
// ─── SEO ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About — Agrios Agriculture Farm",
  description:
    "Learn about Agrios — the largest global organic farm. Discover our story, our team, and our commitment to sustainable agriculture.",
};

// ─── Page ─────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero Banner — "About" + breadcrumb */}
      <PageHero {...ABOUT_HERO} />

      {/* 2. Intro — صورتين + نص + نقاط */}
      <AboutIntro />

      {/* 3. Video — StatsBar تحت الفيديو (About version) */}
      <VideoSection
        title={ABOUT_VIDEO.title}
        videoSrc={ABOUT_VIDEO.videoSrc}
        backgroundSrc={ABOUT_VIDEO.backgroundSrc}
        statsPosition="bottom"
        rounded="sm"
      />

      {/* 4. Testimonials — نفس مكون الـ Home، بدون تكرار */}
      <TestimonialsSection />
      {/* 5. Team Members */}
      <TeamSection />
    </main>
  );
}
