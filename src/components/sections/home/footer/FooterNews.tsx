import Link from "next/link"
import { Calendar } from "lucide-react"
import { FOOTER_NEWS_ITEMS } from "./footer.constants"

export function FooterNews() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#4BAF47]">
        News
      </h3>
      <ul className="flex flex-col gap-4">
        {FOOTER_NEWS_ITEMS.map((item) => (
          <li key={item.href} className="group">
            <Link href={item.href} className="flex flex-col gap-1">
              <span className="text-white text-sm font-bold leading-snug transition-colors duration-200 group-hover:text-[#7ac943]">
                {item.title}
              </span>
              <div className="flex items-center gap-1.5 text-[#EEC044] text-xs">
                <Calendar size={11} />
                <span>{item.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}