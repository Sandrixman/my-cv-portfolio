"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "Creative Studio",
        description: "Вебсайт креативної агенції з анімаціями та smooth scroll.",
        image: "/projects/studio.webp",
        link: "https://example.com/studio",
    },
    {
        id: 2,
        title: "Portfolio v2",
        description: "Мій редизайн портфоліо з темами та локалізацією.",
        image: "/projects/portfolio.webp",
        link: "https://example.com/portfolio",
    },
    {
        id: 3,
        title: "E-Commerce UI",
        description: "Макет магазину з темною темою та адаптивним дизайном.",
        image: "/projects/shop.webp",
        link: "https://example.com/shop",
    },
]

export default function ProjectsSection() {
    const t = useTranslations("Projects")

    return (
        <section id='projects' data-label={t("label")} className='relative z-10 py-20 md:py-28'>
            <div className='container mx-auto px-6'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-4xl font-semibold mb-12 text-center'
                >
                    Мої проєкти
                </motion.h2>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.id}
                            href={p.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] transition-transform hover:-translate-y-1 hover:shadow-lg'
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            viewport={{ once: true }}
                        >
                            <div className='relative w-full h-52 overflow-hidden'>
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>

                            <div className='p-5'>
                                <h3 className='text-lg font-semibold mb-1'>{p.title}</h3>
                                <p className='text-[var(--color-text-muted)] text-sm leading-relaxed'>
                                    {p.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
