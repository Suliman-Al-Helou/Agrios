import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Service } from "@/types/Service";

type Props = Pick<
  Service,
  "title" | "image" | "imageAlt" | "icon" | "iconAlt" | "href"
> & { delay?: number };

export default function ServiceCard({
  title,
  image,
  imageAlt,
  icon,
  iconAlt,
  href,
  delay = 0,
}: Props) {
  return (
    <AnimatedSection
      animation="fadeInUp"
      delay={delay}
      className="group relative cursor-pointer overflow-hidden rounded-xl"
    >
      {/* Image */}
      <div className="relative h-107 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Overlay Card */}
      <div className="absolute bottom-4 left-1/2 h-32 w-[80%] -translate-x-1/2 rounded-xl bg-white px-4 py-4 text-center shadow-lg transition-all duration-300 group-hover:bottom-6">
        {/* Icon */}
        <div className="mx-auto -mt-10 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-[#C5CE38]">
          <Image src={icon} alt={iconAlt} width={40} height={40} />
        </div>

        <h3 className="mt-2 text-center text-[18px] leading-tight font-semibold text-black">
          {title}
        </h3>

        {/* Read More Button */}
        <Link
          href={href}
          aria-label={`Read more about ${title} `}
          className="absolute top-0 -right-4 flex h-[46px] w-[110px] items-center justify-center rounded-[10px] bg-[#4BAF47] px-3 py-1 text-[12px] font-medium text-white transition-colors duration-200 hover:bg-green-600"
        >
          Read More About {title}
        </Link>
      </div>
    </AnimatedSection>
  );
}
