type Project = {
  title: string
  description: string
  tech: string[]
  link: string
  inDevelopment?: boolean
}

const projects: Project[] = [
  {
    title: "TatianaMunoz.com",
    description:
      "A professional real estate website that helps clients browse property listings and connect directly with an agent.",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
    link: "https://tatianamunoz.com",
  },
  {
    title: "Fore It Golf",
    description:
      "An eCommerce website for selling golf products online, built for smooth browsing and checkout.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    link: "https://foreitgolf.com",
  },
  {
    title: "IGCA (Indigenous General Contractors Association)",
    description:
      "A trade association website for indigenous construction contractors in Nigeria, featuring services, project galleries, and member testimonials.",
    tech: ["WordPress", "Slider Revolution", "Elementor"],
    link: "http://indigecontass.com.ng/",
  },
  {
    title: "MAAANACC",
    description:
      "A playful comic-club fan site and merch shop for kids, featuring original character profiles and a shop built with WooCommerce.",
    tech: ["WordPress", "Elementor", "WooCommerce"],
    link: "https://maaanacc.com/",
  },
  {
    title: "2373 NW 195 Ave",
    description:
      "A single-property real estate listing site with photo gallery, floor plans, 3D tour integration, and an inquiry form for a Florida waterfront home.",
    tech: ["WordPress", "Slider Revolution", "Elementor"],
    link: "https://2373nw195ave.com/",
  },
  {
    title: "M4Levents",
    description:
      "A booking and portfolio site for a 360° photo booth and event photography business, with service packages and a photo gallery.",
    tech: ["WordPress", "Elementor"],
    link: "https://m4levents.com/",
  },
  {
    title: "MesBiensÀVendre",
    description:
      "A French real estate platform with MLS/IDX integration and multilingual property listings, currently in development.",
    tech: ["WordPress", "WP Residence", "Bridge Interactive API", "PHP", "JavaScript"],
    link: "https://mesbiensavendre.fr/fr/",
    inDevelopment: true,
  },
]

function Projects() {
  return (
    <section id="projects" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <h2 className="text-4xl font-bold mb-2">My Projects</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-12">
        A few things I've built and shipped.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-emerald-400 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>

            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
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
                className="text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects