"use client"

import { motion, AnimatePresence } from "framer-motion"
import { scrollToSection } from "@/utils/scrollToSection"
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher"
import ThemeToggle2 from "@/components/ThemeToggle2/ThemeToggle2"

export default function MobileMenu({
    open,
    close,
    links,
}: {
    open: boolean
    close: () => void
    links: { id: string; label: string }[]
}) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 bg-black z-[100]'
                        onClick={close}
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className='fixed top-[56px] right-0 h-[calc(100vh-56px)] w-[80%]
                            z-[101] border-l border-[var(--color-border)]
                            bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(20,20,20,0.6)]
                            backdrop-blur-md
                            flex flex-col
                            p-8
                            shadow-[0_0_30px_rgba(0,0,0,0.2)]'
                    >
                        <div className='flex items-center justify-between w-full'>
                            <LangSwitcher />
                            <ThemeToggle2 />
                        </div>

                        <div className='flex flex-col items-center justify-center gap-8 flex-1'>
                            {links.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        scrollToSection(link.id, 0)
                                        close()
                                    }}
                                    className='text-[1.8rem] text-[var(--color-text-muted)]
                                        hover:text-[var(--color-accent)]
                                        transition-colors duration-200 font-medium'
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
