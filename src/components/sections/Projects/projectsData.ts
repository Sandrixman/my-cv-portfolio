type Project = {
    id: number
    slug: string
    title: string
    category: string
    image: string
    description: string
    details: string
    url: string
    giturl?: string
    adminurl?: string
}

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "devix-digital",
        title: "Devix Digital",
        category: "layout",
        image: "/images/devix-digital.jpg",
        description: "Вебсайт агенції",
        details: "Сайт компанії, в якій я працюю. Розробкою займався одноосібно.",
        url: "http://3288440.prestode.web.hosting-test.net/",
        giturl: "private",
    },
    {
        id: 2,
        slug: "fortunes-smile",
        title: "Fortune's Smile",
        category: "layout",
        image: "/images/fortunes-smile.jpg",
        description: "Сайт готелю",
        details:
            "Мій перший комерційний проєкт - під час навчання. Розробка з нуля. Також була реалізована адмін-панель для керування контентом сайту.",
        url: "https://smilef.netlify.app/",
        giturl: "https://github.com/Sandrixman/smilef.com.ua",
        adminurl: "https://github.com/Sandrixman/smilef-admin",
    },
    {
        id: 3,
        slug: "baneservice",
        title: "BaneService",
        category: "layout",
        image: "/images/baneservice.jpg",
        description: "Лендиинг для сервісної компанії",
        details: "Верстка лендингу по макету дизайнера.",
        url: "sandrixman.github.io/landing-page/",
        giturl: "https://github.com/Sandrixman/landing-page",
    },
    {
        id: 4,
        slug: "owltop",
        title: "OWLtop",
        category: "React-Next",
        image: "/images/owltop.jpg",
        description: "Навчальний проєкт на Next.js",
        details:
            "Сайт із навчальними курсами, зроблений на Next.js з використанням TypeScript та базою даних.",
        url: "https://first-next-js-project-rho-ten.vercel.app/",
        giturl: "https://github.com/Sandrixman/first-Next.js-project",
    },
    {
        id: 5,
        slug: "rent-cars",
        title: "Rent Cars",
        category: "React-Next",
        image: "/images/rent-cars.jpg",
        description: "Сайт з оренди авто",
        details:
            "Навчальний проєкт на React з інтеграцією власного API, тому при завантажені потрібно зачекати поки сервер вийде зі сплячого режиму (билько 1хв).",
        url: "https://sandrixman.github.io/rent-cars/",
        giturl: "https://github.com/Sandrixman/rent-cars",
    },
    {
        id: 6,
        slug: "codeF",
        title: "Code F",
        category: "Bubble",
        image: "/images/code-f.jpg",
        description: "Сайт для пошуку інфлуенсерів",
        details: "Комерційний проект, перебуває в стадії розробки на платформі Bubble.io.",
        url: "https://code-f-project.bubbleapps.io/version-test",
    },
    {
        id: 7,
        slug: "totaltrend",
        title: "TotalTrend",
        category: "Bubble",
        image: "/images/totaltrend.jpg",
        description: "E-commerce сайт на Bubble.io",
        details: "Навчальний сайт-магазин, зроблений на платформі Bubble.io.",
        url: "https://totaltrend-23106.bubbleapps.io/version-test",
    },
]
