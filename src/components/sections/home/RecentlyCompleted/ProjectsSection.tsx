"use client";

import { motion } from "motion/react";
import { caveat } from "@/lib/fonts";

import { fadeUp, staggerCards } from "@/lib/animations";
import { PROJECTS_CONTENT, PROJECTS } from "@/constants/home/Projects";
import ProjectCard from "@/components/sections/home/RecentlyCompleted/ProjectCards";


export default function ProjectsSection() {
  return (
    <section className="bg-gray-50 px-4 py-30 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className={`${caveat.className} mb-2 text-[24px] text-yellow-500`}>
            {PROJECTS_CONTENT.badge}
          </p>
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            {PROJECTS_CONTENT.title}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROJECTS.map((project) => (
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
