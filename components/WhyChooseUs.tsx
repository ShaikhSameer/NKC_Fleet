"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  FileBarChart,
  LayoutDashboard,
  BellRing,
  UserCog,
  HeartHandshake,
  Car,
  Users,
  Timer,
  Satellite,
  UserCheck,
  Shirt,
  GraduationCap,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { SIGNIFICANT_COMPONENTS, VALUE_ADDITIONS, type IconText } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Smartphone,
  FileBarChart,
  LayoutDashboard,
  BellRing,
  UserCog,
  HeartHandshake,
  Car,
  Users,
  Timer,
  Satellite,
  UserCheck,
  Shirt,
  GraduationCap,
  Headset,
};

function FeatureList({
  title,
  items,
  accent,
}: {
  title: string;
  items: IconText[];
  accent: string;
}) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-brand-dark mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <motion.li
              key={item.text}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3.5"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent}`}
              >
                <Icon size={16} strokeWidth={2.2} />
              </span>
              <span className="text-sm text-neutral-600 leading-relaxed pt-1.5">
                {item.text}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">
            Why Choose NKC
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark text-balance">
            Every detail, managed end-to-end
          </h2>
          <p className="mt-4 text-neutral-600">
            From a dedicated account manager to insured drivers, here&apos;s
            what comes standard with every NKC fleet contract.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-x-16 gap-y-14 rounded-3xl border border-neutral-100 bg-brand-sand/60 p-8 sm:p-12">
          <FeatureList
            title="Significant Components"
            items={SIGNIFICANT_COMPONENTS}
            accent="bg-brand-red-50 text-brand-red-500"
          />
          <FeatureList
            title="Value Addition"
            items={VALUE_ADDITIONS}
            accent="bg-blue-50 text-brand-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
