"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import { useTranslations } from "next-intl"

const techStack = [
    "HTML5/CSS3",
    "JS",
    "React",
    "Next.js",
    "TypeScript",
    "GITHUB",
    "Bubble.io",
    "Node.js",
]

export default function Hero() {
    const t = useTranslations("Hero")

    return (
        <section
            id='hero'
            data-label={t("label")}
            className='relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden'
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='relative z-10 max-w-3xl'
            >
                <h1 className='text-5xl md:text-6xl font-extrabold mb-4 leading-tight gradient-text'>
                    {t("title")}
                </h1>

                <h2 className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6'>
                    {t("subtitle")}
                </h2>

                <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed'>
                    {t("description")}
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className='flex flex-wrap justify-center gap-2 mb-10'
                >
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className='px-3 pt-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.a
                    href='#projects'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg'
                >
                    <Code2 className='w-4 h-4' />
                    {t("cta")}
                </motion.a>
            </motion.div>
        </section>
    )
}
