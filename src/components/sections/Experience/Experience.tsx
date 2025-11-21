"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { experiences } from "./experienceData"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
    const t = useTranslations("Experience")

    return (
        <section id='experience' data-label={t("label")}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-3xl font-bold mb-12 text-center'
            >
                {t("title")}
            </motion.h2>

            <div className='relative'>
                {/* Timeline line */}
                <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent hidden md:block'></div>

                <div className='space-y-12'>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className='relative'
                        >
                            <div className='flex flex-col md:flex-row md:items-center gap-6'>
                                {/* Timeline dot and content for mobile */}
                                <div className='flex items-start gap-4 md:hidden'>
                                    <div className='relative flex-shrink-0 mt-1'>
                                        <div
                                            className={`w-4 h-4 rounded-full border-2 ${
                                                exp.type === "work"
                                                    ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                                                    : "bg-[var(--color-success)] border-[var(--color-success)]"
                                            }`}
                                        ></div>
                                    </div>
                                    <div className='flex-1'>
                                        <ExperienceCard exp={exp} />
                                    </div>
                                </div>

                                {/* Desktop layout */}
                                <div className='hidden md:flex md:items-center md:justify-between md:w-full'>
                                    {/* Left side (even index) */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className='flex-1 pr-8 text-right'>
                                                <ExperienceCard exp={exp} />
                                            </div>
                                            {/* Timeline dot */}
                                            <div className='relative flex-shrink-0 z-10'>
                                                <div
                                                    className={`w-4 h-4 rounded-full border-2 border-white/20 ${
                                                        exp.type === "work"
                                                            ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                                                            : "bg-[var(--color-success)] border-[var(--color-success)]"
                                                    } shadow-lg`}
                                                ></div>
                                            </div>
                                            <div className='flex-1 pl-8'></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='flex-1 pr-8'></div>
                                            {/* Timeline dot */}
                                            <div className='relative flex-shrink-0 z-10'>
                                                <div
                                                    className={`w-4 h-4 rounded-full border-2 border-white/20 ${
                                                        exp.type === "work"
                                                            ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
                                                            : "bg-[var(--color-success)] border-[var(--color-success)]"
                                                    } shadow-lg`}
                                                ></div>
                                            </div>
                                            <div className='flex-1 pl-8'>
                                                <ExperienceCard exp={exp} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
