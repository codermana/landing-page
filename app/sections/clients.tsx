import Image from "next/image";

const heroClients = [
  'Intel', 'Cisco', 'PayPal', 'JP Morgan Chase',
  'Salesforce', 'Walmart Labs', 'Samsung', 'Qualcomm',
  'Mastercard', 'VMware', 'Flipkart', 'GE Healthcare'
];

let clients: {name: string, logo: string, isWhite?: boolean}[] = [
  {
    name: "Amdocs",
    logo: "/clients/amdocs.svg"
  },
  {
    name: "Autodesk",
    logo: "/clients/autodesk.svg",
    isWhite: true,
  },
  // {
  //   name: "Bank of America",
  //   logo: "/clients/boa.svg"
  // },
  {
    name: "Brillio",
    logo: "/clients/brillio.svg",
    isWhite: true,
  },
  {
    name: "Cisco",
    logo: "/clients/cisco.svg"
  },
  {
    name: "Compucom",
    logo: "/clients/compucom.svg"
  },
  {
    name: "Ericsson",
    logo: "/clients/ericsson.svg"
  },
  {
    name: "Flipkart",
    logo: "/clients/flipkart.svg"
  },
  {
    name: "GE Healthcare",
    logo: "/clients/ge_healthcare.svg"
  },
  {
    name: "Grab",
    logo: "/clients/grab.svg"
  },
  {
    name: "Groupon",
    logo: "/clients/groupon.svg"
  },
  {
    name: "HCL",
    logo: "/clients/hcl.svg"
  },
  {
    name: "Intel",
    logo: "/clients/intel.svg",
    isWhite: true
  },
  {
    name: "JP Morgan Chase",
    logo: "/clients/jpmc.svg"
  },
  {
    name: "Mastercard",
    logo: "/clients/mastercard.svg"
  },
  {
    name: "Medtronic",
    logo: "/clients/medtronic.svg"
  },
  {
    name: "Natwest",
    logo: "/clients/natwest.svg",
    isWhite: true
  },
  {
    name: "Nutanix",
    logo: "/clients/nutanix.svg"
  },
  {
    name: "Oshi",
    logo: "/clients/oshi.svg"
  },
  {
    name: "Paypal",
    logo: "/clients/paypal.svg"
  },
  {
    name: "Proofpoint",
    logo: "/clients/proofpoint.svg",
    isWhite: true
  },
  {
    name: "Qualcomm",
    logo: "/clients/qualcomm.svg"
  },
  {
    name: "Renault Nissan",
    logo: "/clients/renault-nissan-mitsubishi.svg"
  },
  {
    name: "Roll",
    logo: "/clients/roll.svg"
  },
  {
    name: "Salesforce",
    logo: "/clients/salesforce.svg"
  },
  {
    name: "Samsung",
    logo: "/clients/samsung.svg"
  },
  {
    name: "Skan.ai",
    logo: "/clients/skan.svg"
  },
  {
    name: "Siemens",
    logo: "/clients/siemens.svg"
  },
  {
    name: "Synamedia",
    logo: "/clients/synamedia.svg",
    isWhite: true
  },
  {
    name: "Synchrony",
    logo: "/clients/synchrony.svg"
  },
  {
    name: "TCS",
    logo: "/clients/tcs.svg",
    isWhite: true
  },
  {
    name: "Toshiba",
    logo: "/clients/toshiba.svg"
  },
  {
    name: "Trane",
    logo: "/clients/trane.svg"
  },
  {
    name: "VMware",
    logo: "/clients/vmware.svg"
  },
  {
    name: "Walmart Labs",
    logo: "/clients/walmart.svg"
  },
  {
    name: "Western Digital",
    logo: "/clients/western_digital.svg"
  }
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 px-6 bg-orange-500/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          We&apos;ve partnered with some of the world&apos;s most respected technology organizations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {heroClients.map((client, i) => (
            <div key={i} className="text-center text-gray-400 hover:text-orange-500 transition-colors font-semibold">
                {client}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-lg">
          ...and 20+ more enterprises across finance, healthcare, technology, and manufacturing
        </p>
      </div>
    </section>
  );
}
