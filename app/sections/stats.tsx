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
      className="grid gap-12 px-[5%] max-w-6xl mx-auto mt-24
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

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
    </section>
  );
};
