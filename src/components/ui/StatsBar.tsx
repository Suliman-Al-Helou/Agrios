"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";


// ─── Animated Counter Hook ────────────────────────────────
function useCounter(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

type StatItemType = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};
// ─── Single Stat Item ─────────────────────────────────────
function StatItem({
  value,
  suffix,
  label,
  active,
  sizeClass, // ✅ NEW
  textColor, // ✅ NEW
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;

  sizeClass: string; // ✅ NEW
  textColor: string; // ✅ NEW
}) {
  const count = useCounter(value, 2000, active);

  return (
    <div
      className={`flex flex-col items-center justify-center py-2`}
    >
      <span className={`${sizeClass} font-bold ${textColor} tabular-nums`}>
        {count}
        <span className="text-[#C5CE38]">{suffix}</span>
      </span>

      <p
        className={`mt-2 text-sm font-medium tracking-wide ${
          textColor === "text-white" ? "text-green-100" : "text-gray-400"
        } md:text-base`}
      >
        {label}
      </p>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────
type StatsBarProps = {
  stats: StatItemType[] ,
  bgColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  width?: "sm" | "md" | "lg" | "full"; // ✅ NEW
  rounded?: "sm" | "md" | "lg"; // ✅ NEW
};

// ─── Stats Bar ────────────────────────────────────────────
export default function StatsBar({
  stats=[],
  bgColor = "bg-[#4BAF47]",
  textColor = "text-white",
  size = "md",
  width = "lg",
  rounded = "sm",
}: StatsBarProps) {
  const sizeMap = {
    sm: "text-2xl md:text-3xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
  };
  const widthMap = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    full: "max-w-full",
  };
  const roundedbar = {
    sm: "rounded-0",
    md: "rounded-2xl",
    lg: "rounded-3xl"
  };
  const sizeClass = sizeMap[size]; // ✅ NEW

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className={`mx-auto ${widthMap[width]} px-6`}>
      <div
        ref={ref}
        className={`grid grid-cols-2    ${roundedbar[rounded]} ${bgColor} px-6 py-8 text-center ${textColor} shadow-xl md:grid-cols-4`}
      >
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            active={isInView}
            sizeClass={sizeClass} // ✅ NEW
            textColor={textColor} // ✅ NEW
          />
        ))}
      </div>
    </div>
  );
}
