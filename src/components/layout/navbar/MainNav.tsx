"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Search, ShoppingCart, Menu, X } from "lucide-react";
import Container from "../../ui/Container";
import { MENU_ITEMS, LOGO } from "@/constants/home/navbar";

// ─── Desktop Dropdown Item ────────────────────────────────
function NavItem({ item }: { item: (typeof MENU_ITEMS)[number] }) {
  return (
    <li className="group relative">
      <div className="flex cursor-pointer items-center gap-1 py-4">
        <Link
          href={item.href}
          className="font-medium text-gray-800 transition-colors duration-200 hover:text-green-600"
        >
          {item.label}
        </Link>
        {item.dropdown && (
          <ChevronDown
            size={15}
            className="text-gray-500 transition-all duration-300 group-hover:rotate-180 group-hover:text-green-600"
          />
        )}
      </div>

      {item.dropdown && (
        <ul className="invisible absolute top-full left-0 z-50 w-44 translate-y-2 rounded-md bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {item.dropdown.map((sub) => (
            <li key={sub.label}>
              <Link
                href={sub.href}
                className="block px-4 py-2.5 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-50 hover:text-green-600"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// ─── Mobile Accordion Item ────────────────────────────────
function MobileNavItem({
  item,
  onClose,
}: {
  item: (typeof MENU_ITEMS)[number];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-gray-100 last:border-0">
      {item.dropdown ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between px-4 py-3.5 font-medium text-gray-800 transition-colors duration-200 hover:text-green-600"
          >
            {item.label}
            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180 text-green-500" : ""}`}
            />
          </button>
          <ul
            className={`overflow-hidden bg-gray-50 transition-all duration-300 ${open ? "max-h-60" : "max-h-0"}`}
          >
            {item.dropdown.map((sub) => (
              <li key={sub.label}>
                <Link
                  href={sub.href}
                  onClick={onClose}
                  className="block px-8 py-2.5 text-sm text-gray-600 transition-colors duration-150 hover:text-green-600"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="block px-4 py-3.5 font-medium text-gray-800 transition-colors duration-200 hover:text-green-600"
        >
          {item.label}
        </Link>
      )}
    </li>
  );
}

// ─── Nav Actions (Search + Cart) ──────────────────────────
function NavActions() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className={`rounded-full border border-gray-300 px-4 py-1 text-sm text-gray-800 transition-all duration-300 ease-in-out outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 ${searchOpen ? "mr-2 w-44 opacity-100" : "pointer-events-none w-0 opacity-0"}`}
        />
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Toggle search"
        >
          <Search
            size={20}
            className="cursor-pointer text-gray-700 transition-colors duration-200 hover:text-green-600"
          />
        </button>
      </div>

      <div className="relative cursor-pointer" aria-label="Shopping cart">
        <ShoppingCart
          size={20}
          className="text-gray-700 transition-colors duration-200 hover:text-green-600"
        />
        <span className="absolute -top-2 -right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
          0
        </span>
      </div>
    </div>
  );
}

// ─── Main Nav ─────────────────────────────────────────────
export default function MainNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-gray-100 shadow-sm">
        <Container>
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <ul className="hidden items-center gap-6 md:flex">
              {MENU_ITEMS.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </ul>

            {/* Mobile: Logo + Actions + Hamburger */}
            <div className="flex w-full items-center justify-between py-3 md:hidden">
              <Link href="/" aria-label="Agrios Home">
                <Image
                  src={LOGO.src}
                  alt={LOGO.alt}
                  width={120}
                  height={36}
                  priority
                />
              </Link>

              <div className="flex items-center gap-4">
                <NavActions />
                <button
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open menu"
                  className="text-gray-700 transition-colors hover:text-green-600"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex">
              <NavActions />
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <Image src={LOGO.src} alt={LOGO.alt} width={110} height={34} />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="text-gray-500 transition-colors hover:text-green-600"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Menu */}
        <ul className="h-[calc(100%-65px)] overflow-y-auto">
          {MENU_ITEMS.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={() => setDrawerOpen(false)}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}
