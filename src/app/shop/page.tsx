import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ShopGrid from "@/components/sections/shop/ShopGrid";
import { PRODUCTS, SHOP_CATEGORIES } from "@/constants/shop/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse Agrios fresh organic products — vegetables, fruits, and more. Showing 1-9 of 10 results.",
  openGraph: {
    title: "Shop | Agrios Agriculture Farming",
    description: "Fresh organic products from our farm.",
    images: ["/images/shop/apples.png"],
  },
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <main>
      <PageHero
        title="Our Shop"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop" },
        ]}
      />
      <ShopGrid products={PRODUCTS} categories={SHOP_CATEGORIES} />
    </main>
  );
}