"use client"

import { skillData } from "./skillData"
import { useSkills } from "./SkillsContext"

export default function SkillTabs() {
    const { currentTab, setCurrentTab, setDirection } = useSkills()

    const handleTabClick = (index: number) => {
        if (index === currentTab) return
        setDirection(index > currentTab ? "right" : "left")
        setCurrentTab(index)
    }

    return (
        <div className='inline-flex border-t-4 border-gray-700 pt-6 gap-6 flex-wrap justify-center mt-10'>
            {skillData.map((tab, i) => (
                <button
                    key={tab.name}
                    onClick={() => handleTabClick(i)}
                    className={`uppercase tracking-widest text-sm px-3 py-2 relative transition ${
                        i === currentTab
                            ? "text-[var(--color-text)] font-bold"
                            : "text-gray-400 hover:text-[var(--color-text)]"
                    }`}
                >
                    {tab.name}
                    {i === currentTab && (
                        <>
                            <span className='absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-700' />
                            <span className='absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-400' />
                        </>
                    )}
                </button>
            ))}
        </div>
    )
}
