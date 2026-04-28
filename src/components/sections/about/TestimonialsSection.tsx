import Image from "next/image";
import {
  TESTIMONIALS,
  TESTIMONIALS_CONTENT,
} from "@/constants/about/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f0] py-24 ">
      {/* 🔥 Background Pattern */}
      <div className="absolute  inset-0 bg-[url('/images/about/testimonials/bg-Testimonials.png')] bg-cover bg-center  " />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <SectionHeader
            badge={TESTIMONIALS_CONTENT.badge}
            title={TESTIMONIALS_CONTENT.title}
          />
        </div>
        {/* Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-23 px-4 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-white p-8 pl-34 py-17 shadow-sm"
            >
              {/* Avatar */}
              <div className="absolute top-10 -left-12">
                <div className="relative h-46 w-35 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Green Circle */}
                <div className="absolute top-18 -right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#4BAF47] text-lg text-white">
                  –
                </div>
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed text-gray-500 w-82">
                {item.text}
              </p>

              {/* Divider */}
              <div className="my-4 h-[2px] w-10 bg-[#EEC044]" />

              {/* Name */}
              <div className="text-end">
                <p className="font-semibold text-black">{item.name}</p>
                <p className="text-sm text-gray-400 ">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
