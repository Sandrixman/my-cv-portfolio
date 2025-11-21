"use client"

import { PDFDownloadLink } from "@react-pdf/renderer"
import { ResumeDocument, ResumeData } from "./ResumeDocument"
import { Download } from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { contactInfo } from "@/config/constants"
import { skillData } from "@/components/sections/Skills/skillData"
import { experiences } from "@/components/sections/Experience/experienceData"
import { projectsData } from "@/components/sections/Projects/projectsData"

export default function DownloadCVButton() {
    const [isClient, setIsClient] = useState(false)
    const tHero = useTranslations("Hero")
    const tAbout = useTranslations("About")
    const tExp = useTranslations("Experience")
    const tRoot = useTranslations() // Root translator for full keys in projectsData

    useEffect(() => {
        setIsClient(true)
    }, [])

    const resumeData: ResumeData = useMemo(
        () => ({
            personal: {
                name: "Oleksandr Novak",
                title: tHero("subtitle"),
                email: contactInfo.email,
                phone: contactInfo.phone,
                location: contactInfo.location,
                linkedin: contactInfo.linkedin,
                github: contactInfo.github,
                telegram: contactInfo.telegram,
            },
            skills: skillData.map((cat) => ({
                category: cat.name,
                items: cat.skills.map((s) => s.name),
            })),
            experienceLabel: tExp("title"),
            experience: experiences.map((exp) => ({
                title: tExp(exp.titleKey),
                company: tExp(exp.companyKey),
                period: tExp(exp.periodKey),
                description: tExp.raw(exp.descriptionKey) as string,
            })),
            projectsLabel: tRoot("Projects.title"),
            projects: projectsData.map((proj) => ({
                title: tRoot(proj.titleKey),
                tech: proj.tech.join(", "),
                description: tRoot(proj.descriptionKey),
                link: proj.url,
                giturl: proj.giturl,
            })),
            summary: tAbout("paragraph1") + " " + tAbout("paragraph2"),
        }),
        [tHero, tAbout, tExp, tRoot]
    )

    if (!isClient) {
        return (
            <button className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white/10 border border-white/10 rounded-full backdrop-blur-md opacity-50 cursor-wait'>
                <Download className='w-4 h-4' />
                <span>Loading PDF...</span>
            </button>
        )
    }

    return (
        <PDFDownloadLink
            document={<ResumeDocument data={resumeData} />}
            fileName='Oleksandr_Novak_CV.pdf'
            className='flex items-center gap-2
            px-4 py-3 text-md font-medium leading-[normal]
            text-gray-900 dark:text-white bg-black/10 hover:bg-black/20 border border-white/10 rounded-full
            transition-all hover:scale-105 active:scale-95'
        >
            {({ loading }) => (
                <>
                    <Download className='w-4 h-4' />
                    <span>{loading ? "Generating..." : "Download CV"}</span>
                </>
            )}
        </PDFDownloadLink>
    )
}
