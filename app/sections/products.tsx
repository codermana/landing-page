"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const products = [
  {
    title: "MirrorPad",
    description: "A drawing utility with a transparent overlay which allows the user to annotate over other apps using their tablets/other devices.",
    link: "https://mirrorpad.in/",
    logo: "https://mirrorpad.in/assets/logo.svg",
    tags: ["Annotation", "Utility", "Collaborative"]
  },
  {
    title: "NovelSigner",
    description: "Enterprise-grade digital signature platform designed for speed and security. Simplify document workflows with legally binding signatures.",
    link: "https://novelsigner.com/",
    logo: "https://novelsigner.com/logo.svg",
    tags: ["Digital Signatures", "Security", "Workflows"]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 px-[5%] bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and platforms we&apos;ve built to solve real-world engineering and business challenges.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-10 md:p-16 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
              
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-gray-100 dark:border-white/5 p-4">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>

                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white dark:bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-400 border border-gray-100 dark:border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-bold text-orange-600 hover:gap-4 transition-all duration-300">
                  Visit {product.title}
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
