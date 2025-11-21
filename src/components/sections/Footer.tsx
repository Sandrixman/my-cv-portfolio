"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { scrollToSection } from "@/utils/scrollToSection"
import { Heart, Code2 } from "lucide-react"

import { contactInfo, socialLinks } from "@/config/constants"

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
                                        <span className='text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300 block w-5 h-5'>
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
                                    href={`mailto:${contactInfo.email}`}
                                    className='hover:text-[var(--color-accent)] transition-colors duration-300'
                                >
                                    {contactInfo.email}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className='hover:text-[var(--color-accent)] transition-colors duration-300'
                                >
                                    {contactInfo.phone}
                                </a>
                            </p>
                            <p className='pt-2'>{contactInfo.location}</p>
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
