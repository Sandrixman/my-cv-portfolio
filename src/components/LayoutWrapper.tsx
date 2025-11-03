"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Header from "@/components/Header"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [animateOut, setAnimateOut] = useState(false)

    useEffect(() => {
        // Unlock scroll after hydration
        document.documentElement.classList.remove("overflow-hidden")
        document.body.classList.remove("overflow-hidden")

        setMounted(true)

        setAnimateOut(true)
    }, [])

    const themeProps = mounted ? { "data-theme": resolvedTheme } : {}

    return (
        <div
            {...themeProps}
            className='relative min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500'
        >
            {/* --- MAIN CONTENT --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: mounted ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className={mounted ? "pointer-events-auto" : "pointer-events-none"}
            >
                <Header />
                <main className='pt-[56px]'>{children}</main>
            </motion.div>

            {/* --- BRAND PRELOADER --- */}

            <motion.div
                className='fixed inset-0 flex items-center justify-center z-[9999]'
                style={{
                    background: "var(--color-bg)",
                    fontWeight: 700,
                    fontSize: "4rem",
                    letterSpacing: "0.04em",
                    perspective: "900px",
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
                initial={{ scale: 1, opacity: 1, z: 0 }}
                animate={
                    animateOut
                        ? { scale: 12, opacity: [1, 1, 0.8, 0.5, 0], z: 900, rotateX: -20 }
                        : { scale: 1, opacity: 1, z: 0, rotateX: 0 }
                }
                transition={{ duration: 1, ease: [0.5, 0.4, 0.2, 1] }}
            >
                <motion.span
                    className='logo-gradient tracking-wide whitespace-nowrap text-center'
                    style={{
                        transformOrigin: "center center",
                        display: "inline-block",
                    }}
                    initial={{
                        scale: 1,
                        opacity: 1,
                        z: 0,
                        rotateX: 0,
                    }}
                    animate={{
                        scale: 12,
                        z: 900,
                        opacity: [1, 1, 0.8, 0.5, 0],
                        rotateX: -20,
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                >
                    Oleksandr&nbsp;Novak <br />
                    Loading
                </motion.span>
            </motion.div>
        </div>
    )
}
