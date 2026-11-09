"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, Building2, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-brand-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red-500">
            Contact Us
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark text-balance">
            Let&apos;s plan your fleet
          </h2>
          <p className="mt-4 text-neutral-600">
            Reach out for a tailored quote, a site visit, or to discuss your
            daily staff transportation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                className="group rounded-2xl bg-white border border-neutral-100 p-6 hover:border-brand-red-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-500 group-hover:bg-brand-red-500 group-hover:text-white transition-colors">
                  <Phone size={19} />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-neutral-400">Call Us</p>
                {CONTACT.phones.map((p) => (
                  <p key={p} className="font-semibold text-brand-dark text-sm mt-1">
                    {p}
                  </p>
                ))}
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="group rounded-2xl bg-white border border-neutral-100 p-6 hover:border-brand-red-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-500 group-hover:bg-brand-red-500 group-hover:text-white transition-colors">
                  <Mail size={19} />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-neutral-400">Email Us</p>
                <p className="font-semibold text-brand-dark text-sm mt-1">{CONTACT.email}</p>
              </a>
            </div>

            <a
              href={`https://${CONTACT.web}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-white border border-neutral-100 p-6 hover:border-brand-red-200 hover:shadow-lg transition-all"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-500 group-hover:bg-brand-red-500 group-hover:text-white transition-colors">
                <Globe size={19} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-400">Visit Online</p>
                <p className="font-semibold text-brand-dark text-sm mt-1">{CONTACT.web}</p>
              </div>
            </a>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {CONTACT.offices.map((office) => (
                <div
                  key={office.label}
                  className="rounded-2xl bg-brand-dark p-6 text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-red-400">
                    <Building2 size={17} />
                  </div>
                  <p className="mt-4 font-semibold text-sm">{office.label}</p>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed flex gap-1.5">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-white/40" />
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border border-neutral-100 shadow-sm"
          >
            <iframe
              title="NKC Fleet Management Head Office Location"
              src="https://maps.google.com/maps?q=Plot%20No.%2030-C%2C%20Rahat%20Lane%201%2C%20Phase%206%20DHA%2C%20Karachi&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[420px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
