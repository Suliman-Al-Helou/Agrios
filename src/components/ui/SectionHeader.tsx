import { caveat } from "@/lib/fonts";
import AnimatedSection from "@/components/ui/AnimatedSection";

// ─── Types ────────────────────────────────────────────────
type Align = "left" | "center" | "right";

type SectionHeaderProps = {
  badge: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: Align;
  animated?: boolean;
  variant?: "default" | "light";
};

// ─── Alignment map ────────────────────────────────────────
const alignMap: Record<Align, string> = {
  left: "text-left   items-start",
  center: "text-center items-center",
  right: "text-right  items-end",
};

// ─── Component ────────────────────────────────────────────
export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  animated = true,
  variant = "default",
}: SectionHeaderProps) {
  const content = (
    <>
      {/* Badge — الخط المائل الأصفر */}
      <p className={`${caveat.className} text-[24px] text-[#EEC044]`}>
        {badge ?? ""}
      </p>

      {/* Title — العنوان الكبير */}
      <h2
        className={`text-3xl leading-tight font-bold md:text-[48px] ${variant === "light" ? "text-white" : "text-black"}`}
      >
        {title}
      </h2>

      {/* Subtitle — اختياري (يظهر بلون أخضر) */}
      {subtitle && (
        <p className="mt-2 text-[22px] font-semibold text-[#4BAF47]">
          {subtitle}
        </p>
      )}

      {/* Description — اختياري */}
      {description && (
        <p
          className={`mt-2 max-w-2xl text-[16px] leading-relaxed ${variant === "light" ? "text-white/80" : "text-gray-400"}`}
        >
          {description}
        </p>
      )}
    </>
  );

  const className = `flex flex-col gap-2 ${alignMap[align]} ${description || subtitle ? "mb-8" : "mb-12"}`;

  if (animated) {
    return (
      <AnimatedSection animation="fadeInUp" className={className}>
        {content}
      </AnimatedSection>
    );
  }

  return <div className={className}>{content}</div>;
}
