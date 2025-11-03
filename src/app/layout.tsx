import "../styles/globals.css"
import { Sora } from "next/font/google"
import ThemeProvider from "@/providers/ThemeProvider"
import NoiseBackground from "@/components/NoiseBackground"

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sora",
})

export const metadata = {
    title: "Oleksandr Novak — Portfolio",
    description: "Front-End / Bubble Developer Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={sora.variable} suppressHydrationWarning>
            <head></head>
            <body
                suppressHydrationWarning
                className='overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500'
            >
                <ThemeProvider>
                    {children}
                    <NoiseBackground />
                </ThemeProvider>
            </body>
        </html>
    )
}
