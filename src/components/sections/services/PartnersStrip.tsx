import Image from "next/image";
import { PARTNERS } from "@/constants/services";

// Server Component — لا يحتاج "use client"
export default function PartnersStrip() {
  return (
    <section className="bg-[#f5f3ee] py-20 ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="relative h-12 w-32">
              <Image
                src={partner.logo}
                alt={partner.label}
                fill
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
