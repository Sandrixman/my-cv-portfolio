type Project = {
    id: number
    slug: string
    title: string
    category: string
    image: string
    description: string
    details: string
    url: string
}

export const projectsData: Project[] = [
    {
        id: 1,
        slug: "slug1",
        title: "Creative Studio",
        category: "React-Next",
        image: "/images/demo1.jpg",
        description: "Вебсайт агенції",
        details: "",
        url: "#",
    },
    {
        id: 2,
        slug: "slug2",
        title: "Portfolio v2",
        category: "React-Next",
        image: "/images/demo2.jpg",
        description: "Редизайн портфоліо",
        details: "",
        url: "#",
    },
    {
        id: 3,
        slug: "slug3",
        title: "E-Commerce UI",
        category: "layout",
        image: "/images/demo3.jpg",
        description: "Інтернет-магазин",
        details: "",
        url: "#",
    },
    {
        id: 4,
        slug: "slug4",
        title: "Landing Page",
        category: "Bubble",
        image: "/images/demo4.jpg",
        description: "Лендінг з анімацією",
        details: "",
        url: "#",
    },
    {
        id: 5,
        slug: "slug5",
        title: "UI Kit",
        category: "Bubble",
        image: "/images/demo5.jpg",
        description: "Компонентна бібліотека",
        details: "",
        url: "#",
    },
]
