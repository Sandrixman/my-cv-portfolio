"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLenis } from "@/hooks/useLenis"
import BrandPreloader from "@/components/BrandPreloader/BrandPreloader"
import Header from "@/components/sections/Header/Header"
import VerticalNav from "./VerticalNav"
import ClientLayout from "@/app/[locale]/ClientLayout"
import { PageTransitionProvider } from "@/contexts/PageTransitionContext"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [animateOut, setAnimateOut] = useState(false)

    useLenis(true)

    useEffect(() => {
        document.documentElement.classList.remove("overflow-hidden")
        document.body.classList.remove("overflow-hidden")
        setMounted(true)
        setAnimateOut(true)
    }, [])

    const themeProps = mounted ? { "data-theme": resolvedTheme } : {}

    return (
        <PageTransitionProvider>
            <div {...themeProps} className='relative min-h-screen overflow-hidden'>
                {/* --- MAIN CONTENT --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mounted ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className={mounted ? "pointer-events-auto" : "pointer-events-none"}
                >
                    <Header />
                    <VerticalNav />

                    <ClientLayout>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {children}
                        </motion.div>
                    </ClientLayout>
                </motion.div>

                {/* --- BRAND PRELOADER --- */}
                <BrandPreloader />
            </div>
        </PageTransitionProvider>
    )
}
