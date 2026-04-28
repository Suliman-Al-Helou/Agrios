import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PROJECTS_DATA,
  PROJECT_IDS,
  getSimilarProjects,
} from "@/constants/project/projects-data";
import PageHero from "@/components/shared/PageHero";
import ProjectDetail from "@/components/sections/project/ProjectDetail";
import SimilarProjects from "@/components/sections/project/SimilarProjects";

type Props = { params: Promise<{ projectId: string }> };

// ─── Dynamic Metadata ─────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = PROJECTS_DATA[projectId];

  if (!project) return { title: "Project Not Found | Agrios" };

  return {
    title: project.title,
    description: project.description[0].slice(0, 160),
    openGraph: {
      title: `${project.title} | Agrios Projects`,
      description: project.description[0].slice(0, 160),
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    alternates: { canonical: `/projects/${projectId}` },
  };
}

// ─── SSG ──────────────────────────────────────────────────
export function generateStaticParams() {
  return PROJECT_IDS.map((projectId) => ({ projectId }));
}

// ─── Page ─────────────────────────────────────────────────
export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const project = PROJECTS_DATA[projectId];

  if (!project) notFound();

  const similar = getSimilarProjects(projectId);

  return (
    <main>
      <PageHero
        title="Projects"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: project.title }]}
      />
      <ProjectDetail project={project} />
      <SimilarProjects projects={similar} />
    </main>
  );
}
