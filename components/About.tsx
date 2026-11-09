"use client";

import { motion } from "framer-motion";
import { Leaf, Clock3, ShieldCheck, Car } from "lucide-react";

const POINTS = [
  {
    icon: Clock3,
    title: "Save valuable time",
    desc: "Swift charter transport that keeps employees on schedule, even through Karachi's heaviest traffic.",
  },
  {
    icon: Leaf,
    title: "Cost-effective & eco-friendly",
    desc: "Right-sized vehicles and optimized routes reduce cost per seat and environmental impact.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    desc: "Trained drivers, maintained vehicles, and live tracking minimize the risks of daily road congestion.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">
            Who We Are
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight text-balance">
            Charter transportation built around your employees&apos; safety
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Due to frequent congestion on Karachi&apos;s roads, there are
            often risks involved — and this is precisely why companies turn
            to NKC. We offer cost-effective transport services that are
            environment-friendly and help save customers valuable time.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            NKC provides swift charter transportation services in motor
            coaches and specialized vehicles that make sure your employees
            arrive safely and on time, every time.
          </p>

          <div className="mt-9 space-y-5">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-500">
                  <p.icon size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">{p.title}</h3>
                  <p className="text-sm text-neutral-500 mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-brand-dark-2 p-10 sm:p-14 min-h-[420px] flex items-end">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-brand-red-500/25 blur-3xl" />

            <motion.div
              animate={{ x: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-14 right-10 text-white/15"
            >
              <Car size={120} strokeWidth={1} />
            </motion.div>

            <div className="relative w-full">
              <div className="flex gap-3 flex-wrap mb-6">
                {["Safe", "On-Time", "Tracked", "Eco-Friendly"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-white leading-snug text-balance">
                &ldquo;Arrive safely, and on time — every time.&rdquo;
              </p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-road-dashes opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
