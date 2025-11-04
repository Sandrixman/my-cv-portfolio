"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import styles from "./ThemeToggle2.module.css"

export default function ThemeToggle2() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => setMounted(true), [])

    useEffect(() => {
        if (mounted) setIsDark(resolvedTheme === "dark")
    }, [resolvedTheme, mounted])

    if (!mounted) return null

    const handleToggle = () => {
        const next = isDark ? "light" : "dark"
        setTheme(next)
        setIsDark(!isDark)
    }

    return (
        <div className='relative w-[75px] h-[24px]'>
            <div
                className={`${styles.wrapper} ${isDark ? styles.on : styles.off}`}
                onClick={handleToggle}
                role='switch'
                aria-checked={isDark}
            >
                <div className={styles.toggle}>
                    <div className={styles.detail}></div>
                    <div className={styles.detail}></div>
                    <div className={styles.detail}></div>
                </div>
            </div>
        </div>
    )
}
