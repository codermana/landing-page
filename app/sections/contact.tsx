import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="smooth-transition py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Engineering?</h2>
            <p className="text-xl mb-8 opacity-90">Let&apos;s discuss how we can help your team build better, faster, and more reliably.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="mailto:namaste@codermana.com" className="smooth-transition text-lg font-semibold hover:text-cyan-200">
                    namaste@codermana.com
                </a>
                <a href="https://github.com/CoderMana" target="_blank" className="smooth-transition text-lg font-semibold hover:text-cyan-200">
                    github.com/CoderMana →
                </a>
            </div>
        </div>
    </section>
  );
}
