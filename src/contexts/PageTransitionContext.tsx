"use client"

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
    useCallback,
    ReactNode,
} from "react"
import { usePathname, useRouter } from "next/navigation"

interface PageTransitionContextType {
    isAnimating: boolean
    isExiting: boolean
    startTransition: (href: string) => void
    completeTransition: () => void
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined)

export function PageTransitionProvider({ children }: { children: ReactNode }) {
    const [isAnimating, setIsAnimating] = useState(false)
    const [isExiting, setIsExiting] = useState(false)

    const pathname = usePathname()
    const prevPathname = useRef(pathname)
    const router = useRouter()

    const startTransition = useCallback(
        (href: string) => {
            setIsAnimating(true)
            setIsExiting(true)

            if (href !== "BACK") {
                router.push(href)
            }
        },
        [router]
    )

    const completeTransition = useCallback(() => {
        setIsAnimating(false)
        setIsExiting(false)
    }, [])

    // When pathname changes → allow entry
    useEffect(() => {
        if (pathname !== prevPathname.current) {
            prevPathname.current = pathname
            setIsExiting(false)
        }
    }, [pathname])

    return (
        <PageTransitionContext.Provider
            value={{ isAnimating, isExiting, startTransition, completeTransition }}
        >
            {children}
        </PageTransitionContext.Provider>
    )
}

export function usePageTransition() {
    const ctx = useContext(PageTransitionContext)
    if (!ctx) throw new Error("usePageTransition must be used within PageTransitionProvider")
    return ctx
}
