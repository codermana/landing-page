"use client"; // This is a client component 👈🏽

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    // This code runs only on the client side
    if ( localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    }
  }, []); // Empty dependency array means it runs once after initial render

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  };

  return <nav
    className="fixed top-0 w-full z-[1000]
          px-[5%] py-6 flex items-center justify-between
          bg-white/80 border-b border-gray-200
          backdrop-blur
          dark:bg-[rgba(15,15,15,0.9)]
          dark:border-white/10">
    <div className="flex items-center gap-2 text-2xl font-bold">
      <Image
        src="/codermana.svg"
        alt="CoderMana Logo"
        className="h-10"
        priority
        width={35}
        height={40}
      />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">CoderMana</span>
    </div>

    <div className="flex items-center gap-6">
      <ul className="hidden md:flex gap-8 text-sm">
        <li><Link href="#services" className="hover:text-orange-500 transition">Services</Link></li>
        <li><Link href="#clients" className="hover:text-orange-500 transition">Clients</Link></li>
        <li><Link href="#contact" className="hover:text-orange-500 transition">Contact</Link></li>
      </ul>

      {/* <button
        onClick={toggleTheme}
        className="rounded-lg px-3 py-2 text-sm font-medium
              bg-gray-100 hover:bg-gray-200
              dark:bg-white/10 dark:hover:bg-white/20
              transition">
        🌗
      </button> */}
    </div>
  </nav>;
}
