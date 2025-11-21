export interface ExperienceItem {
    id: string
    type: "work" | "education"
    titleKey: string
    companyKey: string
    periodKey: string
    descriptionKey: string
}

export const experiences: ExperienceItem[] = [
    {
        id: "exp1",
        type: "work",
        titleKey: "work1.title",
        companyKey: "work1.company",
        periodKey: "work1.period",
        descriptionKey: "work1.description",
    },
    {
        id: "exp2",
        type: "work",
        titleKey: "work2.title",
        companyKey: "work2.company",
        periodKey: "work2.period",
        descriptionKey: "work2.description",
    },
    {
        id: "edu1",
        type: "education",
        titleKey: "education1.title",
        companyKey: "education1.institution",
        periodKey: "education1.period",
        descriptionKey: "education1.description",
    },
    {
        id: "exp3",
        type: "work",
        titleKey: "work3.title",
        companyKey: "work3.company",
        periodKey: "work3.period",
        descriptionKey: "work3.description",
    },
]
