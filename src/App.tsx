import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Journey />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </div>
  )
}

export default App