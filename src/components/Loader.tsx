"use client"

import { motion, AnimatePresence } from "framer-motion"

export default function Loader({ show }: { show: boolean }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key='loader'
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className='fixed inset-0 flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] z-[99999]'
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className='text-lg font-medium tracking-wide'
                    >
                        Завантаження…
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
