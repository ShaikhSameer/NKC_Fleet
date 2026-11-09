import type { SVGProps } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { NAV_LINKS, CONTACT, ASSETS } from "@/lib/content";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C15.98 3.1 15.03 3 13.92 3c-2.33 0-3.92 1.42-3.92 4.03v2.57H7.25v3.2h2.75V21h3.5Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5Z" />
      <path d="M5.25 7.02a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92Z" />
      <path d="M9.75 8.5h3.24v1.64h.05c.45-.85 1.56-1.75 3.21-1.75 3.44 0 4.07 2.26 4.07 5.2V20.5h-3.38v-5.9c0-1.4-.03-3.21-1.96-3.21-1.96 0-2.26 1.53-2.26 3.1v6.01H9.75V8.5Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61556494988157" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/nkcfleetmanagementservices" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Image
              src={ASSETS.logoWhite}
              alt="NKC Fleet Management Services"
              width={2048}
              height={1188}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-sm">
              Unparalleled transportation solutions through innovative
              technology and customer-centric service — trusted by Karachi&apos;s
              leading hospitals and institutions for over 19 years.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white hover:bg-brand-red-500 hover:border-brand-red-500 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-white/40 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-brand-red-400 shrink-0" />
                  {CONTACT.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-brand-red-400 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} NKC Fleet Management Services (Pvt) Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Designed for safe, reliable fleet operations.</p>
        </div>
      </div>
    </footer>
  );
}
