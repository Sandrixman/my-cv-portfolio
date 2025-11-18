"use client"

import { Link as NextIntlLink } from "@/i18n/navigation"
import { usePageTransition } from "@/contexts/PageTransitionContext"
import { usePathname } from "next/navigation"
import { ReactNode, MouseEvent } from "react"

type TransitionLinkProps = {
    href: string
    children: ReactNode
    className?: string
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
    [key: string]: any
}

export default function TransitionLink({
    href,
    children,
    className,
    onClick,
    ...props
}: TransitionLinkProps) {
    const { startTransition } = usePageTransition()
    const pathname = usePathname()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith("/") && !href.startsWith("//")) {
            e.preventDefault()

            // Save scroll position before leaving
            const y = (window as any).lenis?.scroll ?? window.scrollY
            sessionStorage.setItem(`scroll:${pathname}`, String(y))

            startTransition(href) // 👉 ONLY this
            onClick?.(e)
            return
        }

        onClick?.(e)
    }

    return (
        <NextIntlLink href={href} className={className} onClick={handleClick} {...props}>
            {children}
        </NextIntlLink>
    )
}
