"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  LayoutDashboard,
  MapPinned,
  FileBarChart,
  Bell,
  Settings,
  Search,
  Share2,
} from "lucide-react";

const TABS = [
  {
    id: "app",
    label: "Staff App",
    icon: Smartphone,
    blurb: "A simple, user-friendly app so every staff member can see their ride in real time.",
  },
  {
    id: "tracking",
    label: "Live Tracking",
    icon: MapPinned,
    blurb: "GPS-powered live maps with route, speed, and address detail for every vehicle.",
  },
  {
    id: "dashboard",
    label: "Admin Dashboard",
    icon: LayoutDashboard,
    blurb: "One screen to monitor the entire fleet — movement, alerts, devices, and tasks.",
  },
  {
    id: "reports",
    label: "Custom Reports",
    icon: FileBarChart,
    blurb: "Shift-wise reports on timing, geofence in/out, and distance — tailored per client.",
  },
];

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.2rem] border-[6px] border-brand-dark bg-brand-dark shadow-2xl">
      <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-brand-dark z-10" />
      <div className="relative h-[480px] overflow-hidden rounded-[1.7rem] bg-white">
        {children}
      </div>
    </div>
  );
}

function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 flex-1 rounded-md bg-white border border-neutral-200 px-3 py-1 text-[11px] text-neutral-400">
          portal.nkc.org.pk/dashboard
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function AppPanel() {
  const rows = [
    { id: "BKU-274 · Tabani", status: "Moving", color: "bg-emerald-500" },
    { id: "BTK-982 · Haroon", status: "Stopped", color: "bg-brand-red-500" },
    { id: "KIY-1171 · Irzam", status: "Idle", color: "bg-amber-500" },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="bg-brand-dark px-4 pt-7 pb-4 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">NKC Fleet App</span>
          <Bell size={14} className="text-white/60" />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
          <Search size={13} className="text-white/50" />
          <span className="text-[11px] text-white/40">Search vehicle…</span>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 bg-neutral-50 p-3.5">
        {rows.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="rounded-xl bg-white border border-neutral-100 p-3 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-brand-dark">{r.id}</span>
              <span className={`rounded-full ${r.color} px-2 py-0.5 text-[9px] font-semibold text-white`}>
                {r.status}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${40 + i * 20}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`h-full ${r.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-neutral-100 bg-white py-2.5">
        {[Smartphone, MapPinned, Bell, Settings].map((Icon, i) => (
          <Icon
            key={i}
            size={16}
            className={i === 0 ? "text-brand-red-500" : "text-neutral-300"}
          />
        ))}
      </div>
    </div>
  );
}

function TrackingPanel() {
  return (
    <div className="flex h-full flex-col bg-brand-dark-2">
      <div className="flex items-center justify-between px-4 pt-7 pb-3 text-white">
        <span className="text-xs font-semibold">Live Tracking</span>
        <Share2 size={14} className="text-white/50" />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <svg viewBox="0 0 240 340" className="absolute inset-0 h-full w-full" fill="none">
          <path
            d="M20 300 C 70 300, 60 220, 120 200 S 190 140, 220 60"
            stroke="#d1444c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 9"
          />
        </svg>
        <motion.div
          animate={{
            left: ["8%", "50%", "88%"],
            top: ["88%", "55%", "18%"],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red-400 ring-4 ring-brand-red-400/25"
        />
        <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 px-3 py-2 shadow">
          <p className="text-[10px] font-bold text-brand-dark">BKU-274 Tabani</p>
          <p className="text-[9px] text-neutral-500">DHA Phase 2, Karachi · 42 km/h</p>
        </div>
      </div>
    </div>
  );
}

function DashboardPanel() {
  const tiles = [
    { label: "Move", value: 4, color: "text-emerald-600 bg-emerald-50" },
    { label: "Idle", value: 2, color: "text-amber-600 bg-amber-50" },
    { label: "Stop", value: 6, color: "text-brand-red-600 bg-brand-red-50" },
    { label: "Total", value: 13, color: "text-brand-blue-600 bg-blue-50" },
  ];
  const bars = [60, 90, 75, 95, 70];
  return (
    <div>
      <div className="grid grid-cols-4 gap-2.5">
        {tiles.map((t) => (
          <div key={t.label} className={`rounded-lg ${t.color} py-2.5 text-center`}>
            <div className="font-display text-lg font-bold">{t.value}</div>
            <div className="text-[9px] uppercase tracking-wide opacity-70">{t.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-[auto_1fr] gap-5 items-center">
        <div
          className="relative h-24 w-24 rounded-full"
          style={{
            background:
              "conic-gradient(#b3161f 0% 46%, #f5a524 46% 62%, #10b981 62% 100%)",
          }}
        >
          <div className="absolute inset-[9px] rounded-full bg-white flex items-center justify-center">
            <span className="text-[10px] font-bold text-brand-dark">13 Total</span>
          </div>
        </div>
        <div className="space-y-2">
          {["Ignition ON/OFF · 529", "Geofence In/Out · 67", "Overspeed · 0"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-[10px] text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red-500" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wide mb-2">
          Distance travelled
        </p>
        <div className="flex items-end gap-2 h-20">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand-red-500 to-brand-blue-500/70"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportsPanel() {
  const rows = [
    { device: "CS-6683 NKC", geo: "Abbasi Hospital", km: "62.2 Km", hrs: "4h 35s" },
    { device: "CU-2659 Tabba", geo: "Tabba", km: "121.4 Km", hrs: "0s" },
    { device: "CV-8892 NKC", geo: "Abbasi Hospital", km: "168.8 Km", hrs: "8h 06m" },
    { device: "CW-3570 Tabba", geo: "Tabba", km: "114.9 Km", hrs: "5h 38m" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-brand-dark">Location Report</p>
        <span className="text-[10px] text-neutral-400">01–02 Mar 2026</span>
      </div>
      <div className="overflow-hidden rounded-lg border border-neutral-100">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-neutral-50 text-[9px] uppercase tracking-wide text-neutral-400">
              <th className="px-3 py-2 font-semibold">Device</th>
              <th className="px-3 py-2 font-semibold">Geofence</th>
              <th className="px-3 py-2 font-semibold">Daily Km</th>
              <th className="px-3 py-2 font-semibold">Hours</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr
                key={r.device}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-t border-neutral-100 text-[10px] text-neutral-600"
              >
                <td className="px-3 py-2 font-medium text-brand-dark">{r.device}</td>
                <td className="px-3 py-2">{r.geo}</td>
                <td className="px-3 py-2">{r.km}</td>
                <td className="px-3 py-2">{r.hrs}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Technology() {
  const [active, setActive] = useState("app");
  const activeTab = TABS.find((t) => t.id === active);

  return (
    <section id="technology" className="relative bg-brand-dark py-24 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-blue-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-400">
            Our Technology
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white text-balance">
            One platform. Full visibility into your fleet.
          </h2>
          <p className="mt-4 text-white/60 text-sm sm:text-base">
            A staff mobile app, live GPS tracking, an admin dashboard, and
            fully customized reports — built for each client&apos;s portal.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="space-y-3">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all ${
                    isActive
                      ? "border-brand-red-500/50 bg-white/[0.06]"
                      : "border-white/10 bg-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-brand-red-500 text-white"
                          : "bg-white/5 text-white/50"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span
                      className={`font-display font-bold ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 text-sm text-white/55 leading-relaxed overflow-hidden"
                      >
                        {tab.blurb}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="relative flex justify-center py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {active === "app" && (
                  <PhoneFrame>
                    <AppPanel />
                  </PhoneFrame>
                )}
                {active === "tracking" && (
                  <PhoneFrame>
                    <TrackingPanel />
                  </PhoneFrame>
                )}
                {active === "dashboard" && (
                  <BrowserFrame>
                    <DashboardPanel />
                  </BrowserFrame>
                )}
                {active === "reports" && (
                  <BrowserFrame>
                    <ReportsPanel />
                  </BrowserFrame>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
