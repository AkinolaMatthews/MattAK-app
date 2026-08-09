import profileImg from '../assets/profile.jpg'
import { techIcons } from '../utils/techIcons'

const techStack = ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Git"]
const marqueeStack = [...techStack, ...techStack]

function Hero() {
  return (
    <section id="home" className="min-h-[70vh] md:min-h-screen flex items-center px-6 md:px-20 py-10 md:py-16 transition-colors overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-300 text-sm font-medium">
              Available for new projects
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">Hello</p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            I'm{" "}
            <span className="text-emerald-500 dark:text-emerald-400">Akinola Matthew</span> —
            Fullstack Developer building clean, functional web experiences.
          </h1>

          <div className="flex flex-wrap gap-6 sm:gap-10 mt-10">
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">10+</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">React</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Core Stack</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">TypeScript</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Core Stack</p>
            </div>
          </div>

          <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-4 w-max animate-marquee-fast">
              {marqueeStack.map((tech, i) => {
                const Icon = techIcons[tech]
                return (
                  <span
                    key={`${tech}-${i}`}
                    className="flex-none flex items-center gap-2 px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-96 sm:w-[28rem] sm:h-[32rem] md:w-[34rem] md:h-[40rem] rounded-[3rem] overflow-hidden group">
            <img
              src={profileImg}
              alt="Akinola Matthew"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero