import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import { TEAM_MEMBERS } from "@/constants/about/team";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TeamSection() {
  return (
    <section className="bg-white pt-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Header */}
        <div className="mb-12">
          <SectionHeader badge="Team Members" title="Meet Our Farmers" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative w-92 overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative h-109 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/40" />
              </div>

              {/* Share Icon */}
              <div className="absolute bottom-7 left-30 z-10 flex h-12.5 w-12.5 items-center justify-center rounded-md bg-[#4BAF47] text-white shadow-md">
                <FaShareAlt size={30} aria-hidden="true" />
              </div>

              {/* Name & Role */}
              <div className="absolute right-0 bottom-0 rounded-l-2xl bg-white py-6 pr-15 pl-15 text-left">
                <p className="text-lg leading-tight font-semibold text-black">
                  {member.name}
                </p>
                <p className="text-end text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          <div className="bg-[#F8F7F0] w-full h-58 mt-25 "></div>

    </section>
  );
}
