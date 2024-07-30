import Image from "next/image";

let clients: {name: string, logo: string}[] = [
  {
    name: "Amdocs",
    logo: "/clients/amdocs.svg"
  },
  {
    name: "Autodesk",
    logo: "/clients/autodesk.svg"
  },
  {
    name: "Bank of America",
    logo: "/clients/boa.svg"
  },
  {
    name: "Brillio",
    logo: "/clients/brillio.svg"
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
    logo: "/clients/intel.svg"
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
    logo: "/clients/natwest.svg"
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
    logo: "/clients/proofpoint.svg"
  },
  {
    name: "Qualcomm",
    logo: "/clients/qualcomm.svg"
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
    name: "Siemens",
    logo: "/clients/siemens.svg"
  },
  {
    name: "Synamedia",
    logo: "/clients/synamedia.svg"
  },
  {
    name: "Synchrony",
    logo: "/clients/synchrony.svg"
  },
  {
    name: "TCS",
    logo: "/clients/tcs.svg"
  },
  {
    name: "Toshiba",
    logo: "/clients/toshiba.svg"
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
    <div className="m-5">
      <h1 className="text-3xl text-center text-orange-400 my-4">Our Clients</h1>
      <div className="w-4xl grid bg-slate-400 lg:grid-cols-8 sm:grid-cols-6 grid-cols-3 lg:p-8 sm:p-6 p-3 rounded-lg">
        {clients.map((client) => {return (
          <Image fill key={client.name} title={client.name} alt={client.name} src={client.logo} className="p-5 !relative object-contain"/>
        )})}
      </div>
    </div>
  )
}
