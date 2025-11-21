type Project = {
    id: number
    slug: string
    titleKey: string
    category: string
    image: string
    descriptionKey: string
    detailsKey: string
    url: string
    giturl?: string
    adminurl?: string
    tech: string[]
}

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "devix-digital",
        titleKey: "Projects.projects.devix-digital.title",
        category: "layout",
        image: "/images/devix-digital.jpg",
        descriptionKey: "Projects.projects.devix-digital.description",
        detailsKey: "Projects.projects.devix-digital.details",
        url: "http://3288440.prestode.web.hosting-test.net/",
        giturl: "private",
        tech: ["HTML", "SCSS", "JavaScript", "GSAP", "Lenis"],
    },
    {
        id: 2,
        slug: "fortunes-smile",
        titleKey: "Projects.projects.fortunes-smile.title",
        category: "layout",
        image: "/images/fortunes-smile.jpg",
        descriptionKey: "Projects.projects.fortunes-smile.description",
        detailsKey: "Projects.projects.fortunes-smile.details",
        url: "https://smilef.netlify.app/",
        giturl: "https://github.com/Sandrixman/smilef.com.ua",
        adminurl: "https://github.com/Sandrixman/smilef-admin",
        tech: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
        id: 3,
        slug: "baneservice",
        titleKey: "Projects.projects.baneservice.title",
        category: "layout",
        image: "/images/baneservice.jpg",
        descriptionKey: "Projects.projects.baneservice.description",
        detailsKey: "Projects.projects.baneservice.details",
        url: "sandrixman.github.io/landing-page/",
        giturl: "https://github.com/Sandrixman/landing-page",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 4,
        slug: "owltop",
        titleKey: "Projects.projects.owltop.title",
        category: "React-Next",
        image: "/images/owltop.jpg",
        descriptionKey: "Projects.projects.owltop.description",
        detailsKey: "Projects.projects.owltop.details",
        url: "https://first-next-js-project-rho-ten.vercel.app/",
        giturl: "https://github.com/Sandrixman/first-Next.js-project",
        tech: ["Next.js", "TypeScript", "Framer-motion", "MongoDB"],
    },
    {
        id: 5,
        slug: "rent-cars",
        titleKey: "Projects.projects.rent-cars.title",
        category: "React-Next",
        image: "/images/rent-cars.jpg",
        descriptionKey: "Projects.projects.rent-cars.description",
        detailsKey: "Projects.projects.rent-cars.details",
        url: "https://sandrixman.github.io/rent-cars/",
        giturl: "https://github.com/Sandrixman/rent-cars",
        tech: ["React", "JavaScript", "CSS", "REST API"],
    },
    {
        id: 6,
        slug: "codeF",
        titleKey: "Projects.projects.codeF.title",
        category: "Bubble",
        image: "/images/code-f.jpg",
        descriptionKey: "Projects.projects.codeF.description",
        detailsKey: "Projects.projects.codeF.details",
        url: "https://code-f-project.bubbleapps.io/version-test",
        tech: ["Bubble.io", "JavaScript"],
    },
    {
        id: 7,
        slug: "totaltrend",
        titleKey: "Projects.projects.totaltrend.title",
        category: "Bubble",
        image: "/images/totaltrend.jpg",
        descriptionKey: "Projects.projects.totaltrend.description",
        detailsKey: "Projects.projects.totaltrend.details",
        url: "https://totaltrend-23106.bubbleapps.io/version-test",
        tech: ["Bubble.io", "JavaScript", "Stripe"],
    },
]
