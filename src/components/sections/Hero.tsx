"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { scrollToSection } from "@/utils/scrollToSection"
import { Code2, CornerRightDown } from "lucide-react"
import { useState, useEffect } from "react"

const socialLinks = [
    {
        id: "telegram",
        href: "https://t.me/sancho_novak",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-[20px] h-[20px] fill-current'
            >
                <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'></path>
            </svg>
        ),
    },
    {
        id: "github",
        href: "https://github.com/sandrixman",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-[20px] h-[20px] fill-current'
            >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
            </svg>
        ),
    },
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/-oleksandr-novak/",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-[20px] h-[20px] fill-current'
            >
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'></path>
            </svg>
        ),
    },
]

export default function Hero() {
    const t = useTranslations("Hero")
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        checkIsDesktop()
        window.addEventListener("resize", checkIsDesktop)

        return () => window.removeEventListener("resize", checkIsDesktop)
    }, [])

    const variants = {
        initial: {
            desktop: { opacity: 0, x: -50, y: "-50%" },
            mobile: { opacity: 0, x: "-50%", y: -50 },
        },
        animate: {
            desktop: { opacity: 1, x: 0, y: "-50%" },
            mobile: { opacity: 1, x: "-50%", y: 0 },
        },
    }

    return (
        <section
            id='hero'
            data-label={t("label")}
            className='max-w-full m-0 relative flex flex-col md:flex-row overflow-hidden px-0 pt-0'
        >
            {/* Left Panel */}
            <div className='w-full md:w-5/12 h-[30vh] md:h-[calc(100vh-56px)] mt-[180px] md:mt-0 flex items-center relative bg-[var(--color-hero-overlay)]'>
                <motion.div
                    initial={isDesktop ? variants.initial.desktop : variants.initial.mobile}
                    animate={isDesktop ? variants.animate.desktop : variants.animate.mobile}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className='w-[280px] md:w-[350px] h-[385px] md:h-[520px] bg-[var(--color-hero-card)] absolute top-[-160px] md:top-1/2 left-[50%] md:left-auto md:right-[-60px] shadow-[-10px_10px_15px_rgba(0,0,0,0.1)]'
                >
                    {/* Main Content */}
                    <div className='flex flex-col items-center justify-center py-[40px] px-[20px]'>
                        {/* Profile Picture */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className='mb-6'
                        >
                            <div className='w-[100px] h-[100px] md:w-[190px] md:h-[190px] rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700'></div>
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className='text-center'
                        >
                            <h1 className='text-[24px] font-bold text-[var(--color-text)] leading-tight mb-1'>
                                {t("title")}
                            </h1>
                            <h1 className='text-[24px] font-bold text-[var(--color-text)] leading-tight'>
                                {t("titleLast")}
                            </h1>
                        </motion.div>

                        {/* Separator Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className='w-[50px] h-[2px] bg-[var(--color-accent)] m-[16px] md:m-[36px]'
                        />

                        {/* Professional Title */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <p className='w-[250px] text-[12px] text-center tracking-[0.3em] uppercase text-[var(--color-text-muted)]'>
                                {t("subtitle")}
                            </p>
                        </motion.div>
                    </div>

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className='w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] py-[20px] flex justify-center gap-[20px]'
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.id}
                                href={social.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.1 }}
                                className='text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300'
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full md:w-7/12 2xl:w-[900px] flex flex-col justify-center items-center px-6 md:pr-12 md:pl-[80px] xl:pr-16 xl:pl-[100px] py-12 md:py-24 bg-[var(--color-hero-overlay)] md:bg-transparent'
            >
                {/* Greeting */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className='text-7xl md:text-8xl lg:text-9xl font-bold text-[var(--color-text)] mb-4 leading-none'
                >
                    {t("greeting")}
                </motion.h2>

                {/* Introduction */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className='text-base md:text-lg text-[var(--color-text)] mb-8 font-normal'
                >
                    {t("intro")}
                </motion.p>

                {/* CTA Button - Gradient style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className='mb-10 w-1/2 order-1 md:order-none'
                >
                    <button
                        onClick={() => scrollToSection("projects", 0)}
                        className='
                            group relative w-full md:max-w-sm overflow-hidden rounded-2xl border border-[var(--color-border)]
                            bg-[var(--color-card)] text-[var(--color-text)]
                            hover:bg-gradient-to-r hover:from-[var(--color-gradient-start)] hover:to-[var(--color-gradient-end)]
                            hover:text-white transition-all duration-500 ease-out
                            shadow-[0_4px_14px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_-4px_var(--color-accent)]
                            active:scale-95
                        '
                    >
                        {/* Shimmer effect */}
                        <div
                            className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none'
                            style={{
                                background:
                                    "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.7) 60%, transparent 100%)",
                            }}
                        ></div>

                        <div className='relative z-10 flex items-center justify-between px-6 py-3'>
                            <div className='flex items-center gap-4'>
                                <div className='p-2 rounded-lg bg-[var(--color-accent)]/10 group-hover:bg-white/20 transition-colors duration-300'>
                                    <Code2 className='w-5 h-5 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300' />
                                </div>
                                <span className='font-semibold text-lg'>{t("ctaProjects")}</span>
                            </div>
                            <CornerRightDown className='w-6 h-6 text-[var(--color-accent)] group-hover:text-white group-hover:translate-x-1 transition-all duration-300' />
                        </div>
                    </button>
                </motion.div>

                {/* Description Paragraphs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className='space-y-4 max-w-2xl mb-10 md:m-0 text-center'
                >
                    <p className='text-base text-[var(--color-text)] leading-relaxed font-normal'>
                        {t("description")}
                    </p>
                    <p className='text-base text-[var(--color-text)] leading-relaxed font-normal'>
                        {t("description2")}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}
