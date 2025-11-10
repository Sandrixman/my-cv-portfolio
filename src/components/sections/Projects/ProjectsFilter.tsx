"use client"
import { Dispatch, SetStateAction } from "react"

type FilterButtonsProps = {
    filterKey: string
    setFilterKey: Dispatch<SetStateAction<string>>
}

const ProjectsFilter = ({ filterKey, setFilterKey }: FilterButtonsProps) => {
    const categories = ["all", "layout", "React-Next", "Bubble"]

    return (
        <div className='flex justify-center gap-3 mb-12 flex-wrap'>
            {categories.map((c) => {
                const key = c === "all" ? "*" : c
                const active = filterKey === key
                return (
                    <button
                        key={c}
                        onClick={() => setFilterKey(key)}
                        className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border
                            ${
                                active
                                    ? "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-[var(--color-text)] shadow-[0_4px_20px_-1px_var(--color-accent)] scale-[1.05]"
                                    : "bg-[var(--color-bg)]/60 border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg)]/80 hover:text-[var(--color-accent)] hover:shadow-[0_2px_10px_-2px_var(--color-accent)]"
                            }
                        `}
                    >
                        {c.toUpperCase()}
                    </button>
                )
            })}
        </div>
    )
}

export default ProjectsFilter
