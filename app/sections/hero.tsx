export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-[5%] text-center
          bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_50%)]
          dark:bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.1),transparent_50%)]">

      <div className="max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
          Engineering Excellence at Enterprise Scale
        </h1>

        <p
          className="text-[clamp(1.1rem,2vw,1.4rem)]
                text-gray-600 dark:text-gray-400
                max-w-3xl mx-auto mb-12 leading-relaxed">
          We architect, train, and scale engineering teams for the world&apos;s most demanding technology organizations. From Fortune 500 to emerging unicorns.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="#contact"
            className="px-10 py-4 rounded-lg font-semibold text-white
                  bg-gradient-to-br from-orange-500 to-orange-600
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)]
                  transition">
            Start a Conversation
          </a>

          <a
            href="#services"
            className="px-10 py-4 rounded-lg font-semibold
                  bg-gray-100 text-gray-900 border border-gray-200
                  hover:bg-gray-200
                  dark:bg-white/10 dark:text-white dark:border-white/20
                  dark:hover:bg-white/20
                  transition">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
