import useReveal from './hooks/useReveal'
import Starfield from './components/Starfield'
import CursorGlow from './components/CursorGlow'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import EasterEggs from './components/EasterEggs'

export default function App() {
  useReveal()

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Starfield />
      <div className="nebula" aria-hidden="true" />
      <CursorGlow />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
      <Terminal />
      <EasterEggs />
    </>
  )
}
