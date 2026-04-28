"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { staggerCards, cardAnimation } from "@/lib/animations";
import type { Project } from "@/constants/project/project-page";

// ─── Single Card ──────────────────────────────────────────
function ProjectCard({ title, image, imageAlt, href }: Omit<Project, "id">) {
  return (
    <motion.div variants={cardAnimation} className="relative">
      <Link
        href={href}
        className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
        aria-label={`View project: ${title}`}
      >
        {/* Image */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Title */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-8">
          <h2 className="text-[28px] leading-tight font-bold text-white md:text-[30px] w-35">
            {title}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Grid ─────────────────────────────────────────────────
export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-white py-20" aria-label="Projects grid">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              href={project.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
