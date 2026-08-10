import { HiOutlineRocketLaunch, HiOutlineLightBulb } from 'react-icons/hi2'
import SectionHeading from './SectionHeading'

const stats = [
  { value: "5+", label: "Years Building", color: "from-emerald-500 to-teal-400" },
  { value: "10+", label: "Projects Shipped", color: "from-sky-500 to-blue-400" },
  { value: "7+", label: "Technologies Used", color: "from-violet-500 to-purple-400" },
  { value: "10+", label: "Happy Clients", color: "from-amber-500 to-orange-400" },
]

function About() {
  return (
    <section id="about" className="text-slate-900 dark:text-white px-4 sm:px-6 md:px-20 py-12 md:py-24 transition-colors">
      <SectionHeading
        badge="Ready for new challenges"
        badgeColor="amber"
        title="About"
        highlight="Me"
        subtitle="A closer look at how I got here and what I bring to every project."
      />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                <HiOutlineRocketLaunch className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">Self-Taught Path</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              I learned through hands-on practice and online courses rather than
              a traditional classroom path — that background taught me to be
              resourceful, patient, and quick to pick up new tools.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-400 flex items-center justify-center text-white">
                <HiOutlineLightBulb className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">End-to-End Builder</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              I enjoy building full websites end-to-end — from the first line
              of code to a live product a client can actually visit and use,
              across WordPress, custom code, React, and TypeScript.
            </p>
          </div>

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

        <div className="bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-xs font-medium">Currently Available</span>
          </div>

          <h3 className="text-white text-xl font-bold mb-1">At a Glance</h3>
          <p className="text-slate-400 text-sm mb-6">A quick snapshot of my track record</p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-4 bg-gradient-to-br ${stat.color} bg-opacity-10`}
              >
                <p className="text-white text-2xl font-bold">{stat.value}</p>
                <p className="text-white/80 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About