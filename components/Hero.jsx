"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Radar, Phone } from "lucide-react";
import { STATS, ASSETS } from "@/lib/content";
import { useCountUp } from "@/lib/useCountUp";

function StatPill({ stat, index }) {
  const { ref, value } = useCountUp(stat.value, 1400 + index * 150);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center lg:items-start gap-0.5 py-3 lg:py-0 border-white/15 max-lg:pr-5 max-lg:odd:pl-0 max-lg:even:pl-5 max-lg:even:border-l lg:pr-3 lg:pl-3 lg:first:pl-0 lg:border-l lg:first:border-l-0"
    >
      <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
        {value}
        {stat.suffix}
      </span>
      <span className="text-[11px] sm:text-xs uppercase tracking-wide text-white/60 text-center lg:text-left whitespace-pre-line">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-dark pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={ASSETS.heroFleet}
          alt="NKC Fleet drivers and vehicles"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/55 to-brand-dark/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-brand-red-500/25 blur-[110px]" />
        <div className="absolute top-40 -left-32 h-[380px] w-[380px] rounded-full bg-brand-blue-500/20 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
          >
            <ShieldCheck size={14} className="text-brand-red-400" />
            19+ Years Managing Hospital &amp; Corporate Fleets in Karachi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] text-white text-balance"
          >
            Fleet management that gets your{" "}
            <span className="relative inline-block text-brand-red-400">
              people home
            </span>{" "}
            safely, every time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed"
          >
            Our mission is to deliver unparalleled transportation solutions
            through innovative technology and customer-centric service —
            backed by a 100+ owned vehicle fleet, live GPS tracking, and a
            dedicated manager for every client.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-red-500/30 transition-all hover:bg-brand-red-600 hover:shadow-brand-red-500/40"
            >
              Request a Fleet Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:+922135843438"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              +9221 35843438
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-6 border-t border-white/10 pt-8"
          >
            {STATS.map((stat, i) => (
              <StatPill stat={stat} index={i} key={stat.label} />
            ))}
          </motion.div>
        </div>

        {/* Right: animated tracking / road visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
                <Radar size={14} className="text-brand-red-400 animate-pulse" />
                Live Fleet Monitoring
              </div>
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span>
            </div>

            {/* mock map */}
            <div className="relative h-64 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)] bg-brand-dark-2 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* route path */}
              <svg
                viewBox="0 0 320 256"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M20 210 C 80 210, 70 120, 140 110 S 230 60, 300 40"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="3"
                  strokeDasharray="2 10"
                  strokeLinecap="round"
                />
                <path
                  d="M20 210 C 80 210, 70 120, 140 110 S 230 60, 300 40"
                  stroke="#d1444c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="0.22 1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-1"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              {/* pins */}
              <div className="absolute left-4 bottom-10 flex flex-col items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-400 ring-4 ring-brand-blue-400/20" />
              </div>
              <div className="absolute right-6 top-8 flex flex-col items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-red-400" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-red-400" />
                </span>
              </div>
              <div className="absolute left-[42%] top-[40%] rounded-md bg-white/95 px-2 py-1 text-[10px] font-semibold text-brand-dark shadow">
                CW-6206 · 42 km/h
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: "Moving", value: "08", color: "text-emerald-400" },
                { label: "Idle", value: "03", color: "text-amber-400" },
                { label: "Stopped", value: "02", color: "text-brand-red-400" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-center"
                >
                  <div className={`font-display text-xl font-bold ${s.color}`}>
                    {s.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-white/50 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-8 rounded-2xl bg-white px-4 py-3 shadow-2xl flex items-center gap-3"
          >
            <ShieldCheck size={22} className="text-brand-red-500 shrink-0" />
            <div>
              <div className="text-xs font-bold text-brand-dark leading-tight">
                100% Owned Fleet
              </div>
              <div className="text-[11px] text-neutral-500">
                Never vendor-supplied
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
