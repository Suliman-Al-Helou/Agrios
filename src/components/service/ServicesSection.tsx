"use client";

import { motion } from "motion/react";
import { caveat } from "@/lib/fonts";

import { fadeUp, staggerCards } from "@/lib/animations";
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <span className={`${caveat.className} text-[24px] text-[#EEC044]`}>
            {data.badge}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">
            {data.title}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
        >
          {data.services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              imageAlt={service.imageAlt}
              icon={service.icon}
              iconAlt={service.iconAlt}
              href={service.href}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
