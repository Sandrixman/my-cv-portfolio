"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef, useMemo } from "react"
import { scrollToSection } from "@/utils/scrollToSection"

export default function VerticalNav() {
    const [sections, setSections] = useState<{ id: string; label: string; top: number }[]>([])
    const [activeId, setActiveId] = useState<string>("")

    // Use Framer Motion's useScroll for performance
    const { scrollY } = useScroll()

    // Measure section positions
    const updateSections = () => {
        const els = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[]
        const found = els.map((el) => {
            // Use getBoundingClientRect() for accurate position relative to viewport
            // Then add scrollY to get absolute position in document
            const rect = el.getBoundingClientRect()
            const top = rect.top + window.scrollY - 50
            return {
                id: el.id,
                label: el.getAttribute("data-label") || el.id,
                top: top,
            }
        })
        // Sort by top position
        found.sort((a, b) => a.top - b.top)
        setSections(found)
    }

    useEffect(() => {
        updateSections()

        // Update on resize
        window.addEventListener("resize", updateSections)

        // Optional: Update on initial scroll to catch layout shifts if needed,
        // but IntersectionObserver handles active state robustly.
        // We might need a small delay or ResizeObserver for dynamic content.
        const timeout = setTimeout(updateSections, 500)

        return () => {
            window.removeEventListener("resize", updateSections)
            clearTimeout(timeout)
        }
    }, [])

    // Intersection Observer for Active ID
    useEffect(() => {
        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top-center
            threshold: 0,
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        sections.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [sections])

    // Calculate progress line
    // Map scrollY (input) to percentage 0-1 (output) based on section positions
    const inputRange = useMemo(() => sections.map(s => s.top), [sections])

    // Output range: 0 to 1, distributed by section index
    // If we have N sections, we have N-1 segments.
    // The line should fill from dot 0 to dot N-1.
    // So at section 0, progress is 0. At section N-1, progress is 1.
    const outputRange = useMemo(() => {
        if (sections.length <= 1) return [0]
        return sections.map((_, i) => i / (sections.length - 1))
    }, [sections])

    // Ensure ranges are valid and have same length before calling useTransform
    // If empty or mismatch, fallback to a constant 0
    const isValid = sections.length > 1 && inputRange.length === outputRange.length

    const rawProgress = useTransform(
        scrollY,
        isValid ? inputRange : [0, 1],
        isValid ? outputRange : [0, 0]
    )
    const progress = useSpring(rawProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
    const heightStyle = useTransform(progress, (p) => `${p * 100}%`)

    return (
        <nav className='fixed left-5 top-1/2 -translate-y-1/2 z-[15] hidden md:block'>
            <div className='relative flex flex-col items-start gap-16 pl-[8px] group'>
                <div className='absolute left-[13px] top-[5px] bottom-[5px] w-[2px] bg-[var(--color-progressbar)] rounded-full overflow-hidden'>
                    {/* color progress */}
                    <motion.div
                        className='absolute left-0 top-0 w-full bg-[var(--color-accent)]'
                        style={{ height: sections.length > 1 ? heightStyle : "0%" }}
                    />
                </div>

                {sections.map((s) => {
                    const isActive = s.id === activeId
                    return (
                        <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id, 0)}
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
