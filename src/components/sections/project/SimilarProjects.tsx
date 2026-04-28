"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Caveat } from "next/font/google";
import { staggerCards, cardAnimation, fadeUp } from "@/lib/animations";
import type { Project } from "@/constants/project/projects-data";

const caveat = Caveat({ subsets: ["latin"] });

// ─── Single Card — نفس نمط ProjectsGrid ──────────────────
function SimilarCard({ title, image, imageAlt, href }: Omit<Project, "id" | "description" | "highlight" | "meta" | "challenges" | "social">) {
  return (
    <motion.div variants={cardAnimation} className="relative">
      <Link
        href={href}
        className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
        aria-label={`View project: ${title}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </Link>

      {/* Title — خارج الـ Link عشان overflow-hidden ما يقيده */}
      <div className="absolute bottom-6 left-5 pointer-events-none">
        <h3 className="text-2xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────
export default function SimilarProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-white py-16" aria-label="Similar projects">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center"
        >
          <p className={`${caveat.className} text-[24px] text-[#EEC044] mb-1`}>
            Recently Completed
          </p>
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Similar Projects
          </h2>
        </motion.div>

        {/* Grid — 4 columns زي الـ Figma */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <SimilarCard
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