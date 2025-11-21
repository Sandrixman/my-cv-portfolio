import { SkillsTab } from "./types"

export const skillData: SkillsTab[] = [
    {
        name: "Frontend",
        color: "#38bdf8",
        skills: [
            { name: "HTML5", img: "/icons/html5.svg" },
            { name: "CSS3", img: "/icons/css3.svg" },
            { name: "SCSS / SASS", img: "/icons/sass.svg" },
            { name: "JavaScript", img: "/icons/js.svg" },
            { name: "TypeScript", img: "/icons/ts.svg" },
            { name: "React", img: "/icons/react.svg" },
            { name: "Next.js", img: "/icons/nextjs.webp" },
            { name: "Redux Toolkit", img: "/icons/redux.svg" },
        ],
    },
    {
        name: "UI & Animation",
        color: "#ec4899",
        skills: [
            { name: "Tailwind CSS", img: "/icons/tailwind.svg" },
            { name: "Framer Motion", img: "/icons/motion.png" },
            { name: "GSAP", img: "/icons/gsap.png" },
            { name: "Highway", img: "/icons/highway.png" },
            { name: "Lenis", img: "/icons/lenis.webp" },
            { name: "Three.js", img: "/icons/three-js.svg" },
            { name: "Figma", img: "/icons/figma.svg" },
        ],
    },
    {
        name: "Backend & Tools",
        color: "#22c55e",
        skills: [
            { name: "Node.js", img: "/icons/nodejs.svg" },
            { name: "Express.js", img: "/icons/express.png" },
            { name: "REST API", img: "/icons/api.png" },
            { name: "MongoDB", img: "/icons/mongodb.svg" },
            { name: "Stripe API", img: "/icons/stripe.svg" },
            { name: "GitHub", img: "/icons/github.svg" },
            { name: "Webpack", img: "/icons/webpack.svg" },
            { name: "Gulp", img: "/icons/gulp.svg" },
            { name: "Postman", img: "/icons/postman.svg" },
        ],
    },
    {
        name: "No-Code & AI",
        color: "#a855f7",
        skills: [
            { name: "Bubble.io", img: "/icons/bubble.png" },
            { name: "AI LLM", img: "/icons/ai-llm.png", description: "ChatGPT, Claude, etc." },
            { name: "AI Code Assistants", img: "/icons/ai-assist.png", description: "Cursor, Antigravity, etc." },
        ],
    },
    {
        name: "Learning",
        color: "#64748b",
        skills: [
            { name: "React Native", img: "/icons/react-native.svg" },
            { name: "Docker", img: "/icons/docker.svg" },
            { name: "WebSockets / Socket.io", img: "/icons/websocket.png" },
            { name: "Payload CMS", img: "/icons/payload-cms.jpg" },
        ],
    },
]
