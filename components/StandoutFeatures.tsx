"use client";

import { motion } from "framer-motion";
import { HeartPulse, Clock, Radar, type LucideIcon } from "lucide-react";
import { STANDOUT_FEATURES } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = { HeartPulse, Clock, Radar };

export default function StandoutFeatures() {
  return (
    <section id="services" className="relative bg-brand-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">
            Standout Features
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark text-balance">
            What sets our fleet service apart
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDOUT_FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-neutral-100 hover:shadow-xl hover:shadow-brand-red-500/10 transition-shadow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red-500 to-brand-red-700 text-white shadow-lg shadow-brand-red-500/30 group-hover:scale-105 transition-transform">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="font-display mt-6 text-lg font-bold text-brand-dark">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
