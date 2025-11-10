import Image from "next/image"
import { notFound } from "next/navigation"
import { projectsData } from "@/components/sections/Projects/projectsData"

type ProjectPageProps = {
    params: { slug: string }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projectsData.find((p) => p.slug === params.slug)
    if (!project) return notFound()

    return (
        <section className='py-20 container mx-auto px-6 max-w-4xl'>
            <div className='mb-10'>
                <h1 className='text-3xl md:text-4xl font-semibold mb-3'>{project.title}</h1>
                <p className='text-[var(--color-text-muted)]'>{project.description}</p>
            </div>

            <div className='relative w-full h-[400px] rounded-2xl overflow-hidden mb-10'>
                <Image src={project.image} alt={project.title} fill className='object-cover' />
            </div>

            <article className='prose dark:prose-invert max-w-none'>
                <p>
                    {project.details ||
                        "Це демо-текст. Тут можна вивести повний опис, стек технологій, посилання на сайт або репозиторій."}
                </p>

                {project.url && (
                    <a
                        href={project.url}
                        target='_blank'
                        className='inline-block mt-6 text-[var(--color-accent)] font-semibold hover:text-[var(--color-accent-hover)] transition-colors'
                    >
                        🔗 Перейти на сайт
                    </a>
                )}
            </article>
        </section>
    )
}
