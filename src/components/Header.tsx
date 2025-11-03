"use client"

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle"
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher"

export default function Header() {
    const navLinks = [
        { id: "projects", label: "Проєкти" },
        { id: "about", label: "Про мене" },
        { id: "contact", label: "Контакт" },
    ]

    return (
        <header
            className='fixed top-0 left-0 w-full h-[56px]
                       flex items-center justify-between px-6 z-[1000]
                       bg-[var(--color-bg)] border-b border-[var(--color-border)]
                       transition-colors duration-500'
        >
            <div className='font-semibold text-[1.1rem] gradient-text tracking-wide whitespace-nowrap'>
                Oleksandr Novak
            </div>

            <nav className='hidden md:flex items-center gap-8 text-[0.95rem] font-medium whitespace-nowrap'>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => {
                            const el = document.querySelector(`#${link.id}`)
                            el?.scrollIntoView({ behavior: "smooth" })
                        }}
                        className='text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200'
                    >
                        {link.label}
                    </button>
                ))}
            </nav>

            <div className='flex items-center gap-3 shrink-0 justify-end'>
                <LangSwitcher />
                <ThemeToggle />
            </div>
        </header>
    )
}
