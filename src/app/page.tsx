import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "../components/sections/home/hero/Hero";
import Features from "../components/sections/home/features/Features";
import AboutSection from "../components/sections/home/about/AboutSection";
import ServicesSection from "../components/service/ServicesSection";
import VideoSection from "@/components/ui/VideoSection";
import { VIDEO_CONTENT } from "@/constants/home/videoSection";
import { HOME_SERVICES } from "@/constants/home/Services";
const ProjectsSection = dynamic(
  () => import("@/components/sections/home/RecentlyCompleted/ProjectsSection"),
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/home/testimonials/TestimonialsSection"),
);
const BenefitsSection = dynamic(
  () => import("@/components/sections/home/benefits/BenefitsSection"),
);
const NewsSection = dynamic(
  () => import("@/components/sections/home/blog/NewsSection"),
);

export default function Home() {
  return (
    <main>
      <Hero />

      <Features />

      <AboutSection />

      <ServicesSection data={HOME_SERVICES} />

      <VideoSection
        title="Agriculture Matters to the Future of Development"
        videoSrc={VIDEO_CONTENT.videoUrl}
        backgroundSrc="/videos/bg-video.webp"
        statsPosition="top"
        rounded="md"
     
      
      />
      {/* <StatsBar stats={STATS} /> */}
      <Suspense fallback={null}>
        <ProjectsSection />
        <TestimonialsSection />
        <BenefitsSection />
        <NewsSection />
      </Suspense>
    </main>
  );
}
