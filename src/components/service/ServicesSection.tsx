import AnimatedSection from "@/components/ui/AnimatedSection";
import { caveat } from "@/lib/fonts";
import ServiceCard from "@/components/service/ServicesCard";
import type { ServicesSectionData } from "@/types/Service";

type Props = {
  data: ServicesSectionData;
};

export default function ServicesSection({data}: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-16 pb-32">
      {/* Top gray background strip */}
      <div className="absolute top-0 left-0 h-100 w-full bg-gray-100" />

      <div className="relative mx-auto max-w-6xl pt-28">
        {/* Header */}
        <AnimatedSection
          animation="fadeInUp"
          className="mb-12 text-center"
        >
          <span className={`${caveat.className} text-[24px] text-[#EEC044]`}>
            {data.badge}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">
            {data.title}
          </h2>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {data.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              imageAlt={service.imageAlt}
              icon={service.icon}
              iconAlt={service.iconAlt}
              href={service.href}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
