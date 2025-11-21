"use client"

import { useTranslations } from "next-intl"
import HeroProfile from "./HeroProfile"
import HeroContent from "./HeroContent"

export default function Hero() {
    const t = useTranslations("Hero")

    return (
        <section
            id='hero'
            data-label={t("label")}
            className='max-w-full m-0 relative flex flex-col md:flex-row overflow-hidden px-0 pt-0'
        >
            <HeroProfile />
            <HeroContent />
        </section>
    )
}
