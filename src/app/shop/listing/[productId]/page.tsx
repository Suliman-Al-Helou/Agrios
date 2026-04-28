import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getRelatedProducts } from "@/constants/shop/products";
import PageHero from "@/components/shared/PageHero";
import ProductDetailClient from "@/app/shop/listing/ProductDetailClient";

type Props = { params: Promise<{ productId: string }> };

// ─── Dynamic Metadata ─────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return { title: "Product Not Found | Agrios" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Agrios Shop`,
      description: product.description,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
    alternates: { canonical: `/shop/${productId}` },
  };
}

// ─── SSG ──────────────────────────────────────────────────
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ productId: p.id }));
}

// ─── Page ─────────────────────────────────────────────────
export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) notFound();

  const related = getRelatedProducts(productId);

  return (
    <main>
      <PageHero
        title="Our Shop"
        backgroundImage="/bg-hero.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: product.category, href: `/shop?category=${product.category.toLowerCase()}` },
          { label: product.name },
        ]}
      />
      <ProductDetailClient product={product} related={related} />
    </main>
  );
}