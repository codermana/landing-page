"use client";

import { GraduationCap, Layout, Rocket, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: GraduationCap,
    title: "Enterprise Training",
    description: "Custom-designed technical training programs that transform engineering teams into high-performing units.",
    features: [
      "14+ Programming Languages",
      "Production-Ready Curriculum",
      "Deep-Dive Architecture Tracks",
      "Hands-on Labs & Projects"
    ]
  },
  {
    icon: Layout,
    title: "Architecture & Consulting",
    description: "Strategic engineering consulting focused on building scalable, resilient, and future-proof systems.",
    features: [
      "Cloud-Native Strategy",
      "Distributed Systems Design",
      "Performance Optimization",
      "Security-First Frameworks"
    ]
  },
  {
    icon: Rocket,
    title: "Team Acceleration",
    description: "Embed with your teams to elevate engineering practices, culture, and delivery velocity.",
    features: [
      "Modernizing CI/CD Pipelines",
      "Engineering Culture Shift",
      "Leadership & Mentor Coaching",
      "Code Quality Excellence"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="px-[5%] py-32 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-black mb-6 text-4xl md:text-6xl tracking-tight">
          How We Can Help You Scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto">
          Craftsmanship and applied engineering excellence in every engagement.
        </motion.p>
      </div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-10 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10
                    hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8">
              <service.icon className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
