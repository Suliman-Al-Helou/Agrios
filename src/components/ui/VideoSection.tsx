"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
import { scaleUp, overlayFade } from "@/lib/animations";
import StatsBar from "@/components/ui/StatsBar";
import SectionHeader from "@/components/ui/SectionHeader";
import { STATS } from "../../constants/home/videoSection";
import Image from "next/image";
// ─── Types ────────────────────────────────────────────────
type VideoSectionProps = {
  badge?: string;
  title: string;
  videoSrc: string;
  backgroundSrc: string;
  statsPosition?: "top" | "bottom" | "none";
  rounded?: "sm" | "md" | "lg";
};

// ─── Component ────────────────────────────────────────────
export default function VideoSection({
  badge = "Modern Agriculture",
  title,
  videoSrc,
  backgroundSrc,
  statsPosition = "none",
  rounded,
}: VideoSectionProps) {
  const [open, setOpen] = useState(false);
  const roundedMap = {
    sm: "rounded-0",
    md: "rounded-2xl",
    lg: "rounded-2xl",
  };
  return (
    <>
      <section className="relative h-173 w-full overflow-visible bg-white">
        {/* StatsBar — TOP (Home) */}
        {statsPosition === "top" && (
          <div className="absolute z-10 w-full -translate-y-[30%]">
            <StatsBar stats={STATS} rounded={"md"} />
          </div>
        )}

        {/* Background Video */}
        <div
          className={`absolute inset-0 mx-6 overflow-hidden ${rounded ? roundedMap[rounded] : ""}`}
        >
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={backgroundSrc} type="video/mp4" />
          </video> */}
          <Image
            src={backgroundSrc}
            alt="background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 mx-6 bg-black/45 ${roundedMap["lg"]}`}
        />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 md:flex-row md:justify-between">
          <div className="mx-auto mt-50 w-170">
            <SectionHeader
              badge={""}
              title={title}
              align="center"
              variant="light"
            />
          </div>

          {/* Play Button */}
          <motion.button
            variants={scaleUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className="group absolute top-[30%] left-[50%] hidden h-24 w-24 -translate-x-7 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl md:flex"
          >
            <span className="absolute h-24 w-24 animate-ping rounded-full bg-white/30" />
            <FaPlay
              className="ml-1 text-[#4BAF47] transition-colors duration-200 group-hover:text-green-700"
              size={28}
            />
          </motion.button>
        </div>

        {/* StatsBar — BOTTOM (About) */}
        {statsPosition === "bottom" && (
          <div className="absolute bottom-0 z-10 w-full">
            <StatsBar stats={STATS} size="sm" width="full" bgColor="bg-black" />
          </div>
        )}
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={overlayFade}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 cursor-pointer bg-black/80"
            />
            <motion.div
              variants={scaleUp}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="fixed top-1/2 left-1/2 z-50 aspect-video w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl"
            >
              <video
                autoPlay
                controls
                preload="none"

                className="h-full w-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute top-3 right-3 rounded-full bg-black/60 p-1.5 text-white transition-colors duration-200 hover:bg-black"
              >
                <X size={18} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
