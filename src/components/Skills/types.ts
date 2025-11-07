import { Dispatch, SetStateAction } from "react"

export type Skill = {
    name: string
    img: string
    description?: string
    link?: string
    index?: number
    rect?: DOMRect
}

export type SkillsTab = {
    name: string
    color: string
    skills: Skill[]
}

export type Direction = "left" | "right"

export type setState<T> = Dispatch<SetStateAction<T>>
