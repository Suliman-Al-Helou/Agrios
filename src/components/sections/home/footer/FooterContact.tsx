"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { FOOTER_CONTACT_INFO } from "./footer.constants"

export function FooterContact() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#7ac943]">
        Contact
      </h3>

      <ul className="flex flex-col gap-2.5">
        <li className="flex items-center gap-3 text-sm text-gray-400 group">
          <div className="w-7 h-7 rounded-full bg-[#7ac943]/10 border border-[#7ac943]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#7ac943]/20">
            <Phone size={12} className="text-[#EEC044]" />
          </div>
          <a href={`tel:${FOOTER_CONTACT_INFO.phone}`} className="hover:text-[#7ac943] transition-colors duration-200">
            {FOOTER_CONTACT_INFO.phone}
          </a>
        </li>

        <li className="flex items-center gap-3 text-sm text-gray-400 group">
          <div className="w-7 h-7 rounded-full bg-[#7ac943]/10 border border-[#7ac943]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#7ac943]/20">
            <Mail size={12} className="text-[#EEC044]" />
          </div>
          <a href={`mailto:${FOOTER_CONTACT_INFO.email}`} className="hover:text-[#7ac943] transition-colors duration-200">
            {FOOTER_CONTACT_INFO.email}
          </a>
        </li>

        <li className="flex items-start gap-3 text-sm text-gray-400 group">
          <div className="w-7 h-7 rounded-full bg-[#7ac943]/10 border border-[#7ac943]/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-[#7ac943]/20">
            <MapPin size={12} className="text-[#EEC044]" />
          </div>
          <div className="flex flex-col">
            <span>{FOOTER_CONTACT_INFO.address}</span>
            <span>{FOOTER_CONTACT_INFO.city}</span>
          </div>
        </li>
      </ul>

      <form onSubmit={handleSubscribe}>
        <div className="flex items-stretch rounded overflow-hidden border border-gray-600 focus-within:border-[#7ac943] transition-colors duration-200">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-1 bg-white px-3 py-2.5 text-gray-300 text-xs placeholder:text-gray-500 outline-none w-20"
          />
          <button
            type="submit"
            className="px-3 bg-[#7ac943] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#68b336] active:scale-95"
            aria-label="Subscribe"
          >
            {subscribed ? <span className="text-[10px] font-semibold px-1">✓</span> : <Send size={13} />}
          </button>
        </div>
        {subscribed && (
          <p className="text-[#7ac943] text-xs mt-1.5">Subscribed successfully!</p>
        )}
      </form>
    </div>
  )
}