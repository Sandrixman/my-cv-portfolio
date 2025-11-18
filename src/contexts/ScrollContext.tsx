"use client"

import { ReactNode, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const prev = useRef(pathname)

    useEffect(() => {
        const previousPath = prev.current

        // Save scroll of page we are leaving
        const currentScroll =
            // @ts-ignore
            window.lenis?.scroll ?? window.scrollY

        sessionStorage.setItem(`scroll:${previousPath}`, String(currentScroll))

        prev.current = pathname

        // Restore scroll of page we are entering
        requestAnimationFrame(() => {
            const saved = sessionStorage.getItem(`scroll:${pathname}`)
            const target = saved ? Number(saved) : 0

            // @ts-ignore
            if (window.lenis?.scrollTo) {
                // через Lenis (інакше він з’їсть все)
                // @ts-ignore
                window.lenis.scrollTo(target, { immediate: true })
            } else {
                window.scrollTo(0, target)
            }
        })
    }, [pathname])

    return <>{children}</>
}
