import Image from "next/image";
import Link from "next/link";
import { User, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { NewsArticle } from "@/constants/shared/newsCard";

type Props = Omit<NewsArticle, "id" | "excerpt" | "category"> & { delay?: number };

export default function NewsCard({
  title,
  image,
  imageAlt,
  date,
  imageGrid,
  author,
  comments,
  href,
  delay = 0,
}: Props) {
  return (
    <AnimatedSection animation="fadeInUp" delay={delay}>
      <Link
        href={href}
        className="group block h-[420px] overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        aria-label={`Read article: ${title}`}
      >
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image ? image : imageGrid}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className={`${image ? "translate-y-[120px]" : "translate-y-0"} px-5 pb-6 transition-transform duration-500 ease-in-out group-hover:translate-y-0`}>
          {/* Date Badge */}
          <div className="mb-3 flex justify-center">
            <span className="-translate-y-5 inline-flex items-center rounded-[10px] bg-[#4BAF47] px-6 py-2 text-sm font-bold text-white">
              {date}
            </span>
          </div>

          {/* Meta */}
          <div className="mb-3 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User size={15} className="text-[#EEC044]" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={15} className="text-[#EEC044]" />
              <span>{comments} Comment{comments !== 1 ? "s" : ""}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="w-[245px] m-auto text-center text-[24px] font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#4BAF47]">
            {title}
          </h3>
        </div>
      </Link>
    </AnimatedSection>
  );
}