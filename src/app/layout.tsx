import "./globals.css"
import { Sora } from "next/font/google"
import { ThemeProvider } from "next-themes"
import NoiseBackground from "@/components/NoiseBackground/NoiseBackground"

const sora = Sora({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sora",
})

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html className={sora.variable} suppressHydrationWarning>
            <head />
            <body suppressHydrationWarning className='overflow-hidden'>
                <ThemeProvider attribute='class'>
                    <NoiseBackground />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
