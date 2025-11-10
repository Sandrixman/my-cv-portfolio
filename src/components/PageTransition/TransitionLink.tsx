"use client"

import { Link as NextIntlLink, useRouter } from "@/i18n/navigation"
import { usePageTransition } from "@/contexts/PageTransitionContext"
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
    const router = useRouter()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Only trigger transition for internal links
        if (href.startsWith("/") && !href.startsWith("//")) {
            e.preventDefault()
            startTransition(href, () => {
                router.push(href)
            })
        }

        if (onClick) {
            onClick(e)
        }
    }

    return (
        <NextIntlLink href={href} className={className} onClick={handleClick} {...props}>
            {children}
        </NextIntlLink>
    )
}
