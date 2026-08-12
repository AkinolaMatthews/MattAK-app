import { useState } from 'react'
import tatianaImg from '../assets/projects/tatiana.png'
import foreitgolfImg from '../assets/projects/foreitgolf.png'
import mesbiensImg from '../assets/projects/mesbiens.png'
import igcaImg from '../assets/projects/igca.png'
import maaanaccImg from '../assets/projects/maaanacc.png'
import aveImg from '../assets/projects/195ave.png'
import m4leventsImg from '../assets/projects/m4levents.png'
import { techIcons } from '../utils/techIcons'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

type Project = {
  title: string
  tag: string
  description: string
  features: string[]
  tech: string[]
  link: string
  image: string
  color: string
  inDevelopment?: boolean
}

const projects: Project[] = [
  {
    title: "TatianaMunoz.com",
    tag: "Real Estate",
    description: "A professional real estate website that helps clients browse property listings and connect directly with an agent.",
    features: ["Property listing browser", "Agent contact integration", "Clean, modern layout"],
    tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
    link: "https://tatianamunoz.com",
    image: tatianaImg,
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "Fore It Golf",
    tag: "E-commerce",
    description: "An eCommerce website for selling golf products online, built for smooth browsing and checkout.",
    features: ["Full product catalog", "Cart & checkout flow", "Mobile-friendly browsing"],
    tech: ["WordPress", "WooCommerce", "Elementor"],
    link: "https://foreitgolf.com",
    image: foreitgolfImg,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "MesBiensÀVendre",
    tag: "Real Estate",
    description: "A French real estate platform with MLS/IDX integration and multilingual property listings, currently in development.",
    features: ["MLS/IDX live sync", "Multilingual listings", "Bridge Interactive API integration"],
    tech: ["WordPress", "WP Residence", "Bridge Interactive API", "PHP", "JavaScript"],
    link: "https://mesbiensavendre.fr/fr/",
    image: mesbiensImg,
    color: "from-blue-500 to-indigo-400",
    inDevelopment: true,
  },
  {
    title: "IGCA",
    tag: "Association",
    description: "A trade association website for indigenous construction contractors in Nigeria, featuring services, project galleries, and member testimonials.",
    features: ["Project gallery", "Member testimonials", "Service pages"],
    tech: ["WordPress", "Elementor"],
    link: "http://indigecontass.com.ng/",
    image: igcaImg,
    color: "from-amber-500 to-yellow-400",
  },
  {
    title: "MAAANACC",
    tag: "Kids / Merch",
    description: "A playful comic-club fan site and merch shop for kids, featuring original character profiles and a shop built with WooCommerce.",
    features: ["Character profile pages", "Merch shop", "Playful custom design"],
    tech: ["WordPress", "Elementor", "WooCommerce"],
    link: "https://maaanacc.com/",
    image: maaanaccImg,
    color: "from-purple-500 to-fuchsia-400",
  },
  {
    title: "2373 NW 195 Ave",
    tag: "Real Estate",
    description: "A single-property real estate listing site with photo gallery, floor plans, 3D tour integration, and an inquiry form for a Florida waterfront home.",
    features: ["3D virtual tour", "Photo gallery & floor plans", "Inquiry form"],
    tech: ["WordPress", "Elementor"],
    link: "https://2373nw195ave.com/",
    image: aveImg,
    color: "from-cyan-500 to-sky-400",
  },
  {
    title: "M4Levents",
    tag: "Events",
    description: "A booking and portfolio site for a 360° photo booth and event photography business, with service packages and a photo gallery.",
    features: ["Service package pages", "Photo gallery", "Booking-focused layout"],
    tech: ["WordPress", "Elementor"],
    link: "https://m4levents.com/",
    image: m4leventsImg,
    color: "from-orange-500 to-red-400",
  },
]

function Projects() {
  const [visibleCount, setVisibleCount] = useState(2)
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

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-4 sm:p-5">
              <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-3">
                {project.tag}
              </span>

              <h3 className="text-base sm:text-lg font-bold mb-1.5">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <p className="text-xs font-semibold mb-1.5">Key Features:</p>
              <ul className="space-y-1 mb-3 text-xs">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span className="text-emerald-500 dark:text-emerald-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-1.5 flex-wrap mb-4">
                {project.tech.map((t) => {
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

              {project.inDevelopment && (
                <span className="text-amber-600 dark:text-amber-400 text-xs font-medium block mb-2">
                  In Development
                </span>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r ${project.color} hover:scale-105 transition-transform duration-200`}
                >
                  <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
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