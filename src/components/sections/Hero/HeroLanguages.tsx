"use client"

import { motion } from "framer-motion"
import { languages } from "./heroData"

export default function HeroLanguages() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className='w-full max-w-xl mx-auto text-center mb-10'
        >
            <h3 className='text-sm uppercase tracking-wide text-[var(--color-text-muted)] mb-4'>
                Languages
            </h3>

            <div className='grid grid-cols-3 gap-4'>
                {languages.map((lang, index) => (
                    <motion.div
                        key={lang.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                        className='px-4 py-3 rounded-xl backdrop-blur-lg
                            border border-[var(--color-border)]
                            bg-gradient-to-b from-[var(--color-card)]/60 to-[var(--color-card)]/40
                            shadow-[0_3px_10px_-2px_rgba(0,0,0,0.25)]
                            transition-all duration-300 select-none'
                    >
                        <div className='text-sm font-semibold text-[var(--color-text)] mb-2'>
                            {lang.label}
                        </div>
                        <div className='text-xs text-[var(--color-text-muted)]'>
                            {lang.level}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
