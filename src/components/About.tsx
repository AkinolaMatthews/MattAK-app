function About() {
  return (
    <section id="about" className="text-slate-900 dark:text-white px-6 md:px-20 py-12 md:py-24 transition-colors">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2">
            // Ready for new challenges
          </p>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            I'm Akinola Matthew, a self-taught Fullstack Developer who learned
            through hands-on practice and online courses rather than a
            traditional classroom path. That background taught me to be
            resourceful — figuring things out, debugging patiently, and
            picking up new tools quickly.
          </p>

          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            I enjoy building full websites end-to-end — from the first line
            of code to a live, working product a client or user can actually
            visit and use. I've delivered real estate platforms and eCommerce
            sites, and I'm comfortable working across WordPress, custom code,
            and modern JavaScript frameworks like React and TypeScript.
          </p>

          <div className="flex gap-3 flex-wrap">
            {["Problem Solver", "Detail-Oriented", "Fast Learner", "End-to-End Builder"].map(
              (trait) => (
                <span
                  key={trait}
                  className="text-xs px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300"
                >
                  {trait}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
          <h3 className="text-lg font-semibold mb-4">What I Do</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            I build complete, functional websites — handling everything from
            layout and design to backend setup and deployment — so businesses
            and individuals can go from an idea to a live site with minimal
            friction.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About