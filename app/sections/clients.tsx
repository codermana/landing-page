"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile, fadeUp } from "../hooks/useReducedMotion";

/**
 * Logo theme classification based on SVG fill analysis:
 * - "light": Logo uses white/light fills — needs brightness-0 on light backgrounds
 * - "dark": Logo uses black/dark fills — needs invert on dark backgrounds
 * - "colorful": Logo has enough contrast to be visible on both backgrounds
 */
type LogoTheme = "light" | "dark" | "colorful";

const clients: { name: string; logo: string; theme: LogoTheme }[] = [
  { name: "Amdocs", logo: "/clients/amdocs.svg", theme: "colorful" },
  { name: "Autodesk", logo: "/clients/autodesk.svg", theme: "light" },
  { name: "Brillio", logo: "/clients/brillio.svg", theme: "colorful" },
  { name: "Cisco", logo: "/clients/cisco.svg", theme: "colorful" },
  { name: "Compucom", logo: "/clients/compucom.svg", theme: "colorful" },
  { name: "Ericsson", logo: "/clients/ericsson.svg", theme: "dark" },
  { name: "Flipkart", logo: "/clients/flipkart.svg", theme: "colorful" },
  { name: "GE Healthcare", logo: "/clients/ge_healthcare.svg", theme: "colorful" },
  { name: "Grab", logo: "/clients/grab.svg", theme: "colorful" },
  { name: "Groupon", logo: "/clients/groupon.svg", theme: "dark" },
  { name: "HCL", logo: "/clients/hcl.svg", theme: "colorful" },
  { name: "Intel", logo: "/clients/intel.svg", theme: "light" },
  { name: "JP Morgan Chase", logo: "/clients/jpmc.svg", theme: "dark" },
  { name: "Mastercard", logo: "/clients/mastercard.svg", theme: "colorful" },
  { name: "Medtronic", logo: "/clients/medtronic.svg", theme: "dark" },
  { name: "Natwest", logo: "/clients/natwest.svg", theme: "colorful" },
  { name: "Nutanix", logo: "/clients/nutanix.svg", theme: "dark" },
  { name: "Oshi", logo: "/clients/oshi.svg", theme: "colorful" },
  { name: "Paypal", logo: "/clients/paypal.svg", theme: "colorful" },
  { name: "Proofpoint", logo: "/clients/proofpoint.svg", theme: "light" },
  { name: "Qualcomm", logo: "/clients/qualcomm.svg", theme: "dark" },
  { name: "Renault Nissan Mitsubishi", logo: "/clients/renault-nissan-mitsubishi.svg", theme: "colorful" },
  { name: "Roll", logo: "/clients/roll.svg", theme: "colorful" },
  { name: "Salesforce", logo: "/clients/salesforce.svg", theme: "colorful" },
  { name: "Samsung", logo: "/clients/samsung.svg", theme: "dark" },
  { name: "Skan.ai", logo: "/clients/skan.svg", theme: "dark" },
  { name: "Siemens", logo: "/clients/siemens.svg", theme: "colorful" },
  { name: "Synamedia", logo: "/clients/synamedia.svg", theme: "light" },
  { name: "Synchrony", logo: "/clients/synchrony.svg", theme: "colorful" },
  { name: "TCS", logo: "/clients/tcs.svg", theme: "light" },
  { name: "Toshiba", logo: "/clients/toshiba.svg", theme: "colorful" },
  { name: "Trane", logo: "/clients/trane.svg", theme: "colorful" },
  { name: "VMware", logo: "/clients/vmware.svg", theme: "dark" },
  { name: "Walmart", logo: "/clients/walmart.svg", theme: "colorful" },
  { name: "Western Digital", logo: "/clients/western_digital.svg", theme: "colorful" },
];

/** Renders the two marquee strips (primary + seamless clone) */
function MarqueeStrip({ colored = false }: { colored?: boolean }) {
  const logoClass = (client: typeof clients[0]) => {
    if (colored) {
      if (client.theme == "light") {
        // White/light logos: darken on light bg, show original on dark
        return 'brightness-0 dark:brightness-100';
      }
      if (client.theme == "dark") {
        // Purely dark logos (no brand colors): show as white in dark mode
        return 'dark:brightness-0 dark:invert';
      }
      // Colorful logos: show original colors on both themes
      return '';
    }
    // Grayscale base layer
    return 'brightness-0 dark:invert';
  };

  return (
    <>
      <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className="mx-12 w-32 md:w-48 h-20 relative flex items-center justify-center flex-shrink-0">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className={`object-contain ${logoClass(client)}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className="mx-12 w-32 md:w-48 h-20 relative flex items-center justify-center flex-shrink-0">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className={`object-contain ${logoClass(client)}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

const spotlightMask = {
  maskImage: 'linear-gradient(to right, transparent 15%, black 35%, black 65%, transparent 85%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 15%, black 35%, black 65%, transparent 85%)',
};

export default function Clients() {
  const mobile = useIsMobile();

  return (
    <section id="clients" className="py-32 px-6 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <motion.h2
          {...fadeUp(mobile)}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p
          {...fadeUp(mobile, 0.1)}
          viewport={{ once: true }}
          className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          We&apos;ve partnered with some of the world&apos;s most respected technology organizations to deliver engineering excellence.
        </motion.p>
      </div>

      <div className="relative overflow-x-hidden">
        {/* Grayscale base layer */}
        <div className="relative flex opacity-30">
          <MarqueeStrip />
        </div>

        {/* Light strip behind spotlight in dark mode for logo visibility */}
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block rounded-2xl"
          style={{
            background: 'linear-gradient(to right, transparent 15%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.1) 70%, transparent 85%)',
          }}
        />

        {/* Colored spotlight layer — masked to center */}
        <div
          className="absolute inset-0 flex pointer-events-none"
          style={spotlightMask}>
          <MarqueeStrip colored />
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-400 font-medium italic">
          & 20+ more enterprises across finance, healthcare, technology, and manufacturing
        </p>
      </div>
    </section>
  );
}
