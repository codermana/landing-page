"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-[5%] text-center
          bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_50%)]
          dark:bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.1),transparent_50%)]">

      <div className="max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight tracking-tight">
          Building High-Performance Engineering Teams
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(1.1rem,2vw,1.5rem)]
                text-gray-600 dark:text-gray-400
                max-w-4xl mx-auto mb-12 leading-relaxed">
          We help Fortune 500s and emerging unicorns architect, train, and scale world-class engineering organizations through expert-led transformation and craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-6 justify-center">
          <a
            href="#contact"
            className="px-10 py-5 rounded-xl font-bold text-white
                  bg-gradient-to-br from-orange-500 to-orange-600
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)]
                  transition-all duration-300">
            Partner With Us
          </a>

          <a
            href="#services"
            className="px-10 py-5 rounded-xl font-bold
                  bg-gray-100 text-gray-900 border border-gray-200
                  hover:bg-gray-200
                  dark:bg-white/10 dark:text-white dark:border-white/20
                  dark:hover:bg-white/20
                  transition-all duration-300">
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
