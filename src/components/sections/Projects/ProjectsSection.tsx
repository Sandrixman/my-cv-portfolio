"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import ProjectsFilter from "./ProjectsFilter"
import ProjectsGrid from "./ProjectsGrid"

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
                layoutMode: "masonry",
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

    return (
        <section id='projects' data-label={t("label")} className='py-20 justify-start'>
            <div className='container mx-auto'>
                <h2 className='text-3xl md:text-4xl font-semibold mb-10 text-center'>
                    {t("title")}
                </h2>

                <ProjectsFilter filterKey={filterKey} setFilterKey={setFilterKey} />

                <ProjectsGrid gridRef={gridRef} />
            </div>
        </section>
    )
}
