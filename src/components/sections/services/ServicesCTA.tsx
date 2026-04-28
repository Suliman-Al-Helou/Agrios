import Link from "next/link";
import { caveat } from "@/lib/fonts";

import { SERVICES_CTA } from "@/constants/services";


// Server Component
export default function ServicesCTA() {
  const { badge, title, buttonLabel, buttonHref } = SERVICES_CTA;

  return (
    <section className="bg-[#4BAF47] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Text */}
          <div>
            <p className={`${caveat.className} text-[30px] text-[#EEC044]`}>
              {badge}
            </p>
            <h2 className=" md:w-187 text-2xl font-bold leading-snug text-white md:text-[38px]">
              {title}
            </h2>
          </div>

          {/* Button */}
          <Link
            href={buttonHref}
            className="shrink-0 rounded-[10px] bg-[#EEC044] px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            {buttonLabel}
          </Link>

        </div>
      </div>
    </section>
  );
}
