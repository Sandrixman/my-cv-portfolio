"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { usePageTransition } from "@/contexts/PageTransitionContext"
import PageTransition from "@/components/PageTransition/PageTransition"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { isAnimating, isExiting, completeTransition } = usePageTransition()
    const pathname = usePathname()

    useEffect(() => {
        // New page mounted → complete transition
        completeTransition()
    }, [pathname, completeTransition])

    return (
        <>
            <motion.div
                key={pathname}
                style={{
                    visibility: isExiting ? "hidden" : "visible",
                    opacity: isExiting ? 0 : 1,
                    transition: "opacity .3s ease",
                }}
            >
                {children}
            </motion.div>

            <PageTransition isAnimating={isAnimating} />
        </>
    )
}
