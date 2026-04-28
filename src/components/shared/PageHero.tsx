import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

// ─── Types ────────────────────────────────────────────────
type PageHeroProps = {
  title: string;
  backgroundImage: string;
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
};

// ─── Component ────────────────────────────────────────────
export default function PageHero({
  title,
  backgroundImage,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative mt-15 h-56 w-full overflow-hidden md:mt-39 md:h-72">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
        {/* Breadcrumb */}
        <AnimatedSection
          animation="fadeInDown"
          delay={0}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-white/70"
        >
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1.5">
              {index !== 0 && <ChevronRight size={14} />}

              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection
          animation="fadeInDown"
          delay={150}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          {title}
        </AnimatedSection>
      </div>
    </section>
  );
}
