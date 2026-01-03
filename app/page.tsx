import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/project/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"
import SkillGrid from "@/components/SkillGrid"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <SkillGrid />
        <About />
        <Contact />
      </main>
    </>
  )
}
