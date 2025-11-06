"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const skillTabs = [
    {
        name: "Frontend",
        skills: [
            { name: "HTML5", img: "/icons/html5.svg" },
            { name: "CSS3", img: "/icons/css3.svg" },
            { name: "SCSS", img: "/icons/sass.svg" },
            { name: "Tailwind", img: "/icons/tailwind.svg" },
            { name: "JavaScript", img: "/icons/js.svg" },
            { name: "TypeScript", img: "/icons/ts.svg" },
            { name: "React", img: "/icons/react.svg" },
            { name: "Next.js", img: "/icons/nextjs.webp" },
            { name: "Gulp", img: "/icons/gulp.svg" },
            { name: "Bootstrap", img: "/icons/bootstrap.svg" },
            { name: "Webpack", img: "/icons/webpack.svg" },
            { name: "Redux Toolkit", img: "/icons/redux.svg" },
            { name: "Figma", img: "/icons/figma.svg" },
            { name: "GitHub", img: "/icons/github.svg" },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "Node.js", img: "/icons/nodejs.svg" },
            { name: "Express.js", img: "/icons/express.png" },
            { name: "MongoDB", img: "/icons/mongodb.svg" },
            { name: "REST APIs", img: "/icons/api.webp" },
            { name: "Postman", img: "/icons/postman.svg" },
        ],
    },
    {
        name: "No-code",
        skills: [{ name: "Bubble.io", img: "/icons/bubble.png" }],
    },
    {
        name: "Libraries",
        skills: [
            { name: "GSAP", img: "/icons/gsap.png" },
            { name: "Highway", img: "/icons/highway.png" },
        ],
    },
    {
        name: "Familiar",
        skills: [
            { name: "Docker", img: "/icons/docker.svg" },
            { name: "React Native", img: "/icons/react-native.svg" },
        ],
    },
]

export default function SkillsSection() {
    const [currentTab, setCurrentTab] = useState(0)
    const [direction, setDirection] = useState<"left" | "right">("right")
    const [isAnimating, setIsAnimating] = useState(false)
    const [width, setWidth] = useState<number | null>(null)
    const [selected, setSelected] = useState<any>(null)

    useEffect(() => {
        // Run only on client
        const handleResize = () => setWidth(window.innerWidth)
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleTabClick = (index: number) => {
        if (index === currentTab || isAnimating) return
        setIsAnimating(true)
        setDirection(index > currentTab ? "right" : "left")
        setCurrentTab(index)
    }

    // Do nothing (no animation) until we know real width
    if (width === null)
        return (
            <section id='skills' className='py-20 text-center'>
                <h2 className='text-3xl font-semibold mb-6'>My Skills</h2>
            </section>
        )

    const itemVariants = {
        initial: (dir: string) => ({
            x: dir === "right" ? width * 0.4 : -width * 0.4,
            y: 30,
            rotateZ: dir === "right" ? 5 : -5,
            opacity: 0,
            scale: 0.9,
        }),
        enter: {
            x: 0,
            y: 0,
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
        exit: (dir: string) => ({
            x: dir === "right" ? -width * 1.1 : width * 1.1,
            y: -50,
            rotateZ: dir === "right" ? -10 : 10,
            opacity: 1,
            scale: 0.9,
            filter: "brightness(0.85)",
            transition: { duration: 0.5, ease: [0.55, 0.06, 0.68, 0.19] },
        }),
    }

    return (
        <section id='skills' className='py-20 overflow-hidden'>
            <h2 className='text-3xl font-semibold mb-6 text-center'>My Skills</h2>

            <div className='relative min-h-[280px] flex justify-center items-center mb-6'>
                <AnimatePresence
                    mode='wait'
                    custom={direction}
                    onExitComplete={() => setIsAnimating(false)}
                >
                    <motion.ul
                        key={currentTab}
                        custom={direction}
                        initial='initial'
                        animate='enter'
                        exit='exit'
                        variants={{
                            enter: (dir: string) => ({
                                transition: {
                                    staggerChildren: 0.07,
                                    staggerDirection: dir === "right" ? 1 : -1,
                                },
                            }),
                            exit: (dir: string) => ({
                                transition: {
                                    staggerChildren: 0.07,
                                    staggerDirection: dir === "right" ? -1 : 1,
                                },
                            }),
                        }}
                        className='flex flex-wrap gap-4 justify-center items-center will-change-transform max-w-[1100px]'
                    >
                        {skillTabs[currentTab].skills.map((skill) => (
                            <motion.li
                                key={skill.name}
                                custom={direction}
                                variants={itemVariants}
                                onClick={() =>
                                    setSelected({
                                        ...skill,
                                        index: skillTabs[currentTab].skills.indexOf(skill),
                                    })
                                }
                                className='flex flex-col items-center w-[120px] text-center'
                            >
                                <div className='w-[80px] h-[80px] flex items-center justify-center border rounded-xl bg-[var(--color-progressbar)] shadow-sm will-change-transform'>
                                    <Image
                                        src={skill.img}
                                        alt={skill.name}
                                        width={60}
                                        height={60}
                                        className='object-contain'
                                    />
                                </div>
                                <h4 className='mt-3 text-sm font-medium'>{skill.name}</h4>
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </div>

            <div className='text-center mb-10'>
                <div className='inline-flex border-t-4 border-gray-700 pt-6 gap-6 flex-wrap justify-center'>
                    {skillTabs.map((tab, i) => (
                        <button
                            key={tab.name}
                            onClick={() => handleTabClick(i)}
                            disabled={isAnimating}
                            className={`uppercase tracking-widest text-sm px-3 py-2 relative transition ${
                                i === currentTab
                                    ? "text-[var(--color-text)] font-bold"
                                    : "text-gray-400 hover:text-[var(--color-text)]"
                            }`}
                        >
                            {tab.name}
                            {i === currentTab && (
                                <>
                                    <span className='absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-700' />
                                    <span className='absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-400' />
                                </>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            {/* Modal (zoom from card) */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            layoutId={selected.name} // <-- магія з'єднання
                            onClick={(e) => e.stopPropagation()}
                            className='bg-white text-black rounded-2xl shadow-2xl p-8 max-w-sm text-center relative'
                        >
                            <button
                                onClick={() => setSelected(null)}
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

                            {/* ⬅️➡️ Навігація між скілами */}
                            <div className='flex justify-between mt-6'>
                                <button
                                    onClick={() => {
                                        const list = skillTabs[currentTab].skills
                                        const newIndex =
                                            (selected.index - 1 + list.length) % list.length
                                        setSelected({ ...list[newIndex], index: newIndex })
                                    }}
                                    className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300'
                                >
                                    ← Prev
                                </button>

                                <button
                                    onClick={() => {
                                        const list = skillTabs[currentTab].skills
                                        const newIndex = (selected.index + 1) % list.length
                                        setSelected({ ...list[newIndex], index: newIndex })
                                    }}
                                    className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300'
                                >
                                    Next →
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
