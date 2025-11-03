"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export function useLenis(enable = true) {
    useEffect(() => {
        if (!enable) return

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.1,
            orientation: "vertical",
            gestureOrientation: "vertical",
        })

        // 👇 making Lenis global
        window.lenis = lenis

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
            delete window.lenis
        }
    }, [enable])
}
