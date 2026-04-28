import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Contact from "@/components/sections/contact/Contact";
import { CONTACT_PAGE_HERO } from "@/constants/contact/contact";

// ─── SEO ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Agrios team for agriculture services, organic farming inquiries, and more.",
  keywords: ["contact agrios", "agriculture contact", "organic farming support"],
  openGraph: {
    title: "Contact | Agrios Agriculture Farming",
    description: "Get in touch with the Agrios team.",
    images: ["/bg-hero.webp"],
  },
  alternates: { canonical: "/contact" },
};

// ─── Page ─────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main>
      <PageHero
        title={CONTACT_PAGE_HERO.title}
        backgroundImage={CONTACT_PAGE_HERO.backgroundImage}
        breadcrumbs={CONTACT_PAGE_HERO.breadcrumbs}
      />
      <Contact />
    </main>
  );
}