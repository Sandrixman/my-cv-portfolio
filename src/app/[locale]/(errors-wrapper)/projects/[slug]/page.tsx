"use client"
import Image from "next/image"
import { notFound } from "next/navigation"
import { projectsData } from "@/components/sections/Projects/projectsData"
import { useRouter } from "next/navigation"
import { usePageTransition } from "@/contexts/PageTransitionContext"

type ProjectPageProps = {
    params: { slug: string }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const { startTransition } = usePageTransition()
    const project = projectsData.find((p) => p.slug === params.slug)
    const router = useRouter()

    if (!project) return notFound()

    return (
        <section className='py-24 container mx-auto px-6 max-w-3xl'>
            {/* Back Button */}
            <button
                className='mb-8 inline-flex items-center gap-2 text-[var(--color-accent)] hover:opacity-70 transition'
                onClick={() => {
                    const scrollY = (window as any).lenis?.scroll ?? window.scrollY
                    sessionStorage.setItem(`restore-scroll`, String(scrollY))

                    startTransition("BACK")
                    router.back()
                }}
            >
                ← Назад
            </button>
            {/* Title & Description */}
            <h1 className='text-4xl font-semibold mb-4'>{project.title}</h1>
            <p className='text-lg text-[var(--color-text-muted)] mb-10'>{project.description}</p>
            {/* Image Cover */}
            <div className='relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg'>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-700'
                />
            </div>
            {/* Content */}
            <article className='prose dark:prose-invert prose-lg mt-10 max-w-none'>
                <p>
                    {project.details ||
                        "Тут буде повний опис проекту, основні фічі, технічний стек та посилання 👇"}
                </p>

                {project.url && (
                    <a
                        href={project.url}
                        target='_blank'
                        className='inline-block mt-8 text-[var(--color-accent)] font-semibold hover:opacity-80 transition'
                    >
                        🔗 Live Website
                    </a>
                )}
            </article>
        </section>
    )
}
