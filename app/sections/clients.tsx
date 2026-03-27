"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile, fadeUp } from "../hooks/useReducedMotion";

const clients = [
  { name: "Amdocs", logo: "/clients/amdocs.svg" },
  { name: "Autodesk", logo: "/clients/autodesk.svg", isWhite: true },
  { name: "Brillio", logo: "/clients/brillio.svg", isWhite: true },
  { name: "Cisco", logo: "/clients/cisco.svg" },
  { name: "Compucom", logo: "/clients/compucom.svg" },
  { name: "Ericsson", logo: "/clients/ericsson.svg" },
  { name: "Flipkart", logo: "/clients/flipkart.svg" },
  { name: "GE Healthcare", logo: "/clients/ge_healthcare.svg" },
  { name: "Grab", logo: "/clients/grab.svg" },
  { name: "Groupon", logo: "/clients/groupon.svg" },
  { name: "HCL", logo: "/clients/hcl.svg" },
  { name: "Intel", logo: "/clients/intel.svg", isWhite: true },
  { name: "JP Morgan Chase", logo: "/clients/jpmc.svg" },
  { name: "Mastercard", logo: "/clients/mastercard.svg" },
  { name: "Medtronic", logo: "/clients/medtronic.svg" },
  { name: "Natwest", logo: "/clients/natwest.svg", isWhite: true },
  { name: "Nutanix", logo: "/clients/nutanix.svg" },
  { name: "Oshi", logo: "/clients/oshi.svg" },
  { name: "Paypal", logo: "/clients/paypal.svg" },
  { name: "Proofpoint", logo: "/clients/proofpoint.svg", isWhite: true },
  { name: "Qualcomm", logo: "/clients/qualcomm.svg" },
  { name: "Renault Nissan Mitsubishi", logo: "/clients/renault-nissan-mitsubishi.svg" },
  { name: "Roll", logo: "/clients/roll.svg" },
  { name: "Salesforce", logo: "/clients/salesforce.svg" },
  { name: "Samsung", logo: "/clients/samsung.svg" },
  { name: "Skan.ai", logo: "/clients/skan.svg" },
  { name: "Siemens", logo: "/clients/siemens.svg" },
  { name: "Synamedia", logo: "/clients/synamedia.svg", isWhite: true },
  { name: "Synchrony", logo: "/clients/synchrony.svg" },
  { name: "TCS", logo: "/clients/tcs.svg", isWhite: true },
  { name: "Toshiba", logo: "/clients/toshiba.svg" },
  { name: "Trane", logo: "/clients/trane.svg" },
  { name: "VMware", logo: "/clients/vmware.svg" },
  { name: "Walmart", logo: "/clients/walmart.svg" },
  { name: "Western Digital", logo: "/clients/western_digital.svg" },
];

/** Renders the two marquee strips (primary + seamless clone) */
function MarqueeStrip({ colored = false }: { colored?: boolean }) {
  const logoClass = (isWhite?: boolean) => {
    if (colored) {
      // Full color — but isWhite logos still need brightness-0 on light bg
      return isWhite ? 'brightness-0 dark:brightness-100' : '';
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
              className={`object-contain ${logoClass(client.isWhite)}`}
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
              className={`object-contain ${logoClass(client.isWhite)}`}
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
