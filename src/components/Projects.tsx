import { useEffect, useState } from 'react'
import { supabase } from '../utils/lib/supabase'
import { techIcons } from '../utils/techIcons'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

type Project = {
  id: number
  title: string
  tag: string
  description: string
  features: string
  tech: string
  link: string
  image_url: string
  color: string
  in_development: boolean
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [visibleCount, setVisibleCount] = useState(2)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) setProjects(data as Project[])
    setLoading(false)
  }

  const hasMore = visibleCount < projects.length

  return (
    <section id="projects" className="text-slate-900 dark:text-white px-4 sm:px-6 md:px-20 py-12 md:py-24 transition-colors">
      <SectionHeading
        badge="Digital portfolio"
        badgeColor="sky"
        title="Stellar"
        highlight="Projects"
        subtitle="A few things I've built and shipped, connecting technology and creativity."
      />

      {loading && (
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm">Loading projects...</p>
      )}

      {!loading && projects.length === 0 && (
        <p className="text-center text-slate-500 dark:text-slate-400 text-sm">No projects added yet.</p>
      )}

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.slice(0, visibleCount).map((project) => {
          const featureList = project.features ? project.features.split(',').map(f => f.trim()) : []
          const techList = project.tech ? project.tech.split(',').map(t => t.trim()) : []

          return (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              {project.image_url && (
                <div className="overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-4 sm:p-5">
                {project.tag && (
                  <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-3">
                    {project.tag}
                  </span>
                )}

                <h3 className="text-base sm:text-lg font-bold mb-1.5">{project.title}</h3>
                {project.description && (
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                )}

                {featureList.length > 0 && (
                  <>
                    <p className="text-xs font-semibold mb-1.5">Key Features:</p>
                    <ul className="space-y-1 mb-3 text-xs">
                      {featureList.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <span className="text-emerald-500 dark:text-emerald-400">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {techList.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap mb-4">
                    {techList.map((t) => {
                      const Icon = techIcons[t]
                      return (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {Icon && <Icon className="w-3 h-3" />}
                          {t}
                        </span>
                      )
                    })}
                  </div>
                )}

                {project.in_development && (
                  <span className="text-amber-600 dark:text-amber-400 text-xs font-medium block mb-2">
                    In Development
                  </span>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r ${project.color || 'from-sky-500 to-blue-400'} hover:scale-105 transition-transform duration-200`}
                  >
                    <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((v) => v + 2)}
            className="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-medium hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 transition-all duration-200"
          >
            View More Projects
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects