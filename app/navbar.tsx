"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if ( typeof window !== 'undefined' && (localStorage.theme === 'dark' ||
      (!localStorage.theme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches))
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.theme = newTheme;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 px-[5%] py-4 flex items-center justify-between
          ${scrolled ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 py-3' : 'bg-transparent'}`}>
      
      <Link href="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter">
        <Image
          src="/codermana.svg"
          alt="CoderMana Logo"
          className="h-10 w-auto"
          priority
          width={35}
          height={40}
        />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">CoderMana</span>
      </Link>

      <div className="flex items-center gap-10">
        <ul className="hidden md:flex gap-10 text-sm font-bold tracking-tight uppercase">
          <li><Link href="#services" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">Services</Link></li>
          <li><Link href="#products" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">Products</Link></li>
          <li><Link href="#clients" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">Clients</Link></li>
          <li><Link href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-10">
          <button
            onClick={toggleTheme}
            className="rounded-xl p-2.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5 transition-all">
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <Link
            href="#contact"
            className="hidden sm:block px-6 py-2.5 rounded-xl bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
