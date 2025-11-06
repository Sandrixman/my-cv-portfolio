"use client"

import { usePathname, useRouter } from "next/navigation"
import { useTransition, useState, useEffect } from "react"
import { routing } from "@/i18n/routing"
import { Globe } from "lucide-react"
import Image from "next/image"

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

    // Build language list dynamically from routing.locales
    const languages = routing.locales.map(
        (code) =>
            languageMeta[code] || { code, label: code.toUpperCase(), fallback: code.toUpperCase() }
    )

    // Detect current language based on URL path
    useEffect(() => {
        const langFromPath = languages.find((l) => pathname.startsWith(`/${l.code}`))
        if (langFromPath) setCurrent(langFromPath)
    }, [pathname])

    // Change language and update path + cookie
    const changeLang = (code: string) => {
        if (!current) return
        if (code === current.code) return setOpen(false)

        // Replace current locale prefix in the URL with the new one
        const localePattern = new RegExp(`^/(${routing.locales.join("|")})`)
        const newPath = pathname.replace(localePattern, `/${code}`)
        startTransition(() => router.push(newPath))

        // Save language preference in cookie
        document.cookie = `lang=${code}; path=/; max-age=31536000`

        setCurrent(languageMeta[code])
        setOpen(false)
    }

    return (
        <div className='relative inline-block text-left'>
            <button
                onClick={() => setOpen(!open)}
                className='flex items-center gap-2 px-3 py-2 border rounded-xl bg-[var(--color-bg-alt)] hover:bg-[var(--color-bg)] transition-colors duration-200'
            >
                <Globe size={16} className='opacity-80' />
                {current?.flag ? (
                    <Image
                        src={current.flag}
                        alt={current.label}
                        width={18}
                        height={18}
                        className='rounded-sm'
                        onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                ) : (
                    <span className='text-xs font-semibold'>{current?.fallback}</span>
                )}
                {/* Fallback abbreviation instead of label */}
                <span className='text-xs font-semibold'>{current?.fallback}</span>
                <svg
                    className={`w-3 h-3 ml-1 transition-transform ${open ? "rotate-180" : ""}`}
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                </svg>
            </button>

            {open && (
                <div className='absolute z-20 mt-2 w-full bg-[var(--color-bg-alt)] border rounded-xl shadow-lg overflow-hidden animate-fadeIn'>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLang(lang.code)}
                            disabled={isPending}
                            className={`flex items-center gap-2 px-3 py-2 text-sm w-full text-left transition-colors ${
                                lang.code === current?.code
                                    ? "bg-[var(--color-accent)] text-white"
                                    : "hover:bg-[var(--color-bg)]"
                            }`}
                        >
                            {lang.flag ? (
                                <Image
                                    src={lang.flag}
                                    alt={lang.label}
                                    width={18}
                                    height={18}
                                    className='rounded-sm'
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                            ) : (
                                <span className='text-xs font-semibold'>{lang.fallback}</span>
                            )}
                            <span className='text-xs font-semibold'>{lang.fallback}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
