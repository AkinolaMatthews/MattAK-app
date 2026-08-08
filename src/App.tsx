import ConstellationBackground from './components/ConstellationBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative">
      <ConstellationBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Journey />
      <About />
      <FAQ />
      <Contact />
    </div>
  )
}

export default App