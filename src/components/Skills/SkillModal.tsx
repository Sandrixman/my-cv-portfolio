"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { skillData } from "./skillData"
import { useSkills } from "./SkillsContext"
import { useEffect, useState } from "react"

export default function SkillModal() {
    const { selected, setSelected, currentTab } = useSkills()
    const [isExiting, setIsExiting] = useState(false)

    // 🔧 isExiting needed so that the modal closes after the animation and does not close after the appearance animation
    useEffect(() => {
        if (selected) setIsExiting(false)
    }, [selected])

    if (!selected || !selected.rect) return null

    const list = skillData[currentTab].skills
    const rect = selected.rect
    const fromX = rect.left + rect.width / 2 - window.innerWidth / 2
    const fromY = rect.top + rect.height / 2 - window.innerHeight / 2

    const closeModal = () => setIsExiting(true)

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50'
                    initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                    animate={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                    exit={{ backgroundColor: "rgba(0,0,0,0)" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    onClick={closeModal}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        key={selected.name}
                        initial={{
                            x: fromX,
                            y: fromY,
                            scale: 0.2,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            x: fromX,
                            y: fromY,
                            scale: 0.2,
                            opacity: 0,
                            rotateZ: -8,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 230,
                            damping: 22,
                        }}
                        onAnimationComplete={() => {
                            if (isExiting) {
                                setSelected(null)
                                setIsExiting(false)
                            }
                        }}
                        className='bg-white text-black rounded-2xl shadow-2xl p-8 max-w-sm text-center relative origin-center'
                    >
                        <button
                            onClick={closeModal}
                            className='absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold transition-transform hover:scale-110'
                        >
                            ×
                        </button>
                        <Image
                            src={selected.img}
                            alt={selected.name}
                            width={100}
                            height={100}
                            className='mx-auto mb-4'
                        />
                        <h3 className='text-xl font-semibold mb-2'>{selected.name}</h3>
                        <p className='text-sm text-gray-700 mb-4'>
                            {selected.description || "Немає опису."}
                        </p>
                        <div className='flex justify-between mt-6'>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()

                                    if (selected?.index === undefined) return

                                    const newIndex =
                                        (selected.index - 1 + list.length) % list.length
                                    const el =
                                        document.querySelectorAll("[data-label='skill']")[newIndex]

                                    const newRect = el.getBoundingClientRect()

                                    setSelected({
                                        ...list[newIndex],
                                        index: newIndex,
                                        rect: newRect,
                                    })
                                }}
                                className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300'
                            >
                                {" "}
                                ← Prev{" "}
                            </button>{" "}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()

                                    if (selected?.index === undefined) return

                                    const newIndex = (selected.index + 1) % list.length
                                    const el =
                                        document.querySelectorAll("[data-label='skill']")[newIndex]
                                    const newRect = el.getBoundingClientRect()

                                    setSelected({
                                        ...list[newIndex],
                                        index: newIndex,
                                        rect: newRect,
                                    })
                                }}
                                className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300'
                            >
                                {" "}
                                Next →{" "}
                            </button>{" "}
                        </div>{" "}
                    </motion.div>{" "}
                </motion.div>
            )}{" "}
        </AnimatePresence>
    )
}
