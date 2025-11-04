"use client"

import { useState, useEffect } from "react"
import { useScrollHide } from "./hooks/useScrollHide"
import BurgerButton from "./BurgerButton"
import MobileMenu from "./MobileMenu"
import Portal from "@/components/Portal"
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher"
import ThemeToggle2 from "@/components/ThemeToggle2/ThemeToggle2"

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
                className={`fixed top-0 left-0 w-full h-[56px]
                    flex items-center justify-between px-6 z-[1000]
                    border-b border-[var(--color-border)]
                    backdrop-blur-md transition-all duration-500
                    ${hidden && pastHero ? "-translate-y-full" : "translate-y-0"}`}
            >
                {/* Logo */}
                <div className='font-semibold text-[2rem] md:text-[1.2rem] gradient-text tracking-wide whitespace-nowrap'>
                    Oleksandr Novak
                </div>

                {/* Desktop nav */}
                <nav className='hidden md:flex items-center gap-8 text-[0.95rem] font-medium whitespace-nowrap'>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className='text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200'
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop switchers */}
                <div className='hidden md:flex items-center gap-3'>
                    <LangSwitcher />
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
