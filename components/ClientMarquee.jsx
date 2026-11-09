"use client";

import { CLIENTS } from "@/lib/content";

export default function ClientMarquee() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="relative bg-white py-14 border-y border-neutral-100">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-7">
        Trusted by leading hospitals &amp; institutions across Karachi
      </p>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {loop.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center shrink-0 px-8"
            >
              <span className="whitespace-nowrap text-lg sm:text-xl font-display font-bold text-neutral-300 hover:text-brand-red-500 transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
