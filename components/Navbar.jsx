"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT, ASSETS } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-4px_rgba(0,0,0,0.12)]"
          : "bg-white/0"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-2">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src={scrolled ? ASSETS.logoNavy : ASSETS.logoWhite}
            alt="NKC Fleet Management Services"
            width={2048}
            height={1188}
            priority
            className="h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-neutral-700 hover:text-brand-red-500"
                  : "text-white/90 hover:text-brand-red-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-red-500 text-white text-sm font-semibold px-5 py-2.5 shadow-lg shadow-brand-red-500/25 hover:bg-brand-red-600 transition-colors"
          >
            <Phone size={15} strokeWidth={2.4} />
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors ${
            scrolled || open ? "text-neutral-800" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100 shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-neutral-700 hover:text-brand-red-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red-500 text-white text-sm font-semibold px-5 py-3 mt-1"
              >
                <Phone size={15} />
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
