"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

import { achievements } from "./aboutData"

export default function About() {
    const t = useTranslations("About")

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
            <div className='w-5/6 space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12'>
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
                                {t(achievement.valueKey)}
                            </div>
                            <div className='text-sm text-white/70'>{t(achievement.labelKey)}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
