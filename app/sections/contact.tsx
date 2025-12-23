import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center relative">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Scale Your Engineering?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Let&apos;s discuss how we can help your team build better, faster, and more reliably.
        </p>
        <a href="mailto:namaste@codermana.com" className="text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
          namaste@codermana.com
        </a>
        <div className="mt-6">
          <a href="https://github.com/CoderMana" className="text-orange-500 hover:text-orange-400 text-lg">
            github.com/CoderMana →
          </a>
        </div>
      </div>
    </section>
  );
}
