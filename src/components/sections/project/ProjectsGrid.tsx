import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Projects } from "@/constants/project/project-page";

function ProjectCard({ title, image, imageAlt, href, delay = 0 }: Omit<Projects, "id"> & { delay?: number }) {
  return (
    <AnimatedSection animation="fadeInUp" delay={delay} className="relative">
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
    </AnimatedSection>
  );
}

// ─── Grid ─────────────────────────────────────────────────
export default function ProjectsGrid({ projects }: { projects: Projects[] }) {
  return (
    <section className="bg-white py-20" aria-label="Projects grid">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              href={project.href}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
