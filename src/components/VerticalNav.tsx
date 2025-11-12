"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { scrollToSection } from "@/utils/scrollToSection"

export default function VerticalNav() {
    const [sections, setSections] = useState<{ id: string; label: string; top: number }[]>([])
    const [activeId, setActiveId] = useState<string>("")
    const [progress, setProgress] = useState(0)
    const ticking = useRef(false)

    // Assemble the sections (center and top of each)
    // Update positions when window resizes or content changes
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
        // Sort by top position to ensure correct order
        found.sort((a, b) => a.top - b.top)
        setSections(found)
    }

    useEffect(() => {
        // Initial update
        updateSections()

        // Update sections on window resize
        const handleResize = () => {
            updateSections()
        }

        // Update sections on scroll to catch dynamic content changes
        // Use throttling to avoid too frequent updates
        let scrollTimeout: NodeJS.Timeout
        const handleScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                updateSections()
            }, 100) // Update 100ms after scroll stops
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll, { passive: true })
        if (window.lenis) {
            window.lenis.on("scroll", handleScroll)
        }

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
            if (window.lenis) {
                window.lenis.off("scroll", handleScroll)
            }
            clearTimeout(scrollTimeout)
        }
    }, [])

    const updateProgress = () => {
        if (!sections.length) return

        const scrollY = window.scrollY

        // Find which segment we're in (between two sections)
        // We need to determine: are we between section[i] and section[i+1]?
        let segmentStartIndex = -1
        let segmentEndIndex = -1

        // Check if we're before the first section
        if (scrollY < sections[0].top) {
            segmentStartIndex = -1
            segmentEndIndex = 0
        } else {
            // Check if we're at or past the last section first
            // When scrollY >= last section.top, we're in the last segment
            if (scrollY >= sections[sections.length - 1].top) {
                segmentStartIndex = sections.length - 2
                segmentEndIndex = sections.length - 1
            } else {
                // Find which segment we're in based on scrollY position
                for (let i = 0; i < sections.length - 1; i++) {
                    if (scrollY >= sections[i].top && scrollY < sections[i + 1].top) {
                        segmentStartIndex = i
                        segmentEndIndex = i + 1
                        break
                    }
                }
            }
        }

        // Calculate progress within the current segment
        let sectionProgress = 0
        let activeIndex = 0

        if (segmentStartIndex === -1) {
            // Before first section
            activeIndex = 0
            sectionProgress = 0
        } else if (segmentEndIndex >= sections.length) {
            // Past last section
            activeIndex = sections.length - 1
            sectionProgress = 1
        } else {
            const startSection = sections[segmentStartIndex]
            const endSection = sections[segmentEndIndex]
            const segmentStart = startSection.top // Center of start dot
            const segmentEnd = endSection.top // Center of end dot
            const segmentLength = segmentEnd - segmentStart

            // Calculate progress: 0 at start, 1 at end
            // When scrollY = segmentStart (section[i].top), progress = 0 (line at center of start dot)
            // When scrollY = segmentEnd (section[i+1].top), progress = 1 (line at center of end dot)
            // This is independent of section size - only based on section.top positions

            // First check: if we've reached or passed the end section's top, progress is exactly 1
            // This ensures the line is at the center of the end dot when scrollY >= section.top
            if (scrollY >= segmentEnd) {
                sectionProgress = 1
                activeIndex = segmentEndIndex
            } else if (scrollY <= segmentStart) {
                // If we're at or before the start section's top, progress is exactly 0
                sectionProgress = 0
                activeIndex = segmentStartIndex
            } else {
                // Calculate progress between start and end
                if (segmentLength > 0) {
                    sectionProgress = (scrollY - segmentStart) / segmentLength
                    // Clamp to ensure it's between 0 and 1
                    sectionProgress = Math.min(Math.max(sectionProgress, 0), 1)
                } else {
                    sectionProgress = 0
                }
                // While filling, the start dot is active
                activeIndex = segmentStartIndex
            }
        }

        // Calculate line fill progress
        // Line fills from center of dot to center of dot
        // Each dot center corresponds to section.top position

        const dotSize = 12 // dot height
        const gapSize = 64 // gap-16 = 4rem = 64px
        const lineStartOffset = 5 // top-[5px]
        const firstDotCenter = lineStartOffset + dotSize / 2 // 5px + 6px = 11px

        // Calculate total line height from first dot center to last dot center
        const lastDotCenter = firstDotCenter + (sections.length - 1) * gapSize
        const totalContainerHeight = lastDotCenter - lineStartOffset + dotSize / 2

        if (sections.length === 1) {
            // Only one section - fill completely when reached
            setProgress(scrollY >= sections[0].top ? 1 : 0)
        } else {
            // Calculate current position on the line
            // - All segments before segmentStartIndex are fully filled (each segment is gapSize)
            // - Current segment (from segmentStartIndex to segmentEndIndex) fills based on sectionProgress
            const filledSegmentsHeight = segmentStartIndex >= 0 ? segmentStartIndex * gapSize : 0
            const currentSegmentProgress = sectionProgress * gapSize
            const currentPosition = firstDotCenter + filledSegmentsHeight + currentSegmentProgress
            // Progress: fill from lineStartOffset to currentPosition, as percentage of totalContainerHeight
            const fillFromLineStart = currentPosition - lineStartOffset
            const totalProgress =
                totalContainerHeight > 0
                    ? Math.min(Math.max(fillFromLineStart / totalContainerHeight, 0), 1)
                    : 0

            // When we reach the last section's top, ensure progress reaches the last dot center
            // When segmentEndIndex is the last section and sectionProgress = 1,
            // the line should be exactly at the center of the last dot
            if (segmentEndIndex === sections.length - 1 && sectionProgress >= 1) {
                // Calculate position of last dot center
                const lastDotCenterPosition = firstDotCenter + (sections.length - 1) * gapSize
                const lastDotFillFromLineStart = lastDotCenterPosition - lineStartOffset
                const lastDotProgress =
                    totalContainerHeight > 0
                        ? Math.min(Math.max(lastDotFillFromLineStart / totalContainerHeight, 0), 1)
                        : 0
                setProgress(lastDotProgress)
            } else {
                setProgress(totalProgress)
            }
        }

        const newActiveId = sections[activeIndex].id
        setActiveId(newActiveId)

        ticking.current = false
    }

    useEffect(() => {
        if (!sections.length) return

        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    updateProgress()
                    ticking.current = false
                })
                ticking.current = true
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        // Also listen to Lenis scroll events if available
        if (window.lenis) {
            window.lenis.on("scroll", onScroll)
        }
        updateProgress()
        return () => {
            window.removeEventListener("scroll", onScroll)
            if (window.lenis) {
                window.lenis.off("scroll", onScroll)
            }
        }
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

                {sections.map((s, index) => {
                    const isActive = s.id === activeId
                    return (
                        <button
                            key={s.id}
                            onClick={() => {
                                // Just scroll to section - progress will update automatically via scroll tracking
                                scrollToSection(s.id, 0)
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
