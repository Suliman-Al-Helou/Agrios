import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ABOUT_INTRO, ABOUT_CONTENT } from "@/constants/about/intro";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutIntro() {
  const { subtitle, description, checklist, cta, images } = ABOUT_INTRO;

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-33 md:grid-cols-2">
          {/* Images — Left */}
          <div className="relative flex justify-center">
            {/* Main circular image */}
            <div className="relative z-10 aspect-square w-75 overflow-hidden rounded-2xl md:w-112.5">
              <Image
                src={images.main.src}
                alt={images.main.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary small circular image */}
            <div className="absolute bottom-0 left-0 z-10 aspect-square w-30 overflow-hidden rounded-2xl border-white shadow-lg md:-bottom-20 md:-left-20 md:w-72">
              <Image
                src={images.secondary.src}
                alt={images.secondary.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[40%] -left-7 hidden h-25 w-25 rounded-2xl bg-[#C5CE38] md:block" />
          </div>

          {/* Text — Right */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div>
              <SectionHeader
                badge={ABOUT_CONTENT.badge}
                title={ABOUT_CONTENT.title}
                align="left"
              />  
            </div>

            {/* Subtitle */}
            <p className="mt-4 text-[18px] font-semibold text-[#4BAF47]">
              {subtitle}
            </p>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-132 text-[16px] leading-relaxed text-gray-400 md:mx-0">
              {description}
            </p>

            {/* Checklist */}
            <ul className="mt-6 flex flex-col items-center space-y-3 md:items-start">
              {checklist.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <Check
                    size={18}
                    className="shrink-0 rounded-full text-[#C5CE38]"
                    aria-hidden="true"
                  />
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div>
              <Link
                href={cta.href}
                className="mt-10 inline-flex h-15 w-49 items-center justify-center rounded-[10px] bg-[#4BAF47] px-6 py-3 font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
