"use client"

import { usePathname } from "next/navigation"
import { usePageTransition } from "@/contexts/PageTransitionContext"
import PageTransition from "@/components/PageTransition/PageTransition"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { isAnimating, isExiting, shouldHideContent } = usePageTransition()
    const pathname = usePathname()

    // Hide content if exiting or if we should hide content (during transition)
    const isContentHidden = isExiting || shouldHideContent

    return (
        <>
            <div 
                key={pathname} 
                className={isAnimating ? "page-is-changing" : ""}
                style={{
                    // Hide content during exit animation to prevent new content from showing
                    visibility: isContentHidden ? 'hidden' : 'visible',
                    opacity: isContentHidden ? 0 : 1,
                    pointerEvents: isContentHidden ? 'none' : 'auto',
                    transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
                }}
            >
                {children}
            </div>
            <PageTransition isAnimating={isAnimating} />
        </>
    )
}
