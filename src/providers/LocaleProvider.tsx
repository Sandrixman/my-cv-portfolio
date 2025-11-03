"use client"

import { NextIntlClientProvider } from "next-intl"

type LocaleProviderProps = {
    locale: string
    messages: Record<string, string>
    children: React.ReactNode
}

export function LocaleProvider({ locale, messages, children }: LocaleProviderProps) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
