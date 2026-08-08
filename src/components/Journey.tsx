type Milestone = {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: "Year 1",
    title: "Started Learning to Code",
    description:
      "Began self-teaching through hands-on practice and online courses, building my first small projects and learning the fundamentals of web development.",
  },
  {
    year: "Year 2",
    title: "First Client Projects",
    description:
      "Started taking on real client work, building sites with WordPress and Elementor and learning to deliver functional products under real deadlines.",
  },
  {
    year: "Year 3",
    title: "Specializing in Real Estate & E-commerce",
    description:
      "Focused on real estate platforms and e-commerce builds, working with WooCommerce and custom plugin integrations.",
  },
  {
    year: "Year 4",
    title: "Advanced Integrations",
    description:
      "Took on more complex projects involving MLS/IDX integrations and multilingual platforms, like MesBiensÀVendre.",
  },
  {
    year: "Year 5 — Today",
    title: "Fullstack Developer",
    description:
      "Now building complete web experiences end-to-end with React, TypeScript, and Tailwind CSS, alongside continued WordPress and custom development work.",
  },
]

function Journey() {
  return (
    <section id="journey" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <h2 className="text-4xl font-bold mb-2">My Journey</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        Five years of learning, building, and shipping real projects.
      </p>

      <div className="relative max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-10">
          {milestones.map((m) => (
            <div key={m.year} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 dark:bg-emerald-400 border-4 border-white dark:border-slate-950" />
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-1">
                {m.year}
              </p>
              <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey