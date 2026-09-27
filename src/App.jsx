import profile from './assets/profile.jpeg'
import Navbar from './component/navbar'
import HeroSection from './component/hero'
import About from './component/About'
import SkillSection from './component/skills'
import Experience from './component/experience'
import Contact from './component/contact'
import Stats from "./component/Stats";
import FeaturedProjects from './component/FeaturedProjects'
import AllProjects from './component/AllProjects'

function App() {
  if (window.location.pathname === '/projects') return <AllProjects />

  return (
    <>
      <Navbar />
      <main>
        <HeroSection img={profile} />
        <Stats />
        <About />
        <FeaturedProjects />
        <SkillSection />
        <Experience />
      </main>
      <Contact />
    </>
  )
}

export default App
