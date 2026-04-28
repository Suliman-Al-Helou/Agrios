"use client";
import FeatureCard from "./FeatureCard";
import Container from "@/components/ui/Container";
import { motion } from "motion/react";
import {  staggerContainer } from "@/lib/animations";

export default function Features() {
  const data = [
    {
      title: "Feature 01",
      subtitle: "We're using a new technology",
      image: "/section2-1.png",
    },
    {
      title: "Feature 02",
      subtitle: "Good in smart organic services",
      image: "/section2-2.png",
    },
    {
      title: "Feature 03",
      subtitle: "Reforming in the systems",
      image: "/section2-3.png",
    },
  ];

  return (
    <section className="bg-white relative z-10">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

          {data.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}

        </motion.div>
      </Container>
    </section>
  );
}