"use client"

import { createPortal } from "react-dom"
import { ReactNode, useEffect, useState } from "react"

export default function Portal({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false)
    const [container, setContainer] = useState<HTMLElement | null>(null)

    useEffect(() => {
        setMounted(true)
        setContainer(document.body)
    }, [])

    if (!mounted || !container) return null
    return createPortal(children, container)
}
