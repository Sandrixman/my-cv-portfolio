"use client"

import { useTranslations } from "next-intl"
import { ExperienceItem } from "./experienceData"

interface ExperienceCardProps {
    exp: ExperienceItem
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
    const t = useTranslations("Experience")

    return (
        <div className='p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/60 to-black/40 shadow-lg hover:shadow-xl transition-all duration-300'>
            <div className='flex items-start justify-between mb-3'>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === "work"
                            ? "bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                            : "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                    }`}
                >
                    {exp.type === "work" ? t("work") : t("education")}
                </span>
            </div>
            <h3 className='text-xl font-bold text-white mb-1'>{t(exp.titleKey)}</h3>
            <p className='text-sm font-medium text-[var(--color-accent)] mb-2'>
                {t(exp.companyKey)}
            </p>
            <p className='text-xs text-white/60 mb-3'>{t(exp.periodKey)}</p>
            <p className='text-sm text-white/80 leading-relaxed'>{t(exp.descriptionKey)}</p>
        </div>
    )
}
