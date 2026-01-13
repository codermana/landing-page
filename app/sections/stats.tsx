let stats: {number: string, label: string}[] = [
  {
    number: "12+",
    label: "Years Engineering Excellence",
  },
  {
    number: "3000+",
    label: "Engineers Trained",
  },
  {
    number: "35+",
    label: "Enterprise Clients",
  },
  {
    number: "10+",
    label: "Industry Domains",
  },
];

export default function Stats() {
  return (
    <section
      className="smooth-transition py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {return (
              <div key={stat.label}
                className="text-center p-8 rounded-xl border
                      bg-white border-gray-200
                      hover:-translate-y-1
                      dark:bg-white/5 dark:border-white/10
                      transition">
                <div
                  className="text-4xl font-extrabold mb-2
                        bg-gradient-to-br from-orange-500 to-orange-600
                        bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
          )})}
        </div>
      </div>
    </section>
  );
};
