import profileImg from '../assets/profile.jpg'
import { techIcons } from '../utils/techIcons'

const techStack = ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Git']
const marqueeStack = [...techStack, ...techStack]

function Hero() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new projects
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-3">
            Hello 👋
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            I'm{' '}
            <span className="text-emerald-500 dark:text-emerald-400">
              Akinola Matthew
            </span>{' '}
            — Fullstack Developer building clean, functional web experiences.
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-6 mt-8 sm:mt-10">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                10+
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Projects Completed
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                React
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Core Stack
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                TypeScript
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Core Stack
              </p>
            </div>
          </div>

          {/* Tech Marquee */}
          <div className="relative mt-8 sm:mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-3 sm:gap-4 w-max animate-marquee-fast">
              {marqueeStack.map((tech, i) => {
                const Icon = techIcons[tech]

                return (
                  <span
                    key={`${tech}-${i}`}
                    className="flex-none flex items-center gap-2 px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded-full text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div
            className="
              w-64 h-80
              sm:w-72 sm:h-96
              md:w-[28rem] md:h-[34rem]
              lg:w-[34rem] lg:h-[40rem]
              rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]
              overflow-hidden
              group
            "
          >
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

