import { techIcons } from '../utils/techIcons'

type SkillGroup = {
  category: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    category: "CMS & E-commerce",
    skills: ["WordPress", "Elementor", "WooCommerce", "WP Residence"],
  },
  {
    category: "Backend & Integrations",
    skills: ["PHP", "Node.js", "Bridge Interactive API (MLS/IDX)"],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
]

function Skills() {
  return (
    <section id="skills" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <h2 className="text-4xl font-bold mb-2">The Stack</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        Tools and technologies I use to build complete, functional websites.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = techIcons[skill]
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-2 text-xs px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    {skill}
                  </span>
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