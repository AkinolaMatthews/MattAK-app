import ConstellationBackground from './components/ConstellationBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative bg-white dark:bg-slate-950 transition-colors">
      <ConstellationBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App