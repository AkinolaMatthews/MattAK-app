import profileImg from '../assets/profile.jpg'

function Hero() {
  return (
    <section id="home" className="min-h-[70vh] md:min-h-screen flex items-center px-6 md:px-20 py-10 md:py-16 transition-colors">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">Hello</p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            I'm{" "}
            <span className="text-emerald-500 dark:text-emerald-400">Akinola Matthew</span> —
            Fullstack Developer building clean, functional web experiences.
          </h1>

          <div className="flex flex-wrap gap-6 sm:gap-10 mt-10">
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">5+</p>
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

          <div className="flex gap-4 mt-10 flex-wrap text-sm text-slate-700 dark:text-slate-300">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Git"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-72 sm:w-80 sm:h-96 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800">
            <img
              src={profileImg}
              alt="Akinola Matthew"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero