import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-[5%] bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3 text-2xl font-black tracking-tighter">
          <Image
            src="/codermana.svg"
            alt="CoderMana Logo"
            className="h-8 w-auto grayscale opacity-50"
            width={35}
            height={40}
          />
          <span className="text-gray-400">CoderMana</span>
        </div>

        <div className="text-gray-400 text-sm font-medium">
          Copyright © {new Date().getFullYear()} CoderMana Technologies Private Limited. All rights reserved.
        </div>

        <div className="flex gap-8">
          <Link href="#services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-bold uppercase tracking-widest">Services</Link>
          <Link href="#clients" className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-bold uppercase tracking-widest">Clients</Link>
          <Link href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-bold uppercase tracking-widest">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
