"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "@/lib/animations";
import type {
  Project,
  SocialPlatform,
} from "@/constants/project/projects-data";

// ─── Icons Map ────────────────────────────────────────────
const SOCIAL_ICONS: Record<SocialPlatform, React.ElementType> = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  pinterest: FaPinterestP,
  instagram: FaInstagram,
};

// ─── Meta Sidebar ─────────────────────────────────────────
function MetaSidebar({ project }: { project: Project }) {
  const rows = [
    { label: "Services", value: project.meta.service },
    { label: "Farmer", value: project.meta.farmer },
    { label: "Duration", value: project.meta.duration },
    { label: "Location", value: project.meta.location },
  ];

  return (
    <motion.aside
      variants={slideLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      aria-label="Project details"
      className="w-full self-start overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-t from-black/30 to-transparent"
    >
      {/* Yellow top border زي الـ Figma */}
      <div className="w-full bg-[#EEC044]" style={{ height: "3px" }} />

      <div style={{ padding: "24px" }}>
        <dl className="divide-y divide-gray-100">
          {rows.map(({ label, value }) => (
            <div key={label} className="py-3">
              <dt className="mb-2 text-xs tracking-wide text-gray-400 uppercase">
                {label}:
              </dt>
              <dd className="font-semibold text-black">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Social Icons */}
        <div className="mt-7 flex gap-3" aria-label="Share on social media">
          {project.social.map(({ platform, href, label }) => {
            const Icon = SOCIAL_ICONS[platform];
            return (
              <Link
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border-gray-200 bg-[#F8F7F0] text-black transition-all duration-200 hover:scale-110 hover:border-[#4BAF47] hover:text-[#4BAF47]"
              >
                <Icon size={14} />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}

// ─── Main Content ─────────────────────────────────────────
function MainContent({ project }: { project: Project }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="min-w-0 flex-1 space-y-6"
    >
      {/* Hero Image */}

      {/* Title */}
      <motion.h1 variants={fadeUp} className="text-3xl font-bold text-black">
        {project.title}
      </motion.h1>

      {/* Description */}
      <motion.div
        variants={fadeUp}
        className="space-y-4 text-sm leading-relaxed text-gray-500"
      >
        <p>{project.description[0]}</p>
        <p className="font-bold text-gray-800 mt-6 mb-6">{project.highlight}</p>
        <p>{project.description[1]}</p>
        <p>{project.description[2]}</p>
      </motion.div>

      {/* Challenges */}
      <motion.div variants={fadeUp}>
        <h2 className="mb-4 text-2xl font-bold text-black">Challenges</h2>
        <ul className="mb-4 space-y-2" aria-label="Project challenges">
          {project.challenges.points.map((point) => (
            <li key={point} className="text-sm font-bold text-gray-800">
              {point}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-gray-500">
          {project.challenges.conclusion}
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Page Layout ──────────────────────────────────────────
export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        {/* ✅ الصورة فوق الكل */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ height: "520px" }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Grid: Content | Sidebar */}
        <div className="mt-10 flex gap-10">
          <div className="flex-1">
            <MainContent project={project} />
          </div>
          <div className="shrink-0" style={{ width: "380px" }}>
            <MetaSidebar project={project} />
          </div>
        </div>
      </div>
    </section>
  );
}
