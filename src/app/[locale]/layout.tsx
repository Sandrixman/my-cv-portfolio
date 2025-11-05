import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { getMessages, getTranslations } from "next-intl/server"
import { ClientLangSetter } from "./ClientLangSetter"

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    if (!hasLocale(routing.locales, locale)) notFound()

    const t = await getTranslations({ locale, namespace: "Meta" })

    return {
        title: t("title"),
        description: t("description"),
        openGraph: {
            title: t("og_title"),
            description: t("og_description"),
            locale,
            siteName: "Oleksander Novak",
            type: "website",
        },
    }
}

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
        <>
            <ClientLangSetter locale={locale} />

            <NextIntlClientProvider messages={messages} locale={locale}>
                {children}
            </NextIntlClientProvider>
        </>
    )
}
