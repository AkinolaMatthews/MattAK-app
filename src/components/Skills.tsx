import { techIcons } from '../utils/techIcons'
import {
  HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineCircleStack,
  HiOutlineWrenchScrewdriver, HiOutlineStar, HiOutlineAcademicCap,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

const skillColors: Record<string, string> = {
  React: "text-sky-500",
  TypeScript: "text-blue-600",
  JavaScript: "text-amber-500",
  "Tailwind CSS": "text-cyan-500",
  Vite: "text-violet-500",
  HTML5: "text-orange-500",
  CSS3: "text-blue-500",
  PHP: "text-indigo-500",
  "Node.js": "text-green-600",
  WordPress: "text-slate-600 dark:text-slate-300",
  WooCommerce: "text-purple-600",
  Elementor: "text-pink-600",
  MySQL: "text-orange-600",
  MongoDB: "text-green-500",
  Git: "text-orange-600",
  GitHub: "text-slate-700 dark:text-slate-200",
  Vercel: "text-slate-800 dark:text-white",
}

type SkillGroup = {
  category: string
  icon: React.ElementType
  color: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: HiOutlineCodeBracket,
    color: "from-sky-500 to-blue-400",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    category: "Backend & CMS",
    icon: HiOutlineServerStack,
    color: "from-emerald-500 to-teal-400",
    skills: ["PHP", "Node.js", "WordPress", "WooCommerce", "Elementor"],
  },
  {
    category: "Database",
    icon: HiOutlineCircleStack,
    color: "from-fuchsia-500 to-pink-400",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    icon: HiOutlineWrenchScrewdriver,
    color: "from-violet-500 to-purple-400",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
]

const stats = [
  { icon: HiOutlineStar, label: "Experience Level", value: "5+ Years", sub: "Years of hands-on development", color: "from-indigo-500 to-purple-400" },
  { icon: HiOutlineAcademicCap, label: "Continuous Learning", value: "Active", sub: "Always exploring new technologies", color: "from-fuchsia-500 to-pink-400" },
  { icon: HiOutlineRocketLaunch, label: "Specialization", value: "Full-Stack", sub: "Frontend + Backend + CMS", color: "from-teal-500 to-cyan-400" },
]

function Skills() {
  return (
    <section id="skills" className="text-slate-900 dark:text-white px-4 sm:px-6 md:px-20 py-12 md:py-24 transition-colors">
      <SectionHeading
        badge="Technological arsenal"
        badgeColor="emerald"
        title="Skills"
        highlight="Constellation"
        subtitle="Tools and technologies I use to build complete, scalable, functional websites."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white flex-shrink-0`}>
                <group.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">{group.category}</h3>
            </div>

            <div className="space-y-2">
              {group.skills.map((skill) => {
                const Icon = techIcons[skill]
                const iconColor = skillColors[skill] || 'text-slate-500 dark:text-slate-400'
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${iconColor}`} />}
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="font-semibold text-sm mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills