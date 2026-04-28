"use client"

import Link from "next/link"
import { FooterBrand } from "./FooterBrand"
import { FooterLinks } from "./FooterLinks"
import { FooterNews } from "./FooterNews"
import { FooterContact } from "./FooterContact"
import { FOOTER_LEGAL_LINKS } from "./footer.constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinks />
          <FooterNews />
          <FooterContact />
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © All Copyright {currentYear} by{" "}
            <Link href="https://shawonetc.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#7ac943] transition-colors duration-200">
              shawonetc Themes
            </Link>
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_LEGAL_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link href={link.href} className="text-gray-500 text-xs hover:text-gray-300 transition-colors duration-200">
                  {link.label}
                </Link>
                {index < FOOTER_LEGAL_LINKS.length - 1 && <span className="text-gray-700 text-xs">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}