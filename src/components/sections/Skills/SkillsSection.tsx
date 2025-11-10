"use client"
import { useTranslations } from "next-intl"
import SkillGrid from "./SkillsGrid"
import SkillModal from "./SkillModal"
import SkillTabs from "./SkillTabs"
import { SkillsProvider } from "./SkillsContext"

export default function SkillsSection() {
    const t = useTranslations("Skills")

    return (
        <section id='skills' data-label={t("label")} className='py-20 text-center'>
            <h2 className='text-3xl font-semibold mb-6'>My Skills</h2>
            <SkillsProvider>
                <SkillGrid />
                <SkillTabs />
                <SkillModal />
            </SkillsProvider>
        </section>
    )
}
