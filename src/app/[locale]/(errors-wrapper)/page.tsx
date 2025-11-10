import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills/SkillsSection"
import Projects from "@/components/sections/Projects/ProjectsSection"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"

export default function Home() {
    return (
        <main className='pt-[56px] w-full relative z-[1]'>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </main>
    )
}
