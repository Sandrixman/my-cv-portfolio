import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { getMessages } from "next-intl/server"

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    if (!hasLocale(routing.locales, locale)) notFound()

    const messages = await getMessages({ locale })

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
        </NextIntlClientProvider>
    )
}
