import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ProjectsGrid from "@/components/sections/project/ProjectsGrid";
import {
  PROJECTS_PAGE_HERO,
  PROJECTS_LIST,
} from "@/constants/project/project-page";

// ─── SEO ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Agrios completed projects including easy harvesting, ecological farming, organic solutions, and healthy food initiatives.",
  keywords: [
    "agriculture projects",
    "organic farming projects",
    "ecological farming",
    "harvesting",
    "fresh products",
  ],
  openGraph: {
    title: "Projects | Agrios Agriculture Farming",
    description:
      "Explore our completed agriculture and organic farming projects.",
    images: ["/images/project/hero/project-01.webp"],
  },
  alternates: { canonical: "/projects" },
};

// ─── Page ─────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title={PROJECTS_PAGE_HERO.title}
        backgroundImage={PROJECTS_PAGE_HERO.backgroundImage}
        breadcrumbs={PROJECTS_PAGE_HERO.breadcrumbs}
      />
      <ProjectsGrid projects={PROJECTS_LIST} />
    </main>
  );
}
