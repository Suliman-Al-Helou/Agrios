import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { FOOTER_EXPLORE_LINKS } from "./footer.constants"

export function FooterLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#7ac943]">
        Explore
      </h3>
      <ul className="flex flex-col gap-2">
        {FOOTER_EXPLORE_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center gap-1.5 text-gray-400 text-sm transition-all duration-200 hover:text-[#7ac943] hover:translate-x-1 group"
            >
              <ChevronRight
                size={12}
                className="text-[#7ac943] opacity-0 -ml-3 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0"
              />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}