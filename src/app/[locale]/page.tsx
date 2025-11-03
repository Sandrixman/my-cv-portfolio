import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"
import LayoutWrapper from "@/components/LayoutWrapper"

export default function Home() {
    return (
        <main className='overflow-hidden relative'>
            <LayoutWrapper>
                <Hero />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </LayoutWrapper>
        </main>
    )
}
