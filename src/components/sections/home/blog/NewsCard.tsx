import Image from "next/image";
import Link from "next/link";
import { User, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { NewsArticle } from "@/constants/home/News";

type Props = Omit<NewsArticle, "id">;

export default function NewsCard({
  title,
  image,
  imageAlt,
  date,
  author,
  comments,
  href,
}: Props) {
  return (
    <AnimatedSection animation="fadeInUp">
      <Link
        href={href}
        className="group block h-[420px] overflow-hidden rounded-lg bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
      >
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content — مخفي وبيظهر عند hover */}
        <div className="...[transform:translateY(120px)] transform px-4 pb-6 transition duration-500 ease-in-out group-hover:translate-y-0">
          {/* Date Badge */}
          <div className="mb-3 flex justify-center">
            <span className="inline-flex -translate-y-5 items-center justify-center rounded-[10px] bg-[#4BAF47] px-6 py-2 text-[14px] font-bold text-white">
              {date}
            </span>
          </div>

          {/* Meta */}
          <div className="mb-3 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User size={16} className="text-yellow-500" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} className="text-yellow-500" />
              <span>
                {comments} Comment{comments > 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mx-auto text-[22px] leading-snug font-semibold text-black">
            {title}
          </h3>
        </div>
      </Link>
    </AnimatedSection>
  );
}
