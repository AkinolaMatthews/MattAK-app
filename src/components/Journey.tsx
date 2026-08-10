import {
  HiOutlineRocketLaunch, HiOutlineBuildingOffice2, HiOutlineChartBar,
  HiOutlineSparkles, HiOutlineCodeBracket, HiOutlineGlobeAlt,
  HiOutlineBriefcase, HiOutlineTrophy,
} from 'react-icons/hi2'
import ScrollReveal from './ScrollReveal'

type Milestone = {
  year: string
  title: string
  description: string
  tech: string[]
  current?: boolean
  badge: string
  icon: React.ElementType
  gradient: string
  borderColor: string
  badgeText: string
}

const milestones: Milestone[] = [
  {
    year: "Year 5 — Today",
    title: "Fullstack Developer",
    description:
      "Now building complete web experiences end-to-end with React, TypeScript, and Tailwind CSS, alongside continued WordPress and custom development work.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    current: true,
    badge: "Current Mission",
    icon: HiOutlineTrophy,
    gradient: "from-emerald-500 to-teal-400",
    borderColor: "border-t-emerald-400",
    badgeText: "text-emerald-600 dark:text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
  },
  {
    year: "Year 4",
    title: "Advanced Integrations",
    description:
      "Took on more complex projects involving MLS/IDX integrations and multilingual platforms, like MesBiensÀVendre.",
    tech: ["WP Residence", "Bridge Interactive API", "PHP"],
    badge: "Leveling Up",
    icon: HiOutlineGlobeAlt,
    gradient: "from-sky-500 to-blue-400",
    borderColor: "border-t-sky-400",
    badgeText: "text-sky-600 dark:text-sky-300 bg-sky-400/10 border-sky-400/30",
  },
  {
    year: "Year 3",
    title: "Specializing in Real Estate & E-commerce",
    description:
      "Focused on real estate platforms and e-commerce builds, working with WooCommerce and custom plugin integrations.",
    tech: ["WooCommerce", "WordPress", "Elementor"],
    badge: "Finding Focus",
    icon: HiOutlineBriefcase,
    gradient: "from-violet-500 to-purple-400",
    borderColor: "border-t-violet-400",
    badgeText: "text-violet-600 dark:text-violet-300 bg-violet-400/10 border-violet-400/30",
  },
  {
    year: "Year 2",
    title: "First Client Projects",
    description:
      "Started taking on real client work, building sites with WordPress and Elementor and learning to deliver functional products under real deadlines.",
    tech: ["WordPress", "Elementor"],
    badge: "First Clients",
    icon: HiOutlineSparkles,
    gradient: "from-amber-500 to-orange-400",
    borderColor: "border-t-amber-400",
    badgeText: "text-amber-600 dark:text-amber-300 bg-amber-400/10 border-amber-400/30",
  },
  {
    year: "Year 1",
    title: "Started Learning to Code",
    description:
      "Began self-teaching through hands-on practice and online courses, building my first small projects and learning the fundamentals of web development.",
    tech: ["HTML", "CSS", "JavaScript"],
    badge: "First Flight",
    icon: HiOutlineCodeBracket,
    gradient: "from-rose-500 to-pink-400",
    borderColor: "border-t-rose-400",
    badgeText: "text-rose-600 dark:text-rose-300 bg-rose-400/10 border-rose-400/30",
  },
]

const stats = [
  { icon: HiOutlineRocketLaunch, value: "10+", label: "Projects Shipped", color: "from-violet-500 to-purple-400" },
  { icon: HiOutlineBuildingOffice2, value: "10+", label: "Clients Served", color: "from-sky-500 to-blue-400" },
  { icon: HiOutlineChartBar, value: "7+", label: "Technologies Used", color: "from-emerald-500 to-teal-400" },
]

function MilestoneCard({ m, align }: { m: Milestone; align: 'left' | 'right' }) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-6 border-t-4 ${m.borderColor} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 my-4 ${
        align === 'left' ? 'md:text-right' : ''
      }`}
    >
      <div className={`flex items-center gap-3 mb-3 ${align === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white flex-shrink-0`}>
          <m.icon className="w-5 h-5" />
        </div>
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${m.badgeText}`}>
          {m.badge}
        </span>
      </div>

      <p className="text-slate-500 dark:text-slate-500 text-xs font-medium mb-1">{m.year}</p>
      <h3 className="text-lg font-bold mb-2">{m.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
        {m.description}
      </p>
      <div className={`flex gap-2 flex-wrap ${align === 'left' ? 'md:justify-end' : ''}`}>
        {m.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function Journey() {
  return (
    <section id="journey" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-400/10 border border-violet-400/30 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span className="text-violet-600 dark:text-violet-300 text-xs font-medium">Professional journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Five years of learning, building, and shipping real projects.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-4">
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={m.year} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-12 items-center">
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${m.gradient} border-4 border-white dark:border-slate-950 z-10`}
                />

                {isLeft ? (
                  <>
                    <ScrollReveal className="md:pr-4">
                      <MilestoneCard m={m} align="left" />
                    </ScrollReveal>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <ScrollReveal className="md:pl-4">
                      <MilestoneCard m={m} align="right" />
                    </ScrollReveal>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <ScrollReveal className="max-w-3xl mx-auto mt-16">
        <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center mb-8">Journey Milestones</h3>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Journey