import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-[5%] bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-white/5 rounded-[3rem] p-12 md:p-20 border border-gray-100 dark:border-white/10 relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-gray-900 dark:text-white">
                            Ready to Scale Your Engineering?
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
                            Let&apos;s discuss how we can help your team build better, faster, and more reliably. Whether you need a team upgrade, architectural guidance, or custom training.
                        </p>

                        <div className="flex flex-col gap-4">
                            <Link 
                                href="mailto:namaste@codermana.com" 
                                className="flex items-center gap-4 text-2xl font-bold text-orange-600 hover:gap-6 transition-all duration-300">
                                <Mail className="w-8 h-8" />
                                <span>namaste@codermana.com</span>
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                            <Link 
                                href="https://github.com/CoderMana" 
                                target="_blank"
                                className="flex items-center gap-4 text-xl font-semibold text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                                <GithubIcon className="w-6 h-6" />
                                <span>Follow our Open Source journey</span>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block relative">
                        <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl absolute inset-0"></div>
                        <div className="relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-3xl shadow-2xl">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <pre className="text-sm font-mono text-orange-600 dark:text-orange-400 overflow-x-auto">
                                <code>{`const partnerWithUs = async () => {
  const needs = ['Scale', 'Train', 'Architect'];
  const solution = await CoderMana.partner({
    vision: 'Excellence',
    team: 'Your Engineering Force'
  });
  return solution.velocity;
};`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
