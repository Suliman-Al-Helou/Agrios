import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/constants/service";
import ServicesPageClient from "./ServicesPageClient";

type Props = {
  params: Promise<{ serviceId: string }>;
};

// ─── Dynamic Metadata ─────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = SERVICES_DATA[serviceId];

  if (!service) {
    return { title: "Service Not Found | Agrios" };
  }

  return {
    title: `${service.title} | Agrios Agriculture Farming`,
    description: service.metaDescription,
    keywords: ["agriculture services", "organic farming", service.title.toLowerCase()],
    openGraph: {
      title: `${service.title} | Agrios Agriculture Farming`,
      description: service.metaDescription,
      images: [service.mainImage.src],
    },
  };
}

// ─── Static Params ────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((serviceId) => ({ serviceId }));
}

// ─── Page ─────────────────────────────────────────────────
export default async function ServicePage({ params }: Props) {
  const { serviceId } = await params;
  const service = SERVICES_DATA[serviceId];

  if (!service) notFound();

  return <ServicesPageClient service={service} />;
}