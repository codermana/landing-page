"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Globe } from "lucide-react";
import { useIsMobile, fadeUp, scaleIn } from "../hooks/useReducedMotion";

export default function TheHourCTA() {
  const mobile = useIsMobile();

  return (
    <section className="mb-0">
      <motion.div
        {...scaleIn(mobile)}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-yellow-500 to-orange-500 p-12 md:p-16 text-center relative overflow-hidden">
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%222%22 height=%222%22 fill=%22white%22/%3E%3C/svg%3E')", backgroundRepeat: 'repeat'}}></div>

        <div className="relative z-10">
          <motion.h2 
            {...fadeUp(mobile)}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-3 drop-shadow-lg">
            THE CODERMANA HOUR
          </motion.h2>
          
          <motion.p 
            {...fadeUp(mobile, 0.1)}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-5 opacity-95">
            Live Tech Sessions Every Other Thursday
          </motion.p>

          <motion.div 
            {...fadeUp(mobile, 0.2)}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-white/90">
            <div className="flex items-center gap-2 text-lg">
              <Calendar className="w-6 h-6" />
              <span>Fortnightly</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Clock className="w-6 h-6" />
              <span>7-8 PM IST</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Globe className="w-6 h-6" />
              <span>Free & Open to All</span>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp(mobile, 0.3)}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8">
            {["Distributed Systems", "Security", "LLMs", "Compilers", "Open Source"].map((tag) => (
              <span key={tag} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.a 
            href="https://thehour.codermana.com/" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:-translate-y-1 transition-transform">
            Join Next Session
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
