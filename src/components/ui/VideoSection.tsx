"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { X } from "lucide-react";
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

  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/|.*shorts\/))([^?&"'>]+)/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(videoSrc);

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
          <div className="mx-auto mt-50 w-full md:w-170">
            <SectionHeader
              badge={""}
              title={title}
              align="center"
              variant="light"
            />
          </div>

          {/* Play Button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className="group absolute top-[30%] left-[50%] flex h-24 w-24 -translate-x-7 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <span className="absolute h-24 w-24 animate-ping rounded-full bg-white/30" />
            <FaPlay
              className="ml-1 text-[#4BAF47] transition-colors duration-200 group-hover:text-green-700"
              size={28}
            />
          </button>
        </div>

        {/* StatsBar — BOTTOM (About) */}
        {statsPosition === "bottom" && (
          <div className="absolute bottom-0 z-10 w-full">
            <StatsBar stats={STATS} size="sm" width="full" bgColor="bg-black" />
          </div>
        )}
      </section>

      {/* Video Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 cursor-pointer" 
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50 aspect-video w-[90vw] max-w-4xl overflow-hidden rounded-xl shadow-2xl bg-black flex items-center justify-center">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-none"
              />
            ) : videoSrc ? (
              <video
                autoPlay
                controls
                preload="none"
                className="h-full w-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="text-white text-center p-8">
                <p className="text-xl font-bold mb-2">Video source not found!</p>
                <p className="text-gray-400">Please check your constants/home/videoSection.ts</p>
              </div>
            )}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/40 md:top-3 md:right-3"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
