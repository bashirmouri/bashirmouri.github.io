import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-16 pt-4 sm:pb-20 sm:pt-6">
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default Home
