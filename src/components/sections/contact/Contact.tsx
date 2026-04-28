"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { caveat } from "@/lib/fonts";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  CONTACT_CARDS,
  CONTACT_MAP_URL,
  type ContactCard,
} from "@/constants/contact/contact";

// ─── Info Card ────────────────────────────────────────────
function InfoCard({ card }: { card: ContactCard }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`${card.bgColor} mt-15 rounded-xl p-10 text-white shadow-lg`}
    >
      <h3 className={`${caveat.className} mb-4 text-3xl font-bold`}>
        {card.title}
      </h3>
      {card.description && (
        <p className="text-sm leading-relaxed opacity-90">{card.description}</p>
      )}
      {card.phone && (
        <div className="space-y-1 text-sm">
          <a href={`tel:${card.phone.replace(/\s/g, "")}`} className="block hover:underline">
            {card.phone}
          </a>
          <a href={`mailto:${card.email}`} className="block hover:underline">
            {card.email}
          </a>
          <p className="opacity-90">{card.workTime}</p>
        </div>
      )}
      {card.address && (
        <p className="text-sm leading-relaxed opacity-90">{card.address}</p>
      )}
    </motion.div>
  );
}

// ─── Contact Form ─────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    // ✅ relative + overflow-hidden عشان الـ Image يتقطع صح
    <div className="relative overflow-hidden rounded-xl p-10" style={{ minHeight: "650px" }}>

      {/* ✅ Background Image — next/image أفضل من CSS background */}
      <Image
        src="/images/contact/bg-form.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
        aria-hidden="true"
      />

      {/* ✅ Overlay — فوق الصورة وتحت المحتوى */}
      <div className="absolute inset-0 bg-white/85" />

      {/* ✅ المحتوى — relative + z-10 عشان يكون فوق الـ overlay */}
      <div className="relative z-10">
        <p className={`${caveat.className} text-[24px] font-medium text-[#EEC044]`}>
          Contact us
        </p>
        <h2 className="mb-8 text-5xl font-bold text-black">Write a Message</h2>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg  bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">Message</label>
            <textarea
              id="contact-message"
              placeholder="Write a Message"
              rows={6}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg   bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#4BAF47] focus:ring-2 focus:ring-[#4BAF47]/20"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#4BAF47] px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600 active:scale-95"
          >
            {sent ? "Message Sent! ✓" : "Send a Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="bg-white">
      {/* ── Info Cards ── */}
      <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {CONTACT_CARDS.map((card, index) => (
            <InfoCard key={index} card={card} />
          ))}
        </motion.div>
      </section>

      {/* ── Map + Form ── */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1  gap-0 overflow-hidden rounded-2xl shadow-sm md:grid-cols-2 bg-[#F8F7F0] " 
        >
          {/* Map */}
          <motion.div variants={fadeUp} style={{ height: "650px" }}>
            <iframe
              src={CONTACT_MAP_URL}
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agrios location on Google Maps"
            />
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}