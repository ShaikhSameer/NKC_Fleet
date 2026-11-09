"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { CONTACT } from "@/lib/content";

export default function CTA() {
  return (
    <section className="relative bg-brand-dark py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red-500/15 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white text-balance">
          Ready to move your fleet forward?
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Talk to our team about a tailored fleet, staff transport, or
          hospital shuttle plan — backed by 19 years of on-ground experience.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-red-500/30 hover:bg-brand-red-600 transition-colors"
          >
            Talk to Our Team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
          >
            <PhoneCall size={15} />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
