"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

type Project = {
    id: number
    title: string
    category: string
    image: string
    description: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Creative Studio",
        category: "web",
        image: "/images/demo1.jpg",
        description: "Вебсайт агенції",
    },
    {
        id: 2,
        title: "Portfolio v2",
        category: "portfolio",
        image: "/images/demo2.jpg",
        description: "Редизайн портфоліо",
    },
    {
        id: 3,
        title: "E-Commerce UI",
        category: "shop",
        image: "/images/demo3.jpg",
        description: "Інтернет-магазин",
    },
    {
        id: 4,
        title: "Landing Page",
        category: "web",
        image: "/images/demo4.jpg",
        description: "Лендінг з анімацією",
    },
    {
        id: 5,
        title: "UI Kit",
        category: "design",
        image: "/images/demo5.jpg",
        description: "Компонентна бібліотека",
    },
]

export default function ProjectsSection() {
    const [filterKey, setFilterKey] = useState("*")
    const gridRef = useRef<HTMLDivElement | null>(null)
    const iso = useRef<any>(null)

    const t = useTranslations("Projects")

    useEffect(() => {
        let isoInstance: any
        let cleanup = false

        // Import libraries only in the browser
        ;(async () => {
            const Isotope = (await import("isotope-layout")).default
            const imagesLoaded = (await import("imagesloaded")).default

            if (!gridRef.current) return

            // Initial Isotope
            isoInstance = new Isotope(gridRef.current, {
                itemSelector: ".item",
                layoutMode: "fitRows",
                transitionDuration: "0.5s",
                hiddenStyle: { opacity: 0, transform: "scale(0.1)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            })

            // We wait for the images to load, then update the layout
            imagesLoaded(gridRef.current, () => {
                if (!cleanup) isoInstance.layout()
            })

            iso.current = isoInstance
        })()

        return () => {
            cleanup = true
            isoInstance?.destroy()
        }
    }, [])

    // filter
    useEffect(() => {
        if (!iso.current) return
        filterKey === "*"
            ? iso.current.arrange({ filter: "*" })
            : iso.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const categories = ["all", "web", "portfolio", "shop", "design"]

    return (
        <section id='projects' data-label={t("label")} className='py-20 justify-start'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl md:text-4xl font-semibold mb-10 text-center'>
                    {t("title")}
                </h2>

                {/* FILTER BUTTONS */}
                <div className='flex justify-center gap-3 mb-12 flex-wrap'>
                    {categories.map((c) => {
                        const key = c === "all" ? "*" : c
                        const active = filterKey === key
                        return (
                            <button
                                key={c}
                                onClick={() => setFilterKey(key)}
                                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
                                    active
                                        ? "bg-[var(--color-accent)] text-white"
                                        : "bg-[var(--color-bg-alt)] hover:bg-[var(--color-bg)]"
                                }`}
                            >
                                {c.toUpperCase()}
                            </button>
                        )
                    })}
                </div>

                {/* GRID */}
                <div
                    ref={gridRef}
                    className='flex flex-wrap justify-center gap-5 mx-auto max-w-[1200px]'
                >
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className={`item ${p.category} flex-1 min-w-[260px] max-w-[320px] basis-[300px] m-6 relative rounded-2xl overflow-hidden border bg-[var(--color-bg-alt)] shadow-sm`}
                        >
                            <div className='relative w-full h-[220px]'>
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    sizes='(max-width:640px) 100vw, (max-width:1024px) 45vw, (max-width:1440px) 30vw, 320px'
                                    className='object-cover'
                                />
                            </div>
                            <div className='p-5'>
                                <h3 className='text-lg font-semibold mb-1'>{p.title}</h3>
                                <p className='text-sm text-[var(--color-text-muted)]'>
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
