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
    <section id="skills" className="bg-slate-950 text-white px-6 md:px-20 py-24">
      <h2 className="text-4xl font-bold mb-2">The Stack</h2>
      <p className="text-slate-400 mb-12">
        Tools and technologies I use to build complete, functional websites.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="border border-slate-800 rounded-xl p-6"
          >
            <h3 className="text-emerald-400 font-semibold mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills