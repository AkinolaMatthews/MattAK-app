import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Journey />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}

export default App