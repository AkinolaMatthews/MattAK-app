import { useState } from 'react'
import tatianaImg from '../assets/projects/tatiana.png'
import foreitgolfImg from '../assets/projects/foreitgolf.png'
import mesbiensImg from '../assets/projects/mesbiens.png'
import igcaImg from '../assets/projects/igca.png'
import maaanaccImg from '../assets/projects/maaanacc.png'
import aveImg from '../assets/projects/195ave.png'
import m4leventsImg from '../assets/projects/m4levents.png'
import { techIcons } from '../utils/techIcons'

type Project = {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
  inDevelopment?: boolean
}

const projects: Project[] = [
  {
    title: "TatianaMunoz.com",
    description: "A professional real estate website that helps clients browse property listings and connect directly with an agent.",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
    link: "https://tatianamunoz.com",
    image: tatianaImg,
  },
  {
    title: "Fore It Golf",
    description: "An eCommerce website for selling golf products online, built for smooth browsing and checkout.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    link: "https://foreitgolf.com",
    image: foreitgolfImg,
  },
  {
    title: "MesBiensÀVendre",
    description: "A French real estate platform with MLS/IDX integration and multilingual property listings, currently in development.",
    tech: ["WordPress", "WP Residence", "Bridge Interactive API", "PHP", "JavaScript"],
    link: "https://mesbiensavendre.fr/fr/",
    image: mesbiensImg,
    inDevelopment: true,
  },
  {
    title: "IGCA (Indigenous General Contractors Association)",
    description: "A trade association website for indigenous construction contractors in Nigeria, featuring services, project galleries, and member testimonials.",
    tech: ["WordPress", "Elementor"],
    link: "http://indigecontass.com.ng/",
    image: igcaImg,
  },
  {
    title: "MAAANACC",
    description: "A playful comic-club fan site and merch shop for kids, featuring original character profiles and a shop built with WooCommerce.",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    link: "https://maaanacc.com/",
    image: maaanaccImg,
  },
  {
    title: "2373 NW 195 Ave",
    description: "A single-property real estate listing site with photo gallery, floor plans, 3D tour integration, and an inquiry form for a Florida waterfront home.",
    tech: ["WordPress", "Elementor"],
    link: "https://2373nw195ave.com/",
    image: aveImg,
  },
  {
    title: "M4Levents",
    description: "A booking and portfolio site for a 360° photo booth and event photography business, with service packages and a photo gallery.",
    tech: ["WordPress", "Elementor"],
    link: "https://m4levents.com/",
    image: m4leventsImg,
  },
]

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3)
  const hasMore = visibleCount < projects.length

  return (
    <section id="projects" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <h2 className="text-4xl font-bold mb-2">My Projects</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        A few things I've built and shipped.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>

              <div className="flex gap-2 flex-wrap mb-4">
                {project.tech.map((t) => {
                  const Icon = techIcons[t]
                  return (
                    <span
                      key={t}
                      className="flex items-center gap-2 text-xs px-2 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      {t}
                    </span>
                  )
                })}
              </div>

              {project.inDevelopment && (
                <span className="text-amber-600 dark:text-amber-400 text-xs font-medium block mb-2">
                  In Development
                </span>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((v) => v + 3)}
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