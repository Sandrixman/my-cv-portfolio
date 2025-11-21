"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { scrollToSection } from "@/utils/scrollToSection"
import { Code2, CornerRightDown } from "lucide-react"
import HeroLanguages from "./HeroLanguages"

export default function HeroContent() {
    const t = useTranslations("Hero")

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='w-full md:w-7/12 2xl:w-[900px] flex flex-col justify-center items-center px-6 md:pr-12 md:pl-[80px] xl:pr-16 xl:pl-[100px] py-12 md:py-24 bg-[var(--color-hero-overlay)] md:bg-transparent'
        >
            {/* Description Paragraphs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='space-y-4 max-w-2xl mb-10 text-center'
            >
                <p className='text-base text-[var(--color-text)] leading-relaxed font-normal'>
                    {t("description")}
                </p>
                <p className='text-base text-[var(--color-text)] leading-relaxed font-normal'>
                    {t("description2")}
                </p>
            </motion.div>

            {/* Languages Component */}
            <HeroLanguages />

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
        </motion.div>
    )
}
