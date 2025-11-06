"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { scrollToSection } from "@/utils/scrollToSection"

export default function VerticalNav() {
    const [sections, setSections] = useState<{ id: string; label: string; center: number }[]>([])
    const [activeId, setActiveId] = useState<string>("")
    const [progress, setProgress] = useState(0)
    const ticking = useRef(false)

    // Assemble the sections (center of each)
    useEffect(() => {
        const els = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[]
        const found = els.map((el) => ({
            id: el.id,
            label: el.getAttribute("data-label") || el.id,
            center: el.offsetTop + el.offsetHeight / 2,
        }))
        setSections(found)
    }, [])

    const updateProgress = () => {
        if (!sections.length) return
        const scrollY = window.scrollY + window.innerHeight / 2

        // find the nearest sections
        let activeIndex = 0
        for (let i = 0; i < sections.length - 1; i++) {
            if (scrollY >= sections[i].center && scrollY < sections[i + 1].center) {
                activeIndex = i
                break
            } else if (scrollY >= sections[sections.length - 1].center) {
                activeIndex = sections.length - 1
            }
        }

        const current = sections[activeIndex]
        const next = sections[activeIndex + 1]

        let sectionProgress = 1
        if (next) {
            const totalDist = next.center - current.center
            sectionProgress = Math.min(Math.max((scrollY - current.center) / totalDist, 0), 1)
        }

        // exact fill between the centers of the dots
        const totalProgress = (activeIndex + sectionProgress) / (sections.length - 1)

        setProgress(totalProgress)
        setActiveId(sections[activeIndex].id)
        ticking.current = false
    }

    useEffect(() => {
        if (!sections.length) return

        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(updateProgress)
                ticking.current = true
            }
        }

        window.addEventListener("scroll", onScroll)
        updateProgress()
        return () => window.removeEventListener("scroll", onScroll)
    }, [sections])

    return (
        <nav className='fixed left-5 top-1/2 -translate-y-1/2 z-[15] hidden md:block'>
            <div className='relative flex flex-col items-start gap-16 pl-[8px] group'>
                <div className='absolute left-[13px] top-[5px] bottom-[5px] w-[2px] bg-[var(--color-progressbar)] rounded-full overflow-hidden'>
                    {/* color progress */}
                    <motion.div
                        className='absolute left-0 top-0 w-full bg-[var(--color-accent)]'
                        style={{ height: `${progress * 100}%` }}
                        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                    />
                </div>

                {sections.map((s) => {
                    const isActive = s.id === activeId
                    return (
                        <button
                            key={s.id}
                            onClick={() => {
                                scrollToSection(s.id, 0)
                                setTimeout(updateProgress, 250)
                            }}
                            className='relative flex items-center gap-3 group/item'
                        >
                            <motion.span
                                className='relative w-[12px] h-[12px] rounded-full flex-shrink-0 z-[5]'
                                style={{
                                    backgroundColor: isActive
                                        ? "var(--color-accent)"
                                        : "var(--color-progressbar)",
                                }}
                                animate={
                                    isActive
                                        ? {
                                              scale: [1, 1.2, 1],
                                              boxShadow: [
                                                  "0 0 0px var(--color-accent)",
                                                  "0 0 6px var(--color-accent)",
                                                  "0 0 0px var(--color-accent)",
                                              ],
                                          }
                                        : { scale: 1, boxShadow: "0 0 0 transparent" }
                                }
                                transition={{
                                    duration: 1.4,
                                    ease: "easeInOut",
                                    repeat: isActive ? Infinity : 0,
                                }}
                            />

                            <span
                                className={`text-sm font-medium transition-all duration-300 transform opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                                    isActive
                                        ? "text-[var(--color-accent)]"
                                        : "text-[var(--color-text-muted)]"
                                }`}
                            >
                                {s.label}
                            </span>
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
