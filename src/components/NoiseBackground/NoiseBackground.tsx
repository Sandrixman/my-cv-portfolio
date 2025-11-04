"use client"
import styles from "./NoiseBackground.module.css"

export default function NoiseBackground() {
    return (
        <svg className={styles.noiseSvg} xmlns='http://www.w3.org/2000/svg'>
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
