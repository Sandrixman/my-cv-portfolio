"use client"

import { usePathname, useRouter } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Globe } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useTransition, useRef } from "react"

type LangInfo = {
    code: string
    label: string
    flag?: string
    fallback: string
}

const languageMeta: Record<string, LangInfo> = {
    en: { code: "en", label: "English", flag: "/flags/en.svg", fallback: "EN" },
    ua: { code: "ua", label: "Українська", flag: "/flags/ua.svg", fallback: "UA" },
}

export default function LanguageSelect() {
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState<LangInfo | null>(null)
    const ref = useRef<HTMLDivElement>(null)

    const languages = routing.locales.map(
        (code) =>
            languageMeta[code] || { code, label: code.toUpperCase(), fallback: code.toUpperCase() }
    )

    useEffect(() => {
        const langFromPath = languages.find((l) => pathname.startsWith(`/${l.code}`))
        if (langFromPath) setCurrent(langFromPath)
    }, [pathname])

    const changeLang = (code: string) => {
        if (!current) return
        if (code === current.code) return setOpen(false)

        const localePattern = new RegExp(`^/(${routing.locales.join("|")})`)
        const newPath = pathname.replace(localePattern, `/${code}`)
        startTransition(() => router.push(newPath))

        document.cookie = `lang=${code}; path=/; max-age=31536000`

        setCurrent(languageMeta[code])
        setOpen(false)
    }

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (open && ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [open])

    // Close dropdown on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (open) setOpen(false)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [open])

    return (
        <div ref={ref} className='relative inline-block text-left'>
            <button
                onClick={() => setOpen(!open)}
                className='flex items-center gap-2 px-3 py-2 border rounded-xl
                           hover:bg-[var(--color-bg)]
                           shadow-md hover:shadow-lg
                           transition-all duration-200'
            >
                <Globe size={16} className='opacity-80' />

                {current?.flag && (
                    <Image
                        src={current.flag}
                        alt={current.label}
                        width={18}
                        height={18}
                        className='rounded-sm'
                    />
                )}

                <span className='text-xs font-semibold'>{current?.fallback}</span>

                <svg
                    className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                    }`}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
            </button>

            {/* Dropdown */}
            <div
                className={`
                        absolute z-20 mt-2 w-full rounded-xl overflow-hidden
                        bg-white/70 dark:bg-black/40
                        shadow-xl ring-1 ring-black/5 dark:ring-white/10
                        origin-top transition-all duration-200
                        ${
                            open
                                ? "animate-fadeIn pointer-events-auto"
                                : "animate-fadeOut pointer-events-none"
                        }
                    `}
            >
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        disabled={isPending}
                        className={`
                                flex items-center gap-2 px-3 py-2 text-sm w-full text-left
                                transition-all
                                ${
                                    lang.code === current?.code
                                        ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                                        : "hover:bg-black/5 dark:hover:bg-white/10 "
                                }
                            `}
                    >
                        {lang.flag && (
                            <Image
                                src={lang.flag}
                                alt={lang.label}
                                width={18}
                                height={18}
                                className='rounded-sm'
                            />
                        )}

                        <span className='text-xs font-semibold'>{lang.fallback}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
