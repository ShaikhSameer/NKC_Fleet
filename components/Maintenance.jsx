"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Factory, RefreshCw, PackageCheck, Users } from "lucide-react";
import { ASSETS } from "@/lib/content";

const MAINTENANCE_POINTS = [
  {
    icon: Wrench,
    title: "In-house workshop",
    desc: "NKC owns its own workshop for monthly and routine vehicle maintenance.",
  },
  {
    icon: Factory,
    title: "Authorized OEM partners",
    desc: "Associated with authorized Suzuki & Toyota dealers/workshops for major maintenance work.",
  },
];

const BACKUP_POINTS = [
  {
    icon: RefreshCw,
    title: "Scheduled, prompt repairs",
    desc: "A fixed maintenance schedule minimizes service interruptions before they happen.",
  },
  {
    icon: PackageCheck,
    title: "10% backup vehicle pool",
    desc: "A standing reserve fleet instantly covers any vehicle downtime.",
  },
  {
    icon: Users,
    title: "On-call subcontractors",
    desc: "Specialized services are supplemented by vetted subcontractors as needed.",
  },
];

export default function Maintenance() {
  return (
    <section id="maintenance" className="relative bg-brand-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">
            Reliability
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark text-balance">
            Maintenance &amp; zero-downtime backup
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-8 sm:p-10 border border-neutral-100 shadow-sm"
          >
            <h3 className="font-display text-lg font-bold text-brand-dark mb-6">
              Repair &amp; Maintenance
            </h3>
            <div className="space-y-6">
              {MAINTENANCE_POINTS.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-500">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm">{p.title}</h4>
                    <p className="text-sm text-neutral-500 mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-neutral-100 pt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
              <span className="text-[11px] font-bold tracking-wide text-neutral-400 shrink-0 whitespace-nowrap">
                AUTHORIZED PARTNERS
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <div className="inline-flex items-center justify-center rounded-lg border border-neutral-100 bg-white shadow-sm px-3 py-2">
                  <Image
                    src={ASSETS.logoSuzuki}
                    alt="Suzuki — authorized partner"
                    width={3765}
                    height={752}
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="inline-flex items-center justify-center rounded-lg border border-neutral-100 bg-white shadow-sm px-3 py-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.logoToyota}
                    alt="Toyota — authorized partner"
                    width={838}
                    height={224}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-brand-dark p-8 sm:p-10 text-white"
          >
            <h3 className="font-display text-lg font-bold mb-6">
              Backup Plan for Vehicle Downtime
            </h3>
            <div className="space-y-6">
              {BACKUP_POINTS.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-red-400">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{p.title}</h4>
                    <p className="text-sm text-white/55 mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
