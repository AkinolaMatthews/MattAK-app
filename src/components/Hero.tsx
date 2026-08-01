function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center px-6 md:px-20">
      <p className="text-slate-400 text-lg mb-4">Hello</p>

      <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl">
        I'm{" "}
        <span className="text-emerald-400">Akinola Matthew</span> —
        Fullstack Developer building clean, functional web experiences.
      </h1>

      <div className="flex gap-10 mt-10">
        <div>
          <p className="text-3xl font-bold">5+</p>
          <p className="text-slate-400 text-sm">Projects Completed</p>
        </div>
        <div>
          <p className="text-3xl font-bold">React</p>
          <p className="text-slate-400 text-sm">Core Stack</p>
        </div>
        <div>
          <p className="text-3xl font-bold">TypeScript</p>
          <p className="text-slate-400 text-sm">Core Stack</p>
        </div>
      </div>

      <div className="flex gap-4 mt-10 flex-wrap text-sm text-slate-300">
        {["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Git"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 border border-slate-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Hero