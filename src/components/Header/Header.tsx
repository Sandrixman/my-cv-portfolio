"use client"

import { useState, useEffect } from "react"
import { Miss_Fajardose } from "next/font/google"
import { useScrollHide } from "./hooks/useScrollHide"
import BurgerButton from "./BurgerButton"
import MobileMenu from "./MobileMenu"
import Portal from "@/components/Portal"
import LanguageSelect from "@/components/LanguageSelect/LanguageSelect"
import ThemeToggle2 from "@/components/ThemeToggle2/ThemeToggle2"
import TransitionLink from "@/components/PageTransition/TransitionLink"

const missFajardose = Miss_Fajardose({
    subsets: ["latin"],
    weight: ["400"],
})

export default function Header() {
    const { hidden, pastHero } = useScrollHide()
    const [menuOpen, setMenuOpen] = useState(false)
    const [navLinks, setNavLinks] = useState<{ id: string; label: string }[]>([])

    // Collecting sections automatically
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section[id][data-label]"))
        const links = sections.map((section) => ({
            id: section.id,
            label: section.getAttribute("data-label") || section.id,
        }))
        setNavLinks(links)
    }, [])

    // 🚫 Scroll Lock via Lenis
    useEffect(() => {
        if (menuOpen) window.lenis?.stop()
        else window.lenis?.start()
    }, [menuOpen])

    const handleNavClick = (id: string) => {
        window.lenis?.scrollTo(`#${id}`, { offset: 0 })
        setMenuOpen(false)
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full h-[56px] 2xl:h-[100px]
                    flex items-center justify-between px-6 z-[15]
                    border-b border-[var(--color-border)]
                    backdrop-blur-md transition-all duration-500
                    ${hidden && pastHero ? "-translate-y-full" : "translate-y-0"}`}
            >
                {/* Logo */}
                <TransitionLink
                    href='/'
                    className={`${missFajardose.className} text-6xl gradient-text tracking-wider whitespace-nowrap`}
                >
                    Oleksander Novak
                </TransitionLink>

                {/* Desktop nav */}
                <nav className='hidden md:flex items-center gap-8 text-[0.95rem] font-medium whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className='text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-lg transition-colors duration-200'
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop switchers */}
                <div className='hidden md:flex items-center gap-6'>
                    <LanguageSelect />
                    <ThemeToggle2 />
                </div>

                {/* Burger */}
                <BurgerButton open={menuOpen} toggle={() => setMenuOpen((v) => !v)} />
            </header>

            {/* Mobile Menu via Portal */}
            <Portal>
                <MobileMenu open={menuOpen} close={() => setMenuOpen(false)} links={navLinks} />
            </Portal>
        </>
    )
}
