import Hero from "@/components/Hero"
import Skills from "@/components/Skills/SkillsSection"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"

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
