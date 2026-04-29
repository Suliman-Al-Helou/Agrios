import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa"
import { FOOTER_SOCIAL_LINKS } from "./footer.constants"

const SOCIAL_ICONS = [FaFacebook, FaInstagram, FaPinterest, FaTwitter]

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/" className="inline-flex items-center gap-2 group">
        <Image
          src="/logo-fotter-optimized.svg"
          alt="Agrios Logo"
          width={120}
          height={40}
          className="w-30 h-10"
        />

      </Link>

      <p className="text-gray-400 text-sm leading-relaxed max-w-[260px]">
        There are many variations of passages of lorem ipsum available, but the majority suffered.
      </p>

      <div className="flex items-center gap-2">
        {FOOTER_SOCIAL_LINKS.map((social, index) => {
          const Icon = SOCIAL_ICONS[index]
          return (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white transition-all duration-300 hover:border-[#7ac943] hover:text-[#7ac943] hover:scale-110"
            >
              <Icon size={14} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}