"use client"
import { LegacyRef } from "react"
import Image from "next/image"
import { projectsData } from "./projectsData"
import TransitionLink from "@/components/PageTransition/TransitionLink"

type ProjectsGridProps = {
    gridRef: LegacyRef<HTMLDivElement> | undefined
}
const ProjectsGrid = ({ gridRef }: ProjectsGridProps) => {
    return (
        <div
            ref={gridRef}
            className='mx-auto w-[340px] sm:w-[624px] md:w-[740px] lg:w-[960px] xl:w-[1170px] 2xl:w-[1460px]'
        >
            {projectsData.map((p) => (
                <div
                    key={p.id}
                    className={`item ${p.category}
                        w-[330px] sm:w-[300px] md:w-[350px] lg:w-[290px] xl:w-[350px] 2xl:w-[325px]
                        m-[6px] md:m-[10px] lg:m-[15px] xl:m-[20px]
                        group
                    `}
                >
                    <TransitionLink
                        href={`/projects/${p.slug}`}
                        className='block overflow-hidden rounded-2xl border bg-[var(--color-card)]
                        no-underline outline-none text-inherit shadow-[6px_6px_20px_var(--color-accent-shadow)]
                        transition-all duration-300 ease-out
                        group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_10px_25px_-5px_var(--color-accent)]'
                    >
                        <div className='w-full h-[220px] relative'>
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                sizes='(max-width:380px) 100vw, 320px'
                                className='object-cover'
                            />
                        </div>
                        <div className='p-5'>
                            <h3 className='text-lg font-semibold mb-1'>{p.title}</h3>
                            <p className='text-sm text-[var(--color-text-muted)]'>
                                {p.description}
                            </p>
                        </div>
                    </TransitionLink>
                </div>
            ))}
        </div>
    )
}

export default ProjectsGrid
