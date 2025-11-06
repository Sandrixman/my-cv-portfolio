"use client"

import React from "react"

export interface ErrorComponentProps {
    error: Error
    reset: () => void
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
    return (
        <div className='pt-16 h-[100vh] flex items-center justify-center'>
            <p>{`Something went wrong on the top level. ${error.message}`}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}
