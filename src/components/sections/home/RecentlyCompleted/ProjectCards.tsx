"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cardAnimation } from "@/lib/animations";
import type { Project } from "@/constants/home/Projects";

type Props = Omit<Project, "id">;

export default function ProjectCard({ title, image, imageAlt, href }: Props) {
  return (
    <motion.div variants={cardAnimation}>
      <Link
        href={href}
        className="group relative block cursor-pointer overflow-hidden rounded-2xl"
      >
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden md:h-140">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/50" />

        {/* Title */}
        <h3 className="absolute bottom-4 left-4 max-w-41 text-start text-[30px] font-semibold text-white">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
}
