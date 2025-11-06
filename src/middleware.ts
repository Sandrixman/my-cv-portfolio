import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Create next-intl middleware instance
const nextIntlMiddleware = createMiddleware(routing)

/**
 * Dynamically infers all locale codes directly from routing.locales.
 * Ensures TypeScript automatically updates types when you add new locales.
 */
const locales = routing.locales as readonly string[]
type Locale = (typeof locales)[number]

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const defaultLocale = routing.defaultLocale as Locale

    // If current path already includes a locale prefix — skip redirect
    const hasLocale = locales.some((loc) => pathname.startsWith(`/${loc}`))
    if (hasLocale) return nextIntlMiddleware(req)

    // Try to read the locale from cookie
    const cookieLang = req.cookies.get("lang")?.value

    // Type guard: checks if string is a supported locale
    const isValidLocale = (lang: unknown): lang is Locale =>
        typeof lang === "string" && locales.includes(lang)

    // Determine which locale to use:
    // 1. Cookie
    // 2. Browser language (Accept-Language)
    // 3. Default locale
    const targetLocale: Locale =
        (cookieLang && isValidLocale(cookieLang) && cookieLang) ||
        (() => {
            const acceptLang = req.headers.get("accept-language") || ""
            const browserLang = acceptLang.split(",")[0].split("-")[0]
            return isValidLocale(browserLang) ? browserLang : defaultLocale
        })()

    // Build redirect URL with detected locale
    const redirectUrl = new URL(`/${targetLocale}${pathname}`, req.url)
    const res = NextResponse.redirect(redirectUrl)

    // Persist selected locale for next visits
    res.cookies.set("lang", targetLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    return res
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
}
