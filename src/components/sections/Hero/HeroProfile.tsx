"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { socialLinks } from "./heroData"
import dynamic from "next/dynamic"

const DownloadCVButton = dynamic(() => import("@/components/PDF/DownloadCVButton"), {
    ssr: false,
    loading: () => (
        <button
            className='flex items-center gap-2
            px-4 py-3 text-md font-medium leading-[normal]
            text-gray-900 dark:text-white bg-black/10 border border-white/10 rounded-full
            opacity-50 cursor-wait'
        >
            <span className='w-4 h-4 bg-gray-400/50 rounded-full animate-pulse' />
            <span>Loading PDF...</span>
        </button>
    ),
})

export default function HeroProfile() {
    const t = useTranslations("Hero")

    return (
        <div
            className='w-full md:w-5/12 h-[30vh] md:h-[calc(100vh-56px)] 2xl:h-[calc(100vh-72px)]
                    mt-[180px] md:mt-0 flex items-center relative bg-[var(--color-hero-overlay)]'
        >
            {/* Wrapper for positioning to avoid Framer Motion conflict and hydration mismatch */}
            <div
                className='absolute w-[280px] md:w-[350px] h-auto
                    top-[-160px] md:top-1/2
                    left-1/2 md:left-auto md:right-[-60px]
                    -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2'
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className='w-full bg-[var(--color-hero-card)] shadow-[-10px_10px_15px_rgba(0,0,0,0.1)] flex flex-col'
                >
                    {/* Main Content */}
                    <div className='flex flex-col items-center justify-center py-[30px] px-[20px]'>
                        {/* Profile Picture */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className='mb-6'
                        >
                            <div className='relative w-[100px] h-[100px] md:w-[190px] md:h-[190px] rounded-full overflow-hidden'>
                                <Image
                                    src='/images/photo2.webp'
                                    alt='Oleksander Novak'
                                    fill
                                    className='object-cover'
                                />
                            </div>
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
                            className='w-[50px] h-[2px] bg-[var(--color-accent)] m-[16px] md:m-[25px]'
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

                        {/* CV Download Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className='mt-6'
                        >
                            <DownloadCVButton />
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
        </div>
    )
}
