"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { scrollToSection } from "@/utils/scrollToSection"
import { Heart, Code2 } from "lucide-react"

const socialLinks = [
    {
        id: "telegram",
        href: "https://t.me/sancho_novak",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-5 h-5 fill-current'
            >
                <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'></path>
            </svg>
        ),
        name: "Telegram",
    },
    {
        id: "github",
        href: "https://github.com/sandrixman",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-5 h-5 fill-current'
            >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
            </svg>
        ),
        name: "GitHub",
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/-oleksandr-novak/",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-5 h-5 fill-current'
            >
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'></path>
            </svg>
        ),
        name: "LinkedIn",
    },
]

export default function Footer() {
    const t = useTranslations("Footer")
    const tAbout = useTranslations("About")
    const tSkills = useTranslations("Skills")
    const tProjects = useTranslations("Projects")
    const tExperience = useTranslations("Experience")
    const tContact = useTranslations("Contact")

    const quickLinks = [
        { id: "about", label: tAbout("label") },
        { id: "skills", label: tSkills("label") },
        { id: "projects", label: tProjects("label") },
        { id: "experience", label: tExperience("label") },
        { id: "contact", label: tContact("label") },
    ]

    return (
        <footer className='relative border-t border-[var(--color-border)] bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-muted)]'>
            <div className='max-w-[1440px] mx-auto px-6 sm:px-12 2xl:px-0 py-12 md:py-16'>
                <div className='grid grid-cols-3 gap-8 md:gap-12 mb-8'>
                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-lg font-semibold text-[var(--color-text)] mb-4'>
                            {t("quickLinks")}
                        </h3>
                        <nav className='flex flex-col space-y-2'>
                            {quickLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id, 0)}
                                    className='text-left text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 w-fit'
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-lg font-semibold text-[var(--color-text)] mb-4'>
                            {t("social")}
                        </h3>
                        <div className='flex flex-col space-y-3'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300 group'
                                >
                                    <span className='p-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/50 transition-colors duration-300'>
                                        <span className='text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300'>
                                            {social.icon}
                                        </span>
                                    </span>
                                    <span>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-lg font-semibold text-[var(--color-text)] mb-4'>
                            {t("contact")}
                        </h3>
                        <div className='space-y-2 text-sm text-[var(--color-text-muted)]'>
                            <p>
                                <a
                                    href='mailto:sandrix28101981@gmail.com'
                                    className='hover:text-[var(--color-accent)] transition-colors duration-300'
                                >
                                    sandrix28101981@gmail.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href='tel:+380506901903'
                                    className='hover:text-[var(--color-accent)] transition-colors duration-300'
                                >
                                    +380 50 690 19 03
                                </a>
                            </p>
                            <p className='pt-2'>Khmelnitsky, Ukraine</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='pt-8 border-t border-[var(--color-border)]'
                >
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-sm text-[var(--color-text-muted)] text-center md:text-left'>
                            {t("copyright")}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-[var(--color-text-muted)]'>
                            <span>{t("madeWith")}</span>
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                className='text-[var(--color-accent)]'
                            >
                                <Heart className='w-4 h-4 fill-current' />
                            </motion.span>
                            <span>{t("and")}</span>
                            <Code2 className='w-4 h-4 text-[var(--color-accent)]' />
                            <span>by Oleksandr Novak</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
