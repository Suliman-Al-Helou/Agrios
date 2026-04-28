import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Navbar from "../components/layout/navbar/Navbar";
import { Footer } from "../components/sections/home/footer";
import { caveat } from "@/lib/fonts";

import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
  preload: true,
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
  preload: false,
});
const outfit = Outfit({
  subsets: ["latin"],
  display: "optional",
  preload: true,
});

export const metadata: Metadata = {
  title: "Agrios - Organic Agriculture Farm & Fresh Food Solutions",
  description:
    "Agrios is the largest global organic farm. We provide fresh agriculture products, organic vegetables, dairy products, and sustainable farming solutions.",
  keywords:
    "agriculture, organic farm, eco farming, organic products, vegetables, dairy",
  openGraph: {
    title: "Agrios — Agriculture & Organic Farm",
    description: "Fresh organic products from the largest global organic farm.",
    type: "website",
  },
  metadataBase: new URL("https://agrios.com"),
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.className} ${caveat.variable} h-full antialiased`}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Agrios",
      url: "https://agrios.com",
      description: "Largest global organic farm",
    }),
  }}
/>;
