import { ReactNode } from "react"

export interface Achievement {
    id: string
    icon: ReactNode
    labelKey: string
    valueKey: string
}

export const achievements: Achievement[] = [
    {
        id: "projects",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
            >
                <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
                <line x1='12' y1='22.08' x2='12' y2='12'></line>
            </svg>
        ),
        labelKey: "achievements.projects.label",
        valueKey: "achievements.projects.value",
    },
    {
        id: "experience",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
            >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
            </svg>
        ),
        labelKey: "achievements.experience.label",
        valueKey: "achievements.experience.value",
    },
    {
        id: "technologies",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
            >
                <polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
                <polyline points='2 17 12 22 22 17'></polyline>
                <polyline points='2 12 12 17 22 12'></polyline>
            </svg>
        ),
        labelKey: "achievements.technologies.label",
        valueKey: "achievements.technologies.value",
    },
    {
        id: "clients",
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
            >
                <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                <circle cx='9' cy='7' r='4'></circle>
                <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
            </svg>
        ),
        labelKey: "achievements.clients.label",
        valueKey: "achievements.clients.value",
    },
]
