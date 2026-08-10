import { techIcons } from '../utils/techIcons'
import { HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineWrenchScrewdriver } from 'react-icons/hi2'
import { SiWordpress } from 'react-icons/si'
import SectionHeading from './SectionHeading'

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
    category: "CMS & E-commerce",
    icon: SiWordpress,
    color: "from-violet-500 to-purple-400",
    skills: ["WordPress", "Elementor", "WooCommerce", "WP Residence"],
  },
  {
    category: "Backend & Integrations",
    icon: HiOutlineServerStack,
    color: "from-emerald-500 to-teal-400",
    skills: ["PHP", "Node.js", "Bridge Interactive API (MLS/IDX)"],
  },
  {
    category: "Tools & Deployment",
    icon: HiOutlineWrenchScrewdriver,
    color: "from-amber-500 to-orange-400",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
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

      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white`}>
                <group.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">{group.category}</h3>
            </div>

            <div className="space-y-2">
              {group.skills.map((skill) => {
                const Icon = techIcons[skill]
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills