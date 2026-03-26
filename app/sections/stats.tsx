"use client";

import { motion } from "framer-motion";

let stats: {number: string, label: string}[] = [
  {
    number: "14+",
    label: "Years of Engineering Excellence",
  },
  {
    number: "3000+",
    label: "Engineers Upskilled",
  },
  {
    number: "35+",
    label: "Enterprise Partners",
  },
  {
    number: "10+",
    label: "Global Industries",
  },
];

export default function Stats() {
  return (
    <section
      className="smooth-transition py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-10 rounded-2xl border
                      bg-gray-50/50 border-gray-100
                      hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1
                      dark:bg-white/5 dark:border-white/10
                      dark:hover:bg-white/[0.08]
                      transition-all duration-300 group">
                <div
                  className="text-5xl font-black mb-3
                        bg-gradient-to-br from-orange-500 to-orange-600
                        bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase text-xs">
                  {stat.label}
                </div>
              </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
};
