"use client"

import { usePathname, useRouter } from "next/navigation"
import { useMemo, useState, useEffect } from "react"
import Image from "next/image"

function toggleLocaleInPath(path: string) {
    const match = path.match(/^\/(en|ua)(?=\/|$)/)
    const current = match?.[1] as "en" | "ua" | undefined
    const rest = match ? path.slice(match[0].length) || "/" : path
    const next = current === "ua" ? "en" : "ua"
    return `/${next}${rest}`
}

export default function LangSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const isUa = useMemo(() => /^\/ua(\/|$)/.test(pathname), [pathname])
    const [checked, setChecked] = useState(isUa)

    useEffect(() => setChecked(isUa), [isUa])

    const onToggle = () => {
        const newPath = toggleLocaleInPath(pathname)
        setChecked(!checked)
        router.replace(newPath)
    }

    return (
        <button
            onClick={onToggle}
            aria-label='Switch language'
            className='w-[54px] h-[26px] rounded-full relative flex items-center justify-between px-[6px] border border-[var(--color-border)] bg-transparent transition-all duration-300 hover:border-[var(--color-accent)]'
        >
            <Image
                src='/icons/ua.svg'
                alt='UA'
                width={14}
                height={14}
                className='w-[14px] h-[14px] max-w-none'
            />
            <Image
                src='/icons/en.svg'
                alt='EN'
                width={14}
                height={14}
                className='w-[14px] h-[14px] max-w-none'
            />
            <span
                className={`button transition-transform duration-300 ease-out ${
                    checked ? "translate-x-0" : "translate-x-[20px]"
                }`}
            ></span>
        </button>
    )
}
