"use client"

import { createContext, useContext, useState } from "react"
import type { Skill, Direction, setState } from "./types"

type SkillsContextType = {
    currentTab: number
    setCurrentTab: setState<number>
    selected: Skill | null
    setSelected: setState<Skill | null>
    direction: Direction
    setDirection: setState<Direction>
    isAnimating: boolean
    setIsAnimating: setState<boolean>
}

const SkillsContext = createContext<SkillsContextType | null>(null)

export function SkillsProvider({ children }: { children: React.ReactNode }) {
    const [currentTab, setCurrentTab] = useState(0)
    const [selected, setSelected] = useState<Skill | null>(null)
    const [direction, setDirection] = useState<Direction>("right")
    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <SkillsContext.Provider
            value={{
                currentTab,
                setCurrentTab,
                selected,
                setSelected,
                direction,
                setDirection,
                isAnimating,
                setIsAnimating,
            }}
        >
            {children}
        </SkillsContext.Provider>
    )
}

export function useSkills() {
    const ctx = useContext(SkillsContext)
    if (!ctx) throw new Error("useSkills must be used within SkillsProvider")
    return ctx
}
