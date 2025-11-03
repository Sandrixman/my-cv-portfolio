import { NextResponse } from "next/server"

export async function GET() {
    const cv = {
        name: "Oleksander Novak",
        role: "Front-End / Bubble Developer",
        skills: ["React", "Next.js", "Bubble", "TypeScript", "GSAP", "Tailwind"],
        contact: { email: "you@example.com", linkedin: "https://linkedin.com/in/oleksandernovak" },
    }
    return NextResponse.json(cv)
}
