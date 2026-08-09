import { useState } from 'react'
import { HiHome, HiFolder, HiCommandLine, HiUser, HiEnvelope } from 'react-icons/hi2'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home', href: '#home', icon: HiHome },
  { label: 'Projects', href: '#projects', icon: HiFolder },
  { label: 'Skills', href: '#skills', icon: HiCommandLine },
  { label: 'About', href: '#about', icon: HiUser },
  { label: 'Contact', href: '#contact', icon: HiEnvelope },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        <a href="#home" className="text-slate-900 dark:text-white font-bold text-lg">
          AM<span className="text-emerald-500 dark:text-emerald-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-slate-700 dark:text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar