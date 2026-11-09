const CLOUDINARY_BASE = "https://res.cloudinary.com/w6gu8mvn/image/upload/nkc-fleet";

export const ASSETS = {
  heroFleet: `${CLOUDINARY_BASE}/hero-fleet.jpg`,
  logoNavy: `${CLOUDINARY_BASE}/logo-nkc-navy.png`,
  logoWhite: `${CLOUDINARY_BASE}/logo-nkc-white.png`,
  logoSuzuki: `${CLOUDINARY_BASE}/logo-suzuki.png`,
  logoToyota: `${CLOUDINARY_BASE}/logo-toyota.svg`,
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#why-us", label: "Why Us" },
  { href: "#fleet", label: "Fleet" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Owned Vehicles" },
  { value: 1137, suffix: "", label: "Staff Transported\nDaily" },
  { value: 19, suffix: " yrs", label: "Hospital Fleet\nExperience" },
  { value: 24, suffix: "/7", label: "Service Availability" },
];

export const FLEET_TYPES = [
  {
    name: "Bolan Hi-Roof",
    desc: "Compact vans ideal for short, frequent staff rotations.",
  },
  {
    name: "Coaster",
    desc: "High-capacity coaches for large shift movements.",
  },
  {
    name: "HiAce",
    desc: "Comfortable mid-size transport for daily commutes.",
  },
  {
    name: "Hi Jets",
    desc: "Agile vehicles suited for tight urban hospital routes.",
  },
];

export const STANDOUT_FEATURES = [
  {
    icon: "HeartPulse",
    title: "Hospital Fleet Specialists",
    desc: "19 years of dedicated experience managing fleet operations for Karachi's leading hospitals and healthcare institutions.",
  },
  {
    icon: "Clock",
    title: "24/7, 365 Days a Year",
    desc: "Round-the-clock fleet service for hospital staff with zero-downtime operations, every single day of the year.",
  },
  {
    icon: "Radar",
    title: "Advanced Vehicle Tracking",
    desc: "Live GPS tracking system with fully customized reporting built around each client's operational needs.",
  },
];

export const SIGNIFICANT_COMPONENTS = [
  { icon: "ShieldCheck", text: "Trusted fleet & transportation service" },
  { icon: "Smartphone", text: "Dedicated application for staff" },
  { icon: "FileBarChart", text: "Customized reports for every client" },
  { icon: "LayoutDashboard", text: "Separate web portal for each client" },
  { icon: "BellRing", text: "Route alerts when a vehicle goes off-route" },
  { icon: "UserCog", text: "Dedicated accounts manager & fleet manager" },
  { icon: "HeartHandshake", text: "Insurance & medical cover for every driver and family" },
  { icon: "Car", text: "100% company-owned fleet — never vendor-supplied" },
  { icon: "Users", text: "Reliable, safe service with supporting drivers" },
];

export const VALUE_ADDITIONS = [
  { icon: "Smartphone", text: "User-friendly mobile application" },
  { icon: "Timer", text: "Customized tracker reports: in/out timing & late arrivals" },
  { icon: "Satellite", text: "Real-time monitoring with instant alerts for unusual activity" },
  { icon: "UserCheck", text: "Deputy manager available during working hours" },
  { icon: "Shirt", text: "Proper uniform for all drivers" },
  { icon: "GraduationCap", text: "Trained and well-managed fleet staff" },
  { icon: "Headset", text: "Supervisor on-call in every shift for smooth operations" },
];

export const CLIENTS = [
  "Tabba Heart Institute",
  "The Aga Khan University Hospital",
  "Dow University of Health Sciences",
  "Dr. Ziauddin Hospital",
  "Sindh Institute of Child Health & Neonatology",
  "OMI Hospital",
  "Patel Hospital",
  "NICVD",
  "ChildLife Foundation",
  "The Citizens Foundation",
  "ITAL Pakistan",
  "Lucky Knits (Pvt) Ltd",
  "ACT Polyols",
];

export const CONTACT = {
  phones: ["+9221 35843438", "+92 321 9288885"],
  email: "info@nkcfleet.com",
  web: "www.nkc.org.pk",
  offices: [
    {
      label: "Head Office",
      address: "Plot No. 30-C, Rahat Lane #1, Mezzanine Floor, Phase VI D.H.A. Karachi",
    },
    {
      label: "Fleet Office — Karachi",
      address: "Plot # 31, Commercial Area, Gulshan-e-Shamim, Karachi",
    },
  ],
};
