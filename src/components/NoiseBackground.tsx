"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function NoiseBackground() {
    const { resolvedTheme } = useTheme()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        document.body.classList.add("has-noise")
        const timer = setTimeout(() => setIsLoaded(true), 900) // коли прелоадер зникає
        return () => {
            clearTimeout(timer)
            document.body.classList.remove("has-noise")
        }
    }, [])

    const isDark = resolvedTheme === "dark"
    const opacity = isLoaded ? (isDark ? 0.07 : 0.04) : 0.25

    return (
        <svg
            id='noise-svg'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                filter: "invert(1)",
                opacity: 0.07,
                zIndex: 2147483647,
            }}
        >
            <filter id='noiseFilter'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='0.6'
                    numOctaves='3'
                    stitchTiles='stitch'
                ></feTurbulence>
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
    )
}
