import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ABOUT_CONTENT,
  ABOUT_FEATURES,
  ABOUT_CHECKLIST,
  ABOUT_IMAGES,
} from "@/constants/home/About";

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* ── LEFT — Images ── */}
          <AnimatedSection
            animation="slideInLeft"
            className="relative flex justify-center"
          >
            {/* Main Image */}
            <div className="relative aspect-square w-75 overflow-hidden rounded-full md:w-137.5">
              <Image
                src={ABOUT_IMAGES.main.src}
                alt={ABOUT_IMAGES.main.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 550px"
              />
            </div>

            {/* Secondary Image */}
            <AnimatedSection
              animation="scaleUp"
              delay={200}
              className="absolute bottom-0 left-0 aspect-square w-30 overflow-hidden rounded-full border-[10px] border-white shadow-lg md:-bottom-20 md:-left-20 md:w-70"
            >
              <Image
                src={ABOUT_IMAGES.secondary.src}
                alt={ABOUT_IMAGES.secondary.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 120px, 280px"
              />
            </AnimatedSection>
          </AnimatedSection>

          {/* ── RIGHT — Content ── */}
          <AnimatedSection
            animation="fadeInUp"
            className="text-center md:text-left"
          >
            <SectionHeader
              badge={ABOUT_CONTENT.badge}
              title={ABOUT_CONTENT.title}
              subtitle={ABOUT_CONTENT.subtitle}
              description={ABOUT_CONTENT.description}
              align="left"
            />

            {/* Features + Checklist */}
            <AnimatedSection
              animation="fadeInUp"
              delay={200}
              className="mt-6 flex flex-col items-center space-y-6 md:items-start"
            >
              {/* Feature Icons */}
              <div className="flex flex-col gap-6 sm:flex-row">
                {ABOUT_FEATURES.map(({ id, icon, alt, label }) => (
                  <div key={id} className="flex items-center gap-3">
                    <div className="rounded-xl">
                      <Image src={icon} alt={alt} width={64} height={64} />
                    </div>
                    <p className="text-[18px] font-bold text-gray-800">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                {ABOUT_CHECKLIST.map(({ id, text }) => (
                  <div key={id} className="flex items-center gap-2">
                    <Check
                      className="shrink-0 rounded-full bg-[#C5CE38] text-white"
                      size={16}
                    />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection animation="fadeInUp" delay={400}>
              <Link
                href={ABOUT_CONTENT.cta.href}
                className="mt-10 inline-flex h-15 w-49 items-center justify-center rounded-[10px] bg-[#4BAF47] px-6 py-3 font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95"
              >
                {ABOUT_CONTENT.cta.label}
              </Link>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
