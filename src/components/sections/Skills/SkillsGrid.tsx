"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { skillData } from "./skillData"
import { useSkills } from "./SkillsContext"
import { Skill } from "./types"

export default function SkillGrid() {
    const { currentTab, setSelected, direction, setIsAnimating, isAnimating } = useSkills()
    const [width, setWidth] = useState<number | null>(null)

    const accentColor = skillData[currentTab].color

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (width === null) return null

    const handleOpen = (skill: Skill, e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        setSelected({
            ...skill,
            index: skillData[currentTab].skills.indexOf(skill),
            rect,
        })
    }

    const itemVariants = {
        initial: (dir: string) => ({
            x: dir === "right" ? width * 0.4 : -width * 0.4,
            rotateZ: dir === "right" ? 5 : -5,
            opacity: 0,
            scale: 0.9,
        }),
        enter: {
            x: 0,
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
        exit: (dir: string) => ({
            x: dir === "right" ? -width * 2.5 : width * 2.5,
            y: -50,
            rotateZ: dir === "right" ? -10 : 10,
            opacity: 1,
            scale: 0.9,
            filter: "brightness(0.85)",
            transition: { duration: 0.5, ease: [0.55, 0.06, 0.68, 0.19] },
        }),
    }

    const parentVariants = {
        enter: (dir: string) => ({
            transition: {
                staggerChildren: 0.07,
                staggerDirection: dir === "right" ? 1 : -1,
            },
        }),
        exit: (dir: string) => ({
            transition: {
                staggerChildren: 0.07,
                staggerDirection: dir === "right" ? 1 : -1,
            },
        }),
    }

    return (
        <div
            className={`relative
                h-[200px] md:h-[235px] lg:h-[250px] w-[100vw]
                ${isAnimating ? "overflow-x-hidden" : "overflow-x-auto"} overflow-y-hidden`}
        >
            <AnimatePresence mode='wait' custom={direction}>
                <motion.ul
                    key={currentTab}
                    custom={direction}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={parentVariants}
                    onAnimationComplete={(definition) => {
                        if (definition === "enter") setIsAnimating(false)
                    }}
                    className='grid grid-rows-2 grid-flow-col gap-4
                        px-10 mx-auto
                        w-max
                        mt-6'
                >
                    {skillData[currentTab].skills.map((skill: Skill) => (
                        <motion.li
                            key={skill.name}
                            layoutId={skill.name}
                            custom={direction}
                            variants={itemVariants}
                            onClick={(e) => handleOpen(skill, e)}
                            data-label='skill'
                            className='flex flex-col items-center
                                    w-[75px] sm:w-[90px] lg:w-[120px]
                                    text-center cursor-pointer'
                        >
                            <motion.div
                                layoutId={`${skill.name}-img`}
                                whileHover={{
                                    scale: 1.05,
                                    y: -3,
                                    boxShadow: `0 0 15px ${accentColor}55, inset 0 0 12px ${accentColor}33`,
                                    borderColor: accentColor,
                                    transition: { type: "spring", stiffness: 250, damping: 18 },
                                }}
                                className='w-[60px] md:w-[80px] lg:w-[90px]
                                        h-[60px] md:h-[80px]
                                        flex items-center justify-center
                                        border border-[#ffffff33] rounded-xl
                                        bg-[var(--color-progressbar)] shadow-sm backdrop-blur-sm transition-all'
                            >
                                <Image
                                    src={skill.img}
                                    alt={skill.name}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='object-contain w-[40px] h-[40px] md:w-[60px] md:h-[60px]'
                                />
                            </motion.div>
                            <h4 className='mt-3 text-sm font-medium'>{skill.name}</h4>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </div>
    )
}
