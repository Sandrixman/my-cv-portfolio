"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function Experience() {
    const t = useTranslations("Experience")

    const experiences = [
        {
            id: "exp1",
            type: "work",
            title: t("work1.title"),
            company: t("work1.company"),
            period: t("work1.period"),
            description: t("work1.description"),
        },
        {
            id: "exp2",
            type: "work",
            title: t("work2.title"),
            company: t("work2.company"),
            period: t("work2.period"),
            description: t("work2.description"),
        },
        {
            id: "edu1",
            type: "education",
            title: t("education1.title"),
            company: t("education1.institution"),
            period: t("education1.period"),
            description: t("education1.description"),
        },
    ]

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
                                        <div className='p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/60 to-black/40 shadow-lg'>
                                            <div className='flex items-start justify-between mb-3'>
                                                <div className='flex-1'>
                                                    <h3 className='text-xl font-bold text-white mb-1'>{exp.title}</h3>
                                                    <p className='text-sm font-medium text-[var(--color-accent)] mb-2'>
                                                        {exp.company}
                                                    </p>
                                                    <p className='text-xs text-white/60 mb-3'>{exp.period}</p>
                                                </div>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        exp.type === "work"
                                                            ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                                                            : "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                                                    }`}
                                                >
                                                    {exp.type === "work" ? t("work") : t("education")}
                                                </span>
                                            </div>
                                            <p className='text-sm text-white/80 leading-relaxed'>{exp.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop layout */}
                                <div className='hidden md:flex md:items-center md:justify-between md:w-full'>
                                    {/* Left side (even index) */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className='flex-1 pr-8 text-right'>
                                                <div className='p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/60 to-black/40 shadow-lg hover:shadow-xl transition-all duration-300'>
                                                    <div className='flex items-start justify-between mb-3'>
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                                exp.type === "work"
                                                                    ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                                                                    : "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                                                            }`}
                                                        >
                                                            {exp.type === "work" ? t("work") : t("education")}
                                                        </span>
                                                    </div>
                                                    <h3 className='text-xl font-bold text-white mb-1'>{exp.title}</h3>
                                                    <p className='text-sm font-medium text-[var(--color-accent)] mb-2'>
                                                        {exp.company}
                                                    </p>
                                                    <p className='text-xs text-white/60 mb-3'>{exp.period}</p>
                                                    <p className='text-sm text-white/80 leading-relaxed'>
                                                        {exp.description}
                                                    </p>
                                                </div>
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
                                                <div className='p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/60 to-black/40 shadow-lg hover:shadow-xl transition-all duration-300'>
                                                    <div className='flex items-start justify-between mb-3'>
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                                exp.type === "work"
                                                                    ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                                                                    : "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                                                            }`}
                                                        >
                                                            {exp.type === "work" ? t("work") : t("education")}
                                                        </span>
                                                    </div>
                                                    <h3 className='text-xl font-bold text-white mb-1'>{exp.title}</h3>
                                                    <p className='text-sm font-medium text-[var(--color-accent)] mb-2'>
                                                        {exp.company}
                                                    </p>
                                                    <p className='text-xs text-white/60 mb-3'>{exp.period}</p>
                                                    <p className='text-sm text-white/80 leading-relaxed'>
                                                        {exp.description}
                                                    </p>
                                                </div>
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
