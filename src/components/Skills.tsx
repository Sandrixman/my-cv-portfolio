"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const skills = ["React", "Next.js", "TypeScript", "Bubble", "GSAP", "Tailwind"]

export default function Skills() {
    const t = useTranslations("Skills")

    return (
        <section id='skills' data-label={t("label")} className='py-24 px-4 text-center'>
            <h2 className='text-3xl font-semibold mb-10'>Skills & Stack</h2>
            <div className='flex flex-wrap justify-center gap-6'>
                {skills.map((s) => (
                    <motion.div
                        key={s}
                        whileHover={{ scale: 1.1 }}
                        className='px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md'
                    >
                        {s}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
