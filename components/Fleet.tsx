"use client";

import { motion } from "framer-motion";
import { Car, Bus, BusFront, Truck, Sunrise, Sun, Moon } from "lucide-react";
import { FLEET_TYPES } from "@/lib/content";

const FLEET_ICONS = [Truck, Bus, BusFront, Car];

const SHIFTS = [
  { icon: Sunrise, label: "Morning Shift" },
  { icon: Sun, label: "Evening Shift" },
  { icon: Moon, label: "Night Shift" },
];

export default function Fleet() {
  return (
    <section id="fleet" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-16 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">
              Our Fleet
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark text-balance">
              100+ company-owned vehicles, ready every shift
            </h2>
            <p className="mt-4 text-neutral-600 max-w-xl">
              Every vehicle in our fleet is owned by NKC — never sourced from
              a third-party vendor — so quality, safety, and maintenance stay
              entirely in our hands.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {FLEET_TYPES.map((f, i) => {
                const Icon = FLEET_ICONS[i % FLEET_ICONS.length];
                return (
                  <motion.div
                    key={f.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-neutral-100 bg-brand-sand p-6 hover:border-brand-red-200 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-red-500 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display mt-4 font-bold text-brand-dark">
                      {f.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-brand-dark p-8 sm:p-10 text-white sticky top-24"
          >
            <h3 className="font-display text-xl font-bold">Rotational &amp; General Shifts</h3>
            <p className="mt-2 text-sm text-white/55">
              Coverage structured around how hospitals and corporates
              actually operate.
            </p>
            <div className="mt-7 space-y-3">
              {SHIFTS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3.5"
                >
                  <s.icon size={18} className="text-brand-red-400" />
                  <span className="text-sm font-medium text-white/85">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="font-display text-2xl font-extrabold">1,137</div>
                <div className="text-xs text-white/50 mt-0.5">Staff transported</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold">100+</div>
                <div className="text-xs text-white/50 mt-0.5">Vehicles owned</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
