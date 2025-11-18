import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills/SkillsSection"
import Projects from "@/components/sections/Projects/ProjectsSection"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
    return (
        <main className='pt-[56px] 2xl:pt-[72px] w-full relative z-[1]'>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
