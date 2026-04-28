"use client";
import { ServicesSectionData } from "@/types/Service";

interface ServicesSectionProps {
  data: ServicesSectionData["services"]; // هذا array من الخدمات
}
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { cardAnimation, staggerContainer } from "@/lib/animations";

export default function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {data.map((service) => (
            <motion.div
              key={service.id}
              variants={cardAnimation}
              className="relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Link href={service.href}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div >{service.title}</div>
                </Link>
              </div>
              <div className="text-black absolute top-0 left-0 w-full bg-white py-2 text-center font-semibold">
                {service.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
