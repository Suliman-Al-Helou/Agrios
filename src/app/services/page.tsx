import type { Metadata } from "next";
import dynamic from "next/dynamic";

// ─── Shared components ───────────────
import PageHero from "@/components/shared/PageHero";
import ServicesSection from "@/components/service/ServicesSection";
import { SERVICES_PAGE } from "@/constants/services/index";

// ─── Services-specific ───────────────
import PartnersStrip from "@/components/sections/services/PartnersStrip";
import ServicesTabSection from "@/components/sections/services/ServicesTabSection";
import WhatWeDo from "@/components/sections/services/WhatWeDo";
import ServicesCTA from "@/components/sections/services/ServicesCTA";
import { ABOUT_VIDEO } from "@/constants/about/video";

// ─── VideoSection — lazy load ───────
const VideoSection = dynamic(() => import("@/components/ui/VideoSection"), {
  ssr: true,
});

// ─── Hero constants ─────────────────
import { SERVICES_HERO } from "@/constants/services";

// ─── SEO ────────────────────────────
export const metadata: Metadata = {
  title: "Services — Agrios Agriculture Farm",
  description:
    "Explore Agrios services: agriculture products, organic produce, fresh vegetables, and dairy products. Sustainable farming at its finest.",
  openGraph: {
    title: "Services — Agrios Agriculture Farm",
    description: "Fresh organic products and sustainable farming solutions.",
    type: "website",
  },
};

// ─── Page ────────────────────────────
export default function ServicesPage() {
  return (
    <main>
      {/* 1. Hero Banner */}
      <PageHero
        title={SERVICES_HERO.title}
        backgroundImage={SERVICES_HERO.backgroundImage}
        breadcrumbs={SERVICES_HERO.breadcrumbs}
      />

      {/* 2. Services Grid */}
      <ServicesSection data={SERVICES_PAGE} />

      {/* 3. Partners Strip */}
      <PartnersStrip />

      {/* 4. Video / Image Section */}
      <VideoSection
        title={ABOUT_VIDEO.title}
        videoSrc={ABOUT_VIDEO.videoSrc} // ضع "" إذا تريد صورة بدل الفيديو
        backgroundSrc={ABOUT_VIDEO.backgroundSrc} // ضع background image إذا تستخدم صورة
        statsPosition="none"
        rounded="sm"
      />

      {/* 5. Tabs Section */}
      <ServicesTabSection data={SERVICES_PAGE.services} />

      {/* 6. What We Do Section */}
      <WhatWeDo />

      {/* 7. CTA Banner */}
      <ServicesCTA />
    </main>
  );
}
