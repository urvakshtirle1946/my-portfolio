import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'
import NavBarDemo from './components/ui/navbar-demo'
import { FloatingCursor } from './components/floating-cursor'

const Page = () => {
  return (
    <>
      <FloatingCursor />
      <NavBarDemo />
      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default Page