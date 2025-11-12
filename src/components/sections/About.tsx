"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function About() {
    const t = useTranslations("About")

    const achievements = [
        {
            id: "projects",
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                    <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
                    <line x1='12' y1='22.08' x2='12' y2='12'></line>
                </svg>
            ),
            label: t("achievements.projects.label"),
            value: t("achievements.projects.value"),
        },
        {
            id: "experience",
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
            ),
            label: t("achievements.experience.label"),
            value: t("achievements.experience.value"),
        },
        {
            id: "technologies",
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
                    <polyline points='2 17 12 22 22 17'></polyline>
                    <polyline points='2 12 12 17 22 12'></polyline>
                </svg>
            ),
            label: t("achievements.technologies.label"),
            value: t("achievements.technologies.value"),
        },
        {
            id: "clients",
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                    <circle cx='9' cy='7' r='4'></circle>
                    <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                    <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
            ),
            label: t("achievements.clients.label"),
            value: t("achievements.clients.value"),
        },
    ]

    return (
        <section id='about' data-label={t("label")}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-3xl font-bold mb-8 text-center'
            >
                {t("title")}
            </motion.h2>
            <div className='space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12'>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t("paragraph1")}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {t("paragraph2")}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    {t("paragraph3")}
                </motion.p>
            </div>

            {/* Achievements Block */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className='mt-12'
            >
                <h3 className='text-2xl font-bold mb-8 text-center'>{t("achievements.title")}</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className='p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/60 to-black/40 shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent)]/20 transition-all duration-300 text-center group'
                        >
                            <div className='flex justify-center mb-4'>
                                <div className='p-3 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)]/40 transition-colors'>
                                    <div className='text-[var(--color-accent)]'>
                                        {achievement.icon}
                                    </div>
                                </div>
                            </div>
                            <div className='text-3xl font-bold text-white mb-2'>
                                {achievement.value}
                            </div>
                            <div className='text-sm text-white/70'>{achievement.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
