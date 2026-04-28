import Image from "next/image";
import Link from "next/link";
import { Check, Leaf } from "lucide-react";
import { caveat } from "@/lib/fonts";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  BENEFITS_CONTENT,
  BENEFITS_IMAGE,
  BENEFITS_FEATURES,
} from "@/constants/home/Benefits";


export default function BenefitsSection() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f7f7] py-20">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-2">
        {/* ── LEFT — Image ── */}
        <AnimatedSection animation="slideInRight" className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
            <Image
              src={BENEFITS_IMAGE.src}
              alt={BENEFITS_IMAGE.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Badge */}
          <AnimatedSection
            animation="scaleUp"
            delay={200}
            className="absolute top-25 left-45 flex w-72 items-center justify-between gap-8 rounded-md bg-[#EEC044] px-8 py-7 text-white shadow-lg"
          >
            <Leaf size={52} />
            <p className={`${caveat.className} w-28 text-[28px] leading-tight`}>
              {BENEFITS_CONTENT.badge_card.text}
            </p>

            {/* Triangle */}
            <div className="absolute right-0 -bottom-6 h-0 w-0 border-t-[30px] border-r-[2px] border-l-[35px] border-t-[#EEC044] border-r-transparent border-l-transparent" />
          </AnimatedSection>
        </AnimatedSection>

        {/* ── RIGHT — Content ── */}
        <div className="animate-stagger">
          <AnimatedSection>
            <SectionHeader
              badge={BENEFITS_CONTENT.badge}
              title={BENEFITS_CONTENT.title}
              description={BENEFITS_CONTENT.description}
              align="left"
            />
          </AnimatedSection>

          {/* Features */}
          <div className="mt-10 space-y-9 animate-stagger-2">
            {BENEFITS_FEATURES.map(({ id, color, title, description }) => (
              <div key={id} className="flex items-start gap-3">
                <span
                  className="mt-0.5 shrink-0 rounded-full p-2 text-white"
                  style={{ backgroundColor: color }}
                >
                  <Check size={16} />
                </span>
                <div>
                  <h4 className="mb-1 font-semibold text-black">{title}</h4>
                  <p className="w-[350px] text-sm text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection animation="fadeInUp" delay={400} className="animate-stagger-3">
            <Link
              href={BENEFITS_CONTENT.cta.href}
              className="mt-10 inline-flex h-15 w-49 items-center justify-center rounded-[10px] bg-[#4BAF47] px-6 py-3 font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95"
            >
              {BENEFITS_CONTENT.cta.label}
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
