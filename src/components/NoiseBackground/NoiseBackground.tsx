"use client"

export default function NoiseBackground() {
    return (
        <svg
            id='noise-svg'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.05,
                pointerEvents: "none",
                zIndex: 10000,
            }}
        >
            <filter id='noiseFilter'>
                <feTurbulence
                    type='fractalNoise'
                    baseFrequency='0.5'
                    numOctaves='3'
                    stitchTiles='stitch'
                />
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
    )
}
