export default function Services() {
  return (
    <section id="services" className="px-[5%] py-32 max-w-7xl mx-auto">
      <h2 className="text-center font-bold mb-4 text-[clamp(2rem,4vw,3rem)]">
        Our Expertise
      </h2>
      <p className="text-center text-gray-400 text-xl mb-16">
        Craftsmanship and applied engineering in everything we do
      </p>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="p-12 rounded-2xl bg-white/5 border border-white/10
                    hover:bg-white/10 hover:border-orange-500/40 hover:-translate-y-1 transition">
          <div className="text-5xl mb-6">🎓</div>
          <h3 className="text-2xl font-semibold mb-4">Enterprise Training</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Custom-designed technical training programs that transform engineering teams.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">14+ programming languages</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Production-ready curriculum</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">2000+ training hours</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Tailored delivery</li>
          </ul>
        </div>

        <div className="p-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/40 hover:-translate-y-1 transition">
          <div className="text-5xl mb-6">🏗️</div>
          <h3 className="text-2xl font-semibold mb-4">Architecture & Consulting</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Strategic engineering consulting focused on scalability and resilience.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Cloud-native systems</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Distributed systems</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Performance tuning</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Security frameworks</li>
          </ul>
        </div>

        <div className="p-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/40 hover:-translate-y-1 transition">
          <div className="text-5xl mb-6">🚀</div>
          <h3 className="text-2xl font-semibold mb-4">Team Acceleration</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Embed with teams to elevate practices and delivery velocity.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Engineering culture</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">CI/CD enablement</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Leadership coaching</li>
            <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-orange-500">Code quality</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
