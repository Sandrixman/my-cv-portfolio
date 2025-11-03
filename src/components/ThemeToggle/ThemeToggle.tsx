"use client"

import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Синхронізація після гідрації
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
        <button
            className={`switch ${isDark ? "checked" : ""}`}
            onClick={handleToggle}
            aria-label='Toggle theme'
        >
            <div className='bulb'>
                <span className='bulb-center'></span>
                <span className='reflections'>
                    <span></span>
                </span>
                <span className='sparks'>
                    <i className='spark1'></i>
                    <i className='spark2'></i>
                    <i className='spark3'></i>
                    <i className='spark4'></i>
                </span>
            </div>
        </button>
    )
}
