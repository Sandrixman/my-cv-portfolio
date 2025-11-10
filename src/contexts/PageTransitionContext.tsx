"use client"

import { createContext, useContext, useState, useEffect, useCallback, ReactNode, useRef } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionContextType {
    isAnimating: boolean
    isExiting: boolean
    shouldHideContent: boolean
    startTransition: (url: string, onComplete?: () => void) => void
    completeTransition: () => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: ReactNode }) {
    const [isAnimating, setIsAnimating] = useState(false)
    const [isExiting, setIsExiting] = useState(false)
    const [shouldHideContent, setShouldHideContent] = useState(false)
    const pathname = usePathname()
    const prevPathnameRef = useRef<string | null>(null)
    const isInitialMount = useRef(true)
    const isManualTransition = useRef(false)
    const transitionStartTimeRef = useRef<number | null>(null)
    const hideContentTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Detect pathname changes to trigger animation
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
            prevPathnameRef.current = pathname
            return
        }

        if (pathname !== prevPathnameRef.current && prevPathnameRef.current !== null) {
            if (isManualTransition.current) {
                // Manual transition - pathname changed after navigation
                // Keep content hidden until exit animation completes
                // The pathname change happens after router.push() is called
                // but we want to keep content hidden during exit animation
                
                // Clear any existing timeout
                if (hideContentTimeoutRef.current) {
                    clearTimeout(hideContentTimeoutRef.current)
                    hideContentTimeoutRef.current = null
                }
                
                // Ensure content is hidden
                setShouldHideContent(true)
                prevPathnameRef.current = pathname
                
                // Show content after exit animation completes
                // Calculate time since transition started
                if (!transitionStartTimeRef.current) {
                    // If transition start time is not set, show content immediately
                    // This shouldn't happen in normal flow, but handle it gracefully
                    setShouldHideContent(false)
                } else {
                    const timeSinceStart = Date.now() - transitionStartTimeRef.current
                    
                    // If transition started more than 400ms ago, show content immediately
                    // Otherwise, wait for the remaining time
                    if (timeSinceStart >= 400) {
                        // Transition already completed, show content immediately
                        setShouldHideContent(false)
                    } else {
                        // Wait for remaining time
                        const remainingTime = 400 - timeSinceStart
                        hideContentTimeoutRef.current = setTimeout(() => {
                            setShouldHideContent(false)
                            hideContentTimeoutRef.current = null
                        }, remainingTime)
                    }
                }
                
                // Cleanup function to clear timeout if pathname changes again
                return () => {
                    if (hideContentTimeoutRef.current) {
                        clearTimeout(hideContentTimeoutRef.current)
                        hideContentTimeoutRef.current = null
                    }
                }
            }

            // Automatic pathname change (e.g., browser back/forward)
            setIsAnimating(true)

            const timer = setTimeout(() => {
                setIsAnimating(false)
            }, 200) // Total animation duration

            return () => clearTimeout(timer)
        }
        prevPathnameRef.current = pathname
    }, [pathname])

    const startTransition = useCallback((url: string, onComplete?: () => void) => {
        if (isAnimating) return

        // Clear any existing timeout
        if (hideContentTimeoutRef.current) {
            clearTimeout(hideContentTimeoutRef.current)
            hideContentTimeoutRef.current = null
        }

        isManualTransition.current = true
        setIsAnimating(true)
        setIsExiting(true)
        setShouldHideContent(true)
        
        // Store transition start time for calculating remaining time
        transitionStartTimeRef.current = Date.now()

        // After exit animation completes, navigate and show new content
        // The useEffect will handle showing content when pathname changes
        setTimeout(() => {
            setIsExiting(false)
            if (onComplete) {
                onComplete()
            }
            // Complete transition after enter animation
            setTimeout(() => {
                setIsAnimating(false)
                isManualTransition.current = false
                transitionStartTimeRef.current = null
                // Ensure shouldHideContent is reset
                if (hideContentTimeoutRef.current) {
                    clearTimeout(hideContentTimeoutRef.current)
                    hideContentTimeoutRef.current = null
                }
                setShouldHideContent(false)
            }, 800) // Enter animation duration
        }, 400) // Exit animation duration
    }, [isAnimating])

    const completeTransition = useCallback(() => {
        setIsAnimating(false)
        setIsExiting(false)
        setShouldHideContent(false)
        isManualTransition.current = false
        transitionStartTimeRef.current = null
        if (hideContentTimeoutRef.current) {
            clearTimeout(hideContentTimeoutRef.current)
            hideContentTimeoutRef.current = null
        }
    }, [])

    return (
        <PageTransitionContext.Provider
            value={{
                isAnimating,
                isExiting,
                shouldHideContent,
                startTransition,
                completeTransition,
            }}
        >
            {children}
        </PageTransitionContext.Provider>
    )
}

export function usePageTransition() {
    const context = useContext(PageTransitionContext)
    if (context === undefined) {
        throw new Error("usePageTransition must be used within a PageTransitionProvider")
    }
    return context
}

