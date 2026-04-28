import Image from "next/image";
import { WHAT_WE_DO } from "@/constants/services";
import SectionHeader from "@/components/ui/SectionHeader";

// Server Component
export default function WhatWeDo() {
  const { badge, title, description1, description2, image, features } =
    WHAT_WE_DO;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-21 md:grid-cols-2">
          {/* Image — Left */}
          <div className="relative h-150 w-full  z-1">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="bg-[#F8F7F0] rounded-full w-107 h-107 absolute -left-[40%] top-[15%]  -z-1 "></div>
          </div>

          {/* Content — Right */}
          <div>
            <SectionHeader
              badge={badge}
              title={title}
              align="left"
              animated={false}
            />

            <p className="mb-4 leading-relaxed text-gray-500">{description1}</p>
            <p className="mb-10 leading-relaxed text-gray-500">
              {description2}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature) => {
                return (
                  <div
                    key={feature.id}
                    className="flex flex-col items-center justify-center gap-3 rounded-xl w-[170px] h-[200px] py-6 text-center text-white"
                    style={{ backgroundColor: feature.color }}
                  >
                    <Image src={feature.icon} alt={"iconAlt"} width={85} height={85}  />
                    <span className="text-[16px] font-semibold">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
